<template>
  <div>
    <Header-top></Header-top>
    <div class='create__project'>
      <div class='create__content'>
        <Form :model="formTop" label-position="left">
          <FormItem label="项目名">
              <Input v-model="formTop.name" placeholder='例如：example'></Input>
          </FormItem>
          <FormItem label="项目基础URL">
            <Input v-model="formTop.url" placeholder='example'>
                <span slot="prepend" >/</span>
            </Input>
          </FormItem>
          <FormItem label="项目描述">
              <Input v-model="formTop.desc" placeholder='写点介绍咯'></Input>
          </FormItem>
          <FormItem label="邀请成员 (可选)">
            <Input v-model="formTop.member" placeholder='用户昵称、支持模糊匹配'></Input>
          </FormItem>
          <Button type="success" long :loading="loading" @click="onCreateProject">
            <span v-if='!loading'>确认提交</span>
            <span v-else>创建项目ing...</span>
          </Button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '@/components/Header';
  import { mapActions } from 'vuex';
  export default {
    name: 'create',
    data () {
      return {
        loading: false,
        formTop: {
          name: '',
          url: '',
          desc: '',
          member: ''
        }
      };
    },
    components: {
      HeaderTop
    },
    methods: {
      ...mapActions([
        'createOneProject'
      ]),
      showCreateError (error) {
        this.$Notice.error({
          title: '提示',
          desc: error || '网络错误，请重试'
        });
        return false;
      },
      validateFormData () {
        let { name, url, desc } = this.formTop;
        if (!name || name === '') {
          return this.showCreateError('project name can not be empty.');
        }
        if (!url || url === '') {
          return this.showCreateError('project url can not be empty.');
        }
        if (!desc || desc === '') {
          return this.showCreateError('project desc can not be empty.');
        }
        return true;
      },
      onCreateProject () {
        const validateFlag = this.validateFormData();
        if (!validateFlag) {
          return false;
        }
        this.loading = true;
        let { name, url, desc, member } = this.formTop;
        this.createOneProject({
          projectName: name,
          projectUrl: url,
          projectDesc: desc,
          projectMember: member
        }).then((res) => {
          setTimeout(() => {
            this.loading = false;
            const data = Object.assign({}, res);
            if (data.errorMsg) {
              return this.showCreateError(data.errorMsg);
            }
            this.$router.push({path: `project/${data.projectId}`});
          }, 300);
        }).catch((err, data) => {
          if (err) {
            setTimeout(() => {
              this.loading = false;
              this.showCreateError('创建失败，请重试！');
            }, 300);
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .create__project {
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    color: #495060;
    font-weight: 400;
    position: relative;
    transition: all .2s ease-in-out;
  }
  .create__content {
    padding: 66px 260px 42px;
    margin-top: 20px;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 2px 3px #eee;
    box-shadow: 0 2px 3px #eee;
    border-radius: 4px;
    margin-bottom: 20px;
    .ivu-form {
      width: 460px;
      margin: 0 auto;
      .ivu-form-item-label {
        font-weight: 600;
        font-size: 13px;
        color: #495060;
      }
    }
  }
</style>