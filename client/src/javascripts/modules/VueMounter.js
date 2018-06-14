import Vue from 'vue'

export default class VueMounter {
  constructor() {
    this.components = []
  }

  add(component) {
    return this.components.push(component)
  }

  mount() {
    return Promise.all(
      this.components.map(component => {
        return new Promise(resolve => {
          const selector = `vue[data-name="${component.name}"]`
          const elements = [...document.querySelectorAll(selector)]
          if (elements.length) {
            console.log(this._mountAtElements(component, elements))
            this._mountAtElements(component, elements).then(() => {
              return resolve()
            })
          } else {
            return resolve()
          }
        })
      })
    )
  }

  _mountAtElements(component, elements) {
    return Promise.all(
      elements.map(element => {
        this._createVueComponent(component, element)
      })
    )
  }

  _createVueComponent(component, element) {
    return new Promise(resolve => {
      const { component: VueComponent, options = {} } = component
      const dataProps = element.dataset.props
      const props = dataProps ? JSON.parse(dataProps) : {}
      console.log(element)
      console.log(props)
      new Vue({
        element,
        components: {
          VueComponent,
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
        ...options,
      })
    })
  }
}

// function mountComponents(component, elements) {
//   return Promise.all(
//     elements.map(element => {
//       mountComponent(component, element)
//     })
//   )
// }
//
// function mountComponent(component, element) {
//   const { component: VueComponent, options = {} } = component
//   return new Promise(resolve => {
//     const dataProps = element.dataset.props
//     const props = dataProps ? JSON.parse(dataProps) : {}
//     console.log(element)
//     console.log(props)
//     new Vue({
//       element,
//       components: { VueComponent },
//       data() {
//         return { props }
//       },
//       mounted() {
//         resolve()
//       },
//       ...options,
//       template: '<VueComponent v-bind="props" />',
//     })
//   })
// }

// export const VueMounter = components => {
//   Promise.all(
//     components.map(component => {
//       new Promise(resolve => {
//         const { component: VueComponent } = component
//         const selector = `vue[data-name="${VueComponent.name}"]`
//         const elements = [...document.querySelectorAll(selector)]
//         if (elements) {
//           mountComponents(component, elements).then(() => {
//             resolve()
//           })
//         } else {
//           resolve()
//           console.error('elements is empty')
//         }
//       })
//     })
//   )
// }
// new Promise(resolve => {
//   if (el) {
//     const propsString = el.dataset.props
//     console.log(propsString)
//     const props = propsString ? JSON.parse(propsString) : {}
//     new Vue({
//       el,
//       components: { VueComponent },
//       data() {
//         return { props }
//       },
//       mounted() {
//         resolve()
//       },
//       template: '<VueComponent v-bind="props" />',
//       option,
//     })
//   } else {
//     resolve()
//     return
//   }
// })
// )
// }
