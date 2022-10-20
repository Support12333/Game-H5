<script setup>
// import { relative } from 'vue'
// const list = relative()
</script>

<template>
    <div class="box">
        <div class="banner">
            <div class="bg"></div>
            <div class="image"><img src="@assets/image/home_banner.png" alt=""></div>
        </div>
        <div class="business">
            <div class="item">
                <img src="@assets/image/video.png" alt="">
                <div class="txt">短视频培训</div>
            </div>
            <div class="item">
                <img src="@assets/image/electricity.png" alt="">
                <div class="txt">电商培训</div>
            </div>
            <div class="item">
                <img src="@assets/image/entrepreneurship.png" alt="">
                <div class="txt">创业加盟项目</div>
            </div>
            <div class="item">
                <img src="@assets/image/part-time.png" alt="">
                <div class="txt">兼职</div>
            </div>
            <div class="item">
                <img src="@assets/image/make-money.png" alt="">
                <div class="txt">网赚</div>
            </div>
            <div class="item">
                <img src="@assets/image/stock.png" alt="">
                <div class="txt">股票</div>
            </div>
        </div>
        <div class="hot">
            <div class="title">本月热门</div>
            <img src="@assets/image/home_banner2.png" alt="">
            <div class="content">
                <div class="img"><img src="@assets/image/1.png" alt=""></div>
                <div class="text">
                    <div class="tit">标题内容</div>
                    <div class="txt">正文内容介绍文案正文内容介绍文案正文内容介绍文案</div>
                </div>
                
            </div>
            <div class="content">
                <div class="img"><img src="@assets/image/1.png" alt=""></div>
                <div class="text">
                    <div class="tit">标题内容</div>
                    <div class="txt">正文内容介绍文案正文内容介绍文案正文内容介绍文案</div>
                </div>
                
            </div>
            <div class="content">
                <div class="img"><img src="@assets/image/1.png" alt=""></div>
                <div class="text">
                    <div class="tit">标题内容</div>
                    <div class="txt">正文内容介绍文案正文内容介绍文案正文内容介绍文案</div>
                </div>
                
            </div>
            <div class="content">
                <div class="img"><img src="@assets/image/1.png" alt=""></div>
                <div class="text">
                    <div class="tit">标题内容</div>
                    <div class="txt">正文内容介绍文案正文内容介绍文案正文内容介绍文案</div>
                </div>
                
            </div>
        </div>
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
            height: 174px;
            width: 100%;
            background: linear-gradient(360deg, #FFFFFF 0%, #5799F7 50%, #2B5AFA 100%);
        }

        .image {
            padding: 49px 16px 10px;

            >img {
                width: 100%;
                height: 185px;
            }
        }

    }

    .business {
        padding: 0 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .item {
            width: 33.3%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0;

            >img {
                width: 42px;
                height: 42px;
            }

            .txt {
                color: #333333;
                font-size: 14px;
                line-height: 20px;
                font-family: PingFang SC-Bold, PingFang SC;
                font-weight: bold;
                padding-top: 14px;
            }
        }
    }

    .hot {
        padding: 24px 16px 0;

        .title {
            color: #333333;
            font-size: 21px;
            line-height: 29px;
            font-family: PingFang SC-Heavy, PingFang SC;
            font-weight: 800;
            margin-bottom: 17px;
        }

        >img {
            width: 100%;
            height: 185px;
        }

        .content {
            display: flex;
            padding-top: 17px;
            .img {
                >img {
                    width: 105px;
                    height: 105px;
                }
            }

            .text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 21px;
                .tit {
                    font-size: 17px;
                    font-family: PingFang SC-Bold, PingFang SC;
                    font-weight: bold;
                    color: #333333;
                    line-height: 24px;
                }

                .txt {
                    font-size: 14px;
                    font-family: PingFang SC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #666666;
                    line-height: 20px;
                    margin-top: 14px;
                }
            }
        }


    }
}
</style>