<template>
	<div class="container">
		<div class="section margin-b20">
			<div class="section-hd text-overflow bbottom">
				<h3>报修详情</h3>
			</div>
			<div class="section-hd">
				<div class="item">{{repairInfo.content}}</div>
				<div class="item" v-for="(item, index) in repairInfo.images" :key="index">
					<img :src="item" alt="">
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
.section-hd, .section-bd, .section-page{
	width: 100%;
	box-sizing: border-box;
	padding: 0.2667rem;
}
.item{
	width: 100%;
	padding: 0.2667rem 0;
}
</style>
<script type="text/babel">
import api from '../../server/api'
export default {
	components: {
		
	},
	data() {
		return {
			repairInfo: {}
		}
	},
	created() {
		this.getRepairInfo()
	},
	mounted() {
    
	},
	methods: {
		//获取报修详情
		getRepairInfo: function(){
			let that = this
			let rid = this.$route.params.rid
      let params = {
        repair_id: rid
      }
      this.$http.get(api.repairDetail,{params: params}).then(res => {
				that.repairInfo = res.data
      })
		}
	}
}
</script>