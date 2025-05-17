<template>
  <el-container class="app-container">
    <router-view v-if="loginView" />
    <template v-else>
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
    </template>
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
  computed: {
    loginView() {
      return this.$route.name === 'login'
    }
  }
});
</script>

<style>
.app-container {
  height: 100vh;
}
</style>
