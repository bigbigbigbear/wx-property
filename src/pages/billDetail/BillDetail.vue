<template>
	<div class="container" v-wechat-title="$route.meta.title">
		<div class="section">
			<div class="section-hd">
				<h3>{{billInfo.time}}账单详情</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-l"><span class="font-orange"> 金额合计：{{billInfo.total}}</span></div>
					<div class="item-r">
						
					</div>
				</div>
				<div class="item">
					<div class="item-l">电费{{billInfo.electric_unit}}度：{{billInfo.electric_fee}}</div>
					<div class="item-r">用电损耗6%：{{billInfo.electric_loss}}</div>
				</div>
				<div class="item">
					<div class="item-l">用电管理费：{{billInfo.electric_manage}}</div>
					<div class="item-r">水费{{billInfo.water_unit}}度：{{billInfo.water_fee}}</div>
				</div>
				<div class="item">
					<div class="item-l">电梯费：{{billInfo.elevator_fee}}</div>
					<div class="item-r">水损耗16%：{{billInfo.water_fee}}</div>
				</div>
        <div class="item">
					<div class="item-l">垃圾费：{{billInfo.rubbish_fee}}</div>
					<div class="item-r">保安费：{{billInfo.security_fee}}</div>
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
</style>
<script type="text/babel">
export default {
  components: {},
  data() {
    return {
      billInfo: {
        id: 1,
        time: '2018-04',
        total: 30000,
        electric_fee: 999,
        electric_unit: 1.2,
        electric_loss: 66,
        electric_manage: 99,
        water_fee: 100,
        water_unit: 6,
        water_loss: 8,
        elevator_fee: 1000,
        rubbish_fee: 90,
        security_fee: 50
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
  }
};
</script>