<template>
  <GridLayout
    class="nt-action-bar"
    columns="64,*,58"
    rows="*"
    verticalAlignment="center"
    width="100%"
  >
    <Label
      v-if="iconLeftSrc"
      col="0"
      class="action-bar-icon--left"
      :backgroundImage="iconLeftSrc"
      horizontalAlignment="center"
      textWrap="true"
      @tap="iconLeftAction"
    />
    <Label
      col="1"
      class="action-bar-title text-left p-l-16"
      :text="title"
      textWrap="true"
    />
    <slot>
      <Label
        v-if="iconRightSrc"
        col="2"
        class="action-bar-icon--right"
        :backgroundImage="iconRightSrc"
        horizontalAlignment="center"
        textWrap="true"
        @tap="iconRightAction"
      />
    </slot>
  </GridLayout>
</template>

<script>
export default {
  name: 'TheActionBar',
  props: {
    iconLeftSrc: {
      type: String
    },
    iconLeftAction: {
      type: String
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    iconRighttSrc: {
      type: String
    },
    iconRightAction: {
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.action-bar {
  height: 56;
}
.action-bar-icon--left {
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
.action-bar-title {
}
.action-bar-icon--right {
  width: 32;
  height: 32;
}
</style>
