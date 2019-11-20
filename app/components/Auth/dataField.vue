<template>
  <StackLayout orientation="horizontal">
    <Label :text="iconSrc" class="dataField_icon" />
    <Label :text="title" class="dataField_title" />
    <!-- <MDTextField
      :v-model="data"
      :name="name"
      :keyboardType="keyboardType"
      :maxLength="maxLength"
      :text="text"
      class="dataField__text"
    /> -->
  </StackLayout>
</template>

<script>
export default {
  name: 'DataField',
  props: {
    iconSrc: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    data: {
      type: String,
      required: true,
      default: ''
    },
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
      type: String,
      default: 'visible'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.dataField__icon {
  font-family: 'Pe-icon-7-stroke';
  font-size: 24px;
}
.dataField__title {
}
.dataField__text {
}
</style>
