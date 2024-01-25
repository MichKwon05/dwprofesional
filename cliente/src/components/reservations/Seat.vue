<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Asientos</h1>
        <div>
            <b-table hover :items="itemsT"></b-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { text: 'Reserva', href: '', to: 'Reserva' },
                { text: 'Asientos', href: '#', to: 'Asientos' },
                { text: 'Inicio', href: '#', to: 'Inicio' },
            ],
            itemsT: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson', _rowVariant: 'danger' },
                { age: 40, first_name: 'Thor', last_name: 'MacDonald', _cellVariants: { age: 'info', first_name: 'warning' } },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
            ],
        };
    },
    created() {
        // Llama al método datatable aquí o en el hook mounted
        this.datatable();
    },
    methods: {
        datatable() {
            // El código del método datatable
        },
    },
};
</script>
  