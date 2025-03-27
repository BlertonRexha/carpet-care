<template>
  <div>
    <el-tooltip v-if="shipped.done" placement="top" effect="dark">
      <el-tag type="success" effect="dark" round> Derguar </el-tag>
      <template #content>
        <p>Derguar me: {{ formatedDate }}</p>
        <p>Derguar nga: {{ shipped.by }}</p>
      </template>
    </el-tooltip>
    <el-tag v-else type="warning" effect="dark" round> Pa derguar </el-tag>
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
