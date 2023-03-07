/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
 (function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = e.ownerDocument.defaultView
          , n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width'])
    }
    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }
    function c(e) {
        var t = e.body
          , o = e.documentElement
          , n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}
          , d = s.width || e.clientWidth || p.width
          , a = s.height || e.clientHeight || p.height
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth)
          , c = parseFloat(m.borderLeftWidth);
        i && s && (a.top = ee(a.top, 0),
        a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var w = parseFloat(m.marginTop)
              , y = parseFloat(m.marginLeft);
            b.top -= h - w,
            b.bottom -= h - w,
            b.left -= c - y,
            b.right -= c - y,
            b.marginTop = w,
            b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = ee(o.clientWidth, window.innerWidth || 0)
          , r = ee(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n)
            return !1;
        if ('fixed' === t(e, 'position'))
            return !0;
        var i = o(e);
        return !!i && y(i)
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , d = {
            top: 0,
            left: 0
        }
          , l = s ? E(e) : a(e, i(t));
        if ('viewport' === p)
            d = w(l, s);
        else {
            var f;
            'scrollParent' === p ? (f = n(o(t)),
            'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ('HTML' === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument)
                  , g = h.height
                  , u = h.width;
                d.top += m.top - m.marginTop,
                d.bottom = g + m.top,
                d.left += m.left - m.marginLeft,
                d.right = u + m.left
            } else
                d = m
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0,
        d.top += v ? r : r.top || 0,
        d.right -= v ? r : r.right || 0,
        d.bottom -= v ? r : r.bottom || 0,
        d
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , r = n ? E(t) : a(t, i(o));
        return b(o, r, n)
    }
    function S(e) {
        var t = e.ownerDocument.defaultView
          , o = t.getComputedStyle(e)
          , n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0)
          , i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0)
          , r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function F(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t) {
        var o = e.offsets
          , n = o.popper
          , i = o.reference
          , r = $
          , p = function(e) {
            return e
        }
          , s = r(i.width)
          , d = r(n.width)
          , a = -1 !== ['left', 'right'].indexOf(e.placement)
          , l = -1 !== e.placement.indexOf('-')
          , f = t ? a || l || s % 2 == d % 2 ? r : Z : p
          , m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }
    function K(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = he.indexOf(e)
          , n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function X(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    var Q = Math.min
      , Z = Math.floor
      , $ = Math.round
      , ee = Math.max
      , te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator
      , oe = function() {
        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
            if (te && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , ne = te && window.Promise
      , ie = ne ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, oe))
        }
    }
      , re = te && !!(window.MSInputMethodContext && document.documentMode)
      , pe = te && /MSIE 10/.test(navigator.userAgent)
      , se = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , fe = te && /Firefox/i.test(navigator.userAgent)
      , me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , he = me.slice(3)
      , ce = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ge = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = ie(this.update.bind(this)),
            this.options = le({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return de(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return H.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return I.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ge.placements = me,
    ge.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])),
                            ae({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            ae({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , w = t(e.instance.popper)
                      , y = parseFloat(w['margin' + f])
                      , E = parseFloat(w['border' + f + 'Width'])
                      , v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    ae(n, m, $(v)),
                    ae(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case ce.FLIP:
                        p = [n, i];
                        break;
                    case ce.CLOCKWISE:
                        p = G(n);
                        break;
                    case ce.COUNTERCLOCKWISE:
                        p = G(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , w = -1 !== ['top', 'bottom'].indexOf(n)
                          , y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u)
                          , E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g)
                          , v = y || E;
                        (m || b || v) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        v && (r = z(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = D(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = D(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top,
                    s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1
                          , y = 'right' == g ? -1 : 1;
                        m[c] = d * w,
                        m[g] = s * y,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes),
                    e.styles = le({}, m, e.styles),
                    e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles),
                    j(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    V(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ge
});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, (function(t, e, n) {
    "use strict";
    function i(t) {
        return t && "object" == typeof t && "default"in t ? t : {
            default: t
        }
    }
    var o = i(e)
      , a = i(n);
    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function l(t, e, n) {
        return e && s(t.prototype, e),
        n && s(t, n),
        t
    }
    function r() {
        return r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ,
        r.apply(this, arguments)
    }
    function u(t, e) {
        return u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        u(t, e)
    }
    var f = "transitionend";
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = o.default(t).css("transition-duration")
              , n = o.default(t).css("transition-delay")
              , i = parseFloat(e)
              , a = parseFloat(n);
            return i || a ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            o.default(t).trigger(f)
        },
        supportsTransitionEnd: function() {
            return Boolean(f)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , a = e[i]
                      , s = a && d.isElement(a) ? "element" : null === (l = a) || "undefined" == typeof l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? d.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof o.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = o.default.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    d.jQueryDetection(),
    o.default.fn.emulateTransitionEnd = function(t) {
        var e = this
          , n = !1;
        return o.default(this).one(d.TRANSITION_END, (function() {
            n = !0
        }
        )),
        setTimeout((function() {
            n || d.triggerTransitionEnd(e)
        }
        ), t),
        this
    }
    ,
    o.default.event.special[d.TRANSITION_END] = {
        bindType: f,
        delegateType: f,
        handle: function(t) {
            if (o.default(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "bs.alert"
      , h = o.default.fn.alert
      , g = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, c),
            this._element = null
        }
        ,
        e._getRootElement = function(t) {
            var e = d.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = o.default(t).closest(".alert")[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(t) {
            var e = o.default.Event("close.bs.alert");
            return o.default(t).trigger(e),
            e
        }
        ,
        e._removeElement = function(t) {
            var e = this;
            if (o.default(t).removeClass("show"),
            o.default(t).hasClass("fade")) {
                var n = d.getTransitionDurationFromElement(t);
                o.default(t).one(d.TRANSITION_END, (function(n) {
                    return e._destroyElement(t, n)
                }
                )).emulateTransitionEnd(n)
            } else
                this._destroyElement(t)
        }
        ,
        e._destroyElement = function(t) {
            o.default(t).detach().trigger("closed.bs.alert").remove()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data(c);
                i || (i = new t(this),
                n.data(c, i)),
                "close" === e && i[e](this)
            }
            ))
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', g._handleDismiss(new g)),
    o.default.fn.alert = g._jQueryInterface,
    o.default.fn.alert.Constructor = g,
    o.default.fn.alert.noConflict = function() {
        return o.default.fn.alert = h,
        g._jQueryInterface
    }
    ;
    var m = "bs.button"
      , p = o.default.fn.button
      , _ = "active"
      , v = '[data-toggle^="button"]'
      , y = 'input:not([type="hidden"])'
      , b = ".btn"
      , E = function() {
        function t(t) {
            this._element = t,
            this.shouldAvoidTriggerChange = !1
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0
              , e = !0
              , n = o.default(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector(y);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(_))
                            t = !1;
                        else {
                            var a = n.querySelector(".active");
                            a && o.default(a).removeClass(_)
                        }
                    t && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(_)),
                    this.shouldAvoidTriggerChange || o.default(i).trigger("change")),
                    i.focus(),
                    e = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)),
            t && o.default(this._element).toggleClass(_))
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, m),
            this._element = null
        }
        ,
        t._jQueryInterface = function(e, n) {
            return this.each((function() {
                var i = o.default(this)
                  , a = i.data(m);
                a || (a = new t(this),
                i.data(m, a)),
                a.shouldAvoidTriggerChange = n,
                "toggle" === e && a[e]()
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.button.data-api", v, (function(t) {
        var e = t.target
          , n = e;
        if (o.default(e).hasClass("btn") || (e = o.default(e).closest(b)[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
            t.preventDefault();
        else {
            var i = e.querySelector(y);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled")))
                return void t.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === e.tagName || E._jQueryInterface.call(o.default(e), "toggle", "INPUT" === n.tagName)
        }
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", v, (function(t) {
        var e = o.default(t.target).closest(b)[0];
        o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }
    )),
    o.default(window).on("load.bs.button.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e]
              , o = i.querySelector(y);
            o.checked || o.hasAttribute("checked") ? i.classList.add(_) : i.classList.remove(_)
        }
        for (var a = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a < s; a++) {
            var l = t[a];
            "true" === l.getAttribute("aria-pressed") ? l.classList.add(_) : l.classList.remove(_)
        }
    }
    )),
    o.default.fn.button = E._jQueryInterface,
    o.default.fn.button.Constructor = E,
    o.default.fn.button.noConflict = function() {
        return o.default.fn.button = p,
        E._jQueryInterface
    }
    ;
    var T = "carousel"
      , w = "bs.carousel"
      , C = o.default.fn[T]
      , S = "active"
      , N = "next"
      , D = "prev"
      , A = "slid.bs.carousel"
      , I = ".active.carousel-item"
      , k = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , O = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , j = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , P = function() {
        function t(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.next = function() {
            this._isSliding || this._slide(N)
        }
        ,
        e.nextWhenVisible = function() {
            var t = o.default(this._element);
            !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide(D)
        }
        ,
        e.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(I);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    o.default(this._element).one(A, (function() {
                        return e.to(t)
                    }
                    ));
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = t > n ? N : D;
                    this._slide(i, this._items[t])
                }
        }
        ,
        e.dispose = function() {
            o.default(this._element).off(".bs.carousel"),
            o.default.removeData(this._element, w),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, k, t),
            d.typeCheckConfig(T, t, O),
            t
        }
        ,
        e._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0,
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", (function(e) {
                return t.pause(e)
            }
            )).on("mouseleave.bs.carousel", (function(e) {
                return t.cycle(e)
            }
            )),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            var t = this;
            if (this._touchSupported) {
                var e = function(e) {
                    t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                }
                  , n = function(e) {
                    t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    "hover" === t._config.pause && (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    t.touchTimeout = setTimeout((function(e) {
                        return t.cycle(e)
                    }
                    ), 500 + t._config.interval))
                };
                o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) {
                    return t.preventDefault()
                }
                )),
                this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", (function(t) {
                    return e(t)
                }
                )),
                o.default(this._element).on("pointerup.bs.carousel", (function(t) {
                    return n(t)
                }
                )),
                this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", (function(t) {
                    return e(t)
                }
                )),
                o.default(this._element).on("touchmove.bs.carousel", (function(e) {
                    return function(e) {
                        t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX
                    }(e)
                }
                )),
                o.default(this._element).on("touchend.bs.carousel", (function(t) {
                    return n(t)
                }
                )))
            }
        }
        ,
        e._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(t)
        }
        ,
        e._getItemByDirection = function(t, e) {
            var n = t === N
              , i = t === D
              , o = this._getItemIndex(e)
              , a = this._items.length - 1;
            if ((i && 0 === o || n && o === a) && !this._config.wrap)
                return e;
            var s = (o + (t === D ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        e._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(I))
              , a = o.default.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return o.default(this._element).trigger(a),
            a
        }
        ,
        e._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                o.default(e).removeClass(S);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && o.default(n).addClass(S)
            }
        }
        ,
        e._updateInterval = function() {
            var t = this._activeElement || this._element.querySelector(I);
            if (t) {
                var e = parseInt(t.getAttribute("data-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        e._slide = function(t, e) {
            var n, i, a, s = this, l = this._element.querySelector(I), r = this._getItemIndex(l), u = e || l && this._getItemByDirection(t, l), f = this._getItemIndex(u), c = Boolean(this._interval);
            if (t === N ? (n = "carousel-item-left",
            i = "carousel-item-next",
            a = "left") : (n = "carousel-item-right",
            i = "carousel-item-prev",
            a = "right"),
            u && o.default(u).hasClass(S))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, a).isDefaultPrevented() && l && u) {
                this._isSliding = !0,
                c && this.pause(),
                this._setActiveIndicatorElement(u),
                this._activeElement = u;
                var h = o.default.Event(A, {
                    relatedTarget: u,
                    direction: a,
                    from: r,
                    to: f
                });
                if (o.default(this._element).hasClass("slide")) {
                    o.default(u).addClass(i),
                    d.reflow(u),
                    o.default(l).addClass(n),
                    o.default(u).addClass(n);
                    var g = d.getTransitionDurationFromElement(l);
                    o.default(l).one(d.TRANSITION_END, (function() {
                        o.default(u).removeClass(n + " " + i).addClass(S),
                        o.default(l).removeClass("active " + i + " " + n),
                        s._isSliding = !1,
                        setTimeout((function() {
                            return o.default(s._element).trigger(h)
                        }
                        ), 0)
                    }
                    )).emulateTransitionEnd(g)
                } else
                    o.default(l).removeClass(S),
                    o.default(u).addClass(S),
                    this._isSliding = !1,
                    o.default(this._element).trigger(h);
                c && this.cycle()
            }
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this).data(w)
                  , i = r({}, k, o.default(this).data());
                "object" == typeof e && (i = r({}, i, e));
                var a = "string" == typeof e ? e : i.slide;
                if (n || (n = new t(this,i),
                o.default(this).data(w, n)),
                "number" == typeof e)
                    n.to(e);
                else if ("string" == typeof a) {
                    if ("undefined" == typeof n[a])
                        throw new TypeError('No method named "' + a + '"');
                    n[a]()
                } else
                    i.interval && i.ride && (n.pause(),
                    n.cycle())
            }
            ))
        }
        ,
        t._dataApiClickHandler = function(e) {
            var n = d.getSelectorFromElement(this);
            if (n) {
                var i = o.default(n)[0];
                if (i && o.default(i).hasClass("carousel")) {
                    var a = r({}, o.default(i).data(), o.default(this).data())
                      , s = this.getAttribute("data-slide-to");
                    s && (a.interval = !1),
                    t._jQueryInterface.call(o.default(i), a),
                    s && o.default(i).data(w).to(s),
                    e.preventDefault()
                }
            }
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return k
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler),
    o.default(window).on("load.bs.carousel.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
            var i = o.default(t[e]);
            P._jQueryInterface.call(i, i.data())
        }
    }
    )),
    o.default.fn[T] = P._jQueryInterface,
    o.default.fn[T].Constructor = P,
    o.default.fn[T].noConflict = function() {
        return o.default.fn[T] = C,
        P._jQueryInterface
    }
    ;
    var L = "collapse"
      , R = "bs.collapse"
      , x = o.default.fn[L]
      , q = "show"
      , F = "collapse"
      , Q = "collapsing"
      , B = "collapsed"
      , H = "width"
      , U = '[data-toggle="collapse"]'
      , M = {
        toggle: !0,
        parent: ""
    }
      , W = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , V = function() {
        function t(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(U)), i = 0, o = n.length; i < o; i++) {
                var a = n[i]
                  , s = d.getSelectorFromElement(a)
                  , l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
                    return e === t
                }
                ));
                null !== s && l.length > 0 && (this._selector = s,
                this._triggerArray.push(a))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = t.prototype;
        return e.toggle = function() {
            o.default(this._element).hasClass(q) ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var e, n, i = this;
            if (!(this._isTransitioning || o.default(this._element).hasClass(q) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains(F)
            }
            ))).length && (e = null),
            e && (n = o.default(e).not(this._selector).data(R)) && n._isTransitioning))) {
                var a = o.default.Event("show.bs.collapse");
                if (o.default(this._element).trigger(a),
                !a.isDefaultPrevented()) {
                    e && (t._jQueryInterface.call(o.default(e).not(this._selector), "hide"),
                    n || o.default(e).data(R, null));
                    var s = this._getDimension();
                    o.default(this._element).removeClass(F).addClass(Q),
                    this._element.style[s] = 0,
                    this._triggerArray.length && o.default(this._triggerArray).removeClass(B).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var l = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , r = d.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(d.TRANSITION_END, (function() {
                        o.default(i._element).removeClass(Q).addClass("collapse show"),
                        i._element.style[s] = "",
                        i.setTransitioning(!1),
                        o.default(i._element).trigger("shown.bs.collapse")
                    }
                    )).emulateTransitionEnd(r),
                    this._element.style[s] = this._element[l] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var t = this;
            if (!this._isTransitioning && o.default(this._element).hasClass(q)) {
                var e = o.default.Event("hide.bs.collapse");
                if (o.default(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    d.reflow(this._element),
                    o.default(this._element).addClass(Q).removeClass("collapse show");
                    var i = this._triggerArray.length;
                    if (i > 0)
                        for (var a = 0; a < i; a++) {
                            var s = this._triggerArray[a]
                              , l = d.getSelectorFromElement(s);
                            null !== l && (o.default([].slice.call(document.querySelectorAll(l))).hasClass(q) || o.default(s).addClass(B).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0),
                    this._element.style[n] = "";
                    var r = d.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(d.TRANSITION_END, (function() {
                        t.setTransitioning(!1),
                        o.default(t._element).removeClass(Q).addClass(F).trigger("hidden.bs.collapse")
                    }
                    )).emulateTransitionEnd(r)
                }
            }
        }
        ,
        e.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, R),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(t) {
            return (t = r({}, M, t)).toggle = Boolean(t.toggle),
            d.typeCheckConfig(L, t, W),
            t
        }
        ,
        e._getDimension = function() {
            return o.default(this._element).hasClass(H) ? H : "height"
        }
        ,
        e._getParent = function() {
            var e, n = this;
            d.isElement(this._config.parent) ? (e = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , a = [].slice.call(e.querySelectorAll(i));
            return o.default(a).each((function(e, i) {
                n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
            }
            )),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(t, e) {
            var n = o.default(t).hasClass(q);
            e.length && o.default(e).toggleClass(B, !n).attr("aria-expanded", n)
        }
        ,
        t._getTargetFromElement = function(t) {
            var e = d.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data(R)
                  , a = r({}, M, n.data(), "object" == typeof e && e ? e : {});
                if (!i && a.toggle && "string" == typeof e && /show|hide/.test(e) && (a.toggle = !1),
                i || (i = new t(this,a),
                n.data(R, i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return M
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.collapse.data-api", U, (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = o.default(this)
          , n = d.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(n));
        o.default(i).each((function() {
            var t = o.default(this)
              , n = t.data(R) ? "toggle" : e.data();
            V._jQueryInterface.call(t, n)
        }
        ))
    }
    )),
    o.default.fn[L] = V._jQueryInterface,
    o.default.fn[L].Constructor = V,
    o.default.fn[L].noConflict = function() {
        return o.default.fn[L] = x,
        V._jQueryInterface
    }
    ;
    var z = "dropdown"
      , K = "bs.dropdown"
      , X = o.default.fn[z]
      , Y = new RegExp("38|40|27")
      , $ = "disabled"
      , J = "show"
      , G = "dropdown-menu-right"
      , Z = "hide.bs.dropdown"
      , tt = "hidden.bs.dropdown"
      , et = "click.bs.dropdown.data-api"
      , nt = "keydown.bs.dropdown.data-api"
      , it = '[data-toggle="dropdown"]'
      , ot = ".dropdown-menu"
      , at = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , st = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , lt = function() {
        function t(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !o.default(this._element).hasClass($)) {
                var e = o.default(this._menu).hasClass(J);
                t._clearMenus(),
                e || this.show(!0)
            }
        }
        ,
        e.show = function(e) {
            if (void 0 === e && (e = !1),
            !(this._element.disabled || o.default(this._element).hasClass($) || o.default(this._menu).hasClass(J))) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = o.default.Event("show.bs.dropdown", n)
                  , s = t._getParentFromElement(this._element);
                if (o.default(s).trigger(i),
                !i.isDefaultPrevented()) {
                    if (!this._inNavbar && e) {
                        if ("undefined" == typeof a.default)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var l = this._element;
                        "parent" === this._config.reference ? l = s : d.isElement(this._config.reference) && (l = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && o.default(s).addClass("position-static"),
                        this._popper = new a.default(l,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === o.default(s).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    o.default(this._menu).toggleClass(J),
                    o.default(s).toggleClass(J).trigger(o.default.Event("shown.bs.dropdown", n))
                }
            }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !o.default(this._element).hasClass($) && o.default(this._menu).hasClass(J)) {
                var e = {
                    relatedTarget: this._element
                }
                  , n = o.default.Event(Z, e)
                  , i = t._getParentFromElement(this._element);
                o.default(i).trigger(n),
                n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                o.default(this._menu).toggleClass(J),
                o.default(i).toggleClass(J).trigger(o.default.Event(tt, e)))
            }
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, K),
            o.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            o.default(this._element).on("click.bs.dropdown", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, this.constructor.Default, o.default(this._element).data(), t),
            d.typeCheckConfig(z, t, this.constructor.DefaultType),
            t
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(ot))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var t = o.default(this._element.parentNode)
              , e = "bottom-start";
            return t.hasClass("dropup") ? e = o.default(this._menu).hasClass(G) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : o.default(this._menu).hasClass(G) && (e = "bottom-end"),
            e
        }
        ,
        e._detectNavbar = function() {
            return o.default(this._element).closest(".navbar").length > 0
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element)),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        e._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            r({}, t, this._config.popperConfig)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this).data(K);
                if (n || (n = new t(this,"object" == typeof e ? e : null),
                o.default(this).data(K, n)),
                "string" == typeof e) {
                    if ("undefined" == typeof n[e])
                        throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }
            ))
        }
        ,
        t._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var n = [].slice.call(document.querySelectorAll(it)), i = 0, a = n.length; i < a; i++) {
                    var s = t._getParentFromElement(n[i])
                      , l = o.default(n[i]).data(K)
                      , r = {
                        relatedTarget: n[i]
                    };
                    if (e && "click" === e.type && (r.clickEvent = e),
                    l) {
                        var u = l._menu;
                        if (o.default(s).hasClass(J) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o.default.contains(s, e.target))) {
                            var f = o.default.Event(Z, r);
                            o.default(s).trigger(f),
                            f.isDefaultPrevented() || ("ontouchstart"in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                            n[i].setAttribute("aria-expanded", "false"),
                            l._popper && l._popper.destroy(),
                            o.default(u).removeClass(J),
                            o.default(s).removeClass(J).trigger(o.default.Event(tt, r)))
                        }
                    }
                }
        }
        ,
        t._getParentFromElement = function(t) {
            var e, n = d.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        t._dataApiKeydownHandler = function(e) {
            if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || o.default(e.target).closest(ot).length) : !Y.test(e.which)) && !this.disabled && !o.default(this).hasClass($)) {
                var n = t._getParentFromElement(this)
                  , i = o.default(n).hasClass(J);
                if (i || 27 !== e.which) {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    !i || 27 === e.which || 32 === e.which)
                        return 27 === e.which && o.default(n.querySelector(it)).trigger("focus"),
                        void o.default(this).trigger("click");
                    var a = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                        return o.default(t).is(":visible")
                    }
                    ));
                    if (0 !== a.length) {
                        var s = a.indexOf(e.target);
                        38 === e.which && s > 0 && s--,
                        40 === e.which && s < a.length - 1 && s++,
                        s < 0 && (s = 0),
                        a[s].focus()
                    }
                }
            }
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return at
            }
        }, {
            key: "DefaultType",
            get: function() {
                return st
            }
        }]),
        t
    }();
    o.default(document).on(nt, it, lt._dataApiKeydownHandler).on(nt, ot, lt._dataApiKeydownHandler).on(et + " keyup.bs.dropdown.data-api", lt._clearMenus).on(et, it, (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        lt._jQueryInterface.call(o.default(this), "toggle")
    }
    )).on(et, ".dropdown form", (function(t) {
        t.stopPropagation()
    }
    )),
    o.default.fn[z] = lt._jQueryInterface,
    o.default.fn[z].Constructor = lt,
    o.default.fn[z].noConflict = function() {
        return o.default.fn[z] = X,
        lt._jQueryInterface
    }
    ;
    var rt = "bs.modal"
      , ut = o.default.fn.modal
      , ft = "modal-open"
      , dt = "fade"
      , ct = "show"
      , ht = "modal-static"
      , gt = "hidden.bs.modal"
      , mt = "show.bs.modal"
      , pt = "focusin.bs.modal"
      , _t = "resize.bs.modal"
      , vt = "click.dismiss.bs.modal"
      , yt = "keydown.dismiss.bs.modal"
      , bt = "mousedown.dismiss.bs.modal"
      , Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Tt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , wt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , Ct = function() {
        function t(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = t.prototype;
        return e.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        e.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                var n = o.default.Event(mt, {
                    relatedTarget: t
                });
                o.default(this._element).trigger(n),
                n.isDefaultPrevented() || (this._isShown = !0,
                o.default(this._element).hasClass(dt) && (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                o.default(this._element).on(vt, '[data-dismiss="modal"]', (function(t) {
                    return e.hide(t)
                }
                )),
                o.default(this._dialog).on(bt, (function() {
                    o.default(e._element).one("mouseup.dismiss.bs.modal", (function(t) {
                        o.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return e._showElement(t)
                }
                )))
            }
        }
        ,
        e.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = o.default.Event("hide.bs.modal");
                if (o.default(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = o.default(this._element).hasClass(dt);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    o.default(document).off(pt),
                    o.default(this._element).removeClass(ct),
                    o.default(this._element).off(vt),
                    o.default(this._dialog).off(bt),
                    i) {
                        var a = d.getTransitionDurationFromElement(this._element);
                        o.default(this._element).one(d.TRANSITION_END, (function(t) {
                            return e._hideModal(t)
                        }
                        )).emulateTransitionEnd(a)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return o.default(t).off(".bs.modal")
            }
            )),
            o.default(document).off(pt),
            o.default.removeData(this._element, rt),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, Tt, t),
            d.typeCheckConfig("modal", t, wt),
            t
        }
        ,
        e._triggerBackdropTransition = function() {
            var t = this
              , e = o.default.Event("hidePrevented.bs.modal");
            if (o.default(this._element).trigger(e),
            !e.isDefaultPrevented()) {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                n || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(ht);
                var i = d.getTransitionDurationFromElement(this._dialog);
                o.default(this._element).off(d.TRANSITION_END),
                o.default(this._element).one(d.TRANSITION_END, (function() {
                    t._element.classList.remove(ht),
                    n || o.default(t._element).one(d.TRANSITION_END, (function() {
                        t._element.style.overflowY = ""
                    }
                    )).emulateTransitionEnd(t._element, i)
                }
                )).emulateTransitionEnd(i),
                this._element.focus()
            }
        }
        ,
        e._showElement = function(t) {
            var e = this
              , n = o.default(this._element).hasClass(dt)
              , i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
            n && d.reflow(this._element),
            o.default(this._element).addClass(ct),
            this._config.focus && this._enforceFocus();
            var a = o.default.Event("shown.bs.modal", {
                relatedTarget: t
            })
              , s = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                o.default(e._element).trigger(a)
            };
            if (n) {
                var l = d.getTransitionDurationFromElement(this._dialog);
                o.default(this._dialog).one(d.TRANSITION_END, s).emulateTransitionEnd(l)
            } else
                s()
        }
        ,
        e._enforceFocus = function() {
            var t = this;
            o.default(document).off(pt).on(pt, (function(e) {
                document !== e.target && t._element !== e.target && 0 === o.default(t._element).has(e.target).length && t._element.focus()
            }
            ))
        }
        ,
        e._setEscapeEvent = function() {
            var t = this;
            this._isShown ? o.default(this._element).on(yt, (function(e) {
                t._config.keyboard && 27 === e.which ? (e.preventDefault(),
                t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
            }
            )) : this._isShown || o.default(this._element).off(yt)
        }
        ,
        e._setResizeEvent = function() {
            var t = this;
            this._isShown ? o.default(window).on(_t, (function(e) {
                return t.handleUpdate(e)
            }
            )) : o.default(window).off(_t)
        }
        ,
        e._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                o.default(document.body).removeClass(ft),
                t._resetAdjustments(),
                t._resetScrollbar(),
                o.default(t._element).trigger(gt)
            }
            ))
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (o.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(t) {
            var e = this
              , n = o.default(this._element).hasClass(dt) ? dt : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                o.default(this._backdrop).appendTo(document.body),
                o.default(this._element).on(vt, (function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                }
                )),
                n && d.reflow(this._backdrop),
                o.default(this._backdrop).addClass(ct),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = d.getTransitionDurationFromElement(this._backdrop);
                o.default(this._backdrop).one(d.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                o.default(this._backdrop).removeClass(ct);
                var a = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (o.default(this._element).hasClass(dt)) {
                    var s = d.getTransitionDurationFromElement(this._backdrop);
                    o.default(this._backdrop).one(d.TRANSITION_END, a).emulateTransitionEnd(s)
                } else
                    a()
            } else
                t && t()
        }
        ,
        e._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(Et))
                  , n = [].slice.call(document.querySelectorAll(".sticky-top"));
                o.default(e).each((function(e, n) {
                    var i = n.style.paddingRight
                      , a = o.default(n).css("padding-right");
                    o.default(n).data("padding-right", i).css("padding-right", parseFloat(a) + t._scrollbarWidth + "px")
                }
                )),
                o.default(n).each((function(e, n) {
                    var i = n.style.marginRight
                      , a = o.default(n).css("margin-right");
                    o.default(n).data("margin-right", i).css("margin-right", parseFloat(a) - t._scrollbarWidth + "px")
                }
                ));
                var i = document.body.style.paddingRight
                  , a = o.default(document.body).css("padding-right");
                o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px")
            }
            o.default(document.body).addClass(ft)
        }
        ,
        e._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(Et));
            o.default(t).each((function(t, e) {
                var n = o.default(e).data("padding-right");
                o.default(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            }
            ));
            var e = [].slice.call(document.querySelectorAll(".sticky-top"));
            o.default(e).each((function(t, e) {
                var n = o.default(e).data("margin-right");
                "undefined" != typeof n && o.default(e).css("margin-right", n).removeData("margin-right")
            }
            ));
            var n = o.default(document.body).data("padding-right");
            o.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        t._jQueryInterface = function(e, n) {
            return this.each((function() {
                var i = o.default(this).data(rt)
                  , a = r({}, Tt, o.default(this).data(), "object" == typeof e && e ? e : {});
                if (i || (i = new t(this,a),
                o.default(this).data(rt, i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e](n)
                } else
                    a.show && i.show(n)
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Tt
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) {
        var e, n = this, i = d.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var a = o.default(e).data(rt) ? "toggle" : r({}, o.default(e).data(), o.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = o.default(e).one(mt, (function(t) {
            t.isDefaultPrevented() || s.one(gt, (function() {
                o.default(n).is(":visible") && n.focus()
            }
            ))
        }
        ));
        Ct._jQueryInterface.call(o.default(e), a, this)
    }
    )),
    o.default.fn.modal = Ct._jQueryInterface,
    o.default.fn.modal.Constructor = Ct,
    o.default.fn.modal.noConflict = function() {
        return o.default.fn.modal = ut,
        Ct._jQueryInterface
    }
    ;
    var St = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Nt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Dt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function At(t, e, n) {
        if (0 === t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), a = [].slice.call(i.body.querySelectorAll("*")), s = function(t, n) {
            var i = a[t]
              , s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            var l = [].slice.call(i.attributes)
              , r = [].concat(e["*"] || [], e[s] || []);
            l.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === St.indexOf(n) || Boolean(Nt.test(t.nodeValue) || Dt.test(t.nodeValue));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, a = i.length; o < a; o++)
                        if (i[o].test(n))
                            return !0;
                    return !1
                }
                )(t, r) || i.removeAttribute(t.nodeName)
            }
            ))
        }, l = 0, r = a.length; l < r; l++)
            s(l);
        return i.body.innerHTML
    }
    var It = "tooltip"
      , kt = "bs.tooltip"
      , Ot = o.default.fn.tooltip
      , jt = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Pt = ["sanitize", "whiteList", "sanitizeFn"]
      , Lt = "fade"
      , Rt = "show"
      , xt = "show"
      , qt = "out"
      , Ft = "hover"
      , Qt = "focus"
      , Bt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Ht = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Ut = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Mt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Wt = function() {
        function t(t, e) {
            if ("undefined" == typeof a.default)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = o.default(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    o.default(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (o.default(this.getTipElement()).hasClass(Rt))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            o.default.removeData(this.element, this.constructor.DATA_KEY),
            o.default(this.element).off(this.constructor.EVENT_KEY),
            o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && o.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            var t = this;
            if ("none" === o.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = o.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                o.default(this.element).trigger(e);
                var n = d.findShadowRoot(this.element)
                  , i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i)
                    return;
                var s = this.getTipElement()
                  , l = d.getUID(this.constructor.NAME);
                s.setAttribute("id", l),
                this.element.setAttribute("aria-describedby", l),
                this.setContent(),
                this.config.animation && o.default(s).addClass(Lt);
                var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement
                  , u = this._getAttachment(r);
                this.addAttachmentClass(u);
                var f = this._getContainer();
                o.default(s).data(this.constructor.DATA_KEY, this),
                o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s).appendTo(f),
                o.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new a.default(this.element,s,this._getPopperConfig(u)),
                o.default(s).addClass(Rt),
                o.default(s).addClass(this.config.customClass),
                "ontouchstart"in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    o.default(t.element).trigger(t.constructor.Event.SHOWN),
                    e === qt && t._leave(null, t)
                };
                if (o.default(this.tip).hasClass(Lt)) {
                    var h = d.getTransitionDurationFromElement(this.tip);
                    o.default(this.tip).one(d.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        e.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = o.default.Event(this.constructor.Event.HIDE)
              , a = function() {
                e._hoverState !== xt && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                o.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (o.default(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (o.default(n).removeClass(Rt),
                "ontouchstart"in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                o.default(this.tip).hasClass(Lt)) {
                    var s = d.getTransitionDurationFromElement(n);
                    o.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s)
                } else
                    a();
                this._hoverState = ""
            }
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(t) {
            o.default(this.getTipElement()).addClass("bs-tooltip-" + t)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || o.default(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(o.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()),
            o.default(t).removeClass("fade show")
        }
        ,
        e.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = At(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? o.default(e).parent().is(t) || t.empty().append(e) : t.text(o.default(e).text())
        }
        ,
        e.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        e._getPopperConfig = function(t) {
            var e = this;
            return r({}, {
                placement: t,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t)
                }
            }, this.config.popperConfig)
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element)),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(t) {
            return Bt[t.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(e) {
                if ("click" === e)
                    o.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if ("manual" !== e) {
                    var n = e === Ft ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , i = e === Ft ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    o.default(t.element).on(n, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )).on(i, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                t.element && t.hide()
            }
            ,
            o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = r({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            o.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Qt : Ft] = !0),
            o.default(e.getTipElement()).hasClass(Rt) || e._hoverState === xt ? e._hoverState = xt : (clearTimeout(e._timeout),
            e._hoverState = xt,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                e._hoverState === xt && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        ,
        e._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            o.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Qt : Ft] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = qt,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                e._hoverState === qt && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(t) {
            var e = o.default(this.element).data();
            return Object.keys(e).forEach((function(t) {
                -1 !== Pt.indexOf(t) && delete e[t]
            }
            )),
            "number" == typeof (t = r({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            d.typeCheckConfig(It, t, this.constructor.DefaultType),
            t.sanitize && (t.template = At(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        e._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        e._cleanTipClass = function() {
            var t = o.default(this.getTipElement())
              , e = t.attr("class").match(jt);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(t) {
            this.tip = t.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        e._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (o.default(t).removeClass(Lt),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data(kt)
                  , a = "object" == typeof e && e;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this,a),
                n.data(kt, i)),
                "string" == typeof e)) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Ht
            }
        }, {
            key: "NAME",
            get: function() {
                return It
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return kt
            }
        }, {
            key: "Event",
            get: function() {
                return Mt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ut
            }
        }]),
        t
    }();
    o.default.fn.tooltip = Wt._jQueryInterface,
    o.default.fn.tooltip.Constructor = Wt,
    o.default.fn.tooltip.noConflict = function() {
        return o.default.fn.tooltip = Ot,
        Wt._jQueryInterface
    }
    ;
    var Vt = "bs.popover"
      , zt = o.default.fn.popover
      , Kt = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Xt = r({}, Wt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Yt = r({}, Wt.DefaultType, {
        content: "(string|element|function)"
    })
      , $t = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , Jt = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        e.prototype.constructor = e,
        u(e, n);
        var a = i.prototype;
        return a.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        a.addAttachmentClass = function(t) {
            o.default(this.getTipElement()).addClass("bs-popover-" + t)
        }
        ,
        a.getTipElement = function() {
            return this.tip = this.tip || o.default(this.config.template)[0],
            this.tip
        }
        ,
        a.setContent = function() {
            var t = o.default(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show")
        }
        ,
        a._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        a._cleanTipClass = function() {
            var t = o.default(this.getTipElement())
              , e = t.attr("class").match(Kt);
            null !== e && e.length > 0 && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(t) {
            return this.each((function() {
                var e = o.default(this).data(Vt)
                  , n = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this,n),
                o.default(this).data(Vt, e)),
                "string" == typeof t)) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        l(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Xt
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Vt
            }
        }, {
            key: "Event",
            get: function() {
                return $t
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Yt
            }
        }]),
        i
    }(Wt);
    o.default.fn.popover = Jt._jQueryInterface,
    o.default.fn.popover.Constructor = Jt,
    o.default.fn.popover.noConflict = function() {
        return o.default.fn.popover = zt,
        Jt._jQueryInterface
    }
    ;
    var Gt = "scrollspy"
      , Zt = "bs.scrollspy"
      , te = o.default.fn[Gt]
      , ee = "active"
      , ne = "position"
      , ie = ".nav, .list-group"
      , oe = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ae = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , se = function() {
        function t(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            o.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t) {
                return n._process(t)
            }
            )),
            this.refresh(),
            this._process()
        }
        var e = t.prototype;
        return e.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : ne
              , n = "auto" === this._config.method ? e : this._config.method
              , i = n === ne ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                var e, a = d.getSelectorFromElement(t);
                if (a && (e = document.querySelector(a)),
                e) {
                    var s = e.getBoundingClientRect();
                    if (s.width || s.height)
                        return [o.default(e)[n]().top + i, a]
                }
                return null
            }
            )).filter((function(t) {
                return t
            }
            )).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, Zt),
            o.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(t) {
            if ("string" != typeof (t = r({}, oe, "object" == typeof t && t ? t : {})).target && d.isElement(t.target)) {
                var e = o.default(t.target).attr("id");
                e || (e = d.getUID(Gt),
                o.default(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return d.typeCheckConfig(Gt, t, ae),
            t
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; )
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
        }
        ,
        e._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map((function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , n = o.default([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ee),
            n.addClass(ee)) : (n.addClass(ee),
            n.parents(ie).prev(".nav-link, .list-group-item").addClass(ee),
            n.parents(ie).prev(".nav-item").children(".nav-link").addClass(ee)),
            o.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                return t.classList.contains(ee)
            }
            )).forEach((function(t) {
                return t.classList.remove(ee)
            }
            ))
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this).data(Zt);
                if (n || (n = new t(this,"object" == typeof e && e),
                o.default(this).data(Zt, n)),
                "string" == typeof e) {
                    if ("undefined" == typeof n[e])
                        throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return oe
            }
        }]),
        t
    }();
    o.default(window).on("load.bs.scrollspy.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--; ) {
            var n = o.default(t[e]);
            se._jQueryInterface.call(n, n.data())
        }
    }
    )),
    o.default.fn[Gt] = se._jQueryInterface,
    o.default.fn[Gt].Constructor = se,
    o.default.fn[Gt].noConflict = function() {
        return o.default.fn[Gt] = te,
        se._jQueryInterface
    }
    ;
    var le = "bs.tab"
      , re = o.default.fn.tab
      , ue = "active"
      , fe = "fade"
      , de = "show"
      , ce = ".active"
      , he = "> li > .active"
      , ge = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass(ue) || o.default(this._element).hasClass("disabled"))) {
                var e, n, i = o.default(this._element).closest(".nav, .list-group")[0], a = d.getSelectorFromElement(this._element);
                if (i) {
                    var s = "UL" === i.nodeName || "OL" === i.nodeName ? he : ce;
                    n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1]
                }
                var l = o.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                })
                  , r = o.default.Event("show.bs.tab", {
                    relatedTarget: n
                });
                if (n && o.default(n).trigger(l),
                o.default(this._element).trigger(r),
                !r.isDefaultPrevented() && !l.isDefaultPrevented()) {
                    a && (e = document.querySelector(a)),
                    this._activate(this._element, i);
                    var u = function() {
                        var e = o.default.Event("hidden.bs.tab", {
                            relatedTarget: t._element
                        })
                          , i = o.default.Event("shown.bs.tab", {
                            relatedTarget: n
                        });
                        o.default(n).trigger(e),
                        o.default(t._element).trigger(i)
                    };
                    e ? this._activate(e, e.parentNode, u) : u()
                }
            }
        }
        ,
        e.dispose = function() {
            o.default.removeData(this._element, le),
            this._element = null
        }
        ,
        e._activate = function(t, e, n) {
            var i = this
              , a = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? o.default(e).children(ce) : o.default(e).find(he))[0]
              , s = n && a && o.default(a).hasClass(fe)
              , l = function() {
                return i._transitionComplete(t, a, n)
            };
            if (a && s) {
                var r = d.getTransitionDurationFromElement(a);
                o.default(a).removeClass(de).one(d.TRANSITION_END, l).emulateTransitionEnd(r)
            } else
                l()
        }
        ,
        e._transitionComplete = function(t, e, n) {
            if (e) {
                o.default(e).removeClass(ue);
                var i = o.default(e.parentNode).find("> .dropdown-menu .active")[0];
                i && o.default(i).removeClass(ue),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            o.default(t).addClass(ue),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            d.reflow(t),
            t.classList.contains(fe) && t.classList.add(de);
            var a = t.parentNode;
            if (a && "LI" === a.nodeName && (a = a.parentNode),
            a && o.default(a).hasClass("dropdown-menu")) {
                var s = o.default(t).closest(".dropdown")[0];
                if (s) {
                    var l = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                    o.default(l).addClass(ue)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data(le);
                if (i || (i = new t(this),
                n.data(le, i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }]),
        t
    }();
    o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(),
        ge._jQueryInterface.call(o.default(this), "show")
    }
    )),
    o.default.fn.tab = ge._jQueryInterface,
    o.default.fn.tab.Constructor = ge,
    o.default.fn.tab.noConflict = function() {
        return o.default.fn.tab = re,
        ge._jQueryInterface
    }
    ;
    var me = "bs.toast"
      , pe = o.default.fn.toast
      , _e = "hide"
      , ve = "show"
      , ye = "showing"
      , be = "click.dismiss.bs.toast"
      , Ee = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Te = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , we = function() {
        function t(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this
              , e = o.default.Event("show.bs.toast");
            if (o.default(this._element).trigger(e),
            !e.isDefaultPrevented()) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    t._element.classList.remove(ye),
                    t._element.classList.add(ve),
                    o.default(t._element).trigger("shown.bs.toast"),
                    t._config.autohide && (t._timeout = setTimeout((function() {
                        t.hide()
                    }
                    ), t._config.delay))
                };
                if (this._element.classList.remove(_e),
                d.reflow(this._element),
                this._element.classList.add(ye),
                this._config.animation) {
                    var i = d.getTransitionDurationFromElement(this._element);
                    o.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
        }
        ,
        e.hide = function() {
            if (this._element.classList.contains(ve)) {
                var t = o.default.Event("hide.bs.toast");
                o.default(this._element).trigger(t),
                t.isDefaultPrevented() || this._close()
            }
        }
        ,
        e.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains(ve) && this._element.classList.remove(ve),
            o.default(this._element).off(be),
            o.default.removeData(this._element, me),
            this._element = null,
            this._config = null
        }
        ,
        e._getConfig = function(t) {
            return t = r({}, Ee, o.default(this._element).data(), "object" == typeof t && t ? t : {}),
            d.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        e._setListeners = function() {
            var t = this;
            o.default(this._element).on(be, '[data-dismiss="toast"]', (function() {
                return t.hide()
            }
            ))
        }
        ,
        e._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add(_e),
                o.default(t._element).trigger("hidden.bs.toast")
            };
            if (this._element.classList.remove(ve),
            this._config.animation) {
                var n = d.getTransitionDurationFromElement(this._element);
                o.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        e._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each((function() {
                var n = o.default(this)
                  , i = n.data(me);
                if (i || (i = new t(this,"object" == typeof e && e),
                n.data(me, i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e](this)
                }
            }
            ))
        }
        ,
        l(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Te
            }
        }, {
            key: "Default",
            get: function() {
                return Ee
            }
        }]),
        t
    }();
    o.default.fn.toast = we._jQueryInterface,
    o.default.fn.toast.Constructor = we,
    o.default.fn.toast.noConflict = function() {
        return o.default.fn.toast = pe,
        we._jQueryInterface
    }
    ,
    t.Alert = g,
    t.Button = E,
    t.Carousel = P,
    t.Collapse = V,
    t.Dropdown = lt,
    t.Modal = Ct,
    t.Popover = Jt,
    t.Scrollspy = se,
    t.Tab = ge,
    t.Toast = we,
    t.Tooltip = Wt,
    t.Util = d,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=bootstrap.min.js.map
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function() {
    var c, f;
    c = this.jQuery || window.jQuery;
    f = c(window);
    c.fn.stick_in_parent = function(b) {
        var A, w, B, n, p, J, k, E, t, K, q, L;
        null == b && (b = {});
        t = b.sticky_class;
        B = b.inner_scrolling;
        E = b.recalc_every;
        k = b.parent;
        p = b.offset_top;
        n = b.spacer;
        w = b.bottoming;
        null == p && (p = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = c(document);
        null == w && (w = !0);
        J = function(a) {
            var b;
            return window.getComputedStyle ? (a = window.getComputedStyle(a[0]),
            b = parseFloat(a.getPropertyValue("width")) + parseFloat(a.getPropertyValue("margin-left")) + parseFloat(a.getPropertyValue("margin-right")),
            "border-box" !== a.getPropertyValue("box-sizing") && (b += parseFloat(a.getPropertyValue("border-left-width")) + parseFloat(a.getPropertyValue("border-right-width")) + parseFloat(a.getPropertyValue("padding-left")) + parseFloat(a.getPropertyValue("padding-right"))),
            b) : a.outerWidth(!0)
        }
        ;
        K = function(a, b, q, C, F, u, r, G) {
            var v, H, m, D, I, d, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length)
                    throw "failed to find stick parent";
                v = m = !1;
                (h = null != n ? n && a.closest(n) : c("<div />")) && h.css("position", a.css("position"));
                x = function() {
                    var d, f, e;
                    if (!G && (I = A.height(),
                    d = parseInt(g.css("border-top-width"), 10),
                    f = parseInt(g.css("padding-top"), 10),
                    b = parseInt(g.css("padding-bottom"), 10),
                    q = g.offset().top + d + f,
                    C = g.height(),
                    m && (v = m = !1,
                    null == n && (a.insertAfter(h),
                    h.detach()),
                    a.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(t),
                    e = !0),
                    F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - p,
                    u = a.outerHeight(!0),
                    r = a.css("float"),
                    h && h.css({
                        width: J(a),
                        height: u,
                        display: a.css("display"),
                        "vertical-align": a.css("vertical-align"),
                        "float": r
                    }),
                    e))
                        return l()
                }
                ;
                x();
                if (u !== C)
                    return D = void 0,
                    d = p,
                    z = E,
                    l = function() {
                        var c, l, e, k;
                        if (!G && (e = !1,
                        null != z && (--z,
                        0 >= z && (z = E,
                        x(),
                        e = !0)),
                        e || A.height() === I || x(),
                        e = f.scrollTop(),
                        null != D && (l = e - D),
                        D = e,
                        m ? (w && (k = e + u + d > C + q,
                        v && !k && (v = !1,
                        a.css({
                            position: "fixed",
                            bottom: "",
                            top: d
                        }).trigger("sticky_kit:unbottom"))),
                        e < F && (m = !1,
                        d = p,
                        null == n && ("left" !== r && "right" !== r || a.insertAfter(h),
                        h.detach()),
                        c = {
                            position: "",
                            width: "",
                            top: ""
                        },
                        a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
                        B && (c = f.height(),
                        u + p > c && !v && (d -= l,
                        d = Math.max(c - u, d),
                        d = Math.min(p, d),
                        m && a.css({
                            top: d + "px"
                        })))) : e > F && (m = !0,
                        c = {
                            position: "fixed",
                            top: d
                        },
                        c.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px",
                        a.css(c).addClass(t),
                        null == n && (a.after(h),
                        "left" !== r && "right" !== r || h.append(a)),
                        a.trigger("sticky_kit:stick")),
                        m && w && (null == k && (k = e + u + d > C + q),
                        !v && k)))
                            return v = !0,
                            "static" === g.css("position") && g.css({
                                position: "relative"
                            }),
                            a.css({
                                position: "absolute",
                                bottom: b,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")
                    }
                    ,
                    y = function() {
                        x();
                        return l()
                    }
                    ,
                    H = function() {
                        G = !0;
                        f.off("touchmove", l);
                        f.off("scroll", l);
                        f.off("resize", y);
                        c(document.body).off("sticky_kit:recalc", y);
                        a.off("sticky_kit:detach", H);
                        a.removeData("sticky_kit");
                        a.css({
                            position: "",
                            bottom: "",
                            top: "",
                            width: ""
                        });
                        g.position("position", "");
                        if (m)
                            return null == n && ("left" !== r && "right" !== r || a.insertAfter(h),
                            h.remove()),
                            a.removeClass(t)
                    }
                    ,
                    f.on("touchmove", l),
                    f.on("scroll", l),
                    f.on("resize", y),
                    c(document.body).on("sticky_kit:recalc", y),
                    a.on("sticky_kit:detach", H),
                    setTimeout(l, 0)
            }
        }
        ;
        q = 0;
        for (L = this.length; q < L; q++)
            b = this[q],
            K(c(b));
        return this
    }
}
).call(this);

!function(i) {
    function t(t) {
        var e = 0;
        return t.children("li").each(function() {
            e += i(this).outerWidth(!0)
        }),
        e
    }
    function e(t) {
        return Math.max.apply(Math, t.children().map(function() {
            return i(this).width()
        }).get())
    }
    function s(i) {
        var t = i.data("settings") || {
            direction: "left",
            speed: 50
        }
          , e = i.children().first()
          , s = Math.abs(-i.css(t.direction).replace("px", "").replace("auto", "0") - e.outerWidth(!0))
          , n = 1e3 * s / t.speed
          , r = {};
        return r[t.direction] = i.css(t.direction).replace("px", "").replace("auto", "0") - s,
        {
            css: r,
            time: n
        }
    }
    function n(i) {
        var t = i.data("settings") || {
            direction: "left"
        };
        i.css("transition-duration", "0s").css(t.direction, "0");
        var e = i.children().first();
        e.hasClass("webticker-init") ? e.remove() : i.children().last().after(e)
    }
    function r(i, t) {
        var e = i.data("settings") || {
            direction: "left"
        };
        "undefined" == typeof t && (t = !1),
        t && n(i);
        var a = s(i);
        i.animate(a.css, a.time, "linear", function() {
            i.css(e.direction, "0"),
            r(i, !0)
        })
    }
    function a(i, t) {
        "undefined" == typeof t && (t = !1),
        t && n(i);
        var e = s(i)
          , r = e.time / 1e3;
        r += "s",
        i.css(e.css).css("transition-duration", r)
    }
    function c(t, e, s) {
        var n = [];
        i.get(t, function(t) {
            var r = i(t);
            r.find("item").each(function() {
                var t = i(this)
                  , e = {
                    title: t.find("title").text(),
                    link: t.find("link").text()
                }
                  , s = '<li><a href="' + e.link + '"">' + e.title + "</a></li>";
                n += s
            }),
            s.webTicker("update", n, e)
        })
    }
    function l(s, n) {
        if (s.children("li").length < 1)
            return window.console,
            !1;
        var r = s.data("settings");
        r.duplicateLoops = r.duplicateLoops || 0,
        s.width("auto");
        var a = 0;
        s.children("li").each(function() {
            a += i(this).outerWidth(!0)
        });
        var c, l = s.find("li:first").height();
        if (r.duplicate) {
            c = e(s);
            for (var o = 0; a - c < s.parent().width() || 1 === s.children().length || o < r.duplicateLoops; ) {
                var d = s.children().clone();
                s.append(d),
                a = 0,
                a = t(s),
                c = e(s),
                o++
            }
            r.duplicateLoops = o
        } else {
            var h = s.parent().width() - a;
            h += s.find("li:first").width(),
            s.find(".ticker-spacer").length > 0 ? s.find(".ticker-spacer").width(h) : s.append('<li class="ticker-spacer" style="float: ' + r.direction + ";width:" + h + "px;height:" + l + 'px;"></li>')
        }
        r.startEmpty && n && s.prepend('<li class="webticker-init" style="float: ' + r.direction + ";width:" + s.parent().width() + "px;height:" + l + 'px;"></li>'),
        a = 0,
        a = t(s),
        s.width(a + 200);
        var f = 0;
        for (f = t(s); f >= s.width(); )
            s.width(s.width() + 200),
            f = 0,
            f = t(s);
        return !0
    }
    var o = function() {
        var i = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if ("" === i.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in i)
                return !0;
        return !1
    }()
      , d = {
        init: function(t) {
            return t = jQuery.extend({
                speed: 50,
                direction: "left",
                moving: !0,
                startEmpty: !0,
                duplicate: !1,
                rssurl: !1,
                hoverpause: !0,
                rssfrequency: 0,
                updatetype: "reset",
                transition: "linear",
                height: "30px",
                maskleft: "",
                maskright: "",
                maskwidth: 0
            }, t),
            this.each(function() {
                jQuery(this).data("settings", t);
                var e = jQuery(this)
                  , s = e.wrap('<div class="mask"></div>');
                s.after('<span class="tickeroverlay-left">&nbsp;</span><span class="tickeroverlay-right">&nbsp;</span>');
                var n, d = e.parent().wrap('<div class="tickercontainer"></div>');
                if (i(window).resize(function() {
                    clearTimeout(n),
                    n = setTimeout(function() {
                        console.log("window was resized"),
                        l(e, !1)
                    }, 500)
                }),
                e.children("li").css("white-space", "nowrap"),
                e.children("li").css("float", t.direction),
                e.children("li").css("padding", "0 7px"),
                e.children("li").css("line-height", t.height),
                s.css("position", "relative"),
                s.css("overflow", "hidden"),
                e.closest(".tickercontainer").css("height", t.height),
                e.closest(".tickercontainer").css("overflow", "hidden"),
                e.css("float", t.direction),
                e.css("position", "relative"),
                e.css("font", "bold 10px Verdana"),
                e.css("list-style-type", "none"),
                e.css("margin", "0"),
                e.css("padding", "0"),
                "" !== t.maskleft && "" !== t.maskright) {
                    var h = 'url("' + t.maskleft + '")';
                    d.find(".tickeroverlay-left").css("background-image", h),
                    d.find(".tickeroverlay-left").css("display", "block"),
                    d.find(".tickeroverlay-left").css("pointer-events", "none"),
                    d.find(".tickeroverlay-left").css("position", "absolute"),
                    d.find(".tickeroverlay-left").css("z-index", "30"),
                    d.find(".tickeroverlay-left").css("height", t.height),
                    d.find(".tickeroverlay-left").css("width", t.maskwidth),
                    d.find(".tickeroverlay-left").css("top", "0"),
                    d.find(".tickeroverlay-left").css("left", "-2px"),
                    h = 'url("' + t.maskright + '")',
                    d.find(".tickeroverlay-right").css("background-image", h),
                    d.find(".tickeroverlay-right").css("display", "block"),
                    d.find(".tickeroverlay-right").css("pointer-events", "none"),
                    d.find(".tickeroverlay-right").css("position", "absolute"),
                    d.find(".tickeroverlay-right").css("z-index", "30"),
                    d.find(".tickeroverlay-right").css("height", t.height),
                    d.find(".tickeroverlay-right").css("width", t.maskwidth),
                    d.find(".tickeroverlay-right").css("top", "0"),
                    d.find(".tickeroverlay-right").css("right", "-2px")
                } else
                    d.find(".tickeroverlay-left").css("display", "none"),
                    d.find(".tickeroverlay-right").css("display", "none");
                e.children("li").last().addClass("last");
                var f = l(e, !0);
                t.rssurl && (c(t.rssurl, t.type, e),
                t.rssfrequency > 0 && window.setInterval(function() {
                    c(t.rssurl, t.type, e)
                }, 1e3 * t.rssfrequency * 60)),
                o ? (e.css("transition-timing-function", t.transition),
                e.css("transition-duration", "0s").css(t.direction, "0"),
                f && a(e, !1),
                e.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", function(t) {
                    return !!e.is(t.target) && void a(i(this), !0)
                })) : f && r(i(this)),
                t.hoverpause && e.hover(function() {
                    if (o) {
                        var e = i(this).css(t.direction);
                        i(this).css("transition-duration", "0s").css(t.direction, e)
                    } else
                        jQuery(this).stop()
                }, function() {
                    jQuery(this).data("settings").moving && (o ? a(i(this), !1) : r(e))
                })
            })
        },
        stop: function() {
            var t = i(this).data("settings");
            if (t.moving)
                return t.moving = !1,
                this.each(function() {
                    if (o) {
                        var e = i(this).css(t.direction);
                        i(this).css("transition-duration", "0s").css(t.direction, e)
                    } else
                        i(this).stop()
                })
        },
        cont: function() {
            var t = i(this).data("settings");
            if (!t.moving)
                return t.moving = !0,
                this.each(function() {
                    o ? a(i(this), !1) : r(i(this))
                })
        },
        transition: function(t) {
            var e = i(this);
            o && e.css("transition-timing-function", t)
        },
        update: function(e, s, n, r) {
            s = s || "reset",
            "undefined" == typeof n && (n = !0),
            "undefined" == typeof r && (r = !1),
            "string" == typeof e && (e = i(e));
            var a = i(this);
            a.webTicker("stop");
            var c = i(this).data("settings");
            if ("reset" === s)
                a.html(e),
                l(a, !0);
            else if ("swap" === s) {
                var o, d, h, f;
                if (window.console,
                a.children("li").length < 1)
                    a.html(e),
                    a.css(c.direction, "0"),
                    l(a, !0);
                else if (c.duplicate === !0) {
                    a.children("li").addClass("old");
                    for (var p = e.length - 1; p >= 0; p--)
                        o = i(e[p]).data("update"),
                        d = a.find('[data-update="' + o + '"]'),
                        d.length < 1 ? n && (0 === a.find(".ticker-spacer:first-child").length && a.find(".ticker-spacer").length > 0 ? a.children("li.ticker-spacer").before(e[p]) : (h = i(e[p]),
                        p === e.length - 1 && h.addClass("last"),
                        a.find("last").after(h),
                        a.find("last").removeClass("last"))) : a.find('[data-update="' + o + '"]').replaceWith(e[p]);
                    a.children("li.webticker-init, li.ticker-spacer").removeClass("old"),
                    r && a.children("li").remove(".old"),
                    f = 0,
                    f = t(a),
                    a.width(f + 200),
                    a.find("li.webticker-init").length < 1 && (c.startEmpty = !1),
                    a.html(e),
                    a.children("li").css("white-space", "nowrap"),
                    a.children("li").css("float", c.direction),
                    a.children("li").css("padding", "0 7px"),
                    a.children("li").css("line-height", c.height),
                    l(a, !0)
                } else {
                    a.children("li").addClass("old");
                    for (var u = 0; u < e.length; u++)
                        o = i(e[u]).data("update"),
                        d = a.find('[data-update="' + o + '"]'),
                        d.length < 1 ? n && (0 === a.find(".ticker-spacer:first-child").length && a.find(".ticker-spacer").length > 0 ? a.children("li.ticker-spacer").before(e[u]) : (h = i(e[u]),
                        u === e.length - 1 && h.addClass("last"),
                        a.find(".old.last").after(h),
                        a.find(".old.last").removeClass("last"))) : a.find('[data-update="' + o + '"]').replaceWith(e[u]);
                    a.children("li.webticker-init, li.ticker-spacer").removeClass("old"),
                    a.children("li").css("white-space", "nowrap"),
                    a.children("li").css("float", c.direction),
                    a.children("li").css("padding", "0 7px"),
                    a.children("li").css("line-height", c.height),
                    r && a.children("li").remove(".old"),
                    f = 0,
                    f = t(a),
                    a.width(f + 200)
                }
            }
            a.webTicker("cont")
        }
    };
    i.fn.webTicker = function(t) {
        return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void i.error("Method " + t + " does not exist on jQuery.webTicker") : d.init.apply(this, arguments)
    }
}(jQuery);
/*!
 * ASP.NET SignalR JavaScript Library 2.4.1
 * http://signalr.net/
 *
 * Copyright (c) .NET Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 *
 */
