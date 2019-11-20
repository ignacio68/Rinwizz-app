<template>
  <StackLayout class="page">
    <Label class="text" text="Alert Script page" height="70" textWrap="true" />
  </StackLayout>
</template>
<script>
// import { RadDataForm } from 'nativescript-ui-dataform/vue'
export default {
  name: 'AlertScript',
  // components: {
  //   RadDataForm
  // },
  props: {},
  data() {
    return {
      alert: {}
    }
  }
}
</script>
<style scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
