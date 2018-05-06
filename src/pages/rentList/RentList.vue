<template>
	<div class="container">
    <div class="section">
      <div class="section-hd">
        <h3>招租列表</h3>
      </div>
      <div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
      <div class="section-bd section3-bd">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
          <div class="section3-item" v-for="(item, index) in rentList" :key="index">
            <div class="section3-item__l">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="section3-item__r">
              <h3 class="text-overflow">{{item.title}}</h3>
              <p class="font-grey"><span>地点：{{item.address}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积：{{item.area}}</span></p>
              <p class="font-grey"><span>租金：{{item.rent}}</span></p>
              <p><a href="javascript:;" class="font-orange" @click="goRentDetail(item)">查看详情 <img class="item-img__search" src="../../assets/images/icon-search-active.png" alt="查看详情"></a></p>
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
  width: 2.4rem;
  height: 2rem;
  overflow: hidden;
  margin-right: 0.2667rem;
}
.section3-item__r {
  flex: 1;
}
.item-img__search {
  width: 0.3333rem;
  vertical-align: middle;
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
      pageSize: 7,
      pageCount: 2,
      totalCount: 1,
      rentList: [],
      allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
    };
  },
  created() {
    this.getRentList()
  },
  mounted() {},
  methods: {
    //获取招租列表
    getRentList: function(){
      let that = this
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      this.$http.get(api.rentList,{params: params}).then(res => {
        that.pageCount = res._meta.pageCount
        that.totalCount = res._meta.totalCount
        that.rentList = that.rentList.concat(res.data)
      })
    },
    loadBottom() {
      let that = this
      setTimeout(() => {
        that.page += 1
        if(that.page > that.pageCount){
          that.allLoaded = true;// 若数据已全部获取完毕
        }
        that.getRentList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
    },
    handleBottomChange: function(status){
      //console.log(status)
    },
    goRentDetail: function(item){
      // 去往招租详情页面
      this.$router.push({
        name: "rentDetail",
        params: {
          rid: item.zu_id
        }
      })
    }
  }
};
</script>