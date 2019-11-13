<template>
  <Page>
    <ActionBar title="alertScript" />
    <StackLayout>
      <Label class="text" text="Alert Script page" textWrap="true" />
      <Button text="Continuar" @tap="toUserLocation" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'AlertScript',
  props: {},
  data() {
    return {}
  },
  methods: {
    toUserLocation() {
      this.$navigateTo(UserLocation)
    }
  }
}
</script>
<style scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
