<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label
        class="h3 text-center font-weight-bold m-t-30"
        :text="$t('lang.views.welcome.header')"
        textWrap="true"
      />

      <!-- Icon Font with Label -->
      <Label text.decode="&#xe6ab;" class="iconLabel" color="#0A6B59" />

      <!-- Icon Font with Image -->
      <Image
        src.decode="font://&#xe6ae;"
        stretch="none"
        class="iconImage_dips"
      />
      <Image
        src.decode="font://&#xe6ae;"
        stretch="none"
        class="iconImage_pixels"
      />
      <Label :text="lang" textWrap="true" class="h2 -uppercase" />
      <Button text="SignUp" class="-primary" @tap="toSignUp" />
      <!-- <FontIcon
        className="peIcon"
        fontSize="36"
        name="&#xe6ae;"
        tapAction="tapPrueba"
      />
      <FontIcon
        className="peIcon"
        name='pe-7s-piggy'
        color="00A8C6"
        @tap="tapPrueba"
      /> -->
      <Label
        class="peIcon"
        fontSize="40"
        :text="'pe-7s-car' | fonticon"
        @tap="tapPrueba"
      />
    </StackLayout>
  </Page>
</template>

<script>
import SignUp from '@views/Auth/SignUp'
import FontIcon from '@components/Common/FontIcon'
import { mapGetters } from 'vuex'
export default {
  name: 'Welcome',
  components: {
    FontIcon
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('shared', {
      lang: 'GET_LANG'
    })
  },
  methods: {
    toSignUp() {
      this.$navigateTo(SignUp)
    }
  },
  tapPrueba() {
    console.log('@tap funciona!!')
  }
}
</script>

<style lang="scss" scoped>
.iconLabel {
  font-family: 'Pe-icon-7-stroke';
  font-size: 50px;
}
.iconImage_dips {
  font-family: 'Pe-icon-7-stroke';
  font-size: 30;
  color: crimson;
}
.iconImage_pixels {
  font-family: 'Pe-icon-7-stroke';
  font-size: 30px;
  color: crimson;
}
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
}
.btn {
  background-color: indianred;
}
</style>
