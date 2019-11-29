<template>
  <StackLayout orientation="vertical">
    <DataField
      type="far"
      name="fa-lock-alt"
      maxLength="32"
      labelText="password"
      :secure="isSecure"
      returnKey="done"
      isError="isPasswordError"
    >
      <FontIcon type="far" :name="iconName" paddingleft="0" paddingTop="30" />
    </DataField>
  </StackLayout>
</template>
<script>
import DataField from '@components/Common/DataField'
import FontIcon from '@components/Common/FontIcon'
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
      !this.isSecure ? 'fa-eye-slash' : 'fa-eye'
    },
    tap() {
      this.isSecure = !this.isSecure
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
