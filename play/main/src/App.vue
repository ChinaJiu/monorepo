<template>
  <div id="app">
    <router-link to="/vite1">v1</router-link>
    -
    <router-link to="/vite1/a">v1-a</router-link>
    -
    <router-link to="/vite1/b">v1-b</router-link>
    -
    <router-link to="/vite2">v2</router-link>
    <br>

    {{ $route }}
    <br>
    {{ subPath }}
    <br>
    {{ loading }}
    <WujieVue
      width="100%"
      height="100%"
      name="vite1"
      :url="url"
      :sync="true"
      :props="subPath"
      :beforeLoad="beforeLoad"
      :afterMount="afterMount"
      :loadError="loadError"
    ></WujieVue>

    <!-- <router-view> </router-view> -->
  </div>
</template>

<script>
import WujieVue from "wujie-vue2";
const { bus } = WujieVue

export default {
  name: 'App',
  components: {
  },
  data: () => {
    return {
      url: 'http://172.16.8.23:8000/',
      loading: true,
      props: {},
      fetch: '',
    }
  },
  computed: {
    subPath () {
      return {
        ath: this.$route.path
      }
    }
  },
  watch: {
    $route (value) {
      console.log(value);
      bus.$emit("path", value.path);
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    beforeLoad(app) {
      console.log(11233, this.$route.path, app);
      
    },
    afterMount() {
      console.log('afterMount');
      bus.$emit('path', this.$route.path)
    },
    loadError(err) {
      console.log(err);
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
