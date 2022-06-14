<template>

  <div>
      
      <h1 class="text-center pt-5"> Bienvenido </h1> 
      <h2 class="text-center">{{usuario}}</h2>
      <br>


  
      <v-container>
        <v-row>

          <v-col cols="12" xs="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <div class="text-center pt-5"> <i class="fa-solid fa-list-check fa-5x "> </i> </div>
              <v-card-title class="">Gestion de pedidos</v-card-title>        
              <v-card-text class="text--primary">
                <div>Obtene una vision general de tus pedidos.</div>
                <div>Los cambios no son reversibles.</div>
              </v-card-text>
              <v-card-actions>
                <v-list-item :to="{ name: 'Gestion' }">
                <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                <v-list-item-title > Ingresar</v-list-item-title>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" xs="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <div class="text-center pt-5"> <i class="fa-solid fa-chart-line fa-5x"></i>  </div>
              <v-card-title>Finanzas</v-card-title>
              <v-card-text class="text--primary">
                <div>Vizualiza los parametros de tu negocio.</div>
                <div>Los cambios no son reversibles.</div>
              </v-card-text>
              <v-card-actions>
                <v-list-item :to="{ name: 'Finanzas' }">
                <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                <v-list-item-title > Ingresar</v-list-item-title>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" xs="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <div class="text-center pt-5"> <i class="fa-solid fa-house-laptop fa-5x"></i> </div>
              <v-card-title>Administracion</v-card-title>
              <v-card-text class="text--primary">
                <div>Registra, edita y elimina pedidos.</div>
                <div>Los cambios no son reversibles.</div>
              </v-card-text>
              <v-card-actions>
                <v-list-item :to="{ name: 'Administracion' }" >
                <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                <v-list-item-title > Ingresar</v-list-item-title>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>

        
    </v-container>
   
    


    <br>
    

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  
  components: {
    
  },
  computed: {
    ...mapState(["cursos","usuario"]),
  },
  created: function () {
    this.$store.dispatch("traerCursos");
  },
};
</script>
