<template>
  <div>
      <h1>Index</h1>
      <mt-swipe :auto="4000" v-if="bannerList.length>0">
        <mt-swipe-item v-for="(tmp,index) of bannerList" :key="index">
            <img :src="'/src/assets/'+tmp.shop_p" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="4000" v-if="bannerList.length>0">
        <mt-swipe-item v-for="(tmp,index) of bannerList" :key="index">
            <img :src="'/src/assets/'+tmp.shop_p" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="4000" v-if="bannerList.length>0">
        <mt-swipe-item v-for="(tmp,index) of bannerList" :key="index">
            <img :src="'/src/assets/'+tmp.shop_p" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="4000" v-if="bannerList.length>0">
        <mt-swipe-item v-for="(tmp,index) of bannerList" :key="index">
            <img :src="'/src/assets/'+tmp.shop_p" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="4000" v-if="bannerList.length>0">
        <mt-swipe-item v-for="(tmp,index) of bannerList" :key="index">
            <img :src="'/src/assets/'+tmp.shop_p" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="4000" v-if="bannerList.length>0">
        <mt-swipe-item v-for="(tmp,index) of bannerList" :key="index">
            <img :src="'/src/assets/'+tmp.shop_p" alt="">
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
    import axios from 'axios'
    import { Swipe, SwipeItem,Indicator } from 'mint-ui'
    export default{
        name:'index',
        data(){
            return {
                bannerList:[]
            }
        },
        methods:{
            loadData(){
                Indicator.open('Loading...');
                axios.get('http://localhost/lapp/data/04_shopmain/getbanner.php').then((response)=>{
                    console.log(response);
                    if(response){
                        if(response.data){
                            Indicator.close();
                            console.log(this)
                            this.bannerList=response.data
                            // this.bannerList=response.data;
                            console.log(this.bannerList);
                        }
                    }
                })
            }
        },
        beforeMount(){
            this.loadData();
        }
    }
</script>

<style>
    .mint-swipe {
            height: 39vw !important;
    }
    img{
        width: 100%;
        /*height: 100%;*/
    }
</style>
