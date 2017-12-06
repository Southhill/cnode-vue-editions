<template lang="html">
  <el-dialog :title="isEdit ? '更新话题' : '发布话题'" :visible.sync="dialogFormVisible" :fullscreen="true">
    <el-form :model="formInput" :rules="rules" ref="topicForm" :inline-message="true">
      <el-form-item label="标题：" prop="title">
        <el-input v-model="formInput.title" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="版块：" prop="tab">
        <el-select v-model="formInput.tab" placeholder="请选择话题版块">
          <el-option v-for="(tab, idx) in tabs" :label="tab.label" :value="tab.value" :key="idx"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容：" prop="content">
        <vue-editor key="topicEditor" v-model="formInput.content" :placeholder="editorPlaceholder"></vue-editor>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="postTopic('topicForm')">{{ isEdit ? '更 新' : '发 布' }}</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { Message } from 'element-ui'

import { postTopic, getTopic } from '@/api/index'
import { editorPlaceholder } from '@/constants/ux.const'

const tabs = [
  { label: '问答', value: 'ask' },
  { label: '分享', value: 'share' },
  { label: '招聘', value: 'job' },
  { label: '开发测试', value: 'dev' }
]

export default {
  name: 'formTopic',
  props: {
    topicId: {
      type: String
    }
  },
  components: {
    VueEditor
  },
  data () {
    return {
      dialogFormVisible: false,
      editorPlaceholder: editorPlaceholder,
      formInput: { title: '', tab: '', content: '' },
      rules: {
        title: [{ required: true, message: '请输入话题名称', trigger: 'blur' }],
        tab: [{ required: true, message: '请选择话题版块', trigger: 'change' }],
        content: [{ required: true, message: '内容不能为空', trigger: 'change' }]
      },
      tabs: this.isEdit ? tabs.slice(0, -1) : tabs.slice()
    }
  },
  created () {
    this.$bus.$on('showForm', status => {
      this.dialogFormVisible = status
    })
  },
  watch: {
    'isEdit': async function (value) {
      if (value === true) {
        const data = await getTopic(this.topicId, { mdrender: false })
        const { title, tab, content } = data
        this.formInput = { title, tab, content }
      }
    }
  },
  methods: {
    async postTopic (name) {
      this.$refs[name].validate(async valid => {
        if (valid) {
          const success = await postTopic(this.isEdit ? { ...this.formInput, topic_id: this.topicId } : this.formInput)
          if (success) {
            Message.success({
              showClose: true,
              message: `${this.isEdit ? '更新' : '发布'}成功！`
            })
            this.$refs[name].resetFields()
            this.dialogFormVisible = false
          }
        } else {
          Message.error({
            showClose: true,
            message: `${this.isEdit ? '更新' : '发布'}失败！`
          })
          return false
        }
      })
    }
  },
  computed: {
    isEdit () {
      return !!this.topicId
    }
  }
}
</script>

<style lang="less" scoped>
</style>
