<template>
  <div class="pricing-list">
    <div v-for="item in items" :key="item.T" class="pricing-list__item">
      <PricingItem :item="item" />
    </div>
  </div>
</template>

<script>
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
</style>
