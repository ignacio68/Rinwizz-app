<template>
  <StackLayout
    class="radio-btn p-4"
    orientation="horizontal"
    verticalAlignment="middle"
    @tap="onTap"
  >
    <GridLayout
      class="radio-btn__radio"
      rows="32"
    >
      <!-- <Label
        ref="radioRipple"
        class="radio-btn__radio-riple"
        row="0"
        left="0"
        top="0"
        :height="32"
        :width="32"
        borderRadius="50%"
        borderWidth="8"
        :borderColor="innerColor"
        backgroundColor="transparent"
      /> -->
      <Label
        ref="radioOuter"
        class="radio-btn__radio-outer"
        row="0"
        left="0"
        top="0"
        :height="radioSize"
        :width="radioSize"
        borderRadius="50%"
        borderWidth="1"
        :borderColor="innerColor"
        backgroundColor="transparent"
      />
    </GridLayout>
      <Label
        ref="radioInner"
        class="radio-btn__radio-inner"
        row="0"
        left="4"
        top="4"
        borderRadius="50%"
        :height="16"
        :width="16"
        :bakgroundColor="innerColor"
      />
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
export default {
  name: 'RadioButton',
  // model: {
  //   prop: 'checked',
  //   event: 'changeChecked'
  // },
  props: {
    enabled:{
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: null
    },
    innerColor: {
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
      type: String,
      default: '24'
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {

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
      this.changeColor()
      this.$emit('onChangeChecked', this.checked)
      console.log(`checked: ${this.checked}`)
    },
    toggle() {

    },
    changeColor() {
      const radioOuter = this.$refs.radioOuter.nativeView
      if (this.checked) {
        radioOuter.borderColor = new Color('#00b47e')
      } else {
        radioOuter.borderColor = new Color(this.innerColor)
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
    vertical-align: middle;
  }
}
</style>
