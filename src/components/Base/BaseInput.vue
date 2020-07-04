<template>
  <div class="base-input">
    <label class="base-input__label">
      <span v-if="label">{{ label }}</span>
      <input
        class="base-input__field"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text"
    },
    value: {
      type: [Number, String],
      required: false
    },
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.base-input
  &__field
    padding 5px 10px
    border 1px solid #eee
    border-radius 3px
    color #000
</style>
