<template>
  <StackLayout orientation="vertical" marginTop="0" paddingTop="0">
    <DataField
      type="far"
      iconName="fa-envelope"
      maxLength="64"
      labelText="email"
      keyboard="email"
      v-model="value.email"
    />
    <Password v-model="value.password" />
  </StackLayout>
</template>
<script>
import DataField from '@components/UI/DataField'
import Password from './Password'
export default {
  name: 'TheSignDataForm',
  components: {
    DataField,
    Password
  },
  props: {
    value: {
      type: Object,
      default: {},
      required: true
    }
    // email: {
    //   type: String,
    //   default: ''
    // },
    // password: {
    //   type: String,
    //   default: ''
    // }
  },
  model: {
    event: 'modified'
  },
  watch: {
    value() {
      this - $emit('modified', this.value)
    }
  }
}
</script>
<style lang="scss" scoped></style>
