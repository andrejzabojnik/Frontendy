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
      <div class="max-w-7xl mx-auto py-32 flex flex-col space-y-4 items-start h-full justify-start px-4">
        <div class="flex flex-col items-start space-y-3 bg-primary p-4">
          <h1 class="text-3xl font-bold text-white">{{ img.name }}</h1>
          <p class="text-gray-100">{{ img.price }}</p>
          <router-link to="/products" class="bg-gray-400 px-4 py-1.5 rounded-sm text-primary">
            Najdi viac produktov
          </router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      products: [
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
          id: 1,
          name: "Graceful Glance",
          href: "#",
          imageSrc: "src/img/woman1.jpg",
          imageAlt: "Graceful Glance okuliare",
          price: "$99",
          color: "Blue",
        },
        {
          id: 5,
          name: "Vogue Vista",
          href: "#",
          imageSrc: "src/img/woman5.jpg",
          imageAlt: "Vogue Vista okuliare",
          price: "$56",
          color: "Black",
        },
      ],
      breakpoints: {
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

