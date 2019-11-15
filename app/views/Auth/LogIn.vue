<template>
  <Page>
    <ActionBar title="LogIn" />
    <StackLayout>
      <Label class="text" text="Login page" textWrap="true" />
      <Button text="SignUp" @tap="toSignUp" />
      <Button text="Ok" @tap="toAlerts" />
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from './SignUp'
import AppSplitter from '@views/AppSplitter'
export default {
  name: 'LogIn',
  data() {
    return {}
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
<style scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
