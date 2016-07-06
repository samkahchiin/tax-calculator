require ['lib/config'], ->
  requirejs.config {
    paths:
      'jasmine': "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.4.1/jasmine.min"
      'jasmine-html': "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.4.1/jasmine-html.min"
      'jasmine-boot': "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.4.1/boot.min"
      'jasmine-jquery': "lib/jasmine-jquery"
      'tax-calculator-viewmodel-spec': 'ko-components/view-models/tax-calculator-spec'
    shim:
      # NOTE: These libraries need to be shimed.
      # They do not express their dependencies with 'define()'
      'jasmine-html':
        deps: ['jasmine']
      'jasmine-boot':
        deps: ['jasmine-html']
      'jasmine-jquery':
        deps: ['jasmine-boot']
  }

  require ['tax-calculator-viewmodel-spec'], () ->
    # need to load the windows for the spec to run
    window.onload()
