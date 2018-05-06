<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<h3>园区评分</h3>
				<span class="font-orange">目前平均得分：{{averScore}}分</span>
			</div>
			<div class="section-bd">
				<div class="item">
					<label>园区环境&nbsp;&nbsp;&nbsp;&nbsp;<star-score :prop-score="envScore" @getScore="getEnvScore"></star-score>
					</label>
				</div>
				<div class="item">
					<label>园区设施&nbsp;&nbsp;&nbsp;&nbsp;<star-score :prop-score="deviceScore" @getScore="getDeviceScore"></star-score>
					</label>
				</div>
				<div class="item">
					<label>园区服务&nbsp;&nbsp;&nbsp;&nbsp;<star-score :prop-score="serviceScore" @getScore="getServiceScore"></star-score>
					</label>
				</div>
				<div class="item-btn">
					<span class="btn btn-large btn-radius" @click="submitScore">提交评分</span>
				</div>
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
.section-hd span {
  position: absolute;
  right: 0.2667rem;
  top: 50%;
  transform: translateY(-50%);
}
.section-bd {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.2667rem;
}
.item{
	width: 100%;
	height: 1.52rem;
	line-height: 1.52rem;
	border-bottom: 0.0067rem solid #eee;
}
.item-btn{
	margin-top: 0.5333rem;
}
</style>
<script type="text/babel">
import StarScore from '@/components/StarScore'
import { Toast } from 'mint-ui';
import api from '../../server/api'
export default {
  components: {
		StarScore
	},
  data() {
    return {
			averScore: 0,
			envScore: 0,
			deviceScore: 0,
			serviceScore: 0,
    };
  },
  computed: {
    
  },
  created() {
		this.getParkInfo()
	},
  mounted() {},
  methods: {
		//获取园区详情
		getParkInfo: function(){
			let that = this
			let pid = this.$route.params.pid
      let params = {
        park_id: pid
      }
      this.$http.get(api.parkDetail,{params: params}).then(res => {
        that.averScore = res.data.score
      })
		},
		// 提交评分
		submitScore: function(){
			let that = this
			let pid = this.$route.params.pid
			let user_id = localStorage.getItem('user_id')
      let params = {
				park_id: pid,
				user_id: user_id,
				surroundings: this.envScore,
				service: this.serviceScore,
				facilities: this.deviceScore
			}
      this.$http.post(api.parkScore, params).then(res => {
				Toast({
					message: '评分成功！'
				})
				that.averScore = res.data
				setTimeout(() => {
					that.$router.push({
						name: 'parkDetail',
						params: {
							pid: pid
						}
					})
				}, 1000)
				
      })
		},
		// 获取环境评分
		getEnvScore: function(data){
			// console.log(data)
			this.envScore = data
		},
		// 获取设备评分
		getDeviceScore: function(data){
			// console.log(data)
			this.deviceScore = data
		},
		// 获取服务评分
		getServiceScore: function(data){
			// console.log(data)
			this.serviceScore = data
		}
	}
};
</script>