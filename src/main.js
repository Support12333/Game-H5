import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Dialog, Swipe, SwipeItem } from 'vant'


const app = createApp(App);

app.use(router);
app.use(Dialog)
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')