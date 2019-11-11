<template>
  <Page>
    <ActionBar title="Settings" />
    <StackLayout>
      <Label class="text" text="Settings page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: "Settings",
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