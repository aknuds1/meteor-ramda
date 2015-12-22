'use strict';

Package.describe({
    name: 'aknudsen:ramda',
    summary: 'A practical functional library for Javascript programmers.',
    version: '0.19.0',
    git: 'https://github.com/aknuds1/meteor-ramda.git',
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
      'ramda/dist/ramda.js',
    ], ['client', 'server']);

})
