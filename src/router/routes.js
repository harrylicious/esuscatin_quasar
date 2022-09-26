
const routes = [
  {
    path: '/',
    bulan: 'Test',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageUsers.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/PageChat.vue') },
      { path: '/users', component: () => import('pages/PageUsers.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') },
      { path: '/home', component: () => import('pages/PageHome.vue') },
      { path: '/about', component: () => import('pages/PageAbout.vue') },
      { path: '/report', component: () => import('pages/PageReport.vue') },
      { path: '/detailreport/:bulan', component: () => import('pages/PageDetailReport.vue') },
      { path: '/share', component: () => import('pages/PageHome.vue') },

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
