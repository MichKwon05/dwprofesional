<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div>Esto es main</div>
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '',
            to: 'Inicio'
          },
          {
            text: 'Main',
            href: '#',
            to: 'Main'

          },
          {
            text: 'Tecero',
            href: '#',
            to: 'Tercero'

          }
 
        ]
      }
    }
  }
</script>

<style>
</style>