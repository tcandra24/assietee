import CONFIG from '../config/index';

class SingleItem extends HTMLElement {
  set item(value) {
    this._item = value;
    this.render();
  }

  get item() {
    return this._item;
  }

  render() {
    this.innerHTML = `
    <article class="card" tabindex="0">
        <header class="card__header">
            <div class="card__title">
                <h1 tabindex="0"><a class="title" href="/#/detail/${this._item.id}">${this._item.name}</a></h1>
            </div>
            <a class="title" href="/#/detail/${this._item.id}">
              <img class="card__image" src="${CONFIG.IMAGE_URL}/small/${this._item.pictureId}" alt="${this._item.name}" tabindex="0">
            </a>
        </header>
        <section class="card__body">
            <div class="card__body__subtitle"> 
                <p tabindex="0">${this._item.city} (${this._item.rating})</p>
            </div>
          <div class="card__body__text">
                <p tabindex="0">
                  ${this._item.description.substring(0, 100)} ...
                </p>
          </div>
        </section>
    </article>
    `;
  }
}

customElements.define('single-item', SingleItem);
