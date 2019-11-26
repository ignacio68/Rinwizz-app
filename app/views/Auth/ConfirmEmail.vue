<template>
  <StackLayout class="ng-page">
    <Label text="message" />
  </StackLayout>
</template>

<script>
export default {
  name: 'ConfirmEmail',
  data() {
    return {
      message: 'Enviado correo de confirmación de password'
    }
  }
}
</script>

<style lang="scss" scoped></style>
