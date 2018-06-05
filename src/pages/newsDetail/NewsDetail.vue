<template>
	<div class="container">
		<div class="section margin-b20">
			<div class="section-hd text-overflow bbottom">
				<h3>{{newsInfo.title}}</h3>
			</div>
			<div class="section-bd" v-html="newsInfo.content"></div>
		</div>
		<div class="section section-page">
			<div class="section-item" @click="goOtherNews(prev.news_id)">
				<h3 class="text-overflow"><span class="font-grey">上一篇：</span>{{prev.title}}</h3>
			</div>
			<div class="section-item" @click="goOtherNews(next.news_id)">
				<h3 class="text-overflow"><span class="font-grey">下一篇：</span>{{next.title}}</h3>
			</div>
		</div>
	</div>
</template>
<style scoped>
.section{
	width: 100%;
	background-color: #fff;
}
.section-hd, .section-bd, .section-page{
	width: 100%;
	box-sizing: border-box;
	padding: 0.2667rem;
}
.section-bd img{
	height: auto !important;
}
.section-item{
	padding: 0.2667rem 0;
}
</style>
<script type="text/babel">
import api from '../../server/api'
export default {
	components: {
		
	},
	data() {
		return {
			newsInfo: {
				content: '',
				image: '',
				intro: '',
				news_id: '',
				title: '',
				view_num: ''
			},
			prev: {
				news_id: '',
				title: '无'
			},
			next: {
				news_id: '',
				title: '无'
			}
		}
	},
	created() {
		this.getNewsInfo()
	},
	mounted() {
    
	},
	watch: {
   	'$route' (to, from) {
			this.getNewsInfo()
   	}
 	},
	methods: {
		//获取新闻详情
		getNewsInfo: function(){
			let that = this
			let nid = this.$route.params.nid
      let params = {
        news_id: nid
      }
      this.$http.get(api.newsDetail,{params: params}).then(res => {
				if(res.data.detail !== null){
					that.newsInfo = res.data.detail
				}
				if(res.data.prev !== null){
					that.prev = res.data.prev
				}
				if(res.data.next !== null){
					that.next = res.data.next
				}
      })
		},
		//去看别的新闻
		goOtherNews: function(id){
			this.$router.push({
        name: "newsDetail",
        params: {
          nid: id
        }
      })
		}
	}
}
</script>