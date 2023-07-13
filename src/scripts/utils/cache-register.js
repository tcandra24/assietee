import CONFIG from '../config/index';

class CacheHelper {
  static async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  }

  static async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  }

  static async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  }

  static async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  }

  static async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  }

  static async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  }
}

export default CacheHelper;
