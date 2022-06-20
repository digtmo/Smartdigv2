<template>
  <v-container>
    <v-data-table  :headers="headers" :items="PedidosDelDiaArray[0]" sort-by="Np" class="elevation-3"   >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Pedidos Por Día</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            
            <v-card>
              <v-card-title>
               
              </v-card-title>

             <v-card-text>
                <v-container>
                  <v-row>    
                  <v-col cols="12" sm="12" md="12" >
                    <h2 class="text-center font-weight-bold">Datos del pedido</h2>
                  </v-col>
                    
                     <v-col  cols="6" md="12">
                      <v-text-field
                        v-model="editedItem.Np"
                        label="N° de pedido/Automatico"
                      ></v-text-field>
                    </v-col> 
                    
                    <v-col cols="12" sm="12" >
                     <v-autocomplete ref="country" v-model="editedItem.Producto1" 
                     :items="Productos1" label="Producto" 
                     placeholder="Select..." required  item-text="name"
                      item-value="name" >
                     </v-autocomplete>                       
                    </v-col>
                                  
                    <v-col cols="12" sm="12" >
                     <v-autocomplete ref="country" v-model="editedItem.Producto2" 
                     :items="Productos2" label="Producto Adicional" 
                     placeholder="Select..." required >
                     </v-autocomplete>                       
                    </v-col>

                      <v-col cols="12" sm="12" md="12" >
                    <h2 class="text-center font-weight-bold">Datos de envío</h2>
                  </v-col>

                     <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.Whatsapp"
                        label="Whatsapp"
                      ></v-text-field>
                    </v-col> 

                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.Recibe"
                        label="Recibe"
                      ></v-text-field>
                    </v-col>


                    <v-col cols="12" md="6">
                      <v-text-field
                         v-model="editedItem.Telefono" 
                        label="Telefono"
                      ></v-text-field>
                    </v-col> 


                     <v-col  cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.Envia"
                        label="Envia"
                      ></v-text-field>
                    </v-col> 

                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.Direccion"
                        label="Direccion"
                      ></v-text-field>
                    </v-col> 

                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        rows="2"
                        v-model="editedItem.Mensaje"
                        label="Mensaje"
                      ></v-textarea>
                    </v-col> 

                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        rows="2"
                        v-model="editedItem.Observacion"
                        label="Observacion"
                      ></v-textarea>
                    </v-col>  

                    <v-col cols="12" sm="12" md="12" justify="center">
                      <h3>Fecha de Envío</h3>
                      <br>
                      <v-date-picker color="green lighten-1" v-model="editedItem.Fechadeenvio"></v-date-picker>
                    </v-col>  
                                            
                    <v-col cols="6" sm="12" >
                     <v-autocomplete ref="country" v-model="editedItem.Horariodeentrega" 
                     :items="Horariodeentrega" label="Horario de entrega" 
                     placeholder="Select..." required >
                     </v-autocomplete>                       
                    </v-col>


                    <v-col cols="6" sm="12" >
                    <v-checkbox
                    v-model="editedItem.Retiro"
                    :label="`Marca esta casilla si acordaste retiro`"
                    ></v-checkbox>
                    </v-col>

                    <v-col>
                      <v-checkbox
                    v-model="editedItem.check"
                    :label="`Marca esta casilla si acordaste retiro`"
                    ></v-checkbox>
                    </v-col>

  

              

              </v-row>
                </v-container>
              </v-card-text>

           

              <v-card-actions class="d-flex justify-center pt-5">
                <v-btn color="warning" text @click="close">
                  Cancelar
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="ingresarCurso">
                  Registrar pedido
                </v-btn>
              </v-card-actions>
           </v-card>
          </v-dialog>




          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Seguro que quieres eliminar este curso?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        

        <v-checkbox v-model="editedItem.Checkbox">
        ></v-checkbox>

      </template>

      
      <template v-slot:[`item.Checkbox`]="{ item }">
           <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        <v-checkbox v-model="editedItem.Retiro" :label="`Retiro`"></v-checkbox>

      </template>

      

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>      

    </v-data-table>

  <v-container>
     <v-btn color="error" text @click="PedidosDelDiaPush">
                  BOTON de prueba
      </v-btn>
   
      
      <h2>Total Pedidos del dia: {{TotalPedidosDelDia}}</h2>

      <h2>Cantidad de Pedidos del día:{{CantidadDePedidosDelDia}}</h2> 
  </v-container>
        
 
  </v-container>

</template>
<script>
import { mapActions } from "vuex";
 
