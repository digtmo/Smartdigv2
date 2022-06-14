<template>
  <v-container>

<template>
  <v-card
    color="blue-grey darken-1"
    dark
    :loading="isUpdating"
  >
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="300"
      src="https://img.freepik.com/foto-gratis/ramo-tulipanes-espacio-copia_23-2148860022.jpg?t=st=1651377673~exp=1651378273~hmac=f53a53641ad5c4b1b4b3d82689e4144803525e2aed0eed8025321b93ba6fd67c&w=1800"
    >
    <br>
      <v-row>
        <v-col
          class="text-right"
          cols="12"
        >
          <v-menu
            bottom
            left
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="isUpdating = true">
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Update</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-row
          class="pa-4"
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <h3 class="text-h5">
              {{ name }}
            </h3>
            <span class="grey--text text--lighten-1">{{ title }}</span>
          </v-col>
        </v-row>
      </v-row>
    </v-img>
    <v-form>
      <v-container>
        <v-row>
          <br>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="editedItem.Envia"
              filled
              color="blue-grey lighten-2"
              label="Envía"
            ></v-text-field>
          </v-col>
          
          <v-col cols="12" md="6">
            <v-text-field
              v-model="editedItem.Whatsapp"
              filled
              color="blue-grey lighten-2"
              label="Whatsapp"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="editedItem.Recibe"
              filled
              color="blue-grey lighten-2"
              label="Recibe"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
           <v-text-field
            v-model="editedItem.Telefono" 
            label="Telefono"
            filled
            color="blue-grey lighten-2"
            ></v-text-field>
          </v-col> 


          <v-col cols="12" md="6">
            <v-text-field
            v-model="editedItem.Direccion"
            label="Direccion"
            filled
            color="blue-grey lighten-2"
            ></v-text-field>
          </v-col> 

           <v-col cols="12" md="6">
           <v-text-field
           rows="2"
           v-model="editedItem.Mensaje"
           label="Mensaje"
           filled
          color="blue-grey lighten-2"
           ></v-text-field>
           </v-col> 

                    <v-col cols="12" md="6">
                      <v-text-field
                        rows="2"
                        v-model="editedItem.Observacion"
                        label="Observacion"
                        filled
              color="blue-grey lighten-2"
                      ></v-text-field>
                    </v-col>  

                     <v-col  cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.Fechadeenvio"
                        label="Fecha de envío"
                        filled
              color="blue-grey lighten-2"
                      ></v-text-field>
                    </v-col>

                     <v-col  cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.Np"
                        label="N° de pedido"
                        filled
              color="blue-grey lighten-2"
                      ></v-text-field>
                    </v-col> 

                                                             
                    <v-col  cols="12" md="6" >
                     <v-autocomplete ref="country" v-model="editedItem.Horariodeentrega" 
                     :items="Horariodeentrega" label="Horario de entrega" 
                     placeholder="Select..." required 
                     filled
              color="blue-grey lighten-2">
                     </v-autocomplete>                       
                    </v-col>


                    <v-col  cols="12" md="6" >
                    <v-checkbox
                    v-model="editedItem.Retiro"
                    :label="`Marca esta casilla si acordaste retiro`"
                    filled
              color="blue-grey lighten-2"
                    ></v-checkbox>
                    </v-col>

                    <v-col cols="12" sm="12" md="12" >
                    <h2 class="text-center font-weight-bold">Datos de compra</h2>
                  </v-col>
                    
                    
                    <v-col  cols="12" md="6" >
                     <v-autocomplete ref="country" v-model="editedItem.Producto1" 
                     :items="Productos1" label="Producto" 
                     placeholder="Select..." required  
                     filled
              color="blue-grey lighten-2"
                      >
                     </v-autocomplete>                       
                    </v-col>

                                      
                    <v-col cols="12" md="6" >
                     <v-autocomplete ref="country" v-model="editedItem.Producto2" 
                     :items="Productos2" label="Producto Adicional" 
                     placeholder="Select..." required 
                     filled
                    color="blue-grey lighten-2">
                     </v-autocomplete>                       
                    </v-col>

          
        

         


        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
   

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
</template>




         
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Table",
  props: {
    cursos: Array,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "N° de pedido", align: "start", value: "np",},
      { text: "Nombre", value: "Nombre" },
      { text: "Cantidad", value: "Cantidad"},
      { text: "Producto", value: "Producto" },
      { text: "Dirección", value: "Direccion" },
      { text: "Telefono", value: "Telefono" },
      { text: "Costos", value: "costo" },
      { text: "Estado", value: "estado", sortable: false }, 
      { text: "Acciones", value: "actions", sortable: false },
    ],
    Productos1:["Escalonado de Rosas","Matilda","Ramo Premium Tulipanes","Ramo abierto","Arreglo Ross","Ajuar Florido","Ramo circulares",
                "Ramo Premium","Caja Rose","Caja Heart","Rosas en Altura","Caja Freedom & Gold","Caja Whisky","Ramo Euforia","Cucurucho de Tulipanes","Caja mama mía",
                "Ramo Corazón","Caja Sidra","Caja Navideña","Caja Cofre Gold","Ramo Amor","Caja Macarrons"],
    Productos2:["Caja Chocolate 12" , "Caja Chocolate 24"],
    Horariodeentrega:["09:00 hrs - 11:00 hrs","11:00 hrs - 13:00 hrs","13:00 hrs - 15:00 hrs","15:00 hrs - 17:00 hrs","17:00 hrs - 20:00 hrs"],
    arrayCursos: [],
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