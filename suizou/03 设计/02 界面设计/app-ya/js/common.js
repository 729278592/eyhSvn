/**
 * Created by WHB on 2015/9/30.
 */
window.onload = function(){

    function jislider(){
        var contentMain = document.getElementById('content-main');
        var contentMainHuan = document.getElementById("content-main-huan");
        var oLi = contentMainHuan.getElementsByTagName("li");
        var oActive = document.getElementById("active");
        var footerMain = document.getElementById("footer-main");
        var aLi = footerMain.getElementsByTagName("li");
        var iLen1 = oLi.length;
        var iWidth = oLi[0].offsetWidth;
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
                    aLi[i].className = 'li';
                    oLi[i].id = " ";
                }
                this.className = 'current';
                oLi[this.index].id = "active";

                move(contentMainHuan, {left: -this.index * iWidth});
            };
        }
    }
    jislider()

};