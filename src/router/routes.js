import EmptyRouterView from "components/EmptyRouterView";
import ChildOneView from "components/ChildOneView";
import MyDialog from "components/MyDialog";
import EssentialLink from "components/EssentialLink";
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/Index.vue') }
      ,
      { path: '', component: EmptyRouterView, name: 'dialog', children: [
          {
            name: 'route.child-one',
            path: 'child-one',
            component: ChildOneView
          }
          ,
          {
            name: 'nested.dialog',
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
