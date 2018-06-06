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
    if(typeof user_id === 'undefined' || user_id === null){
      // this.$wechatAuth.authorize()
    }
  }
}
</script>

<style>

</style>
