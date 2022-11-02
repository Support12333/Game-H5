<template>
    <div class="content" v-Tracking:[`点击数据id为${data.id}的落地页`]="() => tolink()">
        <div class="img"><img :src="data.img" alt=""></div>
        <div class="text">
            <div class="tit">{{data.title}}</div>
            <div class="txt">{{data.content}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: {}
        }
    },
    methods: {
        tolink() { 
            window.location.href=this.data.link
        }
    },
}
</script>

<style lang="less" scoped>
.content {
    display: flex;
    padding-top: .68rem;

    .img {
        >img {
            width: 4.2rem;
            height: 4.2rem;
            object-fit: cover;
            border-radius: .32rem;
        }
    }

    .text {
        .fj(center);
        flex-direction: column;
        margin-left: .72rem;

        .tit {
            font-size: .64rem;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #333333;
            line-height: .96rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .txt {
            font-size: .56rem;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #666666;
            line-height: .8rem;
            margin-top: .32rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
}
</style>