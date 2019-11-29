<template>
  <Label
    :class="type"
    :color="color"
    :fontSize="iconSize"
    :text="name | fonticon"
    width="size"
    textAlignment="center"
    @tap="$emit('tap')"
  />
</template>
<script>
export default {
  name: 'FontIcon',
  props: {
    type: {
      type: String,
      required: true,
      default: 'fa'
    },
    color: {
      type: String,
      default: 'black'
    },
    iconSize: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
