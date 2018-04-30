<template>
  <ul>
    <router-link tag="li" to="/recommend">推荐</router-link>
    <router-link tag="li" to="/rank">歌手排行</router-link>
    <router-link tag="li" to="/singer">歌手详情</router-link>
    <router-link tag="li" to="/search">搜索</router-link>
  </ul>
</template>

<script>

</script>

<style scoped lang="stylus">
  .router-link-active
    color #ff0
    border-bottom 2px solid #ff0
  ul
    list-style none
    display flex
    padding 0
    margin-bottom 10px
    li
      flex-grow:1
      margin 0 20px 0 20px



</style>
