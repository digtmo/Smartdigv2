<template>
  <div>
    <h1 class="text-center pt-5">Pedido N° {{retornar.Np}} </h1>
    <v-form ref="form">
      <v-container>
        <v-autocomplete ref="country" v-model="editedItem.Producto1" 
            :items="Productos1" label="Producto" 
            placeholder="Select..." required  item-text="name"
            item-value="name" >
        </v-autocomplete>   
        <v-autocomplete ref="country" v-model="editedItem.Producto2" 
        :items="Productos2" label="Producto Adicional" 
        placeholder="Select..." required >
        </v-autocomplete>
        <v-col cols="12" sm="12" md="12" justify="center">
          <h3>Fecha de Envío</h3>
          <br>
          <v-date-picker v-model="retornar.Fechadeenvio"></v-date-picker>
        </v-col>   
        <v-autocomplete ref="country" v-model="editedItem.Horariodeentrega" 
        :items="Horariodeentrega" label="Horario de entrega" 
        placeholder="Select..." required >
        </v-autocomplete>   
        <v-text-field v-model="editedItem.Whatsapp" label="Whatsapp"> {{ retornar.Whatsapp}} </v-text-field>
        <v-text-field  v-model="editedItem.Recibe" label="Recibe">{{ retornar.Recibe }}</v-text-field>
        <v-text-field  v-model="editedItem.Telefono" label="Telefono">{{ retornar.Telefono }}</v-text-field>
        <v-text-field  v-model="editedItem.Envia" label="Envía">{{ retornar.Envia}}</v-text-field>
        <v-text-field v-model="editedItem.Direccion" label="Dirección"> {{ retornar.Direccion }}</v-text-field>
        <v-textarea outlined  v-model="editedItem.Mensaje" label="Mensaje">{{ retornar.Mensaje }}</v-textarea>
        <v-textarea outlined  v-model="editedItem.Observacion" label="Observación">{{ retornar.Observacion }}</v-textarea>
        <v-checkbox v-model="editedItem.Retiro" :label="`Retiro`"></v-checkbox>
        <v-switch :label="`Finalizado: ${retornar.Estado ? 'Si' : 'No'}`" color="success" value="success" hide-details v-model="editedItem.Estado" >  {{ retornar.Estado }} </v-switch> 
        
        <v-container class="d-flex justify-center">
          <v-btn color="success" class="mr-4" @click="actualizarList">
            ACTUALIZAR
          </v-btn>
          

          <v-btn color="primary" class="mr-4" @click="regresar">
            CANCELAR
          </v-btn>
        </v-container>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Editando",
  data: () => ({
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
      Retiro: false,
      Costoprueba:[],
      Fechadeenvio: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      Valor2:[]
    },
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
                {name: 'Caja Sidra price', price: 27000}],
    Productos2:["Caja Chocolate 12" , "Caja Chocolate 24"],
    Horariodeentrega:["09:00 hrs - 11:00 hrs","11:00 hrs - 13:00 hrs","13:00 hrs - 15:00 hrs","15:00 hrs - 17:00 hrs","17:00 hrs - 20:00 hrs"],

    valid: true,
  }),
  computed: {
    ...mapState(["cursos"]),
    retornar() {
      return this.editedItem;
    },
  },

  updated(){
        this.editedItem.Costoprueba = []
        console.log("updated",this.editedItem.Costoprueba)  
  },

  methods: {
    ...mapActions(["actualizarCurso"]),

    buscarValor(x){
     const rt1 =  this.Productos1.find(item => item.name === x);
     const rt2 = rt1.price
     this.editedItem.Costoprueba.push(rt2)
     console.log(this.editedItem.Costoprueba)  
    }, 

    actualizarList() {
    this.buscarValor(this.editedItem.Producto1)
		this.actualizarCurso(this.editedItem)
    this.regresar()
    },
    reset() {
      this.$refs.form.reset();
    },
    LimpiarForm() {},
    regresar() {
      this.$router.push({ name: "Administracion" });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
  created() {
    this.editedItem = this.cursos.find(
      (element) => element.idDoc == this.$route.params.id
    );
  },
};
</script>

<style scoped>
</style>