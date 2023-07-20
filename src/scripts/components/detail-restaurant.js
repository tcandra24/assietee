import CONFIG from '../config/index';

class DetailRestaurant extends HTMLElement {
  set item(value) {
    this._item = value;
    this.render();
  }

  get item() {
    return this._item;
  }

  render() {
    this.innerHTML = `
      <div class="detail__restaurant">
        <h2 class="restaurant__title" tabindex="0">${this._item.name}</h2> 
        <img class="restaurant-detail__img lazyload" data-src="${CONFIG.IMAGE_URL}/large/${this._item.pictureId}" alt="${this._item.name}" />
        <div class="restaurant__info">
          <h3>Information</h3>
          <h4>Alamat</h4>
          <p tabindex="0">${this._item.address}</p>
          <h4>Kota</h4>
          <p tabindex="0">${this._item.city}</p>
          <h4>Deskripsi</h4>
          <p tabindex="0">${this._item.description} </p>
          <br>
          <div class="list__menu">
            <div class="food__container">
              <h3>Menu Makanan</h3>
              <ul id="list-menu-foods"></ul>
            </div>
            <div class="drink__container">
              <h3>Menu Minuman</h3>
              <ul id="list-menu-drinks"></ul>
            </div>
          </div>
        </div>
      </div>
      <div class="review__container">
        <h2> Ulasan <h2>
        <list-review></list-review>
      </div>
      <div id="favoriteButtonContainer"></div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
