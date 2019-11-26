<template>
  <Label
    :class="type"
    :color="color"
    :fontSize="size"
    :text="name | fonticon"
    width="size"
    textAlignment="center"
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
    size: {
      type: [String, Number],
      default: 16,
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
