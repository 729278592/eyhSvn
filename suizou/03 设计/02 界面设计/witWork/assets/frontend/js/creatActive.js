/**
 * Created by eyohu023 on 2015/11/23.
 */
$(function(){
    /*活动蒙版效果*/
    var wefeed = document.getElementById("we-feed");
    var li      = wefeed.getElementsByTagName("li");
    for(var i=0;i<li.length;i++){
        li[i].onmouseover = function (){
            move($(this).find(".active-mask-bg")[0],{opacity:"80"},function(){
                move($(this).next().find($(".show"))[0],{top:"50"})
            })
        };
        li[i].onmouseout = function (){
            move($(this).find(".active-mask-bg")[0],{opacity:"0"},function(){
                move($(this).next().find($(".show"))[0],{top:"-50"})
            })
        };
    }
    /*视频控制*/
    videojs.options.flash.swf = "video-js.swf";
    var mbm = $(".mask-bg,.mask");
    var p = $(".play");
    var myPlayer;
    var ev = document.getElementById("example_video_1");
    p.on("click",function(){
        mbm.removeClass("hide");
        myPlayer = videojs('example_video_1');
        videojs("example_video_1").ready(function(){
            var myPlayer = this;
            myPlayer.play();
        });
        var oDiv = document.createElement('div');
        oDiv.className = "close";
        oDiv.title = "关闭";
        oDiv.innerText = "x";
        ev.parentNode.appendChild(oDiv)
    });
    $(ev).parent().delegate(".close","click",function(){
        mbm.addClass("hide");
        myPlayer = videojs('example_video_1');
        videojs("example_video_1").ready(function(){
            var myPlayer = this;
            myPlayer.pause();
        });
    })
});

