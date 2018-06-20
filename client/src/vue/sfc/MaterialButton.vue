<template lang="pug">
.material-button
  a.waves-effect.waves-light.btn(v-if="type === 'link'" :class="color" :href="href" @click.prevent="onClick")
    i.material-icons.left(v-if="leftIcon") {{ leftIcon }}
    | {{ text }}
    i.material-icons.right(v-if="rightIcon") {{ rightIcon }}
  button.waves-effect.waves-light.btn(v-if="type === 'button'" :class="color" type="submit" @click.prevent="onClick")
    i.material-icons.left(v-if="leftIcon") {{ leftIcon }}
    | {{ text }}
    i.material-icons.right(v-if="rightIcon") {{ rightIcon }}
</template>

<style lang="scss" scoped>
.material-button {
  display: inline-block;
}
</style>

<script>
// TODO: SNS系のカラーを指定出来るようにする
export default {
  name: 'MaterialButton',
  props: {
    type: {
      type: String,
      default: 'link',
    },
    text: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'light-blue darken-1',
    },
    href: {
      type: String,
      default: null,
    },
    leftIcon: {
      type: String,
      default: null,
    },
    rightIcon: {
      type: String,
      default: null,
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
