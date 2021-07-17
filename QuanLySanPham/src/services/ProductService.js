import callApi from '../utils/callApi.js';

class ProductService {
  fetchProducts = () => callApi('products', 'GET');

  addProductApi = product => callApi('products', 'POST', product);

  deleleProductApi = id => callApi(`products/${id}`, 'DELETE');
}

export default ProductService;
