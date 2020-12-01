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
            :enabled="isEnabled"
            :text="$t(gender.type)"
            :checked.sync="gender.selected"
            @onChangeChecked="changeCheckedRadio(gender)"
          />
        </StackLayout>
      </StackLayout>

      <!-- For production only -->
      <!-- <Label
        class="p-x-20"
        :text="getCssName"
        textWrap="true"
      /> -->
      <!------------------------->
      <Button
        class="-primary"
        text="CssPath"
        @tap="toCssPath()"
      />
      <Button
        class="-primary"
        text="Habilita/Desabilita"
        @tap="toggleEnabled()"
      />
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
import { getCss } from '@utils/commons/theme'
import RadioButton from '@/components/UI/RadioButton'
import Avatar from './Avatar'
import Greetings from './Greetings'
export default {
  name: 'Gender',
  components: {
    RadioButton
  },
  data() {
    return {
      isEnabled: true,
      genderSelected: '',
      genders: [
        { type: 'lang.views.gender.genders[0]', selected: false },
        { type: 'lang.views.gender.genders[1]', selected: false },
        { type: 'lang.views.gender.genders[2]', selected: false }
      ]
    }
  },
  computed: {
    getCssName() {
      return getCss()
    }
  },
  methods: {
    toCssPath() {
      getCss()
    },
    toggleEnabled() {
      this.isEnabled = !this.isEnabled
    },
    changeCheckedRadio(item) {
      if (item.selected === true) {
        return
      }

      this.updateGender(item)

      item.selected = !item.selected

      for (const gender of this.genders) {
        if (gender.type !== item.type) {
          gender.selected = false
        }
      }
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
