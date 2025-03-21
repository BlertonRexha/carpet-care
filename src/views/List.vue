<template>
  <div class="list-view">
    <div class="list-view-header">
      <h1>Orders</h1>
      <el-button type="primary" @click="createItem">Create</el-button>
      <create-edit-list-item v-if="showCreateDialog" @close="showCreateDialog = false" />
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="createdDate" label="Date">
        <template #default="{ row }">
          <span>{{ formatedDate(row.createdDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="tel" label="Tel" />
      <el-table-column prop="paid" label="Paid">
        <template #default="{ row }">
          <paid-badge :paid="row.paid" />
        </template>
      </el-table-column>
      <el-table-column prop="shipped" label="Shipped">
        <template #default="{ row }">
          <shipped-badge :shipped="row.shipped" />
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="Price" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="viewDetails"> Detail </el-button>
          <el-button link type="primary" size="small" @click="editItem">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "@/store";
import PaidBadge from "@/components/PaidBadge.vue";
import ShippedBadge from "@/components/ShippedBadge.vue";
import CreateEditListItem from "@/components/CreateEditListItem.vue";

export default defineComponent({
  name: "ListView",
  components: {
    PaidBadge,
    ShippedBadge,
    CreateEditListItem,
  },
  data() {
    return {
      showCreateDialog: false,
    };
  },
  computed: {
    tableData() {
      const main = useMainStore();
      return main.list;
    },
  },
  methods: {
    viewDetails() {
      console.log("viewDetails");
    },
    editItem() {
      console.log("editItem");
    },
    createItem() {
      this.showCreateDialog = true;
    },
    formatedDate(date: string) {
      return this.$dayjs(date).format("YYYY-MM-DD HH:mm");
    },
  },
});
</script>
<style scoped lang="scss">
.list-view-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
