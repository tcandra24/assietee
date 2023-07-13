class DrawerInitiator {
  static init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  }

  static _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  }

  static _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
}

export default DrawerInitiator;
