/**
 * Created by eyohu023 on 2015/12/1.
 */

window.onload = function () {
    var areaSlider = document.getElementById("areaSlider");
    var areaUl = document.getElementById("area-ul");
    var aLi = areaUl.getElementsByTagName("li");
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var iNow = 1;
    var i = 0;
    var bBtn = true;
    var iTimer = null;

    function setWidth() {
        areaUl.style.width = (aLi[0].offsetWidth) * aLi.length + 'px';
    }

    iTimer = setInterval(autoPlay, 5000);
    setWidth();
    oLeft.onclick = function () {
        clearInterval(iTimer);
        autoPlay()
    };
    function autoPlay() {
        if (bBtn) {
            bBtn = false;
            for (i = 0; i < iNow; i++) {
                var oLi = aLi[i].cloneNode(true);
                areaUl.appendChild(oLi);
                setWidth();
            }
            move(areaUl, {left: -(aLi[0].offsetWidth) * iNow}, function () {
                for (i = 0; i < iNow; i++) {
                    areaUl.removeChild(aLi[0]);
                    areaUl.style.left = '0px';
                }
                bBtn = true;
            })
        }
    }

    oRight.onclick = function () {
        if (bBtn) {
            bBtn = false;
            clearInterval(iTimer);
            var oLength = aLi.length;
            for (i = 0; i < iNow; i++) {
                var oLi = aLi[oLength - 1].cloneNode(true);
                areaUl.insertBefore(oLi, aLi[0]);
                areaUl.style.left = areaUl.offsetLeft - aLi[0].offsetWidth + 'px';
                setWidth();
            }
            move(areaUl, {left: 0}, function () {
                for (i = 0; i < iNow; i++) {
                    areaUl.removeChild(aLi[aLi.length - 1]);
                }
                bBtn = true;
            })
        }
    };

    $(".area-ul,.area-left,.area-right").on("mouseover",function(){
        clearInterval(iTimer);
    });
    $(".area-ul,.area-left,.area-right").on("mouseout",function(){
        iTimer = setInterval(autoPlay, 5000);
    });
};

