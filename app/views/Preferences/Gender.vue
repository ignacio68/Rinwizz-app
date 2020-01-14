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
        <StackLayout class="genderlist">
          <RadioButton
            v-for="(gender, index) in genders"
            :key="index"
            class="checkbox"
            :text="$t(gender.type)"
            :checked.sync="gender.selected"
            @onChangeChecked="changeCheckedRadio(gender)"
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
import RadioButton from '@components/UI/RadioButton'
import Avatar from './Avatar'
import Greetings from './Greetings'
export default {
  name: 'Gender',
  components: {
    RadioButton
  },
  data() {
    return {
      genderSelected: '',
      genders: [
        { type: 'lang.views.gender.genders[0]', selected: false },
        { type: 'lang.views.gender.genders[1]', selected: false },
        { type: 'lang.views.gender.genders[2]', selected: false }
      ]
    }
  },
  computed: {
  },
  methods: {
    changeCheckedRadio(item) {
      // FIXME: arreglar el bug que provoca que no se puedan elegir items superiores
      // this.genderSelected = this.$t(item.type)

      item.selected = !item.selected

      if (!item.selected) {
        return
      }

      for (const gender of this.genders) {
        if (gender.type !== item.type) {
          gender.selected = false
          console.log(
            `los otros son ${this.$t(gender.type)} y : ${gender.selected}`
          )
        } else {
          console.log(`el genero elegido es ${this.genderSelected} y ${gender.selected}`)
        }
      }
      this.updateGender(item)
      console.log(`elegido ${this.$t(item.type)} y checked: ${item.selected}`)
    },
    updateGender(item) {
      const userData = { personal: { age: '', gender: '' } }
      userData.personal.gender = item.type
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
