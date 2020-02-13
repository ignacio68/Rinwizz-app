<template>
  <Page actionBarHidden="true">
    <StackLayout class="logIn">
      <StackLayout class="logIn__wrapper">
        <!-- TITLE -->
        <Label
          class="logIn__title"
          :text="$t('lang.views.login.toolbar.title')"
          textWrap="true"
        />

        <!-- ERROR -->
        <!-- TODO: add feedback component -->
        <Label
          v-if="isError"
          class="text-danger"
          :text="errorMessage"
          textWrap="true"
        />

        <!-- DATA FORM -->
        <TheSignDataForm
          :isDisplayName="false"
          @emailModified="setEmail"
          @passwordModified="setPassword"
        />

        <!-- FORGOT PASSWORD -->
        <!-- TODO: cambiar a FlexboxLayout -->
        <Label
          class="-primary forgotPassword"
          :text="$t('lang.views.login.main.text1')"
          @tap="onForgotPassword"
        />

        <!-- LOGIN BUTTON -->
        <Button
          class="-primary -rounded-lg accept__button"
          :text="$t('lang.views.login.button')"
          @tap="onLogIn"
        />
      </StackLayout>

      <!-- SIGNUP BUTTON -->
      <!-- TODO: cambiar a FlexboxLayout -->
      <Button
        class="-primary signUp__button"
        :text="$t('lang.views.login.main.text2')"
        @tap="toSignUp"
      />
    </StackLayout>
  </Page>
</template>
<script>
// Store
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
      this.toAlerts()
    },
    onForgotPassword() {
      alert({
        message: 'He olvidado la contraseña',
        cancelable: true,
        okButtonText: 'Ok'
      })
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
.signIn {
  background-color: white;
}
.signIn__wrapper {
  background-color: whitesmoke;
  margin: {
    top: 80;
    left: 16;
    right: 16;
  }
  border: {
    radius: 25%;
    width: 1;
    color: teal;
  }
}
.signIn__title {
  text-align: left;
  font: {
    size: 20;
    weight: 900;
  }
  margin: {
    top: 24;
    left: 16;
  }
  padding {
    right: 24;
    left: 24;
  }
  color:teal;
}
.error {
  color: red;
}
</style>
