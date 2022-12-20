<template>
  <main>
    <div class="flex flex-col md:flex-row">
      <clients-table class="w-2/3" />
      <products-table class="w-1/3" />
    </div>
  </main>
</template>

<script setup>
import ClientsTable from ".././components/ClientsTable.vue";
import ProductsTable from ".././components/ProductsTable.vue";
</script>
