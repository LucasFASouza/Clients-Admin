<template>
  <form
    id="associate-client"
    @submit="submitAssociation"
    class="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-md flex flex-col gap-5 py-5"
  >
    <ArrowUturnLeftIcon
      @click="router.back()"
      class="h-6 w-6 mx-6 text-slate-400 hover:text-slate-600 hover:cursor-pointer"
    />

    <h1 class="font-bold text-lg text-center">
      Associate the client with the products
    </h1>

    <div class="flex px-16 gap-12">
      <div class="flex flex-col w-1/2">
        <h3>Client:</h3>
        <h2 class="font-semibold text-xl">{{ client.name }}</h2>
      </div>

      <div class="flex flex-col w-1/2">
        <h3>Products:</h3>
        <div
          v-for="product in products"
          :key="product.id"
          class="flex flex-row gap-2"
        >
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

    <div class="flex flex-row px-16 gap-12 justify-end">
      <input
        type="submit"
        value="Submit"
        class="bg-green-500 text-white rounded-md p-1 px-2 hover:cursor-pointer"
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

import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";

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
    alert("Products associated successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error associating products :( Please try again");
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
