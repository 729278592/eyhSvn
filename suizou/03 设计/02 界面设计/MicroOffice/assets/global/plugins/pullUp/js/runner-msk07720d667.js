!
    function n(e, t, o) {
        function r(u, c) {
            if (!t[u]) {
                if (!e[u]) {
                    var a = "function" == typeof require && require;
                    if (!c && a) return a(u, !0);
                    if (i) return i(u, !0);
                    var s = new Error("Cannot find module '" + u + "'");
                    throw s.code = "MODULE_NOT_FOUND",
                        s
                }
                var d = t[u] = {
                    exports: {}
                };
                e[u][0].call(d.exports,
                    function(n) {
                        var t = e[u][1][n];
                        return r(t ? t: n)
                    },
                    d, d.exports, n, e, t, o)
            }
            return t[u].exports
        }
        for (var i = "function" == typeof require && require,
                 u = 0; u < o.length; u++) r(o[u]);
        return r
    } ({
            1 : [function(n, e, t) {
                function o() {
                    this._runners = {}
                }
                var r = n("./promise");
                e.exports = o,
                    o.prototype.run = function(n) {
                        var e = Array.prototype.slice.call(arguments);
                        e.shift();
                        var t = this._runners[n];
                        return t || (t = this._runners[n] = new r),
                            t._resolved || t.resolve.apply(t, e),
                            this
                    },
                    o.prototype.relay = function(n, e, t) {
                        if ("function" != typeof e) throw new Error("Runner::relay: the first argument must be a callback.");
                        t && "function" != typeof t && (t = null);
                        var o = this._runners[n];
                        return o || (o = this._runners[n] = new r),
                            o.then(e, t),
                            this
                    }
            },
                {
                    "./promise": 2
                }],
            2 : [function(n, e, t) {
                function o() {
                    this._thens = []
                }
                function r(n) {
                    return Array.prototype.slice.call(n)
                }
                function i(n) {
                    return "undefined" != typeof n && null !== n
                }
                e.exports = o,
                    o.prototype = {
                        constructor: o,
                        then: function(n, e) {
                            return this._thens.push({
                                resolve: n,
                                reject: e
                            }),
                                this
                        },
                        fail: function(n) {
                            return this.then(null, n)
                        },
                        done: function(n) {
                            return this.then(n, null)
                        },
                        resolve: function() {
                            var n = r(arguments);
                            this._complete("resolve", n)
                        },
                        reject: function() {
                            var n = r(arguments);
                            this._complete("reject", n)
                        },
                        _complete: function(n, e) {
                            this.then = "resolve" === n ?
                                function(n) {
                                    n && n.apply(null, e)
                                }: function(n) {
                                n && n.apply(null, e)
                            },
                                this.resolve = this.reject = function() {
                                    window.console && "function" == typeof window.console.error && window.console.error("Promise already completed")
                                },
                                this._resolved = !0;
                            for (var t, o = 0,
                                     r = e; t = this._thens[o++];) t[n] && (r = t[n].apply(null, r), r = i(r) ? [r] : e);
                            delete this._thens
                        }
                    }
            },
                {}],
            3 : [function(n, e, t) {
                var o = n("./lib/Runner"),
                    r = window.msk = window.msk || {};
                r.Runner = r.Runner || new o,
                    function(n, e) {
                        "use strict";
                        function t() {
                            if (!i) {
                                i = !0;
                                for (var n = 0; n < r.length; n++) r[n].fn.call(window, r[n].ctx);
                                r = []
                            }
                        }
                        function o() {
                            "complete" === document.readyState && t()
                        }
                        n = n || "docReady",
                            e = e || window;
                        var r = [],
                            i = !1,
                            u = !1;
                        e[n] = function(n, e) {
                            return i ? void setTimeout(function() {
                                    n(e)
                                },
                                1) : (r.push({
                                fn: n,
                                ctx: e
                            }), void("complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(t, 1) : u || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)) : (document.attachEvent("onreadystatechange", o), window.attachEvent("onload", t)), u = !0)))
                        }
                    } ("docReady", window.msk.Runner),
                    r.Runner.docReady(function() {
                        r.Runner.run("dom:ready")
                    }),
                    function() {
                        function n() {
                            r.Runner.run("window:load")
                        }
                        window.addEventListener ? window.addEventListener("load", n) : window.attachEvent ? window.attachEvent("onload", n) : window.onload = n
                    }.call(this)
            },
                {
                    "./lib/Runner": 1
                }]
        },
        {},
        [3]);