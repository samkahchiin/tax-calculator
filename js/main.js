(function() {
  require(['lib/config'], function() {
    return require(['knockout'], function(ko) {
      ko.components.register('tax-calculator', {
        viewModel: {
          require: 'tax-calculator-viewmodel'
        },
        template: {
          require: 'text!ko-components/templates/tax-calculator.html'
        }
      });
      return ko.applyBindings();
    });
  });

}).call(this);
