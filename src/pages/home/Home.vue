<template>
	<div class="container">
		<div class="section">
      <div class="section-hd">
        <h3 class="font-orange">
          <img class="img-title" src="../../assets/images/icon-about.png" alt="关于我们"> 关于我们
        </h3>
        <span class="section-hd__link font-grey" @click="goAboutDetail">详细简介</span>
      </div>
      <div class="section-bd">
        <div class="section-bd__l">
          <img v-if="logo === ''" class="img-logo" src="../../assets/images/icon-logo.png" alt="logo">
          <img class="img-logo" :src="logo" alt="logo" v-else>
        </div>
        <div class="section-bd__r">{{about}}</div>
      </div>
    </div>
    <div class="section">
      <div class="section-hd">
        <h3 class="font-orange">
          <img class="img-title" src="../../assets/images/icon-recommend.png" alt="园区推荐"> 园区推荐
        </h3>
        <span class="section-hd__link font-grey" @click="goParkList">更多园区</span>
      </div>
      <div class="section-bd section2-bd">
        <div class="section2-item" v-for="(item, index) in parkList" :key="index" @click="goParkDetail(item)">
          <div class="item-img">
            <img src="../../assets/images/no-park.png" v-if="item.image === ''">
            <img :src="item.image" :alt="item.name" v-else>
          </div>
          <div class="item-title text-overflow">
            <h3>{{item.name}}</h3>
            <!-- <img class="item-title__search" src="../../assets/images/icon-search.png" :alt="item.name"> -->
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-hd">
        <h3 class="font-orange">
          <img class="img-title" src="../../assets/images/icon-rent.png" alt="招租信息"> 招租信息
        </h3>
        <span class="section-hd__link font-grey" @click="goRentList">更多招租</span>
      </div>
      <div class="section-bd section3-bd">
        <div class="section3-item" v-for="(item, index) in rentList" :key="index">
          <div class="section3-item__l">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="section3-item__r">
            <h3>{{item.title}}</h3>
            <p class="font-grey"><span>地点：{{item.address}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积：{{item.area}}</span></p>
            <p class="font-grey"><span>租金：{{item.rent}}</span></p>
            <p><a href="javascript:;" class="font-orange" @click="goRentDetail(item)">查看详情 <img class="item-img__search" src="../../assets/images/icon-search-active.png" alt="查看详情"></a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-hd">
        <h3 class="font-orange">
          <img class="img-title" src="../../assets/images/icon-news.png" alt="动态新闻"> 动态新闻
        </h3>
        <span class="section-hd__link font-grey" @click="goNewsList">更多新闻</span>
      </div>
      <div class="section-bd section4-bd">
        <div class="section4-item" v-for="(item, index) in newsList" :key="index" @click="goNewsDetail(item)">
          <h3 class="text-overflow">{{item.title}}</h3>
          <p class="font-grey text-overflow-2"><span>{{item.intro}}</span></p>
          <p class="font-grey"><img class="item-img__time" src="../../assets/images/icon-time.png" alt="查看详情"> {{item.created_at | formateTime}}</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-hd">
        <h3 class="font-orange">
          <img class="img-title" src="../../assets/images/icon-news.png" alt="联系我们"> 联系我们
        </h3>
      </div>
      <div class="section-bd section5-bd">
        <p>{{contact.name}}</p>
        <p @click="phoneCall(contact.tel)">电话：{{contact.tel}}</p>
        <p>邮箱：{{contact.email}}</p>
        <p>地址：{{contact.address}}</p>
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
  margin-bottom: 0.2667rem;
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
}
.img-title {
  width: 0.3733rem;
  vertical-align: baseline;
}
.section-hd__link {
  position: absolute;
  right: 0.2667rem;
  top: 50%;
  transform: translateY(-50%);
}
.section-bd__l {
  width: 2.6667rem;
  margin-right: 0.2667rem;
}
.section-bd__r {
  flex: 1;
}
.img-logo {
  width: 100%;
}
.section2-bd {
  flex-wrap: wrap;
  padding: 0.2667rem 0.2667rem 0;
}
.section2-item {
  width: 50%;
  box-sizing: border-box;
  padding-bottom: 0.2667rem;
}
.section2-item:nth-of-type(2n + 1) {
  padding-right: 0.2667rem;
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
.section3-bd, .section4-bd{
  flex-wrap: wrap;
  padding: 0 0.2667rem 0.2667rem;
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
.section4-item{
  width: 100%;
  padding: 0.2667rem 0;
  border-bottom: 0.0067rem solid #eee;
  line-height: 1.8;
}
.item-img__time {
  width: 0.2667rem;
  vertical-align: inherit;
}
.section5-bd{
  display: block;
  padding: 0.2667rem;
}
.section5-bd p{
  line-height: 2;
}
</style>
<script type="text/babel">
import FootTab from '@/components/FootTab'
import api from '../../server/api'
import { formateDate } from '../../utils/utils'
export default {
  components: {
    FootTab
  },
  data() {
    return {
      userInfo: {},
      selected: 'home',
      about: {},
      logo: '',
      parkPage: 1,
      parkSize: 4,
      parkTotal: 0,
      parkList: [],
      rentPage: 1,
      rentSize: 4,
      rentTotal: 0,
      rentList: [],
      newsPage: 1,
      newsSize: 4,
      newsTotal: 0,
      newsList: [],
      contact: {}
    };
  },
  created() {
    this.getUserInfo()
    this.getIndexInfo()
    this.getParkList()
    this.getRentList()
    this.getNewsList()
  },
  mounted() {

  },
  methods: {
    //获取我的信息
    getUserInfo: function(){
			let that = this
			let user_id = localStorage.getItem('user_id')
      let params = {
				user_id: user_id
			}
      this.$http.get(api.userInfo,{params: params}).then(res => {
        if(res.err_code === 401){
          this.$wechatAuth.authorize()
          return false
        }
        // 1是业主 0是普通用户
        localStorage.setItem('renter',res.data.renter)
        localStorage.setItem('park_id',res.data.park_id)
      })
    },
    //获取首页信息
    getIndexInfo: function(){
      let that = this
      let params = {}
      this.$http.get(api.index,{params: params}).then(res => {
        that.logo = res.data.logo
        that.about = res.data.about
        that.contact = res.data.contact
      })
    },
    goAboutDetail: function() {
      // 去往关于我们详情页面
      this.$router.push({
        name: "about"
      });
    },
    //获取园区列表
    getParkList: function(){
      let that = this
      let params = {
        page: this.parkPage,
        pageSize: this.parkSize
      }
      this.$http.get(api.parkList,{params: params}).then(res => {
        that.parkTotal = res._meta.totalCount
        that.parkList = res.data
      })
    },
    goParkList: function() {
      // 去往园区列表页面
      this.$router.push({
        name: "park"
      });
    },
    goParkDetail: function(item) {
      // 去往园区详情页面
      this.$router.push({
        name: "parkDetail",
        params: {
          pid: item.park_id
        }
      })
    },
    //获取招租列表
    getRentList: function(){
      let that = this
      let params = {
        page: this.rentPage,
        pageSize: this.rentSize
      }
      this.$http.get(api.rentList,{params: params}).then(res => {
        that.rentTotal = res._meta.totalCount
        that.rentList = res.data
      })
    },
    goRentList: function() {
      // 去往招租列表页面
      this.$router.push({
        name: "rentList"
      });
    },
    goRentDetail: function(item){
      // 去往招租详情页面
      this.$router.push({
        name: "rentDetail",
        params: {
          rid: item.zu_id
        }
      })
    },
    //获取新闻列表
    getNewsList: function(){
      let that = this
      let params = {
        page: this.newsPage,
        pageSize: this.newsSize
      }
      this.$http.get(api.newsList,{params: params}).then(res => {
        that.newsTotal = res._meta.totalCount
        that.newsList = res.data
      })
    },
    goNewsList: function() {
      // 去往新闻列表页面
      this.$router.push({
        name: "newsList"
      });
    },
    goNewsDetail: function(item){
      // 去往新闻详情页面
      this.$router.push({
        name: "newsDetail",
        params: {
          nid: item.news_id
        }
      })
    },
    phoneCall: function(tel){
      window.location.href = "tel://" + tel
    }
  },
  filters: {
    formateTime: function (value) {
      return formateDate(value*1000, 'yyyy-MM-dd')
    }
  }
};
</script>