<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Disponibles</h1>
            <div><b-table hover :items="itemsT"></b-table></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Disponible',
                    href: '',
                    to: 'Disponible'
                },
                {
                    text: 'Lineas',
                    href: '#',
                    to: 'Lineas'
                },
                {
                    text: 'Inicio',
                    href: '#',
                    to: 'Inicio'
                },
            ],
            itemsT: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson', _rowVariant: 'danger' },
                { age: 40, first_name: 'Thor', last_name: 'MacDonald', _cellVariants: { age: 'info', first_name: 'warning' } },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
            ],
        }
    }
}
</script>
  
<style></style>