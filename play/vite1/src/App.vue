<script setup>
import { Title } from '@my/comv3'
import { onMounted, onUnmounted, reactive, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const question = reactive({ name : 'xx'})

const prop = window.$wujie?.props

const subPath = ref('')
// let path = reactive(prop)
const pathFn = (path) => {
  console.log('subpath', path);
  subPath.value = path
  router.push(subPath.value)
}

console.log('subonMounted');
// 子应用监听事件
window.$wujie?.bus.$on("path", pathFn);    

onBeforeMount(() => {
  
})


onUnmounted(() => {
  // 子应用取消事件监听
  window.$wujie?.bus.$off("path", pathFn);
})
</script>

<template>
  
  <router-link to="/vite1/a">v1-a</router-link> 
  ----
  <router-link to="/vite1/b">v1-b</router-link>

  <br>
  {{ subPath }}
  <br>


  <router-view></router-view>
  <Title msg="Vite1 + Vue"/>
  <input v-model="question" />
</template>

<style scoped>

</style>
