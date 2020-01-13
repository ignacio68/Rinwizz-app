<template>
  <StackLayout
    class="radio-btn"
    orientation="horizontal"
    verticalAlignment="middle"
  >
    <Label
      :heigth="size"
      :width="size"
    >
      <Label
        class="radio-btn__inner"
        :bakgroundColor="backgroundColor"
        :fontSize="fontSize"
        @tap.prevent="$emit('onTap')"
      />
    </Label>
    <Label
      class="radio-btn__label"
      :text="text"
      textWrap="true"
    />
  </StackLayout>
</template>
<script>
export default {
  name: 'RadioButton',
  model: [],
  props: {
    text: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 36
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '16'
    }
  }
}
</script>
<style lang="scss" scoped>
.radio-btn {
  border-radius: 50%;
  &__inner {
    background-color: #dcdde1;
    padding: 4;
  }
  &__label {
  }
}
</style>
