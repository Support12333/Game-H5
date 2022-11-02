export default {
    mounted(el, { arg, value }) {
      el.$arg = arg
      el.$value = value
      el.handler = () => {
        if (!el.$arg) return
        try {
          Tracking(el.$arg)
        } finally {
          if (Object.prototype.toString.call(el.$value) === '[object Function]') {
            el.$value()
          }
        }
      }
      // 绑定点击事件
      el.addEventListener('click', el.handler)
    },
    // 当传进来的值更新的时候触发
    updated(el, { arg, value }) {
      el.$arg = arg
      el.$value = value
    },
    // 指令与元素解绑的时候，移除事件绑定
    unmounted(el) {
      el.removeEventListener('click', el.handler)
    }
  }
  