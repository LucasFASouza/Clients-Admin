<template>
  <div>
    <h2 class="text-xl text-center font-bold pb-2">Clients</h2>
    <table class="w-full text-center shadow rounded-md">
      <thead>
        <tr>
          <th class="w-[15%]">Name</th>
          <th class="w-[20%]">Document</th>
          <th class="w-[20%]">Phone</th>
          <th class="w-[30%]">Email</th>
          <th class="w-[15%]">Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in data" :key="client.id">
          <td>{{ client.name }}</td>
          <td>{{ client.document }}</td>
          <td>{{ client.phone }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.isActive ? "Yes" : "No :(" }}</td>
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
