export default {
    mounted(el, { arg, value }) {
        // console.log(el, 'el');
        // console.log(arg, 'arg');
        // console.log(value, 'value');
        el.$arg = arg
        el.$value = value
        //点击事件处理
        el.handler = (e) => {
            console.log(e);
        }
        // 绑定点击事件
        el.addEventListener('click', el.handler)
    },
    // 当传进来的值更新的时候触发
    // updated(el, { arg, value }) {
    // },
    // 指令与元素解绑的时候，移除事件绑定
    unmounted(el) {
        el.removeEventListener('click', el.handler)
    }
}
