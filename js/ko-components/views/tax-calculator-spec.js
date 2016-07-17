(function() {
  define('tax-calculator-view-spec', ['jquery', 'knockout', 'jasmine-jquery'], function($, ko) {
    return describe('tax-calculator-view-spec', function() {
      beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'js/ko-components/templates';
        return loadFixtures('tax-calculator.html');
      });
      return describe('when user is not a singaporean', function() {
        return it('should show the is work for long enough time description', function() {});
      });
    });
  });

}).call(this);
