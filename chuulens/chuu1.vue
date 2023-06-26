<script setup>
import client from '~/utils/client';

client.api.foo();
// const { data, err } = await client.api.meta();
// const product = await client.api.products.byId(8747);
const product = await client.api.products.byHandle('chuu-web', 'h69277j3');
// const products = await client.api.products.listChuulens();
// const params = { q: {store_id_in: 'hapakristinkr'} };
// const products = await client.api.products.list(params);
// const products = await client.api.products.listHapakr();
// const collections = await client.api.collections.listHapakr();
// const franchises = await client.api.franchises.list();
// const cart  = await client.api.cart.init();
const cart  = await client.api.cart.init('krw');
console.log('----cart----');
console.log(cart.cartToken);
console.log(cart.appKey);
console.log(cart.currency);
console.log(cart);
const cart2 = await client.api.cart.addItem(cart.cartToken, 8747, 1102100, 1, 1);
console.log(cart2);

console.log('----product----');
console.log(product.id);
console.log(product.handle);
console.log(product.compareAtPrice());
console.log(product.price());
console.log(product.variants[0].id);
</script>
<template>chuu1</template>