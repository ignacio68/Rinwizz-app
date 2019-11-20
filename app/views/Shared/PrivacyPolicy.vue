<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Privacy Policy">
      <!-- TODO: areglar el uso de iconos -->
      <NavigationButton
        class="action-item"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <StackLayout>
      <Label class="text" text="Privacy Policy page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from '@views/Auth/SignUp'
export default {
  name: 'PrivacyPolicy',
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
