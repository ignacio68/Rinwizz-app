<template>
  <Page actionBarHidden="true">
    <BottomNavigation selectedIndex="0" clas="tab-view">
      <TabStrip>
        <TabStripItem @tap="changeColor">
          <StackLayout>
            <FontIcon
              type="fas"
              name="fa-home"
              size="24"
              :color="isActive ? iconColor.active : iconColor.inactive"
              ref="home"
            />
          </StackLayout>
        </TabStripItem>
        <TabStripItem @tap="changeColor">
          <FontIcon
            type="fas"
            name="fa-book"
            size="24"
            :color="isActive ? iconColor.active : iconColor.inactive"
            ref="drawer"
          />
        </TabStripItem>
      </TabStrip>
      <TabContentItem>
        <Frame>
          <Welcome />
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <Frame>
          <AppSplitter />
        </Frame>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>
<script>
import FontIcon from '@components/Common/FontIcon'
import Welcome from '@views/Welcome'
import AppSplitter from '@views/AppSplitter'
export default {
  name: 'AppNavigator',
  components: {
    FontIcon,
    Welcome,
    AppSplitter
  },
  data() {
    return {
      isActive: true,
      iconColor: {
        active: '#aaaaaa',
        inactive: '#222222'
      }
    }
  },
  methods: {
    changeColor() {
      this.isActive = !this.isActive
      console.log('isActive?: ' + this.isActive)
      console.log('El color de home es: ' + $refs.home.color)
      console.log('El color de drawer es: ' + $refs.drawer.color)
    }
  }
}
</script>
<style lang="scss">
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
