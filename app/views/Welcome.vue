<template>
  <Page>
    <ActionBar title="Welcome" />
    <StackLayout>
      <Label class="text" text="Welcome page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: "Welcome",
  data() {
    return {};
  }
};
</script>
<style>
.text {
  margin-top: 16px;
  font-size: 20;
  width: 16px;
}
</style>