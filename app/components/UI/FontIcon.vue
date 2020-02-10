<template>
  <Label
    ref="fontIcon"
    :class="type"
    :color="color"
    :backgroundColor="setColor(backgroundColor)"
    :fontSize="iconSize"
    :text="iconName | fonticon"
    :width="iconSize"
    :height="iconSize"
    textAlignment="center"
    @tap="$emit('tap')"
  />
</template>
<script>
import { Color } from 'color'

export default {
  name: 'FontIcon',
  props: {
    // ref: {
    //   type: String,
    //   default: null
    // },
    type: {
      type: String,
      required: true,
      default: 'fa'
    },
    color: {
      type: String,
      default: 'black'
    },
    backgroundColor: {
      type: String,
      default: 'orange'
    },
    iconSize: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    iconName: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    setColor(backgroundColor) {
      console.log(`backgroundColor: ${backgroundColor}`)
      const fontIcon = this.$refs.fontIcon.nativeView
      fontIcon.backgroundColor = new Color(backgroundColor)
    }
  }
}
</script>
