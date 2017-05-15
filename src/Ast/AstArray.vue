<script lang="ts">
export default {
  functional: true,

  render(h, { props }) {
    props.braces = ['[', ']']
    props.entries = props.value.map(value => {
      return { value }
    })

    return h('ast-collection', {
      props
    })
  }
}
</script>