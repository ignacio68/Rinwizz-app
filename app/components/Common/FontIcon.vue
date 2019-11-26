<template>
  <Label
    :classname="className"
    :color="color"
    :fontSize="size"
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
    className: {
      type: String,
      required: true,
      default:'fa'
    },
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: [String, Number],
      default: 16,
      validation: s => !isNaN(s)
    },
    name: {
      type: String,
      required: true
    },
    // tapAction: {
    //   type: String,
    //   default:''
    // },
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
