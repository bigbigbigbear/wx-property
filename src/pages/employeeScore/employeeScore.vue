<template>
	<div class="container" v-wechat-title="$route.meta.title">
		<div class="section margin-b20">
			<div class="section-hd">
				<h3><i class="font-orange">{{employeeInfo.employee_name}}</i>简介</h3>
			</div>
			<div class="section-bd">
				<div class="img-container">
					<img :src="employeeInfo.employee_img_url" :alt="employeeInfo.employee_name">
				</div>
				<div class="padding-b20">
					<p><span class="font-grey">职位介绍：</span>{{employeeInfo.employee_duty}}</p>
				</div>
				<div class="padding-b20">
					<p><span class="font-grey">联系方式：</span>{{employeeInfo.employee_phone}}</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-hd">
				<h3>给<i class="font-orange">{{employeeInfo.employee_name}}</i>评分</h3>
				<span class="font-orange">目前平均得分：{{employeeInfo.employee_score}}分</span>
			</div>
			<div class="section-bd">
				<div class="item">
					<star-score class="star" :prop-score="employeeInfo.employee_score" @getScore="getEmployeeScore"></star-score>
					<div class="star-info"><span>{{starInfo}}</span></div>
				</div>
				<div class="item">
					<textarea v-model="evaluate" placeholder="对他评价"></textarea>
				</div>
				<div class="item-btn">
					<span class="btn btn-large btn-radius" @click="submitScore">提交评分</span>
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
import StarScore from '@/components/StarScore'
export default {
  components: {
		StarScore
	},
  data() {
    return {
			employeeInfo: {
				employee_id: 1,
				employee_name: '蓝山行',
				employee_img_url: '蓝山行',
				employee_position: '工业园区企业管理服务部经理',
				employee_duty: '负责开发区统计、管委会和公司统计、开发区安全管理及入区企业服务；配合行政管理部门做好技改申报、科技申报、工商年检等专项管理与服务工作',
				employee_phone: '13411251478',
				employee_score: 8.5,
			},
			employeeScore: '',
			evaluate: ''
    };
  },
  computed: {
    starInfo(){
			let rate = Math.floor(this.employeeScore / 2)
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
  created() {},
  mounted() {
		this.employeeScore = this.employeeInfo.employee_score
	},
  methods: {
		// 提交评分
		submitScore: function(){

		},
		// 获取评分
		getEmployeeScore: function(data){
			// console.log(data)
			this.employeeScore = data
		}
	}
};
</script>