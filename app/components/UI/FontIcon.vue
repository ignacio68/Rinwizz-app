<template>
  <Label
    :class="type"
    :color="color"
    :fontSize="fontSize"
    :text="name | fonticon"
    :backgroundColor="backgroundColor"
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
    fontSize: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    name: {
      type: String,
      required: true
    },
    backgroundColor: {
      type:String,
      default: 'transparent'
    }
  }
}
</script>
