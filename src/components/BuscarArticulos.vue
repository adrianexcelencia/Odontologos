<template>
    <div>
    
      
<div class="row" >
             
                
                <div class="col  p-3 text-center ">
                    <v-text-field v-model="searchQuery" label="Ingrese articulo a buscar" append-inner-icon="mdi-magnify" variant="underlined" size="small" ></v-text-field>
                </div>
          </div>
      
      <table class="table table-bordered table-hover ">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in paginatedRows" :key="rowIndex">
            <td v-for="(header, colIndex) in headers" :key="colIndex">
                <v-chip class="d-flex  darken-1 sm bg-primary"   elevation="1"   > 
                {{ row[header] }}
            </v-chip>
            </td>
            <td>
              <button class="btn btn-primary mx-1 btn-sm" title="Editar"  rounded="xl" @click="mostrarModalEdicion(row)" v-if="$store.state.permisos.includes(10)">
                <v-icon dark>
                    mdi-checkbox-marked-circle
      </v-icon>
                                    </button>
          <!-- <v-btn @click="sendRowData(row)" class="bg-primary" >Ver</v-btn>-->  
          </td>
          </tr>
          
        </tbody>
      </table>
      
      <div class="pagination">
        <v-btn @click="prevPage" :disabled="currentPage === 1"  rounded="xl" class="bg-primary">Anterior</v-btn>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <v-btn @click="nextPage" :disabled="currentPage === totalPages"  rounded="xl" class="bg-primary">Siguiente</v-btn>
      </div>
      
    </div>
    <!--Mostrar ventana para eliminar-->
    <v-dialog
          v-model="dialog"
          persistent
          
           fullscreen
           
  > 
  <v-card>
  <div class="row shadow p-3" >
     
  </div>
 
       <!-- Componente modal de edición -->
       <EditarFilaModal  :fila="filaAEditar" />
  <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="cerrarventana()"
            prepend-icon="mdi-close" 
          >
            CERRAR
          </v-btn>
        
        </v-card-actions>
        </v-card>
  </v-dialog>
  </template>
  
  <script>
  import EditarFilaModal from '../components/EditarFilaModal.vue';
  export default {
    props: {
    idConfig: {
      type: String,
      required: true
    }
    

  
  },
  components: {
        
        
        EditarFilaModal,
       // AlertaSuceso,
        //'spinner': Spinner,

    },
    data() {
      return {
        ListaFormulariosArticulos:'',
        rows: [],
        searchQuery: '',
        currentPage: 1,
        dialog: false,
        idConfigForm: null, // Inicializa idConfigForm en null
        itemsPerPage: 5
      };
    },
    created() {
        this.idUsuario = this.$store.state.id_usuario;
    this.fetchArticulosMed();
  },
    computed: {

      headers() {
        return this.rows.length > 0 ? Object.keys(this.rows[0]) : [];
      },
      filteredRows() {
        if (!this.searchQuery) {
          return this.rows;
        }
        const query = this.searchQuery.toLowerCase();
        return this.rows.filter(row => 
          Object.values(row).some(value => 
            String(value).toLowerCase().includes(query)
          )
        );
      },
      paginatedRows() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredRows.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.filteredRows.length / this.itemsPerPage);
      }
    },
    methods: {
      cerrarventana(){  
      this.dialog = false;
    },
      mostrarModalEdicion(Datos) {
        const entries = Object.entries(Datos);
        const primerpar = entries[0];
        const precio = entries[3];
        const nombre = entries[2];
        const codigo = entries[1];
        //const valor = V1; // El valor que deseas enviar
        this.$emit('valor-enviado', nombre[1]);
        this.$emit('valor-nroregistro', primerpar[1]);
        this.$emit('valor-precio', precio[1]);
        this.$emit('valor-codigo', codigo[1]);
      //alert("aca estoy");
      //console.log(Datos);
      //this.dialog = true;
      
      //alert(" Identificador "+Datos[0]);
        
      ///////
      //const keys = Object.keys(Datos);
      //alert(keys[0]); Nombre de la columna
      //const entries = Object.entries(Datos);
      //const primerpar = entries[0];  // Valor de la columna
      //alert('Dato de la fila seleccionada:', row);
      //console.log('Dato de la fila seleccionada:', primerpar[1]);
      //const idConfigForm = this.$route.params.idConfigForm;
      //const _identificador =primerpar[1];
      ////
      //console.log("aca envio los datos a editar");
      //console.log(Datos);
      //this.filaAEditar = Datos;
      //this.mostrarModal = true;
      
          
        },
    sendRowData(row) {
      this.dialog = true;
      const keys = Object.keys(row);
      //alert(keys[0]); Nombre de la columna
      const entries = Object.entries(row);
      const primerpar = entries[0];  // Valor de la columna
      //alert('Dato de la fila seleccionada:', row);
      console.log('Dato de la fila seleccionada:', primerpar[1]);
      //this.processRow(row);
      
    },
 
    async fetchArticulosMed() {
        
        //this.MostrarSpinner = true; //abrir spinner mientras realiza la solicitud 
        //const respuesta = await this.axios.get("/api/ConfigForm/ListaField?pTipo=2136")
        //const respuesta = await this.axios.get(`/api/ConfigForm/ListarArticulos?pTipo=${this.idConfig}`)
        const respuesta = await this.axios.get(`/api/ConfigForm/ListarArticulos?pTipo=${this.idUsuario}`)
          .then((respuesta) => {
            //this.ListaFormulariosArticulos = respuesta.data.lista
            this.rows = respuesta.data.lista;
            console.log("IMPORTANTE Muestro rows")
            console.table(this.rows);     
          })
          .catch(err => {
            //console.log(err);
          });
      // this.MostrarSpinner = false;//cerrar spinner cuando termine de realizar la solicitud
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  .table th {
    background-color: #f2f2f2;
    text-align: left;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  .pagination button {
    margin: 0 5px;
  }
  </style>
  
  