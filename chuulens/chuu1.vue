<script setup>
import client from '~/utils/client';

client.api.foo();
// const { data, err } = await client.api.meta();
// const product = await client.api.products.byId(8747);
const product = await client.api.products.byId(8747);
// const products = await client.api.products.listChuulens();
// const params = { q: {store_id_in: 'hapakristinkr'} };
// const products = await client.api.products.list(params);
const products = await client.api.products.listHapakr();
// const collections = await client.api.collections.listHapakr();
// const franchises = await client.api.franchises.list();

console.log(product.id);
</script>
<template>chuu1</template>