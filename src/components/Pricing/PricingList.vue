<template>
  <div class="pricing-list">
    <div
      v-for="item in items"
      :key="item.T"
      @click="addToCart(item)"
      class="pricing-list__item"
    >
      <PricingItem :item="item" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { M_ADD_TO_CART } from "@/store/mutation.types";

import PricingItem from "@/components/Pricing/PricingItem.vue";

export default {
  components: {
    PricingItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations("cart", [M_ADD_TO_CART]),
    addToCart(item) {
      this.M_ADD_TO_CART({ ...item, quantity: 1 });
    }
  }
};
</script>

<style lang="stylus" scoped>
.pricing-list
  display flex
  flex-wrap wrap
  &__item
    display flex
    flex-direction column
    width 50%
    max-width 50%
    border 1px solid #eee
</style>
