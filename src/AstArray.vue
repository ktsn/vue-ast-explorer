<template lang="pug">
  .ast
    button.ast-toggle(@click="open = !open")
      span.ast-property-name(v-if="name") {{ name }}:
      | [
      span(v-if="!open") ...
    ul.ast-property-list(v-if="open && ast")
      li.ast-property(v-for="value in ast")
        ast-node(:value="value")
    | ]
</template>

<script lang="ts">
import { Vue, Component, Prop } from './component'
import AstNode from './AstNode.vue'

@Component({
  name: 'ast-array',
  components: {
    AstNode
  }
})
export default class AstArray extends Vue {
  @Prop(String) name: string

  @Prop({
    type: Array
  })
  ast: any

  open = false
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