export default {
  name: "TableDia",
  props: {
    cursos: Array,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "N° de pedido", align: "start", value: "Np",},
      { text: "Producto", value: "Producto1"},
      { text: "Producto Adicional", value: "Producto2"},
      { text: "Whatsapp", value: "Whatsapp"},
      { text: "Retiro", value: "Retiro", sortable:false},
      { text: "Recibe", value: "Recibe" },
      { text: "Telefono", value: "Telefono" },
      { text: "Envia", value: "Envia" },
      { text: "Dirección", value: "Direccion" },
      { text: "Mensaje", value: "Mensaje" },
      { text: "Observacion", value: "Observacion" },
      { text: "Fecha de envío", value: "Fechadeenvio" },
      { text: "Horario de entrega", value: "Horariodeentrega" },
      { text: "Total", value: "Costoprueba" },
       { text: "checkbox", value: "checkbox" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    arrayCursos: [],
    Productos1:[{name: 'Escalonado de Rosas', price: 40000},
                {name: 'Matilda', price: 20000},
                {name: 'Ramo Premium Tulipanes' , price: 15000},
                {name: 'Ramo abierto' , price: 45000},
                {name:'Arreglo Ross' , price: 10000},
                {name: 'Ajuar Florido' , price: 26000},
                {name:'Ramo circulares' , price: 50000},
                {name:'Ramo Premium' , price: 17000},
                {name:'Caja Rose' , price: 22000},
                {name:'Caja Heart' , price: 28000},
                {name:'Rosas en Altura' , price: 35000},
                {name:'Caja Freedom & Gold' , price: 34000},                                                                                                  
                {name:'Caja Whisky' , price: 45000},
                {name:'Ramo Corazón', price: 17000},
                {name: 'Caja Sidra ', price: 27000}],
    Productos2:["Caja Chocolate 12" , "Caja Chocolate 24"],
    Horariodeentrega:["09:00 hrs - 11:00 hrs","11:00 hrs - 13:00 hrs","13:00 hrs - 15:00 hrs","15:00 hrs - 17:00 hrs","17:00 hrs - 20:00 hrs"],
    Costoprueba:"0",
    costototal:[],
    PedidosDelDiaArray: [],
    editedIndex: -1,
    editedItem: {
      Estado: false,
      Np: "",
      Producto1:"",
      Producto2:"",
      Whatsapp:"",
      Recibe:"",
      Telefono: "",
      Envia:"",
      Direccion:"",
      Mensaje:"",
      Observacion:"",
      Horariodeentrega:"",
      Total: "",
      Retiro: false ,
      Costoprueba:[],
      Fechadeenvio: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      Valor2:[],
      checkbox: false,
    },
    defaultItem: {
      Estado: false,
      Np: "",
      Producto1:"",
      Producto2:"",
      Whatsapp:"",
      Recibe:"",
      Telefono: "",
      Envia:"",
      Direccion:"",
      Mensaje:"",
      Observacion:"",
      Horariodeentrega:"",
      Total:"",
      Retiro: false,
      Costoprueba:"0",
    },
  }),


  computed: {
    formTitle() {
      return this.editedIndex ? "Nuevo pedido" : "Editar pedido";
    },
    
    hoy(){
      const fecha = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10) // Se obtiene la fecha de hoy.
      return fecha
    },

    PedidosDelDia() {
      return this.cursos.filter(item => item.Fechadeenvio === this.hoy)
    }, // Filtra la fecha de envio indicada (this.hoy). luego imprime y suma todos los costos asociados a esa fecha de envio.. SE PUEDE QUITAR REDUCE Y DEJAR UN LENGTH PARA CONTAR

     CantidadDePedidosDelDia() {
      return this.cursos.filter(item => item.Fechadeenvio === this.hoy).length
    },

     TotalPedidosDelDia() {
      return this.cursos.filter(item => item.Fechadeenvio === this.hoy).map(item =>  parseInt(item.PrecioProducto1)).reduce((item,curr) => item + curr, 0)
    },

  },

  

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },



  beforeMount(){
    const deldia = this.cursos.filter(item => item.Fechadeenvio === this.hoy)
    this.PedidosDelDiaArray.push(deldia)
     this.initialize();
  },

  methods: {
    ...mapActions([
      "actualizarCurso",
      "agregarCurso",
      "borrarCurso",
      "traerCursos",
    ]),


     buscarValor(x){
     const rt1 =  this.Productos1.find(item => item.name === x);
     const rt2 = rt1.price
     this.editedItem.Costoprueba.push(rt2)
    }, 

   

    juntar(){
      this.costototal.push(parseInt(this.Costoprueba))
      console.log(this.costototal)
      console.log(this.arrayCursos)
    },
  
    initialize() {
      this.arrayCursos = this.cursos;
    },

     validate() {
      this.agregarCurso(this.editedItem)
        .then(() => {
          this.traerCursos();
          this.initialize();
        })
        .catch((error) => {
          console.log(error);
        });
      this.close();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    editItem(item) {
		this.$router.push({name: 'Editando', params: {id: item.idDoc}});
    },

     deleteItem(item) {
      this.editedIndex = this.arrayCursos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      let cursoEliminar = this.arrayCursos.splice(this.editedIndex, 1);
      this.borrarCurso(cursoEliminar[0]);

      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  
    ingresarCurso() {
      this.buscarValor(this.editedItem.Producto1)
      this.agregarCurso(this.editedItem);
      this.close();
      
    },
    getColor(item) {
      if (item) {
        return "primary";
      } else {
        return "secondary";
      }
    },


     MetodoPedidosDelDia() {
       const hoyes = this.cursos.filter(item => item.Fechadeenvio === this.hoy)
       console.log(hoyes)
       this.PedidosDelDiaArray.push(hoyes)
       console.log("Acá pedidos del día: ",this.PedidosDelDiaArray)
    },

     
  },
};
</script>