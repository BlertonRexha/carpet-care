<template>
  <div class="list-view">
    <div class="list-view-header">
      <h1>Orders</h1>
      <el-button type="primary" @click="createItem">Create</el-button>
      <create-edit-list-item v-if="showCreateDialog" @close="closeCreateEditModal" :model="editingModel" />
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="createdDate" label="Date">
        <template #default="{ row }">
          <span>{{ formatedDate(row.createdDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Emri" />
      <el-table-column prop="tel" label="Tel" />
      <el-table-column prop="paid" label="Paguar">
        <template #default="{ row }">
          <paid-badge :paid="row.paid" />
        </template>
      </el-table-column>
      <el-table-column prop="shipped" label="Derguar">
        <template #default="{ row }">
          <shipped-badge :shipped="row.shipped" />
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="Qmimi">
        <template #default="{ row }">
          {{ row.totalPrice }} €
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="viewDetails"> Detajet </el-button>
          <el-button link type="primary" size="small" @click="editItem(row)"> Ndrysho </el-button>
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
      editingModel: null,
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
    closeCreateEditModal() {
      this.editingModel = null;
      this.showCreateDialog = false;
    },
    editItem(model) {
      this.editingModel = model;
      this.showCreateDialog = true;
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
