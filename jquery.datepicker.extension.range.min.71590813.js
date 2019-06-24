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
})({"jQuery/jquery.datepicker.extension.range.min.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* jQuery ui-datepicker extension */

/**
 *
 * https://gist.github.com/Artemeey/8bacd37964a8069a2eeee8c9b0bd2e44/
 *
 * Version: 1.0 (15.06.2016)
 * Requires: jQuery v1.8+
 * Requires: jQuery-UI v1.10+
 *
 * Copyright (c) 2016 Artemeey
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * sample:
 * $('.datepicker').datepicker({
		range:'period', // 'period' or 'multiple'
		onSelect:function(dateText, inst, extensionRange){
			// range - new argument!
			switch(inst.settings.range){
				case 'period':
					console.log(extensionRange.startDateText);
					console.log(extensionRange.endDateText);
					console.log(extensionRange.startDate);
					console.log(extensionRange.endDate);
					break;
				case 'multiple':
					console.log(extensionRange.dates); // object, width UTC-TIME keys
					console.log(extensionRange.datesText); // object, width UTC-TIME keys
					break;
			}
		}
	});
 *
 * extension styles:
 * .selected
 * .selected-start
 * .selected-end
 * .first-of-month
 * .last-of-month
 *
 */
$.datepicker._get_original = $.datepicker._get, $.datepicker._get = function (t, e) {
  var i = $.datepicker._get_original(t, e),
      a = t.settings.range;

  if (!a) return i;
  var s = this;

  switch (a) {
    case "period":
    case "multiple":
      var n = $(this.dpDiv).data("datepickerExtensionRange");

      switch (n || (n = new _datepickerExtension(), $(this.dpDiv).data("datepickerExtensionRange", n)), n.range = a, n.range_multiple_max = t.settings.range_multiple_max || 0, e) {
        case "onSelect":
          var r = i;
          r || (r = function r() {}), i = function i(t, e) {
            n.onSelect(t, e), r(t, e, n), s._datepickerShowing = !1, setTimeout(function () {
              s._updateDatepicker(e), s._datepickerShowing = !0;
            }), n.setClassActive(e);
          };
          break;

        case "beforeShowDay":
          var r = i;
          r || (r = function r() {
            return [!0, ""];
          }), i = function i(t) {
            var e = r(t);
            return e = n.fillDay(t, e);
          };
          break;

        case "beforeShow":
          var r = i;
          r || (r = function r() {}), i = function i(t, e) {
            r(t, e), n.setClassActive(e);
          };
          break;

        case "onChangeMonthYear":
          var r = i;
          r || (r = function r() {}), i = function i(t, e, _i) {
            r(t, e, _i), n.setClassActive(_i);
          };
      }

  }

  return i;
}, $.datepicker._setDate_original = $.datepicker._setDate, $.datepicker._setDate = function (t, e, i) {
  var a = t.settings.range;
  if (!a) return $.datepicker._setDate_original(t, e, i);
  var s = this.dpDiv.data("datepickerExtensionRange");
  if (!s) return $.datepicker._setDate_original(t, e, i);

  switch (a) {
    case "period":
      ("object" != _typeof(e) || void 0 == e.length) && (e = [e, e]), s.step = 0, $.datepicker._setDate_original(t, e[0], i), s.startDate = this._getDate(t), s.startDateText = this._formatDate(t), $.datepicker._setDate_original(t, e[1], i), s.endDate = this._getDate(t), s.endDateText = this._formatDate(t), s.setClassActive(t);
      break;

    case "multiple":
      ("object" != _typeof(e) || void 0 == e.length) && (e = [e]), s.dates = [], s.datesText = [];
      var n = this;
      $.map(e, function (e) {
        $.datepicker._setDate_original(t, e, i), s.dates.push(n._getDate(t)), s.datesText.push(n._formatDate(t));
      }), s.setClassActive(t);
  }
};

var _datepickerExtension = function _datepickerExtension() {
  this.range = !1, this.range_multiple_max = 0, this.step = 0, this.dates = [], this.datesText = [], this.startDate = null, this.endDate = null, this.startDateText = "", this.endDateText = "", this.onSelect = function (t, e) {
    switch (this.range) {
      case "period":
        return this.onSelectPeriod(t, e);

      case "multiple":
        return this.onSelectMultiple(t, e);
    }
  }, this.onSelectPeriod = function (t, e) {
    this.step++, this.step %= 2, this.step ? (this.startDate = this.getSelectedDate(e), this.endDate = this.startDate, this.startDateText = t, this.endDateText = this.startDateText) : (this.endDate = this.getSelectedDate(e), this.endDateText = t, this.startDate.getTime() > this.endDate.getTime() && (this.endDate = this.startDate, this.startDate = this.getSelectedDate(e), this.endDateText = this.startDateText, this.startDateText = t));
  }, this.onSelectMultiple = function (t, e) {
    var i = this.getSelectedDate(e),
        a = -1;
    $.map(this.dates, function (t, e) {
      t.getTime() == i.getTime() && (a = e);
    });
    var s = $.inArray(t, this.datesText);
    -1 != a ? this.dates.splice(a, 1) : this.dates.push(i), -1 != s ? this.datesText.splice(s, 1) : this.datesText.push(t), this.range_multiple_max && this.dates.length > this.range_multiple_max && (this.dates.splice(0, 1), this.datesText.splice(0, 1));
  }, this.fillDay = function (t, e) {
    var i = e[1];

    switch (1 == t.getDate() && (i += " first-of-month"), t.getDate() == new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate() && (i += " last-of-month"), e[1] = i.trim(), this.range) {
      case "period":
        return this.fillDayPeriod(t, e);

      case "multiple":
        return this.fillDayMultiple(t, e);
    }
  }, this.fillDayPeriod = function (t, e) {
    if (!this.startDate || !this.endDate) return e;
    var i = e[1];
    return t >= this.startDate && t <= this.endDate && (i += " selected"), t.getTime() == this.startDate.getTime() && (i += " selected-start"), t.getTime() == this.endDate.getTime() && (i += " selected-end"), e[1] = i.trim(), e;
  }, this.fillDayMultiple = function (t, e) {
    var i = e[1],
        a = !1;
    return $.map(this.dates, function (e) {
      e.getTime() == t.getTime() && (a = !0);
    }), a && (i += " selected selected-start selected-end"), e[1] = i.trim(), e;
  }, this.getSelectedDate = function (t) {
    return new Date(t.selectedYear, t.selectedMonth, t.selectedDay);
  }, this.setClassActive = function (t) {
    var e = this;
    setTimeout(function () {
      $("td.selected > *", t.dpDiv).addClass("ui-state-active"), "multiple" == e.range && $("td:not(.selected)", t.dpDiv).removeClass("ui-datepicker-current-day").children().removeClass("ui-state-active");
    });
  };
};
},{}],"../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50408" + '/');

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
},{}]},{},["../../../Users/Jaguar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","jQuery/jquery.datepicker.extension.range.min.js"], null)
//# sourceMappingURL=jquery.datepicker.extension.range.min.71590813.js.map