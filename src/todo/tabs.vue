<template>
   <div class="helper">
      <span class="left"> {{unFinshedTodoLength}} ltems left</span>
      <span class="tabs">
         <span v-for="item in states" :key='item' :class="[item ,filter === item ? 'actived': '']" 
         @click="toggleFilter(item)">
            {{item}}
         </span>
      </span>
      <span class="clear" @click="clearAllCompleted">
         clear completed
      </span>
   </div>

</template>
<script>
   export default {
      props: {
         filter: {
            type: String,
            required: true,
         },
         todos: {
             type: Array,
            required: true,
         }
      },
      data() {
         return {
            states:['all','active','completed']
         }
      },
      computed: {
          unFinshedTodoLength() {
              return this.todos.filter( item => !item.completed).length;
          }
      },
      methods: {
         toggleFilter(item) {
             this.$emit('toggle',item)
         },
         clearAllCompleted() {
             this.$emit('clearAll')
         }
      }
   }
</script>
<style lang="stylus" scoped>
.helper{
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing:antialiased;
}
.left,.clear,.tabs{
    padding 0px 10px
    box-sizing border-box
}
.left,.clear{
    width 150px
}
.left{
    text-align left 
}
.clear {
    text-align:right
    cursor pointer
}
.tabs{
    width 200px
    display flex
    justify-content space-around
    *{
        display inline-block
        padding 0px 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)
        &.actived{
            border-color rgba(175,47,47,0.4) 
            border-radius 5px
        }
    }
}
</style>

