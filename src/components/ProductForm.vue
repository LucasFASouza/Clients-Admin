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

const urlProducts = import.meta.env.VITE_API_URL + "/products";
const product = reactive({
  name: "",
  isActive: true,
});

function submitProduct(e) {
  e.preventDefault();

  if (product.name === "") {
    alert("Please fill in all fields before submitting");
    return;
  }

  postProduct();
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
  } else {
    alert("Error registering product :( Please try again");
  }
}
</script>
