<template>
  <div class="login">
    <el-button @click="loginHandle">login</el-button>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',
  methods: {
    loginHandle() {
      setToken(['admin'])
      this.$router.push('/')
    }
  }
}
</script>
