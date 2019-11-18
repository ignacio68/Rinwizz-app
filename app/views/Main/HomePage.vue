<template>
  <Page actionBarHidden="true">
    <BottomNavigation selectedIndex="0">
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
          <Alerts />
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
  methods: {}
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
