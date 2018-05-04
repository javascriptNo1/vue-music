<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div v-if="showDots" class="dots">

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {addClass} from 'assets/js/dom'
  export default {
    name:'slider',
    props:{
      loop:{
        type:Boolean,
        default:true
      },
      autoPlay:{
        type:Boolean,
        default:true
      },
      interval:{
        type:Number,
        default:4000
      },
      showDots:{
        type:Boolean,
        default:true
      }
    },
    mounted(){
      setTimeout(()=>{
        this._setsliderWidth();
        this._initSlider()
        const scroll = new BScroll(this.$refs.slider,{
          scrollX: true,
          click: true
        })
      }, 20)
    },
    methods:{
      _setsliderWidth(){
        this.children=this.$refs.sliderGroup.children

        let width=0;
        let sliderWidth=this.$refs.slider.clientWidth;
        for (let i=0;i<this.children.length;i++){
          let child=this.children[i]
          addClass(child,'slider-item')

          child.style.width=sliderWidth+'px'
          this.children[i].children[0].style.width=sliderWidth+'px'
          width +=sliderWidth
        }

        if(this.loop){
          width +=sliderWidth*2
        }
        this.$refs.sliderGroup.style.width=width+'px'

      },
      _initSlider(){

      }
    }
  }

</script>

<style scoped lang="stylus">
  .slider
    overflow hidden
    .dots
      width 100px
    .slider-group
       overflow hidden
      .slider-item
      float left
</style>
