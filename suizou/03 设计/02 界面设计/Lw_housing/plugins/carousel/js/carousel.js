/**
 * Created by eyohu023 on 2015/9/9.
 */


window.onload = function() {
    function pcJs(){
        var oDiv1 = document.getElementById('div1');
        var oUl1 = document.getElementById('ul1');
        var aLi1 = oUl1.getElementsByTagName('li');
        var aSpan1 = oDiv1.getElementsByTagName('span');
        var iLen1 = aLi1.length;
        var  start1,a ;
        var iHeight1 = aLi1[0].offsetHeight;
//      var left = document.getElementById("left");
//      var right = document.getElementById("right");
        oUl1.style.width = iLen1 * iHeight1 + 'px';
        function init(){
            for (var i=0; i<iLen1; i++) {
                run(i)
            }
            start1 = setInterval(stetime,5000);
        }
        init();
        function getActive(){
            for(var i = 0;i<aSpan1.length;i++){
                for(var i = 0;i<aSpan1.length;i++){
                    aSpan1[i].className = "";
                }
            }
            aSpan1[a].className = "current";
            move(oUl1, {
                top : -a * iHeight1
            });
        }
        function run(i){
            aSpan1[i].index = i;
            a = 0;
            aSpan1[i].onclick = function() {
                clearInterval(start1);
                for (var i=0; i<iLen1; i++) {
                    aSpan1[i].className = '';
                }
                this.className = 'current';
                a = this.index;
                move(oUl1, {
                    top : -a * iHeight1
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

        oDiv1.onmouseover = function(){
            clearInterval(start1)
        };

        oDiv1.onmouseout = function(){
            start1 = setInterval(stetime,5000);
        };

        function stetime(){
            ++a;
            if(a>3){a = 0;}
            getActive();
        }
    }
    pcJs();

    function mobileJs(){
        var oMain = document.getElementById("main");
        var homeDevice = document.getElementById("home-device");
        var Osw = document.getElementById("swiper-wrapper");
        var oImg = oMain.getElementsByTagName("img")[0];
//        var oDiv = Osw.getElementsByTagName("div");
//        var iWidth = oDiv[0].offsetWidth;
//        var  start1,a ;
//        var pagination = document.getElementById("pagination");
//        var aSpan1 = pagination.getElementsByTagName('span');
//        Osw.style.width = oDiv.length * iWidth + 'px';
        oMain.style.height = oImg.offsetHeight + "px";
        homeDevice.style.height = oImg.offsetHeight + "px";
        Osw.style.height = oImg.offsetHeight + "px";
//        window.onresize = function () {
//            location.reload()
//        };
//        function init(){
//            for (var i=0; i<oDiv.length; i++) {
//                run(i)
//            }
//            start1 = setInterval(stetime,5000);
//        }
//        init();
//
//        function getActive(){
//            for(var i = 0;i<aSpan1.length;i++){
//                for(var i = 0;i<aSpan1.length;i++){
//                    aSpan1[i].className = "";
//                }
//            }
//            aSpan1[a].className = "current";
//            move(Osw, {
//                top : -a * iWidth
//            });
//        }
//
//        function run(i){
//            aSpan1[i].index = i;
//            a = 0;
//            aSpan1[i].onclick = function() {
//                clearInterval(start1);
//                for (var i=0; i<aSpan1.length; i++) {
//                    aSpan1[i].className = '';
//                }
//                this.className = 'current';
//                a = this.index;
//                move(Osw, {
//                    top : -a * iWidth
//                });
//            };
//        }
//
//        function stetime(){
//            ++a;
//            if(a>3){a = 0;}
//            getActive();
//        }
      }
        mobileJs()
};
