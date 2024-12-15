import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type T = {
  message: string
}

export const useFakeExternalStorage = defineStore('fakeExternalStorage', () => {
 
  const externalStorage = ref<T>({ message: "some content" })
  
  const read = () => new Promise<T>((resolve) =>
    setTimeout(() => {
      resolve(JSON.parse(JSON.stringify(externalStorage.value)))
    }, 500)
  );

  const update = (arg: T) => new Promise<void>((resolve) =>
    setTimeout(() => {
      externalStorage.value = JSON.parse(JSON.stringify(arg))
      resolve()
    }, 500)
  );

  return { externalStorage, read, update }
})
