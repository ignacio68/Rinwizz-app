<template>
  <Page>
    <ActionBar title="Terms of Service">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <StackLayout>
      <Label
        class="text"
        text="Terms of Service page"
        textWrap="$navigateBack"
      />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'TermsOfService',
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
