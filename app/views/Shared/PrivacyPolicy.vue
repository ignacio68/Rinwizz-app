<template>
  <Page>
    <ActionBar title="Privacy Policy" backgroundColor="#83555E">
      <!-- TODO: areglar el uso de iconos -->
      <NavigationButton
        icon="res://close-circle"
        @tap="$navigateBack"
        class="pef"
      />
    </ActionBar>
    <StackLayout>
      <Label class="text" text="Privacy Policy page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from '../Auth/SignUp'
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
.pef {
  font-family: 'Pe-icon-7-stroke';
}
</style>
