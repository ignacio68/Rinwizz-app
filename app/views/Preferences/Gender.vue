<template>
  <Page>
    <ActionBar title="Genero" />
    <StackLayout>
      <Label class="text" text="Gender page" textWrap="true" />
      <Button class="-primary" text="Continuar" @tap="toAvatar" />
      <Button class="-primary" text="Finalizar" @tap="toGreetings" />
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
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
