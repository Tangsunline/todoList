<template>
   <section class="real-app">

      <input
         type="text"
         class="add-input"
         autofocus='autofocus'
         placeholder="需要做什么？"
         @keyup.enter="addTodo"
      >
      <Item 
        :todo="todo" 
        v-for="todo in filterTodos"
        :key="todo.id"
        @del="deleteTodo"/>
      <Tabs 
        :filter="filter" 
        :todos='todos' 
        @toggle="toggleFilter" 
        @clearAll="clearAll"/>
   </section>

</template>
<script>
   import Item from './item.vue'
   import Tabs from './tabs.vue'
   let id = 0;
   export default {
      components: {
         Item,
         Tabs
      },
      data() {
         return {
            todos:[],
            filter:'all'
         }
      },
      computed: {
          filterTodos() {
              if(this.filter === 'all') {
                  return this.todos;
              }
              const completed = this.filter === 'completed';
              return this.todos.filter(item => completed === item.completed)

          }
      },
      methods: {
         addTodo(e) {
             this.todos.unshift({
                 id:id++,
                 content:e.target.value.trim(),
                 completed: false,
             });
             e.target.value = '';
         },
         deleteTodo(id) {
             this.todos.splice(this.todos.findIndex( item => item.id === id),1)
         },
         toggleFilter(item) {
             this.filter = item;
         },
         clearAll() {
             this.todos = this.todos.filter( item => !item.completed)
         }
      }
   }
</script>
<style lang="stylus" scoped>
.real-app{
    width 600px
    margin :0px  auto
    box-shadow :0px 0px 5px #666
}
.add-input{
    positon:relative;
    margin 0px
    width 100%
    font-size 24px
    font-family  inherit 
    font-weight:inherit
    line-height 1.4rem
    border 0;
    outline none 
    color inherit
    padding 6px
    border 1px solid #999
    box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0)
    box-sizing border-box
    font-smoothing:antialiased;
    padding 16px 16px 16px 60px
    border none  
}
</style>

