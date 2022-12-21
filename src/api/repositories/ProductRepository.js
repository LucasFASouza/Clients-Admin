const productURL = import.meta.env.VITE_API_URL + "/products";

export default () => ({
  async getAll() {
    return await fetch(productURL).then((res) => res.json());
  },
});
