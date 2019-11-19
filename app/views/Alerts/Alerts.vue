<template>
  <Page>
    <ActionBar verticalAlibnment="center">
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
          text="Hey"
          class="actionBar_iconRigth"
        />
      </GridLayout>
    </ActionBar>
    <StackLayout backgroundColor="#00A8C6">
      <Label
        v-show="IS_ANDROID"
        class="text"
        text="Alerts page"
        textWrap="true"
      />
      <Label
        v-show="!IS_ANDROID"
        class="text"
        text="No es Android!!!"
        textWrap="true"
      />
      <Button text="Alert Editor"
        @tap="openAlertModal"
      />
    </StackLayout>
  </Page>
</template>
<script>
import AlertEditor from './AlertEditor'
export default {
  name: 'Alerts',
  data() {
    return {
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
    color: lime;
    repeat: no-repeat;
    size: cover;
    position: center;
  }
  height: 64px;
  width: 64px;
  border-radius: 50%;
}
.actionBar_title {
  background-color:darkseagreen;
  font-weight: bold;
}
.actionBar_iconRigth {
  background-color:coral;
}
</style>
