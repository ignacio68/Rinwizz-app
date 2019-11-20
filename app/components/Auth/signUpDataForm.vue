<template>
  
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
