<template>
 <barra-navegacion></barra-navegacion>
<br><br>

 <v-img
          :src="require('../assets/LogoExc1.png')"
          class="my-3"
          contain
          height="120"
          style="z-index: -1;"
          
        ></v-img>
<br><br>
        <div class="row" >
          <div class="col-md-1  p-1 text-center "></div>
            <div class="col-md-3  p-3 text-center ">
             <v-card  href="/Odontologos/add" 
                class="mx-auto"
             elevation="5"
               
                color ="#1F7087"
              >
                <template v-slot:title>
                  <br>
                  <v-icon  :size="48">
                 mdi-sticker-check
                  </v-icon>
                </template>

                <v-card-text>
                  <v-btn
                   
                   class="ml-2 mt-5"
                   outlined
                   rounded
                   small
                 >
                 Validar practicas
                 </v-btn>
                   
                </v-card-text>
              <br>
              </v-card>
              
              </div>

              <div class="col-md-3  p-3  text-center">
                <v-card  href="/Odontologos/prueba" 
                class="mx-auto"
          
               elevation="5"
                color ="#1F7087"
              >
                <template v-slot:title>
                  <br>
                  <v-icon  :size="48">
                 mdi-list-status
                  </v-icon>
                </template>

                <v-card-text>
                  <v-btn
                   
                   class="ml-2 mt-5"
                   outlined
                   rounded
                   small
                 >
                  bono de consulta 
                 </v-btn>
                  
                </v-card-text>
              <br>
              </v-card>

              </div>
              <div class="col-md-3  p-3  text-center">

                <v-card  href="/Odontologos/informeConsumo" 
                class="mx-auto"
            elevation="5"
               
                color ="#1F7087"
              >
                <template v-slot:title>
                  <br>
                  <v-icon  :size="48">
                 mdi-clipboard-list
                  </v-icon>
                </template>

                <v-card-text>
                  <v-btn
                   
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                  Descargar bonos
                  </v-btn>
                  
                </v-card-text>
              <br>
              </v-card>
              </div>
              <div class="col  p-3  "></div>
        </div>         
</template>
<script>
import BarraNavegacion from '@/components/BarraNavegacion.vue';
import ListarMed from '../components/ListarMed.vue';
import axios from 'axios';

export default{
  components:{
    ListarMed,
        'barra-navegacion': BarraNavegacion,
    },
    data() {
    return {
      responseData: null, // Almacenar la respuesta del servicio
      ValorCombo: null,
      ListaCombos: null,
      rows: null,
      rows1: null,
      isVisible: false,
      VentanaGrabar: false,
      nroremitoPasado: '',
      codcoseguro:"",
      rows1: [],
      Elemento:"",
      nombre:"",
      coseguro:"",
      
      codigo:"",
      Cara:"",
      items: [
        { dato1: 'Dato 1', dato2: 'Dato 2', dato3: 'Dato 3' },
        { dato1: 'Dato 4', dato2: 'Dato 5', dato3: 'Dato 6' }
        // Más datos según sea necesario
      ]
    };
  },
  mounted() {
    //this.setRoleAttribute();
    this.fetch();
    //this.fetchArticulosMed();
    this.ValorCombo = "0";
  },
 
  methods: {
    async fetchArticulosMed() {
       
       //this.MostrarSpinner = true; //abrir spinner mientras realiza la solicitud 
       //const respuesta = await this.axios.get("/api/ConfigForm/ListaField?pTipo=2136")
       //const respuesta = await this.axios.get(`/api/ConfigForm/ListarArticulos?pTipo=${this.idConfig}`)
      const respuesta = await this.axios.get(`/api/ConsultaAutorizados?DniAfi=18562325&CodObra=000&Matri=00720&pCoseguro=000`)
         .then((respuesta) => {
           //this.ListaFormulariosArticulos = respuesta.data.lista
           this.rows = respuesta.data.lista;
              
         })
         .catch(err => {
           console.log(err);
         });
     // this.MostrarSpinner = false;//cerrar spinner cuando termine de realizar la solicitud
     },
   
    async VerificoCodigo(){
      this.nroremitoPasado = "00720";
      this.coseguro = "";
      let cose = "";
      const respuesta = await this.axios.get(`/api/ConsultarWs/BuscarDatosAfiliado?pDni=${this.codigo}`, {
      }).then((respuesta) => {
      let data = []; //declarar la variable data
      this.datos = respuesta.data
      data = respuesta.data;
      data.forEach(item => { this.nombre = item.nombre; cose = item.coseguro; this.codcoseguro = item.coseguro; });
        if(cose=="01")
          this.coseguro = "UPCN";
        if(cose=="02")
          this.coseguro = "UDAP";
        if(cose=="03")
          this.coseguro = "COLMED";
        if(cose=="04")
          this.coseguro = "ATSA";
        if(cose=="07")
          this.coseguro = "ATE";
        if(cose=="08")
          this.coseguro = "SANIP";
        if(cose=="10")
          this.coseguro = "MUDAP";
        if(cose=="05")
          this.coseguro = "SUOEM";
        if(cose=="06")
          this.coseguro = "DSS";
             
              
    })
    .catch(err => { console.log(err); });
    if(this.coseguro == ""){
      this.codigo  = "";
      this.nombre = "";
      cose = "";
      this.codcoseguro = "";
      this.VentanaGrabar = true;
    }

    },
    VerificoCodigo24(){},
  
    
    setRoleAttribute() {
      if (this.$refs.table) {
        this.$refs.table.setAttribute('role', 'grid');
      }
    },
    cerrarGrabar(){
      this.VentanaGrabar = false;
    },
    async fetch() {
            
   const respuesta = await this.axios.get(`/api/ConsultarWs/ListaNomenclador/`)
  .then((respuesta) => {
    console.log("Respuesta completa:", respuesta);  // Imprime toda la respuesta

    if (respuesta && respuesta.data && respuesta.data.lista) {
      this.rows1 = respuesta.data.lista;
      console.log("Lista recibida:", respuesta.data.lista);
      console.table(respuesta.data.lista);
    } else {
      console.log("La lista no está disponible en la respuesta:", respuesta.data);
      this.rows1 = respuesta.data;
    }
  })
  .catch(err => {
    console.log("Error al obtener la respuesta:", err);
  });
      // this.MostrarSpinner = false;//cerrar spinner cuando termine de realizar la solicitud
                
        },
        mostrarConfirmacionEliminar(id_fila) {
            this.idFilaAEliminar = id_fila;
            this.mostrarAlertaEliminar = true;
        },
  }
}

</script>
<!-- Inicializaci�n de DataTables -->

<style>
.background-container {
  /* Establece la imagen de fondo */
  background-image: url('../assets/FondoEditor.jpg'); 
  
  /* Ajusta el tamaño de la imagen de fondo según tus necesidades */
  background-size: 1024px 1024px;
  
  /* Centra la imagen de fondo */
  background-position: center;
  background-repeat: no-repeat;
  /* Establece una altura y anchura mínimas para el contenedor */
  min-height: 100vh; /* Ajusta la altura mínima según tus necesidades */
  min-width: 100%; /* Ajusta la anchura mínima según tus necesidades */
  
  /* Otros estilos de diseño si es necesario */
  color: white; /* Color del texto */
  font-size: 12px; /* Tamaño de fuente del texto */
}

/* Otros estilos de CSS para tu contenido, si es necesario */
</style>
