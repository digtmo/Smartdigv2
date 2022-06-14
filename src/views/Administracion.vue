<template>
  <div>
    <br>
    <div class="d-flex justify-center pt-5">
      <h1>Administracion</h1>
    </div>
    <Table :cursos="cursos" />
    <div>
      <Alerts/>
      
    <h2 class="d-flex justify-center pt-5">ZONA EN DESARROLLO</h2>
    
      <br>
    </div>
    <TableDia :cursos="cursos" />

  </div>
</template>

<script>
import Table from "../components/Table.vue";
import Alerts from "../components/Alerts.vue";
import TableDia from "../components/TableDia.vue";

import { mapState } from "vuex";
export default {
  name: "Administracion",
  components: {
    Table,
    TableDia,
    Alerts,
  },
  
  computed: {
    ...mapState(["cursos"]),
    traerCursos() {
      return this.cursos;
    },
  },

  
};
</script>



<style>



.fade-enter-active, 
.fade-leave-active {
  transition: opacity 0.5s;/*queda mas bonito con .5 que con .1*/
}
.fade-enter, 
.fade-leave-to{
  opacity:0;
}

</style>