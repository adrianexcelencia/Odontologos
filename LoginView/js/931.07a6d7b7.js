"use strict";(self["webpackChunkprueba"]=self["webpackChunkprueba"]||[]).push([[931],{5931:function(a,s,o){o.r(s),o.d(s,{default:function(){return D}});var e=o(3396),l=o(9242),r=o(7139);const i={class:"shadow p-3 text-sm text-center","align-center":"",style:{"max-width":"1200px"}},t={class:"row"},n={class:"col-4"},c=(0,e._)("b",null," Crea un nuevo usuario",-1),u={class:"row"},d={class:"col-6"},m=["value"],p={class:"col-6"},v={class:"form-group"},h=(0,e._)("label",{for:"permisos"},"Permisos:",-1),b=(0,e._)("br",null,null,-1),g={class:"permisos-check"},f=["id","value"],w=["for"],_=(0,e._)("div",{class:"row"},[(0,e._)("div",{class:"col-4"}),(0,e._)("div",{class:"col-4"}),(0,e._)("div",{class:"col-4"})],-1),C=(0,e._)("br",null,null,-1),V=(0,e._)("button",{type:"reset",class:"btn btn-outline-secondary btn-sm m-1"},[(0,e._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square-fill",viewBox:"0 0 16 16"},[(0,e._)("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"})]),(0,e.Uk)(" Cancelar")],-1),x={type:"submit",class:"btn btn-outline-success btn-sm m-1"},k=(0,e._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-floppy-fill",viewBox:"0 0 16 16"},[(0,e._)("path",{d:"M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5v-13Z"}),(0,e._)("path",{d:"M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V16Zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V0ZM9 1h2v4H9V1Z"})],-1),y={class:"loadingLineal"},L=(0,e.uE)('<h1>Linear loader</h1><div class="bar-loadinglineal"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>',2),U=[L];function M(a,s,o,L,M,E){const H=(0,e.up)("barra-navegacion"),S=(0,e.up)("v-chip"),A=(0,e.up)("v-text-field");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(H),(0,e._)("div",i,[(0,e._)("div",t,[(0,e._)("div",n,[(0,e.Wm)(S,{class:"d-flex darken-1 sm",color:"#000000",elevation:"1"},{default:(0,e.w5)((()=>[c])),_:1})])]),(0,e._)("form",{onSubmit:s[4]||(s[4]=(0,l.iM)(((...a)=>E.crearUsuario&&E.crearUsuario(...a)),["prevent"]))},[(0,e._)("div",u,[(0,e._)("div",d,[(0,e.Wm)(A,{type:"text",id:"usuario",label:"Usuario",modelValue:M.usuario,"onUpdate:modelValue":s[0]||(s[0]=a=>M.usuario=a),required:"",variant:"underlined",block:"",clearable:"",autocomplete:"off"},null,8,["modelValue"]),(0,e.Wm)(A,{type:"text",id:"clave",label:"Contraseña",modelValue:M.clave,"onUpdate:modelValue":s[1]||(s[1]=a=>M.clave=a),required:"",variant:"underlined",block:"",clearable:"",autocomplete:"off"},null,8,["modelValue"]),(0,e.Wm)(S,{class:"d-flex darken-1 sm",color:"#000000",elevation:"1"},{default:(0,e.w5)((()=>[(0,e.Uk)(" Seleccionar una Instituciones ")])),_:1}),(0,e.wy)((0,e._)("select",{"onUpdate:modelValue":s[2]||(s[2]=a=>M.ValorCombo=a),class:"form-select",id:"Combo"},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(M.ListaCombos,(a=>((0,e.wg)(),(0,e.iD)("option",{key:a.codigo,value:a.codigo},(0,r.zw)(a.nombre),9,m)))),128))],512),[[l.bM,M.ValorCombo]])]),(0,e._)("div",p,[(0,e._)("div",v,[(0,e.Wm)(S,{class:"d-flex darken-1 sm",color:"#000000",elevation:"1"},{default:(0,e.w5)((()=>[h])),_:1}),b,(0,e._)("div",g,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(M.permisos,((a,o)=>((0,e.wg)(),(0,e.iD)("div",{class:"form-check",key:o},[(0,e.wy)((0,e._)("input",{type:"checkbox",id:a,class:"form-check-input",value:o+1,"onUpdate:modelValue":s[3]||(s[3]=a=>M.permisosSeleccionados=a)},null,8,f),[[l.e8,M.permisosSeleccionados]]),(0,e._)("label",{for:a,class:"form-check-label"},(0,r.zw)(a),9,w)])))),128))])])])]),_,C,(0,e._)("div",null,[V,(0,e.wy)((0,e._)("button",x,[k,(0,e.Uk)(" Guardar")],512),[[l.F8,!M.loading]]),(0,e.wy)((0,e._)("div",y,U,512),[[l.F8,M.loading]])])],32)])],64)}o(7658);var E=o(5853),H={name:"acceso",components:{"barra-navegacion":E.Z},data(){return{usuario:"",codigo:"",nombre:"",ListaCombos:null,ValorCombo:"",clave:"",permisos:["Crear usuarios","Editar usuarios","Ver usuarios","Editar permisos","Eliminar usuarios","Crear formularios","Ver formularios","Eliminar formularios","Responder formularios","Editar respuestas","Ver respuestas","Eliminar respuestas"],permisosSeleccionados:[],loading:!1,error:null}},created(){this.MostrarCombo()},methods:{async MostrarCombo(){this.MostrarSpinner=!0;await this.axios.get("/api/ConfigForm/ListaCombo?pTipo=2&pId=0").then((a=>{this.ListaCombos=a.data.lista,console.log("Lista Combos"),console.log(this.ListaCombos),0==this.ListaFormularios.length&&(this.NoHayRegistros=!0)})).catch((a=>{console.log(a)}));this.MostrarSpinner=!1},async crearUsuario(){var a={username:this.usuario,password:this.clave,roleID:1,permisos:this.permisosSeleccionados.map((a=>({permisoId:a})))};console.log("ver datos"),console.log(a),await this.axios.post("/api/Usuarios/guardarUsuario",a).then((a=>{this.$router.push("/usuarios"),alert("guardado con exito")})).catch((a=>{a.response&&400===a.response.status?this.error="Este usuario ya existe":console.log("Error en el registro:",a)})),this.loading=!1}}},S=o(89);const A=(0,S.Z)(H,[["render",M]]);var D=A}}]);
//# sourceMappingURL=931.07a6d7b7.js.map