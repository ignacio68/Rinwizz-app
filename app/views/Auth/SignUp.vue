<template>
  <Page>
    <ActionBar title="SignUp" />
    <StackLayout>
      <Label class="text" text="SignUp page" textWrap="true" />
      <Button text="LogIn" @tap="toLogIn" />
      <Button text="PrivacyPolicy" @tap="toPrivacyPolicy" />
      <Button text="Terms of Service" @tap="toTermsOfService" />
      <Button text="Ok" @tap="toPersonal" />
    </StackLayout>
  </Page>
</template>
<script>
import LogIn from './LogIn'
import PrivacyPolicy from '../Shared/PrivacyPolicy'
import TermsOfService from '../Shared/TermsOfService'
import Personal from '../Preferences/Personal'
export default {
  name: 'SignUp',
  data() {
    return {}
  },
  methods: {
    toLogIn() {
      this.$navigateTo(LogIn)
    },
    toPrivacyPolicy() {
      this.$navigateTo(PrivacyPolicy)
    },
    toTermsOfService() {
      this.$navigateTo(TermsOfService)
    },
    toPersonal() {
      this.$navigateTo(Personal)
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
