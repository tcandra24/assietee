class Api {
  static async fetchRestaurant(url) {
    const response = await fetch(`${url}/list`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(url, id) {
    const response = await fetch(`${url}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default Api;
