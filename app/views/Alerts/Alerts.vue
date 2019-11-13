<template>
  <Page>
    <ActionBar title="Alerts" />
    <StackLayout backgroundColor="#58e821">
      <Label class="text" text="Alerts page" textWrap="true" />
      <Button text="Alert Editor" @tap="openAlertModal" />
    </StackLayout>
  </Page>
</template>
<script>
import AlertEditor from './AlertEditor'
export default {
  name: 'Alerts',
  data() {
    return {}
  },
  methods: {
    openAlertModal() {
      this.$showModal(AlertEditor, {
        fullscreen: true,
        props: { message: 'Todo va dabuten' }
      })
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
