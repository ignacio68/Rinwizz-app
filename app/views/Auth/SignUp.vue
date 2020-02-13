<template>
  <Page actionBarHidden="true">
    <StackLayout
      class="signUp"
      @tap="onDimissed"
    >
      <StackLayout class="signUp__wrapper">
        <!-- TITLE -->
        <Label
          class="signUp__title"
          :text="$t('lang.views.signup.main.title')"
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
          :isDisplayName="true"
          :isDisplayNameError="isDisplayNameError"
          :isDisplayEmail="isEmailError"
          :isPasswordError="isPasswordError"
          @displayNameModified="setDisplayName"
          @emailModified="setEmail"
          @passwordModified="setPassword"
        />

        <!-- SOCIAL BUTTONS -->
        <StackLayout
          class="socialButons__wrapper"
          horizontalAlignment="center"
        >
          <Label
            class="socialButtons__loginText"
            :text="$t('lang.views.signup.main.social')"
            textWrap="true"
          />
          <StackLayout
            class="socialButtons__group"
            orientation="horizontal"
          >
            <SocialButton
              v-for="(socialButton, index) in socialButtons"
              :key="index"
              class="socialButton__button"
              :socialButtonWidth="16"
              :socialButtonHeight="16"
              :socialButtonBackgroundColor="socialButton.color"
              :iconSize="16"
              iconColor="white"
              :iconName="socialButton.icon"
              :provider="socialButton.provider"
              @providerSelected="providerSelected"
            />
          </StackLayout>
        </StackLayout>

        <!-- TERMS OF SERVICE $ PRIVACY POLICY -->
        <FlexboxLayout
          flexWrap="wrap"
          class="accept__wrapper"
        >
          <Label
            class="accept__text-text"
            :text="$t('lang.views.signup.main.accept_text_1')"
            textWrap="true"
          />
          <Label
            class="accept__text-link"
            :text="$t('lang.views.signup.main.accept_terms')"
            textWrap="true"
            @tap="toTermsOfService"
          />
          <Label
            class="accept__text-text"
            :text="$t('lang.views.signup.main.accept_text_2')"
            textWrap="true"
          />
          <Label
            class="accept__text-link"
            :text="$t('lang.views.signup.main.accept_privacy')"
            textWrap="true"
            @tap="toPrivacyPolicy"
          />
        </flexboxlayout>

        <!-- SIGN UP BUTTON -->
        <Button
          class="-primary -rounded-lg signUp__button"
          :text="$t('lang.views.signup.button')"
          @tap="toSignUp"
        />
      </StackLayout>

      <!-- LOG IN -->
      <FlexboxLayout
        class="logIn__wrapper"
        flexWrap="wrap"
      >
        <Label
          class="logIn__text-text"
          textWrap="true"
          :text="$t('lang.views.signup.main.logIn_text')"
        />
        <Label
          class="logIn__text-link"
          :text="$t('lang.views.signup.main.logIn_link')"
          textWrap="true"
          @tap="toLogIn"
        />
      </FlexboxLayout>
      <Button
        class="btn"
        height="24"
        text="Show feedback (error)"
        @tap="showFeedbackError"
      />
      <Button
        class="btn"
        height="24"
        text="Cerrar feedback"
        @tap="onDismissed"
      />
    </StackLayout>
  </Page>
</template>
<script>
// Components
import TheSignDataForm from '@components/Auth/TheSignDataForm'
import SocialButton from '@components/Auth/SocialButton'
import { Feedback, FeedbackPosition } from 'nativescript-feedback'
// import { Color } from 'color'

// Views
import LogIn from './LogIn'
import PrivacyPolicy from '@views/Shared/PrivacyPolicy'
import TermsOfService from '@views/Shared/TermsOfService'
import Personal from '@views/Preferences/Personal'

// Social Buttons data
import { socialButtons } from '@utils/social'

// Store
import { mapGetters } from 'vuex'

const feedback = new Feedback()

export default {
  name: 'SignUp',
  components: {
    TheSignDataForm,
    SocialButton
  },
  data() {
    return {
      userData: {
        displayName: '',
        email: '',
        password: ''
      },
      isDimissed: false,
      feedbackErrorMessage: 'Hay un puto error 👎',
      socialButtons: socialButtons,
      isError: false,
      isDisplayNameError: false,
      isEmailError: false,
      isPasswordError: false,

    }
  },
  computed: {
    ...mapGetters('errors', { errorMessage: 'ERROR_MESSAGE' }),
    ...mapGetters('shared', { isError: 'GET_ERROR', loading: 'LOADING' }),
  },
  methods: {
    onDismmissed() {
      this.isDimissed = false
    },
    toSignUp() {
      const signUpData = {
        displayName: this.userData.displayName,
        email: this.userData.email,
        password: this.userData.password
      }
      console.log(this.socialButtons[1].icon)
      console.log(signUpData)
      this.toPasswordConfirmation()
    },
    setValue(value) {
      this.userData[value] = value
    },
    setDisplayName(newValue) {
      this.userData.displayName = newValue
    },
    setEmail(newValue) {
      this.userData.email = newValue
    },
    setPassword(newValue) {
      this.userData.password = newValue
    },
    providerSelected(provider) {
      console.log(`provider: ${provider}`)
    },
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
    },
    showFeedbackError() {
      feedback.error({
        position: FeedbackPosition.Bottom, // iOS only
        title:"ERROR!!",
        message: this.feedbackErrorMessage,
        duration: 500000,
      })
      if (!this.isDimissed) {
         this.feedback.hide()
      }
    },
    onDismissed() {
      this.isDimissed = true
    }
  }
}
</script>
<style lang="scss" scoped>

.signUp {
  background-color: white;
}
.signUp__wrapper {
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
.signUp__title {
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
.socialButons__wrapper {
  padding-top: 8;
}
.socialButtons__loginText {
  text-align: center;
}
.socialButtons__group {
  padding-top: 8;
}
.socialButton__button {
  margin: {
    left: 4;
    right: 4;
  }
}
.error {
  color: red;
}
.accept__wrapper {
  padding: {
    top: 16;
    right: 16;
    left: 24;
    bottom: 8;
  }
}
.accept__text-link {
  color: teal;
  font-weight: bold;
}
.signUp__button {
  margin-bottom: 16;
  padding: {
    left:24;
    right: 24;
  }
}
.logIn__wrapper {
  padding: {
    top: 16;
    left: 40;
  }
}
.logIn__text-wrapper {
}
.logIn__text-text {
}
.logIn__text-link {
  color: teal;
  font-weight: bold;
  padding-left: 2;
}
</style>
