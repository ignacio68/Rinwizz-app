<template>
  <StackLayout orientation="vertical">
    <DataField
      type="fas"
      name="fa-key"
      maxLength="32"
      labelText="password"
      :secure="isSecure"
      returnKey="done"
    >
      <FontIcon
        type="far"
        name="!isSecure ? fa-eye-slash : fa-eye"
        paddingleft="0"
        paddingTop="30"
        :tap="isSecure = !isSecure"
      />
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
  props: {},
  data() {
    return {
      isSecure: true
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
