import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/test',
    meta: { title: 'head1', icon: 'link' },
    children: [
      {
        path: 'test',
        component: () => import('@/views/test1'),
        name: 'test',
        meta: { title: 'test', icon: 'link', roles: ['admin'] },

        children: [
          {
            path: 'test1',
            component: () => import('@/views/test2'),
            name: 'test1',
            meta: { title: 'test1', icon: 'link', activeMenu: '/test/test1' }
          },
          {
            path: 'test3',
            component: () => import('@/views/test2'),
            name: 'test3',
            meta: { title: 'test3', icon: 'link', activeMenu: '/test/test1' },
            hidden: true
          }

        ]
      },
      {
        path: 'test2',
        component: () => import('@/views/test2'),
        name: 'test2',
        meta: { title: 'test2', icon: 'link', roles: ['admin'] }
      }
    ]
  }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */

export const asyncRoutes = []

const createRouter = () =>
  new Router({
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
