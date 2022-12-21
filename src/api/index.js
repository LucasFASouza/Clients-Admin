import Client from "./repositories/ClientRepository.js";
import Product from "./repositories/ProductRepository.js";

export const api = {
  client: Client(),
  Product: Product(),
};

export default {
  install(app) {
    app.prototype.$api = api;
  },
};
