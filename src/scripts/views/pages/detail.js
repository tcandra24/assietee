import Api from '../../../api/index.js';
import UrlHelper from '../../../utils/url-helper.js';
import '../../../components/detail-restaurant.js';
import '../../../components/list-review.js';
import '../../../components/single-review.js';

import FavoriteInitiator from '../../../utils/favorite-initiator.js';

class Detail {
  static async render() {
    return `
    <div class="content">
      <detail-restaurant></detail-restaurant>
    </div>
    `;
  }

  static async afterRender() {
    const DetailElement = document.querySelector('detail-restaurant');

    const url = UrlHelper.parseActiveUrlWithoutCombiner();
    const restaurant = await Api.detailRestaurant('https://restaurant-api.dicoding.dev', url.id);
    DetailElement.item = restaurant;

    const ReviewElement = document.querySelector('list-review');
    ReviewElement.items = restaurant.customerReviews;

    const ListMenuFoodElement = document.querySelector('#list-menu-foods');
    const ListMenuDrinkElement = document.querySelector('#list-menu-drinks');
    const { foods, drinks } = restaurant.menus;

    foods.forEach((item) => {
      const LiElement = document.createElement('li');
      LiElement.innerText = item.name;
      ListMenuFoodElement.appendChild(LiElement);
    });

    drinks.forEach((item) => {
      const LiElement = document.createElement('li');
      LiElement.innerText = item.name;
      ListMenuDrinkElement.appendChild(LiElement);
    });

    FavoriteInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  }
}

export default Detail;
