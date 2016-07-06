define 'tax-calculator-viewmodel-spec', ['knockout', 'jquery', 'jasmine-boot', 'tax-calculator-viewmodel'],  (ko, $) ->
  describe 'tax-calculator-viewmodel-spec', ->
    viewModel = new TaxCalculator.ViewModel()

    it 'should initialize with the correct value', ->
      expect(viewModel.salaryPeriods()).toEqual _.values TaxCalculator.Dictionary.SalaryPeriods
      expect(viewModel.selectedSalaryPeriod()).toEqual TaxCalculator.Dictionary.SalaryPeriods.annually.value
      expect(viewModel.isSingaporean()).toEqual true

    describe 'isTaxResident', ->
      it 'should return true if user is a Singaporean', ->
        viewModel.isSingaporean true
        expect(viewModel.isTaxResident()).toEqual true

      it 'should return true if user is not a Singaporean but work for more than 183 days', ->
        viewModel.isSingaporean false
        viewModel.isWorkForLongEnoughTime true
        expect(viewModel.isTaxResident()).toEqual true

      it 'should return false if user is not a Singaporean and not work for more than 183 days', ->
        viewModel.isSingaporean false
        viewModel.isWorkForLongEnoughTime false
        expect(viewModel.isTaxResident()).toEqual false

    describe 'tax', ->
      describe 'if user is a tax resident', ->
        beforeEach ->
          spyOn(viewModel, 'isTaxResident').and.returnValue true

        it 'should return the correct value based on the income', ->
          viewModel.salaryAmount 25000
          expect(viewModel.tax()).toEqual 100
          viewModel.salaryAmount 30000
          expect(viewModel.tax()).toEqual 200

      describe 'if user is not a tax resident and stay between 61 to 182 days', ->
        beforeEach ->
          spyOn(viewModel, 'isTaxResident').and.returnValue false

        it 'should return the correct value based on the income', ->
          viewModel.salaryAmount 25000
          expect(viewModel.tax()).toEqual 3750
          viewModel.salaryAmount 30000
          expect(viewModel.tax()).toEqual 4500
          viewModel.salaryAmount 3000
          expect(viewModel.tax()).toEqual 450
