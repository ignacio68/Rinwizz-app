<template>
  <StackLayout class="nt-page m-x-25" orientation="vertical">
    <TextField class="nt-input" hint="name" maxLength="16" />
    <TextField class="nt-input" hint="email" keyboardType="email" />
    <!-- <DataField
      data="user.name"
      :title="$t('lang.views.signup.input.name')"
      name="name"
      iconSrc="&#xe6ae;"
      class="dataField"
    />
    <DataField
      data="user.email"
      :title="$t('lang.views.signup.input.email')"
      name="email"
      iconSrc="&#xe6ae;"
      class="dataField"
    /> -->
  </StackLayout>
</template>
<script>
export default {
  name: 'SignUpDataForm',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    updateUserData() {
      console.log('el usuario es: ' + JSON.stringify(this.user))
    }
  }
}
</script>
<style lang="scss" scoped></style>
