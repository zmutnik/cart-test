<template>
  <div class="pricing-item">
    <div class="pricing-item__inner">
      <div class="pricing-item__description">
        {{ populatedItemData.title }} ({{ populatedItemData.quantity }})
      </div>
      <div class="pricing-item__price" :class="{}">
        {{ populatedItemData.priceInUSD | currencyFilter(currencyRatio) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("currency", ["currencyRatio"]),
    ...mapGetters("pricing", ["GET_PRICING_ITEM_TITLE"]),
    populatedItemData() {
      return {
        title: this.GET_PRICING_ITEM_TITLE(this.item.G, this.item.T),
        priceInUSD: this.item.C,
        quantity: this.item.P
      };
    }
  },
  watch: {
    currencyRatio(newVal, oldVal) {
      const diff = newVal - oldVal;

      console.log(diff);
    }
  }
};
</script>

<style lang="stylus" scoped>
.pricing-item
  position relative
  display flex
  flex-direction column
  flex-grow 1
  cursor pointer
  &:before
    content "+"
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    font-size 40px
    line-height 40px
    font-weight 700
    color #0f0
    opacity 0
    transition opacity 0.2s ease-out
   &:hover
    &:before
      opacity 1
    .pricing-item__inner
      opacity 0.1

  &__inner
    display flex
    flex-grow 1
    transition opacity 0.2s ease-out
  &__description
    padding 5px
    flex-grow 1
  &__price
    display flex
    align-items center
    justify-content center
    flex-shrink 0
    padding 5px
    min-width 50px
    background-color #fafafa
</style>
