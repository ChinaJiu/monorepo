import Title from './src/Title/index.js';

const components = [
  Title,
]

// 定义 install 方法
const install = function(Vue, opt = {}) {
  // 注册所有组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 检查是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Title,
  install
};