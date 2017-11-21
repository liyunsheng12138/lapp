<template>
  <div>
    <div class="header-fixed">
        <div class="search-bar clear">
            <div class="header-search">
                <input type="text">
            </div>
            <div>
                <span class="iconfont">&#xe624;</span>
            </div>
        </div>
        <mt-navbar>
            <mt-tab-item id="1">
                <p @click="jumpToPage(1)" :class="{isActive: activePage==1}">
                    精选
                </p>
            </mt-tab-item>
            <mt-tab-item id="3" >
                <p @click="jumpToPage(2)" :class="{isActive: activePage==2}">
                    排行
                </p>
            </mt-tab-item>
            <mt-tab-item id="2">
                <p @click="jumpToPage(3)" :class="{isActive: activePage==3}">
                   魅玩
                </p>
            </mt-tab-item>
            <mt-tab-item id="4">
                <p @click="jumpToPage(4)" :class="{isActive: activePage==4}">
                   分类
                </p>
            </mt-tab-item>
        </mt-navbar>
    </div>
    
  </div>
</template>
<script>
    import { Header,Navbar, TabItem } from 'mint-ui';

    // Vue.component(Header.name, Header);
    export default{
        // name:"MyHeader",
        data(){
            return {
                activePage:1
            }
        },
        methods:{
            jumpToPage(index){
                
                switch(index){
                    case 1:
                       this.$router.push('/index');
                       break;
                    case 2:
                        this.$router.push('/sort');
                        break;
                    case 3:
                        this.$router.push('/mplay');
                        break;
                    case 4:
                        this.$router.push('/tips');
                        break;
                    default:
                        this.$router.push('/index');
                        break;
                }
                // console.log(this.$router)
            }
        }

    }
</script>
<style>
    my-header{
        width: 100vw !important;
        height: 16vh  !important;
    }
    .mint-navbar .mint-tab-item {
        padding: 0; 
        font-size: 15px;
    }
    .header-fixed{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        font-size: 1.6em;
    }
    .header-search>input{
        border:0;
        background-color: transparent;
        padding-left:20px;
        font-size: 1em;
    }
    .header-search{
        background-color: #aaa;
        margin: 2px;
        margin-left: 20px;
    }
    .search-bar>div:nth-child(1){
        width: 80vw;
        float: left;
    }
    .search-bar>div:nth-child(2){
        /*width: 20vw;*/
        float: right;
        text-align: center;
        font-size: 1em;
        margin: 2px;
        margin-right: 20px;
        height: 100%;
    }
    .iconfont{
        font-size: 1em;
    }
    .mint-tab-item p{
        padding:8px 0;
    }
    .isActive{
        box-sizing: border-box;
        border-bottom:1px solid red;
        color:red;
    }
    
</style>

