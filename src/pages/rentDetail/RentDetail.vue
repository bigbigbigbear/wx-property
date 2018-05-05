<template>
	<div class="container">
		<div class="section margin-b20">
			<div class="section-hd">
				<h3>{{rentInfo.title}}</h3>
			</div>
			<div class="section-bd">
				<p><span class="font-grey">所在区域：</span>{{rentInfo.address}}</p>
				<p><span class="font-grey">出租面积：</span><span class="font-orange">{{rentInfo.area}}</span></p>
				<p><span class="font-grey">所在楼层：</span>{{rentInfo.floor}}</p>
				<p><span class="font-grey">新旧程度：</span>{{rentInfo.quality}}</p>
				<p><span class="font-grey">厂房租金：</span><span class="font-orange">{{rentInfo.rent}}</span></p>
				<p><span class="btn btn-large" @click="phoneCall(rentInfo.zu_tel)"><img src="../../assets/images/icon-tel-1.png" alt="招租热线"> 招租热线： {{rentInfo.zu_tel}}</span></p>
			</div>
		</div>
		<div class="section">
			<div class="section1-hd">
				<div class="section-title">
					<h3><span>园区概况</span></h3>
				</div>
			</div>
			<div class="section1-bd">
				<div class="section-content" v-html="rentInfo.content"></div>
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
.section1-hd, .section1-bd{
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
import api from '../../server/api'
export default {
	components: {
		
	},
	data() {
		return {
			rentInfo: {}
		}
	},
	created() {
		this.getRentInfo()
	},
	mounted() {
    
	},
	methods: {
		//获取招租详情
		getRentInfo: function(){
			let that = this
			let rid = this.$route.params.rid
      let params = {
        zu_id: rid
      }
      this.$http.get(api.rentDetail,{params: params}).then(res => {
				that.rentInfo = res.data
      })
		},
		//唤起电话
		phoneCall: function(tel){
			window.location.href = 'tel://' + tel
		}
	}
}
</script>