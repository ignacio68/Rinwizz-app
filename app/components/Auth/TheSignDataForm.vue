<template>
  <StackLayout 
    orientation="vertical" 
    marginTop="0" 
    paddingTop="0"
  >
    <DataField
      v-model="value.email"
      type="far"
      iconName="fa-envelope"
      maxLength="64"
      labelText="email"
      keyboard="email"
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
  model: {
    event: 'modified'
  },
  props: {
    value: {
      type: Object,
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
  watch: {
    value() {
      this.$emit('modified', this.value)
    }
  }
}
</script>
<style lang="scss" scoped></style>
