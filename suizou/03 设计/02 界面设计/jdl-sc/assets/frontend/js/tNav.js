$.getJSON("../../assets/frontend/data/tNav.json",function (data) {
            var json = data.data;
            var html = '';
            var arr = ['home','user','heart','home','user','heart','home','user','heart','home','home'];
            for(var b = 0;b<json.length;b++){
                var a = b+1;
                json[b].home = arr[b];
                html += '<div class="item" onmouseover="itemShow(this)" onmouseout="itemHide(this)">'+
                            '<div class="product">'+
                                '<span class="icon_span">' +
                                    '<i class="fa fa-'+json[b].home+'"></i>'+
                                '</span>'+
                                '<h3>' +
                                    '<a href="###">'+json[b].title+'</a>' +
                                '</h3>'+
                                '<div class="faRight">' +
                                    '<i class="fa fa-angle-right"></i>'+
                                '</div>'+
                            '</div>'+
                            '<div class="product-wrap pos0'+a+'">'+
                                '<div class="cf">'+
                                    '<div class="fl wd252 pr20">'+
                                        '<h2>' +
                                            '<a href="###">'+json[b].title+'</a>' +
                                        '</h2>'+
                                        '<p class="lh30">'+json[b].con+'</p>'+
                                        '<ul class="cf">';
                                            for(var j = 0;j<json[b].navItem.length;j++){
                                                html += '<li><a href="###" target="_blank">'+json[b].navItem[j].name+'</a></li>'
                                            }
                                html += '</ul>'+
                                    '</div>'+
                                    '<dl class="fl wd185 pl20 blee">'+
                                        '<dt class="lh36">'+json[b].active+'</dt>'+
                                        '<dd>' +
                                            '<a href="###" target="_blank" title="logo">'+
                                                '<img src='+json[b].logo+'>'+
                                            '</a>' +
                                        '</dd>'+
                                    '</dl>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                }
            $(".all-goods").append(html);
    console.log(JSON.stringify(data.data));
        });
//商品分类
function itemShow(obj) {
    $(obj).addClass('active');
    $(obj).find('.product-wrap').show();
}
function itemHide(obj) {
    $(obj).removeClass('active');
    $(obj).find('.product-wrap').hide();
}


