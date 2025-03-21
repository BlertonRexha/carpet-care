<template>
  <div class="asside-view">
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><List /></el-icon>
        <span>Lista</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><DataLine /></el-icon>
        <span>Raportet</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>Konfigurimet</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssideView',
  methods: {
    handleOpen(index: string, indexPath: string[]) {
      console.log(index, indexPath);
    },
    handleClose(index: string, indexPath: string[]) {
      console.log(index, indexPath);
    },
  },
});
</script>

<style scoped lang="scss">
.el-menu--vertical {
  height: 100vh;
}
</style>
