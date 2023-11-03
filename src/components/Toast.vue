<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: true,
    },
    message: {
        type: Object,
        default: () => { }
    }
})
const isShow = ref(props.show);
</script>
<template>
    <div class="toast" v-if="isShow">{{ 123 }}</div>
</template>
<style lang="less" scoped>
.toast {
    max-width:70%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:999;
    color: #fff;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .7);
}
</style>