import Restaurants from '../scripts/views/pages/restaurants';
import Detail from '../scripts/views/pages/detail';
import Favorite from '../scripts/views/pages/favorite';

const routes = {
  '/': Restaurants, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
