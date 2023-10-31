<script setup>
import "vant/lib/toast/style/index"
import { ref, reactive, onBeforeUnmount } from 'vue';
import { showToast } from 'vant'
import { SendInfo, RegisterUser, LoginUser } from '@/api/user'
const show = ref(true);
const showornot = ref("password");

const params = reactive({
    // 手机号/邮箱
    account: "",
    // 验证码
    code: "",
    // 密码
    password: "",
})

// 倒计时对象
const countDown = reactive({
    time: 0,
    interval: null,
});

//验证码是否显示
const code = ref(false)
let Iscode = ref(false)
let checked = ref(false)
let iSopen = ref(false)
const isActive = ref(1)

//点击切换登陆 
const login = () => {
    console.log('登陆');
    code.value = false
    isActive.value = 1
    //切换校验规则
}

//点击切换注册
const register = () => {
    console.log('注册');
    code.value = true
    isActive.value = 2
    //切换校验规则
}

//勾选隐私政策
const check = () => {
    if (checked.value) {
        checked.value = false
    } else {
        checked.value = true
    }
}

//密码显示隐藏
const open = () => {
    if (iSopen.value) {
        iSopen.value = false
        showornot.value = 'password'
    } else {
        iSopen.value = true
        showornot.value = 'text'
    }
}

//获取验证码
const sendVerifyCode = () => {
    if (!params.account) {
        showToast("提示内容")
        console.log(123, 'xxxx')

    } else {
        SendInfo({
            account: params.account,
            type: 1,
            languageType: 1
        }).then(() => {
            Iscode.value = true
            countDown.time = 30;
            countDown.interval = setInterval(() => {
                if (countDown.time == 0) {
                    clearInterval(countDown.interval);
                    countDown.interval = null;
                    Iscode.value = false
                } else {
                    countDown.time--;
                }
            }, 1000);
        })
    }

}

//提交登录注册
const onSubmit = (values) => {
    if (!checked.value) {
        // return Toast('请勾选隐私政策！');
        console.log('请勾选隐私政策！');
        return
    }

    //1 为登入 2为注册
    if (isActive.value == 1) {
        LoginUser({
            account: params.account,
            password: params.password,
            verifyCode: '',
            signTypeId: 1,
            gameId: 1,
            carrierId: 1
        }).then(res => {
            // if (res.code != 1000) {
            //     return Toast(res.data);
            // }
            show.value = false
            console.log(res, '登陆成功');
        })
        console.log('login.....')
    } else if (isActive.value == 2) {
        RegisterUser({
            account: params.account,
            password: params.password,
            verifyCode: params.code,
            signTypeId: 1,
            gameId: 1,
            carrierId: 1
        }).then(res => {
            if (res.code != 1000) {
                // return Toast(res.data);
            }
            console.log(res);
        })
        console.log('Registed.....')
    }

    console.log('submit', values);
};

// 销毁前判断定时器是否存在，存在则停止
onBeforeUnmount(() => {
    if (countDown.interval) {
        clearInterval(countDown.interval);
        countDown.interval = null;
    }
});
</script>

<template>
    <div>
        <van-dialog v-model:show="show" class="main" :showConfirmButton="false" :showCancelButton="false">
            <div class="centent">
                <div class="title">
                    <span @click="login" :class="isActive == 1 ? 'active' : ''">Login</span>
                    <span @click="register" :class="isActive == 2 ? 'active' : ''">Register</span>
                </div>
                <van-form @submit="onSubmit" class="form">
                    <van-cell-group inset style="margin: 0;">

                        <div class="label">account</div>
                        <div class="account">
                            <!-- <div class="area" @click.stop="isAreaCode = true">
                                <span>+{{ params.area_code }}</span>
                                <van-icon :name="isAreaCode ? 'arrow-up' : 'arrow-down'" size="0.56rem" />
                            </div> -->
                            <van-field name="账户" v-model="params.account" placeholder="Enter mobile phone number/email" />
                        </div>

                        <div v-if="code">
                            <div class="label">Captcha</div>
                            <div class="code">
                                <van-field name="验证码" v-model="params.code" />

                                <div class="countdown" v-if="Iscode"><img src="../../assets/icon/close.png" alt="">Resend
                                    ({{ countDown.time }}s)
                                </div>
                                <div class="tips" v-else @click="sendVerifyCode">get verification code</div>
                            </div>
                        </div>

                        <div class="label">password</div>
                        <div class="pwd">
                            <van-field :type="showornot" name="密码" v-model="params.password" placeholder="enter password" />
                            <img @click="open" src="../../assets/icon/password_open.png" alt="" v-if="iSopen">
                            <img @click="open" src="../../assets/icon/password_closed.png" alt="" v-else>
                        </div>

                    </van-cell-group>
                    <div style="margin: 24px 0;">
                        <van-button round block type="primary" native-type="submit">
                            Login
                        </van-button>
                    </div>
                </van-form>
                <div class="footer">
                    <!-- <img @click="check" :src="require(''+activeImageUrl)" alt=""> -->
                    <img @click="check" src="@/assets/icon/icon_picture_choose.png" alt="" v-if="checked">
                    <img @click="check" src="@/assets/icon/icon_picture_selected.png" alt="" v-else>

                    <div class="txt">I have read and agreed to the <span>"User Service Agreement"</span> and <span>"Privacy
                            Policy"</span></div>
                </div>
            </div>
        </van-dialog>
        <!-- <AreaCode v-model="params.area_code" v-model:show="isAreaCode" /> -->
    </div>
