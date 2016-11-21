;(function ($,window,document,undefined) {
  $.fn.progress = function () {
    return this.each(function () {
      var fatherSpan = $(this).find(".fatherSpan").text();
      var other = $(this).find(".other").text();
      var pro = (fatherSpan-other)/fatherSpan*100+"%";
      console.log(pro)
      var sonNum = $(this).find(".sonNum");
      sonNum.css({width:pro})
    })
  }
})(jQuery,window,document);