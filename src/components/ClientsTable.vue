<template>
  <div>
    <div
      class="flex flex-row justify-center gap-5 text-xl text-center font-bold pb-2"
    >
      <h2>Clients</h2>
      <router-link :to="{ name: 'client', params: { id: 'register' } }">
        <PlusCircleIcon
          class="h-6 w-6 text-slate-400 hover:text-slate-600 hover:cursor-pointer"
        />
      </router-link>
    </div>
    <table class="w-full text-center shadow rounded-md">
      <thead>
        <tr>
          <th>Name</th>
          <th>Document</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in data" :key="client.id" class="hover:bg-slate-100">
          <td>{{ client.name }}</td>
          <td>{{ client.document }}</td>
          <td>{{ client.phone }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.isActive ? "Yes" : "No :(" }}</td>
          <td class="hover:cursor-pointer flex justify-center gap-2">
            <PencilSquareIcon
              @click="openClient(client.id)"
              class="h-6 w-6 text-slate-400 hover:text-slate-600"
            />
            <LinkIcon
              @click="associateClient(client.id)"
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
  name: "ClientsTable",
};
</script>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { api } from "../api";

import {
  PencilSquareIcon,
  LinkIcon,
  PlusCircleIcon,
} from "@heroicons/vue/24/outline";

const data = ref([]);

const router = useRouter();

function openClient(id) {
  router.push({ name: "client", params: { id: id } });
}

function associateClient(id) {
  router.push({ name: "association", params: { id: id } });
}

async function getClients() {
  data.value = await api.client.getAll();
}

onMounted(() => {
  getClients();
});
</script>
