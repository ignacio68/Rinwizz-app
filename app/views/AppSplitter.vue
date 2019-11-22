<template>
  <Page
    actionBarHidden="true"
  >
    <RadSideDrawer ref="drawer">
      <StackLayout
        ~drawerContent
        class="-left sideStackLayout"
      >
        <Frame>
          <Settings />
        </Frame>
      </StackLayout>
      <StackLayout
        ~mainContent
        class="-content"
      >
        <Frame>
          <HomePage @showSideDrawerParent="onOpenDrawerTap" />
        </Frame>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>
<script>
import Settings from '@views/Main/Settings'
import HomePage from '@views/Main/HomePage'

export default {
  name: 'AppSplitter',
  components: { Settings, HomePage },
  data() {
    return {}
  },
  methods: {
    onOpenDrawerTap() {
      console.log('showSideDrawerGrandParent')
      this.$refs.drawer.showDrawer()
    },
    onCloseDrawerTap() {
      // this.$refs.drawer.closeDrawer()
    },
    onToggleDrawerTap() {
      // this.$refs.drawer.toggleDrawerState()
    }
  }
}
</script>
<style lang="scss" scoped>
.sideStackLayout {
  background-color: #13747d;
  color: palegoldenrod;
}
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
