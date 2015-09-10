Ractify Loader (for webpack)
=================

[![npm version](https://badge.fury.io/js/ractive-component-loader.svg)](http://badge.fury.io/js/ractive-component-loader) [![Build Status](https://travis-ci.org/marcello3d/ractive-component-loader.svg?branch=master)](https://travis-ci.org/marcello3d/ractive-component-loader)

[Webpack](https://www.npmjs.com/package/webpack) + [ractive.js](http://www.ractivejs.org/)

Based on (and compatible with) [ractify](https://github.com/marcello3d/node-ractify).

Installation
------------

This loader does not depend on Ractive, you must require it yourself (this allows you to update Ractive
without an update to ractify-loader).

Example:

```
npm install --save ractify-loader
npm install --save ractive@0.7
```

Usage / Examples
----------------

Webpack config example usage:

```js
/* webpack.config.js */
module.exports = {
  module: {
    loaders: [
      { test: /\.ract$/, loader: 'ractify' }
    ]
  },
  ...
}
```

In your Client-side JavaScript, `require('ractive/build/ractive.runtime')` and it'll import the runtime-only version of
ractive. `require` a `.ract` file, and it will return a plain javascript object with `template` and (if defined) `css`
parameters:

```js
var Ractive = require('ractive/build/ractive.runtime')
var foo = new Ractive({
    template:require('./views/foo.ract').template,
    el: document.getElementById("foo"),
    data: ...
})
```

This structure can be passed into `Ractive.extend` to automatically build Ractive components:

```js
var Ractive = require('ractive/build/ractive.runtime')
var Foo = Ractive.extend(require('./views/foo.ract'))
var foo = new Foo({
    el: document.getElementById("foo"),
    data: ...
})
```

Extract partials by inspecting the `template` property:

```js
var foo = require('./views/partials.ract')
if (foo.template.partials) {
    // foo.template.main has the main template
    // foo.template.partials has the partial templates
}
```

License
-------
Open source software under the [zlib license](LICENSE).
