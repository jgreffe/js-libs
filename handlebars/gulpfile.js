const builder = require('@jenkins-cd/js-builder');

//
// Bundle the module.
//
builder.bundle('handlebars', 'handlebars3')
    .inDir('src/main/webapp/jsmodules') //FIXME not sure about this, added to make the BundleTest.java pass
    .export();
