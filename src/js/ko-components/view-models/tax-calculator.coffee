define 'tax-calculator-viewmodel', ['knockout', 'lodash','tax-calculator-dictionary'], (ko, _) ->

  class TaxCalculator.ViewModel
    constructor: ->
      @salaryPeriods = ko.observableArray _.values TaxCalculator.Dictionary.SalaryPeriods
      @selectedSalaryPeriod = ko.observable TaxCalculator.Dictionary.SalaryPeriods.annually.value
      @salaryAmount = ko.observable 0
      @isSingaporean = ko.observable true
      @isWorkForLongEnoughTime = ko.observable ''
      @isTaxResident = ko.computed =>
        @isSingaporean() || @isWorkForLongEnoughTime()
      @tax = ko.computed =>
        annualIncome = @salaryAmount() * @selectedSalaryPeriod()
        switch
          when 20000 < annualIncome <= 30000
            tax = ( annualIncome - 20000 ) * 0.02
          when 30000 < annualIncome <= 40000
            tax = 200 + ( annualIncome - 30000 ) * 0.035
          when 40000 < annualIncome <= 80000
            tax = 550 + ( annualIncome - 40000 ) * 0.07
          when 80000 < annualIncome <= 120000
            tax = 3350 + ( annualIncome - 80000 ) * 0.115
          when 120000 < annualIncome <= 160000
            tax = 7950 + ( annualIncome - 120000 ) * 0.15
          when 160000 < annualIncome <= 200000
            tax = 13950 + ( annualIncome - 160000 ) * 0.18
          when 200000 < annualIncome <= 240000
            tax = 21150 + ( annualIncome - 200000 ) * 0.19
          when 240000 < annualIncome <= 280000
            tax = 28750 + ( annualIncome - 240000 ) * 0.195
          when 280000 < annualIncome <= 320000
            tax = 36550 + ( annualIncome - 280000 ) * 0.195
          when 320000 < annualIncome
            tax = 44550 + ( annualIncome - 320000 ) * 0.2
        tax
