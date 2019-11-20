<template>
  <StackLayout orientation="vertical">
    <DataField
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
    />
  </StackLayout>
</template>
<script>
import DataField from './dataField'
export default {
  name: 'SignUpDataForm',
  components: {
    DataField,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    updateUserData() {
      console.log('el usuario es: ' + JSON.stringify(this.user))
    },
  },
}
</script>
<style lang="scss" scoped>
.dataField {
  font-family: 'Pe-icon-7-stroke';
}
</style>
