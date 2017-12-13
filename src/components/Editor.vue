<template>
  <div>
    <div ref="editor"></div>  
    <script type="text/javascript" src="//cdn.jsdelivr.net/editor/0.1.0/editor.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/editor/0.1.0/marked.js"></script>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
        editor: null
    }
  },
  mounted () {
    this.editor = new Editor({element: this.$refs['editor'] })
    this.editor.render()
  } 
}
</script>

<style scoped>
@import url('//cdn.jsdelivr.net/editor/0.1.0/editor.css');
</style>
