<template>
  <StackLayout
    class="socialButton"
    horizontalAlingment="center"
    verticalAlignment="center"
    :backgroundColor="socialButtonBackgroundColor"
    @tap="onTap(provider)"
  >
    <FontIcon
      class="socialButton__icon"
      type="fab"
      :color="iconColor"
      :fontSize="iconSize"
      :name="iconName"
      :backgroundColor="iconBackgroundColor"
      :provider="provider"
    />
  </StackLayout>
</template>
<script>
import FontIcon from '@components/UI/FontIcon'
export default {
  name: 'SocialButton',
  components: {
    FontIcon
  },
  props:{
    iconSize: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    provider: {
      type: String,
      default: null,
      // required: true
    },
    iconName : {
      type: String,
      default: null,
      // required: true
    },
    iconColor: {
      type: String,
      default: "white",
      // required: true
    },
    iconBackgroundColor: {
      type: String,
      default: "transparent"
      // required: true
    },
    socialButtonBackgroundColor: {
      type: String,
      default: "lime"
    }
  },
  methods: {
    onTap(provider) {
      this.$emit('providerSelected', provider)
    }
  }
}
</script>
<style lang="scss" scoped>
.socialButton {
  height: 36;
  width: 36;
  text-align: center;
  border-radius: 50%;
}
</style>
