<template>
  <Page>
    <ActionBar title="Alerts">
      <!-- <StackLayout orientation="vertical"> -->
        <NavigationButton
          ios:visibility="collapsed"
          icon="~/assets/images/user_icon.png"
          @tap="showSideDrawer"
        />
        <ActionItem
          android:visibility="collapsed"
          icon="~/assets/images/user_icon.png"
          @tap="showSideDrawer"
          ios.position="left"
        />
        <!-- <Image
          src="~/assets/images/user_icon.png"
          width="40"
          height="40"
          @tap="swapMenu" /> -->
      <!-- </ActionItem> -->
      <Label :text="$t('lang.views.alerts.toolbar')"
        fontSize="24"
        verticalAlignment="center"
        />
      <!-- </StackLayout> -->
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
</style>
