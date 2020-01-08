<template>
  <Page actionBarHidden="true">
    <StackLayout orientation="vertical">
      <TheActionBar
        iconLeftSrc="~/assets/images/user_icon.png"
        :iconLeftAction="showSideDrawer"
        :title="$t('lang.views.alerts.toolbar')"
      />
      <GridLayout rows="auto, auto, *">
        <Label
          v-show="IS_ANDROID"
          class="text"
          text="Alerts Page"
          textWrap="true"
        />
        <!-- <RadListView ref="listView">
        <v-template>
        </v-template>
      </RadListView> -->

        <fab
          row="1"
          text.decode="&#xe69d;"
          rippleColor="#f1f1f1"
          class="fab-button"
          @tap="openAlertModal"
        />
      </GridLayout>
    </StackLayout>
  </Page>
</template>
<script>
import { EventBus } from '@utils/commons'
import AlertEditor from './AlertEditor'
import TheActionBar from '@components/UI/TheActionBar'
export default {
  name: 'Alerts',
  components: {
    TheActionBar
  },
  data() {
    return {
      itemList: {}
    }
  },
  computed: {},
  methods: {
    openAlertModal() {
      this.$showModal(AlertEditor, {
        fullscreen: true,
        props: { message: 'Todo va dabuten' }
      })
      console.log('Abierto el modal')
    },
    // TODO: Change the events name
    showSideDrawer() {
      // console.log('showSideDrawerChild')
      // this.$emit('showSideDrawerChild')
      EventBus.$emit('OPEN_DRAWER')
      console.log('Alerts emite OPEN_DRAWER')
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
.fab-button {
  height: 70;
  width: 70;
  margin: 16;
  background-color: #ff4081;
  vertical-align: bottom;
  horizontal-align: right;
  font-family: Pe-icon-7-stroke;
}
</style>
