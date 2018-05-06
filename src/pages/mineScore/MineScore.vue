<template>
	<div class="container">
		<div class="nav">
			<mt-navbar class="page-part" v-model="selected" fixed>
				<mt-tab-item id="1">园区评分</mt-tab-item>
				<mt-tab-item id="2">工作人员评分</mt-tab-item>
			</mt-navbar>
		</div>
		<mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
				<div class="no-data" v-if="totalCount1 == 0">-- 暂无数据 --</div>
				<mt-loadmore :bottom-method="loadBottom1" :bottom-all-loaded="allLoaded1" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" ref="loadmore1">
					<div class="item" v-for="(item, index) in list1" :key="index">
						<div>{{item.list_content}}<span class="font-orange">{{item.score}}分</span></div>
						<div><span class="font-grey">{{item.created_at}}</span></div>
					</div>
				</mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
				<div class="no-data" v-if="totalCount2 == 0">-- 暂无数据 --</div>
				<mt-loadmore :bottom-method="loadBottom2" :bottom-all-loaded="allLoaded2" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" ref="loadmore2">
					<div class="item" v-for="(item, index) in list2" :key="index">
						<div>{{item.list_content}}<span class="font-orange">{{item.score}}分</span></div>
						<div><span class="font-grey">{{item.created_at}}</span></div>
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
export default {
	components: {
		
	},
	data() {
		return {
			selected: '1',
			page1: 1,
			page2: 1,
      pageSize: 14,
			pageCount1: 2,
			pageCount2: 2,
			totalCount1: 1,
			totalCount2: 1,
			list1: [],
			list2: [],
			allLoaded1: false,
			allLoaded2: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
		}
	},
	watch: {
		selected: function (val, oldVal) {
			
		}
	},
	created() {
		this.getParkScore()
		this.getEmployeeScore()
	},
	mounted() {
    
	},
	methods: {
		//获取园区评分列表
    getParkScore: function(){
			let that = this
			let user_id = localStorage.getItem('user_id')
      let params = {
        page: this.page1,
				pageSize: this.pageSize,
				user_id: user_id
      }
      this.$http.get(api.parkScoreList,{params: params}).then(res => {
        that.pageCount1 = res._meta.pageCount
        that.totalCount1 = res._meta.totalCount
        that.list1 = that.list1.concat(res.data)
      })
		},
		//获取工作人员评分列表
    getEmployeeScore: function(){
			let that = this
			let user_id = localStorage.getItem('user_id')
      let params = {
        page: this.page2,
				pageSize: this.pageSize,
				user_id: user_id
      }
      this.$http.get(api.employeeScoreList,{params: params}).then(res => {
        that.pageCount2 = res._meta.pageCount
        that.totalCount2 = res._meta.totalCount
        that.list2 = that.list2.concat(res.data)
      })
    },
    loadBottom1() {
      let that = this
      setTimeout(() => {
        that.page1 += 1
        if(that.page1 > that.pageCount1){
          that.allLoaded1 = true;// 若数据已全部获取完毕
				}

				that.getParkScore()
        that.$refs.loadmore1.onBottomLoaded();
      }, 50)
		},
		loadBottom2() {
      let that = this
      setTimeout(() => {
        that.page2 += 1
        if(that.page2 > that.pageCount2){
          that.allLoaded2 = true;// 若数据已全部获取完毕
				}

				that.getEmployeeScore()
        that.$refs.loadmore2.onBottomLoaded();
      }, 50)
    }
	}
}
</script>