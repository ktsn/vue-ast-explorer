<template lang="pug">
ast-array(v-if="isArray(value)", :ast="value", :name="name")
ast(v-else-if="isObject(value)", :ast="value", :name="name")
div(v-else)
  span(v-if="name").ast-property-name {{ name }}:
  span.ast-property-value {{ strValue }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from './component'
import Ast from './Ast.vue'
import AstArray from './AstArray.vue'

@Component({
  name: 'ast-node',
  components: {
    Ast,
    AstArray
  }
})
export default class AstNode extends Vue {
  @Prop(String) name: string
  @Prop() value: any

  get strValue(): string {
    if (this.value === undefined) return 'undefined'
    if (this.value === null) return 'null'
    return JSON.stringify(this.value)
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
  &-property-name {
    margin-right: 0.3em;
  }
}
</style>