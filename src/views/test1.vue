<template>
  <div class="test2">
    test1
    <el-button @click.native="linkHandle">toQuery</el-button>

  </div>
</template>

<script>
export default {
  methods: {
    linkHandle() {
      this.$router.push({ name: 'test3', query: { id: '1' }})
    }
  }
}
</script>
