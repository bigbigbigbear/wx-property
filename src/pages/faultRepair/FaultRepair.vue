<template>
	<div class="container">
		<div class="section">
			<div class="section-hd">
				<h3>故障报修</h3>
			</div>
			<div class="section-bd">
				<div class="item">
					<div class="item-upload" @click.stop="addPic(1)" ref="imgUpload">
            <img :src="imgUrl1" alt="">
            <input type="file" accept="image/*" capture="camera" @change="onFileChange" style="display: none;">
          </div>
					<div class="item-upload" @click.stop="addPic(2)">
            <img :src="imgUrl2" alt="">
          </div>
					<div class="item-upload" @click.stop="addPic(3)">
            <img :src="imgUrl3" alt="">
          </div>
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
	overflow: hidden;
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
import lrz from "lrz"
import { Toast } from "mint-ui";
import imgUpload from "@/assets/images/icon-upload.png"
import api from '../../server/api'
export default {
  components: {
		
	},
  data() {
    return {
			type: 1,
      imgUrl1: imgUpload,
      imgUrl2: imgUpload,
      imgUrl3: imgUpload,
      imgUrls: [],
      content: ""
    }
  },
  computed: {

  },
  created() {

	},
  mounted() {
		
	},
  methods: {
		// 添加图片
    addPic: function (type) {
      let els = this.$refs.imgUpload.querySelectorAll('input[type=file]')
      els[0].click()
      this.type = type
      return false
    },
    // 上传图片
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files, e);
    },
    // 图片压缩转化
    createImage: function (file, e) {
      let vm = this;
      lrz(file[0], {
        width: 480
      }).then(function (rst) {
        switch(vm.type){
          case 1:
            vm.imgUrl1 = rst.base64
            break;
          case 2:
            vm.imgUrl2 = rst.base64
            break;
          case 3:
            vm.imgUrl3 = rst.base64
            break;
          default: 
            break;
        }
        return rst;
      }).always(function () {
        // 清空文件上传控件的值
        e.target.value = null;
      });
    },
		// 提交
		submit: function(){
			let vm = this
			let pid = this.$route.params.pid
			let user_id = localStorage.getItem('user_id')
      let params = {
        user_id: user_id,
        image1: this.imgUrl1.split(',')[1],
        image2: this.imgUrl2.split(',')[1],
        image3: this.imgUrl3.split(',')[1],
        content: this.content
			}
      this.$http.post(api.faultRepair, params).then(res => {
				Toast({
					message: '提交成功！'
        })
        setTimeout(() => {
          vm.$router.push({
						name: 'parkDetail',
						params: {
							pid: pid
						}
          })
        },1500)
      })
		}
	}
};
</script>