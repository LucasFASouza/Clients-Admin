const clientURL = import.meta.env.VITE_API_URL + "/clients";

export default () => ({
  async getAll() {
    return await fetch(clientURL).then((res) => res.json());
  },

  async getOne(id) {
    return await fetch(clientURL + "/" + id);
  },

  async create(client) {
    return await fetch(clientURL, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async update(client) {
    return await fetch(clientURL + "/" + client.id, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async delete(id) {
    return await fetch(clientURL + "/" + id, {
      method: "DELETE",
    });
  },
});
