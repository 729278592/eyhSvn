/**
 * Created by WHB on 2016/3/4.
 */
/*服务幻灯切换*/
var SerSlider = function (serSlider,options){
    var serversDefaul = {
        setsSlider:5000
    };
    var serversOpts = $.extend({},serversDefaul,options);
    var serversMethods = {
        init:function(_this){
            serversPaginationA = _this.find("a");
            serversUl = _this.find(".servers-ul");
            oLiServers = _this.find("li");
            liWidthservers = oLiServers.get(0).offsetWidth;
            serversUlWidth = serversUl.offset().width;
            serversUlWidth = liWidthservers*oLiServers.size() + "px";
            serversUl.width(serversUlWidth);
            timerServers = setInterval(serversMethods.autoPlay,serversOpts.setsSlider);
            inowServers = 0;
            btnServers = true;
            serversMethods.mouseover(_this);
            serversMethods.mouseout(_this);
            serversMethods.paginatioaClick();
        },
        autoPlay:function(){
            if(btnServers == true){
                btnServers = false;
                if(inowServers == oLiServers.size()-1){
                    inowServers = 0;
                    serversPaginationA.eq(inowServers).addClass("active");
                    serversPaginationA.eq(inowServers).siblings().removeClass("active");
                    move(serversUl[0], {left : -inowServers * liWidthservers},function(){
                        btnServers = true;
                    });
                    btnServers = true;
                }else{

                    inowServers++;
                    serversPaginationA.eq(inowServers).addClass("active");
                    serversPaginationA.eq(inowServers).siblings().removeClass("active");
                    move(serversUl[0], {left : -inowServers * liWidthservers},function(){
                        btnServers = true;
                    });
                }
            }
        },
        paginatioaClick:function(){
            serversPaginationA.each(function(i){
                $(this).on("click",function(){
                    clearInterval(timerServers);
                    inowServers = i;
                    move(serversUl[0], {left : -inowServers * liWidthservers},function(){

                    });
                    $(this).addClass("active");
                    $(this).siblings().removeClass("active");
                })
            });
        },
        mouseover:function(_this){
            _this.on("mouseover",function(){
                clearInterval(timerServers);
            })
        },
        mouseout:function(_this){
            _this.on("mouseout",function(){
                timerServers = setInterval(serversMethods.autoPlay,serversOpts.setsSlider);
            })
        }
    };
    serversMethods.init(serSlider)
};
new SerSlider($(".serversSlider"),{
    setsSlider:5000
});