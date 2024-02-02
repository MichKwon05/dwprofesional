<template>
    <b-container>
        <b-row>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-row>
        <b-row>
            <b-col class="col-md-7">
                <!--
                    private @Id @GeneratedValue Long id;
                    private String brand, model, serie;
                    private int year;
                -->
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                    <!--Cada campo es requerido-->
                    <!-- Marca -->
                    <b-form-group class="mb-4" id="brand" label="Marca:" label-for="input-brand">
                        <b-form-input id="input-brand" v-model="form.brand" placeholder="Marca alfanumérica"
                            required></b-form-input>
                    </b-form-group>

                    <!--Modelo -->
                    <b-form-group class="mb-4" id="model" label="Modelo" label-for="input-model">
                        <b-form-input id="input-model" v-model="form.model" type="" placeholder="Modelo del vehículo"
                            required></b-form-input>
                    </b-form-group>

                    <!--Serie -->
                    <b-form-group class="mb-4" id="serie" label="Serie" label-for="input-serie">
                        <b-form-input id="input-model" v-model="form.serie" type="" placeholder="Serie del vehículo"
                            required></b-form-input>
                    </b-form-group>

                    <!--Year -->
                    <b-form-group class="mb-4" id="year" label="Año del vehícul:" label-for="input-year">
                        <b-form-input id="input-year" v-model="form.year" placeholder="Año del vehículo" required
                            pattern="[0-9]{4}" title="El número debe contener 4 dígitos"></b-form-input>
                    </b-form-group>

                </b-form>
            </b-col>
            <b-col class="col-md-3">
                <b-button type="submit" variant="primary" onclick="validateForm()" class="mb-2">Enviar</b-button>
                <b-button type="reset" variant="danger" onclick="onReset()" class="mb-2">Resetear</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
  
<script>
export default {
    data() {
        return {
            show: true,
            form: {
                brand: '',
                model: '',
                serie: '',
                year: ''
            },
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
        };
    },
    methods: {
        onSubmit() {
            if (this.validateForm()) {
                console.log('Formulario válido. Enviar datos...');
                alert('Válido')
            }
        },
        onReset() {
            this.$refs['formulario'].reset();
        },
        validateForm() {
            ///sin espacios
            if (!this.form.brand.trim() || !this.form.model.trim() || !this.form.serie.trim() ||
                !this.form.year) {
                ///alert para mostrar lo faltante
                alert('Todos los campos son obligatorios.');
                return false;
            } else {
                this.onSubmit();
            }
        },
    },

};
</script>