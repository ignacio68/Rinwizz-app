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
      v-model="password"
    >
      <FontIcon
        type="far"
        :iconName="iconName"
        paddingleft="0"
        paddingTop="30"
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
      isSecure: true,
      password: ''
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
