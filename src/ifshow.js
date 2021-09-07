const app = Vue.createApp({
  data() {
    return {
      isShow: true,
    };
  },
});

app.component('child', {
  props: ['title'],
  template: `<div>component {{ title }}</div>`,
  created() {
    console.log('child created', this.title);
  },
  unmounted() {
    console.log('child unmounted', this.title);
  },
});

app.mount('#app');