import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'vant/lib/index.css';
import { Dialog, Swipe, SwipeItem, Form, Field, CellGroup, Toast, List, Button } from 'vant'

const app = createApp(App);

app.use(router);
app.use(Dialog)
app.use(Swipe);
app.use(SwipeItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Toast);
app.use(List);
app.use(Button);
app.use(i18n);
app.mount('#app')