<template>
  <b-container fluid>
    <!-- Comienza el navbar -->
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="2">
        <sidebar/>
      </b-col>

      <b-col>
        
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script >
import Navbar from './components/navigation/Navbar.vue';
import Sidebar from './components/navigation/Sidebar.vue';
export default{
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  }
}
</script>

