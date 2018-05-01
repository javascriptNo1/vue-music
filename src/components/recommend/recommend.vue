<template>
  <div v-if="data.length">
    <Slider>
      <li v-for="itme in data">
        <img :src="itme.picUrl" alt="">
      </li>
    </Slider>
  </div>
</template>

<script>
  import {getRecommend} from 'api/recommeds'
  import {ERR_OK} from 'api/config'
  import Slider from 'base/slider/slider'
  export default {
    data(){
      return {
       data:[]
      }
    },
    components:{
      Slider
    },
    created(){
      this._getRecommemd()
    },
    methods:{
       _getRecommemd(){
         getRecommend().then((res)=>{
           if (res.code===ERR_OK){
             this.data=res.data.slider
           }
         })
       }
    }
  }

</script>

<style scoped lang="stylus">

</style>
