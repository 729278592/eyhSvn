/**
 * Created by WHB on 14-8-14.
 */
var com;
if(com&&(typeof com!="object"||com.NAME))
   throw new Error("Namespace 'com' already exists");
com={};
com.NAME="com";
com.version=1.3;
com.XM_start=function(data){
    com.x=0;
    com.tam=true;
    if(!data.name||typeof data.name=="null"||typeof data.name=="undefined")
      throw new Error("Object name is not define!");
    else var obj=$("#"+data.name)||$("."+data.name);
    var speed=parseFloat(data.speed)||1500;
    var movecon=document.getElementById(data.name);
    var com_obj=obj.find('img');
    var Imgwid;
    var mar_left=parseFloat(com_obj.eq(0).css('marginRight'));
com.initializeCss=function(){
        var parentWidth,parentHeight;
        var parent=$('#bei_introduce_imgfor');
        if(data.width&&data.width!=null||data.height&&data.height!=null){
            parentWidth=parseFloat(data.width);
            parentHeight=parseFloat(data.height);
            parent.css({width:parentWidth,height:parentHeight})
        }
        else {
            if(parent.width()>1150){
                parentWidth=1020;
                parent.width(parentWidth)
            }
            else if(parent.height()>200){
                parentHeight=200;
                parent.height(parentHeight)
            }
           else{
                parentWidth= parent.width();
                parentHeight= parent.height();
            }
        }
        var fa1_wid=parentWidth-96,Imghei=parentHeight-14;
        Imgwid=parseFloat(fa1_wid-mar_left*2)/3;
        $('#imgfor_con').css({width:fa1_wid+235,height:Imghei});
        $('#imgfor_con_clu').css({width:fa1_wid+235,height:Imghei});
        com_obj.css({width:Imgwid,height:Imghei});
        if(Imgwid>400||Imgwid<100) throw new Error("Can only support width between 100 and 400 " );
        return Imgwid;
};
com.marquee=function(){
    com.x++;
    if(com.tam){
        if(com.x>com_obj.length){
            movecon.style.left=0+'px';
            com.x=1;
            if(com.y>5) com.y=0;
        }
        var a=-(com.x*(Imgwid+mar_left))+'px';

        obj.animate({
            left:a
        },speed);
    }
};
com.setInter=function(){
    $('#bei_introduce_imgfor').hover(
        function(){
            com.tam=false;
            clearInterval(com.setIN);
        },
        function(){
            com.tam=true;
            com.setIN=setInterval(com.marquee,3000);
        }
    );
};
com.creatElement=function(obj1){
        var imgNum,aNum,oIm1,oIm2,oIm3,oIm4;
        var b=[],m=[];
        imgNum=obj1.find('img');aNum=obj1.find('a');
        for(var j=0;j<aNum.length;j++) m[j]=aNum.eq(j);
        for(var i=0;i<imgNum.length;i++) b[i]=imgNum.eq(i);
        if(!aNum.attr("href")) return false;
        if(Imgwid==0) throw new Error("The width of the target error"+Imgwid+'px');
        var t=/\w+.jpg|.gif|.png|.bmp/i;
        if(!b[0].attr('src').match(t)) return false;
        if(obj1.width()/Imgwid>b.length+4){
             oIm1= m[0].append(b[0]);
             oIm2= m[1].append(b[1]);
             oIm3= m[m.length-2].append(b[b.length-2]);
             oIm4= m[m.length-1].append(b[b.length-1]);
            if(imgNum.length<9){
                obj1.append(oIm1.clone(true),oIm2.clone(true));
                obj1.prepend(oIm3.clone(true),oIm4.clone(true));
                return obj1;
            }
            else throw new Error("目前暂时只支持八张图片")
        }
        else throw new Error("超过幻灯片最大容量！");
};
com.runSetinterval=function(){
    $(window).load(function(){
        com.initializeCss();
        com.creatElement(obj);
        com.setIN=setInterval(com.marquee,3000);
        com.control();
        com.setInter();
    });
};
com.control=function(){
    var L=$('#imgfor_left'),R=$('#imgfor_right');
    L.click(function(){
        if(!obj.is(":animated")) com.x++;
        if(com.x>com_obj.length){
            movecon.style.left=0+'px';
            com.x=1;
        }
        var a=-com.x*(Imgwid+mar_left)+'px';
        if(!obj.is(":animated")){
            obj.stop(true,true).animate({
                left:a
            },speed);
        }
    });
    R.click(function(){
        if(!obj.is(":animated")) com.x--;
        if(com.x<0){
            movecon.style.left=-(Imgwid+mar_left)*com_obj.length+'px';
            com.x=com_obj.length-1;
        }
        var a=-com.x*(Imgwid+mar_left)+'px';
        if(!obj.is(":animated")){
            obj.stop(true,true).animate({
                left:a
            },speed);
        }
    });
};
com.judge=function(){
    console.log(com.k);
    if(com.k){
        com.setIN=setInterval(com.marquee,2500)
    }
};
com.runSetinterval();
};
com.XM_start({name:"imgfor_con_roll",speed:1500,width:800,height:150});