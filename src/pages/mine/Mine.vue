<template>
	<div class="container" v-wechat-title="$route.meta.title">
		<div class="section1">
			<div class="section-bd">
				<img :src="userInfo.user_avatar" :alt="userInfo.user_name">
				<h4>{{userInfo.user_name}}</h4>
				<p class="font-grey">{{userInfo.user_park}}</p>
			</div>
		</div>
		<div class="section2">
			
		</div>
    <foot-tab :selected="selected"></foot-tab>
	</div>
</template>
<style scoped>
.section1 {
	width: 100%;
	height: 4.08rem;
	margin-bottom: 0.2667rem;
	position: relative;
	background: #fff url('../../assets/images/icon-bg-1.png') no-repeat left center;
	background-size: 100% 100%;
  text-align: center;
}
.section-bd{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.section-bd img{
	width: 1.68rem;
	height: 1.68rem;
	border-radius: 50%;
	border: 0.0133rem solid #fff;
}
.section-bd h4{
	padding: 0.2rem 0;
}
</style>
<script type="text/babel">
import FootTab from '@/components/FootTab'
export default {
  components: {
    FootTab
  },
  data() {
    return {
			selected: 'mine',
			userInfo: {
				user_avatar: '',
				user_name: '我是美女',
				user_park: '南山高新科技园'
			}
    };
  },
  created() {},
  mounted() {},
  methods: {
    goMineBill: function(){
      // 我的账单页面
      this.$router.push({
        name: "mineBill"
      })
    },
    goMineScore: function(){
      // 我的评分页面
      this.$router.push({
        name: "mineScore"
      })
    },
    gomineAdvice: function(){
      // 投诉建议页面
      this.$router.push({
        name: "mineAdvice"
      })
    },
  }
}
</script>