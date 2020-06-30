<template>
  <div class="pricing">
    <div class="container">
      <div v-if="loading">Loading...</div>
      <div v-else class="pricing__row">
        <div v-for="(items, key) in pricing" :key="key" class="pricing__col">
          <PricingGroup :groupId="key" :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { A_FETCH_PRICING, A_FETCH_NAMES } from "@/store/action.types";

import PricingGroup from "@/components/Pricing/PricingGroup.vue";

export default {
  name: "Pricing",
  components: {
    PricingGroup
  },
  computed: {
    ...mapGetters("pricing", ["GET_TRANSFORMED_PRICING"])
  },
  data() {
    return {
      loading: true,
      pricing: {}
    };
  },
  methods: {
    ...mapActions("pricing", [A_FETCH_PRICING, A_FETCH_NAMES])
  },
  async mounted() {
    await this.A_FETCH_PRICING();
    await this.A_FETCH_NAMES();

    this.loading = false;
    this.pricing = this.GET_TRANSFORMED_PRICING("G");
  }
};
</script>

<style lang="stylus" scoped>
.pricing
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
