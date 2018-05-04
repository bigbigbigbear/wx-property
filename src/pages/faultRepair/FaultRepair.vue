<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<h3>故障报修</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-upload"></div>
					<div class="item-upload"></div>
					<div class="item-upload"></div>
				</div>
				<div class="item">
					<textarea v-model="content" placeholder="请输入内容"></textarea>
				</div>
				<div class="item-btn">
					<span class="btn btn-large btn-radius" @click="submit">提交</span>
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
.item{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-top: 0.4rem;
}
.item-upload{
	width: 30%;
	height: 2.8rem;
	background: #f0f0f0 url('../../assets/images/icon-plus.png') no-repeat center center;
	background-size: 0.5333rem 0.5333rem;
}
.item-btn{
	margin-top: 0.5333rem;
}
.item textarea{
	width: 100%;
	height: 2.4rem;
	box-sizing: border-box;
	padding: 0.1333rem;
	border: 0.0067rem solid #eee;
}
</style>
<script type="text/babel">

export default {
  components: {
		
	},
  data() {
    return {
			imgUrl: [],
			content: ''
    }
  },
  computed: {
  },
  created() {},
  mounted() {
		
	},
  methods: {
		// 提交
		submit: function(){

		}
	}
};
</script>