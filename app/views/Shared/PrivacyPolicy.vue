<template>
  <Page>
    <ActionBar title="Privacy Policy">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="goBack" />
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
  },
  methods: {
    goBack() {
      this.$navigateTo(SignUp)
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
