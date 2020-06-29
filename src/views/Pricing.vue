<template>
  <div class="pricing">
    <div class="container">
      <div class="pricing__row">
        <div class="pricing__col">
          <PricingGroup />
          <PricingGroup />
        </div>
        <div class="pricing__col">
          <PricingGroup />
          <PricingGroup />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { A_FETCH_PRICING, A_FETCH_NAMES } from "../store/action.types";

import PricingGroup from "@/components/Pricing/PricingGroup.vue";

export default {
  name: "Pricing",
  components: {
    PricingGroup
  },
  computed: {
    ...mapGetters("pricing", ["GET_PRICING", "GET_NAMES"])
  },
  methods: {
    ...mapActions("pricing", [A_FETCH_PRICING, A_FETCH_NAMES]),
  },
  async created() {
    await this.A_FETCH_PRICING();
    await this.A_FETCH_NAMES();
  }
};
</script>

<style lang="stylus" scoped>
.pricing
  &__row
    display flex
    margin 0 -20px
  &__col
    width 50%
    max-width 50%
    flex-basis 50%
    padding 0 20px
</style>
