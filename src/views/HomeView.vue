<template>
  <main>
    <div class="flex flex-col md:flex-row gap-32 px-16">
      <clients-table class="w-3/4" />
      <products-table class="w-1/4" />
    </div>
  </main>
</template>

<script setup>
import ClientsTable from ".././components/ClientsTable.vue";
import ProductsTable from ".././components/ProductsTable.vue";
</script>
