
<template>
  <div class="home">
    <HelloWorld :msg="this.$store.state.msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {apiUrl} from '../../../request/api'
export default {
  name: 'Home',
  components: {
    HelloWorld:()=>import('@/components/HelloWorld.vue')
  },
  created(){
this.demo()
  },
  methods:{
    demo(){
      let data ={
        Code:'all',
        AppId:'24830a2b-a6ae-462c-869d-b045ea2300ee'
      }
      apiUrl.demo(data).then(res => {
        
      })
    }
  }
}
</script>
