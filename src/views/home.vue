<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { GetHomeGame } from '@/api/home'

const Dialog = defineAsyncComponent(() => import("./components/Dialog.vue"))
//是否显示登陆注册弹窗
const isShowDialog = ref(false)
//当前游戏信息
const currentData = ref({})
const userAvatar=ref('')
const gameList = ref([])
const gameBannerList = ref([])
const swiperIdx = ref(0)
const isLoading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
// const gameVoList = ref([]);
// const defaultPageSize = 5
// const params = ref({
//    homeType: 2,
//    page: 1,
//    pageSize: defaultPageSize
// })

//获取数据
onMounted(() => {
   userAvatar.value=localStorage.getItem('userImg')
   GetHomeGame({}).then(res => {
      // console.log(res);
      gameList.value = res[2].gameVoList
      gameBannerList.value = res[1].gameVoList
   })
})

const onChange = (index) => {
   if (gameBannerList.value.length > 0) {
      swiperIdx.value = index
   }
};

// const GetGameList = async () => {
//    // try {
//    //    gameVoList.value = [];
//    //    const DataList = await GetHomeGame(params.value);
//    //    console.log(DataList);
//    //    const { data } = DataList;
//    //    if (data.page > page) {
//    //       page.value += 1;
//    //    } else {
//    //       finished.value = true;
//    //    }
//    //    gameVoList.value.push(...data.homeType[homeType]);
//    // } catch (error) {
//    //    console.error(error);
//    // } finally {
//    //    isLoading.value = false;
//    //    refreshing.value = false;
//    // }
// };

// const GetGameList = async () => {
//    try {
//       const res = await GetHomeGame(params.value);
//       console.log(res);
//       if (res[2].) { 

//       }
//    } catch (error) {
//       console.log(1);
//    }
// }

const onRefresh = () => {
   // isLoading.value = true;
   // GetGameList();
};

const onLoad = () => {
   // GetGameList();
};

//点击游戏
const Islogin = (data) => {
   currentData.value = data
   if (localStorage.getItem('userId')) {
      window.location.href = gameBannerList.value[swiperIdx.value]?.gamePath + `?gameID=${gameBannerList.value[swiperIdx.value]?.id}&userID=${localStorage.getItem('userId')}`
   } else {
      isShowDialog.value = true
   }
}
</script>

<template>
   <div class="home">
      <div class="box-up">
         <div class="header">
            <div class="title">recommend</div>
            <div class="avatar"><img :src="userAvatar==''?'../assets/image/dd.webp'||userAvatar" alt=""></div>
         </div>
         <div class="introduce">
            <div>
               <div class="tit">{{ gameBannerList[swiperIdx]?.gameName }}</div>
               <div class="txt">{{ gameBannerList[swiperIdx]?.gameDesc }}</div>
            </div>
            <div class="btn" @click="Islogin(gameBannerList[swiperIdx])">
               <div class="btntext">
                  Enter
               </div>
            </div>
         </div>
         <div class="banner">
            <van-swipe class="my-swipe" :loop="false" :width="280" :show-indicators="false" @change="onChange">
               <van-swipe-item v-for="(item, index) in gameBannerList" :key="index"><img :src="item.gameImg"
                     alt=""></van-swipe-item>
            </van-swipe>
         </div>
      </div>
      <div class="gamelist">
         <div class="title">Everyone is playing</div>
         <div class="centent">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
               <van-list v-model:loading="isLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                  <div class="item" v-for="(item, index) in gameList" :key="index">
                     <div class="master-map"><img :src="item.gameLogo" alt=""></div>
                     <div class="details">
                        <div class="tit">{{ item.gameName }}</div>
                        <div class="desc">
                           <img src="../assets/image/dd.webp" alt="">
                           <img src="../assets/image/dd.webp" alt="">
                           <img src="../assets/image/dd.webp" alt="">
                           <span>9527friends are playing</span>
                        </div>
                     </div>
                     <div class="enter">
                        <div class="text"><a :href="item.gamePath">Enter</a></div>
                     </div>
                  </div>
               </van-list></van-pull-refresh>
         </div>
      </div>
      <Dialog v-model:show="isShowDialog" :currentData="currentData"></Dialog>
   </div>
</template>

<style lang="less" scoped>
.home {
   background-color: rgba(245, 245, 245, 1);

   .box-up {
      padding: 16px 16px 20px;
      border-radius: 0 0 8px 8px;
      background: rgba(255, 255, 255, 1);

      .header {
         display: flex;
         justify-content: space-between;

         .title {
            font-family: PingFang SC;
            font-size: 24px;
            color: rgba(0, 0, 0, 1);
            font-weight: 600;
         }

         .avatar {
            img {
               width: 34px;
               height: 34px;
               border-radius: 50%;
            }
         }
      }

      .introduce {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 16px 0;

         .tit {
            font-family: PingFang SC;
            font-size: 18px;
            color:
               rgba(0, 0, 0, 1);
            font-weight: 400;
            line-height: 24px;
         }

         .txt {
            font-family: PingFang SC;
            font-size: 12px;
            color: rgba(100, 101, 102, 1);
            font-weight: 400;
            line-height: 16px;
            margin-top: 6px;
         }

         .btn {
            width: 76px;
            height: 32px;
            border-radius: 4px;
            background: linear-gradient(180deg, #C3CCF6 -89.02%, #3868FF 99%);

            .btntext {
               font-family: PingFang SC;
               font-size: 14px;
               line-height: 32px;
               text-align: center;
               font-weight: 600;
               color: rgba(255, 255, 255, 1);

               a {
                  display: block;
               }
            }
         }
      }

      .banner {
         .van-swipe {
            margin: 0 -8px;
         }

         .van-swipe-item {
            margin: 0 8px;
         }

         img {
            width: 280px;
            height: 128px;
         }
      }
   }

   .gamelist {
      padding: 16px;
      margin-top: 12px;
      border-radius: 8px 8px 0 0;
      background: rgba(255, 255, 255, 1);

      .title {
         font-family: PingFang SC;
         font-size: 20px;
         font-weight: 600;
         line-height: 28px;
         color: rgba(26, 26, 26, 1);
      }

      .centent {
         .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;

            .master-map {
               img {
                  width: 60px;
                  height: 60px;
                  border-radius: 12px;
               }
            }

            .details {
               padding: 0 16px 0 8px;

               .tit {
                  font-family: PingFang SC;
                  font-size: 14px;
                  color: rgba(26, 26, 26, 1);
                  font-weight: 400;
                  line-height: 18px;
               }

               .desc {
                  display: flex;
                  margin-top: 10px;

                  img {
                     width: 16px;
                     height: 16px;
                     border-radius: 50%;
                  }

                  >img+img {
                     margin-left: -4px;
                  }

                  span {
                     font-family: PingFang SC;
                     font-size: 12px;
                     font-weight: 400;
                     line-height: 16px;
                     color: rgba(150, 151, 153, 0.5333);
                     margin-left: 4px;
                  }
               }
            }

            .enter {
               width: 68px;
               height: 32px;
               border: 1px solid rgba(56, 104, 255, 1);
               border-radius: 4px;

               .text {
                  text-align: center;
                  font-family: ABeeZee;
                  font-size: 14px;
                  line-height: 32px;
                  font-weight: 400;
                  color:
                     rgba(56, 104, 255, 1);

                  a {
                     display: block;
                  }
               }
            }
         }
      }
   }
}
</style>
