<template>
  <div class="header-container">
    <h2>{{ store }}</h2>
    <h4>
      <el-icon>
        <user />
      </el-icon>
      {{ userName }}
      <el-icon class="pointer" @click="logout">
        <Switch />
      </el-icon>
    </h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMainStore } from '../store/index.ts'

export default defineComponent({
  name: 'HeaderView',
  computed: {
    store() {
      if (useMainStore()?.userDetails?.store) {
        return useMainStore().userDetails.store
      }
      return 'Carpet Care'
    },
    userName() {
      if (useMainStore()?.userDetails?.name) {
        return useMainStore().userDetails.name
      }
      return 'John Doe'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("isAuthenticated")
      this.$router.push({ name: 'login' })
    }
  }
});
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  h4 {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
