<template lang="pug">
ast-array(v-if="isArray(value)", :value="value", :name="name", :context="context")
ast-object(v-else-if="isObject(value)", :value="value", :name="name", :context="context")
div(v-else)
  span(v-if="name").ast-property-name {{ name }}:
  span.ast-property-value.undefined(v-if="value === undefined") undefined
  span.ast-property-value.null(v-if="value === null") null
  span.ast-property-value.number(v-if="typeof value === 'number'") {{ JSON.stringify(value) }}
  span.ast-property-value.string(v-if="typeof value === 'string'") {{ JSON.stringify(value) }}
  span.ast-property-value.boolean(v-if="typeof value === 'boolean'") {{ JSON.stringify(value) }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from '../component'

@Component
export default class AstNode extends Vue {
  @Prop(String) name: string
  @Prop({ required: true }) value: any

  @Prop({
    type: Object,
    required: true
  })
  context: { depth: number }

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
    font-weight: bold;
    color: #3d608e;
    margin-right: 0.3em;
  }

  &-property-value {
    &.undefined,
    &.null {
      color: #aaa;
    }

    &.string {
      color: #049104;
    }

    &.number {
      color: #18c98a;
    }

    &.boolean {
      color: #e3990e;
    }
  }
}
</style>