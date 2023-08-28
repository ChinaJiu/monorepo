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
    {{ url }}
    <br>
    {{ loading }}
    <WujieVue
      width="100%"
      height="100%"
      name="vite1"
      :alive="false"
      :url="url"
      :plugins="plugins"
      :sync="true"
      :beforeLoad="beforeLoad"
      :afterMount="afterMount"
      :loadError="loadError"
    ></WujieVue>

    <!-- <router-view> </router-view> -->
  </div>
</template>
<script>
// 如果子应用为 单例模式 ，改变url则可以让子应用跳转到对应子路由
// 如果子应用为 保活模式，改变url则无效，需要采用 通信 的方式对子应用路由进行跳转
// 如果子应用为 重建模式，改变 url 子应用的路由会跳转对应路由，但是在 路由同步 场景并且子应用的路由同步参数已经同步到主应用url上时则无法生效，因为改变url后会导致子应用销毁重新渲染，此时如果有同步参数则同步参数的优先级最高

import WujieVue from "wujie-vue2";
const { bus } = WujieVue

export default {
  name: 'App',
  components: {
  },
  data: () => {
    return {
      host: 'http://172.16.8.23:8000',
      loading: true,
      props: {},
      fetch: '',
      plugins: [
        {
          // 对子应用的template进行的aaa替换成bbb
          htmlLoader: (code) => {
            console.log(code);
            return code.replace('<div id="app"></div>', '<div id="app">123</div>');
          },
        }
      ]
    }
  },
  computed: {
    url () {
      return this.host + this.$route.path
    }
  },
  watch: {
    $route (value) {
      console.log(value);
      // bus.$emit("path", value.path);
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
      // bus.$emit('path', this.$route.path)
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
