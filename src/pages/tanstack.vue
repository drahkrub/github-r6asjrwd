<template>
  <div>
    <h1>@tanstack/vue-query</h1>
    <div v-if="isPending">Pending...</div>
    <!-- v-else-if="model" not so nice -->
    <div v-else-if="model">
      <input v-model="model.message" />
      <button v-if="changed" @click="onSave">Save</button>
    </div>
    <div v-else>should not happen...</div>
    <br />
    readCounter: {{ counter.tanstackRead }}
    <br />
    watchCounter: {{ counter.tanstackWatch }}
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { computed, ref, watch } from 'vue'
import type { T } from '../stores/fakeExternalStorage'
import { useCounterStore } from '../stores/counter'
import { useFakeExternalStorage } from '../stores/fakeExternalStorage'

const counter = useCounterStore()
const { read, update } = useFakeExternalStorage()

const fixedKey = 'some key'

const queryClient = useQueryClient()

const { isPending, data } = useQuery({
  queryKey: [fixedKey],
  queryFn: () => {
    ++counter.tanstackRead
    return read()
  },
  staleTime: 0,
  refetchOnWindowFocus: true,
})

const { mutate } = useMutation({
  mutationFn: (arg: T) => update(arg),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: [fixedKey] }),
})

const model = ref<T>()
let orgJson: string | undefined

watch(
  () => data.value,
  () => {
    ++counter.tanstackWatch
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
