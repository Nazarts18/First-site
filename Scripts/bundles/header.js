/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l = !0),
            0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(j),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(j).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Se(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce),
                !1
            },
            trigger: function() {
                return Se(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, qe),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Re = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Me = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ie = new RegExp(ne.join("|"),"i");
    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                re.removeChild(e)),
                a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"]
      , $e = E.createElement("div").style
      , _e = {};
    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Be.length;
            while (n--)
                if ((e = Be[n] + t)in $e)
                    return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Je(e, t, n) {
        var r = Re(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = We(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = We(e, t, r)),
            "normal" === i && t in Ge && (i = Ge[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                        return Je(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Ye(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ke.prototype,
    (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = Ke.prototype.init,
    S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval),
        S.fx.tick())
    }
    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function st(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || at(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ut, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                rt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ut(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = lt(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        Ze = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        et || (et = !0,
        ot())
    }
    ,
    S.fx.stop = function() {
        et = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    tt = E.createElement("input"),
    nt = E.createElement("select").appendChild(E.createElement("option")),
    tt.type = "checkbox",
    y.checkOn = "" !== tt.value,
    y.optSelected = nt.selected,
    (tt = E.createElement("input")).value = "t",
    tt.type = "radio",
    y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o],
            ft[o] = r,
            r = null != a(e, t, n) ? o : null,
            ft[o] = i),
            r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i
      , dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, gt(this)))
                });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, gt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = vt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/
      , xt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, xt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, xt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var bt = C.location
      , wt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Ct = /\[\]$/
      , Et = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , jt = /#.*$/
      , Dt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Ht = /^\/\//
      , Ot = {}
      , Pt = {}
      , Rt = "*/".concat("*")
      , Mt = E.createElement("a");
    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Wt(t, i, o, a) {
        var s = {}
          , u = t === Pt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Mt.href = bt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = qt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Wt(Ot, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Lt.test(v.type),
            f = v.url.replace(jt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Dt, "$1"),
            o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials"in $t,
    y.ajax = $t = !!$t,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                zt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t)
                return t = We(e, n),
                Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery
      , Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt),
        e && C.jQuery === S && (C.jQuery = Vt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});

/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a, b, c) {
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = c : (a[b] = c,
    "function" == typeof define && define.amd && define(b, [], function() {
        return c
    }))
}(this, "jRespond", function(a, b, c) {
    "use strict";
    return function(a) {
        var b = []
          , d = []
          , e = a
          , f = ""
          , g = ""
          , i = 0
          , j = 100
          , k = 500
          , l = k
          , m = function() {
            var a = 0;
            return a = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
        }
          , n = function(a) {
            if (a.length === c)
                o(a);
            else
                for (var b = 0; b < a.length; b++)
                    o(a[b])
        }
          , o = function(a) {
            var e = a.breakpoint
              , h = a.enter || c;
            b.push(a),
            d.push(!1),
            r(e) && (h !== c && h.call(null, {
                entering: f,
                exiting: g
            }),
            d[b.length - 1] = !0)
        }
          , p = function() {
            for (var a = [], e = [], h = 0; h < b.length; h++) {
                var i = b[h].breakpoint
                  , j = b[h].enter || c
                  , k = b[h].exit || c;
                "*" === i ? (j !== c && a.push(j),
                k !== c && e.push(k)) : r(i) ? (j === c || d[h] || a.push(j),
                d[h] = !0) : (k !== c && d[h] && e.push(k),
                d[h] = !1)
            }
            for (var l = {
                entering: f,
                exiting: g
            }, m = 0; m < e.length; m++)
                e[m].call(null, l);
            for (var n = 0; n < a.length; n++)
                a[n].call(null, l)
        }
          , q = function(a) {
            for (var b = !1, c = 0; c < e.length; c++)
                if (a >= e[c].enter && a <= e[c].exit) {
                    b = !0;
                    break
                }
            b && f !== e[c].label ? (g = f,
            f = e[c].label,
            p()) : b || "" === f || (f = "",
            p())
        }
          , r = function(a) {
            if ("object" == typeof a) {
                if (a.join().indexOf(f) >= 0)
                    return !0
            } else {
                if ("*" === a)
                    return !0;
                if ("string" == typeof a && f === a)
                    return !0
            }
        }
          , s = function() {
            var a = m();
            a !== i ? (l = j,
            q(a)) : l = k,
            i = a,
            setTimeout(s, l)
        };
        return s(),
        {
            addFunc: function(a) {
                n(a)
            },
            getBreakpoint: function() {
                return f
            }
        }
    }
}(this, this.document));
/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.submitButton = b.currentTarget,
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b),
                    d && d.remove(),
                    void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                b || (d = d.concat(c.errorList))
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0], k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0],
            j.name = this.attr("name")),
            null != j.form)) {
                if (b)
                    switch (d = a.data(j.form, "validator").settings,
                    e = d.rules,
                    f = a.validator.staticRules(j),
                    b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        e[j.name] = f,
                        c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {},
                        a.each(c.split(/\s/), function(a, b) {
                            i[b] = f[b],
                            delete f[b]
                        }),
                        i) : (delete e[j.name],
                        f)
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
                g.required && (h = g.required,
                delete g.required,
                g = a.extend({
                    required: h
                }, g)),
                g.remote && (h = g.remote,
                delete g.remote,
                g = a.extend(g, {
                    remote: h
                })),
                g
            }
        }
    });
    var b = function(a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(c) {
            return !b("" + a(c).val())
        },
        filled: function(c) {
            var d = a(c).val();
            return null !== d && !!b("" + d)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0],
                    this.name = a(this).attr("name")),
                    d === this.form) {
                        var e = a.data(this.form, "validator")
                          , f = "on" + b.type.replace(/^validate/, "")
                          , g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b)
                    }
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.currentForm, e = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        e[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
                this.currentElements = a(f),
                d = this.groups[f.name],
                d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
                    e && e.name in g.invalid && (g.currentElements.push(e),
                    h = g.check(e) && h))
                }),
                c = this.check(f) !== !1,
                h = h && c,
                c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
                h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }),
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++)
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                else
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name")
                      , e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    e && (this.form = a(this).closest("form")[0],
                    this.name = d),
                    this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0,
                    !0))
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type, g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(),
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
                d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(), h = a.map(g, function(a, b) {
                    return b
                }).length, i = !1, j = this.elementValue(b);
                "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer),
                f && (j = f.call(b, j),
                delete g.normalizer);
                for (d in g) {
                    e = {
                        method: d,
                        parameters: g[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters),
                        "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k),
                        k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        k
                    }
                }
                if (!i)
                    return this.objectLength(g) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
                  , e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }),
                this.errorMap[a.name] = c,
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = h,
                this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b),
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
                a(b).attr("aria-describedby", j),
                e = this.groups[b.name],
                e && (g = this,
                a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))),
                !c && this.settings.success && (h.text(""),
                "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b))
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                a(b).addClass(this.settings.pendingClass),
                this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                a(b).removeClass(this.settings.pendingClass),
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote",
                a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                "" === d && (d = !0),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d])
                }
            }),
            a.each(b, function(a, d) {
                b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var a;
                b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(a[0]), Number(a[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            },
            date: function() {
                var a = !1;
                return function(b, c) {
                    return a || (a = !0,
                    this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),
                    this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
                }
            }(),
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d >= c
            },
            maxlength: function(a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d <= c
            },
            rangelength: function(a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d >= c[0] && d <= c[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a) {
                    var b = ("" + a).match(/(?:\.(\d+))?$/);
                    return b && b[1] ? b[1].length : 0
                }, l = function(a) {
                    return Math.round(a * Math.pow(10, e))
                }, m = !0;
                if (j)
                    throw new Error(g);
                return e = k(d),
                (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
                this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c))
                    return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
                this.settings.messages[c.name][e] = i.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                h = a.param(a.extend({
                    data: b
                }, d.data)),
                i.old === h ? i.valid : (i.old = h,
                f = this,
                this.startRequest(c),
                g = {},
                g[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage,
                        j ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(c),
                        f.formSubmitted = h,
                        f.successList.push(c),
                        f.invalid[c.name] = !1,
                        f.showErrors()) : (d = {},
                        g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }),
                        d[c.name] = i.message = g,
                        f.invalid[c.name] = !0,
                        f.showErrors(d)),
                        i.valid = j,
                        f.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var c, d = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, c) {
        var e = a.port;
        "abort" === a.mode && (d[e] && d[e].abort(),
        d[e] = c)
    }) : (c = a.ajax,
    a.ajax = function(b) {
        var e = ("mode"in b ? b : a.ajaxSettings).mode
          , f = ("port"in b ? b : a.ajaxSettings).port;
        return "abort" === e ? (d[f] && d[f].abort(),
        d[f] = c.apply(this, arguments),
        d[f]) : c.apply(this, arguments)
    }
    ),
    a
});
// Unobtrusive validation support library for jQuery and jQuery Validate
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// @version v3.2.12

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("jquery.validate.unobtrusive", ['jquery-validation'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports     
        module.exports = factory(require('jquery-validation'));
    } else {
        // Browser global
        jQuery.validator.unobtrusive = factory(jQuery);
    }
}(function($) {
    var $jQval = $.validator, adapters, data_validation = "unobtrusiveValidation";

    function setValidationValues(options, ruleName, value) {
        options.rules[ruleName] = value;
        if (options.message) {
            options.messages[ruleName] = options.message;
        }
    }

    function splitAndTrim(value) {
        return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }

    function escapeAttributeValue(value) {
        // As mentioned on http://api.jquery.com/category/selectors/
        return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }

    function getModelPrefix(fieldName) {
        return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
    }

    function appendModelPrefix(value, prefix) {
        if (value.indexOf("*.") === 0) {
            value = value.replace("*.", prefix);
        }
        return value;
    }

    function onError(error, inputElement) {
        // 'this' is the form element
        var container = $(this).find("[data-valmsg-for='" + escapeAttributeValue(inputElement[0].name) + "']")
          , replaceAttrValue = container.attr("data-valmsg-replace")
          , replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) !== false : null;

        container.removeClass("field-validation-valid").addClass("field-validation-error");
        error.data("unobtrusiveContainer", container);

        if (replace) {
            container.empty();
            error.removeClass("input-validation-error").appendTo(container);
        } else {
            error.hide();
        }
    }

    function onErrors(event, validator) {
        // 'this' is the form element
        var container = $(this).find("[data-valmsg-summary=true]")
          , list = container.find("ul");

        if (list && list.length && validator.errorList.length) {
            list.empty();
            container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

            $.each(validator.errorList, function() {
                $("<li />").html(this.message).appendTo(list);
            });
        }
    }

    function onSuccess(error) {
        // 'this' is the form element
        var container = error.data("unobtrusiveContainer");

        if (container) {
            var replaceAttrValue = container.attr("data-valmsg-replace")
              , replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) : null;

            container.addClass("field-validation-valid").removeClass("field-validation-error");
            error.removeData("unobtrusiveContainer");

            if (replace) {
                container.empty();
            }
        }
    }

    function onReset(event) {
        // 'this' is the form element
        var $form = $(this)
          , key = '__jquery_unobtrusive_validation_form_reset';
        if ($form.data(key)) {
            return;
        }
        // Set a flag that indicates we're currently resetting the form.
        $form.data(key, true);
        try {
            $form.data("validator").resetForm();
        } finally {
            $form.removeData(key);
        }

        $form.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        $form.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*")// If we were using valmsg-replace, get the underlying error
        .removeData("unobtrusiveContainer");
    }

    function validationInfo(form) {
        var $form = $(form)
          , result = $form.data(data_validation)
          , onResetProxy = $.proxy(onReset, form)
          , defaultOptions = $jQval.unobtrusive.options || {}
          , execInContext = function(name, args) {
            var func = defaultOptions[name];
            func && $.isFunction(func) && func.apply(form, args);
        };

        if (!result) {
            result = {
                options: {
                    // options structure passed to jQuery Validate's validate() method
                    errorClass: defaultOptions.errorClass || "input-validation-error",
                    errorElement: defaultOptions.errorElement || "span",
                    errorPlacement: function() {
                        onError.apply(form, arguments);
                        execInContext("errorPlacement", arguments);
                    },
                    invalidHandler: function() {
                        onErrors.apply(form, arguments);
                        execInContext("invalidHandler", arguments);
                    },
                    messages: {},
                    rules: {},
                    success: function() {
                        onSuccess.apply(form, arguments);
                        execInContext("success", arguments);
                    }
                },
                attachValidation: function() {
                    $form.off("reset." + data_validation, onResetProxy).on("reset." + data_validation, onResetProxy).validate(this.options);
                },
                validate: function() {
                    // a validation function that is called by unobtrusive Ajax
                    $form.validate();
                    return $form.valid();
                }
            };
            $form.data(data_validation, result);
        }

        return result;
    }

    $jQval.unobtrusive = {
        adapters: [],

        parseElement: function(element, skipAttach) {
            /// <summary>
            /// Parses a single HTML element for unobtrusive validation attributes.
            /// </summary>
            /// <param name="element" domElement="true">The HTML element to be parsed.</param>
            /// <param name="skipAttach" type="Boolean">[Optional] true to skip attaching the
            /// validation to the form. If parsing just this single element, you should specify true.
            /// If parsing several elements, you should specify false, and manually attach the validation
            /// to the form when you are finished. The default is false.</param>
            var $element = $(element), form = $element.parents("form")[0], valInfo, rules, messages;

            if (!form) {
                // Cannot do client-side validation without a form
                return;
            }

            valInfo = validationInfo(form);
            valInfo.options.rules[element.name] = rules = {};
            valInfo.options.messages[element.name] = messages = {};

            $.each(this.adapters, function() {
                var prefix = "data-val-" + this.name
                  , message = $element.attr(prefix)
                  , paramValues = {};

                if (message !== undefined) {
                    // Compare against undefined, because an empty message is legal (and falsy)
                    prefix += "-";

                    $.each(this.params, function() {
                        paramValues[this] = $element.attr(prefix + this);
                    });

                    this.adapt({
                        element: element,
                        form: form,
                        message: message,
                        params: paramValues,
                        rules: rules,
                        messages: messages
                    });
                }
            });

            $.extend(rules, {
                "__dummy__": true
            });

            if (!skipAttach) {
                valInfo.attachValidation();
            }
        },

        parse: function(selector) {
            /// <summary>
            /// Parses all the HTML elements in the specified selector. It looks for input elements decorated
            /// with the [data-val=true] attribute value and enables validation according to the data-val-*
            /// attribute values.
            /// </summary>
            /// <param name="selector" type="String">Any valid jQuery selector.</param>

            // $forms includes all forms in selector's DOM hierarchy (parent, children and self) that have at least one
            // element with data-val=true
            var $selector = $(selector)
              , $forms = $selector.parents().addBack().filter("form").add($selector.find("form")).has("[data-val=true]");

            $selector.find("[data-val=true]").each(function() {
                $jQval.unobtrusive.parseElement(this, true);
            });

            $forms.each(function() {
                var info = validationInfo(this);
                if (info) {
                    info.attachValidation();
                }
            });
        }
    };

    adapters = $jQval.unobtrusive.adapters;

    adapters.add = function(adapterName, params, fn) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="params" type="Array" optional="true">[Optional] An array of parameter names (strings) that will
        /// be extracted from the data-val-nnnn-mmmm HTML attributes (where nnnn is the adapter name, and
        /// mmmm is the parameter name).</param>
        /// <param name="fn" type="Function">The function to call, which adapts the values from the HTML
        /// attributes into jQuery Validate rules and/or messages.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        if (!fn) {
            // Called with no params, just a function
            fn = params;
            params = [];
        }
        this.push({
            name: adapterName,
            params: params,
            adapt: fn
        });
        return this;
    }
    ;

    adapters.addBool = function(adapterName, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has no parameter values.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, function(options) {
            setValidationValues(options, ruleName || adapterName, true);
        });
    }
    ;

    adapters.addMinMax = function(adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation has three potential rules (one for min-only, one for max-only, and
        /// one for min-and-max). The HTML parameters are expected to be named -min and -max.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="minRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a minimum value.</param>
        /// <param name="maxRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a maximum value.</param>
        /// <param name="minMaxRuleName" type="String">The name of the jQuery Validate rule to be used when you
        /// have both a minimum and maximum value.</param>
        /// <param name="minAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the minimum value. The default is "min".</param>
        /// <param name="maxAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the maximum value. The default is "max".</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function(options) {
            var min = options.params.min
              , max = options.params.max;

            if (min && max) {
                setValidationValues(options, minMaxRuleName, [min, max]);
            } else if (min) {
                setValidationValues(options, minRuleName, min);
            } else if (max) {
                setValidationValues(options, maxRuleName, max);
            }
        });
    }
    ;

    adapters.addSingleVal = function(adapterName, attribute, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has a single value.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute(where nnnn is the adapter name).</param>
        /// <param name="attribute" type="String">[Optional] The name of the HTML attribute that contains the value.
        /// The default is "val".</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [attribute || "val"], function(options) {
            setValidationValues(options, ruleName || adapterName, options.params[attribute]);
        });
    }
    ;

    $jQval.addMethod("__dummy__", function(value, element, params) {
        return true;
    });

    $jQval.addMethod("regex", function(value, element, params) {
        var match;
        if (this.optional(element)) {
            return true;
        }

        match = new RegExp(params).exec(value);
        return (match && (match.index === 0) && (match[0].length === value.length));
    });

    $jQval.addMethod("nonalphamin", function(value, element, nonalphamin) {
        var match;
        if (nonalphamin) {
            match = value.match(/\W/g);
            match = match && match.length >= nonalphamin;
        }
        return match;
    });

    if ($jQval.methods.extension) {
        adapters.addSingleVal("accept", "mimtype");
        adapters.addSingleVal("extension", "extension");
    } else {
        // for backward compatibility, when the 'extension' validation method does not exist, such as with versions
        // of JQuery Validation plugin prior to 1.10, we should use the 'accept' method for
        // validating the extension, and ignore mime-type validations as they are not supported.
        adapters.addSingleVal("extension", "extension", "accept");
    }

    adapters.addSingleVal("regex", "pattern");
    adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    adapters.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    adapters.add("equalto", ["other"], function(options) {
        var prefix = getModelPrefix(options.element.name)
          , other = options.params.other
          , fullOtherName = appendModelPrefix(other, prefix)
          , element = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(fullOtherName) + "']")[0];

        setValidationValues(options, "equalTo", element);
    });
    adapters.add("required", function(options) {
        // jQuery Validate equates "required" with "mandatory" for checkbox elements
        if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
            setValidationValues(options, "required", true);
        }
    });
    adapters.add("remote", ["url", "type", "additionalfields"], function(options) {
        var value = {
            url: options.params.url,
            type: options.params.type || "GET",
            data: {}
        }
          , prefix = getModelPrefix(options.element.name);

        $.each(splitAndTrim(options.params.additionalfields || options.element.name), function(i, fieldName) {
            var paramName = appendModelPrefix(fieldName, prefix);
            value.data[paramName] = function() {
                var field = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(paramName) + "']");
                // For checkboxes and radio buttons, only pick up values from checked fields.
                if (field.is(":checkbox")) {
                    return field.filter(":checked").val() || field.filter(":hidden").val() || '';
                } else if (field.is(":radio")) {
                    return field.filter(":checked").val() || '';
                }
                return field.val();
            }
            ;
        });

        setValidationValues(options, "remote", value);
    });
    adapters.add("password", ["min", "nonalphamin", "regex"], function(options) {
        if (options.params.min) {
            setValidationValues(options, "minlength", options.params.min);
        }
        if (options.params.nonalphamin) {
            setValidationValues(options, "nonalphamin", options.params.nonalphamin);
        }
        if (options.params.regex) {
            setValidationValues(options, "regex", options.params.regex);
        }
    });
    adapters.add("fileextensions", ["extensions"], function(options) {
        setValidationValues(options, "extension", options.params.extensions);
    });

    $(function() {
        $jQval.unobtrusive.parse(document);
    });

    return $jQval.unobtrusive;
}));

