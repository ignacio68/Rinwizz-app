<template>
  <Page actionBarHidden="true">
    <TabView androidTabsPosition="bottom" iosIconRenderingMode="alwaysOriginal">
      <TabViewItem title="Alerts" iconSource>
        <Frame>
          <Alerts />
        </Frame>
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <Frame>
          <Page>
            <ActionBar title="Tab 2" icon />
            <Label text="Content for Tab 2" />
          </Page>
        </Frame>
      </TabViewItem>
    </TabView>
  </Page>
</template>
<script>
import Alerts from '../Alerts/Alerts'
export default {
  name: 'HomePage',
  components: {
    Alerts
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
