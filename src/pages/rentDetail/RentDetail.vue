<template>
	<div class="container">
		<div class="section margin-b20">
			<div class="section-hd">
				<h3>{{rentInfo.title}}</h3>
			</div>
			<div class="section-bd">
				<p><span class="font-grey">所在区域：</span>{{rentInfo.section}}</p>
				<p><span class="font-grey">出租面积：</span><span class="font-orange">{{rentInfo.area}}</span>平米</p>
				<p><span class="font-grey">所在楼层：</span>{{rentInfo.floor}}</p>
				<p><span class="font-grey">新旧程度：</span>{{rentInfo.new_rate}}</p>
				<p><span class="font-grey">厂房租金：</span><span class="font-orange">{{rentInfo.price}}</span>元/平米</p>
				<p><span class="btn btn-large"><img src="../../assets/images/icon-tel-1.png" alt="招租热线"> 招租热线： {{rentInfo.tel}}</span></p>
			</div>
		</div>
		<div class="section">
			<div class="section1-hd">
				<div class="section-title">
					<h3><span>园区概况</span></h3>
				</div>
			</div>
			<div class="section1-bd">
				<div class="section-content" v-html="rentInfo.desc"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.section{
	width: 100%;
	background-color: #fff;
}
.section-hd, .section-bd{
	width: 100%;
	box-sizing: border-box;
	padding: 0.4rem 0.2667rem;
}
.section-hd{
	border-bottom: 0.0067rem solid #ddd;
}
.section-bd p{
	line-height: 2;
}
.btn img{
	width: 0.4rem;
	vertical-align: middle;
}
.section1-hd{
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.2667rem;
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

</style>
<script type="text/babel">

export default {
	components: {
		
	},
	data() {
		return {
			rentInfo: {
				title: '福永楼上整层3800平米厂房出租',
				section: '广东省 深圳 宝安 福永',
				area: '3800',
				floor: '二层以上',
				new_rate: '九成新',
				price: '22',
				tel:'40088000001',
				desc: ''
			}
		}
	},
	created() {

	},
	mounted() {
    
	},
	methods: {
		
	}
}
</script>