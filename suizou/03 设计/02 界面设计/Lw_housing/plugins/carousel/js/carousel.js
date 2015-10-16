/**
 * Created by eyohu023 on 2015/9/9.
 */


window.onload = function() {
    function pcJs(){
        var oDiv1 = document.getElementById('div1');
        var oUl1 = document.getElementById('ul1');
        var p = document.getElementById('p');
        var aLi1 = oUl1.getElementsByTagName('li');
        var aSpan1 = oDiv1.getElementsByTagName('span');
        var iLen1 = aLi1.length;
        var iLen = iLen1-1;
        var  topP = null;
        var  start1,a ;
        var iHeight1 = aLi1[0].offsetHeight;
        var iHeight2 = aSpan1[0].offsetHeight + 10;
        var iWidth = aSpan1[0].offsetWidth + 10;

      var left = document.getElementById("left");
      var right = document.getElementById("right");

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

//        left.onclick = function(){
//            a--;
//            if(a<0){
//                a = iLen;
//            }

//            if(iLen1>4){
//                topP = iLen1 - 4;
//
//                if(a>topP+1){
//                    move(p, {
//                        top : -((a-(topP+1)) * iHeight2)
//                    });
//                }
//
//            }
//            getActive()
//
//
//        };

//        right.onclick = function(){
//            a++;
//            if(a>iLen){
//                a = 0;
//            }
//            if(iLen1>4){
//                topP = iLen1 - 4;
//
//                if(a<topP+1){
//                    move(p, {
//                        top : ((a-(topP)) * iHeight2)
//                    });
//                }
//
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
            if(a>iLen){a = 0;}
            if($(window).width()>1400){
                if(iLen1>4){
                    topP = iLen1 - 4;
                    if(a<topP+1){
                        move(p, {
                            top : -a * iHeight2
                        });
                    }

                }
            }
//            var pDiv = document.getElementById('p-div');
//            pDiv.style.width = "724px";
            if(($(window).width()>640)&&($(window).width()<1400)){
                p.style.width = iLen1 * iWidth + 'px';
                if(iLen1>4){
                    topP = iLen1 - 4;
                    if(a<topP+1){
                        move(p, {
                            left : -a * iWidth
                        });
                    }

                }
            }
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
