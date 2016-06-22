define 'tax-calculator-dictionary', () ->
  @TaxCalculator ||= {}
  @TaxCalculator.Dictionary ||= {}

  @TaxCalculator.Dictionary.SalaryRange = 
    annually:
      name: 'per year'
      value: 12
    monthly:
      name: 'per month'
      value: 1
