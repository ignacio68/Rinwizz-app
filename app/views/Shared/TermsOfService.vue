<template>
  <Page>
    <ActionBar title="Terms of Service">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <StackLayout>
      <Label class="text" text="Terms of Service page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from '../Auth/SignUp'
export default {
  name: 'TermsOfService',
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$navigateTo(SignUp)
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
