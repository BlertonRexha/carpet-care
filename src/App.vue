<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <asside-view />
    </el-aside>
    <el-container>
      <el-header>
        <header-view />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssideView from "@/components/AssideView.vue";
import HeaderView from "@/components/HeaderView.vue";

export default defineComponent({
  name: "App",
  components: {
    AssideView,
    HeaderView,
  },
});
</script>

<style>
.app-container {
  height: 100vh;
}
</style>
