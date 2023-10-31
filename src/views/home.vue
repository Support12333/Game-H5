<<<<<<< HEAD
<script setup>
import { defineAsyncComponent } from 'vue'
=======
<script>
import { Dialog } from 'vant';

export default {
   created() {
      Dialog.confirm({
         title: '标题',
         message: '弹窗内容',
      })
         .then(() => {
            // on confirm
         })
         .catch(() => {
            // on cancel
         });
>>>>>>> 6f35add37fc4c0c0e34544daea11f98fb6d1aa52

const Dialog = defineAsyncComponent(() => import("./components/Dialog.vue"))
</script>

<template>
   <div class="home">
      <div class="box-up">
         <div class="header">
            <div class="title">recommend</div>
            <div class="avatar"><img src="../assets/image/dd.webp" alt=""></div>
         </div>
         <div class="introduce">
            <div>
               <div class="tit">Sheep got a sheep</div>
               <div class="txt">Games popular in Asia with over 1.5 billion people playing</div>
            </div>
            <div class="btn">
               <div class="btntext">Enter</div>
            </div>
         </div>
         <div class="banner">
            <van-swipe class="my-swipe" :loop="false" :width="280" :show-indicators="false">
               <van-swipe-item><img src="../assets/image/banner.png" alt=""></van-swipe-item>
               <van-swipe-item><img src="../assets/image/banner.png" alt=""></van-swipe-item>
               <van-swipe-item><img src="../assets/image/banner.png" alt=""></van-swipe-item>
               <van-swipe-item><img src="../assets/image/banner.png" alt=""></van-swipe-item>
            </van-swipe>
         </div>
      </div>
      <div class="gamelist">
         <div class="title">Everyone is playing</div>
         <div class="centent">
            <div class="item">
               <div class="master-map"><img src="../assets/image/dd.webp" alt=""></div>
               <div class="details">
                  <div class="tit">Fruit Xiaoxiaole</div>
                  <div class="desc">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <span>9527friends are playing</span>
                  </div>
               </div>
               <div class="enter">
                  <div class="text">Enter</div>
               </div>
            </div>
            <div class="item">
               <div class="master-map"><img src="../assets/image/dd.webp" alt=""></div>
               <div class="details">
                  <div class="tit">Fruit Xiaoxiaole</div>
                  <div class="desc">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <span>9527friends are playing</span>
                  </div>
               </div>
               <div class="enter">
                  <div class="text">Enter</div>
               </div>
            </div>
            <div class="item">
               <div class="master-map"><img src="../assets/image/dd.webp" alt=""></div>
               <div class="details">
                  <div class="tit">Fruit Xiaoxiaole</div>
                  <div class="desc">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <span>9527friends are playing</span>
                  </div>
               </div>
               <div class="enter">
                  <div class="text">Enter</div>
               </div>
            </div>
            <div class="item">
               <div class="master-map"><img src="../assets/image/dd.webp" alt=""></div>
               <div class="details">
                  <div class="tit">Fruit Xiaoxiaole</div>
                  <div class="desc">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <img src="../assets/image/dd.webp" alt="">
                     <span>9527friends are playing</span>
                  </div>
               </div>
               <div class="enter">
                  <div class="text">Enter</div>
               </div>
            </div>
         </div>
      </div>
      <Dialog></Dialog>
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
<<<<<<< HEAD
               padding: 0 16px 0 8px;
=======
               margin-left: 8px;
>>>>>>> 6f35add37fc4c0c0e34544daea11f98fb6d1aa52

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
               }
            }
         }
      }
   }
}
</style>
