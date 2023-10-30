import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Dialog, Swipe, SwipeItem, Popup, Form, Field, CellGroup } from 'vant'


const app = createApp(App);

app.use(router);
app.use(Dialog)
app.use(Swipe);
app.use(Popup)
app.use(SwipeItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')