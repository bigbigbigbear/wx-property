<template>
	<div class="container" v-wechat-title="$route.meta.title">
		<div class="section">
			<div class="section-hd">
				<div class="section-hd__img">
					<img :src="parkInfo.img_url" :alt="parkInfo.name">
				</div>
				<div class="section-hd__info">
					<h3>{{parkInfo.name}} <span class="font-orange">{{parkInfo.score}}分</span></h3>
					<p class="section-hd__add text-overflow"><img class="icon" src="../../assets/images/icon-location.png" alt="地址"> 地址：{{parkInfo.address}}</p>
					<p class="section-hd__tel text-overflow"><img class="icon" src="../../assets/images/icon-tel.png" alt="电话"> 电话：{{parkInfo.tel}}</p>
				</div>
			</div>
			<div class="section1-bd">
				<div class="section-title">
					<h3><span>园区概况</span></h3>
				</div>
				<div class="section-content">
					<div>
						<p>{{parkInfo.desc}}</p>
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
						<span>{{item.device_name}}</span>
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
	position: relative;
}
.section-hd__info{
	width: 6rem;
	height: 2.1333rem;
	box-sizing: border-box;
	padding: 0.2667rem;
	background-color: rgba(0, 0, 0, .5);
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	color: #fff;
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

export default {
	components: {
		
	},
	data() {
		return {
			parkInfo: {
				name: '南山高新科技园',
				img_url: '',
				score: '8.5',
				address: '深圳龙华新区人民南路水榭春天',
				tel: '138-2356-9423',
				desc: 'CC展览展示文化创意园由在国内展览展示行业经营多年的文宝文化产业集团倾力打造，依托其超前的国际前瞻商业思维和丰厚的全链条行业资源，立足平湖，服务龙岗，荣耀深圳，为文化产业发展探索全新的个性化成长路径，致力于在展览展示与文化创意跨界融合领域树立行业新标杆。符合园区以及政府扶持条件的入驻企业，届时可享受政府的培训补助、人才补贴扶持；入驻园区企业合同满一年后，办公用房可以享受龙岗区的租赁补贴，按每平方米每月15元、面积最大不超过500平方米的支持标准，采用事后报销制；创意设计融合新技术的展示器材研发资金资助。'
			},
			deviceList: [
				{
					device_id: 1,
					device_name: '100人大会议室'
				},
				{
					device_id: 2,
					device_name: '100人大会议室'
				},
				{
					device_id: 3,
					device_name: '100人大会议室'
				}
			]
		}
	},
	created() {

	},
	mounted() {
    
	},
	methods: {
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
					did: item.device_id
				}
			})
		}
	}
}
</script>