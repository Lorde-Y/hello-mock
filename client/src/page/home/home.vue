<template>
  <div>
    <Header-top></Header-top>
    <div class='project'>

      <div class='project__item'>
        <div class='project__item--add'>
          <div class='project__item--icon'>+</div>
          <div class='project__item--text'>点击开始创建项目</div>
        </div>
      </div>

      <div class='project__item'>
        <h2>演示项目_1504861655165</h2>
        <div class='project-description'>已创建多种 Mock 类型，只需点击预览便可查看效果。亦可编辑，也可删除。</div>
        <div class='project-url'>/example_1504861655165</div>
        <div class='project-member'>simon KAi</div>
        <div class='project-control'></div>
      </div>

      <div class='project__item'>
        <h2>演示项目_1504861655165</h2>
        <div class='project-description'>已创建多种 Mock 类型，只需点击预览便可查看效果。亦可编辑，也可删除。</div>
        <div class='project-url'>/example_1504861655165</div>
        <div class='project-member'>simon KAi</div>
        <div class='project-control'></div>
      </div>

      <div class='project__item'>
        <h2>演示项目_1504861655165</h2>
        <div class='project-description'>已创建多种 Mock 类型，只需点击预览便可查看效果。亦可编辑，也可删除。</div>
        <div class='project-url'>/example_1504861655165</div>
        <div class='project-member'>simon KAi</div>
        <div class='project-control'></div>
      </div>

      <div class='project__item'>
        <h2>演示项目_1504861655165</h2>
        <div class='project-description'>已创建多种 Mock 类型，只需点击预览便可查看效果。亦可编辑，也可删除。</div>
        <div class='project-url'>/example_1504861655165</div>
        <div class='project-member'>simon KAi</div>
        <div class='project-control'></div>
      </div>

      <div class='project__item'>
        <h2>演示项目_1504861655165</h2>
        <div class='project-description'>已创建多种 Mock 类型，只需点击预览便可查看效果。亦可编辑，也可删除。</div>
        <div class='project-url'>/example_1504861655165</div>
        <div class='project-member'>simon KAi</div>
        <div class='project-control'></div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '@/components/Header';
  export default {
    name: 'home',
    data () {
      return {
        a: 'aaa'
      };
    },
    components: {
      HeaderTop
    }
  };
</script>

<style lang="scss" scoped>
  .project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    color: #495060;
    font-weight: 400;
  }
  .project__item {
    width: 24%;
    background: #fff;
    padding: 0 14px 20px;
    -webkit-box-shadow: 0 1px 5px #e5e5e5;
    box-shadow: 0 1px 5px #e5e5e5;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .project__item--add {
    font-size: 100px;
    transition: all .3s;
    .project__item--text {
      font-size: 16px;
    }
    &:hover {
      color: #ff8533;
    }
  }
  h2 {
    padding-top: 10px;
    font-weight: 700;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .project-description, .project-member, .project-url {
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-top: 10px;
    background: #f5f5f5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    &::before {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      background: #f84c5b;
      border-radius: 4px;
      margin-bottom: 3px;
    }
  }
  .project-description {
     &::before {
      background: #2d8cf0;
     }
  }

</style>