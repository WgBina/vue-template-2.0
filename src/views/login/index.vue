<template>
  <div class="login">
    <el-button @click="loginHandle">login</el-button>
  </div>
</template>

<script>
import { setToken, setRoles } from '@/utils/auth'
export default {
  name: 'Login',

  data() {
    return {}
  },

  methods: {
    loginHandle() {
      setToken(['admin'])
      setRoles(['null'])
      // this.$router.push({ path: this.redirect || '/' })
      this.$router.push('/')
    }
  }
}
</script>
