<template >
  
  <barra-navegacion></barra-navegacion>
  <v-card  class="px-4 py-2  text-right w-100 bg-light" elevation="3"  style="max-width: 1350px; margin: 0 auto;">
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
      <b>   Validación de Bono de Consulta Odontologica On Line  </b> 
  
      
     </v-alert>
   </div>
   <br>
  <div class="iframe-container">
    
  <iframe
      width="600"
      height="400"
      src="http://excelencia.myqnapcloud.com:3002/colodon/pruebaframa.aspx?nro=18562325&Matri=00720"
      frameborder="0"
      allowfullscreen
      
    ></iframe>
    </div>
  </v-card>   
</template>
<script>

//import datos from "../assets/json/pokemones.json";
import ListadoConsumoIngreso from  '../components/ListadoConsumoIngreso.vue';
import BuscarArticulos from '../components/BuscarArticulos.vue';
import BarraNavegacion from '@/components/BarraNavegacion.vue';
import Spinner from '@/components/Spinner.vue';
import AlertaSuceso from '@/components/AlertaSuceso.vue';
import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select';
import DataTablesCore from 'datatables.net-bs5';
import Buttons from 'datatables.net-buttons-bs5';
import 'datatables.net-responsive-bs5';
import AlertaMensaje from '@/components/AlertaMensaje.vue';
import ListadoProveedores from '@/components/ListadoProveedores.vue';




import { ref } from 'vue';
const table = ref();
export default {
  arreglobuscador: [],
  name: 'TableCom',
  name: "Formularios",
  components: {
    'spinner': Spinner,
    'barra-navegacion': BarraNavegacion,
    'alerta-suceso': AlertaSuceso,
    BuscarArticulos,
    ListadoProveedores,
    AlertaMensaje,
    ListadoConsumoIngreso,
     DataTable
  },
  name: 'Pokemones',
  props: {
    msg: String
  },
  
  data: function () {
    return {
      datos: null,
      VentanaGrabar: false,
      VentanaP: false,
      Fecha:'',
      Lote:'',
      valor:'',
      buscar: '',
      nombre: "",
      codigo: "",
      fecha: "",
      FecVen: "",
      Fec: "",
      cantidad: "",
      nproveedor: "",
      iframeSrc: "", // Inicializa la propiedad que contendrá el src del iframe
      nro: "00720",  // Ejemplo de valor inicial para el parámetro 'nro'
      name: "IframeExample",
      //IdTipo: "",
      mostrarAlertaSuceso: false,
      mensajeAlertaSuceso:"",
      mostrarAlertaEliminar: false,
      nroremitoPasado: '',
      
    
    
      
    }
  },
  created() {
    
    this.idUsuario = this.$store.state.id_usuario;
    //src="http://excelencia.myqnapcloud.com:3002/colodon/pruebaframa.aspx?nro=18562325&Matri=00720"
    this.iframeSrc = `http://excelencia.myqnapcloud.com:3002/colodon/pruebaframa.aspx?nro=1&Matri=${this.idUsuario}`;
    
  },
  computed: {
           
 
          
   
         
        },
  methods: {
  
  
  
  
  
   
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