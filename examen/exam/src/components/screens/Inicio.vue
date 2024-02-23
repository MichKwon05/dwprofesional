<template>
    <b-container>
        <b-row>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-row>
        <b-row>
            Bienvenido
        </b-row>
    </b-container>
</template>

<script>

export default {
    data() {
        return {
            items: [
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

    }
}
</script>

<style></style>