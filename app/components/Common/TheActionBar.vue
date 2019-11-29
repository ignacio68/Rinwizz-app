<template>
  <GridLayout
    class="nt-action-bar"
    columns="64,*,58"
    verticalAlignment="center"
    width="100%"
  >
    <Label
      v-if="iconLeftSrc"
      col="0"
      class="nt-action-bar__item nt-action-bar-icon__left"
      :backgroundImage="iconLeftSrc"
      horizontalAlignment="center"
      textWrap="true"
      :@tap="$emit('iconLeftAction')"
    />
    <Label
      col="1"
      class="nt-action-bar-title text-left p-l-16"
      :text="title"
      textWrap="true"
    />
    <Label
      v-if="iconRightSrc"
      col="2"
      class="nt-action-bar__item nt-action-bar-icon__right"
      :backgroundImage="iconRightSrc"
      horizontalAlignment="center"
      textWrap="true"
      :@tap="$emit('iconRightAction')"
    />
  </GridLayout>
</template>

<script>
export default {
  name: 'TheActionBar',
  props: {
    iconLeftSrc: {
      type: String
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    iconRightSrc: {
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.nt-action-bar-icon__left {
  background: {
    color: white;
    repeat: no-repeat;
    size: cover;
    position: center;
  }
  width: 48;
  height: 48;
  border-radius: 50%;
}
.nt-action-bar-title {
}
.nt-action-bar-icon--right {
  width: 32;
  height: 32;
}
</style>
