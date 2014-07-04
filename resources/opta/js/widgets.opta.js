// Opta Widgets v2.0.56236 - Licenses ./licenses.txt
/*
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
(function (a, c) {
    function b() {
        var a = D.elements;
        return"string" == typeof a ? a.split(" ") : a
    }

    function g(a) {
        var c = C[a[y]];
        c || (c = {}, w++, a[y] = w, C[w] = c);
        return c
    }

    function f(a, b, f) {
        b || (b = c);
        if (B)return b.createElement(a);
        f || (f = g(b));
        b = f.cache[a] ? f.cache[a].cloneNode() : v.test(a) ? (f.cache[a] = f.createElem(a)).cloneNode() : f.createElem(a);
        return b.canHaveChildren && !t.test(a) ? f.frag.appendChild(b) : b
    }

    function n(a, c) {
        c.cache || (c.cache = {}, c.createElem = a.createElement, c.createFrag = a.createDocumentFragment, c.frag = c.createFrag());
        a.createElement = function (b) {
            return D.shivMethods ? f(b, a, c) : c.createElem(b)
        };
        a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + b().join().replace(/[\w\-]+/g, function (a) {
            c.createElem(a);
            c.frag.createElement(a);
            return'c("' + a + '")'
        }) + ");return n}")(D, c.frag)
    }

    function l(a) {
        a || (a = c);
        var b = g(a);
        B || n(a, b);
        return a
    }

    var s = a.optahtml5 || {}, t = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        y = "_optahtml5shiv", w = 0, C = {}, B;
    (function () {
        try {
            var a = c.createElement("a");
            a.innerHTML = "<xyz></xyz>";
            var b;
            if (!(b = 1 == a.childNodes.length)) {
                c.createElement("a");
                var f = c.createDocumentFragment();
                b = "undefined" == typeof f.cloneNode || "undefined" == typeof f.createDocumentFragment || "undefined" == typeof f.createElement
            }
            B = b
        } catch (g) {
            B = !0
        }
    })();
    var D = {elements: s.elements || "opta", version: "3.6.2", shivCSS: !1 !== s.shivCSS, supportsUnknownElements: B, shivMethods: !1 !== s.shivMethods, type: "default", shivDocument: l, createElement: f,
        createDocumentFragment: function (a, f) {
            a || (a = c);
            if (B)return a.createDocumentFragment();
            f = f || g(a);
            for (var n = f.frag.cloneNode(), l = 0, y = b(), w = y.length; l < w; l++)n.createElement(y[l]);
            return n
        }};
    a.optahtml5 = D;
    l(c)
})(this, document);
(function (a, c) {
    function b(d) {
        var A = d.length, a = k.type(d);
        return k.isWindow(d) ? !1 : 1 === d.nodeType && A ? !0 : "array" === a || "function" !== a && (0 === A || "number" === typeof A && 0 < A && A - 1 in d)
    }

    function g(d) {
        var a = Va[d] = {};
        k.each(d.match(ga) || [], function (d, k) {
            a[k] = !0
        });
        return a
    }

    function f(d, a, p, F) {
        if (k.acceptData(d)) {
            var e = k.expando, b = d.nodeType, f = b ? k.cache : d, m = b ? d[e] : d[e] && e;
            if (m && f[m] && (F || f[m].data) || p !== c || "string" !== typeof a) {
                m || (m = b ? d[e] = da.pop() || k.guid++ : e);
                f[m] || (f[m] = b ? {} : {toJSON: k.noop});
                if ("object" === typeof a ||
                    "function" === typeof a)F ? f[m] = k.extend(f[m], a) : f[m].data = k.extend(f[m].data, a);
                d = f[m];
                F || (d.data || (d.data = {}), d = d.data);
                p !== c && (d[k.camelCase(a)] = p);
                "string" === typeof a ? (p = d[a], null == p && (p = d[k.camelCase(a)])) : p = d;
                return p
            }
        }
    }

    function n(d, a, p) {
        if (k.acceptData(d)) {
            var F, e, c = d.nodeType, b = c ? k.cache : d, f = c ? d[k.expando] : k.expando;
            if (b[f]) {
                if (a && (F = p ? b[f] : b[f].data)) {
                    k.isArray(a) ? a = a.concat(k.map(a, k.camelCase)) : a in F ? a = [a] : (a = k.camelCase(a), a = a in F ? [a] : a.split(" "));
                    for (e = a.length; e--;)delete F[a[e]];
                    if (p ?
                        !s(F) : !k.isEmptyObject(F))return
                }
                if (!p && (delete b[f].data, !s(b[f])))return;
                c ? k.cleanData([d], !0) : k.support.deleteExpando || b != b.window ? delete b[f] : b[f] = null
            }
        }
    }

    function l(d, a, p) {
        if (p === c && 1 === d.nodeType)if (p = "data-" + a.replace(vb, "-$1").toLowerCase(), p = d.getAttribute(p), "string" === typeof p) {
            try {
                p = "true" === p ? !0 : "false" === p ? !1 : "null" === p ? null : +p + "" === p ? +p : wb.test(p) ? k.parseJSON(p) : p
            } catch (F) {
            }
            k.data(d, a, p)
        } else p = c;
        return p
    }

    function s(d) {
        for (var a in d)if (("data" !== a || !k.isEmptyObject(d[a])) && "toJSON" !==
            a)return!1;
        return!0
    }

    function t() {
        return!0
    }

    function v() {
        return!1
    }

    function y() {
        try {
            return I.activeElement
        } catch (d) {
        }
    }

    function w(d, a) {
        do d = d[a]; while (d && 1 !== d.nodeType);
        return d
    }

    function C(d, a, p) {
        if (k.isFunction(a))return k.grep(d, function (d, k) {
            return!!a.call(d, k, d) !== p
        });
        if (a.nodeType)return k.grep(d, function (d) {
            return d === a !== p
        });
        if ("string" === typeof a) {
            if (xb.test(a))return k.filter(a, d, p);
            a = k.filter(a, d)
        }
        return k.grep(d, function (d) {
            return 0 <= k.inArray(d, a) !== p
        })
    }

    function B(d) {
        var a = Wa.split("|");
        d = d.createDocumentFragment();
        if (d.createElement)for (; a.length;)d.createElement(a.pop());
        return d
    }

    function D(d, a) {
        return k.nodeName(d, "table") && k.nodeName(1 === a.nodeType ? a : a.firstChild, "tr") ? d.getElementsByTagName("tbody")[0] || d.appendChild(d.ownerDocument.createElement("tbody")) : d
    }

    function m(d) {
        d.type = (null !== k.find.attr(d, "type")) + "/" + d.type;
        return d
    }

    function r(d) {
        var a = yb.exec(d.type);
        a ? d.type = a[1] : d.removeAttribute("type");
        return d
    }

    function q(d, a) {
        for (var p, F = 0; null != (p = d[F]); F++)k._data(p, "globalEval",
            !a || k._data(a[F], "globalEval"))
    }

    function E(d, a) {
        if (1 === a.nodeType && k.hasData(d)) {
            var p, F, e;
            F = k._data(d);
            var c = k._data(a, F), b = F.events;
            if (b)for (p in delete c.handle, c.events = {}, b)for (F = 0, e = b[p].length; F < e; F++)k.event.add(a, p, b[p][F]);
            c.data && (c.data = k.extend({}, c.data))
        }
    }

    function G(d, a) {
        var p, F, e = 0, b = typeof d.getElementsByTagName !== Z ? d.getElementsByTagName(a || "*") : typeof d.querySelectorAll !== Z ? d.querySelectorAll(a || "*") : c;
        if (!b)for (b = [], p = d.childNodes || d; null != (F = p[e]); e++)!a || k.nodeName(F, a) ? b.push(F) :
            k.merge(b, G(F, a));
        return a === c || a && k.nodeName(d, a) ? k.merge([d], b) : b
    }

    function z(d) {
        Ha.test(d.type) && (d.defaultChecked = d.checked)
    }

    function e(d, a) {
        if (a in d)return a;
        for (var p = a.charAt(0).toUpperCase() + a.slice(1), k = a, e = Xa.length; e--;)if (a = Xa[e] + p, a in d)return a;
        return k
    }

    function x(d, a) {
        d = a || d;
        return"none" === k.css(d, "display") || !k.contains(d.ownerDocument, d)
    }

    function H(d, a) {
        for (var p, F, e, c = [], b = 0, f = d.length; b < f; b++)F = d[b], F.style && (c[b] = k._data(F, "olddisplay"), p = F.style.display, a ? (c[b] || "none" !== p ||
            (F.style.display = ""), "" === F.style.display && x(F) && (c[b] = k._data(F, "olddisplay", R(F.nodeName)))) : c[b] || (e = x(F), (p && "none" !== p || !e) && k._data(F, "olddisplay", e ? p : k.css(F, "display"))));
        for (b = 0; b < f; b++)F = d[b], !F.style || a && "none" !== F.style.display && "" !== F.style.display || (F.style.display = a ? c[b] || "" : "none");
        return d
    }

    function O(d, a, p) {
        return(d = zb.exec(a)) ? Math.max(0, d[1] - (p || 0)) + (d[2] || "px") : a
    }

    function T(d, a, p, F, e) {
        a = p === (F ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var c = 0; 4 > a; a += 2)"margin" === p && (c += k.css(d,
            p + ma[a], !0, e)), F ? ("content" === p && (c -= k.css(d, "padding" + ma[a], !0, e)), "margin" !== p && (c -= k.css(d, "border" + ma[a] + "Width", !0, e))) : (c += k.css(d, "padding" + ma[a], !0, e), "padding" !== p && (c += k.css(d, "border" + ma[a] + "Width", !0, e)));
        return c
    }

    function K(d, a, p) {
        var F = !0, c = "width" === a ? d.offsetWidth : d.offsetHeight, e = ha(d), b = k.support.boxSizing && "border-box" === k.css(d, "boxSizing", !1, e);
        if (0 >= c || null == c) {
            c = ea(d, a, e);
            if (0 > c || null == c)c = d.style[a];
            if (Ca.test(c))return c;
            F = b && (k.support.boxSizingReliable || c === d.style[a]);
            c = parseFloat(c) || 0
        }
        return c + T(d, a, p || (b ? "border" : "content"), F, e) + "px"
    }

    function R(d) {
        var a = I, p = Ya[d];
        p || (p = L(d, a), "none" !== p && p || (ya = (ya || k("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(a.documentElement), a = (ya[0].contentWindow || ya[0].contentDocument).document, a.write("<!doctype html><html><body>"), a.close(), p = L(d, a), ya.detach()), Ya[d] = p);
        return p
    }

    function L(d, a) {
        var p = k(a.createElement(d)).appendTo(a.body), c = k.css(p[0], "display");
        p.remove();
        return c
    }

    function na(d, a, p, c) {
        var e;
        if (k.isArray(a))k.each(a, function (a, A) {
            p || Ab.test(d) ? c(d, A) : na(d + "[" + ("object" === typeof A ? a : "") + "]", A, p, c)
        }); else if (p || "object" !== k.type(a))c(d, a); else for (e in a)na(d + "[" + e + "]", a[e], p, c)
    }

    function ba(d) {
        return function (a, p) {
            "string" !== typeof a && (p = a, a = "*");
            var c, e = 0, b = a.toLowerCase().match(ga) || [];
            if (k.isFunction(p))for (; c = b[e++];)"+" === c[0] ? (c = c.slice(1) || "*", (d[c] = d[c] || []).unshift(p)) : (d[c] = d[c] || []).push(p)
        }
    }

    function ca(d, a, p, c) {
        function e(m) {
            var g;
            b[m] = !0;
            k.each(d[m] || [], function (d, k) {
                var m = k(a, p, c);
                if ("string" === typeof m && !f && !b[m])return a.dataTypes.unshift(m), e(m), !1;
                if (f)return!(g = m)
            });
            return g
        }

        var b = {}, f = d === Ia;
        return e(a.dataTypes[0]) || !b["*"] && e("*")
    }

    function fa(d, a) {
        var p, e, b = k.ajaxSettings.flatOptions || {};
        for (e in a)a[e] !== c && ((b[e] ? d : p || (p = {}))[e] = a[e]);
        p && k.extend(!0, d, p);
        return d
    }

    function X() {
        try {
            return new a.XMLHttpRequest
        } catch (d) {
        }
    }

    function u() {
        setTimeout(function () {
            ua = c
        });
        return ua = k.now()
    }

    function J(d, a, k) {
        for (var c, e = (za[a] || []).concat(za["*"]),
                 b = 0, f = e.length; b < f; b++)if (c = e[b].call(k, a, d))return c
    }

    function M(d, a, p) {
        var c, e = 0, b = Da.length, f = k.Deferred().always(function () {
            delete m.elem
        }), m = function () {
            if (c)return!1;
            for (var a = ua || u(), a = Math.max(0, g.startTime + g.duration - a), k = 1 - (a / g.duration || 0), A = 0, p = g.tweens.length; A < p; A++)g.tweens[A].run(k);
            f.notifyWith(d, [g, k, a]);
            if (1 > k && p)return a;
            f.resolveWith(d, [g]);
            return!1
        }, g = f.promise({elem: d, props: k.extend({}, a), opts: k.extend(!0, {specialEasing: {}}, p), originalProperties: a, originalOptions: p, startTime: ua ||
            u(), duration: p.duration, tweens: [], createTween: function (a, A) {
            var p = k.Tween(d, g.opts, a, A, g.opts.specialEasing[a] || g.opts.easing);
            g.tweens.push(p);
            return p
        }, stop: function (a) {
            var k = 0, A = a ? g.tweens.length : 0;
            if (c)return this;
            for (c = !0; k < A; k++)g.tweens[k].run(1);
            a ? f.resolveWith(d, [g, a]) : f.rejectWith(d, [g, a]);
            return this
        }});
        p = g.props;
        for ($(p, g.opts.specialEasing); e < b; e++)if (a = Da[e].call(g, d, p, g.opts))return a;
        k.map(p, J, g);
        k.isFunction(g.opts.start) && g.opts.start.call(d, g);
        k.fx.timer(k.extend(m, {elem: d, anim: g,
            queue: g.opts.queue}));
        return g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }

    function $(d, a) {
        var p, c, e, b, f;
        for (p in d)if (c = k.camelCase(p), e = a[c], b = d[p], k.isArray(b) && (e = b[1], b = d[p] = b[0]), p !== c && (d[c] = b, delete d[p]), (f = k.cssHooks[c]) && "expand"in f)for (p in b = f.expand(b), delete d[c], b)p in d || (d[p] = b[p], a[p] = e); else a[c] = e
    }

    function Q(d, a, k, c, e) {
        return new Q.prototype.init(d, a, k, c, e)
    }

    function U(d, a) {
        var k, c = {height: d}, e = 0;
        for (a = a ? 1 : 0; 4 > e; e += 2 - a)k =
            ma[e], c["margin" + k] = c["padding" + k] = d;
        a && (c.opacity = c.width = d);
        return c
    }

    function V(d) {
        return k.isWindow(d) ? d : 9 === d.nodeType ? d.defaultView || d.parentWindow : !1
    }

    var P, aa, Z = typeof c, Y = a.location, I = a.document, qa = I.documentElement, N = a.jQuery, ra = a.$, ia = {}, da = [], Za = da.concat, Ja = da.push, sa = da.slice, $a = da.indexOf, Bb = ia.toString, va = ia.hasOwnProperty, Ka = "1.10.2".trim, k = function (d, a) {
        return new k.fn.init(d, a, aa)
    }, Ea = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ga = /\S+/g, Cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Db =
        /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ab = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Eb = /^[\],:{}\s]*$/, Fb = /(?:^|:|,)(?:\s*\[)+/g, Gb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Hb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, Ib = /^-ms-/, Jb = /-([\da-z])/gi, Kb = function (d, a) {
        return a.toUpperCase()
    }, W = function (d) {
        if (I.addEventListener || "load" === d.type || "complete" === I.readyState)bb(), k.ready()
    }, bb = function () {
        I.addEventListener ? (I.removeEventListener("DOMContentLoaded", W, !1), a.removeEventListener("load", W,
            !1)) : (I.detachEvent("onreadystatechange", W), a.detachEvent("onload", W))
    };
    k.fn = k.prototype = {jquery: "1.10.2", constructor: k, init: function (d, a, p) {
        var e;
        if (!d)return this;
        if ("string" === typeof d) {
            e = "<" === d.charAt(0) && ">" === d.charAt(d.length - 1) && 3 <= d.length ? [null, d, null] : Db.exec(d);
            if (!e || !e[1] && a)return!a || a.jquery ? (a || p).find(d) : this.constructor(a).find(d);
            if (e[1]) {
                if (a = a instanceof k ? a[0] : a, k.merge(this, k.parseHTML(e[1], a && a.nodeType ? a.ownerDocument || a : I, !0)), ab.test(e[1]) && k.isPlainObject(a))for (e in a)if (k.isFunction(this[e]))this[e](a[e]);
                else this.attr(e, a[e])
            } else {
                if ((a = I.getElementById(e[2])) && a.parentNode) {
                    if (a.id !== e[2])return p.find(d);
                    this.length = 1;
                    this[0] = a
                }
                this.context = I;
                this.selector = d
            }
            return this
        }
        if (d.nodeType)return this.context = this[0] = d, this.length = 1, this;
        if (k.isFunction(d))return p.ready(d);
        d.selector !== c && (this.selector = d.selector, this.context = d.context);
        return k.makeArray(d, this)
    }, selector: "", length: 0, toArray: function () {
        return sa.call(this)
    }, get: function (d) {
        return null == d ? this.toArray() : 0 > d ? this[this.length + d] : this[d]
    },
        pushStack: function (d) {
            d = k.merge(this.constructor(), d);
            d.prevObject = this;
            d.context = this.context;
            return d
        }, each: function (d, a) {
            return k.each(this, d, a)
        }, ready: function (d) {
            k.ready.promise().done(d);
            return this
        }, slice: function () {
            return this.pushStack(sa.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (d) {
            var a = this.length;
            d = +d + (0 > d ? a : 0);
            return this.pushStack(0 <= d && d < a ? [this[d]] : [])
        }, map: function (d) {
            return this.pushStack(k.map(this, function (a, k) {
                return d.call(a,
                    k, a)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Ja, sort: [].sort, splice: [].splice};
    k.fn.init.prototype = k.fn;
    k.extend = k.fn.extend = function () {
        var d, a, p, e, b, f = arguments[0] || {}, g = 1, m = arguments.length, u = !1;
        "boolean" === typeof f && (u = f, f = arguments[1] || {}, g = 2);
        "object" === typeof f || k.isFunction(f) || (f = {});
        m === g && (f = this, --g);
        for (; g < m; g++)if (null != (b = arguments[g]))for (e in b)d = f[e], p = b[e], f !== p && (u && p && (k.isPlainObject(p) || (a = k.isArray(p))) ? (a ? (a = !1, d = d && k.isArray(d) ? d : []) : d = d && k.isPlainObject(d) ?
            d : {}, f[e] = k.extend(u, d, p)) : p !== c && (f[e] = p));
        return f
    };
    k.extend({expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""), noConflict: function (d) {
        a.$ === k && (a.$ = ra);
        d && a.jQuery === k && (a.jQuery = N);
        return k
    }, isReady: !1, readyWait: 1, holdReady: function (d) {
        d ? k.readyWait++ : k.ready(!0)
    }, ready: function (d) {
        if (!0 === d ? !--k.readyWait : !k.isReady) {
            if (!I.body)return setTimeout(k.ready);
            k.isReady = !0;
            !0 !== d && 0 < --k.readyWait || (P.resolveWith(I, [k]), k.fn.trigger && k(I).trigger("ready").off("ready"))
        }
    }, isFunction: function (d) {
        return"function" ===
            k.type(d)
    }, isArray: Array.isArray || function (d) {
        return"array" === k.type(d)
    }, isWindow: function (d) {
        return null != d && d == d.window
    }, isNumeric: function (d) {
        return!isNaN(parseFloat(d)) && isFinite(d)
    }, type: function (d) {
        return null == d ? String(d) : "object" === typeof d || "function" === typeof d ? ia[Bb.call(d)] || "object" : typeof d
    }, isPlainObject: function (d) {
        var a;
        if (!d || "object" !== k.type(d) || d.nodeType || k.isWindow(d))return!1;
        try {
            if (d.constructor && !va.call(d, "constructor") && !va.call(d.constructor.prototype, "isPrototypeOf"))return!1
        } catch (p) {
            return!1
        }
        if (k.support.ownLast)for (a in d)return va.call(d,
            a);
        for (a in d);
        return a === c || va.call(d, a)
    }, isEmptyObject: function (d) {
        for (var a in d)return!1;
        return!0
    }, error: function (d) {
        throw Error(d);
    }, parseHTML: function (d, a, p) {
        if (!d || "string" !== typeof d)return null;
        "boolean" === typeof a && (p = a, a = !1);
        a = a || I;
        var e = ab.exec(d);
        p = !p && [];
        if (e)return[a.createElement(e[1])];
        e = k.buildFragment([d], a, p);
        p && k(p).remove();
        return k.merge([], e.childNodes)
    }, parseJSON: function (d) {
        if (a.JSON && a.JSON.parse)return a.JSON.parse(d);
        if (null === d)return d;
        if ("string" === typeof d && (d = k.trim(d)) &&
            Eb.test(d.replace(Gb, "@").replace(Hb, "]").replace(Fb, "")))return(new Function("return " + d))();
        k.error("Invalid JSON: " + d)
    }, parseXML: function (d) {
        var A, p;
        if (!d || "string" !== typeof d)return null;
        try {
            a.DOMParser ? (p = new DOMParser, A = p.parseFromString(d, "text/xml")) : (A = new ActiveXObject("Microsoft.XMLDOM"), A.async = "false", A.loadXML(d))
        } catch (e) {
            A = c
        }
        A && A.documentElement && !A.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + d);
        return A
    }, noop: function () {
    }, globalEval: function (d) {
        d && k.trim(d) &&
        (a.execScript || function (d) {
            a.eval.call(a, d)
        })(d)
    }, camelCase: function (d) {
        return d.replace(Ib, "ms-").replace(Jb, Kb)
    }, nodeName: function (d, a) {
        return d.nodeName && d.nodeName.toLowerCase() === a.toLowerCase()
    }, each: function (d, a, k) {
        var e, c = 0, f = d.length;
        e = b(d);
        if (k)if (e)for (; c < f && (e = a.apply(d[c], k), !1 !== e); c++); else for (c in d) {
            if (e = a.apply(d[c], k), !1 === e)break
        } else if (e)for (; c < f && (e = a.call(d[c], c, d[c]), !1 !== e); c++); else for (c in d)if (e = a.call(d[c], c, d[c]), !1 === e)break;
        return d
    }, trim: Ka && !Ka.call("\ufeff\u00a0") ?
        function (d) {
            return null == d ? "" : Ka.call(d)
        } : function (d) {
        return null == d ? "" : (d + "").replace(Cb, "")
    }, makeArray: function (d, a) {
        var p = a || [];
        null != d && (b(Object(d)) ? k.merge(p, "string" === typeof d ? [d] : d) : Ja.call(p, d));
        return p
    }, inArray: function (d, a, k) {
        var e;
        if (a) {
            if ($a)return $a.call(a, d, k);
            e = a.length;
            for (k = k ? 0 > k ? Math.max(0, e + k) : k : 0; k < e; k++)if (k in a && a[k] === d)return k
        }
        return-1
    }, merge: function (d, a) {
        var k = a.length, e = d.length, b = 0;
        if ("number" === typeof k)for (; b < k; b++)d[e++] = a[b]; else for (; a[b] !== c;)d[e++] = a[b++];
        d.length = e;
        return d
    }, grep: function (d, a, k) {
        var e, c = [], b = 0, f = d.length;
        for (k = !!k; b < f; b++)e = !!a(d[b], b), k !== e && c.push(d[b]);
        return c
    }, map: function (d, a, k) {
        var e, c = 0, f = d.length, g = [];
        if (b(d))for (; c < f; c++)e = a(d[c], c, k), null != e && (g[g.length] = e); else for (c in d)e = a(d[c], c, k), null != e && (g[g.length] = e);
        return Za.apply([], g)
    }, guid: 1, proxy: function (d, a) {
        var p, e;
        "string" === typeof a && (e = d[a], a = d, d = e);
        if (!k.isFunction(d))return c;
        p = sa.call(arguments, 2);
        e = function () {
            return d.apply(a || this, p.concat(sa.call(arguments)))
        };
        e.guid = d.guid = d.guid || k.guid++;
        return e
    }, access: function (d, a, p, e, b, f, g) {
        var m = 0, u = d.length, r = null == p;
        if ("object" === k.type(p))for (m in b = !0, p)k.access(d, a, m, p[m], !0, f, g); else if (e !== c && (b = !0, k.isFunction(e) || (g = !0), r && (g ? (a.call(d, e), a = null) : (r = a, a = function (d, a, p) {
            return r.call(k(d), p)
        })), a))for (; m < u; m++)a(d[m], p, g ? e : e.call(d[m], m, a(d[m], p)));
        return b ? d : r ? a.call(d) : u ? a(d[0], p) : f
    }, now: function () {
        return(new Date).getTime()
    }, swap: function (d, a, k, e) {
        var c, b = {};
        for (c in a)b[c] = d.style[c], d.style[c] = a[c];
        k = k.apply(d, e || []);
        for (c in a)d.style[c] = b[c];
        return k
    }});
    k.ready.promise = function (d) {
        if (!P)if (P = k.Deferred(), "complete" === I.readyState)setTimeout(k.ready); else if (I.addEventListener)I.addEventListener("DOMContentLoaded", W, !1), a.addEventListener("load", W, !1); else {
            I.attachEvent("onreadystatechange", W);
            a.attachEvent("onload", W);
            var e = !1;
            try {
                e = null == a.frameElement && I.documentElement
            } catch (p) {
            }
            e && e.doScroll && function pa() {
                if (!k.isReady) {
                    try {
                        e.doScroll("left")
                    } catch (d) {
                        return setTimeout(pa, 50)
                    }
                    bb();
                    k.ready()
                }
            }()
        }
        return P.promise(d)
    };
    k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (d, a) {
        ia["[object " + a + "]"] = a.toLowerCase()
    });
    aa = k(I);
    (function (d, a) {
        function p(d, a, k, p) {
            var e, c, A, b, f;
            (a ? a.ownerDocument || a : U) !== G && z(a);
            a = a || G;
            k = k || [];
            if (!d || "string" !== typeof d)return k;
            if (1 !== (b = a.nodeType) && 9 !== b)return[];
            if (T && !p) {
                if (e = ya.exec(d))if (A = e[1])if (9 === b)if ((c = a.getElementById(A)) && c.parentNode) {
                    if (c.id === A)return k.push(c), k
                } else return k; else {
                    if (a.ownerDocument && (c = a.ownerDocument.getElementById(A)) &&
                        ba(a, c) && c.id === A)return k.push(c), k
                } else {
                    if (e[2])return Y.apply(k, a.getElementsByTagName(d)), k;
                    if ((A = e[3]) && v.getElementsByClassName && a.getElementsByClassName)return Y.apply(k, a.getElementsByClassName(A)), k
                }
                if (v.qsa && (!R || !R.test(d))) {
                    c = e = L;
                    A = a;
                    f = 9 === b && d;
                    if (1 === b && "object" !== a.nodeName.toLowerCase()) {
                        b = l(d);
                        (e = a.getAttribute("id")) ? c = e.replace(Ca, "\\$&") : a.setAttribute("id", c);
                        c = "[id='" + c + "'] ";
                        for (A = b.length; A--;)b[A] = c + x(b[A]);
                        A = ka.test(d) && a.parentNode || a;
                        f = b.join(",")
                    }
                    if (f)try {
                        return Y.apply(k,
                            A.querySelectorAll(f)), k
                    } catch (g) {
                    } finally {
                        e || a.removeAttribute("id")
                    }
                }
            }
            var m;
            a:{
                d = d.replace(ea, "$1");
                c = l(d);
                if (!p && 1 === c.length) {
                    e = c[0] = c[0].slice(0);
                    if (2 < e.length && "ID" === (m = e[0]).type && v.getById && 9 === a.nodeType && T && E.relative[e[1].type]) {
                        a = (E.find.ID(m.matches[0].replace(wa, xa), a) || [])[0];
                        if (!a) {
                            m = k;
                            break a
                        }
                        d = d.slice(e.shift().value.length)
                    }
                    for (b = ja.needsContext.test(d) ? 0 : e.length; b--;) {
                        m = e[b];
                        if (E.relative[A = m.type])break;
                        if (A = E.find[A])if (p = A(m.matches[0].replace(wa, xa), ka.test(e[0].type) && a.parentNode ||
                            a)) {
                            e.splice(b, 1);
                            d = p.length && x(e);
                            if (!d) {
                                Y.apply(k, p);
                                m = k;
                                break a
                            }
                            break
                        }
                    }
                }
                K(d, c)(p, a, !T, k, ka.test(d));
                m = k
            }
            return m
        }

        function e() {
            function d(k, p) {
                a.push(k += " ") > E.cacheLength && delete d[a.shift()];
                return d[k] = p
            }

            var a = [];
            return d
        }

        function c(d) {
            d[L] = !0;
            return d
        }

        function b(d) {
            var a = G.createElement("div");
            try {
                return!!d(a)
            } catch (k) {
                return!1
            } finally {
                a.parentNode && a.parentNode.removeChild(a)
            }
        }

        function f(d, a) {
            for (var k = d.split("|"), p = d.length; p--;)E.attrHandle[k[p]] = a
        }

        function g(d, a) {
            var k = a && d, p = k && 1 === d.nodeType &&
                1 === a.nodeType && (~a.sourceIndex || N) - (~d.sourceIndex || N);
            if (p)return p;
            if (k)for (; k = k.nextSibling;)if (k === a)return-1;
            return d ? 1 : -1
        }

        function m(d) {
            return function (a) {
                return"input" === a.nodeName.toLowerCase() && a.type === d
            }
        }

        function u(d) {
            return function (a) {
                var k = a.nodeName.toLowerCase();
                return("input" === k || "button" === k) && a.type === d
            }
        }

        function r(d) {
            return c(function (a) {
                a = +a;
                return c(function (k, p) {
                    for (var e, c = d([], k.length, a), A = c.length; A--;)k[e = c[A]] && (k[e] = !(p[e] = k[e]))
                })
            })
        }

        function n() {
        }

        function l(d, a) {
            var k,
                e, c, A, b, f, g;
            if (b = fa[d + " "])return a ? 0 : b.slice(0);
            b = d;
            f = [];
            for (g = E.preFilter; b;) {
                if (!k || (e = ra.exec(b)))e && (b = b.slice(e[0].length) || b), f.push(c = []);
                k = !1;
                if (e = sa.exec(b))k = e.shift(), c.push({value: k, type: e[0].replace(ea, " ")}), b = b.slice(k.length);
                for (A in E.filter)!(e = ja[A].exec(b)) || g[A] && !(e = g[A](e)) || (k = e.shift(), c.push({value: k, type: A, matches: e}), b = b.slice(k.length));
                if (!k)break
            }
            return a ? b.length : b ? p.error(d) : fa(d, f).slice(0)
        }

        function x(d) {
            for (var a = 0, k = d.length, p = ""; a < k; a++)p += d[a].value;
            return p
        }

        function q(d, a, k) {
            var p = a.dir, e = k && "parentNode" === p, c = I++;
            return a.first ? function (a, k, c) {
                for (; a = a[p];)if (1 === a.nodeType || e)return d(a, k, c)
            } : function (a, k, A) {
                var b, f, g, m = V + " " + c;
                if (A)for (; a = a[p];) {
                    if ((1 === a.nodeType || e) && d(a, k, A))return!0
                } else for (; a = a[p];)if (1 === a.nodeType || e)if (g = a[L] || (a[L] = {}), (f = g[p]) && f[0] === m) {
                    if (!0 === (b = f[1]) || b === O)return!0 === b
                } else if (f = g[p] = [m], f[1] = d(a, k, A) || O, !0 === f[1])return!0
            }
        }

        function H(d) {
            return 1 < d.length ? function (a, k, p) {
                for (var e = d.length; e--;)if (!d[e](a, k, p))return!1;
                return!0
            } : d[0]
        }

        function J(d, a, k, p, e) {
            for (var c, A = [], b = 0, f = d.length, g = null != a; b < f; b++)if (c = d[b])if (!k || k(c, p, e))A.push(c), g && a.push(b);
            return A
        }

        function y(d, a, k, e, A, b) {
            e && !e[L] && (e = y(e));
            A && !A[L] && (A = y(A, b));
            return c(function (c, b, f, g) {
                var m, F, u = [], r = [], n = b.length, l;
                if (!(l = c)) {
                    l = a || "*";
                    for (var x = f.nodeType ? [f] : f, pa = [], Ba = 0, q = x.length; Ba < q; Ba++)p(l, x[Ba], pa);
                    l = pa
                }
                l = !d || !c && a ? l : J(l, u, d, f, g);
                x = k ? A || (c ? d : n || e) ? [] : b : l;
                k && k(l, x, f, g);
                if (e)for (m = J(x, r), e(m, [], f, g), f = m.length; f--;)if (F = m[f])x[r[f]] = !(l[r[f]] =
                    F);
                if (c) {
                    if (A || d) {
                        if (A) {
                            m = [];
                            for (f = x.length; f--;)(F = x[f]) && m.push(l[f] = F);
                            A(null, x = [], m, g)
                        }
                        for (f = x.length; f--;)(F = x[f]) && -1 < (m = A ? W.call(c, F) : u[f]) && (c[m] = !(b[m] = F))
                    }
                } else x = J(x === b ? x.splice(n, x.length) : x), A ? A(null, b, x, g) : Y.apply(b, x)
            })
        }

        function w(d) {
            var a, k, p, e = d.length, c = E.relative[d[0].type];
            k = c || E.relative[" "];
            for (var A = c ? 1 : 0, b = q(function (d) {
                return d === a
            }, k, !0), f = q(function (d) {
                return-1 < W.call(a, d)
            }, k, !0), g = [function (d, k, p) {
                return!c && (p || k !== $) || ((a = k).nodeType ? b(d, k, p) : f(d, k, p))
            }]; A < e; A++)if (k =
                E.relative[d[A].type])g = [q(H(g), k)]; else {
                k = E.filter[d[A].type].apply(null, d[A].matches);
                if (k[L]) {
                    for (p = ++A; p < e && !E.relative[d[p].type]; p++);
                    return y(1 < A && H(g), 1 < A && x(d.slice(0, A - 1).concat({value: " " === d[A - 2].type ? "*" : ""})).replace(ea, "$1"), k, A < p && w(d.slice(A, p)), p < e && w(d = d.slice(p)), p < e && x(d))
                }
                g.push(k)
            }
            return H(g)
        }

        function M(d, a) {
            var k = 0, e = 0 < a.length, A = 0 < d.length, b = function (c, b, f, g, m) {
                var F, u, r = [], n = 0, x = "0", l = c && [], pa = null != m, Ba = $, q = c || A && E.find.TAG("*", m && b.parentNode || b), H = V += null == Ba ? 1 : Math.random() ||
                    0.1;
                pa && ($ = b !== G && b, O = k);
                for (; null != (m = q[x]); x++) {
                    if (A && m) {
                        for (F = 0; u = d[F++];)if (u(m, b, f)) {
                            g.push(m);
                            break
                        }
                        pa && (V = H, O = ++k)
                    }
                    e && ((m = !u && m) && n--, c && l.push(m))
                }
                n += x;
                if (e && x !== n) {
                    for (F = 0; u = a[F++];)u(l, r, b, f);
                    if (c) {
                        if (0 < n)for (; x--;)l[x] || r[x] || (r[x] = qa.call(g));
                        r = J(r)
                    }
                    Y.apply(g, r);
                    pa && !c && 0 < r.length && 1 < n + a.length && p.uniqueSort(g)
                }
                pa && (V = H, $ = Ba);
                return l
            };
            return e ? c(b) : b
        }

        var s, v, O, E, t, C, K, $, B, z, G, D, T, R, Q, na, ba, L = "sizzle" + -new Date, U = d.document, V = 0, I = 0, ca = e(), fa = e(), P = e(), X = !1, aa = function (d, a) {
            d === a && (X = !0);
            return 0
        }, da = typeof a, N = -2147483648, Z = {}.hasOwnProperty, S = [], qa = S.pop, ga = S.push, Y = S.push, ia = S.slice, W = S.indexOf || function (d) {
            for (var a = 0, k = this.length; a < k; a++)if (this[a] === d)return a;
            return-1
        }, la = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), ma = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + la + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", ha = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
            ma.replace(3, 8) + ")*)|.*)\\)|)", ea = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), ra = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ka = /[\x20\t\r\n\f]*[+~]/, ta = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"), ua = RegExp(ha), va = RegExp("^" + la + "$"), ja = {ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ma), PSEUDO: RegExp("^" + ha), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i")}, oa = /^[^{]+\{\s*\[native \w/, ya = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, za = /^(?:input|select|textarea|button)$/i, Aa = /^h\d$/i, Ca = /'|\\/g, wa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), xa = function (d, a, k) {
            d = "0x" + a - 65536;
            return d !== d || k ? a : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320)
        };
        try {
            Y.apply(S = ia.call(U.childNodes), U.childNodes), S[U.childNodes.length].nodeType
        } catch (Da) {
            Y = {apply: S.length ? function (d, a) {
                ga.apply(d, ia.call(a))
            } : function (d, a) {
                for (var k = d.length, p = 0; d[k++] = a[p++];);
                d.length = k - 1
            }}
        }
        C = p.isXML = function (d) {
            return(d = d && (d.ownerDocument || d).documentElement) ? "HTML" !== d.nodeName : !1
        };
        v = p.support = {};
        z = p.setDocument = function (d) {
            var a = d ? d.ownerDocument || d : U;
            d = a.defaultView;
            if (a === G || 9 !== a.nodeType || !a.documentElement)return G;
            G = a;
            D = a.documentElement;
            T = !C(a);
            d && d.attachEvent && d !== d.top && d.attachEvent("onbeforeunload", function () {
                z()
            });
            v.attributes = b(function (d) {
                d.className = "i";
                return!d.getAttribute("className")
            });
            v.getElementsByTagName =
                b(function (d) {
                    d.appendChild(a.createComment(""));
                    return!d.getElementsByTagName("*").length
                });
            v.getElementsByClassName = b(function (d) {
                d.innerHTML = "<div class='a'></div><div class='a i'></div>";
                d.firstChild.className = "i";
                return 2 === d.getElementsByClassName("i").length
            });
            v.getById = b(function (d) {
                D.appendChild(d).id = L;
                return!a.getElementsByName || !a.getElementsByName(L).length
            });
            v.getById ? (E.find.ID = function (d, a) {
                if (typeof a.getElementById !== da && T) {
                    var k = a.getElementById(d);
                    return k && k.parentNode ? [k] : []
                }
            },
                E.filter.ID = function (d) {
                    var a = d.replace(wa, xa);
                    return function (d) {
                        return d.getAttribute("id") === a
                    }
                }) : (delete E.find.ID, E.filter.ID = function (d) {
                var a = d.replace(wa, xa);
                return function (d) {
                    return(d = typeof d.getAttributeNode !== da && d.getAttributeNode("id")) && d.value === a
                }
            });
            E.find.TAG = v.getElementsByTagName ? function (d, a) {
                if (typeof a.getElementsByTagName !== da)return a.getElementsByTagName(d)
            } : function (d, a) {
                var k, p = [], e = 0, c = a.getElementsByTagName(d);
                if ("*" === d) {
                    for (; k = c[e++];)1 === k.nodeType && p.push(k);
                    return p
                }
                return c
            };
            E.find.CLASS = v.getElementsByClassName && function (d, a) {
                if (typeof a.getElementsByClassName !== da && T)return a.getElementsByClassName(d)
            };
            Q = [];
            R = [];
            if (v.qsa = oa.test(a.querySelectorAll))b(function (d) {
                d.innerHTML = "<select><option selected=''></option></select>";
                d.querySelectorAll("[selected]").length || R.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                d.querySelectorAll(":checked").length || R.push(":checked")
            }),
                b(function (d) {
                    var k = a.createElement("input");
                    k.setAttribute("type", "hidden");
                    d.appendChild(k).setAttribute("t", "");
                    d.querySelectorAll("[t^='']").length && R.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    d.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled");
                    d.querySelectorAll("*,:x");
                    R.push(",.*:")
                });
            (v.matchesSelector = oa.test(na = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && b(function (d) {
                v.disconnectedMatch = na.call(d, "div");
                na.call(d, "[s!='']:x");
                Q.push("!=", ha)
            });
            R = R.length && RegExp(R.join("|"));
            Q = Q.length && RegExp(Q.join("|"));
            ba = oa.test(D.contains) || D.compareDocumentPosition ? function (d, a) {
                var k = 9 === d.nodeType ? d.documentElement : d, p = a && a.parentNode;
                return d === p || !!(p && 1 === p.nodeType && (k.contains ? k.contains(p) : d.compareDocumentPosition && d.compareDocumentPosition(p) & 16))
            } : function (d, a) {
                if (a)for (; a = a.parentNode;)if (a === d)return!0;
                return!1
            };
            aa = D.compareDocumentPosition ? function (d, k) {
                if (d === k)return X = !0, 0;
                var p = k.compareDocumentPosition && d.compareDocumentPosition &&
                    d.compareDocumentPosition(k);
                return p ? p & 1 || !v.sortDetached && k.compareDocumentPosition(d) === p ? d === a || ba(U, d) ? -1 : k === a || ba(U, k) ? 1 : B ? W.call(B, d) - W.call(B, k) : 0 : p & 4 ? -1 : 1 : d.compareDocumentPosition ? -1 : 1
            } : function (d, k) {
                var p, e = 0;
                p = d.parentNode;
                var c = k.parentNode, A = [d], b = [k];
                if (d === k)return X = !0, 0;
                if (!p || !c)return d === a ? -1 : k === a ? 1 : p ? -1 : c ? 1 : B ? W.call(B, d) - W.call(B, k) : 0;
                if (p === c)return g(d, k);
                for (p = d; p = p.parentNode;)A.unshift(p);
                for (p = k; p = p.parentNode;)b.unshift(p);
                for (; A[e] === b[e];)e++;
                return e ? g(A[e], b[e]) :
                    A[e] === U ? -1 : b[e] === U ? 1 : 0
            };
            return a
        };
        p.matches = function (d, a) {
            return p(d, null, null, a)
        };
        p.matchesSelector = function (d, a) {
            (d.ownerDocument || d) !== G && z(d);
            a = a.replace(ta, "='$1']");
            if (v.matchesSelector && T && !(Q && Q.test(a) || R && R.test(a)))try {
                var k = na.call(d, a);
                if (k || v.disconnectedMatch || d.document && 11 !== d.document.nodeType)return k
            } catch (e) {
            }
            return 0 < p(a, G, null, [d]).length
        };
        p.contains = function (d, a) {
            (d.ownerDocument || d) !== G && z(d);
            return ba(d, a)
        };
        p.attr = function (d, k) {
            (d.ownerDocument || d) !== G && z(d);
            var p = E.attrHandle[k.toLowerCase()],
                p = p && Z.call(E.attrHandle, k.toLowerCase()) ? p(d, k, !T) : a;
            return p === a ? v.attributes || !T ? d.getAttribute(k) : (p = d.getAttributeNode(k)) && p.specified ? p.value : null : p
        };
        p.error = function (d) {
            throw Error("Syntax error, unrecognized expression: " + d);
        };
        p.uniqueSort = function (d) {
            var a, k = [], p = 0, e = 0;
            X = !v.detectDuplicates;
            B = !v.sortStable && d.slice(0);
            d.sort(aa);
            if (X) {
                for (; a = d[e++];)a === d[e] && (p = k.push(e));
                for (; p--;)d.splice(k[p], 1)
            }
            return d
        };
        t = p.getText = function (d) {
            var a, k = "", p = 0;
            a = d.nodeType;
            if (!a)for (; a = d[p]; p++)k += t(a);
            else if (1 === a || 9 === a || 11 === a) {
                if ("string" === typeof d.textContent)return d.textContent;
                for (d = d.firstChild; d; d = d.nextSibling)k += t(d)
            } else if (3 === a || 4 === a)return d.nodeValue;
            return k
        };
        E = p.selectors = {cacheLength: 50, createPseudo: c, match: ja, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (d) {
            d[1] = d[1].replace(wa, xa);
            d[3] = (d[4] || d[5] || "").replace(wa, xa);
            "~=" === d[2] && (d[3] = " " +
                d[3] + " ");
            return d.slice(0, 4)
        }, CHILD: function (d) {
            d[1] = d[1].toLowerCase();
            "nth" === d[1].slice(0, 3) ? (d[3] || p.error(d[0]), d[4] = +(d[4] ? d[5] + (d[6] || 1) : 2 * ("even" === d[3] || "odd" === d[3])), d[5] = +(d[7] + d[8] || "odd" === d[3])) : d[3] && p.error(d[0]);
            return d
        }, PSEUDO: function (d) {
            var k, p = !d[5] && d[2];
            if (ja.CHILD.test(d[0]))return null;
            d[3] && d[4] !== a ? d[2] = d[4] : p && ua.test(p) && (k = l(p, !0)) && (k = p.indexOf(")", p.length - k) - p.length) && (d[0] = d[0].slice(0, k), d[2] = p.slice(0, k));
            return d.slice(0, 3)
        }}, filter: {TAG: function (d) {
            var a =
                d.replace(wa, xa).toLowerCase();
            return"*" === d ? function () {
                return!0
            } : function (d) {
                return d.nodeName && d.nodeName.toLowerCase() === a
            }
        }, CLASS: function (d) {
            var a = ca[d + " "];
            return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + d + "([\\x20\\t\\r\\n\\f]|$)")) && ca(d, function (d) {
                return a.test("string" === typeof d.className && d.className || typeof d.getAttribute !== da && d.getAttribute("class") || "")
            })
        }, ATTR: function (d, a, k) {
            return function (e) {
                e = p.attr(e, d);
                if (null == e)return"!=" === a;
                if (!a)return!0;
                e += "";
                return"=" === a ? e === k : "!=" ===
                    a ? e !== k : "^=" === a ? k && 0 === e.indexOf(k) : "*=" === a ? k && -1 < e.indexOf(k) : "$=" === a ? k && e.slice(-k.length) === k : "~=" === a ? -1 < (" " + e + " ").indexOf(k) : "|=" === a ? e === k || e.slice(0, k.length + 1) === k + "-" : !1
            }
        }, CHILD: function (d, a, k, p, e) {
            var c = "nth" !== d.slice(0, 3), A = "last" !== d.slice(-4), b = "of-type" === a;
            return 1 === p && 0 === e ? function (d) {
                return!!d.parentNode
            } : function (a, k, f) {
                var g, m, F, u, r;
                k = c !== A ? "nextSibling" : "previousSibling";
                var n = a.parentNode, x = b && a.nodeName.toLowerCase();
                f = !f && !b;
                if (n) {
                    if (c) {
                        for (; k;) {
                            for (m = a; m = m[k];)if (b ?
                                m.nodeName.toLowerCase() === x : 1 === m.nodeType)return!1;
                            r = k = "only" === d && !r && "nextSibling"
                        }
                        return!0
                    }
                    r = [A ? n.firstChild : n.lastChild];
                    if (A && f)for (f = n[L] || (n[L] = {}), g = f[d] || [], u = g[0] === V && g[1], F = g[0] === V && g[2], m = u && n.childNodes[u]; m = ++u && m && m[k] || (F = u = 0) || r.pop();) {
                        if (1 === m.nodeType && ++F && m === a) {
                            f[d] = [V, u, F];
                            break
                        }
                    } else if (f && (g = (a[L] || (a[L] = {}))[d]) && g[0] === V)F = g[1]; else for (; (m = ++u && m && m[k] || (F = u = 0) || r.pop()) && ((b ? m.nodeName.toLowerCase() !== x : 1 !== m.nodeType) || !++F || (f && ((m[L] || (m[L] = {}))[d] = [V, F]), m !==
                        a)););
                    F -= e;
                    return F === p || 0 === F % p && 0 <= F / p
                }
            }
        }, PSEUDO: function (d, a) {
            var k, e = E.pseudos[d] || E.setFilters[d.toLowerCase()] || p.error("unsupported pseudo: " + d);
            return e[L] ? e(a) : 1 < e.length ? (k = [d, d, "", a], E.setFilters.hasOwnProperty(d.toLowerCase()) ? c(function (d, k) {
                for (var p, c = e(d, a), A = c.length; A--;)p = W.call(d, c[A]), d[p] = !(k[p] = c[A])
            }) : function (d) {
                return e(d, 0, k)
            }) : e
        }}, pseudos: {not: c(function (d) {
            var a = [], k = [], p = K(d.replace(ea, "$1"));
            return p[L] ? c(function (d, a, k, e) {
                e = p(d, null, e, []);
                for (var c = d.length; c--;)if (k =
                    e[c])d[c] = !(a[c] = k)
            }) : function (d, e, c) {
                a[0] = d;
                p(a, null, c, k);
                return!k.pop()
            }
        }), has: c(function (d) {
            return function (a) {
                return 0 < p(d, a).length
            }
        }), contains: c(function (d) {
            return function (a) {
                return-1 < (a.textContent || a.innerText || t(a)).indexOf(d)
            }
        }), lang: c(function (d) {
            va.test(d || "") || p.error("unsupported lang: " + d);
            d = d.replace(wa, xa).toLowerCase();
            return function (a) {
                var k;
                do if (k = T ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang"))return k = k.toLowerCase(), k === d || 0 === k.indexOf(d + "-"); while ((a = a.parentNode) &&
                    1 === a.nodeType);
                return!1
            }
        }), target: function (a) {
            var k = d.location && d.location.hash;
            return k && k.slice(1) === a.id
        }, root: function (d) {
            return d === D
        }, focus: function (d) {
            return d === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(d.type || d.href || ~d.tabIndex)
        }, enabled: function (d) {
            return!1 === d.disabled
        }, disabled: function (d) {
            return!0 === d.disabled
        }, checked: function (d) {
            var a = d.nodeName.toLowerCase();
            return"input" === a && !!d.checked || "option" === a && !!d.selected
        }, selected: function (d) {
            d.parentNode && d.parentNode.selectedIndex;
            return!0 === d.selected
        }, empty: function (d) {
            for (d = d.firstChild; d; d = d.nextSibling)if ("@" < d.nodeName || 3 === d.nodeType || 4 === d.nodeType)return!1;
            return!0
        }, parent: function (d) {
            return!E.pseudos.empty(d)
        }, header: function (d) {
            return Aa.test(d.nodeName)
        }, input: function (d) {
            return za.test(d.nodeName)
        }, button: function (d) {
            var a = d.nodeName.toLowerCase();
            return"input" === a && "button" === d.type || "button" === a
        }, text: function (d) {
            var a;
            return"input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (a = d.getAttribute("type")) ||
                a.toLowerCase() === d.type)
        }, first: r(function () {
            return[0]
        }), last: r(function (d, a) {
            return[a - 1]
        }), eq: r(function (d, a, k) {
            return[0 > k ? k + a : k]
        }), even: r(function (d, a) {
            for (var k = 0; k < a; k += 2)d.push(k);
            return d
        }), odd: r(function (d, a) {
            for (var k = 1; k < a; k += 2)d.push(k);
            return d
        }), lt: r(function (d, a, k) {
            for (a = 0 > k ? k + a : k; 0 <= --a;)d.push(a);
            return d
        }), gt: r(function (d, a, k) {
            for (k = 0 > k ? k + a : k; ++k < a;)d.push(k);
            return d
        })}};
        E.pseudos.nth = E.pseudos.eq;
        for (s in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})E.pseudos[s] = m(s);
        for (s in{submit: !0,
            reset: !0})E.pseudos[s] = u(s);
        n.prototype = E.filters = E.pseudos;
        E.setFilters = new n;
        K = p.compile = function (d, a) {
            var k, p = [], e = [], c = P[d + " "];
            if (!c) {
                a || (a = l(d));
                for (k = a.length; k--;)c = w(a[k]), c[L] ? p.push(c) : e.push(c);
                c = P(d, M(e, p))
            }
            return c
        };
        v.sortStable = L.split("").sort(aa).join("") === L;
        v.detectDuplicates = X;
        z();
        v.sortDetached = b(function (d) {
            return d.compareDocumentPosition(G.createElement("div")) & 1
        });
        b(function (d) {
            d.innerHTML = "<a href='#'></a>";
            return"#" === d.firstChild.getAttribute("href")
        }) || f("type|href|height|width",
            function (d, a, k) {
                if (!k)return d.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
            });
        v.attributes && b(function (d) {
            d.innerHTML = "<input/>";
            d.firstChild.setAttribute("value", "");
            return"" === d.firstChild.getAttribute("value")
        }) || f("value", function (d, a, k) {
            if (!k && "input" === d.nodeName.toLowerCase())return d.defaultValue
        });
        b(function (d) {
            return null == d.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (d, a, k) {
            var p;
            if (!k)return(p = d.getAttributeNode(a)) && p.specified ? p.value : !0 === d[a] ? a.toLowerCase() : null
        });
        k.find = p;
        k.expr = p.selectors;
        k.expr[":"] = k.expr.pseudos;
        k.unique = p.uniqueSort;
        k.text = p.getText;
        k.isXMLDoc = p.isXML;
        k.contains = p.contains
    })(a);
    var Va = {};
    k.Callbacks = function (d) {
        d = "string" === typeof d ? Va[d] || g(d) : k.extend({}, d);
        var a, p, e, b, f, m, u = [], r = !d.once && [], n = function (k) {
            p = d.memory && k;
            e = !0;
            f = m || 0;
            m = 0;
            b = u.length;
            for (a = !0; u && f < b; f++)if (!1 === u[f].apply(k[0], k[1]) && d.stopOnFalse) {
                p = !1;
                break
            }
            a = !1;
            u &&
            (r ? r.length && n(r.shift()) : p ? u = [] : x.disable())
        }, x = {add: function () {
            if (u) {
                var e = u.length;
                (function Lb(a) {
                    k.each(a, function (a, p) {
                        var e = k.type(p);
                        "function" === e ? d.unique && x.has(p) || u.push(p) : p && p.length && "string" !== e && Lb(p)
                    })
                })(arguments);
                a ? b = u.length : p && (m = e, n(p))
            }
            return this
        }, remove: function () {
            u && k.each(arguments, function (d, p) {
                for (var e; -1 < (e = k.inArray(p, u, e));)u.splice(e, 1), a && (e <= b && b--, e <= f && f--)
            });
            return this
        }, has: function (d) {
            return d ? -1 < k.inArray(d, u) : !(!u || !u.length)
        }, empty: function () {
            u = [];
            b = 0;
            return this
        }, disable: function () {
            u = r = p = c;
            return this
        }, disabled: function () {
            return!u
        }, lock: function () {
            r = c;
            p || x.disable();
            return this
        }, locked: function () {
            return!r
        }, fireWith: function (d, k) {
            !u || e && !r || (k = k || [], k = [d, k.slice ? k.slice() : k], a ? r.push(k) : n(k));
            return this
        }, fire: function () {
            x.fireWith(this, arguments);
            return this
        }, fired: function () {
            return!!e
        }};
        return x
    };
    k.extend({Deferred: function (d) {
        var a = [
            ["resolve", "done", k.Callbacks("once memory"), "resolved"],
            ["reject", "fail", k.Callbacks("once memory"), "rejected"],
            ["notify", "progress", k.Callbacks("memory")]
        ], p = "pending", e = {state: function () {
            return p
        }, always: function () {
            c.done(arguments).fail(arguments);
            return this
        }, then: function () {
            var d = arguments;
            return k.Deferred(function (p) {
                k.each(a, function (a, A) {
                    var b = A[0], f = k.isFunction(d[a]) && d[a];
                    c[A[1]](function () {
                        var d = f && f.apply(this, arguments);
                        if (d && k.isFunction(d.promise))d.promise().done(p.resolve).fail(p.reject).progress(p.notify); else p[b + "With"](this === e ? p.promise() : this, f ? [d] : arguments)
                    })
                });
                d = null
            }).promise()
        },
            promise: function (d) {
                return null != d ? k.extend(d, e) : e
            }}, c = {};
        e.pipe = e.then;
        k.each(a, function (d, k) {
            var b = k[2], f = k[3];
            e[k[1]] = b.add;
            f && b.add(function () {
                p = f
            }, a[d ^ 1][2].disable, a[2][2].lock);
            c[k[0]] = function () {
                c[k[0] + "With"](this === c ? e : this, arguments);
                return this
            };
            c[k[0] + "With"] = b.fireWith
        });
        e.promise(c);
        d && d.call(c, c);
        return c
    }, when: function (d) {
        var a = 0, p = sa.call(arguments), e = p.length, c = 1 !== e || d && k.isFunction(d.promise) ? e : 0, b = 1 === c ? d : k.Deferred(), f = function (d, a, k) {
            return function (p) {
                a[d] = this;
                k[d] = 1 < arguments.length ?
                    sa.call(arguments) : p;
                k === m ? b.notifyWith(a, k) : --c || b.resolveWith(a, k)
            }
        }, m, g, u;
        if (1 < e)for (m = Array(e), g = Array(e), u = Array(e); a < e; a++)p[a] && k.isFunction(p[a].promise) ? p[a].promise().done(f(a, u, p)).fail(b.reject).progress(f(a, g, m)) : --c;
        c || b.resolveWith(u, p);
        return b.promise()
    }});
    k.support = function (d) {
        var e, p, c, b, f, m, g = I.createElement("div");
        g.setAttribute("className", "t");
        g.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        e = g.getElementsByTagName("*") || [];
        p = g.getElementsByTagName("a")[0];
        if (!p || !p.style || !e.length)return d;
        c = I.createElement("select");
        b = c.appendChild(I.createElement("option"));
        e = g.getElementsByTagName("input")[0];
        p.style.cssText = "top:1px;float:left;opacity:.5";
        d.getSetAttribute = "t" !== g.className;
        d.leadingWhitespace = 3 === g.firstChild.nodeType;
        d.tbody = !g.getElementsByTagName("tbody").length;
        d.htmlSerialize = !!g.getElementsByTagName("link").length;
        d.style = /top/.test(p.getAttribute("style"));
        d.hrefNormalized = "/a" === p.getAttribute("href");
        d.opacity = /^0.5/.test(p.style.opacity);
        d.cssFloat = !!p.style.cssFloat;
        d.checkOn = !!e.value;
        d.optSelected = b.selected;
        d.enctype = !!I.createElement("form").enctype;
        d.html5Clone = "<:nav></:nav>" !== I.createElement("nav").cloneNode(!0).outerHTML;
        d.inlineBlockNeedsLayout = !1;
        d.shrinkWrapBlocks = !1;
        d.pixelPosition = !1;
        d.deleteExpando = !0;
        d.noCloneEvent = !0;
        d.reliableMarginRight = !0;
        d.boxSizingReliable = !0;
        e.checked = !0;
        d.noCloneChecked = e.cloneNode(!0).checked;
        c.disabled = !0;
        d.optDisabled = !b.disabled;
        try {
            delete g.test
        } catch (u) {
            d.deleteExpando = !1
        }
        e = I.createElement("input");
        e.setAttribute("value", "");
        d.input = "" === e.getAttribute("value");
        e.value = "t";
        e.setAttribute("type", "radio");
        d.radioValue = "t" === e.value;
        e.setAttribute("checked", "t");
        e.setAttribute("name", "t");
        p = I.createDocumentFragment();
        p.appendChild(e);
        d.appendChecked = e.checked;
        d.checkClone = p.cloneNode(!0).cloneNode(!0).lastChild.checked;
        g.attachEvent && (g.attachEvent("onclick", function () {
            d.noCloneEvent = !1
        }), g.cloneNode(!0).click());
        for (m in{submit: !0, change: !0, focusin: !0})g.setAttribute(p = "on" + m, "t"), d[m + "Bubbles"] =
            p in a || !1 === g.attributes[p].expando;
        g.style.backgroundClip = "content-box";
        g.cloneNode(!0).style.backgroundClip = "";
        d.clearCloneStyle = "content-box" === g.style.backgroundClip;
        for (m in k(d))break;
        d.ownLast = "0" !== m;
        k(function () {
            var p, e, c = I.getElementsByTagName("body")[0];
            c && (p = I.createElement("div"), p.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", c.appendChild(p).appendChild(g), g.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = g.getElementsByTagName("td"),
                e[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", d.reliableHiddenOffsets = f && 0 === e[0].offsetHeight, g.innerHTML = "", g.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", k.swap(c, null != c.style.zoom ? {zoom: 1} : {}, function () {
                d.boxSizing = 4 === g.offsetWidth
            }), a.getComputedStyle && (d.pixelPosition =
                "1%" !== (a.getComputedStyle(g, null) || {}).top, d.boxSizingReliable = "4px" === (a.getComputedStyle(g, null) || {width: "4px"}).width, e = g.appendChild(I.createElement("div")), e.style.cssText = g.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e.style.marginRight = e.style.width = "0", g.style.width = "1px", d.reliableMarginRight = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), typeof g.style.zoom !== Z && (g.innerHTML = "",
                g.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", d.inlineBlockNeedsLayout = 3 === g.offsetWidth, g.style.display = "block", g.innerHTML = "<div></div>", g.firstChild.style.width = "5px", d.shrinkWrapBlocks = 3 !== g.offsetWidth, d.inlineBlockNeedsLayout && (c.style.zoom = 1)), c.removeChild(p), p = g = e = e = null)
        });
        e = c = p = b = p = e = null;
        return d
    }({});
    var wb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, vb = /([A-Z])/g;
    k.extend({cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (d) {
        d = d.nodeType ? k.cache[d[k.expando]] : d[k.expando];
        return!!d && !s(d)
    }, data: function (d, a, k) {
        return f(d, a, k)
    }, removeData: function (d, a) {
        return n(d, a)
    }, _data: function (d, a, k) {
        return f(d, a, k, !0)
    }, _removeData: function (d, a) {
        return n(d, a, !0)
    }, acceptData: function (d) {
        if (d.nodeType && 1 !== d.nodeType && 9 !== d.nodeType)return!1;
        var a = d.nodeName && k.noData[d.nodeName.toLowerCase()];
        return!a || !0 !== a && d.getAttribute("classid") ===
            a
    }});
    k.fn.extend({data: function (d, a) {
        var e, b, f = null, g = 0, m = this[0];
        if (d === c) {
            if (this.length && (f = k.data(m), 1 === m.nodeType && !k._data(m, "parsedAttrs"))) {
                for (e = m.attributes; g < e.length; g++)b = e[g].name, 0 === b.indexOf("data-") && (b = k.camelCase(b.slice(5)), l(m, b, f[b]));
                k._data(m, "parsedAttrs", !0)
            }
            return f
        }
        return"object" === typeof d ? this.each(function () {
            k.data(this, d)
        }) : 1 < arguments.length ? this.each(function () {
            k.data(this, d, a)
        }) : m ? l(m, d, k.data(m, d)) : null
    }, removeData: function (d) {
        return this.each(function () {
            k.removeData(this,
                d)
        })
    }});
    k.extend({queue: function (d, a, e) {
        var c;
        if (d)return a = (a || "fx") + "queue", c = k._data(d, a), e && (!c || k.isArray(e) ? c = k._data(d, a, k.makeArray(e)) : c.push(e)), c || []
    }, dequeue: function (d, a) {
        a = a || "fx";
        var e = k.queue(d, a), c = e.length, b = e.shift(), f = k._queueHooks(d, a), g = function () {
            k.dequeue(d, a)
        };
        "inprogress" === b && (b = e.shift(), c--);
        b && ("fx" === a && e.unshift("inprogress"), delete f.stop, b.call(d, g, f));
        !c && f && f.empty.fire()
    }, _queueHooks: function (d, a) {
        var e = a + "queueHooks";
        return k._data(d, e) || k._data(d, e, {empty: k.Callbacks("once memory").add(function () {
            k._removeData(d,
                a + "queue");
            k._removeData(d, e)
        })})
    }});
    k.fn.extend({queue: function (d, a) {
        var e = 2;
        "string" !== typeof d && (a = d, d = "fx", e--);
        return arguments.length < e ? k.queue(this[0], d) : a === c ? this : this.each(function () {
            var e = k.queue(this, d, a);
            k._queueHooks(this, d);
            "fx" === d && "inprogress" !== e[0] && k.dequeue(this, d)
        })
    }, dequeue: function (d) {
        return this.each(function () {
            k.dequeue(this, d)
        })
    }, delay: function (d, a) {
        d = k.fx ? k.fx.speeds[d] || d : d;
        return this.queue(a || "fx", function (a, k) {
            var e = setTimeout(a, d);
            k.stop = function () {
                clearTimeout(e)
            }
        })
    },
        clearQueue: function (d) {
            return this.queue(d || "fx", [])
        }, promise: function (d, a) {
            var e, b = 1, f = k.Deferred(), g = this, m = this.length, u = function () {
                --b || f.resolveWith(g, [g])
            };
            "string" !== typeof d && (a = d, d = c);
            for (d = d || "fx"; m--;)(e = k._data(g[m], d + "queueHooks")) && e.empty && (b++, e.empty.add(u));
            u();
            return f.promise(a)
        }});
    var ja, cb, La = /[\t\r\n\f]/g, Mb = /\r/g, Nb = /^(?:input|select|textarea|button|object)$/i, Ob = /^(?:a|area)$/i, Ma = /^(?:checked|selected)$/i, ka = k.support.getSetAttribute, Fa = k.support.input;
    k.fn.extend({attr: function (d, a) {
        return k.access(this, k.attr, d, a, 1 < arguments.length)
    }, removeAttr: function (d) {
        return this.each(function () {
            k.removeAttr(this, d)
        })
    }, prop: function (d, a) {
        return k.access(this, k.prop, d, a, 1 < arguments.length)
    }, removeProp: function (d) {
        d = k.propFix[d] || d;
        return this.each(function () {
            try {
                this[d] = c, delete this[d]
            } catch (a) {
            }
        })
    }, addClass: function (d) {
        var a, e, c, b, f, g = 0, m = this.length;
        a = "string" === typeof d && d;
        if (k.isFunction(d))return this.each(function (a) {
            k(this).addClass(d.call(this, a, this.className))
        });
        if (a)for (a =
                       (d || "").match(ga) || []; g < m; g++)if (e = this[g], c = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(La, " ") : " ")) {
            for (f = 0; b = a[f++];)0 > c.indexOf(" " + b + " ") && (c += b + " ");
            e.className = k.trim(c)
        }
        return this
    }, removeClass: function (d) {
        var a, e, c, b, f, g = 0, m = this.length;
        a = 0 === arguments.length || "string" === typeof d && d;
        if (k.isFunction(d))return this.each(function (a) {
            k(this).removeClass(d.call(this, a, this.className))
        });
        if (a)for (a = (d || "").match(ga) || []; g < m; g++)if (e = this[g], c = 1 === e.nodeType && (e.className ? (" " + e.className +
            " ").replace(La, " ") : "")) {
            for (f = 0; b = a[f++];)for (; 0 <= c.indexOf(" " + b + " ");)c = c.replace(" " + b + " ", " ");
            e.className = d ? k.trim(c) : ""
        }
        return this
    }, toggleClass: function (d, a) {
        var e = typeof d;
        return"boolean" === typeof a && "string" === e ? a ? this.addClass(d) : this.removeClass(d) : k.isFunction(d) ? this.each(function (e) {
            k(this).toggleClass(d.call(this, e, this.className, a), a)
        }) : this.each(function () {
            if ("string" === e)for (var a, c = 0, b = k(this), f = d.match(ga) || []; a = f[c++];)b.hasClass(a) ? b.removeClass(a) : b.addClass(a); else if (e ===
                Z || "boolean" === e)this.className && k._data(this, "__className__", this.className), this.className = this.className || !1 === d ? "" : k._data(this, "__className__") || ""
        })
    }, hasClass: function (d) {
        d = " " + d + " ";
        for (var a = 0, k = this.length; a < k; a++)if (1 === this[a].nodeType && 0 <= (" " + this[a].className + " ").replace(La, " ").indexOf(d))return!0;
        return!1
    }, val: function (d) {
        var a, e, b, f = this[0];
        if (arguments.length)return b = k.isFunction(d), this.each(function (a) {
            1 === this.nodeType && (a = b ? d.call(this, a, k(this).val()) : d, null == a ? a = "" : "number" === typeof a ? a += "" : k.isArray(a) && (a = k.map(a, function (d) {
                return null == d ? "" : d + ""
            })), e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()], e && "set"in e && e.set(this, a, "value") !== c || (this.value = a))
        });
        if (f) {
            if ((e = k.valHooks[f.type] || k.valHooks[f.nodeName.toLowerCase()]) && "get"in e && (a = e.get(f, "value")) !== c)return a;
            a = f.value;
            return"string" === typeof a ? a.replace(Mb, "") : null == a ? "" : a
        }
    }});
    k.extend({valHooks: {option: {get: function (d) {
        var a = k.find.attr(d, "value");
        return null != a ? a : d.text
    }}, select: {get: function (d) {
        for (var a,
                 e = d.options, c = d.selectedIndex, b = (d = "select-one" === d.type || 0 > c) ? null : [], f = d ? c + 1 : e.length, g = 0 > c ? f : d ? c : 0; g < f; g++)if (a = e[g], !(!a.selected && g !== c || (k.support.optDisabled ? a.disabled : null !== a.getAttribute("disabled")) || a.parentNode.disabled && k.nodeName(a.parentNode, "optgroup"))) {
            a = k(a).val();
            if (d)return a;
            b.push(a)
        }
        return b
    }, set: function (d, a) {
        for (var e, c, b = d.options, f = k.makeArray(a), g = b.length; g--;)if (c = b[g], c.selected = 0 <= k.inArray(k(c).val(), f))e = !0;
        e || (d.selectedIndex = -1);
        return f
    }}}, attr: function (d, a, e) {
        var b, f, g = d.nodeType;
        if (d && 3 !== g && 8 !== g && 2 !== g) {
            if (typeof d.getAttribute === Z)return k.prop(d, a, e);
            1 === g && k.isXMLDoc(d) || (a = a.toLowerCase(), b = k.attrHooks[a] || (k.expr.match.bool.test(a) ? cb : ja));
            if (e !== c)if (null === e)k.removeAttr(d, a); else {
                if (b && "set"in b && (f = b.set(d, e, a)) !== c)return f;
                d.setAttribute(a, e + "");
                return e
            } else {
                if (b && "get"in b && null !== (f = b.get(d, a)))return f;
                f = k.find.attr(d, a);
                return null == f ? c : f
            }
        }
    }, removeAttr: function (d, a) {
        var e, c, b = 0, f = a && a.match(ga);
        if (f && 1 === d.nodeType)for (; e = f[b++];)c =
            k.propFix[e] || e, k.expr.match.bool.test(e) ? Fa && ka || !Ma.test(e) ? d[c] = !1 : d[k.camelCase("default-" + e)] = d[c] = !1 : k.attr(d, e, ""), d.removeAttribute(ka ? e : c)
    }, attrHooks: {type: {set: function (d, a) {
        if (!k.support.radioValue && "radio" === a && k.nodeName(d, "input")) {
            var e = d.value;
            d.setAttribute("type", a);
            e && (d.value = e);
            return a
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (d, a, e) {
        var b, f, g;
        g = d.nodeType;
        if (d && 3 !== g && 8 !== g && 2 !== g) {
            if (g = 1 !== g || !k.isXMLDoc(d))a = k.propFix[a] || a, f = k.propHooks[a];
            return e !==
                c ? f && "set"in f && (b = f.set(d, e, a)) !== c ? b : d[a] = e : f && "get"in f && null !== (b = f.get(d, a)) ? b : d[a]
        }
    }, propHooks: {tabIndex: {get: function (d) {
        var a = k.find.attr(d, "tabindex");
        return a ? parseInt(a, 10) : Nb.test(d.nodeName) || Ob.test(d.nodeName) && d.href ? 0 : -1
    }}}});
    cb = {set: function (d, a, e) {
        !1 === a ? k.removeAttr(d, e) : Fa && ka || !Ma.test(e) ? d.setAttribute(!ka && k.propFix[e] || e, e) : d[k.camelCase("default-" + e)] = d[e] = !0;
        return e
    }};
    k.each(k.expr.match.bool.source.match(/\w+/g), function (d, a) {
        var e = k.expr.attrHandle[a] || k.find.attr;
        k.expr.attrHandle[a] =
            Fa && ka || !Ma.test(a) ? function (d, a, b) {
                var f = k.expr.attrHandle[a];
                d = b ? c : (k.expr.attrHandle[a] = c) != e(d, a, b) ? a.toLowerCase() : null;
                k.expr.attrHandle[a] = f;
                return d
            } : function (d, a, e) {
                return e ? c : d[k.camelCase("default-" + a)] ? a.toLowerCase() : null
            }
    });
    Fa && ka || (k.attrHooks.value = {set: function (d, a, e) {
        if (k.nodeName(d, "input"))d.defaultValue = a; else return ja && ja.set(d, a, e)
    }});
    ka || (ja = {set: function (d, a, k) {
        var e = d.getAttributeNode(k);
        e || d.setAttributeNode(e = d.ownerDocument.createAttribute(k));
        e.value = a += "";
        return"value" ===
            k || a === d.getAttribute(k) ? a : c
    }}, k.expr.attrHandle.id = k.expr.attrHandle.name = k.expr.attrHandle.coords = function (d, a, k) {
        var e;
        return k ? c : (e = d.getAttributeNode(a)) && "" !== e.value ? e.value : null
    }, k.valHooks.button = {get: function (d, a) {
        var k = d.getAttributeNode(a);
        return k && k.specified ? k.value : c
    }, set: ja.set}, k.attrHooks.contenteditable = {set: function (d, a, k) {
        ja.set(d, "" === a ? !1 : a, k)
    }}, k.each(["width", "height"], function (d, a) {
        k.attrHooks[a] = {set: function (d, k) {
            if ("" === k)return d.setAttribute(a, "auto"), k
        }}
    }));
    k.support.hrefNormalized ||
    k.each(["href", "src"], function (d, a) {
        k.propHooks[a] = {get: function (d) {
            return d.getAttribute(a, 4)
        }}
    });
    k.support.style || (k.attrHooks.style = {get: function (d) {
        return d.style.cssText || c
    }, set: function (d, a) {
        return d.style.cssText = a + ""
    }});
    k.support.optSelected || (k.propHooks.selected = {get: function (d) {
        if (d = d.parentNode)d.selectedIndex, d.parentNode && d.parentNode.selectedIndex;
        return null
    }});
    k.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
        function () {
            k.propFix[this.toLowerCase()] = this
        });
    k.support.enctype || (k.propFix.enctype = "encoding");
    k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {set: function (d, a) {
            if (k.isArray(a))return d.checked = 0 <= k.inArray(k(d).val(), a)
        }};
        k.support.checkOn || (k.valHooks[this].get = function (d) {
            return null === d.getAttribute("value") ? "on" : d.value
        })
    });
    var Na = /^(?:input|select|textarea)$/i, Pb = /^key/, Qb = /^(?:mouse|contextmenu)|click/, db = /^(?:focusinfocus|focusoutblur)$/, eb = /^([^.]*)(?:\.(.+)|)$/;
    k.event = {global: {},
        add: function (d, a, e, b, f) {
            var g, m, u, r, n, x, l, q, H;
            if (u = k._data(d)) {
                e.handler && (r = e, e = r.handler, f = r.selector);
                e.guid || (e.guid = k.guid++);
                (m = u.events) || (m = u.events = {});
                (n = u.handle) || (n = u.handle = function (d) {
                    return typeof k === Z || d && k.event.triggered === d.type ? c : k.event.dispatch.apply(n.elem, arguments)
                }, n.elem = d);
                a = (a || "").match(ga) || [""];
                for (u = a.length; u--;)g = eb.exec(a[u]) || [], q = x = g[1], H = (g[2] || "").split(".").sort(), q && (g = k.event.special[q] || {}, q = (f ? g.delegateType : g.bindType) || q, g = k.event.special[q] || {}, x =
                    k.extend({type: q, origType: x, data: b, handler: e, guid: e.guid, selector: f, needsContext: f && k.expr.match.needsContext.test(f), namespace: H.join(".")}, r), (l = m[q]) || (l = m[q] = [], l.delegateCount = 0, g.setup && !1 !== g.setup.call(d, b, H, n) || (d.addEventListener ? d.addEventListener(q, n, !1) : d.attachEvent && d.attachEvent("on" + q, n))), g.add && (g.add.call(d, x), x.handler.guid || (x.handler.guid = e.guid)), f ? l.splice(l.delegateCount++, 0, x) : l.push(x), k.event.global[q] = !0);
                d = null
            }
        }, remove: function (d, a, e, c, b) {
            var f, g, m, u, r, n, x, l, q, H, J,
                E = k.hasData(d) && k._data(d);
            if (E && (n = E.events)) {
                a = (a || "").match(ga) || [""];
                for (r = a.length; r--;)if (m = eb.exec(a[r]) || [], q = J = m[1], H = (m[2] || "").split(".").sort(), q) {
                    x = k.event.special[q] || {};
                    q = (c ? x.delegateType : x.bindType) || q;
                    l = n[q] || [];
                    m = m[2] && RegExp("(^|\\.)" + H.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (u = f = l.length; f--;)g = l[f], !b && J !== g.origType || e && e.guid !== g.guid || m && !m.test(g.namespace) || c && !(c === g.selector || "**" === c && g.selector) || (l.splice(f, 1), g.selector && l.delegateCount--, x.remove && x.remove.call(d, g));
                    u && !l.length && (x.teardown && !1 !== x.teardown.call(d, H, E.handle) || k.removeEvent(d, q, E.handle), delete n[q])
                } else for (q in n)k.event.remove(d, q + a[r], e, c, !0);
                k.isEmptyObject(n) && (delete E.handle, k._removeData(d, "events"))
            }
        }, trigger: function (d, e, b, f) {
            var g, m, u, r, n, x, l = [b || I], q = va.call(d, "type") ? d.type : d;
            n = va.call(d, "namespace") ? d.namespace.split(".") : [];
            u = g = b = b || I;
            if (3 !== b.nodeType && 8 !== b.nodeType && !db.test(q + k.event.triggered) && (0 <= q.indexOf(".") && (n = q.split("."), q = n.shift(), n.sort()), m = 0 > q.indexOf(":") &&
                "on" + q, d = d[k.expando] ? d : new k.Event(q, "object" === typeof d && d), d.isTrigger = f ? 2 : 3, d.namespace = n.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d.result = c, d.target || (d.target = b), e = null == e ? [d] : k.makeArray(e, [d]), n = k.event.special[q] || {}, f || !n.trigger || !1 !== n.trigger.apply(b, e))) {
                if (!f && !n.noBubble && !k.isWindow(b)) {
                    r = n.delegateType || q;
                    db.test(r + q) || (u = u.parentNode);
                    for (; u; u = u.parentNode)l.push(u), g = u;
                    g === (b.ownerDocument || I) && l.push(g.defaultView || g.parentWindow ||
                        a)
                }
                for (x = 0; (u = l[x++]) && !d.isPropagationStopped();)d.type = 1 < x ? r : n.bindType || q, (g = (k._data(u, "events") || {})[d.type] && k._data(u, "handle")) && g.apply(u, e), (g = m && u[m]) && k.acceptData(u) && g.apply && !1 === g.apply(u, e) && d.preventDefault();
                d.type = q;
                if (!(f || d.isDefaultPrevented() || n._default && !1 !== n._default.apply(l.pop(), e)) && k.acceptData(b) && m && b[q] && !k.isWindow(b)) {
                    (g = b[m]) && (b[m] = null);
                    k.event.triggered = q;
                    try {
                        b[q]()
                    } catch (H) {
                    }
                    k.event.triggered = c;
                    g && (b[m] = g)
                }
                return d.result
            }
        }, dispatch: function (d) {
            d = k.event.fix(d);
            var a, e, b, f, g = [], m = sa.call(arguments);
            a = (k._data(this, "events") || {})[d.type] || [];
            var u = k.event.special[d.type] || {};
            m[0] = d;
            d.delegateTarget = this;
            if (!u.preDispatch || !1 !== u.preDispatch.call(this, d)) {
                g = k.event.handlers.call(this, d, a);
                for (a = 0; (b = g[a++]) && !d.isPropagationStopped();)for (d.currentTarget = b.elem, f = 0; (e = b.handlers[f++]) && !d.isImmediatePropagationStopped();)if (!d.namespace_re || d.namespace_re.test(e.namespace))d.handleObj = e, d.data = e.data, e = ((k.event.special[e.origType] || {}).handle || e.handler).apply(b.elem,
                    m), e !== c && !1 === (d.result = e) && (d.preventDefault(), d.stopPropagation());
                u.postDispatch && u.postDispatch.call(this, d);
                return d.result
            }
        }, handlers: function (d, a) {
            var e, b, f, g, m = [], u = a.delegateCount, r = d.target;
            if (u && r.nodeType && (!d.button || "click" !== d.type))for (; r != this; r = r.parentNode || this)if (1 === r.nodeType && (!0 !== r.disabled || "click" !== d.type)) {
                f = [];
                for (g = 0; g < u; g++)b = a[g], e = b.selector + " ", f[e] === c && (f[e] = b.needsContext ? 0 <= k(e, this).index(r) : k.find(e, this, null, [r]).length), f[e] && f.push(b);
                f.length && m.push({elem: r,
                    handlers: f})
            }
            u < a.length && m.push({elem: this, handlers: a.slice(u)});
            return m
        }, fix: function (d) {
            if (d[k.expando])return d;
            var a, e, c;
            a = d.type;
            var b = d, f = this.fixHooks[a];
            f || (this.fixHooks[a] = f = Qb.test(a) ? this.mouseHooks : Pb.test(a) ? this.keyHooks : {});
            c = f.props ? this.props.concat(f.props) : this.props;
            d = new k.Event(b);
            for (a = c.length; a--;)e = c[a], d[e] = b[e];
            d.target || (d.target = b.srcElement || I);
            3 === d.target.nodeType && (d.target = d.target.parentNode);
            d.metaKey = !!d.metaKey;
            return f.filter ? f.filter(d, b) : d
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {}, keyHooks: {props: ["char", "charCode", "key", "keyCode"], filter: function (d, a) {
            null == d.which && (d.which = null != a.charCode ? a.charCode : a.keyCode);
            return d
        }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (d, a) {
            var k, e, b = a.button, f = a.fromElement;
            null == d.pageX && null != a.clientX && (k = d.target.ownerDocument || I, e = k.documentElement, k = k.body, d.pageX = a.clientX + (e && e.scrollLeft || k && k.scrollLeft || 0) - (e && e.clientLeft ||
                k && k.clientLeft || 0), d.pageY = a.clientY + (e && e.scrollTop || k && k.scrollTop || 0) - (e && e.clientTop || k && k.clientTop || 0));
            !d.relatedTarget && f && (d.relatedTarget = f === d.target ? a.toElement : f);
            d.which || b === c || (d.which = b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0);
            return d
        }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
            if (this !== y() && this.focus)try {
                return this.focus(), !1
            } catch (d) {
            }
        }, delegateType: "focusin"}, blur: {trigger: function () {
            if (this === y() && this.blur)return this.blur(), !1
        }, delegateType: "focusout"}, click: {trigger: function () {
            if (k.nodeName(this,
                "input") && "checkbox" === this.type && this.click)return this.click(), !1
        }, _default: function (d) {
            return k.nodeName(d.target, "a")
        }}, beforeunload: {postDispatch: function (d) {
            d.result !== c && (d.originalEvent.returnValue = d.result)
        }}}, simulate: function (d, a, e, c) {
            d = k.extend(new k.Event, e, {type: d, isSimulated: !0, originalEvent: {}});
            c ? k.event.trigger(d, null, a) : k.event.dispatch.call(a, d);
            d.isDefaultPrevented() && e.preventDefault()
        }};
    k.removeEvent = I.removeEventListener ? function (d, a, k) {
        d.removeEventListener && d.removeEventListener(a,
            k, !1)
    } : function (d, a, k) {
        a = "on" + a;
        d.detachEvent && (typeof d[a] === Z && (d[a] = null), d.detachEvent(a, k))
    };
    k.Event = function (d, a) {
        if (!(this instanceof k.Event))return new k.Event(d, a);
        d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || !1 === d.returnValue || d.getPreventDefault && d.getPreventDefault() ? t : v) : this.type = d;
        a && k.extend(this, a);
        this.timeStamp = d && d.timeStamp || k.now();
        this[k.expando] = !0
    };
    k.Event.prototype = {isDefaultPrevented: v, isPropagationStopped: v, isImmediatePropagationStopped: v,
        preventDefault: function () {
            var d = this.originalEvent;
            this.isDefaultPrevented = t;
            d && (d.preventDefault ? d.preventDefault() : d.returnValue = !1)
        }, stopPropagation: function () {
            var d = this.originalEvent;
            this.isPropagationStopped = t;
            d && (d.stopPropagation && d.stopPropagation(), d.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = t;
            this.stopPropagation()
        }};
    k.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (d, a) {
        k.event.special[d] = {delegateType: a, bindType: a, handle: function (d) {
            var e,
                c = d.relatedTarget, b = d.handleObj;
            if (!c || c !== this && !k.contains(this, c))d.type = b.origType, e = b.handler.apply(this, arguments), d.type = a;
            return e
        }}
    });
    k.support.submitBubbles || (k.event.special.submit = {setup: function () {
        if (k.nodeName(this, "form"))return!1;
        k.event.add(this, "click._submit keypress._submit", function (d) {
            d = d.target;
            (d = k.nodeName(d, "input") || k.nodeName(d, "button") ? d.form : c) && !k._data(d, "submitBubbles") && (k.event.add(d, "submit._submit", function (d) {
                d._submit_bubble = !0
            }), k._data(d, "submitBubbles", !0))
        })
    },
        postDispatch: function (d) {
            d._submit_bubble && (delete d._submit_bubble, this.parentNode && !d.isTrigger && k.event.simulate("submit", this.parentNode, d, !0))
        }, teardown: function () {
            if (k.nodeName(this, "form"))return!1;
            k.event.remove(this, "._submit")
        }});
    k.support.changeBubbles || (k.event.special.change = {setup: function () {
        if (Na.test(this.nodeName)) {
            if ("checkbox" === this.type || "radio" === this.type)k.event.add(this, "propertychange._change", function (d) {
                "checked" === d.originalEvent.propertyName && (this._just_changed = !0)
            }),
                k.event.add(this, "click._change", function (d) {
                    this._just_changed && !d.isTrigger && (this._just_changed = !1);
                    k.event.simulate("change", this, d, !0)
                });
            return!1
        }
        k.event.add(this, "beforeactivate._change", function (d) {
            d = d.target;
            Na.test(d.nodeName) && !k._data(d, "changeBubbles") && (k.event.add(d, "change._change", function (d) {
                !this.parentNode || d.isSimulated || d.isTrigger || k.event.simulate("change", this.parentNode, d, !0)
            }), k._data(d, "changeBubbles", !0))
        })
    }, handle: function (d) {
        var a = d.target;
        if (this !== a || d.isSimulated ||
            d.isTrigger || "radio" !== a.type && "checkbox" !== a.type)return d.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
        k.event.remove(this, "._change");
        return!Na.test(this.nodeName)
    }});
    k.support.focusinBubbles || k.each({focus: "focusin", blur: "focusout"}, function (d, a) {
        var e = 0, c = function (d) {
            k.event.simulate(a, d.target, k.event.fix(d), !0)
        };
        k.event.special[a] = {setup: function () {
            0 === e++ && I.addEventListener(d, c, !0)
        }, teardown: function () {
            0 === --e && I.removeEventListener(d, c, !0)
        }}
    });
    k.fn.extend({on: function (d, a, e, b, f) {
        var g, m;
        if ("object" === typeof d) {
            "string" !== typeof a && (e = e || a, a = c);
            for (g in d)this.on(g, a, e, d[g], f);
            return this
        }
        null == e && null == b ? (b = a, e = a = c) : null == b && ("string" === typeof a ? (b = e, e = c) : (b = e, e = a, a = c));
        if (!1 === b)b = v; else if (!b)return this;
        1 === f && (m = b, b = function (d) {
            k().off(d);
            return m.apply(this, arguments)
        }, b.guid = m.guid || (m.guid = k.guid++));
        return this.each(function () {
            k.event.add(this, d, b, e, a)
        })
    }, one: function (d, a, k, e) {
        return this.on(d, a, k, e, 1)
    }, off: function (d, a, e) {
        var b;
        if (d && d.preventDefault && d.handleObj)return b =
            d.handleObj, k(d.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler), this;
        if ("object" === typeof d) {
            for (b in d)this.off(b, a, d[b]);
            return this
        }
        if (!1 === a || "function" === typeof a)e = a, a = c;
        !1 === e && (e = v);
        return this.each(function () {
            k.event.remove(this, d, e, a)
        })
    }, trigger: function (d, a) {
        return this.each(function () {
            k.event.trigger(d, a, this)
        })
    }, triggerHandler: function (d, a) {
        var e = this[0];
        if (e)return k.event.trigger(d, a, e, !0)
    }});
    var xb = /^.[^:#\[\.,]*$/, Rb = /^(?:parents|prev(?:Until|All))/,
        fb = k.expr.match.needsContext, Sb = {children: !0, contents: !0, next: !0, prev: !0};
    k.fn.extend({find: function (d) {
        var a, e = [], c = this, b = c.length;
        if ("string" !== typeof d)return this.pushStack(k(d).filter(function () {
            for (a = 0; a < b; a++)if (k.contains(c[a], this))return!0
        }));
        for (a = 0; a < b; a++)k.find(d, c[a], e);
        e = this.pushStack(1 < b ? k.unique(e) : e);
        e.selector = this.selector ? this.selector + " " + d : d;
        return e
    }, has: function (d) {
        var a, e = k(d, this), c = e.length;
        return this.filter(function () {
            for (a = 0; a < c; a++)if (k.contains(this, e[a]))return!0
        })
    },
        not: function (d) {
            return this.pushStack(C(this, d || [], !0))
        }, filter: function (d) {
            return this.pushStack(C(this, d || [], !1))
        }, is: function (d) {
            return!!C(this, "string" === typeof d && fb.test(d) ? k(d) : d || [], !1).length
        }, closest: function (d, a) {
            for (var e, c = 0, b = this.length, f = [], g = fb.test(d) || "string" !== typeof d ? k(d, a || this.context) : 0; c < b; c++)for (e = this[c]; e && e !== a; e = e.parentNode)if (11 > e.nodeType && (g ? -1 < g.index(e) : 1 === e.nodeType && k.find.matchesSelector(e, d))) {
                f.push(e);
                break
            }
            return this.pushStack(1 < f.length ? k.unique(f) :
                f)
        }, index: function (d) {
            return d ? "string" === typeof d ? k.inArray(this[0], k(d)) : k.inArray(d.jquery ? d[0] : d, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (d, a) {
            var e = "string" === typeof d ? k(d, a) : k.makeArray(d && d.nodeType ? [d] : d), e = k.merge(this.get(), e);
            return this.pushStack(k.unique(e))
        }, addBack: function (d) {
            return this.add(null == d ? this.prevObject : this.prevObject.filter(d))
        }});
    k.each({parent: function (d) {
        return(d = d.parentNode) && 11 !== d.nodeType ? d : null
    }, parents: function (d) {
        return k.dir(d,
            "parentNode")
    }, parentsUntil: function (d, a, e) {
        return k.dir(d, "parentNode", e)
    }, next: function (d) {
        return w(d, "nextSibling")
    }, prev: function (d) {
        return w(d, "previousSibling")
    }, nextAll: function (d) {
        return k.dir(d, "nextSibling")
    }, prevAll: function (d) {
        return k.dir(d, "previousSibling")
    }, nextUntil: function (d, a, e) {
        return k.dir(d, "nextSibling", e)
    }, prevUntil: function (d, a, e) {
        return k.dir(d, "previousSibling", e)
    }, siblings: function (d) {
        return k.sibling((d.parentNode || {}).firstChild, d)
    }, children: function (d) {
        return k.sibling(d.firstChild)
    },
        contents: function (d) {
            return k.nodeName(d, "iframe") ? d.contentDocument || d.contentWindow.document : k.merge([], d.childNodes)
        }}, function (d, a) {
        k.fn[d] = function (e, c) {
            var b = k.map(this, a, e);
            "Until" !== d.slice(-5) && (c = e);
            c && "string" === typeof c && (b = k.filter(c, b));
            1 < this.length && (Sb[d] || (b = k.unique(b)), Rb.test(d) && (b = b.reverse()));
            return this.pushStack(b)
        }
    });
    k.extend({filter: function (d, a, e) {
        var c = a[0];
        e && (d = ":not(" + d + ")");
        return 1 === a.length && 1 === c.nodeType ? k.find.matchesSelector(c, d) ? [c] : [] : k.find.matches(d, k.grep(a,
            function (d) {
                return 1 === d.nodeType
            }))
    }, dir: function (d, a, e) {
        var b = [];
        for (d = d[a]; d && 9 !== d.nodeType && (e === c || 1 !== d.nodeType || !k(d).is(e));)1 === d.nodeType && b.push(d), d = d[a];
        return b
    }, sibling: function (d, a) {
        for (var e = []; d; d = d.nextSibling)1 === d.nodeType && d !== a && e.push(d);
        return e
    }});
    var Wa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Tb = / jQuery\d+="(?:null|\d+)"/g, gb = RegExp("<(?:" + Wa + ")[\\s/>]",
        "i"), Oa = /^\s+/, hb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ib = /<([\w:]+)/, jb = /<tbody/i, Ub = /<|&#?\w+;/, Vb = /<(?:script|style|link)/i, Ha = /^(?:checkbox|radio)$/i, Wb = /checked\s*(?:[^=]|=\s*.checked.)/i, kb = /^$|\/(?:java|ecma)script/i, yb = /^true\/(.*)/, Xb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, S = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Pa = B(I).appendChild(I.createElement("div"));
    S.optgroup = S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    k.fn.extend({text: function (d) {
        return k.access(this, function (d) {
                return d === c ? k.text(this) : this.empty().append((this[0] && this[0].ownerDocument || I).createTextNode(d))
            },
            null, d, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (d) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, d).appendChild(d)
        })
    }, prepend: function () {
        return this.domManip(arguments, function (d) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var a = D(this, d);
                a.insertBefore(d, a.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (d) {
            this.parentNode && this.parentNode.insertBefore(d, this)
        })
    }, after: function () {
        return this.domManip(arguments,
            function (d) {
                this.parentNode && this.parentNode.insertBefore(d, this.nextSibling)
            })
    }, remove: function (d, a) {
        for (var e, c = d ? k.filter(d, this) : this, b = 0; null != (e = c[b]); b++)a || 1 !== e.nodeType || k.cleanData(G(e)), e.parentNode && (a && k.contains(e.ownerDocument, e) && q(G(e, "script")), e.parentNode.removeChild(e));
        return this
    }, empty: function () {
        for (var d, a = 0; null != (d = this[a]); a++) {
            for (1 === d.nodeType && k.cleanData(G(d, !1)); d.firstChild;)d.removeChild(d.firstChild);
            d.options && k.nodeName(d, "select") && (d.options.length = 0)
        }
        return this
    },
        clone: function (d, a) {
            d = null == d ? !1 : d;
            a = null == a ? d : a;
            return this.map(function () {
                return k.clone(this, d, a)
            })
        }, html: function (d) {
            return k.access(this, function (d) {
                var a = this[0] || {}, e = 0, b = this.length;
                if (d === c)return 1 === a.nodeType ? a.innerHTML.replace(Tb, "") : c;
                if ("string" === typeof d && !(Vb.test(d) || !k.support.htmlSerialize && gb.test(d) || !k.support.leadingWhitespace && Oa.test(d) || S[(ib.exec(d) || ["", ""])[1].toLowerCase()])) {
                    d = d.replace(hb, "<$1></$2>");
                    try {
                        for (; e < b; e++)a = this[e] || {}, 1 === a.nodeType && (k.cleanData(G(a,
                            !1)), a.innerHTML = d);
                        a = 0
                    } catch (f) {
                    }
                }
                a && this.empty().append(d)
            }, null, d, arguments.length)
        }, replaceWith: function () {
            var d = k.map(this, function (d) {
                return[d.nextSibling, d.parentNode]
            }), a = 0;
            this.domManip(arguments, function (e) {
                var c = d[a++], b = d[a++];
                b && (c && c.parentNode !== b && (c = this.nextSibling), k(this).remove(), b.insertBefore(e, c))
            }, !0);
            return a ? this : this.remove()
        }, detach: function (d) {
            return this.remove(d, !0)
        }, domManip: function (d, a, e) {
            d = Za.apply([], d);
            var c, b, f, g, u = 0, n = this.length, x = this, l = n - 1, q = d[0], H = k.isFunction(q);
            if (H || !(1 >= n || "string" !== typeof q || k.support.checkClone) && Wb.test(q))return this.each(function (k) {
                var c = x.eq(k);
                H && (d[0] = q.call(this, k, c.html()));
                c.domManip(d, a, e)
            });
            if (n && (g = k.buildFragment(d, this[0].ownerDocument, !1, !e && this), c = g.firstChild, 1 === g.childNodes.length && (g = c), c)) {
                f = k.map(G(g, "script"), m);
                for (b = f.length; u < n; u++)c = g, u !== l && (c = k.clone(c, !0, !0), b && k.merge(f, G(c, "script"))), a.call(this[u], c, u);
                if (b)for (g = f[f.length - 1].ownerDocument, k.map(f, r), u = 0; u < b; u++)c = f[u], kb.test(c.type || "") && !k._data(c,
                    "globalEval") && k.contains(g, c) && (c.src ? k._evalUrl(c.src) : k.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Xb, "")));
                g = c = null
            }
            return this
        }});
    k.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (d, a) {
        k.fn[d] = function (d) {
            for (var e = 0, c = [], b = k(d), f = b.length - 1; e <= f; e++)d = e === f ? this : this.clone(!0), k(b[e])[a](d), Ja.apply(c, d.get());
            return this.pushStack(c)
        }
    });
    k.extend({clone: function (d, a, e) {
        var c, b, f, g, u, n = k.contains(d.ownerDocument,
            d);
        k.support.html5Clone || k.isXMLDoc(d) || !gb.test("<" + d.nodeName + ">") ? f = d.cloneNode(!0) : (Pa.innerHTML = d.outerHTML, Pa.removeChild(f = Pa.firstChild));
        if (!(k.support.noCloneEvent && k.support.noCloneChecked || 1 !== d.nodeType && 11 !== d.nodeType || k.isXMLDoc(d)))for (c = G(f), u = G(d), g = 0; null != (b = u[g]); ++g)if (c[g]) {
            var x = c[g], l = void 0, H = void 0, J = void 0;
            if (1 === x.nodeType) {
                l = x.nodeName.toLowerCase();
                if (!k.support.noCloneEvent && x[k.expando]) {
                    J = k._data(x);
                    for (H in J.events)k.removeEvent(x, H, J.handle);
                    x.removeAttribute(k.expando)
                }
                if ("script" ===
                    l && x.text !== b.text)m(x).text = b.text, r(x); else if ("object" === l)x.parentNode && (x.outerHTML = b.outerHTML), k.support.html5Clone && b.innerHTML && !k.trim(x.innerHTML) && (x.innerHTML = b.innerHTML); else if ("input" === l && Ha.test(b.type))x.defaultChecked = x.checked = b.checked, x.value !== b.value && (x.value = b.value); else if ("option" === l)x.defaultSelected = x.selected = b.defaultSelected; else if ("input" === l || "textarea" === l)x.defaultValue = b.defaultValue
            }
        }
        if (a)if (e)for (u = u || G(d), c = c || G(f), g = 0; null != (b = u[g]); g++)E(b, c[g]); else E(d,
            f);
        c = G(f, "script");
        0 < c.length && q(c, !n && G(d, "script"));
        return f
    }, buildFragment: function (d, a, e, c) {
        for (var b, f, g, m, u, r, n = d.length, x = B(a), l = [], H = 0; H < n; H++)if ((f = d[H]) || 0 === f)if ("object" === k.type(f))k.merge(l, f.nodeType ? [f] : f); else if (Ub.test(f)) {
            g = g || x.appendChild(a.createElement("div"));
            m = (ib.exec(f) || ["", ""])[1].toLowerCase();
            r = S[m] || S._default;
            g.innerHTML = r[1] + f.replace(hb, "<$1></$2>") + r[2];
            for (b = r[0]; b--;)g = g.lastChild;
            !k.support.leadingWhitespace && Oa.test(f) && l.push(a.createTextNode(Oa.exec(f)[0]));
            if (!k.support.tbody)for (b = (f = "table" !== m || jb.test(f) ? "<table>" !== r[1] || jb.test(f) ? 0 : g : g.firstChild) && f.childNodes.length; b--;)k.nodeName(u = f.childNodes[b], "tbody") && !u.childNodes.length && f.removeChild(u);
            k.merge(l, g.childNodes);
            for (g.textContent = ""; g.firstChild;)g.removeChild(g.firstChild);
            g = x.lastChild
        } else l.push(a.createTextNode(f));
        g && x.removeChild(g);
        k.support.appendChecked || k.grep(G(l, "input"), z);
        for (H = 0; f = l[H++];)if (!c || -1 === k.inArray(f, c))if (d = k.contains(f.ownerDocument, f), g = G(x.appendChild(f),
            "script"), d && q(g), e)for (b = 0; f = g[b++];)kb.test(f.type || "") && e.push(f);
        return x
    }, cleanData: function (d, a) {
        for (var e, c, b, f, g = 0, m = k.expando, u = k.cache, r = k.support.deleteExpando, x = k.event.special; null != (e = d[g]); g++)if (a || k.acceptData(e))if (f = (b = e[m]) && u[b]) {
            if (f.events)for (c in f.events)x[c] ? k.event.remove(e, c) : k.removeEvent(e, c, f.handle);
            u[b] && (delete u[b], r ? delete e[m] : typeof e.removeAttribute !== Z ? e.removeAttribute(m) : e[m] = null, da.push(b))
        }
    }, _evalUrl: function (d) {
        return k.ajax({url: d, type: "GET", dataType: "script",
            async: !1, global: !1, "throws": !0})
    }});
    k.fn.extend({wrapAll: function (d) {
        if (k.isFunction(d))return this.each(function (a) {
            k(this).wrapAll(d.call(this, a))
        });
        if (this[0]) {
            var a = k(d, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && a.insertBefore(this[0]);
            a.map(function () {
                for (var d = this; d.firstChild && 1 === d.firstChild.nodeType;)d = d.firstChild;
                return d
            }).append(this)
        }
        return this
    }, wrapInner: function (d) {
        return k.isFunction(d) ? this.each(function (a) {
            k(this).wrapInner(d.call(this, a))
        }) : this.each(function () {
            var a =
                k(this), e = a.contents();
            e.length ? e.wrapAll(d) : a.append(d)
        })
    }, wrap: function (d) {
        var a = k.isFunction(d);
        return this.each(function (e) {
            k(this).wrapAll(a ? d.call(this, e) : d)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
        }).end()
    }});
    var ya, ha, ea, Qa = /alpha\([^)]*\)/i, Yb = /opacity\s*=\s*([^)]*)/, Zb = /^(top|right|bottom|left)$/, $b = /^(none|table(?!-c[ea]).+)/, lb = /^margin/, zb = RegExp("^(" + Ea + ")(.*)$", "i"), Ca = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        ac = RegExp("^([+-])=(" + Ea + ")", "i"), Ya = {BODY: "block"}, bc = {position: "absolute", visibility: "hidden", display: "block"}, mb = {letterSpacing: 0, fontWeight: 400}, ma = ["Top", "Right", "Bottom", "Left"], Xa = ["Webkit", "O", "Moz", "ms"];
    k.fn.extend({css: function (d, a) {
        return k.access(this, function (d, a, e) {
            var b, f = {}, g = 0;
            if (k.isArray(a)) {
                b = ha(d);
                for (e = a.length; g < e; g++)f[a[g]] = k.css(d, a[g], !1, b);
                return f
            }
            return e !== c ? k.style(d, a, e) : k.css(d, a)
        }, d, a, 1 < arguments.length)
    }, show: function () {
        return H(this, !0)
    }, hide: function () {
        return H(this)
    },
        toggle: function (d) {
            return"boolean" === typeof d ? d ? this.show() : this.hide() : this.each(function () {
                x(this) ? k(this).show() : k(this).hide()
            })
        }});
    k.extend({cssHooks: {opacity: {get: function (d, a) {
        if (a) {
            var e = ea(d, "opacity");
            return"" === e ? "1" : e
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": k.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (d, a, b, f) {
        if (d && 3 !== d.nodeType && 8 !== d.nodeType && d.style) {
            var g,
                m, u, r = k.camelCase(a), x = d.style;
            a = k.cssProps[r] || (k.cssProps[r] = e(x, r));
            u = k.cssHooks[a] || k.cssHooks[r];
            if (b !== c) {
                if (m = typeof b, "string" === m && (g = ac.exec(b)) && (b = (g[1] + 1) * g[2] + parseFloat(k.css(d, a)), m = "number"), !(null == b || "number" === m && isNaN(b) || ("number" !== m || k.cssNumber[r] || (b += "px"), k.support.clearCloneStyle || "" !== b || 0 !== a.indexOf("background") || (x[a] = "inherit"), u && "set"in u && (b = u.set(d, b, f)) === c)))try {
                    x[a] = b
                } catch (n) {
                }
            } else return u && "get"in u && (g = u.get(d, !1, f)) !== c ? g : x[a]
        }
    }, css: function (d, a, b, f) {
        var g,
            m;
        m = k.camelCase(a);
        a = k.cssProps[m] || (k.cssProps[m] = e(d.style, m));
        (m = k.cssHooks[a] || k.cssHooks[m]) && "get"in m && (g = m.get(d, !0, b));
        g === c && (g = ea(d, a, f));
        "normal" === g && a in mb && (g = mb[a]);
        return"" === b || b ? (d = parseFloat(g), !0 === b || k.isNumeric(d) ? d || 0 : g) : g
    }});
    a.getComputedStyle ? (ha = function (d) {
        return a.getComputedStyle(d, null)
    }, ea = function (d, a, e) {
        var b, f = (e = e || ha(d)) ? e.getPropertyValue(a) || e[a] : c, g = d.style;
        e && ("" !== f || k.contains(d.ownerDocument, d) || (f = k.style(d, a)), Ca.test(f) && lb.test(a) && (d = g.width, a = g.minWidth,
            b = g.maxWidth, g.minWidth = g.maxWidth = g.width = f, f = e.width, g.width = d, g.minWidth = a, g.maxWidth = b));
        return f
    }) : I.documentElement.currentStyle && (ha = function (d) {
        return d.currentStyle
    }, ea = function (d, a, e) {
        var k, b, f = (e = e || ha(d)) ? e[a] : c, g = d.style;
        null == f && g && g[a] && (f = g[a]);
        if (Ca.test(f) && !Zb.test(a)) {
            e = g.left;
            if (b = (k = d.runtimeStyle) && k.left)k.left = d.currentStyle.left;
            g.left = "fontSize" === a ? "1em" : f;
            f = g.pixelLeft + "px";
            g.left = e;
            b && (k.left = b)
        }
        return"" === f ? "auto" : f
    });
    k.each(["height", "width"], function (d, a) {
        k.cssHooks[a] =
        {get: function (d, e, b) {
            if (e)return 0 === d.offsetWidth && $b.test(k.css(d, "display")) ? k.swap(d, bc, function () {
                return K(d, a, b)
            }) : K(d, a, b)
        }, set: function (d, e, b) {
            var c = b && ha(d);
            return O(d, e, b ? T(d, a, b, k.support.boxSizing && "border-box" === k.css(d, "boxSizing", !1, c), c) : 0)
        }}
    });
    k.support.opacity || (k.cssHooks.opacity = {get: function (d, a) {
        return Yb.test((a && d.currentStyle ? d.currentStyle.filter : d.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
    }, set: function (d, a) {
        var e = d.style, b = d.currentStyle, c = k.isNumeric(a) ?
            "alpha(opacity=" + 100 * a + ")" : "", f = b && b.filter || e.filter || "";
        e.zoom = 1;
        if ((1 <= a || "" === a) && "" === k.trim(f.replace(Qa, "")) && e.removeAttribute && (e.removeAttribute("filter"), "" === a || b && !b.filter))return;
        e.filter = Qa.test(f) ? f.replace(Qa, c) : f + " " + c
    }});
    k(function () {
        k.support.reliableMarginRight || (k.cssHooks.marginRight = {get: function (d, a) {
            if (a)return k.swap(d, {display: "inline-block"}, ea, [d, "marginRight"])
        }});
        !k.support.pixelPosition && k.fn.position && k.each(["top", "left"], function (d, a) {
            k.cssHooks[a] = {get: function (d, e) {
                if (e)return e = ea(d, a), Ca.test(e) ? k(d).position()[a] + "px" : e
            }}
        })
    });
    k.expr && k.expr.filters && (k.expr.filters.hidden = function (d) {
        return 0 >= d.offsetWidth && 0 >= d.offsetHeight || !k.support.reliableHiddenOffsets && "none" === (d.style && d.style.display || k.css(d, "display"))
    }, k.expr.filters.visible = function (d) {
        return!k.expr.filters.hidden(d)
    });
    k.each({margin: "", padding: "", border: "Width"}, function (d, a) {
        k.cssHooks[d + a] = {expand: function (e) {
            var k = 0, b = {};
            for (e = "string" === typeof e ? e.split(" ") : [e]; 4 > k; k++)b[d + ma[k] + a] =
                e[k] || e[k - 2] || e[0];
            return b
        }};
        lb.test(d) || (k.cssHooks[d + a].set = O)
    });
    var cc = /%20/g, Ab = /\[\]$/, nb = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    k.fn.extend({serialize: function () {
        return k.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var a = k.prop(this, "elements");
            return a ? k.makeArray(a) : this
        }).filter(function () {
            var a = this.type;
            return this.name && !k(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Ha.test(a))
        }).map(function (a, e) {
                var b = k(this).val();
                return null == b ? null : k.isArray(b) ? k.map(b, function (a) {
                    return{name: e.name, value: a.replace(nb, "\r\n")}
                }) : {name: e.name, value: b.replace(nb, "\r\n")}
            }).get()
    }});
    k.param = function (a, e) {
        var b, f = [], g = function (a, d) {
            d = k.isFunction(d) ? d() : null == d ? "" : d;
            f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(d)
        };
        e === c && (e = k.ajaxSettings && k.ajaxSettings.traditional);
        if (k.isArray(a) || a.jquery && !k.isPlainObject(a))k.each(a, function () {
            g(this.name, this.value)
        }); else for (b in a)na(b,
            a[b], e, g);
        return f.join("&").replace(cc, "+")
    };
    k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, e) {
        k.fn[e] = function (a, d) {
            return 0 < arguments.length ? this.on(e, null, a, d) : this.trigger(e)
        }
    });
    k.fn.extend({hover: function (a, e) {
        return this.mouseenter(a).mouseleave(e || a)
    }, bind: function (a, e, k) {
        return this.on(a, null, e, k)
    }, unbind: function (a, e) {
        return this.off(a, null, e)
    }, delegate: function (a, e, k, b) {
        return this.on(e, a, k, b)
    }, undelegate: function (a, e, k) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(e, a || "**", k)
    }});
    var ta, la, Ra = k.now(), Sa = /\?/, fc = /#.*$/, ob = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, hc = /^(?:GET|HEAD)$/, ic = /^\/\//, pb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qb = k.fn.load, rb = {}, Ia = {}, sb = "*/".concat("*");
    try {
        la = Y.href
    } catch (mc) {
        la = I.createElement("a"), la.href = "", la = la.href
    }
    ta = pb.exec(la.toLowerCase()) || [];
    k.fn.load =
        function (a, e, b) {
            if ("string" !== typeof a && qb)return qb.apply(this, arguments);
            var f, g, m, u = this, r = a.indexOf(" ");
            0 <= r && (f = a.slice(r, a.length), a = a.slice(0, r));
            k.isFunction(e) ? (b = e, e = c) : e && "object" === typeof e && (m = "POST");
            0 < u.length && k.ajax({url: a, type: m, dataType: "html", data: e}).done(function (a) {
                g = arguments;
                u.html(f ? k("<div>").append(k.parseHTML(a)).find(f) : a)
            }).complete(b && function (a, d) {
                u.each(b, g || [a.responseText, d, a])
            });
            return this
        };
    k.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function (a, e) {
            k.fn[e] = function (a) {
                return this.on(e, a)
            }
        });
    k.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: la, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ta[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": sb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML",
        text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": k.parseJSON, "text xml": k.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, e) {
        return e ? fa(fa(a, k.ajaxSettings), e) : fa(k.ajaxSettings, a)
    }, ajaxPrefilter: ba(rb), ajaxTransport: ba(Ia), ajax: function (a, e) {
        function b(a, d, e, f) {
            var g, p, l, A;
            A = d;
            if (2 !== s) {
                s = 2;
                r && clearTimeout(r);
                n = c;
                u = f || "";
                t.readyState = 0 < a ? 4 : 0;
                f = 200 <= a && 300 > a || 304 === a;
                if (e) {
                    l = q;
                    for (var w = t, M, O, C, K, F = l.contents, B = l.dataTypes; "*" === B[0];)B.shift(),
                        O === c && (O = l.mimeType || w.getResponseHeader("Content-Type"));
                    if (O)for (K in F)if (F[K] && F[K].test(O)) {
                        B.unshift(K);
                        break
                    }
                    if (B[0]in e)C = B[0]; else {
                        for (K in e) {
                            if (!B[0] || l.converters[K + " " + B[0]]) {
                                C = K;
                                break
                            }
                            M || (M = K)
                        }
                        C = C || M
                    }
                    C ? (C !== B[0] && B.unshift(C), l = e[C]) : l = void 0
                }
                a:{
                    e = q;
                    M = l;
                    O = t;
                    C = f;
                    var $, z, G, w = {}, F = e.dataTypes.slice();
                    if (F[1])for (z in e.converters)w[z.toLowerCase()] = e.converters[z];
                    for (K = F.shift(); K;)if (e.responseFields[K] && (O[e.responseFields[K]] = M), !G && C && e.dataFilter && (M = e.dataFilter(M, e.dataType)),
                        G = K, K = F.shift())if ("*" === K)K = G; else if ("*" !== G && G !== K) {
                        z = w[G + " " + K] || w["* " + K];
                        if (!z)for ($ in w)if (l = $.split(" "), l[1] === K && (z = w[G + " " + l[0]] || w["* " + l[0]])) {
                            !0 === z ? z = w[$] : !0 !== w[$] && (K = l[0], F.unshift(l[1]));
                            break
                        }
                        if (!0 !== z)if (z && e["throws"])M = z(M); else try {
                            M = z(M)
                        } catch (D) {
                            l = {state: "parsererror", error: z ? D : "No conversion from " + G + " to " + K};
                            break a
                        }
                    }
                    l = {state: "success", data: M}
                }
                if (f)q.ifModified && ((A = t.getResponseHeader("Last-Modified")) && (k.lastModified[m] = A), (A = t.getResponseHeader("etag")) && (k.etag[m] =
                    A)), 204 === a || "HEAD" === q.type ? A = "nocontent" : 304 === a ? A = "notmodified" : (A = l.state, g = l.data, p = l.error, f = !p); else if (p = A, a || !A)A = "error", 0 > a && (a = 0);
                t.status = a;
                t.statusText = (d || A) + "";
                f ? E.resolveWith(H, [g, A, t]) : E.rejectWith(H, [t, A, p]);
                t.statusCode(y);
                y = c;
                x && J.trigger(f ? "ajaxSuccess" : "ajaxError", [t, q, f ? g : p]);
                v.fireWith(H, [t, A]);
                x && (J.trigger("ajaxComplete", [t, q]), --k.active || k.event.trigger("ajaxStop"))
            }
        }

        "object" === typeof a && (e = a, a = c);
        e = e || {};
        var f, g, m, u, r, x, n, l, q = k.ajaxSetup({}, e), H = q.context || q, J = q.context &&
            (H.nodeType || H.jquery) ? k(H) : k.event, E = k.Deferred(), v = k.Callbacks("once memory"), y = q.statusCode || {}, w = {}, M = {}, s = 0, O = "canceled", t = {readyState: 0, getResponseHeader: function (a) {
            var d;
            if (2 === s) {
                if (!l)for (l = {}; d = gc.exec(u);)l[d[1].toLowerCase()] = d[2];
                d = l[a.toLowerCase()]
            }
            return null == d ? null : d
        }, getAllResponseHeaders: function () {
            return 2 === s ? u : null
        }, setRequestHeader: function (a, d) {
            var e = a.toLowerCase();
            s || (a = M[e] = M[e] || a, w[a] = d);
            return this
        }, overrideMimeType: function (a) {
            s || (q.mimeType = a);
            return this
        }, statusCode: function (a) {
            var d;
            if (a)if (2 > s)for (d in a)y[d] = [y[d], a[d]]; else t.always(a[t.status]);
            return this
        }, abort: function (a) {
            a = a || O;
            n && n.abort(a);
            b(0, a);
            return this
        }};
        E.promise(t).complete = v.add;
        t.success = t.done;
        t.error = t.fail;
        q.url = ((a || q.url || la) + "").replace(fc, "").replace(ic, ta[1] + "//");
        q.type = e.method || e.type || q.method || q.type;
        q.dataTypes = k.trim(q.dataType || "*").toLowerCase().match(ga) || [""];
        null == q.crossDomain && (f = pb.exec(q.url.toLowerCase()), q.crossDomain = !(!f || f[1] === ta[1] && f[2] === ta[2] && (f[3] || ("http:" === f[1] ? "80" :
            "443")) === (ta[3] || ("http:" === ta[1] ? "80" : "443"))));
        q.data && q.processData && "string" !== typeof q.data && (q.data = k.param(q.data, q.traditional));
        ca(rb, q, e, t);
        if (2 === s)return t;
        (x = q.global) && 0 === k.active++ && k.event.trigger("ajaxStart");
        q.type = q.type.toUpperCase();
        q.hasContent = !hc.test(q.type);
        m = q.url;
        q.hasContent || (q.data && (m = q.url += (Sa.test(m) ? "&" : "?") + q.data, delete q.data), !1 === q.cache && (q.url = ob.test(m) ? m.replace(ob, "$1_=" + Ra++) : m + (Sa.test(m) ? "&" : "?") + "_=" + Ra++));
        q.ifModified && (k.lastModified[m] && t.setRequestHeader("If-Modified-Since",
            k.lastModified[m]), k.etag[m] && t.setRequestHeader("If-None-Match", k.etag[m]));
        (q.data && q.hasContent && !1 !== q.contentType || e.contentType) && t.setRequestHeader("Content-Type", q.contentType);
        t.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + sb + "; q=0.01" : "") : q.accepts["*"]);
        for (g in q.headers)t.setRequestHeader(g, q.headers[g]);
        if (q.beforeSend && (!1 === q.beforeSend.call(H, t, q) || 2 === s))return t.abort();
        O = "abort";
        for (g in{success: 1, error: 1,
            complete: 1})t[g](q[g]);
        if (n = ca(Ia, q, e, t)) {
            t.readyState = 1;
            x && J.trigger("ajaxSend", [t, q]);
            q.async && 0 < q.timeout && (r = setTimeout(function () {
                t.abort("timeout")
            }, q.timeout));
            try {
                s = 1, n.send(w, b)
            } catch (C) {
                if (2 > s)b(-1, C); else throw C;
            }
        } else b(-1, "No Transport");
        return t
    }, getJSON: function (a, e, b) {
        return k.get(a, e, b, "json")
    }, getScript: function (a, e) {
        return k.get(a, c, e, "script")
    }});
    k.each(["get", "post"], function (a, e) {
        k[e] = function (a, d, b, f) {
            k.isFunction(d) && (f = f || b, b = d, d = c);
            return k.ajax({url: a, type: e, dataType: f,
                data: d, success: b})
        }
    });
    k.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {
        k.globalEval(a);
        return a
    }}});
    k.ajaxPrefilter("script", function (a) {
        a.cache === c && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    k.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var e, b = I.head || k("head")[0] || I.documentElement;
            return{send: function (k, c) {
                e = I.createElement("script");
                e.async = !0;
                a.scriptCharset && (e.charset = a.scriptCharset);
                e.src = a.url;
                e.onload = e.onreadystatechange = function (a, d) {
                    if (d || !e.readyState || /loaded|complete/.test(e.readyState))e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, d || c(200, "success")
                };
                b.insertBefore(e, b.firstChild)
            }, abort: function () {
                if (e)e.onload(c, !0)
            }}
        }
    });
    var tb = [], Ta = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var a = tb.pop() || k.expando + "_" + Ra++;
        this[a] = !0;
        return a
    }});
    k.ajaxPrefilter("json jsonp",
        function (d, e, b) {
            var f, g, m, u = !1 !== d.jsonp && (Ta.test(d.url) ? "url" : "string" === typeof d.data && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Ta.test(d.data) && "data");
            if (u || "jsonp" === d.dataTypes[0])return f = d.jsonpCallback = k.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, u ? d[u] = d[u].replace(Ta, "$1" + f) : !1 !== d.jsonp && (d.url += (Sa.test(d.url) ? "&" : "?") + d.jsonp + "=" + f), d.converters["script json"] = function () {
                m || k.error(f + " was not called");
                return m[0]
            }, d.dataTypes[0] = "json",
                g = a[f], a[f] = function () {
                m = arguments
            }, b.always(function () {
                a[f] = g;
                d[f] && (d.jsonpCallback = e.jsonpCallback, tb.push(f));
                m && k.isFunction(g) && g(m[0]);
                m = g = c
            }), "script"
        });
    var oa, Aa, jc = 0, Ua = a.ActiveXObject && function () {
        for (var a in oa)oa[a](c, !0)
    };
    k.ajaxSettings.xhr = a.ActiveXObject ? function () {
        var d;
        if (!(d = !this.isLocal && X()))a:{
            try {
                d = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (e) {
            }
            d = void 0
        }
        return d
    } : X;
    Aa = k.ajaxSettings.xhr();
    k.support.cors = !!Aa && "withCredentials"in Aa;
    (Aa = k.support.ajax = !!Aa) && k.ajaxTransport(function (d) {
        if (!d.crossDomain ||
            k.support.cors) {
            var e;
            return{send: function (b, f) {
                var g, m, u = d.xhr();
                d.username ? u.open(d.type, d.url, d.async, d.username, d.password) : u.open(d.type, d.url, d.async);
                if (d.xhrFields)for (m in d.xhrFields)u[m] = d.xhrFields[m];
                d.mimeType && u.overrideMimeType && u.overrideMimeType(d.mimeType);
                d.crossDomain || b["X-Requested-With"] || (b["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (m in b)u.setRequestHeader(m, b[m])
                } catch (r) {
                }
                u.send(d.hasContent && d.data || null);
                e = function (a, b) {
                    var m, r, p, x;
                    try {
                        if (e && (b || 4 === u.readyState))if (e =
                            c, g && (u.onreadystatechange = k.noop, Ua && delete oa[g]), b)4 !== u.readyState && u.abort(); else {
                            x = {};
                            m = u.status;
                            r = u.getAllResponseHeaders();
                            "string" === typeof u.responseText && (x.text = u.responseText);
                            try {
                                p = u.statusText
                            } catch (n) {
                                p = ""
                            }
                            m || !d.isLocal || d.crossDomain ? 1223 === m && (m = 204) : m = x.text ? 200 : 404
                        }
                    } catch (q) {
                        b || f(-1, q)
                    }
                    x && f(m, p, x, r)
                };
                d.async ? 4 === u.readyState ? setTimeout(e) : (g = ++jc, Ua && (oa || (oa = {}, k(a).unload(Ua)), oa[g] = e), u.onreadystatechange = e) : e()
            }, abort: function () {
                e && e(c, !0)
            }}
        }
    });
    var ua, Ga, kc = /^(?:toggle|show|hide)$/,
        ub = RegExp("^(?:([+-])=|)(" + Ea + ")([a-z%]*)$", "i"), lc = /queueHooks$/, Da = [function (a, e, b) {
            var c, f, g, m, u, r = this, n = {}, q = a.style, l = a.nodeType && x(a), H = k._data(a, "fxshow");
            b.queue || (m = k._queueHooks(a, "fx"), null == m.unqueued && (m.unqueued = 0, u = m.empty.fire, m.empty.fire = function () {
                m.unqueued || u()
            }), m.unqueued++, r.always(function () {
                r.always(function () {
                    m.unqueued--;
                    k.queue(a, "fx").length || m.empty.fire()
                })
            }));
            1 === a.nodeType && ("height"in e || "width"in e) && (b.overflow = [q.overflow, q.overflowX, q.overflowY], "inline" ===
                k.css(a, "display") && "none" === k.css(a, "float") && (k.support.inlineBlockNeedsLayout && "inline" !== R(a.nodeName) ? q.zoom = 1 : q.display = "inline-block"));
            b.overflow && (q.overflow = "hidden", k.support.shrinkWrapBlocks || r.always(function () {
                q.overflow = b.overflow[0];
                q.overflowX = b.overflow[1];
                q.overflowY = b.overflow[2]
            }));
            for (c in e)f = e[c], kc.exec(f) && (delete e[c], g = g || "toggle" === f, f !== (l ? "hide" : "show") && (n[c] = H && H[c] || k.style(a, c)));
            if (!k.isEmptyObject(n))for (c in H ? "hidden"in H && (l = H.hidden) : H = k._data(a, "fxshow", {}),
                g && (H.hidden = !l), l ? k(a).show() : r.done(function () {
                k(a).hide()
            }), r.done(function () {
                var e;
                k._removeData(a, "fxshow");
                for (e in n)k.style(a, e, n[e])
            }), n)e = J(l ? H[c] : 0, c, r), c in H || (H[c] = e.start, l && (e.end = e.start, e.start = "width" === c || "height" === c ? 1 : 0))
        }], za = {"*": [function (a, e) {
            var b = this.createTween(a, e), c = b.cur(), f = ub.exec(e), g = f && f[3] || (k.cssNumber[a] ? "" : "px"), m = (k.cssNumber[a] || "px" !== g && +c) && ub.exec(k.css(b.elem, a)), u = 1, r = 20;
            if (m && m[3] !== g) {
                g = g || m[3];
                f = f || [];
                m = +c || 1;
                do u = u || ".5", m /= u, k.style(b.elem, a,
                    m + g); while (u !== (u = b.cur() / c) && 1 !== u && --r)
            }
            f && (m = b.start = +m || +c || 0, b.unit = g, b.end = f[1] ? m + (f[1] + 1) * f[2] : +f[2]);
            return b
        }]};
    k.Animation = k.extend(M, {tweener: function (a, e) {
        k.isFunction(a) ? (e = a, a = ["*"]) : a = a.split(" ");
        for (var b, c = 0, f = a.length; c < f; c++)b = a[c], za[b] = za[b] || [], za[b].unshift(e)
    }, prefilter: function (a, e) {
        e ? Da.unshift(a) : Da.push(a)
    }});
    k.Tween = Q;
    Q.prototype = {constructor: Q, init: function (a, e, b, c, f, g) {
        this.elem = a;
        this.prop = b;
        this.easing = f || "swing";
        this.options = e;
        this.start = this.now = this.cur();
        this.end =
            c;
        this.unit = g || (k.cssNumber[b] ? "" : "px")
    }, cur: function () {
        var a = Q.propHooks[this.prop];
        return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
    }, run: function (a) {
        var e, b = Q.propHooks[this.prop];
        this.pos = this.options.duration ? e = k.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : e = a;
        this.now = (this.end - this.start) * e + this.start;
        this.options.step && this.options.step.call(this.elem, this.now, this);
        b && b.set ? b.set(this) : Q.propHooks._default.set(this);
        return this
    }};
    Q.prototype.init.prototype =
        Q.prototype;
    Q.propHooks = {_default: {get: function (a) {
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = k.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
    }, set: function (a) {
        if (k.fx.step[a.prop])k.fx.step[a.prop](a); else a.elem.style && (null != a.elem.style[k.cssProps[a.prop]] || k.cssHooks[a.prop]) ? k.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}};
    Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }};
    k.each(["toggle", "show", "hide"], function (a, e) {
        var b = k.fn[e];
        k.fn[e] = function (a, d, k) {
            return null == a || "boolean" === typeof a ? b.apply(this, arguments) : this.animate(U(e, !0), a, d, k)
        }
    });
    k.fn.extend({fadeTo: function (a, e, k, b) {
        return this.filter(x).css("opacity", 0).show().end().animate({opacity: e}, a, k, b)
    }, animate: function (a, e, b, c) {
        var f = k.isEmptyObject(a), g = k.speed(e, b, c);
        e = function () {
            var e = M(this, k.extend({}, a), g);
            (f || k._data(this, "finish")) && e.stop(!0)
        };
        e.finish = e;
        return f || !1 === g.queue ? this.each(e) : this.queue(g.queue,
            e)
    }, stop: function (a, e, b) {
        var f = function (a) {
            var d = a.stop;
            delete a.stop;
            d(b)
        };
        "string" !== typeof a && (b = e, e = a, a = c);
        e && !1 !== a && this.queue(a || "fx", []);
        return this.each(function () {
            var e = !0, c = null != a && a + "queueHooks", g = k.timers, m = k._data(this);
            if (c)m[c] && m[c].stop && f(m[c]); else for (c in m)m[c] && m[c].stop && lc.test(c) && f(m[c]);
            for (c = g.length; c--;)g[c].elem !== this || null != a && g[c].queue !== a || (g[c].anim.stop(b), e = !1, g.splice(c, 1));
            !e && b || k.dequeue(this, a)
        })
    }, finish: function (a) {
        !1 !== a && (a = a || "fx");
        return this.each(function () {
            var e,
                b = k._data(this), c = b[a + "queue"];
            e = b[a + "queueHooks"];
            var f = k.timers, g = c ? c.length : 0;
            b.finish = !0;
            k.queue(this, a, []);
            e && e.stop && e.stop.call(this, !0);
            for (e = f.length; e--;)f[e].elem === this && f[e].queue === a && (f[e].anim.stop(!0), f.splice(e, 1));
            for (e = 0; e < g; e++)c[e] && c[e].finish && c[e].finish.call(this);
            delete b.finish
        })
    }});
    k.each({slideDown: U("show"), slideUp: U("hide"), slideToggle: U("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, e) {
        k.fn[a] = function (a, d, k) {
            return this.animate(e,
                a, d, k)
        }
    });
    k.speed = function (a, e, b) {
        var c = a && "object" === typeof a ? k.extend({}, a) : {complete: b || !b && e || k.isFunction(a) && a, duration: a, easing: b && e || e && !k.isFunction(e) && e};
        c.duration = k.fx.off ? 0 : "number" === typeof c.duration ? c.duration : c.duration in k.fx.speeds ? k.fx.speeds[c.duration] : k.fx.speeds._default;
        if (null == c.queue || !0 === c.queue)c.queue = "fx";
        c.old = c.complete;
        c.complete = function () {
            k.isFunction(c.old) && c.old.call(this);
            c.queue && k.dequeue(this, c.queue)
        };
        return c
    };
    k.easing = {linear: function (a) {
        return a
    },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }};
    k.timers = [];
    k.fx = Q.prototype.init;
    k.fx.tick = function () {
        var a, e = k.timers, b = 0;
        for (ua = k.now(); b < e.length; b++)a = e[b], a() || e[b] !== a || e.splice(b--, 1);
        e.length || k.fx.stop();
        ua = c
    };
    k.fx.timer = function (a) {
        a() && k.timers.push(a) && k.fx.start()
    };
    k.fx.interval = 13;
    k.fx.start = function () {
        Ga || (Ga = setInterval(k.fx.tick, k.fx.interval))
    };
    k.fx.stop = function () {
        clearInterval(Ga);
        Ga = null
    };
    k.fx.speeds = {slow: 600, fast: 200, _default: 400};
    k.fx.step = {};
    k.expr && k.expr.filters &&
    (k.expr.filters.animated = function (a) {
        return k.grep(k.timers,function (e) {
            return a === e.elem
        }).length
    });
    k.fn.offset = function (a) {
        if (arguments.length)return a === c ? this : this.each(function (e) {
            k.offset.setOffset(this, a, e)
        });
        var e, b, f = {top: 0, left: 0}, g = (b = this[0]) && b.ownerDocument;
        if (g) {
            e = g.documentElement;
            if (!k.contains(e, b))return f;
            typeof b.getBoundingClientRect !== Z && (f = b.getBoundingClientRect());
            b = V(g);
            return{top: f.top + (b.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: f.left + (b.pageXOffset || e.scrollLeft) -
                (e.clientLeft || 0)}
        }
    };
    k.offset = {setOffset: function (a, e, b) {
        var c = k.css(a, "position");
        "static" === c && (a.style.position = "relative");
        var f = k(a), g = f.offset(), m = k.css(a, "top"), u = k.css(a, "left"), r = {}, x = {};
        ("absolute" === c || "fixed" === c) && -1 < k.inArray("auto", [m, u]) ? (x = f.position(), c = x.top, u = x.left) : (c = parseFloat(m) || 0, u = parseFloat(u) || 0);
        k.isFunction(e) && (e = e.call(a, b, g));
        null != e.top && (r.top = e.top - g.top + c);
        null != e.left && (r.left = e.left - g.left + u);
        "using"in e ? e.using.call(a, r) : f.css(r)
    }};
    k.fn.extend({position: function () {
        if (this[0]) {
            var a,
                e, b = {top: 0, left: 0}, c = this[0];
            "fixed" === k.css(c, "position") ? e = c.getBoundingClientRect() : (a = this.offsetParent(), e = this.offset(), k.nodeName(a[0], "html") || (b = a.offset()), b.top += k.css(a[0], "borderTopWidth", !0), b.left += k.css(a[0], "borderLeftWidth", !0));
            return{top: e.top - b.top - k.css(c, "marginTop", !0), left: e.left - b.left - k.css(c, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var a = this.offsetParent || qa; a && !k.nodeName(a, "html") && "static" === k.css(a, "position");)a = a.offsetParent;
            return a ||
                qa
        })
    }});
    k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, e) {
        var b = /Y/.test(e);
        k.fn[a] = function (f) {
            return k.access(this, function (a, d, f) {
                var g = V(a);
                if (f === c)return g ? e in g ? g[e] : g.document.documentElement[d] : a[d];
                g ? g.scrollTo(b ? k(g).scrollLeft() : f, b ? f : k(g).scrollTop()) : a[d] = f
            }, a, f, arguments.length, null)
        }
    });
    k.each({Height: "height", Width: "width"}, function (a, e) {
        k.each({padding: "inner" + a, content: e, "": "outer" + a}, function (b, f) {
            k.fn[f] = function (f, g) {
                var m = arguments.length && (b || "boolean" !== typeof f), u = b || (!0 === f || !0 === g ? "margin" : "border");
                return k.access(this, function (e, b, f) {
                    return k.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (b = e.documentElement, Math.max(e.body["scroll" + a], b["scroll" + a], e.body["offset" + a], b["offset" + a], b["client" + a])) : f === c ? k.css(e, b, u) : k.style(e, b, f, u)
                }, e, m ? f : c, m, null)
            }
        })
    });
    k.fn.size = function () {
        return this.length
    };
    k.fn.andSelf = k.fn.addBack;
    "object" === typeof module && module && "object" === typeof module.exports ? module.exports = k : (a.jQuery = a.$ = k, "function" === typeof define && define.amd && define("jquery", [], function () {
        return k
    }))
})(window);
(function (a) {
    var c = function () {
        var b;
        return function (c) {
            var f = !1;
            "string" === typeof c ? (f = c === b, b = c) : (f = c.equals(b), b = a.clone(c, !0));
            return!f
        }
    }, b = function () {
        var a = [];
        return function (b) {
            var c = !s(a, function (a) {
                return"object" === typeof b || b instanceof Array ? b.equals(a) : b === a
            });
            c && a.push(b);
            return c
        }
    }, g = function (a) {
        this.channel = a || "/"
    }, f = function (a, b, c) {
        var f, g;
        if (null != a)if (Array.prototype.forEach && a.forEach === Array.prototype.forEach)a.forEach(b, c); else if (a.length === +a.length)for (f = 0, g = a.length; f < g && b.call(c,
            a[f], f, a) !== {}; f++); else for (f in a)if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === {})break
    }, n = function (a, b, c) {
        var g = !0;
        if (null == a)return g;
        if (Array.prototype.every && a.every === Array.prototype.every)return a.every(b, c);
        f(a, function (a, f, e) {
            if (!(g = g && b.call(c, a, f, e)))return{}
        });
        return!!g
    }, l = function (a, b) {
        return 0 >= a ? b() : function () {
            if (1 > --a)return b.apply(this, arguments)
        }
    }, s = function (a, b, c) {
        var g = !1;
        if (null == a)return g;
        if (Array.prototype.some && a.some === Array.prototype.some)return a.some(b, c);
        f(a, function (a, f, e) {
            if (g || (g = b.call(c, a, f, e)))return breaker
        });
        return!!g
    }, t = function (a, b) {
        var c, f;
        if (a.bind === Function.prototype.bind && Function.prototype.bind)return nativeBind.apply(a, slice.call(arguments, 1));
        if ("function" !== typeof a)throw new TypeError;
        c = slice.call(arguments, 2);
        return f = function () {
            var g, n;
            if (!(this instanceof f))return a.apply(b, c.concat(slice.call(arguments)));
            ctor.prototype = a.prototype;
            g = new ctor;
            ctor.prototype = null;
            n = a.apply(g, c.concat(slice.call(arguments)));
            return Object(n) === n ? n : g
        }
    }, v = function (a, b, c) {
        var f, g;
        return function () {
            var n = this, e = arguments, x = c && !f;
            clearTimeout(f);
            f = setTimeout(function () {
                f = null;
                c || (g = a.apply(n, e))
            }, b);
            x && (g = a.apply(n, e));
            return g
        }
    }, y = function (a, b) {
        var c, f, g = 0, n = function () {
            g = new Date;
            c = null;
            f = a.apply(void 0, void 0)
        };
        return function () {
            var e = new Date, x = b - (e - g), l = arguments;
            0 >= x ? (clearTimeout(c), c = null, g = e, f = a.apply(this, l)) : c || (c = setTimeout(n, x));
            return f
        }
    };
    g.prototype.subscribe = function () {
        return 1 === arguments.length ? new w(this.channel, arguments[0].topic, arguments[0].callback) :
            new w(this.channel, arguments[0], arguments[1])
    };
    g.prototype.publish = function () {
        var a = 1 === arguments.length ? "[object String]" === Object.prototype.toString.call(arguments[0]) ? {topic: arguments[0]} : arguments[0] : {topic: arguments[0], data: arguments[1]};
        a.channel = this.channel;
        return D.configuration.bus.publish(a)
    };
    var w = function (a, b, c) {
        this.channel = a;
        this.topic = b;
        this.callback = c;
        this.constraints = [];
        this.context = null;
        D.configuration.bus.publish({channel: "postal", topic: "subscription.created", data: {event: "subscription.created",
            channel: a, topic: b}});
        D.configuration.bus.subscribe(this)
    };
    w.prototype = {unsubscribe: function () {
        D.configuration.bus.unsubscribe(this);
        D.configuration.bus.publish({channel: "postal", topic: "subscription.removed", data: {event: "subscription.removed", channel: this.channel, topic: this.topic}})
    }, defer: function () {
        var a = this.callback;
        this.callback = function (b) {
            setTimeout(a, 0, b)
        };
        return this
    }, disposeAfter: function (a) {
        if (isNaN(a) || 0 >= a)throw"The value provided to disposeAfter (maxCalls) must be a number greater than zero.";
        var b = this.callback, c = l(a, t(function () {
            this.unsubscribe()
        }, this));
        this.callback = function () {
            b.apply(this.context, arguments);
            c()
        };
        return this
    }, distinctUntilChanged: function () {
        this.withConstraint(new c);
        return this
    }, distinct: function () {
        this.withConstraint(new b);
        return this
    }, once: function () {
        this.disposeAfter(1)
    }, withConstraint: function (a) {
        if ("function" !== typeof a)throw"Predicate constraint must be a function";
        this.constraints.push(a);
        return this
    }, withConstraints: function (a) {
        var b = this;
        a instanceof Array &&
        f(a, function (a) {
            b.withConstraint(a)
        });
        return b
    }, withContext: function (a) {
        this.context = a;
        return this
    }, withDebounce: function (a) {
        var b = this.callback;
        if (isNaN(a))throw"Milliseconds must be a number";
        this.callback = v(b, a);
        return this
    }, withDelay: function (a) {
        var b = this.callback;
        if (isNaN(a))throw"Milliseconds must be a number";
        this.callback = function (c) {
            setTimeout(function () {
                b(c)
            }, a)
        };
        return this
    }, withThrottle: function (a) {
        var b = this.callback;
        if (isNaN(a))throw"Milliseconds must be a number";
        this.callback = y(b,
            a);
        return this
    }, subscribe: function (a) {
        this.callback = a;
        return this
    }};
    var C = function (a, b) {
        D.configuration.resolver.compare(a.topic, b.topic) && n(a.constraints, function (c) {
            return c.call(a.context, b.data, b)
        }) && "function" === typeof a.callback && a.callback.call(a.context, b.data, b)
    }, B = {addWireTap: function (a) {
        var b = this;
        b.wireTaps.push(a);
        return function () {
            var c = b.wireTaps.indexOf(a);
            -1 !== c && b.wireTaps.splice(c, 1)
        }
    }, publish: function (a) {
        a.timeStamp = new Date;
        f(this.wireTaps, function (b) {
            b(a.data, a)
        });
        this.subscriptions[a.channel] &&
        f(this.subscriptions[a.channel], function (b) {
            for (var c = 0, f = b.length, g; c < f;)(g = b[c++]) && C(g, a)
        });
        return a
    }, reset: function () {
        this.subscriptions && (f(this.subscriptions, function (a) {
            f(a, function (a) {
                for (; a.length;)a.pop().unsubscribe()
            })
        }), this.subscriptions = {})
    }, subscribe: function (a) {
        var b;
        this.subscriptions[a.channel] || (this.subscriptions[a.channel] = {});
        (b = this.subscriptions[a.channel][a.topic]) || (b = this.subscriptions[a.channel][a.topic] = []);
        b.push(a);
        return a
    }, subscriptions: {}, wireTaps: [], unsubscribe: function (a) {
        if (this.subscriptions[a.channel][a.topic]) {
            var b =
                this.subscriptions[a.channel][a.topic].length, c;
            for (c = 0; c < b; c++)if (this.subscriptions[a.channel][a.topic][c] === a) {
                this.subscriptions[a.channel][a.topic].splice(c, 1);
                break
            }
        }
    }};
    B.subscriptions.postal = {};
    var D = {configuration: {bus: B, resolver: {cache: {}, compare: function (a, b) {
        if (this.cache[b] && this.cache[b][a])return!0;
        var c = ("^" + a.replace(/\./g, "\\.").replace(/\*/g, "[A-Z,a-z,0-9]*").replace(/#/g, ".*") + "$").replace("\\..*$", "(\\..*)*$").replace("^.*\\.", "^(.*\\.)*");
        if (c = RegExp(c).test(b))this.cache[b] ||
            (this.cache[b] = {}), this.cache[b][a] = !0;
        return c
    }, reset: function () {
        this.cache = {}
    }}, DEFAULT_CHANNEL: "/", SYSTEM_CHANNEL: "postal"}, ChannelDefinition: g, SubscriptionDefinition: w, channel: function (a) {
        return new g(a)
    }, subscribe: function (a) {
        return new w(a.channel || "/", a.topic, a.callback)
    }, publish: function (a) {
        a.channel = a.channel || "/";
        return D.configuration.bus.publish(a)
    }, addWireTap: function (a) {
        return this.configuration.bus.addWireTap(a)
    }, linkChannels: function (b, c) {
        var g = [];
        b = b instanceof Array ? b : [b];
        c = c instanceof
            Array ? c : [c];
        f(b, function (b) {
            f(c, function (c) {
                var f = c.channel || "/";
                g.push(D.subscribe({channel: b.channel || "/", topic: b.topic || "#", callback: function (e, b) {
                    var g = a.clone(b, !0);
                    g.topic = "function" === typeof c.topic ? c.topic(b.topic) : c.topic || b.topic;
                    g.channel = f;
                    g.data = e;
                    D.publish(g)
                }}))
            })
        });
        return g
    }, utils: {getSubscribersFor: function () {
        var a = arguments[0], b = arguments[1];
        1 === arguments.length && (a = arguments[0].channel || D.configuration.DEFAULT_CHANNEL, b = arguments[0].topic);
        return D.configuration.bus.subscriptions[a] &&
            D.configuration.bus.subscriptions[a].hasOwnProperty(b) ? D.configuration.bus.subscriptions[a][b] : []
    }, reset: function () {
        D.configuration.bus.reset();
        D.configuration.resolver.reset()
    }}};
    a.postal = D
})(jQuery);
(function (a) {
    function c() {
    }

    function b(a) {
        T = [a]
    }

    function g(a, e, b) {
        return a && a.apply && a.apply(e.context || e, b)
    }

    function f(f) {
        function ba(a) {
            I++ || (qa(), U && (H[P] = {s: [a]}), J && (a = J.apply(f, [a])), g(fa, f, [a, E, f]), g(u, f, [f, E]))
        }

        function ca(a) {
            I++ || (qa(), U && a != G && (H[P] = a), g(X, f, [f, a]), g(u, f, [f, a]))
        }

        f = a.extend({}, K, f);
        var fa = f.success, X = f.error, u = f.complete, J = f.dataFilter, M = f.callbackParameter, $ = f.callback, Q = f.cache, U = f.pageCache, V = f.charset, P = f.url, aa = f.data, Z = f.timeout, Y, I = 0, qa = c, N, ra, ia;
        e && e(function (a) {
            a.done(fa).fail(X);
            fa = a.resolve;
            X = a.reject
        }).promise(f);
        f.abort = function () {
            !I++ && qa()
        };
        if (!1 === g(f.beforeSend, f, [f]) || I)return f;
        P = P || s;
        aa = aa ? "string" == typeof aa ? aa : a.param(aa, f.traditional) : s;
        P += aa ? (/\?/.test(P) ? "&" : "?") + aa : s;
        M && (P += (/\?/.test(P) ? "&" : "?") + encodeURIComponent(M) + "=?");
        Q || U || (P += (/\?/.test(P) ? "&" : "?") + "_" + (new Date).getTime() + "=");
        P = P.replace(/=\?(&|$)/, "=" + $ + "$1");
        U && (Y = H[P]) ? Y.s ? ba(Y.s[0]) : ca(Y) : (z[$] = b, N = a(q)[0], N.id = y + O++, V && (N[l] = V), R && 11.6 > R.version() ? (ra = a(q)[0]).text = "document.getElementById('" +
            N.id + "')." + C + "()" : N[n] = n, L && (N.htmlFor = N.id, N.event = w), N[B] = N[C] = N[D] = function (a) {
            if (!N[m] || !/i/.test(N[m])) {
                try {
                    N[w] && N[w]()
                } catch (e) {
                }
                a = T;
                T = 0;
                a ? ba(a[0]) : ca(t)
            }
        }, N.src = P, qa = function (a) {
            ia && clearTimeout(ia);
            N[D] = N[B] = N[C] = null;
            x[r](N);
            ra && x[r](ra)
        }, x[v](N, M = x.firstChild), ra && x[v](ra, M), ia = 0 < Z && setTimeout(function () {
            ca(G)
        }, Z));
        return f
    }

    var n = "async", l = "charset", s = "", t = "error", v = "insertBefore", y = "_jqjsp", w = "onclick", C = "on" + t, B = "onload", D = "onreadystatechange", m = "readyState", r = "removeChild", q = "<script>",
        E = "success", G = "timeout", z = window, e = a.Deferred, x = a("head")[0] || document.documentElement, H = {}, O = 0, T, K = {callback: y, url: location.href}, R = z.opera, L = !!a("<div>").html("\x3c!--[if IE]><i><![endif]--\x3e").find("i").length;
    f.setup = function (e) {
        a.extend(K, e)
    };
    a.jsonp = f
})(jQuery);
(function (a) {
    function c(c) {
        function n() {
            c ? t.removeData(c) : B && delete b[B]
        }

        function l() {
            v.id = setTimeout(function () {
                v.fn()
            }, D)
        }

        var s = this, t, v = {}, y = c ? a.fn : a, w = arguments, C = 4, B = w[1], D = w[2], m = w[3];
        "string" !== typeof B && (C--, B = c = 0, D = w[1], m = w[2]);
        c ? (t = s.eq(0), t.data(c, v = t.data(c) || {})) : B && (v = b[B] || (b[B] = {}));
        v.id && clearTimeout(v.id);
        delete v.id;
        if (m)v.fn = function (a) {
            "string" === typeof m && (m = y[m]);
            !0 !== m.apply(s, g.call(w, C)) || a ? n() : l()
        }, l(); else {
            if (v.fn)return void 0 === D ? n() : v.fn(!1 === D), !0;
            n()
        }
    }

    "$:nomunge";
    var b = {}, g = Array.prototype.slice;
    a.doTimeout = function () {
        return c.apply(window, [0].concat(g.call(arguments)))
    };
    a.fn.doTimeout = function () {
        var a = g.call(arguments), b = c.apply(this, ["doTimeout" + a[0]].concat(a));
        return"number" === typeof a[0] || "number" === typeof a[1] ? this : b
    }
})(jQuery);
(function (a) {
    a.extend({tablesorter: new function () {
        function b(a) {
            "undefined" !== typeof console && "undefined" !== typeof console.log ? console.log(a) : alert(a)
        }

        function c(a, f) {
            b(a + " (" + ((new Date).getTime() - f.getTime()) + "ms)")
        }

        function f(e, b, c) {
            if (!b)return"";
            var f = e.config, g = f.textExtraction, m = "", m = "simple" === g ? f.supportsTextContent ? b.textContent : a(b).text() : "function" === typeof g ? g(b, e, c) : "object" === typeof g && g.hasOwnProperty(c) ? g[c](b, e, c) : f.supportsTextContent ? b.textContent : a(b).text();
            return a.trim(m)
        }

        function n(a) {
            var c = a.config, g = c.$tbodies = c.$table.children("tbody:not(." + c.cssInfoBlock + ")"), m, n, l, r, q, w, v = "";
            if (0 === g.length)return c.debug ? b("*Empty table!* Not building a parser cache") : "";
            g = g[0].rows;
            if (g[0])for (m = [], n = g[0].cells.length, l = 0; l < n; l++) {
                r = c.$headers.filter(":not([colspan])");
                r = r.add(c.$headers.filter('[colspan="1"]')).filter('[data-column="' + l + '"]:last');
                q = c.headers[l];
                w = z.getParserById(z.getData(r, q, "sorter"));
                c.empties[l] = z.getData(r, q, "empty") || c.emptyTo || (c.emptyToBottom ? "bottom" :
                    "top");
                c.strings[l] = z.getData(r, q, "string") || c.stringTo || "max";
                if (!w)a:{
                    r = a;
                    q = g;
                    w = -1;
                    for (var y = l, s = void 0, t = z.parsers.length, u = !1, J = "", s = !0; "" === J && s;)w++, q[w] ? (u = q[w].cells[y], J = f(r, u, y), r.config.debug && b("Checking if value was empty on row " + w + ", column: " + y + ': "' + J + '"')) : s = !1;
                    for (; 0 <= --t;)if ((s = z.parsers[t]) && "text" !== s.id && s.is && s.is(J, r, u)) {
                        w = s;
                        break a
                    }
                    w = z.getParserById("text")
                }
                c.debug && (v += "column:" + l + "; parser:" + w.id + "; string:" + c.strings[l] + "; empty: " + c.empties[l] + "\n");
                m.push(w)
            }
            c.debug &&
            b(v);
            c.parsers = m
        }

        function l(e) {
            var m = e.tBodies, n = e.config, l, r, q = n.parsers, w, v, s, y, t, E, C, u = [];
            n.cache = {};
            if (!q)return n.debug ? b("*Empty table!* Not building a cache") : "";
            n.debug && (C = new Date);
            n.showProcessing && z.isProcessing(e, !0);
            for (y = 0; y < m.length; y++)if (n.cache[y] = {row: [], normalized: []}, !a(m[y]).hasClass(n.cssInfoBlock)) {
                l = m[y] && m[y].rows.length || 0;
                r = m[y].rows[0] && m[y].rows[0].cells.length || 0;
                for (v = 0; v < l; ++v)if (t = a(m[y].rows[v]), E = [], t.hasClass(n.cssChildRow))n.cache[y].row[n.cache[y].row.length -
                    1] = n.cache[y].row[n.cache[y].row.length - 1].add(t); else {
                    n.cache[y].row.push(t);
                    for (s = 0; s < r; ++s)w = f(e, t[0].cells[s], s), w = q[s].format(w, e, t[0].cells[s], s), E.push(w), "numeric" === (q[s].type || "").toLowerCase() && (u[s] = Math.max(Math.abs(w) || 0, u[s] || 0));
                    E.push(n.cache[y].normalized.length);
                    n.cache[y].normalized.push(E)
                }
                n.cache[y].colMax = u
            }
            n.showProcessing && z.isProcessing(e);
            n.debug && c("Building cache for " + l + " rows", C)
        }

        function s(e, b) {
            var f = e.config, m = e.tBodies, n = [], l = f.cache, r, q, w, y, s, v, t, u, J, M, E;
            if (l[0]) {
                f.debug &&
                (E = new Date);
                for (u = 0; u < m.length; u++)if (r = a(m[u]), r.length && !r.hasClass(f.cssInfoBlock)) {
                    s = z.processTbody(e, r, !0);
                    r = l[u].row;
                    q = l[u].normalized;
                    y = (w = q.length) ? q[0].length - 1 : 0;
                    for (v = 0; v < w; v++)if (M = q[v][y], n.push(r[M]), !f.appender || !f.removeRows)for (J = r[M].length, t = 0; t < J; t++)s.append(r[M][t]);
                    z.processTbody(e, s, !1)
                }
                f.appender && f.appender(e, n);
                f.debug && c("Rebuilt table", E);
                b || z.applyWidget(e);
                a(e).trigger("sortEnd", e)
            }
        }

        function t(e) {
            var b = [], c = {}, f = 0, g = a(e).find("thead:eq(0), tfoot").children("tr"), m,
                n, l, r, q, w, y, s, u, J;
            for (m = 0; m < g.length; m++)for (q = g[m].cells, n = 0; n < q.length; n++) {
                r = q[n];
                w = r.parentNode.rowIndex;
                y = w + "-" + r.cellIndex;
                s = r.rowSpan || 1;
                u = r.colSpan || 1;
                "undefined" === typeof b[w] && (b[w] = []);
                for (l = 0; l < b[w].length + 1; l++)if ("undefined" === typeof b[w][l]) {
                    J = l;
                    break
                }
                c[y] = J;
                f = Math.max(J, f);
                a(r).attr({"data-column": J});
                for (l = w; l < w + s; l++)for ("undefined" === typeof b[l] && (b[l] = []), y = b[l], r = J; r < J + u; r++)y[r] = "x"
            }
            e.config.columns = f;
            return c
        }

        function v(e) {
            var f = t(e), m, n, l, r, q, y, s, v = e.config;
            v.headerList = [];
            v.headerContent = [];
            v.debug && (s = new Date);
            r = v.cssIcon ? '<i class="' + v.cssIcon + '"></i>' : "";
            v.$headers = a(e).find(v.selectorHeaders).each(function (e) {
                n = a(this);
                m = v.headers[e];
                v.headerContent[e] = this.innerHTML;
                q = v.headerTemplate.replace(/\{content\}/g, this.innerHTML).replace(/\{icon\}/g, r);
                v.onRenderTemplate && (l = v.onRenderTemplate.apply(n, [e, q])) && "string" === typeof l && (q = l);
                this.innerHTML = q;
                v.onRenderHeader && v.onRenderHeader.apply(n, [e]);
                this.column = f[this.parentNode.rowIndex + "-" + this.cellIndex];
                var b =
                    z.getData(n, m, "sortInitialOrder") || v.sortInitialOrder;
                this.order = /^d/i.test(b) || 1 === b ? [1, 0, 2] : [0, 1, 2];
                this.count = -1;
                this.lockedOrder = !1;
                y = z.getData(n, m, "lockedOrder") || !1;
                "undefined" !== typeof y && !1 !== y && (this.order = this.lockedOrder = /^d/i.test(y) || 1 === y ? [1, 1, 1] : [0, 0, 0]);
                n.addClass(v.cssHeader);
                v.headerList[e] = this;
                n.parent().addClass(v.cssHeaderRow);
                n.attr("tabindex", 0)
            });
            w(e);
            v.debug && (c("Built headers:", s), b(v.$headers))
        }

        function y(e, b, c) {
            var f = a(e);
            f.find(e.config.selectorRemove).remove();
            n(e);
            l(e);
            E(f, b, c)
        }

        function w(e) {
            var b, c = e.config;
            c.$headers.each(function (e, f) {
                b = "false" === z.getData(f, c.headers[e], "sorter");
                f.sortDisabled = b;
                a(f)[b ? "addClass" : "removeClass"]("sorter-false")
            })
        }

        function C(e) {
            var b, c, f, g = e.config, m = g.sortList, n = [g.cssAsc, g.cssDesc], l = a(e).find("tfoot tr").children().removeClass(n.join(" "));
            g.$headers.removeClass(n.join(" "));
            f = m.length;
            for (b = 0; b < f; b++)if (2 !== m[b][1] && (e = g.$headers.not(".sorter-false").filter('[data-column="' + m[b][0] + '"]' + (1 === f ? ":last" : "")), e.length))for (c =
                                                                                                                                                                                      0; c < e.length; c++)e[c].sortDisabled || (e.eq(c).addClass(n[m[b][1]]), l.length && l.filter('[data-column="' + m[b][0] + '"]').eq(c).addClass(n[m[b][1]]))
        }

        function B(e) {
            if (e.config.widthFixed && 0 === a(e).find("colgroup").length) {
                var b = a("<colgroup>"), c = a(e).width();
                a(e.tBodies[0]).find("tr:first").children("td").each(function () {
                    b.append(a("<col>").css("width", parseInt(a(this).width() / c * 1E3, 10) / 10 + "%"))
                });
                a(e).prepend(b)
            }
        }

        function D(e, b) {
            var c, f, g, m = e.config, n = b || m.sortList;
            m.sortList = [];
            a.each(n, function (e, b) {
                c =
                    [parseInt(b[0], 10), parseInt(b[1], 10)];
                if (g = m.headerList[c[0]])m.sortList.push(c), f = a.inArray(c[1], g.order), g.count = 0 <= f ? f : c[1] % (m.sortReset ? 3 : 2)
            })
        }

        function m(e, b, c) {
            var f, g, m = e.config, n = !c[m.sortMultiSortKey], l = a(e);
            l.trigger("sortStart", e);
            b.count = c[m.sortResetKey] ? 2 : (b.count + 1) % (m.sortReset ? 3 : 2);
            m.sortRestart && (g = b, m.$headers.each(function () {
                this === g || !n && a(this).is("." + m.cssDesc + ",." + m.cssAsc) || (this.count = -1)
            }));
            g = b.column;
            if (n) {
                m.sortList = [];
                if (null !== m.sortForce)for (f = m.sortForce, c = 0; c < f.length; c++)f[c][0] !==
                    g && m.sortList.push(f[c]);
                f = b.order[b.count];
                if (2 > f && (m.sortList.push([g, f]), 1 < b.colSpan))for (c = 1; c < b.colSpan; c++)m.sortList.push([g + c, f])
            } else if (m.sortAppend && 1 < m.sortList.length && z.isValueInArray(m.sortAppend[0][0], m.sortList) && m.sortList.pop(), z.isValueInArray(g, m.sortList))for (c = 0; c < m.sortList.length; c++)b = m.sortList[c], f = m.headerList[b[0]], b[0] === g && (b[1] = f.order[f.count], 2 === b[1] && (m.sortList.splice(c, 1), f.count = -1)); else if (f = b.order[b.count], 2 > f && (m.sortList.push([g, f]), 1 < b.colSpan))for (c =
                                                                                                                                                                                                                                                                                                                                                                                                                                                  1; c < b.colSpan; c++)m.sortList.push([g + c, f]);
            if (null !== m.sortAppend)for (f = m.sortAppend, c = 0; c < f.length; c++)f[c][0] !== g && m.sortList.push(f[c]);
            l.trigger("sortBegin", e);
            setTimeout(function () {
                C(e);
                r(e);
                s(e)
            }, 1)
        }

        function r(e) {
            var b = 0, f = e.config, m = f.sortList, n = m.length, l = e.tBodies.length, r, q, y, w, v, s, t, u, J;
            if (!f.serverSideSorting && f.cache[0]) {
                f.debug && (r = new Date);
                for (y = 0; y < l; y++)v = f.cache[y].colMax, J = (s = f.cache[y].normalized) && s[0] ? s[0].length - 1 : 0, s.sort(function (c, g) {
                    for (q = 0; q < n; q++) {
                        w = m[q][0];
                        u = m[q][1];
                        t = /n/i.test(f.parsers && f.parsers[w] ? f.parsers[w].type || "" : "") ? "Numeric" : "Text";
                        t += 0 === u ? "" : "Desc";
                        /Numeric/.test(t) && f.strings[w] && (b = "boolean" === typeof f.string[f.strings[w]] ? (0 === u ? 1 : -1) * (f.string[f.strings[w]] ? -1 : 1) : f.strings[w] ? f.string[f.strings[w]] || 0 : 0);
                        var l = a.tablesorter["sort" + t](e, c[w], g[w], w, v[w], b);
                        if (l)return l
                    }
                    return c[J] - g[J]
                });
                f.debug && c("Sorting on " + m.toString() + " and dir " + u + " time", r)
            }
        }

        function q(a, b) {
            a.trigger("updateComplete");
            "function" === typeof b && b(a[0])
        }

        function E(a, b, c) {
            !1 ===
                b || a[0].isProcessing ? q(a, c) : a.trigger("sorton", [a[0].config.sortList, function () {
                q(a, c)
            }])
        }

        function G(e) {
            var b = e.config, c = b.$table, g, q;
            b.$headers.find(b.selectorSort).add(b.$headers.filter(b.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter", function (c, f) {
                if (!c.keyCode || 13 === c.keyCode) {
                    var g = (/TH|TD/.test(this.tagName) ? a(this) : a(this).parents("th, td").filter(":last"))[0];
                    if (c.keyCode) {
                        if (13 !== c.keyCode)return!1
                    } else if (1 !== (c.which || c.button) && "sort" !== c.type)return!1;
                    if ("mousedown" === c.type)return q = (new Date).getTime(), "INPUT" === c.target.tagName ? "" : !b.cancelSelection;
                    if ("mouseup" === c.type && !0 !== f && 250 < (new Date).getTime() - q)return!1;
                    b.delayInit && !b.cache && l(e);
                    g.sortDisabled || m(e, g, c)
                }
            });
            b.cancelSelection && b.$headers.attr("unselectable", "on").bind("selectstart", !1).css({"user-select": "none", MozUserSelect: "none"});
            c.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",
                function (a) {
                    a.stopPropagation();
                    b.sortList = [];
                    C(e);
                    r(e);
                    s(e)
                }).bind("updateAll.tablesorter",function (a, b, c) {
                    a.stopPropagation();
                    z.restoreHeaders(e);
                    v(e);
                    G(e);
                    y(e, b, c)
                }).bind("update.tablesorter updateRows.tablesorter",function (a, b, c) {
                    a.stopPropagation();
                    w(e);
                    y(e, b, c)
                }).bind("updateCell.tablesorter",function (g, m, n, l) {
                    g.stopPropagation();
                    c.find(b.selectorRemove).remove();
                    var r, q, w;
                    r = c.find("tbody");
                    g = r.index(a(m).parents("tbody").filter(":last"));
                    var y = a(m).parents("tr").filter(":last");
                    m = a(m)[0];
                    r.length &&
                        0 <= g && (q = r.eq(g).find("tr").index(y), w = m.cellIndex, r = b.cache[g].normalized[q].length - 1, b.cache[g].row[e.config.cache[g].normalized[q][r]] = y, b.cache[g].normalized[q][w] = b.parsers[w].format(f(e, m, w), e, m, w), E(c, n, l))
                }).bind("addRows.tablesorter",function (a, m, l, r) {
                    a.stopPropagation();
                    var q = m.filter("tr").length, w = [], y = m[0].cells.length, v = c.find("tbody").index(m.closest("tbody"));
                    b.parsers || n(e);
                    for (a = 0; a < q; a++) {
                        for (g = 0; g < y; g++)w[g] = b.parsers[g].format(f(e, m[a].cells[g], g), e, m[a].cells[g], g);
                        w.push(b.cache[v].row.length);
                        b.cache[v].row.push([m[a]]);
                        b.cache[v].normalized.push(w);
                        w = []
                    }
                    E(c, l, r)
                }).bind("sorton.tablesorter",function (a, b, f, g) {
                    a.stopPropagation();
                    c.trigger("sortStart", this);
                    D(e, b);
                    C(e);
                    c.trigger("sortBegin", this);
                    r(e);
                    s(e, g);
                    "function" === typeof f && f(e)
                }).bind("appendCache.tablesorter",function (a, b, c) {
                    a.stopPropagation();
                    s(e, c);
                    "function" === typeof b && b(e)
                }).bind("applyWidgetId.tablesorter",function (a, c) {
                    a.stopPropagation();
                    z.getWidgetById(c).format(e, b, b.widgetOptions)
                }).bind("applyWidgets.tablesorter",function (a, b) {
                    a.stopPropagation();
                    z.applyWidget(e, b)
                }).bind("refreshWidgets.tablesorter",function (a, b, c) {
                    a.stopPropagation();
                    z.refreshWidgets(e, b, c)
                }).bind("destroy.tablesorter", function (a, b, c) {
                    a.stopPropagation();
                    z.destroy(e, b, c)
                })
        }

        var z = this;
        z.version = "2.10.0";
        z.parsers = [];
        z.widgets = [];
        z.defaults = {theme: "default", widthFixed: !1, showProcessing: !1, headerTemplate: "{content}", onRenderTemplate: null, onRenderHeader: null, cancelSelection: !0, dateFormat: "mmddyyyy", sortMultiSortKey: "shiftKey", sortResetKey: "ctrlKey", usNumberFormat: !0,
            delayInit: !1, serverSideSorting: !1, headers: {}, ignoreCase: !0, sortForce: null, sortList: [], sortAppend: null, sortInitialOrder: "asc", sortLocaleCompare: !1, sortReset: !1, sortRestart: !1, emptyTo: "bottom", stringTo: "max", textExtraction: "simple", textSorter: null, widgets: [], widgetOptions: {zebra: ["even", "odd"]}, initWidgets: !0, initialized: null, tableClass: "tablesorter", cssAsc: "sort-ascending", cssChildRow: "tablesorter-childRow", cssDesc: "sort-descending", cssHeader: "header", cssHeaderRow: "tablesorter-headerRow", cssIcon: "tablesorter-icon",
            cssInfoBlock: "tablesorter-infoOnly", cssProcessing: "tablesorter-processing", selectorHeaders: "> thead th, > thead td", selectorSort: "th, td", selectorRemove: ".remove-me", debug: !1, headerList: [], empties: {}, strings: {}, parsers: []};
        z.benchmark = c;
        z.construct = function (e) {
            return this.each(function () {
                if (!this.tHead || 0 === this.tBodies.length || !0 === this.hasInitialized)return this.config && this.config.debug ? b("stopping initialization! No thead, tbody or tablesorter has already been initialized") : "";
                var c = a(this), f =
                    this, g, m = "", r = a.metadata;
                f.hasInitialized = !1;
                f.isProcessing = !0;
                f.config = {};
                g = a.extend(!0, f.config, z.defaults, e);
                a.data(f, "tablesorter", g);
                g.debug && a.data(f, "startoveralltimer", new Date);
                g.supportsTextContent = "x" === a("<span>x</span>")[0].textContent;
                g.supportsDataObject = 1.4 <= parseFloat(a.fn.jquery);
                g.string = {max: 1, min: -1, "max+": 1, "max-": -1, zero: 0, none: 0, "null": 0, top: !0, bottom: !1};
                /tablesorter\-/.test(c.attr("class")) || (m = "" !== g.theme ? " tablesorter-" + g.theme : "");
                g.$table = c.addClass(g.tableClass + m);
                g.$tbodies = c.children("tbody:not(." + g.cssInfoBlock + ")");
                v(f);
                B(f);
                n(f);
                g.delayInit || l(f);
                G(f);
                g.supportsDataObject && "undefined" !== typeof c.data().sortlist ? g.sortList = c.data().sortlist : r && c.metadata() && c.metadata().sortlist && (g.sortList = c.metadata().sortlist);
                z.applyWidget(f, !0);
                0 < g.sortList.length ? c.trigger("sorton", [g.sortList, {}, !g.initWidgets]) : g.initWidgets && z.applyWidget(f);
                g.showProcessing && c.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter",
                    function (a) {
                        z.isProcessing(f, "sortBegin" === a.type)
                    });
                f.hasInitialized = !0;
                f.isProcessing = !1;
                g.debug && z.benchmark("Overall initialization time", a.data(f, "startoveralltimer"));
                c.trigger("tablesorter-initialized", f);
                "function" === typeof g.initialized && g.initialized(f)
            })
        };
        z.isProcessing = function (e, b, c) {
            e = a(e);
            var f = e[0].config;
            e = c || e.find("." + f.cssHeader);
            b ? (0 < f.sortList.length && (e = e.filter(function () {
                return this.sortDisabled ? !1 : z.isValueInArray(parseFloat(a(this).attr("data-column")), f.sortList)
            })), e.addClass(f.cssProcessing)) :
                e.removeClass(f.cssProcessing)
        };
        z.processTbody = function (e, b, c) {
            if (c)return e.isProcessing = !0, b.before('<span class="tablesorter-savemyplace"/>'), c = a.fn.detach ? b.detach() : b.remove();
            c = a(e).find("span.tablesorter-savemyplace");
            b.insertAfter(c);
            c.remove();
            e.isProcessing = !1
        };
        z.clearTableBody = function (e) {
            a(e)[0].config.$tbodies.empty()
        };
        z.restoreHeaders = function (e) {
            var b = e.config;
            b.$headers.each(function (e) {
                a(this).find(".tablesorter-header-inner").length && a(this).html(b.headerContent[e])
            })
        };
        z.destroy =
            function (e, b, c) {
                e = a(e)[0];
                if (e.hasInitialized) {
                    z.refreshWidgets(e, !0, !0);
                    var f = a(e), g = e.config, m = f.find("thead:first"), n = m.find("tr." + g.cssHeaderRow).removeClass(g.cssHeaderRow), l = f.find("tfoot:first > tr").children("th, td");
                    m.find("tr").not(n).remove();
                    f.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));
                    g.$headers.add(l).removeClass(g.cssHeader +
                        " " + g.cssAsc + " " + g.cssDesc).removeAttr("data-column");
                    n.find(g.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter");
                    z.restoreHeaders(e);
                    !1 !== b && f.removeClass(g.tableClass + " tablesorter-" + g.theme);
                    e.hasInitialized = !1;
                    "function" === typeof c && c(e)
                }
            };
        z.regex = [/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, /^0x[0-9a-f]+$/i];
        z.sortText =
            function (a, b, c, f) {
                if (b === c)return 0;
                var g = a.config, m = g.string[g.empties[f] || g.emptyTo], n = z.regex;
                if ("" === b && 0 !== m)return"boolean" === typeof m ? m ? -1 : 1 : -m || -1;
                if ("" === c && 0 !== m)return"boolean" === typeof m ? m ? 1 : -1 : m || 1;
                if ("function" === typeof g.textSorter)return g.textSorter(b, c, a, f);
                a = b.replace(n[0], "\\0$1\\0").replace(/\\0$/, "").replace(/^\\0/, "").split("\\0");
                f = c.replace(n[0], "\\0$1\\0").replace(/\\0$/, "").replace(/^\\0/, "").split("\\0");
                b = parseInt(b.match(n[2]), 16) || 1 !== a.length && b.match(n[1]) && Date.parse(b);
                if (c = parseInt(c.match(n[2]), 16) || b && c.match(n[1]) && Date.parse(c) || null) {
                    if (b < c)return-1;
                    if (b > c)return 1
                }
                g = Math.max(a.length, f.length);
                for (b = 0; b < g; b++) {
                    c = isNaN(a[b]) ? a[b] || 0 : parseFloat(a[b]) || 0;
                    n = isNaN(f[b]) ? f[b] || 0 : parseFloat(f[b]) || 0;
                    if (isNaN(c) !== isNaN(n))return isNaN(c) ? 1 : -1;
                    typeof c !== typeof n && (c += "", n += "");
                    if (c < n)return-1;
                    if (c > n)return 1
                }
                return 0
            };
        z.sortTextDesc = function (a, b, c, f) {
            if (b === c)return 0;
            var g = a.config, m = g.string[g.empties[f] || g.emptyTo];
            return"" === b && 0 !== m ? "boolean" === typeof m ? m ?
                -1 : 1 : m || 1 : "" === c && 0 !== m ? "boolean" === typeof m ? m ? 1 : -1 : -m || -1 : "function" === typeof g.textSorter ? g.textSorter(c, b, a, f) : z.sortText(a, c, b)
        };
        z.getTextValue = function (a, b, c) {
            if (b) {
                var f = a ? a.length : 0, g = b + c;
                for (b = 0; b < f; b++)g += a.charCodeAt(b);
                return c * g
            }
            return 0
        };
        z.sortNumeric = function (a, b, c, f, g, m) {
            if (b === c)return 0;
            a = a.config;
            f = a.string[a.empties[f] || a.emptyTo];
            if ("" === b && 0 !== f)return"boolean" === typeof f ? f ? -1 : 1 : -f || -1;
            if ("" === c && 0 !== f)return"boolean" === typeof f ? f ? 1 : -1 : f || 1;
            isNaN(b) && (b = z.getTextValue(b, g, m));
            isNaN(c) && (c = z.getTextValue(c, g, m));
            return b - c
        };
        z.sortNumericDesc = function (a, b, c, f, g, m) {
            if (b === c)return 0;
            a = a.config;
            f = a.string[a.empties[f] || a.emptyTo];
            if ("" === b && 0 !== f)return"boolean" === typeof f ? f ? -1 : 1 : f || 1;
            if ("" === c && 0 !== f)return"boolean" === typeof f ? f ? 1 : -1 : -f || -1;
            isNaN(b) && (b = z.getTextValue(b, g, m));
            isNaN(c) && (c = z.getTextValue(c, g, m));
            return c - b
        };
        z.characterEquivalents = {a: "\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5", A: "\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5", c: "\u00e7\u0107\u010d", C: "\u00c7\u0106\u010c",
            e: "\u00e9\u00e8\u00ea\u00eb\u011b\u0119", E: "\u00c9\u00c8\u00ca\u00cb\u011a\u0118", i: "\u00ed\u00ec\u0130\u00ee\u00ef\u0131", I: "\u00cd\u00cc\u0130\u00ce\u00cf", o: "\u00f3\u00f2\u00f4\u00f5\u00f6", O: "\u00d3\u00d2\u00d4\u00d5\u00d6", ss: "\u00df", SS: "\u1e9e", u: "\u00fa\u00f9\u00fb\u00fc\u016f", U: "\u00da\u00d9\u00db\u00dc\u016e"};
        z.replaceAccents = function (a) {
            var b, c = "[", f = z.characterEquivalents;
            if (!z.characterRegex) {
                z.characterRegexArray = {};
                for (b in f)"string" === typeof b && (c += f[b], z.characterRegexArray[b] =
                    RegExp("[" + f[b] + "]", "g"));
                z.characterRegex = RegExp(c + "]")
            }
            if (z.characterRegex.test(a))for (b in f)"string" === typeof b && (a = a.replace(z.characterRegexArray[b], b));
            return a
        };
        z.isValueInArray = function (a, b) {
            var c, f = b.length;
            for (c = 0; c < f; c++)if (b[c][0] === a)return!0;
            return!1
        };
        z.addParser = function (a) {
            var b, c = z.parsers.length, f = !0;
            for (b = 0; b < c; b++)z.parsers[b].id.toLowerCase() === a.id.toLowerCase() && (f = !1);
            f && z.parsers.push(a)
        };
        z.getParserById = function (a) {
            var b, c = z.parsers.length;
            for (b = 0; b < c; b++)if (z.parsers[b].id.toLowerCase() ===
                a.toString().toLowerCase())return z.parsers[b];
            return!1
        };
        z.addWidget = function (a) {
            z.widgets.push(a)
        };
        z.getWidgetById = function (a) {
            var b, c, f = z.widgets.length;
            for (b = 0; b < f; b++)if ((c = z.widgets[b]) && c.hasOwnProperty("id") && c.id.toLowerCase() === a.toLowerCase())return c
        };
        z.applyWidget = function (e, b) {
            e = a(e)[0];
            var f = e.config, m = f.widgetOptions, n = [], l, r, q;
            f.debug && (l = new Date);
            f.widgets.length && (f.widgets = a.grep(f.widgets, function (b, e) {
                return a.inArray(b, f.widgets) === e
            }), a.each(f.widgets || [], function (a, b) {
                (q =
                    z.getWidgetById(b)) && q.id && (q.priority || (q.priority = 10), n[a] = q)
            }), n.sort(function (a, b) {
                return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1
            }), a.each(n, function (c, g) {
                g && (b ? (g.hasOwnProperty("options") && (m = e.config.widgetOptions = a.extend(!0, {}, g.options, m)), g.hasOwnProperty("init") && g.init(e, g, f, m)) : !b && g.hasOwnProperty("format") && g.format(e, f, m, !1))
            }));
            f.debug && (r = f.widgets.length, c("Completed " + (!0 === b ? "initializing " : "applying ") + r + " widget" + (1 !== r ? "s" : ""), l))
        };
        z.refreshWidgets = function (e, c, f) {
            e = a(e)[0];
            var g, m = e.config, n = m.widgets, l = z.widgets, r = l.length;
            for (g = 0; g < r; g++)l[g] && l[g].id && (c || 0 > a.inArray(l[g].id, n)) && (m.debug && b("Refeshing widgets: Removing " + l[g].id), l[g].hasOwnProperty("remove") && l[g].remove(e, m, m.widgetOptions));
            !0 !== f && z.applyWidget(e, c)
        };
        z.getData = function (b, c, f) {
            var g = "";
            b = a(b);
            var m, n;
            if (!b.length)return"";
            m = a.metadata ? b.metadata() : !1;
            n = " " + (b.attr("class") || "");
            "undefined" !== typeof b.data(f) || "undefined" !== typeof b.data(f.toLowerCase()) ? g += b.data(f) || b.data(f.toLowerCase()) :
                m && "undefined" !== typeof m[f] ? g += m[f] : c && "undefined" !== typeof c[f] ? g += c[f] : " " !== n && n.match(" " + f + "-") && (g = n.match(RegExp("\\s" + f + "-([\\w-]+)"))[1] || "");
            return a.trim(g)
        };
        z.formatFloat = function (b, c) {
            if ("string" !== typeof b || "" === b)return b;
            var f;
            b = (c && c.config ? !1 !== c.config.usNumberFormat : "undefined" !== typeof c ? c : 1) ? b.replace(/,/g, "") : b.replace(/[\s|\.]/g, "").replace(/,/g, ".");
            /^\s*\([.\d]+\)/.test(b) && (b = b.replace(/^\s*\(/, "-").replace(/\)/, ""));
            f = parseFloat(b);
            return isNaN(f) ? a.trim(b) : f
        };
        z.isDigit =
            function (a) {
                return isNaN(a) ? /^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g, "")) : !0
            }
    }});
    var c = a.tablesorter;
    a.fn.extend({tablesorter: c.construct});
    c.addParser({id: "text", is: function () {
        return!0
    }, format: function (b, g) {
        var f = g.config;
        b && (b = a.trim(f.ignoreCase ? b.toLocaleLowerCase() : b), b = f.sortLocaleCompare ? c.replaceAccents(b) : b);
        return b
    }, type: "text"});
    c.addParser({id: "digit", is: function (a) {
        return c.isDigit(a)
    }, format: function (b, g) {
        var f = c.formatFloat((b || "").replace(/[^\w,. \-()]/g, ""), g);
        return b &&
            "number" === typeof f ? f : b ? a.trim(b && g.config.ignoreCase ? b.toLocaleLowerCase() : b) : b
    }, type: "numeric"});
    c.addParser({id: "currency", is: function (a) {
        return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((a || "").replace(/[,. ]/g, ""))
    }, format: function (b, g) {
        var f = c.formatFloat((b || "").replace(/[^\w,. \-()]/g, ""), g);
        return b && "number" === typeof f ? f : b ? a.trim(b && g.config.ignoreCase ? b.toLocaleLowerCase() : b) : b
    }, type: "numeric"});
    c.addParser({id: "ipAddress", is: function (a) {
        return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(a)
    },
        format: function (a, g) {
            var f, n = a ? a.split(".") : "", l = "", s = n.length;
            for (f = 0; f < s; f++)l += ("00" + n[f]).slice(-3);
            return a ? c.formatFloat(l, g) : a
        }, type: "numeric"});
    c.addParser({id: "url", is: function (a) {
        return/^(https?|ftp|file):\/\//.test(a)
    }, format: function (b) {
        return b ? a.trim(b.replace(/(https?|ftp|file):\/\//, "")) : b
    }, type: "text"});
    c.addParser({id: "isoDate", is: function (a) {
        return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(a)
    }, format: function (a, g) {
        return a ? c.formatFloat("" !== a ? (new Date(a.replace(/-/g, "/"))).getTime() ||
            "" : "", g) : a
    }, type: "numeric"});
    c.addParser({id: "percent", is: function (a) {
        return/(\d\s?%|%\s?\d)/.test(a)
    }, format: function (a, g) {
        return(a = a.replace(",", ".")) ? c.formatFloat(a.replace(/%/g, ""), g) : a
    }, type: "numeric"});
    c.addParser({id: "usLongDate", is: function (a) {
        return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(a) || /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(a)
    }, format: function (a, g) {
        return a ? c.formatFloat((new Date(a.replace(/(\S)([AP]M)$/i, "$1 $2"))).getTime() || "", g) : a
    },
        type: "numeric"});
    c.addParser({id: "shortDate", is: function (a) {
        return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((a || "").replace(/\s+/g, " ").replace(/[\-.,]/g, "/"))
    }, format: function (a, g, f, n) {
        if (a) {
            f = g.config;
            var l = f.headerList[n], s = l.shortDateFormat;
            "undefined" === typeof s && (s = l.shortDateFormat = c.getData(l, f.headers[n], "dateFormat") || f.dateFormat);
            a = a.replace(/\s+/g, " ").replace(/[\-.,]/g, "/");
            "mmddyyyy" === s ? a = a.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2") :
                "ddmmyyyy" === s ? a = a.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1") : "yyyymmdd" === s && (a = a.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3"))
        }
        return a ? c.formatFloat((new Date(a)).getTime() || "", g) : a
    }, type: "numeric"});
    c.addParser({id: "time", is: function (a) {
        return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(a)
    }, format: function (a, g) {
        return a ? c.formatFloat((new Date("2000/01/01 " + a.replace(/(\S)([AP]M)$/i, "$1 $2"))).getTime() || "", g) : a
    }, type: "numeric"});
    c.addParser({id: "metadata",
        is: function () {
            return!1
        }, format: function (b, c, f) {
            b = c.config;
            b = b.parserMetadataName ? b.parserMetadataName : "sortValue";
            return a(f).metadata()[b]
        }, type: "numeric"});
    c.addWidget({id: "zebra", priority: 90, format: function (b, g, f) {
        var n, l, s, t, v, y, w = RegExp(g.cssChildRow, "i"), C = g.$tbodies;
        g.debug && (v = new Date);
        for (b = 0; b < C.length; b++)n = C.eq(b), y = n.children("tr").length, 1 < y && (s = 0, n = n.children("tr:visible"), n.each(function () {
            l = a(this);
            w.test(this.className) || s++;
            t = 0 === s % 2;
            l.removeClass(f.zebra[t ? 1 : 0]).addClass(f.zebra[t ?
                0 : 1])
        }));
        g.debug && c.benchmark("Applying Zebra widget", v)
    }, remove: function (b, c, f) {
        var n;
        c = c.$tbodies;
        var l = (f.zebra || ["even", "odd"]).join(" ");
        for (f = 0; f < c.length; f++)n = a.tablesorter.processTbody(b, c.eq(f), !0), n.children().removeClass(l), a.tablesorter.processTbody(b, n, !1)
    }})
})(jQuery);
(function (a) {
    function c(a, b) {
        var c = g.indexOf(a.charAt(b));
        if (-1 === c)throw"Cannot decode base64";
        return c
    }

    function b(a, b) {
        var c = a.charCodeAt(b);
        if (255 < c)throw"INVALID_CHARACTER_ERR: DOM Exception 5";
        return c
    }

    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    a.base64 = {decode: function (a) {
        var b = 0, g, s, t = a.length, v = [];
        a = String(a);
        if (0 === t)return a;
        if (0 !== t % 4)throw"Cannot decode base64";
        "=" === a.charAt(t - 1) && (b = 1, "=" === a.charAt(t - 2) && (b = 2), t -= 4);
        for (g = 0; g < t; g += 4)s = c(a, g) << 18 | c(a, g +
            1) << 12 | c(a, g + 2) << 6 | c(a, g + 3), v.push(String.fromCharCode(s >> 16, s >> 8 & 255, s & 255));
        switch (b) {
            case 1:
                s = c(a, g) << 18 | c(a, g + 1) << 12 | c(a, g + 2) << 6;
                v.push(String.fromCharCode(s >> 16, s >> 8 & 255));
                break;
            case 2:
                s = c(a, g) << 18 | c(a, g + 1) << 12, v.push(String.fromCharCode(s >> 16))
        }
        return v.join("")
    }, encode: function (a) {
        if (1 !== arguments.length)throw"SyntaxError: exactly one argument required";
        a = String(a);
        var c, l, s = [], t = a.length - a.length % 3;
        if (0 === a.length)return a;
        for (c = 0; c < t; c += 3)l = b(a, c) << 16 | b(a, c + 1) << 8 | b(a, c + 2), s.push(g.charAt(l >>
            18)), s.push(g.charAt(l >> 12 & 63)), s.push(g.charAt(l >> 6 & 63)), s.push(g.charAt(l & 63));
        switch (a.length - t) {
            case 1:
                l = b(a, c) << 16;
                s.push(g.charAt(l >> 18) + g.charAt(l >> 12 & 63) + "==");
                break;
            case 2:
                l = b(a, c) << 16 | b(a, c + 1) << 8, s.push(g.charAt(l >> 18) + g.charAt(l >> 12 & 63) + g.charAt(l >> 6 & 63) + "=")
        }
        return s.join("")
    }, VERSION: "1.0"}
})(jQuery);
(function (a) {
    function c(a) {
        for (var b = -1, c = a.length, f = 0, g = [], n; ;) {
            for (; ;) {
                b += 1;
                if (b >= c)return g;
                if (null != l[a.charAt(b)])break
            }
            for (g[f] = l[a.charAt(b)] << 2; ;) {
                b += 1;
                if (b >= c)return g;
                if (null != l[a.charAt(b)])break
            }
            n = l[a.charAt(b)];
            g[f] |= n >>> 4;
            f += 1;
            n &= 15;
            if (0 === n && b === c - 1)return g;
            for (g[f] = n << 4; ;) {
                b += 1;
                if (b >= c)return g;
                if (null != l[a.charAt(b)])break
            }
            n = l[a.charAt(b)];
            g[f] |= n >>> 2;
            f += 1;
            n &= 3;
            if (0 === n && b === c - 1)return g;
            for (g[f] = n << 6; ;) {
                b += 1;
                if (b >= c)return g;
                if (null != l[a.charAt(b)])break
            }
            g[f] |= l[a.charAt(b)];
            f +=
                1
        }
    }

    function b(a) {
        for (var b = [], c = 0, f = 0, g = a.length; ;) {
            b[c] = (255 & a[f]) << 24;
            f += 1;
            if (f >= g)break;
            b[c] |= (255 & a[f]) << 16;
            f += 1;
            if (f >= g)break;
            b[c] |= (255 & a[f]) << 8;
            f += 1;
            if (f >= g)break;
            b[c] |= 255 & a[f];
            f += 1;
            if (f >= g)break;
            c += 1
        }
        return b
    }

    function g(a, b) {
        var c = [];
        c[0] = a[0] ^ b[0];
        c[1] = a[1] ^ b[1];
        return c
    }

    function f(a, b) {
        for (var c = a[0], f = a[1], g = 0, n = 32; 0 < n--;)c += (f << 4 ^ f >>> 5) + f ^ g + b[g & 3], c |= 0, g -= 1640531527, g |= 0, f += (c << 4 ^ c >>> 5) + c ^ g + b[g >>> 11 & 3], f |= 0;
        g = [];
        g[0] = c;
        g[1] = f;
        return g
    }

    var n, l, s, t;
    s = {"\x00": 0, "\u0001": 1, "\u0002": 2, "\u0003": 3,
        "\u0004": 4, "\u0005": 5, "\u0006": 6, "\u0007": 7, "\b": 8, "\t": 9, "\n": 10, "\x0B": 11, "\f": 12, "\r": 13, "\u000e": 14, "\u000f": 15, "\u0010": 16, "\u0011": 17, "\u0012": 18, "\u0013": 19, "\u0014": 20, "\u0015": 21, "\u0016": 22, "\u0017": 23, "\u0018": 24, "\u0019": 25, "\u001a": 26, "\u001b": 27, "\u001c": 28, "\u001d": 29, "\u001e": 30, "\u001f": 31, " ": 32, "!": 33, '"': 34, "#": 35, $: 36, "%": 37, "&": 38, "'": 39, "(": 40, ")": 41, "*": 42, "+": 43, ",": 44, "-": 45, ".": 46, "/": 47, 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, ":": 58, ";": 59, "<": 60, "=": 61, ">": 62,
        "?": 63, "@": 64, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, "[": 91, "\\": 92, "]": 93, "^": 94, _: 95, "`": 96, a: 97, b: 98, c: 99, d: 100, e: 101, f: 102, g: 103, h: 104, i: 105, j: 106, k: 107, l: 108, m: 109, n: 110, o: 111, p: 112, q: 113, r: 114, s: 115, t: 116, u: 117, v: 118, w: 119, x: 120, y: 121, z: 122, "{": 123, "|": 124, "}": 125, "~": 126, "\u007f": 127, "\u0080": 128, "\u0081": 129, "\u0082": 130, "\u0083": 131, "\u0084": 132, "\u0085": 133, "\u0086": 134, "\u0087": 135, "\u0088": 136, "\u0089": 137,
        "\u008a": 138, "\u008b": 139, "\u008c": 140, "\u008d": 141, "\u008e": 142, "\u008f": 143, "\u0090": 144, "\u0091": 145, "\u0092": 146, "\u0093": 147, "\u0094": 148, "\u0095": 149, "\u0096": 150, "\u0097": 151, "\u0098": 152, "\u0099": 153, "\u009a": 154, "\u009b": 155, "\u009c": 156, "\u009d": 157, "\u009e": 158, "\u009f": 159, "\u00a0": 160, "\u00a1": 161, "\u00a2": 162, "\u00a3": 163, "\u00a4": 164, "\u00a5": 165, "\u00a6": 166, "\u00a7": 167, "\u00a8": 168, "\u00a9": 169, "\u00aa": 170, "\u00ab": 171, "\u00ac": 172, "\u00ad": 173, "\u00ae": 174, "\u00af": 175, "\u00b0": 176,
        "\u00b1": 177, "\u00b2": 178, "\u00b3": 179, "\u00b4": 180, "\u00b5": 181, "\u00b6": 182, "\u00b7": 183, "\u00b8": 184, "\u00b9": 185, "\u00ba": 186, "\u00bb": 187, "\u00bc": 188, "\u00bd": 189, "\u00be": 190, "\u00bf": 191, "\u00c0": 192, "\u00c1": 193, "\u00c2": 194, "\u00c3": 195, "\u00c4": 196, "\u00c5": 197, "\u00c6": 198, "\u00c7": 199, "\u00c8": 200, "\u00c9": 201, "\u00ca": 202, "\u00cb": 203, "\u00cc": 204, "\u00cd": 205, "\u00ce": 206, "\u00cf": 207, "\u00d0": 208, "\u00d1": 209, "\u00d2": 210, "\u00d3": 211, "\u00d4": 212, "\u00d5": 213, "\u00d6": 214, "\u00d7": 215,
        "\u00d8": 216, "\u00d9": 217, "\u00da": 218, "\u00db": 219, "\u00dc": 220, "\u00dd": 221, "\u00de": 222, "\u00df": 223, "\u00e0": 224, "\u00e1": 225, "\u00e2": 226, "\u00e3": 227, "\u00e4": 228, "\u00e5": 229, "\u00e6": 230, "\u00e7": 231, "\u00e8": 232, "\u00e9": 233, "\u00ea": 234, "\u00eb": 235, "\u00ec": 236, "\u00ed": 237, "\u00ee": 238, "\u00ef": 239, "\u00f0": 240, "\u00f1": 241, "\u00f2": 242, "\u00f3": 243, "\u00f4": 244, "\u00f5": 245, "\u00f6": 246, "\u00f7": 247, "\u00f8": 248, "\u00f9": 249, "\u00fa": 250, "\u00fb": 251, "\u00fc": 252, "\u00fd": 253, "\u00fe": 254,
        "\u00ff": 255};
    t = {};
    for (n in s)s.hasOwnProperty(n) && (t[s[n]] = n);
    l = {A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32, h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40, p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48, x: 49, y: 50, z: 51, 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, "-": 62, _: 63};
    for (n in l)l.hasOwnProperty(n);
    a.teajs = {decrypt: function (a, n) {
        if (!n)return alert("decrypt: no key"), !1;
        var l = [], C = [], l = [],
            B = [], D = [], m = [], r, q = [], E = 0, G, z = [];
        C[0] = 1633837924;
        C[1] = 1650680933;
        C[2] = 1667523942;
        C[3] = 1684366951;
        l[0] = 1633837924;
        l[1] = 1650680933;
        B = l;
        q = 0;
        G = n.length;
        for (r = []; !(q >= G);)null === s[n.charAt(q)] ? r[q] = 247 : r[q] = s[n.charAt(q)], q += 1;
        var q = [], e = G = 0, x = r.length, H = 15 - x % 16;
        q[G] = H;
        for (G += 1; e < x;)q[G] = r[e], G += 1, e += 1;
        for (r = H; 0 < r;)q[G] = 0, G += 1, r -= 1;
        q = b(q);
        for (G = q.length; !(E >= G);)D[0] = q[E], E += 1, D[1] = q[E], E += 1, m[0] = q[E], E += 1, m[1] = q[E], E += 1, l = f(g(D, l), C), B = f(g(m, B), C), r = l[0], l[0] = l[1], l[1] = B[0], B[0] = B[1], B[1] = r;
        z[0] = l[0];
        z[1] = l[1];
        z[2] = B[0];
        z[3] = B[1];
        l = z;
        if (!a)return"";
        B = [];
        B = b(c(a));
        D = 0;
        m = B.length;
        E = [1633837924, 1650680933];
        q = [];
        z = [];
        C = [];
        for (r = 0; !(D >= m);) {
            z[0] = B[D];
            D += 1;
            z[1] = B[D];
            D += 1;
            q = E;
            G = z[0];
            e = z[1];
            x = 0;
            H = 32;
            for (x = -957401312; 0 < H--;)e -= (G << 4 ^ G >>> 5) + G ^ x + l[x >>> 11 & 3], e |= 0, x += 1640531527, x |= 0, G -= (e << 4 ^ e >>> 5) + e ^ x + l[x & 3], G |= 0;
            x = [];
            x[0] = G;
            x[1] = e;
            q = g(q, x);
            C[r] = q[0];
            r += 1;
            C[r] = q[1];
            r += 1;
            E[0] = z[0];
            E[1] = z[1]
        }
        l = [];
        D = B = 0;
        for (m = C.length; !(D >= m);)l[B] = 255 & C[D] >>> 24, B += 1, l[B] = 255 & C[D] >>> 16, B += 1, l[B] = 255 & C[D] >>> 8, B += 1, l[B] = 255 & C[D],
            B += 1, D += 1;
        B = 0;
        C = [];
        D = 0;
        m = 7 & l[B];
        B += 1;
        for (m = l.length - m; B < m;)C[D] = l[B], D += 1, B += 1;
        l = 0;
        B = C.length;
        for (D = ""; !(l >= B);)D += t[255 & C[l]], l += 1;
        return D
    }}
})(jQuery);
(function (a) {
    a.fn.jcarousel = function (c) {
        var b, g, f, n, l, s, t, v, y, w, C, B = !0, D, m, r, q, E = function () {
            w && (clearTimeout(C), C = setTimeout(e.onAutoScroll, e.delay))
        }, G = function () {
            !0 === e.show_pips && (t.removeClass("jcarousel-pip-selected"), a(t[y - 1]).addClass("jcarousel-pip-selected"))
        }, z = {page_width: 400, delay: 5E3, show_pips: !0, multipage: !1, arrow_width: 40, onNext: function (a) {
            var c = function () {
                g.css({marginLeft: "+=" + e.page_width});
                g.append(f[0]);
                B = !0
            };
            if (B) {
                if (g.is(":animated"))return!1;
                B = !1;
                f = b.find(".page");
                g.animate({marginLeft: "-=" +
                    e.page_width}, !0 === a ? 0 : 400, c);
                E();
                y += 1;
                y > v && (y = 1);
                G()
            }
        }, onPrevious: function (a) {
            if (B) {
                if (g.is(":animated"))return!1;
                B = !1;
                f = b.find(".page");
                g.css({marginLeft: "-=" + e.page_width});
                g.prepend(f[f.length - 1]);
                B = !0;
                g.animate({marginLeft: "+=" + e.page_width}, !0 === a ? 0 : 400);
                E();
                y -= 1;
                0 >= y && (y = v);
                G()
            }
        }, onAutoScroll: function () {
            if (w && (g.is(":hover") || n.is(":hover") || l.is(":hover")))E(); else z.onNext()
        }, scrollTo: function (a) {
            a = y - (a + 1);
            var b;
            if (0 > a)for (b = a; 0 > b; b += 1)e.onNext(!0); else if (0 < a)for (b = 0; b < a; b += 1)e.onPrevious(!0)
        },
            onPipClick: function () {
                var b = a(this);
                e.scrollTo(b.data("idx"))
            }, updateOrientation: function (a) {
                a = b.parent().width();
                e.page_width = a;
                b.width(a);
                g.width((e.page_width + e.arrow_width) * v);
                f.css("width", e.page_width);
                f.css("height", e.page_width / e.original.w * e.height);
                400 > b.width() ? b.closest(".opta-widget-container").addClass("narrow") : b.closest(".opta-widget-container").removeClass("narrow")
            }, onTouchStart: function (a) {
                a = a.originalEvent.changedTouches[0];
                D = a.pageX;
                m = a.pageY;
                q = r = !1
            }, onTouchMove: function (a) {
                var b =
                    a.originalEvent.changedTouches[0], c = Math.abs(b.pageX - D), f = Math.abs(b.pageY - m);
                if (10 < c && !r && !q) {
                    if ("A" !== a.target.tagName) {
                        if (0 < D - b.pageX)e.onNext(); else e.onPrevious();
                        r = !0;
                        a.preventDefault()
                    }
                } else if (10 < f || q)q = !0
            }, onTouchEnd: function (a) {
                q = r = !1
            }}, e = a.extend({}, z, c);
        return this.each(function () {
            var c = function () {
                    var a, b, c;
                    a = '<div class="jcarousel-pips">';
                    for (b = 0; b < f.length; b += 1)c = 0 === b ? " jcarousel-pip-selected" : "", a += '<span class="jcarousel-pip' + c + '" data-idx="' + b + '">\u25cf</span> ';
                    return a + "</div>"
                },
                m, r;
            b = a(this);
            g = b.find(".strip");
            f = b.find(".page");
            v = f.length;
            if (e.multipage) {
                b.addClass("multipage");
                e.page_width -= e.arrow_width;
                m = e.per_page || Math.round(e.page_width / e.width);
                for (r = 0; r < v / m; r += 1)b.find(".page:nth-child(n+" + (r * m + 1) + "):nth-child(-n+" + (r + 1) * m + ")").addClass("pageset pageset-" + r).data("set", r).removeClass("page").width(e.page_width / m);
                for (r = 0; r < v / m; r += 1)b.find(".pageset-" + r).wrapInner('<div class="page-contents"></div>').wrapAll('<div class="page"></div>');
                g = b.find(".strip");
                f = b.find(".page");
                v = f.length;
                e.page_width += e.arrow_width
            }
            b.addClass("jcarousel");
            g.width((e.page_width + e.arrow_width) * v);
            void 0 === navigator || "iPad" !== navigator.platform && "iPhone" !== navigator.platform || g.parent().width(e.page_width);
            f.css("width", e.page_width);
            f.css("height", e.height);
            f.find("img").attr("height", "").attr("width", "");
            e.original = {w: e.page_width, h: e.height};
            1 < v && (n = a('<div class="jcarousel-sprite jcarousel-nav jcarousel-next"></div>'), l = a('<div class="jcarousel-sprite jcarousel-nav jcarousel-previous"></div>'),
                b.append(l), b.append(n));
            y = 1;
            !0 === e.show_pips && (s = a(c()), b.parent().append(s), t = s.find(".jcarousel-pip"), t.on("click", e.onPipClick));
            1 < v && (n.on("click", e.onNext), l.on("click", e.onPrevious), b.on("touchstart", e.onTouchStart), b.on("touchmove", e.onTouchMove), b.on("touchend", e.onTouchEnd), $jqOpta.events.subscribe("widget.screensize.*", $jqOpta._.debounce(function () {
                B && e.updateOrientation(e)
            }, 250)));
            w = 0 < Number(e.delay) && 1 < v;
            1 < v && E()
        })
    }
})(jQuery);
var $jqOpta = jQuery.noConflict(!0);
if ("undefined" === typeof opta_widget_id)var opta_widget_id = -1;
$jqOpta.booting = !1;
$jqOpta.booted = !1;
$jqOpta.kickstart = !1;
$jqOpta.expansions = {};
$jqOpta.events = $jqOpta.postal.channel("Events");
$jqOpta.widgets = {};
$jqOpta.m = {};
$jqOpta.pd = [];
$jqOpta.Widget = function (a) {
    a.load_width = $jqOpta("#opta-widget-id-" + a.id).width() || Number(a.data.width) || void 0;
    a.narrow = (a.data.load_width || 0) < (Number(a.data.narrow_limit) || 0);
    this.optaWidget = a;
    this.widget = new $jqOpta[a.widget_name](a)
};
$jqOpta.Widget.prototype.destroy = function (a) {
    "function" === typeof this.widget.destroy ? this.widget.destroy(a) : a && $jqOpta("#opta-widget-idx-" + this.optaWidget.id).remove();
    delete $jqOpta.widgets[this.optaWidget.id];
    delete this.optaWidget;
    delete this.widget
};
$jqOpta(function () {
    void 0 !== _optaParams && (void 0 !== _optaParams.sync && "delay" === _optaParams.sync ? $jqOpta(window).load(function () {
        $jqOpta.widgetStart(_optaParams)
    }) : "wait" !== _optaParams.sync && $jqOpta.widgetStart(_optaParams))
});
(function () {
    var a = function () {
        var a = $jqOpta.trn("loading"), b = 0;
        $jqOpta.gaTracking();
        $jqOpta.analytics = new $jqOpta.Analytics;
        (function () {
            var a = 0;
            0 < $jqOpta("div.opta-widget-container").size() && $jqOpta("div.opta-widget-container").each(function () {
                if (void 0 !== $jqOpta(this).attr("id")) {
                    var b = Number($jqOpta(this).attr("id").substring(16));
                    b >= a && (a = b + 1)
                }
            });
            b = a
        })();
        $jqOpta.utils.isRetina();
        $jqOpta.kickstart = !1;
        $jqOpta("opta:not(opta opta)").each(function (c) {
            var l = {}, s = $jqOpta(this), t = s.find("opta"), v = "", y =
                s.attr("widget"), w, C;
            w = [];
            var B = [], D, m = !0;
            c += b;
            "incremental" === $jqOpta.settings.id_type && (c = opta_widget_id += 1);
            void 0 !== s.attr("id_suffix") && (c = s.attr("id_suffix"));
            t = {id: c, idx: "#opta-widget-idx-" + c, kids: t};
            if (void 0 === s.attr("load") || "false" !== s.attr("load")) {
                $jqOpta.each(s.context.attributes, function (a, b) {
                    l[b.name] = b.value
                });
                C = $jqOpta.getSportId(l.sport || "football");
                w = l.competition || l.competition_p1 || l.competition1 || l.competition_p2 || l.competition2;
                w = w.split(",");
                if (3 === C) {
                    if (void 0 !== $jqOpta.permittedWidgets[y][C])for (D in w)w.hasOwnProperty(D) &&
                    B.push(w[D])
                } else for (D in w)w.hasOwnProperty(D) && $jqOpta.permittedWidget(y, C, w[D], s.attr("sub")) && B.push(w[D]);
                $jqOpta.optaTags.push({data: l, tag: s.context.outerHTML, permitted: 0 < B.length});
                if (0 < B.length || $jqOpta(this).attr("tpl_src")) {
                    if ("matchstats" === y || "teamstats" === y || "playercompare" === y || "teamstatsplus" === y || "pro_matchstats" === y || "seasonalteamstats" === y)v = void 0 === $jqOpta(this).attr("sub") ? "" : "_" + $jqOpta(this).attr("sub");
                    "ticker" === $jqOpta(l).attr("widget") && (l.live = "true");
                    c = $jqOpta('<div id="opta-widget-id-' +
                        c + '" class="opta-loader"><p>' + a + "</p></div>");
                    t.data = l;
                    s.replaceWith(c);
                    t.dom = $jqOpta(t.idx);
                    "formation" === y || "averageposition" === y || "chalkboard" === y || "passingcombination" === y || "wagonwheel" === y ? "undefined" === typeof HTMLCanvasElement && ($jqOpta.loadError(t, {title: $jqOpta.trn("This widget did not load"), message: $jqOpta.trn("No browser support")}), m = !1) : "heatmap" === y && "undefined" !== typeof HTMLCanvasElement ? y = "heatmapcanvas" : "heatmapflash" === y && (y = "heatmap");
                    if (m) {
                        s = l.sport;
                        switch (l.sport) {
                            case "icehockey":
                                "livescore" ===
                                    y && (s = "basketball");
                                break;
                            case "rugby":
                                if ("commentary" === y || "optafacts" === y || "matchstats" === y && "_teamstats" === v || "matchstats" === y && "_lineup" === v || "standings" === y)s = "football";
                                break;
                            case "rugbyleague":
                                if ("refereedata" === y || "squadprofile" === y)s = "rugby"
                        }
                        t.data.opta_widget = void 0 === t.data.sub ? t.data.widget : t.data.widget + "_" + t.data.sub;
                        $jqOpta.loadTemplate(s, y, v, t)
                    }
                }
            }
        });
        $jqOpta.booted = !0;
        $jqOpta.booting = !1;
        !0 === $jqOpta.kickstart && $jqOpta.reload()
    }, c, b;
    !0 !== (window._optaParams || {}).suppressAnalytics && void 0 ===
        window._gat && (c = document.createElement("script"), c.type = "text/javascript", c.async = !0, c.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(c, b));
    $jqOpta.optaTags = [];
    $jqOpta.gmtOffset = 13961412E5 < (new Date).getTime() ? 1 : 0;
    $jqOpta.reload = function () {
        if (!1 === $jqOpta.booted && !1 === $jqOpta.booting)return $jqOpta.widgetStart(_optaParams);
        !0 === $jqOpta.booting && !1 === $jqOpta.booted ? $jqOpta.kickstart = !0 : !0 === $jqOpta.booted && !1 === $jqOpta.booting && a()
    };
    $jqOpta.widgetStart = function (b) {
        var c = $jqOpta.extend({anim: "none", language: "en", timezone: 0, callbacks: []}, b), n = function () {
            var b = function (a) {
                var b, g, n, l, m, r, q, s, v = {};
                c.customer_id = a["@attributes"].id;
                $jqOpta.settings.customer_id = c.customer_id;
                a.subscriptions.sport instanceof Array || (a.subscriptions.sport = [a.subscriptions.sport]);
                for (b = 0; b < a.subscriptions.sport.length; b += 1)for (g = a.subscriptions.sport[b], n = Number(g["@attributes"].id), g.comp instanceof
                    Array || (g.comp = [g.comp]), l = 0; l < g.comp.length; l += 1)for (m = g.comp[l], r = Number(m["@attributes"].id), m.widget instanceof Array || (m.widget = [m.widget]), q = 0; q < m.widget.length; q += 1)s = m.widget[q]["@attributes"], v[s.name] = v[s.name] || {}, v[s.name][n] = v[s.name][n] || {}, v[s.name][n][r] = !0;
                void 0 !== v.heatmap && (v.heatmapflash = $jqOpta.extend(v.heatmapflash, v.heatmap), v.heatmapcanvas = $jqOpta.extend(v.heatmapcanvas, v.heatmap));
                return $jqOpta.permittedWidgets = v
            }, g = function (a) {
                var b, g, n, l, m, r, q, s, v, t, e;
                if (a.translations &&
                    a.translations.translation_set)for (a.translations.translation_set instanceof Array || (a.translations.translation_set = [a.translations.translation_set]), b = 0; b < a.translations.translation_set.length; b += 1)for (g = a.translations.translation_set[b], n = Number(g["@attributes"].trans_id), g.lang instanceof Array || (g.lang = [g.lang]), m = 0; m < g.lang.length; m += 1)for (r = g.lang[m], l = r["@attributes"].id, r.translation instanceof Array || (r.translation = [r.translation]), q = 0; q < r.translation.length; q += 1)for (s = r.translation[q], v =
                    s["@attributes"].type, s.file instanceof Array || (s.file = [s.file]), t = 0; t < s.file.length; t += 1)switch (e = s.file[t] ? s.file[t]["@attributes"] : !1, v) {
                    case "CP":
                        $jqOpta.trans.files[v + "_" + c.customer_id + "_" + n + "_" + l.replace("-", "_") + "_" + e.sport + "_" + e.season] = !0;
                        break;
                    case "TN":
                        $jqOpta.trans.files[v + "_" + c.customer_id + "_" + n + "_" + l.replace("-", "_") + "_" + e.sport + "_" + e.season + "_" + e.competition] = !0;
                        break;
                    case "PN":
                        $jqOpta.trans.files[v + "_" + c.customer_id + "_" + n + "_" + l.replace("-", "_") + "_" + e.sport + "_" + e.season + "_" + e.competition +
                            "_" + e.team] = !0;
                        break;
                    case "WT":
                        $jqOpta.trans.files[v + "_" + c.customer_id + "_" + n + "_" + l.replace("-", "_")] = !0
                }
            };
            $jqOpta.ajax({url: ("https:" === window.location.protocol ? "https://s3-eu-west-1.amazonaws.com/widget.cloud.opta.net/" : "http://widget.cloud.opta.net/") + "customer/c_" + c.custID + ".json", cache: !0, dataType: "jsonp", jsonp: "jsoncallback", jsonpCallback: "c_" + c.custID, timeout: 1E4, success: function (c) {
                b(c);
                g(c);
                $jqOpta.pd = $jqOpta.utils.fixSingle(c.domain);
                $jqOpta.dmok = function () {
                    var a, b = $jqOpta.pd, c = b.length;
                    a = ["hostname", "location"];
                    var f = document[a[1]][a[0]], g;
                    if (b instanceof Array)for (a = 0; a < c; a += 1) {
                        g = b[a];
                        if (g === f)return!0;
                        g = g.replace(/\*/g, "[^ ]*");
                        g = RegExp("^" + g + "$");
                        if (f.match(g))return!0
                    }
                    return!1
                }();
                $jqOpta.trans.load.widget(function () {
                    $jqOpta.events.publish("widget.application.init", $jqOpta.settings);
                    a()
                })
            }, error: function (a, b, c) {
                console.log("Error", a, b, c)
            }})
        }, l, s = function () {
            var a = window.addEventListener || window.attachEvent, b = window.addEventListener ? "" : window.attachEvent ? "on" : "", c = $jqOpta(window),
                f = {w: c.width(), h: c.height()}, g = function () {
                    var a = c.width(), b = c.height();
                    return f.w !== a ? (f = {w: a, h: b}, !0) : !1
                };
            a(b + "orientationchange", function () {
                g() && $jqOpta.events.publish("widget.screensize.orientationchange", f)
            }, !1);
            a(b + "resize", function () {
                g() && $jqOpta.events.publish("widget.screensize.resize", f)
            }, !1)
        };
        if (!0 === $jqOpta.booting || !0 === $jqOpta.booted)$jqOpta.kickstart = !0, $jqOpta.reload(); else {
            $jqOpta.booting = !0;
            $jqOpta.extend($jqOpta.settings, c);
            b = $jqOpta.settings.language.split("_");
            $jqOpta.settings.locale =
            {orig: $jqOpta.settings.language, lang: b[0] || "en", region: b[1], rtl: !1};
            $jqOpta.settings.locale.lang = $jqOpta.settings.locale.lang.toLowerCase();
            $jqOpta.settings.locale.region || ($jqOpta.settings.locale.region = $jqOpta.trans.setDefaultRegion($jqOpta.settings.locale.lang));
            $jqOpta.settings.locale.region = $jqOpta.settings.locale.region.toUpperCase();
            $jqOpta.settings.locale.full = $jqOpta.settings.locale.lang + "_" + $jqOpta.settings.locale.region;
            switch ($jqOpta.settings.locale.lang) {
                case "ar":
                    $jqOpta.settings.locale.rtl = !0
            }
            $jqOpta.settings.language = b[0];
            $jqOpta.settings.translation_id = $jqOpta.settings.translation_id || 1;
            $jqOpta.lang = {};
            !1 !== $jqOpta.settings.load_date_js && (l = $jqOpta.ajax({cache: !0, url: $jqOpta.settings.baseUrl + "js/date/date-" + $jqOpta.settings.locale.full.replace("_", "-") + ".js", dataType: "script"}));
            s();
            $jqOpta.when(l).then(function () {
                n()
            })
        }
    };
    $jqOpta.loadTemplate = function (a, b, c, l) {
        var s, t, v, y, w, C, B, D, m;
        void 0 !== $jqOpta[a + "_" + b + c] ? (l.widget_name = a + "_" + b + c, $jqOpta.widgets[l.id] = new $jqOpta.Widget(l)) : (s =
            $jqOpta.ajax({cache: !0, url: void 0 === l.data.tpl_src ? $jqOpta.settings.baseUrl + "js/tpl/" + a + "/" + b + c + ".js" : l.data.tpl_src, dataType: "script", success: function () {
                var m, q = b + "/" + (c ? c + "/" : "") + a + "/" + l.data.competition + "/" + l.data.season + "/";
                if (_optaParams.gaq)for (m = 0; m < _optaParams.gaq.length; m += 1)_optaParams.gaq[m].tracker._trackPageview(q), _optaParams.gaq[m].tracker._trackTiming(q, "widget", "Load Tpl", (new Date).getTime() - $jqOpta.start_time, "", 100)
            }, error: function () {
                var m, q = c ? c + "/" : "";
                $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") +
                    " (" + $jqOpta.rtrn("^" + b + "$", "i") + "). " + $jqOpta.trn("Please try again later") + "."});
                for (m = 0; m < _optaParams.gaq.length; m += 1)_optaParams.gaq[m].tracker._trackPageview("error/" + b + "/" + q + a + "/" + l.data.competition + "/" + l.data.season + "/")
            }}), void 0 !== l.data.player_popup && "true" === l.data.player_popup && void 0 === $jqOpta.football_playerprofile && (t = $jqOpta.ajax({cache: !0, url: $jqOpta.settings.baseUrl + "js/tpl/football/playerprofile.js", dataType: "script", error: function () {
            $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") +
                " (" + $jqOpta.rtrn("^" + b + "$", "i") + "). " + $jqOpta.trn("Please try again later") + "."})
        }})), void 0 !== $jqOpta.Kinetic || "formation" !== b && "averageposition" !== b && "chalkboard" !== b && "passingcombination" !== b && "heatmapcanvas" !== b && "wagonwheel" !== b || (v = $jqOpta.ajax({cache: !0, url: $jqOpta.settings.baseUrl + "js/lib/opta.kinetic.4.3.2.js", dataType: "script", error: function () {
            $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") + " " + $jqOpta.rtrn("^" + b + "$", "i") + ". " + $jqOpta.trn("Please try again later") + "."})
        }})), void 0 !==
            $jqOpta.Raphael || "goalreplay" !== b && "attackingthirds" !== b && "trackingheatmap" !== b && "actionareas" !== b && "teamstatsplus" !== b && "matchdaylive" !== b || (y = $jqOpta.ajax({cache: !0, url: $jqOpta.settings.baseUrl + "js/lib/opta.raphael.js", dataType: "script", error: function () {
            $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") + " " + $jqOpta.rtrn("^" + b + "$", "i") + ". " + $jqOpta.trn("Please try again later") + "."})
        }})), "tennis" !== a || "seasonschedule" !== b && "livescores" !== b || (D = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_TENNIS,
            {lang_id: $jqOpta.settings.locale.full}), w = $jqOpta.jsonp({cache: !0, url: D.url, dataType: "jsonp", callback: D.getFeedCallback(), error: function () {
            $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") + " " + $jqOpta.rtrn("^" + a + "$", "i") + ". " + $jqOpta.trn("Please try again later") + "."})
        }, success: function (a) {
            var b, c;
            a = a.d.split("\u00a6");
            for (b = 0; b < a.length; b += 1)c = a[b].split("|"), $jqOpta.trans.data.widget[c[0]] = c[1]
        }})), void 0 !== $jqOpta.Highcharts || ("cricket" !== a || "manhattanworm" !== b && "probability" !== b) && ("football" !==
            a || "playertracking" !== b && "seasonstandings" !== b) || (C = $jqOpta.ajax({cache: !0, url: $jqOpta.settings.baseUrl + "js/lib/opta.highcharts.3.0.2.js", dataType: "script", error: function () {
            $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") + " " + $jqOpta.rtrn("^" + b + "$", "i") + ". " + $jqOpta.trn("Please try again later") + "."})
        }})), void 0 === $jqOpta.PPSliderClass && "cricket" === a && "probability" === b && (B = $jqOpta.ajax({cache: !0, url: $jqOpta.settings.baseUrl + "js/lib/opta.ppslider.js", dataType: "script", error: function () {
            $jqOpta.loadError(l,
                {message: $jqOpta.trn("Error loading") + " " + $jqOpta.rtrn("^" + b + "$", "i") + ". " + $jqOpta.trn("Please try again later") + "."})
        }})), "football" === a && "matchpreview" === b && (D = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_HISTORICAL_COMP, {lang_id: $jqOpta.settings.locale.full}), m = $jqOpta.jsonp({cache: !0, url: D.url, dataType: "jsonp", callback: D.getFeedCallback(), error: function () {
            $jqOpta.loadError(l, {message: $jqOpta.trn("Error loading") + " " + $jqOpta.rtrn("^" + a + "$", "i") + ". " + $jqOpta.trn("Please try again later") +
                "."})
        }, success: function (a) {
            var b, c;
            a = a.d.split("\u00a6");
            void 0 === $jqOpta.trans.data.historical_comps && ($jqOpta.trans.data.historical_comps = {});
            for (b = 0; b < a.length; b += 1)c = a[b].split("|"), $jqOpta.trans.data.historical_comps[c[0]] = c[1]
        }})), $jqOpta.when(s, t, v, y, w, C, B, m).then(function () {
            l.widget_name = a + "_" + b + c;
            $jqOpta.widgets[l.id] = new $jqOpta.Widget(l)
        }))
    };
    $jqOpta.displayWidget = function (a, b, c, l) {
        l = '<div id="opta-widget-idx-' + a.id + '" class="opta-widget-container' + (void 0 !== l ? " " + l : "") + (void 0 === a.data.classes ?
            "" : " " + a.data.classes) + " opta-" + a.data.widget + '" data-widget-id="' + a.id + '"></div>';
        var s = "#opta-widget-id-" + a.id, t = "#opta-widget-idx-" + a.id, v = '<div id="opta-widget-idxx-' + a.id + '" style="display:none;"></div>', y, w = !1;
        0 === $jqOpta(t).length && ($jqOpta(l).insertAfter($jqOpta(s)), a.dom = $jqOpta(a.idx));
        if (!0 === c) {
            $jqOpta(t).html(b);
            "function" === typeof window.beforeShowWidget && beforeShowWidget(t);
            $jqOpta(t).hide();
            switch ($jqOpta.settings.anim) {
                case "none":
                    $jqOpta(t).prev("div").hide().empty().remove();
                    $jqOpta(t).show();
                    break;
                case "down":
                    $jqOpta(t).prev("div").fadeOut(400, function () {
                        $jqOpta(t).slideDown(800);
                        $jqOpta(this).empty().remove()
                    });
                    break;
                case "opta":
                    $jqOpta(t).prev("div").fadeOut(1E3, function () {
                        $jqOpta(t).show(2E3);
                        $jqOpta(this).empty().remove()
                    })
            }
            "function" === typeof window.afterShowWidget && afterShowWidget(t)
        } else if ($jqOpta(t + " .expansion-holder").each(function () {
            var a = $jqOpta(this).html(), b;
            w = !0;
            "" !== a && (b = $jqOpta(this).data().expansion, $jqOpta.expansions[b] = a)
        }), w) {
            $jqOpta(v).insertAfter($jqOpta(t));
            $jqOpta("#opta-widget-idxx-" + a.id).html(b);
            for (y in $jqOpta.expansions)$jqOpta.expansions.hasOwnProperty(y) && $jqOpta("#opta-widget-idxx-" + a.id).find("." + y).html($jqOpta.expansions[y]);
            $jqOpta(t).html($jqOpta("#opta-widget-idxx-" + a.id).html());
            $jqOpta("#opta-widget-idxx-" + a.id).empty().remove()
        } else $jqOpta(t).html(b)
    };
    $jqOpta.feedData = [];
    $jqOpta.callbackCounts = [];
    $jqOpta.getFeeds = function (a, b) {
        var c, l = b.length, s = [], t = function (a, b, c, f) {
            var g = new $jqOpta.Deferred, l = new $jqOpta.FeedRequest($jqOpta.FeedRequest[c.feedType],
                c.feedParams, g, c.feedLife, c.trn);
            $jqOpta.FeedMonitor.requestFeed(l);
            g.done(function (a) {
                a = $jqOpta.extend(!0, {}, a);
                a.feed_type = c.feedType.replace("FEED_", "");
                a.request_params = l.params;
                s[f] = a
            });
            g.fail(function () {
                s[f] = "failed"
            });
            $jqOpta.when(g).always(function () {
                var c, f = !0;
                for (c = 0; c < b; c += 1)void 0 === s[c] && (f = !1);
                f && a(s)
            })
        };
        for (c = 0; c < l; c += 1)t(a, l, b[c], c)
    };
    $jqOpta.getFeed = function (a) {
        var b = 1E3 * Math.floor(10 * Math.random());
        $jqOpta.doTimeout(b, function () {
            0 === Math.floor(2 * Math.random()) ? a.reject("reason for failure") :
                a.resolve("success")
        })
    };
    $jqOpta.srtTab = function (a, b, c) {
        $jqOpta(a + " table").hasClass("tablesorter") && ($jqOpta(a + " table.tablesorter thead tr:first-child th:nth-child(2)").hasClass("fullcombined") ? $jqOpta(a + " table").tablesorter({headers: {0: {sorter: !1}, 1: {sorter: !1}, 2: {sorter: !1}}, sortInitialOrder: "desc", sortList: b ? [b] : void 0}) : void 0 !== c ? $jqOpta(a + " table").tablesorter({headers: c, sortInitialOrder: "desc", sortList: b ? [b] : void 0}) : $jqOpta(a + " table").tablesorter({headers: {1: {sorter: !1}}, sortInitialOrder: "desc",
            sortList: b ? [b] : void 0}), $jqOpta(a + " table.tablesorter thead th.header").children().each(function () {
            $jqOpta(this).wrap("<span>")
        }))
    };
    $jqOpta.fn.srtTHL = function (a) {
        var b, c = 0, l = $jqOpta(this).html(), s = $jqOpta(this).attr("class");
        $jqOpta(this).closest("thead").find("th").each(function () {
            l === $jqOpta(this).html() && s === $jqOpta(this).attr("class") && (b = c);
            $jqOpta(this).hasClass("sort-ascending") && $jqOpta(this).removeClass("sort-ascending");
            $jqOpta(this).hasClass("sort-descending") && $jqOpta(this).removeClass("sort-descending");
            c += 1
        });
        $jqOpta(".tablesorter thead th:nth-child(2)").hasClass("fullcombined") && (b -= 2);
        $jqOpta(this).closest("table").find("tbody td").each(function () {
            $jqOpta(this).hasClass("sorted-column") && $jqOpta(this).removeClass("sorted-column")
        });
        "desc" === a ? $jqOpta(this).addClass("sort-descending") : $jqOpta(this).addClass("sort-ascending");
        $jqOpta(this).closest("table").find("tbody tr").each(function () {
            $jqOpta(this).find("td").eq(b).addClass("sorted-column")
        })
    };
    $jqOpta.ga = {};
    $jqOpta.gaTracking = function () {
        var a,
            b, c;
        if (void 0 === window._gat)return!1;
        _optaParams.gaq = _optaParams.gaq || [];
        for (a = 0; a < _optaParams.gaq.length; a += 1)for (c in b = _optaParams.gaq[a], b.tracker = _gat._createTracker(b._setAccount, "OptaWidgets"), b)if (b.hasOwnProperty(c) && "tracker" !== c && "_setAccount" !== c && "_trackPageview" !== c)if (b[c]instanceof Array)b.tracker[c](b[c][0] || null, b[c][1] || null, b[c][2] || null, b[c][3] || null); else b.tracker[c](b[c])
    };
    $jqOpta.trackGAEvent = function (a) {
        var b, c, l;
        if (void 0 === window._gat || !0 === _optaParams.suppressAnalytics || !_optaParams.gaq || !_optaParams.gaq.length)return"";
        if (!(a instanceof Object && a.widget && a.action && a.sport && a.season && a.comp))throw"Invalid GA Event Tracking data";
        for (b = 0; b < _optaParams.gaq.length; b += 1) {
            l = _optaParams.gaq[b].tracker;
            l._setCustomVar(2, "competition", a.comp, 3);
            l._setCustomVar(3, "season", a.season, 3);
            if (a.extra && a.extra instanceof Array)for (c = 0; c < a.extra.length && !(1 < c); c += 1)l._setCustomVar(4 + c, a.extra[c].key, a.extra[c].value, 3);
            l._trackEvent(a.widget, a.action, a.sport, $jqOpta.intval(a.rndTime),
                !1);
            if (a.extra && a.extra instanceof Array)for (c = 0; c < a.extra.length && !(1 < c); c += 1)l._deleteCustomVar(4 + c)
        }
    };
    $jqOpta.rndCG = function (a) {
        var b = a.length, c = "<colgroup>", l;
        for (l = 0; l < b; l += 1)c += '<col width="' + a[l], $jqOpta.isNum(a[l]) && (c += "%"), c += '">';
        return c + "</colgroup>"
    };
    $jqOpta.renderError = function (a, b, c, l) {
        b = "<h2><span>" + c + '</span></h2><div class="' + b + '"><p>' + l + "</p></div>";
        $jqOpta(a).html(b)
    };
    $jqOpta.enablePlayerPopups = function (a) {
        var b, c = "#opta-widget-idx-" + a.id;
        a.data.player_popup && (b = $jqOpta("#opta-widget-popup"),
            0 === b.length && (b = $jqOpta("<div/>", {id: "opta-widget-popup"}).appendTo($jqOpta("body")), b.append('<div class="opta-widget-container"><h2><span></span><span class="close"><a href="#">' + $jqOpta.trn("close") + '</a></span></h2><div class="profile-container"><div class="profile"></div></div></div>'), b.hide()), $jqOpta(c + " a.opta-popup").each(function () {
            $jqOpta(this).click(function (c) {
                var n = $jqOpta(this).attr("href"), t = Math.max(c.pageX - 200, 0) + "px", v = c.pageY + 20 + "px", n = n.split("-"), y = $jqOpta("#opta-widget-popup div.profile");
                $jqOpta("#opta-widget-popup h2 span:first-child").html("");
                y.addClass("opta-widget-popup-content");
                y.html("");
                b.css({left: t, top: v});
                a.data.season = n[1];
                a.data.competition = n[2];
                a.data.team = n[3];
                a.data.player = n[4];
                c.preventDefault();
                b.show();
                $jqOpta.football_playerprofile(a, !0);
                $jqOpta.enablePopupCloseLink();
                $jqOpta.trackGAEvent({sport: a.data.sport, widget: a.data.widget, action: "player_link_popup", comp: a.data.competition, season: a.data.season})
            })
        }))
    };
    $jqOpta.enablePopupCloseLink = function () {
        $jqOpta("#opta-widget-popup span.close a").each(function () {
            $jqOpta(this).click(function (a) {
                a.preventDefault();
                $jqOpta("#opta-widget-popup").hide()
            })
        })
    };
    $jqOpta.sndUI = function (a, b, c) {
        var l;
        "true" === a && 0 === $jqOpta(b).find("span.opta-audio").length && (a = void 0 !== c && "true" === c ? "opta-logo " : "", l = $jqOpta.settings.soundEnabled ? '<span class="opta-audio ' + a + 'sound-enabled" title="' + $jqOpta.trn("soundDisable") + '">' + $jqOpta.trn("soundDisable") + "</span>" : '<span class="opta-audio ' + a + 'sound-disabled" title="' + $jqOpta.trn("soundEnable") + '">' + $jqOpta.trn("soundEnable") + "</span>", $jqOpta("div" + b + " > h2").after(l), l = $jqOpta(b +
            " .opta-audio"), l.on("click", function (a) {
            a.preventDefault();
            l.hasClass("sound-disabled") ? (l.removeClass("sound-disabled"), l.addClass("sound-enabled"), l.text($jqOpta.trn("soundDisable")), l.attr("title", $jqOpta.trn("soundDisable")), $jqOpta.settings.soundEnabled = !0, $jqOpta.createCookie("opta_audio_" + b.substr(1), 1)) : (l.removeClass("sound-enabled"), l.addClass("sound-disabled"), l.text($jqOpta.trn("soundEnable")), l.attr("title", $jqOpta.trn("soundEnable")), $jqOpta.settings.soundEnabled = !1, $jqOpta.createCookie("opta_audio_" +
                b.substr(1), 0))
        }), (1 === $jqOpta.readCookie("opta_audio_" + b.substr(1)) && l.hasClass("sound-disabled") || 0 === $jqOpta.readCookie("opta_audio_" + b.substr(1)) && l.hasClass("sound-enabled")) && l.click())
    };
    $jqOpta.goalAlerts = function (a, b, c) {
        var l = $jqOpta(b).find(c);
        0 < l.length && ($jqOpta.settings.soundEnabled && $jqOpta.sndA(a), $jqOpta.doTimeout(5E3, function () {
            l.each(function () {
                $jqOpta(this).removeClass("goal-alert")
            })
        }))
    };
    $jqOpta.sndA = function (a) {
        var b;
        b = '<div class="goal-sound"><object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="1" height="1" id="goal-alert">' +
            ('<param name="src" value="' + $jqOpta.settings.baseUrl + 'assets/sounds/applause.wav" />');
        b += '<param name="autostart" value="true" />';
        b += "\x3c!--[if !IE]>--\x3e";
        b += '<object type="audio/x-wav" data="' + $jqOpta.settings.baseUrl + 'assets/sounds/applause.wav" width="1" height="1">';
        b += '<param name="autoplay" value="true" />';
        b += "</object>";
        b += "\x3c!--<![endif]--\x3e";
        b += "</object></div>";
        $jqOpta(a).append(b)
    };
    $jqOpta.evnID = function (a) {
        switch (a) {
            case "f":
                return["end-period", $jqOpta.trn("FT (fulltime)")];
            case "g":
                return["goal", $jqOpta.trn("Goal")];
            case "h":
                return["kickoff", $jqOpta.trn("HT (halftime)")];
            case "k":
                return["kickoff", $jqOpta.trn("KO (kickoff)")];
            case "ks":
                return["kickoff", $jqOpta.trn("SH (second half)")];
            case "o":
                return["own-goal", $jqOpta.trn("Goal"), $jqOpta.trn("OG (own goal)")];
            case "p":
                return["penalty-in-game-scored", $jqOpta.trn("Goal"), $jqOpta.trn("P (penalty)")];
            case "pm":
                return["penalty-in-game-miss", $jqOpta.trn("Missed Penalty")];
            case "ps":
                return["penalty-shootout-scored", $jqOpta.trn("Goal"),
                    $jqOpta.trn("P (penalty)")];
            case "r":
                return["red-card", $jqOpta.trn("Red Card")];
            case "s":
                return["substitution", $jqOpta.trn("Substitution")];
            case "sb":
                return["icon-substitution", $jqOpta.trn("Substitution")];
            case "y":
                return["yellow-card", $jqOpta.trn("Yellow Card")];
            case "2":
                return["double-yellow", $jqOpta.trn("Second Yellow Card")]
        }
    };
    $jqOpta.rndMns = function (a, b) {
        var c, l = "";
        "SO" === a ? l += "(" + $jqOpta.trn("SO (shootout)") + ")" : "" === a ? l += "&nbsp;" : (c = '<abbr title="' + $jqOpta.trn("minute") + '">' + $jqOpta.trn("min (minute symbol)") +
            "</abbr>", l += a + c, void 0 !== b && "" !== b && (l += "+" + b + c));
        return l
    };
    $jqOpta.rndTabC = function (a, b) {
        var c = $jqOpta(b).find(".ranking-category option:eq(0)").attr("value");
        "all" === a.data.category && $jqOpta.rndTabD(b, c);
        $jqOpta(b).find(".ranking-category select").change(function () {
            $jqOpta.rndTabD(b, $jqOpta(b).find("option:selected").val())
        })
    };
    $jqOpta.rndTabD = function (a, b) {
        $jqOpta(a).find(".ranking-container").children("div:not(." + b + ")").hide();
        $jqOpta(a).find(".ranking-container").children("div." + b).show()
    };
    $jqOpta.actTabs =
        function (a, b, c, l, s, t) {
            var v = !1;
            $jqOpta(b).each(function () {
                var a = $jqOpta(this), b = a.find("ul.tabs-nav").width(), c = 0, f = a.find("ul.tabs-nav > li"), a = void 0 === l ? a.find("ul.tabs-content > li") : a.find(l);
                0 < f.length && f.length === a.length && !0 !== t && (f.each(function () {
                    c += $jqOpta(this).width()
                }), c > b && (v = !0))
            });
            $jqOpta(b).each(function () {
                var t = $jqOpta(this), w = t.find("ul.tabs-nav"), C = t.find("ul.tabs-nav > li"), B = void 0 === l ? t.find("ul.tabs-content > li") : t.find(l), D = b.split(" "), m = a + "-" + D[0].substring(1), D = $jqOpta.readCookie(m),
                    r = Number(s) - 1 || 0, q;
                if (r >= C.length || 0 > r)r = 0;
                0 < C.length && C.length === B.length && (C.removeClass("tabs-selected"), B.removeClass("tabs-selected"), $jqOpta.isNum(D) && C.length > D && (r = D), $jqOpta(C[r]).addClass("tabs-selected"), $jqOpta(B[r]).addClass("tabs-selected"), v && !w.parent().hasClass("opta-dropdown") && (w.wrap('<div class="opta-dropdown" />'), q = t.find("div.opta-dropdown"), q.prepend("<span>" + $jqOpta(C[r]).text() + "<span></span></span>"), q.click(function (a) {
                    a.preventDefault();
                    q.hasClass("active") ? q.removeClass("active") :
                        q.addClass("active")
                })), C.each(function (a) {
                    $jqOpta(this).click(function (b) {
                        b.preventDefault();
                        C.removeClass("tabs-selected");
                        B.removeClass("tabs-selected");
                        $jqOpta(this).addClass("tabs-selected");
                        $jqOpta(B[a]).addClass("tabs-selected");
                        $jqOpta.createCookie(m, a);
                        w.parent().hasClass("opta-dropdown") && w.parent().find("span").html($jqOpta(this).text() + "<span></span>");
                        void 0 !== c && $jqOpta.events.trigger.tab(this, c, a)
                    })
                }))
            })
        };
    $jqOpta.runCallbacks = function (a) {
        var b = $jqOpta("#opta-widget-idx-" + a.id), c, l =
            $jqOpta.settings.callbacks;
        if (0 < l.length)for (c = 0; c < l.length; c += 1)if ("" !== l[c] && "function" === typeof l[c])l[c](b, a.data, a.id)
    };
    $jqOpta.optaPlayerStatsDropdowns = function (a) {
        var b = "#opta-widget-idx-" + a.id + " .team-container";
        $jqOpta(b).each(function () {
            var c;
            c = b.split(" ");
            var l = $jqOpta(this).find("form").attr("id") || "", s = "playerstats-" + c[0].substring(1) + "-" + c[1].substring(1) + "-" + l.slice(0, -1), l = $jqOpta.readCookie(s), t = [];
            $jqOpta(this).children("div").each(function () {
                t.push($jqOpta(this).attr("id"))
            });
            for (c = 0; c < t.length; c += 1)0 !== c && $jqOpta("#" + t[c]).hide();
            $jqOpta(this).find(".playerstats-filter-select").on("change", function () {
                var b = $jqOpta(this), c = b.find("option:selected"), f = c.val();
                $jqOpta.createCookie(s, f);
                b.closest(".team-container").children("div:not(#" + f + ")").hide();
                b.closest(".team-container").children("div#" + f).show();
                b.find("select").blur();
                $jqOpta.events.trigger.dropdown(a, b.attr("id"), f, c.text())
            });
            null !== l && $jqOpta(this).find("option[value=" + l + "]").each(function () {
                $jqOpta(this).attr("selected",
                    "selected").change()
            })
        })
    };
    $jqOpta.runExpansions = function (a, b) {
        var c = a.kids, l = a.data, s = a.id, t = $jqOpta._.object($jqOpta.readCookieArray(l.widget + "_" + s));
        0 < c.length && $jqOpta("#opta-widget-idx-" + s + " " + b).each(function () {
            var b = $jqOpta(this), f = b.data().expansion, w = {}, C = "", B = l.widget + "_" + s + "[";
            $jqOpta._.each(f.split("_"), function (a, b) {
                var c = a.split("-");
                w[c[0]] = c[1];
                C += 0 < b ? "-" + c[1] : c[1]
            });
            B += C + "]";
            b.click(function (t) {
                var m = "", r, q, E, C = " .expansion", z, e = "", x = {}, H = function (a, b) {
                    return w[a] ? (x[a] || (x[a] = !0,
                        C += "_" + a + "-" + w[a]), " " + b + a + '="' + w[a] + '"') : l[a] ? " " + b + a + '="' + l[a] + '"' : " " + E.name + '="' + E.value + '"'
                }, O = function (a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                };
                t.preventDefault();
                for (r = 0; r < c.length; r += 1) {
                    m += '<div class="opta-expansion">';
                    e = "<opta";
                    t = $jqOpta._.toArray(c[r].attributes);
                    t.sort(O);
                    for (q = 0; q < t.length; q += 1)switch (E = t[q], E.name) {
                        case "live":
                        case "season":
                        case "match":
                        case "competition":
                        case "team":
                            e += H(E.name, "");
                            break;
                        case "preselect_match":
                            e += H("match", "preselect_");
                            break;
                        case "preselect_team":
                            e +=
                                H("team", "preselect_");
                            break;
                        case "widget":
                            m += '<div class="opta-' + E.value + '">';
                        default:
                            e += " " + E.name + '="' + E.value + '"'
                    }
                    z = $jqOpta("#opta-widget-idx-" + s + C).first();
                    e += ' parent_id="' + s + '" id_suffix="' + f + "_" + r + '" width="' + z.width() + '"></opta>';
                    m += e + "</div></div>"
                }
                b.hasClass("details-collapsed") ? ("" === z.html() || void 0 === z.html() ? (b.removeClass("details-collapsed").addClass("details-loading"), z.html(m), z.hide(), q = 0, $jqOpta.events.subscribe("widget.#.load", function (c) {
                    b.data().expansion === c.id.toString().substring(0,
                        b.data().expansion.length) && (q += 1, q === r && (z.slideDown(400, function () {
                        $jqOpta.events.trigger.expansiondone("open", a)
                    }), b.removeClass("details-loading").addClass("details-expanded")))
                }), $jqOpta.widgetStart(_optaParams)) : (b.removeClass("details-collapsed").addClass("details-expanded"), z.slideDown(400, function () {
                    $jqOpta.events.trigger.expansiondone("open", a)
                })), $jqOpta.createCookie(B, "o")) : (b.removeClass("details-expanded").addClass("details-collapsed"), z.slideUp(400, function () {
                    $jqOpta.events.trigger.expansiondone("closed",
                        a)
                }), $jqOpta.createCookie(B, "c"))
            });
            "o" === t[C] && b.click()
        })
    };
    $jqOpta.highlightLinks = function (a, b) {
        var c, l = b.length;
        $jqOpta(a).hover(function () {
            for (c = 0; c < l; c += 1)$jqOpta(this).find(b[c]).addClass("hover-effect");
            $jqOpta(this).find(".opta-event-link").addClass("hover-effect");
            $jqOpta(this).find("button").addClass("hover-effect")
        }, function () {
            for (c = 0; c < l; c += 1)$jqOpta(this).find(b[c]).removeClass("hover-effect")
        })
    }
})();
(function (a) {
    function c(a, b) {
        return!b && a instanceof Array ? a : Array.prototype.slice.call(a)
    }

    function b(a, b) {
        return void 0 !== a ? a : b
    }

    function g(a, c, f, l) {
        if (a instanceof g)return a = a.slice(c, c + f), a._littleEndian = b(l, a._littleEndian), a;
        if (!(this instanceof g))return new g(a, c, f, l);
        this.buffer = a = g.wrapBuffer(a);
        this._isArrayBuffer = t.ArrayBuffer && a instanceof ArrayBuffer;
        this._isPixelData = t.PixelData && a instanceof CanvasPixelArray;
        this._isDataView = t.DataView && this._isArrayBuffer;
        this._isNodeBuffer = t.NodeBuffer &&
            a instanceof Buffer;
        if (!(this._isNodeBuffer || this._isArrayBuffer || this._isPixelData || a instanceof Array))throw new TypeError("jDataView buffer has an incompatible type");
        this._littleEndian = !!l;
        l = "byteLength"in a ? a.byteLength : a.length;
        this.byteOffset = c = b(c, 0);
        this.byteLength = f = b(f, l - c);
        this._isDataView ? this._view = new DataView(a, c, f) : this._checkBounds(c, f, l);
        this._engineAction = this._isDataView ? this._dataViewAction : this._isNodeBuffer ? this._nodeBufferAction : this._isArrayBuffer ? this._arrayBufferAction :
            this._arrayAction
    }

    function f(a) {
        if (t.NodeBuffer)return new Buffer(a, "binary");
        for (var b = new (t.ArrayBuffer ? Uint8Array : Array)(a.length), c = 0, f = a.length; c < f; c++)b[c] = a.charCodeAt(c) & 255;
        return b
    }

    function n(a) {
        return 0 <= a && 31 > a ? 1 << a : n[a] || (n[a] = Math.pow(2, a))
    }

    function l(a, b) {
        this.lo = a;
        this.hi = b
    }

    function s(a, b) {
        l.apply(this, arguments)
    }

    var t = {NodeBuffer: "Buffer"in a && "readInt16LE"in Buffer.prototype, DataView: "DataView"in a && ("getFloat64"in DataView.prototype || "getFloat64"in new DataView(new ArrayBuffer(1))),
        ArrayBuffer: "ArrayBuffer"in a, PixelData: "CanvasPixelArray"in a && "ImageData"in a && "document"in a};
    t.NodeBuffer && function (a) {
        try {
            a.writeFloatLE(Infinity, 0)
        } catch (b) {
            t.NodeBuffer = !1
        }
    }(new Buffer(4));
    if (t.PixelData) {
        var v = function (a, b) {
            var c = v.context2d.createImageData((a + 3) / 4, 1).data;
            c.byteLength = a;
            if (void 0 !== b)for (var f = 0; f < a; f++)c[f] = b[f];
            return c
        };
        v.context2d = document.createElement("canvas").getContext("2d")
    }
    var y = {Int8: 1, Int16: 2, Int32: 4, Uint8: 1, Uint16: 2, Uint32: 4, Float32: 4, Float64: 8}, w = {Int8: "Int8",
        Int16: "Int16", Int32: "Int32", Uint8: "UInt8", Uint16: "UInt16", Uint32: "UInt32", Float32: "Float", Float64: "Double"};
    g.wrapBuffer = function (a) {
        switch (typeof a) {
            case "number":
                if (t.NodeBuffer)a = new Buffer(a), a.fill(0); else if (t.ArrayBuffer)a = (new Uint8Array(a)).buffer; else if (t.PixelData)a = v(a); else {
                    a = Array(a);
                    for (var b = 0; b < a.length; b++)a[b] = 0
                }
                return a;
            case "string":
                a = f(a);
            default:
                return"length"in a && !(t.NodeBuffer && a instanceof Buffer || t.ArrayBuffer && a instanceof ArrayBuffer || t.PixelData && a instanceof CanvasPixelArray) &&
                    (t.NodeBuffer ? a = new Buffer(a) : t.ArrayBuffer ? a instanceof ArrayBuffer || (a = (new Uint8Array(a)).buffer, a instanceof ArrayBuffer || (a = (new Uint8Array(c(a, !0))).buffer)) : a = t.PixelData ? v(a.length, a) : c(a)), a
        }
    };
    g.createBuffer = function () {
        return g.wrapBuffer(arguments)
    };
    g.Uint64 = l;
    l.prototype = {valueOf: function () {
        return this.lo + n(32) * this.hi
    }, toString: function () {
        return Number.prototype.toString.apply(this.valueOf(), arguments)
    }};
    l.fromNumber = function (a) {
        var b = Math.floor(a / n(32));
        a -= b * n(32);
        return new l(a, b)
    };
    g.Int64 = s;
    s.prototype = "create"in Object ? Object.create(l.prototype) : new l;
    s.prototype.valueOf = function () {
        return this.hi < n(31) ? l.prototype.valueOf.apply(this, arguments) : -(n(32) - this.lo + n(32) * (n(32) - 1 - this.hi))
    };
    s.fromNumber = function (a) {
        var b;
        0 <= a ? (b = l.fromNumber(a), a = b.lo, b = b.hi) : (b = Math.floor(a / n(32)), a -= b * n(32), b += n(32));
        return new s(a, b)
    };
    g.prototype = {_offset: 0, _bitOffset: 0, compatibility: t, _checkBounds: function (a, c, f) {
        if ("number" !== typeof a)throw new TypeError("Offset is not a number.");
        if ("number" !== typeof c)throw new TypeError("Size is not a number.");
        if (0 > c)throw new RangeError("Length is negative.");
        if (0 > a || a + c > b(f, this.byteLength))throw new RangeError("Offsets are out of bounds.");
    }, _action: function (a, c, f, g, l) {
        return this._engineAction(a, c, b(f, this._offset), b(g, this._littleEndian), l)
    }, _dataViewAction: function (a, b, c, f, g) {
        this._offset = c + y[a];
        return b ? this._view["get" + a](c, f) : this._view["set" + a](c, g, f)
    }, _nodeBufferAction: function (a, b, c, f, g) {
        this._offset = c + y[a];
        a = w[a] + ("Int8" === a || "Uint8" ===
            a ? "" : f ? "LE" : "BE");
        c += this.byteOffset;
        return b ? this.buffer["read" + a](c) : this.buffer["write" + a](g, c)
    }, _arrayBufferAction: function (c, f, g, l, n) {
        var s = y[c];
        c = a[c + "Array"];
        l = b(l, this._littleEndian);
        if (1 === s || 0 === (this.byteOffset + g) % s && l)return c = new c(this.buffer, this.byteOffset + g, 1), this._offset = g + s, f ? c[0] : c[0] = n;
        s = new Uint8Array(f ? this.getBytes(s, g, l, !0) : s);
        c = new c(s.buffer, 0, 1);
        if (f)return c[0];
        c[0] = n;
        this._setBytes(g, s, l)
    }, _arrayAction: function (a, b, c, f, g) {
        return b ? this["_get" + a](c, f) : this["_set" + a](c,
            g, f)
    }, _getBytes: function (a, f, g) {
        g = b(g, this._littleEndian);
        f = b(f, this._offset);
        a = b(a, this.byteLength - f);
        this._checkBounds(f, a);
        f += this.byteOffset;
        this._offset = f - this.byteOffset + a;
        f = this._isArrayBuffer ? new Uint8Array(this.buffer, f, a) : (this.buffer.slice || Array.prototype.slice).call(this.buffer, f, f + a);
        return g || 1 >= a ? f : c(f).reverse()
    }, getBytes: function (a, f, g, l) {
        a = this._getBytes(a, f, b(g, !0));
        return l ? c(a) : a
    }, _setBytes: function (a, f, g) {
        var l = f.length;
        if (0 !== l) {
            g = b(g, this._littleEndian);
            a = b(a, this._offset);
            this._checkBounds(a, l);
            !g && 1 < l && (f = c(f, !0).reverse());
            a += this.byteOffset;
            if (this._isArrayBuffer)(new Uint8Array(this.buffer, a, l)).set(f); else if (this._isNodeBuffer)(f instanceof Buffer ? f : new Buffer(f)).copy(this.buffer, a); else for (g = 0; g < l; g++)this.buffer[a + g] = f[g];
            this._offset = a - this.byteOffset + l
        }
    }, setBytes: function (a, c, f) {
        this._setBytes(a, c, b(f, !0))
    }, getString: function (a, c, f) {
        if (this._isNodeBuffer)return c = b(c, this._offset), a = b(a, this.byteLength - c), this._checkBounds(c, a), this._offset = c + a, this.buffer.toString(f ||
            "binary", this.byteOffset + c, this.byteOffset + this._offset);
        c = this._getBytes(a, c, !0);
        var g = "";
        a = c.length;
        for (var l = 0; l < a; l++)g += String.fromCharCode(c[l]);
        "utf8" === f && (g = decodeURIComponent(escape(g)));
        return g
    }, setString: function (a, c, g) {
        this._isNodeBuffer ? (a = b(a, this._offset), this._checkBounds(a, c.length), this._offset = a + this.buffer.write(c, this.byteOffset + a, g || "binary")) : ("utf8" === g && (c = unescape(encodeURIComponent(c))), this._setBytes(a, f(c), !0))
    }, getChar: function (a) {
        return this.getString(1, a)
    }, setChar: function (a, b) {
        this.setString(a, b)
    }, tell: function () {
        return this._offset
    }, seek: function (a) {
        this._checkBounds(a, 0);
        return this._offset = a
    }, skip: function (a) {
        return this.seek(this._offset + a)
    }, slice: function (a, c, f) {
        a = 0 > a ? a + this.byteLength : a;
        c = b(c, this.byteLength);
        c = 0 > c ? c + this.byteLength : c;
        return f ? new g(this.getBytes(c - a, a, !0, !0), void 0, void 0, this._littleEndian) : new g(this.buffer, this.byteOffset + a, c - a, this._littleEndian)
    }, _getFloat64: function (a, b) {
        var c = this._getBytes(8, a, b), f = 1 - 2 * (c[7] >> 7), g = ((c[7] << 1 & 255) << 3 | c[6] >>
            4) - 1023, c = (c[6] & 15) * n(48) + c[5] * n(40) + c[4] * n(32) + c[3] * n(24) + c[2] * n(16) + c[1] * n(8) + c[0];
        return 1024 === g ? 0 !== c ? NaN : Infinity * f : -1023 === g ? f * c * n(-1074) : f * (1 + c * n(-52)) * n(g)
    }, _getFloat32: function (a, b) {
        var c = this._getBytes(4, a, b), f = 1 - 2 * (c[3] >> 7), g = (c[3] << 1 & 255 | c[2] >> 7) - 127, c = (c[2] & 127) << 16 | c[1] << 8 | c[0];
        return 128 === g ? 0 !== c ? NaN : Infinity * f : -127 === g ? f * c * n(-149) : f * (1 + c * n(-23)) * n(g)
    }, _get64: function (a, c, f) {
        f = b(f, this._littleEndian);
        c = b(c, this._offset);
        for (var g = f ? [0, 4] : [4, 0], l = 0; 2 > l; l++)g[l] = this.getUint32(c + g[l],
            f);
        this._offset = c + 8;
        return new a(g[0], g[1])
    }, getInt64: function (a, b) {
        return this._get64(s, a, b)
    }, getUint64: function (a, b) {
        return this._get64(l, a, b)
    }, _getInt32: function (a, b) {
        var c = this._getBytes(4, a, b);
        return c[3] << 24 | c[2] << 16 | c[1] << 8 | c[0]
    }, _getUint32: function (a, b) {
        return this._getInt32(a, b) >>> 0
    }, _getInt16: function (a, b) {
        return this._getUint16(a, b) << 16 >> 16
    }, _getUint16: function (a, b) {
        var c = this._getBytes(2, a, b);
        return c[1] << 8 | c[0]
    }, _getInt8: function (a) {
        return this._getUint8(a) << 24 >> 24
    }, _getUint8: function (a) {
        return this._getBytes(1,
            a)[0]
    }, _getBitRangeData: function (a, c) {
        var f = (b(c, this._offset) << 3) + this._bitOffset, g = f + a, f = f >>> 3, l = this._getBytes((g + 7 >>> 3) - f, f, !0), n = 0;
        if (this._bitOffset = g & 7)this._bitOffset -= 8;
        for (var g = 0, e = l.length; g < e; g++)n = n << 8 | l[g];
        return{start: f, bytes: l, wideValue: n}
    }, getSigned: function (a, b) {
        var c = 32 - a;
        return this.getUnsigned(a, b) << c >> c
    }, getUnsigned: function (a, b) {
        var c = this._getBitRangeData(a, b).wideValue >>> -this._bitOffset;
        return 32 > a ? c & ~(-1 << a) : c
    }, _setBinaryFloat: function (a, b, c, f, g) {
        var l = 0 > b ? 1 : 0, e, s = ~(-1 <<
            f - 1), t = 1 - s;
        0 > b && (b = -b);
        0 === b ? b = e = 0 : isNaN(b) ? (e = 2 * s + 1, b = 1) : Infinity === b ? (e = 2 * s + 1, b = 0) : (e = Math.floor(Math.log(b) / Math.LN2), e >= t && e <= s ? (b = Math.floor((b * n(-e) - 1) * n(c)), e += s) : (b = Math.floor(b / n(t - c)), e = 0));
        for (s = []; 8 <= c;)s.push(b % 256), b = Math.floor(b / 256), c -= 8;
        e = e << c | b;
        for (f += c; 8 <= f;)s.push(e & 255), e >>>= 8, f -= 8;
        s.push(l << f | e);
        this._setBytes(a, s, g)
    }, _setFloat32: function (a, b, c) {
        this._setBinaryFloat(a, b, 23, 8, c)
    }, _setFloat64: function (a, b, c) {
        this._setBinaryFloat(a, b, 52, 11, c)
    }, _set64: function (a, c, f, g) {
        f instanceof
            a || (f = a.fromNumber(f));
        g = b(g, this._littleEndian);
        c = b(c, this._offset);
        a = g ? {lo: 0, hi: 4} : {lo: 4, hi: 0};
        for (var l in a)this.setUint32(c + a[l], f[l], g);
        this._offset = c + 8
    }, setInt64: function (a, b, c) {
        this._set64(s, a, b, c)
    }, setUint64: function (a, b, c) {
        this._set64(l, a, b, c)
    }, _setUint32: function (a, b, c) {
        this._setBytes(a, [b & 255, b >>> 8 & 255, b >>> 16 & 255, b >>> 24], c)
    }, _setUint16: function (a, b, c) {
        this._setBytes(a, [b & 255, b >>> 8 & 255], c)
    }, _setUint8: function (a, b) {
        this._setBytes(a, [b & 255])
    }, setUnsigned: function (a, b, c) {
        a = this._getBitRangeData(c,
            a);
        var f = a.wideValue, g = a.bytes, f = f & ~(~(-1 << c) << -this._bitOffset), f = f | (32 > c ? b & ~(-1 << c) : b) << -this._bitOffset;
        for (b = g.length - 1; 0 <= b; b--)g[b] = f & 255, f >>>= 8;
        this._setBytes(a.start, g, !0)
    }};
    var C = g.prototype, B;
    for (B in y)(function (a) {
        C["get" + a] = function (b, c) {
            return this._action(a, !0, b, c)
        };
        C["set" + a] = function (b, c, f) {
            this._action(a, !1, b, f, c)
        }
    })(B);
    C._setInt32 = C._setUint32;
    C._setInt16 = C._setUint16;
    C._setInt8 = C._setUint8;
    C.setSigned = C.setUnsigned;
    for (var D in C)"set" === D.slice(0, 3) && function (a) {
        C["write" + a] =
            function () {
                Array.prototype.unshift.call(arguments, void 0);
                this["set" + a].apply(this, arguments)
            }
    }(D.slice(3));
    $jqOpta.jDataView = g
})(function () {
        return this
    }());
$jqOpta.FeedRequest = function (a, c, b, g, f) {
    a === $jqOpta.FeedRequest.FEED_F26 && $jqOpta._.contains([88, 96, 99, 104, 259, 331, 336, 341, 342, 395, 524, 549], Number(c.competition)) && (a = $jqOpta.FeedRequest.FEED_F26a);
    this.feed_type = a;
    this.params = $jqOpta.extend({}, c);
    this.url = this.getUrl();
    this.promise = b;
    this.additional_feed_requests = [];
    this.max_age = Math.max(30, g);
    this.trn = {};
    this.trn.comps = void 0;
    this.trn.teams = void 0;
    this.trn.players = void 0;
    this.trn.managers = void 0;
    this.trn.officials = void 0;
    this.trn.venues = void 0;
    this.trn.countries = void 0;
    if (f && f.comps instanceof Array)for (this.trn.comps = {}, a = 0; a < f.comps.length; a += 1)this.trn.comps[f.comps[a]] = !0;
    if (f && f.teams instanceof Array)for (this.trn.teams = {}, a = 0; a < f.teams.length; a += 1)this.trn.teams[f.teams[a]] = !0;
    if (f && f.players instanceof Array)for (this.trn.players = {}, a = 0; a < f.players.length; a += 1)this.trn.players[f.players[a]] = !0;
    if (f && f.managers instanceof Array)for (this.trn.managers = {}, a = 0; a < f.managers.length; a += 1)this.trn.players[f.managers[a]] = !0;
    if (f && f.officials instanceof
        Array)for (this.trn.officials = {}, a = 0; a < f.officials.length; a += 1)this.trn.players[f.officials[a]] = !0;
    if (f && f.venues instanceof Array)for (this.trn.venues = {}, a = 0; a < f.venues.length; a += 1)this.trn.players[f.venues[a]] = !0;
    if (f && f.countries instanceof Array)for (this.trn.countries = {}, a = 0; a < f.countries.length; a += 1)this.trn.players[f.countries[a]] = !0
};
$jqOpta.FeedRequest.prototype.getUrl = function () {
    var a = $jqOpta.FeedRequest["URL_" + this.feed_type], c = function (a) {
        return(a || "").toString().replace(/[^0-9\,]+/g, "")
    };
    if (void 0 === a)throw"Bad feed type '" + this.feed_type + "' passed in feed request";
    a = a.replace("[CO]", c(this.params.competition));
    a = a.replace("[SE]", c(this.params.season));
    a = a.replace("[GA]", c(this.params.match));
    a = a.replace("[TE]", c(this.params.team));
    a = a.replace("[RO]", c(this.params.round));
    a = a.replace("[T1]", c(this.params.team1));
    a = a.replace("[T2]",
        c(this.params.team2));
    a = a.replace("[CH]", this.params.channel);
    a = "pt" === $jqOpta.settings.language && "BR" === $jqOpta.settings.locale.region && this.feed_type === $jqOpta.FeedRequest.FEED_F13 ? a.replace("[LA]", "ptb") : a.replace("[LA]", $jqOpta.trim($jqOpta.settings.language));
    a = a.replace("[VE]", c(this.params.venue));
    a = a.replace(/\[CU\]/g, $jqOpta.trim(this.params.cust_id));
    a = a.replace("[LN]", $jqOpta.trim(this.params.lang_id));
    a = a.replace("[TR]", c(this.params.trans_id));
    a = a.replace("[SP]", c(this.params.sport_id));
    a = a.replace("[BU]", "https:" === window.location.protocol ? "https://s3-eu-west-1.amazonaws.com/widget.cloud.opta.net/2.0/" : "http://widget.cloud.opta.net/2.0/");
    if ("F55" === this.feed_type || "F55a" === this.feed_type || "F55o" === this.feed_type)a = a.replace("[PH]", c(this.params.phase)), a = a.replace("[IN]", c(this.params.interval));
    "OW1" === this.feed_type && (a = a.replace(/\[CHANNEL\]/g, this.params.channel));
    this.feed_type.match(/^PRF\d+$/) && (this.params.callback_name = "_clbk");
    "PRF01" === this.feed_type ? (this.params.category_id &&
        (a += "&ctgId=" + c(this.params.category_id)), this.params.category && (this.params.category instanceof Array || (this.params.category = [this.params.category]), $jqOpta._.each(this.params.category, function (b) {
        a += "&ctg=" + b
    })), this.params.keyword && (this.params.keyword instanceof Array || (this.params.keyword = [this.params.keyword]), $jqOpta._.each(this.params.keyword, function (b) {
        a += "&kwd=" + b
    })), this.params.search && (a += "&ft=" + this.params.search), this.params.fields && (a += "&_fld=" + this.params.fields), this.params.page &&
        (a += "&_pgNm=" + this.params.page), this.params.count && (a += "&_pgSz=" + this.params.count), this.params.team && (a += "&lnk=urn:perform:gsm:soccer:team:" + this.params.team), a += "&_lcl=" + (this.params.language || $jqOpta.settings.locale.lang)) : "PRF02" === this.feed_type ? a = a.replace("[ARTICLE_UUID]", this.params.article) : "PRF03" === this.feed_type && (this.params.category && (this.params.category instanceof Array || (this.params.category = [this.params.category]), $jqOpta._.each(this.params.category, function (b) {
        a += "&ctgId=" + b
    })),
        this.params.channel && (a += "&chnlTl=" + this.params.channel), this.params.channel_id && (a += "&chnlId=" + this.params.channel_id), this.params.keyword && (this.params.keyword instanceof Array || (this.params.keyword = [this.params.keyword]), $jqOpta._.each(this.params.keyword, function (b) {
        a += "&kwd=" + b
    })), this.params.search && (a += "&ft=" + this.params.search), a += this.params.fields ? "&_fld=" + this.params.fields : "&_fld=tl,desc,pt,id,thmb,kwd,mGrp,ctgId", this.params.date_from && (a += "&_dlt=" + this.params.date_from), this.params.count &&
        (a += "&_pgSz=" + Number(this.params.count)), this.params.page && (a += "&_pgNm=" + Number(this.params.page)), a += "&lng=" + (this.params.language || $jqOpta.settings.locale.lang), a += "&_ord=" + (this.params.ord || "pt"), a += "&_ordSrt=" + (this.params.ordSrt || "desc"));
    "http" !== a.substr(0, 4) && "//" !== a.substr(0, 2) && (a = void 0 !== $jqOpta.settings.feed_base_url ? $jqOpta.settings.feed_base_url + a : "https:" === window.location.protocol ? "https://secure.omo.akamai.opta.net/" + a : "http://omo.akamai.opta.net/" + a);
    return a
};
$jqOpta.FeedRequest.prototype.getFeedCallback = function () {
    if (void 0 !== this.callback)return this.callback;
    switch (this.feed_type) {
        case $jqOpta.FeedRequest.FEED_TRANS_WIDGET:
            return"WT_" + this.params.cust_id + "_" + this.params.trans_id + "_" + this.params.lang_id;
        case $jqOpta.FeedRequest.FEED_TRANS_COMP:
            return"CP_" + this.params.cust_id + "_" + this.params.trans_id + "_" + this.params.lang_id + "_" + this.params.sport_id + "_" + this.params.season;
        case $jqOpta.FeedRequest.FEED_TRANS_TEAM:
            return"TN_" + this.params.cust_id + "_" + this.params.trans_id +
                "_" + this.params.lang_id + "_" + this.params.sport_id + "_" + this.params.season + "_" + this.params.competition;
        case $jqOpta.FeedRequest.FEED_TRANS_PLAYER:
            return"PN_" + this.params.cust_id + "_" + this.params.trans_id + "_" + this.params.lang_id + "_" + this.params.sport_id + "_" + this.params.season + "_" + this.params.competition + "_" + this.params.team;
        case $jqOpta.FeedRequest.FEED_TRANS_PLAYER_CHANGES:
            return"PC_" + this.params.sport_id + "_" + this.params.lang_id;
        case $jqOpta.FeedRequest.FEED_TRANS_VENUE:
            return"VE_" + this.params.cust_id +
                "_" + this.params.trans_id + "_" + this.params.lang_id + "_" + this.params.sport_id + "_" + this.params.season + "_" + this.params.competition;
        case $jqOpta.FeedRequest.FEED_TRANS_OFFICIAL:
            return"OF_" + this.params.cust_id + "_" + this.params.trans_id + "_" + this.params.lang_id + "_" + this.params.sport_id + "_" + this.params.season + "_" + this.params.competition;
        case $jqOpta.FeedRequest.FEED_TRANS_MANAGER:
            return"MA_" + this.params.cust_id + "_" + this.params.trans_id + "_" + this.params.lang_id + "_" + this.params.sport_id + "_" + this.params.season + "_" +
                this.params.competition;
        case $jqOpta.FeedRequest.FEED_TRANS_COUNTRY:
            return"CN_" + this.params.cust_id + "_" + this.params.trans_id + "_" + this.params.lang_id;
        case $jqOpta.FeedRequest.FEED_SHORT_COMP:
            return $jqOpta.FeedRequest.FEED_SHORT_COMP;
        case $jqOpta.FeedRequest.FEED_SHORT_TEAM:
            return $jqOpta.FeedRequest.FEED_SHORT_TEAM;
        case $jqOpta.FeedRequest.FEED_TRANS_TENNIS:
            return"TE_" + this.params.lang_id;
        case $jqOpta.FeedRequest.FEED_TRANS_HISTORICAL_COMP:
            return"HC_" + this.params.lang_id;
        case $jqOpta.FeedRequest.FEED_OW1:
            return"optahw_" +
                this.params.channel;
        case "PRF01":
            var a = this.feed_type + "_" + this.params.competition + "_" + this.params.season;
            this.params.keyword && (a += "_k" + $jqOpta.sha1(this.params.keyword));
            this.params.count && (a += "_p" + this.params.page);
            this.params.count && (a += "_c" + this.params.count);
            return a;
        case $jqOpta.FeedRequest.FEED_TWITTER:
            return"twitter_" + this.params.channel;
        default:
            return a = this.feed_type + "_" + this.params.competition + "_" + this.params.season, this.params.match && (a += "_m" + this.params.match), this.params.team && (a += "_t" +
                this.params.team), this.params.lang && (a += "_l" + this.params.lang_id), this.params.trans_id && (a += "_tr" + this.params.trans_id), this.params.sport_id && (a += "_sp" + this.params.sport_id), this.params.venue && (a += "_v" + this.params.venue), a = a.replace(/[\s]/g, ""), a = a.replace(/[\,\&\.-]/g, "_")
    }
    throw"BAD";
};
$jqOpta.FeedRequest.prototype.triggerCallback = function (a) {
    this.callback(a)
};
$jqOpta.FeedRequest.FEED_F1 = "F1";
$jqOpta.FeedRequest.FEED_F1A = "F1";
$jqOpta.FeedRequest.FEED_F2 = "F2";
$jqOpta.FeedRequest.FEED_F3 = "F3";
$jqOpta.FeedRequest.FEED_F7 = "F9";
$jqOpta.FeedRequest.FEED_F9 = "F9";
$jqOpta.FeedRequest.FEED_F9_JSON = "F9_JSON";
$jqOpta.FeedRequest.FEED_F13 = "F13";
$jqOpta.FeedRequest.FEED_F13M = "F13M";
$jqOpta.FeedRequest.FEED_F15 = "F15";
$jqOpta.FeedRequest.FEED_F15_JSON = "F15_JSON";
$jqOpta.FeedRequest.FEED_F23 = "F23";
$jqOpta.FeedRequest.FEED_F24 = "F24";
$jqOpta.FeedRequest.FEED_F26 = "F26";
$jqOpta.FeedRequest.FEED_F26a = "F26a";
$jqOpta.FeedRequest.FEED_F27 = "F27";
$jqOpta.FeedRequest.FEED_F27a = "F27a";
$jqOpta.FeedRequest.FEED_F28 = "F28";
$jqOpta.FeedRequest.FEED_F30 = "F30";
$jqOpta.FeedRequest.FEED_F30_JSON = "F30_JSON";
$jqOpta.FeedRequest.FEED_F31 = "F31";
$jqOpta.FeedRequest.FEED_F36 = "F36";
$jqOpta.FeedRequest.FEED_F37 = "F37";
$jqOpta.FeedRequest.FEED_F40 = "F40";
$jqOpta.FeedRequest.FEED_F40_JSON = "F40_JSON";
$jqOpta.FeedRequest.FEED_F45 = "F45";
$jqOpta.FeedRequest.FEED_F53 = "F53";
$jqOpta.FeedRequest.FEED_F53a = "F53a";
$jqOpta.FeedRequest.FEED_F54 = "F54";
$jqOpta.FeedRequest.FEED_F55 = "F55";
$jqOpta.FeedRequest.FEED_F55a = "F55a";
$jqOpta.FeedRequest.FEED_F55o = "F55o";
$jqOpta.FeedRequest.FEED_F56 = "F56";
$jqOpta.FeedRequest.FEED_F57 = "F57";
$jqOpta.FeedRequest.FEED_F57o = "F57o";
$jqOpta.FeedRequest.FEED_RUF1 = "RUF1";
$jqOpta.FeedRequest.FEED_RUF2 = "RUF2";
$jqOpta.FeedRequest.FEED_RUF3 = "RUF3";
$jqOpta.FeedRequest.FEED_RU3 = "RU3";
$jqOpta.FeedRequest.FEED_RU4 = "RU4";
$jqOpta.FeedRequest.FEED_RU5 = "RU5";
$jqOpta.FeedRequest.FEED_RUF7 = "RUF7";
$jqOpta.FeedRequest.FEED_RUF9 = "RUF9";
$jqOpta.FeedRequest.FEED_RU10 = "RU10";
$jqOpta.FeedRequest.FEED_RUF13 = "RUF13";
$jqOpta.FeedRequest.FEED_RUF13M = "RUF13M";
$jqOpta.FeedRequest.FEED_RU23 = "RU23";
$jqOpta.FeedRequest.FEED_RU24 = "RU24";
$jqOpta.FeedRequest.FEED_RLF1 = "RLF1";
$jqOpta.FeedRequest.FEED_RL2 = "RL2";
$jqOpta.FeedRequest.FEED_RL3 = "RL3";
$jqOpta.FeedRequest.FEED_RLF3 = "RLF3";
$jqOpta.FeedRequest.FEED_RL7 = "RL7";
$jqOpta.FeedRequest.FEED_RLF9 = "RLF9";
$jqOpta.FeedRequest.FEED_RL10 = "RL10";
$jqOpta.FeedRequest.FEED_RLF13 = "RLF13";
$jqOpta.FeedRequest.FEED_RLF13M = "RLF13M";
$jqOpta.FeedRequest.FEED_RL23 = "RL23";
$jqOpta.FeedRequest.FEED_RL24 = "RL24";
$jqOpta.FeedRequest.FEED_AFL1 = "AFL1";
$jqOpta.FeedRequest.FEED_AFL3 = "AFL3";
$jqOpta.FeedRequest.FEED_AFL9 = "AFL9";
$jqOpta.FeedRequest.FEED_BSBTABLES = "BSBTABLES";
$jqOpta.FeedRequest.FEED_BSBH2H = "BSBH2H";
$jqOpta.FeedRequest.FEED_BSBMATCHES = "BSBMATCHES";
$jqOpta.FeedRequest.FEED_BSBMATCH = "BSBMATCH";
$jqOpta.FeedRequest.FEED_BBTABLES = "BBTABLES";
$jqOpta.FeedRequest.FEED_BBH2H = "BBH2H";
$jqOpta.FeedRequest.FEED_BBMATCHES = "BBMATCHES";
$jqOpta.FeedRequest.FEED_BBMATCH = "BBMATCH";
$jqOpta.FeedRequest.FEED_C1 = "C1";
$jqOpta.FeedRequest.FEED_C2 = "C2";
$jqOpta.FeedRequest.FEED_C3 = "C3";
$jqOpta.FeedRequest.FEED_C5 = "C5";
$jqOpta.FeedRequest.FEED_C6 = "C6";
$jqOpta.FeedRequest.FEED_C7 = "C7";
$jqOpta.FeedRequest.FEED_C9 = "C9";
$jqOpta.FeedRequest.FEED_C10 = "C10";
$jqOpta.FeedRequest.FEED_C11 = "C11";
$jqOpta.FeedRequest.FEED_C12 = "C12";
$jqOpta.FeedRequest.FEED_C30 = "C30";
$jqOpta.FeedRequest.FEED_C50 = "C50";
$jqOpta.FeedRequest.FEED_IH1 = "IH1";
$jqOpta.FeedRequest.FEED_IH3 = "IH3";
$jqOpta.FeedRequest.FEED_IH9 = "IH9";
$jqOpta.FeedRequest.FEED_IHTABLES = "IHTABLES";
$jqOpta.FeedRequest.FEED_IHH2H = "IHH2H";
$jqOpta.FeedRequest.FEED_IHMATCHES = "IHMATCHES";
$jqOpta.FeedRequest.FEED_IHMATCH = "IHMATCH";
$jqOpta.FeedRequest.FEED_BB1 = "BB1";
$jqOpta.FeedRequest.FEED_BB3 = "BB3";
$jqOpta.FeedRequest.FEED_BB9 = "BB9";
$jqOpta.FeedRequest.FEED_BB24 = "BB24";
$jqOpta.FeedRequest.FEED_BBTABLES = "BBTABLES";
$jqOpta.FeedRequest.FEED_BBH2H = "BBH2H";
$jqOpta.FeedRequest.FEED_BBMATCHES = "BBMATCHES";
$jqOpta.FeedRequest.FEED_BBMATCH = "BBMATCH";
$jqOpta.FeedRequest.FEED_BSBTABLES = "BSBTABLES";
$jqOpta.FeedRequest.FEED_BSBH2H = "BSBH2H";
$jqOpta.FeedRequest.FEED_BSBMATCHES = "BSBMATCHES";
$jqOpta.FeedRequest.FEED_BSBMATCH = "BSBMATCH";
$jqOpta.FeedRequest.FEED_AFTABLES = "AFTABLES";
$jqOpta.FeedRequest.FEED_AFH2H = "AFH2H";
$jqOpta.FeedRequest.FEED_AFMATCHES = "AFMATCHES";
$jqOpta.FeedRequest.FEED_IHTABLES = "IHTABLES";
$jqOpta.FeedRequest.FEED_IHH2H = "IHH2H";
$jqOpta.FeedRequest.FEED_IHMATCHES = "IHMATCHES";
$jqOpta.FeedRequest.FEED_IHMATCH = "IHMATCH";
$jqOpta.FeedRequest.FEED_HBL1 = "HBL1";
$jqOpta.FeedRequest.FEED_HBL3 = "HBL3";
$jqOpta.FeedRequest.FEED_VBL1 = "VBL1";
$jqOpta.FeedRequest.FEED_VBL3 = "VBL3";
$jqOpta.FeedRequest.FEED_G1 = "G1";
$jqOpta.FeedRequest.FEED_G2 = "G2";
$jqOpta.FeedRequest.FEED_G2M = "G2M";
$jqOpta.FeedRequest.FEED_G15 = "G15";
$jqOpta.FeedRequest["FEED_MR1-L-NT"] = "MR1-L-NT";
$jqOpta.FeedRequest["FEED_MR2-L-NT"] = "MR2-L-NT";
$jqOpta.FeedRequest.FEED_MR4 = "MR4";
$jqOpta.FeedRequest.FEED_MR5 = "MR5";
$jqOpta.FeedRequest.FEED_MR6 = "MR6";
$jqOpta.FeedRequest.FEED_MR8 = "MR8";
$jqOpta.FeedRequest.FEED_MR9 = "MR9";
$jqOpta.FeedRequest.FEED_MR10 = "MR10";
$jqOpta.FeedRequest.FEED_MR12 = "MR12";
$jqOpta.FeedRequest.FEED_TAB1 = "TAB1";
$jqOpta.FeedRequest.FEED_TAB2 = "TAB2";
$jqOpta.FeedRequest.FEED_TAB4 = "TAB4";
$jqOpta.FeedRequest.FEED_TAB7 = "TAB7";
$jqOpta.FeedRequest.FEED_TAB15 = "TAB15";
$jqOpta.FeedRequest.FEED_OW1 = "OW1";
$jqOpta.FeedRequest.FEED_PRF01 = "PRF01";
$jqOpta.FeedRequest.FEED_PRF02 = "PRF02";
$jqOpta.FeedRequest.FEED_PRF03 = "PRF03";
$jqOpta.FeedRequest.FEED_SHORT_COMP = "SHORT_COMP";
$jqOpta.FeedRequest.FEED_TRANS_WIDGET = "TRANS_WIDGET";
$jqOpta.FeedRequest.FEED_TRANS_COMP = "TRANS_COMP";
$jqOpta.FeedRequest.FEED_TRANS_TEAM = "TRANS_TEAM";
$jqOpta.FeedRequest.FEED_TRANS_PLAYER = "TRANS_PLAYER";
$jqOpta.FeedRequest.FEED_TRANS_PLAYER_CHANGES = "TRANS_PLAYER_CHANGES";
$jqOpta.FeedRequest.FEED_TRANS_VENUE = "TRANS_VENUE";
$jqOpta.FeedRequest.FEED_TRANS_OFFICIAL = "TRANS_OFFICIAL";
$jqOpta.FeedRequest.FEED_TRANS_MANAGER = "TRANS_MANAGER";
$jqOpta.FeedRequest.FEED_TRANS_COUNTRY = "TRANS_COUNTRY";
$jqOpta.FeedRequest.FEED_TRANS_TENNIS = "TRANS_TENNIS";
$jqOpta.FeedRequest.FEED_TRANS_HISTORICAL_COMP = "TRANS_HISTORICAL_COMP";
$jqOpta.FeedRequest.FEED_TWITTER = "TWITTER";
$jqOpta.FeedRequest.URL_F1 = "competition.php?feed_type=f1_packed&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F2 = "?feed_type=F2&game_id=[GA]";
$jqOpta.FeedRequest.URL_F3 = "competition.php?feed_type=f3_packed&season_id=[SE]&competition=[CO]&round_id=[RO]";
$jqOpta.FeedRequest.URL_F9 = "?feed_type=f9_packed&game_id=[GA]";
$jqOpta.FeedRequest.URL_F9_JSON = "?feed_type=f9&game_id=[GA]";
$jqOpta.FeedRequest.URL_F13 = "?feed_type=F13&game_id=[GA]&language=[LA]";
$jqOpta.FeedRequest.URL_F13M = "?feed_type=F13m&game_id=[GA]&language=[LA]";
$jqOpta.FeedRequest.URL_F15 = "competition.php?feed_type=f15_packed&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F15_JSON = "competition.php?feed_type=f15&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F23 = "competition.php?feed_type=F23&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F24 = "?feed_type=f24_packed&game_id=[GA]";
$jqOpta.FeedRequest.URL_F26 = "competition.php?feed_type=f26_packed&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F26a = "competition.php?feed_type=F26a&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F27 = "index.php?feed_type=F27&game_id=[GA]";
$jqOpta.FeedRequest.URL_F27a = "team_game.php?feed_type=F27&game_id=[GA]&team_id=[TE]";
$jqOpta.FeedRequest.URL_F28 = "index.php?feed_type=f28&game_id=[GA]";
$jqOpta.FeedRequest.URL_F30 = "team_competition.php?feed_type=f30_packed&season_id=[SE]&competition=[CO]&team_id=[TE]";
$jqOpta.FeedRequest.URL_F30_JSON = "team_competition.php?feed_type=f30&season_id=[SE]&competition=[CO]&team_id=[TE]";
$jqOpta.FeedRequest.URL_F31 = "?feed_type=F31&game_id=[GA]";
$jqOpta.FeedRequest.URL_F36 = "competition.php?feed_type=f36_packed&season_id=[SE]&competition=[CO]&round_id=[RO]";
$jqOpta.FeedRequest.URL_F37 = "competition.php?feed_type=f37&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_F40 = "competition.php?feed_type=f40_packed&competition=[CO]&season_id=[SE]&team_id=[TE]";
$jqOpta.FeedRequest.URL_F40_JSON = "competition.php?feed_type=f40&competition=[CO]&season_id=[SE]&team_id=[TE]";
$jqOpta.FeedRequest.URL_F45 = "competition.php?feed_type=F45&competition=[CO]&season_id=[SE]&venue_id=[VE]";
$jqOpta.FeedRequest.URL_F53 = "?feed_type=F53&game_id=[GA]";
$jqOpta.FeedRequest.URL_F53a = "?feed_type=F53a&game_id=[GA]";
$jqOpta.FeedRequest.URL_F54 = "?feed_type=F54&game_id=[GA]";
$jqOpta.FeedRequest.URL_F55 = "team_game.php?feed_type=F55&game_id=[GA]&team_id=[PH][IN]";
$jqOpta.FeedRequest.URL_F55a = "team_game.php?feed_type=F55a&game_id=[GA]&team_id=[PH][IN]";
$jqOpta.FeedRequest.URL_F55o = "team_game.php?feed_type=F55o&game_id=[GA]&team_id=[PH][IN]";
$jqOpta.FeedRequest.URL_F56 = "team_competition.php?feed_type=f56&season_id=[SE]&competition=[CO]&team_id=[TE]";
$jqOpta.FeedRequest.URL_F57 = "?feed_type=F57&game_id=[GA]";
$jqOpta.FeedRequest.URL_F57o = "?feed_type=F57o&game_id=[GA]";
$jqOpta.FeedRequest.URL_RUF1 = "competition.php?feed_type=ruf1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RUF2 = "?feed_type=RUF2&game_id=[GA]";
$jqOpta.FeedRequest.URL_RUF3 = "competition.php?feed_type=ruf3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RU3 = "competition.php?feed_type=ru3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RU4 = "competition.php?feed_type=ru4&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RU5 = "competition.php?feed_type=ru5&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RUF7 = "?feed_type=ru7&game_id=[GA]";
$jqOpta.FeedRequest.URL_RUF9 = "?feed_type=ruf9&game_id=[GA]";
$jqOpta.FeedRequest.URL_RU10 = "competition.php?feed_type=RU10&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RUF13 = "?feed_type=RUF13&game_id=[GA]&language=[LA]";
$jqOpta.FeedRequest.URL_RUF13M = "?feed_type=RUF13m&game_id=[GA]&language=[LA]";
$jqOpta.FeedRequest.URL_RU23 = "competition.php?feed_type=RU23&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RU24 = "competition.php?feed_type=RU24&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RLF1 = "competition.php?feed_type=rlf1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RL2 = "competition.php?feed_type=rl2&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RL3 = "competition.php?feed_type=rlf3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RLF3 = "competition.php?feed_type=rlf3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RL7 = "?feed_type=rl7&game_id=[GA]";
$jqOpta.FeedRequest.URL_RLF9 = "?feed_type=rlf9&game_id=[GA]";
$jqOpta.FeedRequest.URL_RL10 = "competition.php?feed_type=RL10&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RLF13 = "?feed_type=RLF13&game_id=[GA]";
$jqOpta.FeedRequest.URL_RLF13M = "?feed_type=RLF13M&game_id=[GA]";
$jqOpta.FeedRequest.URL_RL23 = "competition.php?feed_type=RL23&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_RL24 = "competition.php?feed_type=RL24&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_AFL1 = "competition.php?feed_type=afl1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_AFL3 = "competition.php?feed_type=afl3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_AFL9 = "?feed_type=afl9&game_id=[GA]";
$jqOpta.FeedRequest.URL_BSBTABLES = "core.php?feed_type=opta_core&sport=baseball&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_BSBH2H = "core.php?feed_type=opta_core&sport=baseball&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_BSBMATCHES = "core.php?feed_type=opta_core&sport=baseball&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_BSBMATCH = "core.php?feed_type=opta_core&sport=baseball&method=matches&id=[GA]&type=match&detailed=yes&statistics=yes";
$jqOpta.FeedRequest.URL_BBTABLES = "core.php?feed_type=opta_core&sport=basketball&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_BBH2H = "core.php?feed_type=opta_core&sport=basketball&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_BBMATCHES = "core.php?feed_type=opta_core&sport=basketball&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_BBMATCH = "core.php?feed_type=opta_core&sport=basketball&method=matches&id=[GA]&type=match&detailed=yes&statistics=yes";
$jqOpta.FeedRequest.URL_C1 = "competition.php?feed_type=C1&competition=0&season_id=0";
$jqOpta.FeedRequest.URL_C2 = "?feed_type=c2&game_id=[GA]";
$jqOpta.FeedRequest.URL_C3 = "?feed_type=c3&game_id=[GA]";
$jqOpta.FeedRequest.URL_C5 = "competition.php?feed_type=C5&competition=[CO]&season_id=0";
$jqOpta.FeedRequest.URL_C6 = "team_game.php?feed_type=c6&game_id=[GA]&team_id=[TE]";
$jqOpta.FeedRequest.URL_C7 = "team_game.php?feed_type=c7&game_id=[GA]&team_id=[TE]";
$jqOpta.FeedRequest.URL_C9 = "competition.php?feed_type=C9&competition=0&season_id=0";
$jqOpta.FeedRequest.URL_C10 = "competition.php?feed_type=C10&competition=[CO]&season_id=0";
$jqOpta.FeedRequest.URL_C11 = "competition.php?feed_type=c11&competition=[CO]&season_id=0";
$jqOpta.FeedRequest.URL_C12 = "?feed_type=C12&game_id=[GA]";
$jqOpta.FeedRequest.URL_C30 = "competition.php?feed_type=C30&competition=[CO]&season_id=0";
$jqOpta.FeedRequest.URL_C50 = "?feed_type=c50&game_id=[GA]";
$jqOpta.FeedRequest.URL_IH1 = "competition.php?feed_type=IH1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_IH3 = "competition.php?feed_type=IH3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_IH9 = "?feed_type=IH9&game_id=[GA]";
$jqOpta.FeedRequest.URL_IHTABLES = "core.php?feed_type=opta_core&sport=hockey&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_IHH2H = "core.php?feed_type=opta_core&sport=hockey&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_IHMATCHES = "core.php?feed_type=opta_core&sport=hockey&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_IHMATCH = "core.php?feed_type=opta_core&sport=hockey&method=matches&id=[GA]&type=match";
$jqOpta.FeedRequest.URL_BB1 = "competition.php?feed_type=BB1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_BB3 = "competition.php?feed_type=BB3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_BB9 = "?feed_type=BB9&game_id=[GA]";
$jqOpta.FeedRequest.URL_BB24 = "?feed_type=BB24&game_id=[GA]";
$jqOpta.FeedRequest.URL_BBTABLES = "core.php?feed_type=opta_core&sport=basketball&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_BBH2H = "core.php?feed_type=opta_core&sport=basketball&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_BBMATCHES = "core.php?feed_type=opta_core&sport=basketball&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_BBMATCH = "core.php?feed_type=opta_core&sport=basketball&method=matches&id=[GA]&type=match";
$jqOpta.FeedRequest.URL_BSBTABLES = "core.php?feed_type=opta_core&sport=baseball&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_BSBH2H = "core.php?feed_type=opta_core&sport=baseball&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_BSBMATCHES = "core.php?feed_type=opta_core&sport=baseball&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_BSBMATCH = "core.php?feed_type=opta_core&sport=baseball&method=matches&id=[GA]&type=match";
$jqOpta.FeedRequest.URL_AFTABLES = "core.php?feed_type=opta_core&sport=americanfootball&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_AFH2H = "core.php?feed_type=opta_core&sport=americanfootball&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_AFMATCHES = "core.php?feed_type=opta_core&sport=americanfootball&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_IHTABLES = "core.php?feed_type=opta_core&sport=hockey&method=tables&id=[CO]&type=season&tabletype=total";
$jqOpta.FeedRequest.URL_IHH2H = "core.php?feed_type=opta_core&sport=hockey&method=head2head&team_A_id=[T1]&team_B_id=[T2]";
$jqOpta.FeedRequest.URL_IHMATCHES = "core.php?feed_type=opta_core&sport=hockey&method=matches&id=[CO]&type=season";
$jqOpta.FeedRequest.URL_IHMATCH = "core.php?feed_type=opta_core&sport=hockey&method=matches&id=[GA]&type=match";
$jqOpta.FeedRequest.URL_HBL1 = "competition.php?feed_type=HBL1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_HBL3 = "competition.php?feed_type=HBL3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_VBL1 = "competition.php?feed_type=VBL1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_VBL3 = "competition.php?feed_type=VBL3&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_G1 = "competition.php?feed_type=G1&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_G2 = "?feed_type=g2&competition=[CO]&season_id=[SE]&game_id=[GA]";
$jqOpta.FeedRequest.URL_G2M = "?feed_type=g2m&competition=[CO]&season_id=[SE]&game_id=[GA]";
$jqOpta.FeedRequest.URL_G15 = "competition.php?feed_type=G15&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest["URL_MR1-L-NT"] = "?feed_type=MR1-L-NT&game_id=[GA]";
$jqOpta.FeedRequest["URL_MR2-L-NT"] = "?feed_type=MR2-L-NT&game_id=[GA]";
$jqOpta.FeedRequest.URL_MR4 = "competition.php?feed_type=MR4&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_MR5 = "competition.php?feed_type=MR5&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_MR6 = "competition.php?feed_type=MR6&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_MR8 = "?feed_type=MR8&game_id=[GA]";
$jqOpta.FeedRequest.URL_MR9 = "competition.php?feed_type=MR9&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_MR10 = "competition.php?feed_type=MR10&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_MR12 = "competition.php?feed_type=MR12&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_TAB1 = "competition.php?feed_type=TAB1&competition=0&season_id=[SE]";
$jqOpta.FeedRequest.URL_TAB2 = "competition.php?feed_type=TAB2&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_TAB4 = "?feed_type=TAB4&game_id=[GA]";
$jqOpta.FeedRequest.URL_TAB7 = "?feed_type=TAB7&game_id=[GA]";
$jqOpta.FeedRequest.URL_TAB15 = "competition.php?feed_type=TAB15&competition=[CO]&season_id=[SE]";
$jqOpta.FeedRequest.URL_OW1 = "//s3-eu-west-1.amazonaws.com/widget.cloud.opta.net/headlines/[CHANNEL]/[CHANNEL].json";
$jqOpta.FeedRequest.URL_SHORT_COMP = "[BU]assets/json/compShortNames.js";
$jqOpta.FeedRequest.URL_TRANS_WIDGET = "[BU]../translations_v2/[CU]/WT_[CU]_[TR]_[LN].json";
$jqOpta.FeedRequest.URL_TRANS_COMP = "[BU]../translations_v2/[CU]/CP_[CU]_[TR]_[LN]_[SP]_[SE].json";
$jqOpta.FeedRequest.URL_TRANS_TEAM = "[BU]../translations_v2/[CU]/TN_[CU]_[TR]_[LN]_[SP]_[SE]_[CO].json";
$jqOpta.FeedRequest.URL_TRANS_PLAYER = "[BU]../translations_v2/[CU]/PN_[CU]_[TR]_[LN]_[SP]_[SE]_[CO]_[TE].json";
$jqOpta.FeedRequest.URL_TRANS_PLAYER_CHANGES = "[BU]../translations_v2/[CU]/changes/player/PC_[SP]_[LN].json";
$jqOpta.FeedRequest.URL_TRANS_COUNTRY = "[BU]../translations_v2/[CU]/CN_[CU]_[TR]_[LN].json";
$jqOpta.FeedRequest.URL_TRANS_MANAGER = "[BU]../translations_v2/[CU]/MA_[CU]_[TR]_[LN]_[SP]_[SE]_[CO].json";
$jqOpta.FeedRequest.URL_TRANS_OFFICIAL = "[BU]../translations_v2/[CU]/OF_[CU]_[TR]_[LN]_[SP]_[SE]_[CO].json";
$jqOpta.FeedRequest.URL_TRANS_VENUE = "[BU]../translations_v2/[CU]/VE_[CU]_[TR]_[LN]_[SP]_[SE]_[CO].json";
$jqOpta.FeedRequest.URL_TRANS_TENNIS = "[BU]../translations_v2/tennis/TE_[LN].json";
$jqOpta.FeedRequest.URL_TRANS_HISTORICAL_COMP = "[BU]../translations_v2/historical_comp/HC_[LN].json";
$jqOpta.FeedRequest.URL_TWITTER = "//widget.cloud.opta.net.s3.amazonaws.com/data/twitter/twitter_[CH].json";
$jqOpta.FeedRequest.URL_TRN_SCRIPT = "";
$jqOpta.FeedRequest.URL_PRF01 = "//opta-article.performfeeds.com/article/1t97ffnd5cp761lay7ucgk9qak?_fmt=jsonp&_rt=c";
$jqOpta.FeedRequest.URL_PRF02 = "//opta-article.performfeeds.com/article/1t97ffnd5cp761lay7ucgk9qak/[ARTICLE_UUID]?_fmt=jsonp&_rt=c&_fld=tsr,bd,hl,pt,lut,vdo,img,ctg,kwd,pt";
$jqOpta.FeedRequest.URL_PRF03 = "//opta-vod.performfeeds.com/vod/1t97ffnd5cp761lay7ucgk9qak/?_fmt=jsonp&_rt=c";
$jqOpta.FeedMonitor = {};
$jqOpta.FeedMonitor.pending_feed_requests = {};
$jqOpta.FeedMonitor.feeds = [];
$jqOpta.FeedMonitor.requestFeed = function (a) {
    var c, b, g = !0, f = (new Date).getTime();
    a.max_age = Math.max(30, a.max_age);
    a = $jqOpta.extend(!0, {}, a);
    void 0 !== $jqOpta.FeedMonitor.pending_feed_requests[a.url] && (a.no_loopback = !0, $jqOpta.FeedMonitor.pending_feed_requests[a.url].additional_feed_requests.push(a), g = !1);
    if ($jqOpta.FeedMonitor.feeds.length)for (c = 0; c < $jqOpta.FeedMonitor.feeds.length; c += 1)b = $jqOpta.FeedMonitor.feeds[c], b.url === a.url && f < b.last_request + 1E3 * a.max_age && (b.data.error ? a.promise.reject(b.data) :
        (a.last_feed_request = b.last_request, $jqOpta.FeedMonitor.getTranslationScript(a, b.data)), g = !1);
    g && ($jqOpta.FeedMonitor.pending_feed_requests[a.url] = a, $jqOpta.FeedMonitor.getFeed(a))
};
$jqOpta.FeedMonitor.getFeed = function (a) {
    var c, b = {url: a.url, dataType: a.response_type || "jsonp", cache: !0, timeout: 3E4, success: function (b, c, n) {
        "script" === a.response_type ? $jqOpta.FeedMonitor.storeFeed(a, b) : void 0 === b.response || "Error" !== b.response.substr(0, 5) && "Sorry" !== b.response.substr(0, 5) ? $jqOpta.FeedMonitor.decodeData(a, b) : $jqOpta.FeedMonitor.failFeed(a, n, -2, b.response)
    }, error: function (b, c, n) {
        $jqOpta.FeedMonitor.failFeed(a, b, c, n)
    }};
    -1 !== a.url.indexOf("omo.akamai.opta.net") && (-1 === a.url.indexOf("core.php") &&
        (b.data = {user: "owv2", psw: "wacRUs5U"}), "script" !== a.response_type && navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/) && (c = new Date, b.data._ = c.getFullYear().toString() + c.getMonth().toString() + c.getDate().toString() + c.getHours().toString() + c.getMinutes().toString()));
    "jsonp" !== a.response_type && void 0 !== a.response_type ? (b.jsonp = a.params.callback_name || "jsoncallback", b.jsonpCallback = a.getFeedCallback(), $jqOpta.ajax(b)) : (b.callbackParameter = a.params.callback_name || "jsoncallback",
        b.callback = a.getFeedCallback(), $jqOpta.jsonp(b))
};
$jqOpta.FeedMonitor.getTranslationScript = function (a, c) {
    (function () {
        var b = new $jqOpta.Deferred;
        b.done(function () {
            $jqOpta["trn_" + a.trans_script_type](c, a, function (b) {
                $jqOpta.FeedMonitor.storeFeed(a, b)
            })
        });
        b.fail(function () {
            return $jqOpta.FeedMonitor.failFeed(a, null, "error", c.message)
        });
        if (c instanceof Object && void 0 !== c.response)return b.reject();
        switch (a.feed_type) {
            case "F15":
            case "F1":
            case "F1A":
            case "F2":
            case "F24":
            case "F26":
            case "F26a":
            case "F27":
            case "F27a":
            case "F28":
            case "F3":
            case "F30":
            case "F31":
            case "F36":
            case "F40":
            case "F45":
            case "F7":
            case "F9":
            case "RUF1":
            case "RUF3":
            case "RUF7":
            case "RUF9":
            case "RU23":
            case "VBL1":
            case "HBL1":
            case "F9_JSON":
            case "F30_JSON":
            case "F40_JSON":
            case "F53":
            case "F53a":
            case "F54":
            case "F55":
            case "F55o":
            case "F55a":
            case "BB1":
            case "BB3":
                a.trans_script_type = a.feed_type;
                switch (a.trans_script_type) {
                    case "F26a":
                        a.trans_script_type = "F26";
                        break;
                    case "F27a":
                        a.trans_script_type = "F27";
                        break;
                    case "F1":
                        a.trans_script_type = "F1A";
                        break;
                    case "RUF1":
                        a.trans_script_type = "F1A";
                        break;
                    case "RUF3":
                        a.trans_script_type = "F3";
                        break;
                    case "RUF9":
                        a.trans_script_type = "F9";
                        break;
                    case "F9_JSON":
                        a.trans_script_type = "F9";
                        break;
                    case "F30_JSON":
                        a.trans_script_type = "F30";
                        break;
                    case "F40_JSON":
                        a.trans_script_type = "F40";
                        break;
                    case "VBL1":
                        a.trans_script_type = "HBL1";
                        break;
                    case "F55o":
                        a.trans_script_type =
                            "F55"
                }
                if (void 0 !== $jqOpta["trn_" + a.trans_script_type])return b.resolve();
                b = new $jqOpta.FeedRequest("TRN_SCRIPT", {}, b, 99999);
                b.response_type = "script";
                b.feed_type = "trn";
                b.url = $jqOpta.settings.baseUrl + "js/trn/" + a.trans_script_type + ".js";
                $jqOpta.FeedMonitor.requestFeed(b);
                break;
            default:
                $jqOpta.FeedMonitor.storeFeed(a, c)
        }
    })()
};
$jqOpta.FeedMonitor.decodeData = function (a, c) {
    var b = new $jqOpta.Deferred, g, f;
    b.done(function () {
        $jqOpta["bin_" + a.feed_type + "_" + f](g, a, function (b) {
            $jqOpta.FeedMonitor.getTranslationScript(a, b)
        })
    });
    b.fail(function () {
        return $jqOpta.FeedMonitor.failFeed(a, null, "error", c.message)
    });
    if (void 0 !== c.response)return b.reject();
    if (a.url.match(/([A-Za-z0-9\[\]]+)_packed|feedproxy/i)) {
        c = $jqOpta.base64.decode(c.data);
        c = $jqOpta.teajs.decrypt(c, "P!Fgob$*LKDF D)(F IDD&P?/");
        c = c.toString();
        g = new $jqOpta.jDataView(c);
        g._littleEndian = !1;
        f = g.getInt8();
        if (void 0 !== $jqOpta["bin_" + a.feed_type + "_" + f])return b.resolve();
        b = new $jqOpta.FeedRequest("TRN_SCRIPT", {}, b, 99999);
        b.response_type = "script";
        b.feed_type = "bin";
        b.url = $jqOpta.settings.baseUrl + "js/bin/" + a.feed_type + "_" + f + ".js";
        $jqOpta.FeedMonitor.requestFeed(b)
    } else $jqOpta.FeedMonitor.getTranslationScript(a, c)
};
$jqOpta.FeedMonitor.storeFeed = function (a, c) {
    var b, g, f = new $jqOpta.Feed(a, c);
    f.url.match(/^http\:\/\/omoproxy\.leeds\.optadev\.com/) && (g = function (a) {
        a = a.split("&");
        var c = {}, f, g;
        for (g = 0; g < a.length; g += 1)f = a[b].split("="), c[unescape(f[0])] = unescape(f[1]);
        return c
    }, g = g(f.url.split("?")[1]), f.url = g.url);
    if ("script" !== a.response_type) {
        if ($jqOpta.FeedMonitor.feeds.length)for (b = $jqOpta.FeedMonitor.feeds.length - 1; 0 <= b; b -= 1)g = $jqOpta.FeedMonitor.feeds[b], g.url === f.url && $jqOpta.FeedMonitor.feeds.splice(b, 1);
        $jqOpta.FeedMonitor.feeds.push(f)
    }
    a.promise.resolve(c);
    if ($jqOpta.FeedMonitor.pending_feed_requests[a.url] && (f = $jqOpta.FeedMonitor.pending_feed_requests[a.url], delete $jqOpta.FeedMonitor.pending_feed_requests[a.url], f.additional_feed_requests.length))for (b = 0; b < f.additional_feed_requests.length; b += 1)$jqOpta.FeedMonitor.getTranslationScript(f.additional_feed_requests[b], c)
};
$jqOpta.FeedMonitor.failFeed = function (a, c, b, g) {
    var f = new $jqOpta.Feed(a, {error: b || -1, message: g || "Unknown"}), n;
    if ("script" !== a.response_type) {
        if ($jqOpta.FeedMonitor.feeds.length)for (c = $jqOpta.FeedMonitor.feeds.length - 1; 0 <= c; c -= 1)n = $jqOpta.FeedMonitor.feeds[c], n.url === f.url && $jqOpta.FeedMonitor.feeds.splice(c, 1);
        $jqOpta.FeedMonitor.feeds.push(f)
    }
    a.promise.reject({error: b, message: g});
    if ($jqOpta.FeedMonitor.pending_feed_requests[a.url]) {
        f = $jqOpta.FeedMonitor.pending_feed_requests[a.url];
        if (f.additional_feed_requests.length)for (c =
                                                       0; c < f.additional_feed_requests.length; c += 1)f.additional_feed_requests[c].promise.reject({error: b, message: g});
        delete $jqOpta.FeedMonitor.pending_feed_requests[a.url]
    }
};
$jqOpta.Feed = function (a, c) {
    this.url = a.url;
    this.data = c;
    this.last_updated = (new Date).getTime();
    this.last_request = void 0 !== a.last_feed_request ? a.last_feed_request : (new Date).getTime()
};
$jqOpta.trans = {};
$jqOpta.trans.files = {};
$jqOpta.trans.data = {widget: {}, comps: {}, teams: {}, players: {}, venues: {}, officials: {}, managers: {}, countries: {}};
$jqOpta.trans.load = {};
$jqOpta.trans.loaded = {players: {}, player_changes: {}};
$jqOpta.trans.setDefaultRegion = function (a) {
    var c;
    switch (a) {
        case "ar":
            c = "SA";
            break;
        case "ca":
            c = "ES";
            break;
        case "de":
            c = "DE";
            break;
        case "en":
            c = "GB";
            break;
        case "es":
            c = "ES";
            break;
        case "fa":
            c = "IR";
            break;
        case "fr":
            c = "FR";
            break;
        case "id":
            c = "ID";
            break;
        case "it":
            c = "IT";
            break;
        case "ja":
            c = "JP";
            break;
        case "ko":
            c = "KR";
            break;
        case "nl":
            c = "NL";
            break;
        case "pl":
            c = "PL";
            break;
        case "pt":
            c = "PT";
            break;
        case "ru":
            c = "RU";
            break;
        case "th":
            c = "TH";
            break;
        case "tr":
            c = "TR";
            break;
        case "vi":
            c = "VN";
            break;
        case "zh":
            c = "CN"
    }
    return c
};
$jqOpta.trans.load.widget = function (a) {
    var c = new $jqOpta.Deferred;
    $jqOpta.isEmptyObject($jqOpta.trans.data.widget) ? (c.done(function (a) {
        var c = $jqOpta.trans.data;
        a = a.d;
        var f, n, l = {};
        a = a.split("\u00a6");
        for (f = 0; f < a.length; f += 1)n = a[f].split("|"), l[n[0]] = n[1];
        c.widget = l
    }), c.fail(function () {
    }), c.always(a), a = $jqOpta.trans.files["WT_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full] ? {cust_id: $jqOpta.settings.customer_id, trans_id: $jqOpta.settings.translation_id,
        lang_id: $jqOpta.settings.locale.full} : {cust_id: "default", trans_id: 1, lang_id: $jqOpta.settings.locale.full}, c = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_WIDGET, a, c, 99999), $jqOpta.FeedMonitor.requestFeed(c)) : a()
};
$jqOpta.trans.widget = function (a) {
    return $jqOpta.trans.data.widget[a] || a
};
$jqOpta.trans.load.comps = function (a, c, b, g) {
    var f = new $jqOpta.Deferred, n;
    n = "default";
    $jqOpta.trans.files["CP_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full + "_" + a + "_" + c] || (n = "default");
    if (void 0 !== $jqOpta.trans.data.comps[a] && void 0 !== $jqOpta.trans.data.comps[a][c])b(g); else return f.done(function (b) {
        $jqOpta.trans.data.comps[a] = $jqOpta.trans.data.comps[a] || {};
        var f = $jqOpta.trans.data.comps[a];
        b = b.d;
        var g, n, y = {};
        b = b.split("\u00a6");
        for (g = 0; g < b.length; g +=
            1)n = b[g].split("|"), y[n[0]] = new $jqOpta.trans.nameObj("COMP", {full: n[1], "short": n[2], abbr: n[3]});
        f[c] = y
    }), f.fail(function () {
    }), f.always(function () {
        b(g)
    }), n = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_COMP, {cust_id: n, trans_id: $jqOpta.settings.translation_id || 1, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c}, f, 99999), $jqOpta.FeedMonitor.requestFeed(n), f
};
$jqOpta.trans.comp = function (a, c, b, g) {
    return $jqOpta.trans.data.comps[a] && $jqOpta.trans.data.comps[a][c] && $jqOpta.trans.data.comps[a][c][b] ? $jqOpta.trans.data.comps[a][c][b] : new $jqOpta.trans.nameObj("COMP", {full: $jqOpta.trans.widget(g)})
};
$jqOpta.trans.load.teams = function (a, c, b, g, f) {
    var n = new $jqOpta.Deferred, l = "default";
    !$jqOpta.trans.files["TN_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full + "_" + a + "_" + c + "_" + b] && $jqOpta.settings.locale.full && (l = "default");
    void 0 !== $jqOpta.trans.data.teams[a] && void 0 !== $jqOpta.trans.data.teams[a][c] && void 0 !== $jqOpta.trans.data.teams[a][c][b] ? g(f) : (n.done(function (f) {
        $jqOpta.trans.data.teams[a] = $jqOpta.trans.data.teams[a] || {};
        $jqOpta.trans.data.teams[a][c] =
            $jqOpta.trans.data.teams[a][c] || {};
        var g = $jqOpta.trans.data.teams[a][c];
        f = f.d;
        var l, n, w = {};
        f = f.split("\u00a6");
        for (l = 0; l < f.length; l += 1)n = f[l].split("|"), w[n[0]] = {name: n[1]}, n[2] && (w[n[0]]["short"] = n[2]), n[3] && (w[n[0]].abbr = n[3]);
        g[b] = w
    }), n.fail(function () {
    }), n.always(function () {
        g(f)
    }), n = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_TEAM, {cust_id: l, trans_id: $jqOpta.settings.translation_id || 1, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b}, n, 99999), $jqOpta.FeedMonitor.requestFeed(n))
};
$jqOpta.trans.team = function (a, c, b, g, f) {
    return $jqOpta.trans.data.teams[a] && $jqOpta.trans.data.teams[a][c] && $jqOpta.trans.data.teams[a][c][b] && $jqOpta.trans.data.teams[a][c][b][g] ? $jqOpta.trans.data.teams[a][c][b][g] : {name: $jqOpta.trn(f)}
};
$jqOpta.trans.load.players = function (a, c, b, g, f, n) {
    var l = new $jqOpta.Deferred, s = "default", t = function (a) {
        var b, c, f = {};
        a = a.split("\u00a6");
        for (b = 0; b < a.length; b += 1)c = a[b].split("|"), f[c[0]] = {first: c[1] || "", last: c[2] || "", full: "", known: ""}, c[3] && (f[c[0]].known = c[3]), f[c[0]].first && f[c[0]].last ? f[c[0]].full = f[c[0]].first + " " + f[c[0]].last : f[c[0]].last ? f[c[0]].full = f[c[0]].last : f[c[0]].first && (f[c[0]].full = f[c[0]].first);
        return f
    };
    $jqOpta.trans.files["PN_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id +
        "_" + $jqOpta.settings.locale.full + "_" + a + "_" + c + "_" + b + "_" + g] || (s = "default");
    void 0 !== $jqOpta.trans.loaded.players[a] && !0 === $jqOpta.trans.loaded.players[a][g] ? f(g, n) : (l.done(function (b) {
        $jqOpta.trans.data.players[a] = $jqOpta.trans.data.players[a] || {};
        $jqOpta.extend($jqOpta.trans.data.players[a], t(b.d))
    }), l.fail(function () {
    }), l.always(function () {
        $jqOpta.trans.loaded.players[a] = $jqOpta.trans.loaded.players[a] || {};
        $jqOpta.trans.loaded.players[a][g] = !0;
        f(g, n)
    }), c = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_PLAYER,
        {cust_id: s, trans_id: $jqOpta.settings.translation_id || 1, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b, team: g}, l, 99999), $jqOpta.FeedMonitor.requestFeed(c))
};
$jqOpta.trans.load.player_changes = function (a, c, b) {
    var g = new $jqOpta.Deferred;
    g.done(function (b) {
        b = b.d;
        var c, g, s = {};
        b = b.split("\u00a6");
        for (c = 0; c < b.length; c += 1)g = b[c].split("|"), s[g[0]] = {first: g[1] || "", last: g[2] || "", full: "", known: ""}, g[3] && (s[g[0]].known = g[3]), s[g[0]].first && s[g[0]].last ? s[g[0]].full = s[g[0]].first + " " + s[g[0]].last : s[g[0]].last ? s[g[0]].full = s[g[0]].last : s[g[0]].first && (s[g[0]].full = s[g[0]].first);
        $jqOpta.trans.data.players[a] = $jqOpta.trans.data.players[a] || {};
        $jqOpta.extend($jqOpta.trans.data.players[a],
            s)
    });
    g.fail(function () {
    });
    g.always(function () {
        c(b)
    });
    g = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_PLAYER_CHANGES, {cust_id: "default", lang_id: $jqOpta.settings.locale.full, sport_id: a}, g, 300);
    $jqOpta.FeedMonitor.requestFeed(g)
};
$jqOpta.trans.player = function (a, c, b, g, f, n, l) {
    if ($jqOpta.trans.data.players[a] && $jqOpta.trans.data.players[a][g])return $jqOpta.trans.data.players[a][g];
    f = f || "";
    n = n || "";
    a = {is_unknown: !0, first: f, last: n, full: f + " " + n};
    l && (a.known = l);
    return a
};
$jqOpta.trans.load.venues = function (a, c, b, g, f) {
    var n = new $jqOpta.Deferred, l;
    void 0 !== $jqOpta.trans.data.venues[a] && void 0 !== $jqOpta.trans.data.venues[a][c] && void 0 !== $jqOpta.trans.data.venues[a][c][b] ? g(f) : (n.done(function (f) {
        $jqOpta.trans.data.venues[a] = $jqOpta.trans.data.venues[a] || {};
        $jqOpta.trans.data.venues[a][c] = $jqOpta.trans.data.venues[a][c] || {};
        var g = $jqOpta.trans.data.venues[a][c];
        f = f.d;
        var l, n, w = {};
        f = f.split("\u00a6");
        for (l = 0; l < f.length; l += 1)n = f[l].split("|"), w[n[0]] = n[1];
        g[b] = w
    }), n.fail(function () {
    }),
        n.always(function () {
            g(f)
        }), l = $jqOpta.trans.files["VE_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full] ? {cust_id: $jqOpta.settings.customer_id, trans_id: $jqOpta.settings.translation_id, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b} : {cust_id: "default", trans_id: 1, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b}, n = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_VENUE, l, n, 99999), $jqOpta.FeedMonitor.requestFeed(n))
};
$jqOpta.trans.venue = function (a, c, b, g, f) {
    return $jqOpta.trans.data.venues[a] && $jqOpta.trans.data.venues[a][c] && $jqOpta.trans.data.venues[a][c][b] && $jqOpta.trans.data.venues[a][c][b][g] ? $jqOpta.trans.data.venues[a][c][b][g] : $jqOpta.trn(f)
};
$jqOpta.trans.load.officials = function (a, c, b, g, f) {
    var n = new $jqOpta.Deferred, l;
    void 0 !== $jqOpta.trans.data.officials[a] && void 0 !== $jqOpta.trans.data.officials[a][c] && void 0 !== $jqOpta.trans.data.officials[a][c][b] ? g(f) : (n.done(function (f) {
        $jqOpta.trans.data.officials[a] = $jqOpta.trans.data.officials[a] || {};
        $jqOpta.trans.data.officials[a][c] = $jqOpta.trans.data.officials[a][c] || {};
        var g = $jqOpta.trans.data.officials[a][c];
        f = f.d;
        var l, n, w, C = {};
        f = f.split("\u00a6");
        for (l = 0; l < f.length; l += 1)if (w = f[l].split("|"),
            null !== w[1] || void 0 !== w[1])n = void 0 !== w[1] && w[1].match(/^(\S+)\s(.*)/) ? w[1].match(/^(\S+)\s(.*)/).slice(1) : [w[1], ""], C[w[0]] = {first: n[0], last: n[1], full: w[1]};
        g[b] = C
    }), n.fail(function () {
    }), n.always(function () {
        g(f)
    }), l = $jqOpta.trans.files["OF_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full] ? {cust_id: $jqOpta.settings.customer_id, trans_id: $jqOpta.settings.translation_id, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b} : {cust_id: "default",
        trans_id: 1, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b}, n = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_OFFICIAL, l, n, 99999), $jqOpta.FeedMonitor.requestFeed(n))
};
$jqOpta.trans.official = function (a, c, b, g, f) {
    var n = (f || "").match(/^(\S+)\s(.*)/), n = null !== n ? n.slice(1) : ["", f];
    return $jqOpta.trans.data.officials[a] && $jqOpta.trans.data.officials[a][c] && $jqOpta.trans.data.officials[a][c][b] && $jqOpta.trans.data.officials[a][c][b][g] ? $jqOpta.trans.data.officials[a][c][b][g] : {first: n[0] || "", last: n[1] || "", full: f || ""}
};
$jqOpta.trans.load.managers = function (a, c, b, g, f) {
    var n = new $jqOpta.Deferred, l;
    void 0 !== $jqOpta.trans.data.managers[a] && void 0 !== $jqOpta.trans.data.managers[a][c] && void 0 !== $jqOpta.trans.data.managers[a][c][b] ? g(f) : (n.done(function (f) {
        $jqOpta.trans.data.managers[a] = $jqOpta.trans.data.managers[a] || {};
        $jqOpta.trans.data.managers[a][c] = $jqOpta.trans.data.managers[a][c] || {};
        var g = $jqOpta.trans.data.managers[a][c];
        f = f.d;
        var l, n, w = {};
        f = f.split("\u00a6");
        for (l = 0; l < f.length; l += 1)n = f[l].split("|"), w[n[0]] = {first: n[1],
            last: n[2], full: n[1] + " " + n[2]};
        g[b] = w
    }), n.fail(function () {
    }), n.always(function () {
        g(f)
    }), l = $jqOpta.trans.files["MA_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full] ? {cust_id: $jqOpta.settings.customer_id, trans_id: $jqOpta.settings.translation_id, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b} : {cust_id: "default", trans_id: 1, lang_id: $jqOpta.settings.locale.full, sport_id: a, season: c, competition: b}, n = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_MANAGER,
        l, n, 99999), $jqOpta.FeedMonitor.requestFeed(n))
};
$jqOpta.trans.manager = function (a, c, b, g, f) {
    return $jqOpta.trans.data.managers[a] && $jqOpta.trans.data.managers[a][c] && $jqOpta.trans.data.managers[a][c][b] && $jqOpta.trans.data.managers[a][c][b][g] ? $jqOpta.trans.data.managers[a][c][b][g] : {first: f.first || "", last: f.last || "", full: f.full || f.first + " " + f.last}
};
$jqOpta.trans.load.countries = function (a, c) {
    var b = new $jqOpta.Deferred, g;
    $jqOpta.isEmptyObject($jqOpta.trans.data.countries) ? (b.done(function (a) {
        var b = $jqOpta.trans.data;
        a = a.d;
        var c, g, t = {};
        a = a.split("\u00a6");
        for (c = 0; c < a.length; c += 1)g = a[c].split("|"), t[g[0]] = {enName: g[1], name: g[2] || g[1]};
        b.countries = t
    }), b.fail(function () {
    }), b.always(function () {
        a(c)
    }), g = $jqOpta.trans.files["CN_" + $jqOpta.settings.customer_id + "_" + $jqOpta.settings.translation_id + "_" + $jqOpta.settings.locale.full] ? {cust_id: $jqOpta.settings.customer_id,
        trans_id: $jqOpta.settings.translation_id, lang_id: $jqOpta.settings.locale.full} : {cust_id: "default", trans_id: 1, lang_id: $jqOpta.settings.locale.full}, b = new $jqOpta.FeedRequest($jqOpta.FeedRequest.FEED_TRANS_COUNTRY, g, b, 99999), $jqOpta.FeedMonitor.requestFeed(b)) : a(c)
};
$jqOpta.trans.country = function (a, c) {
    return $jqOpta.trans.data.countries[a] || $jqOpta.trn(c)
};
$jqOpta.trans.nameObj = function (a, c) {
    this.type = a;
    this.full = c.full;
    this["short"] = c["short"];
    this.abbr = c.abbr
};
$jqOpta.trans.nameObj.prototype.getName = function (a) {
    switch (this.type) {
        case "COMP":
            switch (a) {
                case "abbr":
                    return this.abbr || this["short"] || this.full;
                case "short":
                    return this["short"] || this.full;
                default:
                    return this.full
            }
    }
};
$jqOpta.utils = {loadModels: function (a) {
    var c = $jqOpta.Deferred(), b, g = 0, f = function () {
        g += 1;
        g >= b && (c.resolve(), "function" === typeof a.success && a.success(g))
    }, n = function (b, f, g) {
        c.reject();
        "function" === typeof a.error && a.error(b, f, g)
    };
    "string" === typeof a && (a = $jqOpta.utils.fixSingle(models));
    a instanceof Array && (a = {models: a});
    b = a.models.length;
    $jqOpta._.each(a.models, function (a) {
        $jqOpta.ajax({url: $jqOpta.settings.baseUrl + "js/model/" + a + ".model.js", dataType: "script", cache: !0}).done(f).fail(n)
    });
    return c
}, findMatch: function (a, c) {
    var b, g, f;
    a = "g" + Number(a);
    c = $jqOpta.utils.fixSingle(c);
    b = c.length;
    for (g = 0; g < b; g += 1)if (f = c[g], f["@attributes"].uID === a)return f
}, tableSort: function (a, c) {
    var b = [], g = {}, f = $jqOpta(a + " table.tablesorter"), n, l = [];
    1 === f.length && (c = void 0 === c ? "desc" : c, n = "asc" === c ? 0 : 1, f.find("thead tr th").each(function (a, c) {
        if ($jqOpta(c).hasClass("opta-sortable")) {
            g['"' + a + '"'] = {sorter: !0};
            var f = $jqOpta(c).html();
            $jqOpta(c).html("<span>" + f + "</span>");
            $jqOpta(c).hasClass("opta-sortable-last-name")
        } else $jqOpta(c).addClass("sorter-false");
        $jqOpta(c).hasClass("opta-sortable-default") && 0 === b.length && (l = [], l.push(a), l.push(n), b.push(l))
    }), f.tablesorter({headers: g, sortInitialOrder: c, sortList: 0 < b.length ? b : void 0}))
}, playAccordion: function (a, c, b, g, f, n, l, s) {
    var t = null !== $jqOpta.readCookie(a);
    $jqOpta(c).each(function () {
        var c = $jqOpta(this).find(b), y = $jqOpta(this).find(g), w = n || "slow", C = a + "-" + c.parent().index(), B = $jqOpta.readCookie(C), D = function () {
            var b = !1;
            $jqOpta.createCookie(a, 1);
            f && $jqOpta(y).find("opta").each(function () {
                var a = $jqOpta(this),
                    f = a.attr("widget"), f = a.attr("sub") ? f + "_" + a.attr("sub") : f, g = function () {
                        y.slideDown(w);
                        c.removeClass("loading");
                        c.addClass("expanded")
                    };
                b = !0;
                $jqOpta.events.subscribe("widget." + f + ".load", g);
                $jqOpta.events.subscribe("widget." + f + ".error", g);
                l && "" === a.attr("width") && a.attr("width", $jqOpta(l).width());
                "false" === a.attr("load") && a.attr("load", "true")
            });
            b ? (c.removeClass("collapsed"), c.addClass("loading"), $jqOpta.widgetStart(_optaParams)) : c.hasClass("expanded") ? (y.slideUp(w), c.removeClass("expanded"), c.addClass("collapsed"),
                $jqOpta.createCookie(C, "-")) : (y.slideDown(w), c.removeClass("collapsed"), c.addClass("expanded"), $jqOpta.createCookie(C, "+"))
        };
        c.click(function (a) {
            a.preventDefault();
            D()
        });
        !0 !== s && ("+" === B || !1 === t && c.hasClass("expanded") ? (w = 0, c.removeClass("expanded"), D(), w = n || "slow") : c.removeClass("expanded"))
    })
}, setAccordionCookies: function (a, c, b) {
    var g = function (a) {
        "-" !== $jqOpta.readCookie(c + "-" + a) && $jqOpta.createCookie(c + "-" + a, "+")
    };
    void 0 !== a && "false" !== a && null === $jqOpta.readCookie(c) && ($jqOpta.createCookie(c, 1),
        "true" === a ? $jqOpta._.each($jqOpta._.range(b), g) : (a = Number(a) - 1, g(a)))
}};
$jqOpta.abbr = function (a, c, b) {
    return void 0 === b ? '<abbr title="' + $jqOpta.trn(a) + '">' + $jqOpta.trn(c) + "</abbr>" : '<abbr title="' + $jqOpta.trn(a) + '" class="' + b + '">' + $jqOpta.trn(c) + "</abbr>"
};
$jqOpta.trn = $jqOpta.trans.widget;
$jqOpta.pad2 = function (a, c) {
    void 0 !== c && 100 > Number(a) && (a = "0" + a);
    10 > Number(a) && (a = "0" + a);
    return a
};
$jqOpta.rtrn = function (a, c, b) {
    var g;
    a = RegExp(a, c);
    for (g in $jqOpta.lang)if ($jqOpta.lang.hasOwnProperty(g) && g.match(a)) {
        b = $jqOpta.lang[g];
        break
    }
    return b
};
$jqOpta.createCookie = function (a, c, b, g) {
    var f = new Date;
    b ? f.setTime(f.getTime() - 1E4) : g ? f.setTime(f.getTime() + 1E3 * Number(g)) : f.setTime(f.getTime() + 72E5);
    b = "; expires=" + f.toGMTString() + "; path=/";
    document.cookie = a + "=" + c + b
};
$jqOpta.readCookie = function (a) {
    var c = document.cookie.split(";"), b, g;
    a += "=";
    for (g = 0; g < c.length; g += 1) {
        for (b = c[g]; " " === b.charAt(0);)b = b.substring(1, b.length);
        if (0 === b.indexOf(a))return b.substring(a.length, b.length)
    }
    return null
};
$jqOpta.readCookieArray = function (a) {
    var c = document.cookie.split(";"), b, g = [], f, n = 0;
    for (f = 0; f < c.length; f += 1) {
        for (b = c[f]; " " === b.charAt(0);)b = b.substring(1, b.length);
        0 === b.indexOf(a) && (b = b.substring(a.length + 1, b.length), g[n] = b.split("]="), n += 1)
    }
    return g
};
$jqOpta.readCookieArrayObj = function (a) {
    a = $jqOpta.readCookieArray(a);
    var c = {};
    $jqOpta._.each(a, function (a) {
        c[a[0]] = a[1]
    });
    return a.length ? c : void 0
};
$jqOpta.cookieIsSet = function (a, c) {
    return $jqOpta.readCookie(a) === c ? !0 : !1
};
$jqOpta.getRandy = function (a) {
    void 0 === a && (a = "10000000000");
    return Math.ceil(Math.random() * a)
};
$jqOpta.rndNum = function (a) {
    var c, b = "", g = /(\d+)(\d{3})/;
    if (void 0 === a || !$jqOpta.isNum(Number(a)))return 0;
    a = String(a).split(".");
    c = a[0];
    1 < a.length && (b = "en" === $jqOpta.settings.language ? "." : ",", b += a[1]);
    for (; g.test(c);)c = "en" === $jqOpta.settings.language ? c.replace(g, "$1,$2") : c.replace(g, "$1.$2");
    return c + b
};
$jqOpta.isNum = function (a) {
    return!isNaN(parseFloat(a)) && isFinite(a)
};
$jqOpta.cmToFtIn = function (a) {
    a = 0.032808399 * parseInt(a, 10);
    return{ft: Math.floor(a), "in": Math.floor(a % 1 * 12)}
};
$jqOpta.cmToM = function (a) {
    return Math.round(parseInt(a, 10) / 100 * 100) / 100
};
$jqOpta.kgToLbs = function (a) {
    return Math.round(2.20462262 * parseInt(a, 10))
};
$jqOpta.intval = function (a, c) {
    var b;
    b = typeof a;
    return"boolean" === b ? +a : "string" === b ? (b = parseInt(a, c || 10), isNaN(b) || !isFinite(b) ? 0 : b) : "number" === b && isFinite(a) ? a || 0 : 0
};
$jqOpta.loadError = function (a, c) {
    var b = c || {}, g = b.title || $jqOpta.trn("Data is not available yet!"), f = b.message || $jqOpta.trn("Data is not available yet!");
    $jqOpta.displayWidget(a, '<h2 class="opta-error"><span>' + g + '</span></h2><div class="opta-error ' + (b.divClass || a.data.widget) + '"><p class="opta-widget-error">' + f + "</p></div>", b.first_time || !0, "errorMsgDialog");
    $jqOpta.events.trigger.error(a, "load_fail", "Widget failed to load")
};
$jqOpta.cloneObj = function (a) {
    var c, b;
    if (null === a || "object" !== typeof a)return a;
    c = a.constructor();
    for (b in a)a.hasOwnProperty(b) && (c[b] = a[b]);
    return c
};
$jqOpta.imageDims = function (a, c) {
    void 0 !== c && (/x/g.test(a) ? "small" === c ? a = "20x30" : "medium" === c ? a = "40x60" : "large" === c && (a = "103x155") : "small" === c ? a = "20" : "medium" === c ? a = "65" : "large" === c && (a = "150"));
    return a
};
$jqOpta.calcTime = function (a, c) {
    var b, g = Number(a);
    switch (c) {
        case "1":
        case "FirstHalf":
            b = 45 < g ? "45+" + (g - 45).toString() : a;
            break;
        case "2":
        case "SecondHalf":
            b = 90 < g ? "90+" + (g - 90).toString() : a;
            break;
        case "3":
        case "ExtraFirstHalf":
            b = 105 < g ? "105+" + (g - 105).toString() : a;
            break;
        case "4":
        case "ExtraSecondHalf":
            b = 120 < g ? "120+" + (g - 120).toString() : a;
            break;
        case "5":
        case "ShootOut":
            b = a
    }
    return b
};
$jqOpta.img = function (a, c, b, g, f) {
    var n = "https:" === window.location.protocol ? "https://s3-eu-west-1.amazonaws.com/widgets-images/" : "http://widgets-images.s3.amazonaws.com/";
    switch (c) {
        case "flags":
            return n + "football/flags/countries_" + g + "/" + f + ".png";
        case "icons":
            return n + a + "/icons/" + b + "_" + g + "/" + f + ".png#id=" + f;
        default:
            return $jqOpta.settings.imageUrl + "&sport=" + a + "&entity=" + c + "&description=" + b + "&dimensions=" + g + "&id=" + f
    }
};
$jqOpta.utils.isRetina = function () {
    void 0 === $jqOpta.is_retina && (1 < window.devicePixelRatio ? $jqOpta.is_retina = !0 : window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches ? $jqOpta.is_retina = !0 : $jqOpta.is_retina = !1);
    return $jqOpta.is_retina
};
$jqOpta.image = function (a) {
    var c = function (b) {
        b = (b || "").toString();
        switch (a.type) {
            case "team":
                switch (b) {
                    case "20":
                        return 65;
                    case "65":
                        return 150;
                    case "150":
                        if ($jqOpta._.contains([22, 87], Number(a.widget.data.competition)))return 300
                }
                break;
            case "player":
                switch (b) {
                    case "20x30":
                        return"40x60";
                    case "40x60":
                        return"103x155"
                }
        }
        return b
    };
    a.is_retina = !0 === $jqOpta.settings.use_retina && $jqOpta.utils.isRetina() && void 0 === a.widget.data.image_size;
    a.size = $jqOpta.imageDims(a.size, a.widget.data.image_size);
    a.classes =
        a.classes || "";
    a.is_retina && !0 !== a.no_retina && (a.original_size = a.size, a.size = c(a.original_size), a.classes += " image-" + a.type + "-" + a.original_size);
    a.src = function () {
        var b = "https:" === window.location.protocol ? "https://s3-eu-west-1.amazonaws.com/widgets-images/" : "http://widgets-images.s3.amazonaws.com/";
        switch (a.type) {
            case "flags":
                return b + "football/flags/countries_" + dims + "/" + a.id + ".png";
            case "icons":
                return sport + "/icons/" + description + "_" + dims + "/" + a.id + ".png#id=" + a.id;
            default:
                if (!a.description)switch (a.type) {
                    case "team":
                        a.description =
                            "badges"
                }
                return $jqOpta.settings.imageUrl + "&sport=" + (a.sport || a.widget.data.sport) + "&entity=" + a.type + "&description=" + a.description + "&dimensions=" + a.size + "&id=" + a.id
        }
    }();
    a.toString = function () {
        h = "";
        h = '<img src="' + a.src + '"';
        a.dom_id && (h += ' id="' + a.dom_id + '"');
        a.alt && (h += ' alt="' + a.alt + '"');
        a.title && (h += ' title="' + a.title + '"');
        a.classes && "" !== a.classes && (h += ' class="' + a.classes + '"');
        return h += ">"
    };
    return a
};
$jqOpta.imgError = function () {
};
$jqOpta.enableLinkTracking = function (a) {
    var c = function (a) {
        a = a.split("&");
        var c = {}, f, n;
        for (n = 0; n < a.length; n += 1)f = a[n].split("="), c[decodeURI(f[0])] = decodeURI(f[1]);
        return c
    };
    $jqOpta("#opta-widget-idx-" + a.id + " a.opta-event-link").on("click", function () {
        var b = $jqOpta(this), g = b.attr("href").split("?"), g = c(g[1]);
        $jqOpta.trackGAEvent({sport: a.data.sport, widget: a.data.widget, action: b.data("type") + "_link", comp: g.competition, season: g.season, extra: [
            {key: "match", value: g.match}
        ]});
        $jqOpta.doTimeout(300, function () {
            window.location =
                b.attr("href")
        });
        return!1
    })
};
$jqOpta.dumpTags = function () {
    var a, c = "";
    for (a = 0; a < $jqOpta.optaTags.length; a += 1)c += $jqOpta.optaTags[a].tag + "\n\n";
    return c
};
$jqOpta.getSportId = function (a) {
    switch (a) {
        case "football":
            return 1;
        case "knockout":
            return 1;
        case "rugby":
            return 2;
        case "cricket":
            return 3;
        case "golf":
            return 4;
        case "rugbyleague":
            return 5;
        case "motorsport":
            return 6;
        case "basketball":
            return 7;
        case "tennis":
            return 8;
        case "futsal":
            return 9;
        case "handball":
            return 11;
        case "icehockey":
            return 14;
        case "volleyball":
            return 17;
        case "cycling":
            return 18;
        case "mixed":
            return 19;
        case "afl":
            return 20;
        case "americanfootball":
            return 51;
        case "baseball":
            return 52;
        default:
            return!1
    }
};
$jqOpta.getPlayers = function (a, c, b, g, f) {
    var n, l = [], s;
    new $jqOpta.Deferred;
    g instanceof Array || (g = [g]);
    for (n = 0; n < g.length; n += 1)s = {sport: a, competition: c, season: b, team: g[n]}, l.push({feedType: "FEED_PLAYERS", feedData: "", feedParams: s, feedLife: 3600});
    $jqOpta.getFeeds(function () {
        var a = {}, b, c;
        for (b = 0; b < $jqOpta.feedData[99].length; b += 1)for (c = 0; c < $jqOpta.feedData[99][b].teams.length; c += 1)a = $jqOpta.extend(a, $jqOpta.feedData[99][b].teams[c].players);
        f(a)
    }, l, 99)
};
$jqOpta.getTeams = function (a, c, b, g) {
    var f, n = [], l;
    new $jqOpta.Deferred;
    c instanceof Array || (c = [c]);
    for (f = 0; f < c.length; f += 1)l = {sport: a, competition: c[f], season: b}, n.push({feedType: "FEED_TEAM", feedData: "", feedParams: l, feedLife: 9999});
    $jqOpta.getFeeds(function () {
        var a = {}, b, c, f, l;
        for (b = 0; b < $jqOpta.feedData[98].length; b += 1)for (f = $jqOpta.feedData[98][b].d, f = f.split("\u00a6"), c = 0; c < f.length; c += 1)l = f[c].split("|"), a[l[0]] = {name: l[1]}, l[2] && (a[l[0]]["short"] = l[2]), l[3] && (a[l[0]].abbr = l[3]);
        g(a)
    }, n, 98)
};
$jqOpta.getPlayersNew = function (a, c, b, g, f) {
    new $jqOpta.Deferred;
    $jqOpta.getFeeds(function () {
        var a = {}, b, c, g, v;
        for (b = 0; b < $jqOpta.feedData[97].length; b += 1)for (g = $jqOpta.feedData[97][b].d, g = g.split("\u00a6"), c = 0; c < g.length; c += 1)v = g[c].split("|"), a[v[0]] = {first: v[1], last: v[2]}, v[3] && (a[v[0]]["short"] = v[3]), v[4] && (a[v[0]].known = v[4]);
        f(a)
    }, [
        {feedType: "FEED_PLAYER", feedData: "", feedParams: {sport: a, competition: c, season: b, team: g}, feedLife: 9999}
    ], 97)
};
$jqOpta.isRTL = function () {
    return $jqOpta.settings.locale.rtl
};
$jqOpta.utils.binary = {};
$jqOpta.utils.binary.intToDate = function (a) {
    return new Date(Number(a + "000"))
};
$jqOpta.utils.dateFromIso = function (a, c) {
    var b = new Date(a), g, f, n;
    void 0 !== c && (b.add(c + $jqOpta.gmtOffset).hours(), b.add(b.getTimezoneOffset()).minutes());
    if (!isNaN(b))return b;
    f = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/.exec(a) || [];
    if (f[1]) {
        b = f[1].split(/\D/);
        g = 0;
        for (n = b.length; g < n; g += 1)b[g] = parseInt(b[g], 10) || 0;
        b[1] -= 1;
        b = new Date(Date.UTC.apply(Date, b));
        if (!b.getDate())return new Date(NaN);
        f[5] && (g = 60 * parseInt(f[5], 10), f[6] && (g += parseInt(f[6], 10)), "+" === f[4] && (g *= -1), g && b.setUTCMinutes(b.getUTCMinutes() +
            g), void 0 !== c && (b.add(c + $jqOpta.gmtOffset).hours(), b.add(b.getTimezoneOffset()).minutes()));
        return b
    }
    return new Date(NaN)
};
$jqOpta.utils.nth = function (a, c) {
    var b = a.toString(), g, f = function (a) {
        return void 0 === c ? $jqOpta.trn("nth (" + a + ")") : "<" + c + ">" + $jqOpta.trn("nth (" + a + ")") + "</" + c + ">"
    };
    if ("en" === $jqOpta.settings.language) {
        if (1 < b.length) {
            g = b.substr(-2);
            switch (g) {
                case "11":
                case "12":
                case "13":
                    return b + f("th")
            }
            g = b.substr(-1)
        } else g = b;
        switch (g) {
            case "1":
                return b + f("st");
            case "2":
                return b + f("nd");
            case "3":
                return b + f("rd");
            default:
                return b + f("th")
        }
    }
    switch (b) {
        case "1":
            return b + f("st");
        case "2":
            return b + f("nd");
        case "3":
            return"3" +
                f("rd");
        default:
            return b + f("th")
    }
};
$jqOpta.utils.pad = function (a, c) {
    var b, g;
    a += "";
    g = c - a.length;
    for (b = 0; b < g; b += 1)a = "0" + a;
    return a
};
$jqOpta.utils.fixSingle = function (a) {
    if (void 0 === a)return[];
    a instanceof Array || (a = [a]);
    return a
};
$jqOpta.utils.translateText = function (a) {
    var c, b = {};
    for (c in a)a.hasOwnProperty(c) && (b[c] = a[c]instanceof Array ? $jqOpta.abbr(a[c][0], a[c][1], a[c][2]) : $jqOpta.trn(a[c]));
    return b
};
$jqOpta.externalLink = function (a, c, b, g, f, n, l, s, t, v) {
    var y = "", w = function (b, c) {
        "" !== c && void 0 !== c && (y = "" === y ? -1 < a.indexOf("?") ? y + "&" : y + "?" : y + "&", y += b + "=" + c)
    };
    if (!a)return b;
    w("season", g);
    w("competition", f);
    w("match", n);
    w("team", l);
    w("player", s);
    "" !== c && (c += " ");
    !1 !== t && (c += "external-link");
    g = '<a href="' + a + y + '"';
    "" !== c && (g += ' class="' + c + '"');
    v && (g += ' title="' + v + '"');
    return g + (">" + b + "</a>")
};
$jqOpta.permittedWidget = function (a, c, b, g) {
    return void 0 !== $jqOpta.permittedWidgets[a] && void 0 !== $jqOpta.permittedWidgets[a][c] && (!0 === $jqOpta.permittedWidgets[a][c][b] || $jqOpta.permittedWidgets[a][c][b]instanceof Object && !0 === $jqOpta.permittedWidgets[a][c][b][g])
};
$jqOpta.utils.tracabStatFix = function (a, c) {
    switch (c.charAt(0)) {
        case "i":
        case "f":
            "string" === typeof a && (a = Number(a.replace(",", ".")));
            break;
        case "b":
            "boolean" !== typeof a && (a = "true" === a ? !0 : !1)
    }
    return a
};
$jqOpta.tabby = function (a, c, b, g) {
    $jqOpta(a).each(function () {
        var a = $jqOpta(this).find(c), n = $jqOpta(this).find(b);
        a.length === n.length && a.each(function (b) {
            var c = $jqOpta(this);
            c.click(function (t) {
                $jqOpta.events.trigger.tabby(this, g);
                t.preventDefault();
                a.removeClass("selected");
                c.addClass("selected");
                n.removeClass("selected");
                $jqOpta(n[b]).addClass("selected");
                n.hide();
                $jqOpta(n[b]).show()
            });
            0 === b && c.click()
        })
    })
};
$jqOpta.actRadio = function (a, c, b, g) {
    $jqOpta(c).each(function () {
        var f = $jqOpta(this).find('input[type="radio"]'), n = c.split(" "), l = a + "-" + b + "-" + n[0].substring(1), s = $jqOpta.readCookie(l), t = [];
        f.each(function () {
            var a = this.value;
            t.push(a);
            null === s && $jqOpta(this).attr("checked") && (s = a);
            $jqOpta(this).click(function () {
                $jqOpta.events.trigger.radioTab(this, g);
                $jqOpta._.each(t, function (a) {
                    $jqOpta(c).find("." + a).hide()
                });
                $jqOpta(c + " ." + a).show();
                $jqOpta.createCookie(l, a)
            })
        });
        f.each(function () {
            this.value === s && this.click()
        })
    })
};
$jqOpta.utils.widthFromString = function (a) {
    return void 0 === a || void 0 === a.length || 2 > a.length ? 0 : Number(a.substr(0, a.length - 2))
};
$jqOpta.utils.trimSplit = function (a, c) {
    var b = [];
    void 0 !== a && $jqOpta._.each(a.split(c), function (a) {
        b.push($jqOpta.trim(a))
    });
    return b
};
(function (a) {
    a.binary = {tsToDate: function (a) {
        a = new Date(1E3 * a);
        return{locale: a, utc: new Date(a.getTime() + 6E4 * a.getTimezoneOffset())}
    }, readString: function (a) {
        for (var b = "", g; ;) {
            g = a.getChar();
            if (0 === g.charCodeAt(0))break;
            b += g
        }
        return decodeURIComponent(escape(b))
    }, getPlayerPosition: function (a, b) {
        switch (a) {
            case 1:
                return"Goalkeeper";
            case 2:
                return"Defender";
            case 3:
                return"Midfielder";
            case 4:
                return"F9" === b ? "Striker" : "Forward";
            case 5:
                return"Substitute";
            default:
                return a
        }
    }, getMatchStatus: function (a) {
        switch (a) {
            case 0:
                return"Abandoned";
            case 1:
                return"Postponed";
            case 2:
                return"PreMatch";
            case 3:
                return"Live";
            case 4:
                return"FullTime";
            default:
                return a
        }
    }, getGameState: function (a) {
        switch (a) {
            case 1:
                return"PreMatch";
            case 4:
                return"First Half";
            case 5:
                return"Half Time";
            case 6:
                return"Second Half";
            case 7:
                return"Extra Time";
            case 8:
                return"Extra First Half";
            case 9:
                return"Extra Half Time";
            case 10:
                return"Extra Second Half";
            case 11:
                return"Full Time";
            case 12:
                return"Penalty Shootout";
            case 13:
                return"PostMatch";
            case 14:
                return"Abandoned";
            default:
                return a
        }
    },
        getEventPeriod: function (a) {
            switch (a) {
                case 15:
                    return"PreMatch";
                case 1:
                    return"FirstHalf";
                case 10:
                    return"HalfTime";
                case 2:
                    return"SecondHalf";
                case 11:
                    return"SecondHalf";
                case 3:
                    return"ExtraFirstHalf";
                case 12:
                    return"ExtraHalfTime";
                case 4:
                    return"ExtraSecondHalf";
                case 13:
                    return"ExtraSecondHalf";
                case 5:
                    return"ShootOut";
                case 14:
                    return"FullTime";
                case 16:
                    return"PreMatch";
                default:
                    return a
            }
        }, getMatchPeriod: function (a) {
            switch (a) {
                case 1:
                    return"FirstHalf";
                case 2:
                    return"SecondHalf";
                case 3:
                    return"ExtraFirstHalf";
                case 4:
                    return"ExtraSecondHalf";
                case 5:
                    return"ShootOut";
                default:
                    return a
            }
        }, getQualifier: function (a) {
            switch (a) {
                case 10:
                    return"Hand";
                case 13:
                    return"Foul";
                case 31:
                    return"Yellow";
                case 32:
                    return"SecondYellow";
                case 33:
                    return"StraightRed";
                case 34:
                    return"Referee abuse";
                case 35:
                    return"Argument";
                case 36:
                    return"Fight";
                case 37:
                    return"Time wasting";
                case 39:
                    return"Crowd interaction";
                case 40:
                    return"Other";
                case 41:
                    return"Injury";
                case 42:
                    return"Tactical";
                case 91:
                    return"Dive";
                case 93:
                    return"Dive";
                case 132:
                    return"Dive";
                case 165:
                    return"Professional foul";
                case 171:
                    return"Rescinded Card";
                case 243:
                    return"Unsporting behaviour";
                default:
                    return a
            }
        }, getGroup: function (a) {
            switch (a) {
                case 1:
                    return"A";
                case 2:
                    return"B";
                case 3:
                    return"C";
                case 4:
                    return"D";
                case 5:
                    return"E";
                case 6:
                    return"F";
                case 7:
                    return"G";
                case 8:
                    return"H";
                case 9:
                    return"1";
                case 10:
                    return"2";
                case 11:
                    return"3";
                case 12:
                    return"4";
                case 13:
                    return"5";
                case 14:
                    return"6";
                case 15:
                    return"7";
                case 16:
                    return"8";
                case 17:
                    return"9";
                case 18:
                    return"10";
                case 19:
                    return"East";
                case 20:
                    return"West";
                case 21:
                    return"11";
                case 22:
                    return"12";
                case 23:
                    return"I";
                case 25:
                    return"J";
                case 26:
                    return"K";
                case 27:
                    return"L";
                default:
                    return a
            }
        }, getCoachType: function (a) {
            switch (a) {
                case 1:
                    return"Manager";
                case 2:
                    return"Assistant Manager";
                default:
                    return a
            }
        }}
})($jqOpta);
$jqOpta.checkPermissions = function () {
    var a, c;
    console.info("Checking " + window.location.hostname);
    for (a = 0; a < $jqOpta.optaTags.length; a += 1)c = $jqOpta.optaTags[a].data.sport + " " + $jqOpta.optaTags[a].data.widget + "(C:" + $jqOpta.optaTags[a].data.competition + ")", $jqOpta.optaTags[a].permitted ? console.info("OK: " + c) : console.error("DENIED: " + c);
    $jqOpta.dmok ? console.info("OK: Website permitted to use widgets.") : console.error("DENIED: Website not permitted to use widgets.");
    return $jqOpta.settings.custID
};
$jqOpta.callbacks = {};
$jqOpta.callbacks.tooltip = function (a, c, b) {
    var g, f = c.widget;
    void 0 !== c.sub && (f += "_" + c.sub);
    if (void 0 === _optaParams.callbackSettings || void 0 === _optaParams.callbackSettings.tooltip || -1 < $jqOpta.inArray(f, _optaParams.callbackSettings.tooltip))0 === $jqOpta("#opta-widget-idx-" + b + " div.opta-tooltip").length ? (g = $jqOpta("<div></div>").addClass("opta-tooltip").addClass("opta-tooltip-" + f), $jqOpta("#opta-widget-idx-" + b).append(g)) : g = $jqOpta("#opta-widget-idx-" + b + " div.opta-tooltip").hide(), $jqOpta("#opta-widget-idx-" +
        b + " .jqtip").each(function () {
            var a = $jqOpta(this), b;
            void 0 === a.data("title") ? (b = a.attr("title"), a.attr("title", ""), a.data("title", b)) : b = a.data("title");
            a.hover(function (c) {
                var t;
                t = b.split(": ");
                var v;
                2 === t.length ? v = "<span>" + t[0] + ":</span> " + t[1] : "teamranking" === f ? (v = "<span>" + t[0] + "</span>", v += t[1]) : "bettingteamstats" === f || "bettingheadtohead" === f ? (t = b.split(":"), v = 2 === t.length ? t[1].substring(3) + "</br />" + t[0] + ":" + t[1].substring(0, 2) : t[0]) : v = t[0];
                a.css({cursor: "pointer"});
                g.html(v).show();
                t = g.width();
                t = Math.min(Math.max(10, c.clientX - t / 2), $jqOpta(window).width() - (t + 30));
                g.css({top: c.clientY + 18, left: t})
            }, function () {
                g.hide()
            })
        })
};
$jqOpta.events.trigger = {load: function (a) {
    $jqOpta.events.publish("widget." + a.data.opta_widget + ".load", {id: a.id, data: a.data})
}, refresh: function (a) {
    $jqOpta.events.publish("widget." + a.data.opta_widget + ".refresh", {id: a.id, data: a.data})
}, expansion: function (a, c, b) {
    $jqOpta.events.publish("widget." + c.data.opta_widget + ".expansion", {id: c.id, data: $jqOpta.extend(c.data, b), expansion: {action: a, info: b}})
}, expansiondone: function (a, c, b) {
    $jqOpta.events.publish("widget." + c.data.opta_widget + ".expansiondone", {id: c.id,
        data: $jqOpta.extend(c.data, b), expansion: {action: a, info: b}})
}, tab: function (a, c, b) {
    var g = c.data;
    a = $jqOpta(a).find("a");
    a = {id: a.attr("href").substr(1), name: a.text(), idx: b};
    $jqOpta.events.publish("widget." + c.data.opta_widget + ".tab", {id: c.id, data: g, tab: a})
}, dropdown: function (a, c, b, g, f) {
    c = {id: a.id, data: a.data, select_id: c, option: {value: b, text: g}};
    f && (c.extra = f);
    $jqOpta.events.publish("widget." + a.data.opta_widget + ".dropdown", c)
}, click: function (a, c, b) {
    c = {id: a.id, data: a.data, type: c};
    b && (c.extra = b);
    $jqOpta.events.publish("widget." +
        a.data.opta_widget + ".click", c)
}, error: function (a, c, b, g, f) {
    $jqOpta.events.publish("widget." + a.data.opta_widget + ".error", {id: a.id, type: c, message: b, data: $jqOpta.extend(a.data, g), extra: f || {}})
}, tabby: function (a, c) {
    var b = c.data, g;
    a = $jqOpta(a);
    g = {id: a.attr("href").substr(1), name: a.text()};
    $jqOpta.events.publish("widget." + c.data.opta_widget + ".tab", {id: c.id, data: b, tab: g})
}, radioTab: function (a, c) {
    var b = c.data, g;
    a = $jqOpta(a);
    g = {id: a.val(), name: a.attr("name")};
    $jqOpta.events.publish("widget." + c.data.opta_widget +
        ".tab", {id: c.id, data: b, tab: g})
}, redrawMe: function (a) {
    $jqOpta.events.publish("widget." + a + ".redrawme", {widget: a})
}};
$jqOpta.Analytics = function () {
    this.gaq = {};
    this.init()
};
$jqOpta.Analytics.prototype.init = function () {
    var a = this;
    !0 !== $jqOpta.settings.suppressAnalytics && void 0 === window._gat ? ($jqOpta.ajax({cache: !0, url: ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", dataType: "script", success: function () {
        a.setupGaTracking()
    }}), this.initTrackers()) : !0 !== $jqOpta.settings.suppressAnalytics && (a.setupGaTracking(), this.initTrackers())
};
$jqOpta.Analytics.prototype.setupGaTracking = function () {
    var a;
    if (void 0 !== window._gat) {
        if (a = window._gat._createTracker("UA-31431448-1", "OptaWidgets"))a._setAllowLinker(!0), a._setCustomVar(1, "custID", $jqOpta.settings.custID, 1), a._setSampleRate(10);
        this.gaq.tracker = a
    }
};
$jqOpta.Analytics.prototype.trackGAPageView = function (a) {
    this.gaq.tracker && ("string" === typeof a && (a = {url: a}), this.gaq.tracker._trackPageview(a.url), a.start && this.gaq.tracker._trackTiming(a.url, a.category, a.type, (new Date).getTime() - a.start, $jqOpta.settings.custID, 5))
};
$jqOpta.Analytics.prototype.trackGAEvent = function (a) {
    if (this.gaq.tracker) {
        if (!(a instanceof Object) | !a.category || !a.action)throw"Invalid GA Event Tracking data";
        this.gaq.tracker._trackEvent(a.category, a.action, a.label, a.value, a.noninteraction || !0)
    }
};
$jqOpta.Analytics.prototype.initTrackers = function () {
    var a = this;
    $jqOpta.events.subscribe("widget.*.load", function (c, b) {
        a.trackGAPageView("/" + c.data.sport + "/" + c.data.opta_widget + "/" + (c.data.competition || c.data.competition_p1 || c.data.competition1 || c.data.competition_p2 || c.data.competition2) + "/" + (c.data.season || c.data.season_p1 || c.data.season1 || c.data.season_p2 || c.data.season2) + "/" + ("true" === c.data.live ? "setlive" : "notsetlive") + "/")
    });
    $jqOpta.events.subscribe("widget.*.expansion", function (c, b) {
        a.trackGAEvent({category: b.topic,
            action: c.expansion.action, label: c.data.sport})
    });
    $jqOpta.events.subscribe("widget.*.tab", function (c, b) {
        a.trackGAEvent({category: b.topic, action: c.tab.id, label: c.data.sport})
    })
};
(function () {
    var a = this, c = a._, b = {}, g = Array.prototype, f = Object.prototype, n = g.push, l = g.slice, s = g.concat, t = f.toString, v = f.hasOwnProperty, y = g.forEach, w = g.map, C = g.reduce, B = g.reduceRight, D = g.filter, m = g.every, r = g.some, q = g.indexOf, E = g.lastIndexOf, f = Array.isArray, G = Object.keys, z = Function.prototype.bind, e = function (a) {
        if (a instanceof e)return a;
        if (!(this instanceof e))return new e(a);
        this._wrapped = a
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = e), exports._ =
        e) : a._ = e;
    e.VERSION = "1.4.4";
    var x = e.each = e.forEach = function (a, c, f) {
        if (null != a)if (y && a.forEach === y)a.forEach(c, f); else if (a.length === +a.length)for (var g = 0, l = a.length; g < l && c.call(f, a[g], g, a) !== b; g++); else for (g in a)if (e.has(a, g) && c.call(f, a[g], g, a) === b)break
    };
    e.map = e.collect = function (a, b, c) {
        var e = [];
        if (null == a)return e;
        if (w && a.map === w)return a.map(b, c);
        x(a, function (a, f, g) {
            e[e.length] = b.call(c, a, f, g)
        });
        return e
    };
    e.reduce = e.foldl = e.inject = function (a, b, c, f) {
        var g = 2 < arguments.length;
        null == a && (a = []);
        if (C &&
            a.reduce === C)return f && (b = e.bind(b, f)), g ? a.reduce(b, c) : a.reduce(b);
        x(a, function (a, e, u) {
            g ? c = b.call(f, c, a, e, u) : (c = a, g = !0)
        });
        if (!g)throw new TypeError("Reduce of empty array with no initial value");
        return c
    };
    e.reduceRight = e.foldr = function (a, b, c, f) {
        var g = 2 < arguments.length;
        null == a && (a = []);
        if (B && a.reduceRight === B)return f && (b = e.bind(b, f)), g ? a.reduceRight(b, c) : a.reduceRight(b);
        var l = a.length;
        if (l !== +l)var m = e.keys(a), l = m.length;
        x(a, function (e, n, q) {
            n = m ? m[--l] : --l;
            g ? c = b.call(f, c, a[n], n, q) : (c = a[n], g = !0)
        });
        if (!g)throw new TypeError("Reduce of empty array with no initial value");
        return c
    };
    e.find = e.detect = function (a, b, c) {
        var e;
        H(a, function (a, f, g) {
            if (b.call(c, a, f, g))return e = a, !0
        });
        return e
    };
    e.filter = e.select = function (a, b, c) {
        var e = [];
        if (null == a)return e;
        if (D && a.filter === D)return a.filter(b, c);
        x(a, function (a, f, g) {
            b.call(c, a, f, g) && (e[e.length] = a)
        });
        return e
    };
    e.reject = function (a, b, c) {
        return e.filter(a, function (a, e, f) {
            return!b.call(c, a, e, f)
        }, c)
    };
    e.every = e.all = function (a, c, f) {
        c || (c = e.identity);
        var g = !0;
        if (null ==
            a)return g;
        if (m && a.every === m)return a.every(c, f);
        x(a, function (a, e, l) {
            if (!(g = g && c.call(f, a, e, l)))return b
        });
        return!!g
    };
    var H = e.some = e.any = function (a, c, f) {
        c || (c = e.identity);
        var g = !1;
        if (null == a)return g;
        if (r && a.some === r)return a.some(c, f);
        x(a, function (a, e, l) {
            if (g || (g = c.call(f, a, e, l)))return b
        });
        return!!g
    };
    e.contains = e.include = function (a, b) {
        return null == a ? !1 : q && a.indexOf === q ? -1 != a.indexOf(b) : H(a, function (a) {
            return a === b
        })
    };
    e.invoke = function (a, b) {
        var c = l.call(arguments, 2), f = e.isFunction(b);
        return e.map(a,
            function (a) {
                return(f ? b : a[b]).apply(a, c)
            })
    };
    e.pluck = function (a, b) {
        return e.map(a, function (a) {
            return a[b]
        })
    };
    e.where = function (a, b, c) {
        return e.isEmpty(b) ? c ? null : [] : e[c ? "find" : "filter"](a, function (a) {
            for (var c in b)if (b[c] !== a[c])return!1;
            return!0
        })
    };
    e.findWhere = function (a, b) {
        return e.where(a, b, !0)
    };
    e.max = function (a, b, c) {
        if (!b && e.isArray(a) && a[0] === +a[0] && 65535 > a.length)return Math.max.apply(Math, a);
        if (!b && e.isEmpty(a))return-Infinity;
        var f = {computed: -Infinity, value: -Infinity};
        x(a, function (a, e, g) {
            e = b ?
                b.call(c, a, e, g) : a;
            e >= f.computed && (f = {value: a, computed: e})
        });
        return f.value
    };
    e.min = function (a, b, c) {
        if (!b && e.isArray(a) && a[0] === +a[0] && 65535 > a.length)return Math.min.apply(Math, a);
        if (!b && e.isEmpty(a))return Infinity;
        var f = {computed: Infinity, value: Infinity};
        x(a, function (a, e, g) {
            e = b ? b.call(c, a, e, g) : a;
            e < f.computed && (f = {value: a, computed: e})
        });
        return f.value
    };
    e.shuffle = function (a) {
        var b, c = 0, f = [];
        x(a, function (a) {
            b = e.random(c++);
            f[c - 1] = f[b];
            f[b] = a
        });
        return f
    };
    var O = function (a) {
        return e.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    e.sortBy = function (a, b, c) {
        var f = O(b);
        return e.pluck(e.map(a,function (a, b, e) {
            return{value: a, index: b, criteria: f.call(c, a, b, e)}
        }).sort(function (a, b) {
            var c = a.criteria, e = b.criteria;
            if (c !== e) {
                if (c > e || void 0 === c)return 1;
                if (c < e || void 0 === e)return-1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var T = function (a, b, c, f) {
        var g = {}, l = O(b || e.identity);
        x(a, function (b, e) {
            var m = l.call(c, b, e, a);
            f(g, m, b)
        });
        return g
    };
    e.groupBy = function (a, b, c) {
        return T(a, b, c, function (a, b, c) {
            (e.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    };
    e.multiGroupBy =
        function (a, b, c) {
            var f;
            if (!b.length)return a;
            a = e.groupBy(a, b[0], c);
            b = b.slice(1);
            for (f in a)a.hasOwnProperty(f) && (a[f] = e.multiGroupBy(a[f], b, c));
            return a
        };
    e.countBy = function (a, b, c) {
        return T(a, b, c, function (a, b) {
            e.has(a, b) || (a[b] = 0);
            a[b]++
        })
    };
    e.sortedIndex = function (a, b, c, f) {
        c = null == c ? e.identity : O(c);
        b = c.call(f, b);
        for (var g = 0, l = a.length; g < l;) {
            var m = g + l >>> 1;
            c.call(f, a[m]) < b ? g = m + 1 : l = m
        }
        return g
    };
    e.toArray = function (a) {
        return a ? e.isArray(a) ? l.call(a) : a.length === +a.length ? e.map(a, e.identity) : e.values(a) : []
    };
    e.size = function (a) {
        return null == a ? 0 : a.length === +a.length ? a.length : e.keys(a).length
    };
    e.first = e.head = e.take = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : l.call(a, 0, b)
    };
    e.initial = function (a, b, c) {
        return l.call(a, 0, a.length - (null == b || c ? 1 : b))
    };
    e.last = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : l.call(a, Math.max(a.length - b, 0))
    };
    e.rest = e.tail = e.drop = function (a, b, c) {
        return l.call(a, null == b || c ? 1 : b)
    };
    e.compact = function (a) {
        return e.filter(a, e.identity)
    };
    var K = function (a, b, c) {
        x(a, function (a) {
            e.isArray(a) ?
                b ? n.apply(c, a) : K(a, b, c) : c.push(a)
        });
        return c
    };
    e.flatten = function (a, b) {
        return K(a, b, [])
    };
    e.without = function (a) {
        return e.difference(a, l.call(arguments, 1))
    };
    e.uniq = e.unique = function (a, b, c, f) {
        e.isFunction(b) && (f = c, c = b, b = !1);
        c = c ? e.map(a, c, f) : a;
        var g = [], l = [];
        x(c, function (c, f) {
            (b ? f && l[l.length - 1] === c : e.contains(l, c)) || (l.push(c), g.push(a[f]))
        });
        return g
    };
    e.union = function () {
        return e.uniq(s.apply(g, arguments))
    };
    e.intersection = function (a) {
        var b = l.call(arguments, 1);
        return e.filter(e.uniq(a), function (a) {
            return e.every(b,
                function (b) {
                    return 0 <= e.indexOf(b, a)
                })
        })
    };
    e.difference = function (a) {
        var b = s.apply(g, l.call(arguments, 1));
        return e.filter(a, function (a) {
            return!e.contains(b, a)
        })
    };
    e.zip = function () {
        for (var a = l.call(arguments), b = e.max(e.pluck(a, "length")), c = Array(b), f = 0; f < b; f++)c[f] = e.pluck(a, "" + f);
        return c
    };
    e.object = function (a, b) {
        if (null == a)return{};
        for (var c = {}, e = 0, f = a.length; e < f; e++)b ? c[a[e]] = b[e] : c[a[e][0]] = a[e][1];
        return c
    };
    e.indexOf = function (a, b, c) {
        if (null == a)return-1;
        var f = 0, g = a.length;
        if (c)if ("number" == typeof c)f =
            0 > c ? Math.max(0, g + c) : c; else return f = e.sortedIndex(a, b), a[f] === b ? f : -1;
        if (q && a.indexOf === q)return a.indexOf(b, c);
        for (; f < g; f++)if (a[f] === b)return f;
        return-1
    };
    e.lastIndexOf = function (a, b, c) {
        if (null == a)return-1;
        var e = null != c;
        if (E && a.lastIndexOf === E)return e ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (c = e ? c : a.length; c--;)if (a[c] === b)return c;
        return-1
    };
    e.range = function (a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0);
        c = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((b - a) / c), 0), f = 0, g = Array(e); f < e;)g[f++] = a, a += c;
        return g
    };
    e.bind = function (a, b) {
        if (a.bind === z && z)return z.apply(a, l.call(arguments, 1));
        var c = l.call(arguments, 2);
        return function () {
            return a.apply(b, c.concat(l.call(arguments)))
        }
    };
    e.partial = function (a) {
        var b = l.call(arguments, 1);
        return function () {
            return a.apply(this, b.concat(l.call(arguments)))
        }
    };
    e.bindAll = function (a) {
        var b = l.call(arguments, 1);
        0 === b.length && (b = e.functions(a));
        x(b, function (b) {
            a[b] = e.bind(a[b], a)
        });
        return a
    };
    e.memoize = function (a, b) {
        var c = {};
        b || (b = e.identity);
        return function () {
            var f = b.apply(this,
                arguments);
            return e.has(c, f) ? c[f] : c[f] = a.apply(this, arguments)
        }
    };
    e.delay = function (a, b) {
        var c = l.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    };
    e.defer = function (a) {
        return e.delay.apply(e, [a, 1].concat(l.call(arguments, 1)))
    };
    e.throttle = function (a, b) {
        var c, e, f, g, l = 0, m = function () {
            l = new Date;
            f = null;
            g = a.apply(c, e)
        };
        return function () {
            var n = new Date, q = b - (n - l);
            c = this;
            e = arguments;
            0 >= q ? (clearTimeout(f), f = null, l = n, g = a.apply(c, e)) : f || (f = setTimeout(m, q));
            return g
        }
    };
    e.debounce = function (a, b, c) {
        var e, f;
        return function () {
            var g = this, l = arguments, m = c && !e;
            clearTimeout(e);
            e = setTimeout(function () {
                e = null;
                c || (f = a.apply(g, l))
            }, b);
            m && (f = a.apply(g, l));
            return f
        }
    };
    e.once = function (a) {
        var b = !1, c;
        return function () {
            if (b)return c;
            b = !0;
            c = a.apply(this, arguments);
            a = null;
            return c
        }
    };
    e.wrap = function (a, b) {
        return function () {
            var c = [a];
            n.apply(c, arguments);
            return b.apply(this, c)
        }
    };
    e.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, c = a.length - 1; 0 <= c; c--)b = [a[c].apply(this, b)];
            return b[0]
        }
    };
    e.after = function (a, b) {
        return 0 >= a ? b() : function () {
            if (1 > --a)return b.apply(this, arguments)
        }
    };
    e.keys = G || function (a) {
        if (a !== Object(a))throw new TypeError("Invalid object");
        var b = [], c;
        for (c in a)e.has(a, c) && (b[b.length] = c);
        return b
    };
    e.values = function (a) {
        var b = [], c;
        for (c in a)e.has(a, c) && b.push(a[c]);
        return b
    };
    e.pairs = function (a) {
        var b = [], c;
        for (c in a)e.has(a, c) && b.push([c, a[c]]);
        return b
    };
    e.invert = function (a) {
        var b = {}, c;
        for (c in a)e.has(a, c) && (b[a[c]] = c);
        return b
    };
    e.functions = e.methods = function (a) {
        var b =
            [], c;
        for (c in a)e.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    e.extend = function (a) {
        x(l.call(arguments, 1), function (b) {
            if (b)for (var c in b)a[c] = b[c]
        });
        return a
    };
    e.pick = function (a) {
        var b = {}, c = s.apply(g, l.call(arguments, 1));
        x(c, function (c) {
            c in a && (b[c] = a[c])
        });
        return b
    };
    e.omit = function (a) {
        var b = {}, c = s.apply(g, l.call(arguments, 1)), f;
        for (f in a)e.contains(c, f) || (b[f] = a[f]);
        return b
    };
    e.defaults = function (a) {
        x(l.call(arguments, 1), function (b) {
            if (b)for (var c in b)null == a[c] && (a[c] = b[c])
        });
        return a
    };
    e.clone =
        function (a) {
            return e.isObject(a) ? e.isArray(a) ? a.slice() : e.extend({}, a) : a
        };
    e.tap = function (a, b) {
        b(a);
        return a
    };
    var R = function (a, b, c, f) {
        if (a === b)return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)return a === b;
        a instanceof e && (a = a._wrapped);
        b instanceof e && (b = b._wrapped);
        var g = t.call(a);
        if (g != t.call(b))return!1;
        switch (g) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return+a == +b;
            case "[object RegExp]":
                return a.source ==
                    b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)return!1;
        for (var l = c.length; l--;)if (c[l] == a)return f[l] == b;
        c.push(a);
        f.push(b);
        var l = 0, m = !0;
        if ("[object Array]" == g) {
            if (l = a.length, m = l == b.length)for (; l-- && (m = R(a[l], b[l], c, f)););
        } else {
            var g = a.constructor, n = b.constructor;
            if (g !== n && !(e.isFunction(g) && g instanceof g && e.isFunction(n) && n instanceof n))return!1;
            for (var q in a)if (e.has(a, q) && (l++, !(m = e.has(b, q) && R(a[q], b[q], c, f))))break;
            if (m) {
                for (q in b)if (e.has(b, q) && !l--)break;
                m = !l
            }
        }
        c.pop();
        f.pop();
        return m
    };
    e.isEqual = function (a, b) {
        return R(a, b, [], [])
    };
    e.isEmpty = function (a) {
        if (null == a)return!0;
        if (e.isArray(a) || e.isString(a))return 0 === a.length;
        for (var b in a)if (e.has(a, b))return!1;
        return!0
    };
    e.isElement = function (a) {
        return!(!a || 1 !== a.nodeType)
    };
    e.isArray = f || function (a) {
        return"[object Array]" == t.call(a)
    };
    e.isObject = function (a) {
        return a === Object(a)
    };
    x("Arguments Function String Number Date RegExp".split(" "), function (a) {
        e["is" + a] =
            function (b) {
                return t.call(b) == "[object " + a + "]"
            }
    });
    e.isArguments(arguments) || (e.isArguments = function (a) {
        return!(!a || !e.has(a, "callee"))
    });
    "function" !== typeof/./ && (e.isFunction = function (a) {
        return"function" === typeof a
    });
    e.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    };
    e.isNaN = function (a) {
        return e.isNumber(a) && a != +a
    };
    e.isBoolean = function (a) {
        return!0 === a || !1 === a || "[object Boolean]" == t.call(a)
    };
    e.isNull = function (a) {
        return null === a
    };
    e.isUndefined = function (a) {
        return void 0 === a
    };
    e.has = function (a, b) {
        return v.call(a, b)
    };
    e.noConflict = function () {
        a._ = c;
        return this
    };
    e.identity = function (a) {
        return a
    };
    e.times = function (a, b, c) {
        for (var e = Array(a), f = 0; f < a; f++)e[f] = b.call(c, f);
        return e
    };
    e.random = function (a, b) {
        null == b && (b = a, a = 0);
        return a + Math.floor(Math.random() * (b - a + 1))
    };
    var L = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"}};
    L.unescape = e.invert(L.escape);
    var na = {escape: RegExp("[" + e.keys(L.escape).join("") + "]", "g"), unescape: RegExp("(" + e.keys(L.unescape).join("|") + ")",
        "g")};
    e.each(["escape", "unescape"], function (a) {
        e[a] = function (b) {
            return null == b ? "" : ("" + b).replace(na[a], function (b) {
                return L[a][b]
            })
        }
    });
    e.result = function (a, b) {
        if (null == a)return null;
        var c = a[b];
        return e.isFunction(c) ? c.call(a) : c
    };
    e.mixin = function (a) {
        x(e.functions(a), function (b) {
            var c = e[b] = a[b];
            e.prototype[b] = function () {
                var a = [this._wrapped];
                n.apply(a, arguments);
                a = c.apply(e, a);
                return this._chain ? e(a).chain() : a
            }
        })
    };
    var ba = 0;
    e.uniqueId = function (a) {
        var b = ++ba + "";
        return a ? a + b : b
    };
    e.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var ca = /(.)^/, fa = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"}, X = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    e.template = function (a, b, c) {
        var f;
        c = e.defaults({}, c, e.templateSettings);
        var g = RegExp([(c.escape || ca).source, (c.interpolate || ca).source, (c.evaluate || ca).source].join("|") + "|$", "g"), l = 0, m = "__p+='";
        a.replace(g, function (b, c, e, f, g) {
            m += a.slice(l, g).replace(X, function (a) {
                return"\\" + fa[a]
            });
            c && (m += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'");
            e && (m += "'+\n((__t=(" + e + "))==null?'':__t)+\n'");
            f && (m += "';\n" + f + "\n__p+='");
            l = g + b.length;
            return b
        });
        m += "';\n";
        c.variable || (m = "with(obj||{}){\n" + m + "}\n");
        m = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + m + "return __p;\n";
        try {
            f = new Function(c.variable || "obj", "_", m)
        } catch (n) {
            throw n.source = m, n;
        }
        if (b)return f(b, e);
        b = function (a) {
            return f.call(this, a, e)
        };
        b.source = "function(" + (c.variable || "obj") + "){\n" + m + "}";
        return b
    };
    e.chain = function (a) {
        return e(a).chain()
    };
    e.mixin(e);
    x("pop push reverse shift sort splice unshift".split(" "), function (a) {
        var b = g[a];
        e.prototype[a] = function () {
            var c = this._wrapped;
            b.apply(c, arguments);
            "shift" != a && "splice" != a || 0 !== c.length || delete c[0];
            return this._chain ? e(c).chain() : c
        }
    });
    x(["concat", "join", "slice"], function (a) {
        var b = g[a];
        e.prototype[a] = function () {
            var a = b.apply(this._wrapped, arguments);
            return this._chain ? e(a).chain() : a
        }
    });
    e.extend(e.prototype, {chain: function () {
        this._chain = !0;
        return this
    }, value: function () {
        return this._wrapped
    }})
}).call($jqOpta);
$jqOpta.settings = {imageUrl: "https:" === window.location.protocol ? "//secure.omo.akamai.opta.net/image.php?secure=true&" : "http://omo.akamai.opta.net/image.php?", baseUrl: "https:" === window.location.protocol ? "https://s3-eu-west-1.amazonaws.com/widget.cloud.opta.net/2.0/" : "http://widget.cloud.opta.net/2.0/", apiUrl: "//api.widget.cloud.opta.net", soundEnabled: !1};