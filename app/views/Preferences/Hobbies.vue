<template>
  <Page>
    <ActionBar title="Hobbies" />
    <StackLayout>
      <Label
        class="text"
        text="Hobbies page"
        textWrap="true"
      />
      <Button
        class="-primary"
        text="Continuar"
        @tap="toGreetings"
      />
    </StackLayout>
  </Page>
</template>
<script>
import Greetings from './Greetings'
export default {
  name: 'Personal',
  data() {
    return {}
  },
  methods: {
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
