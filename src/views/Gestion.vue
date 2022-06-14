<template>
    <div>

     <v-container>
    <h1 class="d-flex justify-center pt-5" >  Tareas Pendientes</h1>    
    <ToDo/>
    </v-container>

     <v-container>
    <h1 class="d-flex justify-center pt-5" >  Pedidos por entregar</h1>    
    <Cards :cursos="cursos" />
    </v-container>

    </div>
    
  
</template>

<script>
import { mapState } from "vuex";
import Cards from "../components/Cards.vue";
import ToDo from "../components/ToDo.vue"

export default {
  name: "Gestion",
  
  components: {
    Cards,
    ToDo,
  },
  computed: {
    ...mapState(["cursos"]),
  },
  created: function () {
    this.$store.dispatch("traerCursos");
  },
};
</script>