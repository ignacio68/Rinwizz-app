<template>
  <Page>
    <ActionBar title="HomePage" />
    <StackLayout backgroundColor="#58e821">
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
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>