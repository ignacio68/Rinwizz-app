<template>
  <RadDataForm
    :source="userData"
    :metadata="userMetaData"
    @propertyCommitted="updateUserData"
    v-model="userData"
  >
  </RadDataForm>
</template>
<script>
export default {
  name: 'signUpDataForm',
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      },
      userMetaData: {
        isReadOnly: false,
        commitMode: 'Inmediate',
        validationMode: 'Inmediate',
        propertyAnnotations: [
          {
            name: 'name',
            displayName: 'Name',
            index: 0,
            required: true,
            editor: 'Text',
            validators: void 0
          },
          {
            name: 'email',
            displayName: 'Email',
            index: 1,
            required: true,
            editor: 'Email',
            validators: void 0
          },
          {
            name: 'pasword',
            displayName: 'Password',
            index: 2,
            required: true,
            editor: 'Password',
            validators: void 0
          },
          {
            name: 'agreeTerms',
            displayName: 'I Agree with Terms',
            index: 3,
            editor: 'Switch'
          }
        ]
      }
    }
  },
  methods: {
    updateUserData() {
      console.log('el usuario es: ' + JSON.stringify(this.userData))
    }
  }
}
</script>
<style lang="" scoped></style>
