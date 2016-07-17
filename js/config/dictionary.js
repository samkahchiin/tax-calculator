(function() {
  define('tax-calculator-dictionary', function() {
    var base;
    this.TaxCalculator || (this.TaxCalculator = {});
    (base = this.TaxCalculator).Dictionary || (base.Dictionary = {});
    return this.TaxCalculator.Dictionary.SalaryPeriods = {
      annually: {
        name: 'per year',
        value: 1
      },
      monthly: {
        name: 'per month',
        value: 12
      }
    };
  });

}).call(this);
