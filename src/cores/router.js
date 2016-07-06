import { VueRouter } from '../cores'

import HeroListPage from '../pages/HeroListPage'
import HeroProfilePage from '../pages/HeroProfilePage'

const router = new VueRouter({
  history: true
})

router.map({
  '/heroes': {
    component: HeroListPage,
    subRoutes: {
      '/:heroId': {
        name: 'hero',
        component: HeroProfilePage
      }
    }
  }
})

router.redirect({
  '/': '/heroes',
  '*': '/'
})

export default router
