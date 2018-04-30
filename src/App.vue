<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/m-header/Header.vue'
import Tab from 'components/Teb/Tab.vue'

export default {
  name: 'App',
  components:{
    Header,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
}
</style>
