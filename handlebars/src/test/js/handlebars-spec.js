/* jslint node: true */
/* global describe, it, expect */

"use strict";

const jsTest = require('@jenkins-cd/js-test');

describe("handlebars4.js", function () {

    it("- test", function (done) {
      jsTest.onPage(() => {
        const jenkins = require('@jenkins-cd/js-modules');
        jenkins.export('handlebars', 'handlebars4', require('handlebars'));
        jenkins.import("handlebars:handlebars4")
            .onFulfilled(function(handlebars4) {
              expect(handlebars4).toBeDefined();
              done();
            });
      });
    });
});