(function(n, t, i) {
    function w(t, i) {
        var u, f;
        if (n.isArray(t)) {
            for (u = t.length - 1; u >= 0; u--)
                f = t[u],
                n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."),
                t.splice(u, 1));
            t.length === 0 && (i.log("No transports remain within the specified transport array."),
            t = null)
        } else if (r.transports[t] || t === "auto") {
            if (t === "auto" && r._.ieVersion <= 8)
                return ["longPolling"]
        } else
            i.log("Invalid transport: " + t.toString() + "."),
            t = null;
        return t
    }
    function b(n) {
        return n === "http:" ? 80 : n === "https:" ? 443 : void 0
    }
    function a(n, t) {
        return t.match(/:\d+$/) ? t : t + ":" + b(n)
    }
    function k(t, i) {
        var u = this
          , r = [];
        u.tryBuffer = function(i) {
            return t.state === n.signalR.connectionState.connecting ? (r.push(i),
            !0) : !1
        }
        ;
        u.drain = function() {
            if (t.state === n.signalR.connectionState.connected)
                while (r.length > 0)
                    i(r.shift())
        }
        ;
        u.clear = function() {
            r = []
        }
    }
    var f = {
        nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
        noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
        errorOnNegotiate: "Error during negotiation request.",
        stoppedWhileLoading: "The connection was stopped during page load.",
        stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
        errorParsingNegotiateResponse: "Error parsing negotiate response.",
        errorRedirectionExceedsLimit: "Negotiate redirection limit exceeded.",
        errorDuringStartRequest: "Error during start request. Stopping the connection.",
        errorFromServer: "Error message received from the server: '{0}'.",
        stoppedDuringStartRequest: "The connection was stopped during the start request.",
        errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
        invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
        protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
        aspnetCoreSignalrServer: "Detected a connection attempt to an ASP.NET Core SignalR Server. This client only supports connecting to an ASP.NET SignalR Server. See https://aka.ms/signalr-core-differences for details.",
        sendFailed: "Send failed.",
        parseFailed: "Failed at parsing response: {0}",
        longPollFailed: "Long polling request failed.",
        eventSourceFailedToConnect: "EventSource failed to connect.",
        eventSourceError: "Error raised by EventSource",
        webSocketClosed: "WebSocket closed.",
        pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
        pingServerFailed: "Failed to ping server.",
        pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
        pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
        noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
        webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
        reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
        reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection.",
        jsonpNotSupportedWithAccessToken: "The JSONP protocol does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."
    };
    if (typeof n != "function")
        throw new Error(f.nojQuery);
    var r, h, o = t.document.readyState === "complete", e = n(t), c = "__Negotiate Aborted__", u = {
        onStart: "onStart",
        onStarting: "onStarting",
        onReceived: "onReceived",
        onError: "onError",
        onConnectionSlow: "onConnectionSlow",
        onReconnecting: "onReconnecting",
        onReconnect: "onReconnect",
        onStateChanged: "onStateChanged",
        onDisconnect: "onDisconnect"
    }, v = function(n, i) {
        if (i !== !1) {
            var r;
            typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n,
            t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
        }
    }, s = function(t, i, r) {
        return i === t.state ? (t.state = r,
        n(t).triggerHandler(u.onStateChanged, [{
            oldState: i,
            newState: r
        }]),
        !0) : !1
    }, y = function(n) {
        return n.state === r.connectionState.disconnected
    }, l = function(n) {
        return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n)
    }, p = function(i) {
        var f, e;
        i._.configuredStopReconnectingTimeout || (e = function(t) {
            var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
            t.log(i);
            n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]);
            t.stop(!1, !1)
        }
        ,
        i.reconnecting(function() {
            var n = this;
            n.state === r.connectionState.reconnecting && (f = t.setTimeout(function() {
                e(n)
            }, n.disconnectTimeout))
        }),
        i.stateChanged(function(n) {
            n.oldState === r.connectionState.reconnecting && t.clearTimeout(f)
        }),
        i._.configuredStopReconnectingTimeout = !0)
    };
    if (r = function(n, t, i) {
        return new r.fn.init(n,t,i)
    }
    ,
    r._ = {
        defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
        ieVersion: function() {
            var i, n;
            return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent),
            n && (i = t.parseFloat(n[1]))),
            i
        }(),
        error: function(n, t, i) {
            var r = new Error(n);
            return r.source = t,
            typeof i != "undefined" && (r.context = i),
            r
        },
        transportError: function(n, t, r, u) {
            var f = this.error(n, r, u);
            return f.transport = t ? t.name : i,
            f
        },
        format: function() {
            for (var t = arguments[0], n = 0; n < arguments.length - 1; n++)
                t = t.replace("{" + n + "}", arguments[n + 1]);
            return t
        },
        firefoxMajorVersion: function(n) {
            var t = n.match(/Firefox\/(\d+)/);
            return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
        },
        configurePingInterval: function(i) {
            var f = i._.config
              , e = function(t) {
                n(i).triggerHandler(u.onError, [t])
            };
            f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function() {
                r.transports._logic.pingServer(i).fail(e)
            }, f.pingInterval))
        }
    },
    r.events = u,
    r.resources = f,
    r.ajaxDefaults = {
        processData: !0,
        timeout: null,
        async: !0,
        global: !1,
        cache: !1
    },
    r.changeState = s,
    r.isDisconnecting = y,
    r.connectionState = {
        connecting: 0,
        connected: 1,
        reconnecting: 2,
        disconnected: 4
    },
    r.hub = {
        start: function() {
            throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");
        }
    },
    typeof e.on == "function")
        e.on("load", function() {
            o = !0
        });
    else
        e.load(function() {
            o = !0
        });
    r.fn = r.prototype = {
        init: function(t, i, r) {
            var f = n(this);
            this.url = t;
            this.qs = i;
            this.lastError = null;
            this._ = {
                keepAliveData: {},
                connectingMessageBuffer: new k(this,function(n) {
                    f.triggerHandler(u.onReceived, [n])
                }
                ),
                lastMessageAt: (new Date).getTime(),
                lastActiveAt: (new Date).getTime(),
                beatInterval: 5e3,
                beatHandle: null,
                totalTransportConnectTimeout: 0,
                redirectQs: null
            };
            typeof r == "boolean" && (this.logging = r)
        },
        _parseResponse: function(n) {
            var t = this;
            return n ? typeof n == "string" ? t.json.parse(n) : n : n
        },
        _originalJson: t.JSON,
        json: t.JSON,
        isCrossDomain: function(i, r) {
            var u;
            return (i = n.trim(i),
            r = r || t.location,
            i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"),
            u.href = i,
            u.protocol + a(u.protocol, u.host) !== r.protocol + a(r.protocol, r.host))
        },
        ajaxDataType: "text",
        contentType: "application/json; charset=UTF-8",
        logging: !1,
        state: r.connectionState.disconnected,
        clientProtocol: "2.1",
        supportedProtocols: ["1.5", "2.0", "2.1"],
        negotiateRedirectSupportedProtocols: ["2.0", "2.1"],
        reconnectDelay: 2e3,
        transportConnectTimeout: 0,
        disconnectTimeout: 3e4,
        reconnectWindow: 3e4,
        keepAliveWarnAt: 2 / 3,
        start: function(i, h) {
            var a = this, v = {
                pingInterval: 3e5,
                waitForPageLoad: !0,
                transport: "auto",
                jsonp: !1
            }, g, y = a._deferral || n.Deferred(), b = t.document.createElement("a"), nt = function(i, u) {
                i.url === u && i.baseUrl || (i.url = u,
                b.href = i.url,
                b.protocol && b.protocol !== ":" ? (i.protocol = b.protocol,
                i.host = b.host) : (i.protocol = t.document.location.protocol,
                i.host = b.host || t.document.location.host),
                i.baseUrl = i.protocol + "//" + i.host,
                i.wsProtocol = i.protocol === "https:" ? "wss://" : "ws://",
                i.url.indexOf("//") === 0 && (i.url = t.location.protocol + i.url,
                i.log("Protocol relative URL detected, normalizing it to '" + i.url + "'.")),
                i.isCrossDomain(i.url) && (i.log("Auto detected cross domain url."),
                v.transport === "auto" && (v.transport = ["webSockets", "serverSentEvents", "longPolling"]),
                typeof i.withCredentials == "undefined" && (i.withCredentials = !0),
                n.support.cors || (i.ajaxDataType = "jsonp",
                i.log("Using jsonp because this browser doesn't support CORS.")),
                i.contentType = r._.defaultContentType))
            }, d, k;
            if (a.lastError = null,
            a._deferral = y,
            !a.json)
                throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
            if (n.type(i) === "function" ? h = i : n.type(i) === "object" && (n.extend(v, i),
            n.type(v.callback) === "function" && (h = v.callback)),
            v.transport = w(v.transport, a),
            !v.transport)
                throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
            return (a._.config = v,
            !o && v.waitForPageLoad === !0) ? (a._.deferredStartHandler = function() {
                a.start(i, h)
            }
            ,
            e.bind("load", a._.deferredStartHandler),
            y.promise()) : a.state === r.connectionState.connecting ? y.promise() : s(a, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (y.resolve(a),
            y.promise()) : (p(a),
            v.transport === "auto" && v.jsonp === !0 && (v.transport = "longPolling"),
            a.withCredentials = v.withCredentials,
            a._originalUrl = a.url,
            a.ajaxDataType = v.jsonp ? "jsonp" : "text",
            nt(a, a.url),
            n(a).bind(u.onStart, function() {
                n.type(h) === "function" && h.call(a);
                y.resolve(a)
            }),
            a._.initHandler = r.transports._logic.initHandler(a),
            g = function(i, o) {
                var c = r._.error(f.noTransportOnInit);
                if (o = o || 0,
                o >= i.length) {
                    o === 0 ? a.log("No transports supported by the server were selected.") : o === 1 ? a.log("No fallback transports were selected.") : a.log("Fallback transports exhausted.");
                    n(a).triggerHandler(u.onError, [c]);
                    y.reject(c);
                    a.stop();
                    return
                }
                if (a.state !== r.connectionState.disconnected) {
                    var p = i[o]
                      , h = r.transports[p]
                      , v = function() {
                        g(i, o + 1)
                    };
                    a.transport = h;
                    try {
                        a._.initHandler.start(h, function() {
                            var f = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11
                              , i = !0;
                            a.log("The start request succeeded. Transitioning to the connected state.");
                            l(a) && r.transports._logic.monitorKeepAlive(a);
                            r.transports._logic.startHeartbeat(a);
                            r._.configurePingInterval(a);
                            s(a, r.connectionState.connecting, r.connectionState.connected) || a.log("WARNING! The connection was not in the connecting state.");
                            a._.connectingMessageBuffer.drain();
                            n(a).triggerHandler(u.onStart);
                            e.bind("unload", function() {
                                a.log("Window unloading, stopping the connection.");
                                a.stop(i)
                            });
                            f && e.bind("beforeunload", function() {
                                t.setTimeout(function() {
                                    a.stop(i)
                                }, 0)
                            })
                        }, v)
                    } catch (w) {
                        a.log(h.name + " transport threw '" + w.message + "' when attempting to start.");
                        v()
                    }
                }
            }
            ,
            d = a.url + "/negotiate",
            k = function(t, i) {
                var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
                n(i).triggerHandler(u.onError, e);
                y.reject(e);
                i.stop()
            }
            ,
            n(a).triggerHandler(u.onStarting),
            d = r.transports._logic.prepareQueryString(a, d),
            a.log("Negotiating with '" + d + "'."),
            a._.negotiateRequest = function() {
                var t, h = 0, w = 100, i, e, o = [], s = [], l = function(n, t) {
                    var u = r.transports._logic.prepareQueryString(n, n.url + "/negotiate"), i;
                    return n.log("Negotiating with '" + u + "'."),
                    i = {
                        url: u,
                        error: function(t, i) {
                            i !== c ? k(t, n) : y.reject(r._.error(f.stoppedWhileNegotiating, null, n._.negotiateRequest))
                        },
                        success: t
                    },
                    n.accessToken && (i.headers = {
                        Authorization: "Bearer " + n.accessToken
                    }),
                    r.transports._logic.ajax(n, i)
                }, p = function(c) {
                    try {
                        t = a._parseResponse(c)
                    } catch (d) {
                        k(r._.error(f.errorParsingNegotiateResponse, d), a);
                        return
                    }
                    if (t.availableTransports) {
                        e = r._.error(f.aspnetCoreSignalrServer);
                        n(a).triggerHandler(u.onError, [e]);
                        y.reject(e);
                        return
                    }
                    if (!t.ProtocolVersion || a.supportedProtocols.indexOf(t.ProtocolVersion) === -1) {
                        e = r._.error(r._.format(f.protocolIncompatible, a.clientProtocol, t.ProtocolVersion));
                        n(a).triggerHandler(u.onError, [e]);
                        y.reject(e);
                        return
                    }
                    if (a.negotiateRedirectSupportedProtocols.indexOf(t.ProtocolVersion) !== -1) {
                        if (t.Error) {
                            e = r._.error(r._.format(f.errorFromServer, t.Error));
                            n(a).triggerHandler(u.onError, [e]);
                            y.reject(e);
                            return
                        }
                        if (t.RedirectUrl) {
                            if (h === w) {
                                k(r._.error(f.errorRedirectionExceedsLimit), a);
                                return
                            }
                            v.transport === "auto" && (v.transport = ["webSockets", "serverSentEvents", "longPolling"]);
                            a.log("Received redirect to: " + t.RedirectUrl);
                            a.accessToken = t.AccessToken;
                            var b = t.RedirectUrl.split("?", 2);
                            if (nt(a, b[0]),
                            a._.redirectQs = b.length === 2 ? b[1] : null,
                            a.ajaxDataType === "jsonp" && a.accessToken) {
                                k(r._.error(f.jsonpNotSupportedWithAccessToken), a);
                                return
                            }
                            h++;
                            l(a, p);
                            return
                        }
                    }
                    i = a._.keepAliveData;
                    a.appRelativeUrl = t.Url;
                    a.id = t.ConnectionId;
                    a.token = t.ConnectionToken;
                    a.webSocketServerUrl = t.WebSocketServerUrl;
                    a._.pollTimeout = t.ConnectionTimeout * 1e3 + 1e4;
                    a.disconnectTimeout = t.DisconnectTimeout * 1e3;
                    a._.totalTransportConnectTimeout = a.transportConnectTimeout + t.TransportConnectTimeout * 1e3;
                    t.KeepAliveTimeout ? (i.activated = !0,
                    i.timeout = t.KeepAliveTimeout * 1e3,
                    i.timeoutWarning = i.timeout * a.keepAliveWarnAt,
                    a._.beatInterval = (i.timeout - i.timeoutWarning) / 3) : i.activated = !1;
                    a.reconnectWindow = a.disconnectTimeout + (i.timeout || 0);
                    n.each(r.transports, function(n) {
                        if (n.indexOf("_") === 0 || n === "webSockets" && !t.TryWebSockets)
                            return !0;
                        s.push(n)
                    });
                    n.isArray(v.transport) ? n.each(v.transport, function(t, i) {
                        n.inArray(i, s) >= 0 && o.push(i)
                    }) : v.transport === "auto" ? o = s : n.inArray(v.transport, s) >= 0 && o.push(v.transport);
                    g(o)
                };
                return l(a, p)
            }(),
            y.promise())
        },
        starting: function(t) {
            var i = this;
            return n(i).bind(u.onStarting, function() {
                t.call(i)
            }),
            i
        },
        send: function(n) {
            var t = this;
            if (t.state === r.connectionState.disconnected)
                throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
            if (t.state === r.connectionState.connecting)
                throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
            return t.transport.send(t, n),
            t
        },
        received: function(t) {
            var i = this;
            return n(i).bind(u.onReceived, function(n, r) {
                t.call(i, r)
            }),
            i
        },
        stateChanged: function(t) {
            var i = this;
            return n(i).bind(u.onStateChanged, function(n, r) {
                t.call(i, r)
            }),
            i
        },
        error: function(t) {
            var i = this;
            return n(i).bind(u.onError, function(n, r, u) {
                i.lastError = r;
                t.call(i, r, u)
            }),
            i
        },
        disconnected: function(t) {
            var i = this;
            return n(i).bind(u.onDisconnect, function() {
                t.call(i)
            }),
            i
        },
        connectionSlow: function(t) {
            var i = this;
            return n(i).bind(u.onConnectionSlow, function() {
                t.call(i)
            }),
            i
        },
        reconnecting: function(t) {
            var i = this;
            return n(i).bind(u.onReconnecting, function() {
                t.call(i)
            }),
            i
        },
        reconnected: function(t) {
            var i = this;
            return n(i).bind(u.onReconnect, function() {
                t.call(i)
            }),
            i
        },
        stop: function(i, h) {
            var a = this
              , v = a._deferral;
            if (a._.deferredStartHandler && e.unbind("load", a._.deferredStartHandler),
            delete a._.config,
            delete a._.deferredStartHandler,
            !o && (!a._.config || a._.config.waitForPageLoad === !0)) {
                a.log("Stopping connection prior to negotiate.");
                v && v.reject(r._.error(f.stoppedWhileLoading));
                return
            }
            if (a.state !== r.connectionState.disconnected)
                return a.log("Stopping connection."),
                t.clearTimeout(a._.beatHandle),
                t.clearInterval(a._.pingIntervalId),
                a.transport && (a.transport.stop(a),
                h !== !1 && a.transport.abort(a, i),
                l(a) && r.transports._logic.stopMonitoringKeepAlive(a),
                a.transport = null),
                a._.negotiateRequest && (a._.negotiateRequest.abort(c),
                delete a._.negotiateRequest),
                a._.initHandler && a._.initHandler.stop(),
                delete a._deferral,
                delete a.messageId,
                delete a.groupsToken,
                delete a.id,
                delete a._.pingIntervalId,
                delete a._.lastMessageAt,
                delete a._.lastActiveAt,
                a._.connectingMessageBuffer.clear(),
                n(a).unbind(u.onStart),
                delete a.accessToken,
                delete a.protocol,
                delete a.host,
                delete a.baseUrl,
                delete a.wsProtocol,
                delete a.contentType,
                a.url = a._originalUrl,
                a._.redirectQs = null,
                s(a, a.state, r.connectionState.disconnected),
                n(a).triggerHandler(u.onDisconnect),
                a
        },
        log: function(n) {
            v(n, this.logging)
        }
    };
    r.fn.init.prototype = r.fn;
    r.noConflict = function() {
        return n.connection === r && (n.connection = h),
        r
    }
    ;
    n.connection && (h = n.connection);
    n.connection = n.signalR = r
}
)(window.jQuery, window),
function(n, t, i) {
    function s(n) {
        n._.keepAliveData.monitoring && l(n);
        u.markActive(n) && (n._.beatHandle = t.setTimeout(function() {
            s(n)
        }, n._.beatInterval))
    }
    function l(t) {
        var i = t._.keepAliveData, u;
        t.state === r.connectionState.connected && (u = (new Date).getTime() - t._.lastMessageAt,
        u >= i.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."),
        t.transport.lostConnection(t)) : u >= i.timeoutWarning ? i.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."),
        n(t).triggerHandler(f.onConnectionSlow),
        i.userNotified = !0) : i.userNotified = !1)
    }
    function e(n, t) {
        var i = n.url + t;
        return n.transport && (i += "?transport=" + n.transport.name),
        u.prepareQueryString(n, i)
    }
    function h(n) {
        this.connection = n;
        this.startRequested = !1;
        this.startCompleted = !1;
        this.connectionStopped = !1
    }
    var r = n.signalR, f = n.signalR.events, c = n.signalR.changeState, o = "__Start Aborted__", u;
    r.transports = {};
    h.prototype = {
        start: function(n, r, u) {
            var f = this
              , e = f.connection
              , o = !1;
            if (f.startRequested || f.connectionStopped) {
                e.log("WARNING! " + n.name + " transport cannot be started. Initialization ongoing or completed.");
                return
            }
            e.log(n.name + " transport starting.");
            n.start(e, function() {
                o || f.initReceived(n, r)
            }, function(t) {
                return o || (o = !0,
                f.transportFailed(n, t, u)),
                !f.startCompleted || f.connectionStopped
            });
            f.transportTimeoutHandle = t.setTimeout(function() {
                o || (o = !0,
                e.log(n.name + " transport timed out when trying to connect."),
                f.transportFailed(n, i, u))
            }, e._.totalTransportConnectTimeout)
        },
        stop: function() {
            this.connectionStopped = !0;
            t.clearTimeout(this.transportTimeoutHandle);
            r.transports._logic.tryAbortStartRequest(this.connection)
        },
        initReceived: function(n, i) {
            var u = this
              , f = u.connection;
            if (u.startRequested) {
                f.log("WARNING! The client received multiple init messages.");
                return
            }
            u.connectionStopped || (u.startRequested = !0,
            t.clearTimeout(u.transportTimeoutHandle),
            f.log(n.name + " transport connected. Initiating start request."),
            r.transports._logic.ajaxStart(f, function() {
                u.startCompleted = !0;
                i()
            }))
        },
        transportFailed: function(i, u, e) {
            var o = this.connection, h = o._deferral, s;
            this.connectionStopped || (t.clearTimeout(this.transportTimeoutHandle),
            this.startRequested ? this.startCompleted || (s = r._.error(r.resources.errorDuringStartRequest, u),
            o.log(i.name + " transport failed during the start request. Stopping the connection."),
            n(o).triggerHandler(f.onError, [s]),
            h && h.reject(s),
            o.stop()) : (i.stop(o),
            o.log(i.name + " transport failed to connect. Attempting to fall back."),
            e()))
        }
    };
    u = r.transports._logic = {
        ajax: function(t, i) {
            return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, {
                type: "GET",
                data: {},
                xhrFields: {
                    withCredentials: t.withCredentials
                },
                contentType: t.contentType,
                dataType: t.ajaxDataType
            }, i))
        },
        pingServer: function(t) {
            var e, f, i = n.Deferred();
            return t.transport ? (e = t.url + "/ping",
            e = u.addQs(e, t.qs),
            f = u.ajax(t, {
                url: e,
                headers: t.accessToken ? {
                    Authorization: "Bearer " + t.accessToken
                } : {},
                success: function(n) {
                    var u;
                    try {
                        u = t._parseResponse(n)
                    } catch (e) {
                        i.reject(r._.transportError(r.resources.pingServerFailedParse, t.transport, e, f));
                        t.stop();
                        return
                    }
                    u.Response === "pong" ? i.resolve() : i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
                },
                error: function(n) {
                    n.status === 401 || n.status === 403 ? (i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)),
                    t.stop()) : i.reject(r._.transportError(r.resources.pingServerFailed, t.transport, n, f))
                }
            })) : i.reject(r._.transportError(r.resources.noConnectionTransport, t.transport)),
            i.promise()
        },
        prepareQueryString: function(n, i) {
            var r;
            return r = u.addQs(i, "clientProtocol=" + n.clientProtocol),
            r = typeof n._.redirectQs == "string" ? u.addQs(r, n._.redirectQs) : u.addQs(r, n.qs),
            n.token && (r += "&connectionToken=" + t.encodeURIComponent(n.token)),
            n.data && (r += "&connectionData=" + t.encodeURIComponent(n.data)),
            r
        },
        addQs: function(t, i) {
            var r = t.indexOf("?") !== -1 ? "&" : "?", u;
            if (!i)
                return t;
            if (typeof i == "object")
                return t + r + n.param(i);
            if (typeof i == "string")
                return u = i.charAt(0),
                (u === "?" || u === "&") && (r = ""),
                t + r + i;
            throw new Error("Query string property must be either a string or object.");
        },
        getUrl: function(n, i, r, f, e) {
            var h = i === "webSockets" ? "" : n.baseUrl
              , o = h + n.appRelativeUrl
              , s = "transport=" + i;
            return !e && n.groupsToken && (s += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)),
            r ? (o += f ? "/poll" : "/reconnect",
            !e && n.messageId && (s += "&messageId=" + t.encodeURIComponent(n.messageId))) : o += "/connect",
            o += "?" + s,
            o = u.prepareQueryString(n, o),
            n.transport && n.accessToken && (n.transport.name === "serverSentEvents" || n.transport.name === "webSockets") && (o += "&access_token=" + t.encodeURIComponent(n.accessToken)),
            e || (o += "&tid=" + Math.floor(Math.random() * 11)),
            o
        },
        maximizePersistentResponse: function(n) {
            return {
                MessageId: n.C,
                Messages: n.M,
                Initialized: typeof n.S != "undefined" ? !0 : !1,
                ShouldReconnect: typeof n.T != "undefined" ? !0 : !1,
                LongPollDelay: n.L,
                GroupsToken: n.G,
                Error: n.E
            }
        },
        updateGroups: function(n, t) {
            t && (n.groupsToken = t)
        },
        stringifySend: function(n, t) {
            return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t)
        },
        ajaxSend: function(t, i) {
            var h = u.stringifySend(t, i), c = e(t, "/send"), o, s = function(t, u) {
                n(u).triggerHandler(f.onError, [r._.transportError(r.resources.sendFailed, u.transport, t, o), i])
            };
            return o = u.ajax(t, {
                url: c,
                type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
                contentType: r._.defaultContentType,
                headers: t.accessToken ? {
                    Authorization: "Bearer " + t.accessToken
                } : {},
                data: {
                    data: h
                },
                success: function(n) {
                    var i;
                    if (n) {
                        try {
                            i = t._parseResponse(n)
                        } catch (r) {
                            s(r, t);
                            t.stop();
                            return
                        }
                        u.triggerReceived(t, i)
                    }
                },
                error: function(n, i) {
                    i !== "abort" && i !== "parsererror" && s(n, t)
                }
            })
        },
        ajaxAbort: function(n, t) {
            if (typeof n.transport != "undefined") {
                t = typeof t == "undefined" ? !0 : t;
                var i = e(n, "/abort");
                u.ajax(n, {
                    url: i,
                    async: t,
                    timeout: 1e3,
                    type: "POST",
                    headers: n.accessToken ? {
                        Authorization: "Bearer " + n.accessToken
                    } : {},
                    dataType: "text"
                });
                n.log("Fired ajax abort async = " + t + ".")
            }
        },
        ajaxStart: function(t, i) {
            var h = function(n) {
                var i = t._deferral;
                i && i.reject(n)
            }
              , s = function(i) {
                t.log("The start request failed. Stopping the connection.");
                n(t).triggerHandler(f.onError, [i]);
                h(i);
                t.stop()
            };
            t._.startRequest = u.ajax(t, {
                url: e(t, "/start"),
                headers: t.accessToken ? {
                    Authorization: "Bearer " + t.accessToken
                } : {},
                success: function(n, u, f) {
                    var e;
                    try {
                        e = t._parseResponse(n)
                    } catch (o) {
                        s(r._.error(r._.format(r.resources.errorParsingStartResponse, n), o, f));
                        return
                    }
                    e.Response === "started" ? i() : s(r._.error(r._.format(r.resources.invalidStartResponse, n), null, f))
                },
                error: function(n, i, u) {
                    i !== o ? s(r._.error(r.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."),
                    h(r._.error(r.resources.stoppedDuringStartRequest, null, n)))
                }
            })
        },
        tryAbortStartRequest: function(n) {
            n._.startRequest && (n._.startRequest.abort(o),
            delete n._.startRequest)
        },
        tryInitialize: function(n, t, i) {
            t.Initialized && i ? i() : t.Initialized && n.log("WARNING! The client received an init message after reconnecting.")
        },
        triggerReceived: function(t, i) {
            t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(f.onReceived, [i])
        },
        processMessages: function(t, i, f) {
            var e;
            if (i && typeof i.I != "undefined") {
                u.triggerReceived(t, i);
                return
            }
            if (u.markLastMessage(t),
            i) {
                if (e = u.maximizePersistentResponse(i),
                e.Error) {
                    t.log("Received an error message from the server: " + i.E);
                    n(t).triggerHandler(r.events.onError, [r._.error(i.E, "ServerError")]);
                    t.stop(!1, !1);
                    return
                }
                u.updateGroups(t, e.GroupsToken);
                e.MessageId && (t.messageId = e.MessageId);
                e.Messages && (n.each(e.Messages, function(n, i) {
                    u.triggerReceived(t, i)
                }),
                u.tryInitialize(t, e, f))
            }
        },
        monitorKeepAlive: function(t) {
            var i = t._.keepAliveData;
            i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0,
            u.markLastMessage(t),
            t._.keepAliveData.reconnectKeepAliveUpdate = function() {
                u.markLastMessage(t)
            }
            ,
            n(t).bind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate),
            t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + ", keep alive timeout of " + i.timeout + " and disconnecting timeout of " + t.disconnectTimeout))
        },
        stopMonitoringKeepAlive: function(t) {
            var i = t._.keepAliveData;
            i.monitoring && (i.monitoring = !1,
            n(t).unbind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate),
            t._.keepAliveData = {},
            t.log("Stopping the monitoring of the keep alive."))
        },
        startHeartbeat: function(n) {
            n._.lastActiveAt = (new Date).getTime();
            s(n)
        },
        markLastMessage: function(n) {
            n._.lastMessageAt = (new Date).getTime()
        },
        markActive: function(n) {
            return u.verifyLastActive(n) ? (n._.lastActiveAt = (new Date).getTime(),
            !0) : !1
        },
        isConnectedOrReconnecting: function(n) {
            return n.state === r.connectionState.connected || n.state === r.connectionState.reconnecting
        },
        ensureReconnectingState: function(t) {
            return c(t, r.connectionState.connected, r.connectionState.reconnecting) === !0 && n(t).triggerHandler(f.onReconnecting),
            t.state === r.connectionState.reconnecting
        },
        clearReconnectTimeout: function(n) {
            n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout),
            delete n._.reconnectTimeout)
        },
        verifyLastActive: function(t) {
            if ((new Date).getTime() - t._.lastActiveAt >= t.reconnectWindow) {
                var i = r._.format(r.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
                return t.log(i),
                n(t).triggerHandler(f.onError, [r._.error(i, "TimeoutException")]),
                t.stop(!1, !1),
                !1
            }
            return !0
        },
        reconnect: function(n, i) {
            var f = r.transports[i];
            if (u.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
                if (!u.verifyLastActive(n))
                    return;
                n._.reconnectTimeout = t.setTimeout(function() {
                    u.verifyLastActive(n) && (f.stop(n),
                    u.ensureReconnectingState(n) && (n.log(i + " reconnecting."),
                    f.start(n)))
                }, n.reconnectDelay)
            }
        },
        handleParseFailure: function(t, i, u, e, o) {
            var s = r._.transportError(r._.format(r.resources.parseFailed, i), t.transport, u, o);
            e && e(s) ? t.log("Failed to parse server response while attempting to connect.") : (n(t).triggerHandler(f.onError, [s]),
            t.stop())
        },
        initHandler: function(n) {
            return new h(n)
        },
        foreverFrame: {
            count: 0,
            connections: {}
        }
    }
}(window.jQuery, window),
function(n, t) {
    var i = n.signalR
      , u = n.signalR.events
      , f = n.signalR.changeState
      , r = i.transports._logic;
    i.transports.webSockets = {
        name: "webSockets",
        supportsKeepAlive: function() {
            return !0
        },
        send: function(t, f) {
            var e = r.stringifySend(t, f);
            try {
                t.socket.send(e)
            } catch (o) {
                n(t).triggerHandler(u.onError, [i._.transportError(i.resources.webSocketsInvalidState, t.transport, o, t.socket), f])
            }
        },
        start: function(e, o, s) {
            var h, c = !1, l = this, a = !o, v = n(e);
            if (!t.WebSocket) {
                s();
                return
            }
            e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host,
            h += r.getUrl(e, this.name, a),
            e.log("Connecting to websocket endpoint '" + h + "'."),
            e.socket = new t.WebSocket(h),
            e.socket.onopen = function() {
                c = !0;
                e.log("Websocket opened.");
                r.clearReconnectTimeout(e);
                f(e, i.connectionState.reconnecting, i.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
            }
            ,
            e.socket.onclose = function(t) {
                var r;
                this === e.socket && (c && typeof t.wasClean != "undefined" && t.wasClean === !1 ? (r = i._.transportError(i.resources.webSocketClosed, e.transport, t),
                e.log("Unclean disconnect from websocket: " + (t.reason || "[no reason given]."))) : e.log("Websocket closed."),
                s && s(r) || (r && n(e).triggerHandler(u.onError, [r]),
                l.reconnect(e)))
            }
            ,
            e.socket.onmessage = function(n) {
                var t;
                try {
                    t = e._parseResponse(n.data)
                } catch (i) {
                    r.handleParseFailure(e, n.data, i, s, n);
                    return
                }
                t && r.processMessages(e, t, o)
            }
            )
        },
        reconnect: function(n) {
            r.reconnect(n, this.name)
        },
        lostConnection: function(n) {
            this.reconnect(n)
        },
        stop: function(n) {
            r.clearReconnectTimeout(n);
            n.socket && (n.log("Closing the Websocket."),
            n.socket.close(),
            n.socket = null)
        },
        abort: function(n, t) {
            r.ajaxAbort(n, t)
        }
    }
}(window.jQuery, window),
function(n, t) {
    var i = n.signalR
      , u = n.signalR.events
      , e = n.signalR.changeState
      , r = i.transports._logic
      , f = function(n) {
        t.clearTimeout(n._.reconnectAttemptTimeoutHandle);
        delete n._.reconnectAttemptTimeoutHandle
    };
    i.transports.serverSentEvents = {
        name: "serverSentEvents",
        supportsKeepAlive: function() {
            return !0
        },
        timeOut: 3e3,
        start: function(o, s, h) {
            var c = this, l = !1, a = n(o), v = !s, y;
            if (o.eventSource && (o.log("The connection already has an event source. Stopping it."),
            o.stop()),
            !t.EventSource) {
                h && (o.log("This browser doesn't support SSE."),
                h());
                return
            }
            y = r.getUrl(o, this.name, v);
            try {
                o.log("Attempting to connect to SSE endpoint '" + y + "'.");
                o.eventSource = new t.EventSource(y,{
                    withCredentials: o.withCredentials
                })
            } catch (p) {
                o.log("EventSource failed trying to connect with error " + p.Message + ".");
                h ? h() : (a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceFailedToConnect, o.transport, p)]),
                v && c.reconnect(o));
                return
            }
            v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function() {
                l === !1 && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o)
            }, c.timeOut));
            o.eventSource.addEventListener("open", function() {
                o.log("EventSource connected.");
                f(o);
                r.clearReconnectTimeout(o);
                l === !1 && (l = !0,
                e(o, i.connectionState.reconnecting, i.connectionState.connected) === !0 && a.triggerHandler(u.onReconnect))
            }, !1);
            o.eventSource.addEventListener("message", function(n) {
                var t;
                if (n.data !== "initialized") {
                    try {
                        t = o._parseResponse(n.data)
                    } catch (i) {
                        r.handleParseFailure(o, n.data, i, h, n);
                        return
                    }
                    r.processMessages(o, t, s)
                }
            }, !1);
            o.eventSource.addEventListener("error", function(n) {
                var r = i._.transportError(i.resources.eventSourceError, o.transport, n);
                this === o.eventSource && (h && h(r) || (o.log("EventSource readyState: " + o.eventSource.readyState + "."),
                n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."),
                c.reconnect(o)) : (o.log("EventSource error."),
                a.triggerHandler(u.onError, [r]))))
            }, !1)
        },
        reconnect: function(n) {
            r.reconnect(n, this.name)
        },
        lostConnection: function(n) {
            this.reconnect(n)
        },
        send: function(n, t) {
            r.ajaxSend(n, t)
        },
        stop: function(n) {
            f(n);
            r.clearReconnectTimeout(n);
            n && n.eventSource && (n.log("EventSource calling close()."),
            n.eventSource.close(),
            n.eventSource = null,
            delete n.eventSource)
        },
        abort: function(n, t) {
            r.ajaxAbort(n, t)
        }
    }
}(window.jQuery, window),
function(n, t) {
    var r = n.signalR
      , e = n.signalR.events
      , o = n.signalR.changeState
      , i = r.transports._logic
      , u = function() {
        var n = t.document.createElement("iframe");
        return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"),
        n
    }
      , f = function() {
        var i = null
          , f = 1e3
          , n = 0;
        return {
            prevent: function() {
                r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function() {
                    var n = u();
                    t.document.body.appendChild(n);
                    t.document.body.removeChild(n);
                    n = null
                }, f)),
                n++)
            },
            cancel: function() {
                n === 1 && t.clearInterval(i);
                n > 0 && n--
            }
        }
    }();
    r.transports.foreverFrame = {
        name: "foreverFrame",
        supportsKeepAlive: function() {
            return !0
        },
        iframeClearThreshold: 50,
        start: function(n, r, e) {
            if (n.accessToken) {
                e && (n.log("Forever Frame does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."),
                e());
                return
            }
            var l = this, s = i.foreverFrame.count += 1, h, o = u(), c = function() {
                n.log("Forever frame iframe finished loading and is no longer receiving messages.");
                e && e() || l.reconnect(n)
            };
            if (t.EventSource) {
                e && (n.log("Forever Frame is not supported by SignalR on browsers with SSE support."),
                e());
                return
            }
            o.setAttribute("data-signalr-connection-id", n.id);
            f.prevent();
            h = i.getUrl(n, this.name);
            h += "&frameId=" + s;
            t.document.documentElement.appendChild(o);
            n.log("Binding to iframe's load event.");
            o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c);
            o.src = h;
            i.foreverFrame.connections[s] = n;
            n.frame = o;
            n.frameId = s;
            r && (n.onSuccess = function() {
                n.log("Iframe transport started.");
                r()
            }
            )
        },
        reconnect: function(n) {
            var r = this;
            i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function() {
                if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
                    var u = n.frame
                      , t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
                    n.log("Updating iframe src to '" + t + "'.");
                    u.src = t
                }
            }, n.reconnectDelay)
        },
        lostConnection: function(n) {
            this.reconnect(n)
        },
        send: function(n, t) {
            i.ajaxSend(n, t)
        },
        receive: function(t, u) {
            var f, e, o;
            if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)),
            o = t._parseResponse(u),
            i.processMessages(t, o, t.onSuccess),
            t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1,
            t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0,
            f = t.frame.contentWindow || t.frame.contentDocument,
            f && f.document && f.document.body)))
                for (e = f.document.body; e.firstChild; )
                    e.removeChild(e.firstChild)
        },
        stop: function(n) {
            var r = null;
            if (f.cancel(),
            n.frame) {
                if (n.frame.stop)
                    n.frame.stop();
                else
                    try {
                        r = n.frame.contentWindow || n.frame.contentDocument;
                        r.document && r.document.execCommand && r.document.execCommand("Stop")
                    } catch (u) {
                        n.log("Error occurred when stopping foreverFrame transport. Message = " + u.message + ".")
                    }
                n.frame.parentNode === t.document.documentElement && t.document.documentElement.removeChild(n.frame);
                delete i.foreverFrame.connections[n.frameId];
                n.frame = null;
                n.frameId = null;
                delete n.frame;
                delete n.frameId;
                delete n.onSuccess;
                delete n.frameMessageCount;
                n.log("Stopping forever frame.")
            }
        },
        abort: function(n, t) {
            i.ajaxAbort(n, t)
        },
        getConnection: function(n) {
            return i.foreverFrame.connections[n]
        },
        started: function(t) {
            o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect)
        }
    }
}(window.jQuery, window),
function(n, t) {
    var r = n.signalR
      , u = n.signalR.events
      , e = n.signalR.changeState
      , f = n.signalR.isDisconnecting
      , i = r.transports._logic;
    r.transports.longPolling = {
        name: "longPolling",
        supportsKeepAlive: function() {
            return !1
        },
        reconnectDelay: 3e3,
        start: function(o, s, h) {
            var a = this
              , v = function() {
                v = n.noop;
                o.log("LongPolling connected.");
                s ? s() : o.log("WARNING! The client received an init message after reconnecting.")
            }
              , y = function(n) {
                return h(n) ? (o.log("LongPolling failed to connect."),
                !0) : !1
            }
              , c = o._
              , l = 0
              , p = function(i) {
                t.clearTimeout(c.reconnectTimeoutId);
                c.reconnectTimeoutId = null;
                e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"),
                n(i).triggerHandler(u.onReconnect))
            }
              , w = 36e5;
            o.pollXhr && (o.log("Polling xhr requests already exists, aborting."),
            o.stop());
            o.messageId = null;
            c.reconnectTimeoutId = null;
            c.pollTimeoutId = t.setTimeout(function() {
                (function e(s, h) {
                    var g = s.messageId
                      , nt = g === null
                      , k = !nt
                      , tt = !h
                      , d = i.getUrl(s, a.name, k, tt, !0)
                      , b = {};
                    (s.messageId && (b.messageId = s.messageId),
                    s.groupsToken && (b.groupsToken = s.groupsToken),
                    f(s) !== !0) && (o.log("Opening long polling request to '" + d + "'."),
                    s.pollXhr = i.ajax(o, {
                        xhrFields: {
                            onprogress: function() {
                                i.markLastMessage(o)
                            }
                        },
                        url: d,
                        type: "POST",
                        contentType: r._.defaultContentType,
                        data: b,
                        timeout: o._.pollTimeout,
                        headers: o.accessToken ? {
                            Authorization: "Bearer " + o.accessToken
                        } : {},
                        success: function(r) {
                            var h, w = 0, u, a;
                            o.log("Long poll complete.");
                            l = 0;
                            try {
                                h = o._parseResponse(r)
                            } catch (b) {
                                i.handleParseFailure(s, r, b, y, s.pollXhr);
                                return
                            }
                            (c.reconnectTimeoutId !== null && p(s),
                            h && (u = i.maximizePersistentResponse(h)),
                            i.processMessages(s, h, v),
                            u && n.type(u.LongPollDelay) === "number" && (w = u.LongPollDelay),
                            f(s) !== !0) && (a = u && u.ShouldReconnect,
                            !a || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function() {
                                e(s, a)
                            }, w) : e(s, a))
                        },
                        error: function(f, h) {
                            var v = r._.transportError(r.resources.longPollFailed, o.transport, f, s.pollXhr);
                            if (t.clearTimeout(c.reconnectTimeoutId),
                            c.reconnectTimeoutId = null,
                            h === "abort") {
                                o.log("Aborted xhr request.");
                                return
                            }
                            if (!y(v)) {
                                if (l++,
                                o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + f.responseText + "."),
                                n(s).triggerHandler(u.onError, [v])),
                                (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o))
                                    return;
                                if (!i.ensureReconnectingState(s))
                                    return;
                                c.pollTimeoutId = t.setTimeout(function() {
                                    e(s, !0)
                                }, a.reconnectDelay)
                            }
                        }
                    }),
                    k && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function() {
                        p(s)
                    }, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
                }
                )(o)
            }, 250)
        },
        lostConnection: function(n) {
            n.pollXhr && n.pollXhr.abort("lostConnection")
        },
        send: function(n, t) {
            i.ajaxSend(n, t)
        },
        stop: function(n) {
            t.clearTimeout(n._.pollTimeoutId);
            t.clearTimeout(n._.reconnectTimeoutId);
            delete n._.pollTimeoutId;
            delete n._.reconnectTimeoutId;
            n.pollXhr && (n.pollXhr.abort(),
            n.pollXhr = null,
            delete n.pollXhr)
        },
        abort: function(n, t) {
            i.ajaxAbort(n, t)
        }
    }
}(window.jQuery, window),
function(n) {
    function r(n) {
        return n + s
    }
    function c(n, t, i) {
        for (var f = n.length, u = [], r = 0; r < f; r += 1)
            n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n));
        return u
    }
    function l(t) {
        return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t
    }
    function u(n) {
        for (var t in n)
            if (n.hasOwnProperty(t))
                return !0;
        return !1
    }
    function f(n, t) {
        var i = n._.invocationCallbacks, r, f;
        u(i) && n.log("Clearing hub invocation callbacks with error: " + t + ".");
        n._.invocationCallbackId = 0;
        delete n._.invocationCallbacks;
        n._.invocationCallbacks = {};
        for (f in i)
            r = i[f],
            r.method.call(r.scope, {
                E: t
            })
    }
    function e(t) {
        return n.isFunction(t) && t.toString().slice(0, 256).indexOf("// Call the client hub method") >= 0
    }
    function i(n, t) {
        return new i.fn.init(n,t)
    }
    function t(i, r) {
        var u = {
            qs: null,
            logging: !1,
            useDefaultPath: !0
        };
        return n.extend(u, r),
        (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"),
        new t.fn.init(i,u)
    }
    var o = 0
      , s = ".hubProxy"
      , h = n.signalR;
    i.fn = i.prototype = {
        init: function(n, t) {
            this.state = {};
            this.connection = n;
            this.hubName = t;
            this._ = {
                callbackMap: {}
            }
        },
        constructor: i,
        hasSubscriptions: function() {
            return u(this._.callbackMap)
        },
        on: function(t, i, u) {
            var c = this, l = c._.callbackMap, v = !u && e(i), f, h, s, a;
            for (u = u || i,
            u._signalRGuid || (u._signalRGuid = o++),
            t = t.toLowerCase(),
            f = l[t],
            f || (f = [],
            l[t] = f),
            s = 0; s < f.length; s++)
                (f[s].guid === u._signalRGuid || v && f[s].isFromOldGeneratedHubProxy) && (h = f[s]);
            return h || (h = {
                guid: u._signalRGuid,
                eventHandlers: [],
                isFromOldGeneratedHubProxy: v
            },
            l[t].push(h)),
            a = function(n, t) {
                i.apply(c, t)
            }
            ,
            h.eventHandlers.push(a),
            n(c).bind(r(t), a),
            c
        },
        off: function(t, i, u) {
            var s = this, l = s._.callbackMap, f, a = !u && e(i), h, v, o, c;
            if (u = u || i,
            t = t.toLowerCase(),
            f = l[t],
            f)
                if (i) {
                    for (o = 0; o < f.length; o++)
                        (f[o].guid === u._signalRGuid || a && f[o].isFromOldGeneratedHubProxy) && (v = o,
                        h = f[o]);
                    if (h) {
                        for (c = 0; c < h.eventHandlers.length; c++)
                            n(s).unbind(r(t), h.eventHandlers[c]);
                        f.splice(o, 1);
                        f.length === 0 && delete l[t]
                    }
                } else
                    i || (n(s).unbind(r(t)),
                    delete l[t]);
            return s
        },
        invoke: function(t) {
            var i = this
              , r = i.connection
              , e = n.makeArray(arguments).slice(1)
              , o = c(e, l)
              , f = {
                H: i.hubName,
                M: t,
                A: o,
                I: r._.invocationCallbackId
            }
              , u = n.Deferred()
              , s = function(f) {
                var e = i._maximizeHubResponse(f), s, o;
                n.extend(i.state, e.State);
                e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."),
                r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."),
                s = e.IsHubException ? "HubException" : "Exception",
                o = h._.error(e.Error, s),
                o.data = e.ErrorData,
                r.log(i.hubName + "." + t + " failed to execute. Error: " + o.message),
                u.rejectWith(i, [o])) : (r.log("Invoked " + i.hubName + "." + t),
                u.resolveWith(i, [e.Result]))
            };
            return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = {
                scope: i,
                method: s
            },
            r._.invocationCallbackId += 1,
            n.isEmptyObject(i.state) || (f.S = i.state),
            r.log("Invoking " + i.hubName + "." + t),
            r.send(f),
            u.promise()
        },
        _maximizeHubResponse: function(n) {
            return {
                State: n.S,
                Result: n.R,
                Progress: n.P ? {
                    Id: n.P.I,
                    Data: n.P.D
                } : null,
                Id: n.I,
                IsHubException: n.H,
                Error: n.E,
                StackTrace: n.T,
                ErrorData: n.D
            }
        }
    };
    i.fn.init.prototype = i.fn;
    t.fn = t.prototype = n.connection();
    t.fn.init = function(t, i) {
        var e = {
            qs: null,
            logging: !1,
            useDefaultPath: !0
        }
          , u = this;
        n.extend(e, i);
        n.signalR.fn.init.call(u, t, e.qs, e.logging);
        u.proxies = {};
        u._.invocationCallbackId = 0;
        u._.invocationCallbacks = {};
        u.received(function(t) {
            var f, o, e, i, s, h;
            t && (typeof t.P != "undefined" ? (e = t.P.I.toString(),
            i = u._.invocationCallbacks[e],
            i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(),
            i = u._.invocationCallbacks[e],
            i && (u._.invocationCallbacks[e] = null,
            delete u._.invocationCallbacks[e],
            i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t),
            u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."),
            s = f.Hub.toLowerCase(),
            h = f.Method.toLowerCase(),
            o = this.proxies[s],
            n.extend(o.state, f.State),
            n(o).triggerHandler(r(h), [f.Args])))
        });
        u.error(function(n, t) {
            var i, r;
            t && (i = t.I,
            r = u._.invocationCallbacks[i],
            r && (u._.invocationCallbacks[i] = null,
            delete u._.invocationCallbacks[i],
            r.method.call(r.scope, {
                E: n
            })))
        });
        u.reconnecting(function() {
            u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.")
        });
        u.disconnected(function() {
            f(u, "Connection was disconnected before invocation result was received.")
        })
    }
    ;
    t.fn._maximizeClientHubInvocation = function(n) {
        return {
            Hub: n.H,
            Method: n.M,
            Args: n.A,
            State: n.S
        }
    }
    ;
    t.fn._registerSubscribedHubs = function() {
        var t = this;
        t._subscribedToHubs || (t._subscribedToHubs = !0,
        t.starting(function() {
            var i = [];
            n.each(t.proxies, function(n) {
                this.hasSubscriptions() && (i.push({
                    name: n
                }),
                t.log("Client subscribed to hub '" + n + "'."))
            });
            i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");
            t.data = t.json.stringify(i)
        }))
    }
    ;
    t.fn.createHubProxy = function(n) {
        n = n.toLowerCase();
        var t = this.proxies[n];
        return t || (t = i(this, n),
        this.proxies[n] = t),
        this._registerSubscribedHubs(),
        t
    }
    ;
    t.fn.init.prototype = t.fn;
    n.hubConnection = t
}(window.jQuery, window),
function(n) {
    n.signalR.version = "2.4.1"
}(window.jQuery);
var offsetSmartBanner = void 0 === offsetSmartBanner ? 200 : offsetSmartBanner
  , jRes = jRespond([{
    label: "mobile",
    enter: 0,
    exit: 767
}, {
    label: "tablet",
    enter: 768,
    exit: 991
}, {
    label: "pc",
    enter: 992,
    exit: 1e4
}])
  , in_version = ""
  , bLazy = null;
