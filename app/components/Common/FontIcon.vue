<template>
  <Label
    :classname="className"
    :color="color"
    :fontSize="size"
    :text="name | fonticon"
    width="${size}"
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
      default:''
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [String, Number],
      default: 50,
      validation: s => !isNaN(s)
    },
    name: {
      type: String,
      required: true,
      default:''
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
