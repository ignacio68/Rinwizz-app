<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label class="text" text="Welcome page" textWrap="true" />
      <Label class="text" :text="$t('lang.views.welcome.header')" textWrap="true" />

      <!-- Icon Font with Label -->
      <Label text.decode="&#xe6ab;" class="iconLabel" color="#0A6B59" />

      <!-- Icon Font with Image -->
      <Image src.decode="font://&#xe6ae;" stretch="none" class="iconImage" />
      <Button text="SignUp" @tap="toSignUp" class="button" />
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
    }
  }
}
</script>

<style lang="scss" scoped>
.iconLabel {
  font-family: 'Pe-icon-7-stroke';
  font-size: 100px;
}
.iconImage {
  font-family: 'Pe-icon-7-stroke';
  font-size: 24px;
  color: crimson;
}
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
}
.button {
  background-color: indianred;
}
</style>
