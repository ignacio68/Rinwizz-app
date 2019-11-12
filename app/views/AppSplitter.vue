<template>
  <Page actionBarHidden="false">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sideStackLayout">
        <label text="lado desplegable" />
        <!-- <Settings /> -->
      </StackLayout>
      <StackLayout ~mainContent class="drawerStackLayout">
        <label text="página principal" />
        <!-- <HomePage /> -->
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>
<script>
import Settings from "./Main/Settings";
import HomePage from "./Main/HomePage";
export default {
  name: "AppSplitter",
  components: { Settings, HomePage },
  data() {
    return {};
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onToggleDrawerTap() {
      this.$refs.drawer.toggleDrawerState();
    }
  }
};
</script>
<style>
</style>