<script>
import Navbar from "./components/navigation/Navbar.vue"

export default{

  components:{
    'navbar': Navbar,
  }
}
</script>

<template>
  <div fluid>
    <div class="row">
      <div class="col">
        <navbar/>
      </div>
    </div>

    <div class="row">
      <div class="col">
        
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
