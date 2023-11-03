<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { GetHomeGame, GetBehaviour } from '@/api/home'
const Dialog = defineAsyncComponent(() => import("./components/Dialog.vue"))
//是否显示登陆注册弹窗
const isShowDialog = ref(false)
//当前游戏信息
const currentData = ref({})
//登陆后获取的头像
const userAvatar = ref('')
//默认头像
const defaultavatar=ref(require('@assets/image/dd.webp'))
const gameList = ref([])
const gameBannerList = ref([])
const swiperIdx = ref(0)
const isLoading = ref(false);
const finished = ref(false);
const defaultPageSize = 8
const params = ref({
   homeType: 2,
   page: 1,
   pageSize: defaultPageSize
})

//获取数据
onMounted(() => {
   userAvatar.value = localStorage.getItem('userImg')
   GetHomeGame({}).then(res => {
      gameBannerList.value = res[1].gameVoList
   })
})
const getRandomInt = () => {
   return Math.floor(Math.random() * (9000 - 500 + 1)) + 500;
}

//切换轮播
const onChange = (index) => {
   if (gameBannerList.value.length > 0) {
      swiperIdx.value = index
   }
};


const GetGameList = async () => {
   try {
      let res = await GetHomeGame(params.value);
      let array = res[2].gameVoList

      if (array.length == 8) {
         params.value.page++
      } else {
         finished.value = true
      }

      array.map(item => {
         gameList.value.push(item)
      })
      isLoading.value = false
   } catch (error) {
      console.log(1);
   }
}

const onLoad = () => {
   GetGameList();
};

//点击游戏
const Skip = (data) => {
   currentData.value = data
   const gameId = gameBannerList.value[swiperIdx.value]?.id
   if (localStorage.getItem('userId')) {
      GetBehaviour({
         id: localStorage.getItem('userId'),
         gameId: gameId,
         clickTypeId: 6
      })
      window.location.href = gameBannerList.value[swiperIdx.value]?.gamePath + `?gameID=${gameId}&userID=${localStorage.getItem('userId')}`
   } else {
      isShowDialog.value = true
   }
}

const Skip2 = (data) => {
   currentData.value = data
   const gameId = data?.id
   if (localStorage.getItem('userId')) {
      GetBehaviour({
         id: localStorage.getItem('userId'),
         gameId: gameId,
         clickTypeId: 6
      })
      window.location.href = data?.gamePath + `?gameID=${gameId}&userID=${localStorage.getItem('userId')}`
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
            <div class="avatar"><img :src="userAvatar ? userAvatar : defaultavatar" alt="">
            </div>
         </div>
         <div class="introduce">
            <div>
               <div class="tit">{{ gameBannerList[swiperIdx]?.gameName }}</div>
               <div class="txt">{{ gameBannerList[swiperIdx]?.gameDesc }}</div>
            </div>
            <div class="btn" @click="Skip(gameBannerList[swiperIdx])">
               <div class="btntext">
                  Enter
               </div>
            </div>
         </div>
         <div class="banner">
            <van-swipe class="my-swipe" :loop="false" :width="296" :show-indicators="false" @change="onChange">
               <van-swipe-item v-for="(item, index) in gameBannerList" :key="index">
                  <div class="banner-img">
                     <img :src="item.gameImg" alt="">
                  </div>
               </van-swipe-item>
            </van-swipe>
         </div>
      </div>
      <div class="gamelist">
         <div class="title">Everyone is playing</div>
         <div class="centent">

            <van-list v-model:loading="isLoading" :finished="finished" :immediate-check="true" finished-text="没有更多了"
               @load="onLoad" :offset="30">
               <div class="item" v-for="(item, index) in gameList" :key="index">
                  <div class="master-map"><img :src="item.gameLogo" alt=""></div>
                  <div class="details">
                     <div class="tit">{{ item.gameName }}</div>
                     <div class="desc">
                        <img src="@assets/image/dd.webp" alt="">
                        <img src="@assets/image/dd.webp" alt="">
                        <img src="@assets/image/dd.webp" alt="">
                        <span>{{getRandomInt()}}friends are playing</span>
                     </div>
                  </div>
                  <div class="enter" @click="Skip2(item)">
                     <div class="text">Enter</div>
                  </div>
               </div>
            </van-list>
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
            // margin-left: -8px;
         }

         .van-swipe__track>div:nth-child(1) {
            margin-left: -8px;
         }

         .banner-img {
            padding: 0 8px;

            img {
               width: 100%;
               height: 128px;
               border-radius: 8px;
            }

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
