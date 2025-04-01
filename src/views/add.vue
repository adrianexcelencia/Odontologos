<template>
  <barra-navegacion></barra-navegacion>
  <v-dialog
  rounded="xl"
  
            v-model="MensajeOk"
           
            width="450"
  > 
  <v-alert
           rounded="xl"
        color="green"
        theme="dark"
      
        density="compact"
        elevation="4"
        border="top"
      >
  <div  class="shadow p-3   text-sm text-center" align-center style="max-width: 1350px; " >
    <v-row justify="center" align="center" class="my-container">
    <v-col cols="auto">
      <v-icon color=" darken-2" size="80">
        mdi-checkbox-marked-circle-outline
      </v-icon>
      <br>
      
      <v-card rounded="xg"
    class="mx-auto"
    elevation="2"
    color="success"
    >
   <b><h4> {{  this.MensajeRes  }}</h4></b>
  </v-card>
   <hr  style="border: none; height: 2px; background-color: #FFFFFF;">
   <b> {{  this.MensajeRes1  }}</b>
   <hr  style="border: none; height: 2px; background-color: #FFFFFF;">
   
    </v-col>
  </v-row> 
          <v-btn @click="CerrarOk()" color="success"  x-small  prepend-icon="mdi-close-box" block>Aceptar</v-btn>      
  </div>
</v-alert>
  </v-dialog>
  <!--Mensaje de PRactica Rechazada-->
  <v-dialog
  rounded="xl"
  
            v-model="MensajeRechazado"
           
            width="450"
  > 
  <v-alert
           rounded="xl"
        color="#FF0000"
        theme="dark"
      
        density="compact"
        elevation="4"
        border="top"
      >
  <div  class="shadow p-3   text-sm text-center" align-center style="max-width: 1350px; " >
    <v-row justify="center" align="center" class="my-container">
    <v-col cols="auto">
      <v-icon color=" darken-2" size="80">
        mdi-checkbox-marked-circle-outline
      </v-icon>
      <br>
      
      <v-card rounded="xg"
    class="mx-auto"
    elevation="2"
    
    color="#FF0000">
   <b><h4> {{  this.MensajeRes  }}</h4></b>
  </v-card>
   <hr  style="border: none; height: 2px; background-color: #FF0000;">
   <b> {{  this.MensajeRes1  }}</b>
   <hr  style="border: none; height: 2px; background-color: #006699;">
   
    </v-col>
  </v-row> 
          <v-btn @click="CerrarRechazado()"  x-small  prepend-icon="mdi-close-box" block>Aceptar</v-btn>      
  </div>
</v-alert>
  </v-dialog>
  <!-- Ventana GRABER -->
 
