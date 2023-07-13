import { openDB } from 'idb';

const dbPromise = openDB('restaurant-database', 1, {
  upgrade(database) {
    database.createObjectStore('restaurants', { keyPath: 'id' });
  },
});

class FavoriteRestaurant {
  static async getRestaurant(id) {
    return (await dbPromise).get('restaurants', id);
  }

  static async getAllRestaurants() {
    return (await dbPromise).getAll('restaurants');
  }

  static async putRestaurant(movie) {
    return (await dbPromise).put('restaurants', movie);
  }

  static async deleteRestaurant(id) {
    return (await dbPromise).delete('restaurants', id);
  }
}

export default FavoriteRestaurant;
