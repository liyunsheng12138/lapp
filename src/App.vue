<template>
  <div id="app">
    <my-header />
    <!--<mt-header fixed title="fixed top">Header</mt-header>-->
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/my-header/my-header'
// import { Header } from 'mint-ui';
export default {
  name: 'app',
  components:{
    MyHeader
  },
  beforeCreate(){
    console.log(this.$route.path);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
