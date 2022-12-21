<template>
  <div>
    <div
      class="flex flex-row justify-center gap-5 text-xl text-center font-bold pb-2"
    >
      <h2>Products</h2>
      <router-link to="product">+</router-link>
    </div>
    <table class="w-full text-center shadow rounded-md">
      <thead>
        <tr>
          <th class="w-1/2">Name</th>
          <th class="w-1/2">Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in data" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.isActive ? "Yes" : "No :(" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductsTable",
};
</script>

<script setup>
import { onMounted, ref } from "vue";

const urlProducts = import.meta.env.VITE_API_URL + "/products";
const data = ref([]);

async function getClients() {
  data.value = await fetch(urlProducts).then((res) => res.json());
}

onMounted(() => {
  getClients();
});
</script>
