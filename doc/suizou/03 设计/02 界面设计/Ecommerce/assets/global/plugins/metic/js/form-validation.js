var FormValidation = function () {
    var handleValidation1 = function() {
        var form1 = $('#form_sample_1');
            form1.validate({
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    url: {
                        required: true,
                        url: true
                    },
                    number: {
                        required: true,
                        number: true
                    },
                    digits: {
                        required: true,
                        digits: true
                    },
                    creditcard: {
                        required: true,
                        creditcard: true
                    },
                    occupation: {
                        minlength: 5
                    },
                    select: {
                        required: true
                    },
                    select_multi: {
                        required: true,
                        minlength: 1,
                        maxlength: 3
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit

                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parent(".input-group").size() > 0) {
                        error.insertAfter(element.parent(".input-group"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },
                highlight: function (element) { // hightlight error inputs
                    $(element).closest('.input-group').addClass('has-error mt'); // set error class to the control group

                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element).closest('.input-group').removeClass('has-error mt'); // set error class to the control group
                },

                success: function (label) {
                    label.closest('.input-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {

                }
            });
    };
    return {
        init: function () {
            handleValidation1();
        }
    };
}();