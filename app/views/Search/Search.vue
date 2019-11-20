<template>
  <Page class="page">
    <ActionBar title="Search" class="action-bar" />
    <StackLayout backgroundColor="#eb50e0">
      <Label class="text" text="Search page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'Search',
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
