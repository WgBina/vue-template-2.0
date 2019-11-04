<template>
  <div class="test1">test2</div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.id)
  }
}
</script>
