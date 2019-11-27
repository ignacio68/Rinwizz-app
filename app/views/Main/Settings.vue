<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <label text="Settings" class="nt-drawer__header" />
    </StackLayout>
    <StackLayout>
      <Label class="nt-drawer__list-item text" text="Perfil" textWrap="true" />
      <Label class="nt-drawer__list-item text" text="Temas" textWrap="true" />
      <Label
        class="nt-drawer__list-item text"
        text="Favoritos"
        textWrap="true"
      />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'Settings',
  data() {
    return {}
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
