<template>
  <div class="pricing-list">
    {{ item }}
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
    ...mapGetters("pricing", ["GET_GROUP_NAME"])
  }
};
</script>

<style lang="stylus" scoped>
.pricing-list
  display block
</style>
