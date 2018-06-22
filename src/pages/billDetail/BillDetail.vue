<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<h3>{{billInfo.title}}详情</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-l">客户名称：{{billInfo.data.ke_hu_ming_cheng}}</div>
					<div class="item-r"></div>
				</div>
				<div class="item">
					<div class="item-l">租金月份：{{billInfo.data.zu_jin_yue_fen}}月</div>
					<div class="item-r"></div>
				</div>
				<div class="item">
					<div class="item-l">租金：{{billInfo.data.zu_jin | compare}}</div>
					<div class="item-r">管理费：{{billInfo.data.guan_li_fei | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">垃圾费：{{billInfo.data.la_ji_fei | compare}}</div>
					<div class="item-r">电梯费：{{billInfo.data.dian_ti_fei | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">其他：{{billInfo.data.qi_ta | compare}}</div>
					<div class="item-r">租金税金：{{billInfo.data.zu_jin_shui_jin | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">水电费月份：{{billInfo.data.shui_dian_fei_yue_fen}}月</div>
					<div class="item-r"></div>
				</div>
				<div class="item">
					<div class="item-l">基本电费：{{billInfo.data.ji_ben_dian_fei | compare}}</div>
					<div class="item-r">上月电量：{{billInfo.data.shang_yue_dian_liang | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">本月电量：{{billInfo.data.ben_yue_dian_liang | compare}}</div>
					<div class="item-r">电量负感倍数：{{billInfo.data.dian_liang_fu_gan_bei_shu | compare}}</div>
				</div>
        <div class="item">
					<div class="item-l">实际用电量：{{billInfo.data.shi_ji_yong_dian_liang | compare}}</div>
					<div class="item-r">用电费用：{{billInfo.data.yong_dian_fei_yong | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">用电损耗及管理费：{{billInfo.data.yong_dian_sun_hao_ji_guan_li_fei | compare}}</div>
					<div class="item-r">装修用电：{{billInfo.data.zhuang_xiu_yong_dian | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">公共用电分摊：{{billInfo.data.gong_gong_yong_dian_fen_tan | compare}}</div>
					<div class="item-r">电费税金：{{billInfo.data.dian_fei_shui_jin | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">上月水量：{{billInfo.data.shang_yue_shui_liang | compare}}</div>
					<div class="item-r">本月水量：{{billInfo.data.ben_yue_shui_liang | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">实际用水量：{{billInfo.data.shi_ji_yong_shui_liang | compare}}</div>
					<div class="item-r">用水费用：{{billInfo.data.yong_shui_fei_yong | compare}}</div>
				</div>
        <div class="item">
					<div class="item-l">用水损耗及管理费：{{billInfo.data.yong_shui_sun_hao_ji_guan_li_fei | compare}}</div>
					<div class="item-r">装修用水：{{billInfo.data.zhuang_xiu_yong_shui | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">公共用水分摊：{{billInfo.data.gong_gong_yong_shui_fen_tan | compare}}</div>
					<div class="item-r">水费税金：{{billInfo.data.shui_fei_shui_jin | compare}}</div>
				</div>
				<div class="item">
					<div class="item-l">其他：{{billInfo.data.qi_ta2 | compare}}</div>
					<div class="item-r"></div>
				</div>
				<div class="item">
					<div class="item-l"><span class="font-orange">合计：{{billInfo.data.he_ji | compare(1)}}</span></div>
					<div class="item-r">
						
					</div>
				</div>
				<div class="section-tip">
					<p>收款信息：{{billInfo.data.shou_kuan_xin_xi | compare2}}</p>
				</div>
				<div class="section-tip">
					<p>温馨提示：{{billInfo.data.wen_xin_ti_shi | compare2}}</p>
				</div>
				<div class="section-tip">
					<p>合同到期提醒：{{billInfo.data.he_tong_dao_qi_ti_xing | compare2}}</p>
				</div>
				<div class="section-tip">
					<p>备注：{{billInfo.data.bei_zhu | compare2}}</p>
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
    }
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
  },
	filters: {
		compare(val,type){
			if(val === null || val === '' || val === 0){
				return 0
			}else{
				if(type){
					return parseFloat(val).toFixed(2)
				}
				return val
			}
		},
		compare2(val){
			if(val === null || val === '' || val === 0){
				return '无'
			}else{
				return val
			}
		}
	}
};
</script>