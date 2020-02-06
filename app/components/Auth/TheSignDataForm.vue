<template>
  <StackLayout
    orientation="vertical"
    marginTop="0"
    paddingTop="0"
  >
    <DataField
      v-if="isDisplayName"
      type="far"
      iconName="fa-user"
      maxLength="16"
      labelText="name"
      keyboard="url"
      @modified="displayNameModified"
    />
    <DataField
      type="far"
      iconName="fa-envelope"
      maxLength="64"
      labelText="email"
      keyboard="email"
      @modified="emailModified"
    />
    <Password
      @passwordModified="passwordModified"
    />
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
    isDisplayName: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    displayNameModified(newValue) {
      this.$emit('displayNameModified', newValue)
    },
    emailModified(newValue) {
      this.$emit('emailModified', newValue)
    },
    passwordModified(newValue) {
      console.log(`password: ${newValue}`)
      this.$emit('passwordModified', newValue)
    }
  }
}
</script>
<style lang="scss" scoped></style>
