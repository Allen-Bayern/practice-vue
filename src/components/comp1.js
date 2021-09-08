const app = Vue.createApp({});

app.component('component-a', {
  template: `
    <div>a</div>
    <component-b></component-b>
  `,
});

app.component('ComponentB', {
  template:`
    <div>b</div>
  `,
});

app.mount('#app');