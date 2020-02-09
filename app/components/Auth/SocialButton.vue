<template>
  <Label class="socialButton">
    <FontIcon
      class="socialButton__icon"
      type="fab"
      iconSize="24"
      :provider="provider"
      :iconName="iconName"
      :color="color"
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
      default: "orange",
      // required: true
    }
  },
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
