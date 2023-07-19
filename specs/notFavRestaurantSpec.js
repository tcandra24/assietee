import FavoriteInitiator from '../src/scripts/utils/favorite-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

describe('Unliking A Restaurant', () => {
  const addfavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };
 
  beforeEach(async () => {
    addfavoriteButtonContainer();
    await FavoriteRestaurant.putRestaurant({
      id: 1,
      name: 'resto-1',
      description: 'desc-1',
      pictureId: 'pict-1',
      city: 'city-1',
      rating: 'rating-1',
    });
  });
 
  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });
 
  it('should display unlike widget when the resto has been liked', async () => {
    await FavoriteInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
        name: 'resto-1',
        description: 'desc-1',
        pictureId: 'pict-1',
        city: 'city-1',
        rating: 'rating-1',
      },
    });
 
    expect(document.querySelector('[aria-label="not fav resto"]'))
      .toBeTruthy();
  });
 
  it('should not display like widget when the resto has been liked', async () => {
    await FavoriteInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
        name: 'resto-1',
        description: 'desc-1',
        pictureId: 'pict-1',
        city: 'city-1',
        rating: 'rating-1',
      },
    });
 
    expect(document.querySelector('[aria-label="fav resto"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await FavoriteInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
        name: 'resto-1',
        description: 'desc-1',
        pictureId: 'pict-1',
        city: 'city-1',
        rating: 'rating-1',
      },
    });
    document.querySelector('[aria-label="not fav resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await FavoriteInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
        name: 'resto-1',
        description: 'desc-1',
        pictureId: 'pict-1',
        city: 'city-1',
        rating: 'rating-1',
      },
    });

    await FavoriteRestaurant.deleteRestaurant(1);

    document.querySelector('[aria-label="not fav resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
