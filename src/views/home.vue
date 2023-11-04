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
const defaultavatar=ref(require('@assets/image/defaultavatar.png'))
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
            <div class="title">{{$t('recommend')}}</div>
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
                  {{$t('recommend')}}
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
         <div class="title">{{$t('tit')}}</div>
         <div class="centent">

            <van-list v-model:loading="isLoading" :finished="finished" :immediate-check="true" :finished-text="$t('desc')"
               @load="onLoad" :offset="30">
               <div class="item" v-for="(item, index) in gameList" :key="index">
                  <div class="master-map"><img :src="item.gameLogo" alt=""></div>
                  <div class="details">
                     <div class="tit">{{ item.gameName }}</div>
                     <div class="desc">
                        <img src="@assets/image/dd.webp" alt="">
                        <img src="@assets/image/dd.webp" alt="">
                        <img src="@assets/image/dd.webp" alt="">
                        <span>{{getRandomInt()}}{{$t('txt')}}</span>
                     </div>
                  </div>
                  <div class="enter" @click="Skip2(item)">
                     <div class="text">{{$t('recommend')}}</div>
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
      padding: .64rem .64rem .8rem;
      border-radius: 0 0 .32rem .32rem;
      background: rgba(255, 255, 255, 1);

      .header {
         display: flex;
         justify-content: space-between;

         .title {
            font-family: PingFang SC;
            font-size: .96rem;
            color: rgba(0, 0, 0, 1);
            font-weight: 600;
         }

         .avatar {
            img {
               width: 1.36rem;
               height: 1.36rem;
               border-radius: 50%;
            }
         }
      }

      .introduce {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: .64rem 0;

         .tit {
            font-family: PingFang SC;
            font-size: .72rem;
            color:
               rgba(0, 0, 0, 1);
            font-weight: 400;
            line-height: .96rem;
         }

         .txt {
            font-family: PingFang SC;
            font-size: .48rem;
            color: rgba(100, 101, 102, 1);
            font-weight: 400;
            line-height: .64rem;
            margin-top: .24rem;
         }

         .btn {
            // width: 76px;
            padding: 0 .32rem;
            height: 1.28rem;
            border-radius: .16rem;
            background: linear-gradient(180deg, #C3CCF6 -89.02%, #3868FF 99%);

            .btntext {
               font-family: PingFang SC;
               font-size: .56rem;
               line-height: 1.28rem;
               text-align: center;
               font-weight: 600;
               color: rgba(255, 255, 255, 1);
            }
         }
      }

      .banner {

         .van-swipe__track>div:nth-child(1) {
            margin-left: -0.32rem;
         }

         .banner-img {
            padding: 0 .32rem;

            img {
               width: 100%;
               height: 5.12rem;
               border-radius: .32rem;
            }

         }


      }
   }

   .gamelist {
      padding: .64rem;
      margin-top: .48rem;
      border-radius: .32rem .32rem 0 0;
      background: rgba(255, 255, 255, 1);

      .title {
         font-family: PingFang SC;
         font-size: .8rem;
         font-weight: 600;
         line-height: 1.12rem;
         color: rgba(26, 26, 26, 1);
      }

      .centent {
         .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .32rem 0;

            .master-map {
               img {
                  width: 2.4rem;
                  height: 2.4rem;
                  border-radius: .48rem;
               }
            }

            .details {
               padding: 0 .64rem 0 .32rem;

               .tit {
                  font-family: PingFang SC;
                  font-size: .56rem;
                  color: rgba(26, 26, 26, 1);
                  font-weight: 400;
                  line-height: .72rem;
               }

               .desc {
                  display: flex;
                  margin-top: .4rem;

                  img {
                     width: .64rem;
                     height: .64rem;
                     border-radius: 50%;
                  }

                  >img+img {
                     margin-left: -0.16rem;
                  }

                  span {
                     font-family: PingFang SC;
                     font-size: .48rem;
                     font-weight: 400;
                     line-height: .64rem;
                     color: rgba(150, 151, 153, 0.5333);
                     margin-left: .16rem;
                  }
               }
            }

            .enter {
               // width: 68px;
               padding: 0 .32rem;
               height: 1.28rem;
               border: .04rem solid rgba(56, 104, 255, 1);
               border-radius: .16rem;

               .text {
                  text-align: center;
                  font-family: ABeeZee;
                  font-size: .56rem;
                  line-height: 1.28rem;
                  font-weight: 400;
                  color:
                     rgba(56, 104, 255, 1);
               }
            }
         }
      }
   }
}
</style>
