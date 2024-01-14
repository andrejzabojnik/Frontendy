<template>
  <swiper
    :spaceBetween="10"
    :centeredSlides="true"
    :slidesPerView="3"
    :breakpoints="breakpoints"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      v-for="img in products"
      :key="img.id"
      class="bg-center bg-no-repeat bg-cover relative"
      :style="[`background-image: url(${img.imageSrc})`]"
    >
      <!-- <img class="object-cover bg-center" :src="img.imageSrc" alt="" /> -->
      <div
        class="max-w-7xl mx-auto py-32 flex flex-col space-y-4 items-start h-full justify-start px-4"
      >
        <div class="flex flex-col items-start space-y-3 bg-primary p-4">
          <h1 class="text-3xl font-bold text-white">{{ img.name }}</h1>
          <p class="text-gray-100">{{ img.price }}</p>

          <router-link
            to="/products"
            class="bg-gray-400 px-4 py-1.5 rounded-sm text-primary"
            >Najdi viac produktov</router-link
          >
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
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
      breakpoints: {
        // Customize breakpoints based on your design requirements
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
      },
    };
  },
};
</script>
