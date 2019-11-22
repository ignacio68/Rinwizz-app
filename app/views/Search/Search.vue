<template>
  <Page>
    <ActionBar title="Search"/>
    <StackLayout backgroundColor="#eb50e0">
      <Label
        class="text"
        text="Search page"
        textWrap="true"
      />
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
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
