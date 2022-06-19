<template>
  <v-container>
    <transition appear  v-on:appear="customAppearHook">
          <v-img class="mx-auto" max-height="3500" max-width="2000" src="https://i.postimg.cc/mZHkfjgD/Fondo-Inicio.png"></v-img>
    </transition>
    <br>
      <h1 class="text-center">Login de Usuario</h1>
      <br>


      <v-row>
       <v-col cols="12" sm="4">
         </v-col>


         <v-col cols="12" sm="4">
          <div>    
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" requiredc></v-text-field>
            <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Password" required type="password"></v-text-field>
            <v-container class="mt-5 d-flex justify-center align-content-center flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
              <v-btn :disabled="!valid" color="success" class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"  @click="validate">
                Ingresar
              </v-btn>
            </v-container>
          </v-form>  

        </div>
        </v-col>
<v-col cols="12" sm="4">
         </v-col>
      </v-row>
      
      

  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      valid: true,
      password: "",
      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          (v && v.length >= 6) ||
          "La contraseña debe ser mayor o igual que 6 caracteres.",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "El correo Electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "Debe ingresar un E-mail válido.",
      ],
    };
  },
  methods: {
    ...mapActions(["inicioSesion"]),
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            this.inicioSesion(data.user.email); 
            setTimeout(() => {
              this.$router.replace({ name: "Home" }).catch((error) => {
                console.info(error.message);
              });
            }, 500);
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error,
              footer: "Intenta nuevamente",
            });
          });
      } else {
        console.log("no permitido");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes ingresar datos permitidos!",
          footer: "Intenta nuevamente",
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    nuevoUsuario() {
      this.$router.push({ name: "Registro" });
    },
  },
};
</script>