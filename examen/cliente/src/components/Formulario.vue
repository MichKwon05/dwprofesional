<template>
    <b-container>
        <b-row>
            <b-col class="col-md-7">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                    <!-- Nombre completo -->
                    <b-form-group class="mb-4" id="input-group-name" label="Nombre completo:" label-for="input-name">
                        <b-row>
                            <b-col>
                                <b-form-input id="input-name" v-model="form.nombre" placeholder="Nombre"
                                    required></b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="form.apellidoPaterno" placeholder="Apellido paterno"
                                    required></b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="form.apellidoMaterno" placeholder="Apellido materno"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-form-group>

                    <!-- Dirección -->
                    <b-form-group class="mb-4" id="input-group-direccion" label="Dirección:" label-for="input-direccion">
                        <b-form-input id="input-direccion" v-model="form.direccion" placeholder="Calle, número"
                            required></b-form-input>
                    </b-form-group>

                    <!-- Fecha de nacimiento -->
                    <b-form-group class="mb-4" id="input-group-fecha-nacimiento" label="Fecha de nacimiento:"
                        label-for="input-fecha-nacimiento">
                        <b-form-input id="input-fecha-nacimiento" v-model="form.fechaNacimiento" type="date"
                            required></b-form-input>
                    </b-form-group>

                    <!-- Correo electrónico -->
                    <b-form-group class="mb-4" id="input-group-email" label="Correo electrónico:" label-for="input-email">
                        <b-form-input id="input-email" v-model="form.email" type="email" placeholder="Correo electrónico"
                            required></b-form-input>
                    </b-form-group>

                    <!-- Número telefónico -->
                    <b-form-group class="mb-4" id="input-group-telefono" label="Número telefónico:"
                        label-for="input-telefono">
                        <b-form-input id="input-telefono" v-model="form.telefono" placeholder="Número telefónico" required
                            pattern="[0-9]{10}" title="El número debe contener 10 dígitos numéricos"></b-form-input>
                    </b-form-group>

                </b-form>
            </b-col>

            <b-col class="col-md-3">
                <!-- Fotografía (PNG) -->
                <b-form-group class="mb-4" id="input-group-foto" label="Fotografía (PNG):" label-for="input-foto">
                    <b-form-file id="input-foto" v-model="form.foto" accept="image/png" required></b-form-file>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mb-2">Enviar</b-button>
                <b-button type="reset" variant="danger" class="mb-2">Resetear</b-button>
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
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                direccion: '',
                fechaNacimiento: '',
                email: '',
                telefono: '',
                foto: null,
            },
        };
    },
    methods: {
        onSubmit() {
            // Validar los campos antes de enviar el formulario
            if (this.validateForm()) {
                // Realizar acciones al enviar el formulario
                console.log('Formulario válido. Enviar datos...');
            }
        },
        onReset() {
            this.$refs['formulario'].reset();
        },
        validateForm() {
            // Verificar cada campo y mostrar alerta si está vacío
            if (!this.form.nombre.trim() || !this.form.apellidoPaterno.trim() || !this.form.direccion.trim() ||
                !this.form.fechaNacimiento || !this.form.email.trim() || !this.form.telefono.trim() || !this.form.foto) {
                alert('Todos los campos son obligatorios.');
                return false;
            }

            // Validar tamaño de la fotografía
            const fileSizeInMB = this.form.foto.size / (1024 * 1024);
            if (fileSizeInMB > 3) {
                alert('La fotografía debe tener un tamaño menor a 3 MB.');
                return false;
            }
            return true;
        },

    },
};
</script>