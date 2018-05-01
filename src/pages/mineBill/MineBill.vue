<template>
	<div class="container">
		<div class="nav">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">当前账单</mt-tab-item>
				<mt-tab-item id="2">历史账单</mt-tab-item>
			</mt-navbar>
		</div>
		<mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="section">
					<div class="section-content">
						<p>账单日期：{{billInfo.start_date}}至{{billInfo.end_date}}</p>
						<p>租金金额：<span class="font-orange">{{billInfo.rent_price}}元</span></p>
					</div>
					<div class="section-btn">
						<span class="btn btn-large" @click="checkBill(billInfo.id)">查看账单</span>
					</div>
					<div class="section-tip">
						<p>温馨提醒：请于{{billInfo.overdue_date}}将以上总费用汇到我们公司指定账户（户名：深圳市七星级科技有限公司；开户行：中国农业银行；账号：6228 1254 1245）,延迟交款将按合同约定收取滞纳金。</p>
					</div>
				</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="item" v-for="(item, index) in list2" :key="index">
					<div><span>{{item.time}}账单</span><br><span class="font-orange">租金：{{item.rent_price}}元</span></div>
					<div><span class="btn btn-medium" @click="checkBill(item.id)">查看账单</span></div>
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
.section{
	width: 100%;
	box-sizing: border-box;
	padding: 0.2667rem;
}
.section-content{
	line-height: 2.4;
}
.section-tip{
	width: 100%;
	box-sizing: border-box;
	padding: 0.2667rem;
	margin-top: 0.4rem;
	line-height: 1.8;
	background-color: #f5f5f5;
	color: #666;
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
			billInfo: {
				id: 1,
				start_date: '2018-08-01',
				end_date: '2018-09-01',
				rent_price: 10000,
				overdue_date: '2018-12-01',
			},
			list2: [
				{
					id: 1,
					rent_price: 10000,
					time: '2018-04'
				},
				{
					id: 2,
					rent_price: 10000,
					time: '2018-04'
				},
				{
					id: 3,
					rent_price: 10000,
					time: '2018-04'
				},
				{
					id: 4,
					rent_price: 10000,
					time: '2018-04'
				}
			]
		}
	},
	created() {

	},
	mounted() {
    
	},
	methods: {
		checkBill: function(id){
			this.$router.push({
				name: 'billDetail',
				params: {
					bid: id
				}
			})
		}
	}
}
</script>