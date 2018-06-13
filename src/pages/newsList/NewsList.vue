<template>
	<div class="container">
    <div class="section">
      <div class="section-hd">
        <h3>新闻列表</h3>
      </div>
      <div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
      <div class="section-bd section4-bd">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
          <div class="section4-item" v-for="(item, index) in newsList" :key="index" @click="goNewsDetail(item)">
            <h3 class="text-overflow">{{item.title}}</h3>
            <p class="font-grey text-overflow-2"><span>{{item.intro}}</span></p>
            <p class="font-grey"><img class="item-img__time" src="../../assets/images/icon-time.png" alt="查看详情"> {{item.created_at | formateTime}}</p>
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
.section4-item{
  width: 100%;
  padding: 0.2667rem 0;
  border-bottom: 0.0067rem solid #eee;
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
      pageSize: 8,
      pageCount: 2,
      totalCount: 1,
      newsList: [],
      allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
    };
  },
  created() {
    this.getNewsList()
  },
  mounted() {
    
  },
  methods: {
    //获取新闻列表
    getNewsList: function(){
      let that = this
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      this.$http.get(api.newsList,{params: params}).then(res => {
        that.pageCount = res._meta.pageCount
        that.totalCount = res._meta.totalCount
        that.newsList = that.newsList.concat(res.data)
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
        that.getNewsList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
    },
    handleBottomChange: function(status){
      //console.log(status)
    },
    goNewsDetail: function(item){
      // 去往新闻详情页面
      this.$router.push({
        name: "newsDetail",
        params: {
          nid: item.news_id
        }
      })
    }
  },
  filters: {
    formateTime: function (value) {
      return formateDate(value*1000, 'yyyy-MM-dd')
    }
  }
};
</script>