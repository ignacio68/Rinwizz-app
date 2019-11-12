<template>
  <Page actionBarHidden="true">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sideStackLayout">
        <label class="text" text="Lado Desplegable" />
        <!-- <Settings /> -->
      </StackLayout>
      <StackLayout ~mainContent class="drawerStackLayout">
        <label class="text" text="Página Principal" />
        <!-- <HomePage /> -->
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>
<script>
import Settings from './Main/Settings'
import HomePage from './Main/HomePage'
export default {
  name: 'AppSplitter',
  components: { Settings, HomePage },
  data() {
    return {}
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.showDrawer()
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer()
    },
    onToggleDrawerTap() {
      this.$refs.drawer.toggleDrawerState()
    },
  },
}
</script>
<style>
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
