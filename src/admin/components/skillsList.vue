<template lang="pug">
    .skills-list
        .skill-title {{ skillType }}
</template>
<script>
export default {
  props: {
      skillType: String
  }
}
</script>
<style lang="scss" scoped>

</style>


