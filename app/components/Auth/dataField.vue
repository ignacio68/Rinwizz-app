<template>
  <StackLayout orientation="horizontal">
    <FontIcon
      class="dataField-icon"
      :type="type"
      :color="color"
      :size="size"
      :name="name"
    />
    <Label :text="title" class="dataField-title" />
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
import FontIcon from '@components/Common/FontIcon'
export default {
  name: 'DataField',
  components: {
    FontIcon
  },
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
    },
    title: {
      type: String,
      required: true,
      default: ''
    }
    // data: {
    //   type: String,
    //   required: true,
    //   default: ''
    // },
    // keyboardType: {
    //   type: String,
    //   default: ''
    // },
    // maxLength: {
    //   type: Number,
    //   default: 0
    // },

    // secure: {
    //   type: Boolean,
    //   default: false
    // },
    // visibility: {
    //   type: String,
    //   default: 'visible'
    // }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.dataField_-icon {
}
.dataField-title {
}
</style>
