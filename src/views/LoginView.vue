<template>
    <div class="login-container">
        <el-form ref="loginform" style="max-width: 600px" :model="model" status-icon :rules="rules" label-position="top">
            <el-form-item label="Username" prop="username">
                <el-input v-model="model.username" placeholder="Please input your username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="model.password" type="password" placeholder="Please input your password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button @click="login()">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useMainStore } from '../store/index.ts'
export default defineComponent({
    name: "LoginView",
    data() {
        return {
            model: {
                username: "fatos_hajdini",
                password: "123456",
            }
        };
    },
    methods: {
        login() {
            if (this.model.username === 'fatos_hajdini' && this.model.password === '123456') {
                localStorage.setItem("isAuthenticated", this.model.username + this.model.password);
                useMainStore().setUserDetails({
                    id: "1897238981297398",
                    name: "Fatos Hajdini",
                    role: "admin",
                    store: "Leoni Group"
                })
                this.$router.push({ name: 'list' })
            }
        }
    }
})
</script>  
<style lang="scss" scoped>
    .login-container {
        width: 300px;
        height: fit-content;
        padding: 2rem;
        margin: 5rem auto;
        background-color: white;
        border-radius: 3px;
        box-shadow: 0 5px 10px #d4d4d4;
    }

</style>