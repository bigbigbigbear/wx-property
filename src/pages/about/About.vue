<template>
	<div class="container">
		<div class="section">
			<div class="section-hd text-overflow bbottom">
				<h3>{{companyInfo.title}}</h3>
			</div>
			<div class="section-hd" v-html="companyInfo.info"></div>
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

export default {
	components: {
		
	},
	data() {
		return {
			companyInfo: {
				title: '下一个前海？深圳再迎国家级重磅规划',
				info: ''
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