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
        <tr v-for="client in data" :key="client.id">
          <td>{{ client.name }}</td>
          <td>{{ client.document }}</td>
          <td>{{ client.phone }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.isActive }}</td>
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
