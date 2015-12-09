/**
 * Created by eyohu023 on 2015/10/30.
 */


window.onload = function () {
    var oFocus = document.getElementById('focus');
    var focusmain = document.getElementById('focus-main');
    var aDiv = focusmain.getElementsByTagName('div');
    var aSpan = oFocus.getElementsByTagName('span');
    var iLen = aDiv.length;
    var start, a;
    var iWidth = aDiv[0].offsetWidth;

    focusmain.style.width = iLen * iWidth + 'px';
    function init() {
        for (var i = 0; i < iLen; i++) {
            run(i)
        }
        start = setInterval(stetime, 5000);
    }

    init();

    function getActive() {
        for (var i = 0; i < aSpan.length; i++) {
            for (var i = 0; i < aSpan.length; i++) {
                aSpan[i].className = "";
            }
        }
        aSpan[a].className = "current";
        move(focusmain, {
            left: -a * iWidth
        });
    }

    function run(i) {
        aSpan[i].index = i;
        a = 0;
        aSpan[i].onclick = function () {
            clearInterval(start)
            for (var i = 0; i < iLen; i++) {
                aSpan[i].className = '';
            }
            aSpan[this.index].className = 'current';
            a = this.index;
            move(focusmain, {
                left: -a * iWidth
            });
        };
    }

    function stetime() {
        ++a;
        if (a > 4) {
            a = 0;
        }
        getActive();
    }

    oFocus.onmouseover = function(){
        clearInterval(start)
    };

    oFocus.onmouseout = function(){
        start = setInterval(stetime,5000);
    };

};

