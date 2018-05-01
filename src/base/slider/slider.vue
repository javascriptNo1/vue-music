<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
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
      }
    },
    mounted(){
      setTimeout(()=>{
        this._setsliderWidth();
        this._initSlider()
      }, 20)
    },
    methods:{
      _setsliderWidth(){
        this.children=this.$refs.sliderGroup.children

        let width=0;
        let sliderWidth=this.$refs.slider.clientWidth;
        console.log(this.children)
        for (let i=0;i<this.children.length;i++){
          let child=this.children[i]
          console.log()
          addClass(child,'slider-item')

          child.style.width=sliderWidth+'px'
          this.children[i].children[i].style.width=sliderWidth+'px'
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
    width 100%
    .slider-group
       overflow hidden
       width 100%
      .slider-item
      float left
</style>
