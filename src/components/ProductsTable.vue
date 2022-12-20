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
        <tr>
          <td>Product</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ClientsTable",
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
