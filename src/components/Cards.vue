<template>
  <v-container>
    <v-row width="400px">
      <v-col v-for="(curso, index) in cursos" :key="index" cols="12" xs="12" sm="6" md="4" lg="3" >
        <template>
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              N° {{curso.Np}}
            </v-card-title>

            <v-card-subtitle>
              Envía: {{curso.Envia}} 
              <br>
              Telefono: {{curso.Whatsapp}}
              <br>
              Recibe: {{curso.Recibe}}
              <br>
              Dirección: {{curso.Direccion}}  
              <br>
              Horario de entrega: {{curso.Horariodeentrega}} 
            </v-card-subtitle>    
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapActions } from 'vuex';
import { mapState } from "vuex";

export default {
  name: "Cards",
  props: {
    cursos: Array
  },
  data: () => ({
    editedItem:{
      estado:false,
    },
    valid:true,
  }),
  computed: {
    ...mapState(["cursos"]),
    retornar() {
      return this.editedItem;
    },
  },
  methods: {
    ...mapActions(['traerCursos'])
  
  
 
  
  },

  
  
};
</script>
<style scoped>
img {
  padding-top: 20px;
  width: 200px;
  height: 200px;
}

.wrapper_img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>