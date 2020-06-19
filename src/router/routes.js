import EmptyRouterView from "components/EmptyRouterView";
import ChildOneView from "components/ChildOneView";
import MyDialog from "components/MyDialog";
import EssentialLink from "components/EssentialLink";
let  names = {
  index: 'index',
  users: 'users',
  user: {
    child: 'user.child-one',
    dialog: 'user.dialog'
  }
}
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: names.index, path: 'index', component: () => import('pages/Index.vue') }
      ,
      { name: names.users, path: '', component: EmptyRouterView, children: [
          {
            name: names.user.child,
            path: 'child-one',
            component: ChildOneView
          }
          ,
          {
            name: names.user.dialog,
            path: 'dialog/:userId',
            components: {
              // default: EssentialLink,
              dialog: MyDialog
            }
          }
        ]}
      // {
      //   name: 'route.child-two',
      //   path: 'child-two',
      //   component: ChildTwoView
      // }
    ]
  },
  // {
  //   path: '/my-route',
  //   component: EmptyRouterView,
  //   children: [{
  //     name: 'route',
  //     path: '',
  //     component: MyRouteView
  //   }]
  // }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
export const routeNames = names
