<template>
  <StackLayout orientation="vertical">
    <!-- <DataField
      data="passwordData"
      name="password"
      text="passwordText"
      iconSrc="passwordIcon"
      secure="secure"
    /> -->
    <Image src="" stretch="none" />
  </StackLayout>
</template>
<script>
import DataField from './DataField'
export default {
  name: 'Password',
  components: {
    DataField
  },
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.dataField {
  font-family: Pe-icon-7-stroke;
}
</style>
