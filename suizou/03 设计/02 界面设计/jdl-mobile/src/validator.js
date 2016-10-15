import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)
//自定义验证器


//是否不为空
Vue.validator('isEmpty', function (value) {
  return !/^\s*$/.test(value)
});

Vue.validator('addressIsEmpty', function (value) {
  return !/^\s*$/.test(value)
});

Vue.validator('cardNo', function (value) {
  return !/^\s*$/.test(value)
});

Vue.validator('isEmptyCompany', function (value) {
  return !/^\s*$/.test(value)
});

Vue.validator('isEmptyMoney', function (value) {
  return !/^\s*$/.test(value)
});


//添加一个简单的手机号验证
Vue.validator('mobile', function (value) {
  return /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/.test(value)
});

Vue.validator('tmobile', function (value) {
  return /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/.test(value)
});

Vue.validator('refereesMobile', function (value) {
  return /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/.test(value)
});


Vue.validator('isEmptyAccount', function (value) {
  return /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/.test(value)
});

//验证码判断
Vue.validator('isPostCode', function (value) {
  return /^\d{6}$/.test(value)
});



//添加一个密码验证
//匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
Vue.validator('passw', function (value) {
  return /^(\w){6,10}$/.test(value)
});

Vue.validator('aginPassw', function (value) {
  return /^(\w){6,10}$/.test(value)
});

//判断是否为数字
Vue.validator('isNum', function (value) {
  return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
});



export default Validator;
