<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label class="text" text="Welcome page" textWrap="true" />
      <Label
        class="text"
        :text="$t('lang.views.welcome.header')"
        textWrap="true"
      >
      </Label>
      <Button text="SignUp" @tap="toSignUp" />
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from './Auth/SignUp'
export default {
  name: 'Welcome',
  data() {
    return {}
  },
  methods: {
    toSignUp() {
      this.$navigateTo(SignUp)
    },
  },
}
</script>
<style>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
