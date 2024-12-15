<template>
  <div>
    <h1>@pinia/colada</h1>
    <div v-if="isPending">Pending...</div>
    <!-- v-else-if="model" not so nice -->
    <div v-else-if="model">
      <input v-model="model.message" />
      <button v-if="changed" @click="onSave">Save</button>
    </div>
    <div v-else>should not happen...</div>
    <br />
    readCounter: {{ counter.coladaRead }}
    <br />
    watchCounter: {{ counter.coladaWatch }}
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation, useQueryCache } from '@pinia/colada'
import { computed, ref, watch } from 'vue'
import type { T } from '../stores/fakeExternalStorage'
import { useCounterStore } from '../stores/counter'
import { useFakeExternalStorage } from '../stores/fakeExternalStorage'

const counter = useCounterStore()
const { read, update } = useFakeExternalStorage()

const fixedKey = 'some key'

const queryCache = useQueryCache()

const { isPending, data } = useQuery({
  key: [fixedKey],
  query: () => {
    ++counter.coladaRead
    return read()
  },
  staleTime: 0,
  refetchOnWindowFocus: true,
})

const { mutate } = useMutation({
  mutation: (arg: T) => update(arg),
  onSuccess: () => queryCache.invalidateQueries({ key: [fixedKey] }),
})

const model = ref<T>()
let orgJson: string | undefined

watch(
  () => data.value,
  () => {
    ++counter.coladaWatch
    orgJson = JSON.stringify(data.value)
    if (orgJson) {
      model.value = JSON.parse(orgJson)
    }
  },
  { immediate: true }
)

const changed = computed(() => orgJson !== JSON.stringify(model.value))

const onSave = () => {
  if (model.value) {
    mutate(model.value)
  }
}
</script>
