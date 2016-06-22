define 'tax-calculator-viewmodel', ['knockout', 'lodash','tax-calculator-dictionary'], (ko, _) ->
  @TaxCalculator ||= {}

  class TaxCalculatorViewModel
    constructor: ->
      @salaryRange = ko.observableArray _.values TaxCalculator.Dictionary.SalaryRange
      @selectedSalaryRange = ko.observable ''
