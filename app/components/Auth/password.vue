<template>
  <StackLayout orientation="vertical">
    <DataField
      type="far"
      iconName="fa-lock-alt"
      maxLength="32"
      labelText="password"
      :secure="isSecure"
      returnKey="done"
      :isError="isPasswordError"
      keyboard="url"
      @modified="passwordModified"
    >
      <FontIcon
        type="far"
        :iconName="iconName"
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
