<template>
  <GridLayout
    class="dataField"
    columns="56, *, 56"
    rows="56"
  >
    <StackLayout
      class="dataField__icon-left"
      col="0"
    >
      <FontIcon
        :type="iconType"
        :color="iconColor"
        :fontSize="iconSize"
        :name="iconName"
        :backgroundColor="iconBackgroundColor"
        paddingRight="0"
        paddingTop="30"
      />
    </StackLayout>

    <StackLayout
      class="dataField__text-wrapper"
      col="1"
    >
      <GridLayout
        class="nt-input"
        rows="16, auto"
        col="*, 16"
        marginBottom="5"
      >
        <Label
          ref="label"
          opacity="0.4"
          :fontSize="labelTextSize"
          :text="labelText"
          row="1"
          col="0"
        />
        <TextField
          ref="textField"
          :secure="secure"
          :maxLength="maxLength"
          :keyboardType="keyboard"
          :returnKeyType="returnKey"
          :text="dataText"
          :fontSize="labelTextSize"
          editable="true"
          autocorrect="false"
          row="1"
          col="0"
          colSpan="2"
          borderColor="transparent"
          borderBottomWidth="2"
          borderBottomColor="#cec8c8"
          padding="0"
          @focus="onFocus"
          @blur="onBlur"
          @textChange="updateValue($event)"
        />
        <FontIcon
          v-if="isError"
          class="dataField__icon"
          type="far"
          color="red"
          :fontSize="20"
          name="fa-exclamation-circle"
          paddingRight="0"
          paddingTop="30"
          row="1"
          col="1"
        />
      </GridLayout>
    </StackLayout>
    <StackLayout
      class="dataField__icon-right"
      col="2"
    >
      <slot />
    </StackLayout>
  </GridLayout>
</template>

<script>
import FontIcon from '@components/UI/FontIcon'
import { Color } from 'color'

export default {
  name: 'DataField',
  components: {
    FontIcon
  },
  props: {
    // ----- ICON ----- //
    iconType: {
      type: String,
      required: true,
      default: 'fa'
    },
    iconColor: {
      type: String,
      default: 'black'
    },
    iconSize: {
      type: [String, Number],
      default: 24,
      validation: s => !isNaN(s)
    },
    iconName: {
      type: String,
      required: true
    },
    iconBackgroundColor: {
      type:String,
      default: 'transparent'
    },

    // ----- LABEL ----- //
    labelText: {
      type: String,
      default: '',
      required: true
    },
    labelTextSize: {
      type: Number,
      default: 16,
      validation: s => !isNaN(s)
    },
    // ----- TEXT FIELD ----- //

    textSize: {
      type: [String, Number],
      default: 20,
      validation: s => !isNaN(s)
    },
    maxLength: {
      type: Number,
      default: 32,
      validation: s => !isNaN(s)
    },
    textFieldValue: {
      type: [String, Number],
      default: ''
    },
    keyboard: {
      type: String,
      default: 'url',
      validator: function(value) {
        // The value must match one of these strings
        return (
          ['datetime', 'phone', 'number', 'url', 'email'].indexOf(value) !== -1
        )
      }
    },
    returnKey: {
      type: String,
      default: 'next',
      validator: function(value) {
        // The value must match one of these strings
        return ['done', 'go', 'next', 'search', 'send'].indexOf(value) !== -1
      }
    },
    secure: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataText:'',
      // textField : this.$refs.textField.nativeView,
      // label: this.$refs.label.nativeView
    }
  },
  methods: {
    updateValue(args) {
      let newValue = args.value
      console.log(newValue)
      this.$emit('modified', newValue)
    },
    onFocus() {
      // Get our elements to manipulate
      const label = this.$refs.label.nativeView
      const textField = this.$refs.textField.nativeView

      // Animate the label sliding up and less transparent
      label
        .animate({
          translate: { x: 0, y: -16 },
          opacity: 0.8,
          fontSize: label.fontSize - 2
        })
        .then(() => {})
        .catch(() => {})

      // Set the border bottom color to color focus to indicate focus
      textField.borderBottomColor = new Color('teal')
    },
    onBlur() {
      // Get our elements to manipulate
      const label = this.$refs.label.nativeView
      const textField = this.$refs.textField.nativeView

      // if there is text in our input then don't move the label back to it's initial position
      if (!textField.text) {
        label
          .animate({
            translate: { x: 0, y: 0 },
            opacity: 0.4,
            fontSize: label.fontSize + 2
          })
          .then(() => {})
          .catch(() => {})
      }
      //  Reset border bottom color
      textField.borderBottomColor = new Color('#cec8c8')
    },
    // onError() {
    //    // Get our elements to manipulate
    //   const textField = this.$refs.textField.nativeView
    //   // Set the same color than the feedback message error
    //   textField.borderBottomColor = new Color('red') // TODO: revisar numero de color
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
