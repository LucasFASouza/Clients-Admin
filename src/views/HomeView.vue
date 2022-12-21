<template>
  <main>
    <div class="flex flex-col text-sm gap-32 md:flex-row md:px-16 md:text-base">
      <clients-table class="md:w-3/4" />
      <products-table class="md:w-1/4" />
    </div>
  </main>
</template>

<script setup>
import ClientsTable from ".././components/ClientsTable.vue";
import ProductsTable from ".././components/ProductsTable.vue";
</script>
