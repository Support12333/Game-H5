<script setup>
import { ref, reactive, onBeforeUnmount, defineProps, watch, defineEmits } from 'vue';
import { useI18n } from "vue-i18n";
import { showFailToast } from 'vant'
import { SendInfo, RegisterUser, LoginUser } from '@/api/user'
import "vant/lib/toast/style/index"
const showornot = ref("password");

const params = reactive({
    // 手机号/邮箱
    account: "",
    // 验证码
    code: "",
    // 密码
    password: "",
})

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    currentData: {
        type: Object,
        default: () => { }
    }
})

// 获取i18n对象
const i18n = useI18n();

const Show = ref(props.show);

// 监听父组件的值，同步给当前组件的值
watch(
    () => props.show,
    () => {
        Show.value = props.show;
    }
);

// 监听当前组件的值，回调给父组件
watch(
    () => Show.value,
    () => {
        emit("update:show", Show.value);
    },
    {
        immediate: true,
    }
);

const emit = defineEmits(["update:show", "success"]);
// 倒计时对象
const countDown = reactive({
    time: 0,
    interval: null,
});

//验证码是否显示
const code = ref(false)
const isAccount = ref(false)
const isPassword = ref(false)
let IsCountDown = ref(false)
let checked = ref(false)
let iSopen = ref(false)
const isActive = ref(1)
//账户类型
const loginType = ref(1)
const accountTip = ref(i18n.t("accounttxt"))

//点击切换登陆 
const login = () => {
    accountTip.value = i18n.t("accounttxt")
    code.value = false
    isActive.value = 1
    //切换校验规则
}

//点击切换注册
const register = () => {
    accountTip.value = i18n.t("accounttxt2")
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
//删除验证码
const codeDelete = () => {
    params.code = ''
}

//是否是邮箱
const validateAccount = () => {
    if (!params.account) {
        showFailToast(i18n.t("tip"))
        return
    }
    if (params.account.includes('@')) {
        if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(params.account)) {
            isAccount.value = false
            showFailToast(i18n.t("tip2"))
            return
        }
        loginType.value = 2
    } else {
        loginType.value = 1
    }
    isAccount.value = true
}
//校验密码
const validatePassword = () => {
    console.log(params.password);
    if (!params.password) {
        showFailToast(i18n.t("tip3"))
        return
    }
    if (!/^[a-zA-Z0-9]{3,16}$/.test(params.password)) {
        isPassword.value = false
        showFailToast(i18n.t("tip4"))
        return
    } else {
        isPassword.value = true
    }
}

//获取验证码
const sendVerifyCode = () => {
    validateAccount()
    if (!isAccount.value) {
        return
    }
    SendInfo({
        account: params.account,
        type: loginType.value,
        languageType: props.currentData.languageId
    }).then(() => {
    })
    IsCountDown.value = true
    countDown.time = 30;
    countDown.interval = setInterval(() => {
        if (countDown.time == 0) {
            clearInterval(countDown.interval);
            countDown.interval = null;
            IsCountDown.value = false
        } else {
            countDown.time--;
        }
    }, 1000);
}

