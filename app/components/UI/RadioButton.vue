<template>
  <StackLayout
    ref="radioButtonWrap"
    class="radio-btn"
    :orientation="orientation"
    @tap="onTap"
  >
    <GridLayout
      class="radio-btn__radio"
      columns="auto"
      rows="auto"
    >
      <Label
        ref="radioRipple"
        class="radio-btn__radio-riple"
        col="0"
        row="0"
        :height="radioRippleSize"
        :width="radioRippleSize"
        borderRadius="50%"
        borderWidth="6"
        :borderColor="radioColor"
        backgroundColor="transparent"
        opacity="0"
      />
      <Label
        ref="radioOuter"
        class="radio-btn__radio-outer"
        col="0"
        row="0"
        :height="radioSize"
        :width="radioSize"
        borderRadius="50%"
        borderWidth="2"
        :borderColor="radioColor"
        backgroundColor="transparent"
      />
      <Label
        ref="radioInner"
        class="radio-btn__radio-inner"
        col="0"
        row="0"
        borderRadius="50%"
        :height="radioInnerSize"
        :width="radioInnerSize"
        :backgroundColor="radioColor"
        opacity="0"
      />
    </GridLayout>
    <Label
      ref="radioText"
      class="radio-btn__label p-x-8"
      :text="text"
      :fontSize="fontSize"
      :color="textColor"
      textWrap="true"
      verticalAlignment="middle"
    />
  </StackLayout>
</template>
<script>
import { Color } from 'color'
import { isColor } from '@utils/commons/theme'
const AnimationCurve = require('tns-core-modules/ui/enums').AnimationCurve
export default {
  name: 'RadioButton',
  props: {
    enabled: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: prop => ['horizontal', 'vertical'].includes(prop)
    },
    text: {
      type: String,
      default: null
    },
    radioColor: {
      type: String,
      default: 'teal',
      validator: color => isColor(color)
    },
    activatedColor: {
      type: String,
      default: 'orange',
      validator: color => isColor(color)
    },
    disabledColor: {
      type: String,
      default: '#a4a4a4',
      validator: color => isColor(color)
    },
    textColor: {
      type: String,
      default: '#2c2c2c',
      validator: color => isColor(color)
    },
    checked: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: '16'
    },
    radioSize: {
      type: Number,
      default: 24
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      lastColor: this.radioColor
    }
  },
  computed: {
    radioRippleSize() {
      return this.radioSize + 12
    },
    radioInnerSize() {
      return this.radioSize - 12
    }
  },
  watch: {
    immediate: true,
    checked() {
      this.changeColor()
    },
    enabled() {
      this.isEnabled()
    }
  },
  mounted() {
    this.isEnabled()
  },
  methods: {
    isEnabled() {
      const radioRipple = this.$refs.radioRipple.nativeView
      const radioOuter = this.$refs.radioOuter.nativeView
      const radioInner = this.$refs.radioInner.nativeView
      const radioText = this.$refs.radioText.nativeView
      if (!this.enabled) {
        radioRipple.borderColor = new Color(this.disabledColor)
        radioOuter.borderColor = new Color(this.disabledColor)
        radioInner.backgroundColor = new Color(this.disabledColor)
        radioText.color = new Color(this.disabledColor)
      } else {
        radioRipple.borderColor = new Color(this.lastColor)
        radioOuter.borderColor = new Color(this.lastColor)
        radioInner.backgroundColor = new Color(this.lastColor)
        radioText.color = new Color(this.textColor)
      }
    },
    onTap() {
      if (!this.enabled) {
        this.isEnabled()
        return
      }
      this.$emit('onChangeChecked')
      this.radioRipple()
    },
    radioRipple() {
      const radioRipple = this.$refs.radioRipple.nativeView
      radioRipple
        .animate({
          curve: AnimationCurve.linear,
          duration: 100,
          opacity: 0.4
        })
        .then(() => {
          radioRipple
            .animate({
              curve: AnimationCurve.linear,
              duration: 100,
              opacity: 0.0
            })
            .then(() => {})
        })
        .catch(() => {})
    },
    changeColor() {
      const radioRipple = this.$refs.radioRipple.nativeView
      const radioOuter = this.$refs.radioOuter.nativeView
      const radioInner = this.$refs.radioInner.nativeView
      if (this.checked) {
        radioRipple.borderColor = new Color(this.activatedColor)
        radioOuter.borderColor = new Color(this.activatedColor)
        radioInner.backgroundColor = new Color(this.activatedColor)
        radioInner.opacity = 1
        this.lastColor = this.activatedColor
      } else {
        radioRipple.borderColor = new Color(this.radioColor)
        radioOuter.borderColor = new Color(this.radioColor)
        radioInner.backgroundColor = new Color(this.radioColor)
        radioInner.opacity = 0
        this.lastColor = this.radioColor
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.radio-btn {
  &__radio {
    &-outer {
    }
    &-inner {
    }
    &-ripple {
    }
  }
  &__label {
    }
}
</style>
