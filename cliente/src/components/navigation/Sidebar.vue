<template>
    <div class="sidebar">
        <b-nav vertical class="pt-5">
            <b-nav-item class="nav-link">
                <b-link :to="{ name: 'inicio' }">
                    Opcion 1
                </b-link>
            </b-nav-item>
            <b-nav-item class="nav-link">
                <b-link :to="{ name: 'main' }">
                    Opcion 2
                </b-link>
            </b-nav-item>
            <b-nav-item class="nav-link">
                <b-link :to="{ name: 'tercero' }">
                    Opcion 3
                </b-link>
            </b-nav-item>
            <b-nav-item class="nav-link">
                <b-link :to="{ name: 'reserva' }">
                    Reservas de vuelo
                </b-link>
            </b-nav-item>
            <b-nav-item class="nav-link">
                <b-link :to="{ name: 'disponible' }">
                    Vuelos disponibles
                </b-link>
            </b-nav-item>
            <b-nav-item class="nav-link">
                <b-link :to="{ name: 'cancelado ' }">
                    Vuelos cancelados
                </b-link>
            </b-nav-item>
        </b-nav>
    </div>
</template>

<style>
.sidebar {
    background-color: pink;
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    padding: 20px;

    .nav-link {
        width: 100%;
        display: block;
        text-align: left;
        padding: 8px;
        /* Puedes ajustar el espaciado interno según tus preferencias */
        margin-bottom: 10px;
        /* Puedes ajustar el espaciado entre los elementos según tus preferencias */
    }

    .nav-link a {
        color: #fff;
        /* Puedes ajustar el color del texto según tus preferencias */
        text-decoration: none;
    }

    .nav-link:hover {
        background-color: #3498db;
        /* Cambia el color de fondo al pasar el ratón sobre el enlace según tus preferencias */
    }
}</style>