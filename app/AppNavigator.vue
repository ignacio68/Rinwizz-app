<template>
  <Page actionBarHidden="true">
    <BottomNavigation selectedIndex="0">
      <TabStrip>
        <TabStripItem>
          <FontIcon
            ref="home"
            class="nt-icon"
            type="far"
            iconName="fa-home-alt"
            color="iconColor.active"
          />
        </TabStripItem>
        <TabStripItem>
          <FontIcon
            ref="drawer"
            class="nt-icon"
            type="far"
            iconName="fa-book"
            color="iconColor.inactive"
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
import FontIcon from '@components/UI/FontIcon'
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
      iconColor: {
        active: '#aaaaaa',
        inactive: '#222222'
      }
    }
  },
  methods: {}
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
