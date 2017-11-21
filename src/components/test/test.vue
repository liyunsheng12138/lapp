<template>

    <div>
        <h1 @click="handleClick">Hello Mint</h1>
        <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
   
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui'

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);


export default {
  name: 'Test',
  // components: {
  //   Swipe,
  //   SwipeItem
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hotImg:[]
    //   handleClick:function(){
    //     //   this.$tos
    //   }
    }
  },
  methods:{

    handleClick(){
      axios.get('http://localhost/lapp/data/01_index/gethot.php')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
        if(response){
          this.hotImg=response.data;
        }
      });
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      });
    
    console.log(123);
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe {
		height: 39vw !important;
	}
</style>
