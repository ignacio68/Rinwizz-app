<template>
  <StackLayout
    orientation="vertical"
    marginTop="0"
    paddingTop="0"
  >
    <DataField
      v-if="isDisplayName"
      iconType="far"
      iconName="fa-user"
      :iconSize="20"
      iconColor="black"
      :maxLength="16"
      :labelText="$t('lang.views.signup.input.userName')"
      keyboard="url"
      :isError="isDisplayNameError"
      @modified="displayNameModified"
    />
    <DataField
      iconType="far"
      iconName="fa-envelope"
      :iconSize="20"
      iconColor="black"
      :maxLength="64"
      :labelText="$t('lang.views.signup.input.email')"
      keyboard="email"
      :isError="isEmailError"
      @modified="emailModified"
    />
    <Password
      :isPasswordError="isPasswordError"
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
    },
    isDisplayNameError: {
      type: Boolean,
      default: false
    },
    isEmailError: {
      type: Boolean,
      default: false
    },
    isPasswordError: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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
