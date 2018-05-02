<template>
	<div class="container" v-wechat-title="$route.meta.title">
    <div class="section">
      <!-- <div class="section-hd">
        
      </div> -->
      <div class="section-bd">
        <div class="section-item" v-for="(item, index) in parkList" :key="index" @click="goParkDetail(item)">
          <div class="item-img">
            <img :src="item.park_img_url" :alt="item.park_name">
          </div>
          <div class="item-title text-overflow">
            <h3>{{item.park_name}}</h3>
            <img class="item-title__search" src="../../assets/images/icon-search.png" :alt="item.park_name">
          </div>
        </div>
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
	display: flex;
	flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 0.2667rem 0.2667rem;
}
.section-item {
  width: 50%;
  box-sizing: border-box;
  padding-top: 0.2667rem;
}
.section-item:nth-of-type(2n + 1) {
  padding-right: 0.2667rem;
}
.item-img {
  width: 100%;
  height: 2.2667rem;
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
      parkList: [
        {
          park_id: 1,
          park_img_url: "",
          park_name: "南山高新科技园"
        },
        {
          park_id: 2,
          park_img_url: "",
          park_name: "南山高新科技园"
        },
        {
          park_id: 3,
          park_img_url: "",
          park_name: "南山高新科技园"
        },
        {
          park_id: 4,
          park_img_url: "",
          park_name: "南山高新科技园"
        }
      ],
      selected: 'park'
    };
  },
  created() {},
  mounted() {
    this.getParkList()
  },
  methods: {
    getParkList: function(){
      this.$http.get(api.parkList,{}).then(response => {
        console.log(response)
      })
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