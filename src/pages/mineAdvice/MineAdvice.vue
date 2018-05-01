<template>
	<div class="container" v-wechat-title="$route.meta.title">
		<div class="section">
			<div class="section-hd">
				<h3>投诉建议</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-label">时效：</div>
					<div class="item-control">
						<input class="item-select" type="text" @focus="showList1 = true" readonly :value="timeEff">
					</div>
				</div>
				<div class="item">
					<div class="item-label">服务态度：</div>
					<div class="item-control">
						<input class="item-select" type="text" @focus="showList2 = true" readonly :value="serviceAtt">
					</div>
				</div>
				<div class="item">
					<div class="item-label">满意度：</div>
					<div class="item-control">
						<input class="item-select" type="text" @focus="showList3 = true" readonly :value="satisfy">
					</div>
				</div>
				<div class="item">
					<div class="item-upload"></div>
					<div class="item-upload"></div>
					<div class="item-upload"></div>
				</div>
				<div class="item">
					<div class="item-label">其他建议：</div>
					<div class="item-control">
						<textarea v-model="otherAdvice" placeholder="请输入内容"></textarea>
					</div>
				</div>
				<div class="item-btn">
					<span class="btn btn-large btn-radius" @click="submit">提交</span>
				</div>
				<mt-popup v-model="showList1" position="bottom" class="item-popup">
					<mt-picker :slots="list1" @change="selectResult1" :visible-item-count="5" :value-key="'name'"></mt-picker>
				</mt-popup>
				<mt-popup v-model="showList2" position="bottom" class="item-popup">
					<mt-picker :slots="list2" @change="selectResult2" :visible-item-count="5" :value-key="'name'"></mt-picker>
				</mt-popup>
				<mt-popup v-model="showList3" position="bottom" class="item-popup">
					<mt-picker :slots="list3" @change="selectResult3" :visible-item-count="5" :value-key="'name'"></mt-picker>
				</mt-popup>
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
.section-hd {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0.4rem 0.2667rem;
  border-bottom: 0.0067rem solid #ddd;
}
.section-bd {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.2667rem;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2667rem 0;
  border-bottom: 0.0067rem solid #eee;
}
.item-label {
  width: 1.7333rem;
  text-align: right;
  color: #666;
}
.item-control {
  flex: 1;
}
.item-control input {
	width: 100%;
	box-sizing: border-box;
	padding: 0.2667rem;
	border: 0.0067rem solid #eee;
}
.item-control .item-select {
	background: url('../../assets/images/icon-angle-bottom.png') no-repeat right 0.2rem center;
	background-size: 0.36rem 0.1733rem;
}
.item textarea {
  width: 100%;
  height: 2.4rem;
  box-sizing: border-box;
  padding: 0.1333rem;
  border: 0.0067rem solid #eee;
}
.item-upload{
	width: 30%;
	height: 2.8rem;
	background: #f0f0f0 url('../../assets/images/icon-plus.png') no-repeat center center;
	background-size: 0.5333rem 0.5333rem;
}
.item-btn {
  margin-top: 0.5333rem;
}
.item-popup {
  width: 100%;
}
</style>
<script type="text/babel">
import { Toast } from "mint-ui";
import { formatDate } from "../../utils/utils"
export default {
  components: {},
  data() {
    return {
			showList1: false,
			showList2: false,
			showList3: false,
      timeEff: '非常满意',
			serviceAtt: '非常满意',
			satisfy: '非常满意',
      list1: [
        {
          flex: 1,
          values: [
            {
              name: "非常满意",
              id: 1
            },
            {
              name: "很满意",
              id: 2
            },
            {
              name: "满意",
              id: 3
						},
						{
              name: "不满意",
              id: 4
            }
          ],
          textAlign: "center"
        }
			],
			list2: [
        {
          flex: 1,
          values: [
            {
              name: "非常满意",
              id: 1
            },
            {
              name: "很满意",
              id: 2
            },
            {
              name: "满意",
              id: 3
						},
						{
              name: "不满意",
              id: 4
            }
          ],
          textAlign: "center"
        }
			],
			list3: [
        {
          flex: 1,
          values: [
            {
              name: "非常满意",
              id: 1
            },
            {
              name: "很满意",
              id: 2
            },
            {
              name: "满意",
              id: 3
						},
						{
              name: "不满意",
              id: 4
            }
          ],
          textAlign: "center"
        }
      ],
      otherAdvice: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    selectResult1: function(picker, val) {
      this.timeEff = val[0].name;
      this.showList1 = false;
		},
		selectResult2: function(picker, val) {
      this.serviceAtt = val[0].name;
      this.showList2 = false;
		},
		selectResult3: function(picker, val) {
      this.satisfy = val[0].name;
      this.showList3 = false;
    },
    // 提交
    submit: function() {}
  }
};
</script>