<template>
  <Page>
    <ActionBar title="SignUp" />
    <StackLayout>
      <RadDataForm :source="person">
      </RadDataForm>
      <Button text="LogIn" @tap="toLogIn" />
      <Button text="PrivacyPolicy" @tap="toPrivacyPolicy" />
      <Button text="Terms of Service" @tap="toTermsOfService" />
      <Button
        class="PasswordConfirmation-button"
        text="Password Confirmation"
        @tap="toPasswordConfirmation"
      />
      <Button text="Ok" @tap="toPersonal" />
    </StackLayout>
  </Page>
</template>
<script>
import LogIn from './LogIn'
import ConfirmEmail from './ConfirmEmail'
import PrivacyPolicy from '@views/Shared/PrivacyPolicy'
import TermsOfService from '@views/Shared/TermsOfService'
import Personal from '@views/Preferences/Personal'
export default {
  name: 'SignUp',
  components: {
    ConfirmEmail
  },
  data() {
    return {
      person: {
        name: 'Ignacio',
        age: 51,
        email: 'ignaciolopezamor@gmail.com',
        city: 'Madrid',
        street: 'Ramón de Santillán',
        streetNumber: 15
      }
    }
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
<style scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
.PasswordConfirmation-button {
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: coral;
}
</style>
