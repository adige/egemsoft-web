'use strict';

angular.module('egemsoftWebApp')
  .factory('language', function () {
    return {
        strings: {
          // edit here, or see methods below
          language: {
            tr: 'tr/en',
            en: 'en/tr'
          },
          about: {
            tr: 'Hakkımızda',
            en: 'About'
          },
          services: {
            tr: 'Ürünler',
            en: 'Services'
          },
          contact: {
            tr: 'İletişim',
            en: 'Contact'
          },
          home: {
            tr: 'Anasayfa',
            en: 'Home'
          },
          readMore: {
            tr: 'Devamını oku',
            en: 'Read more'
          }
        },

        /**
         * Available languages configuration
         */
        availableLanguages: [{
          key: 'tr',
          label: 'Türkçe'
        },
        {
          key: 'en',
          label: 'English'
        }],

        /**
         * Adds new string translation to the provider programmatically.
         * Usage: $language.addString(door, {tr: 'Kapı', en: 'Door'})
         */
        addString: function(key, locales) {
          if(key)
            this[key] = locales;
        },

        /**
         * Adds multiple string sets to the provider programmatically.
         */
        addStrings: function(strings) {
          angular.forEach(strings, function(locale, key) {
            this.addString(key, locale);
          });
        },

        /**
         * Adds a language configuration to the availableLanguages property programmatically.
         * Usage: $language.addLanguage('es', 'Español')
         */
        addLanguage: function(key, label) {
          this.availableLanguages.push({key: key, label: label});
        }
      };
  });