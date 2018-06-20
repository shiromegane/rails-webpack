import Vue from 'vue'

export default class VueMounter {
  constructor() {
    this.components = []
  }

  add(component) {
    this.components.push(component)
    return component
  }

  mount() {
    return Promise.all(
      this.components.map(component => {
        this._mountAtElements(component)
      })
    )
  }

  _mountAtElements(component) {
    return new Promise(resolve => {
      const selector = `vue[data-name="${component.name}"]`
      const elements = [...document.querySelectorAll(selector)]
      if (elements.length > 0) {
        Promise.all(
          elements.map(element => {
            this._createVueComponent(component, element)
          })
        ).then(result => {
          resolve(result)
        })
      } else {
        resolve()
      }
    })
  }

  _createVueComponent(component, element) {
    return new Promise(resolve => {
      const dataProps = element.dataset.props
      console.log(dataProps)
      const props = dataProps ? JSON.parse(dataProps) : {}
      new Vue({
        el: element,
        name: component.name,
        components: {
          VueComponent: component,
        },
        data() {
          return {
            props: props,
          }
        },
        mounted() {
          resolve()
        },
        template: '<VueComponent v-bind="props" />',
      })
    })
  }
}
