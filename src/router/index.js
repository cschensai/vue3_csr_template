import { createRouter, createWebHistory } from 'vue-router';

// 路由信息
const routes = [
    {

        path: "/",
        name: "Template",
        component:  () => import('../views/template/index.vue'),
    },
    {   
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component:  () => import('../components/404/index.vue'),
    },
];

const router = createRouter({
  // 设置baseUrl，为了适配nginx上的处理
  history: createWebHistory('/template'),
  routes,
});

export default router;
