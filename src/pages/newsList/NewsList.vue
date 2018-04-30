<template>
	<div class="container" v-wechat-title="$route.meta.title">
    <div class="section">
      <div class="section-hd">
        <h3>新闻列表</h3>
      </div>
      <div class="section-bd section4-bd">
        <div class="section4-item" v-for="(item, index) in newsList" :key="index" @click="goNewsDetail(item)">
          <h3 class="text-overflow">{{item.news_title}}</h3>
          <p class="font-grey text-overflow-2"><span>{{item.news_desc}}</span></p>
          <p><img class="item-img__time" src="../../assets/images/icon-time.png" alt="查看详情"> {{item.news_time}}</p>
        </div>
      </div>
    </div>
    <div class="divider"></div>
	</div>
</template>
<style scoped>
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
export default {
  components: {
  },
  data() {
    return {
      newsList: [
        {
          news_id: 1,
          news_title: "下一个前海？深圳再迎国家级重磅规划",
          news_desc: "3月15日，记者从深圳市规划和国土资源委员会（市海洋局）获悉，深圳市海洋新城（大空港半岛区）将面向全球招商引资，欢迎海内外人士投资",
          news_time: "2018-02-14"
        },
        {
          news_id: 2,
          news_title: "下一个前海？深圳再迎国家级重磅规划",
          news_desc: "3月15日，记者从深圳市规划和国土资源委员会（市海洋局）获悉，深圳市海洋新城（大空港半岛区）将面向全球招商引资，欢迎海内外人士投资",
          news_time: "2018-02-14"
        },
        {
          news_id: 3,
          news_title: "下一个前海？深圳再迎国家级重磅规划",
          news_desc: "3月15日，记者从深圳市规划和国土资源委员会（市海洋局）获悉，深圳市海洋新城（大空港半岛区）将面向全球招商引资，欢迎海内外人士投资",
          news_time: "2018-02-14"
        },
        {
          news_id: 4,
          news_title: "下一个前海？深圳再迎国家级重磅规划",
          news_desc: "3月15日，记者从深圳市规划和国土资源委员会（市海洋局）获悉，深圳市海洋新城（大空港半岛区）将面向全球招商引资，欢迎海内外人士投资",
          news_time: "2018-02-14"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    goNewsDetail: function(item){
      // 去往招租详情页面
      this.$router.push({
        name: "newsDetail",
        params: {
          nid: item.news_id
        }
      })
    }
  }
};
</script>