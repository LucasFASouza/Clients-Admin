<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Document</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>123456789</td>
          <td>123456789</td>
          <td>client@mail.com</td>
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

const URL_CLIENTS = "http://localhost:3000/clients";
const data = ref([]);

async function getClients() {
  data.value = await fetch(URL_CLIENTS).then((res) => res.json());
}

onMounted(() => {
  getClients();
});
</script>
