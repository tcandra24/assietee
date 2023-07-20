import Api from '../../api/index';

import '../../components/list-items';
import '../../components/single-item';

import CONFIG from '../../config/index';

class Restaurant {
  static async render() {
    return `
    <section class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
        <img src='./images/hero-image-large.jpg' alt="Image Hero">
      </picture>
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
