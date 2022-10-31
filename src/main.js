import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Toast, NavBar } from 'vant';
import 'vant/es/toast/style';
import { getModule } from '@utils/index'

const app = createApp(App);

app.use(router);

app.use(Toast, NavBar);

// 获取directives文件夹下的所有的指令
const directives = getModule(require.context('./directives', true, /\.js$/))
// 循环导入app中
for (const key in directives) {
    app.directive(key, directives[key])
}

app.mount('#app')
