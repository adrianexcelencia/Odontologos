<template>
 <v-alert v-if="visible"
      text
      prominent
      type="error"
     
    >
 <h5>   {{ mensaje }}</h5>
    </v-alert>

    
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
      mensaje: String,
    },
  };
  </script>
  