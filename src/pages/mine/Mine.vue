<template>
	<div class="container">
		<div class="section1">
			<div class="section-bd">
				<img :src="userInfo.user_avatar" :alt="userInfo.user_name">
				<h4>{{userInfo.user_name}}</h4>
				<p class="font-grey">{{userInfo.user_park}}</p>
			</div>
		</div>
		<div class="section2">
			<mt-cell title="我的账单" value="" is-link :to="{name:'mineBill'}">
				<img slot="icon" src="../../assets/images/icon-bill.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的评分" :value="userInfo2.count_score" is-link :to="{name:'mineScore'}">
				<img slot="icon" src="../../assets/images/icon-score.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的预约" :value="userInfo2.count_booking" is-link :to="{name:'mineBook'}">
				<img slot="icon" src="../../assets/images/icon-book.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的报修" :value="userInfo2.count_repair" is-link :to="{name:'mineRepair'}">
				<img slot="icon" src="../../assets/images/icon-repair.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="投诉建议" value="" is-link :to="{name:'mineAdvice'}">
				<img slot="icon" src="../../assets/images/icon-advice.png" width="24" height="24">
			</mt-cell>
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
.section2 img{
	width: 0.32rem;
	height: 0.32rem;
}
</style>
<script type="text/babel">
import FootTab from '@/components/FootTab'
import iconBill from '@/assets/images/icon-bill.png'
import iconScore from '@/assets/images/icon-score.png'
import iconAdvice from '@/assets/images/icon-advice.png'
import api from '../../server/api'
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
			},
			userInfo2: {},
			icons: {
				iconBill: iconBill,
				iconScore: iconScore,
				iconAdvice: iconAdvice
			}
    };
  },
  created() {
		this.getUserInfo()
	},
  mounted() {},
  methods: {
		//获取我的信息
    getUserInfo: function(){
			let that = this
			let user_id = localStorage.getItem('user_id')
      let params = {
				user_id: user_id
			}
      this.$http.get(api.userInfo,{params: params}).then(res => {
        that.userInfo2 = res.data
      })
    },
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