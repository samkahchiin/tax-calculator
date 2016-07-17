(function() {
  require(['lib/config'], function() {
    requirejs.config({
      paths: {
        'jasmine': "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.4.1/jasmine.min",
        'jasmine-html': "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.4.1/jasmine-html.min",
        'jasmine-boot': "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.4.1/boot.min",
        'jasmine-jquery': "lib/jasmine-jquery",
        'tax-calculator-viewmodel-spec': 'ko-components/view-models/tax-calculator-spec',
        'tax-calculator-view-spec': 'ko-components/views/tax-calculator-spec'
      },
      shim: {
        'jasmine-html': {
          deps: ['jasmine']
        },
        'jasmine-boot': {
          deps: ['jasmine-html']
        },
        'jasmine-jquery': {
          deps: ['jasmine-boot']
        }
      }
    });
    return require(['tax-calculator-viewmodel-spec', 'tax-calculator-view-spec'], function() {
      return window.onload();
    });
  });

}).call(this);
