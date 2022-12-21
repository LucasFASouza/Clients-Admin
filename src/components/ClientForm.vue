<template>
  <form
    id="register-client"
    @submit="submitClient"
    class="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-md"
  >
    <h1 class="font-bold text-lg text-center">Register client</h1>

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

const URL_CLIENTS = "http://localhost:3000/clients";

const client = reactive({
  name: "",
  document: "",
  phone: "",
  email: "",
  isActive: false,
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

  postClient();
}

async function postClient() {
  const response = await fetch(URL_CLIENTS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });

  if (response.ok) {
    alert("Client registered successfully :)");
  } else {
    alert("Error registering client :( Please try again");
  }
}
</script>
