<script lang="ts">
export default {
  functional: true,

  render(h, { props }) {
    props.braces = ['{', '}']
    props.entries = Object.keys(props.value).map(key => {
      return {
        key,
        value: props.value[key]
      }
    })

    return h('ast-collection', {
      props
    })
  }
}
</script>
