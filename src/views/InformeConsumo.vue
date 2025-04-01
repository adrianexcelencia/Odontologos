<template>
    <barra-navegacion></barra-navegacion>
    <div  class="shadow p-3  bg-light text-sm " align-center style="max-width: 1350px; " >
      <div class="text-left ">
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
      <b>   Descarga de bonos de consultas   </b> 
  
      
     </v-alert>
   </div>
   <br>
      <div class="iframe-container">
  <iframe
      width="600"
      height="1000"
      :src="iframeSrc"
      frameborder="0"
      allowfullscreen
      scrolling="no"
    ></iframe>
    </div>
    </div>
    </template>
    <script>
      import ListarDevolucionesInforme from '@/components/ListarDevolucionesInforme.vue';
      import ListarConsumoInforme from '@/components/ListarConsumoInforme.vue';
      import BarraNavegacion from '@/components/BarraNavegacion.vue';
      export default {
        components: {
            'barra-navegacion': BarraNavegacion,
            ListarConsumoInforme
      },
      data: function () {
    return {
      datos: null,
      VentanaGrabar: false,
      VentanaP: false,
      Fecha:'',
      Lote:'',
      idUsuario: '',
      iframeSrc: "", // Inicializa la propiedad que contendrá el src del iframe
      nro: "00720",  // Ejemplo de valor inicial para el parámetro 'nro'
      name: "IframeExample",
    
    }
  },
  created() {
    
    this.idUsuario = this.$store.state.id_usuario;
    this.iframeSrc = `http://excelencia.myqnapcloud.com:3002/colodon/Listadoigrame.aspx?nro=${this.idUsuario}`;
    //alert(this.iframeSrc);
    
  },
  mounted() {
    this.idUsuario = this.$store.state.usuario;
    this.iframeSrc = `http://excelencia.myqnapcloud.com:3002/colodon/Listadoigrame.aspx?nro=${this.idUsuario}`;
    //alert(this.idUsuario);
   },
      }
    </script>
    <style>
    .iframe-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
      height: 0;
    }
    
    .iframe-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
    @import 'datatables.net-dt';
    .custom-margin-botonN{
      margin-left: 115px; /* Ajusta el valor según tus necesidades */
    }
     .table-container {
      max-height: 420px; /* ajusta la altura máxima según tus necesidades */
      overflow-y: auto;
    }
    tr.v-data-table__selected {
      background: #7d92f5 !important;
    }
    </style>