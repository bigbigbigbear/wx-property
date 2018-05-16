<template>
	<div class="container">
		<div class="section">
			<div class="section-hd text-overflow bbottom">
				<h3>关于我们</h3>
			</div>
			<div class="section-hd" v-html="companyInfo"></div>
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
	padding: 0.2667rem;
}
</style>
<script type="text/babel">
import api from '../../server/api'
export default {
	components: {
		
	},
	data() {
		return {
			companyInfo: {}
		}
	},
	created() {
		this.getCompanyInfo()
	},
	mounted() {
    
	},
	methods: {
		//获取公司信息
    getCompanyInfo: function(){
			let that = this
      let params = {}
      this.$http.get(api.about,{params: params}).then(res => {
        that.companyInfo = res.data
      })
    }
	}
}
</script>