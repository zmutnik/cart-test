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
        <td>
          <BaseInput
            :key="i"
            :value="item.quantity"
            type="number"
            @input="changeItemQuantity(i, $event)"
          />
        </td>
        <td>{{ (item.C * item.quantity) | currencyFilter(currencyRatio) }}</td>
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
import {
  M_CHANGE_INPUT_QUANTITY,
  M_REMOVE_CART_ITEM
} from "@/store/mutation.types";

import BaseButton from "@/components/Base/BaseButton.vue";
import BaseInput from "@/components/Base/BaseInput.vue";

export default {
  components: {
    BaseButton,
    BaseInput
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
    ...mapMutations("cart", [M_REMOVE_CART_ITEM, M_CHANGE_INPUT_QUANTITY]),
    removeFromCart(index) {
      this.M_REMOVE_CART_ITEM(index);
    },
    changeItemQuantity(index, event) {
      const value = event.target.value;

      this.M_CHANGE_INPUT_QUANTITY({
        index,
        value: value.length && parseInt(value) > 0 ? parseInt(value) : 1
      });
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
