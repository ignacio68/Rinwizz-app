<template>
  <Page class="page">
    <ActionBar class="action-bar" title="LogIn" />
    <StackLayout>
      <Label class="text" text="Login page" textWrap="true" />
      <Button class="btn btn-primary" text="SignUp" @tap="toSignUp" />
      <Button class="btn btn-primary" text="Ok" @tap="toAlerts" />
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from './SignUp'
import AppSplitter from '@views/AppSplitter'
export default {
  name: 'LogIn',
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
<style scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
