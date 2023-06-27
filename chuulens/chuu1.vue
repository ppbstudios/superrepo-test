<script setup>
import client from '~/utils/client';
import _ from 'lodash';
import { Product, Products } from '~/utils/client/model/product';
import { Collections } from '~/utils/client/model/collection';

client.api.foo();
console.log('----product by id----');
await client.api.products.byId(11021).then((data) => {
  console.log(new Product(data).title);
});

console.log('----product by handle----');
await client.api.products.byHandle('chuu-web', 'h69277j3').then((data) => {
  console.log(new Product(data).title);
});

console.log('----products----');
await client.api.products.listChuulens().then(({ total, records }) => {
  const products = new Products(records);
  _.each(products.items, (item) => {
    console.log(item.title);
  });
});

console.log('----collections----');
await client.api.collections.listChuulens().then(({ total, records }) => {
  console.log('collections total', total);
  const collections = new Collections(records);
  _.each(collections.items, (item) => {
    console.log(item.title);
  });
});

console.log('----cart----');
await client.api.cart
  .init('krw')
  .then((cart) => {
    console.log(cart);
    console.log(cart.cartToken);
    console.log(cart.appKey);
    console.log(cart.currency);
    console.log(cart.totalPrice);

    return client.api.cart.addItem(cart.cartToken, 11021, 1102100, 1, 1);
  })
  .then((cart) => {
    console.log(cart);
    console.log(cart.cartToken);
    console.log(cart.appKey);
    console.log(cart.currency);
    console.log(cart.totalPrice);
  });
</script>
<template>chuu1</template>
