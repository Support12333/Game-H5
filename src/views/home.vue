<script>
import { ref } from 'vue';

export default {
   setup() {
      const show = ref(false);

      const username = ref('');
      const password = ref('');
      const onSubmit = (values) => {
         console.log('submit', values);
      };


      return {
         show, username,
         password,
         onSubmit,
      };

   },
}

</script>


<template>
   <div>1234654654</div>
   <van-dialog v-model:show="show" show-cancel-button>
      <div class="title"><span>Login</span><span>Register</span></div>
      <!-- <van-form @submit="onSubmit">
         <van-cell-group inset>
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
               :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
               :rules="[{ required: true, message: '请填写密码' }]" />
         </van-cell-group>
         <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
               提交
            </van-button>
         </div>
      </van-form> -->

   </van-dialog>
</template>

<style lang="less" scoped>
.title {
   font-size: 20px;
}
</style>