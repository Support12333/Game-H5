<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useRouter } from "vue-router";
import { GetBusinessTypeList, GetBanner, GetBusinessList } from '@api/home.js'

// 获取路由实例对象
const router = useRouter();

const DetailsItem = defineAsyncComponent(() => import("@components/DetailsItem.vue"))

const business = ref([])
const banner = []
const list=ref([])
//页码
// const params = reactive({
//     page: 1,
//     page_size: 20,
// });
// const list = [
//     {
//         title: 'วิธีที่ง่ายที่สุดในการสร้างรายได้ในปี 2022',
//         text: 'ใช้เวลาเพียง 5 นาทีเพื่ออ่านบทความนี้ ไม่อย่างนั้นคุณจะพลาดโอกาศสำคัญ',
//         cover: require('@assets/image/hot/1.jpeg'),
//         link: 'https://www.ngiang.xyz/app/visit/57bb0fe9-f25a-a5ec-2460-8c7ffbadc9db'
//     },
//     {
//         title: 'รับสมัครงาน part-time ออนไลน์ที่บ้าน',
//         text: 'ตามภารกิจที่ได้รับจากแพลตฟอร์ม ค้นหาข้อมูลที่เกี่ยวข้องและรับเงินรางวัล! ใครๆ ก็ทำได้ ใช้งานได้กับมือถือ ไม่จำกัดเวลา ไม่จำกัดสถานที่ ไม่จำกัดวุฒิการศึกษา ใช้ได้ทั่วประเทศ',
//         cover: require('@assets/image/hot/2.png'),
//         link: 'https://www.sojguy.xyz/app/visit/c6f3b85e-c945-e2ff-9e83-7d33fdddf2d6'
//     }]

const todetails = (value) => {
    router.push({
        path: '/details',
        query: {
            id: value.id,
            txt: value.txt
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
    const res = await GetBanner({ 'place': 0 })
    banner.value = res[0]
    console.log(banner, 'banner');
}

//数据列表
const getBusinessList = async () => {
    const res = await GetBusinessList({
        hot: 1,
        page: 1
    })
    console.log(res);
    list.value=res.data
}

getBusinessTypeList()
getBanner()
getBusinessList()
</script> 

<template>
    <div class="box">
        <div class="banner">
            <div class="bg"></div>
            <a class="image" href="https://www.sojguy.xyz/app/visit/1ce29dd5-c04b-a4df-75f7-7392c87956b9"><img
                    src="@assets/image/home.png" alt=""></a>
        </div>
        <div class="business">
            <div class="item" v-for="item in business" :key="item.id" @click="todetails(item)"
                v-Tracking:[`跳转${item.id}`]>
                <img :src="item.img" alt="">
                <div class="txt">{{ item.name }}</div>
            </div>
        </div>
        <div class="hot">
            <div class="title">ยอดนิยมเดือนนี้</div>
            <a class="image" href="https://nihgf.online/app/visit/902aa381-ae38-f427-6a68-5c773c7acc87"><img
                    src="@assets/image/hot.png" alt=""></a>
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