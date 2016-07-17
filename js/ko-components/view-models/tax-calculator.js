(function() {
  define('tax-calculator-viewmodel', ['knockout', 'lodash', 'tax-calculator-dictionary'], function(ko, _) {
    return TaxCalculator.ViewModel = (function() {
      function ViewModel() {
        this.salaryPeriods = ko.observableArray(_.values(TaxCalculator.Dictionary.SalaryPeriods));
        this.selectedSalaryPeriod = ko.observable(TaxCalculator.Dictionary.SalaryPeriods.annually.value);
        this.salary = ko.observable(0);
        this.isSingaporean = ko.observable(true);
        this.isWorkForLongEnoughTime = ko.observable(true);
        this.isWorkForShortEnoughTime = ko.observable('');
        this.isTaxResident = ko.computed((function(_this) {
          return function() {
            return _this.isSingaporean() || _this.isWorkForLongEnoughTime();
          };
        })(this));
        this.tax = ko.computed((function(_this) {
          return function() {
            var annualIncome, tax;
            if (_this.isTaxResident()) {
              annualIncome = _this.salary() * _this.selectedSalaryPeriod();
              switch (false) {
                case !((20000 < annualIncome && annualIncome <= 30000)):
                  tax = (annualIncome - 20000) * 0.02;
                  break;
                case !((30000 < annualIncome && annualIncome <= 40000)):
                  tax = 200 + (annualIncome - 30000) * 0.035;
                  break;
                case !((40000 < annualIncome && annualIncome <= 80000)):
                  tax = 550 + (annualIncome - 40000) * 0.07;
                  break;
                case !((80000 < annualIncome && annualIncome <= 120000)):
                  tax = 3350 + (annualIncome - 80000) * 0.115;
                  break;
                case !((120000 < annualIncome && annualIncome <= 160000)):
                  tax = 7950 + (annualIncome - 120000) * 0.15;
                  break;
                case !((160000 < annualIncome && annualIncome <= 200000)):
                  tax = 13950 + (annualIncome - 160000) * 0.18;
                  break;
                case !((200000 < annualIncome && annualIncome <= 240000)):
                  tax = 21150 + (annualIncome - 200000) * 0.19;
                  break;
                case !((240000 < annualIncome && annualIncome <= 280000)):
                  tax = 28750 + (annualIncome - 240000) * 0.195;
                  break;
                case !((280000 < annualIncome && annualIncome <= 320000)):
                  tax = 36550 + (annualIncome - 280000) * 0.195;
                  break;
                case !(320000 < annualIncome):
                  tax = 44550 + (annualIncome - 320000) * 0.2;
              }
            } else {
              tax = _this.salary() * 0.15;
            }
            return tax;
          };
        })(this));
      }

      return ViewModel;

    })();
  });

}).call(this);
