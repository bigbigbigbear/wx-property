<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<div class="section-hd__img">
					<img :src="parkInfo.image" :alt="parkInfo.name">
				</div>
			</div>
			<div class="section-hd__info">
				<h3>{{parkInfo.name}} <span class="font-orange">{{parkInfo.score}}分</span></h3>
				<h3 class="section-hd__add text-overflow">地址：<span v-if="parkInfo.address === ''">无</span><span v-else>{{parkInfo.address}}</span></h3>
				<h3 class="section-hd__tel text-overflow">电话：<span v-if="parkInfo.tel === ''">无</span><span v-else>{{parkInfo.tel}}</span></h3>
			</div>
			<div class="section1-bd">
				<div class="section-title">
					<h3><span>园区概况</span></h3>
				</div>
				<div class="section-content">
					<div v-html="parkInfo.content">
					</div>
					<div class="btn-content">
						<span class="btn" @click="goParkScore"><img src="../../assets/images/icon-park-1.png" alt="园区评分"> 园区评分</span>
						<span class="btn" @click="goEmployeeList"><img src="../../assets/images/icon-employee.png" alt="工作人员评分"> 工作人员评分</span>
					</div>
					<div>
						<span class="btn btn-black btn-large" @click="goFaultRepair"><img src="../../assets/images/icon-repair-1.png" alt="故障报修"> 故障报修</span>
					</div>
				</div>
			</div>
			<div class="section2-bd">
				<div class="section-title">
					<h3><span>公共设施</span></h3>
				</div>
				<div class="section-content">
					<div class="item" v-for="(item, index) in deviceList" :key="index">
						<span>{{item.name}}</span>
						<span class="btn btn-mini" @click="goDeviceBook(item)"><img src="../../assets/images/icon-book-1.png" alt="预约"> 预约</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.section{
	width: 100%;
	background-color: #fff;
}
.section-hd{
	width: 100%;
	height: 4.4rem;
	overflow: hidden;
}
.section-hd__info{
	box-sizing: border-box;
	padding: 0.2667rem;
}
.section-hd__info p{
	line-height: 1.6;
}
.icon{
	width: 0.24rem;
	vertical-align: middle;
}
.section1-bd, .section2-bd{
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.2667rem;
	background-color: #fff;
}
.section-title{
	width: 100%;
	height: 1.1733rem;
	line-height: 1.1733rem;
	border-bottom: 0.0067rem solid #ddd;
}
.section-title span{
	display: inline-block;
	color: #f6b345;
	border-bottom: 1px solid #f6b345;
}
.section-content{
	padding: 0.4rem 0;
	line-height: 1.8;
}
.section2-bd .section-content{
	padding: 0;
}
.btn-content{
	display: flex;
	justify-content: space-between;
}
.btn img{
	width: 0.3467rem;
	vertical-align: middle;
}
.btn-mini img{
  vertical-align: unset;
}
.item{
	width: 100%;
	line-height: 1.1733rem;
	box-sizing: border-box;
	position: relative;
	border-bottom: .5px solid #eee;
}
.item .btn-mini{
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	margin-top: 0;
}
</style>
<script type="text/babel">
import api from '../../server/api'
export default {
	components: {
		
	},
	data() {
		return {
			parkInfo: {},
			deviceList: []
		}
	},
	created() {
		this.getParkInfo()
		this.getDeviceList()
	},
	mounted() {
    
	},
	methods: {
		//获取园区详情
		getParkInfo: function(){
			let that = this
			let pid = this.$route.params.pid
      let params = {
        park_id: pid
      }
      this.$http.get(api.parkDetail,{params: params}).then(res => {
        that.parkInfo = res.data
      })
		},
		//获取设施列表
		getDeviceList: function(){
			let that = this
			let pid = this.$route.params.pid
      let params = {
        park_id: pid
      }
      this.$http.get(api.deviceList,{params: params}).then(res => {
        that.deviceList = res.data
      })
		},
		//园区评分页面
		goParkScore: function(){
			let pid = this.$route.params.pid
			this.$router.push({
				name: 'parkScore',
				params: {
					pid: pid
				}
			})
		},
		//工作人员列表页面
		goEmployeeList: function(){
			let pid = this.$route.params.pid
			this.$router.push({
				name: 'employeeList',
				params: {
					pid: pid
				}
			})
		},
		//设备报修页面
		goFaultRepair: function(){
			let pid = this.$route.params.pid
			this.$router.push({
				name: 'faultRepair',
				params: {
					pid: pid
				}
			})
		},
		//设备预约页面
		goDeviceBook: function(item){
			let pid = this.$route.params.pid
			this.$router.push({
				name: 'deviceBook',
				params: {
					pid: pid,
					did: item.area_id
				}
			})
		}
	}
}
</script>