/* jslint node: true */
/* global describe, it, expect */

"use strict";

const jsTest = require('@jenkins-cd/js-test');

describe("handlebars3.js", function () {

    it("- test", function (done) {
      jsTest.onPage(() => {
        const jenkins = require('@jenkins-cd/js-modules');
        jenkins.exportModule('handlebars', 'handlebars3', require('handlebars'));
        jenkins.importModule("handlebars:handlebars3")
            .onFulfilled(function(handlebars3) {
              expect(handlebars3).toBeDefined();
              done();
            });
      });
    });
});
