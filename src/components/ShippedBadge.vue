<template>
  <div>
    <el-tooltip v-if="shipped.done" placement="top" effect="dark">
      <el-tag type="success" effect="dark" round> Shipped </el-tag>
      <template #content>
        <p>Shipped on: {{ formatedDate }}</p>
        <p>By: {{ shipped.by }}</p>
      </template>
    </el-tooltip>
    <el-tag v-else type="warning" effect="dark" round> NO </el-tag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShippedBadge',
  props: {
    shipped: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    formatedDate() {
      return this.$dayjs(this.shipped.date).format("YYYY-MM-DD HH:mm");
    },
  },
});

</script>
