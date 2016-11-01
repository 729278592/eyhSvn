$.getJSON("../../assets/frontend/data/tNav.json",function (data) {
            var json = data.data;
            var html = '';
            for(var b = 0;b<json.length;b++){
                var a = b+1;
                html += '<div class="item" onmouseover="itemShow(this)" onmouseout="itemHide(this)">'+
                            '<div class="product">'+
                                '<div class="shops">' +
                                    '<p class="title">'+json[b].shopType+'</p>'+
                                    '<ul class="shop-menu clearfix">';
                                        for(var j = 0;j<json[b].shopTypeInfor.length;j++){
                                            html += '<li><a href="shoppingInfor.html">'+json[b].shopTypeInfor[j].shopName+'</a></li>'
                                        }
                            html += '</ul>'+
                                '</div>'+
                            '</div>'+
                            '<div class="product-wrap pos0'+a+'">'+
                                '<div class="cf">'+
                                    '<div class="fl wd252 pr20">'+
                                        '<h2>' +
                                            '<a>'+json[b].shopType+'</a>' +
                                        '</h2>'+

                                        '<ul class="cf">';
                                            for(var j = 0;j<json[b].shopTypeDetails.length;j++){
                                                html += '<li><a href="shoppingInfor.html">'+json[b].shopTypeDetails[j].shopName+'</a></li>'
                                            }
                                html += '</ul>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                }
            $(".all-goods").append(html);
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

$(".all-goods .item:last-child").css({border:"0"});

function allGoodsHeight(_this){
    _this.height = _this.find("li").height()*_this.find("li").size()
}

allGoodsHeight($(".all-goods"));
