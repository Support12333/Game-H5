<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRoute } from "vue-router";
import { GetBanner, GetBusinessList } from '@api/home.js'

const DetailsItem = defineAsyncComponent(() => import("@components/DetailsItem.vue"))

// 获取当前路由地址对象
const route = useRoute();
//获取路由参数
const query = route.query

const list = ref([])
const banner = ref([])

//返回
const clickleft = () => {
    history.back();
}

//获取banner
const getBanner = async () => {
    const res = await GetBanner({
        place: query.id,
        hot:0
    })
    banner.value = res
}

//数据列表
const getBusinessList = async () => {
    const res = await GetBusinessList({
        joininvestmenttype: query.id,
        hot: 0,
        page: 1
    })
    list.value = res.data
}

getBanner()
getBusinessList()

</script>
<template>
    <div class="box">
        <van-nav-bar :title="query.name" left-arrow fixed v-Tracking:返回="() => clickleft()"/>
        <div class="banner"><a v-for="item in banner" :key="item.id" :href="item.link" v-Tracking:[`点击${item.title}`]><img :src="item.img" alt=""></a></div>
        <DetailsItem v-for="(item, index) in list" :key="index" :data="item" />
    </div>
</template>

<style lang="less" scoped>
.box {
    padding: 1.44rem .64rem .64rem;

    &:deep(.van-nav-bar) {
        background: #FFFFFF;

        .van-nav-bar__content {
            height: 1.84rem;

            .van-nav-bar__left {
                .van-nav-bar__arrow {
                    font-size: 0.96rem;
                    color: #000000;
                }
            }

            .van-nav-bar__title {
                font-size: .84rem;
                font-family: PingFang SC-Heavy, PingFang SC;
                font-weight: 800;
                color: #333333;
                line-height: 1.16rem;
            }

        }

        &::after {
            border: 0;
        }
    }

    .banner {
        margin-top: .8rem;

        >a {
            .size(100%, 7.4rem);

            >img {
                .size(100%, 100%);
                border-radius: .64rem;
            }
        }
    }
}
</style>