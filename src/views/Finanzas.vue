<template>
  <div>
    <div class="d-flex justify-center pt-5">
      <h1>Finanzssaas</h1>
    </div>

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
     TotaVentas() {
      return this.cursos.map(item =>  parseInt(item.Costoprueba)).reduce((item,curr) => item + curr, 0)
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