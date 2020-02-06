<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label
        :text="$t('lang.views.login.toolbar.title')"
        textWrap="true"
      />

      <TheSignDataForm
        @emailModified="setEmail"
        @passwordModified="setPassword"
      />

      <!-- FORGOT PASSWORD -->
      <Button
        class="-primary"
        :text="$t('lang.views.login.main.text1')"
        @tap="onForgotPassword"
      />

      <!-- BUTTON LOGIN -->
      <Button
        class="-primary"
        :text="$t('lang.views.login.button')"
        @tap="onLogIn"
      />

      <!-- SIGNUP BUTTON -->
      <Button
        class="-primary"
        :text="$t('lang.views.login.main.text2')"
        @tap="toSignUp"
      />

      <Button
        class="-primary"
        text="Ok"
        @tap="toAlerts"
      />
    </StackLayout>
  </Page>
</template>
<script>
import { mapActions } from 'vuex'
// Components
import TheSignDataForm from '@components/Auth/TheSignDataForm'

// Views
import SignUp from './SignUp'
import AppSplitter from '@views/AppSplitter'

export default {
  name: 'LogIn',
  components: {
    TheSignDataForm
  },
  data() {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['LOGIN_USER']),
    setEmail(newValue){
      this.userData.email = newValue
    },
    setPassword(newValue) {
      this.userData.password = newValue
    },
    onLogIn() {
      const logInData = {
        email: this.userData.email,
        password: this.userData.password
      }
      console.log(logInData)
      // this.LOGIN_USER(logInData)
    },
    onForgotPassword() {
      console.log('He olvidado la contraseña')
    },
    toSignUp() {
      this.$navigateTo(SignUp)
    },
    toAlerts() {
      this.$navigateTo(AppSplitter)
    }
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
