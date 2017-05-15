<template lang="pug">
.ast
  button.ast-toggle(@click="open = !open")
    span.ast-property-name(v-if="name") {{ name }}:
    | {{ braces[0] }}
    span(v-if="!open && !empty") ...
  ul.ast-property-list(v-if="open && !empty")
    li.ast-property(v-for="{ value, key } in entries")
      ast-node(:value="value", :name="key", :context="childContext")
  | {{ braces[1] }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from '../component'

@Component
export default class AstCollection extends Vue {
  @Prop(String) name: string

  @Prop({
    type: Array,
    required: true
  })
  braces: [string, string]

  @Prop({
    type: Array,
    required: true
  })
  entries: { value: any, key?: string }[]

  @Prop({
    type: Object,
    required: true
  })
  context: { depth: number }

  open = this.context.depth > 0

  get empty(): boolean {
    return this.entries.length === 0
  }

  get childContext(): { depth: number } {
    return {
      depth: this.context.depth - 1
    }
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
    cursor: pointer;
  }

  &-property-list {
    margin-left: 1em;
  }

  &-property-name {
    margin-right: 0.3em;
    color: #3d608e;
    font-weight: bold;
  }
}
</style>
