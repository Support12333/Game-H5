<script setup>
import { defineAsyncComponent } from 'vue'
import { useRouter } from "vue-router";

// 获取路由实例对象
const router = useRouter();

const DetailsItem = defineAsyncComponent(() => import("@components/DetailsItem.vue"))
const business = [
    {
        id: 1,
        icon: require('@assets/image/video.png'),
        txt: '短视频培训'
    }, {
        id: 2,
        icon: require('@assets/image/electricity.png'),
        txt: '电商培训'
    }, {
        id: 3,
        icon: require('@assets/image/entrepreneurship.png'),
        txt: '创业加盟项目'
    }, {
        id: 4,
        icon: require('@assets/image/part-time.png'),
        txt: '兼职'
    }, {
        id: 5,
        icon: require('@assets/image/make-money.png'),
        txt: '网赚'
    }, {
        id: 6,
        icon: require('@assets/image/stock.png'),
        txt: '股票'
    }]
const list = [
    {
        title: 'วิธีที่ง่ายที่สุดในการสร้างรายได้ในปี 2022',
        text: 'ใช้เวลาเพียง 5 นาทีเพื่ออ่านบทความนี้ ไม่อย่างนั้นคุณจะพลาดโอกาศสำคัญ',
        cover: 'https://www.makemoneyonlineok.xyz/static22/2022/th/wz/0818/img/108679720fa6329f5304166d47e1e948.jpeg',
        link: 'https://www.asngn.online/app/look/f00690df-1595-dbc4-acae-40fb052c3acb'
    },
    {
        title: 'รับสมัครงาน part-time ออนไลน์ที่บ้าน',
        text: 'ตามภารกิจที่ได้รับจากแพลตฟอร์ม ค้นหาข้อมูลที่เกี่ยวข้องและรับเงินรางวัล! ใครๆ ก็ทำได้ ใช้งานได้กับมือถือ ไม่จำกัดเวลา ไม่จำกัดสถานที่ ไม่จำกัดวุฒิการศึกษา ใช้ได้ทั่วประเทศ',
        cover: 'https://www.makemoneyonlineok.xyz/static22/2022/th/zscy/1021/img/6.png',
        link: 'https://www.ljlng.online/app/look/45011bcb-293b-19ca-98b8-e0995e8f6961'
    },
    {
        title: 'หนึ่งในวิธีที่ดีที่สุดในการหารายได้เสริมด้วยโทรศัพท์ของคุณ',
        text: 'ใช้มือถืออย่างไรให้เกิดประโยชน์ * รับรายได้วันต่อวัน * ใช้เวลาว่าง 1-2ชม.ต่อวัน ช่องทางทำรายได้ผ่านมือถือที่บ้าน อยู่บ้านก็ทำได้ใช้เวลา 1-2ชม.ต่อวัน การันตีรายได้ 6000-10000ต่อวัน ใช้ความคิดริเริ่มในการส่งข้อความถึงครู กล่าวทักทาย ให้ครูแนะนำคุณในครั้งแรก และรับโอกาสสร้างรายได้ออนไลน์เร็วขึ้น.',
        cover: 'https://www.makemoneyonlineok.xyz/static22/2022/th/wz/0528/02/img/qweq.png',
        link: 'https://www.asngn.online/app/look/1cf7ebb1-a391-2757-7581-187917c818c8'
    },
    {
        title: 'สร้างรายได้ที่บ้านผ่านมือถือ การันตีรายได้1500-3000 ต่อวัน',
        text: 'วิธีสร้างรายได้ที่บ้านที่นิยมที่สุดในปี2021ผ่านมือถือสมาร์ทโฟน อยู่บ้านก็ทำได้ใช้เวลาว่าง 1-2ชม.ต่อวัน การันตีรายได้1500-3000 ต่อวัน ลงทุนระยะสั้นโดยไม่จำกัดเงินทุนและเวลา รับรายได้วันต่อวันเริ่มต้นสร้างรายได้เพิ่มไลน์',
        cover: 'https://www.makemoneyonlineok.xyz/static22/2022/th/wz/0623/01/img/1.webp',
        link: 'https://www.ljlng.online/app/look/69920ef4-efec-a7b1-4a61-138fcf282cce'
    }]

const todetails = (value) => {
    router.push({
        path: '/details',
        query: {
            id: value.id,
            txt: value.txt
        }
    })
}
</script>

<template>
    <div class="box">
        <div class="banner">
            <div class="bg"></div>
            <div class="image"><img src="@assets/image/home_banner.png" alt=""></div>
        </div>
        <div class="business">
            <div class="item" v-for="item in business" :key="item.id" @click="todetails(item)">
                <img :src="item.icon" alt="">
                <div class="txt">{{item.txt}}</div>
            </div>
        </div>
        <div class="hot">
            <div class="title">本月热门</div>
            <img src="@assets/image/home_banner2.png" alt="">
            <DetailsItem v-for="(item,index) in list" :key="index" :data="item" />
        </div>
        <div class="prompt">敬请期待</div>
    </div>
</template>

<style lang="less" scoped>
.box {
    .banner {
        position: relative;

        .bg {
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            .size(100%, 6.96rem);
            background: linear-gradient(360deg, #FFFFFF 0%, #5799F7 50%, #2B5AFA 100%);
        }

        .image {
            padding: 1.96rem .64rem .4rem;

            >img {
                .size(100%, 7.4rem);
            }
        }

    }

    .business {
        padding: 0 .64rem;
        .flex(center, center);
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

        >img {
            width: 100%;
            height: 7.4rem;
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

    .prompt {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        .flex(center,center);
        width: 3.2rem;
        height: 2.8rem;
        font-size: .56rem;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: .8rem;
        margin-top: .32rem;
        background-color: rgba(0, 0, 0, .7);
        border-radius: .32rem;
        display: none;
    }
}
</style>