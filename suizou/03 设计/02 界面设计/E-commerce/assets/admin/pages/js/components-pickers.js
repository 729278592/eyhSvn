var ComponentsPickers = function () {

    var handleDatePickers = function () {

        if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Main.isRTL(),
                orientation: "left",
                autoclose: true
            });
            //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        }

        /* Workaround to restrict daterange past date select: http://stackoverflow.com/questions/11933173/how-to-restrict-the-selectable-date-ranges-in-bootstrap-datepicker */
    }

    var handleTimePickers = function () {

        if (jQuery().timepicker) {
            $('.timepicker-default').timepicker({
                autoclose: true,
                showSeconds: true,
                minuteStep: 1
            });

            $('.timepicker-no-seconds').timepicker({
                autoclose: true,
                minuteStep: 5
            });

            $('.timepicker-24').timepicker({
                autoclose: true,
                minuteStep: 5,
                showSeconds: false,
                showMeridian: false
            });

            // handle input group button click
            $('.timepicker').parent('.input-group').on('click', '.input-group-btn', function(e){
                e.preventDefault();
                $(this).parent('.input-group').find('.timepicker').timepicker('showWidget');
            });
        }
    };

    var p = $(".plus_time");
    var e = $(".empty");
    e.on("click",function(){
        $(this).prev().find(".form-control").val(" ")
    });


    var handleDateRangePickers = function (i) {
        if (!jQuery().daterangepicker) {
            return;
        }  $('.defaultrange').each(function(){
            var This = this;
            $(This).daterangepicker({
                    opens: (Main.isRTL() ? 'left' : 'right'),
                    format: 'MM/DD/YYYY',
                    separator: ' to ',
                    startDate: moment().subtract('days', 29),
                    endDate: moment(),
                    locale:{
                        applyLabel:"确认",
                        cancelLabel:"取消",
                        fromLabel:"从",
                        toLabel:"到",
                        customRangeLabel:"指定范围",
                        daysOfWeek:['日', '一', '二', '三', '四', '五','六'],
                        monthNames:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        firstDay:0
                    }
                },
                function (start, end) {
                    $(This).each(function(){
                        $(this).find("input").val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                    })
                }
            );
        });
        $('#defaultrange_modal').daterangepicker({
                opens: (Main.isRTL() ? 'left' : 'right'),
                format: 'MM/DD/YYYY',
                separator: ' to ',
                startDate: moment().subtract('days', 29),
                endDate: moment(),
                minDate: '01/01/2012',
                maxDate: '12/31/2014'
            },
            function (start, end) {
                $('#defaultrange_modal input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );

        // this is very important fix when daterangepicker is used in modal. in modal when daterange picker is opened and mouse clicked anywhere bootstrap modal removes the modal-open class from the body element.
        // so the below code will fix this issue.
        $('#defaultrange_modal').on('click', function(){
            if ($('#daterangepicker_modal').is(":visible") && $('body').hasClass("modal-open") == false) {
                $('body').addClass("modal-open");
            }
        });

        $('#reportrange').daterangepicker({
                opens: (Main.isRTL() ? 'left' : 'right'),
                startDate: moment().subtract('days', 29),
                endDate: moment(),
                minDate: '01/01/2012',
                maxDate: '12/31/2014',
                dateLimit: {
                    days: 60
                },
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: true,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                },
                buttonClasses: ['btn'],
                applyClass: 'green',
                cancelClass: 'default',
                format: 'MM/DD/YYYY',
                separator: ' to ',
                locale: {
                    applyLabel: 'Apply',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom Range',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                }
            },
            function (start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );
        //Set the initial state of the picker label
        $('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    }

//    function addExcludeDate(){
//        var tmp = '<div class="form-group form-inline">'+
//            '<label class=" control-label col-md-3"></label>'+
//            '<div class="col-md-9">'+
//            '<div class="input-group exclude-date">'+
//            '<input type="text" class="form-control">'+
//            '<span class="input-group-btn">'+
//            '<button class="btn default date-range-toggle" type="button"><i class="fa fa-calendar"></i></button>'+
//            '</span></div></div></div>';
//        $('.form-body').append(tmp);
//        $('.form-body').daterangepicker = null;
//        $('.exclude-date').each(function(){
//            var _this = this;
//            $(_this).daterangepicker({
//                    opens: 'left',
//                    format: 'YYYY-MM-DD',
//                    startDate: moment().subtract('days', 29),
//                    endDate: moment(),
//                    locale:{
//                        applyLabel:"确认",
//                        cancelLabel:"取消",
//                        //fromLabel:"起始",
//                        //toLabel:"结束",
//                        customRangeLabel:"指定范围",
//                        daysOfWeek:['日', '一', '二', '三', '四', '五','六'],
//                        monthNames:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
//                        firstDay:0
//                    }
//                },
//                function (start, end) {
//                    $(_this).children('input').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
//                }
//            );
//        });
//
//    }
//
//    $(function(){
//        handleValidation();
//
//        $('.defaultrange').daterangepicker({
//                opens: 'left',
//                format: 'YYYY-MM-DD',
//                startDate: moment().subtract('days', 29),
//                endDate: moment(),
//                locale:{
//                    applyLabel:"确认",
//                    cancelLabel:"取消",
//                    //fromLabel:"起始",
//                    //toLabel:"结束",
//                    customRangeLabel:"指定范围",
//                    daysOfWeek:['日', '一', '二', '三', '四', '五','六'],
//                    monthNames:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
//                    firstDay:0
//                }
//            },
//            function (start, end) {
//                console.log(this.element.context);
//                $(this.element.context).children('input').val(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
//            }
//        );
//    })
    p.on("click",function(){
        $(this).before('<div class="form-group">'+
            '<label class="control-label col-md-3">Default Date Ranges</label>'+
            '<div class="col-md-4">'+
            '<div class="input-group defaultrange">'+
            '<input class="form-control" type="text">'+
            '<span class="input-group-btn">'+
            '<button class="btn default date-range-toggle" type="button"><i class="fa fa-calendar"></i></button>'+
            '</span></div>'+
            '<div class="empty delete">删除</div>'+
            '</div></div>');


        $('.input-group').each(function(){
            $(this).daterangepicker(null, function(start, end, label) {});
            handleDateRangePickers()
        });
        var d = $(".delete");
        d.each(function(i){
            var a = i + 1;
            $(this).on("click",function(){
                $(this).parent().parent().remove();
                $(".daterangepicker").eq(a).remove()
            });
        });


    });
    var handleDatetimePicker = function () {

        if (!jQuery().datetimepicker) {
            return;
        }

        $(".form_datetime").datetimepicker({
            autoclose: true,
            isRTL: Main.isRTL(),
            format: "dd MM yyyy - hh:ii",
            pickerPosition: (Main.isRTL() ? "bottom-right" : "bottom-left")
        });

        $(".form_advance_datetime").datetimepicker({
            isRTL: Main.isRTL(),
            format: "dd MM yyyy - hh:ii",
            autoclose: true,
            todayBtn: true,
            startDate: "2013-02-14 10:00",
            pickerPosition: (Main.isRTL() ? "bottom-right" : "bottom-left"),
            minuteStep: 10
        });

        $(".form_meridian_datetime").datetimepicker({
            isRTL: Main.isRTL(),
            format: "dd MM yyyy - HH:ii P",
            showMeridian: true,
            autoclose: true,
            pickerPosition: (Main.isRTL() ? "bottom-right" : "bottom-left"),
            todayBtn: true
        });

        $('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
    }

    var handleClockfaceTimePickers = function () {

        if (!jQuery().clockface) {
            return;
        }

        $('.clockface_1').clockface();

        $('#clockface_2').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#clockface_2_toggle').click(function (e) {
            e.stopPropagation();
            $('#clockface_2').clockface('toggle');
        });

        $('#clockface_2_modal').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#clockface_2_modal_toggle').click(function (e) {
            e.stopPropagation();
            $('#clockface_2_modal').clockface('toggle');
        });

        $('.clockface_3').clockface({
            format: 'H:mm'
        }).clockface('show', '14:30');
    }

    var handleColorPicker = function () {
        if (!jQuery().colorpicker) {
            return;
        }
        $('.colorpicker-default').colorpicker({
            format: 'hex'
        });
        $('.colorpicker-rgba').colorpicker();
    }
   

    return {
        //main function to initiate the module
        init: function () {
            handleDatePickers();
            handleTimePickers();
            handleDatetimePicker();
            handleDateRangePickers();
            handleClockfaceTimePickers();
            handleColorPicker();
        }
    };

}();