import FavoriteRestaurant from '../../data/favorite-restaurant';

import '../../components/list-items';
import '../../components/single-item';

class Favorite {
  static async render() {
    return `
    <section class="content" id="main-content" tabindex="0" aria-label="Favorite Restaurant">
      <h1> - Favorite Restaurant - </h1>
      <div id="favorite-container">
      </div>
    </section>   
    `;
  }

  static async afterRender() {
    const FavoriteContainer = document.querySelector('#favorite-container');
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    if (restaurants.length > 0) {
      const ListItemsElement = document.createElement('list-items');
      FavoriteContainer.append(ListItemsElement);
      const listItemsElement = document.querySelector('list-items');
      listItemsElement.items = restaurants;
    } else {
      FavoriteContainer.innerHTML = "<div class='restaurant-not-found'>Tidak ada resto favorite</div>";
    }
  }
}

export default Favorite;
