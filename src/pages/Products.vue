<template>
  <div class="">
    <!-- Pics -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 class="text-4xl pb-12 text-left font-bold tracking-tight text-gray-900">
          Pánske okuliare
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Product :products="man_product" />
        </div>
      </div>
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 class="text-4xl pb-12 text-left font-bold tracking-tight text-gray-900">
          Dámske okuliare
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Product :products="woman_product" />
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
      man_product: [
      {
          id: 1,
          name: "SunKissed",
          href: "#",
          imageSrc: "src/img/man1.jpg",
          imageAlt: "SunKissed okuliare",
          price: "$100",
          color: "Black",
        },
        {
          id: 2,
          name: "Mountain Mirage",
          href: "#",
          imageSrc: "src/img/man2.jpg",
          imageAlt: "Mountain Mirage okuliare",
          price: "$90",
          color: "Black",
        },
        {
          id: 3,
          name: "UrbanGlance",
          href: "#",
          imageSrc: "src/img/man3.jpg",
          imageAlt: "UrbanGlance okuliare",
          price: "$95",
          color: "Yellow",
        },
        {
          id: 4,
          name: "Black Glasses",
          href: "#",
          imageSrc: "src/img/man4.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 5,
          name: "Black Glasses",
          href: "#",
          imageSrc: "src/img/man5.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 6,
          name: "Black Glasses",
          href: "#",
          imageSrc: "src/img/man6.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 7,
          name: "Black Glasses",
          href: "#",
          imageSrc: "src/img/man7.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 8,
          name: "Black Glasses",
          href: "#",
          imageSrc: "src/img/man8.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        }
        
      ],
      woman_product: [
      {
          id: 1,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 2,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 3,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 4,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 5,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 6,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 7,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        },
        {
          id: 8,
          name: "Black Glasses",
          href: "#",
          imageSrc: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMGZyYW1lfGVufDB8fDB8fHww",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$100",
          color: "Black",
        }
      ],
    };
  },
};
</script>

<style scoped></style>
