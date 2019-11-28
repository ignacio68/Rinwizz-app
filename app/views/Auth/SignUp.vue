<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <TextView
        :text="$t('lang.views.signup.main.text1')"
        class="mainText"
        borderColor="transparent"
      />
      <DataField type="far" name="fa-user" maxLength="32" labelText="name" />
      <TheSignDataForm />
      <SocialButtons />
      <Button
        class="-primary"
        :text="$t('lang.views.signup.main.text2')"
        @tap="toLogIn"
      />
      <Button
        class="-outline -rounded-lg"
        text="PrivacyPolicy"
        @tap="toPrivacyPolicy"
      />
      <Button
        class="-outline -rounded-sm"
        text="Terms of Service"
        @tap="toTermsOfService"
      />
      <Button
        class="-rounded-lg -ruby PasswordConfirmation-button"
        text="Password Confirmation"
        @tap="toPasswordConfirmation"
      />
      <Button class="-rounded-sm text-primary" text="Ok" @tap="toPersonal" />
    </StackLayout>
  </Page>
</template>
<script>
// Components
import DataField from '@components/Common/DataField'
import TheSignDataForm from '@components/Auth/TheSignDataForm'
import SocialButtons from '@components/Auth/SocialButtons'

// Views
import LogIn from './LogIn'
import PrivacyPolicy from '@views/Shared/PrivacyPolicy'
import TermsOfService from '@views/Shared/TermsOfService'
import Personal from '@views/Preferences/Personal'

export default {
  name: 'SignUp',
  components: {
    DataField,
    TheSignDataForm,
    SocialButtons
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
Page {
  margin {
    left: 72;
    right: 72;
  }
}
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
}
</style>
