<template>
  <Page>
    <ActionBar
      title="Avatar"
      class="medium"
    />
    <StackLayout>
      <Label
        class="text"
        text="Avatar page"
        textWrap="true"
      />
      <Button
        class="-primary"
        text="Continuar"
        @tap="toUserLocation"
      />
      <Button
        class="-primary -outline"
        text="Finalizar"
        @tap="toGreetings"
      />
    </StackLayout>
  </Page>
</template>
<script>
import UserLocation from './UserLocation'
import Greetings from './Greetings'
export default {
  name: 'Avatar',
  data() {
    return {}
  },
  methods: {
    toUserLocation() {
      this.$navigateTo(UserLocation)
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
