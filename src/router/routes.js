
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'about', component: () => import('pages/About.vue')},
      { path: 'kanji-list', component: () => import('pages/Index.vue') },
      { path: '', redirect: 'kanji-list' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
