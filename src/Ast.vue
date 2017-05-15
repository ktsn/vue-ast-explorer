<template lang="pug">
  .ast
    button.ast-toggle(@click="open = !open")
      span.ast-property-name(v-if="name") {{ name }}:
      | {
      span(v-if="!open") ...
    ul.ast-property-list(v-if="open && ast")
      li.ast-property(v-for="{ key, value } in entries")
        ast-node(:name="key", :value="value")
    | }
</template>

<script lang="ts">
import { Vue, Component, Prop } from './component'
import AstNode from './AstNode.vue'

@Component({
  name: 'ast',
  components: {
    AstNode
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
}
</style>