<v-dialog
            v-model="VentanaGrabarG"
            persistent
            width="500"
  > 
  <v-alert
          shaped
        color="#CCCCCC"
        theme="dark"
        icon="mdi-alert"
        density="compact"
        elevation="4"
        border="top"
      >
  <!-- Alerta de confirmación personalizada -->
      <div v-if="mostrarAlertaGrabar"  role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
                <use xlink:href="#info-fill" />
            </svg>
            <div>
                <div class="row">
                    <div class="col  p-3 text-center ">    
                <v-btn @click="Agregar()" prepend-icon="mdi-cloud-upload" color="#FFFFFF"  >Confirma Grabar</v-btn>
          </div>
          <div class="col  p-3 text-center ">
          <v-btn  prepend-icon="mdi-cancel" color="#FF0000" @click="cerrar">   <v-spacer></v-spacer> Cancelar</v-btn>
        </div>
        </div>
            </div>
        </div>
        
        <!--fin alerta confirmacion obtenerValores-->
    </v-alert>
    </v-dialog>
 <!--Alerta de Afiliado no encontrado-->
 <v-dialog
            v-model="VentanaGrabar"
            persistent
            width="500"
  > 
  <v-alert
          shaped rounded="xl"
        color="#FF0000"
        theme="dark"
        icon="mdi-alert"
        density="compact"
        elevation="4"
        border="top"
      >
     <h5> En este momento no se puede validar el afiliado en OSP, intente nuevamente</h5>
 
  <!-- Alerta de confirmación personalizada -->
 
   
      <br>
      <div   role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
                <use xlink:href="#info-fill" />
            </svg>
            <div>
                <div class="row">
                   
          <div class="col  p-3 text-center ">
          <v-btn  prepend-icon="mdi-cancel" color="#FF0000" @click="cerrarGrabar">   <v-spacer></v-spacer> Cerrar</v-btn>
        </div>
        </div>
            </div>
        </div>
        
        <!--fin alerta confirmacion obtenerValores-->
    </v-alert>
    </v-dialog>
 <!--Fin Alerta afiliado no encontrado-->
 
  
 
   <v-card  class="px-4 py-2  text-right w-100 bg-light" elevation="3"  style="max-width: 1350px; margin: 0 auto;">
    <div class="row bg-white"></div> 
    <div class="row bg-white">
    <div class="text-left bg-white">
     <v-alert
         shaped
        color="white"
        colored-border
       rounded="xl"
       theme="dark"
       icon="mdi-arrow-right"
       density="compact"
       elevation="2"
       border="top"
     >
      <b>   Validacion de practicas  </b> 
  
      
     </v-alert>
   </div>
   </div>
     <div class="row bg-white">
 
       <div class="col-md-1 p-3">
         <v-text-field v-model="codigo"  @keyup.enter="VerificoCodigo" ref="codigoField" label="DNI" variant="underlined" size="small" ></v-text-field>
       </div>
       <div class="col-md-1 p-3">
         <v-btn @click="VerificoCodigo" color="primary"  rounded="xl"  title="Verificr proximo codigo disponible "  size="small" block  prepend-icon="mdi-check" ></v-btn>
       </div>
       <div class="col-md-6 p-3">
         <v-text-field v-model="nombre" readonly ref="codigoField" label="Nombre" variant="underlined" size="small" ></v-text-field>
       </div>
       <div class="col-md-1 p-3">
         <v-text-field v-model="codcoseguro" readonly  ref="codigoField" label="Cod .Coseguro" variant="underlined" size="small" ></v-text-field>
       </div>
       <div class="col-md-3 p-3">
         <v-text-field v-model="coseguro" readonly ref="codigoField" label="Coseguro" variant="underlined" size="small" ></v-text-field>
       </div>
 
     </div>
     <div class="row bg-white">
       <div class="col-md-1 p-3">
         <v-text-field v-model="Elemento"  @keyup.enter="VerificoCodigo" ref="codigoField" label="Elemento" variant="underlined" size="small" ></v-text-field>
       </div>
       <div class="col-md-1 p-3">
         <v-text-field v-model="Cara"  @keyup.enter="VerificoCodigo" ref="codigoField" label="Cara" variant="underlined" size="small" ></v-text-field>
       </div>
       <div class="col-md-4 p-3">
       Selecciona una practica
       <select v-model="ValorCombo" class="form-select" id="Combo" style="border-radius: 12px;" >
         <option value="0">Seleccionar practica...</option> 
         <option v-for="Combo in rows1" :key="Combo.codigo"  :value="Combo.codigo"> {{Combo.nombre}}</option>
       </select>
     </div>
     <div class="col-md-3 p-3 text-center">
      <v-card
    @click="VerGrabar()" 
    rounded="xl"
    class="mx-auto"
    prepend-icon="mdi-apple-keyboard-control" 
    elevation="4"
    color="primary"
  >
 
    <template v-slot:title>
      <v-icon :size="50">
        mdi-content-save-check
      </v-icon>
      
    </template>

    <v-card-text>
   <b>   Validar práctica</b>
    </v-card-text>
