<template>
	<div class="container">
    <div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
    <div class="section" v-else>
      <div class="section-bd">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
          <div class="section-item" v-for="(item, index) in parkList" :key="index" @click="goParkDetail(item)">
            <div class="item-img">
              <img src="../../assets/images/no-park.png" v-if="item.image === ''">
              <img :src="item.image" :alt="item.name" v-else>
            </div>
            <div class="item-title text-overflow">
              <h3>{{item.name}}</h3>
              <img class="item-title__search" src="../../assets/images/icon-search.png" :alt="item.name">
            </div>
          </div>
        </mt-loadmore>
      </div>
    </div>
    <div class="divider"></div>
    <foot-tab :selected="selected"></foot-tab>
	</div>
</template>
<style scoped>
.section {
  width: 100%;
  background-color: #fff;
}
.section-bd {
	width: 100%;
  box-sizing: border-box;
  padding: 0 0.2667rem 0.2667rem;
}
.section-item {
  display: inline-block;
  width: calc((100% - 0.2667rem)/2);
  box-sizing: border-box;
  padding-top: 0.2667rem;
}
.section-item:nth-of-type(2n + 1) {
  margin-right: 0.2667rem;
}
.item-img {
  width: 100%;
  height: 3rem;
  overflow: hidden;
}
.item-title {
  padding: 0.2rem;
	position: relative;
	background-color: #f2f2f2;
}
.item-title__search {
  width: 0.3333rem;
  position: absolute;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
<script type="text/babel">
import FootTab from '@/components/FootTab'
import api from '../../server/api'
export default {
  components: {
    FootTab
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      pageCount: 2,
      totalCount: 0,
      parkList: [],
      selected: 'park',
      allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
    };
  },
  created() {},
  mounted() {
    this.getParkList()
  },
  methods: {
    // 获取园区列表
    getParkList: function(){
      let that = this
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      this.$http.get(api.parkList,{params: params}).then(res => {
        that.totalCount = res._meta.totalCount
        that.parkList = that.parkList.concat(res.data)
      })
    },
    //上拉加载更多
    loadBottom() {
      let that = this
      setTimeout(() => {
        that.page += 1
        if(that.page > that.pageCount){
          that.allLoaded = true;// 若数据已全部获取完毕
          return false
        }
        that.getParkList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
    },
    handleBottomChange: function(status){
      //console.log(status)
    },
    goParkDetail: function(item) {
      // 去往园区详情页面
      this.$router.push({
        name: "parkDetail",
        params: {
          pid: item.park_id
        }
      })
    }
  }
};
</script>