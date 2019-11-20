<template>
  <StackLayout orientation="horizontal">
    <Image :src="imageSrc" stretch="none" />
    <MDTextField
      :name="name"
      :keyboardType="keyboardType"
      :maxLength="maxLength"
      :text="text"
      :secure="secure"
      :visibility="visibility"
    />
  </StackLayout>
</template>

<script>
export default {
  name: 'DataField',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    keyboardType: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      required: true,
      default: ''
    },
    secure: {
      type: Boolean,
      default: false
    },
    visibility: {
      type: Boolean,
      default: true
    },
    imageSrc: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return
  }
}
</script>

<style lang="scss" scoped></style>
