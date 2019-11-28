<template>
  <StackLayout
    orientation="vertical"
    marginTop="0"
    paddingTop="0"
  >
    <!-- <DataField type="fas" name="fa-user" maxLength="32" labelText="name" /> -->
    <DataField
      type="far"
      name="fa-envelope"
      maxLength="64"
      labelText="email"
      keyboard="email"
    />
    <Password />
  </StackLayout>
</template>
<script>
import DataField from '@components/Common/DataField'
import Password from './Password'
export default {
  name: 'TheSignDataForm',
  components: {
    DataField,
    Password
  },
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