</v-card>  
     </div>
     <div class="col-md-3 p-3 text-center">
       <v-card
    @click="limpiar()" 
    rounded="xl"
    class="mx-auto"
    elevation="4"
    prepend-icon="mdi-apple-keyboard-control" 
    color ="primary"
  >
    <template v-slot:title>
      <v-icon :size="50">
        mdi-backspace
      </v-icon>
      
    </template>
 
     <v-card-text>
    <b>  Nueva validacion</b>
    </v-card-text>
  </v-card>  
     </div>
     <br>
     
     <AlertaMensaje  :visible = "mostrarAlertaSucesoMensaje" :mensaje = "mensajeAlertaSuceso" color="#FF0000"/>
     
     <ListarMed :remitoValue="nroremitoPasado" ref="listado"   />  
     </div>
   </v-card>
         
 
 
       
    
 </template>
 <script>
 import BarraNavegacion from '@/components/BarraNavegacion.vue';
 import ListarMed from '../components/ListarMed.vue';
 import axios from 'axios';
 import AlertaMensaje from '@/components/AlertaMensaje.vue';
 
 export default{
   components:{
     ListarMed,
     AlertaMensaje,
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
       VentanaGrabarG: false,
       mostrarAlertaSucesoMensaje: false,
       mensajeAlertaSuceso:"",
       nroremitoPasado: '',
       codcoseguro:"",
       rows1: [],
       idUsuario: '',
       MensajeOk: false,
       MensajeRechazado: false,
       Elemento:"",
       nombre:"",
       coseguro:"",
       MensajeRes: "",
       MensajeRes1: "",
       
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
    this.idUsuario = this.$store.state.usuario;
     //this.setRoleAttribute();
     this.fetch();
     //this.fetchArticulosMed();
     this.ValorCombo = "0";
     //alert(this.idUsuario);
   },
  
   methods: {
    limpiar(){
      this.codigo = "";
      this.codcoseguro = "";
      this.Elemento = "";
      this.Cara="";
      this.nombre="";
      this.coseguro="";
      this.ValorCombo = "0";
    },
    CerrarOk(){
      this.MensajeOk =false;
    },
    CerrarRechazado(){
      this.MensajeRechazado = false;
    },
   async Agregar(){
      //api/ConsultarWs/Auditar?pMatricula=18562325&pObra=270&pDNI=18562325&pElemento=12&pCara=-&pPractica=1001&pBarra=-&pNombreAfi=-&pUnico=123664&pCoseguro=01&pUnicoCoseguro=123456&pFV=19%2F-09-2024
      //"nombre": "00715816 Coseguro:  715817"
      let resultado = "";
      let fechaActual = new Date();
      let dia = String(fechaActual.getDate()).padStart(2, '0'); // Día
      let mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Mes (los meses empiezan desde 0)
      let anio = fechaActual.getFullYear(); // Año
      let fechaFormateada = dia + '-' + mes + '-' + anio;
      let horas = String(fechaActual.getHours()).padStart(2, '0'); // Horas
      let minutos = String(fechaActual.getMinutes()).padStart(2, '0'); // Minutos
      let segundos = String(fechaActual.getSeconds()).padStart(2, '0'); // Segundos
      let horaFormateada = horas + ':' + minutos + ':' + segundos;
      let codcoseguro= "0"+ this.codcoseguro;
      let unico = this.idUsuario + fechaFormateada + horaFormateada;
      let elemento = this.Elemento;
      let cara = this.Cara;
      let practica = this.ValorCombo;
      
      if(elemento =="")
        elemento = "-";
      if(cara =="")
        cara="-";
       if(codcoseguro == "0")
       codcoseguro = "-";
   

      const respuesta = await this.axios.get(`api/ConsultarWs/Auditar?pMatricula=${this.idUsuario}&pObra=270&pDNI=${this.codigo}&pElemento=${elemento}&pCara=${cara}&pPractica=${this.ValorCombo}&pBarra=-&pNombreAfi=-&pUnico=${unico}&pCoseguro=${codcoseguro}&pUnicoCoseguro=${unico}&pFV=${fechaFormateada}`, {
  }).then((respuesta) => {
    let data = []; //declarar la variable data
    this.datos = respuesta.data
    data = respuesta.data;
    data.forEach(item => { resultado = item.nombre;  }); })
      .catch(err => { console.log(err); });
      let result = resultado.substring(0, 2);
      let tamanio = resultado.length.toString();
      if(result =="00")
      {
        let dato = resultado.substring(2, 8);
        this.VentanaGrabarG = false;
        this.MensajeOk = true;
        this.MensajeRes = "Practica Autorizada";
        this.MensajeRes1 = "Código de Autorización : "+ dato;
        this.limpiar();
        this.$refs.listado.fetchArticulosMed();
      }
      else
      {
        let dato = resultado;
        this.VentanaGrabarG = false;
        this.MensajeRechazado = true;
        this.MensajeRes = "Practica Rechazada";
        this.MensajeRes1 = dato;
        this.limpiar();
      }
   
  
      
    },
   async VerGrabar() {
      if(!this.codigo || this.codigo.length == 0)
      {
        this.VentanaGrabar = false;
        this.mostrarAlertaEliminar = false;
        this.mostrarAlertaSucesoMensaje = true;
        this.mensajeAlertaSuceso = "Debe validar un afiliado ";
        setTimeout(() => {
        this.mostrarAlertaSucesoMensaje = false;
        }, 5000);
        return;
      }
      if(!this.nombre || this.nombre.length == 0)
      {
        this.VentanaGrabar = false;
        this.mostrarAlertaEliminar = false;
        this.mostrarAlertaSucesoMensaje = true;
        this.mensajeAlertaSuceso = "Debe validar un afiliado ";
        setTimeout(() => {
        this.mostrarAlertaSucesoMensaje = false;
        }, 5000);
        return;
      }
      if (this.ValorCombo == 0) {
        //this.$refs.nombreField.$el.querySelector('input').focus();
        this.VentanaGrabar = false;
        this.mostrarAlertaEliminar = false;
        this.mostrarAlertaSucesoMensaje = true;
        this.mensajeAlertaSuceso = "Debe seleccionar una practica ";
        setTimeout(() => {
        this.mostrarAlertaSucesoMensaje = false;
        }, 5000);
        return;
   }
   //control de practica, elemento y cara 
   //api/ConsultarWs/ValidaCara?pObra=270&pCodigo=201&pElemento=12&pCaras=O
   ////////////////////////////////////////
   //////////////////////////////////////////
   let elemento = this.Elemento;
   let cara = this.Cara;
   let practica = this.ValorCombo;
   if(elemento =="")
   elemento = "-";
  if(cara =="")
    cara="-";
   
   let control = "";
    const respuesta = await this.axios.get(`api/ConsultarWs/ValidaCara?pObra=270&pCodigo=${practica}&pElemento=${elemento}&pCaras=${cara}`, {
  }).then((respuesta) => {
    let data = []; //declarar la variable data
    this.datos = respuesta.data
    data = respuesta.data;
    data.forEach(item => { control = item.nombre;  }); })
      .catch(err => { console.log(err); });
   /////////////////////////////////////////
   /////////////////////////////////////////
   if(control !="OK"){
    this.VentanaGrabar = false;
        this.mostrarAlertaEliminar = false;
        this.mostrarAlertaSucesoMensaje = true;
        this.mensajeAlertaSuceso = control;
        setTimeout(() => {
        this.mostrarAlertaSucesoMensaje = false;
        }, 5000);
        return;

   }
   
       this.VentanaGrabarG = true;
       this.mostrarAlertaGrabar = true;
   },
   cerrar() {
       
       this.VentanaGrabarG = false;
       this.mostrarAlertaGrabar = false;
   },
    nuevo(){
      this.codigo = "";
      this.nombre = "";
      this.codcoseguro = "";
      this.coseguro = "";
      this.Elemento = "";
      this.Cara = "";
      this.ValorCombo = "0";
    },
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
      if(!this.codigo || this.codigo.length == 0)
      {
        this.VentanaGrabar = false;
        this.mostrarAlertaEliminar = false;
        this.mostrarAlertaSucesoMensaje = true;
        this.mensajeAlertaSuceso = "Ingresar un DNI de un afiliado a validar ";
        setTimeout(() => {
        this.mostrarAlertaSucesoMensaje = false;
        }, 5000);
        return;
      }
       this.nroremitoPasado = this.codigo;
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
     if(this.coseguro=="")
     {
      this.coseguro = "-";
      this.codcoseguro = "-";
     }
          
              
     if(this.nombre == ""){
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
 