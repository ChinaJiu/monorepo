<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="wrapper">
    <h1>V3 --- {{ msg }}</h1>
    <h2>h2</h2>
  </div>
  
</template>

<style scoped>
.wrapper{
  color: red;
}
.read-the-docs {
  color: #888;
}
</style>
