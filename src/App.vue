<template lang="pug">
  .app
    h1.app-title(ref="title") Vue AST Explorer
    .app-contents(:style="{ height: contentHeight + 'px' }")
      codemirror(:code="code", :options="editorOptions" @change="code = arguments[0]")
      ast-node.app-ast(v-if="ast" :value="ast", :context="{ depth: 5 }")
</template>

<script lang="ts">
import { Vue, Component } from './component'
import { compile } from 'vue-template-compiler'
import './Ast/Ast'

@Component
export default class App extends Vue {
  code = `<div class="counter">
  <output>{{ count }}</output>
  <button @click="increment">+</button>
</div>
`

  contentHeight = 0

  editorOptions = {
    tabSize: 2,
    mode: 'text/html',
    theme: 'base16-light',
    lineNumbers: true,
    line: true
  }

  $refs: {
    title: HTMLElement
  }

  get ast(): any {
    return compile(this.code).ast
  }

  updateContentHeight(): void {
    this.contentHeight = window.innerHeight - this.$refs.title.clientHeight
  }

  mounted() {
    window.addEventListener('resize', this.updateContentHeight)
    this.updateContentHeight()
  }
}
</script>

<style lang="scss">
@import '~k-css/k.css';

input,
button {
  font-family: inherit;
}

.app {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;

  &-title {
    font-size: 28px;
    padding: 10px 20px;
  }

  &-contents {
    display: flex;
    flex: 1 0 auto;
    align-items: stretch;
    border-top: 1px solid #ccc;
  }

  &-ast {
    overflow: auto;
    padding: 6px 12px;
    flex: 0 0 50%;
    height: 100%;
    font-family: monospace;
  }
}

.CodeMirror {
  flex: 0 0 50%;
  height: 100%;
}
</style>