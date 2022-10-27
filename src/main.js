import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Toast,NavBar } from 'vant';
import 'vant/es/toast/style';

const app = createApp(App);

app.use(router);

app.use(Toast,NavBar);

app.mount('#app')
