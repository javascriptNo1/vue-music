<template>
  <div>
    <ul>
      <li v-for="itme in data">
        <img :src="itme.picUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import {getRecommend} from 'api/recommeds'
  import {ERR_OK} from 'api/config'

  export default {
    data(){
      return {
       data:[]
      }
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
