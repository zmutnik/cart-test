<template>
  <div class="pricing-group">
    <div class="pricing-group__head">
      <div>{{ GET_GROUP_NAME(groupId) }}</div>
    </div>
    <div class="pricing-group__list">
      <div v-for="item in items" :key="item.T" class="pricing-group__list-item">
        <PricingList :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PricingList from "@/components/Pricing/PricingList.vue";

export default {
  components: {
    PricingList
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    groupId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters("pricing", ["GET_GROUP_NAME"])
  }
};
</script>

<style lang="stylus" scoped>
.pricing-group
  display block
  margin-bottom 10px
  &__head
    padding 5px 10px
    background-color #eee
  &__list
    display flex
    flex-wrap wrap
  &__list-item
    width 50%
    max-width 50%
    flex-basis 50%
</style>
