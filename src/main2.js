const App = {
  data() {
    return {
      isShow: false,
    };
  },

  // 生命周期函数
  beforeCreate() {
    console.log('root before creating', this.message, this.$el);
  },
  created() {
    console.log('root created', this.message, this.$el);
  },

  beforeMount() {
    console.log('root before mounting', this.message, this.$el);
  },

  mounted() {
    console.log('root mounted', this.message, this.$el);
  },
};

// Create application
const app = Vue.createApp(App);

app.component('child', {
  template: '<div>{{ text }}</div>',
  data() {
    return {
      text: '他改变了中国'
    };
  },
  
  // 生命周期函数
  created() {
    console.log('child created');
  },
  mounted() {
    console.log('child mounted');
  },
  beforeUnmount() {
    console.log('child before unmounting');
  },
  unmounted() {
    console.log('child unmounted');
  },
});

app.mount('#app');
