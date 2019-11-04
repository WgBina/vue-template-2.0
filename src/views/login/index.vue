<template>
  <div class="login">
    <div class="box-login absoluteCenter">
      <div class="box-img">IMG</div>
      <div class="box-input">
        <div class="inner-line">
          <div class="inner-input">
            <label for="search-input" class="label pr-5">sreachVal:</label>
            <input type="text" name="search-input" class="no-outline" />
          </div>
        </div>
        <div class="inner-line">
          <div class="inner-input">
            <label for="search-input" class="label pr-5">sreachVal:</label>
            <input type="text" name="search-input" class="no-outline" />
          </div>
        </div>
        <div class="inner-line">
          <div class="inner-input">
            <el-button @click="loginHandle">login</el-button>
          </div>
        </div>
      </div>
    </div>
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
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.box-login {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.box-img {
  margin: 0 auto;
}
.inner-line {
  // 横向对齐
  // display: flex;
  // justify-content: flex-start;
  // flex-wrap: wrap;
  margin-top: 30px;
}
.label {
  font-size: 16px;
  // margin: 15px 30px 15px 0;
  color: #2f4f4f;
  // display: inline-block;
}

.inner-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 100px;
  height: 28px;
  padding: 4px 7px;
  font-size: 12px;
  line-height: 1.5;

  color: rgba(0, 0, 0, 0.65);
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  cursor: text;
  position: relative;
  // display: inline-block;
  background-image: none;
  background-color: #fff;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.no-outline {
  outline: none;
}
</style>
