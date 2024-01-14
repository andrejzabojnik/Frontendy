<template>
  <nav class="bg-primary border-gray-200 dark:bg-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span
          class="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white"
          >Glassow</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="6" cy="14" r="4" />
            <circle cx="18" cy="14" r="4" />
            <path
              d="m10 14l.211-.106a4 4 0 0 1 3.578 0L14 14m5-8l2.838 6.623a2 2 0 0 1 .162.788V14M5 6l-2.838 6.623A2 2 0 0 0 2 13.41V14"
            />
          </g>
        </svg>
        ></router-link
      >
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-white dark:border-gray-700"
        >
          <li v-for="link in links" :key="link.name">
            <router-link
              :to="link.href"
              class="block py-2 px-3 text-white md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { useCart } from "@/pinia/cart";

export default {
  data() {
    return {
      all: useCart().cart.length,
      links: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "Contact Us",
          href: "/contact",
        },
        {
          name: "All Products",
          href: "/products",
        },
        {
          name: "Go to Cart",
          href: "/cart",
        },
      ],
    };
  },
};
</script>
