<template>
  <div>
    <Header-top></Header-top>
    <div class='project-container'>
      <div class='project-detail__info'>
        <Row>
          <Col span="18">
            <div class='project__base'>
              <h3>Example</h3>
              <h4>http://localhost:8080/projectId/baseUrl</h4>
              <h5>这里是项目简介描述</h5>
            </div>
          </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="5">
            <div class='project__option'>
              <div class='project__option--edit'>
                <Menu :theme="theme3" active-name="1">
                    <MenuItem name="1">
                      <div @click="modal1 = true">
                        <Icon type="settings"></Icon>
                        编辑项目
                      </div>
                    </MenuItem>
                    <MenuItem name="2">
                      <div @click="modal1 = true">
                        <Icon type="trash-b"></Icon>
                        删除项目
                      </div>
                    </MenuItem>
                    <MenuItem name="3">
                      <div @click="modal1 = true">
                        <Icon type="plus-circled"></Icon>
                        创建接口
                      </div>
                    </MenuItem>
                  </Menu>
                <Modal
                    v-model="modal1"
                    title="普通的Modal对话框标题">
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                    <p>对话框内容</p>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '@/components/Header';
  import { mapActions } from 'vuex';
  export default {
    name: 'project',
    data () {
      return {
        theme3: 'light',
        modal1: false,
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
            // this.$router.push({path: 'home'});
            console.log('success....');
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
  .project-container {
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    font-weight: 400;
    position: relative;
    text-align: left;
    transition: all .2s ease-in-out;
  }
  .ivu-col-span-18 {
    padding: 30px 20px 46px 20px;
    // margin: 20px 0;
    font-size: 16px;
    color: #fff;
    background: #2d8cf0;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 3px #eee;
    box-shadow: 0 2px 3px #eee;
  }
  .project-detail__info {
    padding: 20px;
  }
  .project__option {
    .ivu-menu {
      box-shadow: 0 0 3px #000;
      text-align: center;
      background: #252d47;
      color: #f7f7f7;
      li {
        transition: all .2s ease-in-out;
        &:hover {
          background: transparent;
        }
      }
      .ivu-menu-item:not(.ivu-menu-item-active){
        border-right: 2px solid #252d47;
        z-index: 2;
      }
    }
  }
</style>