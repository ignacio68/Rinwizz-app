<template>
  <Page class="page">
    <StackLayout class="sidedrawer-header">
      <label text="Settings" class="sidedrawer-header-brand" />
    </StackLayout>
    <StackLayout>
      <Label class="text" text="Settings page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'Settings',
  data() {
    return {}
  }
}
</script>
<style>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
