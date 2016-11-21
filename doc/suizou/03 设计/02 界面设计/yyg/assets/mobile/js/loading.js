var commUtil = commUtil || {};
commUtil.userTaskInfos = function (callback){
	// commUtil.log({userId : commUtil.currentUserId()});
	// if(commUtil.currentUserId()){
	// 	$.post(request.contextPath + "/task/userTaskInfos.json",{userId : commUtil.currentUserId()},function(data){
	// 		callback(data);
	// 	},"json");
	// }
}
commUtil.loading = function(flag){
	// commUtil.log(flag?"加载完成":"加载中");
	var loadingFix = $("#loddingFix");
	if(loadingFix && loadingFix.html() ){

	}else{
		var loadingHtml = '<div id="loddingFix" style="width: 100%;height: 100%;z-index: 999999;display: none;position: fixed;background: gray;filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity: 0.5;left: 0;top: 0; "><img style=" width: 2.5rem; top: 47%; position: fixed; left: 45%; " src="../../assets/mobile/images/loading.gif"></div>';
		$("body").append(loadingHtml);
		loadingFix = $("#loddingFix");
	}
	if(flag){
		loadingFix.hide();
	}else{
		loadingFix.show();
		setTimeout(function(){loadingFix.hide();},1000);
	}
}
commUtil.loading(true);


window.onbeforeunload = function(){
	commUtil.loading();
	return undefined;
}

jQuery._myReAjax = jQuery.ajax
jQuery.ajax = function(a,b)
{
	if(a.loading){
	}else if(a.url.indexOf("oss-upload.json")<0){
		commUtil.loading();
	}
	if(a.success){
		a._doSuccess = a.success
		a.success = function(data){
			commUtil.loading(true);
			var resData = data;
			if(typeof(data)=="string"){
				try {
					resData = jQuery.parseJSON(data);
				} catch (e) {
				}
			}
			if(resData&&resData.code == -1000){location.href=data.callback;return;}
			return a._doSuccess(data);
		}
	}
	return jQuery._myReAjax(a,b);
};
