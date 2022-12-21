<template>
  <div>
    <h2 class="text-xl text-center font-bold pb-2">Produtos</h2>
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

const URL_PRODUCTS = "http://localhost:3000/products";
const data = ref([]);

async function getClients() {
  data.value = await fetch(URL_PRODUCTS).then((res) => res.json());
}

onMounted(() => {
  getClients();
});
</script>
