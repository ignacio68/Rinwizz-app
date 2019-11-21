<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Alert Editor" />
    <StackLayout backgroundColor="#4A536B">
      <Label class="text" text="AlertEditor page" textWrap="true" />
      <Label class="text" :text="message" textWrap="true" />
      <AlertScript />
      <Button class="btn cancelButton" text="Cancelar" @tap="$modal.close" />
      <Button class="btn btn-primary" text="Ok" @tap="$modal.close" />
    </StackLayout>
  </Page>
</template>
<script>
// TODO: revisar @component alias
import AlertScript from '@components/Alerts/AlertScript'
export default {
  name: 'AlertEditor',
  components: {
    AlertScript
  },
  props: ['message'],
  data() {
    return {}
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
.cancelButton {
  background-color: firebrick;
  color: wheat;
}
</style>
