<script setup>
import client from '~/utils/client';

client.api.foo();
// const { data, err } = await client.api.meta();
// const product = await client.api.products.byId(8747);
const product = await client.api.products.byId(8747);
// const products = await client.api.products.listChuulens();

console.log(product.id);
</script>
<template>chuu1</template>