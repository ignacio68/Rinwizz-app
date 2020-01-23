<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <VueRadioButton
        text="Funciona!!"
        :enabled="true"
      />
      <FontIcon
        type="fab"
        iconName="fa-reddit"
        color="#0B87DE"
        iconSize="100"
        class="p-t-20"
      />
      <Label
        class="h2 text-center bold p-t-10"
        :text="$t('lang.views.welcome.header')"
        textWrap="true"
      />
      <label
        class="h3 text-center medium p-t-20"
        :text="$t('lang.views.welcome.text')"
        textWrap="true"
      />

      <StackLayout class="p-x-30">
        <StackLayout
          v-for="(message, index) in messages"
          :key="index"
          class="p-t-10"
        >
          <Label
            class="h3 text-center"
            :text="$t(message.text)"
          />
        </StackLayout>
      </StackLayout>

      <Button
        :text="$t('lang.views.welcome.signup')"
        class="-primary"
        @tap="toSignUp"
      />
    </StackLayout>
  </Page>
</template>

<script>
import RadioButton from 'nativescript-vue-radio-button'
import SignUp from '@views/Auth/SignUp'
import FontIcon from '@components/UI/FontIcon'
export default {
  name: 'Welcome',
  components: {
    FontIcon,
    "VueRadioButton": RadioButton
  },
  data() {
    return {
      messages: [
        { text: 'lang.views.welcome.text1' },
        { text: 'lang.views.welcome.text2' },
        { text: 'lang.views.welcome.text3' },
        { text: 'lang.views.welcome.text4' }
      ]
    }
  },
  computed: {},
  methods: {
    toSignUp() {
      this.$navigateTo(SignUp)
    }
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
