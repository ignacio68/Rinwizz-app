<template>
  <Page actionBarHidden="true" class="page">
    <BottomNavigation selectedIndex="0" class="tab-view">
      <TabStrip>
        <TabStripItem>
          <Label text="Alerts" />
          <Image src class="fas" />
        </TabStripItem>
        <TabStripItem>
          <Label text="Search" />
          <Image src class="fas" />
        </TabStripItem>
      </TabStrip>
      <TabContentItem>
        <Frame>
          <Alerts @showSideDrawerChild="showSideDrawerParent" />
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <Frame>
          <Search />
        </Frame>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>
<script>
import Alerts from '@views/Alerts/Alerts'
import Search from '@views/Search/Search'
export default {
  name: 'HomePage',
  components: {
    Alerts,
    Search
  },
  data() {
    return {}
  },
  methods: {
    showSideDrawerParent() {
      console.log('showSideDrawerParent')
      this.$emit('showSideDrawerParent')
      // this.$refs.drawer.showDrawer()
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
