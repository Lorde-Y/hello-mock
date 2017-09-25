<template>
  <Modal
    v-model="modelVisible"
    :styles="{top: '0'}"
    :closable="false"
    @on-cancel="onCloseModel"
    width="1000"
    title="创建接口"
  >
    <div class="create__interface">
      <Row :gutter="24">
        <Col span="24" class-name='left-col'>
          <div class='interface__item'>
            <Form ref="formInterface" :model="formInterface" :rules="ruleValidate" label-position="top">
              <FormItem label="Method" prop="method" required>
                <Select v-model="formInterface.method" style="width:200px">
                  <Option v-for="item in methodList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="URL" required prop="url">
                <Input v-model="formInterface.url" placeholder='example'>
                    <span slot="prepend" >/</span>
                </Input>
              </FormItem>
              <FormItem label="接口描述" required prop="desc">
                  <Input v-model="formInterface.interfaceDesc" placeholder='写点介绍咯'></Input>
              </FormItem>
              <FormItem label="参数说明" prop="paramsDesc">
                <Input v-model="formInterface.paramsDesc" type="textarea" :rows="4" placeholder="请输入..."></Input>
              </FormItem>
              <FormItem label="参数<Json格式>" required prop="params">
                <Input v-model="formInterface.params" type="textarea" :rows="8" placeholder="请输入..."></Input>
              </FormItem>
              <FormItem label="返回成功数据<Json格式>" required prop="successData">
                <Input v-model="formInterface.successData" type="textarea" :rows="8" placeholder="请输入..."></Input>
              </FormItem>
              <FormItem label="返回失败数据<Json格式>" required prop="errorData">
                <Input v-model="formInterface.errorData" type="textarea" :rows="8" placeholder="请输入..."></Input>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
    <div slot="footer">
      <template>
        <div>
          <Button type="error" @click="onCloseModel">
            <span>取消</span>
          </Button>
          <Button type="primary" :loading="loading" @click="onConfirmModel">
            <span>创建接口</span>
          </Button>
        </div>
      </template>
    </div>
  </Modal>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        loading: false,
        modelVisible: this.showModel,
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
          method: '',
          url: '',
          interfaceDesc: '',
          paramsDesc: '',
          params: '',
          successData: '',
          errorData: ''
        },
        ruleValidate: {
          selectMethod: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          url: [
            { required: true, message: 'URL不能为空', trigger: 'blur' }
          ],
          params: [
            { required: true, message: '参数不能为空', trigger: 'blur' }
          ],
          successData: [
            { required: true, message: '返回成功数据不能为空', trigger: 'blur' }
          ],
          errorData: [
            { required: true, message: '返回失败数据不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    props: {
      showModel: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showModel (val) {
        this.modelVisible = val;
      }
    },
    methods: {
      ...mapActions([
        'createOneInterface'
      ]),
      forceModelClose () {
        this.$nextTick(() => {
          this.modelVisible = true;
          this.$emit('closeInterface');
        });
      },
      sendInterfaceCreate () {
        const params = {
          ...this.formInterface
        };
        console.log(params);
        this.createOneInterface(params)
        .then((res) => {
          setTimeout(() => {
            this.loading = false;
            this.$Message.success('接口创建成功！');
            this.modelVisible = false;
            this.$Modal.remove();
          }, 1000);
        }).catch((error) => {
          if (error) {
            setTimeout(() => {
              this.loading = false;
              this.$Message.error('创建失败，请重试!');
            }, 1000);
          }
        });
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.sendInterfaceCreate();
          } else {
            setTimeout(() => {
              this.$Message.error('表单验证失败!');
              this.$nextTick(() => {
                this.loading = false;
              });
            }, 1000);
          }
        });
      },
      handleReset (name) {
        // 'formInterface'
        this.$refs[name].resetFields();
      },
      onCloseModel () {
        this.$nextTick(() => {
          this.modelVisible = false;
          this.$emit('closeInterface');
        });
      },
      onConfirmModel () {
        this.loading = true;
        this.handleSubmit('formInterface');
      }
    }
  };
</script>

<style lang="scss">
  .ivu-modal-body {
    padding: 28px;
  }
  .create__interface {
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