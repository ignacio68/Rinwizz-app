<template>
  <Page>
    <ActionBar title="Greetings" />
    <StackLayout>
      <Label
        class="text"
        text="Greetings page"
        textWrap="true"
      />
      <Button
        class="-primary"
        text="Finalizar"
        @tap="toAlerts"
      />
    </StackLayout>
  </Page>
</template>
<script>
import AppSplitter from '@views/AppSplitter'
export default {
  name: 'Greetings',
  data() {
    return {}
  },
  methods: {
    toAlerts() {
      this.$navigateTo(AppSplitter)
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
