<template>
  <v-container>

    <v-data-table :headers="headers" :items="arrayCursos" sort-by="Cantidad" class="elevation-3" >

      <template v-slot:item.costo="{ item }">
        <v-chip color="green" dark> ${{ item.costo}} </v-chip>
      </template>

        

      <template v-slot:item.fecharegistro="{ item }">
        <v-chip color="warning" dark> {{ item.fecharegistro }}</v-chip>
      </template>

      <template v-slot:item.estado="{ item }">
        <v-chip :color="getColor(item.estado)" dark> {{ item.estado }} </v-chip>
      </template>

    

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Pedidos </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="orange" dark class="mb-2" v-bind="attrs" v-on="on">  
                Ingresar Pedido
              </v-btn>
            </template>
          
            
            <v-card>
              <v-card-title>
               
              </v-card-title>

             <v-card-text>
                <v-container>
                  <v-row>
                    
                  <v-col cols="12" sm="12" md="12" >
                    <h2 class="text-center font-weight-bold">Datos del pedido</h2>
                  </v-col>
                    
                    <v-col cols="4" sm="4">
                      <v-text-field
                        v-model="editedItem.Cantidad1"
                        label="Cantidad"
                      ></v-text-field>
                    </v-col> 
                    
                    <v-col cols="8" sm="8" >
                     <v-autocomplete ref="country" v-model="editedItem.Producto1" 
                     :items="Productos1" label="Producto" 
                     placeholder="Select..." required >
                     </v-autocomplete>                       
                    </v-col>

                     <v-col cols="4" sm="4">
                      <v-text-field
                        v-model="editedItem.Cantidad2"
                        label="Cantidad"
                      ></v-text-field>
                    </v-col> 
                    
                    <v-col cols="8" sm="8" >
                     <v-autocomplete ref="country" v-model="editedItem.Producto2" 
                     :items="Productos1" label="Producto" 
                     placeholder="Select..." required >
                     </v-autocomplete>                       
                    </v-col>

                      <v-col cols="12" sm="12" md="12" >
                    <h2 class="text-center font-weight-bold">Datos de envío</h2>
                  </v-col>

                     <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.Nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col> 

                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.Direccion"
                        label="Direccion"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6" md="12">
                      <v-text-field
                         v-model="editedItem.Telefono" 
                        label="Telefono"
                      ></v-text-field>
                    </v-col> 


                     <v-col  cols="6" md="12">
                      <v-text-field
                        v-model="editedItem.np"
                        label="N° de pedido"
                      ></v-text-field>
                    </v-col> 

                     <v-col  cols="6" md="12">
                      <v-text-field
                        v-model="editedItem.costo"
                        label="Valor"
                      ></v-text-field>
                    </v-col> 

                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        rows="3"
                        v-model="editedItem.Observacion"
                        label="Observacion"
                      ></v-textarea>
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
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>

    </v-data-table>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Table2",
  props: {
    cursos: Array,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "N° de pedido", align: "start", value: "np",},
      { text:"Cantidad", value:"Cantidad1"},
      { text: "Producto", value: "Producto1"},
      { text:"Cantidad", value:"Cantidad2"},
      { text: "Producto", value: "Producto2"},
      { text: "Nombre", value: "Nombre" },
      { text: "Dirección", value: "Direccion" },
      { text: "Telefono", value: "Telefono" },
      { text: "Costos", value: "Costos" },
      { text: "Estado", value: "estado", sortable: false },  
      { text: "Acciones", value: "actions", sortable: false },
    ],
    arrayCursos: [],
    Productos1:['Mojito Maracuya','Mojito Frambuesa','Mojito Tradicional','Mojito Berries'],
    editedIndex: -1,
    editedItem: {
      cupos: 0,
      duracion: "",
      imagen: "",
      nombre: "",
      telefono: 0,
      fecharegistro: "",
      estado: false,
      np: "",
      descripcion: "",
      inscritos: 0,
      Cantidad1:"",
      Cantidad2:"",
      Productos1:"",
      Productos2:"",
    },
    defaultItem: {
      codigo: "",
      cursos: "",
      terminado: false,
      costo: 0,
      duracion: "",
      descripcion: "",
      cupos: 0,
      inscritos: 0,
      imagen: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex ? "Nuevo pedido" : "Editar pedido";
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

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions([
      "actualizarCurso",
      "agregarCurso",
      "borrarCurso",
      "traerCursos",
    ]),
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
  },
};
</script>