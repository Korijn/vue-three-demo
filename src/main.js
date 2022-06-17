import { createApp } from 'vue'

import { VueThreePlugin, hello } from '@korijn/vue-three';

import App from './App.vue'

const app = createApp(App);

app.use(VueThreePlugin);

app.mount('#app');
