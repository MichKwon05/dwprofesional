<template>
    <b-container>
        <b-row>
            <b-row>
                <b-breadcrumb :items="itemsBread"></b-breadcrumb>
            </b-row>
        </b-row>
        <b-row>
            <b-table id="my-table" :items="vehiculo" :per-page="perPage" :current-page="currentPage" :fields="fields"
                :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small>
            </b-table>
            <div class="overflow-auto">
                <b-pagination v-model="currentPage" :total-rows="vehiculo.length" :per-page="perPage"
                    aria-controls="my-table"></b-pagination>

                <p class="mt-3">Current Page: {{ currentPage }}</p>
            </div>
        </b-row>
    </b-container>
</template>
  
<script>

import vehiculoService from '../service/Vehiculo';

export default {
    data() {
        /*
        private @Id @GeneratedValue Long id;
        private String brand, model, serie;
        private int year;
        */
        return {
            sortBy: "name",
            sortDesc: false,
            perPage: 3,
            currentPage: 1,
            vehiculo: [],
            fields: [
                { key: "brand", label: "Marca", sortable: true },
                { key: "model", label: "Modelo", sortable: true },
                { key: "serie", label: "Serie", sortable: true },
                { key: "year", label: "Year", sortable: true }
            ],
            itemsBread: [
                ///{ text: 'Reserva', href: '', to: 'Reserva' },
                {
                    text: 'Inicio',
                    href: '#',
                    to: 'Inicio'
                },
                {
                    text: 'Formulario',
                    href: '#',
                    to: 'Formulario'
                },
                {
                    text: 'Pagination',
                    href: '#',
                    to: 'Pagination'
                },
                {
                    text: 'Example',
                    active: true
                }
            ]
        }
    },
    mounted() {
        this.obtenerVehiculo();
    },
    methods: {
        async obtenerVehiculo() {
            try {
                const data = await vehiculoService.obtenerVehiculo(
                    parseInt(this.currentPage),
                    parseInt(this.perPage),
                    this.sortBy
                );
                this.vehiculo = data.content;
            } catch (error) {
                console.error(error);
                // Manejar errores (puedes mostrar un mensaje de error al usuario, por ejemplo)
            }
        },
    },


}
</script>