<template>
  <StackLayout>
    <Label
      class="text"
      text="Alert Script page"
      height="70"
      backgroundColor="#B7D1A3"
      textWrap="true"
    />
    <RadDataForm :source="alert">
    </RadDataForm>
  </StackLayout>
</template>
<script>
export default {
  name: 'AlertScript',
  props: {},
  data() {
    return {
      alert{}
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
