<template>
  <StackLayout>
    <TextView text="message" editable="false" />
  </StackLayout>
</template>

<script>
export default {
  name: 'ConfirmEmail',
  data() {
    return {
      message: 'Enviado correo de confirmación de password',
    }
  },
}
</script>

<style scoped></style>
