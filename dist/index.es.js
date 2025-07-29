/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:19.116Z
 */
function _classCallCheck(s, e) {
  if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(s, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(s, _toPropertyKey(t.key), t);
  }
}
function _createClass(s, e, i) {
  return e && _defineProperties(s.prototype, e), i && _defineProperties(s, i), Object.defineProperty(s, "prototype", {
    writable: !1
  }), s;
}
function _defineProperty(s, e, i) {
  return (e = _toPropertyKey(e)) in s ? Object.defineProperty(s, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[e] = i, s;
}
function ownKeys(s, e) {
  var i = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(s, n).enumerable;
    })), i.push.apply(i, t);
  }
  return i;
}
function _objectSpread2(s) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ownKeys(Object(i), !0).forEach(function(t) {
      _defineProperty(s, t, i[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach(function(t) {
      Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(i, t));
    });
  }
  return s;
}
function _toPrimitive(s, e) {
  if (typeof s != "object" || !s) return s;
  var i = s[Symbol.toPrimitive];
  if (i !== void 0) {
    var t = i.call(s, e);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(s);
}
function _toPropertyKey(s) {
  var e = _toPrimitive(s, "string");
  return typeof e == "symbol" ? e : e + "";
}
function _typeof(s) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _typeof(s);
}
var DEFAULTS = {
  /**
   * Enable a modal backdrop, specify `static` for a backdrop
   * which doesn't close the modal on click.
   * @type {boolean}
   */
  backdrop: !0,
  /**
   * Show the button on the top-right of the viewer.
   * @type {boolean}
   */
  button: !0,
  /**
   * Show the navbar.
   * @type {boolean | number}
   */
  navbar: !0,
  /**
   * Specify the visibility and the content of the title.
   * @type {boolean | number | Function | Array}
   */
  title: !0,
  /**
   * Show the toolbar.
   * @type {boolean | number | Object}
   */
  toolbar: !0,
  /**
   * Custom class name(s) to add to the viewer's root element.
   * @type {string}
   */
  className: "",
  /**
   * Define where to put the viewer in modal mode.
   * @type {string | Element}
   */
  container: "body",
  /**
   * Filter the images for viewing. Return true if the image is viewable.
   * @type {Function}
   */
  filter: null,
  /**
   * Enable to request fullscreen when play.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
   * @type {boolean|FullscreenOptions}
   */
  fullscreen: !0,
  /**
   * Define the extra attributes to inherit from the original image.
   * @type {Array}
   */
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  /**
   * Define the initial coverage of the viewing image.
   * @type {number}
   */
  initialCoverage: 0.9,
  /**
   * Define the initial index of the image for viewing.
   * @type {number}
   */
  initialViewIndex: 0,
  /**
   * Enable inline mode.
   * @type {boolean}
   */
  inline: !1,
  /**
   * The amount of time to delay between automatically cycling an image when playing.
   * @type {number}
   */
  interval: 5e3,
  /**
   * Enable keyboard support.
   * @type {boolean}
   */
  keyboard: !0,
  /**
   * Focus the viewer when initialized.
   * @type {boolean}
   */
  focus: !0,
  /**
   * Indicate if show a loading spinner when load image or not.
   * @type {boolean}
   */
  loading: !0,
  /**
   * Indicate if enable loop viewing or not.
   * @type {boolean}
   */
  loop: !0,
  /**
   * Min width of the viewer in inline mode.
   * @type {number}
   */
  minWidth: 200,
  /**
   * Min height of the viewer in inline mode.
   * @type {number}
   */
  minHeight: 100,
  /**
   * Enable to move the image.
   * @type {boolean}
   */
  movable: !0,
  /**
   * Enable to rotate the image.
   * @type {boolean}
   */
  rotatable: !0,
  /**
   * Enable to scale the image.
   * @type {boolean}
   */
  scalable: !0,
  /**
   * Enable to zoom the image.
   * @type {boolean}
   */
  zoomable: !0,
  /**
   * Enable to zoom the current image by dragging on the touch screen.
   * @type {boolean}
   */
  zoomOnTouch: !0,
  /**
   * Enable to zoom the image by wheeling mouse.
   * @type {boolean}
   */
  zoomOnWheel: !0,
  /**
   * Enable to slide to the next or previous image by swiping on the touch screen.
   * @type {boolean}
   */
  slideOnTouch: !0,
  /**
   * Indicate if toggle the image size between its natural size
   * and initial size when double click on the image or not.
   * @type {boolean}
   */
  toggleOnDblclick: !0,
  /**
   * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
   * @type {boolean}
   */
  tooltip: !0,
  /**
   * Enable CSS3 Transition for some special elements.
   * @type {boolean}
   */
  transition: !0,
  /**
   * Define the CSS `z-index` value of viewer in modal mode.
   * @type {number}
   */
  zIndex: 2015,
  /**
   * Define the CSS `z-index` value of viewer in inline mode.
   * @type {number}
   */
  zIndexInline: 0,
  /**
   * Define the ratio when zoom the image by wheeling mouse.
   * @type {number}
   */
  zoomRatio: 0.1,
  /**
   * Define the min ratio of the image when zoom out.
   * @type {number}
   */
  minZoomRatio: 0.01,
  /**
   * Define the max ratio of the image when zoom in.
   * @type {number}
   */
  maxZoomRatio: 100,
  /**
   * Define where to get the original image URL for viewing.
   * @type {string | Function}
   */
  url: "src",
  /**
   * Event shortcuts.
   * @type {Function}
   */
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
}, TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>', IS_BROWSER = typeof window < "u" && typeof window.document < "u", WINDOW = IS_BROWSER ? window : {}, IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : !1, HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : !1, NAMESPACE = "viewer", ACTION_MOVE = "move", ACTION_SWITCH = "switch", ACTION_ZOOM = "zoom", CLASS_ACTIVE = "".concat(NAMESPACE, "-active"), CLASS_CLOSE = "".concat(NAMESPACE, "-close"), CLASS_FADE = "".concat(NAMESPACE, "-fade"), CLASS_FIXED = "".concat(NAMESPACE, "-fixed"), CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen"), CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit"), CLASS_HIDE = "".concat(NAMESPACE, "-hide"), CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down"), CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down"), CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down"), CLASS_IN = "".concat(NAMESPACE, "-in"), CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible"), CLASS_LOADING = "".concat(NAMESPACE, "-loading"), CLASS_MOVE = "".concat(NAMESPACE, "-move"), CLASS_OPEN = "".concat(NAMESPACE, "-open"), CLASS_SHOW = "".concat(NAMESPACE, "-show"), CLASS_TRANSITION = "".concat(NAMESPACE, "-transition"), EVENT_CLICK = "click", EVENT_DBLCLICK = "dblclick", EVENT_DRAG_START = "dragstart", EVENT_FOCUSIN = "focusin", EVENT_KEY_DOWN = "keydown", EVENT_LOAD = "load", EVENT_ERROR = "error", EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup", EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove", EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown", EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START, EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE, EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END, EVENT_RESIZE = "resize", EVENT_TRANSITION_END = "transitionend", EVENT_WHEEL = "wheel", EVENT_READY = "ready", EVENT_SHOW = "show", EVENT_SHOWN = "shown", EVENT_HIDE = "hide", EVENT_HIDDEN = "hidden", EVENT_VIEW = "view", EVENT_VIEWED = "viewed", EVENT_MOVE = "move", EVENT_MOVED = "moved", EVENT_ROTATE = "rotate", EVENT_ROTATED = "rotated", EVENT_SCALE = "scale", EVENT_SCALED = "scaled", EVENT_ZOOM = "zoom", EVENT_ZOOMED = "zoomed", EVENT_PLAY = "play", EVENT_STOP = "stop", DATA_ACTION = "".concat(NAMESPACE, "Action"), REGEXP_SPACES = /\s\s*/, BUTTONS = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function isString(s) {
  return typeof s == "string";
}
var isNaN = Number.isNaN || WINDOW.isNaN;
function isNumber(s) {
  return typeof s == "number" && !isNaN(s);
}
function isUndefined(s) {
  return typeof s > "u";
}
function isObject(s) {
  return _typeof(s) === "object" && s !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isPlainObject(s) {
  if (!isObject(s))
    return !1;
  try {
    var e = s.constructor, i = e.prototype;
    return e && i && hasOwnProperty.call(i, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function isFunction(s) {
  return typeof s == "function";
}
function forEach(s, e) {
  if (s && isFunction(e))
    if (Array.isArray(s) || isNumber(s.length)) {
      var i = s.length, t;
      for (t = 0; t < i && e.call(s, s[t], t, s) !== !1; t += 1)
        ;
    } else isObject(s) && Object.keys(s).forEach(function(n) {
      e.call(s, s[n], n, s);
    });
  return s;
}
var assign = Object.assign || function(e) {
  for (var i = arguments.length, t = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
    t[n - 1] = arguments[n];
  return isObject(e) && t.length > 0 && t.forEach(function(a) {
    isObject(a) && Object.keys(a).forEach(function(r) {
      e[r] = a[r];
    });
  }), e;
}, REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function setStyle(s, e) {
  var i = s.style;
  forEach(e, function(t, n) {
    REGEXP_SUFFIX.test(n) && isNumber(t) && (t += "px"), i[n] = t;
  });
}
function escapeHTMLEntities(s) {
  return isString(s) ? s.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : s;
}
function hasClass(s, e) {
  return !s || !e ? !1 : s.classList ? s.classList.contains(e) : s.className.indexOf(e) > -1;
}
function addClass(s, e) {
  if (!(!s || !e)) {
    if (isNumber(s.length)) {
      forEach(s, function(t) {
        addClass(t, e);
      });
      return;
    }
    if (s.classList) {
      s.classList.add(e);
      return;
    }
    var i = s.className.trim();
    i ? i.indexOf(e) < 0 && (s.className = "".concat(i, " ").concat(e)) : s.className = e;
  }
}
function removeClass(s, e) {
  if (!(!s || !e)) {
    if (isNumber(s.length)) {
      forEach(s, function(i) {
        removeClass(i, e);
      });
      return;
    }
    if (s.classList) {
      s.classList.remove(e);
      return;
    }
    s.className.indexOf(e) >= 0 && (s.className = s.className.replace(e, ""));
  }
}
function toggleClass(s, e, i) {
  if (e) {
    if (isNumber(s.length)) {
      forEach(s, function(t) {
        toggleClass(t, e, i);
      });
      return;
    }
    i ? addClass(s, e) : removeClass(s, e);
  }
}
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
function hyphenate(s) {
  return s.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase();
}
function getData(s, e) {
  return isObject(s[e]) ? s[e] : s.dataset ? s.dataset[e] : s.getAttribute("data-".concat(hyphenate(e)));
}
function setData(s, e, i) {
  isObject(i) ? s[e] = i : s.dataset ? s.dataset[e] = i : s.setAttribute("data-".concat(hyphenate(e)), i);
}
var onceSupported = function() {
  var s = !1;
  if (IS_BROWSER) {
    var e = !1, i = function() {
    }, t = Object.defineProperty({}, "once", {
      get: function() {
        return s = !0, e;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        e = a;
      }
    });
    WINDOW.addEventListener("test", i, t), WINDOW.removeEventListener("test", i, t);
  }
  return s;
}();
function removeListener(s, e, i) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = i;
  e.trim().split(REGEXP_SPACES).forEach(function(a) {
    if (!onceSupported) {
      var r = s.listeners;
      r && r[a] && r[a][i] && (n = r[a][i], delete r[a][i], Object.keys(r[a]).length === 0 && delete r[a], Object.keys(r).length === 0 && delete s.listeners);
    }
    s.removeEventListener(a, n, t);
  });
}
function addListener(s, e, i) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = i;
  e.trim().split(REGEXP_SPACES).forEach(function(a) {
    if (t.once && !onceSupported) {
      var r = s.listeners, l = r === void 0 ? {} : r;
      n = function() {
        delete l[a][i], s.removeEventListener(a, n, t);
        for (var h = arguments.length, o = new Array(h), c = 0; c < h; c++)
          o[c] = arguments[c];
        i.apply(s, o);
      }, l[a] || (l[a] = {}), l[a][i] && s.removeEventListener(a, l[a][i], t), l[a][i] = n, s.listeners = l;
    }
    s.addEventListener(a, n, t);
  });
}
function dispatchEvent(s, e, i, t) {
  var n;
  return isFunction(Event) && isFunction(CustomEvent) ? n = new CustomEvent(e, _objectSpread2({
    bubbles: !0,
    cancelable: !0,
    detail: i
  }, t)) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(e, !0, !0, i)), s.dispatchEvent(n);
}
function getOffset(s) {
  var e = s.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function getTransforms(s) {
  var e = s.rotate, i = s.scaleX, t = s.scaleY, n = s.translateX, a = s.translateY, r = [];
  isNumber(n) && n !== 0 && r.push("translateX(".concat(n, "px)")), isNumber(a) && a !== 0 && r.push("translateY(".concat(a, "px)")), isNumber(e) && e !== 0 && r.push("rotate(".concat(e, "deg)")), isNumber(i) && i !== 1 && r.push("scaleX(".concat(i, ")")), isNumber(t) && t !== 1 && r.push("scaleY(".concat(t, ")"));
  var l = r.length ? r.join(" ") : "none";
  return {
    WebkitTransform: l,
    msTransform: l,
    transform: l
  };
}
function getImageNameFromURL(s) {
  return isString(s) ? decodeURIComponent(s.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var IS_SAFARI = WINDOW.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(WINDOW.navigator.userAgent);
function getImageNaturalSizes(s, e, i) {
  var t = document.createElement("img");
  if (s.naturalWidth && !IS_SAFARI)
    return i(s.naturalWidth, s.naturalHeight), t;
  var n = document.body || document.documentElement;
  return t.onload = function() {
    i(t.width, t.height), IS_SAFARI || n.removeChild(t);
  }, forEach(e.inheritedAttributes, function(a) {
    var r = s.getAttribute(a);
    r !== null && t.setAttribute(a, r);
  }), t.src = s.src, IS_SAFARI || (t.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", n.appendChild(t)), t;
}
function getResponsiveClass(s) {
  switch (s) {
    case 2:
      return CLASS_HIDE_XS_DOWN;
    case 3:
      return CLASS_HIDE_SM_DOWN;
    case 4:
      return CLASS_HIDE_MD_DOWN;
    default:
      return "";
  }
}
function getMaxZoomRatio(s) {
  var e = _objectSpread2({}, s), i = [];
  return forEach(s, function(t, n) {
    delete e[n], forEach(e, function(a) {
      var r = Math.abs(t.startX - a.startX), l = Math.abs(t.startY - a.startY), u = Math.abs(t.endX - a.endX), h = Math.abs(t.endY - a.endY), o = Math.sqrt(r * r + l * l), c = Math.sqrt(u * u + h * h), d = (c - o) / o;
      i.push(d);
    });
  }), i.sort(function(t, n) {
    return Math.abs(t) < Math.abs(n);
  }), i[0];
}
function getPointer(s, e) {
  var i = s.pageX, t = s.pageY, n = {
    endX: i,
    endY: t
  };
  return e ? n : _objectSpread2({
    timeStamp: Date.now(),
    startX: i,
    startY: t
  }, n);
}
function getPointersCenter(s) {
  var e = 0, i = 0, t = 0;
  return forEach(s, function(n) {
    var a = n.startX, r = n.startY;
    e += a, i += r, t += 1;
  }), e /= t, i /= t, {
    pageX: e,
    pageY: i
  };
}
var render = {
  render: function() {
    this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
  },
  initBody: function() {
    var e = this.element.ownerDocument, i = e.body || e.documentElement;
    this.body = i, this.scrollbarWidth = window.innerWidth - e.documentElement.clientWidth, this.initialBodyPaddingRight = i.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(i).paddingRight;
  },
  initContainer: function() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function() {
    var e = this.options, i = this.parent, t;
    e.inline && (t = {
      width: Math.max(i.offsetWidth, e.minWidth),
      height: Math.max(i.offsetHeight, e.minHeight)
    }, this.parentData = t), (this.fulled || !t) && (t = this.containerData), this.viewerData = assign({}, t);
  },
  renderViewer: function() {
    this.options.inline && !this.fulled && setStyle(this.viewer, this.viewerData);
  },
  initList: function() {
    var e = this, i = this.element, t = this.options, n = this.list, a = [];
    n.innerHTML = "", forEach(this.images, function(r, l) {
      var u = r.src, h = r.alt || getImageNameFromURL(u), o = e.getImageURL(r);
      if (u || o) {
        var c = document.createElement("li"), d = document.createElement("img");
        forEach(t.inheritedAttributes, function(v) {
          var E = r.getAttribute(v);
          E !== null && d.setAttribute(v, E);
        }), t.navbar && (d.src = u || o), d.alt = h, d.setAttribute("data-original-url", o || u), c.setAttribute("data-index", l), c.setAttribute("data-viewer-action", "view"), c.setAttribute("role", "button"), t.keyboard && c.setAttribute("tabindex", 0), c.appendChild(d), n.appendChild(c), a.push(c);
      }
    }), this.items = a, forEach(a, function(r) {
      var l = r.firstElementChild, u, h;
      setData(l, "filled", !0), t.loading && addClass(r, CLASS_LOADING), addListener(l, EVENT_LOAD, u = function(c) {
        removeListener(l, EVENT_ERROR, h), t.loading && removeClass(r, CLASS_LOADING), e.loadImage(c);
      }, {
        once: !0
      }), addListener(l, EVENT_ERROR, h = function() {
        removeListener(l, EVENT_LOAD, u), t.loading && removeClass(r, CLASS_LOADING);
      }, {
        once: !0
      });
    }), t.transition && addListener(i, EVENT_VIEWED, function() {
      addClass(n, CLASS_TRANSITION);
    }, {
      once: !0
    });
  },
  renderList: function() {
    var e = this.index, i = this.items[e];
    if (i) {
      var t = i.nextElementSibling, n = parseInt(window.getComputedStyle(t || i).marginLeft, 10), a = i.offsetWidth, r = a + n;
      setStyle(this.list, assign({
        width: r * this.length - n
      }, getTransforms({
        translateX: (this.viewerData.width - a) / 2 - r * e
      })));
    }
  },
  resetList: function() {
    var e = this.list;
    e.innerHTML = "", removeClass(e, CLASS_TRANSITION), setStyle(e, getTransforms({
      translateX: 0
    }));
  },
  initImage: function(e) {
    var i = this, t = this.options, n = this.image, a = this.viewerData, r = this.footer.offsetHeight, l = a.width, u = Math.max(a.height - r, r), h = this.imageData || {}, o;
    this.imageInitializing = {
      abort: function() {
        o.onload = null;
      }
    }, o = getImageNaturalSizes(n, t, function(c, d) {
      var v = c / d, E = Math.max(0, Math.min(1, t.initialCoverage)), m = l, g = u;
      i.imageInitializing = !1, u * v > l ? g = l / v : m = u * v, E = isNumber(E) ? E : 0.9, m = Math.min(m * E, c), g = Math.min(g * E, d);
      var p = (l - m) / 2, S = (u - g) / 2, f = {
        left: p,
        top: S,
        x: p,
        y: S,
        width: m,
        height: g,
        oldRatio: 1,
        ratio: m / c,
        aspectRatio: v,
        naturalWidth: c,
        naturalHeight: d
      }, T = assign({}, f);
      t.rotatable && (f.rotate = h.rotate || 0, T.rotate = 0), t.scalable && (f.scaleX = h.scaleX || 1, f.scaleY = h.scaleY || 1, T.scaleX = 1, T.scaleY = 1), i.imageData = f, i.initialImageData = T, e && e();
    });
  },
  renderImage: function(e) {
    var i = this, t = this.image, n = this.imageData;
    if (setStyle(t, assign({
      width: n.width,
      height: n.height,
      // XXX: Not to use translateX/Y to avoid image shaking when zooming
      marginLeft: n.x,
      marginTop: n.y
    }, getTransforms(n))), e)
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(t, CLASS_TRANSITION)) {
        var a = function() {
          i.imageRendering = !1, e();
        };
        this.imageRendering = {
          abort: function() {
            removeListener(t, EVENT_TRANSITION_END, a);
          }
        }, addListener(t, EVENT_TRANSITION_END, a, {
          once: !0
        });
      } else
        e();
  },
  resetImage: function() {
    var e = this.image;
    e && (this.viewing && this.viewing.abort(), e.parentNode.removeChild(e), this.image = null, this.title.innerHTML = "");
  }
}, events = {
  bind: function() {
    var e = this.options, i = this.viewer, t = this.canvas, n = this.element.ownerDocument;
    addListener(i, EVENT_CLICK, this.onClick = this.click.bind(this)), addListener(i, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this)), addListener(t, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this)), addListener(n, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this)), addListener(n, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this)), addListener(n, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this)), addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this)), e.zoomable && e.zoomOnWheel && addListener(i, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleOnDblclick && addListener(t, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
  },
  unbind: function() {
    var e = this.options, i = this.viewer, t = this.canvas, n = this.element.ownerDocument;
    removeListener(i, EVENT_CLICK, this.onClick), removeListener(i, EVENT_DRAG_START, this.onDragStart), removeListener(t, EVENT_POINTER_DOWN, this.onPointerDown), removeListener(n, EVENT_POINTER_MOVE, this.onPointerMove), removeListener(n, EVENT_POINTER_UP, this.onPointerUp), removeListener(n, EVENT_KEY_DOWN, this.onKeyDown), removeListener(window, EVENT_RESIZE, this.onResize), e.zoomable && e.zoomOnWheel && removeListener(i, EVENT_WHEEL, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleOnDblclick && removeListener(t, EVENT_DBLCLICK, this.onDblclick);
  }
}, handlers = {
  click: function(e) {
    var i = this.options, t = this.imageData, n = e.target, a = getData(n, DATA_ACTION);
    switch (!a && n.localName === "img" && n.parentElement.localName === "li" && (n = n.parentElement, a = getData(n, DATA_ACTION)), IS_TOUCH_DEVICE && e.isTrusted && n === this.canvas && clearTimeout(this.clickCanvasTimeout), a) {
      case "mix":
        this.played ? this.stop() : i.inline ? this.fulled ? this.exit() : this.full() : this.hide();
        break;
      case "hide":
        this.pointerMoved || this.hide();
        break;
      case "view":
        this.view(getData(n, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, !0);
        break;
      case "zoom-out":
        this.zoom(-0.1, !0);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(i.loop);
        break;
      case "play":
        this.play(i.fullscreen);
        break;
      case "next":
        this.next(i.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-t.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-t.scaleY || -1);
        break;
      default:
        this.played && this.stop();
    }
  },
  dblclick: function(e) {
    e.preventDefault(), this.viewed && e.target === this.image && (IS_TOUCH_DEVICE && e.isTrusted && clearTimeout(this.doubleClickImageTimeout), this.toggle(e.isTrusted ? e : e.detail && e.detail.originalEvent));
  },
  load: function() {
    var e = this;
    this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
    var i = this.element, t = this.options, n = this.image, a = this.index, r = this.viewerData;
    removeClass(n, CLASS_INVISIBLE), t.loading && removeClass(this.canvas, CLASS_LOADING), n.style.cssText = "height:0;" + "margin-left:".concat(r.width / 2, "px;") + "margin-top:".concat(r.height / 2, "px;") + "max-width:none!important;position:relative;width:0;", this.initImage(function() {
      toggleClass(n, CLASS_MOVE, t.movable), toggleClass(n, CLASS_TRANSITION, t.transition), e.renderImage(function() {
        e.viewed = !0, e.viewing = !1, isFunction(t.viewed) && addListener(i, EVENT_VIEWED, t.viewed, {
          once: !0
        }), dispatchEvent(i, EVENT_VIEWED, {
          originalImage: e.images[a],
          index: a,
          image: n
        }, {
          cancelable: !1
        });
      });
    });
  },
  loadImage: function(e) {
    var i = e.target, t = i.parentNode, n = t.offsetWidth || 30, a = t.offsetHeight || 50, r = !!getData(i, "filled");
    getImageNaturalSizes(i, this.options, function(l, u) {
      var h = l / u, o = n, c = a;
      a * h > n ? r ? o = a * h : c = n / h : r ? c = n / h : o = a * h, setStyle(i, assign({
        width: o,
        height: c
      }, getTransforms({
        translateX: (n - o) / 2,
        translateY: (a - c) / 2
      })));
    });
  },
  keydown: function(e) {
    var i = this.options;
    if (i.keyboard) {
      var t = e.keyCode || e.which || e.charCode;
      switch (t) {
        case 13:
          this.viewer.contains(e.target) && this.click(e);
          break;
      }
      if (this.fulled)
        switch (t) {
          case 27:
            this.played ? this.stop() : i.inline ? this.fulled && this.exit() : this.hide();
            break;
          case 32:
            this.played && this.stop();
            break;
          case 37:
            this.played && this.playing ? this.playing.prev() : this.prev(i.loop);
            break;
          case 38:
            e.preventDefault(), this.zoom(i.zoomRatio, !0);
            break;
          case 39:
            this.played && this.playing ? this.playing.next() : this.next(i.loop);
            break;
          case 40:
            e.preventDefault(), this.zoom(-i.zoomRatio, !0);
            break;
          case 48:
          case 49:
            e.ctrlKey && (e.preventDefault(), this.toggle());
            break;
        }
    }
  },
  dragstart: function(e) {
    e.target.localName === "img" && e.preventDefault();
  },
  pointerdown: function(e) {
    var i = this.options, t = this.pointers, n = e.buttons, a = e.button;
    if (this.pointerMoved = !1, !(!this.viewed || this.showing || this.viewing || this.hiding || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (isNumber(n) && n !== 1 || isNumber(a) && a !== 0 || e.ctrlKey))) {
      e.preventDefault(), e.changedTouches ? forEach(e.changedTouches, function(l) {
        t[l.identifier] = getPointer(l);
      }) : t[e.pointerId || 0] = getPointer(e);
      var r = i.movable ? ACTION_MOVE : !1;
      i.zoomOnTouch && i.zoomable && Object.keys(t).length > 1 ? r = ACTION_ZOOM : i.slideOnTouch && (e.pointerType === "touch" || e.type === "touchstart") && this.isSwitchable() && (r = ACTION_SWITCH), i.transition && (r === ACTION_MOVE || r === ACTION_ZOOM) && removeClass(this.image, CLASS_TRANSITION), this.action = r;
    }
  },
  pointermove: function(e) {
    var i = this.pointers, t = this.action;
    !this.viewed || !t || (e.preventDefault(), e.changedTouches ? forEach(e.changedTouches, function(n) {
      assign(i[n.identifier] || {}, getPointer(n, !0));
    }) : assign(i[e.pointerId || 0] || {}, getPointer(e, !0)), this.change(e));
  },
  pointerup: function(e) {
    var i = this, t = this.options, n = this.action, a = this.pointers, r;
    e.changedTouches ? forEach(e.changedTouches, function(l) {
      r = a[l.identifier], delete a[l.identifier];
    }) : (r = a[e.pointerId || 0], delete a[e.pointerId || 0]), n && (e.preventDefault(), t.transition && (n === ACTION_MOVE || n === ACTION_ZOOM) && addClass(this.image, CLASS_TRANSITION), this.action = !1, IS_TOUCH_DEVICE && n !== ACTION_ZOOM && r && Date.now() - r.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), t.toggleOnDblclick && this.viewed && e.target === this.image ? this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout(function() {
      dispatchEvent(i.image, EVENT_DBLCLICK, {
        originalEvent: e
      });
    }, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
      i.imageClicked = !1;
    }, 500)) : (this.imageClicked = !1, t.backdrop && t.backdrop !== "static" && e.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
      dispatchEvent(i.canvas, EVENT_CLICK, {
        originalEvent: e
      });
    }, 50)))));
  },
  resize: function() {
    var e = this;
    if (!(!this.isShown || this.hiding) && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      e.renderImage();
    }), this.played)) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      forEach(this.player.getElementsByTagName("img"), function(i) {
        addListener(i, EVENT_LOAD, e.loadImage.bind(e), {
          once: !0
        }), dispatchEvent(i, EVENT_LOAD);
      });
    }
  },
  wheel: function(e) {
    var i = this;
    if (this.viewed && (e.preventDefault(), !this.wheeling)) {
      this.wheeling = !0, setTimeout(function() {
        i.wheeling = !1;
      }, 50);
      var t = Number(this.options.zoomRatio) || 0.1, n = 1;
      e.deltaY ? n = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? n = -e.wheelDelta / 120 : e.detail && (n = e.detail > 0 ? 1 : -1), this.zoom(-n * t, !0, null, e);
    }
  }
}, methods = {
  /** Show the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
   * @returns {Viewer} this
   */
  show: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.element, t = this.options;
    if (t.inline || this.showing || this.isShown || this.showing)
      return this;
    if (!this.ready)
      return this.build(), this.ready && this.show(e), this;
    if (isFunction(t.show) && addListener(i, EVENT_SHOW, t.show, {
      once: !0
    }), dispatchEvent(i, EVENT_SHOW) === !1 || !this.ready)
      return this;
    this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
    var n = this.viewer;
    if (removeClass(n, CLASS_HIDE), n.setAttribute("role", "dialog"), n.setAttribute("aria-labelledby", this.title.id), n.setAttribute("aria-modal", !0), n.removeAttribute("aria-hidden"), t.transition && !e) {
      var a = this.shown.bind(this);
      this.transitioning = {
        abort: function() {
          removeListener(n, EVENT_TRANSITION_END, a), removeClass(n, CLASS_IN);
        }
      }, addClass(n, CLASS_TRANSITION), n.initialOffsetWidth = n.offsetWidth, addListener(n, EVENT_TRANSITION_END, a, {
        once: !0
      }), addClass(n, CLASS_IN);
    } else
      addClass(n, CLASS_IN), this.shown();
    return this;
  },
  /**
   * Hide the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
   * @returns {Viewer} this
   */
  hide: function() {
    var e = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.element, n = this.options;
    if (n.inline || this.hiding || !(this.isShown || this.showing))
      return this;
    if (isFunction(n.hide) && addListener(t, EVENT_HIDE, n.hide, {
      once: !0
    }), dispatchEvent(t, EVENT_HIDE) === !1)
      return this;
    this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
    var a = this.viewer, r = this.image, l = function() {
      removeClass(a, CLASS_IN), e.hidden();
    };
    if (n.transition && !i) {
      var u = function(c) {
        c && c.target === a && (removeListener(a, EVENT_TRANSITION_END, u), e.hidden());
      }, h = function() {
        hasClass(a, CLASS_TRANSITION) ? (addListener(a, EVENT_TRANSITION_END, u), removeClass(a, CLASS_IN)) : l();
      };
      this.transitioning = {
        abort: function() {
          e.viewed && hasClass(r, CLASS_TRANSITION) ? removeListener(r, EVENT_TRANSITION_END, h) : hasClass(a, CLASS_TRANSITION) && removeListener(a, EVENT_TRANSITION_END, u);
        }
      }, this.viewed && hasClass(r, CLASS_TRANSITION) ? (addListener(r, EVENT_TRANSITION_END, h, {
        once: !0
      }), this.zoomTo(0, !1, null, null, !0)) : h();
    } else
      l();
    return this;
  },
  /**
   * View one of the images with image's index
   * @param {number} index - The index of the image to view.
   * @returns {Viewer} this
   */
  view: function() {
    var e = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    if (i = Number(i) || 0, this.hiding || this.played || i < 0 || i >= this.length || this.viewed && i === this.index)
      return this;
    if (!this.isShown)
      return this.index = i, this.show();
    this.viewing && this.viewing.abort();
    var t = this.element, n = this.options, a = this.title, r = this.canvas, l = this.items[i], u = l.querySelector("img"), h = getData(u, "originalUrl"), o = u.getAttribute("alt"), c = document.createElement("img");
    if (forEach(n.inheritedAttributes, function(g) {
      var p = u.getAttribute(g);
      p !== null && c.setAttribute(g, p);
    }), c.src = h, c.alt = o, isFunction(n.view) && addListener(t, EVENT_VIEW, n.view, {
      once: !0
    }), dispatchEvent(t, EVENT_VIEW, {
      originalImage: this.images[i],
      index: i,
      image: c
    }) === !1 || !this.isShown || this.hiding || this.played)
      return this;
    var d = this.items[this.index];
    d && (removeClass(d, CLASS_ACTIVE), d.removeAttribute("aria-selected")), addClass(l, CLASS_ACTIVE), l.setAttribute("aria-selected", !0), n.focus && l.focus(), this.image = c, this.viewed = !1, this.index = i, this.imageData = {}, addClass(c, CLASS_INVISIBLE), n.loading && addClass(r, CLASS_LOADING), r.innerHTML = "", r.appendChild(c), this.renderList(), a.innerHTML = "";
    var v = function() {
      var p = e.imageData, S = Array.isArray(n.title) ? n.title[1] : n.title;
      a.innerHTML = escapeHTMLEntities(isFunction(S) ? S.call(e, c, p) : "".concat(o, " (").concat(p.naturalWidth, " × ").concat(p.naturalHeight, ")"));
    }, E, m;
    return addListener(t, EVENT_VIEWED, v, {
      once: !0
    }), this.viewing = {
      abort: function() {
        removeListener(t, EVENT_VIEWED, v), c.complete ? e.imageRendering ? e.imageRendering.abort() : e.imageInitializing && e.imageInitializing.abort() : (c.src = "", removeListener(c, EVENT_LOAD, E), e.timeout && clearTimeout(e.timeout));
      }
    }, c.complete ? this.load() : (addListener(c, EVENT_LOAD, E = function() {
      removeListener(c, EVENT_ERROR, m), e.load();
    }, {
      once: !0
    }), addListener(c, EVENT_ERROR, m = function() {
      removeListener(c, EVENT_LOAD, E), e.timeout && (clearTimeout(e.timeout), e.timeout = !1), removeClass(c, CLASS_INVISIBLE), n.loading && removeClass(e.canvas, CLASS_LOADING);
    }, {
      once: !0
    }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
      removeClass(c, CLASS_INVISIBLE), e.timeout = !1;
    }, 1e3)), this;
  },
  /**
   * View the previous image
   * @param {boolean} [loop=false] - Indicate if view the last one
   * when it is the first one at present.
   * @returns {Viewer} this
   */
  prev: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.index - 1;
    return i < 0 && (i = e ? this.length - 1 : 0), this.view(i), this;
  },
  /**
   * View the next image
   * @param {boolean} [loop=false] - Indicate if view the first one
   * when it is the last one at present.
   * @returns {Viewer} this
   */
  next: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.length - 1, t = this.index + 1;
    return t > i && (t = e ? 0 : i), this.view(t), this;
  },
  /**
   * Move the image with relative offsets.
   * @param {number} x - The moving distance in the horizontal direction.
   * @param {number} [y=x] The moving distance in the vertical direction.
   * @returns {Viewer} this
   */
  move: function(e) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, t = this.imageData;
    return this.moveTo(isUndefined(e) ? e : t.x + Number(e), isUndefined(i) ? i : t.y + Number(i)), this;
  },
  /**
   * Move the image to an absolute point.
   * @param {number} x - The new position in the horizontal direction.
   * @param {number} [y=x] - The new position in the vertical direction.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  moveTo: function(e) {
    var i = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.element, r = this.options, l = this.imageData;
    if (e = Number(e), t = Number(t), this.viewed && !this.played && r.movable) {
      var u = l.x, h = l.y, o = !1;
      if (isNumber(e) ? o = !0 : e = u, isNumber(t) ? o = !0 : t = h, o) {
        if (isFunction(r.move) && addListener(a, EVENT_MOVE, r.move, {
          once: !0
        }), dispatchEvent(a, EVENT_MOVE, {
          x: e,
          y: t,
          oldX: u,
          oldY: h,
          originalEvent: n
        }) === !1)
          return this;
        l.x = e, l.y = t, l.left = e, l.top = t, this.moving = !0, this.renderImage(function() {
          i.moving = !1, isFunction(r.moved) && addListener(a, EVENT_MOVED, r.moved, {
            once: !0
          }), dispatchEvent(a, EVENT_MOVED, {
            x: e,
            y: t,
            oldX: u,
            oldY: h,
            originalEvent: n
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  /**
   * Rotate the image with a relative degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this;
  },
  /**
   * Rotate the image to an absolute degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotateTo: function(e) {
    var i = this, t = this.element, n = this.options, a = this.imageData;
    if (e = Number(e), isNumber(e) && this.viewed && !this.played && n.rotatable) {
      var r = a.rotate;
      if (isFunction(n.rotate) && addListener(t, EVENT_ROTATE, n.rotate, {
        once: !0
      }), dispatchEvent(t, EVENT_ROTATE, {
        degree: e,
        oldDegree: r
      }) === !1)
        return this;
      a.rotate = e, this.rotating = !0, this.renderImage(function() {
        i.rotating = !1, isFunction(n.rotated) && addListener(t, EVENT_ROTATED, n.rotated, {
          once: !0
        }), dispatchEvent(t, EVENT_ROTATED, {
          degree: e,
          oldDegree: r
        }, {
          cancelable: !1
        });
      });
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Viewer} this
   */
  scaleX: function(e) {
    return this.scale(e, this.imageData.scaleY), this;
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scaleY: function(e) {
    return this.scale(this.imageData.scaleX, e), this;
  },
  /**
   * Scale the image.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scale: function(e) {
    var i = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, n = this.element, a = this.options, r = this.imageData;
    if (e = Number(e), t = Number(t), this.viewed && !this.played && a.scalable) {
      var l = r.scaleX, u = r.scaleY, h = !1;
      if (isNumber(e) ? h = !0 : e = l, isNumber(t) ? h = !0 : t = u, h) {
        if (isFunction(a.scale) && addListener(n, EVENT_SCALE, a.scale, {
          once: !0
        }), dispatchEvent(n, EVENT_SCALE, {
          scaleX: e,
          scaleY: t,
          oldScaleX: l,
          oldScaleY: u
        }) === !1)
          return this;
        r.scaleX = e, r.scaleY = t, this.scaling = !0, this.renderImage(function() {
          i.scaling = !1, isFunction(a.scaled) && addListener(n, EVENT_SCALED, a.scaled, {
            once: !0
          }), dispatchEvent(n, EVENT_SCALED, {
            scaleX: e,
            scaleY: t,
            oldScaleX: l,
            oldScaleY: u
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  /**
   * Zoom the image with a relative ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  zoom: function(e) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, a = this.imageData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(a.width * e / a.naturalWidth, i, t, n), this;
  },
  /**
   * Zoom the image to an absolute ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
   * @returns {Viewer} this
   */
  zoomTo: function(e) {
    var i = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, l = this.element, u = this.options, h = this.pointers, o = this.imageData, c = o.x, d = o.y, v = o.width, E = o.height, m = o.naturalWidth, g = o.naturalHeight;
    if (e = Math.max(0, e), isNumber(e) && this.viewed && !this.played && (r || u.zoomable)) {
      if (!r) {
        var p = Math.max(0.01, u.minZoomRatio), S = Math.min(100, u.maxZoomRatio);
        e = Math.min(Math.max(e, p), S);
      }
      if (a)
        switch (a.type) {
          case "wheel":
            u.zoomRatio >= 0.055 && e > 0.95 && e < 1.05 && (e = 1);
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            e > 0.99 && e < 1.01 && (e = 1);
            break;
        }
      var f = m * e, T = g * e, A = f - v, N = T - E, b = o.ratio;
      if (isFunction(u.zoom) && addListener(l, EVENT_ZOOM, u.zoom, {
        once: !0
      }), dispatchEvent(l, EVENT_ZOOM, {
        ratio: e,
        oldRatio: b,
        originalEvent: a
      }) === !1)
        return this;
      if (this.zooming = !0, a) {
        var w = getOffset(this.viewer), _ = h && Object.keys(h).length > 0 ? getPointersCenter(h) : {
          pageX: a.pageX,
          pageY: a.pageY
        };
        o.x -= A * ((_.pageX - w.left - c) / v), o.y -= N * ((_.pageY - w.top - d) / E);
      } else isPlainObject(n) && isNumber(n.x) && isNumber(n.y) ? (o.x -= A * ((n.x - c) / v), o.y -= N * ((n.y - d) / E)) : (o.x -= A / 2, o.y -= N / 2);
      o.left = o.x, o.top = o.y, o.width = f, o.height = T, o.oldRatio = b, o.ratio = e, this.renderImage(function() {
        i.zooming = !1, isFunction(u.zoomed) && addListener(l, EVENT_ZOOMED, u.zoomed, {
          once: !0
        }), dispatchEvent(l, EVENT_ZOOMED, {
          ratio: e,
          oldRatio: b,
          originalEvent: a
        }, {
          cancelable: !1
        });
      }), t && this.tooltip();
    }
    return this;
  },
  /**
   * Play the images
   * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
   * @returns {Viewer} this
   */
  play: function() {
    var e = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (!this.isShown || this.played)
      return this;
    var t = this.element, n = this.options;
    if (isFunction(n.play) && addListener(t, EVENT_PLAY, n.play, {
      once: !0
    }), dispatchEvent(t, EVENT_PLAY) === !1)
      return this;
    var a = this.player, r = this.loadImage.bind(this), l = [], u = 0, h = 0;
    if (this.played = !0, this.onLoadWhenPlay = r, i && this.requestFullscreen(i), addClass(a, CLASS_SHOW), forEach(this.items, function(d, v) {
      var E = d.querySelector("img"), m = document.createElement("img");
      m.src = getData(E, "originalUrl"), m.alt = E.getAttribute("alt"), m.referrerPolicy = E.referrerPolicy, u += 1, addClass(m, CLASS_FADE), toggleClass(m, CLASS_TRANSITION, n.transition), hasClass(d, CLASS_ACTIVE) && (addClass(m, CLASS_IN), h = v), l.push(m), addListener(m, EVENT_LOAD, r, {
        once: !0
      }), a.appendChild(m);
    }), isNumber(n.interval) && n.interval > 0) {
      var o = function() {
        clearTimeout(e.playing.timeout), removeClass(l[h], CLASS_IN), h -= 1, h = h >= 0 ? h : u - 1, addClass(l[h], CLASS_IN), e.playing.timeout = setTimeout(o, n.interval);
      }, c = function() {
        clearTimeout(e.playing.timeout), removeClass(l[h], CLASS_IN), h += 1, h = h < u ? h : 0, addClass(l[h], CLASS_IN), e.playing.timeout = setTimeout(c, n.interval);
      };
      u > 1 && (this.playing = {
        prev: o,
        next: c,
        timeout: setTimeout(c, n.interval)
      });
    }
    return this;
  },
  // Stop play
  stop: function() {
    var e = this;
    if (!this.played)
      return this;
    var i = this.element, t = this.options;
    if (isFunction(t.stop) && addListener(i, EVENT_STOP, t.stop, {
      once: !0
    }), dispatchEvent(i, EVENT_STOP) === !1)
      return this;
    var n = this.player;
    return clearTimeout(this.playing.timeout), this.playing = !1, this.played = !1, forEach(n.getElementsByTagName("img"), function(a) {
      removeListener(a, EVENT_LOAD, e.onLoadWhenPlay);
    }), removeClass(n, CLASS_SHOW), n.innerHTML = "", this.exitFullscreen(), this;
  },
  // Enter modal mode (only available in inline mode)
  full: function() {
    var e = this, i = this.options, t = this.viewer, n = this.image, a = this.list;
    return !this.isShown || this.played || this.fulled || !i.inline ? this : (this.fulled = !0, this.open(), addClass(this.button, CLASS_FULLSCREEN_EXIT), i.transition && (removeClass(a, CLASS_TRANSITION), this.viewed && removeClass(n, CLASS_TRANSITION)), addClass(t, CLASS_FIXED), t.setAttribute("role", "dialog"), t.setAttribute("aria-labelledby", this.title.id), t.setAttribute("aria-modal", !0), t.removeAttribute("style"), setStyle(t, {
      zIndex: i.zIndex
    }), i.focus && this.enforceFocus(), this.initContainer(), this.viewerData = assign({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
      e.renderImage(function() {
        i.transition && setTimeout(function() {
          addClass(n, CLASS_TRANSITION), addClass(a, CLASS_TRANSITION);
        }, 0);
      });
    }), this);
  },
  // Exit modal mode (only available in inline mode)
  exit: function() {
    var e = this, i = this.options, t = this.viewer, n = this.image, a = this.list;
    return !this.isShown || this.played || !this.fulled || !i.inline ? this : (this.fulled = !1, this.close(), removeClass(this.button, CLASS_FULLSCREEN_EXIT), i.transition && (removeClass(a, CLASS_TRANSITION), this.viewed && removeClass(n, CLASS_TRANSITION)), i.focus && this.clearEnforceFocus(), t.removeAttribute("role"), t.removeAttribute("aria-labelledby"), t.removeAttribute("aria-modal"), removeClass(t, CLASS_FIXED), setStyle(t, {
      zIndex: i.zIndexInline
    }), this.viewerData = assign({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      e.renderImage(function() {
        i.transition && setTimeout(function() {
          addClass(n, CLASS_TRANSITION), addClass(a, CLASS_TRANSITION);
        }, 0);
      });
    }), this);
  },
  // Show the current ratio of the image with percentage
  tooltip: function() {
    var e = this, i = this.options, t = this.tooltipBox, n = this.imageData;
    return !this.viewed || this.played || !i.tooltip ? this : (t.textContent = "".concat(Math.round(n.ratio * 100), "%"), this.tooltipping ? clearTimeout(this.tooltipping) : i.transition ? (this.fading && dispatchEvent(t, EVENT_TRANSITION_END), addClass(t, CLASS_SHOW), addClass(t, CLASS_FADE), addClass(t, CLASS_TRANSITION), t.removeAttribute("aria-hidden"), t.initialOffsetWidth = t.offsetWidth, addClass(t, CLASS_IN)) : (addClass(t, CLASS_SHOW), t.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
      i.transition ? (addListener(t, EVENT_TRANSITION_END, function() {
        removeClass(t, CLASS_SHOW), removeClass(t, CLASS_FADE), removeClass(t, CLASS_TRANSITION), t.setAttribute("aria-hidden", !0), e.fading = !1;
      }, {
        once: !0
      }), removeClass(t, CLASS_IN), e.fading = !0) : (removeClass(t, CLASS_SHOW), t.setAttribute("aria-hidden", !0)), e.tooltipping = !1;
    }, 1e3), this);
  },
  /**
   * Toggle the image size between its current size and natural size
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  toggle: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0, null, e) : this.zoomTo(1, !0, null, e), this;
  },
  // Reset the image to its initial state
  reset: function() {
    return this.viewed && !this.played && (this.imageData = assign({}, this.initialImageData), this.renderImage()), this;
  },
  // Update viewer when images changed
  update: function() {
    var e = this, i = this.element, t = this.options, n = this.isImg;
    if (n && !i.parentNode)
      return this.destroy();
    var a = [];
    if (forEach(n ? [i] : i.querySelectorAll("img"), function(h) {
      isFunction(t.filter) ? t.filter.call(e, h) && a.push(h) : e.getImageURL(h) && a.push(h);
    }), !a.length)
      return this;
    if (this.images = a, this.length = a.length, this.ready) {
      var r = [];
      if (forEach(this.items, function(h, o) {
        var c = h.querySelector("img"), d = a[o];
        d && c ? (d.src !== c.src || d.alt !== c.alt) && r.push(o) : r.push(o);
      }), setStyle(this.list, {
        width: "auto"
      }), this.initList(), this.isShown)
        if (this.length) {
          if (this.viewed) {
            var l = r.indexOf(this.index);
            if (l >= 0)
              this.viewed = !1, this.view(Math.max(Math.min(this.index - l, this.length - 1), 0));
            else {
              var u = this.items[this.index];
              addClass(u, CLASS_ACTIVE), u.setAttribute("aria-selected", !0);
            }
          }
        } else
          this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = "";
    } else
      this.build();
    return this;
  },
  // Destroy the viewer
  destroy: function() {
    var e = this.element, i = this.options;
    return e[NAMESPACE] ? (this.destroyed = !0, this.ready ? (this.played && this.stop(), i.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : i.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), i.inline || removeListener(e, EVENT_CLICK, this.onStart), e[NAMESPACE] = void 0, this) : this;
  }
}, others = {
  getImageURL: function(e) {
    var i = this.options.url;
    return isString(i) ? i = e.getAttribute(i) : isFunction(i) ? i = i.call(this, e) : i = "", i;
  },
  enforceFocus: function() {
    var e = this;
    this.clearEnforceFocus(), addListener(document, EVENT_FOCUSIN, this.onFocusin = function(i) {
      var t = e.viewer, n = i.target;
      if (!(n === document || n === t || t.contains(n))) {
        for (; n; ) {
          if (n.getAttribute("tabindex") !== null || n.getAttribute("aria-modal") === "true")
            return;
          n = n.parentElement;
        }
        t.focus();
      }
    });
  },
  clearEnforceFocus: function() {
    this.onFocusin && (removeListener(document, EVENT_FOCUSIN, this.onFocusin), this.onFocusin = null);
  },
  open: function() {
    var e = this.body;
    addClass(e, CLASS_OPEN), this.scrollbarWidth > 0 && (e.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px"));
  },
  close: function() {
    var e = this.body;
    removeClass(e, CLASS_OPEN), this.scrollbarWidth > 0 && (e.style.paddingRight = this.initialBodyPaddingRight);
  },
  shown: function() {
    var e = this.element, i = this.options, t = this.viewer;
    this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, i.focus && (t.focus(), this.enforceFocus()), isFunction(i.shown) && addListener(e, EVENT_SHOWN, i.shown, {
      once: !0
    }), dispatchEvent(e, EVENT_SHOWN) !== !1 && this.ready && this.isShown && !this.hiding && this.view(this.index);
  },
  hidden: function() {
    var e = this.element, i = this.options, t = this.viewer;
    i.fucus && this.clearEnforceFocus(), this.close(), this.unbind(), addClass(t, CLASS_HIDE), t.removeAttribute("role"), t.removeAttribute("aria-labelledby"), t.removeAttribute("aria-modal"), t.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.hiding = !1, this.destroyed || (isFunction(i.hidden) && addListener(e, EVENT_HIDDEN, i.hidden, {
      once: !0
    }), dispatchEvent(e, EVENT_HIDDEN, null, {
      cancelable: !1
    }));
  },
  requestFullscreen: function(e) {
    var i = this.element.ownerDocument;
    if (this.fulled && !(i.fullscreenElement || i.webkitFullscreenElement || i.mozFullScreenElement || i.msFullscreenElement)) {
      var t = i.documentElement;
      t.requestFullscreen ? isPlainObject(e) ? t.requestFullscreen(e) : t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen();
    }
  },
  exitFullscreen: function() {
    var e = this.element.ownerDocument;
    this.fulled && (e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement) && (e.exitFullscreen ? e.exitFullscreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen());
  },
  change: function(e) {
    var i = this.options, t = this.pointers, n = t[Object.keys(t)[0]];
    if (n) {
      var a = n.endX - n.startX, r = n.endY - n.startY;
      switch (this.action) {
        case ACTION_MOVE:
          (a !== 0 || r !== 0) && (this.pointerMoved = !0, this.move(a, r, e));
          break;
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(t), !1, null, e);
          break;
        case ACTION_SWITCH: {
          this.action = "switched";
          var l = Math.abs(a);
          l > 1 && l > Math.abs(r) && (this.pointers = {}, a > 1 ? this.prev(i.loop) : a < -1 && this.next(i.loop));
          break;
        }
      }
      forEach(t, function(u) {
        u.startX = u.endX, u.startY = u.endY;
      });
    }
  },
  isSwitchable: function() {
    var e = this.imageData, i = this.viewerData;
    return this.length > 1 && e.x >= 0 && e.y >= 0 && e.width <= i.width && e.height <= i.height;
  }
}, AnotherViewer = WINDOW.Viewer, getUniqueID = /* @__PURE__ */ function(s) {
  return function() {
    return s += 1, s;
  };
}(-1), Viewer = /* @__PURE__ */ function() {
  function s(e) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (_classCallCheck(this, s), !e || e.nodeType !== 1)
      throw new Error("The first argument is required and must be an element.");
    this.element = e, this.options = assign({}, DEFAULTS, isPlainObject(i) && i), this.action = !1, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zooming = !1, this.pointerMoved = !1, this.id = getUniqueID(), this.init();
  }
  return _createClass(s, [{
    key: "init",
    value: function() {
      var i = this, t = this.element, n = this.options;
      if (!t[NAMESPACE]) {
        t[NAMESPACE] = this, n.focus && !n.keyboard && (n.focus = !1);
        var a = t.localName === "img", r = [];
        if (forEach(a ? [t] : t.querySelectorAll("img"), function(h) {
          isFunction(n.filter) ? n.filter.call(i, h) && r.push(h) : i.getImageURL(h) && r.push(h);
        }), this.isImg = a, this.length = r.length, this.images = r, this.initBody(), isUndefined(document.createElement(NAMESPACE).style.transition) && (n.transition = !1), n.inline) {
          var l = 0, u = function() {
            if (l += 1, l === i.length) {
              var o;
              i.initializing = !1, i.delaying = {
                abort: function() {
                  clearTimeout(o);
                }
              }, o = setTimeout(function() {
                i.delaying = !1, i.build();
              }, 0);
            }
          };
          this.initializing = {
            abort: function() {
              forEach(r, function(o) {
                o.complete || (removeListener(o, EVENT_LOAD, u), removeListener(o, EVENT_ERROR, u));
              });
            }
          }, forEach(r, function(h) {
            if (h.complete)
              u();
            else {
              var o, c;
              addListener(h, EVENT_LOAD, o = function() {
                removeListener(h, EVENT_ERROR, c), u();
              }, {
                once: !0
              }), addListener(h, EVENT_ERROR, c = function() {
                removeListener(h, EVENT_LOAD, o), u();
              }, {
                once: !0
              });
            }
          });
        } else
          addListener(t, EVENT_CLICK, this.onStart = function(h) {
            var o = h.target;
            o.localName === "img" && (!isFunction(n.filter) || n.filter.call(i, o)) && i.view(i.images.indexOf(o));
          });
      }
    }
  }, {
    key: "build",
    value: function() {
      if (!this.ready) {
        var i = this.element, t = this.options, n = i.parentNode, a = document.createElement("div");
        a.innerHTML = TEMPLATE;
        var r = a.querySelector(".".concat(NAMESPACE, "-container")), l = r.querySelector(".".concat(NAMESPACE, "-title")), u = r.querySelector(".".concat(NAMESPACE, "-toolbar")), h = r.querySelector(".".concat(NAMESPACE, "-navbar")), o = r.querySelector(".".concat(NAMESPACE, "-button")), c = r.querySelector(".".concat(NAMESPACE, "-canvas"));
        if (this.parent = n, this.viewer = r, this.title = l, this.toolbar = u, this.navbar = h, this.button = o, this.canvas = c, this.footer = r.querySelector(".".concat(NAMESPACE, "-footer")), this.tooltipBox = r.querySelector(".".concat(NAMESPACE, "-tooltip")), this.player = r.querySelector(".".concat(NAMESPACE, "-player")), this.list = r.querySelector(".".concat(NAMESPACE, "-list")), r.id = "".concat(NAMESPACE).concat(this.id), l.id = "".concat(NAMESPACE, "Title").concat(this.id), addClass(l, t.title ? getResponsiveClass(Array.isArray(t.title) ? t.title[0] : t.title) : CLASS_HIDE), addClass(h, t.navbar ? getResponsiveClass(t.navbar) : CLASS_HIDE), toggleClass(o, CLASS_HIDE, !t.button), t.keyboard && o.setAttribute("tabindex", 0), t.backdrop && (addClass(r, "".concat(NAMESPACE, "-backdrop")), !t.inline && t.backdrop !== "static" && setData(c, DATA_ACTION, "hide")), isString(t.className) && t.className && t.className.split(REGEXP_SPACES).forEach(function(f) {
          addClass(r, f);
        }), t.toolbar) {
          var d = document.createElement("ul"), v = isPlainObject(t.toolbar), E = BUTTONS.slice(0, 3), m = BUTTONS.slice(7, 9), g = BUTTONS.slice(9);
          v || addClass(u, getResponsiveClass(t.toolbar)), forEach(v ? t.toolbar : BUTTONS, function(f, T) {
            var A = v && isPlainObject(f), N = v ? hyphenate(T) : f, b = A && !isUndefined(f.show) ? f.show : f;
            if (!(!b || !t.zoomable && E.indexOf(N) !== -1 || !t.rotatable && m.indexOf(N) !== -1 || !t.scalable && g.indexOf(N) !== -1)) {
              var w = A && !isUndefined(f.size) ? f.size : f, _ = A && !isUndefined(f.click) ? f.click : f, C = document.createElement("li");
              t.keyboard && C.setAttribute("tabindex", 0), C.setAttribute("role", "button"), addClass(C, "".concat(NAMESPACE, "-").concat(N)), isFunction(_) || setData(C, DATA_ACTION, N), isNumber(b) && addClass(C, getResponsiveClass(b)), ["small", "large"].indexOf(w) !== -1 ? addClass(C, "".concat(NAMESPACE, "-").concat(w)) : N === "play" && addClass(C, "".concat(NAMESPACE, "-large")), isFunction(_) && addListener(C, EVENT_CLICK, _), d.appendChild(C);
            }
          }), u.appendChild(d);
        } else
          addClass(u, CLASS_HIDE);
        if (!t.rotatable) {
          var p = u.querySelectorAll('li[class*="rotate"]');
          addClass(p, CLASS_INVISIBLE), forEach(p, function(f) {
            u.appendChild(f);
          });
        }
        if (t.inline)
          addClass(o, CLASS_FULLSCREEN), setStyle(r, {
            zIndex: t.zIndexInline
          }), window.getComputedStyle(n).position === "static" && setStyle(n, {
            position: "relative"
          }), n.insertBefore(r, i.nextSibling);
        else {
          addClass(o, CLASS_CLOSE), addClass(r, CLASS_FIXED), addClass(r, CLASS_FADE), addClass(r, CLASS_HIDE), setStyle(r, {
            zIndex: t.zIndex
          });
          var S = t.container;
          isString(S) && (S = i.ownerDocument.querySelector(S)), S || (S = this.body), S.appendChild(r);
        }
        if (t.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, isFunction(t.ready) && addListener(i, EVENT_READY, t.ready, {
          once: !0
        }), dispatchEvent(i, EVENT_READY) === !1) {
          this.ready = !1;
          return;
        }
        this.ready && t.inline && this.view(this.index);
      }
    }
    /**
     * Get the no conflict viewer class.
     * @returns {Viewer} The viewer class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Viewer = AnotherViewer, s;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(i) {
      assign(DEFAULTS, isPlainObject(i) && i);
    }
  }]);
}();
assign(Viewer.prototype, render, events, handlers, methods, others);
const styleStr = "<style>.container {display: grid;grid-template-columns: repeat(3, 33.33%);grid-template-rows: 1fr 1fr auto;img {width: 100%;height: 100%;max-height: 100%;}}</style>", slotStr = '<slot name="slotName"></slot>', innerTemplate = '<div id="viewer-container" class="container"></div>' + styleStr + slotStr;
class ViewerWebComponent extends HTMLElement {
  constructor() {
    super(), this.init();
  }
  // 处理webcomponent模板下的图片html
  imageCount(s) {
    const e = innerTemplate.split("</div>").filter(Boolean);
    if (s && s.length)
      for (let i = 0; i < s.length; i++)
        e.push(`<div><img src="${s[i]}" alt="${i + 1}" title="${i + 1}"></div>`);
    return e.join("") + "</div>";
  }
  // 初始化webcomponent
  init() {
    var shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template"), imageArr = this.getAttribute("images");
    template.innerHTML = this.imageCount(eval(imageArr)), document.body.appendChild(template);
    const content = template.content.cloneNode(!0);
    shadow.appendChild(content);
    const options = this.getAttribute("options"), viewer = new Viewer(this.shadowRoot.getElementById("viewer-container"), eval(`( ${options} )`));
    this.viewer = viewer;
  }
}
customElements.define("viewer-webcomponent", ViewerWebComponent);
const viewerElement = document.querySelector("viewer-webcomponent"), viewer = viewerElement.viewer;
export {
  viewer as default
};
