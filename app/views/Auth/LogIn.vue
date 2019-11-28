<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <TheSignDataForm />
      <Button class="-primary" text="SignUp" @tap="toSignUp" />
      <Button class="-primary" text="Ok" @tap="toAlerts" />
    </StackLayout>
  </Page>
</template>
<script>
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
      person: {}
    }
  },
  methods: {
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
