<template>
  <Page class="page">
    <ActionBar class="action-bar" title="UserLocation" />
    <StackLayout>
      <Label class="text" text="UserLocation page" textWrap="true" />
      <Button class="btn btn-primary" text="Continuar" @tap="toHobbies" />
      <Button class="btn btn-primary" text="Finalizar" @tap="toGreetings" />
    </StackLayout>
  </Page>
</template>
<script>
import Hobbies from './Hobbies'
import Greetings from './Greetings'
export default {
  name: 'UserLocation',
  data() {
    return {}
  },
  methods: {
    toHobbies() {
      this.$navigateTo(Hobbies)
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
