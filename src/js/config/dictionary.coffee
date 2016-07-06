define 'tax-calculator-dictionary', () ->
  @TaxCalculator ||= {}
  @TaxCalculator.Dictionary ||= {}

  @TaxCalculator.Dictionary.SalaryPeriods =
    annually:
      name: 'per year'
      value: 1
    monthly:
      name: 'per month'
      value: 12