</template>

<style lang="less" scoped>
.main {

    .centent {
        padding: 24px 16px;

        .title {
            display: flex;
            justify-content: space-between;
            font-family: PingFang SC;
            font-size: 20px;
            font-weight: 600;
            line-height: 26px;
            color: rgba(100, 101, 102, 1);
            padding: 0 24px;

            .active {
                position: relative;
                color: rgba(0, 0, 0, 1);

            }

            .active::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -6px;
                width: 24px;
                height: 4px;
                margin-top: 6px;
                border-radius: 50px;
                background: rgba(56, 104, 255, 1);
                transition: all 0.3s ease-out;
            }
        }

        ::v-deep .form {
            margin-top: 6px;

            .label {
                font-family: PingFang SC;
                font-size: 18px;
                font-weight: 400;
                line-height: 25px;
                color: rgba(26, 26, 26, 1);
                margin: 16px 0 12px;
            }

            .account {
                position: relative;

                .area {
                    position: absolute;
                    left: 8px;
                    top: 14px;
                    z-index: 1;
                }

                // input {
                //     padding: 16px 12px 16px 40px !important;
                // }
            }

            .van-cell {
                padding: 0;
                margin: 0;

                input {
                    height: 48px;
                    font-family: PingFang SC;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    color: rgba(0, 0, 0, 1);
                    background: rgba(248, 250, 255, 1);
                    border: 0;
                    padding: 16px 12px;
                    border-radius: 6px;
                }

                input::-webkit-input-placeholder {
                    font-family: PingFang SC;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 16px;
                    color: rgba(199, 202, 211, 1);

                }

                input:-internal-autofill-selected {
                    background: rgba(248, 250, 255, 1);
                }
            }

            .code {
                position: relative;

                .tips {
                    position: absolute;
                    right: 12px;
                    top: 16px;
                    font-family: PingFang SC;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    color: rgba(56, 104, 255, 1);
                }

                .countdown {
                    position: absolute;
                    right: 12px;
                    top: 16px;
                    display: flex;
                    align-items: center;
                    font-family: PingFang SC;
                    font-size: 14px;
                    line-height: 16px;
                    color: rgba(199, 202, 211, 1);

                    >img {
                        width: 14px;
                        height: 14px;
                        margin-right: 16px;
                    }
                }
            }


            .pwd {
                position: relative;

                >img {
                    position: absolute;
                    right: 12px;
                    top: 15px;
                    width: 18px;
                    height: 18px;
                }
            }

            .van-button {
                font-family: PingFang SC;
                font-size: 18px;
                font-weight: 600;
                line-height: 24px;
                color: rgba(255, 255, 255, 1);
                border-radius: 6px;
                border: 0;
                background: linear-gradient(198.03deg, #C3CCF6 -89.02%, #3868FF 99%);

            }

        }

        .footer {
            display: flex;

            >img {
                width: 14px;
                height: 14px;
            }

            .txt {
                font-family: PingFang SC;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                color: rgba(150, 151, 153, 1);
                margin-left: 6px;

                >span {
                    color: rgba(56, 104, 255, 1);
                }
            }
        }
    }
}

.particulars-detail-popup {
    background: rgba(0, 0, 0, 0.7) !important;
}
</style>