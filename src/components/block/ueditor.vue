<template>
  <div ref="editor"></div>
</template>

<style>
.edui-editor-toolbarbox{line-height: normal;}
</style>

<script>
  /* eslint-disable */
  import '../../../static/ueditor/ueditor.config';
  import '../../../static/ueditor/ueditor.all';
  import '../../../static/ueditor/lang/zh-cn/zh-cn';


  export default {
    name: "ueditor",
    data() {
      return {
        id: Math.random().toString(16).substring(2) + 'ueditorId',
        //editor:{},
      };
    },
    props: {
      value: {
        type: String,
        default: null,
      },
      config: {
        type: Object,
        default() {
          return {
            toolbars: [
                [
                'source', //源代码
                'undo', //撤销
                'redo', //重做
                'bold', //加粗
                'fontsize', //字号
                'insertimage', //多图上传
                'link', //超链接
                'unlink', //取消链接
                'insertvideo', //视频
                'justifyleft', //居左对齐
                'justifyright', //居右对齐
                'justifycenter', //居中对齐
                'justifyjustify', //两端对齐
                'forecolor', //字体颜色
                'fullscreen', //全屏
                'insertframe', //插入Iframe
                'imagecenter' //居中
              ]
            ],
            initialFrameWidth: 800,  //初始化编辑器宽度,默认1000
            initialFrameHeight: 320,  //初始化编辑器高度,默认320
          };
        },
      }
    },
    watch: {
      value: function value(val, oldVal) {
        this.editor = UE.getEditor(this.id, this.config);
        if (val !== null) {
          this.editor.setContent(val);
        }
      },
    },
    mounted() {
      this.$nextTick(function f1() {

        // 保证 this.$el 已经插入文档

        this.$refs.editor.id = this.id;
        this.editor = UE.getEditor(this.id, this.config);

        this.editor.ready(function f2() {
          if (this.value !== null) {
            this.editor.setContent(this.value);
          }
          this.editor.addListener("contentChange", function () {
            const wordCount = this.editor.getContentLength(true);
            const content = this.editor.getContent();
            const plainTxt = this.editor.getPlainTxt();
            this.$emit('input', {wordCount: wordCount, content: content, plainTxt: plainTxt});
          }.bind(this));

          this.$emit('ready', this.editor);
        }.bind(this));
      });
    },
    computed: {
      editorContent: {
        get: function () {
          return this.editor.getContent();
        },
        set: function (content) {
          this.editor.setContent(content);
        }
      }
    }
  };
</script>
