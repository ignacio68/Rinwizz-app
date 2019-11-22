<template>
  <StackLayout class="page">
    <Label
      class="text"
      text="Alert Script page"
      height="70"
      textWrap="true"
    />
  </StackLayout>
</template>
<script>
export default {
  name: 'AlertScript',
  props: {},
  data() {
    return {
      alert: {}
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
