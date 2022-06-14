<template>
  <div>
    <v-card class="overflow-hidden navbar" height="100%">
      <v-app-bar color="deep-dark" dark >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Smartdig</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn right text v-show="usuario" @click="salir">
          <span class="mr-2">{{ usuario }}</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field class="user" v-model="email" :rules="emailRules" label="E-mail" ></v-text-field>
        <v-text-field class="password" v-model="password"  :rules="passwordRules" label="Password" required type="password"></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"  @click="validate">
                Ingresar
        </v-btn>
      <!--  <v-container> 
           <v-text-field v-model="email" :rules="emailRules" label="E-mail" requiredc></v-text-field>
            <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Password" required type="password"></v-text-field>
              <v-btn :disabled="!valid" color="success" class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"  @click="validate">
                Ingresar
              </v-btn>
        </v-container> -->  
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-black--text text--accent-4">

            <v-list-item :to="{ name: 'Home' }">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name: 'Login' }" v-show="!usuario">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name: 'Administracion' }" v-show="usuario">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Administración</v-list-item-title>
            </v-list-item>

             <v-list-item :to="{ name: 'Finanzas' }" v-show="usuario">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Finanzas</v-list-item-title>
            </v-list-item>

             <v-list-item :to="{ name: 'Gestion' }" v-show="usuario">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Gestión</v-list-item-title>
            </v-list-item>

              <!-- 
                  <v-list-item :to="{ name: 'Registro' }" v-show="!usuario">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Registro</v-list-item-title>
            </v-list-item>
               -->
          


          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";
import firebase from "firebase";
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapState(["usuario"]),
  },
  methods: {
    ...mapActions(["logOut"]),
    salir() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sesión cerrada con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.$router.push({ name: "Login" }).catch(() => {});
          }, 500);
          this.logOut();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.navbar{
	min-height: 100vh;
}

.password {
  height: 50%;
  padding-left: 2%;
}

.user{
  height: 50%;
  padding-left: 2%;
}


</style>