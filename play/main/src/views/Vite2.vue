<template>
  <div>
    <WujieVue
      width="100%"
      height="100%"
      name="vite2"
      :url="url"
      :sync="true"
      :props="props"
    ></WujieVue>
  </div>
</template>

<script>

export default {
  name: "Vite2",
  components: {
  },
  data: () => {
    return {
      url: 'http://172.16.8.232:5174/',
      props: {},
      fetch: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
