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
                <Menu :theme="theme3" active-name="1" :width="menuWidth">
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
                      <div @click="onShowCreateInterface">
                        <Icon type="plus-circled"></Icon>
                        创建接口
                      </div>
                    </MenuItem>
                  </Menu>
                <Modal
                  v-model="modelVisible"
                  width="1000"
                  title="创建接口"
                  ok-text="创建接口"
                >
                  <div class="create__interface">
                    <Row :gutter="24">
                        <Col span="24" class-name='left-col'>
                          <div class='interface__item'>
                            <!-- <Button type="success" long>创建接口</Button> -->
                            <Form :model="formInterface" label-position="top">
                              <FormItem label="Method" prop="selectMethod" required>
                                <Select v-model="formInterface.selectMethod" style="width:200px">
                                  <Option v-for="item in methodList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                              </FormItem>
                              <FormItem label="URL" required>
                                <Input v-model="formInterface.url" placeholder='example'>
                                    <span slot="prepend" >/</span>
                                </Input>
                              </FormItem>
                              <FormItem label="接口描述" required>
                                  <Input v-model="formInterface.desc" placeholder='写点介绍咯'></Input>
                              </FormItem>
                              <FormItem label="参数说明">
                                <Input v-model="formInterface.paramsDesc" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                              <FormItem label="参数<Json格式>" required>
                                <Input v-model="formInterface.params" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                              <FormItem label="返回成功数据<Json格式>" required>
                                <Input v-model="formInterface.success" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                              <FormItem label="返回失败数据<Json格式>" required>
                                <Input v-model="formInterface.error" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                            </Form>
                          </div>
                        </Col>
                        <!-- <Col span="2">&nbsp;</Col> -->
                        <!-- <Col span="12" offset="4">
                          <div class='interface__item'>
                            <Form :model="formInterface" label-position="left">
                              <FormItem label="参数<Json格式>">
                                <Input v-model="formInterface.params" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                              <FormItem label="返回成功数据<Json格式>">
                                <Input v-model="formInterface.params" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                              <FormItem label="返回失败数据<Json格式>">
                                <Input v-model="formInterface.params" type="textarea" :rows="4" placeholder="请输入..."></Input>
                              </FormItem>
                            </Form>
                          </div>
                        </Col> -->
                    </Row>
                  </div>
                </Modal>
                <!-- <div v-if="showCreateInterface">
                  <Create-interface
                    :showModel="showCreateInterface"
                    v-on:closeInterface="closeInterfaceModel"
                  >
                  </Create-interface>
                </div> -->
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div class='project__url'>
        <Project-url></Project-url>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '@/components/Header';
  import ProjectUrl from '@/components/project__url';
  import CreateInterface from '@/components/interface__create';
  import { mapActions } from 'vuex';
  export default {
    name: 'project',
    data () {
      return {
        modelVisible: true,
        showCreateInterface: false,
        theme3: 'light',
        menuWidth: 'auto',
        modal1: false,
        loading: false,
        selectMethod: '',
        methodList: [
          {
            value: 'POST',
            label: 'POST'
          },
          {
            value: 'GET',
            label: 'GET'
          },
          {
            value: 'PUT',
            label: 'PUT'
          },
          {
            value: 'DELETE',
            label: 'DELETE'
          }
        ],
        formInterface: {
          name: '',
          url: '',
          desc: '',
          member: '',
          selectMethod: '',
          paramsDesc: '',
          success: '',
          error: ''
        }
      };
    },
    components: {
      HeaderTop,
      ProjectUrl,
      CreateInterface
    },
    methods: {
      ...mapActions([
        'createOneProject'
      ]),
      closeInterfaceModel () {
        console.log('....calllballl..');
        this.showCreateInterface = false;
      },
      onShowCreateInterface () {
        this.showCreateInterface = true;
      },
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

<style lang="scss">
  .project-container {
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    font-weight: 400;
    position: relative;
    text-align: left;
    transition: all .2s ease-in-out;
  }
  .project-detail__info {
    padding: 20px 0;
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
  .ivu-modal-body {
    padding: 28px;
  }
  .create__interface {
    // display: flex;
    // .interface__item {
    //   flex: 1;
    // }
    .ivu-form {
      textarea.ivu-input {
        background: #2F3129;
        color: #8F908A;
      }
      .ivu-form-item-label {
        font-weight: 600;
        font-size: 14px;
        color: #495060;
      }
    }
  }
</style>