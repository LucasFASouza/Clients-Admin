<template>
  <div>
    <div
      class="flex flex-row justify-center gap-5 text-xl text-center font-bold pb-2"
    >
      <h2>Clients</h2>
      <router-link :to="{ path: 'client', params: { mode: register } }">
        +
      </router-link>
    </div>
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
        <tr
          v-for="client in data"
          :key="client.id"
          @click="openClient()"
          class="hover:bg-slate-100 hover:cursor-pointer"
        >
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
import { useRouter } from "vue-router";

const urlClients = import.meta.env.VITE_API_URL + "/clients";
const data = ref([]);

function openClient() {
  useRouter.push({ name: "user", params: { mode: "edit" } });
}

async function getClients() {
  data.value = await fetch(urlClients).then((res) => res.json());
}

onMounted(() => {
  getClients();
});
</script>
