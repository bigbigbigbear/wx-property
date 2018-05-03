<template>
	<div class="container" v-wechat-title="$route.meta.title">
		<div class="section">
			<div class="section-hd">
				<h3>公共设施预约</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-label">预约人：</div>
					<div class="item-control">
						<input type="text" v-model="bookPerson" placeholder="请填写预约人的姓名">
					</div>
				</div>
				<div class="item">
					<div class="item-label">预约内容：</div>
					<div class="item-control">
						<input class="item-select" type="text" @focus="showList = true" readonly :value="bookName">
					</div>
				</div>
				<div class="item">
					<div class="item-label">预约时间：</div>
					<div class="item-control">
						<input type="text" :value="bookTime" @focus="open('picker')" placeholder="2018-02-03 16:00" readonly>
					</div>
				</div>
				<div class="item">
					<div class="item-label">备注内容：</div>
					<div class="item-control">
						<textarea v-model="bookContent" placeholder="请输入内容"></textarea>
					</div>
				</div>
				<div class="item-btn">
					<span class="btn btn-large btn-radius" @click="submit">提交预约</span>
				</div>
				<mt-popup v-model="showList" position="bottom" class="item-popup">
					<mt-picker :slots="bookNames" @change="onNameChange" :visible-item-count="5" :value-key="'name'"></mt-picker>
				</mt-popup>
				<mt-datetime-picker :startDate="startDate" ref="picker" v-model="value" :closeOnClickModal="false" @visible-change="handleVisibleChange" @confirm="handleChange" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" hour-format="{value} 时" minute-format="{value} 分">
				</mt-datetime-picker>
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
      showList: false,
			pickerVisible: false,
			startDate: new Date(),
      bookPerson: "",
      bookName: "",
      bookNames: [
        {
          flex: 1,
          values: [
            {
              name: "坪洲篮球场",
              id: 1
            },
            {
              name: "坪洲足球场",
              id: 2
            },
            {
              name: "坪洲羽球场",
              id: 3
            }
          ],
          textAlign: "center"
        }
      ],
      bookTime: null,
      value: null,
      bookContent: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onNameChange: function(picker, val) {
      this.bookName = val[0].name;
      this.showList = false;
    },
    open(picker) {
      this.$refs[picker].open();
    },
    handleChange(value) {
			let date = formateDate(value, 'yyyy-MM-dd HH:mm')
			this.bookTime = date
    },
    handleVisibleChange(isVisible) {
      //console.log('弹窗是否展示:', isVisible);
    },
    // 提交
    submit: function() {}
  }
};
</script>