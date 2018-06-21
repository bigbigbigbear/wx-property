<template>
	<div class="container">
		<div class="section1">
			<div class="section-bd">
				<img :src="userInfo.avatar" :alt="userInfo.nickname">
				<h4 class="nickname" @click="editName">{{userInfo.nickname}}</h4>
				<p>{{userInfo.park_name}}</p>
			</div>
			<span class="user-id">ID：{{userId}}</span>
		</div>
		<div class="section2">
			<mt-cell title="我的账单" value="" is-link :to="{name:'mineBill'}">
				<img slot="icon" src="../../assets/images/icon-bill.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的评分" :value="userInfo.count_score" is-link :to="{name:'mineScore'}">
				<img slot="icon" src="../../assets/images/icon-score.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的预约" :value="userInfo.count_booking" is-link :to="{name:'mineBook'}">
				<img slot="icon" src="../../assets/images/icon-book.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的报修" :value="userInfo.count_repair" is-link :to="{name:'mineRepair'}">
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
	background-size: 100% 100%;
  text-align: center;
}
.section-bd{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.nickname{
	position: relative;
	text-align: center;
}
.nickname::after{
	content: '';
	width: 0.6267rem;
	height: 0.4267rem;
	background: url('../../assets/images/edit.png') no-repeat 0.2rem;
	background-size: 0.4267rem 0.4267rem;
	position: absolute;
}
.user-id{
	position: absolute;
	left: 0.2rem;
	top: 0.1rem;
}
.section-bd img{
	width: 1.68rem;
	height: 1.68rem;
	border-radius: 50%;
	border: 0.0133rem solid #fff;
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
import { MessageBox, Toast } from 'mint-ui'
import api from '../../server/api'
export default {
  components: {
    FootTab
  },
  data() {
    return {
			selected: 'mine',
			userInfo: {},
			userId: '',
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
				if(res.err_code === 401){
          this.$wechatAuth.authorize()
          return
        }
				that.userId = user_id
        that.userInfo = res.data
      })
		},
		// 修改昵称
		editName() {
			let that = this
			let user_id = localStorage.getItem('user_id')
			MessageBox.prompt('请输入新昵称', {  
				inputValidator: (val) => {
					if( val === null || val === ''){
						return false
					} 
				}, 
				inputErrorMessage: '昵称不能为空'  
			}).then((val) => {
				const nickname = val.value
				if(nickname !== null && nickname !== ''){
					let params = {
						user_id: user_id,
						nickname: nickname
					}
					that.$http.post(api.editName, params).then(res => {
						if(res.err_code === 0){
							Toast({
								message: '修改成功！'
							})
							that.getUserInfo()
						}
					})
				}
			}, () => {  
				console.info('cancel')  
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