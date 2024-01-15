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
          name: "ChillWave",
          href: "#",
          imageSrc: "src/img/man4.jpg",
          imageAlt: "ChillWave okuliare",
          price: "$80",
          color: "Brown",
        },
        {
          id: 5,
          name: "MirrorFlash",
          href: "#",
          imageSrc: "src/img/man5.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$75",
          color: "Purple",
        },
        {
          id: 6,
          name: "RiverView",
          href: "#",
          imageSrc: "src/img/man6.jpg",
          imageAlt: "RiverView okuliare",
          price: "$70",
          color: "Black",
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
          id: 8,
          name: "ClassicElegance",
          href: "#",
          imageSrc: "src/img/man8.jpg",
          imageAlt: "ClassicElegance okuliare",
          price: "$60",
          color: "Green",
        }
        
      ],
      woman_product: [
      {
          id: 9,
          name: "Graceful Glance",
          href: "#",
          imageSrc: "src/img/woman1.jpg",
          imageAlt: "Graceful Glance okuliare",
          price: "$99",
          color: "Blue",
        },
        {
          id: 10,
          name: "Sunset Diva",
          href: "#",
          imageSrc: "src/img/woman2.jpg",
          imageAlt: "Sunset Diva okuliare",
          price: "$89",
          color: "Orange",
        },
        {
          id: 11,
          name: "Urban Chic",
          href: "#",
          imageSrc: "src/img/woman3.jpg",
          imageAlt: "Urban Chic okuliare",
          price: "$70",
          color: "Red",
        },
        {
          id: 12,
          name: "Breeze Whisperer",
          href: "#",
          imageSrc: "src/img/woman4.jpg",
          imageAlt: "Breeze Whisperer okuliare",
          price: "$75",
          color: "Pink",
        },
        {
          id: 13,
          name: "Vogue Vista",
          href: "#",
          imageSrc: "src/img/woman5.jpg",
          imageAlt: "Vogue Vista okuliare",
          price: "$56",
          color: "Black",
        },
        {
          id: 14,
          name: "Garden Radiance",
          href: "#",
          imageSrc: "src/img/woman6.jpg",
          imageAlt: "Garden Radiance okuliare",
          price: "$100",
          color: "Brown",
        },
        {
          id: 15,
          name: "Seaside Serenity",
          href: "#",
          imageSrc: "src/img/woman7.jpg",
          imageAlt: "Seaside Serenity okuliare",
          price: "$69",
          color: "Gold",
        },
        {
          id: 16,
          name: "Celestial Charm",
          href: "#",
          imageSrc: "src/img/woman8.jpg",
          imageAlt: "Celestial Charm okuliare",
          price: "$88",
          color: "Black",
        }
      ],
    };
  },
};
</script>

<style scoped></style>
