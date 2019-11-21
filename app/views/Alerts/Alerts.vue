<template>
  <Page actionBarHidden="true" class="page">
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
import AlertEditor from './AlertEditor'
import TheActionBar from '@components/Common/TheActionBar'
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
    },
    // TODO: Change the events name
    showSideDrawer() {
      console.log('showSideDrawerChild')
      this.$emit('showSideDrawerChild')
    }
  }
}
</script>
<style scoped lang="scss">
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
.actionBar_iconLeft {
  background: {
    color: white;
    repeat: no-repeat;
    size: cover;
    position: center;
  }
  height: 32;
  width: 32;
  border-radius: 50%;
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
