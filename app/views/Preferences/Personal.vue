<template>
  <Page>
    <ActionBar title="Preferencias" />
    <StackLayout>
      <Label class="text" text="Personal page" textWrap="true" />
      <Button text="Continuar" @tap="toGender" />
      <Button text="Finalizar" @tap="toGreetings" />
    </StackLayout>
  </Page>
</template>
<script>
import Gender from './Gender'
import Greetings from './Greetings'
export default {
  name: 'Personal',
  data() {
    return {}
  },
  methods: {
    toGender() {
      this.$navigateTo(Gender)
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
