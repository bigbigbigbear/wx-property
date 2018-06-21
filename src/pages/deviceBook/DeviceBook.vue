<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<h3>公共设施预约</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-label">预约人：</div>
					<div class="item-control">
						<input type="text" v-model="bookName" placeholder="请填写预约人的姓名">
					</div>
				</div>
        <div class="item">
					<div class="item-label">联系方式：</div>
					<div class="item-control">
						<input type="number" v-model="contact" placeholder="请填写预约人电话">
					</div>
				</div>
        <div class="item">
					<div class="item-label">预约人数：</div>
					<div class="item-control">
						<input type="number" v-model="peopleNumber" placeholder="请填写预约人数">
					</div>
				</div>
				<div class="item">
					<div class="item-label">预约场地：</div>
					<div class="item-control">
						<input class="item-select" type="text" @focus="showList = true" readonly :value="areaName">
					</div>
				</div>
				<div class="item">
					<div class="item-label">预约时间：</div>
					<div class="item-control">
						<input class="input-half" type="text" :value="startTime" @focus="open('start')" placeholder="2018-02-03 16:00" readonly> 至 
            <input class="input-half" type="text" :value="endTime" @focus="open('end')" placeholder="2018-02-03 18:00" readonly>
					</div>
				</div>
				<div class="item">
					<div class="item-label">用途：</div>
					<div class="item-control">
						<textarea v-model="purpose" placeholder="请输入用途"></textarea>
					</div>
				</div>
				<div class="item-btn">
					<span class="btn btn-large btn-radius" @click="submit">提交预约</span>
				</div>
				<mt-popup v-model="showList" position="bottom" class="item-popup">
					<mt-picker :slots="areaList" @change="onNameChange" :visible-item-count="5" :value-key="'name'"></mt-picker>
				</mt-popup>
				<mt-datetime-picker :startDate="startDate" ref="picker" v-model="value" :closeOnClickModal="false" @visible-change="handleVisibleChange" @confirm="handleChange" year-format="{value}年" month-format="{value}月" date-format="{value}日" hour-format="{value}时" minute-format="{value}分">
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
.item-control .input-half{
  width: 46%;
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
import { formateDate } from "../../utils/utils"
import api from '../../server/api'
export default {
  components: {},
  data() {
    return {
      showList: false,
			pickerVisible: false,
			startDate: new Date(),
      bookName: "",
      contact: '',
      peopleNumber: '',
      areaId: '',
      areaName: '',
      areaList: [
        {
          flex: 1,
          values: [{name: '', area_id: ''}],
          textAlign: "center"
        }
      ],
      type: '',
      startTime: null,
      startAt: null,
      endTime: null,
      endAt: null,
      value: null,
      purpose: ""
    };
  },
  computed: {},
  created() {
    let did = this.$route.params.did
    this.areaId = did
    this.getDeviceList()
  },
  mounted() {},
  methods: {
    //获取设施列表
		getDeviceList: function(){
			let that = this
      let pid = this.$route.params.pid
      let did = this.$route.params.did
      let params = {
        park_id: pid
      }
      this.$http.get(api.deviceList,{params: params}).then(res => {
        let deviceList = res.data
        deviceList.forEach(el => {
          if(did == el.area_id){
            that.areaName = el.name
          }
        })
        that.areaList[0].values = deviceList
      })
		},
    onNameChange: function(picker, val) {
      this.areaName = val[0].name
      this.areaId = val[0].area_id
      this.showList = false
    },
    open(type) {
      this.type = type
      this.$refs.picker.open()
    },
    handleChange(value) {
      let date = formateDate(value, 'yyyy-MM-dd HH:mm')
      if(this.type == 'start'){
        this.startAt = Math.floor(new Date(value).getTime() / 1000)
        this.startTime = date
      }
			if(this.type == 'end'){
        this.endAt = Math.floor(new Date(value).getTime() / 1000)
        this.endTime = date
      }
    },
    handleVisibleChange(isVisible) {
      //console.log('弹窗是否展示:', isVisible);
    },
    // 提交
    submit: function() {
      let that = this
      let pid = this.$route.params.pid
			let user_id = localStorage.getItem('user_id')
      let params = {
        park_id: pid,
        area_id: this.areaId,
        user_id: user_id,
        name: this.bookName,
        contact: this.contact,
        people_number: this.peopleNumber,
        start_at: this.startAt,
        end_at: this.endAt,
				purpose: this.purpose
			}
			if(this.bookName == ''){
				Toast('预订人不能为空~')
				return false
      }
      if(this.contact == ''){
				Toast('联系电话不能为空~')
				return false
      }
      if(this.peopleNumber == ''){
				Toast('预约人数不能为空~')
				return false
      }
      if(this.startAt === null){
				Toast('请选择开始时间~')
				return false
      }
      if(this.endAt === null){
				Toast('请选择结束时间~')
				return false
      }
      if(this.purpose == ''){
				Toast('用途不能为空~')
				return false
			}
      this.$http.post(api.deviceBook, params).then(res => {
        if(res.err_code === 0){
          Toast({
            message: '预约成功！'
          })
          this.bookName = ''
          this.contact = ''
          this.peopleNumber = ''
          // 去往园区详情页面
          this.$router.push({
            name: "parkDetail",
            params: {
              pid: pid
            }
          })
        }
      })
    }
  }
};
</script>