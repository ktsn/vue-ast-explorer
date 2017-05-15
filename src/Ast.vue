<template lang="pug">
  .ast
    button.ast-toggle(@click="open = !open")
      span.ast-property-name(v-if="name") {{ name }}:
      | {
      span(v-if="!open") ...
    ul.ast-property-list(v-if="open && ast")
      li.ast-property(v-for="{ key, value } in entries")
        ast-array(v-if="isArray(value)", :ast="value", :name="key")
        ast(v-else-if="isObject(value)", :ast="value", :name="key")
        div(v-else)
          span.ast-property-name {{ key }}:
          span.ast-property-value {{ JSON.stringify(value) }}
    | }
</template>

<script lang="ts">
import { Vue, Component, Prop } from './component'
import AstArray from './AstArray.vue'

@Component({
  name: 'ast',
  components: {
    AstArray
  }
})
export default class AST extends Vue {
  @Prop(String) name: string

  @Prop({
    type: Object
  })
  ast: any

  open = false

  get entries() {
    return Object.keys(this.ast).map(key => {
      return {
        key,
        value: this.ast[key]
      }
    })
  }

  isObject(item: any): boolean {
    return typeof item === 'object' && item !== null
  }

  isArray(item: any): boolean {
    return Array.isArray(item)
  }
}
</script>

<style lang="scss" scoped>
.ast {
  &-toggle {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-width: 0;
  }

  &-property-list {
    margin-left: 1em;
  }

  &-property-name {
    margin-right: 0.3em;
  }
}
</style>
