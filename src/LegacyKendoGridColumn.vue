<template>
  <div style="display: none;"></div>  <!-- نامرئی، فقط props پاس می‌دهد -->
</template>

<script setup>
const props = defineProps({
  field: String,
  title: String,
  template: Function,
  filterable: [Boolean, Object],
  aggregates: Array,
  footerTemplate: Function,
  groupFooterTemplate: Function,
  command: Array
});

// در parent (Grid)، این props را جمع‌آوری کنید و به columns اضافه کنید
</script>