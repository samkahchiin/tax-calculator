require ['lib/config'], ->
  require ['knockout'], (ko) ->
    ko.components.register 'tax-calculator', {
      viewModel:
        require: 'tax-calculator-viewmodel'
      template:
        require: 'text!ko-components/templates/tax-calculator.html'
    }
    ko.applyBindings()