function scrollingPageEvents() {
    $(this).scrollTop() > 0 ? $("body").addClass("scrollingPage") : $("body").removeClass("scrollingPage")
}
function getContentsMenuHamburger(i) {
    var e = i.data("areaid")
      , n = i.data("areaurl")
      , t = $(".emdestaque_ultimas[data-areaid='" + e + "']");
    t.length > 0 && !t.data("isload") && !COF.validate.isNullOrEmpty(n) && (t.html("<div class='destaques_menu'><div class='loader'></div></div>"),
    $.ajax({
        url: "/" + n + "/GetLastestContentsMenuHamburger",
        type: "GET",
        data: {
            areaId: e
        }
    }).done((function(i) {
        COF.validate.isNullOrEmpty(i) ? t.html("") : (t.css("visibility", "hidden"),
        t.html(i),
        t.css("visibility", "visible").hide().fadeIn(),
        t.data("isload", !0))
    }
    )).fail((function() {
        t.html("")
    }
    )))
}
function pauseAllPlayers() {
    if ("undefined" == typeof videojs)
        return null;
    let e = videojs.getPlayers();
    if (void 0 === e)
        return null;
    let n = Object.keys(e);
    for (i = 0; i < n.length; i++) {
        if (void 0 === n[i] || null == n[i] || "" === n[i])
            return null;
        let t = e[n[i]];
        null != t && t.pause()
    }
}
jRes.addFunc([{
    breakpoint: "mobile",
    enter: function() {
        in_version = "mobile",
        $(document).on("click", ".icon-arrow_down", (function() {
            $(this).hasClass("sub_open") || $(".icon-arrow_down").removeClass("sub_open"),
            $(this).toggleClass("sub_open")
        }
        )),
        $(".carrousel_generic").length > 0 && $(".carrousel_generic").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".opiniao_main").length > 0 && $(".opiniao_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".carrousel_generic, .opiniao_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, e, n, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        )),
        $(".ticker_alerta_cm").length > 0 && ($(".ticker_alerta").webTicker({
            startEmpty: !1,
            speed: 35,
            height: "34px"
        }),
        $(".ticker_alerta_cm").css("visibility", "visible")),
        $(".ticker_corona").length > 0 && ($(".ticker_virus").webTicker({
            startEmpty: !1,
            speed: 35,
            height: "34px"
        }),
        $(".ticker_corona").css("visibility", "visible"))
    },
    exit: function() {}
}, {
    breakpoint: "tablet",
    enter: function() {
        in_version = "tablet",
        $(document).on("click", ".icon-arrow_down", (function() {
            $(this).hasClass("sub_open") || $(".icon-arrow_down").removeClass("sub_open"),
            $(this).toggleClass("sub_open")
        }
        )),
        $(".carrousel_generic").length > 0 && $(".carrousel_generic").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".opiniao_main").length > 0 && $(".opiniao_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".carrousel_generic, .opiniao_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, e, n, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        )),
        $(".clube_cm_mais_main").length > 0 && $(".clube_cm_mais_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".clube_cm_mais_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, e, n, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        ))
    },
    exit: function() {}
}, {
    breakpoint: "pc",
    enter: function() {
        in_version = "pc",
        $(".pub_stick").length > 0 && $(".pub_stick").each((function(i) {
            $(this).parents(".col_styck").length > 0 && $(this).stick_in_parent({
                parent: ".col_styck",
                spacer: ".sticky-spacer",
                inner_scrolling: !1,
                offset_top: 155,
                recalc_every: 1
            }).on("sticky_kit:bottom", (function(i) {
                $(this).parent().css("position", "static")
            }
            )).on("sticky_kit:unbottom", (function(i) {
                $(this).parent().css("position", "relative")
            }
            ))
        }
        )),
        $(".menuItems > li > a").mouseenter((function() {
            var i = $(this).parent();
            void 0 !== i && i.length > 0 && ($(".menuItems > li").removeClass("showing"),
            i.addClass("showing"),
            getContentsMenuHamburger(i),
            null !== bLazy && bLazy.revalidate())
        }
        )),
        $(".opiniao_main").length > 0 && $(".opiniao_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".opiniao_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, e, n, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        ))
    },
    exit: function() {}
}]),
$(document).on("click", ".ic_main_menu", (function() {
    $("body").hasClass("mainMenuOpen") ? $("body").removeClass("mainMenuOpen") : $("body").addClass("mainMenuOpen")
}
)),
$(document).on("click", ".barra_ao_vivo .icon-close", (function() {
    $(".barra_ao_vivo").remove(),
    $("body").removeClass("livestreamBar")
}
)),
$(document).on("click", ".expandir_barra_ao_vivo", (function() {
    "Expandir" == $(this).text() ? ($(".barra_ao_vivo").addClass("bloco_live_expand"),
    $(this).text("Minimizar")) : ($(".barra_ao_vivo").removeClass("bloco_live_expand"),
    $(this).text("Expandir"))
}
)),
$(document).on("click", ".layer_ao_vivo .icon-close", (function() {
    $(".layer_ao_vivo").remove()
}
)),
$((function() {
    $(".cstudio-popup_info").hover((function() {
        $(".cstudio-popup").css("display", "block")
    }
    ), (function() {
        $(".cstudio-popup").css("display", "none")
    }
    ))
}
)),
$(document).ready((function() {
    scrollingPageEvents(),
    $(window).scroll((function() {
        scrollingPageEvents()
    }
    )),
    $(".b-lazy").length > 0 && (bLazy = new Blazy({
        offset: 500,
        breakpoints: [{
            width: 767,
            src: "data-src-m"
        }, {
            width: 991,
            src: "data-src-t"
        }]
    })),
    $(document).on("click", ".openSearch", (function() {
        $(".pesquisa_hidden").fadeIn()
    }
    )),
    $(document).on("click", ".closeSearch", (function() {
        $(".pesquisa_hidden").fadeOut()
    }
    )),
    $("#ic_notificacoes").length > 0 && ($("#ic_notificacoes").mouseenter((function() {
        $(".msg-notification").fadeIn()
    }
    )),
    $("#ic_notificacoes").mouseleave((function() {
        $(".msg-notification").fadeOut()
    }
    ))),
    $(".ticker_cm_minuto").length > 0 && ($(".ticker_main").webTicker({
        startEmpty: !1,
        speed: 35,
        height: "34px"
    }),
    $(".ticker_cm_minuto").css("visibility", "visible")),
    $((function() {
        setInterval((function() {
            $(".ic_live").delay(1e3).fadeOut(1e3).delay(100).fadeIn(1e3)
        }
        ), 500)
    }
    )),
    $(".canais_top > ul > li.subItens a").on("click", (function() {
        var i = $(this);
        "true" === i.attr("aria-expanded") && (location.href = i.attr("href"))
    }
    )),
    $(".open_factura").click((function() {
        $(this).toggleClass("factura_open"),
        $(".hidden_inputs").hasClass("factura_visible") ? ($(".hidden_inputs").removeClass("factura_visible"),
        $(".hidden_inputs").fadeOut()) : ($(".hidden_inputs").addClass("factura_visible"),
        $(".hidden_inputs").css("display", "flex").hide().fadeIn())
    }
    ))
}
));
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c),
        !0) : !1
    }
    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach)
                a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length; )
                    b.call(c, a[e], e, a),
                    e++;
            else
                for (e in a)
                    a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }
    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function() {
            var c = new Error("get-stack-trace")
              , d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d),
            b.apply(this, arguments)
        }
    }
    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e),
        d.constructor = a,
        d._super = e,
        c && la(d, c)
    }
    function j(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
    }
    function l(a, b) {
        return a === d ? b : a
    }
    function m(a, b, c) {
        g(q(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }
    function n(a, b, c) {
        g(q(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }
    function o(a, b) {
        for (; a; ) {
            if (a == b)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    function p(a, b) {
        return a.indexOf(b) > -1
    }
    function q(a) {
        return a.trim().split(/\s+/g)
    }
    function r(a, b, c) {
        if (a.indexOf && !c)
            return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if (c && a[d][c] == b || !c && a[d] === b)
                return d;
            d++
        }
        return -1
    }
    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }
    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]),
            e[f] = g,
            f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()),
        d
    }
    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length; ) {
            if (c = ma[g],
            e = c ? c + f : b,
            e in a)
                return e;
            g++
        }
        return d
    }
    function v() {
        return ua++
    }
    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }
    function x(a, b) {
        var c = this;
        this.manager = a,
        this.callback = b,
        this.element = a.element,
        this.target = a.options.inputTarget,
        this.domHandler = function(b) {
            k(a.options.enable, [a]) && c.handler(b)
        }
        ,
        this.init()
    }
    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a,z)
    }
    function z(a, b, c) {
        var d = c.pointers.length
          , e = c.changedPointers.length
          , f = b & Ea && d - e === 0
          , g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f,
        c.isFinal = !!g,
        f && (a.session = {}),
        c.eventType = b,
        A(a, c),
        a.emit("hammer.input", c),
        a.recognize(c),
        a.session.prevInput = c
    }
    function A(a, b) {
        var c = a.session
          , d = b.pointers
          , e = d.length;
        c.firstInput || (c.firstInput = D(b)),
        e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput
          , g = c.firstMultiple
          , h = g ? g.center : f.center
          , i = b.center = E(d);
        b.timeStamp = ra(),
        b.deltaTime = b.timeStamp - f.timeStamp,
        b.angle = I(h, i),
        b.distance = H(h, i),
        B(c, b),
        b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x,
        b.overallVelocityY = j.y,
        b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y,
        b.scale = g ? K(g.pointers, d) : 1,
        b.rotation = g ? J(g.pointers, d) : 0,
        b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length,
        C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target),
        b.target = k
    }
    function B(a, b) {
        var c = b.center
          , d = a.offsetDelta || {}
          , e = a.prevDelta || {}
          , f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        },
        d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }),
        b.deltaX = e.x + (c.x - d.x),
        b.deltaY = e.y + (c.y - d.y)
    }
    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX
              , k = b.deltaY - h.deltaY
              , l = F(i, j, k);
            e = l.x,
            f = l.y,
            c = qa(l.x) > qa(l.y) ? l.x : l.y,
            g = G(j, k),
            a.lastInterval = b
        } else
            c = h.velocity,
            e = h.velocityX,
            f = h.velocityY,
            g = h.direction;
        b.velocity = c,
        b.velocityX = e,
        b.velocityY = f,
        b.direction = g
    }
    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length; )
            b[c] = {
                clientX: pa(a.pointers[c].clientX),
                clientY: pa(a.pointers[c].clientY)
            },
            c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }
    function E(a) {
        var b = a.length;
        if (1 === b)
            return {
                x: pa(a[0].clientX),
                y: pa(a[0].clientY)
            };
        for (var c = 0, d = 0, e = 0; b > e; )
            c += a[e].clientX,
            d += a[e].clientY,
            e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        }
    }
    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }
    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
    }
    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]]
          , e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }
    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]]
          , e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }
    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
    }
    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
    }
    function L() {
        this.evEl = Ta,
        this.evWin = Ua,
        this.pressed = !1,
        x.apply(this, arguments)
    }
    function M() {
        this.evEl = Xa,
        this.evWin = Ya,
        x.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function N() {
        this.evTarget = $a,
        this.evWin = _a,
        this.started = !1,
        x.apply(this, arguments)
    }
    function O(a, b) {
        var c = s(a.touches)
          , d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)),
        [c, d]
    }
    function P() {
        this.evTarget = bb,
        this.targetIds = {},
        x.apply(this, arguments)
    }
    function Q(a, b) {
        var c = s(a.touches)
          , d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length)
            return d[c[0].identifier] = !0,
            [c, c];
        var e, f, g = s(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return o(a.target, i)
        }),
        b === Ea)
            for (e = 0; e < f.length; )
                d[f[e].identifier] = !0,
                e++;
        for (e = 0; e < g.length; )
            d[g[e].identifier] && h.push(g[e]),
            b & (Ga | Ha) && delete d[g[e].identifier],
            e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }
    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager,a),
        this.mouse = new L(this.manager,a),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier,
        T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
    }
    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches
              , e = function() {
                var a = d.indexOf(c);
                a > -1 && d.splice(a, 1)
            };
            setTimeout(e, cb)
        }
    }
    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d]
              , f = Math.abs(b - e.x)
              , g = Math.abs(c - e.y);
            if (db >= f && db >= g)
                return !0
        }
        return !1
    }
    function V(a, b) {
        this.manager = a,
        this.set(b)
    }
    function W(a) {
        if (p(a, jb))
            return jb;
        var b = p(a, kb)
          , c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
    }
    function X() {
        if (!fb)
            return !1;
        var b = {}
          , c = a.CSS && a.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0
        }),
        b
    }
    function Y(a) {
        this.options = la({}, this.defaults, a || {}),
        this.id = v(),
        this.manager = null,
        this.options.enable = l(this.options.enable, !0),
        this.state = nb,
        this.simultaneous = {},
        this.requireFail = []
    }
    function Z(a) {
        return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
    }
    function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
    }
    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }
    function aa() {
        Y.apply(this, arguments)
    }
    function ba() {
        aa.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function ca() {
        aa.apply(this, arguments)
    }
    function da() {
        Y.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function ea() {
        aa.apply(this, arguments)
    }
    function fa() {
        aa.apply(this, arguments)
    }
    function ga() {
        Y.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function ha(a, b) {
        return b = b || {},
        b.recognizers = l(b.recognizers, ha.defaults.preset),
        new ia(a,b)
    }
    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}),
        this.options.inputTarget = this.options.inputTarget || a,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = a,
        this.input = y(this),
        this.touchAction = new V(this,this.options.touchAction),
        ja(this, !0),
        g(this.options.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]),
            a[3] && b.requireFailure(a[3])
        }, this)
    }
    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function(e, f) {
                d = u(c.style, f),
                b ? (a.oldCssProps[d] = c.style[d],
                c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
            }),
            b || (a.oldCssProps = {})
        }
    }
    function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0),
        d.gesture = c,
        c.target.dispatchEvent(d)
    }
    var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function", pa = Math.round, qa = Math.abs, ra = Date.now;
    la = "function" != typeof Object.assign ? function(a) {
        if (a === d || null === a)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e)
                    e.hasOwnProperty(f) && (b[f] = e[f])
        }
        return b
    }
    : Object.assign;
    var sa = h(function(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; )
            (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]),
            f++;
        return a
    }, "extend", "Use `assign`.")
      , ta = h(function(a, b) {
        return sa(a, b, !0)
    }, "merge", "Use `assign`.")
      , ua = 1
      , va = /mobile|tablet|ip(ad|hone|od)|android/i
      , wa = "ontouchstart"in a
      , xa = u(a, "PointerEvent") !== d
      , ya = wa && va.test(navigator.userAgent)
      , za = "touch"
      , Aa = "pen"
      , Ba = "mouse"
      , Ca = "kinect"
      , Da = 25
      , Ea = 1
      , Fa = 2
      , Ga = 4
      , Ha = 8
      , Ia = 1
      , Ja = 2
      , Ka = 4
      , La = 8
      , Ma = 16
      , Na = Ja | Ka
      , Oa = La | Ma
      , Pa = Na | Oa
      , Qa = ["x", "y"]
      , Ra = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && m(this.element, this.evEl, this.domHandler),
            this.evTarget && m(this.target, this.evTarget, this.domHandler),
            this.evWin && m(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler),
            this.evTarget && n(this.target, this.evTarget, this.domHandler),
            this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Sa = {
        mousedown: Ea,
        mousemove: Fa,
        mouseup: Ga
    }
      , Ta = "mousedown"
      , Ua = "mousemove mouseup";
    i(L, x, {
        handler: function(a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0),
            b & Fa && 1 !== a.which && (b = Ga),
            this.pressed && (b & Ga && (this.pressed = !1),
            this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }))
        }
    });
    var Va = {
        pointerdown: Ea,
        pointermove: Fa,
        pointerup: Ga,
        pointercancel: Ha,
        pointerout: Ha
    }
      , Wa = {
        2: za,
        3: Aa,
        4: Ba,
        5: Ca
    }
      , Xa = "pointerdown"
      , Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown",
    Ya = "MSPointerMove MSPointerUp MSPointerCancel"),
    i(M, x, {
        handler: function(a) {
            var b = this.store
              , c = !1
              , d = a.type.toLowerCase().replace("ms", "")
              , e = Va[d]
              , f = Wa[a.pointerType] || a.pointerType
              , g = f == za
              , h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a),
            h = b.length - 1) : e & (Ga | Ha) && (c = !0),
            0 > h || (b[h] = a,
            this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }),
            c && b.splice(h, 1))
        }
    });
    var Za = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    }
      , $a = "touchstart"
      , _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function(a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0),
            this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1),
                this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        }
    });
    var ab = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    }
      , bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function(a) {
            var b = ab[a.type]
              , c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            })
        }
    });
    var cb = 2500
      , db = 25;
    i(R, x, {
        handler: function(a, b, c) {
            var d = c.pointerType == za
              , e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d)
                    S.call(this, b, c);
                else if (e && U.call(this, c))
                    return;
                this.callback(a, b, c)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var eb = u(na.style, "touchAction")
      , fb = eb !== d
      , gb = "compute"
      , hb = "auto"
      , ib = "manipulation"
      , jb = "none"
      , kb = "pan-x"
      , lb = "pan-y"
      , mb = X();
    V.prototype = {
        set: function(a) {
            a == gb && (a = this.compute()),
            fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a),
            this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }),
            W(a.join(" "))
        },
        preventDefaults: function(a) {
            var b = a.srcEvent
              , c = a.offsetDirection;
            if (this.manager.session.prevented)
                return void b.preventDefault();
            var d = this.actions
              , e = p(d, jb) && !mb[jb]
              , f = p(d, lb) && !mb[lb]
              , g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length
                  , i = a.distance < 2
                  , j = a.deltaTime < 250;
                if (h && i && j)
                    return
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0,
            a.preventDefault()
        }
    };
    var nb = 1
      , ob = 2
      , pb = 4
      , qb = 8
      , rb = qb
      , sb = 16
      , tb = 32;
    Y.prototype = {
        defaults: {},
        set: function(a) {
            return la(this.options, a),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this))
                return this;
            var b = this.simultaneous;
            return a = _(a, this),
            b[a.id] || (b[a.id] = a,
            a.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this),
            delete this.simultaneous[a.id],
            this)
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this))
                return this;
            var b = this.requireFail;
            return a = _(a, this),
            -1 === r(b, a) && (b.push(a),
            a.requireFailure(this)),
            this
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this))
                return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(b, a)
            }
            var c = this
              , d = this.state;
            qb > d && b(c.options.event + Z(d)),
            b(c.options.event),
            a.additionalEvent && b(a.additionalEvent),
            d >= qb && b(c.options.event + Z(d))
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = tb)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (tb | nb)))
                    return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = la({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb),
            this.state = this.process(b),
            void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(),
            void (this.state = tb))
        },
        process: function(a) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    i(aa, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state
              , c = a.eventType
              , d = b & (ob | pb)
              , e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
        }
    }),
    i(ba, aa, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Pa
        },
        getTouchAction: function() {
            var a = this.options.direction
              , b = [];
            return a & Na && b.push(lb),
            a & Oa && b.push(kb),
            b
        },
        directionTest: function(a) {
            var b = this.options
              , c = !0
              , d = a.distance
              , e = a.direction
              , f = a.deltaX
              , g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka,
            c = f != this.pX,
            d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma,
            c = g != this.pY,
            d = Math.abs(a.deltaY))),
            a.direction = e,
            c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX,
            this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b),
            this._super.emit.call(this, a)
        }
    }),
    i(ca, aa, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [jb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
        },
        emit: function(a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }),
    i(da, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [hb]
        },
        process: function(a) {
            var b = this.options
              , c = a.pointers.length === b.pointers
              , d = a.distance < b.threshold
              , f = a.deltaTime > b.time;
            if (this._input = a,
            !d || !c || a.eventType & (Ga | Ha) && !f)
                this.reset();
            else if (a.eventType & Ea)
                this.reset(),
                this._timer = e(function() {
                    this.state = rb,
                    this.tryEmit()
                }, b.time, this);
            else if (a.eventType & Ga)
                return rb;
            return tb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    i(ea, aa, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [jb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
        }
    }),
    i(fa, aa, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Na | Oa,
            pointers: 1
        },
        getTouchAction: function() {
            return ba.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY),
            this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
        },
        emit: function(a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a),
            this.manager.emit(this.options.event, a)
        }
    }),
    i(ga, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ib]
        },
        process: function(a) {
            var b = this.options
              , c = a.pointers.length === b.pointers
              , d = a.distance < b.threshold
              , f = a.deltaTime < b.time;
            if (this.reset(),
            a.eventType & Ea && 0 === this.count)
                return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga)
                    return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0
                  , h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp,
                this.pCenter = a.center,
                h && g ? this.count += 1 : this.count = 1,
                this._input = a;
                var i = this.count % b.taps;
                if (0 === i)
                    return this.hasRequireFailures() ? (this._timer = e(function() {
                        this.state = rb,
                        this.tryEmit()
                    }, b.interval, this),
                    ob) : rb
            }
            return tb
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = tb
            }, this.options.interval, this),
            tb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == rb && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    ha.VERSION = "2.0.7",
    ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ea, {
            enable: !1
        }], [ca, {
            enable: !1
        }, ["rotate"]], [fa, {
            direction: Na
        }], [ba, {
            direction: Na
        }, ["swipe"]], [ga], [ga, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [da]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ub = 1
      , vb = 2;
    ia.prototype = {
        set: function(a) {
            return la(this.options, a),
            a.touchAction && this.touchAction.update(),
            a.inputTarget && (this.input.destroy(),
            this.input.target = a.inputTarget,
            this.input.init()),
            this
        },
        stop: function(a) {
            this.session.stopped = a ? vb : ub
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; )
                    c = d[f],
                    b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a),
                    !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c),
                    f++
            }
        },
        get: function(a) {
            if (a instanceof Y)
                return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a)
                    return b[c];
            return null
        },
        add: function(a) {
            if (f(a, "add", this))
                return this;
            var b = this.get(a.options.event);
            return b && this.remove(b),
            this.recognizers.push(a),
            a.manager = this,
            this.touchAction.update(),
            a
        },
        remove: function(a) {
            if (f(a, "remove", this))
                return this;
            if (a = this.get(a)) {
                var b = this.recognizers
                  , c = r(b, a);
                -1 !== c && (b.splice(c, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function(a) {
                    c[a] = c[a] || [],
                    c[a].push(b)
                }),
                this
            }
        },
        off: function(a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function(a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }),
                this
            }
        },
        emit: function(a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a,
                b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                }
                ;
                for (var d = 0; d < c.length; )
                    c[d](b),
                    d++
            }
        },
        destroy: function() {
            this.element && ja(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha,
    "function" == typeof define && define.amd ? define(function() {
        return ha
    }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map
$((function() {
    try {
        var e = $.connection.cMJornalSiteHub;
        $.connection.hub.start().done((function() {
            i()
        }
        )),
        e.client.ShowLiveStream = function(e) {
            cmLivestream.showLiveStream(e)
        }
    } catch (e) {
        console.log("Ocorreu um erro", e)
    }
    var i = function() {}
}
));
var cmLivestream = function() {
    var e = function(e) {
        try {
            if (null == e || !e.hasOwnProperty("ContentKey") || COF.validate.isNullOrEmpty(e.ContentKey))
                return;
            if (!e.IsLive)
                return void $(".layerLiveStream").remove();
            if ($("." + e.ContentKey).length > 0)
                return;
            var i = COF.cookies.getPreferingLocalStorage("Live_" + e.ContentKey);
            if (!COF.validate.isNullOrEmpty(i))
                return;
            var a = function(e) {
                try {
                    return null != e.LiveStreamUrl && -1 != e.LiveStreamUrl.toLowerCase().indexOf("facebook") ? '<iframe id="livestreamTopVideoFrame" src="' + ("https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(e.LiveStreamUrl) + "&show_text=0&width=184") + '" class="embed-responsive-item" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>' : '<div class="embed-responsive-item"><div id="livestreamTopVideoFrame"></div></div>'
                } catch (e) {
                    return console.warn(e),
                    ""
                }
            }(e)
              , r = String(e.ShowOnTop ? '   <section class="barra_ao_vivo layerLiveStream {{ContentKey}} {{CStudio}}">         <a href="javascript:void(0);" onclick="cmLivestream.dismissLive(\'{{ContentKey}}\')" class="icon-close"></a>         <div class="barra_ao_vivo_container">             <div class="video_ao_vivo">                 <div class="embed-responsive embed-responsive-16by9">                     {{Video}}               </div>             </div>             <div class="pub_expand">                 <div class="m-rec">         <div id="pubLiveCMTop"></div>         <span class="info_pub">pub</span>     </div>             </div>             <div class="text_ao_vivo">                 <img src="/i/cmvivo_m.gif" alt="CM ao Vivo" />                 <h2><a href="{{Link}}">{{Title}}</a></h2>                 <a href="javascript:void(0)" class="expandir_barra_ao_vivo">Expandir</a>             </div>         </div>     </section>  ' : '    <section class="layer_ao_vivo layerLiveStream {{ContentKey}}">         <a href="javascript:void(0);" onclick="cmLivestream.dismissLive(\'{{ContentKey}}\')" class="icon-close"></a>         <img src="/i/cmvivo_m.gif" alt="CM ao Vivo" />         <div class="barra_ao_vivo_container">             <div class="video_ao_vivo">                 <figure>                     <a href="{{Link}}" class="icon_multimedia icon-video"></a>                     <a href="{{Link}}"><img src="{{ImageUrl}}" class="img-fluid" alt="{{Title}}" /></a>                 </figure>             </div>             <div class="text_ao_vivo">                 <h2><a href="{{Link}}">{{Title}}</a></h2>             </div>         </div>     </section>      ').replace(/{{ContentKey}}/gi, e.ContentKey).replace(/{{Link}}/gi, e.Link).replace(/{{ImageUrl}}/gi, COF.validate.isNullOrEmpty(e.ImageUrl) ? "/i/px.png" : e.ImageUrl).replace(/{{Title}}/gi, e.Title).replace(/{{Video}}/gi, a).replace(/{{CStudio}}/gi, e.IsCStudio ? "cstudio" : "");
            $(".layerLiveStream").remove(),
            e.ShowOnTop ? ($("header").prepend($(r)),
            $("body").addClass("livestreamBar"),
            COF.validate.isNullOrEmpty(e.BrightcoveVideoId) ? COF.videoHandler.addBrightcoveVideoFromExternalSource(e.LiveStreamUrl, COF.validate.isNullOrEmpty(e.ImageUrl) ? "/i/px.png" : e.ImageUrl, "livestreamTopVideoFrame", GlobalVariables.videoplayer, !0, !0) : COF.videoHandler.addBrightcoveVideoWithJson([{
                title: e.Title,
                brightcoveVideoId: e.BrightcoveVideoId,
                file: e.LiveStreamUrl,
                image: COF.validate.isNullOrEmpty(e.ImageUrl) ? "/i/px.png" : e.ImageUrl,
                multimediaId: e.ContentId
            }], "livestreamTopVideoFrame", GlobalVariables.getVideoplayerObj(e.ContentId), !0, !0),
            $(document).on("click", ".expandir_barra_ao_vivo", (function() {
                "Minimizar" == $(this).text() && $("#pubLiveCMTop").is(":empty") && "pc" == in_version && COF.pubApi.renderMrecLayer($("#pubLiveCMTop"))
            }
            ))) : $("body").append($(r))
        } catch (e) {
            console.warn(e)
        }
    };
    return {
        showLiveStream: function(i) {
            e(i)
        },
        dismissLive: function(e) {
            $(".layerLiveStream").remove(),
            COF.cookies.setPreferingLocalStorage("Live_" + e, "1", 365, 0)
        }
    }
}();
var COFPushNotifications = {
    _reg: null,
    appState: {
        touched: !1,
        uid: !1,
        _setUid: function() {
            COFPushNotifications.appState.uid = COFPushNotifications.createGuid()
        },
        _lastUid: !1
    },
    config: {
        LABEL_ACTION_ID: "",
        TEXT_CONTAINER_ID: "",
        NOTIFICATION_BLOCK_ID: "",
        CONFIRM_BUTTON_ID: "",
        CANCEL_BUTTON_ID: "",
        ICON_URL: "",
        BADGE_URL: "",
        MESSAGE_TITLE: "",
        HAS_POPUP_REGISTRATION: !0,
        FULL_SITE_SUBSCRIPTION: !1,
        SITE_BASE_URL: null,
        VAPID_PUBLIC_KEY: null,
        SUBSCRIBE_CALLBACK: null,
        UNSUBSCRIBE_CALLBACK: null,
        SITE_PUSHNOTIFICATIONS_COOKIE: "SitePushNotifications",
        WARNING_PUSHNOTIFICATIONS_COOKIE: "PushWarning",
        SITE_PUSHNOTIFICATIONS_VAPID_COOKIE: "PushNotificationsv2",
        SSO_LOGIN_TOKEN_COOKIE: "cof_site_user",
        DEBUG: !0,
        environment: function() {
            if (null !== this._environment)
                return this._environment;
            var i = "PROD"
              , t = window.location.hostname;
            return t.indexOf(".stg.") > -1 ? i = "STG" : (t.indexOf(".local.") > -1 || t.indexOf("localhost") > -1) && (i = "DEV"),
            "PROD" === i && (COFPushNotifications.config.DEBUG = !1),
            this._environment = i,
            i
        },
        _environment: null,
        _sitePushNotificationsValue: null,
        _sitePushNotificationsVapidValue: null,
        _warningPushNotificationsValue: null
    },
    isDebuggable: function() {
        var i = !1;
        return COFPushNotifications.config.DEBUG && "PROD" !== COFPushNotifications.config.environment() && (i = !0),
        this._isDebuggable = i,
        i
    },
    _isDebuggable: null,
    addConfigs: function(i) {
        if ("object" == typeof i)
            for (var t in i)
                this.config[t] = i[t];
        COFPushNotifications.appState.touched = !0,
        "PROD" == COFPushNotifications.config.environment() && (COFPushNotifications.config.DEBUG = !1,
        null != COFPushNotifications.config.SITE_BASE_URL.STG && console.error("O valor SITE_BASE_URL.STG não deve estar configurado para aplicações em produção. Por favor remova."),
        null != COFPushNotifications.config.SITE_BASE_URL.DEV && console.error("O valor SITE_BASE_URL.DEV não deve estar configurado para aplicações em produção. Por favor remova."))
    },
    content: {
        info: "Faz load das variáveis necessárias",
        PRIMARY_AREA_NAME: "HOMEPAGE",
        where: function() {
            if (null !== COFPushNotifications.content._where && !1 !== COFPushNotifications.appState.touched)
                return COFPushNotifications.content._where;
            var i = "HOMEPAGE";
            return void 0 !== COFPushNotifications.content.areaId && void 0 === COFPushNotifications.content.contentID && "HOMEPAGE" !== COFPushNotifications.content.areaName ? i = "CANAL" : void 0 !== COFPushNotifications.content.contentID && "" !== COFPushNotifications.content.contentID && (i = "DETALHE"),
            COFPushNotifications.content._where = i,
            i
        },
        _where: null,
        getAndSetValues: function() {
            COFPushNotifications.config._sitePushNotificationsValue = COFPushNotifications.cookies.get(COFPushNotifications.config.SITE_PUSHNOTIFICATIONS_COOKIE, !0),
            COFPushNotifications.config._sitePushNotificationsVapidValue = COFPushNotifications.cookies.get(COFPushNotifications.config.SITE_PUSHNOTIFICATIONS_VAPID_COOKIE, !0),
            COFPushNotifications.config._warningPushNotificationsValue = COFPushNotifications.cookies.get(COFPushNotifications.config.WARNING_PUSHNOTIFICATIONS_COOKIE, !0),
            COFPushNotifications.config._sitePushNotificationsValue = null != COFPushNotifications.config._sitePushNotificationsValue ? COFPushNotifications.config._sitePushNotificationsValue.toLowerCase() : null,
            COFPushNotifications.config._sitePushNotificationsVapidValue = null != COFPushNotifications.config._sitePushNotificationsVapidValue ? COFPushNotifications.config._sitePushNotificationsVapidValue.toLowerCase() : null,
            COFPushNotifications.config._warningPushNotificationsValue = null != COFPushNotifications.config._warningPushNotificationsValue ? COFPushNotifications.config._warningPushNotificationsValue.toLowerCase() : null,
            "undefined" != typeof $_fields && (COFPushNotifications.content.areaId = $_fields.AreaID,
            COFPushNotifications.content.areaName = $_fields.AreaName,
            COFPushNotifications.content.contentID = $_fields.ContentID)
        }
    },
    cookies: {
        get: function(i, t) {
            for (var o = "", n = i + "=", s = document.cookie.split(";"), e = 0; e < s.length; e++) {
                for (var c = s[e]; " " == c.charAt(0); )
                    c = c.substring(1, c.length);
                0 == c.indexOf(n) && (o = c.substring(n.length, c.length))
            }
            return !t || COFPushNotifications.validate.isNullOrEmpty(o) || COFPushNotifications.validate.isNullOrEmpty(o) ? t || COFPushNotifications.validate.isNullOrEmpty(o) ? null : o : decodeURIComponent(o).replace(new RegExp(/\+/g), " ")
        },
        getPreferingLocalStorage: function(i, t) {
            if (!window.localStorage)
                return COFPushNotifications.cookies.get(i, t);
            var o = window.localStorage.getItem(i);
            return t && !COFPushNotifications.validate.isNullOrEmpty(o) ? decodeURIComponent(o).replace(new RegExp(/\+/g), " ") : t || COFPushNotifications.validate.isNullOrEmpty(o) ? null : o
        },
        set: function(i, t, o, n) {
            var s = ""
              , e = new Date;
            o ? null != o ? (e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3),
            s = "; expires=" + e.toGMTString()) : s = ";" : n ? null != n ? (e.setTime(e.getTime() + 60 * n * 1e3),
            s = "; expires=" + e.toGMTString()) : s = ";" : s = "",
            document.cookie = i + "=" + t + s + "; path=/"
        },
        setPreferingLocalStorage: function(i, t, o, n) {
            if (!window.localStorage)
                return COFPushNotifications.cookies.set(i, t, o, n);
            localStorage.setItem(i, t)
        }
    },
    validate: {
        isNullOrEmpty: function(i) {
            return void 0 === i || (null == i || ("undefined" == i || "" == i))
        },
        isValidBrowser: function() {
            return navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && navigator.userAgent.toLowerCase().indexOf("edge") < 0
        },
        isValidSubscription: function(i) {
            var t = JSON.parse(i);
            return !COFPushNotifications.validate.isNullOrEmpty(t.keys)
        }
    },
    utils: {
        getSubscription: function() {
            return navigator.serviceWorker.ready.then((function(i) {
                return i.pushManager.getSubscription()
            }
            ))
        },
        urlBase64ToUint8Array: function(i) {
            for (var t = (i + "=".repeat((4 - i.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), o = window.atob(t), n = new Uint8Array(o.length), s = 0; s < o.length; ++s)
                n[s] = o.charCodeAt(s);
            return n
        },
        getLoggedUserToken: function() {
            return COFPushNotifications.cookies.get(COFPushNotifications.config.SSO_LOGIN_TOKEN_COOKIE)
        }
    },
    check: function() {
        COFPushNotifications.validate.isValidBrowser() ? "HOMEPAGE" === COFPushNotifications.content.where() || COFPushNotifications.config.FULL_SITE_SUBSCRIPTION ? "true" !== COFPushNotifications.config._warningPushNotificationsValue || "true" === COFPushNotifications.config._warningPushNotificationsValue && "true" === COFPushNotifications.config._sitePushNotificationsVapidValue ? COFPushNotifications.utils.getSubscription().then((function(i) {
            i ? "true" !== COFPushNotifications.config._sitePushNotificationsVapidValue ? COFPushNotifications.resubscribe() : COFPushNotifications.config.HAS_POPUP_REGISTRATION ? ($(COFPushNotifications.config.LABEL_ACTION_ID).addClass("pushnotificationsfixed"),
            $(COFPushNotifications.config.LABEL_ACTION_ID).attr("data-action", "unsubscribe"),
            $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Remover notificações"),
            $(COFPushNotifications.config.LABEL_ACTION_ID).show()) : ($(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Deseja remover notificações"),
            $(COFPushNotifications.config.CANCEL_BUTTON_ID).attr("data-action", "unsubscribe"),
            $(COFPushNotifications.config.CONFIRM_BUTTON_ID).attr("data-action", "unsubscribe")) : "true" !== COFPushNotifications.config._sitePushNotificationsVapidValue && "true" !== COFPushNotifications.config._sitePushNotificationsValue ? (setTimeout((function() {
                $(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).show()
            }
            ), 2e3),
            COFPushNotifications.config.HAS_POPUP_REGISTRATION && ($(COFPushNotifications.config.LABEL_ACTION_ID).addClass("pushnotificationsfixed"),
            $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Subscrever notificações"),
            $(COFPushNotifications.config.LABEL_ACTION_ID).attr("data-action", "subscribe"))) : COFPushNotifications.subscribe(!1)
        }
        )) : COFPushNotifications.config.HAS_POPUP_REGISTRATION && ($(COFPushNotifications.config.LABEL_ACTION_ID).addClass("pushnotificationsfixed"),
        $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Subscrever notificações"),
        $(COFPushNotifications.config.LABEL_ACTION_ID).attr("data-action", "subscribe"),
        $(COFPushNotifications.config.LABEL_ACTION_ID).show()) : (COFPushNotifications.config.HAS_POPUP_REGISTRATION && $(COFPushNotifications.config.LABEL_ACTION_ID).remove(),
        $(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).remove(),
        "true" !== COFPushNotifications.config._sitePushNotificationsValue && "true" !== COFPushNotifications.config._sitePushNotificationsVapidValue || COFPushNotifications.utils.getSubscription().then((function(i) {
            i ? "true" !== COFPushNotifications.config._sitePushNotificationsVapidValue && COFPushNotifications.resubscribe() : COFPushNotifications.subscribe(!1)
        }
        ))) : (COFPushNotifications.config.HAS_POPUP_REGISTRATION && $(COFPushNotifications.config.LABEL_ACTION_ID).remove(),
        $(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).remove())
    },
    bindEvents: function() {
        COFPushNotifications.config.HAS_POPUP_REGISTRATION && ($(document).on("mouseenter", COFPushNotifications.config.LABEL_ACTION_ID, (function() {
            $(COFPushNotifications.config.TEXT_CONTAINER_ID).fadeIn()
        }
        )),
        $(document).on("mouseleave", COFPushNotifications.config.LABEL_ACTION_ID, (function() {
            $(COFPushNotifications.config.TEXT_CONTAINER_ID).fadeOut()
        }
        )),
        $(document).on("click", COFPushNotifications.config.LABEL_ACTION_ID, (function() {
            var i = $(COFPushNotifications.config.LABEL_ACTION_ID).attr("data-action");
            "subscribe" == i ? COFPushNotifications.subscribe(!0) : "unsubscribe" == i && COFPushNotifications.unsubscribe()
        }
        ))),
        $(document).on("click", COFPushNotifications.config.CONFIRM_BUTTON_ID, (function() {
            COFPushNotifications.config.HAS_POPUP_REGISTRATION ? ($(".notificacao").remove(),
            COFPushNotifications.subscribe(!0)) : ($(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).removeClass("notificacaoBloqueada"),
            $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Deseja receber notificações"),
            "subscribe" == $(this).attr("data-action") ? COFPushNotifications.subscribe(!0) : "unsubscribe" == $(this).attr("data-action") && COFPushNotifications.unsubscribe())
        }
        )),
        $(document).on("click", COFPushNotifications.config.CANCEL_BUTTON_ID, (function() {
            COFPushNotifications.config.HAS_POPUP_REGISTRATION && $(COFPushNotifications.config.LABEL_ACTION_ID).show(),
            (COFPushNotifications.config.HAS_POPUP_REGISTRATION || "subscribe" == $(this).attr("data-action")) && $(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).remove(),
            COFPushNotifications.cookies.set(COFPushNotifications.config.WARNING_PUSHNOTIFICATIONS_COOKIE, "true", 1)
        }
        ))
    },
    subscribe: function(i) {
        null == i && (i = !0);
        var t = COFPushNotifications.utils.urlBase64ToUint8Array(COFPushNotifications.config.VAPID_PUBLIC_KEY);
        COFPushNotifications._reg.pushManager.subscribe({
            userVisibleOnly: !0,
            applicationServerKey: t
        }).then((function(t) {
            var o = JSON.stringify(t);
            if (!COFPushNotifications.validate.isNullOrEmpty(o) && COFPushNotifications.validate.isValidSubscription(o)) {
                var n = COFPushNotifications.utils.getLoggedUserToken();
                null === n && (n = ""),
                fetch("/PushNotifications/Register", {
                    method: "post",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    body: "vapidKey=" + o + "&loginToken=" + n
                }).then((function(t) {
                    t.json().then((function(t) {
                        t.success ? (Notification.requestPermission((function(t) {
                            "granted" === t && navigator.serviceWorker.ready.then((function(t) {
                                i && t.showNotification(COFPushNotifications.config.MESSAGE_TITLE, {
                                    body: "Obrigado pela sua subscrição",
                                    icon: COFPushNotifications.config.ICON_URL,
                                    badge: COFPushNotifications.config.ICON_URL
                                })
                            }
                            ))
                        }
                        )),
                        null !== COFPushNotifications.config.SUBSCRIBE_CALLBACK && COFPushNotifications.config.SUBSCRIBE_CALLBACK instanceof Function && COFPushNotifications.config.SUBSCRIBE_CALLBACK(),
                        COFPushNotifications.cookies.set(COFPushNotifications.config.SITE_PUSHNOTIFICATIONS_VAPID_COOKIE, "true", 2038),
                        COFPushNotifications.config.HAS_POPUP_REGISTRATION ? ($(COFPushNotifications.config.LABEL_ACTION_ID).addClass("pushnotificationsfixed"),
                        $(COFPushNotifications.config.LABEL_ACTION_ID).attr("data-action", "unsubscribe"),
                        $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Remover notificações"),
                        $(COFPushNotifications.config.LABEL_ACTION_ID).show()) : ($(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).hide(),
                        $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Deseja remover notificações"),
                        $(COFPushNotifications.config.CANCEL_BUTTON_ID).attr("data-action", "unsubscribe"),
                        $(COFPushNotifications.config.CONFIRM_BUTTON_ID).attr("data-action", "unsubscribe"))) : COFPushNotifications.config.HAS_POPUP_REGISTRATION || $(COFPushNotifications.config.TEXT_CONTAINER_ID).html("<span class='titulo'>Erro ao remover subscrição. Tente novamente</span>")
                    }
                    ))
                }
                ))
            }
        }
        ))
    },
    unsubscribe: function() {
        COFPushNotifications._reg.pushManager.getSubscription().then((function(i) {
            if (null != i)
                return i.unsubscribe().then((function() {
                    var t = i.endpoint;
                    fetch("/PushNotifications/Unregister", {
                        method: "post",
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        body: "registrationID=" + t
                    }).then((function(i) {
                        i.json().then((function(i) {
                            i.success ? (null !== COFPushNotifications.config.UNSUBSCRIBE_CALLBACK && COFPushNotifications.config.UNSUBSCRIBE_CALLBACK instanceof Function && COFPushNotifications.config.UNSUBSCRIBE_CALLBACK(),
                            COFPushNotifications.cookies.set(COFPushNotifications.config.SITE_PUSHNOTIFICATIONS_COOKIE, "", -1),
                            COFPushNotifications.cookies.set(COFPushNotifications.config.SITE_PUSHNOTIFICATIONS_VAPID_COOKIE, "", -1),
                            COFPushNotifications.config.HAS_POPUP_REGISTRATION ? ($(COFPushNotifications.config.LABEL_ACTION_ID).addClass("pushnotificationsfixed").attr("data-action", "subscribe"),
                            $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Subscrever notificações"),
                            $(COFPushNotifications.config.LABEL_ACTION_ID).show()) : ($(COFPushNotifications.config.NOTIFICATION_BLOCK_ID).hide(),
                            $(COFPushNotifications.config.TEXT_CONTAINER_ID).text("Subscrever notificações"),
                            $(COFPushNotifications.config.CANCEL_BUTTON_ID).attr("data-action", "subscribe"),
                            $(COFPushNotifications.config.CONFIRM_BUTTON_ID).attr("data-action", "subscribe"))) : COFPushNotifications.config.HAS_POPUP_REGISTRATION || $(COFPushNotifications.config.TEXT_CONTAINER_ID).html("<span class='titulo'>Erro ao remover subscrição. Tente novamente</span>")
                        }
                        ))
                    }
                    ))
                }
                ))
        }
        ))
    },
    resubscribe: function() {
        COFPushNotifications._reg.pushManager.getSubscription().then((function(i) {
            if (null != i)
                return i.unsubscribe().then((function() {
                    var t = i.endpoint.slice(i.endpoint.lastIndexOf("/") + 1);
                    fetch("/PushNotifications/Unregister", {
                        method: "post",
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        body: "registrationID=" + t
                    }).then((function(i) {
                        COFPushNotifications.cookies.set(COFPushNotifications.config.SITE_PUSHNOTIFICATIONS_COOKIE, "", -1),
                        COFPushNotifications.cookies.set("PushNotifications", "", -1),
                        COFPushNotifications.subscribe(!1)
                    }
                    ))
                }
                ));
            COFPushNotifications.subscribe(!1)
        }
        ))
    }
}
  , initCOFPushNotifications = {
    init: function(i) {
        COFPushNotifications._reg = i,
        COFPushNotifications.content.getAndSetValues(),
        COFPushNotifications.check(),
        COFPushNotifications.bindEvents()
    }
};
function addLoadEvent(t) {
    var e = window.onload;
    "function" != typeof window.onload ? window.onload = t : window.onload = function() {
        e && e(),
        t()
    }
}
COF.content.getAndSetValues(),
"1" !== COF.cookies.get("avisoCookiesCM") && (COF.cookies.set("avisoCookiesCM", 1, 365),
$("#cookiebar").addClass("show"));
var share = function() {
    var t = {
        binder: ".icon-facebook-a, .cMradarFb, .podcastFb",
        utm: "utm_medium=Social&utm_source=Facebook&utm_campaign=BotoesSite"
    }
      , e = {
        binder: ".InffbRelato",
        utm: "utm_medium=Social&utm_source=Facebook&utm_campaign=BotoesSite"
    }
      , a = {
        binder: ".icon-twitter-a, .cMradarTw, .podcastTwitter",
        utm: "utm_medium=Social&utm_source=Twitter&utm_campaign=BotoesSite"
    }
      , i = {
        binder: ".InftwRelato",
        utm: "utm_medium=Social&utm_source=Twitter&utm_campaign=BotoesSite"
    }
      , o = {
        binder: ".icon-whatsapp-a, .cMradarWp",
        utm: "utm_medium=Social&utm_source=Whatsapp&utm_campaign=BotoesSite"
    }
      , n = {
        binder: ".cMradarLi, .icon-linkdn-a",
        utm: "utm_medium=Social&utm_source=LinkedIn&utm_campaign=BotoesSite"
    }
      , r = {
        binder: ".icon-pinterest-a",
        utm: "utm_medium=Social&utm_source=Pintrest&utm_campaign=BotoesSite"
    }
      , s = {
        binder: ".icon-mail",
        utm: ""
    }
      , c = {
        binder: "a.icon-imprimir-a",
        utm: ""
    }
      , l = {
        binder: ".comentariosMobile, .comentariosDesktop",
        utm: ""
    }
      , d = {
        url: "",
        local: "",
        setHits: "",
        contentID: 0,
        contentType: "Articles",
        areaID: 0,
        text: "",
        media: ""
    }
      , u = function() {
        $(document).on("click", t.binder, (function(e) {
            d.SetValues($(this)),
            I($(this), "facebook", (function() {
                var e = d.url + t.utm;
                COF.social.facebookShare(encodeURIComponent(e))
            }
            ))
        }
        ))
    }
      , m = function() {
        $(document).on("click", e.binder, (function(e) {
            d.SetValues($(this));
            var a = $(this).attr("data-contentid");
            I($(this), "facebook", (function() {
                var e = d.url + t.utm + "&eventid=" + a;
                COF.social.facebookShare(encodeURIComponent(e))
            }
            ))
        }
        ))
    }
      , f = function() {
        $(document).on("click", a.binder, (function(t) {
            I($(this), "twitter", (function() {
                COF.social.config.providers.TWITTER.screenName = "cmjornal";
                var t = d.url + a.utm;
                COF.social.twitterShare(encodeURIComponent(t))
            }
            ))
        }
        ))
    }
      , v = function() {
        $(document).on("click", i.binder, (function(t) {
            var e = $(this).attr("data-contentid")
              , i = $(this).attr("data-home")
              , o = $(this).attr("data-away");
            I($(this), "twitter", (function() {
                COF.social.config.providers.TWITTER.screenName = "cmjornal";
                var t = d.url + a.utm + "&eventid=" + e
                  , n = $.trim($("#text_" + e).text())
                  , r = i + " x " + o + " - " + n;
                COF.social.twitterShare(encodeURIComponent(t), r)
            }
            ))
        }
        ))
    }
      , h = function() {
        $(document).on("click", r.binder, (function(t) {
            I($(this), "pintrest", (function() {
                void 0 !== d.url && "" !== d.media && COF.social.pintRestShare(d.url, d.media)
            }
            ))
        }
        ))
    }
      , p = function() {
        $(document).on("click", o.binder, (function(t) {
            I($(this), "whatsapp", (function() {
                var t;
                t = d.url + o.utm,
                COF.social.whatsApp(t)
            }
            ))
        }
        ))
    }
      , C = function() {
        $(document).on("click", n.binder, (function(t) {
            I($(this), "linkedin", (function() {
                var t;
                t = d.url + n.utm,
                COF.social.linkedInShare(t)
            }
            ))
        }
        ))
    }
      , _ = function() {
        $(document).on("click", s.binder, (function(t) {
            if (d.SetValues($(this)),
            !0 === $(this).data("offer")) {
                var e = $(this).data("url");
                d.SetValues($(this)),
                $("#share").modal("hide"),
                $("#send_mail_offer").modal("show"),
                $("#send_mail_offer").on("shown.bs.modal", (function(t) {
                    "" !== e && $("#send_mail_offer #ContentUrl").val(e),
                    $("body").addClass("modal-open")
                }
                ))
            } else
                renderPubIdLayer("send_mail"),
                $("#share").modal("hide"),
                $("#send_mail").modal("show"),
                $("#send_mail").on("shown.bs.modal", (function(t) {
                    $("body").addClass("modal-open")
                }
                ))
        }
        ))
    }
      , g = function() {
        $(document).on("click", c.binder, (function(t) {
            setTimeout((function() {
                window.print()
            }
            ), 500),
            d.SetValues($(this))
        }
        ))
    }
      , b = function() {
        $(document).on("click", l.binder, (function(t) {
            var e = 0
              , a = 1500;
            switch (in_version) {
            case "pc":
                e = 200;
                break;
            case "tablet":
                e = 160;
                break;
            case "mobile":
                e = 90,
                a = 3e3
            }
            $("html, body").animate({
                scrollTop: $("#loadComments").offset().top - e
            }, {
                duration: a,
                step: function(t, a) {
                    a.end = $("#loadComments").offset().top - e
                }
            }),
            d.SetValues($(this))
        }
        ))
    };
    function I(t, e, a) {
        d.SetValues(t),
        void 0 !== d.url && ("function" == typeof a && a(),
        "0" !== d.setHits && !0 === COF.config.CONTAGENS && COF.contagens.HitAndShare(d.contentID, d.areaID, d.contentType, "", e, d.url))
    }
    d.SetValues = function(t) {
        var e, a;
        void 0 !== t.attr("data-url") ? this.url = (e = t.attr("data-url"),
        a = "&",
        -1 === e.indexOf("http") && (e.indexOf("/") > 0 && (e = "/" + e),
        e = window.location.origin + e),
        -1 === e.indexOf("?") && (a = "?"),
        e += a) : this.url = document.location.href,
        void 0 !== t.attr("data-local") && (this.local = t.attr("data-local")),
        void 0 !== t.attr("data-hits") && (this.setHits = t.attr("data-hits")),
        void 0 !== t.attr("data-contentid") ? this.contentID = t.attr("data-contentid") : void 0 !== COF.content.contentID && (this.contentID = COF.content.contentID),
        void 0 !== t.attr("data-contentType") ? this.contentType = t.attr("data-contentType") : void 0 !== COF.content.contentTypeName && (this.contentType = COF.content.contentTypeName),
        void 0 !== t.attr("data-areaid") ? this.areaID = t.attr("data-areaid") : void 0 !== COF.content.areaId && (this.areaID = COF.content.areaId),
        void 0 !== t.attr("data-text") && (this.text = t.attr("data-text")),
        void 0 !== t.attr("data-media") && (this.media = t.attr("data-media"))
    }
    ;
    return {
        init: (u(),
        m(),
        f(),
        v(),
        h(),
        p(),
        C(),
        _(),
        g(),
        void b()),
        shareFacebook: u,
        shareFacebookRelato: m,
        shareTwitter: f,
        shareTwitterRelato: v,
        sharePintRest: h,
        shareWhatsApp: p,
        ShareLinkedIn: C,
        enviarEmail: _,
        imprimirNoticia: g,
        comentariosNoticia: b
    }
}()
  , favoritos = {
    add: void $(document).on("click", ".save", (function() {
        if ($(this).attr("class").indexOf("saved") >= 0)
            return !1;
        if (!COF.isUserLoggedIn())
            return $("#addFavModal").modal("show"),
            !1;
        var t = $(this).attr("data-url");
        if ($(this).attr("data-local"),
        "" !== t) {
            var e = $(this).data("contentid");
            if (COF.validate.isNullOrEmpty(e))
                return;
            CofinaSSOApi.addNewsToFavourites(t);
            var a = COF.cookies.get("Favorites");
            null === a && (a = "");
            var i = e.toString().concat("||");
            if (!COF.validate.isNullOrEmpty(a) && a.indexOf(i) >= 0)
                return;
            a += i,
            COF.cookies.set("Favorites", a, 365);
            var o = $(".save[data-contentID='" + e + "']");
            $(o).each((function() {
                $(this).toggleClass("saved"),
                $(".ic_read-later").length > 0 ? $(this).toggleClass("ic_read-later_active") : $(".read_later").toggleClass("activated")
            }
            ))
        }
    }
    )),
    remove: void $(document).on("click", ".saved", (function() {
        var t = $(this).data("url")
          , e = $(this).data("contentid");
        if ("" !== t && "" !== e) {
            var a = COF.cookies.get("Favorites");
            if (null !== a) {
                var i = a.toString().replace(e + "||", "");
                COF.cookies.set("Favorites", i, 365)
            }
            CofinaSSOApi.removeNewsFromFavourites(t);
            var o = $(".saved[data-contentID='" + e + "']");
            $(o).each((function() {
                $(this).toggleClass("saved"),
                $(".ic_read-later").length > 0 ? $(this).toggleClass("ic_read-later_active") : $(".read_later").toggleClass("activated")
            }
            ))
        }
    }
    )),
    applyFavourites: function() {
        var t = COF.cookies.get("Favorites");
        if (!COF.validate.isNullOrEmpty(t) && $(".save").length > 0) {
            var e = t.toString().split("||");
            $(e).each((function() {
                var t = this.toString()
                  , e = $(".save[data-contentID='" + t + "']");
                void 0 !== e && $(e).each((function() {
                    $(this).toggleClass("saved"),
                    $(".ic_read-later").length > 0 ? $(this).toggleClass("ic_read-later_active") : $(".read_later").toggleClass("activated")
                }
                ))
            }
            ))
        }
    }()
}
  , horoscopo = ($((function() {
    $(".signo_icon:first").addClass("active")
}
)),
void $(".horoscopoAnchor").on("click", (function() {
    var t = $(this).data("anchor");
    $(".horoscopoAnchor").removeClass("active"),
    $(this).addClass("active"),
    $(".signo_icon").removeClass("active"),
    $("#" + t).find(".signo_icon").addClass("active"),
    $("html,body").animate({
        scrollTop: $("#" + t).offset().top - 100
    }, "slow")
}
)));
function replaceShareModalImg(t, e) {
    var a = t.substring(t.indexOf("img_"), t.indexOf("$"));
    t = t.replace(a, e),
    $("#foto-share").attr("src", t)
}
function setOriginalImgModalShare() {
    var t = $("#imgOrgModalShare").val();
    $("#foto-share").attr("src", t),
    setLinksModalShare("", t)
}
function setLinksModalShare(t, e) {
    var a = $("#share .icon-facebook-a")
      , i = $("#share .icon-twitter-a")
      , o = $("#share .icon-pinterest-a")
      , n = $("#share .shareLink input")
      , r = "";
    "" === t ? void 0 === (r = COF.content.contentUrl) && (r = n.val()) : r = a.attr("data-url").split("?")[0] + "?sid=" + t,
    a.attr("data-url", r),
    i.attr("data-url", r),
    o.attr("data-url", r),
    o.attr("data-media", e.replace("img_298x168", "img_970x545")),
    n.val(r)
}
var AlertasDetalhe = {
    setModalAlerts: function() {
        $("#alertas_content").length > 0 && $(document).on("click", "#alertas_content a", (function(t) {
            if (!COF.isUserLoggedIn())
                return $("#addAlertasModal").modal("show"),
                !1
        }
        ))
    },
    setUserAlerts: function() {
        if ($("#alertas_content").length > 0) {
            if (!COF.isUserLoggedIn())
                return;
            var t = COF.cookies.get("WordAlerts");
            if (COF.validate.isNullOrEmpty(t))
                return;
            t = (t = decodeURIComponent(t)).replace(/[+]/g, " ");
            var e = $($.parseHTML(t)[0]).text().toLowerCase().split(",");
            e = $.map(e, $.trim),
            $("#alertas_content a").each((function() {
                var t = $(this).text().toLowerCase().trim();
                if (e.indexOf(t) >= 0) {
                    var a = $(this);
                    a.addClass("alertaSubscrito"),
                    a.attr("href", a.attr("href").replace("/subscribealertasdetalhe/", "/unsubscribealertasdetalhe/"))
                }
            }
            ))
        }
    }
};
jRes.addFunc([{
    breakpoint: "mobile",
    enter: function() {
        in_version = "mobile",
        $(".info_c-studio").click((function() {
            $(".layerInfo_c-studio").fadeToggle()
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}, {
    breakpoint: "tablet",
    enter: function() {
        in_version = "tablet",
        $(".info_c-studio").click((function() {
            $(".layerInfo_c-studio").fadeToggle()
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}, {
    breakpoint: "pc",
    enter: function() {
        in_version = "pc",
        $(".info_c-studio").hover((function() {
            $(".layerInfo_c-studio").fadeToggle()
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}]);
var canalSaude = {
    utils: {
        onlyNumbersInputs: function(t) {
            t.on("keyup", (function() {
                this.value = this.value.replace(/[^\d.]/g, "")
            }
            ))
        }
    },
    imc: {
        init: function() {
            canalSaude.utils.onlyNumbersInputs($(".imcCalcInput")),
            $("#imcCalulationSubmit").on("click", (function() {
                var t = function(t) {
                    $(".imcCalcMessage").html(t)
                }
                  , e = $(".imcCalcInput.height")
                  , a = $(".imcCalcInput.weight");
                if ("" === a.val() || "" === e.val())
                    return t("Tem de indicar os valores para peso e altura"),
                    !1;
                var i = (a = Number(a.val())) / ((e = Number(e.val()) / 100) * e);
                return isNaN(i) ? (t("Por favor verifique os valores indicados e tente novamente"),
                !1) : (t("Com base nos valores introduzidos, o seu IMC é <strong>" + (i = Number(i).toFixed(2)) + "!</strong>"),
                !1)
            }
            ))
        }
    },
    calcPesoIdeal: {
        init: function() {
            canalSaude.utils.onlyNumbersInputs($(".calcPesoIdealInput")),
            $("#calcPesoIdealCalulationSubmit").on("click", (function() {
                var t = function(t) {
                    $("#calcPIValueMessage").html(t),
                    $("#calcPesoIdealResult").show()
                }
                  , e = $(".calcPesoIdealInput.age")
                  , a = $(".calcPesoIdealInput.height")
                  , i = "M"
                  , o = 2.5;
                if ($(".sexo_homem.active").length > 0 ? (o = $(".sexo_homem.active").attr("data-seximc"),
                i = "H") : $(".sexo_mulher.active").length > 0 && (o = $(".sexo_mulher.active").attr("data-seximc")),
                "" === e.val() || "" === a.val())
                    return t("Tem de indicar os valores para idade e altura"),
                    !1;
                a = Number(a.val().replace(",", ".")),
                a /= 100;
                var n = -1;
                return (e = Number(e.val())) < 3 ? (t("Tem de indicar um valor para idade superior a 2 anos"),
                !1) : (e <= 10 ? n = 2 * e + 9 : (e > 10 && e < 65 || (e > 65 && e <= 69 ? o = "H" === i ? 24.3 : 26.5 : e > 69 && e <= 74 ? o = "H" === i ? 25.1 : 26.3 : e > 74 && e <= 79 ? o = "H" === i ? 23.9 : 26.1 : e > 79 && e <= 84 ? o = "H" === i ? 23.7 : 25.5 : e > 84 && (o = "H" === i ? 23.1 : 23.6)),
                n = o * (a * a)),
                isNaN(n) || n < 0 ? (t("Por favor verifique os valores indicados e tente novamente"),
                !1) : (t("Com base nos valores introduzidos, o seu peso ideal é de <strong>" + (n = Number(n).toFixed(2)) + " kg!</strong>"),
                !1))
            }
            ))
        }
    }
};
function swReg() {
    COFPushNotifications.addConfigs({
        SITE_BASE_URL: GlobalVariables.ENV_URL,
        LABEL_ACTION_ID: "#ic_notificacoes",
        TEXT_CONTAINER_ID: "#ic_notificacoes .msg-notification",
        NOTIFICATION_BLOCK_ID: ".notificacao",
        CONFIRM_BUTTON_ID: "#pushContinue",
        CANCEL_BUTTON_ID: ".pushCancelRegister",
        ICON_URL: GlobalVariables.ENV_URL + "i/pushnotifications/cm_ic.png",
        BADGE_URL: GlobalVariables.ENV_URL + "i/pushnotifications/notification_cm.png",
        MESSAGE_TITLE: "Notificações CM",
        HAS_POPUP_REGISTRATION: !0,
        FULL_SITE_SUBSCRIPTION: !1,
        VAPID_PUBLIC_KEY: GlobalVariables.pushnotifications.vapidPublicKey,
        SUBSCRIBE_CALLBACK: function() {
            cofinaAnalytics.gaEvent("event", "PushChrome", "Register")
        },
        UNSUBSCRIBE_CALLBACK: function() {
            cofinaAnalytics.gaEvent("event", "PushChrome", "Unregister")
        }
    }),
    "serviceWorker"in navigator && navigator.serviceWorker.register("/sw.js", {
        scope: "/"
    }).then((function(t) {
        initCOFPushNotifications.init(t)
    }
    ))
}
addLoadEvent(swReg);
var bLazy = null;
$(document).ready((function() {
    var t = $(".pagingInfo")
      , a = $(".fotogaleria_detalhe");
    $(a).each((function() {
        $(this).on("init reInit afterChange", (function(a, i, o, e) {
            var n = (o || 0) + 1
              , s = $(this).attr("data-contentid")
              , l = "[data-contentid = '" + s + "']"
              , d = "<span>" + n + "</span>/<span>" + i.slideCount + "</span>";
            t.filter(l).html(d);
            var c = $($(this).find("img")[n - 1]).attr("data-title");
            $("#legendaFotogaleria[data-contentid = '" + s + "']").text(c);
            var r = $($(this).find("img")[n - 1]).attr("data-credit");
            $("#creditFoto[data-contentid = '" + s + "']").text(r)
        }
        )),
        $(this).on("afterChange", (function(t, a, i, o) {
            a.paused && cofinaAnalytics.refresh()
        }
        ))
    }
    )),
    $(".fotogaleria_detalhe").on("init", (function(t) {
        $(this).css("visibility", "visible").hide().fadeIn()
    }
    )).each((function() {
        var t = {
            lazyLoad: "ondemand",
            dots: !1,
            arrows: !0,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
            infinite: !1,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            asNavFor: ".fotogaleria_detalhe_nav[data-contentid=" + $(this).attr("data-contentid") + "]",
            adaptiveHeight: !1
        };
        $(this).slick(t).slick("setPosition")
    }
    )),
    $(".fotogaleria_detalhe_nav").on("init", (function(t) {
        $(this).css("visibility", "visible").hide().fadeIn()
    }
    )).each((function() {
        var t = {
            lazyLoad: "ondemand",
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: ".fotogaleria_detalhe[data-contentid=" + $(this).attr("data-contentid") + "]",
            dots: !1,
            arrows: !0,
            speed: 500,
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
            centerMode: !1,
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        };
        $(this).slick(t).slick("setPosition")
    }
    )),
    $(document).on("click", "#playSlideshow", (function() {
        $(".fotogaleria_detalhe").slick("slickPlay"),
        $("#playSlideshow").hide(),
        $("#pauseSlideshow").show()
    }
    )),
    $(document).on("click", "#pauseSlideshow", (function() {
        $(".fotogaleria_detalhe").slick("slickPause"),
        $("#pauseSlideshow").hide(),
        $("#playSlideshow").show()
    }
    )),
    $(document).on("click", "#thumbsFotogaleria", (function() {
        var t = $(this).attr("data-contentid");
        $(".fotogaleriaThumbs[data-contentid = '" + t + "']").slideToggle(),
        null !== bLazy && bLazy.revalidate()
    }
    )),
    $(document).on("click", ".closeThumbs", (function() {
        var t = $(this).attr("data-contentid");
        $(".fotogaleriaThumbs[data-contentid = '" + t + "']").slideToggle()
    }
    )),
    $(document).on("click", ".thumbsImg", (function() {
        var t = $(this).attr("data-index")
          , a = $(this).attr("data-contentid");
        void 0 !== a && "" != a && ($(".fotogaleria_detalhe[data-contentid = '" + a + "']").slick("slickGoTo", t),
        $(".fotogaleriaThumbs[data-contentid = '" + a + "']").slideToggle())
    }
    ))
}
));
var bLazy = null;
$(document).ready((function() {
    var t = $("#zoomGaleria .pagingInfoZoom")
      , a = $(".fotogaleria_layer");
    null !== a && null !== t && $(a).each((function() {
        $(this).on("reInit", (function(a, i, n, o) {
            var e = (n || 0) + 1
              , s = "<span>" + e + "</span> / <span>" + i.slideCount + "</span>";
            if (t.html(s),
            $(this)[0].slick.$slides.length) {
                var l = $($(this).find("img")[e - 1]).attr("data-title");
                $("#zoomGaleria #legendaFotogaleriaZoom").text(l)
            }
        }
        )),
        $(this).on("afterChange", (function(a, i, n, o) {
            var e = (n || 0) + 1
              , s = "<span>" + e + "</span> / <span>" + i.slideCount + "</span>";
            if (t.html(s),
            $(this)[0].slick.$slides.length) {
                var l = $($(this).find("img")[e - 1]).attr("data-title");
                $("#zoomGaleria #legendaFotogaleriaZoom").text(l)
            }
            var r = $("#zoomGaleria").data("contentid");
            if (null != r && "" != r) {
                var d = $(this).slick("slickCurrentSlide");
                $(".fotogaleria_detalhe[data-contentid='" + r + "']").slick("slickGoTo", d)
            }
        }
        ))
    }
    ));
    $(".fotogaleria_layer").on("init", (function(t) {
        $(this).css("visibility", "visible").hide().fadeIn()
    }
    )).slick({
        lazyLoad: "ondemand",
        dots: !1,
        arrows: !0,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        adaptiveHeight: !1
    }).slick("setPosition")
}
));
function changeHeaderDetalhe() {
    if (0 != $(".multimedia_abertura").length) {
        var e = $(".multimedia_abertura").offset();
        $(window).scroll((function() {
            $(this).scrollTop() > e.top ? $(".header_top").addClass("headerDetalhe") : $(this).scrollTop() <= e.top && $(".header_top").removeClass("headerDetalhe")
        }
        ))
    }
}
function hammerIt(e) {
    hammertime = new Hammer(e,{}),
    hammertime.get("pinch").set({
        enable: !0
    });
    var a = 0
      , t = 0
      , o = 1
      , i = 1
      , n = 0
      , r = 0
      , l = 0
      , s = 0
      , d = ""
      , c = e;
    hammertime.on("doubletap pan pinch panend pinchend", (function(e) {
        if ("doubletap" == e.type) {
            d = "translate3d(0, 0, 0) scale3d(2, 2, 1) ",
            o = 2,
            i = 2;
            try {
                "matrix(1, 0, 0, 1, 0, 0)" != window.getComputedStyle(c, null).getPropertyValue("-webkit-transform").toString() && (d = "translate3d(0, 0, 0) scale3d(1, 1, 1) ",
                o = 1,
                i = 1)
            } catch (e) {}
            c.style.webkitTransform = d,
            d = ""
        }
        1 != o && (a = n + e.deltaX,
        t = r + e.deltaY,
        l = Math.ceil((o - 1) * c.clientWidth / 2),
        s = Math.ceil((o - 1) * c.clientHeight / 2),
        a > l && (a = l),
        a < -l && (a = -l),
        t > s && (t = s),
        t < -s && (t = -s)),
        "pinch" == e.type && (o = Math.max(.999, Math.min(i * e.scale, 4))),
        "pinchend" == e.type && (i = o),
        "panend" == e.type && (n = a < l ? a : l,
        r = t < s ? t : s),
        1 != o && (d = "translate3d(" + a + "px," + t + "px, 0) scale3d(" + o + ", " + o + ", 1)"),
        d && (c.style.webkitTransform = d)
    }
    ))
}
jRes.addFunc([{
    breakpoint: "mobile",
    enter: function() {
        in_version = "mobile",
        $(".info_c-studio").click((function() {
            $(".layerInfo_c-studio").fadeToggle()
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}, {
    breakpoint: "tablet",
    enter: function() {
        in_version = "tablet",
        $(".destaques_hp_main").length > 0 && $(".destaques_hp_main").on("init", (function(e) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                arrows: !0,
                dots: !1,
                prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
                nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
                adaptiveHeight: !1,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0
            }).slick("setPosition")
        }
        )),
        $(".destaques_hp_main").each((function() {
            $(this).on("init reInit afterChange", (function(e, a, t, o) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        )),
        $(".multimedia_abertura").length > 0 && $(window).scroll((function() {
            changeHeaderDetalhe()
        }
        )),
        $(".partilhas_stick").length > 0 && $(".partilhas_stick").each((function(e) {
            $(this).parents(".col_styck").length > 0 && $(this).stick_in_parent({
                parent: ".col_styck",
                spacer: ".sticky-spacer",
                inner_scrolling: !1,
                offset_top: 50,
                recalc_every: 1
            })
        }
        )),
        $(".info_c-studio").click((function() {
            $(".layerInfo_c-studio").fadeToggle()
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}, {
    breakpoint: "pc",
    enter: function() {
        in_version = "pc",
        $(".destaques_hp_main").length > 0 && $(".destaques_hp_main").on("init", (function(e) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                arrows: !0,
                dots: !1,
                prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"></span></button>',
                nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"></span></button>',
                adaptiveHeight: !1,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: !0
            }).slick("setPosition")
        }
        )),
        $(".destaques_hp_main").each((function() {
            $(this).on("init reInit afterChange", (function(e, a, t, o) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        )),
        $(".multimedia_abertura").length > 0 && $(window).scroll((function() {
            changeHeaderDetalhe()
        }
        )),
        $(".partilhas_stick").length > 0 && $(".partilhas_stick").each((function(e) {
            $(this).parents(".col_styck").length > 0 && $(this).stick_in_parent({
                parent: ".col_styck",
                spacer: ".sticky-spacer",
                inner_scrolling: !1,
                offset_top: 50,
                recalc_every: 1
            })
        }
        )),
        $(".pub_stick").length > 0 && $(".pub_stick").each((function(e) {
            $(this).parents(".col_styck").length > 0 && $(this).stick_in_parent({
                parent: ".col_styck",
                spacer: ".sticky-spacer",
                inner_scrolling: !1,
                offset_top: 70,
                recalc_every: 1
            }).on("sticky_kit:bottom", (function(e) {
                $(this).parent().css("position", "static")
            }
            )).on("sticky_kit:unbottom", (function(e) {
                $(this).parent().css("position", "relative")
            }
            ))
        }
        )),
        $(".info_c-studio").hover((function() {
            $(".layerInfo_c-studio").fadeToggle()
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}]),
$("#share").on("shown.bs.modal", (function(e) {
    null !== bLazy && bLazy.revalidate()
}
)),
$("#send_mail").on("shown.bs.modal", (function(e) {
    $("body").addClass("modal-open"),
    $("body").css("padding-right", "17px")
}
)),
$(document).on("click", ".btLerMais", (function() {
    $(".lerMais").hide();
    var e = $(".noDisplayMrec .mrecContainerNoDisplay");
    null != e && e.length > 0 && e.each((function(e, a) {
        $(this).parent().parent().show(),
        COF.pubApi.renderInContent($(this))
    }
    )),
    $(".texto_container").removeAttr("style"),
    $(".texto_container").css("overflow", "visible")
}
)),
$(document).ready((function() {
    $(".openModal").on("click", (function() {
        switch ($(this).data("type")) {
        case "Foto":
            loadModalDetalhe.setModalFotoDetalhe(this);
            break;
        case "Fotogaleria":
            loadModalDetalhe.setModalFotoGaleriaDetalhe(this);
            break;
        case "Video":
            loadModalDetalhe.setModalVideoDetalhe(this);
            break;
        case "Infografia":
            loadModalDetalhe.setModalInfografiaDetalhe(this)
        }
    }
    )),
    $("#expandFoto .modal-body img").first().on("load", (function() {
        $("#expandFoto .modal-body .loader").hide()
    }
    )),
    $(".icon-share, .otherOptions").on("click", (function() {
        var e = $(this).data("typeshare")
          , a = $(this).data("contentid");
        switch (e) {
        case "Fotogaleria":
            if (null != a && "" != a && $("#partilhar-fotogaleria[data-contentid = '" + a + "']").length > 0) {
                var t = $(".fotogaleria_detalhe[data-contentid = '" + a + "'] .slick-current img").prop("src").toString()
                  , o = $(".fotogaleria_detalhe[data-contentid = '" + a + "'] .slick-current img").data("img-id").toString();
                replaceShareModalImg(t, "img_298x168"),
                setLinksModalShare(o, t)
            }
            break;
        case "VideoEmbed":
            if (null != a && "" != a) {
                t = $(this).data("imgurl").toString(),
                o = $(this).data("imgid").toString();
                replaceShareModalImg(t, "img_298x168"),
                setLinksModalShare(o, t)
            }
            break;
        case "InfografiaEmbed":
            if (null != a && "" != a) {
                t = $(this).data("imgurl").toString(),
                o = $(this).data("imgid").toString();
                replaceShareModalImg(t, "img_298x168"),
                setLinksModalShare(o, t)
            }
            break;
        case "FotoEmbed":
            if (null != a && "" != a) {
                t = $(this).data("imgurl").toString(),
                o = $(this).data("imgid").toString();
                replaceShareModalImg(t, "img_298x168"),
                setLinksModalShare(o, t)
            }
            break;
        case "Timeline":
            if (null != a && "" != a) {
                t = $(this).data("imgurl");
                COF.content.contentUrl = $(this).data("url"),
                COF.content.contentID = a,
                COF.content.contentTitle = $(this).data("title"),
                COF.content.contentTypeName = $(this).data("type"),
                $("#share .share_info h1").html(COF.content.contentTitle),
                replaceShareModalImg(t, "img_298x168"),
                setLinksModalShare("", t)
            }
            break;
        default:
            setOriginalImgModalShare()
        }
        $("#share").on("shown.bs.modal", (function(e) {
            null !== bLazy && bLazy.revalidate()
        }
        )),
        renderPubIdLayer("share"),
        $("body").addClass("modal-open"),
        $("#share").modal("show"),
        cofinaAnalytics.gaEvent("event", "User", "AbreModalShares", ""),
        cofinaAnalytics.piwikEvent("trackEvent", "User", "AbreModalShares", "")
    }
    )),
    $(".icon-enviar-email").on("click", (function() {
        switch ($(this).data("modaltype")) {
        case "Timeline":
            $("#sendByEmailForm input#ContentId").val(COF.content.contentID),
            $("#sendByEmailForm input#ContentUrl").val(COF.content.contentUrl),
            $("#sendByEmailForm input#ContentTitle").val(COF.content.contentTitle),
            $("#sendByEmailForm input#ContentTypeName").val(COF.content.contentTypeName),
            $("#send_mail .send_mail_title strong").html(COF.content.contentTitle)
        }
    }
    )),
    $("#ofertas_promos").on("click", (function() {
        var e = "Desativar";
        1 == $(this).is(":checked") && (e = "Ativar"),
        ga("send", "event", "DET_Layer_ModalMBWAY_Assinaturas", "Clique_Checkbox Ofertas e Promocoes", e)
    }
    )),
    $("#exclusivosModalMBWay").on("shown.bs.modal", (function(e) {
        ga("send", "event", "DET_Layer_ModalMBWAY_Assinaturas", "Impressão_Layer")
    }
    )),
    $("#exclusivosModalMBWay").on("hidden.bs.modal", (function(e) {
        ga("send", "event", "DET_Layer_ModalMBWAY_Assinaturas", "Clique_Sair sem pagar")
    }
    )),
    COF.isUserLoggedIn() && $(".allowOffersMB").show()
}
));
var loadModalDetalhe = function() {
    var e = function(e) {
        $("#expandFoto .modal-body .loader").show();
        var a = $(e).data("imgmodal");
        void 0 !== a && null != a && "" != a && ($("#expandFoto .modal-body #drag").attr("src", a),
        "mobile" == in_version && $("#dragWrapper").length > 0 && hammerIt(document.getElementById("drag")),
        $("body").addClass("modal-open"),
        $("#expandFoto").modal("show"))
    };
    return {
        init: ($("#expandFoto").on("shown.bs.modal", (function(e) {
            null !== bLazy && bLazy.revalidate(),
            $("body").addClass("galeriaBig_open")
        }
        )),
        $("#expandFoto").on("hidden.bs.modal", (function(e) {
            "mobile" == in_version && $(this).find("#drag").removeAttr("style"),
            $("body").removeClass("galeriaBig_open")
        }
        )),
        $("#zoomGaleria").on("shown.bs.modal", (function(e) {
            $("body").addClass("galeriaLayer_open"),
            $(".fotogaleria_layer").css("visibility", "visible").hide().fadeIn(),
            $(".fotogaleria_layer").slick("refresh")
        }
        )),
        $("#zoomGaleria").on("hidden.bs.modal", (function() {
            $("#zoomGaleria").data("contentid", ""),
            $("body").removeClass("galeriaLayer_open"),
            $(".fotogaleria_layer").css("visibility", "hidden")
        }
        )),
        $("#zoomVideo").on("shown.bs.modal", (function(e) {
            $("body").addClass("galeriaLayer_open")
        }
        )),
        $("#zoomVideo").on("hidden.bs.modal", (function() {
            $("#videoLoad").length,
            $("body").removeClass("galeriaLayer_open")
        }
        )),
        $("#expandInfografia").on("shown.bs.modal", (function(e) {
            null !== bLazy && bLazy.revalidate(),
            $("body").addClass("galeriaBig_open")
        }
        )),
        void $("#expandInfografia").on("hidden.bs.modal", (function(e) {
            "mobile" == in_version && $(this).find("#drag").removeAttr("style"),
            $("body").removeClass("galeriaBig_open")
        }
        ))),
        setModalFotoDetalhe: e,
        setModalFotoGaleriaDetalhe: function(a) {
            var t = $(a).data("contentid")
              , o = $(a).data("title")
              , i = $(".fotogaleria_detalhe[data-contentid='" + t + "']");
            $("#zoomGaleria").data("contentid", t);
            if (null != i && i.length > 0) {
                var n = i.slick("slickCurrentSlide");
                if ("mobile" == in_version)
                    return void e(i.find(".slick-active"));
                var r = i[0].slick.$slides.clone();
                $(".fotogaleria_layer")[0].slick.removeSlide(null, null, !0);
                for (var l = 0; l < r.length; l++) {
                    if (null == $(r[l]).data("imgmodal") || "" == $(r[l]).data("imgmodal"))
                        return;
                    var s = $(r[l]).data("imgmodal")
                      , d = $(r[l]).find("img").data("title")
                      , c = "data-lazy='" + s;
                    l == n && (c = "src='" + s);
                    var u = "<article><figure><img class='img-fluid' " + c + "' alt='" + d + "' data-title='" + d + "' data-credit='" + $(r[l]).find("img").data("credit") + "'/></figure></article>";
                    $(".fotogaleria_layer").slick("slickAdd", u)
                }
                o = i.data("title"),
                $(".fotogaleria_layer").slick("slickGoTo", n)
            } else {
                var m = $(".multimediaEmbed[data-contentid='" + t + "']")
                  , f = window["fotogaleriaObject_" + t];
                $(".fotogaleria_layer")[0].slick.removeSlide(null, null, !0);
                for (var h = 0; h < f.length; h++) {
                    c = "data-lazy='" + f[h];
                    0 == h && (c = "src='" + f[h]);
                    u = "<article><figure><img class='img-fluid' " + c + "'/></figure></article>";
                    $(".fotogaleria_layer").slick("slickAdd", u)
                }
                o = m.data("title")
            }
            $("#zoomGaleria .fotogaleria_titulo").text(o),
            renderPubIdLayer("zoomGaleria"),
            $("body").addClass("modal-open"),
            $("#zoomGaleria").modal("show")
        },
        setModalVideoDetalhe: function(e) {
            var a = $(e).data("contentid")
              , t = $(".multimediaEmbed[data-contentid='" + a + "']")
              , o = t.data("nopub")
              , i = (t.data("autoplay"),
            t.data("title"))
              , n = window["videoObject_" + a];
            1 == t.data("isbrightcovevid") ? (COF.videoHandler.addBrightcoveVideoWithJson(n, "videoLoad", GlobalVariables.videoplayer, o, !0),
            $("#zoomVideo").on("hidden.bs.modal", (function() {
                $("#videoLoad").length > 0 && pauseAllPlayers()
            }
            ))) : (COF.videoHandler.addBrightcoveVideoFromExternalSource(n, "", "videoLoad", GlobalVariables.videoplayer, o, !0),
            $("#zoomVideo").on("hidden.bs.modal", (function() {
                if ($("#videoLoad").length > 0) {
                    let e = $("#videoLoad video");
                    null != e && e.trigger("pause")
                }
            }
            ))),
            $("#zoomVideo .fotogaleria_titulo").text(i),
            renderPubIdLayer("zoomVideo"),
            $("body").addClass("modal-open"),
            $("#zoomVideo").modal("show")
        },
        setModalInfografiaDetalhe: function(e) {
            var a = $(e).data("url");
            if (void 0 !== a && null != a && "" != a) {
                $("#expandInfografia .modal-body #iframeResizableModal").attr("src", a);
                var t = "900";
                "mobile" == in_version && (t = "432"),
                resizeIframeByDevice("iframeResizableModal", t, ""),
                $("body").addClass("modal-open"),
                $("#expandInfografia").modal("show")
            }
        }
    }
}()
  , ivr = function() {
    var e = !1
      , a = {
        messages: $("#PremiumMessages"),
        loader: $("#PremiumLoading"),
        codeInput: $("#InputCode"),
        submitButton: $("#ValidateCode"),
        form: $("#pagamento_chamada").find("form")
    }
      , t = "/PaidSubscription/ValidateCode"
      , o = function(e, t) {
        t ? a.messages.html(e).css("color", "red") : a.messages.html(e).css("color", "")
    }
      , i = function(e) {
        e ? a.loader.show() : a.loader.hide()
    }
      , n = function() {
        a.submitButton.on("click", (function() {
            return function() {
                if (e)
                    return !1;
                if (e = !0,
                o(""),
                i(!0),
                "" == a.codeInput.val())
                    return i(!1),
                    o("Código Inválido", !0),
                    e = !1,
                    !1;
                var n = a.form.serialize();
                return $.ajax({
                    type: "POST",
                    url: t,
                    data: n,
                    success: function(a) {
                        i(!1),
                        "" == a ? o("Código Inválido", !0) : (o("<strong>O seu código foi validado com sucesso. Por favor aguarde.</strong>"),
                        setTimeout((function() {
                            location.reload()
                        }
                        ), 1e3)),
                        e = !1
                    },
                    error: function() {
                        i(!1),
                        o("Ocorreu um erro ao verificar o seu código. Por favor tente novamente.", !0),
                        e = !1
                    }
                }),
                !1
            }()
        }
        ))
    };
    $((function() {
        n()
    }
    ))
}()
  , mbway = function() {
    var e = !1
      , a = {
        modal: $("#exclusivosModalMBWay"),
        phoneNumber: $("#exclusivosModalMBWay_PhoneNumber"),
        submitButton: $("#exclusivosModalMBWay_submitButton"),
        loader: $("#exclusivosModalMBWay_Loader"),
        messages: $("#exclusivosModalMBWay_Messages"),
        form: $("#exclusivosModalMBWay").find("form"),
        closeButton: $("#exclusivosModalMBWay_CloseButton"),
        paymentHidden: $("#exclusivosModalMBWay_PaymentId"),
        email: $("#exclusivosModalMBWay_Email"),
        nifNumbe: $("#exclusivosModalMBWay_NIF")
    }
      , t = "/PaidSubscription/StartMBWayPayment"
      , o = "/PaidSubscription/VerifiyMBWayPayment"
      , i = function(e) {
        return /9[1|2|3|6]\d{7}/.test(e)
    }
      , n = function(e, t) {
        t ? a.messages.html(e).css("color", "red") : a.messages.html(e).css("color", "")
    }
      , r = function(e) {
        e ? a.loader.show() : a.loader.hide()
    }
      , l = function() {
        a.submitButton.on("click", (function() {
            !function() {
                if (e)
                    return !1;
                e = !0;
                var l = a.phoneNumber.val()
                  , s = a.email.val()
                  , d = a.nifNumbe.val();
                if (COF.validate.isNullOrEmpty(l))
                    return n("Por favor insira um número de telemóvel", !0),
                    e = !1,
                    !1;
                if (!i(l))
                    return n("Por favor insira um número de telemóvel válido", !0),
                    e = !1,
                    !1;
                var c = "Sem fatura";
                if (1 === $(".factura_open").length) {
                    if (c = "Com fatura",
                    COF.validate.isNullOrEmpty(d))
                        return n("Por favor indique o NIF", !0),
                        e = !1,
                        !1;
                    if (!_isNIFValid(d))
                        return n("Por favor insira um NIF válido", !0),
                        e = !1,
                        !1;
                    if (COF.validate.isNullOrEmpty(s))
                        return n("Por favor insira seu email", !0),
                        e = !1,
                        !1;
                    if (!COF.validate.isEmail(s))
                        return n("Por favor insira um email válido", !0),
                        e = !1,
                        !1
                }
                ga("send", "event", "DET_Layer_ModalMBWAY_Assinaturas", "Clique_OK", c);
                var u = a.modal.find("form").serialize();
                n(""),
                r(!0),
                a.closeButton.hide(),
                $.ajax({
                    type: "POST",
                    url: t,
                    data: u,
                    success: function(t) {
                        if (r(!1),
                        t)
                            if (t.Success && t.PaymentId && t.PaymentId > 0) {
                                a.paymentHidden.val(t.PaymentId),
                                r(!0),
                                n("Por favor confirme o pagamento na App MBWay.<br/><br/><strong>Não abandone esta página durante este processo. Obrigado.</strong>", !1);
                                var i = setInterval((function() {
                                    var t = a.modal.find("form").serialize();
                                    $.ajax({
                                        type: "POST",
                                        url: o,
                                        data: t,
                                        success: function(t) {
                                            t && t.Payed ? (r(!1),
                                            n("Muito obrigado pela sua compra. <strong>Por favor aguarde.</strong>", !1),
                                            ga("send", "event", "DET_Layer_ModalMBWAY_Assinaturas", "Compra Finalizada"),
                                            setTimeout((function() {
                                                location.reload()
                                            }
                                            ), 1e3)) : t && t.Canceled && (r(!1),
                                            clearInterval(i),
                                            n("Cancelou a sua compra na App. Por favor, tente novamente.", !1),
                                            a.closeButton.hide(),
                                            e = !1)
                                        }
                                    })
                                }
                                ), 1e4)
                            } else
                                n("Não foi possível iniciar o pagamento MBWay. Por favor tente novamente.", !0),
                                e = !1,
                                a.closeButton.show();
                        else
                            n("Não foi possível iniciar o pagamento MBWay. Por favor tente novamente.", !0),
                            e = !1,
                            a.closeButton.show();
                        0 == e && ga("send", "event", "DET_Layer_ModalMBWAY_Assinaturas", "Compra Recusada")
                    }
                })
            }()
        }
        ))
    };
    $((function() {
        l()
    }
    ))
}()
  , _isNIFValid = function(e) {
    var a, t = e, o = 0;
    if (null != t && 9 == t.length && ("1" == (a = t.charAt(0)) || "2" == a || "5" == a || "6" == a || "8" == a || "9" == a)) {
        for (o = 9 * a,
        i = 2; i <= 8; i++)
            o += t.charAt(i - 1) * (10 - i);
        if ((o = 11 - o % 11) >= 10 && (o = 0),
        o == t.charAt(8))
            return !0
    }
    return !1
};
COF.addRoutes({
    GET_OFFER_NEWS_USER_GENERATED: "/UserPremiumNewsOffer/GetOffersNewsUserGeneratedOnThisMonth",
    CREATE_LINK_OFFER_NEW: "/UserPremiumNewsOffer/Create"
}),
$("li.oferecer.partilharartigo").length > 0 && ($(document).on("click", "li.oferecer.partilharartigo", (function() {
    COF.ajax.get(COF.routes.GET_OFFER_NEWS_USER_GENERATED).then((function(e) {
        COF.validate.isNullOrEmpty(e) || (e.Success || $("#btn_oferta_partilha").hide(),
        $("#numerodeartigos").text(e.Text)),
        $("#ajaxLoaderShareContentPremium").hide(),
        $(".ajaxLoadingShareContentPremiumContainer").show()
    }
    ))
}
)),
$(document).on("click", "#btn_oferta_partilha", (function() {
    COF.ajax.get(COF.routes.CREATE_LINK_OFFER_NEW, {
        contentId: COF.content.contentID,
        contentTypeName: COF.content.contentTypeName
    }).then((function(e) {
        if (!COF.validate.isNullOrEmpty(e))
            if (e.Success) {
                var a = COF.content.contentUrl + "?tokenOffer=" + e.Token + "&utm_source=Partilha_Artigo_Premium";
                $("#linkdoartigo").val(a),
                $("#linkdepartilha .partilhas_stick_modal li a").each((function(e) {
                    $(this).attr("data-url", a)
                }
                ))
            } else
                $("#errorMenssageShareModal").text(e.Text),
                $("#errorMenssageShareModal").show()
    }
    ))
}
)),
$(document).on("click", "#btnShareCopyLink", (function() {
    document.getElementById("linkdoartigo").select(),
    document.execCommand("copy")
}
)));
function resultVote() {
    $("div[id^=sond_]").each((function() {
        var t = $(this).attr("id").replace("sond_", "");
        if (void 0 !== t && null !== COF.cookies.get("Poll" + t)) {
            var e;
            e = '<div class="inquerito_accoes"><button type="button" class="btn_cinza btVotar btn_resultadosInquerito eventAnalytics" data-category="Inquerito" data-action="Resultados" data-consumer="ga,piwik" data-pollid="' + t + '"> Ver resultados</button></div>',
            $(this).html(e)
        }
    }
    ))
}
$(document).on("click", ".btn_resultadosInquerito", (function() {
    var t = $(this).attr("data-pollid");
    if (null != t && "" != t) {
        COF.ajax.get("/Inqueritos/Resultado", {
            contentId: t
        }).then((function(e) {
            COF.validate.isNullOrEmpty(e) || ($("#modalInqueritosChange").html(e),
            renderPubClassLayer("inqueritoModal_" + t),
            $("body").addClass("modal-open"),
            $(".inqueritoModal_" + t).modal("show"))
        }
        ))
    }
}
)),
$(document).on("click", ".btn_votarInquerito", (function(t) {
    var e = $(this).attr("data-pollid");
    return null == e || "" == e ? (t.preventDefault(),
    !1) : 0 == $("#sond_" + e + " input[name='responseId'][type=radio]:checked").length ? (0 == $(".msgerror[data-pollid=" + e + "]").length && $(".inquerito_accoes[data-pollId=" + e + "]").append("<div class='alert alert-danger alert-dismissible fade show msgerror' role='alert' data-pollId='" + e + "'>* Selecione uma opção antes de votar.<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button></div>"),
    t.preventDefault(),
    !1) : void $(".msgerror").remove()
}
)),
resultVote();
function removeAlertComment() {
    setTimeout((function() {
        $(".denunciar").hide("slow")
    }
    ), 3e3)
}
if ($(document).on("click", ".btResponder", (function() {
    var t = $(this).attr("data-contentid");
    COF.isUserLoggedIn() ? $(".comentarioResposta[data-contentid=" + t + "]").slideToggle() : $(".comentarios_login[data-contentid=" + t + "]").show()
}
)),
$(document).on("click", "div.voteUp, div.voteDown", (function() {
    if (!COF.isUserLoggedIn()) {
        var t = $(this).attr("data-contentid");
        $(".comentarios_login[data-contentid=" + t + "]").show()
    }
}
)),
$(document).on("keyup keypress change", ".textareaComments", (function() {
    var t = $(this).attr("parentcommentid")
      , e = parseInt($(this).attr("maxlength"));
    charCount = $(this).val().length,
    charRemain = e - charCount,
    $("#characters_left_" + t).text("Faltam " + charRemain + " caracteres")
}
)),
$(document).on("click", ".validateEmptyForm", (function(t) {
    var e = $(this).data("parentcommentid")
      , n = $(this).data("newsid")
      , o = 0;
    if (void 0 === e || "" == e ? (o = $(".textareaComments[newsid=" + n + "]").val().length,
    e = "") : o = $(".textareaComments[parentcommentid=" + e + "]").val().length,
    0 == o)
        return $("#errorComment_" + e).html("<div class='alert alert-danger alert-dismissible fade show' role='alert'>* Tem de inserir o texto do seu comentário.<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button></div>"),
        t.preventDefault(),
        !1
}
)),
$("#loadComments").length > 0) {
    var wayPointObj = null;
    try {
        var div = document.getElementById("loadComments");
        wayPointObj = new Waypoint({
            element: div,
            handler: function(t) {
                loadComments(),
                this.destroy()
            },
            offset: "200%"
        })
    } catch (t) {
        console.log(t.message)
    }
    $(document).on("click", ".icon-comentarios", (function() {
        wayPointObj.destroy(),
        $(".bloco_comentarios").length < 1 && loadComments()
    }
    ))
}
function loadComments() {
    COF.ajax.get("/Comentarios/GetComments", {
        areaID: COF.content.areaId,
        contentId: COF.content.contentID,
        contentTypeName: COF.content.contentTypeName
    }).then((function(t) {
        COF.validate.isNullOrEmpty(t) || $("#loadComments").html(t)
    }
    ))
}
jRes.addFunc([{
    breakpoint: "mobile",
    enter: function() {
        in_version = "mobile",
        $(".clube_cm_mais_main").length > 0 && $(".clube_cm_mais_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !1,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".clube_cm_mais_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, n, e, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}, {
    breakpoint: "tablet",
    enter: function() {
        in_version = "tablet",
        $(".clube_cm_mais_main").length > 0 && $(".clube_cm_mais_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            var i = {
                dots: !0,
                arrows: !1,
                infinite: !1,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                adaptiveHeight: !0
            };
            setTimeout((function() {
                $(this).slick(i).slick("setPosition")
            }
            ), 250)
        }
        )),
        $(".clube_cm_mais_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, n, e, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}, {
    breakpoint: "pc",
    enter: function() {
        in_version = "pc",
        $(".clube_cm_mais_main").length > 0 && $(".clube_cm_mais_main").on("init", (function(i) {
            $(this).css("visibility", "visible").hide().fadeIn()
        }
        )).each((function() {
            $(this).slick({
                dots: !0,
                arrows: !1,
                infinite: !1,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !0
            }).slick("setPosition")
        }
        )),
        $(".clube_cm_mais_main").each((function() {
            $(this).on("init reInit afterChange", (function(i, n, e, t) {
                null !== bLazy && bLazy.revalidate()
            }
            ))
        }
        ))
    },
    exit: function() {
        in_version = ""
    }
}]);
$(document).ready((function() {
    $(".boost_activateSlider").length > 0 && $(".boost_activateSlider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 4e3,
        lazyLoad: "ondemand",
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: !0
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0
            }
        }]
    })
}
)),
$(".boost_activateSlider").each((function() {
    $(this).on("init reInit afterChange", (function(o, e, s, t) {
        null !== bLazy && bLazy.revalidate()
    }
    ))
}
));
$(document).ready((function() {
    $(".cstudioSlider").length > 0 && $(".cstudioSlider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 4e3,
        lazyLoad: "ondemand",
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: !0
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0
            }
        }]
    })
}
)),
$(".cstudioSlider").each((function() {
    $(this).on("init reInit afterChange", (function(o, e, s, i) {
        null !== bLazy && bLazy.revalidate()
    }
    ))
}
));
