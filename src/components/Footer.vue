<template>
  <footer class="bg-white rounded-lg dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <router-link
          to="/"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
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
              stroke="black"
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
        </router-link>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">O nás</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Zásady ochrany osobných údajov</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licencia</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Kontakt</a>
          </li>
        </ul>
      </div>

      <span
        class="block text-sm text-gray-500 mt-8 sm:text-end dark:text-gray-400"
        >© 2023
        <router-link to="/" class="hover:underline">Glassow </router-link>. Všetky práva vyhradné.</span
      >
    </div>
  </footer>
</template>
