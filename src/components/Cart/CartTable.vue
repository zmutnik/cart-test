<template>
  <div class="cart-table">
    <table class="cart-table__table">
      <tr>
        <th class="cart-table__name">Наименование товара</th>
        <th class="cart-table__quantity">Количество</th>
        <th class="cart-table__price">Цена</th>
        <th class="cart-table__actions"></th>
      </tr>
      <tr v-for="(item, i) in items" :key="i">
        <td>{{ GET_PRICING_ITEM_TITLE(item.G, item.T) }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.C | currencyFilter(currencyRatio) }}</td>
        <td>
          <BaseButton text="Удалить" @click="removeFromCart(i)" />
        </td>
      </tr>
    </table>

    <div class="cart-table__total">
      Общая сумма: {{ GET_TOTAL_PRICE | currencyFilter(currencyRatio) }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import BaseButton from "@/components/Base/BaseButton.vue";

export default {
  components: {
    BaseButton
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState("currency", ["currencyRatio"]),
    ...mapGetters("pricing", ["GET_PRICING_ITEM_TITLE"]),
    ...mapGetters("cart", ["GET_TOTAL_PRICE"])
  },
  methods: {
    ...mapMutations("cart", ["M_REMOVE_CART_ITEM"]),
    removeFromCart(index) {
      this.M_REMOVE_CART_ITEM(index);
    }
  }
};
</script>

<style lang="stylus">
.cart-table
    &__table
        width 100%
        text-align left
    &__name
        width 50%
    &__quantity
    &__price
        width 15%
    &__total
        width 100%
        margin-top 30px
        display flex
        justify-content flex-end
        font-size 20px
        font-weight 700
    th
        padding 5px 10px
        color #999
    td
        padding 5px 10px
        color #000
    tr
        &:not(:first-child)
            border-top 1px solid #eee
</style>
