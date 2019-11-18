<template>
  <Page>
    <ActionBar title="Alerts">
        <NavigationButton
          effectiveWidth="40"
          efecctiveHeigth="40"
          icon="~/assets/images/user_icon.png"
          @tap="showSideDrawer"
          class="showDrawer__icon"
        />
        <ActionItem
          icon="~/assets/images/user_icon.png"
          @tap="showSideDrawer"
          ios.position="left"
          class="showDrawer__icon"
        >
          <Image src="~/assets/images/user_icon.png" />
        </ActionItem>
      <Label :text="$t('lang.views.alerts.toolbar')"
        fontSize="24"
        verticalAlignment="center"
        />
    </ActionBar>
    <StackLayout backgroundColor="#00A8C6">
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
    return {
      isIOS: false
    }
  },
  computed: {
  },
  methods: {
    openAlertModal() {
      this.$showModal(AlertEditor, {
        fullscreen: true,
        props: { message: 'Todo va dabuten' }
      })
    },
    // TODO: Change the events name
    showSideDrawer() {
      console.log('showSideDrawerChild')
      this.$emit('showSideDrawerChild')
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
.showDrawer__icon {
  width: 40px;
  height: 40px;
}
</style>
