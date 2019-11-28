<template>
  <StackLayout orientation="vertical" marginTop="0" paddingTop="0">
    <!-- <DataField type="fas" name="fa-user" maxLength="32" labelText="name" /> -->
    <DataField
      type="far"
      name="fa-envelope"
      maxLength="64"
      labelText="email"
      keyboardType="email"
    />
    <DataField
      type="fas"
      name="fa-key"
      maxLength="32"
      labelText="password"
      secure="true"
    >
      <FontIcon type="far" name="fa-eye" paddingleft="0" paddingTop="30" />
    </DataField>
  </StackLayout>
</template>
<script>
import DataField from './DataField'
import FontIcon from '@components/Common/FontIcon'
export default {
  name: 'TheSignDataForm',
  components: {
    DataField,
    FontIcon
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
