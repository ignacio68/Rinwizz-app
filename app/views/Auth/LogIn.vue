<template>
  <Page actionBarHidden="true">
    <StackLayout class="logIn">
      <StackLayout class="logIn__wrapper">
        <!-- TITLE -->
        <Label
          class="logIn__title"
          :text="$t('lang.views.login.title')"
          textWrap="true"
        />

        <!-- ERROR -->
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
        <FlexboxLayout
          flexWrap="wrap"
          class="forgotPassword__wrapper"
        >
          <Label
            class="forgotPassword__text"
            :text="$t('lang.views.login.main.forgot_text')"
            textWrap="true"
          />
          <Label
            class="forgotPassword__link"
            :text="$t('lang.views.login.main.forgot_link')"
            textWrap="true"
            @tap="onForgotPassword"
          />
        </FlexboxLayout>

        <!-- LOGIN BUTTON -->
        <Button
          class="-primary -rounded-lg logIn__button"
          :text="$t('lang.views.login.button')"
          @tap="onLogIn"
        />
      </StackLayout>

      <!-- SIGNUP BUTTON -->
      <!-- TODO: cambiar a FlexboxLayout -->
      <FlexboxLayout
        class="signUp__wrapper"
        flexWrap="wrap"
      >
        <Label
          class="signUp__text-text"
          textWrap="true"
          :text="$t('lang.views.login.main.signUp_text')"
        />
        <Label
          class="signUp__text-link"
          :text="$t('lang.views.login.main.signUp_link')"
          textWrap="true"
          @tap="toSignUp"
        />
      </FlexboxLayout>
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
      },
      isError: false
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
.logIn {
  background-color: white;
}
.logIn__wrapper {
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
.logIn__title {
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
.forgotPassword__wrapper {
  padding: {
    top: 4;
    left: 72;
  }
}
.forgotPassword__link {
  color: teal;
  font-weight: bold;
}
.error {
  color: red;
}
.logIn__button {
  margin-bottom: 16;
  padding: {
    left:24;
    right: 24;
  }
}
.signUp__wrapper {
  padding: {
    top: 16;
    left: 40;
  }
}
.signUp__text-link {
  color: teal;
  font-weight: bold;
  padding-left: 2;
}
</style>
