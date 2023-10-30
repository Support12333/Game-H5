<script setup>
import { ref } from 'vue';
const show = ref(true);
// const username = ref('');
// const password = ref('');

//验证码是否显示
const code = ref(false)

const isActive = ref(true)
const activeImageUrl = ref('../../assets/icon/icon_picture_selected.png')

//点击切换登陆
const login = () => {
    console.log('登陆');
    code.value = false
    isActive.value = true
}

//点击切换注册
const register = () => {
    console.log('注册');
    code.value = true
    isActive.value = true
}

//勾选隐私政策
const check = () => {
    activeImageUrl.value = '../../assets/icon/icon_picture_choose.png'
}

const onSubmit = (values) => {
    console.log('submit', values);
};
</script>

<template>
    <div>
        <van-dialog v-model:show="show" class="main" :showConfirmButton="false" :showCancelButton="false">
            <div class="centent">
                <div class="title">
                    <span @click="login" :class="{ active: isActive }">Login</span>
                    <span @click="register" :class="{ active: isActive }">Register</span>
                </div>
                <van-form @submit="onSubmit" class="form">
                    <van-cell-group inset style="margin: 0;">

                        <div class="label">account</div>
                        <van-field name="用户名" placeholder="Enter mobile phone number/email" />

                        <div v-if="code">
                            <div class="label">Captcha</div>
                            <div class="code">
                                <van-field name="验证码" />
                                <div class="tips" style="display: none;">get verification code</div>
                                <div class="countdown"><img src="../../assets/icon/close.png" alt="">Resend (30s)</div>
                            </div>
                        </div>

                        <div class="label">password</div>
                        <div class="pwd">
                            <van-field type="password" name="密码" placeholder="enter password" />
                            <img src="../../assets/icon/password_closed.png" alt="">
                        </div>

                    </van-cell-group>
                    <div style="margin: 24px 0;">
                        <van-button round block type="primary" native-type="submit">
                            Login
                        </van-button>
                    </div>
                </van-form>
                <div class="footer">
                    <img @click="check" :src='activeImageUrl' alt="">
                    <div class="txt">I have read and agreed to the <span>"User Service Agreement"</span> and <span>"Privacy
                            Policy"</span></div>
                </div>
            </div>
        </van-dialog>
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
</style>