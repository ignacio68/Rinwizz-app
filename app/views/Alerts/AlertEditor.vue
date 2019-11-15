<template>
  <Page>
    <ActionBar title="Alert Editor" />
    <StackLayout backgroundColor="#4A536B">
      <Label class="text" text="AlertEditor page" textWrap="true" />
      <Label class="text" :text="message" textWrap="true" />
      <alertScript />
      <Button text="Cancelar" @tap="$modal.close" class="cancelButton" />
      <Button text="Ok" @tap="$modal.close" />
    </StackLayout>
  </Page>
</template>
<script>
// TODO: revisar @component alias
import alertScript from '@components/Alerts/alertScript'
export default {
  name: 'AlertEditor',
  components: {
    alertScript,
  },
  props: ['message'],
  data() {
    return {}
  },
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
