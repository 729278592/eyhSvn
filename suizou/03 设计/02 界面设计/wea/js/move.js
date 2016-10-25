function move(obj,json,fn){
    clearInterval(obj.iTimer);
    var cur = 0;
    obj.iTimer = setInterval(function(){
        var ismove = true;
        for(var attr in json){
            iTarge =  json[attr];
            if(attr == "opacity"){
                cur = Math.round(css(obj,'opacity')*100);
            } else{
                cur = parseInt(css(obj,attr));
            }
            var speed = (iTarge-cur)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur != iTarge){
                ismove = false;
                if(attr == 'opacity'){
                    obj.style.opacity = (cur+speed)/100;
                    obj.style.filter = 'alpha(opacity='+(cur+speed)+')';
                }
                else{
                    obj.style[attr] = cur + speed + "px";
                }
            }
        }
        if(ismove == true){
            clearInterval(obj.iTimer);
            fn&&fn.call(obj)
        }
    },50)
}
function css(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}