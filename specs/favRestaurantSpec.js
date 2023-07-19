import FavoriteInitiator from '../src/scripts/utils/favorite-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

describe('Liking A Restaurant', () => {
  const addfavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addfavoriteButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
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

    expect(document.querySelector('[aria-label="fav resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
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

    expect(document.querySelector('[aria-label="not fav resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
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

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1,
      name: 'resto-1',
      description: 'desc-1',
      pictureId: 'pict-1',
      city: 'city-1',
      rating: 'rating-1',
    });
    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a resto again when its already liked', async () => {
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

    await FavoriteRestaurant.putRestaurant({
      id: 1,
      name: 'resto-1',
      description: 'desc-1',
      pictureId: 'pict-1',
      city: 'city-1',
      rating: 'rating-1',
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([{
      id: 1,
      name: 'resto-1',
      description: 'desc-1',
      pictureId: 'pict-1',
      city: 'city-1',
      rating: 'rating-1',
    }]);

    FavoriteRestaurant.deleteRestaurant(1);
  });
});
