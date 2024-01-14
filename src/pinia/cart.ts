import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cart: [],
    formData: {},
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    add(item: object) {
      this.cart.push(item);
    },

    remove(item: object) {
      this.cart.splice(this.cart.indexOf(item), 1);
    },

    addFormData(data: object) {
      console.log(data);

      this.formData = data;
    },
  },
});
