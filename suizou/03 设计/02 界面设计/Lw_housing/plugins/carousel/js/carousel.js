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
        var topP = null;
        var start1,a ;
        var iHeight1 = aLi1[0].offsetHeight;
        var iWidth1 = aLi1[0].offsetWidth;
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
        function getActive1400(){
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
        function getActive640(){
            for(var i = 0;i<aSpan1.length;i++){
                for(var i = 0;i<aSpan1.length;i++){
                    aSpan1[i].className = "";
                }
            }
            aSpan1[a].className = "current";
            move(oUl1, {
                left : -a * iWidth1
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
                if($(window).width()>1400){
                    if(iLen1>4){
                        topP = iLen1 - 4;
                        if(a<topP+1){
                            move(p, {
                                top : -a * iHeight2
                            });
                        }else{
                            move(p, {
                                top : -topP * iHeight2
                            });
                        }

                    }
                    move(oUl1, {
                        top : -a * iHeight1
                    });
                }
                if(($(window).width()>640)&&($(window).width()<1400)){
                    oUl1.style.width = iLen1 * iWidth1 + 'px';
                    p.style.width = iLen1 * iWidth + 'px';
                    if(iLen1>4){
                        topP = iLen1 - 4;
                        if(a<topP+1){
                            move(p, {
                                left : -a * iWidth
                            });
                        }else{
                            move(p, {
                                left : -topP * iWidth
                            });
                        }
                    }
                    move(oUl1, {
                        left : -a * iWidth1
                    });
                }
            };
        }
//        left.onclick = function(){
//            a--;
//            if(a<0){
//                a = iLen;
//            }
//            if($(window).width()>1400){
//                if(iLen1>4){
//                    topP = iLen1 - 4;
//                    if(a<topP+1){
//                        move(p, {
//                            top : -a * iHeight2
//                        });
//                    }
//
//                }
//            }
//            if(($(window).width()>640)&&($(window).width()<1400)){
//                p.style.width = iLen1 * iWidth + 'px';
//                if(iLen1>4){
//                    topP = iLen1 - 4;
//                    if(a<topP+1){
//                        move(p, {
//                            left : -a * iWidth
//                        });
//                    }
//                }
//            }
//            getActive()
//        };
//
//        right.onclick = function(){
//            a++;
//            if(a>iLen){
//                a = 0;
//            }
//            if(iLen1>4){
//                topP = iLen1 - 4;
//                if(a<topP+1){
//                    move(p, {
//                        top : ((a-(topP)) * iHeight2)
//                    });
//                }
//            }
//            getActive()
//        };

        oDiv1.onmouseover = function(){
            clearInterval(start1)
        };

        oDiv1.onmouseout = function(){
            start1 = setInterval(stetime,5000);
        };
        if(($(window).width()>640)&&($(window).width()<1400)) {
            oUl1.style.width = iLen1 * iWidth1 + 'px';
        }
        function stetime(){
            ++a;
            if(a>iLen){
                a = 0;}
            if($(window).width()>1400){
                if(iLen1>4){
                    topP = iLen1 - 4;
                    if(a<topP+1){
                        move(p, {
                            top : -a * iHeight2
                        });
                    }
                }
                getActive1400();
            }

            if(($(window).width()>640)&&($(window).width()<1400)){
                oUl1.style.width = iLen1 * iWidth1 + 'px';
                p.style.width = iLen1 * iWidth + 'px';
                if(iLen1>4){
                    topP = iLen1 - 4;
                    if(a<topP+1){
                        move(p, {
                            left : -a * iWidth
                        });
                    }
                }
                getActive640()
            }

        }
    }
    pcJs();
};
