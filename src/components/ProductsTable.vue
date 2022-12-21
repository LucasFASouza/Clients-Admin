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
          <th class="w-1/2">Name</th>
          <th class="w-1/2">Active</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in data"
          :key="product.id"
          @click="openProduct(product.id)"
          class="hover:bg-slate-100 hover:cursor-pointer"
        >
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
import { useRouter } from "vue-router";

const urlProducts = import.meta.env.VITE_API_URL + "/products";
const data = ref([]);

const router = useRouter();

function openProduct(id) {
  router.push({ name: "product", params: { id: id } });
}

async function getClients() {
  data.value = await fetch(urlProducts).then((res) => res.json());
}

onMounted(() => {
  getClients();
});
</script>
