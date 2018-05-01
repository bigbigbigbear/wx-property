<template>
	<div class="container">
		<div class="nav">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">园区评分</mt-tab-item>
				<mt-tab-item id="2">工作人员评分</mt-tab-item>
			</mt-navbar>
		</div>
		<mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="item" v-for="(item, index) in list1" :key="index">
					<div>对<span class="font-orange">{{item.name}}</span>进行评分{{item.score}}分</div>
					<div><span class="font-grey">{{item.time}}</span></div>
				</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="item" v-for="(item, index) in list2" :key="index">
					<div>对<span class="font-orange">{{item.name}}</span>进行评分{{item.score}}分</div>
					<div><span class="font-grey">{{item.time}}</span></div>
				</div>
      </mt-tab-container-item>
    </mt-tab-container>
	</div>
</template>
<style scoped>
.container::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  z-index: -100;
}
.nav{
	width: 100%;
	margin-bottom: 0.09rem;
}
.item{
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0.4rem 0.2667rem;
	border-bottom: 0.0067rem solid #eee;
}
</style>
<script type="text/babel">

export default {
	components: {
		
	},
	data() {
		return {
			selected: '1',
			list1: [
				{
					id: 1,
					name: '深圳软件园',
					score: 8.5,
					time: '2018-04-05'
				},
				{
					id: 2,
					name: '深圳软件园',
					score: 8.5,
					time: '2018-04-05'
				},
				{
					id: 3,
					name: '深圳软件园',
					score: 8.5,
					time: '2018-04-05'
				},
				{
					id: 4,
					name: '深圳软件园',
					score: 8.5,
					time: '2018-04-05'
				}
			],
			list2: [
				{
					id: 1,
					name: '蓝山行',
					score: 8.5,
					time: '2018-04-05'
				},
				{
					id: 2,
					name: '蓝山行',
					score: 8.5,
					time: '2018-04-05'
				},
				{
					id: 3,
					name: '蓝山行',
					score: 8.5,
					time: '2018-04-05'
				},
				{
					id: 4,
					name: '蓝山行',
					score: 8.5,
					time: '2018-04-05'
				}
			]
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