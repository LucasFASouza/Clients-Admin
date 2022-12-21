const productURL = import.meta.env.VITE_API_URL + "/products";

export default () => ({
  async getAll() {
    return await fetch(productURL).then((res) => res.json());
  },

  async getOne(id) {
    return await fetch(productURL + "/" + id);
  },

  async create(product) {
    return await fetch(productURL, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async update(product) {
    return await fetch(productURL + "/" + product.id, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async delete(id) {
    return await fetch(productURL + "/" + id, {
      method: "DELETE",
    });
  }
});
