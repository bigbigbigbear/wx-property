<template>
  <div class="container">
    <mt-tabbar v-model="select" fixed>
      <mt-tab-item v-for="(item, index) in tabList" :key="index" :id="item.id">
        <img slot="icon" :src="item.active?item.iconActive:item.icon"> {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Home from "../assets/images/icon-home.png";
import HomeActive from "../assets/images/icon-home-active.png";
import Park from "../assets/images/icon-park.png";
import ParkActive from "../assets/images/icon-park-active.png";
import Mine from "../assets/images/icon-mine.png";
import MineActive from "../assets/images/icon-mine-active.png";
export default {
  name: "footTab",
  props: ['selected'],
  components: {},
  computed: {
    
  },
  watch: {
    select: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      this.tabList.forEach(function(item, index){
        if(val == item.id){
          item.active = true
        }else{
          item.active = false
        }
      })
      if(val != oldVal){
        this.$router.push({
          name: val
        })
      }
    }
  },
  data() {
    return {
      select: '',
      tabList: [
        {
          id: "home",
          name: "首页",
          icon: Home,
          iconActive: HomeActive,
          active: false
        },
        {
          id: "park",
          name: "园区",
          icon: Park,
          iconActive: ParkActive,
          active: false
        },
        {
          id: "mine",
          name: "我的",
          icon: Mine,
          iconActive: MineActive,
          active: false
        }
      ]
    };
  },
  mounted() {
    let that = this
    this.select = this.selected
    this.tabList.forEach(function(item, index){
      if(that.selected == item.id){
        item.active = true
      }else{
        item.active = false
      }
    })
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
