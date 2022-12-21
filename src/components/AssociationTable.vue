<template>
  <form
    id="associate-client"
    @submit="submitAssociation"
    class="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-md"
  >
    <h1 class="font-bold text-lg text-center">
      Associate the client with the products {{ client.products }}
    </h1>

    <div class="flex px-16 gap-12">
      <div class="flex flex-col w-1/2">
        <h3>Client:</h3>
        <h2>{{ client.name }}</h2>
      </div>

      <div class="flex flex-col w-1/2">
        <h3>Products</h3>
        <div v-for="product in products" :key="product.id">
          <input
            type="checkbox"
            id="product.name"
            :value="product.id"
            v-model="client.products"
          />
          <label for="product.name">{{ product.name }}</label>
        </div>
      </div>
    </div>

    <div class="flex px-16 gap-12">
      <input
        type="submit"
        value="Submit"
        class="bg-green-500 text-white rounded-md p-1 px-2"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "ClientForm",
};
</script>

<script setup>
import { reactive, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { api } from "../api";

const route = useRoute();
const router = useRouter();

const clientId = route.params.id;

const client = reactive({
  name: "",
  document: "",
  phone: "",
  email: "",
  isActive: true,
  products: [],
});

const products = ref([]);

async function submitAssociation() {
  console.log(client.products);
  const response = await api.client.update(client);

  if (response.ok) {
    alert("Product edited successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error editing product :( Please try again");
  }
}

async function getClient() {
  const response = await api.client.getOne(clientId);

  if (response.ok) {
    const data = await response.json();

    client.id = data.id;
    client.name = data.name;
    client.document = data.document;
    client.phone = data.phone;
    client.email = data.email;
    client.isActive = data.isActive;
    client.products = data.products;
  } else {
    alert("Error getting client :( Please try again");
  }
}

async function getProducts() {
  products.value = await api.product.getAll();
}

onMounted(() => {
  getClient();
  getProducts();
});
</script>
