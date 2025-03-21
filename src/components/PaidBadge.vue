<template>
  <div>
    <el-tooltip v-if="paid.done" placement="top" effect="dark">
      <el-tag type="success" effect="dark" round> Paid </el-tag>
      <template #content>
        <p>Paid on: {{ formatedDate }}</p>
        <p>Cashier: {{ paid.cashier }}</p>
      </template>
    </el-tooltip>
    <el-tag v-else type="warning" effect="dark" round> Unpaid </el-tag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaidBadge",
  props: {
    paid: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    formatedDate() {
      return this.$dayjs(this.paid.date).format("YYYY-MM-DD HH:mm");
    },
  },
});
</script>
