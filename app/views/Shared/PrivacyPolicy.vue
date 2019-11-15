<template>
  <Page>
    <ActionBar title="Privacy Policy" backgroundColor="#83555E">
      <!-- TODO: areglar el uso de iconos -->
      <NavigationButton
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
