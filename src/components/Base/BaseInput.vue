<template>
  <label class="f-default__label">
    <span v-if="label">{{ label }}</span>
    <input class="f-default__field" type="text" :placeholder="placeholder" />
  </label>
</template>

<script>
export default {
  props: {
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
