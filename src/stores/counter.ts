import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const coladaRead = ref(0)
  const coladaWatch = ref(0)
  const tanstackRead = ref(0)
  const tanstackWatch = ref(0)

  return { coladaRead, coladaWatch, tanstackRead, tanstackWatch }
})
