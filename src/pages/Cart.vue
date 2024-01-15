<template>
  <div class="">
    <main
      v-if="allProducts.length > 0"
      class="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h1 class="sr-only">Zhrnutie</h1>

        <form
          @submit="submitForm"
          class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
        >
          <div>
            <div>
              <h2 class="text-lg font-medium text-gray-900">
                Kontaktné informácie
              </h2>

              <div class="mt-4">
                <label
                  for="email-address"
                  class="block text-sm font-medium text-gray-700"
                  >Emailová adresa</label
                >
                <div class="mt-1">
                  <input
                    type="email"
                    required
                    v-model="formData.email"
                    id="email-address"
                    name="email-address"
                    autocomplete="email"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                  />
                </div>
              </div>
            </div>

            <div class="mt-10 border-t border-gray-200 pt-10">
              <h2 class="text-lg font-medium text-gray-900">
                Prepravné informácie
              </h2>

              <div
                class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
              >
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Meno</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      v-model="formData.firstName"
                      id="first-name"
                      name="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Priezvisko</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      v-model="formData.lastName"
                      name="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >Firma</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="company"
                      v-model="formData.company"
                      id="company"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                    >Address</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="address"
                      v-model="formData.address"
                      id="address"
                      autocomplete="street-address"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="apartment"
                    class="block text-sm font-medium text-gray-700"
                    >Byt, dom, atd.</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="apartment"
                      v-model="formData.apartment"
                      id="apartment"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    >Mesto</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="city"
                      v-model="formData.city"
                      id="city"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Krajina</label
                  >
                  <div class="mt-1">
                    <select
                      id="country"
                      v-model="formData.country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    >
                      <option>Spojené štáty</option>
                      <option>Kanada</option>
                      <option>Mexiko</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    for="region"
                    class="block text-sm font-medium text-gray-700"
                    >Region/Kraj</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="region"
                      v-model="formData.region"
                      id="region"
                      autocomplete="address-level1"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="postal-code"
                    class="block text-sm font-medium text-gray-700"
                    >PSC</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      v-model="formData.postalCode"
                      autocomplete="postal-code"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >Telefon</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="phone"
                      v-model="formData.phone"
                      id="phone"
                      autocomplete="tel"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment -->
            <div class="mt-10 border-t border-gray-200 pt-10">
              <h2 class="text-lg font-medium text-gray-900">Platba</h2>

              <fieldset class="mt-4">
                <legend class="sr-only">Typ platby</legend>
                <div
                  class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0"
                >
                  <div class="flex items-center">
                    <input
                      id="credit-card"
                      name="payment-type"
                      type="radio"
                      checked
                      class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-500"
                    />
                    <label
                      for="credit-card"
                      class="ml-3 block text-sm font-medium text-gray-700"
                      >Kreditná karta</label
                    >
                  </div>
                  <div class="flex items-center">
                    <input
                      id="paypal"
                      name="payment-type"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-500"
                    />
                    <label
                      for="paypal"
                      class="ml-3 block text-sm font-medium text-gray-700"
                      >PayPal</label
                    >
                  </div>
                  <div class="flex items-center">
                    <input
                      id="etransfer"
                      name="payment-type"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-500"
                    />
                    <label
                      for="etransfer"
                      class="ml-3 block text-sm font-medium text-gray-700"
                      >eTransfer</label
                    >
                  </div>
                </div>
              </fieldset>

              <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div class="col-span-4">
                  <label
                    for="card-number"
                    class="block text-sm font-medium text-gray-700"
                    >Čislo karty</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      v-model="formData.cardNumber"
                      autocomplete="cc-number"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div class="col-span-4">
                  <label
                    for="name-on-card"
                    class="block text-sm font-medium text-gray-700"
                    >Meno na karte</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      v-model="formData.nameOnCard"
                      autocomplete="cc-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div class="col-span-3">
                  <label
                    for="expiration-date"
                    class="block text-sm font-medium text-gray-700"
                    >Datum expiracie (MM/YY)</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      v-model="formData.expirationDate"
                      autocomplete="cc-exp"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="cvc"
                    class="block text-sm font-medium text-gray-700"
                    >CVC</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      v-model="formData.cvc"
                      id="cvc"
                      autocomplete="csc"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-1.5 border"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Order summary -->
          <div class="mt-10 lg:mt-0">
            <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

            <div
              class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <h3 class="sr-only">Items in your cart</h3>
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  v-for="product in allProducts"
                  :key="product.name"
                  class="flex px-4 py-6 sm:px-6"
                >
                  <div class="flex-shrink-0">
                    <img
                      :src="product.imageSrc"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="w-20 rounded-md"
                    />
                  </div>

                  <div class="ml-6 flex flex-1 flex-col">
                    <div class="flex">
                      <div class="min-w-0 flex-1">
                        <h4 class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-gray-700 hover:text-gray-800"
                            >{{ product.name }}</a
                          >
                        </h4>
                      </div>

                      <div class="ml-4 flow-root flex-shrink-0">
                        <button
                          @click="removeFromCart(product)"
                          type="button"
                          class="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Odstranit</span>
                          <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="flex flex-1 items-end justify-between pt-2">
                      <p class="mt-1 text-sm font-medium text-gray-900">
                        {{ product.price }}
                      </p>

                    </div>
                  </div>
                </li>

                <!-- More products... -->
              </ul>
              <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex items-center justify-between">
                  <dt class="text-sm">Medzisúčet</dt>
                  <dd class="text-sm font-medium text-gray-900">
                    ${{ totalPrice }}
                  </dd>
                </div>
                <div class="flex items-center justify-between">
                  <dt class="text-sm">Doprava</dt>
                  <dd class="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div class="flex items-center justify-between">
                  <dt class="text-sm">Dane</dt>
                  <dd class="text-sm font-medium text-gray-900">$5.52</dd>
                </div>
                <div
                  class="flex items-center justify-between border-t border-gray-200 pt-6"
                >
                  <dt class="text-base font-medium">Celkom</dt>
                  <dd class="text-base font-medium text-gray-900">
                    ${{ totalPrice + 5.52 + 5 }}
                  </dd>
                </div>
              </dl>

              <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  class="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Objednať teraz
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>

    <main
      v-else-if="allProducts.length <= 0"
      class="max-w-7xl bg-gray-100 h-[75vh] mx-auto my-12 flex items-center justify-center"
    >
      <h1 class="text-2xl">
        Košík je prázdny
        <router-link
          class="border-b border-primary text-primary font-bold"
          to="/products"
          >Isť na produkty</router-link
        >
      </h1>
    </main>
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
      formData: {
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        apartment: "",
        city: "",
        country: "",
        region: "",
        postalCode: "",
        phone: "",
        paymentType: "",
        cardNumber: "",
        nameOnCard: "",
        expirationDate: "",
        cvc: "",
      },
    };
  },
  methods: {
    removeFromCart(product) {
      useCart().remove(product);
    },
    submitForm(e) {
      e.preventDefault();
      //push to /summary route
      useCart().addFormData(this.formData);

      this.$router.push("/summary");
    },
  },
  mounted() {
    this.allProducts = useCart().cart;
  },

  computed: {
  totalPrice(): number {
    return this.allProducts.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price;
    }, 0);
  }
}
,
};
</script>
