/**
 * Created by WHB on 2016/9/26.
 */

export default {
  domainName:"http://www.jdl800.com/fric",
  imageUrl:"http://www.jdl800.com",
  linkObj: {
    personCenter: "/mobile/member/personCenter.do" ,//个人中心
    addressAdmin:"/mobile/member/addressList.do",//地址列表
    deleteAddress:"/mobile/member/deleteAddress.do",//删除地址
    setDefaultAddress:"/mobile/member/setDefaultAddress.do",//设置默认地址
    getAddress:"/mobile/member/getAddress.do",//编辑地址
    saveAddress:"/mobile/member/saveAddress.do", //保存地址
    showGoodsEva:"/mobile/showGoodsEva.do",//商品评价
    presentIntegral:"/mobile/member/scoreShow.do", //积分提现
    presentChioce:"/mobile/member/saveBankInfo.do",//保存银行卡信息
    presentInfor:"/mobile/member/showBankInfo.do",//银行卡信息
    loginOut:"/mobile/loginOut.do",//退出登录
    sendMchRegisterAuthCode:"/mobile/sendMchRegisterAuthCode.do",//商家入驻申请获取验证码

    presentList:"/mobile/member/withList.do",//提现记录
    txApply:"/mobile/member/txApply.do",//点击提现
    sendAgentRegisterAuthCode:"/mobile/sendAgentRegisterAuthCode.do",//代理申请短信
    registerAgent:"/mobile/registerAgent.do",//代理申请点击
    sendMchStatusAuthCode:"/mobile/sendMchStatusAuthCode.do",//申请进度查询短信
    getMchApplyStatus:"/mobile/getMchApplyStatus.do", //申请进度查询
    mchLoginOut:"/mobile/mchLoginOut.do" //商家推出登录
  }
}
