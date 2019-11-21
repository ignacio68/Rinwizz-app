<template>
  <GridLayout
    class="action-bar"
    rows="*,4,*"
    columns="*"
    verticalAlignment="center"
  >
    <StackLayout>
      <v-slot>
        <Label
          col="0"
          class="action-bar-icon"
          :backgroundImage="iconLeftSrc"
          @tap="iconLeftAction"
          :width="size"
          :heigth="size"
          textWrap="true"
        />
      </v-slot>
    </StackLayout>
    <StackLayout>
      <Label col="1" class="action-bar-title" :text="title" textWrap="true" />
    </StackLayout>
    <StackLayout>
      <v-slot>
        <Label
          col="2"
          class="action-bar-icon"
          :backgroundImage="iconRightSrc"
          @tap="iconRightAction"
          :width="size"
          :heigth="size"
          textWrap="true"
        />
      </v-slot>
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {
  name: 'TheActionBar',
  props: {
    iconLeftSrc: {
      type: String,
      default: ''
    },
    iconLeftAction: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      required: true,
      default: 32
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    iconRighttSrc: {
      type: String,
      default: ''
    },
    iconRightAction: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
,
action-bar-icon {
  background: {
    color: white;
    repeat: no-repeat;
    size: cover;
    position: center;
  }
  border: {
    color: red;
    width: 10;
    radius: 50%;
  }
}
</style>
