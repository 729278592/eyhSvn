

function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}
}
/*
function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "none"){
		obj.style.display = "block";
		e.className="minus";
	}else{
		obj.style.display = "none";
		e.className="plus";
	}
}*/

function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "none"){
		var itname;
		for(var i=0;i<3;i++)
		{    itname="items"+i; 
		     if(itname!=objname)
			 {
				 var o=getObject(itname);
				 o.style.display = "none";
		         o.className="plus";
			 }
		}
		obj.style.display = "block";
		e.className="minus";
	}else{//返回隐藏
		obj.style.display = "none";
		e.className="plus";
	}
}


try{
	 //图片展示轮廓——产品中心
    var scrollPic_02 = new ScrollPic();
    scrollPic_02.scrollContId = "ISL_Cont_1"; //内容容器ID
    scrollPic_02.arrLeftId = "LeftArr"; //左箭头ID
    scrollPic_02.arrRightId = "RightArr"; //右箭头ID
    scrollPic_02.frameWidth = 578; //显示框宽度
    scrollPic_02.pageWidth = 196; //翻页宽度
    scrollPic_02.speed = 10; //移动速度(单位毫秒，越小越快)
    scrollPic_02.space = 10; //每次移动像素(单位px，越大越快)
    scrollPic_02.autoPlay = false; //自动播放
    scrollPic_02.autoPlayTime = 3; //自动播放间隔时间(秒)
    scrollPic_02.initialize(); //初始化    
} catch(e){}


//导航
//$(function() {
    //$(".nav a").click(function() {
       // $(this).addClass("on").siblings(".on").removeClass("on");
   // });
//});

