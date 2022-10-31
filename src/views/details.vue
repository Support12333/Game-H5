<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from "vue-router";

const DetailsItem = defineAsyncComponent(() => import("@components/DetailsItem.vue"))

// 获取当前路由地址对象
const route = useRoute();
//获取路由参数
const query = route.query

const arr = []

//返回
const clickleft = () => {
    history.back();
}

const list = [
    {
        id: 1,
        type: '创业加盟项目',
        banner: require('@assets/image/zs.png'),
        link: 'https://www.ppsiy.xyz/app/visit/c9b32210-5a1b-af77-0875-d5b309e478d1',
        content: [
            {
                title: 'เป็นที่นิยม! โปรแกรมทำเงินออนไลน์',
                text: 'เป็นที่นิยม! โปรแกรมทำเงินออนไลน์ รายละเอียดโครงการ: โครงการทำเงินที่คุณสามารถมีส่วนร่วมกับโทรศัพท์มือถือนั้นง่ายและรวดเร็ว และรายได้ต่อเดือนคือ 100,000+ โดยไม่ต้องออกจากบ้าน! หากคุณมีไอเดีย ติดต่อครูเพื่อขอคำแนะนำ',
                cover: require('@assets/image/join/1.jpeg'),
                link: 'https://www.kngoa.online/app/visit/a53126e6-1333-d66e-8604-51e0c53737be'
            },
            {
                title: 'โปรเจกต์มือถือราคาสูงรอให้คุณได้สัมผัส คนธรรมดาก็เลียนแบบปฏิบัติการได้',
                text: 'โครงการโทรศัพท์เคลื่อนที่ที่ให้ผลตอบแทนสูงกำลังรอให้คุณได้สัมผัส และคนทั่วไปก็สามารถคัดลอกการใช้งานจริงได้ รายละเอียดโครงการ: เนื่องจากการขยายธุรกิจ ขณะนี้บริษัทกำลังรับสมัครทั้งชายและหญิง ไม่จำกัดอายุ และการศึกษาระดับมัธยมต้นขึ้นไป คุ้นเคยกับการใช้งานโทรศัพท์มือถือขั้นพื้นฐานก็พอ ยิ่งทำงาน ยิ่งได้มาก รายได้ก็ยิ่งสูงขึ้น ข้อกำหนด: ทำงานหนัก มีความรับผิดชอบ และมีอำนาจ ความมุ่งมั่น: การทำงานพาร์ทไทม์ในบริษัทของเราไม่มีค่าใช้จ่ายใด ๆ ทั้งสิ้น โดยไม่เสียค่าใช้จ่ายใดๆ และเงินเดือนก็เป็นจริงและมีประสิทธิผล ไม่จำกัดสถานที่ทำงาน และคุณสามารถทำได้ที่บ้านโดยไม่ทำให้เวลาทำงานปกติของงานปกติล่าช้า ผู้ที่ทำงานหนักสามารถสร้างรายได้มหาศาลทุกเดือน',
                cover: require('@assets/image/join/2.jpeg'),
                link: 'https://www.lakomt.online/app/visit/4c220411-ece3-d157-eab6-125b9b3eef2b'
            },
            {
                title: 'โครงการเงินด่วนมือถือ รายได้รายวัน 5,000+ คลิกดูรายละเอียด',
                text: 'โครงการเงินด่วนมือถือ รายได้รายวัน 5,000+ คลิกดูรายละเอียด รายละเอียดโครงการ: โทรศัพท์มือถือได้รับรางวัลสำหรับการทำงานซึ่งง่ายและเข้าใจง่ายและการดำเนินงานมีความชัดเจน หากคุณทำสำเร็จ คุณจะได้รับรางวัล และจะไม่มีขีดจำกัด ทำได้เมื่อมีเวลา ไม่จำกัดเวลา มีงานซองจดหมายสีแดงสวัสดิการมากขึ้น หากสนใจกรุณากดลงทะเบียนเพื่อขอรายละเอียดโครงการกับอาจารย์ได้เลย!',
                cover: require('@assets/image/join/3.jpeg'),
                link: 'https://djagn.online/app/visit/3ac8c1ce-2873-d4f3-de11-3826916f9c50'
            }]
    }, {
        id: 2,
        type: '兼职',
        banner: require('@assets/image/jz.png'),
        link: 'https://www.ljlng.online/app/visit/29ac7066-1d3b-4224-bc40-c2e58dfdfe62',
        content: [
            {
                title: 'รับสมัครพนักงานมือถือ พาร์ทไทม์ เงินเดือนสูง ไม่ต้องมีประสบการณ์',
                text: 'ตราบใดที่มีมือถือและบัญชีธนาคาร 500-5000 บาท/วัน ขั้นเป็นตอน ยิ่งได้เงินมาก ไม่จำเป็นต้องมีประสบการณ์',
                cover: require('@assets/image/part/1.png'),
                link: 'https://www.cxjgn.xyz/app/visit/428f61cf-bef6-bda9-ec49-10bdc8a06b63'
            },
            {
                title: 'ทำเงินออนไลน์ ใช้งานง่าย และทำเงินได้มากขึ้น',
                text: 'ช่วงโรคระบาดหางานยาก แนะนำให้ทำงานที่บ้าน งาน part-time ช่วงนี้กำลังดี เพราะคุณสามารถทำเงินได้มากมายเพียงแค่อยู่บ้านและเพียงแค่ใช้โทรศัพท์มือถือของคุณ ทำเงินออนไลน์ผ่านมือถือ รับรายได้ 500-3000 ฿ ทุกวันที่บ้าน สมัครตอนนี้เพื่อเริ่มต้นทำเงินที่บ้าน',
                cover: require('@assets/image/part/2.png'),
                link: 'https://www.kngoa.online/app/visit/9896640b-08b7-189c-2aa9-efad62002251'
            },
            {
                title: 'คำแนะนำยอดนิยม หารายได้ออนไลน์แบบไม่เต็มเวลา',
                text: 'คุณสมบัติ 1.ไม่จำกัดเพศชายหญิง อายุ22 ปีขึ้นไป 2.ทำงานที่บ้าน ทำงานเพียงวันละ 30 นาทีตามที่อาจารย์มอบหมายหน้าท 3.เพียงมีโทรศัพท์เครื่องเดียว และ เลขบัญชี่ธนาคารรับวันละ 500-5000 บาท/วัน ขยันทำงานเยอะตามที่มอบหมายเงินที่ได้รับยิ่งเยอะ ไม่จำเป็นต้องมีประสบการณ มีอาจารย์คอยสอนงาน สนใจคลิกเพื่อติดต่อเรา',
                cover: require('@assets/image/part/3.jpeg'),
                link: 'https://fishinga.xyz/app/visit/57409d59-9756-93fe-b7fb-2882acec669d'
            }]
    },{
        id: 3,
        type: '网赚',
        banner: require('@assets/image/wz.png'),
        link: 'https://djagn.online/app/visit/f93b7d59-cd01-202d-2b82-57b1d0c45bfe',
        content: [
            {
                title: 'ช่องทางทำรายได้ผ่านมือถือที่บ้าน อยู่บ้านก็ทำได้ใช้เวลา 1-2ชม.ต่อวัน การันตีรายได้ 6000-10000ต่อวัน',
                text: 'อยากประสบความสำเร็จทางการเงินช่วงวิกฤต ใช้เวลาว่าง1-2ชม.ต่อวันการหารายได้เสริมเพิ่มเติมก็น่าจะช่วยลดภาระหนี้ลงได้อีกแรง บางคนมีเป้าหมายในการใช้เงินที่มากกว่าเงินที่ได้ประจำ',
                cover: require('@assets/image/make/1.jpeg'),
                link: 'https://www.ljlng.online/app/visit/58fac6ec-e4e7-7992-1823-16b77e412b55'
            },
            {
                title: '3 วิธีง่ายๆในการสร้างรายได้',
                text: 'มีหลากหลายวิธีในการหารายได้เสริม ซึ่งมีหลายวิธีที่คุณไม่เคยคิดมาก่อน นั่นเป็นเหตุผลที่เราคิดหาวิธีเพื่อหารายได้เสริมสำหรับคุณ ไม่ว่าจะเป็นการลงทุน อาชีพเสริมที่ได้ค่าตอบแทนสูง หรืองานออนไลน์ที่ใช้ทักษะที่เราชื่นชอบสำหรับการทำเงินได้อย่างรวดเร็ว',
                cover: require('@assets/image/make/2.png'),
                link: 'https://www.kngoa.online/app/visit/0ef5d8b3-2118-3197-a467-53147b882c34'
            },
            {
                title: 'หาเงินออนไลน์ในปี ค.ศ. 2022! สร้างรายได้วันละ 3000 บาท!',
                text: 'ใช้เวลา 3 นาทีมาอ่านบทความนี้ คุณก็ทำได้เช่นเดียวกัน นายเจี่ยทิง เมื่อก่อนทำงานในโรงงาน เป็นพนักงานทั่วไป เงินเดือนแค่ 30,000 บาทเท่านั้น และต้องทำงานอย่างหนัก แต่ตอนนี้เขาสามารถหารายได้ 100,000 บาทต่อเดือนโดยผ่านโทรศัพท์มือถือของเขา กลายเป็นฟรีแลนซ์แล้ว เขาไม่ได้ฉลาดกว่าเรานะ แต่เขาคว้าโอกาสดีๆแบบได้อย่างดี',
                cover: require('@assets/image/make/3.jpeg'),
                link: 'https://www.ppsiy.xyz/app/visit/bdde80e4-b710-78f5-a451-56c9de042d8a'
            }]
    }
]

const details = () => {
    arr.value = list.filter(value => value.id == query.id)
}

details()

</script>
<template>
    <div class="box">
        <van-nav-bar :title="query.txt" left-arrow fixed @click-left="clickleft" />
        <div class="banner"><a :href="arr.value[0].link"><img :src="arr.value[0].banner" alt=""></a></div>
        <DetailsItem v-for="(item, index) in arr.value[0].content" :key="index" :data="item" />
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