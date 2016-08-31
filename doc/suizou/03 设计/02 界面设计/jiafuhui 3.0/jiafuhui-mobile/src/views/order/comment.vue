<template>
	<div class="comment">
		<div class="title_line vux-1px-b">家居保洁</div>
		<div class="textarea">
			<group>
			  <x-textarea :value.sync="textarea" :max="200" :show-counter='true'
			  placeholder="亲！您可以在这里说出您对服务的感受~"></x-textarea>
			</group>
			<div class="upload-photo"><span class="icon icon-camera"></span><input style="opacity: 0;width:70px;height:70px;" type="file"/><span class="text">发照片</span></div>
    </div>
		<div class="grade vux-1px-t"><span class="title">服务评分</span><rater :value=0 :margin="5" :font-size="20" :value.sync="rate" active-color="#FF5000"></rater></div>
		<div class="agree"><span @click="onCheck"><i class="yes icon-check-circle" v-if="checked == true"></i><i class="on icon-check-circle-o" v-else></i>匿名评论</span></div>
		<div class="btn-panel"><x-button link="/" style="background:#51AAFE;color:#fff;">发表评论</x-button></div>
	</div>
</template>

<script>
  import XButton from 'vux/src/components/x-button'
  import Group from 'vux/src/components/group'
  import Rater from 'vux/src/components/rater'
  import XTextarea from 'vux/src/components/x-textarea'

  export default {
    data () {
      return {
        checked: false,
        textarea: '',
        rate: 5
      }
    },
    ready () {
      document.title = '订单评论'
    },
    components: {
      XButton,
      Group,
      Rater,
      XTextarea
    },
    methods: {
      onCheck: function () {
        if (this.checked) {
          this.checked = false
        } else {
          this.checked = true
        }
      }
    }
  }
</script>