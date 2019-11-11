<template>
  <Page>
    <ActionBar title="HomePage" />
    <StackLayout>
      <Label class="text" text="HomePage page" textWrap="true" />
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: "HomePage",
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