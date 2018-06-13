<template>
	<div class="container">
    <div class="section">
      <div class="section-hd">
        <h3>工作人员列表</h3>
      </div>
      <div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
      <div class="section-bd section3-bd">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
          <div class="section3-item" v-for="(item, index) in employeeList" :key="index" @click="goEmployeeScore(item)">
            <div class="section3-item__l">
              <img src="../../assets/images/avatar-1.png" :alt="item.name" v-if="item.image === ''">
              <img :src="item.image" :alt="item.name" v-else>
              <div class="section3-item__name">{{item.name}}</div>
            </div>
            <div class="section3-item__r">
              <h4 class="text-overflow">职位：{{item.job}}</h4>
              <p class="font-grey"><span>职责：{{item.intro}}</span></p>
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
  height: calc(100vh-1.36rem);
  padding: 0 0.2667rem 0.2667rem;
  overflow: scroll;
}
.section-bd__l {
  width: 2.6667rem;
  margin-right: 0.2667rem;
}
.section-bd__r {
  flex: 1;
}
.section3-item{
  width: 100%;
  display: flex;
  padding: 0.2667rem 0;
  border-bottom: 0.0067rem solid #eee;
}
.section3-item__l {
  width: 2rem;
	height: 2.6667rem;
	position: relative;
  overflow: hidden;
  margin-right: 0.2667rem;
}
.section3-item__name{
	width: 100%;
	height: 0.5333rem;
	line-height: 0.5333rem;
	background-color: rgba(0, 0, 0, .5);
	position: absolute;
	bottom: 0;
	color: #fff;
	text-align: center;
}
.section3-item__r {
  flex: 1;
}
.section3-item__r h4{
	line-height: 2.4;
}
</style>
<script type="text/babel">
import api from '../../server/api'
export default {
  components: {
  },
  data() {
    return {
      page: 1,
      pageSize: 5,
      pageCount: 2,
      totalCount: 0,
      employeeList: [],
      allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
    };
  },
  created() {
    this.getEmployeeList()
  },
  mounted() {},
  methods: {
    //获取员工列表
    getEmployeeList: function(){
      let that = this
      let pid = this.$route.params.pid
      let params = {
        park_id: pid,
        page: this.page,
        pageSize: this.pageSize
      }
      this.$http.get(api.employeeList,{params: params}).then(res => {
        that.pageCount = res._meta.pageCount
        that.totalCount = res._meta.totalCount
        that.employeeList = that.employeeList.concat(res.data)
      })
    },
    loadBottom() {
      let that = this
      setTimeout(() => {
        that.page += 1
        if(that.page > that.pageCount){
          that.allLoaded = true;// 若数据已全部获取完毕
          return false;
        }
        that.getEmployeeList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
    },
    handleBottomChange: function(status){
      //console.log(status)
    },
    goEmployeeScore: function(item){
			let pid = this.$route.params.pid
      // 工作人员评分页面
      this.$router.push({
        name: "employeeScore",
        params: {
					pid: pid,
          eid: item.employee_id
        }
      })
    }
  }
};
</script>