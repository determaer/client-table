import { createRouter, createWebHashHistory } from 'vue-router';
import ClientTable from '../components/ClientTable.vue';
import AnotherComponent from '../components/AnotherComponent.vue';
import TwoLinks from '../components/TwoLinks.vue';

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      component: TwoLinks,
      children: [
        {
          path: 'clients',
          component: ClientTable,
        },
        {
          path: 'another',
          component: AnotherComponent,
        }
      ]
    }

  ]
})

export default router
