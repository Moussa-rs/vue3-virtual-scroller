import { pushScopeId as ue, popScopeId as fe, nextTick as ee, openBlock as $, createBlock as D, withScopeId as me, markRaw as pe, shallowReactive as ve, resolveComponent as te, resolveDirective as ye, withDirectives as be, resolveDynamicComponent as C, normalizeClass as K, withCtx as T, createElementBlock as E, renderSlot as w, createCommentVNode as Y, normalizeStyle as ge, Fragment as ze, renderList as Se, mergeProps as ie, toHandlers as _e, createVNode as $e, normalizeProps as we, guardReactiveProps as Ie, h as Oe, reactive as Te } from "vue";
const se = {
  itemsLimit: 1e3
};
function Re() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var s = e.indexOf("rv:");
    return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10);
  }
  var r = e.indexOf("Edge/");
  return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
let M;
function F() {
  F.init || (F.init = !0, M = Re() !== -1);
}
var U = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    F(), ee(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", M && this.$el.appendChild(e), e.data = "about:blank", M || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!M && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const ke = /* @__PURE__ */ me("data-v-b329ee4c");
ue("data-v-b329ee4c");
const De = {
  class: "resize-observer",
  tabindex: "-1"
};
fe();
const Ve = /* @__PURE__ */ ke((e, t, i, s, r, a) => ($(), D("div", De)));
U.render = Ve;
U.__scopeId = "data-v-b329ee4c";
U.__file = "src/components/ResizeObserver.vue";
function P(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? P = function(t) {
    return typeof t;
  } : P = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, P(e);
}
function Ae(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function xe(e, t, i) {
  return t && X(e.prototype, t), i && X(e, i), e;
}
function G(e) {
  return Me(e) || Pe(e) || Ue(e) || Ce();
}
function Me(e) {
  if (Array.isArray(e))
    return N(e);
}
function Pe(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Ue(e, t) {
  if (e) {
    if (typeof e == "string")
      return N(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return N(e, t);
  }
}
function N(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, s = new Array(t); i < t; i++)
    s[i] = e[i];
  return s;
}
function Ce() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function He(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, r, a, l = function(n) {
    for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), z = 1; z < h; z++)
      p[z - 1] = arguments[z];
    if (a = p, !(s && n === r)) {
      var I = i.leading;
      typeof I == "function" && (I = I(n, r)), (!s || n !== r) && I && e.apply(void 0, [n].concat(G(a))), r = n, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [n].concat(G(a))), s = 0;
      }, t);
    }
  };
  return l._clear = function() {
    clearTimeout(s), s = null;
  }, l;
}
function re(e, t) {
  if (e === t)
    return !0;
  if (P(e) === "object") {
    for (var i in e)
      if (!re(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var Fe = /* @__PURE__ */ function() {
  function e(t, i, s) {
    Ae(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, s);
  }
  return xe(e, [{
    key: "createObserver",
    value: function(i, s) {
      var r = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Ee(i), this.callback = function(o, n) {
          r.options.callback(o, n), o && r.options.once && (r.frozen = !0, r.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, l = a.leading;
          this.callback = He(this.callback, this.options.throttle, {
            leading: function(n) {
              return l === "both" || l === "visible" && n || l === "hidden" && !n;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(o) {
          var n = o[0];
          if (o.length > 1) {
            var h = o.find(function(z) {
              return z.isIntersecting;
            });
            h && (n = h);
          }
          if (r.callback) {
            var p = n.isIntersecting && n.intersectionRatio >= r.threshold;
            if (p === r.oldResult)
              return;
            r.oldResult = p, r.callback(p, n);
          }
        }, this.options.intersection), ee(function() {
          r.observer && r.observer.observe(r.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
}();
function ne(e, t, i) {
  var s = t.value;
  if (s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var r = new Fe(e, s, i);
      e._vue_visibilityState = r;
    }
}
function Ne(e, t, i) {
  var s = t.value, r = t.oldValue;
  if (!re(s, r)) {
    var a = e._vue_visibilityState;
    if (!s) {
      le(e);
      return;
    }
    a ? a.createObserver(s, i) : ne(e, {
      value: s
    }, i);
  }
}
function le(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Be = {
  beforeMount: ne,
  updated: Ne,
  unmounted: le
};
const Le = /(auto|scroll)/;
function oe(e, t) {
  return e.parentNode === null ? t : oe(e.parentNode, t.concat([e]));
}
const H = function(e, t) {
  return getComputedStyle(e, null).getPropertyValue(t);
}, je = function(e) {
  return H(e, "overflow") + H(e, "overflow-y") + H(e, "overflow-x");
}, We = function(e) {
  return Le.test(je(e));
};
function J(e) {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return;
  const t = oe(e.parentNode, []);
  for (let i = 0; i < t.length; i += 1)
    if (We(t[i]))
      return t[i];
  return document.scrollingElement || document.documentElement;
}
const ae = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function ce() {
  return this.items.length && typeof this.items[0] != "object";
}
let B = !1;
if (typeof window < "u") {
  B = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        B = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
const de = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, r] of t)
    i[s] = r;
  return i;
};
let qe = 0;
const Ke = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: U
  },
  directives: {
    ObserveVisibility: Be
  },
  props: {
    ...ae,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    updateInterval: {
      type: Number,
      default: 0
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update",
    "scroll-start",
    "scroll-end"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, i = this.sizeField, s = this.minItemSize;
        let r = 1e4, a = 0, l;
        for (let o = 0, n = t.length; o < n; o++)
          l = t[o][i] || s, l < r && (r = l), a += l, e[o] = { accumulator: a, size: l };
        return this.$_computedMinItemSize = r, e;
      }
      return [];
    },
    simpleArray: ce,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, i = {};
      for (let s = 0, r = t.length; s < r; s++)
        i[t[s][e]] = s;
      return i;
    }
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" && this.$nextTick(() => {
      this.scrollToPosition(e);
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, i, s, r) {
      const a = pe({
        id: qe++,
        index: t,
        used: !0,
        key: s,
        type: r
      }), l = ve({
        item: i,
        position: 0,
        nr: a
      });
      return e.push(l), l;
    },
    unuseView(e, t = !1) {
      const i = this.$_unusedViews, s = e.nr.type;
      let r = i.get(s);
      r || (r = [], i.set(s, r)), r.push(e), t || (e.nr.used = !1, e.position = -9999);
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      if (!this.$_scrollDirty) {
        if (this.$_scrollDirty = !0, this.$_updateTimeout)
          return;
        const t = () => requestAnimationFrame(() => {
          this.$_scrollDirty = !1;
          const { continuous: i } = this.updateVisibleItems(!1, !0);
          i || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100));
        });
        t(), this.updateInterval && (this.$_updateTimeout = setTimeout(() => {
          this.$_updateTimeout = 0, this.$_scrollDirty && t();
        }, this.updateInterval));
      }
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const i = this.itemSize, s = this.gridItems || 1, r = this.itemSecondarySize || i, a = this.$_computedMinItemSize, l = this.typeField, o = this.simpleArray ? null : this.keyField, n = this.items, h = n.length, p = this.sizes, z = this.$_views, I = this.$_unusedViews, V = this.pool, he = this.itemIndexByKey;
      let v, u, R, g, S;
      if (!h)
        v = u = g = S = R = 0;
      else if (this.$_prerender)
        v = g = 0, u = S = Math.min(this.prerender, n.length), R = null;
      else {
        const c = this.getScroll();
        if (t) {
          let m = c.start - this.$_lastUpdateScrollPosition;
          if (m < 0 && (m = -m), i === null && m < a || m < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = c.start;
        const y = this.buffer;
        c.start -= y, c.end += y;
        let f = 0;
        if (this.$refs.before && (f = this.$refs.before.scrollHeight, c.start -= f), this.$refs.after) {
          const m = this.$refs.after.scrollHeight;
          c.end += m;
        }
        if (i === null) {
          let m, k = 0, W = h - 1, b = ~~(h / 2), q;
          do
            q = b, m = p[b].accumulator, m < c.start ? k = b : b < h - 1 && p[b + 1].accumulator > c.start && (W = b), b = ~~((k + W) / 2);
          while (b !== q);
          for (b < 0 && (b = 0), v = b, R = p[h - 1].accumulator, u = b; u < h && p[u].accumulator < c.end; u++)
            ;
          for (u === -1 ? u = n.length - 1 : (u++, u > h && (u = h)), g = v; g < h && f + p[g].accumulator < c.start; g++)
            ;
          for (S = g; S < h && f + p[S].accumulator < c.end; S++)
            ;
        } else {
          v = ~~(c.start / i * s);
          const m = v % s;
          v -= m, u = Math.ceil(c.end / i * s), g = Math.max(0, Math.floor((c.start - f) / i * s)), S = Math.floor((c.end - f) / i * s), v < 0 && (v = 0), u > h && (u = h), g < 0 && (g = 0), S > h && (S = h), R = Math.ceil(h / s) * i;
        }
      }
      u - v > se.itemsLimit && this.itemsLimitError(), this.totalSize = R;
      let d;
      const A = v <= this.$_endIndex && u >= this.$_startIndex;
      if (A)
        for (let c = 0, y = V.length; c < y; c++)
          d = V[c], d.nr.used && (e && (d.nr.index = he[d.item[o]]), (d.nr.index == null || d.nr.index < v || d.nr.index >= u) && this.unuseView(d));
      const j = A ? null : /* @__PURE__ */ new Map();
      let O, _, x;
      for (let c = v; c < u; c++) {
        O = n[c];
        const y = o ? O[o] : O;
        if (y == null)
          throw new Error(`Key is ${y} on item (keyField is '${o}')`);
        if (d = z.get(y), !i && !p[c].size) {
          d && this.unuseView(d);
          continue;
        }
        _ = O[l];
        let f = I.get(_), m = !1;
        if (!d)
          A ? f && f.length ? d = f.pop() : d = this.addView(V, c, O, y, _) : (x = j.get(_) || 0, (!f || x >= f.length) && (d = this.addView(V, c, O, y, _), this.unuseView(d, !0), f = I.get(_)), d = f[x], j.set(_, x + 1)), z.delete(d.nr.key), d.nr.used = !0, d.nr.index = c, d.nr.key = y, d.nr.type = _, z.set(y, d), m = !0;
        else if (!d.nr.used && (d.nr.used = !0, m = !0, f)) {
          const k = f.indexOf(d);
          k !== -1 && f.splice(k, 1);
        }
        d.item = O, m && (c === n.length - 1 && this.$emit("scroll-end"), c === 0 && this.$emit("scroll-start")), i === null ? (d.position = p[c - 1].accumulator, d.offset = 0) : (d.position = Math.floor(c / s) * i, d.offset = c % s * r);
      }
      return this.$_startIndex = v, this.$_endIndex = u, this.emitUpdate && this.$emit("update", v, u, g, S), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: A
      };
    },
    getListenerTarget() {
      let e = J(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, i = t === "vertical";
      let s;
      if (this.pageMode) {
        const r = e.getBoundingClientRect(), a = i ? r.height : r.width;
        let l = -(i ? r.top : r.left), o = i ? window.innerHeight : window.innerWidth;
        l < 0 && (o += l, l = 0), l + o > a && (o = a - l), s = {
          start: l,
          end: l + o
        };
      } else
        i ? s = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : s = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return s;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, B ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      const i = this.gridItems || 1;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = Math.floor(e / i) * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t = this.direction === "vertical" ? { scroll: "scrollTop", start: "top" } : { scroll: "scrollLeft", start: "left" };
      let i, s, r;
      if (this.pageMode) {
        const a = J(this.$el), l = a.tagName === "HTML" ? 0 : a[t.scroll], o = a.getBoundingClientRect(), h = this.$el.getBoundingClientRect()[t.start] - o[t.start];
        i = a, s = t.scroll, r = e + l + h;
      } else
        i = this.$el, s = t.scroll, r = e;
      i[s] = r;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    }
  }
}, Ye = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, Xe = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function Ge(e, t, i, s, r, a) {
  const l = te("ResizeObserver"), o = ye("observe-visibility");
  return be(($(), D(C(i.tag), {
    class: K(["vue-recycle-scroller", {
      ready: r.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }]),
    onScrollPassive: a.handleScroll
  }, {
    default: T(() => [
      e.$slots.before ? ($(), E("div", Ye, [
        w(e.$slots, "before")
      ], 512)) : Y("", !0),
      ($(), D(C(i.listTag), {
        ref: "wrapper",
        style: ge({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: r.totalSize + "px" }),
        class: K(["vue-recycle-scroller__item-wrapper", i.listClass])
      }, {
        default: T(() => [
          ($(!0), E(ze, null, Se(r.pool, (n) => ($(), D(C(i.itemTag), ie({
            key: n.nr.id,
            style: r.ready ? {
              transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${n.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${n.offset}px)`,
              width: i.gridItems ? `${e.direction === "vertical" && i.itemSecondarySize || i.itemSize}px` : void 0,
              height: i.gridItems ? `${e.direction === "horizontal" && i.itemSecondarySize || i.itemSize}px` : void 0
            } : null,
            class: ["vue-recycle-scroller__item-view", [
              i.itemClass,
              {
                hover: !i.skipHover && r.hoverKey === n.nr.key
              }
            ]]
          }, _e(i.skipHover ? {} : {
            mouseenter: () => {
              r.hoverKey = n.nr.key;
            },
            mouseleave: () => {
              r.hoverKey = null;
            }
          })), {
            default: T(() => [
              w(e.$slots, "default", {
                item: n.item,
                index: n.nr.index,
                active: n.nr.used
              })
            ]),
            _: 2
          }, 1040, ["style", "class"]))), 128)),
          w(e.$slots, "empty")
        ]),
        _: 3
      }, 8, ["style", "class"])),
      e.$slots.after ? ($(), E("div", Xe, [
        w(e.$slots, "after")
      ], 512)) : Y("", !0),
      $e(l, { onNotify: a.handleResize }, null, 8, ["onNotify"])
    ]),
    _: 3
  }, 40, ["class", "onScrollPassive"])), [
    [o, a.handleVisibilityChange]
  ]);
}
const L = /* @__PURE__ */ de(Ke, [["render", Ge]]);
function Je(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, i) {
    var s = e.get(t);
    s && s.push(i) || e.set(t, [i]);
  }, off: function(t, i) {
    var s = e.get(t);
    s && s.splice(s.indexOf(i) >>> 0, 1);
  }, emit: function(t, i) {
    (e.get(t) || []).slice().map(function(s) {
      s(i);
    }), (e.get("*") || []).slice().map(function(s) {
      s(t, i);
    });
  } };
}
const Qe = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: L
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (Array.isArray(e)) {
          for (const t of e)
            if (t.target && t.target.$_vs_onResize) {
              let i, s;
              if (t.borderBoxSize) {
                const r = t.borderBoxSize[0];
                i = r.inlineSize, s = r.blockSize;
              } else
                i = t.contentRect.width, s = t.contentRect.height;
              t.target.$_vs_onResize(t.target.$_vs_id, i, s);
            }
        }
      });
    })), {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: !1,
  props: {
    ...ae,
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  },
  emits: [
    "resize",
    "visible"
  ],
  data() {
    return {
      vscrollData: {
        active: !0,
        sizes: {},
        keyField: this.keyField,
        simpleArray: !1
      }
    };
  },
  computed: {
    simpleArray: ce,
    itemsWithSize() {
      const e = [], { items: t, keyField: i, simpleArray: s } = this, r = this.vscrollData.sizes, a = t.length;
      for (let l = 0; l < a; l++) {
        const o = t[l], n = s ? l : o[i];
        let h = r[n];
        typeof h > "u" && !this.$_undefinedMap[n] && (h = 0), e.push({
          item: o,
          id: n,
          size: h
        });
      }
      return e;
    }
  },
  watch: {
    items() {
      this.forceUpdate();
    },
    simpleArray: {
      handler(e) {
        this.vscrollData.simpleArray = e;
      },
      immediate: !0
    },
    direction(e) {
      this.forceUpdate(!0);
    },
    itemsWithSize(e, t) {
      const i = this.$el.scrollTop;
      let s = 0, r = 0;
      const a = Math.min(e.length, t.length);
      for (let o = 0; o < a && !(s >= i); o++)
        s += t[o].size || this.minItemSize, r += e[o].size || this.minItemSize;
      const l = r - s;
      l !== 0 && (this.$el.scrollTop += l);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = Je();
  },
  activated() {
    this.vscrollData.active = !0;
  },
  deactivated() {
    this.vscrollData.active = !1;
  },
  unmounted() {
    this.$_events.all.clear();
  },
  methods: {
    onScrollerResize() {
      this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible() {
      this.$_events.emit("vscroll:update", { force: !1 }), this.$emit("visible");
    },
    forceUpdate(e = !1) {
      (e || this.simpleArray) && (this.vscrollData.sizes = {}), this.$_events.emit("vscroll:update", { force: !0 });
    },
    scrollToItem(e) {
      const t = this.$refs.scroller;
      t && t.scrollToItem(e);
    },
    getItemSize(e, t = void 0) {
      const i = this.simpleArray ? t ?? this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[i] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom)
        return;
      this.$_scrollingToBottom = !0;
      const e = this.$el;
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight + 5e3;
        const t = () => {
          e.scrollTop = e.scrollHeight + 5e3, requestAnimationFrame(() => {
            e.scrollTop = e.scrollHeight + 5e3, this.$_undefinedSizes === 0 ? this.$_scrollingToBottom = !1 : requestAnimationFrame(t);
          });
        };
        requestAnimationFrame(t);
      });
    }
  }
};
function Ze(e, t, i, s, r, a) {
  const l = te("RecycleScroller");
  return $(), D(l, ie({
    ref: "scroller",
    items: a.itemsWithSize,
    "min-item-size": i.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: a.onScrollerResize,
    onVisible: a.onScrollerVisible
  }), {
    default: T(({ item: o, index: n, active: h }) => [
      w(e.$slots, "default", we(Ie({
        item: o.item,
        index: n,
        active: h,
        itemWithSize: o
      })))
    ]),
    before: T(() => [
      w(e.$slots, "before")
    ]),
    after: T(() => [
      w(e.$slots, "after")
    ]),
    empty: T(() => [
      w(e.$slots, "empty")
    ]),
    _: 3
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
const Q = /* @__PURE__ */ de(Qe, [["render", Ze]]), Z = {
  name: "DynamicScrollerItem",
  inject: [
    "vscrollData",
    "vscrollParent",
    "vscrollResizeObserver"
  ],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: !0
    },
    index: {
      type: Number,
      default: void 0
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [
    "resize"
  ],
  computed: {
    id() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.vscrollData.keyField in this.item)
        return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id(e, t) {
      if (this.$el.$_vs_id = this.id, this.size || this.onDataUpdate(), this.$_sizeObserved) {
        const i = this.vscrollData.sizes[t], s = this.vscrollData.sizes[e];
        i != null && i !== s && this.applySize(i);
      }
    },
    finalActive(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created() {
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      for (const e in this.sizeDependencies)
        this.$watch(() => this.sizeDependencies[e], this.onDataUpdate);
      this.vscrollParent.$_events.on("vscroll:update", this.onVscrollUpdate);
    }
  },
  mounted() {
    this.finalActive && (this.updateSize(), this.observeSize());
  },
  beforeUnmount() {
    this.vscrollParent.$_events.off("vscroll:update", this.onVscrollUpdate), this.unobserveSize();
  },
  methods: {
    updateSize() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData() {
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", () => {
        this.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate({ force: e }) {
      !this.finalActive && e && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || e || !this.size) && this.updateSize();
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(e) {
      this.$nextTick(() => {
        if (this.id === e) {
          const t = this.$el.offsetWidth, i = this.$el.offsetHeight;
          this.applyWidthHeight(t, i);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applyWidthHeight(e, t) {
      const i = ~~(this.vscrollParent.direction === "vertical" ? t : e);
      i && this.size !== i && this.applySize(i);
    },
    applySize(e) {
      this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.vscrollData.sizes[this.id] = e, this.emitResize && this.$emit("resize", this.id);
    },
    observeSize() {
      this.vscrollResizeObserver && (this.$_sizeObserved || (this.vscrollResizeObserver.observe(this.$el), this.$el.$_vs_id = this.id, this.$el.$_vs_onResize = this.onResize, this.$_sizeObserved = !0));
    },
    unobserveSize() {
      this.vscrollResizeObserver && this.$_sizeObserved && (this.vscrollResizeObserver.unobserve(this.$el), this.$el.$_vs_onResize = void 0, this.$_sizeObserved = !1);
    },
    onResize(e, t, i) {
      this.id === e && this.applyWidthHeight(t, i);
    }
  },
  render() {
    return Oe(this.tag, this.$slots.default());
  }
};
function it({
  idProp: e = (t) => t.item.id
} = {}) {
  const t = Te({});
  return {
    data() {
      return {
        idState: null
      };
    },
    created() {
      this.$_id = null, typeof e == "function" ? this.$_getId = () => e.call(this, this) : this.$_getId = () => this[e], this.$watch(this.$_getId, {
        handler(i) {
          this.$nextTick(() => {
            this.$_id = i;
          });
        },
        immediate: !0
      }), this.$_updateIdState();
    },
    beforeUpdate() {
      this.$_updateIdState();
    },
    methods: {
      /**
       * Initialize an idState
       * @param {number|string} id Unique id for the data
       */
      $_idStateInit(i) {
        const s = this.$options.idState;
        if (typeof s == "function") {
          const r = s.call(this, this);
          return t[i] = r, this.$_id = i, r;
        } else
          throw new Error("[mixin IdState] Missing `idState` function on component definition.");
      },
      /**
       * Ensure idState is created and up-to-date
       */
      $_updateIdState() {
        const i = this.$_getId();
        i == null && console.warn(`No id found for IdState with idProp: '${e}'.`), i !== this.$_id && (t[i] || this.$_idStateInit(i), this.idState = t[i]);
      }
    }
  };
}
function et(e, t) {
  e.component(`${t}recycle-scroller`, L), e.component(`${t}RecycleScroller`, L), e.component(`${t}dynamic-scroller`, Q), e.component(`${t}DynamicScroller`, Q), e.component(`${t}dynamic-scroller-item`, Z), e.component(`${t}DynamicScrollerItem`, Z);
}
const st = {
  // eslint-disable-next-line no-undef
  install(e, t) {
    const i = Object.assign({}, {
      installComponents: !0,
      componentsPrefix: ""
    }, t);
    for (const s in i)
      typeof i[s] < "u" && (se[s] = i[s]);
    i.installComponents && et(e, i.componentsPrefix);
  }
};
export {
  Q as DynamicScroller,
  Z as DynamicScrollerItem,
  it as IdState,
  L as RecycleScroller,
  st as default
};
