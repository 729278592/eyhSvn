<template>
    <div v-show="toastshow" transition="toast" class="font-normal">
        <div id="loadingToast" class="weui_loading_toast">
            <div class="weui_mask_transparent"></div>
            <div class="weui_toast">
                <p class="weui_toast_content" style="margin-bottom:0.625rem;">
                    <img src="../../../static/images/smile_icon.png" alt="" id="smile-icon"/><br/>
                    <span class="errSpan color" style="color:#fff">{{toasttext}}</span>
                </p>
          </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        //是否显示提示
        toastshow:{
            type:Boolean,
            required: false,
            default:function(){
                return false;
            }
        },
        //提示的内容
        toasttext:{
            type:String,
            required: false,
            default:function(){
                return 'no message';
            }
        },
        //显示的时间
        duration: {
            type: Number,
            default:2000,//默认3秒
            required:false
        }
    },
    ready() {

    },
    watch:{
        toastshow(val){
            if (this._timeout) clearTimeout(this._timeout)
            if (val && !!this.duration) {
             this._timeout = setTimeout(()=> this.toastshow = false, this.duration)
            }
        }
    }
}
</script>
