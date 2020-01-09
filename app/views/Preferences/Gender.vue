<template>
  <Page>
    <ActionBar title="Genero" />
    <StackLayout>
      <StackLayout class="p-25">
        <Label
          class="text"
          :text="$t('lang.views.gender.main')"
          textWrap="true"
        />
        <StackLayout
          v-for="(gender, index) in genders"
          :key="index"
          class="genderlist"
        >
          <check-box
            class="checkbox"
            :checked="gender.selected"
            :text="$t(gender.type)"
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
      genders: [
        { type: 'lang.views.gender.genders[0]', selected: false },
        { type: 'lang.views.gender.genders[1]', selected: false },
        { type: 'lang.views.gender.genders[2]', selected: false }
      ]
    }
  },
  computed: {},
  methods: {
    changeCheckedRadio(item) {
      // FIXME: arreglar el bug que provoca que no se puedan elegir items superiores
      // item.selected = !item.selected

      console.log(`el genero elegido es ${this.$t(item.type)}`)

      // if (!item.selected) {
      //   return
      // }

      for (const gender of this.genders) {
        if (gender.type === item.type) {
          gender.selected = true
          gender.type = this.genders
        } else {
          gender.selected = false
        }
      }

      // for (const index in this.genders) {
      //   if (this.genders[index].type !== item.type) {
      //     this.genders[index].selected = false
      //   }
      // }

      for (const gender of this.genders) {
        console.log(
          `El género es ${this.$t(gender.type)} y está seleccionado: ${
            gender.selected
          }`
        )
      }
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
