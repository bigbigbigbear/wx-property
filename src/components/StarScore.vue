<template>
  <div class="star">
    <span v-for="(itemClass,index) in itemClasses" :class="['star-item',itemClass]" @click="selectStar(index,$event)" :key="index"></span>
  </div>
</template>

<script>

export default {
  name: "starScore",
  props: {
    propScore: { // 传入的变量
      type: Number
    }
  },
  computed: {
    //* 计算显示星星
    itemClasses () {
      let result = []; // 返回的是一个数组,用来遍历输出星星
      let score = Math.floor(this.score) / 2; // 计算所有星星的数量
      //let hasDecimal = score % 1 !== 0; // 非整数星星判断
      let integer = Math.floor(score); // 整数星星判断
      for (let i = 0; i < integer; i++) { // 整数星星使用on
        result.push('on');// 一个整数星星就push一个CLS_ON到数组
      }
      // if (hasDecimal) { // 非整数星星使用half
      //   result.push('half');// 类似
      // }
      while (result.length < 5) { // 余下的用无星星补全,使用off
        result.push('off');// 类似
      }
      return result;
    }
  },
  data() {
    return {
      score: ''
    };
  },
  created(){
    this.score = this.propScore
  },
  mounted() {
    
  },
  methods: {
    selectStar: function(index, event) {
      // 点击当前星星索引值+1
      this.score = (index + 1) * 2
      this.$emit('getScore',this.score)
    }
  }
};
</script>

<style scoped>
.star {
	display: inline-block;
  font-size: 0;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
  width: 0.5333rem;
	height: 0.5333rem;
  margin-right: 0.5867rem;
  background-size: 100%;
}
.star-item.on {
  background-image: url(../assets/images/icon-star-active.png);
}
.star-item.off {
  background-image: url(../assets/images/icon-star.png);
}
</style>
