
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        name: 'index',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/usuarios/',
        name: 'usuarios',
        component: () => import('pages/Usuarios.vue')
      },
      {
        path: '/acerca/',
        name: 'acerca',
        component: () => import('pages/Acerca.vue')
      }
    ]
  },
  { // Nuevas rutas
    path: '/',
    component: () => import('layouts/Users.vue'),
    children: [
      { path: '/login/',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: '/register/',
        name: 'register',
        component: () => import('pages/Register.vue')
      }
    ]
  }
]

export default routes
