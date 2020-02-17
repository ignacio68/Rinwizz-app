<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <label
        text="Settings"
        class="nt-drawer__header"
      />
    </StackLayout>
    <StackLayout>
      <Label
        class="nt-drawer__list-item text"
        text="Perfil"
        textWrap="true"
      />
      <Label
        class="nt-drawer__list-item text"
        text="Temas"
        textWrap="true"
      />
      <Label
        class="nt-drawer__list-item text"
        text="Favoritos"
        textWrap="true"
      />
      <Button
        text="Log Out"
        @tap="logOutUser"
      />
      <Button
        text="Delete"
        @tap="deleteUser"
      />
    </StackLayout>
  </Page>
</template>
<script>
import LogIn from '@views/Auth/Login'
import Welcome from '@views/Welcome'
import { mapActions } from 'vuex'
export default {
  name: 'Settings',
  data() {
    return {}
  },
  methods: {
    ...mapActions('auth', ['LOGOUT_USER', 'DELETE_USER']),
    async logOutUser() {
      await this.LOGOUT_USER().then(() => this.$navigateTo(LogIn))
    },
    async deleteUser() {
      await this.DELETE_USER().then(() => this.$navigateTo(Welcome))
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
</style>