// Unobtrusive Ajax support library for jQuery
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// @version v3.2.6
// 
// Microsoft grants you the right to use these script files for the sole
// purpose of either: (i) interacting through your browser with the Microsoft
// website or online service, subject to the applicable licensing or use
// terms; or (ii) using the files as included with a Microsoft product subject
// to that product's license terms. Microsoft reserves all other rights to the
// files not expressly granted by Microsoft, whether by implication, estoppel
// or otherwise. Insofar as a script file is dual licensed under GPL,
// Microsoft neither took the code under GPL nor distributes it thereunder but
// under the terms set out in this paragraph. All notices and licenses
// below are for informational purposes only.
!function(t) {
    function a(t, a) {
        for (var e = window, r = (t || "").split("."); e && r.length; )
            e = e[r.shift()];
        return "function" == typeof e ? e : (a.push(t),
        Function.constructor.apply(null, a))
    }
    function e(t) {
        return "GET" === t || "POST" === t
    }
    function r(t, a) {
        e(a) || t.setRequestHeader("X-HTTP-Method-Override", a)
    }
    function n(a, e, r) {
        var n;
        r.indexOf("application/x-javascript") === -1 && (n = (a.getAttribute("data-ajax-mode") || "").toUpperCase(),
        t(a.getAttribute("data-ajax-update")).each(function(a, r) {
            switch (n) {
            case "BEFORE":
                t(r).prepend(e);
                break;
            case "AFTER":
                t(r).append(e);
                break;
            case "REPLACE-WITH":
                t(r).replaceWith(e);
                break;
            default:
                t(r).html(e)
            }
        }))
    }
    function i(i, u) {
        var o, c, d, s;
        if (o = i.getAttribute("data-ajax-confirm"),
        !o || window.confirm(o)) {
            c = t(i.getAttribute("data-ajax-loading")),
            s = parseInt(i.getAttribute("data-ajax-loading-duration"), 10) || 0,
            t.extend(u, {
                type: i.getAttribute("data-ajax-method") || void 0,
                url: i.getAttribute("data-ajax-url") || void 0,
                cache: "true" === (i.getAttribute("data-ajax-cache") || "").toLowerCase(),
                beforeSend: function(t) {
                    var e;
                    return r(t, d),
                    e = a(i.getAttribute("data-ajax-begin"), ["xhr"]).apply(i, arguments),
                    e !== !1 && c.show(s),
                    e
                },
                complete: function() {
                    c.hide(s),
                    a(i.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(i, arguments)
                },
                success: function(t, e, r) {
                    n(i, t, r.getResponseHeader("Content-Type") || "text/html"),
                    a(i.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(i, arguments)
                },
                error: function() {
                    a(i.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(i, arguments)
                }
            }),
            u.data.push({
                name: "X-Requested-With",
                value: "XMLHttpRequest"
            }),
            d = u.type.toUpperCase(),
            e(d) || (u.type = "POST",
            u.data.push({
                name: "X-HTTP-Method-Override",
                value: d
            }));
            var p = t(i);
            if (p.is("form") && "multipart/form-data" == p.attr("enctype")) {
                var f = new FormData;
                t.each(u.data, function(t, a) {
                    f.append(a.name, a.value)
                }),
                t("input[type=file]", p).each(function() {
                    var a = this;
                    t.each(a.files, function(t, e) {
                        f.append(a.name, e)
                    })
                }),
                t.extend(u, {
                    processData: !1,
                    contentType: !1,
                    data: f
                })
            }
            t.ajax(u)
        }
    }
    function u(a) {
        var e = t(a).data(d);
        return !e || !e.validate || e.validate()
    }
    var o = "unobtrusiveAjaxClick"
      , c = "unobtrusiveAjaxClickTarget"
      , d = "unobtrusiveValidation";
    t(document).on("click", "a[data-ajax=true]", function(t) {
        t.preventDefault(),
        i(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    }),
    t(document).on("click", "form[data-ajax=true] input[type=image]", function(a) {
        var e = a.target.name
          , r = t(a.target)
          , n = t(r.parents("form")[0])
          , i = r.offset();
        n.data(o, [{
            name: e + ".x",
            value: Math.round(a.pageX - i.left)
        }, {
            name: e + ".y",
            value: Math.round(a.pageY - i.top)
        }]),
        setTimeout(function() {
            n.removeData(o)
        }, 0)
    }),
    t(document).on("click", "form[data-ajax=true] :submit", function(a) {
        var e = a.currentTarget.name
          , r = t(a.target)
          , n = t(r.parents("form")[0]);
        n.data(o, e ? [{
            name: e,
            value: a.currentTarget.value
        }] : []),
        n.data(c, r),
        setTimeout(function() {
            n.removeData(o),
            n.removeData(c)
        }, 0)
    }),
    t(document).on("submit", "form[data-ajax=true]", function(a) {
        var e = t(this).data(o) || []
          , r = t(this).data(c)
          , n = r && (r.hasClass("cancel") || void 0 !== r.attr("formnovalidate"));
        a.preventDefault(),
        (n || u(this)) && i(this, {
            url: this.action,
            type: this.method || "GET",
            data: e.concat(t(this).serializeArray())
        })
    })
}(jQuery);
/*
 UAParser.js v0.7.18
 Lightweight JavaScript-based User-Agent string parser
 https://github.com/faisalman/ua-parser-js

 Copyright ? 2012-2016 Faisal Salman <fyzlman@gmail.com>
 Dual licensed under GPLv2 or MIT
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, d, b) {
    a != Array.prototype && a != Object.prototype && (a[d] = b.value)
}
;
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, d, b, e) {
    if (d) {
        b = $jscomp.global;
        a = a.split(".");
        for (e = 0; e < a.length - 1; e++) {
            var c = a[e];
            c in b || (b[c] = {});
            b = b[c]
        }
        a = a[a.length - 1];
        e = b[a];
        d = d(e);
        d != e && null != d && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: d
        })
    }
}
;
$jscomp.polyfill("Object.getOwnPropertySymbols", function(a) {
    return a ? a : function() {
        return []
    }
}, "es6", "es5");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ;
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
;
$jscomp.Symbol = function() {
    var a = 0;
    return function(d) {
        return $jscomp.SYMBOL_PREFIX + (d || "") + a++
    }
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
}
;
$jscomp.arrayIterator = function(a) {
    var d = 0;
    return $jscomp.iteratorPrototype(function() {
        return d < a.length ? {
            done: !1,
            value: a[d++]
        } : {
            done: !0
        }
    })
}
;
$jscomp.iteratorPrototype = function(a) {
    $jscomp.initSymbolIterator();
    a = {
        next: a
    };
    a[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
;
$jscomp.iteratorFromArray = function(a, d) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var b = 0
      , e = {
        next: function() {
            if (b < a.length) {
                var c = b++;
                return {
                    value: d(c, a[c]),
                    done: !1
                }
            }
            e.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return e.next()
        }
    };
    e[Symbol.iterator] = function() {
        return e
    }
    ;
    return e
}
;
$jscomp.polyfill("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
$jscomp.owns = function(a, d) {
    return Object.prototype.hasOwnProperty.call(a, d)
}
;
$jscomp.assign = "function" == typeof Object.assign ? Object.assign : function(a, d) {
    for (var b = 1; b < arguments.length; b++) {
        var e = arguments[b];
        if (e)
            for (var c in e)
                $jscomp.owns(e, c) && (a[c] = e[c])
    }
    return a
}
;
$jscomp.polyfill("Object.assign", function(a) {
    return a || $jscomp.assign
}, "es6", "es3");
(function(a) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = a() : "function" === typeof define && define.amd ? define([], a) : ("undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : this).SmartBanner = a()
}
)(function() {
    return function() {
        function a(d, b, e) {
            function c(f, k) {
                if (!b[f]) {
                    if (!d[f]) {
                        var r = "function" == typeof require && require;
                        if (!k && r)
                            return r(f, !0);
                        if (m)
                            return m(f, !0);
                        k = Error("Cannot find module '" + f + "'");
                        throw k.code = "MODULE_NOT_FOUND",
                        k;
                    }
                    k = b[f] = {
                        exports: {}
                    };
                    d[f][0].call(k.exports, function(a) {
                        return c(d[f][1][a] || a)
                    }, k, k.exports, a, d, b, e)
                }
                return b[f].exports
            }
            for (var m = "function" == typeof require && require, f = 0; f < e.length; f++)
                c(e[f]);
            return c
        }
        return a
    }()({
        1: [function(a, d, b) {
            var e = a("object-assign")
              , c = a("component-query")
              , m = a("get-doc")
              , f = a("cookie-cutter")
              , n = a("ua-parser-js")
              , k = (navigator.language || navigator.userLanguage || navigator.browserLanguage).slice(-2) || "us"
              , r = m && m.documentElement
              , g = {
                ios: {
                    appMeta: "apple-itunes-app",
                    iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
                    getStoreLink: function() {
                        return "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id" + this.appId + "?mt=8"
                    }
                },
                android: {
                    appMeta: "google-play-app",
                    iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                    getStoreLink: function() {
                        return "http://play.google.com/store/apps/details?id=" + this.appId
                    }
                },
                windows: {
                    appMeta: "msApplication-ID",
                    iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                    getStoreLink: function() {
                        return "http://www.windowsphone.com/s?appid=" + this.appId
                    }
                }
            };
            a = function(a) {
                var c = n(navigator.userAgent);
                this.options = e({}, {
                    daysHidden: 15,
                    daysReminder: 90,
                    appStoreLanguage: k,
                    button: "OPEN",
                    store: {
                        ios: "On the App Store",
                        android: "In Google Play",
                        windows: "In the Windows Store"
                    },
                    price: {
                        ios: "FREE",
                        android: "FREE",
                        windows: "FREE"
                    },
                    theme: "",
                    icon: "",
                    force: ""
                }, a || {});
                this.options.force ? this.type = this.options.force : "Windows Phone" === c.os.name || "Windows Mobile" === c.os.name ? this.type = "windows" : "iOS" === c.os.name ? this.type = "ios" : "Android" === c.os.name && (this.type = "android");
                if (this.type && this.options.store[this.type]) {
                    this.appMeta = g[this.type].appMeta;
                    this.parseAppId();
                    a = "ios" === this.type && "Mobile Safari" === c.browser.name && 6 <= parseInt(c.os.version, 10);
                    var l = navigator.standalone
                      , b = f.get(this.appId + "-smartbanner-closed")
                      , d = f.get(this.appId + "-smartbanner-installed");
                    a || l || b || d || (e(this, g[this.type]),
                    !this.appId && "IOS" === c.os.name && "Safari" === c.browser.name) || (this.create(),
                    this.show())
                }
            }
            ;
            a.prototype = {
                constructor: a,
                create: function() {
                    var a = this.getStoreLink()
                      , e = this.options.price[this.type] + " - " + this.options.store[this.type];
                    if (this.options.icon)
                        var f = this.options.icon;
                    else
                        for (var b = 0; b < this.iconRels.length; b++) {
                            var d = c('link[rel="' + this.iconRels[b] + '"]');
                            if (d) {
                                f = d.getAttribute("href");
                                break
                            }
                        }
                    var t = m.createElement("div");
                    t.className = "smartbanner smartbanner-" + (this.options.theme || this.type);
                    t.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' + f + ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + e + '</span></div><a href="' + a + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>";
                    m.body ? m.body.appendChild(t) : m && m.addEventListener("DOMContentLoaded", function() {
                        m.body.appendChild(t)
                    });
                    c(".smartbanner-button", t).addEventListener("click", this.install.bind(this), !1);
                    c(".smartbanner-close", t).addEventListener("click", this.close.bind(this), !1)
                },
                hide: function() {
                    r.classList.remove("smartbanner-show");
                    if ("function" === typeof this.options.close)
                        return this.options.close()
                },
                show: function() {
                    r.classList.add("smartbanner-show");
                    if ("function" === typeof this.options.show)
                        return this.options.show()
                },
                close: function() {
                    this.hide();
                    f.set(this.appId + "-smartbanner-closed", "true", {
                        path: "/",
                        expires: new Date(Number(new Date) + 864E5 * this.options.daysHidden)
                    });
                    if ("function" === typeof this.options.close)
                        return this.options.close()
                },
                install: function() {
                    this.hide();
                    f.set(this.appId + "-smartbanner-installed", "true", {
                        path: "/",
                        expires: new Date(Number(new Date) + 864E5 * this.options.daysReminder)
                    });
                    if ("function" === typeof this.options.close)
                        return this.options.close()
                },
                parseAppId: function() {
                    var a = c('meta[name="' + this.appMeta + '"]');
                    if (a)
                        return this.appId = "windows" === this.type ? a.getAttribute("content") : /app-id=([^\s,]+)/.exec(a.getAttribute("content"))[1]
                }
            };
            d.exports = a
        }
        , {
            "component-query": 2,
            "cookie-cutter": 3,
            "get-doc": 4,
            "object-assign": 6,
            "ua-parser-js": 7
        }],
        2: [function(a, d, b) {
            function e(a, e) {
                return e.querySelector(a)
            }
            b = d.exports = function(a, b) {
                b = b || document;
                return e(a, b)
            }
            ;
            b.all = function(a, e) {
                e = e || document;
                return e.querySelectorAll(a)
            }
            ;
            b.engine = function(a) {
                if (!a.one)
                    throw Error(".one callback required");
                if (!a.all)
                    throw Error(".all callback required");
                e = a.one;
                b.all = a.all;
                return b
            }
        }
        , {}],
        3: [function(a, d, b) {
            b = d.exports = function(a) {
                a || (a = {});
                "string" === typeof a && (a = {
                    cookie: a
                });
                void 0 === a.cookie && (a.cookie = "");
                return {
                    get: function(c) {
                        for (var b = a.cookie.split(/;\s*/), f = 0; f < b.length; f++) {
                            var e = b[f].split("=");
                            if (unescape(e[0]) === c)
                                return unescape(e[1])
                        }
                    },
                    set: function(c, b, f) {
                        f || (f = {});
                        c = escape(c) + "=" + escape(b);
                        f.expires && (c += "; expires=" + f.expires);
                        f.path && (c += "; path=" + escape(f.path));
                        f.domain && (c += "; domain=" + escape(f.domain));
                        f.secure && (c += "; secure");
                        return a.cookie = c
                    }
                }
            }
            ;
            "undefined" !== typeof document && (a = b(document),
            b.get = a.get,
            b.set = a.set)
        }
        , {}],
        4: [function(a, d, b) {
            a = a("has-dom");
            d.exports = a() ? document : null
        }
        , {
            "has-dom": 5
        }],
        5: [function(a, d, b) {
            d.exports = function() {
                return "undefined" !== typeof window && "undefined" !== typeof document && "function" === typeof document.createElement
            }
        }
        , {}],
        6: [function(a, d, b) {
            var e = Object.getOwnPropertySymbols
              , c = Object.prototype.hasOwnProperty
              , m = Object.prototype.propertyIsEnumerable;
            d.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var a = new String("abc");
                    a[5] = "de";
                    if ("5" === Object.getOwnPropertyNames(a)[0])
                        return !1;
                    var c = {};
                    for (a = 0; 10 > a; a++)
                        c["_" + String.fromCharCode(a)] = a;
                    if ("0123456789" !== Object.getOwnPropertyNames(c).map(function(a) {
                        return c[a]
                    }).join(""))
                        return !1;
                    var b = {};
                    "abcdefghijklmnopqrst".split("").forEach(function(a) {
                        b[a] = a
                    });
                    return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, b)).join("") ? !1 : !0
                } catch (r) {
                    return !1
                }
            }() ? Object.assign : function(a, b) {
                if (null === a || void 0 === a)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                var d = Object(a);
                for (var f, g = 1; g < arguments.length; g++) {
                    var p = Object(arguments[g]);
                    for (var n in p)
                        c.call(p, n) && (d[n] = p[n]);
                    if (e) {
                        f = e(p);
                        for (var l = 0; l < f.length; l++)
                            m.call(p, f[l]) && (d[f[l]] = p[f[l]])
                    }
                }
                return d
            }
        }
        , {}],
        7: [function(a, d, b) {
            (function(a, c) {
                var e = {
                    extend: function(a, c) {
                        var b = {}, e;
                        for (e in a)
                            b[e] = c[e] && 0 === c[e].length % 2 ? c[e].concat(a[e]) : a[e];
                        return b
                    },
                    has: function(a, c) {
                        return "string" === typeof a ? -1 !== c.toLowerCase().indexOf(a.toLowerCase()) : !1
                    },
                    lowerize: function(a) {
                        return a.toLowerCase()
                    },
                    major: function(a) {
                        return "string" === typeof a ? a.replace(/[^\d\.]/g, "").split(".")[0] : c
                    },
                    trim: function(a) {
                        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                }
                  , f = function(a, b) {
                    for (var e = 0, d, f, l, h, g, q; e < b.length && !g; ) {
                        var k = b[e]
                          , m = b[e + 1];
                        for (d = f = 0; d < k.length && !g; )
                            if (g = k[d++].exec(a))
                                for (l = 0; l < m.length; l++)
                                    q = g[++f],
                                    h = m[l],
                                    "object" === typeof h && 0 < h.length ? 2 == h.length ? this[h[0]] = "function" == typeof h[1] ? h[1].call(this, q) : h[1] : 3 == h.length ? this[h[0]] = "function" !== typeof h[1] || h[1].exec && h[1].test ? q ? q.replace(h[1], h[2]) : c : q ? h[1].call(this, q, h[2]) : c : 4 == h.length && (this[h[0]] = q ? h[3].call(this, q.replace(h[1], h[2])) : c) : this[h] = q ? q : c;
                        e += 2
                    }
                }
                  , n = function(a, b) {
                    for (var d in b)
                        if ("object" === typeof b[d] && 0 < b[d].length)
                            for (var f = 0; f < b[d].length; f++) {
                                if (e.has(b[d][f], a))
                                    return "?" === d ? c : d
                            }
                        else if (e.has(b[d], a))
                            return "?" === d ? c : d;
                    return a
                }
                  , k = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2E3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    "8.1": "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
                  , r = {
                    browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], ["name", "version"], [/(opios)[\/\s]+([\w\.]+)/i], [["name", "Opera Mini"], "version"], [/\s(opr)\/([\w\.]+)/i], [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], ["name", "version"], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [["name", "IE"], "version"], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [["name", "Edge"], "version"], [/(yabrowser)\/([\w\.]+)/i], [["name", "Yandex"], "version"], [/(puffin)\/([\w\.]+)/i], [["name", "Puffin"], "version"], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [["name", "UCBrowser"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/(micromessenger)\/([\w\.]+)/i], [["name", "WeChat"], "version"], [/(qqbrowserlite)\/([\w\.]+)/i], ["name", "version"], [/(QQ)\/([\d\.]+)/i], ["name", "version"], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(2345Explorer)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(MetaSr)[\/\s]?([\w\.]+)/i], ["name"], [/(LBBROWSER)/i], ["name"], [/xiaomi\/miuibrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], ["version", ["name", "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], ["version", ["name", "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [["name", /(.+)/, "$1 WebView"], "version"], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [["name", /(.+(?:g|us))(.+)/, "$1 $2"], "version"], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], ["version", ["name", "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], ["name", "version"], [/(dolfin)\/([\w\.]+)/i], [["name", "Dolphin"], "version"], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [["name", "Chrome"], "version"], [/(coast)\/([\w\.]+)/i], [["name", "Opera Coast"], "version"], [/fxios\/([\w\.-]+)/i], ["version", ["name", "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], ["version", "name"], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [["name", "GSA"], "version"], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name", ["version", n, {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i], [["name", "Netscape"], "version"], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", e.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", e.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", e.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], ["model", "vendor", ["type", "tablet"]], [/applecoremedia\/[\w\.]+ \((ipad)/], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor", "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], ["vendor", "model", ["type", "tablet"]], [/(kf[A-z]+)\sbuild\/.+silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [["model", n, {
                        "Fire Phone": ["SD", "KF"]
                    }], ["vendor", "Amazon"], ["type", "mobile"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i], ["model", ["vendor", "Apple"], ["type", "mobile"]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], ["model", ["vendor", "Asus"], ["type", "tablet"]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], ["model", ["vendor", "Sony"], ["type", "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], ["vendor", "model", ["type", "console"]], [/android.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[34portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i], [["vendor", n, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }], ["model", n, {
                        "Evo Shift 4G": "7373KT"
                    }], ["type", "mobile"]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], ["vendor", "model", ["type", "tablet"]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], ["model", ["vendor", "Huawei"], ["type", "mobile"]], [/(microsoft);\s(lumia[\s\w]+)/i], ["vendor", "model", ["type", "mobile"]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [["vendor", e.trim], ["model", e.trim], ["type", "smarttv"]], [/hbbtv.+maple;(\d+)/i], [["model", /^/, "SmartTV"], ["vendor", "Samsung"], ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [["vendor", "Samsung"], "model", ["type", "tablet"]], [/smart-tv.+(samsung)/i], ["vendor", ["type", "smarttv"], "model"], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [["vendor", "Samsung"], "model", ["type", "mobile"]], [/sie-(\w*)/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [["vendor", "Nokia"], "model", ["type", "mobile"]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/android.+([vl]k\-?\d{3})\s+build/i], ["model", ["vendor", "LG"], ["type", "tablet"]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], ["model", ["vendor", "LG"], ["type", "mobile"]], [/android.+(ideatab[a-z0-9\-\s]+)/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]], [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], ["vendor", "model", ["type", "mobile"]], [/crkey/i], [["model", "Chromecast"], ["vendor", "Google"]], [/android.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/android.+;\s(pixel c)\s/i], ["model", ["vendor", "Google"], ["type", "tablet"]], [/android.+;\s(pixel xl|pixel)\s/i], ["model", ["vendor", "Google"], ["type", "mobile"]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "tablet"]], [/android.+;\s(m[1-5]\snote)\sbuild/i], ["model", ["vendor", "Meizu"], ["type", "tablet"]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], ["model", ["vendor", "OnePlus"], ["type", "mobile"]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], ["model", ["vendor", "RCA"], ["type", "tablet"]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], ["model", ["vendor", "Dell"], ["type", "tablet"]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], ["model", ["vendor", "Verizon"], ["type", "tablet"]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [["vendor", "Barnes & Noble"], "model", ["type", "tablet"]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], ["model", ["vendor", "NuVision"], ["type", "tablet"]], [/android.+;\s(k88)\sbuild/i], ["model", ["vendor", "ZTE"], ["type", "tablet"]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], ["model", ["vendor", "Swiss"], ["type", "mobile"]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], ["model", ["vendor", "Swiss"], ["type", "tablet"]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], ["model", ["vendor", "Zeki"], ["type", "tablet"]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [["vendor", "Dragon Touch"], "model", ["type", "tablet"]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], ["model", ["vendor", "Insignia"], ["type", "tablet"]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], ["model", ["vendor", "NextBook"], ["type", "tablet"]], [/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [["vendor", "Voice"], "model", ["type", "mobile"]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [["vendor", "LvTel"], "model", ["type", "mobile"]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], ["model", ["vendor", "Envizen"], ["type", "tablet"]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], ["vendor", "model", ["type", "tablet"]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], ["model", ["vendor", "MachSpeed"], ["type", "tablet"]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], ["vendor", "model", ["type", "tablet"]], [/android.+[;\/]\s*TU_(1491)\s+build/i], ["model", ["vendor", "Rotor"], ["type", "tablet"]], [/android.+(KS(.+))\s+build/i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], ["vendor", "model", ["type", "tablet"]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [["type", e.lowerize], "vendor", "model"], [/(android[\w\.\s\-]{0,9});.+build/i], ["model", ["vendor", "Generic"]]],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i], ["version", ["name", "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], ["name", "version"], [/rv:([\w\.]{1,9}).+(gecko)/i], ["version", "name"]],
                    os: [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], ["name", ["version", n, k]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", n, k]], [/\((bb)(10);/i], [["name", "BlackBerry"], "version"], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], ["name", "version"], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [["name", "Symbian"], "version"], [/\((series40);/i], ["name"], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"], "version"], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.\d]*)/i], [["name", "Solaris"], "version"], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], ["name", "version"], [/(haiku)\s(\w+)/i], ["name", "version"], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [["version", /_/g, "."], ["name", "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], ["name", "version"]]
                }
                  , g = function(b, d) {
                    "object" === typeof b && (d = b,
                    b = c);
                    if (!(this instanceof g))
                        return (new g(b,d)).getResult();
                    var l = b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : "")
                      , k = d ? e.extend(r, d) : r;
                    this.getBrowser = function() {
                        var a = {
                            name: c,
                            version: c
                        };
                        f.call(a, l, k.browser);
                        a.major = e.major(a.version);
                        return a
                    }
                    ;
                    this.getCPU = function() {
                        var a = {
                            architecture: c
                        };
                        f.call(a, l, k.cpu);
                        return a
                    }
                    ;
                    this.getDevice = function() {
                        var a = {
                            vendor: c,
                            model: c,
                            type: c
                        };
                        f.call(a, l, k.device);
                        return a
                    }
                    ;
                    this.getEngine = function() {
                        var a = {
                            name: c,
                            version: c
                        };
                        f.call(a, l, k.engine);
                        return a
                    }
                    ;
                    this.getOS = function() {
                        var a = {
                            name: c,
                            version: c
                        };
                        f.call(a, l, k.os);
                        return a
                    }
                    ;
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ;
                    this.getUA = function() {
                        return l
                    }
                    ;
                    this.setUA = function(a) {
                        l = a;
                        return this
                    }
                    ;
                    return this
                };
                g.VERSION = "0.7.18";
                g.BROWSER = {
                    NAME: "name",
                    MAJOR: "major",
                    VERSION: "version"
                };
                g.CPU = {
                    ARCHITECTURE: "architecture"
                };
                g.DEVICE = {
                    MODEL: "model",
                    VENDOR: "vendor",
                    TYPE: "type",
                    CONSOLE: "console",
                    MOBILE: "mobile",
                    SMARTTV: "smarttv",
                    TABLET: "tablet",
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                };
                g.ENGINE = {
                    NAME: "name",
                    VERSION: "version"
                };
                g.OS = {
                    NAME: "name",
                    VERSION: "version"
                };
                "undefined" !== typeof b ? ("undefined" !== typeof d && d.exports && (b = d.exports = g),
                b.UAParser = g) : a && (a.UAParser = g);
                var p = a && (a.jQuery || a.Zepto);
                if ("undefined" !== typeof p) {
                    var u = new g;
                    p.ua = u.getResult();
                    p.ua.get = function() {
                        return u.getUA()
                    }
                    ;
                    p.ua.set = function(a) {
                        u.setUA(a);
                        a = u.getResult();
                        for (var b in a)
                            p.ua[b] = a[b]
                    }
                }
            }
            )("object" === typeof window ? window : this)
        }
        , {}]
    }, {}, [1])(1)
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function() {
    "use strict";
    function t(n) {
        if (!n)
            throw new Error("No options passed to Waypoint constructor");
        if (!n.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e,
        this.options = t.Adapter.extend({}, t.defaults, n),
        this.element = this.options.element,
        this.adapter = new t.Adapter(this.element),
        this.callback = n.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = t.Context.findOrCreateByElement(this.options.context),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        i[this.key] = this,
        e += 1
    }
    var e = 0
      , i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }
    ,
    t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }
    ,
    t.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete i[this.key]
    }
    ,
    t.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    t.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    t.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    t.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    t.invokeAll = function(t) {
        var e = [];
        for (var n in i)
            e.push(i[n]);
        for (var o = 0, r = e.length; r > o; o++)
            e[o][t]()
    }
    ,
    t.destroyAll = function() {
        t.invokeAll("destroy")
    }
    ,
    t.disableAll = function() {
        t.invokeAll("disable")
    }
    ,
    t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i)
            i[e].enabled = !0;
        return this
    }
    ,
    t.refreshAll = function() {
        t.Context.refreshAll()
    }
    ,
    t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    t.adapters = [],
    t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = t
}(),
function() {
    "use strict";
    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
        this.element = t,
        this.Adapter = o.Adapter,
        this.adapter = new this.Adapter(t),
        this.key = "waypoint-context-" + i,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        t.waypointContextKey = this.key,
        n[t.waypointContextKey] = this,
        i += 1,
        o.windowContext || (o.windowContext = !0,
        o.windowContext = new e(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0
      , n = {}
      , o = window.Waypoint
      , r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t,
        this.refresh()
    }
    ,
    e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , e = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"),
        delete n[this.key])
    }
    ,
    e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(),
            e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0,
            o.requestAnimationFrame(t))
        })
    }
    ,
    e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(),
            e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0,
            o.requestAnimationFrame(t))
        })
    }
    ,
    e.prototype.handleResize = function() {
        o.Context.refreshAll()
    }
    ,
    e.prototype.handleScroll = function() {
        var t = {}
          , e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var n = e[i]
              , o = n.newScroll > n.oldScroll
              , r = o ? n.forward : n.backward;
            for (var s in this.waypoints[i]) {
                var l = this.waypoints[i][s];
                if (null !== l.triggerPoint) {
                    var a = n.oldScroll < l.triggerPoint
                      , h = n.newScroll >= l.triggerPoint
                      , p = a && h
                      , u = !a && !h;
                    (p || u) && (l.queueTrigger(r),
                    t[l.group.id] = l.group)
                }
            }
        }
        for (var d in t)
            t[d].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }
    ,
    e.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key],
        this.checkEmpty()
    }
    ,
    e.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e])
                t.push(this.waypoints[e][i]);
        for (var n = 0, o = t.length; o > n; n++)
            t[n].destroy()
    }
    ,
    e.prototype.refresh = function() {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
        this.handleScroll(),
        t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var l in this.waypoints[r]) {
                var a, h, p, u, d, f = this.waypoints[r][l], c = f.options.offset, w = f.triggerPoint, y = 0, g = null == w;
                f.element !== f.element.window && (y = f.adapter.offset()[s.offsetProp]),
                "function" == typeof c ? c = c.apply(f) : "string" == typeof c && (c = parseFloat(c),
                f.options.offset.indexOf("%") > -1 && (c = Math.ceil(s.contextDimension * c / 100))),
                a = s.contextScroll - s.contextOffset,
                f.triggerPoint = Math.floor(y + a - c),
                h = w < s.oldScroll,
                p = f.triggerPoint >= s.oldScroll,
                u = h && p,
                d = !h && !p,
                !g && u ? (f.queueTrigger(s.backward),
                n[f.group.id] = f.group) : !g && d ? (f.queueTrigger(s.forward),
                n[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward),
                n[f.group.id] = f.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var t in n)
                n[t].flushTriggers()
        }),
        this
    }
    ,
    e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }
    ,
    e.refreshAll = function() {
        for (var t in n)
            n[t].refresh()
    }
    ,
    e.findByElement = function(t) {
        return n[t.waypointContextKey]
    }
    ,
    window.onload = function() {
        r && r(),
        e.refreshAll()
    }
    ,
    o.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }
    ,
    o.Context = e
}(),
function() {
    "use strict";
    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    function i(t) {
        this.name = t.name,
        this.axis = t.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        n[this.axis][this.name] = this
    }
    var n = {
        vertical: {},
        horizontal: {}
    }
      , o = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i]
              , o = "up" === i || "left" === i;
            n.sort(o ? e : t);
            for (var r = 0, s = n.length; s > r; r += 1) {
                var l = n[r];
                (l.options.continuous || r === n.length - 1) && l.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints)
          , n = i === this.waypoints.length - 1;
        return n ? null : this.waypoints[i + 1]
    }
    ,
    i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }
    ,
    i.prototype.remove = function(t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(t) {
        return n[t.axis][t.name] || new i(t)
    }
    ,
    o.Group = i
}(),
function() {
    "use strict";
    function t(t) {
        return t === t.window
    }
    function e(e) {
        return t(e) ? e : e.defaultView
    }
    function i(t) {
        this.element = t,
        this.handlers = {}
    }
    var n = window.Waypoint;
    i.prototype.innerHeight = function() {
        var e = t(this.element);
        return e ? this.element.innerHeight : this.element.clientHeight
    }
    ,
    i.prototype.innerWidth = function() {
        var e = t(this.element);
        return e ? this.element.innerWidth : this.element.clientWidth
    }
    ,
    i.prototype.off = function(t, e) {
        function i(t, e, i) {
            for (var n = 0, o = e.length - 1; o > n; n++) {
                var r = e[n];
                i && i !== r || t.removeEventListener(r)
            }
        }
        var n = t.split(".")
          , o = n[0]
          , r = n[1]
          , s = this.element;
        if (r && this.handlers[r] && o)
            i(s, this.handlers[r][o], e),
            this.handlers[r][o] = [];
        else if (o)
            for (var l in this.handlers)
                i(s, this.handlers[l][o] || [], e),
                this.handlers[l][o] = [];
        else if (r && this.handlers[r]) {
            for (var a in this.handlers[r])
                i(s, this.handlers[r][a], e);
            this.handlers[r] = {}
        }
    }
    ,
    i.prototype.offset = function() {
        if (!this.element.ownerDocument)
            return null;
        var t = this.element.ownerDocument.documentElement
          , i = e(this.element.ownerDocument)
          , n = {
            top: 0,
            left: 0
        };
        return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()),
        {
            top: n.top + i.pageYOffset - t.clientTop,
            left: n.left + i.pageXOffset - t.clientLeft
        }
    }
    ,
    i.prototype.on = function(t, e) {
        var i = t.split(".")
          , n = i[0]
          , o = i[1] || "__default"
          , r = this.handlers[o] = this.handlers[o] || {}
          , s = r[n] = r[n] || [];
        s.push(e),
        this.element.addEventListener(n, e)
    }
    ,
    i.prototype.outerHeight = function(e) {
        var i, n = this.innerHeight();
        return e && !t(this.element) && (i = window.getComputedStyle(this.element),
        n += parseInt(i.marginTop, 10),
        n += parseInt(i.marginBottom, 10)),
        n
    }
    ,
    i.prototype.outerWidth = function(e) {
        var i, n = this.innerWidth();
        return e && !t(this.element) && (i = window.getComputedStyle(this.element),
        n += parseInt(i.marginLeft, 10),
        n += parseInt(i.marginRight, 10)),
        n
    }
    ,
    i.prototype.scrollLeft = function() {
        var t = e(this.element);
        return t ? t.pageXOffset : this.element.scrollLeft
    }
    ,
    i.prototype.scrollTop = function() {
        var t = e(this.element);
        return t ? t.pageYOffset : this.element.scrollTop
    }
    ,
    i.extend = function() {
        function t(t, e) {
            if ("object" == typeof t && "object" == typeof e)
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }
        for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++)
            t(e[0], e[i]);
        return e[0]
    }
    ,
    i.inArray = function(t, e, i) {
        return null == e ? -1 : e.indexOf(t, i)
    }
    ,
    i.isEmptyObject = function(t) {
        for (var e in t)
            return !1;
        return !0
    }
    ,
    n.adapters.push({
        name: "noframework",
        Adapter: i
    }),
    n.Adapter = i
}();
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
(function(q, m) {
    "function" === typeof define && define.amd ? define(m) : "object" === typeof exports ? module.exports = m() : q.Blazy = m()
}
)(this, function() {
    function q(b) {
        var c = b._util;
        c.elements = E(b.options);
        c.count = c.elements.length;
        c.destroyed && (c.destroyed = !1,
        b.options.container && l(b.options.container, function(a) {
            n(a, "scroll", c.validateT)
        }),
        n(window, "resize", c.saveViewportOffsetT),
        n(window, "resize", c.validateT),
        n(window, "scroll", c.validateT));
        m(b)
    }
    function m(b) {
        for (var c = b._util, a = 0; a < c.count; a++) {
            var d = c.elements[a], e;
            a: {
                var g = d;
                e = b.options;
                var p = g.getBoundingClientRect();
                if (e.container && y && (g = g.closest(e.containerClass))) {
                    g = g.getBoundingClientRect();
                    e = r(g, f) ? r(p, {
                        top: g.top - e.offset,
                        right: g.right + e.offset,
                        bottom: g.bottom + e.offset,
                        left: g.left - e.offset
                    }) : !1;
                    break a
                }
                e = r(p, f)
            }
            if (e || t(d, b.options.successClass))
                b.load(d),
                c.elements.splice(a, 1),
                c.count--,
                a--
        }
        0 === c.count && b.destroy()
    }
    function r(b, c) {
        return b.right >= c.left && b.bottom >= c.top && b.left <= c.right && b.top <= c.bottom
    }
    function z(b, c, a) {
        if (!t(b, a.successClass) && (c || a.loadInvisible || 0 < b.offsetWidth && 0 < b.offsetHeight))
            if (c = b.getAttribute(u) || b.getAttribute(a.src)) {
                c = c.split(a.separator);
                var d = c[A && 1 < c.length ? 1 : 0]
                  , e = b.getAttribute(a.srcset)
                  , g = "img" === b.nodeName.toLowerCase()
                  , p = (c = b.parentNode) && "picture" === c.nodeName.toLowerCase();
                if (g || void 0 === b.src) {
                    var h = new Image
                      , w = function() {
                        a.error && a.error(b, "invalid");
                        v(b, a.errorClass);
                        k(h, "error", w);
                        k(h, "load", f)
                    }
                      , f = function() {
                        g ? p || B(b, d, e) : b.style.backgroundImage = 'url("' + d + '")';
                        x(b, a);
                        k(h, "load", f);
                        k(h, "error", w)
                    };
                    p && (h = b,
                    l(c.getElementsByTagName("source"), function(b) {
                        var c = a.srcset
                          , e = b.getAttribute(c);
                        e && (b.setAttribute("srcset", e),
                        b.removeAttribute(c))
                    }));
                    n(h, "error", w);
                    n(h, "load", f);
                    B(h, d, e)
                } else
                    b.src = d,
                    x(b, a)
            } else
                "video" === b.nodeName.toLowerCase() ? (l(b.getElementsByTagName("source"), function(b) {
                    var c = a.src
                      , e = b.getAttribute(c);
                    e && (b.setAttribute("src", e),
                    b.removeAttribute(c))
                }),
                b.load(),
                x(b, a)) : (a.error && a.error(b, "missing"),
                v(b, a.errorClass))
    }
    function x(b, c) {
        v(b, c.successClass);
        c.success && c.success(b);
        b.removeAttribute(c.src);
        b.removeAttribute(c.srcset);
        l(c.breakpoints, function(a) {
            b.removeAttribute(a.src)
        })
    }
    function B(b, c, a) {
        a && b.setAttribute("srcset", a);
        b.src = c
    }
    function t(b, c) {
        return -1 !== (" " + b.className + " ").indexOf(" " + c + " ")
    }
    function v(b, c) {
        t(b, c) || (b.className += " " + c)
    }
    function E(b) {
        var c = [];
        b = b.root.querySelectorAll(b.selector);
        for (var a = b.length; a--; c.unshift(b[a]))
            ;
        return c
    }
    function C(b) {
        f.bottom = (window.innerHeight || document.documentElement.clientHeight) + b;
        f.right = (window.innerWidth || document.documentElement.clientWidth) + b
    }
    function n(b, c, a) {
        b.attachEvent ? b.attachEvent && b.attachEvent("on" + c, a) : b.addEventListener(c, a, {
            capture: !1,
            passive: !0
        })
    }
    function k(b, c, a) {
        b.detachEvent ? b.detachEvent && b.detachEvent("on" + c, a) : b.removeEventListener(c, a, {
            capture: !1,
            passive: !0
        })
    }
    function l(b, c) {
        if (b && c)
            for (var a = b.length, d = 0; d < a && !1 !== c(b[d], d); d++)
                ;
    }
    function D(b, c, a) {
        var d = 0;
        return function() {
            var e = +new Date;
            e - d < c || (d = e,
            b.apply(a, arguments))
        }
    }
    var u, f, A, y;
    return function(b) {
        if (!document.querySelectorAll) {
            var c = document.createStyleSheet();
            document.querySelectorAll = function(a, b, d, h, f) {
                f = document.all;
                b = [];
                a = a.replace(/\[for\b/gi, "[htmlFor").split(",");
                for (d = a.length; d--; ) {
                    c.addRule(a[d], "k:v");
                    for (h = f.length; h--; )
                        f[h].currentStyle.k && b.push(f[h]);
                    c.removeRule(0)
                }
                return b
            }
        }
        var a = this
          , d = a._util = {};
        d.elements = [];
        d.destroyed = !0;
        a.options = b || {};
        a.options.error = a.options.error || !1;
        a.options.offset = a.options.offset || 100;
        a.options.root = a.options.root || document;
        a.options.success = a.options.success || !1;
        a.options.selector = a.options.selector || ".b-lazy";
        a.options.separator = a.options.separator || "|";
        a.options.containerClass = a.options.container;
        a.options.container = a.options.containerClass ? document.querySelectorAll(a.options.containerClass) : !1;
        a.options.errorClass = a.options.errorClass || "b-error";
        a.options.breakpoints = a.options.breakpoints || !1;
        a.options.loadInvisible = a.options.loadInvisible || !1;
        a.options.successClass = a.options.successClass || "b-loaded";
        a.options.validateDelay = a.options.validateDelay || 25;
        a.options.saveViewportOffsetDelay = a.options.saveViewportOffsetDelay || 50;
        a.options.srcset = a.options.srcset || "data-srcset";
        a.options.src = u = a.options.src || "data-src";
        y = Element.prototype.closest;
        A = 1 < window.devicePixelRatio;
        f = {};
        f.top = 0 - a.options.offset;
        f.left = 0 - a.options.offset;
        a.revalidate = function() {
            q(a)
        }
        ;
        a.load = function(a, b) {
            var c = this.options;
            void 0 === a.length ? z(a, b, c) : l(a, function(a) {
                z(a, b, c)
            })
        }
        ;
        a.destroy = function() {
            var a = this._util;
            this.options.container && l(this.options.container, function(b) {
                k(b, "scroll", a.validateT)
            });
            k(window, "scroll", a.validateT);
            k(window, "resize", a.validateT);
            k(window, "resize", a.saveViewportOffsetT);
            a.count = 0;
            a.elements.length = 0;
            a.destroyed = !0
        }
        ;
        d.validateT = D(function() {
            m(a)
        }, a.options.validateDelay, a);
        d.saveViewportOffsetT = D(function() {
            C(a.options.offset)
        }, a.options.saveViewportOffsetDelay, a);
        C(a.options.offset);
        l(a.options.breakpoints, function(a) {
            if (a.width >= window.screen.width)
                return u = a.src,
                !1
        });
        setTimeout(function() {
            q(a)
        })
    }
});
const BrightcoveLoadedAssets = [];
let BrightcoveDebugMode = !1
  , adBlockerInUse = !1;
var BrightcovePlayer = function() {
    this.brightcoveConfig = {
        accountId: null,
        playersIdDict: null,
        dummyVideoForAds: "6220071361001",
        showcontrols: !0,
        autostart: !1,
        displayTitle: !0,
        showDownloadButton: !1,
        autoPause: {
            viewability: !1,
            pauseAds: !1
        },
        cssClasses: null,
        showVpaidControls: !0,
        assets: {
            videojsOverlayCssUrl: "https://players.brightcove.net/videojs-overlay/2/videojs-overlay.css",
            videojsOverlayJsUrl: "https://players.brightcove.net/videojs-overlay/2/videojs-overlay.min.js"
        },
        useChartbeatIntegration: !0
    },
    this.isExternalSource = !1,
    this.videosConfig = [],
    this.playerId = null,
    this.playerInstance = null
}
  , fn = BrightcovePlayer.prototype;
fn.setBrightcoveKey = function(e, t) {
    return this.brightcoveConfig.accountId = e,
    this.brightcoveConfig.playersIdDict = t,
    this
}
,
fn.setDebug = function(e) {
    return BrightcoveDebugMode = e,
    this
}
,
fn.setVideoCssClasses = function(e) {
    return void 0 !== e && null != e && "" !== e && (this.brightcoveConfig.cssClasses = e),
    this
}
,
fn.setExternalAssetsUrl = function(e) {
    return void 0 !== e && null != e && Array.isArray(e) && (this.brightcoveConfig.externalAssetsUrl = e),
    this
}
,
fn.setPublicationId = function(e) {
    return this.publicationId = e,
    this
}
,
fn.setSite = function(e) {
    return this.site = e,
    this
}
,
fn.setHitsUrl = function(e) {
    return this.hitsUrl = e,
    this
}
,
fn.disableHitsUrlWarning = function(e) {
    return this.disableHitsUrlWarning = e,
    this
}
,
fn.setTrackAnalytics = function(e) {
    return this.brightcoveConfig.trackAnalytics = e || !0,
    this
}
,
fn.setChartbeatIntegration = function(e) {
    return this.brightcoveConfig.useChartbeatIntegration = e || !0,
    this
}
,
fn.setDisplayTitle = function(e) {
    return this.brightcoveConfig.displayTitle = !0 === e || 1 === e || "1" === e,
    this
}
,
fn.setAutostart = function(e) {
    return this.brightcoveConfig.autostart = !0 === e || 1 === e || "1" === e,
    this
}
,
fn.setAdvertising = function(e) {
    if (!e || !e.serverUrl || null === e.serverUrl || "" === e.serverUrl)
        return delete this.brightcoveConfig.advertising,
        this;
    let t = "" + e.serverUrl
      , i = document.referrer;
    "" !== i && (t = t.replace("[referrer_url]", i));
    let o = [location.protocol, "//", location.host, location.pathname].join("");
    if (null != o && "" !== o) {
        let e = encodeURI(o);
        null != e && "" !== e && (t.indexOf("[description_url]") > -1 ? t = t.replace("[description_url]", e) : -1 === t.indexOf("description_url=") && (t += "&description_url=" + e))
    }
    return t = t.replace("[timestamp]", (new Date).format("MMddhhmmssS")),
    this.brightcoveConfig.advertising = {
        serverUrl: t,
        showVpaidControls: !0
    },
    this
}
,
fn.addRelatedVideos = function(e, t) {
    return e && t ? (this.brightcoveConfig.related = {
        url: e,
        heading: t
    },
    this) : (delete this.brightcoveConfig.related,
    this)
}
,
fn.addVideoWithJson = function(e) {
    if (!e)
        return this;
    !0 === e.videoIs360 && (e.isVideo360 = !0);
    this.addSourceWithJson(e);
    return this
}
,
fn.addPodcastWithJson = function(e, t) {
    return e ? (e.isPodcast = !0,
    this.addSourceWithJson(e) && (void 0 !== this.brightcoveConfig.cssClasses && null != this.brightcoveConfig.cssClasses || (this.brightcoveConfig.cssClasses = ""),
    this.brightcoveConfig.cssClasses += " video-js-podcast",
    t && (this.brightcoveConfig.showDownloadButton = t)),
    this) : this
}
,
fn.addLivestreamWithJson = function(e) {
    if (!e)
        return this;
    e.isLivestream = !0;
    this.addSourceWithJson(e);
    return this
}
,
fn.addSourceWithJson = function(e) {
    if (!e)
        return !1;
    if (!e.brightcoveVideoId)
        return !1;
    if (this.isExternalSource)
        return console.warn("There is an external source video already configured, this video will not be played."),
        !1;
    if (this.videosConfig.length > 0) {
        if (e.isLivestream)
            return console.warn("There are videos already configured, this livestream will not be played."),
            !1;
        if (e.isPodcast)
            return console.warn("There are videos already configured, this podcast will not be played."),
            !1;
        if (this.videosConfig.some(e=>e.isLivestream))
            return console.warn("There is a livestream already configured, this video will not be played."),
            !1;
        if (this.videosConfig.some(e=>e.isPodcast))
            return console.warn("There is a podcast already configured, this video will not be played."),
            !1
    }
    return !0 === e.isPodcast && (this.brightcoveConfig.displayTitle = !1),
    e.title && "" !== e.title || (e.title = null),
    this.videosConfig.push(e),
    !0
}
,
fn.addExternalSourceVideo = function(e, t, i) {
    return e ? (this.isExternalSource = !0,
    this.videosConfig.length > 0 && console.warn("You configured an external source video, any video already added will not be played."),
    this.videosConfig = null,
    this.externalSourceUrl = e,
    this.fileNotSupportedSource = i,
    null !== t && "" !== t && (this.externalSourceImage = t),
    this) : (this.isExternalSource = !1,
    this.externalSourceUrl = null,
    this.externalSourceImage = null,
    this)
}
,
fn.create = function(e) {
    if (!e)
        return this;
    if (null == document.getElementById(e))
        return this;
    if (!this.brightcoveConfig.accountId || null == this.brightcoveConfig.playersIdDict || this.brightcoveConfig.playersIdDict.length < 1)
        return console.error("The Brightcove configuration is missing, please provide it using the method 'setBrightcoveKey'"),
        this;
    if (!this.publicationId)
        return console.warn("The publicationId is missing, the analytics hits for the playlist will not be processed. Please provide it using the method 'setPublicationId'"),
        this;
    if (this.hitsUrl || this.disableHitsUrlWarning || console.warn("The hitsUrl is missing, the analytics hits for the playlist will not be processed. Please provide it using the method 'setHitsUrl'"),
    this.isExternalSource)
        return this.buildExternalSourceVideo(e),
        this;
    null != this.videosConfig && 0 != this.videosConfig.length || console.warn("No videos do display.");
    let t = this.brightcoveConfig.playersIdDict.normal;
    this.videosConfig.length > 1 ? t = this.brightcoveConfig.playersIdDict.playlist : this.videosConfig[0].isPodcast ? t = this.brightcoveConfig.playersIdDict.podcast : this.videosConfig[0].isVideo360 && (t = this.brightcoveConfig.playersIdDict.video360);
    let i = null;
    return 1 == this.videosConfig.length && (i = this.videosConfig[0].brightcoveVideoId),
    this.createPlayerForVideo(e, t, i),
    this
}
,
fn.isFacebookStream = function(e) {
    return e.indexOf("facebook.com") > -1
}
,
fn.isHlsVideoStream = function(e) {
    return !(!e || "" === e) && (String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
        return (void 0 === t || t > this.length) && (t = this.length),
        this.substring(t - e.length, t) === e
    }
    ),
    String(e).toLowerCase().endsWith(".m3u8"))
}
,
fn.makeId = function(e) {
    for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = i.length, r = 0; r < e; r++)
        t += i.charAt(Math.floor(Math.random() * o));
    return t
}
,
fn.buildFacebookStream = function(e, t) {
    let i = "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(t) + "&show_text=0&width=184"
      , o = Math.ceil($("#" + e).width() / (16 / 9));
    return $("#" + e).html('<iframe id="livestreamTopVideoFrame" src="' + i + '" width="100%" height="' + o + '" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'),
    $("#" + e).on("resize", (function(e) {
        let t = Math.ceil($(this).width() / (16 / 9));
        $(this).find("#livestreamTopVideoFrame").attr("height", t)
    }
    )),
    this
}
,
fn.buildHlsStream = function(e, t, i) {
    var o = document.createElement("script");
    o.type = "text/javascript",
    o.src = "https://cdn.jsdelivr.net/npm/hls.js@latest",
    document.getElementsByTagName("head")[0].appendChild(o);
    let r = this;
    try {
        $.getScript("https://cdn.jsdelivr.net/npm/hls.js@latest", (function() {
            var o = "video-" + r.makeId(10);
            $("#" + e).html('<video id="' + o + '" style="width: 100%; height: 100%;" controls=""></video>');
            let s = document.getElementById(o);
            if (window.Hls && Hls.isSupported()) {
                var n = new Hls
                  , l = decodeURIComponent(t);
                n.loadSource(l),
                n.attachMedia(s),
                n.on(Hls.Events.MANIFEST_PARSED, (function() {
                    if (i)
                        try {
                            s.play()
                        } catch (e) {}
                }
                ))
            } else
                s.canPlayType("application/vnd.apple.mpegurl") && (s.src = t,
                s.addEventListener("canplay", (function() {
                    if (i)
                        try {
                            s.play()
                        } catch (e) {}
                }
                )))
        }
        ))
    } catch (e) {}
}
,
fn.buildExternalSourcePlayer = function(e, t, i) {
    let o = "";
    if (/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)) {
        o = "https://www.youtube.com/embed/" + function(e) {
            let t = e.match("^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)");
            return t ? t[1] : ""
        }(t) + "?rel=0&showinfo=0",
        i && (o += "&autoplay=1&mute=1");
        let r = "fullscreen";
        i && (r += "; autoplay");
        let s = '<div class="cofinaVideoPlayer youtubeWrapper" style="position: relative;padding-bottom: 56.25%;">';
        s += '<iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" width="100%" height="' + Math.ceil($("#" + e).width() / (16 / 9)) + '" src="' + o + '" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="' + r + '" ></iframe>',
        s += "</div>",
        $("#" + e).html(s)
    } else {
        let o = "";
        i && (o += " autoplay");
        let r = '<div class="cofinaVideoPlayer externalWrapper"">';
        r += '<video width="100%" height="100%" controls ' + o + '><source src="' + t + '">Your browser does not support the video tag.</video>',
        r += "</div>",
        $("#" + e).html(r)
    }
}
,
fn.buildExternalSourceVideo = function(e) {
    if (null == this.externalSourceUrl || "" === this.externalSourceUrl)
        return this;
    if (this.brightcoveConfig.advertising && this.brightcoveConfig.advertising.serverUrl) {
        this.ExternalSourceCallback = function() {
            $("#" + e).empty(),
            this.isFacebookStream(this.externalSourceUrl) ? this.buildFacebookStream(e, this.externalSourceUrl) : this.isHlsVideoStream(this.externalSourceUrl) ? this.buildHlsStream(e, this.externalSourceUrl, !0) : this.buildExternalSourcePlayer(e, this.externalSourceUrl, !0)
        }
        ;
        let t = this.brightcoveConfig.playersIdDict.normal;
        this.createPlayerForVideo(e, t, this.brightcoveConfig.dummyVideoForAds)
    } else
        this.isFacebookStream(this.externalSourceUrl) ? this.buildFacebookStream(e, this.externalSourceUrl) : this.isHlsVideoStream(this.externalSourceUrl) ? this.buildHlsStream(e, this.externalSourceUrl, this.brightcoveConfig.autostart) : this.buildExternalSourcePlayer(e, this.externalSourceUrl, this.brightcoveConfig.autostart);
    return this
}
,
fn.createPlayerForVideo = function(e, t, i) {
    let o = generateId()
      , r = document.getElementById(e)
      , s = this.buildVideoElement(o, t, i);
    if (null == s)
        return null;
    if (!this.isExternalSource && 1 == this.videosConfig.length && this.videosConfig[0].isPodcast && r.classList.add("vjs-podcastContainer"),
    null != this.videosConfig && this.videosConfig.length > 1) {
        let e = document.createElement("div");
        e.classList.add("vjs-playlist"),
        r.parentElement.appendChild(e)
    }
    this.playerId = o;
    let n = this
      , l = this.getBrighcovePlayerScriptUrl(t)
      , a = function() {
        BrightcoveDebugMode && console.log("start callbackAfterPlayerScriptLoaded " + n.playerId),
        r.textContent = "",
        r.appendChild(s);
        n.playerInstance = bc(s, {}),
        null != n.playerInstance && null != n.playerInstance && (adBlockerInUse || (n.isExternalSource || 1 != n.videosConfig[0].noPub) && void 0 !== n.brightcoveConfig.advertising && void 0 !== n.brightcoveConfig.advertising.serverUrl && null !== n.brightcoveConfig.advertising.serverUrl && "" !== n.brightcoveConfig.advertising.serverUrl && void 0 !== n.playerInstance.ima3 && (n.playerInstance.ima3.settings.serverUrl = n.brightcoveConfig.advertising.serverUrl,
        n.playerInstance.ima3.settings.showVpaidControls = !0,
        n.playerInstance.ima3.showVpaidControls = !0))
    }
      , d = function() {
        BrightcoveDebugMode && console.log("start callbackAfterPluginScriptsLoaded " + n.playerId),
        n.initPlayerForVideo(n, n.playerId)
    };
    return BrightcoveDebugMode && console.log("start loadPlayerAndPlugins " + o),
    checkAdBlockerVideos().then((function() {
        n.loadPlayerAndPlugins(l, n, a, d)
    }
    )),
    o
}
,
fn.getBrighcovePlayerScriptUrl = function(e) {
    if (null == e || "" === e)
        return console.error("The playerConfig is empty"),
        null;
    return 2 != e.split("_").length ? (console.error("The playerConfig (" + e + ") is malformed"),
    null) : "https://players.brightcove.net/" + this.brightcoveConfig.accountId + "/" + e + "/index.min.js"
}
,
fn.loadPlayerAndPlugins = function(e, t, i, o) {
    let r = [];
    if (!this.isExternalSource && (t.videosConfig[0].isPodcast || void 0 !== t.brightcoveConfig.related && null != t.brightcoveConfig.related && "" !== t.brightcoveConfig.related.url && ("" !== t.brightcoveConfig.assets.videojsOverlayCssUrl && loadCssAsset(t.brightcoveConfig.assets.videojsOverlayCssUrl),
    "" !== t.brightcoveConfig.assets.videojsOverlayJsUrl && r.push(t.brightcoveConfig.assets.videojsOverlayJsUrl)),
    void 0 !== t.brightcoveConfig.externalAssetsUrl && null != t.brightcoveConfig.externalAssetsUrl))
        for (let e = 0; e < t.brightcoveConfig.externalAssetsUrl.length; e++) {
            let i = t.brightcoveConfig.externalAssetsUrl[e];
            "" !== i && (i.indexOf(".css") > -1 ? loadCssAsset(i, !0) : r.push(i))
        }
    loadScriptAsset(e).then(i).then((function() {
        0 != r.length ? loadMultiScripts(r, !0).then(o) : o()
    }
    ))
}
,
fn.buildVideoElement = function(e, t, i) {
    let o = t.split("_");
    if (2 != o.length)
        return console.error("The playerConfig (" + t + ") is malformed"),
        null;
    const r = document.createElement("video-js");
    if (r.setAttribute("id", e),
    r.setAttribute("data-account", this.brightcoveConfig.accountId),
    r.setAttribute("data-player", o[0]),
    r.setAttribute("data-embed", o[1]),
    r.setAttribute("controls", ""),
    void 0 !== this.brightcoveConfig.cssClasses && null != this.brightcoveConfig.cssClasses || (this.brightcoveConfig.cssClasses = "vjs-fluid"),
    "" !== this.brightcoveConfig.cssClasses) {
        let e = this.brightcoveConfig.cssClasses.split(" ");
        for (let t = 0; t < e.length; t++)
            "" !== e[t] && r.classList.add(e[t])
    }
    return null != this.site && "" !== this.site && r.setAttribute("data-application-id", this.site),
    null != i && "" !== i && r.setAttribute("data-video-id", i),
    this.isExternalSource ? (this.isExternalSource && null != this.externalSourceImage && "" !== this.externalSourceImage && r.setAttribute("poster", this.externalSourceImage),
    r.setAttribute("disablePictureInPicture", ""),
    r) : (this.videosConfig[0].isPodcast && (r.setAttribute("disablePictureInPicture", ""),
    r.setAttribute("poster", "")),
    this.videosConfig[0].isPodcast || null == this.videosConfig[0].image || "" === this.videosConfig[0].image || r.setAttribute("poster", this.videosConfig[0].image),
    r)
}
,
fn.initPlayerForVideo = function(e, t) {
    BrightcoveDebugMode && console.log("start init player " + t),
    void 0 !== e.playerInstance && null != e.playerInstance && e.playerInstance.ready((function() {
        let i = this;
        if (e.isExternalSource && void 0 !== e.ExternalSourceCallback)
            return $("#" + t + " .vjs-dock-text").remove(),
            void i.on(["ads-ad-ended", "ads-ad-skipped", "ads-ad-error", "ads-error", "adserror", "ended", "error"], (function(t) {
                e.ExternalSourceCallback()
            }
            ));
        if (e.brightcoveConfig.showDownloadButton && i.downloadAudio(),
        void 0 !== e.brightcoveConfig.advertising && void 0 !== e.brightcoveConfig.advertising.serverUrl && null !== e.brightcoveConfig.advertising.serverUrl && "" !== e.brightcoveConfig.advertising.serverUrl)
            try {
                i.scrollIntoViewAds()
            } catch (e) {}
        if (e.videosConfig[0].isVideo360 && i.vr({
            projection: "360"
        }),
        null != e.videosConfig && e.videosConfig.length > 1) {
            let t = e.videosConfig.map(e=>e.brightcoveVideoId)
              , o = new Array(t.length);
            for (let r = 0; r < t.length; r++)
                i.catalog.getVideo(t[r], (function(s, n) {
                    o[r] = n,
                    null != e.videosConfig[r].image && "" !== e.videosConfig[r].image && (o[r].poster = e.videosConfig[r].image),
                    null != e.videosConfig[r].imagethumbnail && "" !== e.videosConfig[r].imagethumbnail && (o[r].thumbnail = e.videosConfig[r].imagethumbnail),
                    o.filter(e=>null != e).length == t.length && i.catalog.load(o)
                }
                ))
        }
        i.on("loadedmetadata", (function() {
            e.brightcoveConfig.displayTitle || $("#" + t + " .vjs-dock-text").remove(),
            e.brightcoveConfig.displayTitle && null != e.videosConfig[0].title && "" !== e.videosConfig[0].title && ($("#" + t + " .vjs-dock-title")[0].innerText = e.videosConfig[0].title,
            $("#" + t + " .vjs-dock-description").remove()),
            e.isExternalSource || e.videosConfig[0].isPodcast || void 0 !== e.brightcoveConfig.related && null != e.brightcoveConfig.related && "" !== e.brightcoveConfig.related.url && (loadSugeridas(e, i),
            i.on("ended", (function(e) {
                showSlide(1)
            }
            )))
        }
        )),
        e.brightcoveConfig.autostart && i.on("canplay", (function() {
            i.play().catch(e=>{
                i.muted(!0),
                i.play().catch(()=>{}
                )
            }
            )
        }
        )),
        (void 0 !== e.hitsUrl && null != e.hitsUrl && "" !== e.hitsUrl || e.brightcoveConfig.trackAnalytics) && (i.on(["ads-load", "ads-click", "ads-ad-started", "ads-ad-ended", "ads-ad-skipped", "ads-play", "ads-ad-error", "ads-error", "adserror", "ended", "error"], (function(t) {
            sendVideoPlayerHit(t, e)
        }
        )),
        i.one("playing", (function(t) {
            e.brightcoveConfig.useChartbeatIntegration && (window._cbv = window._cbv || [],
            window._cbv.push(i)),
            sendVideoPlayerHit(t, e),
            adBlockerInUse && (t.type = "AdBlock",
            sendVideoPlayerHit(t, e))
        }
        )))
    }
    ))
}
;
let generateId = function() {
    return Math.random().toString(36).substr(2, 9)
}
  , isFunction = function(e) {
    return e && "[object Function]" === {}.toString.call(e)
}
  , loadScriptAsset = function(e, t) {
    return BrightcoveDebugMode && console.log("The script (" + e + ") to be started"),
    new Promise((function(i, o) {
        if (null == e || "" === e)
            return void i(!0);
        if (BrightcoveLoadedAssets.includes(e))
            return BrightcoveDebugMode && console.log("The script (" + e + ") already loaded"),
            void setTimeout(()=>i(!0), 500);
        let r = t ? "?c=" + (new Date).getTime() : "";
        const s = document.createElement("script");
        s.async = !1,
        s.charset = "utf-8",
        s.src = e + r,
        s.onerror = ()=>{
            console.error("The script (" + e + ") could not be downloaded")
        }
        ,
        s.onload = function() {
            BrightcoveDebugMode && console.log("The script (" + e + ") loaded"),
            i(!0)
        }
        ,
        BrightcoveLoadedAssets.push(e),
        document.body.appendChild(s)
    }
    ))
}
  , loadCssAsset = function(e, t) {
    if (null == e || "" === e)
        return;
    if (BrightcoveLoadedAssets.includes(e))
        return;
    let i = t ? "?c=" + (new Date).getTime() : ""
      , o = document.createElement("link");
    o.href = e + i,
    o.type = "text/css",
    o.rel = "stylesheet",
    BrightcoveLoadedAssets.push(e),
    document.getElementsByTagName("head")[0].appendChild(o)
}
  , loadMultiScripts = function(e, t) {
    let i = [];
    return e.forEach((function(e) {
        i.push(loadScriptAsset(e, t))
    }
    )),
    i.reduce((e,t)=>e.then(e=>t.then(t=>[...e, t])), Promise.resolve([]))
}
  , loadSugeridas = function(e, t) {
    $.ajax({
        method: "GET",
        cache: !1,
        url: e.brightcoveConfig.related.url,
        dataType: "json",
        success: function(i) {
            if (null != i && Array.isArray(i)) {
                let o = isFunction(createLayerSugeridos) ? createLayerSugeridos(i, e.brightcoveConfig.heading) : null;
                null != o && t.overlay({
                    overlays: [{
                        align: "top-left",
                        content: o,
                        start: "ended",
                        end: "play"
                    }]
                })
            }
        }
    })
}
  , sendVideoPlayerHit = function(e, t) {
    try {
        let i = void 0 !== t.hitsUrl && null != t.hitsUrl && "" !== t.hitsUrl;
        if (!i && !t.brightcoveConfig.trackAnalytics)
            return;
        let o, r = e.type, s = translateEventType(r);
        if (1 == t.videosConfig.length)
            o = t.videosConfig[0];
        else {
            let i = e.target.player.mediainfo
              , r = t.videosConfig.filter(e=>e.brightcoveVideoId == i.id || e.brightcoveVideoId == "ref:" + i.referenceId);
            r.length > 0 && (o = r[0])
        }
        if (o) {
            let n = o.videoId
              , l = o.multimediaId
              , a = "ads-error" !== r && "ads-ad-error" !== r ? "BrightcoveVideoId--" + o.brightcoveVideoId : e.message + "--" + e.tag
              , d = o.urlMultimedia
              , c = o.title;
            eventData = {
                videoid: n,
                multimediaid: l,
                type: s,
                urlvideo: encodeURIComponent(a),
                urlmultimedia: encodeURIComponent(d),
                title: encodeURIComponent(c),
                site: t.site
            },
            i && sendHit(t.hitsUrl, eventData),
            t.brightcoveConfig.trackAnalytics && sendGAHit(eventData),
            "ads-ad-ended" != e.type && "ads-ad-skipped" != e.type || (eventData.type = "BeforePlay",
            i && sendHit(t.hitsUrl, eventData),
            t.brightcoveConfig.trackAnalytics && sendGAHit(eventData))
        }
    } catch (e) {
        console.log("error " + eventType),
        console.log(e)
    }
}
  , sendHit = function(e, t) {
    $.ajax({
        url: e,
        dataType: "json",
        data: t,
        method: "POST"
    })
}
  , sendGAHit = function(e) {
    try {
        if ("function" == typeof window.ga) {
            if ("undefined" != typeof cofinaAnalytics)
                return void cofinaAnalytics.gaEvent("event", "Video", e.type, e.urlmultimedia);
            ga("send", "event", "Video", e.type, e.urlmultimedia)
        }
    } catch (e) {
        console.log(e)
    }
}
  , translateEventType = function(e) {
    switch (e) {
    case "ads-ad-started":
    case "ads-play":
        return "AdPlay";
    case "ads-ad-ended":
        return "AdComplete";
    case "ads-click":
        return "AdClick";
    case "ads-ad-skipped":
        return "AdSkipped";
    case "ads-request":
        return "AdRequest";
    case "ads-ad-error":
    case "ads-error":
    case "adserror":
        return "AdPlayError";
    case "play":
    case "playing":
        return "VideoPlay";
    case "ended":
        return "VideoComplete";
    default:
        return e
    }
}
  , checkAdBlockerVideos = function() {
    return new Promise((function(e, t) {
        try {
            var i = document.createElement("div");
            i.innerHTML = "&nbsp;",
            i.className = "ads ad adsbox doubleclick ad-placement carbon-ads",
            document.body.appendChild(i),
            setTimeout((function() {
                0 === i.offsetHeight ? (i.parentNode.removeChild(i),
                adBlockerInUse = !0,
                e(!0)) : (i.parentNode.removeChild(i),
                e(!0))
            }
            ), 100)
        } catch (t) {
            e(!0)
        }
    }
    ))
};
Date.prototype.format = function(e) {
    let t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (let i in t)
        new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[i] : ("00" + t[i]).substr(("" + t[i]).length)));
    return e
}
;
var COF = {
    appState: {
        touched: !1,
        uid: !1,
        _setUid: function() {
            COF.appState.uid = COF.createGuid()
        },
        _lastUid: !1
    },
    config: {
        ASYNC_BASE_URL: "/Async/",
        IMG_LOADING: "/Img/ajax-loader.gif",
        COOKIE_SSO: null,
        VOTE_COMMENT_COOKIE: "Vote_Comment_Cookie",
        DENOUNCE_COMMENT_COOKIE: "Denounce_Comment_Cookie",
        CONTAGENS: !0,
        DEBUG: !1,
        SITE_BASE_URL: {
            DEV: null,
            STG: null,
            PROD: null
        },
        environment: function() {
            if (null !== this._environment)
                return this._environment;
            var e = "PROD"
              , t = window.location.hostname;
            return t.indexOf(".stg.") > -1 ? e = "STG" : (t.indexOf(".local.") > -1 || t.indexOf("localhost") > -1) && (e = "DEV"),
            "PROD" === e && (COF.config.DEBUG = !1),
            this._environment = e,
            e
        },
        _environment: null
    },
    isDebuggable: function() {
        var e = !1;
        return COF.config.DEBUG && "PROD" !== COF.config.environment() && (e = !0),
        this._isDebuggable = e,
        e
    },
    _isDebuggable: null,
    addConfigs: function(e) {
        if ("object" == typeof e)
            for (var t in e)
                this.config[t] = e[t];
        COF.appState.touched = !0,
        "PROD" == COF.config.environment() && (COF.config.DEBUG = !1,
        null !== COF.config.SITE_BASE_URL.STG && console.error("O valor SITE_BASE_URL.STG não deve estar configurado para aplicações em produção. Por favor remova."),
        null !== COF.config.SITE_BASE_URL.DEV && console.error("O valor SITE_BASE_URL.DEV não deve estar configurado para aplicações em produção. Por favor remova."))
    },
    content: {
        info: "Faz load das configurações da página",
        PRIMARY_AREA_NAME: "HOMEPAGE",
        where: function() {
            if (null !== COF.content._where && !1 !== COF.appState.touched)
                return COF.content._where;
            var e = "HOMEPAGE";
            return void 0 !== COF.content.areaId && void 0 === COF.content.contentID && "HOMEPAGE" !== COF.content.areaName ? e = "CANAL" : void 0 !== COF.content.contentID && "" !== COF.content.contentID && (e = "DETALHE"),
            COF.content._where = e,
            e
        },
        _where: null,
        getAndSetValues: function() {
            COF.content.contentTypeName = $("#hdnContentTypeName").val(),
            COF.content.parentAreaName = $("#hdnParentAreaName").val(),
            COF.content.commentsAreaID = $("#hdnCommentsAreaID").val(),
            COF.content.parentAreaID = $("#hdnParentAreaID").val(),
            COF.content.articleDate = null != $("#hdnDate").val() ? $("#hdnDate").val() : "",
            COF.content.premium = null != $("#hdnIsPremium").val() ? $("#hdnIsPremium").val() : "",
            COF.content.friendlyUrl = null != $("#hdnFriendlyUrl").val() ? $("#hdnFriendlyUrl").val() : "",
            COF.content.contentTitle = null != $("#hdnContentTitle").val() ? $("#hdnContentTitle").val() : "",
            COF.content.contentDimension = null != $("#hdnContentDimensionValue").val() ? $("#hdnContentDimensionValue").val() : "",
            COF.content.homepageID = 9,
            "undefined" != typeof $_fields && (COF.content.areaId = $_fields.AreaID,
            COF.content.areaName = $_fields.AreaName,
            COF.content.contentID = $_fields.ContentID,
            COF.content.friendlyPath = $_fields.FriendlyPath,
            COF.content.contentTypeName = $_fields.ContentTypeName,
            COF.content.contentUrl = $_fields.ContentUrl)
        }
    },
    routes: {},
    addRoutes: function(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                e.hasOwnProperty(n) && (this.routes[n] = !0 === t ? this.routes.baseUrl + e[n] : e[n])
    },
    loading: function(e) {
        var t = COF.config.IMG_LOADING;
        e.hasClass("loading_") ? (e.html(""),
        e.removeClass("loading_")) : (e.html('<img src="' + t + '" border="0" style="text-align: center;" />'),
        e.addClass("loading_"))
    },
    cookies: {
        get: function(e, t) {
            for (var n = "", i = e + "=", a = document.cookie.split(";"), o = 0; o < a.length; o++) {
                for (var s = a[o]; " " == s.charAt(0); )
                    s = s.substring(1, s.length);
                0 == s.indexOf(i) && (n = s.substring(i.length, s.length))
            }
            return !t || COF.validate.isNullOrEmpty(n) || COF.validate.isNullOrEmpty(n) ? t || COF.validate.isNullOrEmpty(n) ? null : n : decodeURIComponent(n).replace(new RegExp(/\+/g), " ")
        },
        getPreferingLocalStorage: function(e, t) {
            if (!window.localStorage)
                return COF.cookies.get(e, t);
            var n = window.localStorage.getItem(e);
            return t && !COF.validate.isNullOrEmpty(n) ? decodeURIComponent(n).replace(new RegExp(/\+/g), " ") : t || COF.validate.isNullOrEmpty(n) ? null : n
        },
        set: function(e, t, n, i) {
            var a = ""
              , o = new Date;
            n ? null != n ? (o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
            a = "; expires=" + o.toGMTString()) : a = ";" : i ? null != i ? (o.setTime(o.getTime() + 60 * i * 1e3),
            a = "; expires=" + o.toGMTString()) : a = ";" : a = "",
            document.cookie = e + "=" + t + a + "; path=/"
        },
        setPreferingLocalStorage: function(e, t, n, i) {
            if (!window.localStorage)
                return COF.cookies.set(e, t, n, i);
            localStorage.setItem(e, t)
        }
    },
    validate: {
        isNullOrEmpty: function(e) {
            return void 0 === e || (null == e || ("undefined" == e || "" == e))
        },
        isEmail: function(e) {
            var t = String(e)
              , n = t.indexOf("@")
              , i = t.lastIndexOf(".");
            return !(n < 1 || i < n + 2 || i + 2 >= t.length)
        }
    },
    countCharacters: function(e, t, n) {
        var i = e.replace("#", "");
        $(document).on("keyup", "[id^=" + i + "]", (function() {
            rest = n - $(this).val().length,
            $(t + $(this).attr("id").replace(i, "")).text("Faltam " + rest + " caracteres"),
            rest <= 0 && $(this).val($(this).val().substring(0, n))
        }
        ))
    },
    messages: function(e, t, n) {
        t.html(""),
        t.attr("class", ""),
        "error" == e && t.addClass("msgErro"),
        "success" == e && t.addClass("msgSucesso");
        for (var i = 0; i < n.length; i++)
            t.append(n[i])
    },
    getParameterByName: function(e) {
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
        return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    },
    isUserLoggedIn: function() {
        return COF.config.DEBUG && "PROD" != COF.config.environment() && null == COF.config.COOKIE_SSO && console.warn("O valor para COOKIE_SSO não está definido, Adicione as configurações"),
        null !== COF.cookies.get(COF.config.COOKIE_SSO, !0)
    },
    getLoggedUserJSON: function() {
        return this.isUserLoggedIn() ? $.parseJSON(COF.cookies.get(COF.config.COOKIE_SSO, !0)) : null
    },
    social: {
        config: {
            useFacebookShareLink: !0,
            width: 575,
            height: 400,
            providers: {
                FACEBOOK: {
                    useFacebookShareLink: !0,
                    url: "https://www.facebook.com/sharer/sharer.php?u="
                },
                TWITTER: {
                    url: "https://twitter.com/share",
                    screenName: ""
                },
                GOOGLE_PLUS: {
                    url: "https://plus.google.com/share?url="
                },
                PINTREST: {
                    url: "https://pt.pinterest.com/pin/create/link/?url="
                },
                LINKEDIN: {
                    url: "https://www.linkedin.com/shareArticle?mini=true&url="
                },
                WHATSAPP: {
                    url: "whatsapp://send?text="
                }
            }
        },
        boxShare: function() {
            var e = ($(window).width() - this.config.width) / 2
              , t = ($(window).height() - this.config.height) / 2;
            return ",width=" + this.config.width + ",height=" + this.config.height + ",top=" + t + ",left=" + e
        },
        _guard: function(e) {
            e || COF.warn("Defina a url a ser partilhado")
        },
        facebookShare: function(e, t, n) {
            this._guard(e),
            !0 === this.config.providers.FACEBOOK.useFacebookShareLink ? window.open(this.config.providers.FACEBOOK.url + e, "facebook", this.boxShare()) : void 0 !== t && void 0 !== n ? FB.ui({
                method: "feed",
                name: t,
                link: e,
                description: n
            }, (function(e) {}
            )) : FB.ui({
                method: "share",
                display: "popup",
                href: e
            }, (function(e) {}
            ))
        },
        twitterShare: function(e, t) {
            this._guard(e);
            var n = this.config.providers.TWITTER.url;
            return "" !== this.config.providers.TWITTER.screenName ? n += "?via=" + this.config.providers.TWITTER.screenName : n += "?not=1",
            void 0 !== t && null != t && "" != t && (n += "&text=" + encodeURIComponent(t)),
            n = (n += "&url=" + e).replace("??", "?"),
            window.open(n, "twitter", this.boxShare()),
            COF.contagens.HitAndShare(COF.contentID, COF.areaId, "", "", "twitter", e),
            !1
        },
        googlePlus: function(e) {
            this._guard(e),
            COF.validate.isNullOrEmpty(e) || window.open(this.config.providers.GOOGLE_PLUS.url + e, "google plus", this.boxShare())
        },
        pintRestShare: function(e, t) {
            return this._guard(e),
            window.open(this.config.providers.PINTREST.url + e + "&media=" + t, "pintrest", this.boxShare()),
            COF.contagens.HitAndShare(COF.contentID, COF.areaId, "", "", "pintrest", e),
            !1
        },
        whatsApp: function(e) {
            this._guard(e);
            var t = encodeURIComponent(e)
              , n = this.config.providers.WHATSAPP.url + t;
            window.location.href = n,
            COF.contagens.HitAndShare(COF.contentID, COF.areaId, "", "", "whatsapp", e)
        },
        linkedInShare: function(e) {
            this._guard(e),
            COF.validate.isNullOrEmpty(e) || window.open(this.config.providers.LINKEDIN.url + encodeURIComponent(e), "linkedin", this.boxShare())
        }
    },
    comments: {
        initialContent: 0,
        nContents: 10,
        GetComments: function(e) {
            console.log("non implemented")
        },
        Add: function(e) {
            if (0 == COF.content.areaId.length || null == COF.content.areaId || "" == COF.content.areaId || 0 == COF.content.contentID.length)
                return "";
            var t = COF.getLoggedUserJSON()
              , n = []
              , i = null != t ? t.Email : ""
              , a = null != t ? t.Username : ""
              , o = ""
              , s = ""
              , r = "";
            return e ? (s = $("#commentsErrors_" + e),
            r = e,
            o = $("#resposta_" + e)) : (s = $("#commentsErrors_"),
            r = null,
            o = $("#comentar")),
            COF.validate.isNullOrEmpty(o.val()) ? (n.push("Insira o seu comentário."),
            void COF.comments.Messages("error", s, n)) : null == t ? (n.push('Faça <a class="link_url" href="javascript:;" onclick="CofinaSSOApi.gotoLogin();"><b><u>aqui</u></b></a> o seu login.'),
            void COF.comments.Messages("error", s, n)) : ($("#respostaCont_" + e).show(),
            void $.ajax({
                url: COF.routes.ADD_COMMENT,
                data: {
                    Message: o.val(),
                    ContentID: COF.content.contentID,
                    AreaID: COF.content.areaId,
                    ContentTypeName: COF.content.contentTypeName,
                    commentID: r,
                    Email: i,
                    UserName: a
                },
                cache: !1
            }).done((function(t) {
                if ("" != t) {
                    n.push("Comentário enviado com sucesso!"),
                    COF.comments.Messages("success", s, n),
                    o.val("");
                    var i = $("#CommentsMaxLength").val() || 300;
                    e ? $("#caracteres_" + e).text("Faltam " + i + " caracteres") : $("#caracteres_").text("Faltam " + i + " caracteres")
                } else
                    try {
                        if (t.length > 0 && t[0].Message) {
                            for (var a = 0; a < t.length; a++)
                                n.push(t[a].Message + "<br/>");
                            return void COF.comments.Messages("error", s, n)
                        }
                    } catch (e) {
                        n.push("Não foi possível enviar o seu comentário. Por favor tente novamente."),
                        COF.comments.Messages("error", s, n)
                    }
            }
            )))
        },
        OpenResponseBox: function(e) {
            $("#boxResponseId_" + e).slideToggle(),
            $("#resposta_" + e).focus();
            var t = $("#CommentsMaxLength").val() || 300;
            COF.countCharacters("#resposta_" + e, "#caracteres_" + e, t)
        },
        Denounce: function(e) {
            $.ajax({
                url: COF.routes.REPORT_COMMENT,
                data: {
                    commentID: e
                },
                cache: !1,
                type: "POST"
            }),
            $("#den_" + e).show(),
            $("#containerDen_" + e).text("Obrigado")
        },
        Messages: function(e, t, n) {
            t.html(""),
            t.attr("class", ""),
            "error" == e && t.addClass("msgErro"),
            "success" == e && t.addClass("msgSucesso"),
            t.addClass("comentariosRemain01");
            for (var i = "", a = 0; a < n.length; a++)
                i += n[a] + "<br/>";
            t.html(i)
        },
        Scroll: function() {
            $("html,body").animate({
                scrollTop: $(".finalNoticia").offset().top - 200
            }, 500),
            setTimeout((function() {
                $(".comentariosMain").fadeIn(500),
                $(".comentar").focus()
            }
            ), 800)
        },
        Vote: function(e, t, n) {
            var i = COF.cookies.get(COF.config.VOTE_COMMENT_COOKIE, !0);
            if (null != i && i.length > 0 && -1 != String(i).indexOf("|" + e + "|"))
                return !1;
            $.ajax({
                url: COF.routes.VOTE_COMMENT,
                data: {
                    commentID: e,
                    positive: t,
                    negative: n
                },
                cache: !1,
                type: "POST"
            }).done((function(t) {
                $("#voteContainer_" + e).hide(),
                $("#voto_" + e).show()
            }
            ))
        },
        GetMoreComments: function(e, t, n) {
            return COF.loading(e),
            $(this).hide(),
            $.ajax({
                url: COF.routes.GET_COMMENTS,
                data: {
                    contentID: COF.content.contentID,
                    areaID: COF.content.areaId,
                    contentTypeName: COF.content.contentTypeName,
                    first: COF.comments.initialContent,
                    nResult: COF.comments.nContents
                },
                type: "POST",
                dataType: "html",
                cache: !1
            }).done((function(i) {
                COF.loading(e),
                COF.validate.isNullOrEmpty(i) || (n.remove(),
                t.append(i),
                COF.comments.initialContent += COF.comments.nContents)
            }
            )),
            !1
        },
        hideVotedAndDenouncedComments: function() {
            function e(e, t) {
                0 != t.length && $(t).each((function() {
                    COF.validate.isNullOrEmpty(this.toString()) || $(e + this.toString()).hide()
                }
                ))
            }
            var t = COF.cookies.get(COF.config.VOTE_COMMENT_COOKIE, !0)
              , n = COF.cookies.get(COF.config.DENOUNCE_COMMENT_COOKIE, !0);
            COF.validate.isNullOrEmpty(t) || e("#voteContainer_", t.split("|")),
            COF.validate.isNullOrEmpty(n) || e("#containerDen_", n.split("|"))
        },
        page: 1
    },
    contagens: {
        config: {
            AnalyticsIdentifier: null,
            PiwikSiteId: 0,
            NetscopeGemiusIdentifier: null
        },
        runtime: {
            GaCustomUrl: null,
            PiwikUrlPagetitle: null,
            PiwikUrl: null,
            PiwikContentType: null,
            PiwikPremium: null,
            NetscopeEvent: null
        },
        InitGoogleAnalyticsOnLoad: function(e) {
            if ("undefined" == typeof cofinaAnalytics) {
                var t, n, i, a, o, s;
                COF.contagens.config.AnalyticsIdentifier = e,
                t = window,
                n = document,
                i = "script",
                a = "ga",
                t.GoogleAnalyticsObject = a,
                t.ga = t.ga || function() {
                    (t.ga.q = t.ga.q || []).push(arguments)
                }
                ,
                t.ga.l = 1 * new Date,
                o = n.createElement(i),
                s = n.getElementsByTagName(i)[0],
                o.async = 1,
                o.src = "https://www.google-analytics.com/analytics.js",
                s.parentNode.insertBefore(o, s),
                ga("create", COF.contagens.config.AnalyticsIdentifier, "auto");
                var r = COF.getLoggedUserJSON()
                  , l = void 0 !== typeof r && null != r ? r.ID : "";
                COF.validate.isNullOrEmpty(l) || isNaN(l) || (ga("set", "userId", l),
                void 0 !== GlobalVariables.googleAnalytics && void 0 !== GlobalVariables.googleAnalytics.dimension && "" != GlobalVariables.googleAnalytics.dimension && ga("set", GlobalVariables.googleAnalytics.dimension, l)),
                COF.validate.isNullOrEmpty(COF.content.contentDimension) || void 0 !== GlobalVariables.googleAnalytics && void 0 !== GlobalVariables.googleAnalytics.contentDimension && "" != GlobalVariables.googleAnalytics.contentDimension && ga("set", GlobalVariables.googleAnalytics.contentDimension, COF.content.contentDimension);
                var d = $("meta[name='keywords']");
                void 0 !== d && (d = d.attr("content")),
                void 0 !== d && ga("set", "tags", d)
            } else
                console.warn("InitGoogleAnalyticsOnLoad is deprecated")
        },
        PageViewOnGoogleAnalytics: function(e) {
            "undefined" != typeof ga && ("undefined" == typeof cofinaAnalytics ? (this.runtime.GaCustomUrl = e,
            "" !== e ? ga("send", "pageview", e) : ga("send", "pageview"),
            COF.log("PageViewOnGoogleAnalytics", arguments)) : console.warn("PageViewOnGoogleAnalytics is deprecated"))
        },
        EventOnGoogleAnalytics: function(e, t, n, i, a) {
            "undefined" != typeof ga && ("undefined" == typeof cofinaAnalytics ? (void 0 !== a ? ga("send", e, t, n, i, a) : void 0 !== n && void 0 !== i ? ga("send", e, t, n, i) : void 0 !== n ? ga("send", e, t, n) : ga("send", e, t),
            COF.log("EventOnGoogleAnalytics", arguments)) : console.warn("EventOnGoogleAnalytics is deprecated"))
        },
        InitPiwikOnLoad: function(e, t) {
            if (!COF.validate.isNullOrEmpty(e) && !COF.validate.isNullOrEmpty(GlobalVariables.piwik))
                if ("undefined" == typeof cofinaAnalytics) {
                    COF.contagens.config.PiwikSiteId = e,
                    _paq.push(["setCookieDomain", t]);
                    var n = COF.getLoggedUserJSON()
                      , i = void 0 !== typeof n && null != n ? n.ID : "";
                    COF.validate.isNullOrEmpty(i) || isNaN(i) || _paq.push(["setUserId", i]),
                    COF.validate.isNullOrEmpty(COF.content.contentDimension) || void 0 !== GlobalVariables.piwik && void 0 !== GlobalVariables.piwik.contentDimension && "" != GlobalVariables.piwik.contentDimension && _paq.push(["setCustomDimension", customDimensionId = GlobalVariables.piwik.contentDimension, customDimensionValue = COF.content.contentDimension]),
                    _paq.push(["enableLinkTracking"]),
                    function() {
                        var e = ("https:" == document.location.protocol ? "https" : "http") + "://analytics.xl.pt/";
                        _paq.push(["setTrackerUrl", e + "piwik.php"]),
                        _paq.push(["setSiteId", COF.contagens.config.PiwikSiteId]);
                        var t = document
                          , n = t.createElement("script")
                          , i = t.getElementsByTagName("script")[0];
                        n.type = "text/javascript",
                        n.defer = !0,
                        n.async = !0,
                        n.src = "//js.xl.pt/piwik.js",
                        i.parentNode.insertBefore(n, i)
                    }(),
                    COF.log("InitPiwikOnLoad", arguments)
                } else
                    console.warn("InitPiwikOnLoad is deprecated")
        },
        EventOnPiwik: function(e, t, n, i) {
            if (!COF.validate.isNullOrEmpty(t))
                if ("undefined" == typeof cofinaAnalytics) {
                    this.runtime.PiwikUrlPagetitle = e,
                    this.runtime.PiwikUrl = t,
                    this.runtime.PiwikContentType = n,
                    this.runtime.PiwikPremium = i;
                    var a = -1 == t.indexOf("PIWIK_TYPE") ? t : t.replace("PIWIK_TYPE", n)
                      , o = -1 == e.indexOf("PIWIK_TYPE") ? e : e.replace("PIWIK_TYPE", n);
                    _paq.push(["setDocumentTitle", o]),
                    _paq.push(["setCustomUrl", a]);
                    var s = $("meta[name='keywords']");
                    void 0 !== s && (s = s.attr("content")),
                    void 0 !== s && _paq.push(["setCustomVariable", "2", "Tags", s]),
                    void 0 !== i && "" != i && _paq.push(["setCustomVariable", "1", "Premium", i]),
                    _paq.push(["trackPageView"]),
                    COF.log("EventOnPiwik", arguments)
                } else
                    console.warn("EventOnPiwik is deprecated")
        },
        InitNetscopeOnLoad: function(e) {
            if ("undefined" == typeof cofinaAnalytics) {
                if (COF.contagens.config.NetscopeGemiusIdentifier = e,
                "undefined" == typeof gemius_pending) {
                    var t = function(e) {
                        window[e] = window[e] || function() {
                            var t = window[e + "_pdata"] = window[e + "_pdata"] || [];
                            t[t.length] = arguments
                        }
                    };
                    t("gemius_hit"),
                    t("gemius_event"),
                    t("pp_gemius_hit"),
                    t("pp_gemius_event"),
                    function(e, t) {
                        try {
                            var n = e.createElement(t)
                              , i = e.getElementsByTagName(t)[0]
                              , a = "http" + ("https:" == location.protocol ? "s" : "");
                            n.async = "true",
                            n.src = a + "://gapt.hit.gemius.pl/xgemius.js",
                            i.parentNode.insertBefore(n, i)
                        } catch (e) {}
                    }(document, "script"),
                    COF.log("InitNetscopeOnLoad", arguments)
                }
            } else
                console.warn("InitNetscopeOnLoad is deprecated")
        },
        EventOnNetscope: function(e) {
            if ("undefined" == typeof cofinaAnalytics) {
                this.runtime.NetscopeEvent = e;
                var t = new Array("gA=" + e);
                window.pp_gemius_hit && (pp_gemius_hit(COF.contagens.config.NetscopeGemiusIdentifier, t[0]),
                COF.log("HitOnGoogleAnalytics", arguments))
            } else
                console.warn("EventOnNetscope is deprecated")
        },
        RefreshAllAnalytics: function() {
            "undefined" != typeof cofinaAnalytics ? cofinaAnalytics.refresh() : (this.PageViewOnGoogleAnalytics(this.runtime.GaCustomUrl),
            this.EventOnNetscope(this.runtime.NetscopeEvent),
            this.EventOnPiwik(this.runtime.PiwikUrlPagetitle, this.runtime.PiwikUrl, this.runtime.PiwikContentType, this.runtime.PiwikPremium),
            this.HitAndShare(COF.content.contentID, COF.content.areaId, COF.content.contentTypeName, "HITS", "", COF.content.contentUrl))
        },
        HitAndShare: function(e, t, n, i, a, o) {
            if ("undefined" != typeof CofinaHits) {
                try {
                    o == window.top.location && window.top.location.href && (o = window.top.location.href)
                } catch (e) {}
                if (COF.validate.isNullOrEmpty(n) && (n = this.contentTypeName),
                (!e || "" == e) && null != COF.content.contentID && COF.content.contentID.length > 0 && "" != COF.content.contentID && (e = COF.content.contentID),
                e && "" != e)
                    switch (a) {
                    case "twitter":
                    case "facebook":
                        CofinaHits.share(e, n, i, o);
                        break;
                    default:
                        CofinaHits.hit(e, n, t, null, i, o)
                    }
            } else
                console.log("cof hits not defined")
        }
    },
    videoHandler: {
        addVideoWithJson: function e(t, n, i, a, o) {
            if ((!t || t.length < 1) && COF.warn("Parametro videoJsonConfig não pode ser null."),
            COF.validate.isNullOrEmpty(t[0].file) && COF.validate.isNullOrEmpty(t[0].brightcoveVideoId) && COF.validate.isNullOrEmpty(t[0].brightcoveVideoFilename) && COF.warn("Parametro videoJsonConfig[i].file ou videoJsonConfig[i].brightcoveVideoId ou videoJsonConfig[i].brightcoveVideoFilename têm de estar preenchidos."),
            !COF.validate.isNullOrEmpty(t[0].brightcoveVideoId) && COF.validate.isNullOrEmpty(o.brightcoveIdTranslatorUrl) && COF.warn("Parametro videoPlayerObj.brightcoveIdTranslatorUrl não pode ser null."),
            !COF.validate.isNullOrEmpty(t[0].brightcoveVideoFilename) && COF.validate.isNullOrEmpty(o.brightcoveIdTranslatorUrl) && COF.warn("Parametro videoPlayerObj.brightcoveIdTranslatorUrl não pode ser null."),
            !COF.validate.isNullOrEmpty(t[0].brightcoveVideoId))
                return t.map(e=>{
                    let t = window.btoa(Math.random().toString(36).substring(7) + "|" + e.brightcoveVideoId + "|" + (new Date).getTime())
                      , n = o.brightcoveIdTranslatorUrl + t;
                    return fetch(n, {
                        method: "get",
                        cache: "no-cache"
                    }).then(e=>e.text()).then((function(t) {
                        COF.validate.isNullOrEmpty(e.brightcoveVideoId) || (e.file = t,
                        e.brightcoveVideoId = "")
                    }
                    ))
                }
                ).reduce((e,t)=>e.then(e=>t.then(t=>[...e, t])), Promise.resolve([])).then(s=>{
                    e(t, n, i, a, o)
                }
                );
            if (!COF.validate.isNullOrEmpty(t[0].brightcoveVideoFilename))
                return t.map(e=>{
                    let t = o.brightcoveIdTranslatorUrl.replace("videourlbyid", "videourlbyfilename") + e.brightcoveVideoFilename;
                    return fetch(t, {
                        method: "get",
                        cache: "no-cache"
                    }).then(e=>e.text()).then((function(t) {
                        COF.validate.isNullOrEmpty(e.brightcoveVideoFilename) || (e.file = t,
                        e.brightcoveVideoFilename = "")
                    }
                    ))
                }
                ).reduce((e,t)=>e.then(e=>t.then(t=>[...e, t])), Promise.resolve([])).then(s=>{
                    e(t, n, i, a, o)
                }
                );
            if (COF.validate.isNullOrEmpty(t[0].image) && COF.warn("Parametro videoJsonConfig[i].image não pode ser null."),
            COF.validate.isNullOrEmpty(o))
                COF.warn("Parametro videoPlayerObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(o.jwPlayerKey))
                COF.warn("Campo videoPlayerObj.jwPlayerKey não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n))
                COF.warn("Parametro containerId não pode ser null.");
            else {
                var s = (new VideoPlayer).setJwPlayerKey(o.jwPlayerKey).setHitsUrl(o.hitsUrl).setTrackAnalytics(o.trackAnalytics).setPublicationId(o.publicationId).setSite(o.site).setAutostart(a);
                COF.validate.isNullOrEmpty(o.stretching) ? s.setStretching("exactfit") : s.setStretching(o.stretching),
                COF.validate.isNullOrEmpty(o.aspectRatio) || s.setAspectRatio(o.aspectRatio),
                null != o.isToDisplayTitle && void 0 !== o.isToDisplayTitle && s.setDisplayTitle(o.isToDisplayTitle),
                COF.validate.isNullOrEmpty(o.relatedVideos) || COF.validate.isNullOrEmpty(o.relatedVideosText) || s.addRelatedVideos(o.relatedVideos, o.relatedVideosText),
                "1" != i && void 0 !== o.advertising && null != o.advertising && (COF.validate.isNullOrEmpty(o.advertising.type) ? s.setAdvertising("googima") : s.setAdvertising(o.advertising.type),
                $.each(o.advertising.schedules, (function(e, t) {
                    var n = t.tag;
                    if ("1" === COF.getParameterByName("teste") && (n = t.tagTeste),
                    n.indexOf("[SECCAO]") > -1) {
                        var i = $("meta[name=keywords]").attr("content");
                        COF.validate.isNullOrEmpty(i) && (i = COF.content.areaName),
                        COF.validate.isNullOrEmpty(i) && (i = $("#hdnAreaName").val()),
                        COF.validate.isNullOrEmpty(i) || (n = n.replace("[SECCAO]", encodeURIComponent(i.replace(/,\s/g, ","))))
                    }
                    s.addAdvertisingTagAndOffset(t.offset, n)
                }
                ))),
                $.each(t, (function(e, t) {
                    s.addVideoWithJson(t)
                }
                )),
                this.createPlayer(s, n)
            }
        },
        addVideo: function(e, t, n, i, a) {
            COF.warn("COF.videoHandler.addVideo is deprecated! Please use addVideoWithJson instead.")
        },
        addLivestream: function(e, t, n, i, a, o, s) {
            if (COF.validate.isNullOrEmpty(e))
                COF.warn("Parametro livestreamUrl não pode ser null.");
            else if (COF.validate.isNullOrEmpty(a))
                COF.warn("Parametro videoPlayerObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(a.jwPlayerKey))
                COF.warn("Campo videoPlayerObj.jwPlayerKey não pode ser null.");
            else if (COF.validate.isNullOrEmpty(t))
                COF.warn("Parametro containerId não pode ser null.");
            else {
                var r = (new VideoPlayer).setJwPlayerKey(a.jwPlayerKey).setHitsUrl(a.hitsUrl).setPublicationId(a.publicationId).setAutostart(i);
                "1" != n && void 0 !== a.advertising && null != a.advertising && (COF.validate.isNullOrEmpty(a.advertising.type) ? r.setAdvertising("googima") : r.setAdvertising(a.advertising.type),
                $.each(a.advertising.schedules, (function(e, t) {
                    var n = t.tag;
                    if ("1" === COF.getParameterByName("teste") && (n = t.tagTeste),
                    n.indexOf("[SECCAO]") > -1) {
                        var i = $("meta[name=keywords]").attr("content");
                        COF.validate.isNullOrEmpty(i) && (i = COF.content.areaName),
                        COF.validate.isNullOrEmpty(i) && (i = $("#hdnAreaName").val()),
                        COF.validate.isNullOrEmpty(i) || (n = n.replace("[SECCAO]", encodeURIComponent(i.replace(/,\s/g, ","))))
                    }
                    r.addAdvertisingTagAndOffset(t.offset, n)
                }
                ))),
                r.addLivestream(e, o, s),
                this.createPlayer(r, t)
            }
        },
        addBrightcoveVideoWithJson: function(e, t, n, i, a, o) {
            if ((!e || e.length < 1) && COF.warn("Parametro videoJsonConfig não pode ser null."),
            COF.validate.isNullOrEmpty(e[0].brightcoveVideoId) && COF.warn("Parametro videoJsonConfig[i].brightcoveVideoId não pode ser null."),
            COF.validate.isNullOrEmpty(n))
                COF.warn("Parametro videoPlayerObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n.accountId))
                COF.warn("Campo videoPlayerObj.accountId não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n.playersDict))
                COF.warn("Campo videoPlayerObj.playersDict não pode ser null.");
            else if (COF.validate.isNullOrEmpty(t))
                COF.warn("Parametro containerId não pode ser null.");
            else {
                var s = (new BrightcovePlayer).setBrightcoveKey(n.accountId, n.playersDict).setHitsUrl(n.hitsUrl).setPublicationId(n.publicationId).setSite(n.site);
                if (!0 !== a && 1 !== a && "1" !== a || s.setAutostart(!0),
                void 0 !== n.externalAssets && null != n.externalAssets && n.externalAssets.length > 0 && s.setExternalAssetsUrl(n.externalAssets),
                void 0 !== o && null != o && "" !== o && s.setVideoCssClasses(o),
                s.setTrackAnalytics(n.trackAnalytics),
                null != n.isToDisplayTitle && void 0 !== n.isToDisplayTitle && s.setDisplayTitle(n.isToDisplayTitle),
                COF.validate.isNullOrEmpty(n.relatedVideos) || COF.validate.isNullOrEmpty(n.relatedVideosText) || s.addRelatedVideos(n.relatedVideos, n.relatedVideosText),
                !(!0 === i || 1 === i || "1" === i) && void 0 !== n.advertising && null != n.advertising && !COF.validate.isNullOrEmpty(n.advertising.serverUrl)) {
                    var r = JSON.parse(JSON.stringify(n.advertising))
                      , l = r.serverUrl;
                    if ("1" === COF.getParameterByName("teste") && (l = r.serverUrlTests),
                    l.indexOf("[SECCAO]") > -1) {
                        var d = $("meta[name=keywords]").attr("content");
                        COF.validate.isNullOrEmpty(d) && (d = COF.content.areaName),
                        COF.validate.isNullOrEmpty(d) && (d = $("#hdnAreaName").val()),
                        COF.validate.isNullOrEmpty(d) || (l = l.replace("[SECCAO]", encodeURIComponent(d.replace(/,\s/g, ","))))
                    }
                    r.serverUrl = l,
                    s.setAdvertising(r)
                }
                $.each(e, (function(e, t) {
                    s.addVideoWithJson(t)
                }
                )),
                this.createPlayer(s, t)
            }
        },
        addBrightcoveLivestreamWithJson: function(e, t, n, i, a, o) {
            (!e || e.length < 1) && COF.warn("Parametro videoJsonConfig não pode ser null.");
            for (var s = 0; s < e.length; s++)
                e[s].isLivestream = !0;
            return this.addBrightcoveVideoWithJson(e, t, n, i, a, o)
        },
        addBrightcoveVideoFromExternalSource: function(e, t, n, i, a, o, s) {
            if (COF.validate.isNullOrEmpty(e) && COF.warn("Parametro videoUrl não pode ser null."),
            COF.validate.isNullOrEmpty(i))
                COF.warn("Parametro videoPlayerObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(i.accountId))
                COF.warn("Campo videoPlayerObj.accountId não pode ser null.");
            else if (COF.validate.isNullOrEmpty(i.playersDict))
                COF.warn("Campo videoPlayerObj.playersDict não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n))
                COF.warn("Parametro containerId não pode ser null.");
            else {
                var r = (new BrightcovePlayer).setBrightcoveKey(i.accountId, i.playersDict).setHitsUrl(i.hitsUrl).setPublicationId(i.publicationId).setSite(i.site);
                if (!0 !== o && 1 !== o && "1" !== o || r.setAutostart(!0),
                void 0 !== i.externalAssets && null != i.externalAssets && i.externalAssets.length > 0 && r.setExternalAssetsUrl(i.externalAssets),
                void 0 !== s && null != s && "" !== s && r.setVideoCssClasses(s),
                r.setTrackAnalytics(i.trackAnalytics),
                null != i.isToDisplayTitle && void 0 !== i.isToDisplayTitle && r.setDisplayTitle(i.isToDisplayTitle),
                COF.validate.isNullOrEmpty(i.relatedVideos) || COF.validate.isNullOrEmpty(i.relatedVideosText) || r.addRelatedVideos(i.relatedVideos, i.relatedVideosText),
                !(!0 === a || 1 === a || "1" === a) && void 0 !== i.advertising && null != i.advertising && !COF.validate.isNullOrEmpty(i.advertising.serverUrl)) {
                    var l = JSON.parse(JSON.stringify(i.advertising))
                      , d = l.serverUrl;
                    if ("1" === COF.getParameterByName("teste") && (d = l.serverUrlTests),
                    d.indexOf("[SECCAO]") > -1) {
                        var c = $("meta[name=keywords]").attr("content");
                        COF.validate.isNullOrEmpty(c) && (c = COF.content.areaName),
                        COF.validate.isNullOrEmpty(c) && (c = $("#hdnAreaName").val()),
                        COF.validate.isNullOrEmpty(c) || (d = d.replace("[SECCAO]", encodeURIComponent(c.replace(/,\s/g, ","))))
                    }
                    l.serverUrl = d,
                    r.setAdvertising(l)
                }
                r.addExternalSourceVideo(e, t, null),
                this.createPlayer(r, n)
            }
        },
        createPlayer: function(e, t) {
            if (window.cofSSOInitScripts && window.cofSSOInitScripts.cmpLoaded && window.cofSSOInitScripts.cmpLoaded()) {
                if (e.cofCreated)
                    return;
                e.cofCreated = !0,
                e.create(t)
            } else
                window.cofSSOInitScripts ? window.cofSSOInitScripts.push({
                    cmpLoadedEventListners: function() {
                        e.cofCreated || (console.log("Creating video player after CMP consent."),
                        e.cofCreated = !0,
                        e.create(t))
                    }
                }) : (e.cofCreated = !0,
                e.create(t));
            setTimeout((function() {
                e.cofCreated || (console.log("Creating video player as fallback."),
                e.cofCreated = !0,
                e.create(t))
            }
            ), 1e4)
        }
    },
    podcastHandler: {
        addPodcast: function e(t, n, i, a, o) {
            if (COF.validate.isNullOrEmpty(t) || t.length < 1)
                COF.warn("Parametro podcastModelObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(o))
                COF.warn("Parametro podcastPlayerObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(o.jwPlayerKey))
                COF.warn("Campo podcastPlayerObj.jwPlayerKey não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n))
                COF.warn("Parametro containerId não pode ser null.");
            else {
                if (COF.validate.isNullOrEmpty(t[0].Video) && COF.validate.isNullOrEmpty(t[0].BrightcoveVideoId) && COF.warn("Parametro podcastModelObj[i].Video ou podcastModelObj[i].brightcoveVideoId ou BrightcoveVideoId têm de estar preenchidos."),
                !COF.validate.isNullOrEmpty(t[0].BrightcoveVideoId) && COF.validate.isNullOrEmpty(o.brightcoveIdTranslatorUrl) && COF.warn("Parametro podcastPlayerObj.brightcoveIdTranslatorUrl não pode ser null."),
                !COF.validate.isNullOrEmpty(t[0].BrightcoveVideoId))
                    return t.map(e=>{
                        let t = window.btoa(Math.random().toString(36).substring(7) + "|" + e.BrightcoveVideoId + "|" + (new Date).getTime())
                          , n = o.brightcoveIdTranslatorUrl + t;
                        return fetch(n, {
                            method: "get",
                            cache: "no-cache"
                        }).then(e=>e.text()).then((function(t) {
                            COF.validate.isNullOrEmpty(e.BrightcoveVideoId) || (e.Video = t,
                            e.BrightcoveVideoId = "")
                        }
                        ))
                    }
                    ).reduce((e,t)=>e.then(e=>t.then(t=>[...e, t])), Promise.resolve([])).then(s=>{
                        e(t, n, i, a, o)
                    }
                    );
                var s = (new VideoPlayer).setJwPlayerKey(o.jwPlayerKey).setHitsUrl(o.hitsUrl).setTrackAnalytics(o.trackAnalytics).setPublicationId(o.publicationId).setSite(o.site).setAutostart(a);
                "1" != i && void 0 !== o.advertising && null != o.advertising && (COF.validate.isNullOrEmpty(o.advertising.type) ? s.setAdvertising("googima") : s.setAdvertising(o.advertising.type),
                $.each(o.advertising.schedules, (function(e, t) {
                    var n = t.tag;
                    if ("1" === COF.getParameterByName("teste") && (n = t.tagTeste),
                    n.indexOf("[SECCAO]") > -1) {
                        var i = $("meta[name=keywords]").attr("content");
                        COF.validate.isNullOrEmpty(i) && (i = COF.content.areaName),
                        COF.validate.isNullOrEmpty(i) && (i = $("#hdnAreaName").val()),
                        COF.validate.isNullOrEmpty(i) || (n = n.replace("[SECCAO]", encodeURIComponent(i.replace(/,\s/g, ","))))
                    }
                    s.addAdvertisingTagAndOffset(t.offset, n)
                }
                ))),
                $.each(t, (function(e, t) {
                    void 0 !== t.Width && void 0 !== t.Height ? s.setSize(t.Width, t.Height) : s.setSize(640, 40),
                    s.addPodcast(t.Title, t.MultimediaTitle, t.MultimediaUrl, t.Video, t.ContentID, t.MultimediaContentId, t.Image, null, t.NotSupportedSource, o.showDownloadButton)
                }
                )),
                s.create(n)
            }
        },
        addBrightcovePodcastWithJson: function(e, t, n, i, a, o) {
            if (COF.validate.isNullOrEmpty(e) || e.length < 1)
                COF.warn("Parametro podcastModelObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n))
                COF.warn("Parametro podcastPlayerObj não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n.accountId))
                COF.warn("Campo podcastPlayerObj.accountId não pode ser null.");
            else if (COF.validate.isNullOrEmpty(n.playersDict))
                COF.warn("Campo podcastPlayerObj.playersDict não pode ser null.");
            else if (COF.validate.isNullOrEmpty(e[0].brightcoveVideoId) && COF.warn("Parametro podcastModelObj[i].brightcoveVideoId não pode ser null."),
            COF.validate.isNullOrEmpty(t))
                COF.warn("Parametro containerId não pode ser null.");
            else {
                var s = (new BrightcovePlayer).setBrightcoveKey(n.accountId, n.playersDict).setHitsUrl(n.hitsUrl).setPublicationId(n.publicationId).setSite(n.site);
                if (!0 !== a && 1 !== a && "1" !== a || s.setAutostart(!0),
                void 0 !== n.externalAssets && null != n.externalAssets && n.externalAssets.length > 0 && s.setExternalAssetsUrl(n.externalAssets),
                void 0 !== o && null != o && "" !== o && s.setVideoCssClasses(o),
                s.setTrackAnalytics(n.trackAnalytics),
                !(!0 === i || 1 === i || "1" === i) && void 0 !== n.advertising && null != n.advertising && !COF.validate.isNullOrEmpty(n.advertising.serverUrl)) {
                    var r = JSON.parse(JSON.stringify(n.advertising))
                      , l = r.advertising.serverUrl;
                    if ("1" === COF.getParameterByName("teste") && (l = item.tagTeste),
                    l.indexOf("[SECCAO]") > -1) {
                        var d = $("meta[name=keywords]").attr("content");
                        COF.validate.isNullOrEmpty(d) && (d = COF.content.areaName),
                        COF.validate.isNullOrEmpty(d) && (d = $("#hdnAreaName").val()),
                        COF.validate.isNullOrEmpty(d) || (l = l.replace("[SECCAO]", encodeURIComponent(d.replace(/,\s/g, ","))))
                    }
                    r.advertising.serverUrl = l,
                    s.setAdvertising(r)
                }
                s.addPodcastWithJson(e[0], n.showDownloadButton),
                s.create(t)
            }
        }
    },
    ajax: {
        get: function(e, t, n) {
            if (null != n)
                try {
                    COF.loading(n)
                } catch (e) {}
            return $.when($.ajax({
                url: e,
                data: t,
                method: "GET",
                cache: !1,
                beforeSend: function(e) {}
            })).then((function(e) {
                try {
                    null != n && (n.find(".loading_").remove(),
                    COF.loading(n))
                } catch (e) {}
                return e
            }
            ), (function(e) {
                try {
                    null != n && (n.find(".loading_").remove(),
                    COF.loading(n))
                } catch (e) {}
                return e
            }
            ))
        }
    },
    modal: {
        showModal: function(e, t) {
            var n = $(e)
              , i = $(e + " .modal-body");
            n.off().on("show.bs.modal", (function() {
                var e = Math.floor(100 * Math.random() + 1)
                  , n = "&r=";
                -1 == t.indexOf("?") && (n = "?r="),
                (t = t + n + e).indexOf(".jpg") > -1 || t.indexOf(".jpeg") > -1 || t.indexOf(".png") > -1 ? (i.html('<img src="' + t + '" />'),
                COF.contagens.RefreshAllAnalytics()) : i.load(t, (function() {
                    COF.contagens.RefreshAllAnalytics()
                }
                ))
            }
            )).modal({
                backdrop: !1
            })
        }
    }
}
  , initCOF = function() {
    var e = function() {
        COF.content.getAndSetValues()
    };
    return {
        _run: e(),
        init: e
    }
}();
void 0 === COF.content.PRIMARY_AREA_NAME && COF.log("Deve definir PRIMARY_AREA_NAME");
var Coflog = function() {
    COF.isDebuggable() && console.log.apply(console, arguments)
};
function testPerformance(e, t) {
    var n = performance.now();
    return "function" == typeof e && e(t),
    performance.now() - n
}
COF.log = function() {
    COF.isDebuggable() && console.log.apply(console, arguments)
}
,
COF.warn = function() {
    COF.isDebuggable() && console.warn.apply(console, arguments)
}
,
COF.error = function() {
    COF.isDebuggable() && console.error.apply(console, arguments)
}
,
COF.createGuid = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16)
    }
    ))
}
,
COF.detalhe = function(e, t) {
    "DETALHE" === this.content.where() && COF.container(e, t)
}
,
COF.canal = function(e, t) {
    "CANAL" === this.content.where() && COF.container(e, t)
}
,
COF.homepage = function(e, t) {
    "HOMEPAGE" === this.content.where() && COF.container(e, t)
}
,
COF.container = function(e, t) {
    "function" == typeof t && t()
}
,
COF.galleria = {
    onImageChange: function(e) {
        if ("function" == typeof Galleria)
            if ("function" == typeof e)
                try {
                    Galleria.ready((function() {
                        var t = !1
                          , n = !1;
                        Galleria.on("play", (function(e) {
                            t = !0
                        }
                        )),
                        Galleria.on("pause", (function(e) {
                            t = !1
                        }
                        )),
                        this.bind("image", (function(i) {
                            i.index > 0 && !1 === n && (n = !0),
                            !0 !== n || t || e(i)
                        }
                        ))
                    }
                    ))
                } catch (e) {
                    COF.error(e)
                }
            else
                COF.warn("Galleria is not defined")
    },
    refreshPub: function(e, t, n) {
        if ("object" != typeof e && COF.warn("slotsToRefresh is not defined. Use: ex. [slotMrec, slotMrec2]"),
        void 0 === t && (t = 3),
        "function" == typeof Galleria)
            try {
                Galleria.ready((function() {
                    var i = 0
                      , a = !1;
                    this.bind("image", (function(o) {
                        if (o.index > 0 && !1 === a && (a = !0),
                        !0 === a && i++,
                        i == t) {
                            try {
                                COF.pubApi.refreshPub(e),
                                "function" == typeof n && n(o)
                            } catch (e) {
                                COF.error(e)
                            }
                            i = 0
                        }
                    }
                    ))
                }
                ))
            } catch (e) {
                COF.error(e)
            }
        else
            COF.warn("Galleria is not defined")
    }
},
COF.Publicidade = function() {
    this.config = {
        oopAdUnitPath: "",
        mastheadAdUnitPath: "",
        mrecAdUnitPath: "",
        inContentAdUnitPath: "",
        leaderboardAdUnitPath: "",
        oopSlotName: "",
        mastheadSlotName: "",
        mrecSlotName: "",
        inContentSlotName: "",
        leaderboardSlotName: "",
        mastheadSizes: [],
        mrecSizes: [],
        inContentSizes: [],
        leaderboardSizes: [],
        mastheadCheckSizes: null
    },
    this.slotsMasthead = [],
    this.slotsMrec = [],
    this.slotsInContent = [],
    this.slotsOop = [],
    this.layerSlotName = "",
    this.getSlotName = function(e, t) {
        var n = 0 == t.length ? t : $.grep(t, (function(e) {
            return e.slotName.indexOf("ATF") < 0
        }
        ))
          , i = e.indexOf("ATF") > -1 ? "" : 0 == n.length ? "1" : n.length + 1;
        return e + i
    }
    ,
    this.getSlotNameInContent = function(e, t) {
        return e + (0 == t.length ? "" : t.length)
    }
    ,
    this.pushSlot = function(e, t, n, i, a, o, s) {
        COF.log("defineSlot", [e, t, n, i, o]),
        googletag.cmd.push((function() {
            var r = googletag.defineSlot(e, t, n);
            r && null != r && (i && null != i && null != i.value && i.value.length > 0 && r.setTargeting(i.key, i.value),
            a && null != a && r.defineSizeMapping(a),
            r.addService(googletag.pubads()),
            googletag.display(n),
            s && COF.pubApi.refreshPub([r]),
            o.push({
                slotName: n,
                pubPushed: r
            }))
        }
        ))
    }
}
;
var pubFn = COF.Publicidade.prototype;
pubFn.configPubs = function(e) {
    e.slotNames && (this.config.oopSlotName = e.slotNames.oopSlotName,
    this.config.mastheadSlotName = e.slotNames.mastheadSlotName,
    this.config.mrecSlotName = e.slotNames.mrecSlotName,
    this.config.inContentSlotName = e.slotNames.inContentSlotName,
    this.config.leaderboardSlotName = e.slotNames.leaderboardSlotName),
    e.adUnitPaths && (this.config.oopAdUnitPath = e.adUnitPaths.oopAdUnitPath + e.adUnitPaths.pubTestSuffix,
    this.config.mastheadAdUnitPath = e.adUnitPaths.mastheadAdUnitPath + e.adUnitPaths.pubTestSuffix,
    this.config.mrecAdUnitPath = e.adUnitPaths.mrecAdUnitPath + e.adUnitPaths.pubTestSuffix,
    this.config.inContentAdUnitPath = e.adUnitPaths.inContentAdUnitPath + e.adUnitPaths.pubTestSuffix,
    this.config.leaderboardAdUnitPath = e.adUnitPaths.leaderboardAdUnitPath + e.adUnitPaths.pubTestSuffix),
    e.slotSizes && (this.config.mastheadSizes = e.slotSizes.mastheadSizes,
    this.config.mrecSizes = e.slotSizes.mrecSizes,
    this.config.inContentSizes = e.slotSizes.inContentSizes,
    this.config.leaderboardSizes = e.slotSizes.leaderboardSizes)
}
,
pubFn.configMastheadCheckSizes = function(e) {
    this.config.mastheadCheckSizes = e
}
,
pubFn.renderOOP = function(e) {
    if (e) {
        var t = this.config.oopSlotName;
        e.attr("id", t);
        var n = this.config.oopAdUnitPath
          , i = this.slotsOop;
        COF.log("defineSlot", [n, [], t, "", i]),
        googletag.cmd.push((function() {
            var e = googletag.defineOutOfPageSlot(n, t).addService(googletag.pubads());
            googletag.display(t),
            i.push(e)
        }
        ))
    }
}
,
pubFn.renderMasthead = function(e, t, n, i, a) {
    e && (void 0 === a && (a = !0),
    t || (t = ""),
    n || (n = this.getSlotName(this.config.mastheadSlotName, this.slotsMasthead)),
    0 == this.slotsMasthead.length && (n = "horzATF",
    i = "ATF"),
    e.attr("id", n),
    i || (i = n),
    this.pushSlot(this.config.mastheadAdUnitPath + t, this.config.mastheadSizes, n, {
        key: "pos",
        value: i
    }, this.config.mastheadCheckSizes, this.slotsMasthead, a))
}
,
pubFn.renderMrec = function(e, t, n, i, a) {
    e && (void 0 === a && (a = !0),
    t || (t = ""),
    n || (n = this.getSlotName(this.config.mrecSlotName, this.slotsMrec)),
    0 == this.slotsMrec.length && (n = "vertATF",
    i = "ATF"),
    e.attr("id", n),
    i || (i = n),
    this.pushSlot(this.config.mrecAdUnitPath + t, this.config.mrecSizes, n, {
        key: "pos",
        value: i
    }, null, this.slotsMrec, a))
}
,
pubFn.renderMrecLayer = function(e, t, n, i, a) {
    e && (void 0 === a && (a = !0),
    t || (t = ""),
    n || (n = this.getSlotName(this.config.mrecSlotName, this.slotsMrec)),
    e.attr("id", n),
    i || (i = ["ATF", "MODAL"]),
    this.layerSlotName = n,
    this.pushSlot(this.config.mrecAdUnitPath + t, this.config.mrecSizes, n, {
        key: "pos",
        value: i
    }, null, this.slotsMrec, a))
}
,
pubFn.renderInContent = function(e, t, n, i, a) {
    e && (void 0 === a && (a = !0),
    t || (t = ""),
    n || (n = this.getSlotNameInContent(this.config.inContentSlotName, this.slotsInContent)),
    e.attr("id", n),
    i || (i = n),
    this.pushSlot(this.config.inContentAdUnitPath + t, this.config.inContentSizes, n, {
        key: "pos",
        value: i
    }, null, this.slotsInContent, a))
}
,
pubFn.renderLeaderboard = function(e, t, n, i, a) {
    e && (void 0 === a && (a = !0),
    t || (t = ""),
    n || (n = this.getSlotName(this.config.leaderboardSlotName, this.slotsMasthead)),
    0 == this.slotsMasthead.length && (n = "horzATF",
    i = "ATF"),
    e.attr("id", n),
    i || (i = n),
    this.pushSlot(this.config.leaderboardAdUnitPath + t, this.config.leaderboardSizes, n, {
        key: "pos",
        value: i
    }, this.config.mastheadCheckSizes, this.slotsMasthead, a))
}
,
pubFn.refreshMasthead = function(e) {
    if (!(void 0 === e || e < 0 || this.slotsMasthead.length <= e)) {
        var t = this.slotsMasthead[e];
        null != t && (this.refreshPub([t.pubPushed]),
        COF.log("Pub Refreshed", [t.pubPushed]))
    }
}
,
pubFn.refreshMrec = function(e) {
    if (!(void 0 === e || e < 0 || this.slotsMrec.length <= e)) {
        var t = this.slotsMrec[e];
        null != t && (this.refreshPub([t.pubPushed]),
        COF.log("Pub Refreshed", [t.pubPushed]))
    }
}
,
pubFn.refreshMrecLayer = function() {
    if (!(this.slotsMrec.length <= 0))
        for (var e = 0; e < this.slotsMrec.length; e++) {
            var t = this.slotsMrec[e];
            null != t && t.slotName == this.layerSlotName && (this.refreshPub([t.pubPushed]),
            COF.log("Pub Refreshed", [t.pubPushed]))
        }
}
,
pubFn.refreshInContent = function(e) {
    if (!(void 0 === e || e < 0 || this.slotsInContent.length <= e)) {
        var t = this.slotsInContent[e];
        null != t && (this.refreshPub([t.pubPushed]),
        COF.log("Pub Refreshed", [t.pubPushed]))
    }
}
,
pubFn.useCxenseSegments = function() {
    window.cX = window.cX || {},
    cX.callQueue = cX.callQueue || [],
    cX.callQueue.push(["invoke", function() {
        console.warn("get segments"),
        cX.getUserSegmentIds({
            persistedQueryId: "a36cccd505f81c65b9e2d5ef99b149e290df5039",
            callback: function(e) {
                "object" == typeof window.localStorage && "function" == typeof window.localStorage.getItem && localStorage.setItem("cxSegments", e.join(","))
            }
        })
    }
    ]);
    var e = function() {
        var e = [];
        return "object" == typeof window.localStorage && "function" == typeof window.localStorage.getItem && null !== localStorage.getItem("cxSegments") && localStorage.getItem("cxSegments").length > 0 && (e = localStorage.getItem("cxSegments").split(",")),
        e
    }();
    e && e.length > 0 && googletag.cmd.push((function() {
        console.warn("set cxsegments"),
        googletag.pubads().setTargeting("CxSegments", e)
    }
    ))
}
,
pubFn.refreshPub = function(e) {
    e && (window.relevantDigital && CofinaSSOInitScripts && CofinaSSOInitScripts.utils && CofinaSSOInitScripts.utils.registerHeaderBiding ? (CofinaSSOInitScripts.utils.registerHeaderBiding(),
    COF.log("Ad refresh handled by header biding")) : (googletag.pubads().refresh(e),
    COF.log("Ad refresh handled by pubads")))
}
,
COF.pubApi = new COF.Publicidade;
"use strict";
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
!function(t) {
    var i = Object.prototype
      , e = i.hasOwnProperty
      , n = "function" == typeof Symbol ? Symbol : {}
      , o = n.iterator || "@@iterator"
      , r = n.asyncIterator || "@@asyncIterator"
      , a = n.toStringTag || "@@toStringTag"
      , s = "object" === ("undefined" == typeof module ? "undefined" : _typeof(module))
      , c = t.regeneratorRuntime;
    if (c)
        s && (module.exports = c);
    else {
        (c = t.regeneratorRuntime = s ? module.exports : {}).wrap = d;
        var u = {}
          , f = {};
        f[o] = function() {
            return this
        }
        ;
        var l = Object.getPrototypeOf
          , p = l && l(l(P([])));
        p && p !== i && e.call(p, o) && (f = p);
        var h = m.prototype = y.prototype = Object.create(f);
        v.prototype = h.constructor = m,
        m.constructor = v,
        m[a] = v.displayName = "GeneratorFunction",
        c.isGeneratorFunction = function(t) {
            var i = "function" == typeof t && t.constructor;
            return !!i && (i === v || "GeneratorFunction" === (i.displayName || i.name))
        }
        ,
        c.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
            a in t || (t[a] = "GeneratorFunction")),
            t.prototype = Object.create(h),
            t
        }
        ,
        c.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        w(_.prototype),
        _.prototype[r] = function() {
            return this
        }
        ,
        c.AsyncIterator = _,
        c.async = function(t, i, e, n) {
            var o = new _(d(t, i, e, n));
            return c.isGeneratorFunction(i) ? o : o.next().then((function(t) {
                return t.done ? t.value : o.next()
            }
            ))
        }
        ,
        w(h),
        h[a] = "Generator",
        h[o] = function() {
            return this
        }
        ,
        h.toString = function() {
            return "[object Generator]"
        }
        ,
        c.keys = function(t) {
            var i = [];
            for (var e in t)
                i.push(e);
            return i.reverse(),
            function e() {
                for (; i.length; ) {
                    var n = i.pop();
                    if (n in t)
                        return e.value = n,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        c.values = P,
        O.prototype = {
            constructor: O,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(k),
                !t)
                    for (var i in this)
                        "t" === i.charAt(0) && e.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var i = this;
                function n(e, n) {
                    return a.type = "throw",
                    a.arg = t,
                    i.next = e,
                    n && (i.method = "next",
                    i.arg = void 0),
                    !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var r = this.tryEntries[o]
                      , a = r.completion;
                    if ("root" === r.tryLoc)
                        return n("end");
                    if (r.tryLoc <= this.prev) {
                        var s = e.call(r, "catchLoc")
                          , c = e.call(r, "finallyLoc");
                        if (s && c) {
                            if (this.prev < r.catchLoc)
                                return n(r.catchLoc, !0);
                            if (this.prev < r.finallyLoc)
                                return n(r.finallyLoc)
                        } else if (s) {
                            if (this.prev < r.catchLoc)
                                return n(r.catchLoc, !0)
                        } else {
                            if (!c)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < r.finallyLoc)
                                return n(r.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, i) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var r = o;
                        break
                    }
                }
                r && ("break" === t || "continue" === t) && r.tryLoc <= i && i <= r.finallyLoc && (r = null);
                var a = r ? r.completion : {};
                return a.type = t,
                a.arg = i,
                r ? (this.method = "next",
                this.next = r.finallyLoc,
                u) : this.complete(a)
            },
            complete: function(t, i) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && i && (this.next = i),
                u
            },
            finish: function(t) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var e = this.tryEntries[i];
                    if (e.finallyLoc === t)
                        return this.complete(e.completion, e.afterLoc),
                        k(e),
                        u
                }
            },
            catch: function(t) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var e = this.tryEntries[i];
                    if (e.tryLoc === t) {
                        var n = e.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            k(e)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, i, e) {
                return this.delegate = {
                    iterator: P(t),
                    resultName: i,
                    nextLoc: e
                },
                "next" === this.method && (this.arg = void 0),
                u
            }
        }
    }
    function d(t, i, e, n) {
        var o = i && i.prototype instanceof y ? i : y
          , r = Object.create(o.prototype)
          , a = new O(n || []);
        return r._invoke = function(t, i, e) {
            var n = "suspendedStart";
            return function(o, r) {
                if ("executing" === n)
                    throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o)
                        throw r;
                    return x()
                }
                for (e.method = o,
                e.arg = r; ; ) {
                    var a = e.delegate;
                    if (a) {
                        var s = b(a, e);
                        if (s) {
                            if (s === u)
                                continue;
                            return s
                        }
                    }
                    if ("next" === e.method)
                        e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                        if ("suspendedStart" === n)
                            throw n = "completed",
                            e.arg;
                        e.dispatchException(e.arg)
                    } else
                        "return" === e.method && e.abrupt("return", e.arg);
                    n = "executing";
                    var c = g(t, i, e);
                    if ("normal" === c.type) {
                        if (n = e.done ? "completed" : "suspendedYield",
                        c.arg === u)
                            continue;
                        return {
                            value: c.arg,
                            done: e.done
                        }
                    }
                    "throw" === c.type && (n = "completed",
                    e.method = "throw",
                    e.arg = c.arg)
                }
            }
        }(t, e, a),
        r
    }
    function g(t, i, e) {
        try {
            return {
                type: "normal",
                arg: t.call(i, e)
            }
        } catch (t) {
            return {
                type: "throw",
                arg: t
            }
        }
    }
    function y() {}
    function v() {}
    function m() {}
    function w(t) {
        ["next", "throw", "return"].forEach((function(i) {
            t[i] = function(t) {
                return this._invoke(i, t)
            }
        }
        ))
    }
    function _(t) {
        var i;
        this._invoke = function(n, o) {
            function r() {
                return new Promise((function(i, r) {
                    !function i(n, o, r, a) {
                        var s = g(t[n], t, o);
                        if ("throw" !== s.type) {
                            var c = s.arg
                              , u = c.value;
                            return u && "object" === _typeof(u) && e.call(u, "__await") ? Promise.resolve(u.__await).then((function(t) {
                                i("next", t, r, a)
                            }
                            ), (function(t) {
                                i("throw", t, r, a)
                            }
                            )) : Promise.resolve(u).then((function(t) {
                                c.value = t,
                                r(c)
                            }
                            ), a)
                        }
                        a(s.arg)
                    }(n, o, i, r)
                }
                ))
            }
            return i = i ? i.then(r, r) : r()
        }
    }
    function b(t, i) {
        var e = t.iterator[i.method];
        if (void 0 === e) {
            if (i.delegate = null,
            "throw" === i.method) {
                if (t.iterator.return && (i.method = "return",
                i.arg = void 0,
                b(t, i),
                "throw" === i.method))
                    return u;
                i.method = "throw",
                i.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return u
        }
        var n = g(e, t.iterator, i.arg);
        if ("throw" === n.type)
            return i.method = "throw",
            i.arg = n.arg,
            i.delegate = null,
            u;
        var o = n.arg;
        return o ? o.done ? (i[t.resultName] = o.value,
        i.next = t.nextLoc,
        "return" !== i.method && (i.method = "next",
        i.arg = void 0),
        i.delegate = null,
        u) : o : (i.method = "throw",
        i.arg = new TypeError("iterator result is not an object"),
        i.delegate = null,
        u)
    }
    function E(t) {
        var i = {
            tryLoc: t[0]
        };
        1 in t && (i.catchLoc = t[1]),
        2 in t && (i.finallyLoc = t[2],
        i.afterLoc = t[3]),
        this.tryEntries.push(i)
    }
    function k(t) {
        var i = t.completion || {};
        i.type = "normal",
        delete i.arg,
        t.completion = i
    }
    function O(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        t.forEach(E, this),
        this.reset(!0)
    }
    function P(t) {
        if (t) {
            var i = t[o];
            if (i)
                return i.call(t);
            if ("function" == typeof t.next)
                return t;
            if (!isNaN(t.length)) {
                var n = -1
                  , r = function i() {
                    for (; ++n < t.length; )
                        if (e.call(t, n))
                            return i.value = t[n],
                            i.done = !1,
                            i;
                    return i.value = void 0,
                    i.done = !0,
                    i
                };
                return r.next = r
            }
        }
        return {
            next: x
        }
    }
    function x() {
        return {
            value: void 0,
            done: !0
        }
    }
}(function() {
    return this
}() || Function("return this")());
var _cofina_analytics = function() {
    this._netscopeInitiated = !1,
    this._gaInitiated = !1,
    this._piwikInitiated = !1,
    this._chartbeatInitiated = !1,
    this._userClickEventsInitiated = !1
};
_cofina_analytics.prototype.config = {},
_cofina_analytics.prototype.log = function() {
    this.config.debugMode && console.log.apply(console, arguments)
}
,
_cofina_analytics.prototype.error = function() {
    this.config.debugMode && console.error.apply(console, arguments)
}
,
_cofina_analytics.prototype.isNullOrEmpty = function(t) {
    return void 0 === t || (null === t || ("undefined" === t || "" === t))
}
,
_cofina_analytics.prototype.fixUrl = function(t) {
    return this.isNullOrEmpty(t) || (t.indexOf("?ref") > 0 && (t = t.substring(0, t.indexOf("?ref"))),
    -1 === t.indexOf("http") && 0 == t.indexOf("/") && (t = window.location.origin + t)),
    t
}
,
_cofina_analytics.prototype.refresh = function() {
    "function" == typeof this.gaPageview && this.gaPageview(),
    "function" == typeof this.piwikPageview && this.piwikPageview(),
    "function" == typeof this.netscopeEvent && this.netscopeEvent(),
    "function" == typeof this.hitAndShare && this.hitAndShare()
}
,
_cofina_analytics.prototype.setConfigValues = function(t) {
    "object" === _typeof(t) && (this.config = t),
    void 0 === this.config.debugMode && (this.config.debugMode = !1);
    var i = document.head.querySelector("[name=keywords][content]");
    this.isNullOrEmpty(i) || (this.config.tags = i.content)
}
,
_cofina_analytics.prototype.init = function(t) {
    this.setConfigValues(t),
    void 0 !== t.ga && !0 === t.ga.enabled && "function" == typeof this.initGoogleAnalyticsOnLoad && this.initGoogleAnalyticsOnLoad(),
    void 0 !== t.netscope && !0 === t.netscope.enabled && "function" == typeof this.initNetscopeOnLoad && this.initNetscopeOnLoad(),
    void 0 !== t.piwik && !0 === t.piwik.enabled && "function" == typeof this.initPiwikOnLoad && this.initPiwikOnLoad(t.piwik.enabledUserActions),
    void 0 !== t.chartbeat && !0 === t.chartbeat.enabled && "function" == typeof this.initChartbeat && this.initChartbeat(),
    void 0 !== t.clickEventsEnabled && !0 !== t.clickEventsEnabled || "function" != typeof this.initUserClickEvents || this.initUserClickEvents(),
    !0 === t.waypointsEnabled && "function" == typeof this.initWaypoints && this.initWaypoints()
}
,
_cofina_analytics.prototype.setDimensionForAdBlocker = function(t) {
    var i = !this.isNullOrEmpty(t);
    return new Promise((function(e, n) {
        i ? checkAdBlocker().then((function(i) {
            "undefined" != typeof ga && ga("set", t, i ? "True" : "False"),
            e(!0)
        }
        )) : e(!0)
    }
    ))
}
,
_cofina_analytics.prototype.getAdBlockerUsage = function() {
    return new Promise((function(t, i) {
        checkAdBlocker().then((function(i) {
            t(i ? "True" : "False")
        }
        ))
    }
    ))
}
;
var checkAdBlocker = function() {
    return new Promise((function(t, i) {
        try {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;",
            e.className = "ads ad adsbox doubleclick ad-placement carbon-ads",
            document.body.appendChild(e);
            setTimeout((function() {
                0 === e.offsetHeight ? (e.parentNode.removeChild(e),
                t(!0)) : (e.parentNode.removeChild(e),
                t(!1))
            }
            ), 100)
        } catch (i) {
            t(!0)
        }
    }
    ))
};
_cofina_analytics.prototype.setLogFunc = function(t) {
    "function" == typeof t && (this.log = t)
}
,
_cofina_analytics.prototype.setErrorFunc = function(t) {
    "function" == typeof t && (this.error = t)
}
,
_cofina_analytics.prototype.setHitAndShareFunc = function(t) {
    this.hitAndShare = "function" == typeof t ? t : function() {}
}
;
var cofinaAnalytics = new _cofina_analytics;
_cofina_analytics.prototype.initChartbeat = function() {
    if (!this._chartbeatInitiated) {
        if (this.isNullOrEmpty(this.config.chartbeat.uid))
            return this.error("initGoogleDimensions -> O valor analytics.config.chartbeat.uid tem que ser preenchido"),
            !1;
        void 0 === window._sf_async_config && (window._sf_async_config = {}),
        void 0 === window._sf_startpt && (window._sf_startpt = (new Date).getTime());
        var t = window._sf_async_config || {};
        t.path = window.location.pathname,
        t.uid = this.config.chartbeat.uid,
        t.domain = this.config.chartbeat.domain,
        t.useCanonical = this.config.chartbeat.useCanonical,
        t.sections = this.config.chartbeat.sections,
        t.authors = this.config.chartbeat.authors,
        t.type = this.config.chartbeat.type,
        t.autoDetect = !1,
        this.initChartbeatDimensions(),
        function() {
            function t() {
                window._sf_endpt = (new Date).getTime();
                var t = document.createElement("script");
                t.setAttribute("language", "javascript"),
                t.setAttribute("type", "text/javascript"),
                t.setAttribute("src", "//static.chartbeat.com/js/chartbeat_video.js"),
                document.body.appendChild(t)
            }
            var i = window.onload;
            window.onload = "function" != typeof window.onload ? t : function() {
                i(),
                t()
            }
        }(),
        this._chartbeatInitiated = !0,
        this.log("initChartbeatOnLoad")
    }
}
,
_cofina_analytics.prototype.initChartbeatDimensions = function() {
    if (void 0 !== window._sf_async_config) {
        var t = window._cbq = window._cbq || [];
        void 0 !== this.config.chartbeat.chartbeatDimensions && "object" === _typeof(this.config.chartbeat.chartbeatDimensions) && this.config.chartbeat.chartbeatDimensions.forEach((function(i) {
            t.push(i)
        }
        )),
        this.log("initChartbeatDimensions")
    }
}
,
_cofina_analytics.prototype.initGoogleAnalyticsOnLoad = function() {
    var t, i, e, n, o, r;
    this._gaInitiated || (t = window,
    i = document,
    e = "script",
    n = "ga",
    t.GoogleAnalyticsObject = n,
    t.ga = t.ga || function() {
        (t.ga.q = t.ga.q || []).push(arguments)
    }
    ,
    t.ga.l = 1 * new Date,
    o = i.createElement(e),
    r = i.getElementsByTagName(e)[0],
    o.async = 1,
    o.src = "https://www.google-analytics.com/analytics.js",
    r.parentNode.insertBefore(o, r),
    this.initGoogleDimensions(),
    this._gaInitiated = !0,
    this.log("InitGoogleAnalyticsOnLoad"))
}
,
_cofina_analytics.prototype.initGoogleDimensions = function() {
    var t = this;
    if ("undefined" != typeof ga) {
        if (this.isNullOrEmpty(this.config.ga.identifier))
            return this.error("initGoogleDimensions -> O valor analytics.config.ga.identifier tem que ser preenchido"),
            !1;
        ga("create", this.config.ga.identifier, "auto"),
        void 0 !== this.config.ga.googleDimensions && "object" === _typeof(this.config.ga.googleDimensions) && this.config.ga.googleDimensions.forEach((function(i) {
            i.length > 1 && !t.isNullOrEmpty(i[1]) ? ga("set", i[0], i[1]) : i.length > 1 && i.length >= 3 && !t.isNullOrEmpty(i[1]) && ga("set", i[0], i[1], i[2])
        }
        )),
        this.isNullOrEmpty(this.config.tags) || ga("set", "tags", this.config.tags),
        this.log("initGoogleDimensions")
    }
}
,
_cofina_analytics.prototype.gaEvent = function(t, i, e, n, o) {
    if ("undefined" != typeof ga && this._gaInitiated) {
        if (void 0 === t)
            return;
        void 0 !== o && "" !== o ? ga("send", t, i, e, String(n), String(o)) : void 0 !== n && "" !== n ? ga("send", t, i, e, String(n)) : void 0 !== e && "" !== e ? ga("send", t, i, e) : void 0 !== i && "" !== i && ga("send", t, i),
        this.log("ga.event", arguments)
    }
}
,
_cofina_analytics.prototype.gaPageview = function(t) {
    "undefined" != typeof ga && this._gaInitiated && (void 0 === t && (t = this.config.ga.defaultUrl),
    this.isNullOrEmpty(t) ? (ga("send", "pageview"),
    this.log("ga.pageview")) : (ga("send", "pageview", t),
    this.log("ga.pageview", t)))
}
,
_cofina_analytics.prototype.initNetscopeOnLoad = function() {
    if (!this._netscopeInitiated && "undefined" == typeof gemius_pending) {
        var t = function(t) {
            window[t] = window[t] || function() {
                var i = window[t + "_pdata"] = window[t + "_pdata"] || [];
                i[i.length] = arguments
            }
        };
        t("gemius_hit"),
        t("gemius_event"),
        t("pp_gemius_hit"),
        t("pp_gemius_event"),
        function(t, i) {
            try {
                var e = t.createElement(i)
                  , n = t.getElementsByTagName(i)[0]
                  , o = "http" + ("https:" === location.protocol ? "s" : "");
                e.async = "true",
                e.src = o + "://gapt.hit.gemius.pl/xgemius.js",
                n.parentNode.insertBefore(e, n)
            } catch (t) {}
        }(document, "script"),
        this._netscopeInitiated = !0,
        this.log("initNetscopeOnLoad")
    }
}
,
_cofina_analytics.prototype.netscopeEvent = function(t) {
    if (this._netscopeInitiated && (void 0 === t && (t = this.config.netscope.event),
    void 0 !== t)) {
        var i = new Array("gA=" + t);
        window.pp_gemius_hit && (pp_gemius_hit(this.config.netscope.id, i[0]),
        this.log("netscope.event", i))
    }
}
,
_cofina_analytics.prototype.initPiwikOnLoad = function(t) {
    if (!this._piwikInitiated)
        if (this.isNullOrEmpty(this.config.piwik.siteId))
            this.error("initPiwikOnLoad -> O parametro analytics.config.piwik.siteId tem que ser preenchido");
        else {
            this.initPiwikDimensions();
            var i = this.config.piwik.siteId;
            "undefined" != typeof _paq && (!function() {
                var t = ("https:" === document.location.protocol ? "https" : "http") + "://analytics.xl.pt/";
                _paq.push(["setTrackerUrl", t + "piwik.php"]),
                _paq.push(["setSiteId", i]);
                var e = document
                  , n = e.createElement("script")
                  , o = e.getElementsByTagName("script")[0];
                n.type = "text/javascript",
                n.defer = !0,
                n.async = !0,
                n.src = "//js.xl.pt/piwik.js",
                o.parentNode.insertBefore(n, o)
            }(),
            this._piwikInitiated = !0,
            this._enabledUserActions = null == t || "true" == String(t),
            this.log("initPiwikOnLoad"))
        }
}
,
_cofina_analytics.prototype.initPiwikDimensions = function() {
    var t = this;
    window._paq = window._paq || [],
    _paq.push(["setCookieDomain", this.config.piwik.cookieDomain]),
    void 0 !== this.config.piwik.piwikDimensions && "object" === _typeof(this.config.piwik.piwikDimensions) && this.config.piwik.piwikDimensions.forEach((function(i) {
        i.length > 1 && !t.isNullOrEmpty(i[0]) && _paq.push(i)
    }
    )),
    _paq.push(["enableLinkTracking"]),
    this.log("initPiwikDimensions")
}
,
_cofina_analytics.prototype.piwikEvent = function(t, i, e, n, o) {
    if (this._piwikInitiated && "undefined" != typeof _paq && this._enabledUserActions) {
        if (void 0 === t || void 0 === i || void 0 === e)
            return;
        void 0 !== o ? _paq.push([t, i, e, n, o]) : void 0 !== n ? _paq.push([t, i, e, n]) : void 0 !== i && _paq.push([t, i, e]),
        this.log("piwik.event", arguments)
    }
}
,
_cofina_analytics.prototype.piwikPageview = function() {
    if (this._piwikInitiated && "undefined" != typeof _paq) {
        var t = -1 === this.config.piwik.urlPage.indexOf("PIWIK_TYPE") ? this.config.piwik.urlPage : this.config.piwik.urlPage.replace("PIWIK_TYPE", this.config.piwik.contentType)
          , i = -1 === this.config.piwik.urlPagetitle.indexOf("PIWIK_TYPE") ? this.config.piwik.urlPagetitle : this.config.piwik.urlPagetitle.replace("PIWIK_TYPE", this.config.piwik.contentType);
        _paq.push(["setDocumentTitle", i]),
        _paq.push(["setCustomUrl", t]),
        this.isNullOrEmpty(this.config.tags) || _paq.push(["setCustomVariable", "2", "Tags", this.config.tags]),
        void 0 !== this.config.piwik.contentPremium && "" !== this.config.piwik.contentPremium && _paq.push(["setCustomVariable", "1", "Premium", this.config.piwik.contentPremium]),
        _paq.push(["trackPageView"]),
        this.log("piwik.pageview")
    }
}
,
_cofina_analytics.prototype.initUserClickEvents = function() {
    if (!this._userClickEventsInitiated) {
        var t = this;
        $(document).on("click", ".eventAnalytics", (function() {
            var i = $(this);
            t.userEvent(i)
        }
        )),
        this._userClickEventsInitiated = !0,
        this.log("initUserClickEventsOnLoad")
    }
}
,
_cofina_analytics.prototype.userScroll = function(t, i) {
    "object" === _typeof(t) && Array.isArray(t) && document.addEventListener("scroll", (function() {
        var e = document.documentElement
          , n = document.body
          , o = "scrollTop"
          , r = "scrollHeight"
          , a = Math.round((e[o] || n[o]) / ((e[r] || n[r]) - e.clientHeight) * 100)
          , s = t.indexOf(a);
        s > -1 && ("function" == typeof i && i(a),
        t.splice(s, 1))
    }
    ))
}
,
_cofina_analytics.prototype.userEvent = function(t) {
    var i = this
      , e = $(t).attr("data-consumer");
    e = this.isNullOrEmpty(e) ? ["ga", "piwik", "netscope"] : e.split(",");
    var n = $(t).attr("data-callback");
    e.forEach((function(e) {
        "ga" === e && "function" == typeof i.gaEvent ? i.gaEvent(void 0 !== $(t).attr("data-eventtype") ? $(t).attr("data-eventtype") : "event", $(t).attr("data-category"), $(t).attr("data-action"), i.fixUrl($(t).attr("data-name")), $(t).attr("data-value")) : "piwik" === e && "function" == typeof i.piwikEvent ? i.piwikEvent("trackEvent", $(t).attr("data-category"), $(t).attr("data-action"), i.fixUrl($(t).attr("data-name")), $(t).attr("data-value")) : "netscope" === e && "function" == typeof i.netscopeEvent && i.netscopeEvent(),
        void 0 === n || i.isNullOrEmpty(n) || window[n]()
    }
    ))
}
,
_cofina_analytics.prototype.initWaypoints = function() {
    var t = this
      , i = this;
    void 0 !== Waypoint && (void 0 !== this.config.wayPointsAnalyticsObj && null !== this.config.wayPointsAnalyticsObj && this.config.wayPointsAnalyticsObj.length > 0 && this.config.wayPointsAnalyticsObj.each((function(t, i) {
        i.destroy()
    }
    )),
    $(".cofwaypoint").each((function(e, n) {
        var o = new Waypoint({
            element: n,
            handler: function(t) {
                var e = $(n).attr("data-eventtype");
                if ("pageview" === !i.isNullOrEmpty(e))
                    i.isNullOrEmpty($(n).attr("data-customurl")) ? i.gaPageview() : i.gaPageview($(n).attr("data-customurl"));
                else {
                    var o = $(n);
                    i.userEvent(o)
                }
                (i.isNullOrEmpty($(n).attr("data-destroy")) || "false" !== $(n).attr("data-destroy")) && this.destroy()
            },
            offset: i.isNullOrEmpty($(n).attr("data-offset")) ? 0 : $(n).attr("data-offset")
        });
        void 0 !== t.config.wayPointsAnalyticsObj && null !== t.config.wayPointsAnalyticsObj || (t.config.wayPointsAnalyticsObj = []),
        t.config.wayPointsAnalyticsObj.push(o)
    }
    )),
    this.log("initWaypointsOnLoad"))
}
;
var _analyticsUserProfile = function() {
    function t() {
        try {
            return "undefined" != typeof Storage
        } catch (t) {
            return !1
        }
        return !1
    }
    function i(t, i, e) {
        var n = new Date
          , o = "";
        e && null != e && (n.setTime(n.getTime() + 60 * e * 1e3),
        o = "; expires=" + n.toGMTString()),
        document.cookie = t + "=" + i + o + "; path=/"
    }
    function e(t) {
        return void 0 === t || void 0 === t || null == t || ("undefined" == t || "" == t)
    }
    function n(e) {
        if (null != e) {
            var n = JSON.stringify(e);
            t() ? window.localStorage.setItem("AnalyticsUserProfile", n) : (i("AnalyticsUserProfile", null, -1),
            i("AnalyticsUserProfile", n, 131400))
        }
    }
    function o() {
        return t() ? JSON.parse(window.localStorage.getItem("AnalyticsUserProfile")) : JSON.parse(function(t, i) {
            for (var n = "", o = t + "=", r = document.cookie.split(";"), a = 0; a < r.length; a++) {
                for (var s = r[a]; " " == s.charAt(0); )
                    s = s.substring(1, s.length);
                0 == s.indexOf(o) && (n = s.substring(o.length, s.length))
            }
            return i && !e(n) ? decodeURIComponent(n).replace(new RegExp(/\+/g), " ") : i || e(n) ? null : n
        }("AnalyticsUserProfile", !0))
    }
    function r(t) {
        var i = t.split("-");
        return new Date(i[0],i[1],i[2])
    }
    function a(t) {
        var i = String(t.getDate()).padStart(2, "0")
          , e = String(t.getMonth() + 1).padStart(2, "0");
        return t.getFullYear() + "-" + e + "-" + i
    }
    function s() {
        return a(new Date)
    }
    this.addCommentHit = function() {
        try {
            var t = o();
            null == t && (t = {
                NumberOfComments: 0
            }),
            null !== t.NumberOfComments && void 0 !== t.NumberOfComments || (t.NumberOfComments = 1),
            n(t)
        } catch (t) {
            console.log(t.message)
        }
    }
    ,
    this.hasUserCommented = function() {
        try {
            var t = o();
            if (null == t)
                return "false";
            if (null === t.NumberOfComments || void 0 === t.NumberOfComments)
                return "false";
            if (t.NumberOfComments > 0)
                return "true"
        } catch (t) {
            console.log(t.message)
        }
        return "false"
    }
    ,
    this.addVisit = function() {
        try {
            var t = o();
            null == t && (t = {
                Hits: []
            }),
            null !== t.Hits && void 0 !== t.Hits || (t.Hits = []);
            var i = s();
            if (t.Hits.findIndex((function(t) {
                return t.Date === i
            }
            )) < 0) {
                var e = {
                    Date: i,
                    Count: 0
                };
                t.Hits.push(e)
            }
            n(t)
        } catch (t) {
            console.log(t.message)
        }
    }
    ,
    this.addDetailHit = function() {
        try {
            var t = o();
            null == t && (t = {
                Hits: []
            }),
            null !== t.Hits && void 0 !== t.Hits || (t.Hits = []);
            var i = s()
              , e = t.Hits.findIndex((function(t) {
                return t.Date === i
            }
            ));
            if (e > -1)
                t.Hits[e].Count++;
            else {
                var r = {
                    Date: i,
                    Count: 1
                };
                t.Hits.push(r)
            }
            n(t)
        } catch (t) {
            console.log(t.message)
        }
    }
    ,
    this.getUserProfileFromDetailHits = function() {
        try {
            var t = o();
            if (null == t || null === t.Hits || void 0 === t.Hits || 0 === t.Hits.length)
                return "Paraquedistas";
            var i = ((s = new Date).setDate(s.getDate() - 30),
            a(s));
            if (t.Hits = t.Hits.filter((function(t) {
                return r(t.Date) >= r(i)
            }
            )),
            0 === t.Hits.length)
                return "Paraquedistas";
            var e = t.Hits.reduce((function(t, i) {
                return t + i.Count
            }
            ), 0)
              , n = t.Hits.length;
            if (n >= 28 && e > 30)
                return "Embaixadores";
            if (n >= 22)
                return "Leais";
            if (n >= 15)
                return "Entusiastas";
            if (n >= 6)
                return "Promissores";
            if (n >= 1 && e > 1)
                return "Ocasionais"
        } catch (t) {
            console.log(t.message)
        }
        var s;
        return "Paraquedistas"
    }
};
_cofina_analytics.prototype.analyticsUserProfile = new _analyticsUserProfile;
var GlobalVariables = {
    ENV_URL: "http://cmjornal.pt/",
    pushnotifications: {
        push_notification_url: "https://www.cmjornal.pt/pushnotifications/index",
        deleteOldRegister_push_notification_url: "https://aminhaconta.xl.pt/pushnotifications/cmjornal/index.html",
        vapidPublicKey: "BMtzaA-HU_jgkpO1eMjbC90XVRIe6T_sctcIwoy9LuzA9l6xK8FATf5rTT7YRZdXXjfGzFYEB9xv1uvSehb7-cw"
    },
    videoplayer: {
        brightcoveIdTranslatorUrl: "https://cdn.cmjornal.pt/videourlbyid/",
        hitsUrl: "/Hits/collect/VIDEOSTATS/pixel.gif",
        trackAnalytics: !0,
        relatedVideos: "//www.cmjornal.pt/syndication/LatestVideos/?cid=",
        relatedVideosText: "Outros Vídeos",
        advertising: {
            serverUrl: "https://pubads.g.doubleclick.net/gampad/ads?sz=320x240|1x1|400x300|640x480&iu=/4196/_videos_cm_/INSTREAM_PREROLL&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&cust_params=kw%3D[SECCAO]",
            serverUrlAppsService: "https://pubads.g.doubleclick.net/gampad/ads?iu=/4196/CORREIODAMANHA_APPS/INSTREAM_PREROLL&description_url=placeholder]&tfcd=0&npa=0&sz=1x1%7C320x240%7C400x300%7C640x360%7C640x480&cmsid=[placeholder]&vid=placeholder]&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
            serverUrlTests: "https://pubads.g.doubleclick.net/gampad/ads?sz=400x300|640x480|1x1|320x240&iu=/4196/_videos_cm_/INSTREAM_PREROLL_TESTE&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]"
        },
        publicationId: "3",
        site: "CM",
        accountId: "6108484330001",
        playersDict: {
            normal: "chhIqzukMq_default",
            playlist: "GkocFhNXi_default",
            podcast: "4v7SO5zCHl_default",
            video360: "l7dyu7Uk00_default"
        },
        isToDisplayTitle: !1,
        externalAssets: ["/contents/brightcove-cofina.min.css", "/scripts/bundles/brightcove-assets.js"]
    },
    getVideoplayerObj: function(e) {
        var i = JSON.parse(JSON.stringify(this.videoplayer));
        return void 0 !== e && (i.relatedVideos += e),
        i
    },
    analyticsCustomDimensions: {
        ga: {
            contentDimension: "dimension5",
            userDimension: "dimension7",
            tagsDimension: "dimension6",
            userStateDimension: "dimension3",
            userContentDimension: "dimension4",
            contentIdDimension: "dimension12",
            adBlockerDimension: "dimension13",
            darkModeDimension: "dimension14"
        },
        piwik: {
            tagsDimension: "dimension5",
            userStateDimension: "dimension2",
            userContentDimension: "dimension3",
            contentDimension: "dimension4",
            contentIdDimension: "dimension1"
        }
    },
    analyticsConfig: {
        netscope: {
            enabled: !0
        },
        ga: {
            enabled: !0,
            googleDimensions: []
        },
        piwik: {
            enabled: !1,
            enabledUserActions: !1,
            piwikDimensions: []
        },
        chartbeat: {
            enabled: !0,
            useCanonical: !0,
            chartbeatDimensions: []
        },
        debug: !1
    }
};
function resizeIframeByDevice(n, i, e) {
    var t = 0;
    null != e && "" != e ? t = e : null != i && "" != i ? t = .56 * i : $("#" + n).length > 0 && $(".embedVideo").length > 0 && (t = .56 * $(".embedVideo").width()),
    t > 0 && $("#" + n).attr("height", t)
}
function renderPubIdLayer(n) {
    var i = $("#" + n + " div[id^='div-gpt-ad-mrec-']");
    i.length > 0 && "undefined" != typeof showPubOn && COF.pubApi.renderMrecLayer(i)
}
function renderPubClassLayer(n) {
    var i = $("." + n + " div[id^='div-gpt-ad-mrec-']");
    i.length > 0 && "undefined" != typeof showPubOn && COF.pubApi.renderMrecLayer(i)
}
function deferCall(n) {
    window.jQuery && window.COF && window.COF.config ? n() : setTimeout((function() {
        deferCall(n)
    }
    ), 50)
}
COF.config.DEBUG = !0,
COF.config.COOKIE_SSO = "cmUserInfoSSO",
COF.config.IMG_LOADING = "/fonts/vendor/slick/ajax-loader.gif";
var ctaCallApi = function() {
    var n = function() {
        $("[data-subscription-cta]").each((function(n) {
            var i, e, t = $(this).data("subscription-cta");
            null !== t && "" !== t && (console.log("Rendering CTA " + n + " : " + $(this).data("subscription-cta")),
            i = this,
            e = $(this).data("subscription-cta"),
            void 0 !== window.ctaSubscription && null !== window.ctaSubscription && window.ctaSubscription.renderCTA(i, e))
        }
        ))
    };
    return {
        init: function() {
            n()
        }
    }
}();
