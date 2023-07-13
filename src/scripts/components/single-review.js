class SingleReview extends HTMLElement {
  set item(value) {
    this._item = value;
    this.render();
  }

  get item() {
    return this._item;
  }

  render() {
    this.innerHTML = `
    <section class="review__body">
      <div class="review__body__subtitle"> 
          <p tabindex="0">${this._item.name}</p>
          <span tabindex="0">${this._item.date}</span>
      </div>
      <div class="review__body__text">
        <p tabindex="0">
          ${this._item.review}
        </p>
      </div>
    </section>
    `;
  }
}

customElements.define('single-review', SingleReview);
