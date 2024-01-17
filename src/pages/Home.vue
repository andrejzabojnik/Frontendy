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
            Najlepšie obchod zo slnečnými okuliarmi na trhu
          </h1>
          <p class="mt-6 text-lg leading-8 text-center text-gray-600">
            Vysoko kvalitné produkty, najlepši material, recyklovatelnosť, minimum uhlíkových stôp
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link
              to="/products"
              class="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Vyhladať viac pre kategorie</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2
          class="text-4xl pb-12 text-center font-bold tracking-tight text-gray-900"
        >
          Najviac predavane produkty
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
              Pridať do košíka
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
          id: 2,
          name: "Sunset Diva",
          href: "#",
          imageSrc: "src/img/woman2.jpg",
          imageAlt: "Sunset Diva okuliare",
          price: "$89",
          color: "Orange",
        },
        {
          id: 4,
          name: "Breeze Whisperer",
          href: "#",
          imageSrc: "src/img/woman4.jpg",
          imageAlt: "Breeze Whisperer okuliare",
          price: "$75",
          color: "Pink",
        },
        {
          id: 7,
          name: "PeakSight",
          href: "#",
          imageSrc: "src/img/man7.jpg",
          imageAlt: "PeakSight okuliare",
          price: "$65",
          color: "Gold",
        },
        {
          id: 4,
          name: "ChillWave",
          href: "#",
          imageSrc: "src/img/man4.jpg",
          imageAlt: "ChillWave okuliare",
          price: "$80",
          color: "Brown",
        },

      ],
    };
  },
  methods: {
    addProductToCart(product: object) {
      const cart = useCart();
      cart.add(product);
      this.addedToCart = cart.cart;
    },
  },
};
</script>

