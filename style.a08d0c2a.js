// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/jquery-ui-1.9.2.custom.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./images\\ui-icons_444444_256x240.png":[["ui-icons_444444_256x240.12b3ee1c.png","jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_444444_256x240.png"],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_444444_256x240.png"],"./images\\ui-icons_777777_256x240.png":[["ui-icons_777777_256x240.bc265429.png","jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_777777_256x240.png"],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_777777_256x240.png"],"./images\\ui-icons_555555_256x240.png":[["ui-icons_555555_256x240.3fc0cbcc.png","jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_555555_256x240.png"],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_555555_256x240.png"],"./images\\ui-icons_ffffff_256x240.png":[["ui-icons_ffffff_256x240.c55e2bd7.png","jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_ffffff_256x240.png"],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_ffffff_256x240.png"],"./images\\ui-icons_777620_256x240.png":[["ui-icons_777620_256x240.c1368df7.png","jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_777620_256x240.png"],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_777620_256x240.png"],"./images\\ui-icons_cc0000_256x240.png":[["ui-icons_cc0000_256x240.7a0786aa.png","jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_cc0000_256x240.png"],"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/images/ui-icons_cc0000_256x240.png"],"_css_loader":"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"fonts/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./quicksand-bold.woff":[["quicksand-bold.3ffd78d4.woff","fonts/quicksand-bold.woff"],"fonts/quicksand-bold.woff"],"./quicksand-bold.ttf":[["quicksand-bold.b0382577.ttf","fonts/quicksand-bold.ttf"],"fonts/quicksand-bold.ttf"],"./quicksand-bold.svg":[["quicksand-bold.ea3bb2cb.svg","fonts/quicksand-bold.svg"],"fonts/quicksand-bold.svg"],"./quicksand-regular.woff":[["quicksand-regular.e26ac472.woff","fonts/quicksand-regular.woff"],"fonts/quicksand-regular.woff"],"./quicksand-regular.ttf":[["quicksand-regular.3830df37.ttf","fonts/quicksand-regular.ttf"],"fonts/quicksand-regular.ttf"],"./quicksand-regular.svg":[["quicksand-regular.2ca76fc8.svg","fonts/quicksand-regular.svg"],"fonts/quicksand-regular.svg"],"./montserrat-bold.woff":[["montserrat-bold.b5ae94a0.woff","fonts/montserrat-bold.woff"],"fonts/montserrat-bold.woff"],"./montserrat-bold.ttf":[["montserrat-bold.7a7db987.ttf","fonts/montserrat-bold.ttf"],"fonts/montserrat-bold.ttf"],"./montserrat-bold.svg":[["montserrat-bold.efdbe7db.svg","fonts/montserrat-bold.svg"],"fonts/montserrat-bold.svg"],"./montserrat-regular.woff":[["montserrat-regular.3bd57484.woff","fonts/montserrat-regular.woff"],"fonts/montserrat-regular.woff"],"./montserrat-regular.ttf":[["montserrat-regular.2ea32f25.ttf","fonts/montserrat-regular.ttf"],"fonts/montserrat-regular.ttf"],"./montserrat-regular.svg":[["montserrat-regular.a75fd99e.svg","fonts/montserrat-regular.svg"],"fonts/montserrat-regular.svg"],"./materialIcons-Regular.svg":[["materialIcons-Regular.0e49707e.svg","fonts/materialIcons-Regular.svg"],"fonts/materialIcons-Regular.svg"],"./materialIcons-Regular.woff":[["materialIcons-Regular.042ce6b1.woff","fonts/materialIcons-Regular.woff"],"fonts/materialIcons-Regular.woff"],"./materialIcons-Regular.ttf":[["materialIcons-Regular.4f23f0bd.ttf","fonts/materialIcons-Regular.ttf"],"fonts/materialIcons-Regular.ttf"],"./Font Awesome 5 Brands-Regular.svg":[["Font Awesome 5 Brands-Regular.8e118941.svg","fonts/Font Awesome 5 Brands-Regular.svg"],"fonts/Font Awesome 5 Brands-Regular.svg"],"./Font Awesome 5 Brands-Regular.woff":[["Font Awesome 5 Brands-Regular.fe2e5f87.woff","fonts/Font Awesome 5 Brands-Regular.woff"],"fonts/Font Awesome 5 Brands-Regular.woff"],"./Font Awesome 5 Brands-Regular.ttf":[["Font Awesome 5 Brands-Regular.4f89e50f.ttf","fonts/Font Awesome 5 Brands-Regular.ttf"],"fonts/Font Awesome 5 Brands-Regular.ttf"],"./OpenSans-Regular.woff":[["OpenSans-Regular.5d698a25.woff","fonts/OpenSans-Regular.woff"],"fonts/OpenSans-Regular.woff"],"./OpenSans-Regular.ttf":[["OpenSans-Regular.4f32e784.ttf","fonts/OpenSans-Regular.ttf"],"fonts/OpenSans-Regular.ttf"],"./OpenSans-Regular.svg":[["OpenSans-Regular.9956fce7.svg","fonts/OpenSans-Regular.svg"],"fonts/OpenSans-Regular.svg"],"./OpenSans-Bold.woff":[["OpenSans-Bold.ef4dedc9.woff","fonts/OpenSans-Bold.woff"],"fonts/OpenSans-Bold.woff"],"./OpenSans-Bold.ttf":[["OpenSans-Bold.81f0cd2d.ttf","fonts/OpenSans-Bold.ttf"],"fonts/OpenSans-Bold.ttf"],"./OpenSans-Bold.svg":[["OpenSans-Bold.521f2c39.svg","fonts/OpenSans-Bold.svg"],"fonts/OpenSans-Bold.svg"],"_css_loader":"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"fonts/material-icons.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style.sass":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/jQuery/jquery-ui-1.9.2.custom/css/custom-theme/jquery-ui-1.9.2.custom.css":"jQuery/jquery-ui-1.9.2.custom/css/custom-theme/jquery-ui-1.9.2.custom.css","/fonts/fonts.css":"fonts/fonts.css","/fonts/material-icons.css":"fonts/material-icons.css","C:\\work\\uiKit\\src\\img\\hotelroom\\registration-background.jpg":[["registration-background.3eb6c871.jpg","img/hotelroom/registration-background.jpg"],"img/hotelroom/registration-background.jpg"],"C:\\work\\uiKit\\src\\img\\checkbox-buttons__arrow.svg":[["checkbox-buttons__arrow.61168eda.svg","img/checkbox-buttons__arrow.svg"],"img/checkbox-buttons__arrow.svg"],"C:\\work\\uiKit\\src\\img\\arrowback.svg":[["arrowback.60f74660.svg","img/arrowback.svg"],"img/arrowback.svg"],"C:\\work\\uiKit\\src\\img\\arrowforward.svg":[["arrowforward.80f1fb9b.svg","img/arrowforward.svg"],"img/arrowforward.svg"],"_css_loader":"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52006" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/dist/style.a08d0c2a.js.map