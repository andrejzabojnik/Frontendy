<template>
  <div class="">
    <!-- Pics -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2
          class="text-4xl pb-12 text-left font-bold tracking-tight text-gray-900"
        >
        Pánske okuliare
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <Product :products="products" />
        </div>
      </div>
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2
          class="text-4xl pb-12 text-left font-bold tracking-tight text-gray-900"
        >
          Dámske okuliare
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <Product :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/components/Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
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

      ],
    };
  },
};
</script>

<style scoped></style>
