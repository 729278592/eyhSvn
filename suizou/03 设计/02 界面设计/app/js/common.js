/**
 * Created by WHB on 2015/9/30.
 */
window.onload = function(){
    var contentMain = document.getElementById('content-main');
    var contentMainHuan = document.getElementById("content-main-huan");
    var oLi = contentMainHuan.getElementsByTagName("li");
    var oActive = document.getElementById("active");
    var footerMain = document.getElementById("footer-main");
    var aLi = footerMain.getElementsByTagName("li");
    var iLen1 = oLi.length;
    var iWidth = oLi[0].offsetWidth;
    var oFirst = document.getElementById("first");
    var li2Content = document.getElementById("li2-content");
    li2Content.style.height = oFirst.offsetHeight +50+"px";
    var oFirst1 = document.getElementById("first1");
    var li2Content1 = document.getElementById("li2-content1");
    li2Content1.style.height = oFirst1.offsetHeight +50+"px";
    contentMainHuan.style.width = iWidth * iLen1 + "px";
    contentMainHuan.style.height = oActive.offsetHeight + "px";
    contentMain.style.height     = oActive.offsetHeight + "px";
    function init() {
        for (var i = 0; i < iLen1; i++) {
            run(i);
        }
    }
    init();

    function run(i) {
        aLi[i].index = i;
        aLi[i].onclick = function () {
            for (var i = 0; i < iLen1; i++) {
                aLi[i].className = '';
            }
            this.className = 'current';
            contentMainHuan.style.height = oLi[this.index].offsetHeight + "px";
            contentMain.style.height     = oLi[this.index].offsetHeight + "px";
            move(contentMainHuan, {left: -this.index * iWidth});
        };
    }

};