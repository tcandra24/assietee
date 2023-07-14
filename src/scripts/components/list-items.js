class ListItems extends HTMLElement {
  set items(value) {
    this._items = value;
    this.render();
  }

  get items() {
    return this._items;
  }

  render() {
    this._items.forEach((item) => {
      const singleItemElement = document.createElement('single-item');
      singleItemElement.item = item;
      this.appendChild(singleItemElement);
    });
  }
}

customElements.define('list-items', ListItems);
