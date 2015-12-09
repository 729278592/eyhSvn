/**
 * Created by eyohu023 on 2015/12/2.
 */

/*保障切换*/
window.onload = function () {
    var scUl = document.getElementById("sc-ul");
    var aLi = scUl.getElementsByTagName("li");
    var oLeft = document.getElementById("sc-left");
    var oRight = document.getElementById("sc-right");
    var iNow = 1;
    var i = 0;
    var bBtn = true;
    var iTimer = null;

    function setWidth() {
        scUl.style.width = (aLi[0].offsetWidth) * aLi.length + 'px';
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
                scUl.appendChild(oLi);
                setWidth();
            }
            move(scUl, {left: -(aLi[0].offsetWidth+42) * iNow}, function () {
                for (i = 0; i < iNow; i++) {
                    scUl.removeChild(aLi[0]);
                    scUl.style.left = '0px';
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
                scUl.insertBefore(oLi, aLi[0]);
                scUl.style.left = scUl.offsetLeft - aLi[0].offsetWidth + 'px';
                setWidth();
            }
            move(scUl, {left: 0}, function () {
                for (i = 0; i < iNow; i++) {
                    scUl.removeChild(aLi[aLi.length - 1]);
                }
                bBtn = true;
            })
        }
    };

    $(".sc-ul,.sc-left,.sc-right").on("mouseover",function(){
        clearInterval(iTimer);
    });
    $(".sc-ul,.sc-left,.sc-right").on("mouseout",function(){
        iTimer = setInterval(autoPlay, 5000);
    });
};
