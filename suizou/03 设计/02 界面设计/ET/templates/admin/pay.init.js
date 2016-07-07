;;(function(require) {
  var APP = window['APP'] = window['APP'] || {};
  var _static_ = APP['static'] = APP['static'] || {};

  var scripts = document.getElementsByTagName('script');
  var initScript = scripts[scripts.length - 1];
  var app = initScript.getAttribute('data-app');
  var src = initScript.getAttribute('src');
  var tobRequireConfig = localStorage.getItem('tobRequireConfig');
  var configOnly = !app && tobRequireConfig && src !== tobRequireConfig
  if (configOnly) {
    src = tobRequireConfig
  }

  if (app) {
    APP.name = app;
  } else {
    !configOnly && console && console.warn && console.warn('Does not match allowed app name');
  }

  var link = document.createElement('a');
  link.href = src;

  var origin = link.origin;
  var main = initScript.getAttribute('data-main');

  var __PUBLICPATH__ = _static_['public'] = _static_['public'] || origin + '/public';
  var __APPATH__ = _static_['app'] = _static_['app'] || origin + '/apps/' + app;

  var __LIB__ = __PUBLICPATH__ + '/js/lib';
  var __MODULES__ = __PUBLICPATH__ + '/js/modules';
  var __PLUGINS__ = __PUBLICPATH__ + '/js/plugins';
  var __WIDGETS__ = __PUBLICPATH__ + '/js/widgets';

  var envIsDev = !APP.env || APP.env.match(/dev/)
  require.config({
    urlArgs: APP.timestamp || '',
    paths: {
      /**
       * Main entry file
       */
      'main': main || (__APPATH__ + '/js/main'),

      /**
       * Path
       */
      'app': __APPATH__,
      'public': __PUBLICPATH__,


      'icIndustryChooser': __PUBLICPATH__ + '/js/biz/jquery-icIndustryChooser/jquery.icIndustryChooser',

      /**
       * Third party framework && modules
       */
      'modules': __MODULES__,

      'jquery': __MODULES__ + '/jquery/jquery-1.11.1.min',

      'angular': __MODULES__ + '/angularjs/angular/angular.min',
      'angularAMD': __MODULES__ + '/angularjs/angularAMD/angularAMD.min',
      'angular-animate': __MODULES__ + '/angularjs/abgykar-animate/angular-animate.min',
      'angular-resource': __MODULES__ + '/angularjs/angular-resource/angular-resource.min',
      'angular-route': __MODULES__ + '/angularjs/angular-route/angular-route.min',
      'angular-cookies': __MODULES__ + '/angularjs/angular-cookies/angular-cookies.min',
      'angular-ui-router': __MODULES__ + '/angularjs/angular-ui-router/release/angular-ui-router.min',
      // angularjs infinite scroll plugin
      'infinite-scroll': __MODULES__ + '/angularjs/ngInfiniteScroll/build/ng-infinite-scroll.min',

      /*
       * jQuery plugins
       */
      'plugins': __PLUGINS__,

      'jq-mousewheel': __PLUGINS__ + '/jquery.mousewheel',
      'jq-datetimepicker': __PLUGINS__ + '/datetimepicker/jquery.datetimepicker',
      'jq-autocomplete': __PLUGINS__ + '/autocomplete/dist/jquery.autocomplete.min',
      'jq-cookie': __PLUGINS__ + '/jquery.cookie',
      'jq-dotdotdot': __PLUGINS__ + '/jquery.dotdotdot.min',
      'jq-slides': __PLUGINS__ + '/jquery.slides',
      'nicevalidator': __PLUGINS__ + '/form-validator/src/jquery.validator',
      'form-validator': __PLUGINS__ + '/form-validator/local/zh_CN',
      'highcharts': __PLUGINS__ + '/highcharts/js/highcharts',
      'fineuploader': __PLUGINS__ + '/fineuploader/jquery.fine-uploader.min',
      'imgareaselect': __PLUGINS__ + '/imgareaselect',
      'intro': __PLUGINS__ + '/intro.js/minified/intro.min',

      /**
       * Lib
       */
      'lib': __LIB__,

      'bootstrap': __LIB__ + '/bootstrap/dist/js/bootstrap.min',
      'Widget': __LIB__ + '/widget/index',
      'events': __LIB__ + '/events/index',
      'util': __LIB__ + '/util/index',
      'fixed': __LIB__ + '/fixed/index',

      'lodash': __LIB__ + '/lodash.compat-3.6.0.min',
      'moment': __LIB__ + '/moment/min/moment.min',
      'ZeroClipboard': __LIB__ + '/zeroclipboard-2.0.2/dist/ZeroClipboard.min',
      'dot': __LIB__ + '/doT/doT.min',

      /**
       * widgets
       */
      'widgets': __WIDGETS__,

      'artDialog': __WIDGETS__ + '/dialog/artDialog/jquery.artDialog',
      'artDialogExt': __WIDGETS__ + '/dialog/artDialog/plugins/iframeTools',
      'dialog': __WIDGETS__ + '/dialog/dialog',

      'ic-dialog': __WIDGETS__ + '/ic-dialog/src/index',

      'dtpicker': __WIDGETS__ + '/datetimepicker/datetimepicker',

      'WdatePicker': __WIDGETS__ + '/my97datepicker/WdatePicker',
      'wdtpicker': __WIDGETS__ + '/my97datepicker/index',

      'suggest': __WIDGETS__ + '/suggest/index'
    },
    packages: [
      {
        name: 'css',
        location: __LIB__ + '/require-css',
        main: 'css'
      },
      {
        name: 'imgareaselect',
        location: __PLUGINS__ + '/imgareaselect',
        main: 'main'
      },
      {
        name: 'uri',
        location: __LIB__ + '/uri/src',
        main: 'URI'
      }
    ],
    shim: {
      'angular': {
        exports: 'angular',
        deps: ['jquery']
      },
      'angularAMD': ['angular'],
      'angular-route': ['angular'],
      'angular-resource': ['angular'],
      'angular-cookies': ['angular'],
      'angular-ui-router': ['angular'],
      highcharts: {
        exports: 'Highcharts'
      },
      'imgareaselect': ['jquery'],
      'jq-dotdotdot': ['jquery'],
      'jq-mousewheel': ['jquery'],
    },
    waitSeconds: 0,
  });

  if (configOnly) {
    return
  }

  APP.load = function(module, type) {
    var _modules = this._modules = this._modules || [];
    type = type || 'app';
    var path = type === 'app' ? __APPATH__ : __PUBLICPATH__
    if (!module) {
      return this
    }

    var lastIndexOf = module.lastIndexOf('.');
    if (lastIndexOf > -1) {
      var ext = module.slice(lastIndexOf);
      if (ext === '.js') {
        _modules.push(path + module);
      }
      return this
    }

    //detect env
    if (envIsDev) {
      _modules.push(type + '/js/' + module);
    } else {
      var config = {
        paths: {}
      }
      config.paths[module] = path + '/build/js/' + module
      require.config(config)
      _modules.push(module)
    }
    return this;
  };

  APP.run = function(fn) {
    require(this._modules, fn || function() {});
  };

  var paths = require.s.contexts._.config.paths;

  require(['fixed'], function() {
    //load built main js in non-dev env
    if (!envIsDev) {
      var paths = require.s.contexts._.config.paths
      require.config({
        paths: {
          main: paths.main.replace(/js/, 'build/js')
        }
      })
    }
    require(['jquery', 'main'], function($, config) {
      var _modules = APP._modules;
      config && require.config(config);
      require(_modules);
    });
  });
})(require || requirejs);
