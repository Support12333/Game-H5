import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getModule } from '@utils/index'
import 'vant/es/toast/style';


const app = createApp(App);

app.use(router);

// 获取directives文件夹下的所有的指令
const directives = getModule(require.context('./directives', true, /\.js$/))
// 循环导入app中
for (const key in directives) {
    app.directive(key, directives[key])
}

app.mount('#app')
