import Api from '../../api/index';

import '../../components/list-items';
import '../../components/single-item';

import CONFIG from '../../config/index';

class Restaurant {
  static async render() {
    return `
    <section class="hero">
      <img src="./images/heros/hero-image_4.jpg" alt="Image Hero">
    </section>
    <section class="content" id="main-content" tabindex="0" aria-label="All Restaurant">
        <h1> - All Restaurant - </h1>
      <list-items></list-items>
    </section>   
    `;
  }

  static async afterRender() {
    const listItemsElement = document.querySelector('list-items');

    const restaurants = await Api.fetchRestaurant(CONFIG.API_URL);
    listItemsElement.items = restaurants;
  }
}

export default Restaurant;
