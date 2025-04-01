<template>
 


  <v-card elevation="3" color="primary" class="  text-white  " >
    
  <b-navbar class="navbar  navbar-dark text-white fixed   "  fixed >
    
    <div class="container-fluid text-white" >
      <div>
        <!-- Icono de Menu -->
        <button v-if="$store.state.isAuthenticated"  type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar" v-on:click="fetch">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          
        </button>
      </div>
     
 <img :src="require('../assets/LogoCol2024.png')" style="max-width: 50%; margin-bottom: 0%; margin-top: 0%"  />

   
     
       
      
      <div class="navbar-brand text-white">
        <div class="row text-white">
          <!-- informacion de la sesion, cerrar sesion bg-primary-->
          <div class="col-auto text-white">
            <!--icono user-->
            <button class="navbar-toggler text-white" v-on:click="abrirModalSesion()">
              <svg v-if="$store.state.isAuthenticated" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </button>
          </div>


        </div>
      </div>
      <div v-if="!$store.state.isAuthenticated">
        <router-link to="/" class="btn btn-secondary text-black"> Iniciar Sesion </router-link>
      </div>
      <div class="collapse navbar-collapse text-white" id="collapsibleNavbar">
        
      <div class="row " >
        <div class="col-md-1" >
          <ul class="navbar-nav text-white">
          <li class="nav-item text-black" color="#5f968E">
            <router-link to="/Inicio" class="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg"   width="16" height="16" fill="currentColor" class="bi bi-house-fill m-1"
                viewBox="0 0 16 16">
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
              </svg><b>Inicio</b></router-link>
          </li>
          </ul>
        </div>
      
       
        
       
       <div class="col-md-3" >
        <v-chip class="d-flex  darken-1 sm text-white" color="#5f968E"   elevation="1"   > <b>Parametros</b>   </v-chip>
        <ul class="navbar-nav text-black">
          <li class="nav-item text-white">
            <router-link to="/add" class="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table m-1"
                viewBox="0 0 16 16">
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
              </svg><b>Validar practica</b></router-link>
          </li>
          <li class="nav-item text-white">
            <router-link to="/prueba" class="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table m-1"
                viewBox="0 0 16 16">
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
              </svg><b>Generar bono de consulta</b></router-link>
          </li>
          <li class="nav-item text-white">
            <router-link to="/informeConsumo" class="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table m-1"
                viewBox="0 0 16 16">
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
              </svg><b>Descargar bonos</b></router-link>
          </li>

        </ul>
        
        
        
        
        <ul class="navbar-nav text-white">
          <li v-for="formulario of formularios" :key="formulario.idConfigForm">
            <router-link :to="`/datos/${formulario.idConfigForm}`" class="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table m-1"
                viewBox="0 0 16 16">
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
              </svg><b>{{ formulario.titulo }}</b></router-link>
          </li>

        </ul>
       </div>
       <div class="col-md-3" >
        <v-chip class="d-flex  darken-1 sm text-white" color="#5f968E"   elevation="1"   >  <b>Opciones</b>   </v-chip>
        <ul class="navbar-nav text-black">
         
         <li class="nav-item text-white">
           <router-link to="/formularios" class="nav-link text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-radios m-1"
               viewBox="0 0 16 16">
               <path
                 d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
             </svg><b>Gestion de formularios</b></router-link>
         </li>
         <li class="nav-item text-white">
           <router-link to="/usuarios" class="nav-link text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-person-lines-fill m-1" viewBox="0 0 16 16">
               <path
                 d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
             </svg><b>Gestion de usuarios</b></router-link>
         </li>
       
       </ul>
       </div>
       </div>
       
       
        
      </div>
      
    </div>
  </b-navbar>
  <div @click="cerrarModalSesion" class="modal-overlay" :style="{ position: 'relative', zIndex: 10,  width: '1px', height: '200px' }"  v-if="modalSesion">
    <router-view class="container">
    </router-view>
    <info-sesion v-if="modalSesion" @cerrar-modal="cerrarModalSesion"></info-sesion>
  </div>
</v-card>
<br>

</template>
<script>
import InfoSesionModal from '@/components/InfoSesionModal.vue'
export default {
  name: "BarraNavegacion",
  components: {
    'info-sesion': InfoSesionModal,
  },
  data: function () {
    return {
      formularios: [],
      modalSesion: false,
    };
  },
  created() {

    this.fetch();

  },
  methods: {
    async fetch() {
      await this.axios.get("/api/ConfigForm/ListaFormulariosMenu")
        .then((respuesta) => {
          this.formularios = respuesta.data.lista
        })
        .catch(err => {
          console.log(err);
        });
    },

    abrirModalSesion() {
      this.modalSesion = true;
    },
    cerrarModalSesion() {
      this.modalSesion = false;
    }
  }
}
</script>
<style>
nav {
  padding: 1px;
}

nav a {
  font-weight: bold;
  color: #09a7f7;
}

nav a.router-link-exact-active {
  color: #FF0000;
}

/* Estilo para el overlay que cubre el componente padre */
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(19, 3, 77, 0.5);
  /* Fondo oscuro semitransparente */
  z-index: 1040;
  /* Asegura que el overlay esté detrás del modal */
  cursor: pointer;
  /* Cambia el cursor al hacer clic */
}</style>
