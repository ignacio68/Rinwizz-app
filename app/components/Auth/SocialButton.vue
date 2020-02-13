<template>
  <StackLayout
    class="socialButton"
    horizontalAlingment="center"
    verticalAlignment="center"
    width="socialButtonWidth"
    height="socialButtonHeight"
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
    socialButtonWidth: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    socialButtonHeight: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    socialButtonBackgroundColor: {
      type: String,
      default: "lime",
      required: true
    },
    iconSize: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    iconName : {
      type: String,
      default: null,
      required: true
    },
    iconColor: {
      type: String,
      default: "white",
    },
    iconBackgroundColor: {
      type: String,
      default: "transparent"
    },
    provider: {
      type: String,
      default: null,
      required: true
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
