import { openDB } from 'idb';
import CONFIG from '../config/index';

const dbPromise = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(CONFIG.OBJECT_NAME, { keyPath: 'id' });
  },
});

class FavoriteRestaurant {
  static async getRestaurant(id) {
    return (await dbPromise).get(CONFIG.OBJECT_NAME, id);
  }

  static async getAllRestaurants() {
    return (await dbPromise).getAll(CONFIG.OBJECT_NAME);
  }

  static async putRestaurant(restaurant) {
    return (await dbPromise).put(CONFIG.OBJECT_NAME, restaurant);
  }

  static async deleteRestaurant(id) {
    return (await dbPromise).delete(CONFIG.OBJECT_NAME, id);
  }
}

export default FavoriteRestaurant;
