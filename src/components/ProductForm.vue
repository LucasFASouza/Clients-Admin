<template>
  <form
    id="register-product"
    @submit="submitProduct"
    class="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-md"
  >
    <h1 class="font-bold text-lg text-center">Register product</h1>

    <div class="flex px-16 gap-12">
      <div class="flex flex-col w-1/2">
        <label for="productName">Name</label>
        <input
          id="productName"
          v-model="product.name"
          type="text"
          class="shadow rounded-md p-1 px-2"
        />
      </div>
      <div class="flex flex-col w-1/2">
        <label for="productActive">Active</label>
        <input id="productActive" v-model="product.isActive" type="checkbox" />
      </div>
    </div>

    <div class="px-16 flex justify-center">
      <input
        type="submit"
        value="Submit"
        class="bg-green-500 text-white rounded-md p-1 px-2"
      />

      <a
        v-if="routeMode == 'Edit'"
        @click="deleteProduct"
        class="bg-red-500 text-white rounded-md p-1 px-2"
      >
        Delete
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: "ProductForm",
};
</script>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const routeMode = route.params.mode == "register" ? "Register" : "Edit";

const urlProducts = import.meta.env.VITE_API_URL + "/products";

const product = reactive({
  name: "",
  isActive: true,
});

if (routeMode == "Edit") {
  product.id = route.params.mode;
  getProduct();
}

function submitProduct(e) {
  e.preventDefault();

  if (product.name === "") {
    alert("Please fill in all fields before submitting");
    return;
  }

  if (routeMode == "Register") {
    postProduct();
  } else {
    putProduct();
  }
}

async function getProduct() {
  const response = await fetch(urlProducts + "/" + product.id);

  if (response.ok) {
    const data = await response.json();

    product.name = data.name;
    product.isActive = data.isActive;
  } else {
    alert("Error getting product :( Please try again");
  }
}

async function postProduct() {
  const response = await fetch(urlProducts, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (response.ok) {
    alert("Product registered successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error registering product :( Please try again");
  }
}

async function putProduct() {
  const response = await fetch(urlProducts + "/" + product.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (response.ok) {
    alert("Product edited successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error editing product :( Please try again");
  }
}

async function deleteProduct() {
  const response = await fetch(urlProducts + "/" + product.id, {
    method: "DELETE",
  });

  if (response.ok) {
    alert("Product deleted successfully :)");
    router.push({ name: "home" });
  } else {
    alert("Error deleting product :( Please try again");
  }
}
</script>
