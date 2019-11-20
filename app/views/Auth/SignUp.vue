<template>
  <Page actionBarHidden="true">
    <StackLayout class="m-x-24">
      <TextView
        :text="$t('lang.views.signup.main.text1')"
        class="mainText"
      />
      <DataForm />
      <SocialButtons />
      <Button
        :text="$t('lang.views.signup.main.text2')"
        @tap="toLogIn"
      />
      <Button
        text="PrivacyPolicy"
        @tap="toPrivacyPolicy"
      />
      <Button
        text="Terms of Service"
        @tap="toTermsOfService"
      />
      <Button
        class="PasswordConfirmation-button"
        text="Password Confirmation"
        @tap="toPasswordConfirmation"
      />
      <Button
        text="Ok"
        @tap="toPersonal"
      />
    </StackLayout>
  </Page>
</template>
<script>
import signUpDataForm from '@components/Auth/signUpDataForm'
import socialButtons from '@components/Auth/socialButtons'
import LogIn from './LogIn'
import ConfirmEmail from './ConfirmEmail'
import PrivacyPolicy from '@views/Shared/PrivacyPolicy'
import TermsOfService from '@views/Shared/TermsOfService'
import Personal from '@views/Preferences/Personal'
export default {
  name: 'SignUp',
  components: {
    DataForm: signUpDataForm,
    SocialButtons: socialButtons,
    ConfirmEmail
  },
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
    },
    toPasswordConfirmation() {
      alert({
        title: 'Password Confirmation',
        message: 'Send an email to password confirmation',
        cancelable: true,
        okButtonText: 'Ok'
      }).then(() => this.toPersonal())
    }
  }
}
</script>
<style lang="scss" scoped>
.mainText {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 16;
  padding {
    right: 16px;
    left: 16px;
  }
  color: darkred;
}
.PasswordConfirmation-button {
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #fc284f;
}
</style>
