<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Hi,Welcome
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped >
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  padding-right: 30px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
