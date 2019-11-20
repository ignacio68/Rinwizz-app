<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Genero" />
    <StackLayout>
      <Label class="text" text="Gender page" textWrap="true" />
      <Button class="btn btn-primary" ext="Continuar" @tap="toAvatar" />
      <Button class="btn btn-primary" text="Finalizar" @tap="toGreetings" />
    </StackLayout>
  </Page>
</template>
<script>
import Avatar from './Avatar'
import Greetings from './Greetings'
export default {
  name: 'Gender',
  data() {
    return {}
  },
  methods: {
    toAvatar() {
      this.$navigateTo(Avatar)
    },
    toGreetings() {
      this.$navigateTo(Greetings)
    }
  }
}
</script>
<style scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
