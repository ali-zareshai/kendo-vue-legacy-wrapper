<template>
  <div class="legacy-kendo-grid" :id="id">
    <!-- Toolbar -->
    <div v-if="toolbar && toolbar.length" class="k-toolbar k-grid-toolbar">
      <template v-for="(tool, index) in toolbar" :key="index">
        <button v-if="tool.name === 'create'" class="k-button" @click="addRow">{{ tool.text || 'Create' }}</button>
        <button v-if="tool.name === 'save'" class="k-button" @click="saveChanges">{{ tool.text || 'Save' }}</button>
        <button v-if="tool.name === 'cancel'" class="k-button" @click="cancelChanges">{{ tool.text || 'Cancel' }}</button>
        <button v-if="tool.name === 'excel'" class="k-button" @click="exportExcel">Excel</button>
        <button v-else :class="`k-button k-grid-${tool.name}`" @click="$emit(tool.name.replace('-btn', ''))">
          {{ tool.text }}
        </button>
      </template>
    </div>

    <!-- Native Grid -->
    <Grid
      ref="nativeGrid"
      :data-items="processedData"
      :columns="columns"
      :pageable="pageableOptions"
      :skip="skip"
      :take="take"
      :total="dataSource.total"
      :sortable="sortable"
      :sort="sort"
      @sortchange="sortChange"
      :filterable="filterable"
      :filter="filter"
      @filterchange="filterChange"
      :editable="editable"
      @itemchange="itemChange"
      :resizable="resizable"
      :reorderable="reorderable"
      :scrollable="scrollable"
      :selectable="selectable"
      :height="height"
      @pagechange="pageChange"
      @databinding="$emit('databinding', $event)"
    >
      <!-- Slots برای column templates (از children) -->
      <slot></slot>
    </Grid>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';

const props = defineProps({
  id: String,
  height: [String, Number],
  dataSourceRef: String,  // ref به DataSource
  pageable: [Boolean, Object],
  sortable: [Boolean, Object],
  sortableMode: String,
  filterable: [Boolean, Object],
  editable: [Boolean, Object],
  navigatable: Boolean,
  resizable: Boolean,
  reorderable: Boolean,
  scrollable: Boolean,
  selectable: Boolean,
  toolbar: Array,
  noRecords: Boolean,
  excelFileName: String,
  excelAllPages: Boolean,
  allowCopy: Boolean
});

const emit = defineEmits(['databinding', 'edit', 'add', 'save', 'cancel', 'commnet', 'kavir-tran', /* ... تمام events سفارشی */]);

const dataSource = inject('legacyDataSource');  // از DataSource

const skip = ref(0);
const take = ref(props.pageable?.pageSize || 20);
const sort = ref([]);
const filter = ref(null);

const processedData = computed(() => process(dataSource.data, { skip: skip.value, take: take.value, sort: sort.value, filter: filter.value }).data);

const columns = ref([]);  // از children GridColumn جمع‌آوری می‌شود (در mounted)

const pageableOptions = computed(() => props.pageable || false);

const addRow = () => emit('add');
const saveChanges = () => dataSource.update({ data: { models: processedData.value } });
const cancelChanges = () => emit('cancel');
const exportExcel = () => { /* پیاده‌سازی ExcelExport */ };

const itemChange = (e) => {
  if (props.edit) props.edit(e);
  emit('itemchange', e);
};

const pageChange = (e) => {
  skip.value = e.page.skip;
  take.value = e.page.take;
};

const sortChange = (e) => sort.value = e.sort;
const filterChange = (e) => filter.value = e.filter;

onMounted(() => {
  dataSource.read();
  // جمع‌آوری columns از slots (GridColumn)
  columns.value = Object.keys($slots).map(key => {
    // منطق برای استخراج props از GridColumn slots
    return { field: key, /* ... */ };
  });
});

defineExpose({
  kendoWidget: () => ({ dataSource: { read: dataSource.read } }),  // برای refresh
  refresh: () => dataSource.read()
});
</script>

<style scoped>
/* استایل‌های قدیمی را کپی کنید */
</style>