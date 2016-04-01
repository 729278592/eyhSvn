/**
 * Created by eyohu023 on 2015/12/1.
 */

window.onload = function () {
    var areaUl = document.getElementById("news-list");
    var aLi = areaUl.getElementsByTagName("li");
    var iNow = 1;
    var i = 0;
    var bBtn = true;
    var iTimer = null;

    function setWidth() {
        areaUl.style.height = (aLi[0].offsetHeight) * aLi.length + 'px';
    }

    iTimer = setInterval(autoPlay, 3000);
    setWidth();
    function autoPlay() {
        if (bBtn) {
            bBtn = false;
            for (i = 0; i < iNow; i++) {
                var oLi = aLi[i].cloneNode(true);
                areaUl.appendChild(oLi);
                setWidth();
            }
            move(areaUl, {top: -(aLi[0].offsetHeight) * iNow}, function () {
                for (i = 0; i < iNow; i++) {
                    areaUl.removeChild(aLi[0]);
                    areaUl.style.top = '0px';
                }
                bBtn = true;
            })
        }
    }


    $("#newsSlider").on("mouseover",function(){
        clearInterval(iTimer);
    });
    $("#newsSlider").on("mouseout",function(){
        iTimer = setInterval(autoPlay, 3000);
    });
};

