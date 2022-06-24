<template>
  <v-container >

    <v-row>

        

          <v-col cols="12" xs="12" md="6">


          <v-container class="timeline">
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">

                <v-timeline-item
                color="green lighten-1"
                fill-dot
                right
                small
              >
                <v-card>
                  <v-card-title class="green lighten-1">
                    <v-icon
                      class="mr-4"
                      dark
                      size="20"
                    >
                      mdi-phone-in-talk
                    </v-icon>
                    <h2 class="text-h4 white--text font-weight-light">
                      Gestión
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col>
                        Gestiona tu trabajo de forma eficiente, lleva un orden detallado de tu trabajo y logra los objetivos propuesto.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>


              

              <v-timeline-item
                color="amber lighten-1"
                fill-dot
                left
                small
                
              >
                <v-card>
                  <v-card-title class="amber lighten-1 justify-end">
                    <h2 class="text-h4 mr-4 white--text font-weight-light">
                      Title 2
                    </h2>
                    <v-icon
                      dark
                      size="20"
                    >
                      mdi-home-outline
                    </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        md="8"
                      >
                      1 Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                      >
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item
                color="red lighten-1"
                fill-dot
                right
              >
                <v-card>
                  <v-card-title class="red lighten-1 justify-end">
                    <v-icon
                      dark
                      size="20"
                    >
                      mdi-account-multiple-outline
                    </v-icon>
                    <h2 class="text-h4 white--text font-weight-light">
                      Title 3
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                  <v-col
                        cols="12"
                        md="10"
                      >
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              

            
            </v-timeline>
                
              </v-container>

              

          </v-col>

          <v-col cols="12" xs="12" md="6">
            <v-container >
                <div class="CuadroPrincipal">
                  <h1>Bienvenido a la gestión de trabajo moderno.</h1>
                  <p>Automatiza procesos, gestiona tus documentos, controla tus finanzas y trabaja de forma mas eficiente, todo con una sola plataforma.</p>
                   <div class="text-center">
                  <v-bottom-sheet
                    v-model="sheet"
                    persistent
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="green"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                       Login
                      </v-btn>
                      <v-btn
                        class="botonDemo"
                        color="primary"
                       
                      >
                       SOLICITAR DEMO
                      </v-btn>
                    </template>
                    <v-sheet
                      class="text-center"
                      height="200px"
                    >

                    <v-row>
                      <v-col cols="12" sm="4">
                        </v-col>


                        <v-col cols="12" sm="4">
                          <div>    
                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" requiredc></v-text-field>
                            <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Password" required type="password"></v-text-field>
                      
                          </v-form>  

                        </div>
                        </v-col>
                          <v-col cols="12" sm="4">
                            <div class="botonesLogin">
                              <v-btn :disabled="!valid" color="success" class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"  @click="validate">
                                Ingresar
                              </v-btn>
                             <v-btn
                              class="mt-6"
                              color="error"
                              @click="sheet = !sheet"
                            >
                              Cancelar
                            </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                  
                    </v-sheet>
                  </v-bottom-sheet>
                </div>
                </div>
            </v-container>
            <div >
                  <v-img class="ImagenPrincipal mx-auto" src="https://i.postimg.cc/66rr80vG/Imageninicio1.png"></v-img>
            </div>
          </v-col>

        </v-row>
 
    <br>
     
    
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
      sheet: false,
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

<style>

.timeline{
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 8%;
  padding-bottom: 8%;
  width: auto;
  height: auto;
  
}

.ImagenPrincipal{
  margin-top: 10%;
    padding-top: 8%;
    opacity: 70%;
    float: left;
    width: auto;
    height: auto;
    padding-left: 10%;
    padding-right: 10%;
}

.CuadroPrincipal{
    padding-top: 100px;
}

.CuadroPrincipal h1{
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}

.CuadroPrincipal p{
  font-size: 20px;
  text-align: center;
  padding-left: 7%;
  padding-right: 7%;
}

.botonDemo{
  margin-left: 20px;
}

.botonesLogin{
  margin-top: 5%;
  margin-right: 70%;
}



</style>

