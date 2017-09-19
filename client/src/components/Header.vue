<template>
  <header class='layout'>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">Hello Mock</div>
      <div class="layout-nav">
        <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            导航一
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            导航二
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            导航三
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            导航四
        </MenuItem>
      </div>
    </Menu>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop',
  data () {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout{
  background: #495060;
  ul {
    width: 1200px;
    margin: 0 auto;
  }
}
.layout-logo{
  /*width: 100px;*/
  height: 30px;
  line-height: 30px;
  font-size: 23px;
  color: #fff;
  /*background: #5b6270;*/
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
}
.layout-assistant{
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb{
  padding: 10px 15px 0;
}
.layout-content{
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main{
  padding: 10px;
}
.layout-copy{
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
