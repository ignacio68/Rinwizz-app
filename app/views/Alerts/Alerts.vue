<template>
  <Page>
    <ActionBar verticalAlignment="center">
      <GridLayout
        columns="*, 4*, *"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <Label
          col="0"
          backgroundImage="~/assets/images/user_icon.png"
          class="actionBar_iconLeft"
          @tap="showSideDrawer"
        />
        <Label
          :text="$t('lang.views.alerts.toolbar')"
          col="1"
          class="actionBar_title"
        />
        <Label
          col="2"
          class="actionBar_iconRigth"
        />
      </GridLayout>
    </ActionBar>
    <GridLayout rows="auto, auto, *">
      <Label
        v-show="IS_ANDROID"
        class="text"
        text="Alerts page"
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
  </Page>
</template>
<script>
import AlertEditor from './AlertEditor'
export default {
  name: 'Alerts',
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
  height: 64px;
  width: 64px;
  border-radius: 50%;
}
.actionBar_title {
  font: {
    size: 20px;
    weight: 500;
  }
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
