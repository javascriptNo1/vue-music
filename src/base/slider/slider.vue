<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div v-if="showDots" class="dots">
       <span class="dot" :class="{activer :currentPageIndex===index}" v-for="(item,index) in dots"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {addClass} from 'assets/js/dom'

  export default {
    name: 'slider',
    data(){
      return{
        dots:[],
        currentPageIndex:0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      showDots: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      setTimeout(() => {
        this._setsliderWidth();
        this._initDots()
        this._initSlider()

        if(this.autoPlay){
          this._play()
        }
      }, 20)
      window.addEventListener('resize',()=>{
        if(!this.slider){
          return
        }
        this._setsliderWidth(true)
        this.slider.refresh()
      })
    },
    methods: {
      _setsliderWidth(isReload) {
        this.children = this.$refs.sliderGroup.children;

        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i];
          addClass(child, 'slider-item');
          child.style.width = sliderWidth + 'px';
          this.children[i].children[0].style.width = sliderWidth + 'px';
          width += sliderWidth
        }
        if (this.loop && !isReload) {
          width += sliderWidth * 2
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initDots(){
        this.dots=new Array(this.children.length)
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap:{
            loop:this.loop,
            threshold:0.3,
            speed:400
          }
        })
        this.slider.on('scrollEnd',()=>{
          let pageIndex=this.slider.getCurrentPage().pageX;

          this.currentPageIndex=pageIndex;

          if(this.autoPlay){
            clearTimeout(this.timer);
            this._play()
          }
        })
      },
      _play(){
        let PageIndex=this.currentPageIndex+1;
        // if(this.loop){
        //   PageIndex+=1;
        // }
        this.timer=setTimeout(()=>{
          this.slider.next()(PageIndex,0,400);
        },this.interval)
      }
    }
  }

</script>

<style scoped lang="stylus">
  .slider
    overflow hidden
    position: relative
    .slider-group
      overflow hidden
    .slider-item
      float left
    .dots
      width 100%
      position absolute
      bottom 8px
      display flex
      flex-direction row
      justify-content center
      margin 0 auto
      .dot
        margin 0px 10px
        width 10px
        height 10px
        border-radius 10px
        background-color #666
        &.activer
          background-color #ff0

</style>
