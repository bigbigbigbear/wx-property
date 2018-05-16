<template>
	<div class="container">
    <div class="section">
      <div class="section-hd">
        <h3>我的报修</h3>
      </div>
      <div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
      <div class="section-bd section4-bd">
        <mt-loadmore class="mt-loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
          <div class="section4-item" v-for="(item, index) in repairList" :key="index" @click="goRepairDetail(item)">
            <h3 class="text-overflow">{{item.park_name}}</h3>
            <p class="font-grey text-overflow-2"><span>{{item.content}}</span></p>
            <div class="font-grey section-foot">
              <div>
                <img class="item-img__time" src="../../assets/images/icon-time.png" alt=""> {{item.created_at | formateTime}}
              </div>
              <div>
                <span class="foot-r">{{item.status | formateStatus}}</span>
              </div>
            </div>
          </div>
        </mt-loadmore>
      </div>
    </div>
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
.section {
  width: 100%;
  background-color: #fff;
}
.section-hd,
.section-bd {
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem 0.2667rem;
  position: relative;
}
.section-hd {
  border-bottom: 0.0067rem solid #ddd;
}
.section-bd {
	display: flex;
	flex-wrap: wrap;
  padding: 0 0.2667rem 0.2667rem;
}
.mt-loadmore{
  width: 100%;
}
.section4-item{
  width: 100%;
  padding: 0.2667rem 0;
  border-bottom: 0.0067rem solid #eee;
}
.section-foot{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.foot-r{
  padding: 0 0.1333rem;
  border-radius: 0.0533rem;
  background-color: #ccc;
  color: #fff;
}
.item-img__time {
  width: 0.2667rem;
  vertical-align: inherit;
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
      page: 1,
      pageSize: 10,
      pageCount: 2,
      totalCount: 1,
      repairList: [],
      allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
    };
  },
  created() {
    this.getRepairList()
  },
  mounted() {
    
  },
  methods: {
    //获取我的报修列表
    getRepairList: function(){
      let that = this
      let user_id = localStorage.getItem('user_id')
      let params = {
        user_id: user_id,
        page: this.page,
        pageSize: this.pageSize
      }
      this.$http.get(api.mineRepair,{params: params}).then(res => {
        that.pageCount = res._meta.pageCount
        that.totalCount = res._meta.totalCount
        that.repairList = that.repairList.concat(res.data)
      })
    },
    loadBottom() {
      let that = this
      setTimeout(() => {
        that.page += 1
        if(that.page > that.pageCount){
          that.allLoaded = true;// 若数据已全部获取完毕
        }
        that.getRepairList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
    },
    handleBottomChange: function(status){
      //console.log(status)
    },
    goRepairDetail: function(item){
      // 去往新闻详情页面
      this.$router.push({
        name: "repairDetail",
        params: {
          rid: item.repair_id
        }
      })
    }
  },
  filters: {
    formateTime: function (value) {
      return formateDate(value*1000, 'yyyy-MM-dd')
    },
    formateStatus: function (value) {
      value = parseInt(value)
      switch(value){
        case 0:
          return '已提交'
          break;
        case 2:
          return '处理完成'
          break;  
        default:
          return '处理中'
          break;    
      }
    }
  }
};
</script>