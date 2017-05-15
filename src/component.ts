import Vue, { PropOptions } from 'vue'
import { createDecorator } from 'vue-class-component'

export { default as Vue } from 'vue'
export { default as Component } from 'vue-class-component'

export function Prop(prop?: PropOptions) {
  return createDecorator((options, key) => {
    if (!options.props) options.props = {}
    options.props[key] = prop || null
  })
}
