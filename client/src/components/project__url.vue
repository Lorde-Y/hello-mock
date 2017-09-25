<template>
  <div class='interface__list'>
    <div v-if="dataList.length === 0">
      <span>暂无接口，请创建！</span>
    </div>
    <div v-else>
      <Table border :columns="columns" :data="dataList" :type="type"></Table>
    </div>
  </div>

</template>
<script>
  import expandRow from './project__url__expand';
  import { mapActions } from 'vuex';
  export default {
    components: { expandRow },
    data () {
      return {
        type: 'expand',
        dataList: [],
        columns: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              });
            }
          },
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Method',
            key: 'method',
            width: 100,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    long: true
                  }
                }, params.row.method)
              ]);
            }
          },
          {
            title: 'URL',
            key: 'url'
          },
          {
            title: '描述',
            key: 'interfaceDesc'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ]
        // data: [
        //   {
        //     name: '王小明',
        //     age: 18,
        //     address: '北京市朝阳区芍药居'
        //   },
        //   {
        //     name: '张小刚',
        //     age: 25,
        //     address: '北京市海淀区西二旗'
        //   },
        //   {
        //     name: '李小红',
        //     age: 30,
        //     address: '上海市浦东新区世纪大道'
        //   },
        //   {
        //     name: '周小伟',
        //     age: 26,
        //     address: '深圳市南山区深南大道'
        //   }
        // ]
      };
    },
    mounted () {
      this.getProjectInterfaces()
      .then((res) => {
        const { status, data, success } = res;
        if (status === 200 && data && success) {
          this.dataList = data;
        }
      })
      .catch((error) => {
        if (error) {
          this.dataList = [];
        }
      });
    },
    watch: {
      dataList: (val) => {
        return Object.assign([], val);
      }
      // dataList: {
      //   get: function () {
      //     console.log('.....get...');
      //     return Object.assign([], this.$store.state.interfaceList);
      //   },
      //   set: function (newValue) {
      //     console.log('......setter....');
      //     console.log(newValue);
      //     return Object.assign([], newValue);
      //   }
      // }
    },
    methods: {
      ...mapActions([
        'getProjectInterfaces'
      ]),
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
        });
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .interface__list {
    color: #000;
  }
</style>

