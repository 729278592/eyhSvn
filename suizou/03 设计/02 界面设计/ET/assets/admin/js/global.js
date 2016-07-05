/**
 * Created by WHB on 2016/6/20.
 */
/*ie8浏览器的处理*/
function getIE(){
    if(navigator.appName == "Microsoft Internet Explorer")
    {
        if(navigator.appVersion.match(/8./i)=='8.')
        {
            /*IE支持placeholder属性*/
            var doc = document,
                inputs = doc.getElementsByTagName('input'),
                supportPlaceholder = 'placeholder'in doc.createElement('input'),
                placeholder = function (input) {
                    if(input.className == 'Wdate'){
                        return false;
                    }
                var text = input.getAttribute('placeholder'),
                    defaultValue = input.defaultValue;
                if (defaultValue == '') {
                    input.value = text;
                }
                input.onfocus = function () {
                    if (input.value === text) {
                        this.value = ''
                    }
                };
                input.onblur = function () {
                    if (input.value === '') {
                        this.value = text
                    }
                }
            };
            if (!supportPlaceholder) {
                for (var i = 0, len = inputs.length; i < len; i++) {
                    var input = inputs[i],
                        text = input.getAttribute('placeholder');
                    if (((input.type == 'text')||(input.type == 'password')) && text) {
                        placeholder(input)
                    }

                }
            }
        }
    }
}
getIE();