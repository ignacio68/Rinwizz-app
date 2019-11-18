<template>
  <Page>
    <ActionBar :title="$t('lang.views.alerts.toolbar')">
      <!-- Android -->
      <!-- <NavigationButton
        v-show="$isAndroid"
        :icon="userIcon"
        @tap="showSideDrawer"
        effectiveHeight="20"
        effectiveWidth="20"
      /> -->
      <StackLayout
        orientation="horizontal"
        horizontalAlignment="left"
        verticalAlignment="center"
      >
        <Label
          v-show="$isAndroid"
          background-position="center"
          background-size="cover"
          class="showDrawer__icon"
          backgroundColor="#ff5500"
          @tap="showSideDrawer"
        />
        <Label :text="$t('lang.views.alerts.toolbar')" class="labelText" />
      </StackLayout>
      <ActionItem
        v-show="!$isAndroid"
        icon="~/assets/images/user_icon.png"
        @tap="showSideDrawer"
        ios.position="left"
        class="showDrawer__icon"
      >
        <Image src="~/assets/images/user_icon.png" />
      </ActionItem>
      <!-- <Image src="~/assets/images/user_icon.png" width="20" height="20" /> -->
      <!-- IOS -->
    </ActionBar>
    <StackLayout backgroundColor="#00A8C6">
      <Label
        v-show="$isAndroid"
        class="text"
        text="Alerts page"
        textWrap="true"
      />
      <Label
        v-show="!$isAndroid"
        class="text"
        text="No es Android!!!"
        textWrap="true"
      />
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
      isIOS: false,
      userIcon: '~/assets/images/user_icon.png'
    }
  },
  computed: {},
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
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
.labelText {
  text-align: center;
}
</style>
