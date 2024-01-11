<template>
  <div>
    <!-- Sidebar sin Bootstrap-Vue -->
    <div id="sidebar">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/acerca">Acerca de</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </div>

    <!-- Navbar utilizando Bootstrap-Vue -->
    <b-navbar toggleable="md" type="dark" variant="dark" id="custom-navbar">
      <b-navbar-brand to="/">Mi App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/acerca">Acerca de</b-nav-item>
          <b-nav-item to="/contacto">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Contenido de la página -->
    <router-view></router-view>
  </div>
</template>

<style>
#sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  padding-top: 20px;
}

#sidebar ul {
  list-style-type: none;
  padding: 0;
}

#sidebar li {
  padding: 10px;
  text-align: center;
}

#sidebar a {
  color: white;
  text-decoration: none;
}

#custom-navbar {
  margin-left: 250px; /* Ajusta este valor según el ancho del Sidebar */
}
</style>
