<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div>
      This is a demo project comparing the behavior of
      <a
        href="https://tanstack.com/query/latest/docs/framework/vue/overview"
        target="_blank"
        rel="noopener"
        >@tanstack/vue-query</a
      >
      and
      <a href="https://pinia-colada.esm.dev/" target="_blank" rel="noopener"
        >@pinia/colada</a
      >. Try the following:
      <div>
        <ul>
          <li>switch between "tanstack" and "pinia-colada"
          </li>
          <li>switch between ("tanstack" or "pinia-colada") and "About"
          </li>
          <li>click on "tanstack" or "pinia-colada", switch to a different browser tab and return
          </li>
          <li>change the content of the input field, do NOT click on "save" and do the switching again
          </li>
        </ul>
        <br>
        Oberver the counters (and the content of the input field):
        <ul>
          <li>readCounter: shows the number of the (faked) server reads
          </li>
          <li>watchCounter: shows the number of "watcher activations"
          </li>
        </ul>
        <br>
        My current problem: The watcher in "pinia-colada" fires too often and destroys changes in the input field.
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
