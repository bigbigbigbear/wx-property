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
				<div class="no-data" v-if="billInfo == null">-- 暂无数据 --</div>
        <div class="section" v-else>
					<div class="section-content">
						<p>账单日期：{{billInfo.date_area}}</p>
						<p>租金金额：<span class="font-orange">{{billInfo.amount}}元</span></p>
					</div>
					<div class="section-btn">
						<span class="btn btn-large" @click="checkBill(billInfo.bill_id)">查看账单</span>
					</div>
					<div class="section-tip">
						<p>{{billInfo.tip}}</p>
					</div>
				</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
				<div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
				<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" ref="loadmore">
					<div class="item" v-for="(item, index) in billList" :key="index">
						<div><span>{{item.title}}</span><br><span class="font-orange">租金：{{item.amount}}元</span></div>
						<div><span class="btn btn-medium" @click="checkBill(item.bill_id)">查看账单</span></div>
					</div>
				</mt-loadmore>
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
import api from '../../server/api'
import { formateDate } from '../../utils/utils'
export default {
	components: {
		
	},
	data() {
		return {
			selected: '1',
			billInfo: null,
			billList: [],
			page: 1,
      pageSize: 8,
			pageCount: 2,
			totalCount: 1,
			allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
		}
	},
	created() {
		this.getCurrentbill()
		this.getBillList()
	},
	mounted() {
    
	},
	methods: {
		getCurrentbill: function(){
			let that = this
			let user_id = localStorage.getItem('user_id')
			let params = {
				user_id: user_id
			}
			this.$http.get(api.currentBill,{params: params}).then(res => {
				if(res.data.length > 0){
					that.billInfo = res.data[0]
				}else {
					that.billInfo = null
				}
      })
		},
		//获取账单列表
    getBillList: function(){
			let that = this
			let user_id = localStorage.getItem('user_id')
      let params = {
        page: this.page,
				pageSize: this.pageSize,
				user_id: user_id
      }
      this.$http.get(api.mineBill,{params: params}).then(res => {
        that.pageCount = res._meta.pageCount
        that.totalCount = res._meta.totalCount
        that.billList = that.billList.concat(res.data)
      })
		},
		loadBottom() {
      let that = this
      setTimeout(() => {
        that.page += 1
        if(that.page > that.pageCount){
          that.allLoaded = true;// 若数据已全部获取完毕
				}
				that.getBillList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
		},
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