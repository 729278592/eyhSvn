<template>
  <validator name="validation">
      <div class="spinner right clearfix">
        <button class="btnReduce left" @click="reduce()">-</button>
        <input class="numInput left" type="number" @keyup="add($event)"  @invalid="isNumInvalid" initial="off" detect-change="off" id="isNumber" v-validate:isNumber="['isNum']" value={{numbers}} />
        <button class="btnPlus left" @click="plus()">+</button>
      </div>
  </validator>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<script>
   import Toast from './toast.vue';
   export default {
   components: {
       Toast
     },
    data () {
      return {
        numbers:1,
        isNum:"",
        toastshow:false,
        toasttext:""
      }
    },
     methods:{
        reduce:function(){
          this.numbers -= 1
          if(this.numbers<1){
            this.numbers=1
            this.$set('toasttext','至少买一件嘛')
            this.$set('toastshow',true)
          }
        },
        plus:function(){
          this.numbers += 1

        },
        isNumInvalid(){
          this.$set('toasttext','为数字哦')
          this.$set('toastshow',true)
          this.numbers = 1
        },
        add(e){
          if(!isNaN(event.currentTarget.value)){
            this.numbers = e.currentTarget.value
          }else{
            this.numbers = 1
          }
        }
     }
   }
</script>
