<template>
  <div class="">
    <Swiper />
    <div class="relative isolate pt-44">
      <div
        class="mx-auto max-w-7xl px-6 lg:flex lg:items-start justify-center lg:gap-x-10 lg:px-8"
      >
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1
            class="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl"
          >
            Best Store to Buy Glasses Online
          </h1>
          <p class="mt-6 text-lg leading-8 text-center text-gray-600">
            Esse id magna consectetur fugiat non dolor in ad laboris magna
            laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
            voluptate id. In veniam incididunt ex veniam adipisicing sit.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link
              to="/products"
              class="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Search more for Categories</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Pics -->
    <div class="bg-white">
      <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2
          class="text-4xl pb-12 text-center font-bold tracking-tight text-gray-900"
        >
          Best Selling Products
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div
            v-for="product in products"
            :key="product.id"
            @click="addProductToCart(product)"
            class="group relative"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
            <button
              class="px-4 my-4 text-white py-2 bg-primary w-full rounded-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <CartButton :addedToCart="addedToCart" />
  </div>
</template>

<script lang="ts">
import { useCart } from "@/pinia/cart";
import CartButton from "@/components/CartButton.vue";
import Swiper from "@/components/Swiper.vue";
export default {
  components: {
    CartButton,
    Swiper,
  },
  data() {
    return {
      addedToCart: [],
      products: [
        {
          id: 1,
          name: "Black Glasses",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 1,
          name: "Black Glasses",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 1,
          name: "Black Glasses",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 1,
          name: "Black Glasses",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1588516190914-d96236c7b7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdsYXNzZXMlMjBmcmFtZXxlbnwwfHwwfHx8MA%3D%3D",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },

        // More products...
      ],
    };
  },
  methods: {
    addProductToCart(product) {
      const cart = useCart();
      cart.add(product);
      this.addedToCart = cart.cart;
    },
  },
};
</script>

<style scoped></style>
