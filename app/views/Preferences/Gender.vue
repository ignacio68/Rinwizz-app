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
            fontSize="24"
            size="36"
            :backgroundColor="gender.color"
            @tap="changeCheckedRadio(gender)"
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
        { type: 'lang.views.gender.genders[0]', selected: false, color: '#dcdde1' },
        { type: 'lang.views.gender.genders[1]', selected: false, color: '#dcdde1'},
        { type: 'lang.views.gender.genders[2]', selected: false, color: '#dcdde1'}
      ]
    }
  },
  computed: {
    changeSelected() {
      for (const gender of this.genders) {
          if (gender.selected === true )
                  gender.selected = false
          console.log(
            `los otros son ${this.$t(gender.type)} y : ${gender.selected}`
          )
      }
      return this.genders
    }
  },
  methods: {
    // changeSelected(item) {
    //   item.selected = false
    //    console.log(
    //         `los otros son ${this.$t(item.type)} y : ${item.selected}`
    //       )
    // },
    changeCheckedRadio(item) {
      // FIXME: arreglar el bug que provoca que no se puedan elegir items superiores
      console.log(`PRINCIPIO`)
      this.genderSelected = this.$t(item.type)

      // item.selected = !item.selected
      item.color = '#718093'

      // if (!item.selected) {
      //   return
      // }

      console.log(`el genero elegido es ${this.genderSelected }`)

      for (const gender of this.genders) {
        if (gender.type !== item.type) {
          gender.color = '#00a8ff'
          console.log(
            `los otros son ${this.$t(gender.type)} y : ${gender.color}`
          )
        }
      }
      console.log(`FINAL`)
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
