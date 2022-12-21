<template>
  <div>
    <div
      class="flex flex-row justify-center gap-5 text-xl text-center font-bold pb-2"
    >
      <h2>Products</h2>
      <router-link :to="{ name: 'product', params: { id: 'register' } }">
        +
      </router-link>
    </div>
    <table class="w-full text-center shadow rounded-md">
      <thead>
        <tr>
          <th>Name</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in data" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.isActive ? "Yes" : "No :(" }}</td>
          <td class="hover:cursor-pointer flex justify-center gap-2">
            <PencilSquareIcon
              @click="openProduct(product.id)"
              class="h-6 w-6 text-slate-400 hover:text-slate-600"
            />
          </td>
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
import { useRouter } from "vue-router";

import { api } from "../api";

import { PencilSquareIcon } from "@heroicons/vue/24/outline";

const data = ref([]);

const router = useRouter();

function openProduct(id) {
  router.push({ name: "product", params: { id: id } });
}

async function getProducts() {
  data.value = await api.product.getAll();
}

onMounted(() => {
  getProducts();
});
</script>
