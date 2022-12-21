<template>
  <form
    id="register-client"
    @submit="submitClient"
    class="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-md"
  >
    <h1 class="font-bold text-lg text-center">
      Associate the client with the products
    </h1>

    <div class="flex px-16 gap-12">
      <div class="flex flex-col w-1/2">
        <label for="clientName">Clients</label>
        <input
          id="clientName"
          v-model="client.name"
          type="text"
          class="shadow rounded-md p-1 px-2"
        />
      </div>

      <div class="flex flex-col w-1/2">
        <label for="clientDocument">Products</label>
        <input
          id="clientDocument"
          v-model="client.document"
          type="number"
          class="shadow rounded-md p-1 px-2"
        />
      </div>
    </div>

    <div class="flex px-16 gap-12">
      <input
        type="submit"
        value="Submit"
        class="bg-green-500 text-white rounded-md p-1 px-2"
      />
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

const route = useRoute();
const router = useRouter();
const clientId = route.params.id;

const urlClients = import.meta.env.VITE_API_URL + "/clients";

const client = reactive({
  name: "",
  document: "",
  phone: "",
  email: "",
  isActive: true,
});

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
}

async function getClient() {
  const response = await fetch(urlClients + "/" + client.id);

  if (response.ok) {
    const data = await response.json();

    client.name = data.name;
    client.document = data.document;
    client.phone = data.phone;
    client.email = data.email;
    client.isActive = data.isActive;
  } else {
    alert("Error getting client :( Please try again");
  }
}
</script>
