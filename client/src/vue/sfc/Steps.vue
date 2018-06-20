<template lang="pug">
.steps
  ul.steps
    li(v-for="(step, index) in steps" :class="{ finished: index+1 < current, current: index+1 == current }")
      span.number STEP. {{ index+1 }}
      span.text {{ step }}
</template>

<style lang="scss" scoped>
.steps {
  padding: 0.4rem;
  ul.steps {
    @include steps;
  }
}
</style>

<script>
export default {
  name: 'Steps',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
}
</script>
