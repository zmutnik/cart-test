<template>
  <div class="pricing-group">
    <div class="pricing-group__head">
      <div>{{ GET_GROUP_NAME(groupId) }}</div>
    </div>
    <div class="pricing-group__body">
      <PricingList :items="items" />
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
  margin-bottom 10px
  border 1px solid #000
  border-radius 3px 3px 0 0
  overflow hidden
  &__head
    border-bottom 1px solid #000
    padding 5px 10px
    background-color #eee
</style>
