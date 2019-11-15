<template>
  <Page>
    <ActionBar title="Terms of Service" backgroundColor="#C2768E">
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
import SignUp from '@views/Auth/SignUp'
export default {
  name: 'TermsOfService',
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
