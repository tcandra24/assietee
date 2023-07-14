class ListReview extends HTMLElement {
  set items(value) {
    this._items = value;
    this.render();
  }

  get items() {
    return this._items;
  }

  render() {
    this._items.forEach((item) => {
      const singleReviewElement = document.createElement('single-review');
      singleReviewElement.item = item;
      this.appendChild(singleReviewElement);
    });
  }
}

customElements.define('list-review', ListReview);
