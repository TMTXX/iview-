<template>
	<div>
		<div ref="editor" style="text-align:left;min-height:1500xp;"></div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import E from 'wangeditor'
	export default {
		name: 'editor',
		data() {
			return {
				editorContent: ''
			}
		},
		computed: mapState({
			htmlData:state=>state.editor.htmlData,
		}),
		methods: {},
		mounted() {
			var editor = new E(this.$refs.editor);
			editor.customConfig.zIndex = 100
			// 配置上传图片
			editor.customConfig.uploadImgServer = '/api/upload/editor/';
			editor.customConfig.uploadFileName = 'file';
			editor.customConfig.onchange = (html) => {
				this.editorContent = html;
				// this.editorContent=

			}
			editor.create();
		}
	}
</script>

<style scoped>
</style>
