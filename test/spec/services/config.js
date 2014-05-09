'use strict';

describe('Service: config', function () {

  // load the service's module
  beforeEach(module('egemsoftWebApp'));

  // instantiate service
  var config;
  beforeEach(inject(function (_config_) {
    config = _config_;
  }));

  it("must not be null", function() {
    expect(config).not.toBe(null);
  });

  it("must has imagesUrl property", function() {
    expect(config.imagesUrl).not.toBe(null);
    expect(typeof(config.imagesUrl)).toBe('string');
  });

  it("must has uploadsUrl property", function() {
    expect(config.uploadsUrl).not.toBe(null);
    expect(typeof(config.uploadsUrl)).toBe('string');
  });

  it("must has sections array with at least one element", function() {
    expect(config.sections).not.toBe(null);
    expect(typeof(config.sections)).toBe('object');
    expect(config.sections.length).not.toBe(0);
  });

  it("must has contentSrc string property", function() {
    expect(config.contentSrc).not.toBe(null);
    expect(typeof(config.contentSrc)).toBe('string');
  });


  it("must has home object property", function() {
    expect(config.home).not.toBe(null);
    expect(typeof(config.home)).toBe('object');
  });

  it("home property must contain slides and blocks for all available languages", function() {
    inject(function(language) {
      angular.forEach(language.availableLanguages, function(availableLanguage) {
        expect(config.home[availableLanguage.key]).not.toBe(null);
        expect(typeof(config.home[availableLanguage.key])).toBe('object');
        expect(typeof(config.home[availableLanguage.key])).toBe('object');
        expect(typeof(config.home[availableLanguage.key].slides)).not.toBe(null);
        expect(config.home[availableLanguage.key].slides.length).not.toBe(0);
        expect(config.home[availableLanguage.key].blocks.length).not.toBe(0);
      });
    });
  });

});
