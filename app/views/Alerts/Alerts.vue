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
        <!-- SOLO PARA TESTEAR EN PRODUCCIÓN, LUEGO ELIMINAR -->
        <Button
          text="Comprobar conectividad"
          class="-primary"
          @tap="checkConnection"
        />
      </GridLayout>
    </StackLayout>
  </Page>
</template>
<script>
import { EventBus, checkNetwork } from '@utils/commons'
import { SnackBar, SnackBarOptions } from '@nstudio/nativescript-snackbar'
import AlertEditor from './AlertEditor'
import TheActionBar from '@components/UI/TheActionBar'
export default {
  name: 'Alerts',
  components: {
    TheActionBar
  },
  data() {
    return {
      itemList: {},
      isConnected: true
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
      // FIXME: resolver bug
      // console.log('showSideDrawerChild')
      // this.$emit('showSideDrawerChild')
      EventBus.$emit('OPEN_DRAWER')
      console.log('Alerts emite OPEN_DRAWER')
    },
    checkConnection() {
      this.isConnected = checkNetwork()
      if (!this.isConnected) {
        this.showSnackBar('lang.errors.alerts.network')
      } else {
        return
      }
    },
    showSnackBar(text) {
      const snackBar = new SnackBar()
      // const options = Object.assign({}, SnackBarOptions)
      const options = { ...SnackBarOptions }
      options.actionText = 'REINTENTAR'
      options.actionTextColor = '#fff'
      options.snackText = this.$t(text)
      options.textColor = '#fff'
      options.hideDelay = 6000000000
      options.backgroundColor = '#FF1600'
      options.isRTL = false

      snackBar.action(options)
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
