/**
 * Created by WHB on 2016/4/21.
 */

$(function(){
    $.fn.payStyle=function(options){
        var str = '<div class="mc-head">'+
                      '<p class="title">确认支付</p>'+
                  '<i class="fa fa-remove"></i>'+
                  '</div>'+
                  '<div class="mc-content ps-content">'+
                      '<p>'+
                          '确认支付 <span class="service-name">'+options.dataServiceName+'</span> '+options.dataPayStyle+' <span class="money">'+options.dataLittleMoney+'</span> 元?'+
                      '</p>'+
                      '<p>'+
                          '<label><input type="checkbox"/> 使用电子钱包</label> : <span class="money">'+options.dataAllMoney+'</span>'+                        '</p>'+
                      '<button class="btn-order btn-order1">去支付</button>'+
                  '</div>';
        $(".payStyle-content").html(str);
        heightAuto();
    };
});

