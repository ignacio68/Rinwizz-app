<template>
  <Page>
    <ActionBar title="Genero" />
    <StackLayout>
      <StackLayout class="p-25">
        <Label
          class="text"
          :text="$t('lang.views.gender.main')"
          textWrap="true" />
        <StackLayout
          v-for="(gender, index) in genders"
          :key="index"
          class="genderlist">
          <check-box
            class="checkbox"
            :checked="gender.selected"
            :text="gender.type"
            boxType="circle"
            @checkedChange="changeCheckedRadio(gender)"
          />
        </StackLayout>
      </StackLayout>
      <Button
        class="-primary"
        :text="$t('lang.views.gender.button')"
        @tap="toAvatar"
      />
      <Button
        class="-primary"
        :text="$t('lang.buttons.skip')"
        @tap="toGreetings"
      />
    </StackLayout>
  </Page>
</template>
<script>
import Avatar from './Avatar'
import Greetings from './Greetings'
export default {
  name: 'Gender',
  data() {
    return {
      isChecked: false,
      genders: [
        { type: 'Hombre', selected: false },
        { type: 'Mujer', selected: false },
        { type: 'Otro', selected: false }
      ]
    }
  },
  methods: {
    changeCheckedRadio(item) {
      // FIXME: arreglar el bug que provoca que no se puedan elegir items superiores
      item.selected = !item.selected

      console.log(`el genero elegido es ${item.type}`)

      if(!item.selected) {
        return
      }

      this.genders.forEach(gender => {
        if(gender.type !== item.type) {
          gender.selected = false
        }
      })
    },
    toAvatar() {
      this.$navigateTo(Avatar)
    },
    toGreetings() {
      this.$navigateTo(Greetings)
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16;
  font-size: 20;
}
.checkbox {
  font-size: 18;
}
</style>
