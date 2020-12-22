
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'about', component: () => import('pages/About.vue')},
      { path: 'kanji-list/:section', component: () => import('pages/Index.vue') },
      { path: 'kanji-list', redirect:'kanji-list/あ' },
      { path: '', redirect:'kanji-list/あ' },
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
