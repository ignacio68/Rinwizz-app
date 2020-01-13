<template>
  <StackLayout
    class="radio-btn p-4"
    orientation="horizontal"
    verticalAlignment="middle"
    @tap="onTap"
  >
    <StackLayout
      class="radio-btn__radio"
    >
      <Label
        ref="radioOutside"
        class="radio-btn__radio--outside"
        left="0"
        top="0"
        :height="size"
        :width="size"
        borderRadius="50%"
        borderWidth="4"
        borderColor="blue"
        backgroundColor="transparent"
      />
      <!-- <Label
        ref="radioInside"
        cklass="radio-btn__radio--inside"
        left="4"
        top="4"
        :height="20"
        :width="20"
        :bakgroundColor="backgroundColor"
      /> -->
    </StackLayout>

    <Label
      class="radio-btn__label p-x-8"
      :text="text"
      :fontSize="fontSize"
      textWrap="true"
    />
  </StackLayout>
</template>
<script>
import { Color } from 'color'
export default {
  name: 'RadioButton',
  // model: {
  //   prop: 'checked',
  //   event: 'changeChecked'
  // },
  props: {
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '24'
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '16'
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
    onTap() {
      this.changeColor()
      this.$emit('onChangeChecked', this.checked)
      console.log(`checked: ${this.checked}`)
    },
    changeColor() {
      const radioOutside = this.$refs.radioOutside.nativeView
      if (this.checked) {
        radioOutside.borderColor = new Color('#00b47e')
      } else {
        radioOutside.borderColor = new Color(this.backgroundColor)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.radio-btn {
  &__radio {
    &--outside {
    }
    &--inside {
      border-radius: 50%;
    }
    &--ripple {

    }
  }
  &__label {
  }
}
</style>
