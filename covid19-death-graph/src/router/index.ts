import Vue from 'vue';
import VueRouter from 'vue-router';
import GraphOne from '../views/GraphOne.vue';
import GraphTwo from '../views/GraphTwo.vue';
import GraphThree from '../views/GraphThree.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/graph-one'
  },
  {
    path: '/graph-one',
    name: 'GraphOne',
    component: GraphOne
  },
  {
    path: '/graph-two',
    name: 'GraphTwo',
    component: GraphTwo
  },
  {
    path: '/graph-three',
    name: 'GraphThree',
    component: GraphThree
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
