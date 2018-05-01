<template>
	<div class="container" v-wechat-title="$route.meta.title">
    <div class="section">
      <div class="section-hd">
        <h3>工作人员列表</h3>
      </div>
      <div class="section-bd section3-bd">
        <div class="section3-item" v-for="(item, index) in employeeList" :key="index" @click="goEmployeeScore(item)">
          <div class="section3-item__l">
            <img :src="item.employee_img_url" :alt="item.employee_name">
						<div class="section3-item__name">{{item.employee_name}}</div>
          </div>
          <div class="section3-item__r">
            <h4 class="text-overflow">职位：{{item.employee_position}}</h4>
            <p class="font-grey"><span>职责：{{item.employee_duty}}</span></p>
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
  width: 2rem;
	height: 2.6667rem;
	position: relative;
  overflow: hidden;
  margin-right: 0.2667rem;
}
.section3-item__name{
	width: 100%;
	height: 0.5333rem;
	line-height: 0.5333rem;
	background-color: rgba(0, 0, 0, .5);
	position: absolute;
	bottom: 0;
	color: #fff;
	text-align: center;
}
.section3-item__r {
  flex: 1;
}
.section3-item__r h4{
	line-height: 2.4;
}
</style>
<script type="text/babel">
export default {
  components: {
  },
  data() {
    return {
      employeeList: [
        {
          employee_id: 1,
          employee_img_url: "",
          employee_name: "蓝山行",
          employee_position: "工业园区企业管理服务部经理",
          employee_duty: "负责开发区统计、管委会和公司统计、开发区安全管理及入区企业服务；配合行政管理部门做好技改申报、科技申报、工商年检等专项管理与服务工作"
        },
        {
          employee_id: 2,
          employee_img_url: "",
          employee_name: "蓝山行",
          employee_position: "工业园区企业管理服务部经理",
          employee_duty: "负责开发区统计、管委会和公司统计、开发区安全管理及入区企业服务；配合行政管理部门做好技改申报、科技申报、工商年检等专项管理与服务工作"
        },
        {
          employee_id: 3,
          employee_img_url: "",
          employee_name: "蓝山行",
          employee_position: "工业园区企业管理服务部经理",
          employee_duty: "负责开发区统计、管委会和公司统计、开发区安全管理及入区企业服务；配合行政管理部门做好技改申报、科技申报、工商年检等专项管理与服务工作"
        },
        {
          employee_id: 4,
          employee_img_url: "",
          employee_name: "蓝山行",
          employee_position: "工业园区企业管理服务部经理",
          employee_duty: "负责开发区统计、管委会和公司统计、开发区安全管理及入区企业服务；配合行政管理部门做好技改申报、科技申报、工商年检等专项管理与服务工作"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    goEmployeeScore: function(item){
			let pid = this.$route.params.pid
      // 工作人员评分页面
      this.$router.push({
        name: "employeeScore",
        params: {
					pid: pid,
          eid: item.employee_id
        }
      })
    }
  }
};
</script>