//提交登录注册
const onSubmit = () => {
    validateAccount()
    validatePassword()
    if (!isAccount.value) {
        return
    }
    if (!isPassword.value) {
        return
    }
    if (!checked.value) {
        return showFailToast(i18n.t("tip5"));
    }
    //1 为登入 2为注册
    if (isActive.value == 1) {
        LoginUser({
            account: params.account,
            password: params.password,
            verifyCode: '',
            signTypeId: loginType.value,
            gameId: props.currentData.id,
            carrierId: props.currentData.carrierId
        }).then(res => {
            localStorage.setItem("gameData", JSON.stringify(props.currentData))
            localStorage.setItem("userId", res.id)
            localStorage.setItem("userImg", res.userImg)
            Show.value = false
        })
    } else if (isActive.value == 2) {
        if (!params.code) {
            showFailToast(i18n.t("tip6"))
            return
        }
        RegisterUser({
            account: params.account,
            password: params.password,
            verifyCode: params.code,
            signTypeId: loginType.value,
            gameId: props.currentData.id,
            carrierId: props.currentData.carrierId
        }).then(res => {
            localStorage.setItem("gameData", JSON.stringify(props.currentData))
            localStorage.setItem("userId", res.id)
            localStorage.setItem("userImg", res.userImg)
            Show.value = false
        })
    }

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
        <van-dialog v-model:show="Show" class="main" :showConfirmButton="false" :showCancelButton="false">
            <div class="centent">
                <div class="title">
                    <span @click="login" :class="isActive == 1 ? 'active' : ''">{{$t('login')}}</span>
                    <span @click="register" :class="isActive == 2 ? 'active' : ''">{{$t('register')}}</span>
                </div>
                <van-form @submit="onSubmit" class="form">
                    <van-cell-group inset style="margin: 0;">

                        <div class="label">{{$t('account')}}</div>
                        <div class="account">
                            <!-- <div class="area" @click.stop="isAreaCode = true">
                                <span>+{{ params.area_code }}</span>
                                <van-icon :name="isAreaCode ? 'arrow-up' : 'arrow-down'" size="0.56rem" />
                            </div> -->
                            <van-field name="账户" v-model="params.account" :placeholder="accountTip" />
                        </div>

                        <div v-if="code">
                            <div class="label">{{$t('captcha')}}</div>
                            <div class="code">
                                <van-field name="验证码" v-model="params.code" />

                                <div class="countdown" v-if="IsCountDown"><img @click="codeDelete"
                                        src="../../assets/icon/close.png" alt="">{{$t('resend')}}
                                    ({{ countDown.time }}s)
                                </div>
                                <div class="tips" v-else @click="sendVerifyCode">{{$t('codetxt')}}</div>
                            </div>
                        </div>

                        <div class="label">{{$t('password')}}</div>
                        <div class="pwd">
                            <van-field :type="showornot" name="密码" v-model="params.password" :placeholder="$t('passwordtxt')" />
                            <img @click="open" src="../../assets/icon/password_open.png" alt="" v-if="iSopen">
                            <img @click="open" src="../../assets/icon/password_closed.png" alt="" v-else>
                        </div>

                    </van-cell-group>
                    <div style="margin: .96rem 0;">
                        <van-button round block type="primary" native-type="submit">
                            {{isActive==1?$t('login'):$t('register')}}
                        </van-button>
                    </div>
                </van-form>
                <div class="footer">
                    <!-- <img @click="check" :src="require(''+activeImageUrl)" alt=""> -->
                    <img @click="check" src="@/assets/icon/icon_picture_choose.png" alt="" v-if="checked">
                    <img @click="check" src="@/assets/icon/icon_picture_selected.png" alt="" v-else>

                    <div class="txt">{{$t('privacy')}} <span><router-link to="/policy">"{{$t('privacy2')}}"</router-link></span> {{$t('privacy3')}} <span><router-link to="/policy">"{{$t('privacy4')}}"</router-link></span></div>
                </div>
            </div>
        </van-dialog>
        <!-- <AreaCode v-model="params.area_code" v-model:show="isAreaCode" /> -->
    </div>
</template>

<style lang="less" scoped>
.main {

    .centent {
        padding: .96rem .64rem;

        .title {
            display: flex;
            justify-content: space-between;
            font-family: PingFang SC;
            font-size: .8rem;
            font-weight: 600;
            line-height: 1.04rem;
            color: rgba(100, 101, 102, 1);
            padding: 0 .96rem;

            .active {
                position: relative;
                color: rgba(0, 0, 0, 1);

            }

            .active::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -0.24rem;
                width: .96rem;
                height: .16rem;
                margin-top: .24rem;
                border-radius: 2rem;
                background: rgba(56, 104, 255, 1);
                transition: all 0.3s ease-out;
            }
        }

        ::v-deep .form {
            margin-top: .24rem;

            .label {
                font-family: PingFang SC;
                font-size: .72rem;
                font-weight: 400;
                line-height: 1rem;
                color: rgba(26, 26, 26, 1);
                margin: .64rem 0 .48rem;
            }

            .account {
                position: relative;

                .area {
                    position: absolute;
                    left: .32rem;
                    top: .56rem;
                    z-index: 1;
                }
            }

            .van-cell {
                padding: 0;
                margin: 0;

                input {
                    height: 1.92rem;
                    font-family: PingFang SC;
                    font-size: .56rem;
                    font-weight: 500;
                    line-height: .64rem;
                    color: rgba(0, 0, 0, 1);
                    background: rgba(248, 250, 255, 1);
                    border: 0;
                    padding: .64rem .48rem;
                    border-radius: .24rem;
                }

                input::-webkit-input-placeholder {
                    font-family: PingFang SC;
                    font-size: .56rem;
                    font-weight: 400;
                    line-height: .64rem;
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
                    right: .48rem;
                    top: .64rem;
                    font-family: PingFang SC;
                    font-size: .56rem;
                    font-weight: 500;
                    line-height: .64rem;
                    color: rgba(56, 104, 255, 1);
                }

                .countdown {
                    position: absolute;
                    right: .48rem;
                    top: .64rem;
                    display: flex;
                    align-items: center;
                    font-family: PingFang SC;
                    font-size: .56rem;
                    line-height: .64rem;
                    color: rgba(199, 202, 211, 1);

                    >img {
                        width: .56rem;
                        height: .56rem;
                        margin-right: .64rem;
                    }
                }
            }


            .pwd {
                position: relative;

                >img {
                    position: absolute;
                    right: .48rem;
                    top: .6rem;
                    width: .72rem;
                    height: .72rem;
                }
            }

            .van-button {
                font-family: PingFang SC;
                font-size: .72rem;
                font-weight: 600;
                line-height: .96rem;
                color: rgba(255, 255, 255, 1);
                border-radius: .24rem;
                border: 0;
                background: linear-gradient(198.03deg, #C3CCF6 -89.02%, #3868FF 99%);

            }

        }

        .footer {
            display: flex;

            >img {
                width: .56rem;
                height: .56rem;
            }

            .txt {
                font-family: PingFang SC;
                font-size: .48rem;
                font-weight: 400;
                line-height: .64rem;
                color: rgba(150, 151, 153, 1);
                margin-left: .24rem;

                >span {
                    color: rgba(56, 104, 255, 1);
                }
            }
        }
    }
}

::v-deep .van-toast--text {
    background: red !important;
    z-index: 10000 !important;
}
</style>