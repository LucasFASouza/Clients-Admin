<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in data" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.isActive }}</td>
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
