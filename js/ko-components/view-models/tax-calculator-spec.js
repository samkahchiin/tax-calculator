(function() {
  define('tax-calculator-viewmodel-spec', ['knockout', 'jquery', 'jasmine-boot', 'tax-calculator-viewmodel'], function(ko, $) {
    return describe('tax-calculator-viewmodel-spec', function() {
      var viewModel;
      viewModel = new TaxCalculator.ViewModel();
      it('should initialize with the correct value', function() {
        expect(viewModel.salaryPeriods()).toEqual(_.values(TaxCalculator.Dictionary.SalaryPeriods));
        expect(viewModel.selectedSalaryPeriod()).toEqual(TaxCalculator.Dictionary.SalaryPeriods.annually.value);
        return expect(viewModel.isSingaporean()).toEqual(true);
      });
      describe('isTaxResident', function() {
        it('should return true if user is a Singaporean', function() {
          viewModel.isSingaporean(true);
          return expect(viewModel.isTaxResident()).toEqual(true);
        });
        it('should return true if user is not a Singaporean but work for more than 183 days', function() {
          viewModel.isSingaporean(false);
          viewModel.isWorkForLongEnoughTime(true);
          return expect(viewModel.isTaxResident()).toEqual(true);
        });
        return it('should return false if user is not a Singaporean and not work for more than 183 days', function() {
          viewModel.isSingaporean(false);
          viewModel.isWorkForLongEnoughTime(false);
          return expect(viewModel.isTaxResident()).toEqual(false);
        });
      });
      return describe('tax', function() {
        describe('if user is a tax resident', function() {
          beforeEach(function() {
            return spyOn(viewModel, 'isTaxResident').and.returnValue(true);
          });
          return it('should return the correct value based on the income', function() {
            viewModel.salary(25000);
            expect(viewModel.tax()).toEqual(100);
            viewModel.salary(30000);
            return expect(viewModel.tax()).toEqual(200);
          });
        });
        return describe('if user is not a tax resident and stay between 61 to 182 days', function() {
          beforeEach(function() {
            return spyOn(viewModel, 'isTaxResident').and.returnValue(false);
          });
          return it('should return the correct value based on the income', function() {
            viewModel.salary(25000);
            expect(viewModel.tax()).toEqual(3750);
            viewModel.salary(30000);
            expect(viewModel.tax()).toEqual(4500);
            viewModel.salary(3000);
            return expect(viewModel.tax()).toEqual(450);
          });
        });
      });
    });
  });

}).call(this);
