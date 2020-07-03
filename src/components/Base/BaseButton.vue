<template>
  <button class="basic-button" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">
.basic-button
    display inline-block
    background-color #eee
    border-radius 5px
    font-size 14px
    line-height 20px
    padding 5px 10px
    &:hover
        background-color #ddd
</style>
