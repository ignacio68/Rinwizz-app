<template>
  <StackLayout
    class="radio-btn"
    orientation="horizontal"
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
    <StackLayout verticalAlignment="middle">
      <Label
        class="radio-btn__label p-x-8"
        :text="text"
        :fontSize="fontSize"
        textWrap="true"
      />
    </StackLayout>
  </StackLayout>
</template>
<script>
import { Color } from 'color'
import { validateColor } from 'validate-color'
const AnimationCurve = require("tns-core-modules/ui/enums").AnimationCurve;
export default {
  name: 'RadioButton',
  props: {
    enabled:{
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: null
    },
    radioColor: {
      // TODO: resolve validator
      //  TODO: set theme colors like default
      type: String,
      default: 'blue',
      // validator: color => this.isColor(color)
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
    }
  },
  methods: {
    isColor(color){
      if (typeof color !== 'string' || color.length === 0) {
        return false
      }

      try {
        validateColor(color)
        console.log(`El color es válido: ${color}`)
        return true
      } catch(err) {
        console.log(`Error en validateColor: ${err}`)
        return false
      }
    },
    isEnabled() {
     this.enabled = !this.enabled
    },
    onTap() {
      this.$emit('onChangeChecked')
      this.radioRipple()
    },
    toggle() {

    },
    radioRipple() {
      const radioRipple = this.$refs.radioRipple.nativeView
      radioRipple
        .animate({
          curve: AnimationCurve.linear,
          duration: 100,
          opacity: 0.4,
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
        radioRipple.borderColor = new Color('#00b47e')
        radioOuter.borderColor = new Color('#00b47e')
        radioInner.backgroundColor = new Color('#00b47e')
        radioInner.opacity = 1
      } else {
        radioRipple.borderColor = new Color(this.radioColor)
        radioOuter.borderColor = new Color(this.radioColor)
        radioInner.backgroundColor = new Color(this.radioColor)
        radioInner.opacity = 0
      }
    },
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
    vertical-align: middle;
  }
}
</style>
