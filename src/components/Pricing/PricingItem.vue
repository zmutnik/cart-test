<template>
  <div class="pricing-item">
    <div class="pricing-item__inner">
      <div class="pricing-item__description">
        {{ populatedItemData.title }} ({{ populatedItemData.quantity }})
      </div>
      <div class="pricing-item__price">{{ populatedItemData.priceInUSD }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters("pricing", ["GET_PRICING_ITEM_TITLE"]),
    populatedItemData() {
      return {
        title: this.GET_PRICING_ITEM_TITLE(this.item.G, this.item.T),
        priceInUSD: this.item.C,
        quantity: this.item.P
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.pricing-item
  display flex
  flex-direction column
  flex-grow 1
  border-bottom 1px solid #000
  border-right 1px solid #000
  &__inner
    display flex
    flex-grow 1
  &__description
    padding 5px
    flex-grow 1
  &__price
    display flex
    align-items center
    flex-shrink 0
    padding 5px
    min-width 50px
    background-color #fafafa
</style>
