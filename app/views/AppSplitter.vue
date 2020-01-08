<template>
  <Page actionBarHidden="true">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent>
        <Frame>
          <Settings />
        </Frame>
      </StackLayout>
      <StackLayout ~mainContent>
        <Frame>
          <!-- <HomePage @showSideDrawerParent="onOpenDrawerTap" /> -->
          <HomePage />
        </Frame>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>
<script>
import { EventBus } from '@utils/commons'
import Settings from '@views/Main/Settings'
import HomePage from '@views/Main/HomePage'

export default {
  name: 'AppSplitter',
  components: { Settings, HomePage },
  data() {
    return {}
  },
  created() {
    // FIXME: resolver bug
    EventBus.$on('OPEN_DRAWER', () => {
      this.$refs.drawer.showDrawer()
      console.log('Activado OPEN_DRAWER')
    })
  },
  methods: {
    // onOpenDrawerTap() {
    //   console.log('showSideDrawerGrandParent')
    //   this.$refs.drawer.showDrawer()
    // },
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
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
