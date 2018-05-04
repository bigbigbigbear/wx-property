<template>
	<div class="container">
    <div class="section">
      <div class="section-hd">
        <h3>招租列表</h3>
      </div>
      <div class="section-bd section3-bd">
        <div class="section3-item" v-for="(item, index) in rentList" :key="index">
          <div class="section3-item__l">
            <img :src="item.rent_img_url" :alt="item.rent_name" srcset="">
          </div>
          <div class="section3-item__r">
            <h3 class="text-overflow">{{item.rent_name}}</h3>
            <p class="font-grey"><span>地点：{{item.rent_addr}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>面积：{{item.rent_area}}</span></p>
            <p class="font-grey"><span>租金：{{item.rent_price}}</span></p>
            <p><a href="javascript:;" class="font-orange" @click="goRentDetail(item)">查看详情 <img class="item-img__search" src="../../assets/images/icon-search-active.png" alt="查看详情" srcset=""></a></p>
          </div>
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
export default {
  components: {
  },
  data() {
    return {
      rentList: [
        {
          rent_id: 1,
          rent_img_url: "",
          rent_name: "福永桥头一楼1100平方厂房出租",
          rent_addr: "宝安区-福永",
          rent_area: "5000m²",
          rent_price: "25元/m²"
        },
        {
          rent_id: 2,
          rent_img_url: "",
          rent_name: "福永桥头一楼1100平方厂房出租",
          rent_addr: "宝安区-福永",
          rent_area: "5000m²",
          rent_price: "25元/m²"
        },
        {
          rent_id: 3,
          rent_img_url: "",
          rent_name: "福永桥头一楼1100平方厂房出租",
          rent_addr: "宝安区-福永",
          rent_area: "5000m²",
          rent_price: "25元/m²"
        },
        {
          rent_id: 4,
          rent_img_url: "",
          rent_name: "福永桥头一楼1100平方厂房出租",
          rent_addr: "宝安区-福永",
          rent_area: "5000m²",
          rent_price: "25元/m²"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    goRentDetail: function(item){
      // 去往招租详情页面
      this.$router.push({
        name: "rentDetail",
        params: {
          rid: item.rent_id
        }
      })
    }
  }
};
</script>