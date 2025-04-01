import { createRouter, createWebHistory } from 'vue-router';
import storage from '@/storage';
import HomeView from '../views/HomeView.vue'
import HomeViewp from '../views/prueba.vue'
import HomeViewp24 from '../views/TipoString.vue'
import HomeViewpTipoI from '../views/TipoInteger.vue'
import HomeViewpTipoII from '../views/TipoDouble.vue'
import HomeViewpTipoIII from '../views/TipoBoolean.vue'
import HomeViewpTipoIIII from '../views/TipoLabel.vue'
import HomeViewpTipoIIIII from '../views/TipoText.vue'
import HomeViewpTipoIIIIII from '../views/TipoDate.vue'
import HomeViewpTipoIIIIIII from '../views/TipoTime.vue'
import HomeViewpTipoIIIIIIII from '../views/TipoDateTime.vue'
import HomeViewpTipoIIIIIIIII from '../views/add.vue'
import HomeViewpTipoIIIIIIIIII from '../views/ListarField.vue'
import HomeViewpTipoIIIIIIIIIII from '../views/Medicamentos.vue'
import HomeViewpTipoIIIIIIIIIIII from '../views/datos.vue'
import HomeViewpTipoIIIIIIIIIIIII from '../views/principal.vue'
import HomeViewpTipoIIIIIIIIIIIIII from '../views/Devolucion.vue'
import HomeViewpTipoIIIIIIIIIIIIIII from '../views/Pacientes.vue'
import HomeViewpTipoIIIIIIIIIIIIIIII from '../views/InformeDevolucion.vue'
import HomeViewpTipoIIIIIIIIIIIIIIIII from '../views/InformeConsumo.vue'
import HomeViewpTipoIIIIIIIIIIIIIIIIII from '../views/Movimientos.vue'
import HomeViewpTipoIIIIIIIIIIIIIIIIIII from '../views/DeudaPaciente.vue'







import HomeViewpp from '../views/ManagerGrillaView.vue'

//Importar demas vistas

const routes = [{
        path: '/Inicio',
        name: 'Inicio',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/registro',
        name: 'registro',
        component: () =>
            import ('../views/RegistroUsuario')
    },
    {
        path: '/gestionModulos',
        name: 'gestionModulos',
        component: () =>
            import ( '../views/FormBuilderView.vue'),
            meta: { requiresAuth: true }
    },
    {
        path: '/gestionModulosM/:idConfigForm',
        name: 'gestionModulosM',
        component: () =>
            import ( '../views/Modificaformulario.vue'),
            meta: { requiresAuth: true }
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: () =>
            import ('../views/UsuariosView'),
            meta: { requiresAuth: true}
    },
    {
        path: '/crearusuario',
        name: 'crearusuario',
        component: () =>
            import ('../views/CrearUsuario'),
            meta: { requiresAuth: true}
    },
    {
        path: '/modules/:idConfigForm',
        name: 'modules  ',
        component: () =>
            import ('../views/ManagerModulesView'),
            meta: { requiresAuth: true },
    },
   
    {
        path: '/formularios',
        name: 'formularios',
        component: () =>
            import ('../views/FormulariosView'),
            meta: { requiresAuth: true },
    },
    {
        path: '/editForms/:id',
        name: 'editForms',
        component: () =>
            import ('../views/EditForms'),
            meta: { requiresAuth: true },
    },
    {
        path: '/prueba',
        name: 'prueba',
        component: HomeViewp,
            meta: { requiresAuth: true },
    },
    {
        path: '/TipoString',
        name: 'TipoString',
        component: HomeViewp24,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoInteger',
        name: 'TipoInteger',
        component: HomeViewpTipoI,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoDouble',
        name: 'TipoDouble',
        component: HomeViewpTipoII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoBoolean',
        name: 'TipoBoolean',
        component: HomeViewpTipoIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoLabel',
        name: 'TipoLabel',
        component: HomeViewpTipoIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoText',
        name: 'TipoText',
        component: HomeViewpTipoIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoDate',
        name: 'TipoDate',
        component: HomeViewpTipoIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoTime',
        name: 'TipoTime',
        component: HomeViewpTipoIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/TipoDateTime',
        name: 'TipoDateTime',
        component: HomeViewpTipoIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/Medicamentos',
        name: 'Medicamentos',
        component: HomeViewpTipoIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/datos/:idConfigForm',
        name: 'datos',
        component: HomeViewpTipoIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/principal/:idConfigForm',
        name: 'principal',
        component: HomeViewpTipoIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/Devolucion',
        name: 'devolucion',
        component: HomeViewpTipoIIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/Pacientes',
        name: 'pacientes',
        component: HomeViewpTipoIIIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/InformeDevolucion',
        name: 'informeDevolucion',
        component: HomeViewpTipoIIIIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/InformeConsumo',
        name: 'informeConsumo',
        component: HomeViewpTipoIIIIIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/Movimientos',
        name: 'movimientos',
        component: HomeViewpTipoIIIIIIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/DeudaPaciente',
        name: 'dedudapaciente',
        component: HomeViewpTipoIIIIIIIIIIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    
    {
        path: '/add',
        name: 'add',
        component: HomeViewpTipoIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/ListarField/:idConfigForm',
        name: 'ListarField',
        component: HomeViewpTipoIIIIIIIIII,
            meta: { requiresAuth: true },
            
    },
    {
        path: '/modules/:idConfigForm',
        name: 'modules  ',
        component: () =>
            import ('../views/ManagerModulesView'),
            meta: { requiresAuth: true },
    },
    {
        path: '/grilla/:idConfigForm',
        name: 'grilla  ',
        component: HomeViewpp,
            meta: { requiresAuth: true },
    },
    {
        path: '/',
        name: 'Acceder',
        component: () =>
            import ('../views/LoginView'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // Si la ruta requiere autenticación
    if (to.meta.requiresAuth) {
      // Verifica si el usuario está autenticado
      if (!storage.state.isAuthenticated) {
        return next({ name: 'Acceder' }); // Redirige a la página de inicio de sesión
      }
    }
    next();
  });
  
  
export default router