<template>
  <div class="bg-white">
    <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="max-w-xl">
        <h1 class="text-base font-medium text-green-700 px-2 py-1 bg-green-100">
          Ďakujeme! Vaša objednávka bola úspešná
        </h1>
        <p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Je to na ceste!
        </p>
        <p class="mt-2 text-base text-gray-500">
          Vaša objednávka #14034056 bola poslaná dopravcovi a zachvilku bude u vás.
        </p>

        <dl class="mt-12 text-sm font-medium">
          <dt class="text-gray-900">Trakovacie číslo</dt>
          <dd class="mt-2 text-primary">51547878755545848512</dd>
        </dl>
      </div>

      <div class="mt-10 border-t border-gray-200">
        <h2 class="sr-only">Vaša objednávka</h2>

        <h3 class="sr-only">Položky</h3>
        <div class="grid">
          <div
            v-for="item in allProducts"
            :key="item.name"
            class="flex space-x-6 border-b border-gray-200 py-10"
          >
            <img
              :src="item.imageSrc"
              alt="Glass bottle with black plastic pour top and mesh insert."
              class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            />
            <div class="flex flex-auto flex-col">
              <div>
                <h4 class="font-medium text-2xl text-gray-900">
                  <a href="#">{{ item.name }}</a>
                </h4>
              </div>
              <div class="mt-6 f items-end">
                <dl
                  class="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6"
                >
                  <div class="flex">
                    <dt class="font-medium text-gray-900">Počet</dt>
                    <dd class="ml-2 text-gray-700">1</dd>
                  </div>
                  <div class="flex pl-4 sm:pl-6">
                    <dt class="font-medium text-gray-900">Cena</dt>
                    <dd class="ml-2 text-gray-700">${{ item.price }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:ml-40 sm:pl-6">
          <h3 class="sr-only">Vaše informácie</h3>

          <h4 class="sr-only">Adresa</h4>
          <dl class="grid grid-cols-2 gap-x-6 py-10 text-sm">
            <div>
              <dt class="font-medium text-gray-900">Fakturačna Adresa</dt>
              <dd class="mt-2 text-gray-700">
                <address class="not-italic">
                  <span class="flex gap-2 my-2"
                    ><span class="bg-primary text-white px-2 py-1 rounded-sm">{{
                      form.firstName
                    }}</span>
                    <span class="bg-primary text-white px-2 py-1 rounded-sm">{{
                      form.lastName
                    }}</span></span
                  >
                  <span class="block">{{ form.address }}</span>
                  <span class="block">{{ form.city }} </span>
                </address>
              </dd>
            </div>
          </dl>

          <h4 class="sr-only">Platba</h4>
          <dl
            class="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm"
          >
            <div>
              <dt class="font-medium text-gray-900">Platobne metody</dt>
              <dd class="mt-2 text-gray-700">
                <p>
                  <span aria-hidden="true">••••</span
                  ><span class="sr-only">Koniec v </span>1545
                </p>
              </dd>
            </div>
            <div>
              <dt class="font-medium text-gray-900">Možnosti dopravy</dt>
              <dd class="mt-2 text-gray-700">
                <p>GLS</p>
                <p>DPD</p>
                <p>Packeta</p>
              </dd>
            </div>
          </dl>

          <h3 class="sr-only">Zhrnutie</h3>

          <dl class="space-y-6 border-t border-gray-200 pt-10 text-sm">
            <div class="flex justify-between">
              <dt class="font-medium text-gray-900">Medzisúčet</dt>
              <dd class="text-gray-700">${{ totalPrice }}</dd>
            </div>

            <div class="flex justify-between">
              <dt class="font-medium text-gray-900">Doprava</dt>
              <dd class="text-gray-700">$5.00</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-gray-900">Celkovo</dt>
              <dd class="text-gray-900">${{ totalPrice + 5 }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useCart } from "@/pinia/cart";

export default {
  components: {},

  props: {
    addedToCart: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      allProducts: [],
      totalPrice: 0,
      form: {},
    };
  },
  methods: {
    removeFromCart(product) {
      useCart().remove(product);
    },
    submitForm(e) {
      e.preventDefault();
    },
  },
  mounted() {
    this.allProducts = useCart().cart;
    this.form = useCart().formData;
  },

  computed: {
    totalPrice() {
      return this.allProducts.reduce((sum, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return sum + price;
      }, 0);
    },
  },
};
</script>
