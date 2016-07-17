define 'tax-calculator-view-spec', ['jquery', 'knockout', 'jasmine-jquery'], ($, ko) ->
  describe 'tax-calculator-view-spec', ->

    beforeEach ->
      # require(['knockout', 'lodash','tax-calculator-viewmodel','tax-calculator-dictionary'], (ko, _) ->
      #   viewModel = TaxCalculator.ViewModel
      # )
      jasmine.getFixtures().fixturesPath = 'js/ko-components/templates'
      loadFixtures 'tax-calculator.html'

    describe 'when user is not a singaporean', ->
      # TODO: Set up a viewmodel here and manipulate its knockout element
      # manually click the checkbox and see whether the item is hide or not
      it 'should show the is work for long enough time description', ->


