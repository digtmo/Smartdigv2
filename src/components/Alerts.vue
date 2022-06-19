<template>
  <v-container>
    <div class="mt-8">

        <v-alert type="success">
           Total de ventas:
        <strong>${{ TotaVentas }}</strong> 
        </v-alert>

        <v-alert type="info">
          Total de pedidos:
          <strong>{{ TotalDePedidos }}</strong> 
        </v-alert>

         <v-alert type="error">
           Pedidos sin iniciar:
          <strong>{{ PedidosSinIniciar }}</strong> 
        </v-alert>

        <v-alert type="warning">
          Pedidos con retiro:
          <strong>{{ PedidosConRetiro }}</strong> 
        </v-alert>

    

        

      <v-btn color="error" text @click="PedidosDelDia">
                  BOTON DE PRUEBA Alerts
      </v-btn>

      <h3>Fecha de hoy: {{hoy}}</h3>

      <h3>Numero de mes actual: {{mes}}</h3>

    
      
    </div>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';
import { mapState } from "vuex";
export default {
  name: "Table",
  props: {
    cursos: Array,
  },

  data: () => ({
    PedidosDelDiaArray:[],
  }),

  computed: {
    TotaVentas() {
      return this.cursos.map(item =>  parseInt(item.Costoprueba)).reduce((item,curr) => item + curr, 0)
    },
    PedidosConRetiro() {
      return  this.cursos.filter(item => item.Retiro).length
    },
    PedidosSinIniciar() {
      return this.TotalDePedidos - this.PedidosIniciados
    },
    PedidosIniciados() {
      return this.cursos.filter(item => item.Estado).length
    },
    TotalDePedidos() {
      return this.cursos.length
    },
    MostrarPedidos(){ 
      return this.cursos
    },
 

    PedidosDelMes(){
      return this.cursos.filter(item => item.Fechadeenvio.getMonth === 6)
    },

   

    PruebaFiltroMes() {
      return this.cursos.filter(item => item.Fechadeenvio === "2022-05-17").map(item =>  parseInt(item.Costoprueba)).reduce((item,curr) => item + curr, 0)
    }, // Filtra la fecha de envio indicada (escrita manual). luego imprime y suma todos los costos asociados a esa fecha de envio.. SE PUEDE QUITAR REDUCE Y DEJAR UN LENGTH PARA CONTAR

    BuscarPedido(){
      const CursosIndex = this.cursos.findIndex(element => this.cursos.envia === element)
      console.log(CursosIndex)
      return this.cursos[CursosIndex] 
    },
       
    hoy(){
      const fecha = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10) // Se obtiene la fecha de hoy.
      return fecha
    },

    año(){
      const fechita = new Date
      return  fechita.getFullYear()
    },

    mes(){
      const fechita = new Date
      return fechita.getMonth() +1 
    },
      
    dia(){
      const fechita = new Date
      return fechita.getDate()   
    },

    Mes2(){
      let mes = this.cursos[0].Fechadeenvio
      return mes
    },
    
    ...mapState(["cursos"]),
    retornar() {
      return this.editedItem;
    },

    Prueba3(){
      let meses = this.cursos.filter(item => item.Fechadeenvio)
      return meses
    },

  },
   methods: {
    ...mapActions(['traerCursos']),
   
   MetodoPedidosDelDia() {
       const hoyes = this.cursos.filter(item => item.Fechadeenvio === this.hoy)
       console.log(hoyes)
       this.PedidosDelDiaArray.push(hoyes)
       console.log("Acá pedidos del día: ",this.PedidosDelDiaArray)
    },
    

  },
};
</script>
