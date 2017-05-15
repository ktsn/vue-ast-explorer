<template lang="pug">
  .app
    h1.app-title(ref="title") Vue AST Explorer
    .app-contents(:style="{ height: contentHeight + 'px' }")
      codemirror(:code="code", :options="editorOptions" @change="code = arguments[0]")
      ast.app-ast(:ast="ast")
</template>

<script lang="ts">
import { Vue, Component } from './component'
import { compile } from 'vue-template-compiler'
import Ast from './Ast.vue'

@Component({
  watch: {
    code: 'onChangeCode'
  },
  components: {
    Ast
  }
})
export default class App extends Vue {
  code = ''
  ast = {}
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

  onChangeCode(code: string): void {
    const res = compile(code)
    this.ast = res.ast
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
  }
}

.CodeMirror {
  flex: 0 0 50%;
  height: 100%;
}
</style>