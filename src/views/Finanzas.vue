<template>
  <div>
    <div class="d-flex justify-center pt-5">
      <h1>Finanzas</h1>
    </div>


    <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
            <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://img.freepik.com/vector-gratis/impulsar-ilustracion-concepto-abstracto-ventas_335657-1833.jpg?w=2000"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
              $ {{TotalVentas}}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h3 class="display-1 font-weight-light green--text mb-2">Total de ventas</h3>
            <div class="font-weight-light title mb-2">
              Total de ventas del mes.
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
        </v-card>
      </v-col>


      <v-col
          cols="12"
        sm="12"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
           <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://img.freepik.com/vector-gratis/impulsar-ilustracion-concepto-abstracto-ventas_335657-1833.jpg?w=2000"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
              $ {{TotalCostos}}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h3 class="display-1 font-weight-light green--text mb-2">Total de Costos</h3>
            <div class="font-weight-light title mb-2">
              Total de costos del mes.
            </div>
            <div class="font-weight-light title mb-2">
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
        </v-card>
        


      </v-col>
        <v-col
          cols="12"
        sm="12"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://img.freepik.com/vector-gratis/impulsar-ilustracion-concepto-abstracto-ventas_335657-1833.jpg?w=2000"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
              $ {{TotalVentas - TotalCostos}}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h3 class="display-1 font-weight-light green--text mb-2">Utilidad</h3>
            <div class="font-weight-light title mb-2">
              Utilidad calculada del mes.
            </div>
            <div class="font-weight-light title mb-2">
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>


  <v-container>
    <div>
      <h3 class="d-flex justify-center pt-5">Ventas por producto </h3>
      <canvas id="myChart" width="300" height="300"></canvas>
    </div>
    <div>
      <h3 class="d-flex justify-center pt-5">Porcentaje de utilidsad </h3>
      <canvas id="myChart2" width="300" height="300"></canvas>
      <h3>Producto Fecha {{ProductoFecha}}</h3>
    </div>
   
  </v-container>

 
    
  </div>
</template>

<script>

import Chart from 'chart.js/auto';
import { mapState } from "vuex";
import { mapActions } from 'vuex';


export default {
  name: "Finanzas",
  
  mounted(){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    ProductoFecha:[],
        labels: ["Escalonado de Rosas","Matilda","Ramo Premium Tulipanes","Ramo abierto",
                "Arreglo Ross","Ajuar Florido","Ramo circulares",
                "Ramo Premium","Caja Rose","Caja Heart","Rosas en Altura",
                "Caja Freedom & Gold","Caja Whisky","Ramo Corazón","Caja Sidra"],
        datasets: [{
            label: '',
            data: [this.ContadorProducto("Escalonado de Rosas"), 
                    this.ContadorProducto("Matilda"), 
                    this.ContadorProducto("Ramo Premium Tulipanes"), 
                    this.ContadorProducto("Ramo abierto"),
                    this.ContadorProducto("Arreglo Ross"),
                    this.ContadorProducto("Ajuar Florido"), 
                    this.ContadorProducto("Ramo circulares"),
                    this.ContadorProducto("Ramo Premium"), 
                    this.ContadorProducto("Caja Rose"),
                    this.ContadorProducto("Caja Heart"),
                    this.ContadorProducto("Rosas en Altura"), 
                    this.ContadorProducto("Caja Freedom & Gold"),
                    this.ContadorProducto("Caja Whisky"),
                    this.ContadorProducto("Ramo Corazón"), 
                    this.ContadorProducto("Caja Sidra"),
                  ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
  myChart

  

    const ctx2 = document.getElementById('myChart2');
    const data = {
    labels: ["Pedidos Sin Iniciar","Pedidos Finalizados"],
      datasets: [{
        label: 'Productos con mayor % de utilidad',
        data: [this.PedidosIniciados, this.PedidosSinIniciar],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }

  const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: data,
  })

  
  myChart2
  },
  

  watch(){
 
  },
  

  computed: {
    TotalVentas() {
      return this.cursos.map(item =>  parseInt(item.PrecioProducto1)).reduce((item,curr) => item + curr, 0)
    },
    TotalCostos() {
      return this.cursos.map(item =>  parseInt(item.CostoProducto1)).reduce((item,curr) => item + curr, 0)
    },
   PedidoConRetiro() {
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

    ProductoFecha() {
      return this.cursos.map(item => item.Fecha) // Función que busque los pedidos que cumplan con el mes a escoger 
    },

    hoy(){
      const fecha = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10) // Se obtiene la fecha de hoy.
      return fecha
    },

    TotalVentasDelDia() {
      return this.cursos.filter(item => item.Fechadeenvio === this.hoy).map(item =>  parseInt(item.Costoprueba)).reduce((item,curr) => item + curr, 0)
    },


     

    ...mapState(["cursos"]),
    
  },
  methods: {
    ...mapActions(['traerCursos']),
     ContadorProducto(x) {
      return this.cursos.map(item => item.Producto1).filter(item => item === x).length // busca el parametro recibido en el item "Producto1", luego filtra a los que tengan el mismo
      },                                                                                  // parametro de nombre, finalmente cuenta la cantidad de iguales.
   
     
  }
  
};
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>