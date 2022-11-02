<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRouter } from "vue-router";
import { GetBusinessTypeList, GetBanner, GetBusinessList } from '@api/home.js'

// 获取路由实例对象
const router = useRouter();

const DetailsItem = defineAsyncComponent(() => import("@components/DetailsItem.vue"))

const business = ref([])
const banner = ref([])
const hotbanner = ref([])
const list = ref([])

const _todetails = (value) => {
    router.push({
        path: '/details',
        query: {
            id: value.id,
            name: value.name
        }
    })
}

//获取分类列表
const getBusinessTypeList = async () => {
    const res = await GetBusinessTypeList()
    business.value = res
}

//获取首页banner
const getBanner = async () => {
    const res = await GetBanner({
        place: 0,
    })
    banner.value = res
}

//获取热门banner
const gethotBanner = async () => {
    const res = await GetBanner({
        hot: 1
    })
    hotbanner.value = res
}

//数据列表
const getBusinessList = async () => {
    const res = await GetBusinessList({
        hot: 1,
        page: 1
    })
    list.value = res.data
}

getBusinessTypeList()
getBanner()
gethotBanner()
getBusinessList()

</script> 

<template>
    <div class="box">
        <div class="banner">
            <div class="bg"></div>
            <a class="image" v-for="item in banner" :key="item.id" :href="item.link" v-Tracking:[`点击${item.title}`]><img
                    :src="item.img" alt=""></a>
        </div>
        <van-row class="business">
            <van-col span="8" class="item" v-for="item in business" :key="item.id"
                v-Tracking:[`跳转${item.poskey}`]="() => _todetails(item)">
                <img :src="item.img" alt="">
                <div class="txt">{{ item.name }}</div>
            </van-col>
        </van-row>
        <div class="hot">
            <div class="title">ยอดนิยมเดือนนี้</div>
            <a class="image" v-for="item in hotbanner" :key="item.id" :href="item.link"
                v-Tracking:[`点击${item.title}`]><img :src="item.img" alt=""></a>
            <DetailsItem v-for="(item, index) in list" :key="index" :data="item" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    .banner {
        position: relative;
        padding: 1.96rem .64rem .4rem;

        .bg {
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            .size(100%, 6.96rem);
            background: linear-gradient(360deg, #FFFFFF 0%, #5799F7 50%, #2B5AFA 100%);
        }

        .image {

            >img {
                .size(100%, 7.4rem);
                border-radius: .64rem;
            }
        }

    }

    .business {
        padding: 0 .64rem;
        .fj(center);
        flex-wrap: wrap;

        .item {
            width: 33.3%;
            .fa(center);
            flex-direction: column;
            padding: .4rem 0;

            >img {
                width: 1.68rem;
                height: 1.68rem;
            }

            .txt {
                color: #333333;
                font-size: .56rem;
                line-height: .8rem;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                padding-top: .56rem;
                text-align: center;
            }
        }
    }

    .hot {
        padding: .96rem .64rem;

        .title {
            color: #333333;
            font-size: .84rem;
            line-height: 1.16rem;
            font-family: PingFang SC-Heavy, PingFang SC;
            font-weight: 800;
            margin-bottom: .68rem;
        }

        .image {
            .size(100%, 7.4rem);

            >img {
                .size(100%, 100%);
                border-radius: .64rem;
            }
        }


        .content {
            display: flex;
            padding-top: .68rem;

            .img {
                >img {
                    width: 4.2rem;
                    height: 4.2rem;
                }
            }

            .text {
                .fj(center);
                flex-direction: column;
                margin-left: .84rem;

                .tit {
                    font-size: .68rem;
                    font-family: PingFang SC-Bold, PingFang SC;
                    font-weight: bold;
                    color: #333333;
                    line-height: .96rem;
                }

                .txt {
                    font-size: .56rem;
                    font-family: PingFang SC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #666666;
                    line-height: .8rem;
                    margin-top: .56rem;
                }
            }
        }


    }
}
</style>