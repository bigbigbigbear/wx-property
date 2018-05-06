<template>
	<div class="container">
		<div class="section margin-b20">
			<div class="section-hd">
				<h3><i class="font-orange">{{employeeInfo.name}}</i>简介</h3>
			</div>
			<div class="section-bd">
				<div class="img-container">
					<img :src="employeeInfo.image" :alt="employeeInfo.name">
				</div>
				<div class="padding-b20">
					<p><span class="font-grey">职位介绍：</span>{{employeeInfo.intro}}</p>
				</div>
				<div class="padding-b20">
					<p><span class="font-grey">联系方式：</span>{{employeeInfo.contact}}</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-hd">
				<h3>给<i class="font-orange">{{employeeInfo.name}}</i>评分</h3>
				<span class="font-orange">目前平均得分：{{employeeInfo.score}}分</span>
			</div>
			<div class="section-bd">
				<div class="item">
					<star-score class="star" :prop-score="employeeInfo.score" @getScore="getEmployeeScore"></star-score>
					<div class="star-info"><span>{{starInfo}}</span></div>
				</div>
				<div class="item">
					<textarea v-model="content" placeholder="对他评价"></textarea>
				</div>
				<div class="item-btn">
					<span :class="['btn','btn-large','btn-radius', scored != 0 ? 'btn-diseabled' : '']" @click="submitScore">提交评分</span>
				</div>
			</div>
		</div>
		<div class="divider"></div>
	</div>
</template>
<style scoped>
.section{
	width: 100%;
	background-color: #fff;
}
.section-hd {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0.4rem 0.2667rem;
  border-bottom: 0.0067rem solid #ddd;
}
.section-hd span {
  position: absolute;
  right: 0.2667rem;
  top: 50%;
  transform: translateY(-50%);
}
.section-bd {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.2667rem;
}
.img-container{
	width: 100%;
	height: 8.4rem;
	box-sizing: border-box;
	padding: 0.5333rem 1.3333rem;
	overflow: hidden;
}
.item{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 1.52rem;
	border-bottom: 0.0067rem solid #eee;
}
.item-btn{
	margin-top: 0.5333rem;
}
.star-info span{
	display: inline-block;
	position: relative;
	padding: 0.08rem 0.1333rem;
	border-radius: 0.08rem;
	background-color: #f4f4f4;
	color: #8c8c8c;
}
.star-info span::before{
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	left: -0.1333rem;
	top: 50%;
	transform: translateY(-50%);
	border-top: 0.1333rem solid transparent;
	border-right: 0.1333rem solid #f4f4f4;
	border-bottom: 0.1333rem solid transparent;
}
.item textarea{
	width: 100%;
	height: 1.6rem;
	box-sizing: border-box;
	padding: 0.1333rem;
	border: 0.0067rem solid #eee;
}
</style>
<script type="text/babel">
import { Toast } from 'mint-ui';
import StarScore from '@/components/StarScore'
import api from '../../server/api'
export default {
  components: {
		StarScore
	},
  data() {
    return {
			employeeInfo: {},
			scored: 0,
			newScore: 0,
			content: ''
    };
  },
  computed: {
    starInfo(){
			let rate = Math.floor(this.newScore / 2)
			switch(rate){
				case 2:
					return '及格'
					break;
				case 3:
					return '满意'
					break;
				case 4:
					return '很满意'
					break;
				case 5:
					return '非常满意'
					break;
				default:
					return '不满意'
					break;		
			}
		}
  },
  created() {
		this.getEmployeeInfo()
	},
  mounted() {
		
	},
  methods: {
		//获取员工详情
		getEmployeeInfo: function(){
			let that = this
			let pid = this.$route.params.pid
			let eid = this.$route.params.eid
			let user_id = localStorage.getItem('user_id')
      let params = {
				park_id: pid,
				employee_id: eid,
				user_id: user_id
      }
      this.$http.get(api.employeeDetail,{params: params}).then(res => {
				that.employeeInfo = res.data.detail
				that.newScore = res.data.detail.score
				that.scored = res.data.scored
      })
		},
		// 提交评分
		submitScore: function(){
			let that = this
			let pid = this.$route.params.pid
			let eid = this.$route.params.eid
			let user_id = localStorage.getItem('user_id')
      let params = {
				park_id: pid,
				employee_id: eid,
				user_id: user_id,
				score: this.newScore,
				content: this.content
			}
			if(this.scored != 0){
				Toast({
					message: '你已评过分了哦~'
				})
				this.content = ''
				return false
			}
      this.$http.post(api.employeeScore, params).then(res => {
				Toast({
					message: '评分成功！'
				})

				that.employeeInfo.score = res.data
				that.newScore = res.data
				that.content = ''

				setTimeout(() => {
					that.$router.push({
						name: 'employeeList',
						params: {
							pid: pid
						}
					})
				}, 1000)
      })
		},
		//获取评分
		getEmployeeScore: function(val){
			this.newScore = val
		}
	}
};
</script>