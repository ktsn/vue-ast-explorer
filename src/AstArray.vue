<template lang="pug">
  .ast
    button.ast-toggle(@click="open = !open")
      span.ast-property-name(v-if="name") {{ name }}:
      | [
      span(v-if="!open") ...
    ul.ast-property-list(v-if="open && ast")
      li.ast-property(v-for="value, i in ast")
        ast-array(v-if="isArray(value)", :ast="value")
        ast(v-if="isObject(value)", :ast="value")
        div(v-else)
          span.ast-property-value {{ JSON.stringify(value) }}
    | ]
</template>

<script lang="ts">
import { Vue, Component, Prop } from './component'
import Ast from './Ast.vue'

@Component({
  name: 'ast-array',
  components: {
    Ast
  }
})
export default class AstArray extends Vue {
  @Prop(String) name: string

  @Prop({
    type: Array
  })
  ast: any

  open = false

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
