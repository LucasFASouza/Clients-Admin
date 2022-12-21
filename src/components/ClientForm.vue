<template>
  <form
    id="register-client"
    @submit="submitClient"
    class="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-md"
  >
    <h1 class="font-bold text-lg text-center">{{ routeMode }} client</h1>

    <div class="flex px-16 gap-12">
      <div class="flex flex-col w-1/2">
        <label for="clientName">Name</label>
        <input
          id="clientName"
          v-model="client.name"
          type="text"
          class="shadow rounded-md p-1 px-2"
        />
      </div>

      <div class="flex flex-col w-1/2">
        <label for="clientDocument">Document</label>
        <input
          id="clientDocument"
          v-model="client.document"
          type="number"
          class="shadow rounded-md p-1 px-2"
        />
      </div>
    </div>

    <div class="flex px-16 gap-12">
      <div class="flex flex-col w-1/2">
        <label for="clientPhone">Phone</label>
        <input
          id="clientPhone"
          v-model="client.phone"
          type="number"
          class="shadow rounded-md p-1 px-2"
        />
      </div>

      <div class="flex flex-col w-1/2">
        <label for="clientEmail">Email</label>
        <input
          id="clientEmail"
          v-model="client.email"
          type="email"
          class="shadow rounded-md p-1 px-2"
        />
      </div>
    </div>

    <div class="flex px-16 gap-12">
      <div class="flex flex-row w-1/2">
        <label for="clientActive">Active</label>
        <input id="clientActive" v-model="client.isActive" type="checkbox" />
      </div>

      <input
        type="submit"
        value="Submit"
        class="bg-green-500 text-white rounded-md p-1 px-2"
      />

      <a
        v-if="routeMode == 'Edit'"
        @click="deleteClient"
        class="bg-red-500 text-white rounded-md p-1 px-2"
      >
        Delete
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: "ClientForm",
};
</script>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import { api } from "../api";

const route = useRoute();
const router = useRouter();
const routeMode = route.params.id == "register" ? "Register" : "Edit";

const client = reactive({
  name: "",
  document: "",
  phone: "",
  email: "",
  isActive: true,
  products: [],
});

if (routeMode == "Edit") {
  client.id = route.params.id;
  getClient();
}

function submitClient(e) {
  e.preventDefault();

  if (
    client.name === "" ||
    client.document === "" ||
    client.phone === "" ||
    client.email === ""
  ) {
    alert("Please fill in all fields before submitting");
    return;
  }

  if (routeMode == "Register") {
    createClient();
  } else {
    updateClient();
  }
}

async function getClient() {
  const response = await api.client.getOne(client.id);

  if (response.ok) {
    const data = response.json();

    client.name = data.name;
    client.document = data.document;
    client.phone = data.phone;
    client.email = data.email;
    client.isActive = data.isActive;
  } else {
    alert("Error getting client :( Please try again");
  }
}

async function createClient() {
  const response = await api.client.create(client);

  if (response.ok) {
    alert("Client registered successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error registering client :( Please try again");
  }
}

async function updateClient() {
  const response = await api.client.update(client);

  if (response.ok) {
    alert("Client edited successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error editing client :( Please try again");
  }
}

async function deleteClient() {
  const response = await api.client.delete(client.id);

  if (response.ok) {
    alert("Client deleted successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error deleting client :( Please try again");
  }
}
</script>
