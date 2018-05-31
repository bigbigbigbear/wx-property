<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<h3>{{billInfo.title}}详情</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-l">{{billInfo.data.current.month}}月</div>
					<div class="item-r"></div>
				</div>
				<div class="item">
					<div class="item-l">租金：{{billInfo.data.current.zu}}</div>
					<div class="item-r">垃圾费：{{billInfo.data.current.laji}}</div>
				</div>
				<div class="item">
					<div class="item-l">管理费：{{billInfo.data.current.guanli}}</div>
					<div class="item-r">基本电费：{{billInfo.data.current.dianfei}}</div>
				</div>
        <div class="item">
					<div class="item-l"><span class="font-orange"> 合计：{{billInfo.data.current.total}}</span></div>
					<div class="item-r">
						
					</div>
				</div>
				<div class="item">
					<div class="item-l">{{billInfo.data.prev.month}}月</div>
					<div class="item-r"></div>
				</div>
				<div class="item">
					<div class="item-l">电费：{{billInfo.data.prev.dianfei}}</div>
					<div class="item-r">{{billInfo.data.prev.dian_sunhao_title}}：{{billInfo.data.prev.dian_sunhao}}</div>
				</div>
				<div class="item">
					<div class="item-l">公共用电分摊：{{billInfo.data.prev.dian_fentan}}</div>
					<div class="item-r">{{billInfo.data.prev.shuifei_title}}：{{billInfo.data.prev.shuifei}}</div>
				</div>
        <div class="item">
					<div class="item-l">{{billInfo.data.prev.shui_sunhao_title}}：{{billInfo.data.prev.shui_sunhao}}</div>
					<div class="item-r">公共用水分摊：{{billInfo.data.prev.shui_fentan}}</div>
				</div>
        <div class="item">
					<div class="item-l"><span class="font-orange"> 合计：{{billInfo.data.prev.total}}</span></div>
					<div class="item-r">
						
					</div>
				</div>
        <div class="item">
					<div class="item-l">本月电表：</div>
					<div class="item-r">{{billInfo.data.dian.current.feng}}/{{billInfo.data.dian.current.ping}}/{{billInfo.data.dian.current.gu}}</div>
				</div>
				<div class="item">
					<div class="item-l">上月电表：</div>
					<div class="item-r">{{billInfo.data.dian.prev.feng}}/{{billInfo.data.dian.prev.ping}}/{{billInfo.data.dian.prev.gu}}</div>
				</div>
        <div class="item">
					<div class="item-l">实际用电：</div>
					<div class="item-r">{{billInfo.data.dian.shiji.feng}}/{{billInfo.data.dian.shiji.ping}}/{{billInfo.data.dian.shiji.gu}}</div>
				</div>
        <div class="item">
					<div class="item-l">电量负感倍数：{{billInfo.data.dian.beishu}}</div>
					<div class="item-r">本月用水：{{billInfo.data.shui.current}}</div>
				</div>
        <div class="item">
					<div class="item-l">上月用水：{{billInfo.data.shui.prev}}</div>
					<div class="item-r">实际用水：{{billInfo.data.shui.shiji}}</div>
				</div>
				<div class="item">
					<div class="item-l"><span class="font-orange"> 金额合计：{{billInfo.amount}}</span></div>
					<div class="item-r">
						
					</div>
				</div>
				<div class="section-tip">
					<p>{{billInfo.tip}}</p>
				</div>
				<div class="item">
					<div class="item-l">制表人：{{billInfo.data.make.marker}}</div>
					<div class="item-r">日期：{{billInfo.data.make.zhibiao_date}}</div>
				</div>
        <div class="item">
					<div class="item-l">联系电话：{{billInfo.data.make.tel}}</div>
					<div class="item-r"></div>
				</div>
				<div class="divider"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.container {
  background-color: #fff;
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
  color: #666;
  border-bottom: 0.0067rem solid #eee;
}
.item-l, .item-r {
  flex: 1;
}
.section-tip{
	width: 100%;
	box-sizing: border-box;
	padding: 0.2667rem;
	margin-top: 0.4rem;
	line-height: 1.8;
	background-color: #f5f5f5;
	color: #666;
}
</style>
<script type="text/babel">
import api from '../../server/api'
export default {
  components: {},
  data() {
    return {
      billInfo: {}
    };
  },
  computed: {},
  created() {
    this.getCurrentbill()
  },
  mounted() {},
  methods: {
    getCurrentbill: function(){
      let that = this
      let bid = this.$route.params.bid
			let params = {
				bill_id: bid
			}
			this.$http.get(api.billDetail,{params: params}).then(res => {
        that.billInfo = res.data
      })
		}
  }
};
</script>