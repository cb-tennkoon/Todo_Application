<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <alert class="alert primary">one</alert>
    <alert class="alert success">two</alert>
    <alert class="alert danger">three</alert>
    <div>
      <input type="text" v-model="lastName" placeholder="Your nice name ?">
      <p>
        Welcome,{{lastName}}
      </p>
    </div>
    <button-counter></button-counter>
    <button v-on:click="ClickMe">Click me</button>
    <input type="text" @keyup.enter="doSomething" placeholder="Please Write Your Code">
    <h3>Using Loop</h3>
    <ul>
      <li v-for="student in students" :key="student.id">{{student.name}}</li>
    </ul>
  </div>
</template>

<script>
import alert from './alert.vue';
export default {
  components: { alert },
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return {
      lastName:'Ali',
      students:[
        {id:1,name:'Ali'},
        {id:2,name:'Jan'},
        {id:3,name:'Willian'},
        {id:4,name:'Khan'}
      ],
    }
  },
  methods:{
    ClickMe: function(){
      console.log("You click on the button")
    },
    doSomething(){
      console.log("You click on the do something")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
