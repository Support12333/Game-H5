<script setup>
import { ref, computed, watch, defineProps, defineEmits, onMounted } from "vue";
import CountryList from "@utils/country.js";

const props = defineProps({
    // 是否显示
    show: {
        type: Boolean,
        default: false,
    },
    // 父组件转递的值
    modelValue: [String, Number],
});
onMounted(() => { 
    console.log('初始');
    let array = []
    CountryList.map(item => { 
        array.push({text:item.cn,value:item.en,code:item.code})
    })
    CountryList.value = array
    console.log( CountryList.value)
})

const emit = defineEmits(["update:show", "update:modelValue"]);

// 定义一个值承接父组件传的值
const Show = ref(props.show);

// 默认选中的区号下标
const defaultIndex = computed(() => {
    return CountryList.findIndex((item) => item.code == `+${props.modelValue}`);
});

// 监听父组件的值，同步给当前组件的值
watch(
    () => props.show,
    () => {
        Show.value = props.show;
    }
);

// 监听当前组件的值，回调给父组件
watch(
    () => Show.value,
    () => {
        emit("update:show", Show.value);
    },
    {
        immediate: true,
    }
);

// 获取国家区号
const getCountryCode = (item) => {
    console.log(item);
    emit("update:modelValue", item.code.replace(/[^\d.]/g, ""));
    Show.value = false;
};
</script>

<template>
    <van-popup :overlay-style="{
        background: 'rgba(17, 17, 17, 0.62)',
    }" style="background: none" v-model:show="Show" round position="bottom">
        <van-picker :columns="CountryList" :columns-field-names="{ text: 'code' }" :default-index="defaultIndex"
            @cancel="Show = false" @confirm="getCountryCode" />
    </van-popup>
</template>
