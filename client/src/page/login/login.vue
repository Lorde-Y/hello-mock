<template>
  <div class='login'>
    <div class='login__wrapper'></div>
    <div class='login__form'>
      <div class='form__container'>
        <h1>Hello Mock</h1>
        <div class='form__input'>
          <Button type="success" long :loading="loading" @click="onLoading">
            <span v-if='!loading'>登录</span>
            <span v-else>登录ing...</span>
          </Button>
          <Input v-model='userName' size='large' placeholder='用户名，没有会自动注册哦'></Input>
          <Input v-model='passWord' size='large' placeholder='密码'></Input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        loading: false,
        userName: '',
        passWord: ''
      };
    },
    // mounted () {
    //   this.loginByUsername({
    //     username: this.userName,
    //     password: this.passWord
    //   }).then((data) => {
    //     console.log(data);
    //   });
    // },
    methods: {
      ...mapActions([
        'loginByUsername'
      ]),
      showLoadingError (error) {
        this.$Notice.error({
          title: '',
          desc: error || '用户名或密码有误'
        });
      },
      onLoading () {
        this.loading = true;
        this.loginByUsername({
          username: this.userName,
          password: this.passWord
        }).then((res) => {
          setTimeout(() => {
            this.loading = false;
            const data = Object.assign({}, res);
            if (data.errorMsg) {
              return this.showLoadingError(data.errorMsg);
            }
            this.$router.push({path: 'home'});
          }, 300);
        }).catch((err, data) => {
          if (err) {
            setTimeout(() => {
              this.loading = false;
              this.showLoadingError('用户名或密码有误');
            }, 300);
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(./images/login-bg.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login {
    &__wrapper {
      &:before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        transition: all .5s;
      }
    }
    &__form {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  .form__container {
    width: 400px;
    h1 {
      font-size: 36px;
    }
    button {
      margin: 20px 0;
      height: 40px;
      line-height: 1;
      font-size: 18px;
    }
    .ivu-input-wrapper {
      margin-bottom: 10px;
    }
  }
</style>