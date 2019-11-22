<template>
  <StackLayout class="page">
    <Label
      class="text"
      text="Alert Message component"
      textWrap="true"
    />
  </StackLayout>
</template>
<script>
export default {
  name: 'AlertMessage',
  props: {},
  data() {
    return {}
  },
  methods: {}
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
