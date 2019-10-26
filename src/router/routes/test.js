
export const test=[
    {
        path: '/home',
        name: 'home',
        component:()=>import('../../views/home.vue'),
        redirect:{name:'about'},
        meta:{
          requireAuth:true
        },
        children:[
          {
            path:'/about',
            name:'about',
            component:()=>import('../../views/about.vue')
          },
          {
            path:'/bingou',
            name:'bingou',
            component:()=>import('../../views/bingou.vue')
          }
        ]
      },
      {
        path:'/test/:id',
        name:'test',
        component:()=>import ('../../views/test.vue')
      }    
]