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
import PricingGroup from "@/components/Pricing/PricingGroup.vue";

export default {
  name: "Pricing",
  components: {
    PricingGroup
  },
  created: {
    // get data from json
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
