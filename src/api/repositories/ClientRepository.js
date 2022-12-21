const clientURL = import.meta.env.VITE_API_URL + "/clients";

export default () => ({
  async getAll() {
    return await fetch(clientURL).then((res) => res.json());
  },
});
