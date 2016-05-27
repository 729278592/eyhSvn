/**
 * pagination - jQuery Plugin
 * version: 1.0 (2015-05-11)
 * Created by: gaoxin
 * @param {Object} opts Several options
 */
(function($){
	$.fn.extend({
		pagination: function(opts){
			var setting = {
				first$:"li.first",
				prev$:"li.prev",
				next$:"li.next",
				last$:"li.last",
				nums$:"li.num>a",
				jumpto$:"li.jumpto",
				pageNumFrag:'<li class="#liClass#"><a href="javascript:;">#pageNum#</a></li>'
			};
			
			return this.each(function(){
				var $this = $(this);
				var pc = new Pagination(opts);
				var interval = pc.getInterval();
				
				var pageInation = "";
				pageInation += "<ul>  ";
				pageInation += "	<li class=\"first\">  ";
				pageInation += "		<a class=\"first\" href=\"javascript:;\"><span>首页</span></a>  ";
				pageInation += "	</li>  ";
				pageInation += "	<li class=\"prev\">  ";
				pageInation += "		<a class=\"previous\" href=\"javascript:;\"><span>《</span></a>  ";
				pageInation += "	</li>  ";
				pageInation += "	#pageNumFrag#  ";
				pageInation += "	<li class=\"next\">  ";
				pageInation += "		<a class=\"next\" href=\"javascript:;\"><span>》</span></a>  ";
				pageInation += "	</li>  ";
				pageInation += "	<li class=\"last\">  ";
				pageInation += "		<a class=\"last\" href=\"javascript:;\"><span>末页</span></a>  ";
				pageInation += "	</li>  ";
				pageInation += "	<li class=\"jumpto\"><input class=\"textInput\" type=\"text\" size=\"4\" value=\"#currentPage#\" /><input class=\"goto\" type=\"button\" value=\"确定\" /></li>  ";
				pageInation += "</ul>  ";
				
				var pageNumFrag = '';
				for (var i=interval.start; i<interval.end;i++){
					pageNumFrag += setting.pageNumFrag.replaceAll("#pageNum#", i).replaceAll("#liClass#", i==pc.getCurrentPage() ? 'selected num' : 'num');
				}
				$this.html(pageInation.replaceAll("#pageNumFrag#", pageNumFrag).replaceAll("#currentPage#", pc.getCurrentPage())).find("li").hoverClass();
	
				var $first = $this.find(setting.first$);
				var $prev = $this.find(setting.prev$);
				var $next = $this.find(setting.next$);
				var $last = $this.find(setting.last$);
				
				if (pc.hasPrev()){
					$first.add($prev).find(">span").hide();
					_bindEvent($prev, pc.getCurrentPage()-1);
					_bindEvent($first, 1);
				} else {
					$first.add($prev).addClass("disabled").find(">a").hide();
				}
				
				if (pc.hasNext()) {
					$next.add($last).find(">span").hide();
					_bindEvent($next, pc.getCurrentPage()+1);
					_bindEvent($last, pc.numPages());
				} else {
					$next.add($last).addClass("disabled").find(">a").hide();
				}
	
				$this.find(setting.nums$).each(function(i){
					_bindEvent($(this), i+interval.start);
				});
				$this.find(setting.jumpto$).each(function(){
					var $this = $(this);
					var $inputBox = $this.find(":text");
					var $button = $this.find(":button");
					$button.click(function(event){
						var pageNum = $inputBox.val();
						if (pageNum && pageNum.isPositiveInteger()) {
							pageBreak({formId:opts.formId, data: {pageNum:pageNum}});
						}
					});
					$inputBox.keyup(function(event){
						if (event.keyCode == 13) $button.click();
					});
				});
			});
			
			function _bindEvent($target, pageNum){
				$target.bind("click", {pageNum:pageNum}, function(event){
					pageBreak({formId:opts.formId, data:{pageNum:event.data.pageNum}});
					event.preventDefault();
				});
			}
		}
	});
	
	var Pagination = function(opts) {
		this.opts = $.extend({
			formId: "",
			totalCount:0,
			numPerPage:10,
			pageNumShown:10,
			currentPage:1,
			callback:function(){return false;}
		}, opts);
	}
	
	
	$.extend(Pagination.prototype, {
		numPages:function() {
			return Math.ceil(this.opts.totalCount/this.opts.numPerPage);
		},
		getInterval:function(){
			var ne_half = Math.ceil(this.opts.pageNumShown/2);
			var np = this.numPages();
			var upper_limit = np - this.opts.pageNumShown;
			var start = this.getCurrentPage() > ne_half ? Math.max( Math.min(this.getCurrentPage() - ne_half, upper_limit), 0 ) : 0;
			var end = this.getCurrentPage() > ne_half ? Math.min(this.getCurrentPage()+ne_half, np) : Math.min(this.opts.pageNumShown, np);
			return {start:start+1, end:end+1};
		},
		getCurrentPage:function(){
			var currentPage = parseInt(this.opts.currentPage);
			if (isNaN(currentPage)) return 1;
			return currentPage;
		},
		hasPrev:function(){
			return this.getCurrentPage() > 1;
		},
		hasNext:function(){
			return this.getCurrentPage() < this.numPages();
		}
	});
})(jQuery);


function pageBreak(options){
	var op = $.extend({formId:"", data:{pageNum:"", numPerPage:"", orderField:"", orderDirection:""}, callback:null}, options);
	$("#" + op.formId).find("#pageNo").attr("value", op.data.pageNum);
	$("#" + op.formId).find("#pageSize").attr("value", op.data.numPerPage);
	$("#" + op.formId).submit();
}
