<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    let user_id = localStorage.getItem('user_id')
    if(!user_id){
      this.$wechatAuth.authorize()
    }
  }
}
</script>

<style>

</style>
