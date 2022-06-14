<template>
<div>
  <v-container>
    <h1 class="mt-10">Registro de Usuario</h1>
    <div>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" requiredc></v-text-field>
        <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Password" required type="password"></v-text-field>
        <v-container class="mt-5 d-flex justify-center align-content-center flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
          <v-btn color="success" class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"  @click="validate">
            Registrar
          </v-btn>
     
          <v-btn color="warning" class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"  @click="nuevoUsuario">
            Crear nuevo usuario
          </v-btn>
        </v-container>
      </v-form>
      
    </div>
  </v-container>
</div>
</template>

<script>

  export default {
    name: 'Registro',

    components: {

    },
  }
</script>

