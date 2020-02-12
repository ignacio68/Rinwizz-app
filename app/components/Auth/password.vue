<template>
  <StackLayout orientation="vertical">
    <DataField
      iconType="far"
      iconName="fa-lock-alt"
      :iconSize="20"
      maxLength="32"
      :labelText="$t('lang.views.signup.input.password')"
      :secure="isSecure"
      returnKey="done"
      :isError="isPasswordError"
      keyboard="url"
      @modified="passwordModified"
    >
      <FontIcon
        type="far"
        :iconColor="eyeColor"
        :name="iconName"
        :fontSize="20"
        paddingleft="0"
        paddingTop="30"
        @tap="changeSecurity"
      />
    </DataField>
  </StackLayout>
</template>
<script>
import DataField from '@components/UI/DataField'
import FontIcon from '@components/UI/FontIcon'
export default {
  name: 'Password',
  components: {
    DataField,
    FontIcon
  },
  props: {
    isPasswordError: {
      type: Boolean,
      default: false
    },
    eyeColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      isSecure: true
    }
  },
  computed: {
    iconName() {
      return this.isSecure ? 'fa-eye-slash' : 'fa-eye'
    }
  },
  methods: {
    passwordModified(newValue){
      this.$emit('passwordModified', newValue)
    },
    changeSecurity() {
      this.isSecure = !this.isSecure
    }
  }
}
</script>
<style lang="scss" scoped></style>
