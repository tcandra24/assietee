import FavoriteRestaurant from '../../../data/favorite-restaurant';

import '../../../components/list-items';
import '../../../components/single-item';

class Favorite {
  static async render() {
    return `
    <section class="content" id="main-content" tabindex="0" aria-label="Favorite Restaurant">
        <h1> - Favorite Restaurant - </h1>
      <list-items></list-items>
    </section>   
    `;
  }

  static async afterRender() {
    const listItemsElement = document.querySelector('list-items');

    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    listItemsElement.items = restaurants;
  }
}

export default Favorite;
