<template>
  <div>
    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">Method：</span>
        <span class="expand-value">{{ row.method }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">URL：</span>
        <span class="expand-value">{{ row.url }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">接口描述：</span>
        <span class="expand-value">{{ row.interfaceDesc }}</span>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <span class="expand-key">接口参数：</span>
        <span class="expand-value">{{ row.params }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">返回成功数据：</span>
        <span class="expand-value">{{ row.successData }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">返回失败数据：</span>
        <span class="expand-value">{{ row.errorData }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: {
    row: Object
  }
};
</script>

<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
</style>