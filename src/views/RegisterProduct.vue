<template>
  <main class="grid h-screen place-items-center">
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
          <input
            id="productActive"
            v-model="product.isActive"
            type="checkbox"
          />
        </div>
      </div>

      <div class="px-16 flex justify-center">
        <input
          @click="submit"
          value="Submit"
          class="bg-green-500 text-white rounded-md p-1 px-2"
        />
      </div>
    </form>
  </main>
</template>

<script setup>
import { reactive } from "vue";

const product = reactive({
  name: "",
  isActive: false,
});

function submit() {
  if (product.name === "") {
    alert("Please fill in all fields before submitting");
    return;
  }

  console.log(product);
}
</script>
