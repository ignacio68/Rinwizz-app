<template>
  <Page>
    <ActionBar title="Alerts" />
    <StackLayout backgroundColor="#58e821">
      <Label class="text" text="Alerts page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'Alerts',
  data() {
    return {}
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
