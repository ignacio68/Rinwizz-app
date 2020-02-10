<template>
  <Label class="socialButton">
    <FontIcon
      class="socialButton__icon"
      type="fab"
      :iconSize="iconSize"
      :provider="provider"
      :iconName="iconName"
      :color="color"
      :backgroundColor="backgroundColor"
    />
  </Label>
</template>
<script>
import FontIcon from '../UI/FontIcon'
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
    color: {
      type: String,
      default: "black",
      // required: true
    },
    backgroundColor: {
      type: String,
      default: 'white'
      // required: true
    },
  }
}
</script>
<style lang="scss" scoped>
.socialButton {
  height: 36;
  width: 64;
  border-radius: 50%;
  border-width: 2;
}
.socialButton__icon {
  vertical-align: center;
}
</style>
