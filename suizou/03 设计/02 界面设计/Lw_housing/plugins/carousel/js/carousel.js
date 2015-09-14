/**
 * Created by eyohu023 on 2015/9/9.
 */
window.onload = function() {
    var oDiv = document.getElementById('div1');
    var oUl = document.getElementById('ul1');
    var aLi = oUl.getElementsByTagName('li');
    var aSpan = oDiv.getElementsByTagName('span');
    var iLen = aLi.length;
    var  start,a ;
    var iHeight = aLi[0].offsetHeight;
//        var left = document.getElementById("left");
//        var right = document.getElementById("right");
    oUl.style.width = iLen * iHeight + 'px';
    function init(){
        for (var i=0; i<iLen; i++) {
            run(i)
        }
        start = setInterval(stetime,5000);
    }
    init();

    function getActive(){
        for(var i = 0;i<aSpan.length;i++){
            for(var i = 0;i<aSpan.length;i++){
                aSpan[i].className = "";
            }
        }
        aSpan[a].className = "current";
        move(oUl, {
            top : -a * iHeight
        });
    }

    function run(i){
        aSpan[i].index = i;
        a = 0;
        aSpan[i].onclick = function() {
            for (var i=0; i<iLen; i++) {
                aSpan[i].className = '';
            }
            this.className = 'current';
            a = this.index;
            move(oUl, {
                top : -a * iHeight
            });
        };
    }
//
//        left.onclick = function(){
//            a--;
//            if(a<0){
//                a = 3;
//            }
//            getActive()
//
//        };
//
//        right.onclick = function(){
//            a++;
//            if(a>3){
//                a = 0;
//            }
//            getActive()
//        };

    oDiv.onmouseover = function(){
        clearInterval(start)
    };

    oDiv.onmouseout = function(){
        start = setInterval(stetime,5000);
    };

    function stetime(){
        ++a;
        if(a>3){a = 0;}
        getActive();
    }
}
