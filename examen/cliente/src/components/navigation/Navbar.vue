<template>
    <div class="custom-navbar">
        <div class="navbar-brand"> L O G O</div>

        <div class="nav-links">
            <router-link :to="{ name: 'inicio' }" class="nav-link">Inicio</router-link>
            <router-link :to="{ name: 'formulario'}" class="nav-link">Formulario</router-link>
            <router-link :to="{ name: 'paginacion'}" class="nav-link">Paginacion</router-link>
            <div class="nav-link disabled">Disabled</div>
        </div>
    </div>
</template>
  
<style>
.custom-navbar {
    background-color: #3498db;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.navbar-brand {
    font-size: 1.5rem;
}

.nav-links {
    display: flex;
}

.nav-link {
    margin-right: 15px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.nav-link.disabled {
    color: #ccc;
    cursor: not-allowed;
}
</style>
  