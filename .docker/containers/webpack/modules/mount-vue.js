import Vue from 'vue'

export const mountVue = settings =>
  Promise.all(
    settings.map(
      setting =>
        new Promise(resolve => {
          const {component: MyComponent, option = {}} = setting
          // コンポーネントのnameを利用
          const elementName = `[data-vue="${MyComponent && MyComponent.name}"]`
          const el = document.querySelector(elementName)
          if (!el) {
            resolve()
            return
          }
          const propsString = el.dataset.vueProps
          const props = propsString ? JSON.parse(propsString) : {}
          new Vue({
            el,
            data() {
              return {props}
            },
            template: '<MyComponent v-bind="props" />',
            components: {
              MyComponent,
            },
            mounted() {
              resolve()
            },
            ...option,
          })
        })
    )
  )
