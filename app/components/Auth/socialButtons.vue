<template>
  <Label :text="$t('lang.views.signup.main.socialText')" class="text" />
</template>
<script>
name: 'SocialButtons'
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
  color: darkred;
}
</style>
