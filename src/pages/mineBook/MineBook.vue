<template>
	<div class="container">
    <div class="section">
      <div class="section-hd">
        <h3>预约列表</h3>
      </div>
      <div class="no-data" v-if="totalCount == 0">-- 暂无数据 --</div>
      <div class="section-bd section4-bd">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottom-pull-text="bottomPullText" :bottom-drop-text="bottomDropText" :bottom-loading-text="bottomLoadingText" :auto-fill="false" @bottom-status-change="handleBottomChange" ref="loadmore">
          <div class="section4-item" v-for="(item, index) in bookList" :key="index" @click="goBookDetail(item)">
            <h3 class="text-overflow">{{item.park_name}} -- {{item.area_name}}</h3>
            <p class="font-grey text-overflow-2"><span>预约人：{{item.name}}</span></p>
            <p class="font-grey text-overflow-2"><span>预约人数：{{item.people_number}}</span></p>
            <p class="font-grey text-overflow-2"><span>联系方式：{{item.contact}}</span></p>
            <p class="font-grey text-overflow-2"><span>预约时间：{{item.date}}</span></p>
            <p class="font-grey text-overflow-2"><span>预约用途：{{item.purpose}}</span></p>
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
	display: flex;
	flex-wrap: wrap;
  padding: 0 0.2667rem 0.2667rem;
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
      pageSize: 5,
      pageCount: 2,
      totalCount: 1,
      bookList: [],
      allLoaded: false,
      bottomPullText: '上拉加载更多...',
      bottomDropText: '释放更新数据...',
      bottomLoadingText: '正在努力加载...'
    };
  },
  created() {
    this.getBookList()
  },
  mounted() {
    
  },
  methods: {
    //获取新闻列表
    getBookList: function(){
      let that = this
      let user_id = localStorage.getItem('user_id')
      let params = {
        user_id: user_id,
        page: this.page,
        pageSize: this.pageSize
      }
      this.$http.get(api.mineBook,{params: params}).then(res => {
        that.pageCount = res._meta.pageCount
        that.totalCount = res._meta.totalCount
        that.bookList = that.bookList.concat(res.data)
      })
    },
    loadBottom() {
      let that = this
      setTimeout(() => {
        that.page += 1
        if(that.page > that.pageCount){
          that.allLoaded = true;// 若数据已全部获取完毕
        }
        that.getBookList()
        that.$refs.loadmore.onBottomLoaded();
      }, 50)
    },
    handleBottomChange: function(status){
      //console.log(status)
    },
    goBookDetail: function(item){
      // 去往预约详情页面
      // this.$router.push({
      //   name: "bookDetail",
      //   params: {
      //     nid: item.book_id
      //   }
      // })
    }
  },
  filters: {
    formateTime: function (value) {
      return formateDate(value*1000, 'yyyy-MM-dd')
    }
  }
};
</script>