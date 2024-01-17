import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cart: [],
    formData: {},
  }),
  actions: {
    add(item: object) {
      this.cart.push(item);
    },

    remove(item: object) {
      this.cart.splice(this.cart.indexOf(item), 1);
    },

    addFormData(data: object) {
      this.formData = data;
    },
  },
});
