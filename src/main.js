const App = {
  data() {
    return {
      message: 'Hello Vue',
    };
  },

  methods: {
    change() {
      console.log(this);
      this.message += '!';
    },
  },
  // 生命周期钩子。刚才犯了一个错误，不能写到method当中
  beforeCreate() {
    console.log('beforeCreate', this.message, this.$el);
  },
  created() {
    console.log('created', this.message, this.$el);
  },
  beforeMount() {
    console.log('beforeMount', this.message, this.$el);
  },
  mounted() {
    console.log('mounted', this.message, this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.message, document.querySelector('#msg').innerText);
  },
  updated() {
    console.log('updated', this.message, document.querySelector('#msg').innerText);
  },
};

Vue.createApp(App).mount('#app');