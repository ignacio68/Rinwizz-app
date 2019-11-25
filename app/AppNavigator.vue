<template>
  <Page
    actionBarHidden="true"
  >
    <BottomNavigation
      selectedIndex="0"
      clas="tab-view"
    >
      <TabStrip>
        <TabStripItem>
          <Label text="Welcome" />
          <Image src />
        </TabStripItem>
        <TabStripItem>
          <Label text="AppSplitter" />
          <Image src />
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
import Welcome from '@views/Welcome'
import AppSplitter from '@views/AppSplitter'
export default {
  name: 'AppNavigator',
  components: {
    Welcome,
    AppSplitter
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
