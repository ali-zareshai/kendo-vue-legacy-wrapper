<template>
  <div style="display: none;"></div>  <!-- کامپوننت نامرئی -->
</template>

<script setup>
import { ref, provide } from 'vue';
import { process } from '@progress/kendo-data-query';

const props = defineProps({
  transportRead: { type: Function },
  transportUpdate: { type: Function },
  transportCreate: { type: Function },
  schemaModelFields: { type: Object },
  schemaModelId: { type: String, default: 'id' },
  aggregate: { type: Array },
  pageSize: { type: Number, default: 10 },
  batch: { type: Boolean, default: false }
});

const data = ref([]);
const total = ref(0);
const state = ref({});  // Use plain object instead of new State({})

const read = async (e) => {
  if (props.transportRead) {
    await props.transportRead({ success: (res) => { data.value = res; total.value = res.length; } });
  }
  e?.success(data.value);
};

const update = (e) => {
  if (props.transportUpdate) props.transportUpdate(e);
};

const create = (e) => {
  if (props.transportCreate) props.transportCreate(e);
};

const dataSource = { data: data.value, read, update, create, total: total.value };

// Provide برای استفاده در Grid
provide('legacyDataSource', dataSource);

defineExpose({ read, data: data.value, total: total.value });
</script>