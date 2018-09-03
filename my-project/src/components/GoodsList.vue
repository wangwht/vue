<template>
<div id="goodslist">
  <h1>路由页面</h1>

<button @click="toShow">路由切换</button>
<Child :message="parentMsg"></Child> 

       <div class="todoList">
           <p v-for="todo in todoList" class="todoItem">
            <span class="radio"></span><span :class="{ 'isDone': todo.isDone }">{{todo.text}}</span>
           </p>
        </div>



   <transition name="mybox">
        <div class="box"  v-show="boxshow"></div>
    </transition>
	<button @click="togglebox">按钮</button>
</div>
</template>


<script>

import Child from './Child'  //引入HelloWorld组件
  export default {
 	components: {
		Child
  },

  computed:{
          todoList: function () {
              let selected = this.$store.state.todo.selected;
              if(selected == '0'){
                return this.$store.state.todo.todoList;
              }else if(selected == '1'){
                return this.$store.getters.filterDoned;  //根据不同类型的选择，返回不同todolist
              }else if(selected == '2'){
                return this.$store.getters.filterNoDoned;
              }
          },
          selected: function () {
             return this.$store.state.todo.selected;
          },
  },
  data () {
    return {
 		parentMsg: 'a message from parent',  //在data中定义需要传入的值
 		boxshow:false
    }
  },
	mounted(){
		
		//console.log(this.$route.params)
	},
	methods:{
		toShow(){
			var arr = ["first","second","third"];
			var index = arr.indexOf(this.which_to_show);
			if(index<2){
				this.which_to_show = arr[index+1];
			}else{
				this.which_to_show = arr[0];
			}
			console.log(this.which_to_show);
		},
		togglebox(){
			this.boxshow = !this.boxshow;
		}
	}

  }




</script>
<style>
       .box{
            height:500px;
            background-color:black;  
             overflow: hidden;                       
        }
        .mybox-leave-active,.mybox-enter-active{
            transition:  all 1s ease; 
        }
        .mybox-leave-active,.mybox-enter{
        	opacity: 0 !important;
            /*height:0px !important;*/
        }
        .mybox-leave,.mybox-enter-active{
            opacity: 1;
        }
         .todoList{
    width: 290px;
    min-height: 140px;
    margin:40px auto;
    padding-left: 5px;
    padding-top: 5px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .todoItem{
    width: 95%;
    height: 20px;
    border-bottom: 1px solid #b8b8bf;
    padding-bottom: 5px;
  }
  .radio{
    display: inline-block;
    width: 15px;
    height: 15px;
    float: left;
    border: 1px solid #979797;
    margin-top: 2px;
    margin-right: 5px;
    border-radius: 8px;
  }
  .todoItem:hover{
    color:black;
  }
  .radio:hover{
    border:1px solid #141414;
  }
  .isDone{
    text-decoration: line-through;
  }

  .select-type{
    background-color: #42b983;
    color:white;

  }
  .select{
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
  }

  .select-section{
    width: 300px;
    height: 40px;
    margin: 0 auto;
    margin-top : -40px;
  }
</style>
