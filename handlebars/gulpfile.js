const builder = require('@jenkins-cd/js-builder');

//
// Bundle the module.
//
builder.bundle('handlebars', 'handlebars4')
    .asJenkinsModuleResource()
    .export();
