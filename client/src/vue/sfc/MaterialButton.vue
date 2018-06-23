<template lang="pug">
.material-button
  a.waves-effect.waves-light.btn(v-if="!submit" :class="addClass" :href="href" @click.prevent="onClick" v-html="text")
  button.waves-effect.waves-light.btn(v-if="submit" :class="addClass" type="submit" v-html="text")
</template>

<style lang="scss" scoped>
.material-button {
  display: inline-block;
}
</style>

<script>
export default {
  name: 'MaterialButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    addClass: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    submit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      if (this.href) {
        window.location = this.href
      } else {
        this.$emit('clicked', true)
      }
    },
  },
}
</script>
