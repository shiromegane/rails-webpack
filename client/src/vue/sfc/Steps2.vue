<template lang="pug">
.steps
  ul
    li(v-for="(step, index) in steps" :class="{ finished: index+1 < current, current: index+1 == current }")
      small STEP. {{ index+1 }}
      span {{ step }}
</template>

<style lang="scss" scoped>
$height: 2rem;
$half-height: $height / 2;
$arrow-height: $height - 0.05rem;
$arrow-height-half: $arrow-height / 2;
$arrow-width: 0.5rem;
$arrow-border-indent: -$arrow-width;
$arrow-bg-indent: $arrow-border-indent + 0.05rem;

$step-default-text-color: $color-asbestos;
$step-default-bgcolor: $color-white;
$step-finished-text-color: $color-silver;
$step-finished-bgcolor: $color-clouds;
$step-current-bgcolor: $color-peter-river;
$step-current-text-color: $color-white;

$arrow-border-color: $color-silver;
$arrow-default-bgcolor: $step-default-bgcolor;
$arrow-current-bgcolor: $step-current-bgcolor;
$arrow-finished-bgcolor: $step-finished-bgcolor;

$arrow-z-index: 1;

.steps {
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  ul {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    height: $height;
    box-shadow: 0 0 2px $color-box-shadow;
    & > li {
      display: table-cell;
      height: 100%;
      color: $step-default-text-color;
      background: $step-default-bgcolor;
      font-size: 0.8rem;
      padding: 0 0.4rem 0 0.8rem;
      position: relative;
      border: 0;
      text-align: center;
      & > small {
        line-height: 1;
        font-size: 0.6rem;
        display: block;
        position: relative;
        top: 0.25rem;
      }
      & > span {
        line-height: 1;
        font-size: 0.9rem;
        display: block;
        position: relative;
        top: 0.25rem;
      }
      &:first-of-type {
        padding-left: 0.5rem;
      }
      &:last-of-type {
        padding-right: 0.5rem;
        &:before,
        &:after {
          display: none;
        }
      }
      &:before,
      &:after {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        content: '';
        height: $arrow-height;
        width: $arrow-width;
        border-top: $arrow-height-half solid transparent;
        border-bottom: $arrow-height-half solid transparent;
        border-right: 0;
        z-index: $arrow-z-index;
      }
      &:before {
        right: $arrow-border-indent;
        border-left: $arrow-width solid $arrow-border-color;
      }
      &:after {
        right: $arrow-bg-indent;
        border-left: $arrow-width solid $arrow-default-bgcolor;
      }
      &.finished {
        color: $step-finished-text-color;
        background: $step-finished-bgcolor;
        &:after {
          border-left-color: $arrow-finished-bgcolor;
        }
      }
      &.current {
        color: $step-current-text-color;
        background: $step-current-bgcolor;
        &:after {
          border-left-color: $arrow-current-bgcolor;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Steps2',
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
