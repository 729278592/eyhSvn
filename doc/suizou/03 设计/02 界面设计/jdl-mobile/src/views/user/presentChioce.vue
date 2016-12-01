<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <div class="weui-gallery" id="gallery" v-if="bigImg==true" @click="hideBigImg()">
        <span class="weui-gallery__img" id="galleryImg" >

          <img v-if="imgSrc==null" v-show="false" alt=""/>
          <img v-else="imgSrc!=null" :src="imgSrc"/>
        </span>

    </div>
    <div class="weui_cells weui_cells_form mt0 w90">
      <div class="weui_cell weui_cell_select">
        <div class="weui_cell_hd">
          <label class="weui_label style">
            开户行名称
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <span style="position:absolute;left:104px;line-height:44px;" v-show="agentHide">请选择银行类别</span>
          <select class="weui_select" v-model="bank" @change="bankChange()">
            <option v-for="option in optionList" value={{option.kindname}}>{{option.kindname}}</option>
          </select>
        </div>
      </div>
      <div class="weui_cell">
        <div class="weui_cell_hd">
          <label class="weui_label style">
            详细地址
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" id="addressInfor" v-model="addressInfor" type="text"  placeholder='请输入详细地址'>
        </div>
      </div>

      <div class="weui_cell">
        <div class="weui_cell_hd">
          <label class="weui_label style">
            开户姓名
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" v-model="isEmpty" id="isEmpty" type="text"  placeholder='请输入昵称'>
        </div>
      </div>
      <div class="weui_cell">
        <div class="weui_cell_hd">
          <label class="weui_label style">
            银行卡号
          </label>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" v-model="cardNo" id="cardNo" type="text"   placeholder='请输入开户卡号'>
        </div>
      </div>
      <form method="post"  enctype="multipart/form-data">

      <div class="weui_cell">
          <div class="weui_cell_hd">
            <label class="weui_label style">
              上传图片
            </label>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <div class="weui_uploader">
              <div class="weui_uploader_bd">
                <ul class="weui_uploader_files">
                  <li class="weui_uploader_file" v-for="bg in bgList">
                    <img :src="bg.backg" alt="" @click="showBigImg()">
                  </li>
                </ul>
                <div class="weui_uploader_input_wrp">
                  <input class="weui_uploader_input" type="file" name="myfiles" accept="image/*" @change="uploaderInput($event)">
                </div>
                <input type="hidden" value={{pic}}>
              </div>
            </div>
          </div>
      </div>
      </form>

    </div>
    <div class="weui_btn_area">
      <input type="submit" class="weui_btn weui_btn_primary  saveBasic" value="保存" @click="save()">
    </div>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>


<script>
    import Bar from '../components/headBar.vue'
    import Toast from '../components/toast.vue'
    import userService from '../../api/userService'
    export default {
        components: {
          Bar,
          Toast
        },
      data () {
        return {
          hide:true,
          cardNo:"",
          value:"",
          isEmpty:"",
          fileHide:"",
          pic:"",
          agentHide:true,
          addressInfor:"",
          selectValue:"",
          toastshow:false,
          toasttext:"",
          selected:"",
          upLoadBtn:false,
          bank:"",
          actionUrl:"",
          bgList:[],
          bigImg:false,
          imgSrc:"",
          fileInput:null,
          optionList:[]
        }
      },
      ready () {
        document.title = '银行选择';
        userService.bankChioce(this);


      },
      watch: {
          selected: function(val) {
              this.selectValue = val
          }
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },

        showErrMsg(errMsg) {
          this.$set('toasttext',errMsg);
          this.$set('toastshow',true);
        },

        bankChange:function () {
          this.agentHide=false;
        },

        uploaderInput:function(e){
          var that = this;
          if(typeof FileReader === 'undefined'){
            result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
            $(this).setAttribute('disabled','disabled');
          }
          var file = e.target.files[0];
          if(!/image\/\w+/.test(file.type)){

            that.showErrMsg("选择的不是图片");
            return false;
          }

          var uploader = WebUploader.create({

            // swf文件路径
            swf: 'http://www.jdl800.com/fric/assets/global/plugins/ueditor/third-party/webuploader/Uploader.swf',

            // 文件接收服务端。
            server: 'http://www.jdl800.com/fric/assets/global/plugins/ueditor/jsp/controller.jsp?action=uploadimage&save=false',

            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false,

            // 只允许选择图片文件。
            accept: {
              title: 'Images',
              extensions: 'gif,jpg,jpeg,bmp,png',
              mimeTypes: 'image/*'
            }
          });
          // 文件上传成功，给item添加成功class, 用样式标记上传成功。
          uploader.on( 'uploadSuccess', function( file,Object ) {
            //$( '#'+file.id ).addClass('upload-state-done');
            that.pic = Object.url;
            that.fileHide = 'http://www.jdl800.com'+Object.url;
            that.bgList=[{"backg":that.fileHide }];
            that.imgSrc = that.bgList;
          });

          // 文件上传失败，现实上传出错。
          uploader.on( 'uploadError', function( file ) {
            that.showErrMsg("上传失败");
          });

          var wuFile = new WebUploader.Lib.File(WebUploader.guid('rt_'),file);
          uploader.addFiles(wuFile);
          uploader.upload();

        },

        showBigImg:function(){
          this.bigImg = true;
        },
        hideBigImg:function(){
          this.bigImg = false;
        },
        save:function(){

           if(this.agentHide==true){
             this.showErrMsg("请选择开户行");
             return ;
           }

          if(!this.addressInfor){
            this.showErrMsg("请输入详细地址");
            return
          }

          if(!this.isEmpty){
            this.showErrMsg("请输入昵称");
            return
          }

          if(!this.cardNo){
            this.showErrMsg("请输入卡号");
            return
          }
          if(this.bgList.length==0){
            this.showErrMsg("请上传图片");
            return;
          }

          var presentChioceArr = {openName:this.isEmpty,cardNo:this.cardNo,bankName:this.bank,openArea:this.addressInfor,pic:this.pic};
          userService.presentChioce(this,presentChioceArr)
        }
      }
    }
</script>
