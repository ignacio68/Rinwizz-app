<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label
        class="h2 text-center font-weight-bold m-t-30"
        :text="$t('lang.views.welcome.header')"
        textWrap="true"
      />
      <Button text="SignUp" class="-primary" @tap="toSignUp" />
      <FontIcon
        type="fab"
        name="fa-angular"
        color="00A8C6"
        size="50"
        @tap="onTap"
      />
      <Label class="fab" fontSize="40" :text="'fa-android' | fonticon" />
      <Label class="far" fontSize="50" :text="'fa-edit' | fonticon" />
      <Label class="fas" fontSize="60" :text="'fa-address-card' | fonticon" />
    </StackLayout>
  </Page>
</template>

<script>
import SignUp from '@views/Auth/SignUp'
import FontIcon from '@components/Common/FontIcon'
export default {
  name: 'Welcome',
  components: {
    FontIcon
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    toSignUp() {
      this.$navigateTo(SignUp)
    }
  },
  onTap() {
    console.log('@tap funciona!!')
  }
}
</script>

<style lang="scss" scoped>

.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
}
.fab {
  color: crimson;
}
</style>
