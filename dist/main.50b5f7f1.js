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
})({"../dist/main.js":[function(require,module,exports) {
"use strict"; // autobind decorator

/* const autoBind = (_: any, _2: string, desciptor: PropertyDescriptor) => {
    const originalMethod = desciptor.value;
    const adjacentDescriptor: PropertyDescriptor = {
        configurable: true,
        get: function () {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
    return adjacentDescriptor;
}; */
// Validation function with Validatable interface

function validate(validatable) {
  var isValid = true;

  if (validatable.required) {
    isValid = isValid && validatable.value.toString().trim().length > 0;
  }

  if (validatable.minLength !== undefined && typeof validatable.value === "string") {
    isValid = isValid && validatable.value.toString().trim().length >= validatable.minLength;
  }

  if (validatable.maxLength !== undefined && typeof validatable.value === "string") {
    isValid = isValid && validatable.value.toString().trim().length <= validatable.maxLength;
  }

  if (validatable.min !== undefined && typeof validatable.value === "number") {
    isValid = isValid && validatable.value >= validatable.min;
  }

  if (validatable.max !== undefined && typeof validatable.value === "number") {
    isValid = isValid && validatable.value <= validatable.max;
  }

  return isValid;
} // ProjectList class


var ProjectList =
/** @class */
function () {
  function ProjectList(projectType) {
    var _this = this;

    this.projectType = projectType;

    this.renderContent = function () {
      var listId = _this.projectType + "-projects-list";
      _this.element.querySelector("ul").id = listId;
      _this.element.querySelector("h2").textContent = _this.projectType.toUpperCase() + " PROJECTS";
    };

    this.attach = function () {
      _this.hostElement.insertAdjacentElement("beforeend", _this.element);
    };

    this.templateElement = document.getElementById("project-list");
    this.hostElement = document.getElementById("app");
    var importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild;
    this.element.id = this.projectType + "-projects";
    this.attach();
    this.renderContent();
  }

  return ProjectList;
}();

var ProjectInput =
/** @class */
function () {
  function ProjectInput() {
    var _this = this;

    this.gatherUserInput = function () {
      var enteredTitle = _this.titleInputElement.value;
      var enteredDescription = _this.descriptionInputElement.value;
      var enteredPeople = _this.peopleInputElement.value;
      var titleValidatable = {
        value: enteredTitle,
        required: true
      };
      var descriptionValidatable = {
        value: enteredDescription,
        required: true,
        minLength: 5
      };
      var peopleValidatable = {
        value: enteredPeople,
        required: true,
        min: 1,
        max: 1
      }; // Check if enteredTitle, enteeredDescription, enteredPeople are empty.

      if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
        alert("Invalid input, please try again!");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredPeople];
      }
    };

    this.clearInput = function () {
      // Clear the input fields.
      _this.titleInputElement.value = "";
      _this.descriptionInputElement.value = "";
      _this.peopleInputElement.value = "";
    }; // @autoBind


    this.submitHandler = function (event) {
      event === null || event === void 0 ? void 0 : event.preventDefault();

      var userInput = _this.gatherUserInput(); // Check if userInput is an array


      if (Array.isArray(userInput)) {
        var title = userInput[0],
            description = userInput[1],
            people = userInput[2];
      }
    };

    this.configureEventListeners = function () {
      _this.element.addEventListener("submit", _this.submitHandler.bind(_this));
    };

    this.templateElement = document.getElementById("project-input");
    this.hostElement = document.getElementById("app");
    var importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild;
    this.element.id = "user-input"; // Assigning an id to give styling.

    this.titleInputElement = this.element.querySelector("#title");
    this.descriptionInputElement = this.element.querySelector("#description");
    this.peopleInputElement = this.element.querySelector("#people");
    this.configureEventListeners();
    this.attach();
  }

  ProjectInput.prototype.attach = function () {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  };

  return ProjectInput;
}();

var projectInput = new ProjectInput();
var activePrjList = new ProjectList("active");
var finishedPrjList = new ProjectList("finished");
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36675" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../dist/main.js"], null)
//# sourceMappingURL=/main.50b5f7f1.js.map