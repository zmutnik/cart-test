<template>
  <div class="pricing">
    <div class="container">
      <div v-if="loading">Loading...</div>
      <div v-else class="pricing__data">
        <div class="pricing__row">
          <div v-for="(items, key) in pricing" :key="key" class="pricing__col">
            <PricingGroup :groupId="key" :items="items" />
          </div>
        </div>
      </div>
      <div v-show="selectedItems.length" class="pricing__cart">
        <CartTable :items="selectedItems" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { A_FETCH_PRICING, A_FETCH_NAMES } from "@/store/action.types";
import { M_CHANGE_CURRENCY_RATIO } from "@/store/mutation.types";

import PricingGroup from "@/components/Pricing/PricingGroup.vue";
import CartTable from "@/components/Cart/CartTable.vue";

export default {
  name: "Pricing",
  components: {
    PricingGroup,
    CartTable
  },
  data() {
    return {
      loading: true,
      pricing: {}
    };
  },
  computed: {
    ...mapState("cart", ["selectedItems"]),
    ...mapGetters("pricing", ["GET_TRANSFORMED_PRICING"])
  },
  methods: {
    ...mapActions("pricing", [A_FETCH_PRICING, A_FETCH_NAMES]),
    ...mapMutations("currency", [M_CHANGE_CURRENCY_RATIO]),
    updatePricing() {
      this.M_CHANGE_CURRENCY_RATIO();
      this.A_FETCH_PRICING();
    }
  },
  async mounted() {
    await this.A_FETCH_PRICING();
    await this.A_FETCH_NAMES();

    this.loading = false;
    this.pricing = this.GET_TRANSFORMED_PRICING("G");

    setInterval(this.updatePricing, 15000);
  }
};
</script>

<style lang="stylus" scoped>
.pricing
  &__cart
    margin-top 50px
  &__row
    display flex
    flex-wrap wrap
    margin 0 -10px
  &__col
    width 50%
    max-width 50%
    flex-basis 50%
    padding 0 10px
</style>
