require = function r(o, i, a) {
    function s(t, e) {
        if (!i[t]) {
            if (!o[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (u) return u(t, !0);
                throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", n
            }
            n = i[t] = {
                exports: {}
            }, o[t][0].call(n.exports, function(e) {
                return s(o[t][1][e] || e)
            }, n, n.exports, r, o, i, a)
        }
        return i[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
    return s
}({
    breakpoints: [function(e, t, n) {
        var r, o, i = function() {
            "use strict";
            var s = {
                list: null,
                media: {},
                events: [],
                init: function(e) {
                    s.list = e, window.addEventListener("resize", s.poll), window.addEventListener("orientationchange", s.poll), window.addEventListener("load", s.poll), window.addEventListener("fullscreenchange", s.poll)
                },
                active: function(e) {
                    var t, n, r, o, i, a;
                    if (!(e in s.media)) {
                        if ((r = ">=" == e.substr(0, 2) ? (t = "gte", e.substr(2)) : "<=" == e.substr(0, 2) ? (t = "lte", e.substr(2)) : ">" == e.substr(0, 1) ? (t = "gt", e.substr(1)) : "<" == e.substr(0, 1) ? (t = "lt", e.substr(1)) : "!" == e.substr(0, 1) ? (t = "not", e.substr(1)) : (t = "eq", e)) && r in s.list)
                            if (r = s.list[r], Array.isArray(r)) {
                                if (o = parseInt(r[0]), i = parseInt(r[1]), isNaN(o)) {
                                    if (isNaN(i)) return;
                                    a = r[1].substr(String(i).length)
                                } else a = r[0].substr(String(o).length);
                                if (isNaN(o)) switch (t) {
                                    case "gte":
                                        n = "screen";
                                        break;
                                    case "lte":
                                        n = "screen and (max-width: " + i + a + ")";
                                        break;
                                    case "gt":
                                        n = "screen and (min-width: " + (i + 1) + a + ")";
                                        break;
                                    case "lt":
                                        n = "screen and (max-width: -1px)";
                                        break;
                                    case "not":
                                        n = "screen and (min-width: " + (i + 1) + a + ")";
                                        break;
                                    default:
                                        n = "screen and (max-width: " + i + a + ")"
                                } else if (isNaN(i)) switch (t) {
                                    case "gte":
                                        n = "screen and (min-width: " + o + a + ")";
                                        break;
                                    case "lte":
                                        n = "screen";
                                        break;
                                    case "gt":
                                        n = "screen and (max-width: -1px)";
                                        break;
                                    case "lt":
                                    case "not":
                                        n = "screen and (max-width: " + (o - 1) + a + ")";
                                        break;
                                    default:
                                        n = "screen and (min-width: " + o + a + ")"
                                } else switch (t) {
                                    case "gte":
                                        n = "screen and (min-width: " + o + a + ")";
                                        break;
                                    case "lte":
                                        n = "screen and (max-width: " + i + a + ")";
                                        break;
                                    case "gt":
                                        n = "screen and (min-width: " + (i + 1) + a + ")";
                                        break;
                                    case "lt":
                                        n = "screen and (max-width: " + (o - 1) + a + ")";
                                        break;
                                    case "not":
                                        n = "screen and (max-width: " + (o - 1) + a + "), screen and (min-width: " + (i + 1) + a + ")";
                                        break;
                                    default:
                                        n = "screen and (min-width: " + o + a + ") and (max-width: " + i + a + ")"
                                }
                            } else n = "(" == r.charAt(0) ? "screen and " + r : r;
                        s.media[e] = n || !1
                    }
                    return !1 !== s.media[e] && window.matchMedia(s.media[e]).matches
                },
                on: function(e, t) {
                    s.events.push({
                        query: e,
                        handler: t,
                        state: !1
                    }), s.active(e) && t()
                },
                poll: function() {
                    for (var e, t = 0; t < s.events.length; t++) e = s.events[t], s.active(e.query) ? e.state || (e.state = !0, e.handler()) : e.state && (e.state = !1)
                }
            };

            function e(e) {
                s.init(e)
            }
            return e._ = s, e.on = function(e, t) {
                s.on(e, t)
            }, e.active = function(e) {
                return s.active(e)
            }, e
        }();
        r = this, o = function() {
            return i
        }, "function" == typeof define && define.amd ? define([], o) : "object" == typeof n ? t.exports = i : r.breakpoints = i
    }, {}],
    browser: [function(e, t, n) {
        var r, o, i = function() {
            "use strict";
            var i = {
                name: null,
                version: null,
                os: null,
                osVersion: null,
                touch: null,
                mobile: null,
                _canUse: null,
                canUse: function(e) {
                    i._canUse || (i._canUse = document.createElement("div"));
                    var t = i._canUse.style,
                        n = e.charAt(0).toUpperCase() + e.slice(1);
                    return e in t || "Moz" + n in t || "Webkit" + n in t || "O" + n in t || "ms" + n in t
                },
                init: function() {
                    for (var e = navigator.userAgent, t = "other", n = 0, r = [
                            ["firefox", /Firefox\/([0-9\.]+)/],
                            ["bb", /BlackBerry.+Version\/([0-9\.]+)/],
                            ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/],
                            ["opera", /OPR\/([0-9\.]+)/],
                            ["opera", /Opera\/([0-9\.]+)/],
                            ["edge", /Edge\/([0-9\.]+)/],
                            ["safari", /Version\/([0-9\.]+).+Safari/],
                            ["chrome", /Chrome\/([0-9\.]+)/],
                            ["ie", /MSIE ([0-9]+)/],
                            ["ie", /Trident\/.+rv:([0-9]+)/]
                        ], o = 0; o < r.length; o++)
                        if (e.match(r[o][1])) {
                            t = r[o][0], n = parseFloat(RegExp.$1);
                            break
                        } for (i.name = t, i.version = n, t = "other", r = [
                            ["ios", /([0-9_]+) like Mac OS X/, function(e) {
                                return e.replace("_", ".").replace("_", "")
                            }],
                            ["ios", /CPU like Mac OS X/, function(e) {
                                return 0
                            }],
                            ["wp", /Windows Phone ([0-9\.]+)/, null],
                            ["android", /Android ([0-9\.]+)/, null],
                            ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function(e) {
                                return e.replace("_", ".").replace("_", "")
                            }],
                            ["windows", /Windows NT ([0-9\.]+)/, null],
                            ["bb", /BlackBerry.+Version\/([0-9\.]+)/, null],
                            ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/, null],
                            ["linux", /Linux/, null],
                            ["bsd", /BSD/, null],
                            ["unix", /X11/, null]
                        ], o = n = 0; o < r.length; o++)
                        if (e.match(r[o][1])) {
                            t = r[o][0], n = parseFloat(r[o][2] ? r[o][2](RegExp.$1) : RegExp.$1);
                            break
                        }
                    "mac" == t && "ontouchstart" in window && (1024 == screen.width && 1366 == screen.height || 834 == screen.width && 1112 == screen.height || 810 == screen.width && 1080 == screen.height || 768 == screen.width && 1024 == screen.height) && (t = "ios"), i.os = t, i.osVersion = n, i.touch = "wp" == i.os ? 0 < navigator.msMaxTouchPoints : !!("ontouchstart" in window), i.mobile = "wp" == i.os || "android" == i.os || "ios" == i.os || "bb" == i.os
                }
            };
            return i.init(), i
        }();
        r = this, o = function() {
            return i
        }, "function" == typeof define && define.amd ? define([], o) : "object" == typeof n ? t.exports = i : r.browser = i
    }, {}],
    "jquery.touch": [function(e, t, n) {
        function o(e, t, n) {
            var r = this;
            r.settings = n, r.$element = e, r.$sourceElement = t, r.inTap = !1, r.inTapAndHold = !1, r.inDrag = !1, r.tapStart = null, r.dragStart = null, r.timerTap = null, r.timerTapAndHold = null, r.mouseDown = !1, r.x = null, r.y = null, r.ex = null, r.ey = null, r.xStart = null, r.yStart = null, r.exStart = null, r.eyStart = null, r.taps = 0, r.started = !1, r.ended = !1
        }

        function s(e, t, n) {
            var r = e[0];
            return void 0 === r._touch && (r._touch = new o(e, t, n)), r._touch
        }

        function u(e, t, n) {
            var r = e.$element.offset(),
                o = e.$element.width(),
                e = e.$element.height();
            return {
                x: Math.min(Math.max(t, r.left), r.left + o),
                y: Math.min(Math.max(n, r.top), r.top + e)
            }
        }
        var c, l, f, d, r;
        c = jQuery, l = c(document), r = {
            useTouch: !(d = f = null),
            useMouse: !0,
            trackDocument: !1,
            trackDocumentNormalize: !1,
            noClick: !1,
            dragThreshold: 10,
            dragDelay: 200,
            swipeThreshold: 30,
            tapDelay: 250,
            tapAndHoldDelay: 500,
            delegateSelector: null,
            dropFilter: !1,
            dropFilterTraversal: !0,
            coordinates: "page",
            preventDefault: {
                drag: !1,
                swipe: !1,
                tap: !1
            }
        }, o.prototype.hasOwnProperty = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.prototype.uses = function(e) {
            var t = c._data(this.$sourceElement[0], "events");
            switch (e) {
                case "swipe":
                    return this.hasOwnProperty(t, e) || this.hasOwnProperty(t, "swipeUp") || this.hasOwnProperty(t, "swipeDown") || this.hasOwnProperty(t, "swipeLeft") || this.hasOwnProperty(t, "swipeRight");
                case "drag":
                    return this.hasOwnProperty(t, e) || this.hasOwnProperty(t, "dragStart") || this.hasOwnProperty(t, "dragEnd");
                case "tapAndHold":
                case "doubleTap":
                    return this.hasOwnProperty(t, e);
                case "tap":
                    return this.hasOwnProperty(t, e) || this.hasOwnProperty(t, "doubleTap") || this.hasOwnProperty(t, "tapAndHold")
            }
            return !1
        }, o.prototype.cancel = function(e) {
            var t = this;
            t.taps = 0, t.inTap = !1, t.inTapAndHold = !1, t.inDrag = !1, t.tapStart = null, t.dragStart = null, t.xStart = null, t.yStart = null, t.exStart = null, t.eyStart = null, e && (t.mouseDown = !1)
        }, o.prototype.doStart = function(e, t, n) {
            var r = this,
                o = r.$element.offset();
            e.stopPropagation(), (r.uses("drag") && r.settings.preventDefault.drag(r) || r.uses("swipe") && r.settings.preventDefault.swipe(r) || r.uses("tap") && r.settings.preventDefault.tap(r)) && e.preventDefault(), r.uses("tapAndHold") && r.$element.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)").css("-webkit-touch-callout", "none").css("-webkit-user-select", "none"), r.x = t, r.y = n, r.ex = t - o.left, r.ey = n - o.top, r.tapStart = Date.now(), clearTimeout(r.timerTap), r.timerTap = setTimeout(function() {
                r.inTap && 0 < r.taps && (r.$element.trigger(2 == r.taps ? "doubleTap" : "tap", {
                    taps: r.taps,
                    x: r.x,
                    y: r.y,
                    ex: r.ex,
                    ey: r.ey,
                    duration: Date.now() - r.tapStart,
                    event: e,
                    touch: r
                }), r.cancel()), r.timerTap = null
            }, r.settings.tapDelay), r.uses("tapAndHold") && (clearTimeout(r.timerTapAndHold), r.timerTapAndHold = setTimeout(function() {
                r.inTap && (r.$element.trigger("tapAndHold", {
                    x: r.x,
                    y: r.y,
                    ex: r.ex,
                    ey: r.ey,
                    duration: Date.now() - r.tapStart,
                    event: e,
                    touch: r
                }), r.cancel()), r.timerTapAndHold = null, r.inTapAndHold = !0
            }, r.settings.tapAndHoldDelay)), r.inTap = !0
        }, o.prototype.doMove = function(e, t, n) {
            var r, o = this,
                i = o.$element.offset(),
                a = (Math.abs(o.x - t) + Math.abs(o.y - n)) / 2;
            if (e.stopPropagation(), (o.uses("swipe") && o.settings.preventDefault.swipe(o) || o.uses("drag") && o.settings.preventDefault.drag(o)) && e.preventDefault(), 2 < a && clearTimeout(o.timerTapAndHold), o.inDrag && f == o) {
                if (o.$element.trigger("drag", {
                        x: t,
                        y: n,
                        ex: t - i.left,
                        ey: n - i.top,
                        start: {
                            x: o.xStart,
                            y: o.yStart,
                            ex: o.exStart,
                            ey: o.eyStart
                        },
                        event: e,
                        touch: o,
                        exStart: o.exStart,
                        eyStart: o.eyStart
                    }), o.$element.css("pointer-events", "none"), r = "fixed" == o.$element.css("position") ? document.elementFromPoint(t - l.scrollLeft(), n - l.scrollTop()) : document.elementFromPoint(t, n), o.$element.css("pointer-events", ""), r) {
                    if (!1 !== o.settings.dropFilter) switch (typeof o.settings.dropFilter) {
                        case "string":
                            if (o.settings.dropFilterTraversal)
                                for (; r && !c(r).is(o.settings.dropFilter);) r = r.parentElement;
                            else c(r).is(o.settings.dropFilter) || (r = null);
                            break;
                        case "function":
                            if (o.settings.dropFilterTraversal)
                                for (; r && !0 !== o.settings.dropFilter(o.$element[0], r);) r = r.parentElement;
                            else !1 === o.settings.dropFilter(o.$element[0], r) && (r = null);
                            break;
                        default:
                            if (!0 === o.settings.dropFilter)
                                for (; r.parentElement != o.$element[0].parentElement;)
                                    if (!(r = r.parentElement)) {
                                        r = null;
                                        break
                                    }
                    }
                    r === o.$element[0] && (r = null)
                }
                d && d !== r && (o.$element.trigger("dragLeave", {
                    element: d,
                    event: e,
                    touch: o
                }), d = null), !d && r && (d = r, o.$element.trigger("dragEnter", {
                    element: d,
                    event: e,
                    touch: o
                })), d && (i = c(d).offset(), o.$element.trigger("dragOver", {
                    element: d,
                    event: e,
                    touch: o,
                    x: t,
                    y: n,
                    ex: t - i.left,
                    ey: n - i.top
                }))
            } else a > o.settings.dragThreshold && (Date.now() - o.tapStart < o.settings.dragDelay ? o.cancel() : (o.cancel(), o.inDrag = !0, o.dragStart = Date.now(), o.xStart = t, o.yStart = n, o.exStart = t - i.left, o.eyStart = n - i.top, o.uses("drag") && o.settings.preventDefault.drag(o) && e.preventDefault(), o.$element.trigger("dragStart", {
                x: o.xStart,
                y: o.yStart,
                ex: o.exStart,
                ey: o.eyStart,
                event: e,
                touch: o
            }), f = o))
        }, o.prototype.doEnd = function(e, t, n) {
            var r, o, i, a = this,
                s = a.$element.offset(),
                u = Math.abs(a.x - t),
                l = Math.abs(a.y - n);
            e.stopPropagation(), a.inTap ? (clearTimeout(a.timerTapAndHold), a.taps++, (!a.timerTap || 1 == a.taps && !a.uses("doubleTap") || 2 == a.taps && a.uses("doubleTap")) && (a.$element.trigger(2 == a.taps ? "doubleTap" : "tap", {
                taps: a.taps,
                x: a.x,
                y: a.y,
                ex: a.ex,
                ey: a.ey,
                duration: Date.now() - a.tapStart,
                event: e,
                touch: a
            }), a.cancel())) : a.inDrag ? (d && (s = c(d).offset(), a.$element.trigger("drop", {
                element: d,
                event: e,
                touch: a,
                x: t,
                y: n,
                ex: t - s.left,
                ey: n - s.top
            }), d = null), i = Date.now() - a.dragStart, o = (r = Math.sqrt(Math.pow(Math.abs(a.x - t), 2) + Math.pow(Math.abs(a.y - n), 2))) / i, a.$element.trigger("dragEnd", {
                start: {
                    x: a.x,
                    y: a.y,
                    ex: a.ex,
                    ey: a.ey
                },
                end: {
                    x: t,
                    y: n,
                    ex: t - s.left,
                    ey: n - s.top
                },
                distance: r,
                duration: i,
                velocity: o,
                event: e,
                touch: a
            }), f = null, (u > a.settings.swipeThreshold || l > a.settings.swipeThreshold) && (a.$element.trigger("swipe", {
                distance: r,
                duration: i,
                velocity: o,
                event: e,
                touch: a
            }), l < u ? (o = u / i, t < a.x ? a.$element.trigger("swipeLeft", {
                distance: u,
                duration: i,
                velocity: o,
                event: e,
                touch: a
            }) : a.$element.trigger("swipeRight", {
                distance: u,
                duration: i,
                velocity: o,
                event: e,
                touch: a
            })) : u < l && (o = l / i, n < a.y ? a.$element.trigger("swipeUp", {
                distance: l,
                duration: i,
                velocity: o,
                event: e,
                touch: a
            }) : a.$element.trigger("swipeDown", {
                distance: l,
                duration: i,
                velocity: o,
                event: e,
                touch: a
            }))), a.inDrag = !1) : a.inTapAndHold && (clearTimeout(a.timerTapAndHold), a.$element.trigger("tapAndHoldEnd", {
                x: a.x,
                y: a.y,
                event: e,
                touch: a
            }), a.inTapAndHold = !1)
        }, c.fn.touch = function(e) {
            var t = c(this);
            if (1 < this.length)
                for (var n = 0; n < this.length; n++) c.touch(c(this[n]), e);
            else 1 == this.length && c.touch(t, e);
            return t
        }, c.fn.enableTouch = function(e) {
            return c(this).touch(e)
        }, c.touch = function(i, e) {
            var t, a = {},
                a = c.extend(a, r);
            "function" != typeof(a = c.extend(a, e)).preventDefault.drag && (a.preventDefault.drag = !0 === a.preventDefault.drag ? function(e) {
                return !0
            } : function(e) {
                return !1
            }), "function" != typeof a.preventDefault.swipe && (a.preventDefault.swipe = !0 === a.preventDefault.swipe ? function(e) {
                return !0
            } : function(e) {
                return !1
            }), "function" != typeof a.preventDefault.tap && (a.preventDefault.tap = !0 === a.preventDefault.tap ? function(e) {
                return !0
            } : function(e) {
                return !1
            }), a.noClick && i.on("click", function(e) {
                e.preventDefault()
            }), a.useTouch && (t = function(e) {
                var t = s(c(this), i, a);
                t.started = !0, t.doStart(e, e.originalEvent.touches[0][a.coordinates + "X"], e.originalEvent.touches[0][a.coordinates + "Y"]), setTimeout(function() {
                    t.started = !1
                }, 1e3)
            }, i.on("touchstart", t), a.delegateSelector && i.on("touchstart", a.delegateSelector, t), t = function(e) {
                var t, n = s(c(this), i, a),
                    r = e.originalEvent.touches[0][a.coordinates + "X"],
                    o = e.originalEvent.touches[0][a.coordinates + "Y"];
                n.settings.trackDocument && n.settings.trackDocumentNormalize && (r = (t = u(n, r, o)).x, o = t.y), n.doMove(e, r, o)
            }, i.on("touchmove", t), a.delegateSelector && i.on("touchmove", a.delegateSelector, t), t = function(e) {
                var t = s(c(this), i, a);
                t.ended = !0;
                var n = u(t, e.originalEvent.changedTouches[0][a.coordinates + "X"], e.originalEvent.changedTouches[0][a.coordinates + "Y"]);
                t.doEnd(e, n.x, n.y), setTimeout(function() {
                    t.ended = !1
                }, 1e3)
            }, i.on("touchend", t), a.delegateSelector && i.on("touchend", a.delegateSelector, t)), a.useMouse && (t = function(e) {
                var t = s(c(this), i, a);
                if (t.started) return !1;
                t.mouseDown = !0, t.doStart(e, e[a.coordinates + "X"], e[a.coordinates + "Y"])
            }, i.on("mousedown", t), a.delegateSelector && i.on("mousedown", a.delegateSelector, t), t = function(e) {
                var t = s(c(this), i, a);
                t.mouseDown && t.doMove(e, e[a.coordinates + "X"], e[a.coordinates + "Y"])
            }, i.on("mousemove", t), a.delegateSelector && i.on("mousemove", a.delegateSelector, t), t = function(e) {
                var t = s(c(this), i, a);
                if (t.ended) return !1;
                l.triggerHandler("mouseup", e), t.doEnd(e, e[a.coordinates + "X"], e[a.coordinates + "Y"]), t.mouseDown = !1
            }, i.on("mouseup", t), a.delegateSelector && i.on("mouseup", a.delegateSelector, t)), a.trackDocument || i.on("mouseleave", function(e) {
                var t = s(c(this), i, a);
                t.doEnd(e, e[a.coordinates + "X"], e[a.coordinates + "Y"]), t.mouseDown = !1
            })
        }, l.on("mousemove", function(e) {
            var t, n, r, o = f;
            o && o.settings.useMouse && o.mouseDown && o.settings.trackDocument && (n = e[o.settings.coordinates + "X"], r = e[o.settings.coordinates + "Y"], o.settings.trackDocumentNormalize && (n = (t = u(o, n, r)).x, r = t.y), o.doMove(e, n, r))
        }).on("mouseup", function(e, t) {
            var n, r, o = f;
            o && o.settings.useMouse && o.settings.trackDocument && (void 0 !== t && (e = t), o.settings.coordinates + "X" in e && (n = e[o.settings.coordinates + "X"], r = e[o.settings.coordinates + "Y"], o.settings.trackDocumentNormalize && (n = (t = u(o, n, r)).x, r = t.y), o.doEnd(e, n, r), o.mouseDown = !1))
        })
    }, {}],
    jquery: [function(e, n, t) {
        ! function(e, t) {
            "use strict";
            "object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function(T, e) {
            "use strict";

            function g(e) {
                return null != e && e === e.window
            }
            var t = [],
                n = Object.getPrototypeOf,
                s = t.slice,
                m = t.flat ? function(e) {
                    return t.flat.call(e)
                } : function(e) {
                    return t.concat.apply([], e)
                },
                u = t.push,
                o = t.indexOf,
                r = {},
                i = r.toString,
                y = r.hasOwnProperty,
                a = y.toString,
                l = a.call(Object),
                v = {},
                x = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                },
                S = T.document,
                c = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function b(e, t, n) {
                var r, o, i = (n = n || S).createElement("script");
                if (i.text = e, t)
                    for (r in c)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                n.head.appendChild(i).parentNode.removeChild(i)
            }

            function h(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[i.call(e)] || "object" : typeof e
            }
            var C = function(e, t) {
                return new C.fn.init(e, t)
            };

            function f(e) {
                var t = !!e && "length" in e && e.length,
                    n = h(e);
                return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.6.0",
                constructor: C,
                length: 0,
                toArray: function() {
                    return s.call(this)
                },
                get: function(e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    e = C.merge(this.constructor(), e);
                    return e.prevObject = this, e
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(n) {
                    return this.pushStack(C.map(this, function(e, t) {
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
                    return this.pushStack(C.grep(this, function(e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function() {
                    return this.pushStack(C.grep(this, function(e, t) {
                        return t % 2
                    }))
                },
                eq: function(e) {
                    var t = this.length,
                        e = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= e && e < t ? [this[e]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: u,
                sort: t.sort,
                splice: t.splice
            }, C.extend = C.fn.extend = function() {
                var e, t, n, r, o, i = arguments[0] || {},
                    a = 1,
                    s = arguments.length,
                    u = !1;
                for ("boolean" == typeof i && (u = i, i = arguments[a] || {}, a++), "object" == typeof i || x(i) || (i = {}), a === s && (i = this, a--); a < s; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) n = e[t], "__proto__" !== t && i !== n && (u && n && (C.isPlainObject(n) || (r = Array.isArray(n))) ? (o = i[t], o = r && !Array.isArray(o) ? [] : r || C.isPlainObject(o) ? o : {}, r = !1, i[t] = C.extend(u, o, n)) : void 0 !== n && (i[t] = n));
                return i
            }, C.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    return !(!e || "[object Object]" !== i.call(e)) && (!(e = n(e)) || "function" == typeof(e = y.call(e, "constructor") && e.constructor) && a.call(e) === l)
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (f(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                makeArray: function(e, t) {
                    t = t || [];
                    return null != e && (f(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)), t
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : o.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) != a && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var r, o, i = 0,
                        a = [];
                    if (f(e))
                        for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                    else
                        for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                    return m(a)
                },
                guid: 1,
                support: v
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                r["[object " + t + "]"] = t.toLowerCase()
            });
            var d = function(n) {
                function f(e, t) {
                    return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
                }

                function r() {
                    T()
                }
                var e, p, b, i, o, h, d, g, w, u, l, T, S, a, C, m, s, c, y, A = "sizzle" + +new Date,
                    v = n.document,
                    k = 0,
                    x = 0,
                    D = ue(),
                    E = ue(),
                    N = ue(),
                    j = ue(),
                    L = function(e, t) {
                        return e === t && (l = !0), 0
                    },
                    q = {}.hasOwnProperty,
                    t = [],
                    $ = t.pop,
                    H = t.push,
                    M = t.push,
                    O = t.slice,
                    P = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    F = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    I = "\\[" + F + "*(" + z + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + F + "*\\]",
                    _ = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    B = new RegExp(F + "+", "g"),
                    W = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                    U = new RegExp("^" + F + "*," + F + "*"),
                    X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                    Z = new RegExp(F + "|>"),
                    V = new RegExp(_),
                    Y = new RegExp("^" + z + "$"),
                    G = {
                        ID: new RegExp("^#(" + z + ")"),
                        CLASS: new RegExp("^\\.(" + z + ")"),
                        TAG: new RegExp("^(" + z + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + _),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    ee = /^[^{]+\{\s*\[native \w/,
                    te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ne = /[+~]/,
                    re = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
                    oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ae = ve(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    M.apply(t = O.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType
                } catch (e) {
                    M = {
                        apply: t.length ? function(e, t) {
                            H.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(t, e, n, r) {
                    var o, i, a, s, u, l, c, f = e && e.ownerDocument,
                        d = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
                    if (!r && (T(e), e = e || S, C)) {
                        if (11 !== d && (u = te.exec(t)))
                            if (o = u[1]) {
                                if (9 === d) {
                                    if (!(a = e.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n
                                } else if (f && (a = f.getElementById(o)) && y(e, a) && a.id === o) return n.push(a), n
                            } else {
                                if (u[2]) return M.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return M.apply(n, e.getElementsByClassName(o)), n
                            } if (p.qsa && !j[t + " "] && (!m || !m.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                            if (c = t, f = e, 1 === d && (Z.test(t) || X.test(t))) {
                                for ((f = ne.test(t) && ge(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(oe, ie) : e.setAttribute("id", s = A)), i = (l = h(t)).length; i--;) l[i] = (s ? "#" + s : ":scope") + " " + ye(l[i]);
                                c = l.join(",")
                            }
                            try {
                                return M.apply(n, f.querySelectorAll(c)), n
                            } catch (e) {
                                j(t, !0)
                            } finally {
                                s === A && e.removeAttribute("id")
                            }
                        }
                    }
                    return g(t.replace(W, "$1"), e, n, r)
                }

                function ue() {
                    var n = [];

                    function r(e, t) {
                        return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
                    }
                    return r
                }

                function le(e) {
                    return e[A] = !0, e
                }

                function ce(e) {
                    var t = S.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function fe(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
                }

                function de(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function he(a) {
                    return le(function(i) {
                        return i = +i, le(function(e, t) {
                            for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in p = se.support = {}, o = se.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            e = e && (e.ownerDocument || e).documentElement;
                        return !J.test(t || e && e.nodeName || "HTML")
                    }, T = se.setDocument = function(e) {
                        var t, e = e ? e.ownerDocument || e : v;
                        return e != S && 9 === e.nodeType && e.documentElement && (a = (S = e).documentElement, C = !o(S), v != S && (t = S.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)), p.scope = ce(function(e) {
                            return a.appendChild(e).appendChild(S.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), p.attributes = ce(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), p.getElementsByTagName = ce(function(e) {
                            return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                        }), p.getElementsByClassName = ee.test(S.getElementsByClassName), p.getById = ce(function(e) {
                            return a.appendChild(e).id = A, !S.getElementsByName || !S.getElementsByName(A).length
                        }), p.getById ? (b.filter.ID = function(e) {
                            var t = e.replace(re, f);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, b.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && C) {
                                e = t.getElementById(e);
                                return e ? [e] : []
                            }
                        }) : (b.filter.ID = function(e) {
                            var t = e.replace(re, f);
                            return function(e) {
                                e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return e && e.value === t
                            }
                        }, b.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && C) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), b.find.TAG = p.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" !== e) return i;
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }, b.find.CLASS = p.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                        }, s = [], m = [], (p.qsa = ee.test(S.querySelectorAll)) && (ce(function(e) {
                            var t;
                            a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + A + "-]").length || m.push("~="), (t = S.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        }), ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = S.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (p.matchesSelector = ee.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                            p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", _)
                        }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                t = t && t.parentNode;
                            return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, L = t ? function(e, t) {
                            if (e === t) return l = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == S || e.ownerDocument == v && y(v, e) ? -1 : t == S || t.ownerDocument == v && y(v, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return l = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e == S ? -1 : t == S ? 1 : o ? -1 : i ? 1 : u ? P(u, e) - P(u, t) : 0;
                            if (o === i) return de(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? de(a[r], s[r]) : a[r] == v ? -1 : s[r] == v ? 1 : 0
                        }), S
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if (T(e), p.matchesSelector && C && !j[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                            var n = c.call(e, t);
                            if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {
                            j(t, !0)
                        }
                        return 0 < se(t, S, null, [e]).length
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) != S && T(e), y(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) != S && T(e);
                        var n = b.attrHandle[t.toLowerCase()],
                            n = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                        return void 0 !== n ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(oe, ie)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, n = [],
                            r = 0,
                            o = 0;
                        if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(L), l) {
                            for (; t = e[o++];) t === e[o] && (r = n.push(o));
                            for (; r--;) e.splice(n[r], 1)
                        }
                        return u = null, e
                    }, i = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (b = se.selectors = {
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
                                return e[1] = e[1].replace(re, f), e[3] = (e[3] || e[4] || e[5] || "").replace(re, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(re, f).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = D[e + " "];
                                return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && D(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, n, r) {
                                return function(e) {
                                    e = se.attr(e, t);
                                    return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                                }
                            },
                            CHILD: function(h, e, t, g, m) {
                                var y = "nth" !== h.slice(0, 3),
                                    v = "last" !== h.slice(-4),
                                    x = "of-type" === e;
                                return 1 === g && 0 === m ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, n) {
                                    var r, o, i, a, s, u, l = y != v ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        f = x && e.nodeName.toLowerCase(),
                                        d = !n && !x,
                                        p = !1;
                                    if (c) {
                                        if (y) {
                                            for (; l;) {
                                                for (a = e; a = a[l];)
                                                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                                u = l = "only" === h && !u && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (u = [v ? c.firstChild : c.lastChild], v && d) {
                                            for (p = (s = (r = (o = (i = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                                if (1 === a.nodeType && ++p && a === e) {
                                                    o[h] = [k, s, p];
                                                    break
                                                }
                                        } else if (!1 === (p = d ? s = (r = (o = (i = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : p))
                                            for (;
                                                (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((o = (i = a[A] || (a[A] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [k, p]), a !== e)););
                                        return (p -= m) === g || p % g == 0 && 0 <= p / g
                                    }
                                }
                            },
                            PSEUDO: function(e, i) {
                                var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return a[A] ? a(i) : 1 < a.length ? (t = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                                    for (var n, r = a(e, i), o = r.length; o--;) e[n = P(e, r[o])] = !(t[n] = r[o])
                                }) : function(e) {
                                    return a(e, 0, t)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: le(function(e) {
                                var r = [],
                                    o = [],
                                    s = d(e.replace(W, "$1"));
                                return s[A] ? le(function(e, t, n, r) {
                                    for (var o, i = s(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                                }) : function(e, t, n) {
                                    return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                                }
                            }),
                            has: le(function(t) {
                                return function(e) {
                                    return 0 < se(t, e).length
                                }
                            }),
                            contains: le(function(t) {
                                return t = t.replace(re, f),
                                    function(e) {
                                        return -1 < (e.textContent || i(e)).indexOf(t)
                                    }
                            }),
                            lang: le(function(n) {
                                return Y.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, f).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
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
                                return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: pe(!1),
                            disabled: pe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !b.pseudos.empty(e)
                            },
                            header: function(e) {
                                return K.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: he(function() {
                                return [0]
                            }),
                            last: he(function(e, t) {
                                return [t - 1]
                            }),
                            eq: he(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: he(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: he(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: he(function(e, t, n) {
                                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                                return e
                            }),
                            gt: he(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = b.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) b.pseudos[e] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) b.pseudos[e] = function(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }(e);

                function me() {}

                function ye(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ve(a, e, t) {
                    var s = e.dir,
                        u = e.next,
                        l = u || s,
                        c = t && "parentNode" === l,
                        f = x++;
                    return e.first ? function(e, t, n) {
                        for (; e = e[s];)
                            if (1 === e.nodeType || c) return a(e, t, n);
                        return !1
                    } : function(e, t, n) {
                        var r, o, i = [k, f];
                        if (n) {
                            for (; e = e[s];)
                                if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                        } else
                            for (; e = e[s];)
                                if (1 === e.nodeType || c)
                                    if (r = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[s] || e;
                                    else {
                                        if ((o = r[l]) && o[0] === k && o[1] === f) return i[2] = o[2];
                                        if ((r[l] = i)[2] = a(e, t, n)) return !0
                                    } return !1
                    }
                }

                function xe(o) {
                    return 1 < o.length ? function(e, t, n) {
                        for (var r = o.length; r--;)
                            if (!o[r](e, t, n)) return !1;
                        return !0
                    } : o[0]
                }

                function be(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                    return a
                }

                function we(p, h, g, m, y, e) {
                    return m && !m[A] && (m = we(m)), y && !y[A] && (y = we(y, e)), le(function(e, t, n, r) {
                        var o, i, a, s = [],
                            u = [],
                            l = t.length,
                            c = e || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []),
                            f = !p || !e && h ? c : be(c, s, p, n, r),
                            d = g ? y || (e ? p : l || m) ? [] : t : f;
                        if (g && g(f, d, n, r), m)
                            for (o = be(d, u), m(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[u[i]] = !(f[u[i]] = a));
                        if (e) {
                            if (y || p) {
                                if (y) {
                                    for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                                    y(null, d = [], o, r)
                                }
                                for (i = d.length; i--;)(a = d[i]) && -1 < (o = y ? P(e, a) : s[i]) && (e[o] = !(t[o] = a))
                            }
                        } else d = be(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : M.apply(t, d)
                    })
                }

                function Te(m, y) {
                    function e(e, t, n, r, o) {
                        var i, a, s, u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || x && b.find.TAG("*", o),
                            h = k += null == d ? 1 : Math.random() || .1,
                            g = p.length;
                        for (o && (w = t == S || t || o); l !== g && null != (i = p[l]); l++) {
                            if (x && i) {
                                for (a = 0, t || i.ownerDocument == S || (T(i), n = !C); s = m[a++];)
                                    if (s(i, t || S, n)) {
                                        r.push(i);
                                        break
                                    } o && (k = h)
                            }
                            v && ((i = !s && i) && u--, e && c.push(i))
                        }
                        if (u += l, v && l !== u) {
                            for (a = 0; s = y[a++];) s(c, f, t, n);
                            if (e) {
                                if (0 < u)
                                    for (; l--;) c[l] || f[l] || (f[l] = $.call(r));
                                f = be(f)
                            }
                            M.apply(r, f), o && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                        }
                        return o && (k = h, w = d), c
                    }
                    var v = 0 < y.length,
                        x = 0 < m.length;
                    return v ? le(e) : e
                }
                return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
                    var n, r, o, i, a, s, u, l = E[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (a = e, s = [], u = b.preFilter; a;) {
                        for (i in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(W, " ")
                            }), a = a.slice(n.length)), b.filter) !(r = G[i].exec(a)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: i,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? se.error(e) : E(e, s).slice(0)
                }, d = se.compile = function(e, t) {
                    var n, r = [],
                        o = [],
                        i = N[e + " "];
                    if (!i) {
                        for (n = (t = t || h(e)).length; n--;)((i = function e(t) {
                            for (var r, n, o, i = t.length, a = b.relative[t[0].type], s = a || b.relative[" "], u = a ? 1 : 0, l = ve(function(e) {
                                    return e === r
                                }, s, !0), c = ve(function(e) {
                                    return -1 < P(r, e)
                                }, s, !0), f = [function(e, t, n) {
                                    return n = !a && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n), r = null, n
                                }]; u < i; u++)
                                if (n = b.relative[t[u].type]) f = [ve(xe(f), n)];
                                else {
                                    if ((n = b.filter[t[u].type].apply(null, t[u].matches))[A]) {
                                        for (o = ++u; o < i && !b.relative[t[o].type]; o++);
                                        return we(1 < u && xe(f), 1 < u && ye(t.slice(0, u - 1).concat({
                                            value: " " === t[u - 2].type ? "*" : ""
                                        })).replace(W, "$1"), n, u < o && e(t.slice(u, o)), o < i && e(t = t.slice(o)), o < i && ye(t))
                                    }
                                    f.push(n)
                                } return xe(f)
                        }(t[n]))[A] ? r : o).push(i);
                        (i = N(e, Te(o, r))).selector = e
                    }
                    return i
                }, g = se.select = function(e, t, n, r) {
                    var o, i, a, s, u, l = "function" == typeof e && e,
                        c = !r && h(e = l.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && C && b.relative[i[1].type]) {
                            if (!(t = (b.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;
                            l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (o = G.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !b.relative[s = a.type]);)
                            if ((u = b.find[s]) && (r = u(a.matches[0].replace(re, f), ne.test(i[0].type) && ge(t.parentNode) || t))) {
                                if (i.splice(o, 1), !(e = r.length && ye(i))) return M.apply(n, r), n;
                                break
                            }
                    }
                    return (l || d(e, c))(r, t, !C, n, !t || ne.test(e) && ge(t.parentNode) || t), n
                }, p.sortStable = A.split("").sort(L).join("") === A, p.detectDuplicates = !!l, T(), p.sortDetached = ce(function(e) {
                    return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
                }), ce(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || fe("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), p.attributes && ce(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || fe("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ce(function(e) {
                    return null == e.getAttribute("disabled")
                }) || fe(R, function(e, t, n) {
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
                }), se
            }(T);
            C.find = d, C.expr = d.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = d.uniqueSort, C.text = d.getText, C.isXMLDoc = d.isXML, C.contains = d.contains, C.escapeSelector = d.escape;

            function p(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        r.push(e)
                    } return r
            }

            function w(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
            var A = C.expr.match.needsContext;

            function k(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function E(e, n, r) {
                return x(n) ? C.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                }) : n.nodeType ? C.grep(e, function(e) {
                    return e === n !== r
                }) : "string" != typeof n ? C.grep(e, function(e) {
                    return -1 < o.call(n, e) !== r
                }) : C.filter(n, e, r)
            }
            C.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, C.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (C.contains(o[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                    return 1 < r ? C.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(E(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(E(this, e || [], !0))
                },
                is: function(e) {
                    return !!E(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length
                }
            });
            var N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, n) {
                if (!e) return this;
                if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), D.test(r[1]) && C.isPlainObject(t))
                        for (var r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (e = S.getElementById(r[2])) && (this[0] = e, this.length = 1), this
            }).prototype = C.fn;
            var j = C(S),
                L = /^(?:parents|prev(?:Until|All))/,
                q = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function $(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (C.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        o = this.length,
                        i = [],
                        a = "string" != typeof e && C(e);
                    if (!A.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                } return this.pushStack(1 < i.length ? C.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), C.each({
                parent: function(e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(e) {
                    return p(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return p(e, "parentNode", n)
                },
                next: function(e) {
                    return $(e, "nextSibling")
                },
                prev: function(e) {
                    return $(e, "previousSibling")
                },
                nextAll: function(e) {
                    return p(e, "nextSibling")
                },
                prevAll: function(e) {
                    return p(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return p(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return p(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return w((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return w(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                }
            }, function(r, o) {
                C.fn[r] = function(e, t) {
                    var n = C.map(this, o, e);
                    return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (q[r] || C.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
                }
            });
            var H = /[^\x20\t\r\n\f]+/g;

            function M(e) {
                return e
            }

            function O(e) {
                throw e
            }

            function P(e, t, n, r) {
                var o;
                try {
                    e && x(o = e.promise) ? o.call(e).done(t).fail(n) : e && x(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            C.Callbacks = function(r) {
                var e, n;
                r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(H) || [], function(e, t) {
                    n[t] = !0
                }), n) : C.extend({}, r);

                function o() {
                    for (s = s || r.once, a = i = !0; l.length; c = -1)
                        for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
                    r.memory || (t = !1), i = !1, s && (u = t ? [] : "")
                }
                var i, t, a, s, u = [],
                    l = [],
                    c = -1,
                    f = {
                        add: function() {
                            return u && (t && !i && (c = u.length - 1, l.push(t)), function n(e) {
                                C.each(e, function(e, t) {
                                    x(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== h(t) && n(t)
                                })
                            }(arguments), t && !i && o()), this
                        },
                        remove: function() {
                            return C.each(arguments, function(e, t) {
                                for (var n; - 1 < (n = C.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
                            }), this
                        },
                        has: function(e) {
                            return e ? -1 < C.inArray(e, u) : 0 < u.length
                        },
                        empty: function() {
                            return u = u && [], this
                        },
                        disable: function() {
                            return s = l = [], u = t = "", this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return s = l = [], t || i || (u = t = ""), this
                        },
                        locked: function() {
                            return !!s
                        },
                        fireWith: function(e, t) {
                            return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || o()), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!a
                        }
                    };
                return f
            }, C.extend({
                Deferred: function(e) {
                    var i = [
                            ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                            ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                        ],
                        o = "pending",
                        a = {
                            state: function() {
                                return o
                            },
                            always: function() {
                                return s.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return a.then(null, e)
                            },
                            pipe: function() {
                                var o = arguments;
                                return C.Deferred(function(r) {
                                    C.each(i, function(e, t) {
                                        var n = x(o[t[4]]) && o[t[4]];
                                        s[t[1]](function() {
                                            var e = n && n.apply(this, arguments);
                                            e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                        })
                                    }), o = null
                                }).promise()
                            },
                            then: function(t, n, r) {
                                var u = 0;

                                function l(o, i, a, s) {
                                    return function() {
                                        function e() {
                                            var e, t;
                                            if (!(o < u)) {
                                                if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, x(t) ? s ? t.call(e, l(u, i, M, s), l(u, i, O, s)) : (u++, t.call(e, l(u, i, M, s), l(u, i, O, s), l(u, i, M, i.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || i.resolveWith)(n, r))
                                            }
                                        }
                                        var n = this,
                                            r = arguments,
                                            t = s ? e : function() {
                                                try {
                                                    e()
                                                } catch (e) {
                                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (a !== O && (n = void 0, r = [e]), i.rejectWith(n, r))
                                                }
                                            };
                                        o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                                    }
                                }
                                return C.Deferred(function(e) {
                                    i[0][3].add(l(0, e, x(r) ? r : M, e.notifyWith)), i[1][3].add(l(0, e, x(t) ? t : M)), i[2][3].add(l(0, e, x(n) ? n : O))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? C.extend(e, a) : a
                            }
                        },
                        s = {};
                    return C.each(i, function(e, t) {
                        var n = t[2],
                            r = t[5];
                        a[t[1]] = n.add, r && n.add(function() {
                            o = r
                        }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                        }, s[t[0] + "With"] = n.fireWith
                    }), a.promise(s), e && e.call(s, s), s
                },
                when: function(e) {
                    function t(t) {
                        return function(e) {
                            o[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(o, i)
                        }
                    }
                    var n = arguments.length,
                        r = n,
                        o = Array(r),
                        i = s.call(arguments),
                        a = C.Deferred();
                    if (n <= 1 && (P(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || x(i[r] && i[r].then))) return a.then();
                    for (; r--;) P(i[r], t(r), a.reject);
                    return a.promise()
                }
            });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, C.readyException = function(e) {
                T.setTimeout(function() {
                    throw e
                })
            };
            var F = C.Deferred();

            function z() {
                S.removeEventListener("DOMContentLoaded", z), T.removeEventListener("load", z), C.ready()
            }
            C.fn.ready = function(e) {
                return F.then(e).catch(function(e) {
                    C.readyException(e)
                }), this
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || F.resolveWith(S, [C])
                }
            }), C.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", z), T.addEventListener("load", z));
            var I = function(e, t, n, r, o, i, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === h(n))
                        for (s in o = !0, n) I(e, t, s, n[s], !0, i, a);
                    else if (void 0 !== r && (o = !0, x(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                            return l.call(C(e), n)
                        }) : t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
                },
                _ = /^-ms-/,
                B = /-([a-z])/g;

            function W(e, t) {
                return t.toUpperCase()
            }

            function U(e) {
                return e.replace(_, "ms-").replace(B, W)
            }

            function X(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }

            function Z() {
                this.expando = C.expando + Z.uid++
            }
            Z.uid = 1, Z.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t) o[U(t)] = n;
                    else
                        for (r in t) o[U(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(H) || []).length;
                            for (; n--;) delete r[t[n]]
                        }
                        void 0 !== t && !C.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    e = e[this.expando];
                    return void 0 !== e && !C.isEmptyObject(e)
                }
            };
            var V = new Z,
                Y = new Z,
                G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                J = /[A-Z]/g;

            function Q(e, t, n) {
                var r, o;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                        } catch (e) {}
                        Y.set(e, t, n)
                    } else n = void 0;
                return n
            }
            C.extend({
                hasData: function(e) {
                    return Y.hasData(e) || V.hasData(e)
                },
                data: function(e, t, n) {
                    return Y.access(e, t, n)
                },
                removeData: function(e, t) {
                    Y.remove(e, t)
                },
                _data: function(e, t, n) {
                    return V.access(e, t, n)
                },
                _removeData: function(e, t) {
                    V.remove(e, t)
                }
            }), C.fn.extend({
                data: function(n, e) {
                    var t, r, o, i = this[0],
                        a = i && i.attributes;
                    if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                        Y.set(this, n)
                    }) : I(this, function(e) {
                        var t;
                        return i && void 0 === e ? void 0 !== (t = Y.get(i, n)) || void 0 !== (t = Q(i, n)) ? t : void 0 : void this.each(function() {
                            Y.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                    if (this.length && (o = Y.get(i), 1 === i.nodeType && !V.get(i, "hasDataAttrs"))) {
                        for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), Q(i, r, o[r]));
                        V.set(i, "hasDataAttrs", !0)
                    }
                    return o
                },
                removeData: function(e) {
                    return this.each(function() {
                        Y.remove(this, e)
                    })
                }
            }), C.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = V.get(e, t), n && (!r || Array.isArray(n) ? r = V.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = C._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                        C.dequeue(e, t)
                    }, i)), !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return V.get(e, n) || V.access(e, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            V.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), C.fn.extend({
                queue: function(t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = C.queue(this, t, n);
                        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    function n() {
                        --o || i.resolveWith(a, [a])
                    }
                    var r, o = 1,
                        i = C.Deferred(),
                        a = this,
                        s = this.length;
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = V.get(a[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
                    return n(), i.promise(t)
                }
            });
            var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ee = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
                te = ["Top", "Right", "Bottom", "Left"],
                ne = S.documentElement,
                re = function(e) {
                    return C.contains(e.ownerDocument, e)
                },
                oe = {
                    composed: !0
                };
            ne.getRootNode && (re = function(e) {
                return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
            });
            var ie = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === C.css(e, "display")
            };

            function ae(e, t, n, r) {
                var o, i, a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return C.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && ee.exec(C.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;) C.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
                    c *= 2, C.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
            }
            var se = {};

            function ue(e, t) {
                for (var n, r, o, i, a, s = [], u = 0, l = e.length; u < l; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (s[u] = V.get(r, "display") || null, s[u] || (r.style.display = "")), "" === r.style.display && ie(r) && (s[u] = (a = i = void 0, i = (o = r).ownerDocument, a = o.nodeName, (o = se[a]) || (i = i.body.appendChild(i.createElement(a)), o = C.css(i, "display"), i.parentNode.removeChild(i), "none" === o && (o = "block"), se[a] = o)))) : "none" !== n && (s[u] = "none", V.set(r, "display", n)));
                for (u = 0; u < l; u++) null != s[u] && (e[u].style.display = s[u]);
                return e
            }
            C.fn.extend({
                show: function() {
                    return ue(this, !0)
                },
                hide: function() {
                    return ue(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ie(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var le = /^(?:checkbox|radio)$/i,
                ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                fe = /^$|^module$|\/(?:java|ecma)script/i;
            Zt = S.createDocumentFragment().appendChild(S.createElement("div")), (d = S.createElement("input")).setAttribute("type", "radio"), d.setAttribute("checked", "checked"), d.setAttribute("name", "t"), Zt.appendChild(d), v.checkClone = Zt.cloneNode(!0).cloneNode(!0).lastChild.checked, Zt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Zt.cloneNode(!0).lastChild.defaultValue, Zt.innerHTML = "<option></option>", v.option = !!Zt.lastChild;
            var de = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function pe(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && k(e, t) ? C.merge([e], n) : n
            }

            function he(e, t) {
                for (var n = 0, r = e.length; n < r; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
            }
            de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td, v.option || (de.optgroup = de.option = [1, "<select multiple='multiple'>", "</select>"]);
            var ge = /<|&#?\w+;/;

            function me(e, t, n, r, o) {
                for (var i, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
                    if ((i = e[d]) || 0 === i)
                        if ("object" === h(i)) C.merge(f, i.nodeType ? [i] : i);
                        else if (ge.test(i)) {
                    for (a = a || c.appendChild(t.createElement("div")), s = (ce.exec(i) || ["", ""])[1].toLowerCase(), s = de[s] || de._default, a.innerHTML = s[1] + C.htmlPrefilter(i) + s[2], l = s[0]; l--;) a = a.lastChild;
                    C.merge(f, a.childNodes), (a = c.firstChild).textContent = ""
                } else f.push(t.createTextNode(i));
                for (c.textContent = "", d = 0; i = f[d++];)
                    if (r && -1 < C.inArray(i, r)) o && o.push(i);
                    else if (u = re(i), a = pe(c.appendChild(i), "script"), u && he(a), n)
                    for (l = 0; i = a[l++];) fe.test(i.type || "") && n.push(i);
                return c
            }
            var ye = /^([^.]*)(?:\.(.+)|)/;

            function ve() {
                return !0
            }

            function xe() {
                return !1
            }

            function be(e, t) {
                return e === function() {
                    try {
                        return S.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function we(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) we(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = xe;
                else if (!o) return e;
                return 1 === i && (a = o, (o = function(e) {
                    return C().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
                    C.event.add(this, t, o, r, n)
                })
            }

            function Te(e, o, i) {
                i ? (V.set(e, o, !1), C.event.add(e, o, {
                    namespace: !1,
                    handler: function(e) {
                        var t, n, r = V.get(this, o);
                        if (1 & e.isTrigger && this[o]) {
                            if (r.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
                            else if (r = s.call(arguments), V.set(this, o, r), t = i(this, o), this[o](), r !== (n = V.get(this, o)) || t ? V.set(this, o, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                        } else r.length && (V.set(this, o, {
                            value: C.event.trigger(C.extend(r[0], C.Event.prototype), r.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === V.get(e, o) && C.event.add(e, o, ve)
            }
            C.event = {
                global: {},
                add: function(t, e, n, r, o) {
                    var i, a, s, u, l, c, f, d, p, h = V.get(t);
                    if (X(t))
                        for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ne, o), n.guid || (n.guid = C.guid++), (s = h.events) || (s = h.events = Object.create(null)), (a = h.handle) || (a = h.handle = function(e) {
                                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                            }), u = (e = (e || "").match(H) || [""]).length; u--;) f = p = (l = ye.exec(e[u]) || [])[1], d = (l[2] || "").split(".").sort(), f && (c = C.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = C.event.special[f] || {}, l = C.extend({
                            type: f,
                            origType: p,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && C.expr.match.needsContext.test(o),
                            namespace: d.join(".")
                        }, i), (p = s[f]) || ((p = s[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, d, a) || t.addEventListener && t.addEventListener(f, a)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), C.event.global[f] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, a, s, u, l, c, f, d, p, h, g, m = V.hasData(e) && V.get(e);
                    if (m && (u = m.events)) {
                        for (l = (t = (t || "").match(H) || [""]).length; l--;)
                            if (p = g = (s = ye.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (f = C.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, p, m.handle), delete u[p])
                            } else
                                for (p in u) C.event.remove(e, p + t[l], n, r, !0);
                        C.isEmptyObject(u) && V.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, a = new Array(arguments.length),
                        s = C.event.fix(e),
                        u = (V.get(this, "events") || Object.create(null))[s.type] || [],
                        e = C.event.special[s.type] || {};
                    for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (s.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                        for (i = C.event.handlers.call(this, s, u), t = 0;
                            (r = i[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = r.elem, n = 0;
                                (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                        return e.postDispatch && e.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < C(o, this).index(l) : C.find(o, this, null, [l]).length), a[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            } return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: x(e) ? function() {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
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
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            e = this || e;
                            return le.test(e.type) && e.click && k(e, "input") && Te(e, "click", ve), !1
                        },
                        trigger: function(e) {
                            e = this || e;
                            return le.test(e.type) && e.click && k(e, "input") && Te(e, "click"), !0
                        },
                        _default: function(e) {
                            e = e.target;
                            return le.test(e.type) && e.click && k(e, "input") && V.get(e, "click") || k(e, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, C.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, C.Event = function(e, t) {
                if (!(this instanceof C.Event)) return new C.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: xe,
                isPropagationStopped: xe,
                isImmediatePropagationStopped: xe,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ve, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ve, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ve, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
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
                char: !0,
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
            }, C.event.addProp), C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                C.event.special[e] = {
                    setup: function() {
                        return Te(this, e, be), !1
                    },
                    trigger: function() {
                        return Te(this, e), !0
                    },
                    _default: function() {
                        return !0
                    },
                    delegateType: t
                }
            }), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, o) {
                C.event.special[e] = {
                    delegateType: o,
                    bindType: o,
                    handle: function(e) {
                        var t, n = e.relatedTarget,
                            r = e.handleObj;
                        return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
                    }
                }
            }), C.fn.extend({
                on: function(e, t, n, r) {
                    return we(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return we(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                        C.event.remove(this, e, n, t)
                    });
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
            });
            var Se = /<script|<style|<link/i,
                Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function ke(e, t) {
                return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }

            function De(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Ee(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Ne(e, t) {
                var n, r, o, i;
                if (1 === t.nodeType) {
                    if (V.hasData(e) && (i = V.get(e).events))
                        for (o in V.remove(t, "handle events"), i)
                            for (n = 0, r = i[o].length; n < r; n++) C.event.add(t, o, i[o][n]);
                    Y.hasData(e) && (e = Y.access(e), e = C.extend({}, e), Y.set(t, e))
                }
            }

            function je(n, r, o, i) {
                r = m(r);
                var e, t, a, s, u, l, c = 0,
                    f = n.length,
                    d = f - 1,
                    p = r[0],
                    h = x(p);
                if (h || 1 < f && "string" == typeof p && !v.checkClone && Ce.test(p)) return n.each(function(e) {
                    var t = n.eq(e);
                    h && (r[0] = p.call(this, e, t.html())), je(t, r, o, i)
                });
                if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
                    for (s = (a = C.map(pe(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = C.clone(u, !0, !0), s && C.merge(a, pe(u, "script"))), o.call(n[c], u, c);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, C.map(a, Ee), c = 0; c < s; c++) u = a[c], fe.test(u.type || "") && !V.access(u, "globalEval") && C.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }, l) : b(u.textContent.replace(Ae, ""), u, l))
                }
                return n
            }

            function Le(e, t, n) {
                for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(pe(r)), r.parentNode && (n && re(r) && he(pe(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var r, o, i, a, s, u, l, c = e.cloneNode(!0),
                        f = re(e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (a = pe(c), r = 0, o = (i = pe(e)).length; r < o; r++) s = i[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && le.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (i = i || pe(e), a = a || pe(c), r = 0, o = i.length; r < o; r++) Ne(i[r], a[r]);
                        else Ne(e, c);
                    return 0 < (a = pe(c, "script")).length && he(a, !f && pe(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (X(n)) {
                            if (t = n[V.expando]) {
                                if (t.events)
                                    for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                n[V.expando] = void 0
                            }
                            n[Y.expando] && (n[Y.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function(e) {
                    return Le(this, e, !0)
                },
                remove: function(e) {
                    return Le(this, e)
                },
                text: function(e) {
                    return I(this, function(e) {
                        return void 0 === e ? C.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return je(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return je(this, arguments, function(e) {
                        var t;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = ke(this, e)).insertBefore(e, t.firstChild)
                    })
                },
                before: function() {
                    return je(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return je(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return I(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Se.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var n = [];
                    return je(this, arguments, function(e) {
                        var t = this.parentNode;
                        C.inArray(this, n) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
                    }, n)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, a) {
                C.fn[e] = function(e) {
                    for (var t, n = [], r = C(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), C(r[i])[a](t), u.apply(n, t.get());
                    return this.pushStack(n)
                }
            });

            function qe(e, t, n) {
                var r, o = {};
                for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                for (r in n = n.call(e), t) e.style[r] = o[r];
                return n
            }
            var $e, He, Me, Oe, Pe, Re, Fe, ze, Ie = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
                _e = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return (t = !t || !t.opener ? T : t).getComputedStyle(e)
                },
                Be = new RegExp(te.join("|"), "i");

            function We() {
                var e;
                ze && (Fe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ze.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(Fe).appendChild(ze), e = T.getComputedStyle(ze), $e = "1%" !== e.top, Re = 12 === Ue(e.marginLeft), ze.style.right = "60%", Oe = 36 === Ue(e.right), He = 36 === Ue(e.width), ze.style.position = "absolute", Me = 12 === Ue(ze.offsetWidth / 3), ne.removeChild(Fe), ze = null)
            }

            function Ue(e) {
                return Math.round(parseFloat(e))
            }

            function Xe(e, t, n) {
                var r, o, i = e.style;
                return (n = n || _e(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || re(e) || (o = C.style(e, t)), !v.pixelBoxStyles() && Ie.test(o) && Be.test(t) && (r = i.width, e = i.minWidth, t = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = n.width, i.width = r, i.minWidth = e, i.maxWidth = t)), void 0 !== o ? o + "" : o
            }

            function Ze(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            Fe = S.createElement("div"), (ze = S.createElement("div")).style && (ze.style.backgroundClip = "content-box", ze.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === ze.style.backgroundClip, C.extend(v, {
                boxSizingReliable: function() {
                    return We(), He
                },
                pixelBoxStyles: function() {
                    return We(), Oe
                },
                pixelPosition: function() {
                    return We(), $e
                },
                reliableMarginLeft: function() {
                    return We(), Re
                },
                scrollboxSize: function() {
                    return We(), Me
                },
                reliableTrDimensions: function() {
                    var e, t, n;
                    return null == Pe && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ne.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), Pe = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ne.removeChild(e)), Pe
                }
            }));
            var Ve = ["Webkit", "Moz", "ms"],
                Ye = S.createElement("div").style,
                Ge = {};

            function Je(e) {
                var t = C.cssProps[e] || Ge[e];
                return t || (e in Ye ? e : Ge[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                        if ((e = Ve[n] + t) in Ye) return e
                }(e) || e)
            }
            var Qe = /^(none|table(?!-c[ea]).+)/,
                Ke = /^--/,
                et = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                tt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function nt(e, t, n) {
                var r = ee.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function rt(e, t, n, r, o, i) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + te[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + te[a], !0, o)), "margin" !== n && (u -= C.css(e, "border" + te[a] + "Width", !0, o))) : (u += C.css(e, "padding" + te[a], !0, o), "padding" !== n ? u += C.css(e, "border" + te[a] + "Width", !0, o) : s += C.css(e, "border" + te[a] + "Width", !0, o));
                return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
            }

            function ot(e, t, n) {
                var r = _e(e),
                    o = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                    i = o,
                    a = Xe(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Ie.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + rt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
            }

            function it(e, t, n, r, o) {
                return new it.prototype.init(e, t, n, r, o)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                e = Xe(e, "opacity");
                                return "" === e ? "1" : e
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
                        var o, i, a, s = U(t),
                            u = Ke.test(t),
                            l = e.style;
                        if (u || (t = Je(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                        "string" === (i = typeof n) && (o = ee.exec(n)) && o[1] && (n = ae(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var o, i = U(t);
                    return Ke.test(t) || (t = Je(i)), "normal" === (o = void 0 === (o = (i = C.cssHooks[t] || C.cssHooks[i]) && "get" in i ? i.get(e, !0, n) : o) ? Xe(e, t, r) : o) && t in tt && (o = tt[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
                }
            }), C.each(["height", "width"], function(e, s) {
                C.cssHooks[s] = {
                    get: function(e, t, n) {
                        if (t) return !Qe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, s, n) : qe(e, et, function() {
                            return ot(e, s, n)
                        })
                    },
                    set: function(e, t, n) {
                        var r, o = _e(e),
                            i = !v.scrollboxSize() && "absolute" === o.position,
                            a = (i || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                            n = n ? rt(e, s, n, a, o) : 0;
                        return a && i && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - rt(e, s, "border", !1, o) - .5)), n && (r = ee.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = C.css(e, s)), nt(0, t, n)
                    }
                }
            }), C.cssHooks.marginLeft = Ze(v.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(o, i) {
                C.cssHooks[o + i] = {
                    expand: function(e) {
                        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + te[t] + i] = r[t] || r[t - 2] || r[0];
                        return n
                    }
                }, "margin" !== o && (C.cssHooks[o + i].set = nt)
            }), C.fn.extend({
                css: function(e, t) {
                    return I(this, function(e, t, n) {
                        var r, o, i = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = _e(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), (C.Tween = it).prototype = {
                constructor: it,
                init: function(e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = it.propHooks[this.prop];
                    return (e && e.get ? e : it.propHooks._default).get(this)
                },
                run: function(e) {
                    var t, n = it.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : it.propHooks._default).set(this), this
                }
            }, it.prototype.init.prototype = it.prototype, it.propHooks = {
                _default: {
                    get: function(e) {
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, C.fx = it.prototype.init, C.fx.step = {};
            var at, st, ut = /^(?:toggle|show|hide)$/,
                lt = /queueHooks$/;

            function ct() {
                st && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ct) : T.setTimeout(ct, C.fx.interval), C.fx.tick())
            }

            function ft() {
                return T.setTimeout(function() {
                    at = void 0
                }), at = Date.now()
            }

            function dt(e, t) {
                var n, r = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = te[r])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function pt(e, t, n) {
                for (var r, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function ht(o, e, t) {
                var n, i, r = 0,
                    a = ht.prefilters.length,
                    s = C.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var e = at || ft(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);
                        return s.notifyWith(o, [l, t, e]), t < 1 && r ? e : (r || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
                    },
                    l = s.promise({
                        elem: o,
                        props: C.extend({}, e),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, t),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: at || ft(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function(e, t) {
                            e = C.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                            return l.tweens.push(e), e
                        },
                        stop: function(e) {
                            var t = 0,
                                n = e ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; t < n; t++) l.tweens[t].run(1);
                            return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                        }
                    }),
                    c = l.props;
                for (! function(e, t) {
                        var n, r, o, i, a;
                        for (n in e)
                            if (o = t[r = U(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                                for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                            else t[r] = o
                    }(c, l.opts.specialEasing); r < a; r++)
                    if (n = ht.prefilters[r].call(l, o, c, l.opts)) return x(n.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
                return C.map(c, pt, l), x(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, {
                    elem: o,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            C.Animation = C.extend(ht, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ae(n.elem, e, ee.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    for (var n, r = 0, o = (e = x(e) ? (t = e, ["*"]) : e.match(H)).length; r < o; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, o, i, a, s, u, l, c = "width" in t || "height" in t,
                        f = this,
                        d = {},
                        p = e.style,
                        h = e.nodeType && ie(e),
                        g = V.get(e, "fxshow");
                    for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s()
                        }), a.unqueued++, f.always(function() {
                            f.always(function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                            })
                        })), t)
                        if (o = t[r], ut.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[r]) continue;
                                h = !0
                            }
                            d[r] = g && g[r] || C.style(e, r)
                        } if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                        for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = V.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = C.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (f.done(function() {
                                p.display = l
                            }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                            })), u = !1, d) u || (g ? "hidden" in g && (h = g.hidden) : g = V.access(e, "fxshow", {
                            display: l
                        }), i && (g.hidden = !h), h && ue([e], !0), f.done(function() {
                            for (r in h || ue([e]), V.remove(e, "fxshow"), d) C.style(e, r, d[r])
                        })), u = pt(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
                }
            }), C.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || x(e) && e,
                    duration: e,
                    easing: n && t || t && !x(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    x(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                }, r
            }, C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ie).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(t, e, n, r) {
                    var o = C.isEmptyObject(t),
                        i = C.speed(e, n, r),
                        r = function() {
                            var e = ht(this, C.extend({}, t), i);
                            (o || V.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || !1 === i.queue ? this.each(r) : this.queue(i.queue, r)
                },
                stop: function(o, e, i) {
                    function a(e) {
                        var t = e.stop;
                        delete e.stop, t(i)
                    }
                    return "string" != typeof o && (i = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = C.timers,
                            r = V.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r) r[t] && r[t].stop && lt.test(t) && a(r[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                        !e && i || C.dequeue(this, o)
                    })
                },
                finish: function(a) {
                    return !1 !== a && (a = a || "fx"), this.each(function() {
                        var e, t = V.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            o = C.timers,
                            i = n ? n.length : 0;
                        for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function(e, r) {
                var o = C.fn[r];
                C.fn[r] = function(e, t, n) {
                    return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(dt(r, !0), e, t, n)
                }
            }), C.each({
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
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
                C.fn[e] = function(e, t, n) {
                    return this.animate(r, e, t, n)
                }
            }), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    n = C.timers;
                for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(), at = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                st || (st = !0, ct())
            }, C.fx.stop = function() {
                st = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(r, e) {
                return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                    var n = T.setTimeout(e, r);
                    t.stop = function() {
                        T.clearTimeout(n)
                    }
                })
            }, Zt = S.createElement("input"), K = S.createElement("select").appendChild(S.createElement("option")), Zt.type = "checkbox", v.checkOn = "" !== Zt.value, v.optSelected = K.selected, (Zt = S.createElement("input")).value = "t", Zt.type = "radio", v.radioValue = "t" === Zt.value;
            var gt, mt = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return I(this, C.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            }), C.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (r = o.get(e, t))) && null == (r = C.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!v.radioValue && "radio" === t && k(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        o = t && t.match(H);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++];) e.removeAttribute(n)
                }
            }), gt = {
                set: function(e, t, n) {
                    return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var a = mt[t] || C.find.attr;
                mt[t] = function(e, t, n) {
                    var r, o, i = t.toLowerCase();
                    return n || (o = mt[i], mt[i] = r, r = null != a(e, t, n) ? i : null, mt[i] = o), r
                }
            });
            var yt = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;

            function xt(e) {
                return (e.match(H) || []).join(" ")
            }

            function bt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function wt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
            }
            C.fn.extend({
                prop: function(e, t) {
                    return I(this, C.prop, e, t, 1 < arguments.length)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[C.propFix[e] || e]
                    })
                }
            }), C.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : yt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), v.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                },
                set: function(e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            }), C.fn.extend({
                addClass: function(t) {
                    var e, n, r, o, i, a, s = 0;
                    if (x(t)) return this.each(function(e) {
                        C(this).addClass(t.call(this, e, bt(this)))
                    });
                    if ((e = wt(t)).length)
                        for (; n = this[s++];)
                            if (a = bt(n), r = 1 === n.nodeType && " " + xt(a) + " ") {
                                for (i = 0; o = e[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                a !== (a = xt(r)) && n.setAttribute("class", a)
                            } return this
                },
                removeClass: function(t) {
                    var e, n, r, o, i, a, s = 0;
                    if (x(t)) return this.each(function(e) {
                        C(this).removeClass(t.call(this, e, bt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = wt(t)).length)
                        for (; n = this[s++];)
                            if (a = bt(n), r = 1 === n.nodeType && " " + xt(a) + " ") {
                                for (i = 0; o = e[i++];)
                                    for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                                a !== (a = xt(r)) && n.setAttribute("class", a)
                            } return this
                },
                toggleClass: function(o, t) {
                    var i = typeof o,
                        a = "string" == i || Array.isArray(o);
                    return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : x(o) ? this.each(function(e) {
                        C(this).toggleClass(o.call(this, e, bt(this), t), t)
                    }) : this.each(function() {
                        var e, t, n, r;
                        if (a)
                            for (t = 0, n = C(this), r = wt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else void 0 !== o && "boolean" != i || ((e = bt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && V.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                        if (1 === t.nodeType && -1 < (" " + xt(bt(t)) + " ").indexOf(r)) return !0;
                    return !1
                }
            });
            var Tt = /\r/g;
            C.fn.extend({
                val: function(t) {
                    var n, e, r, o = this[0];
                    return arguments.length ? (r = x(t), this.each(function(e) {
                        1 === this.nodeType && (null == (e = r ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
                            return null == e ? "" : e + ""
                        })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                    })) : o ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(Tt, "") : null == e ? "" : e : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : xt(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n = e.options, r = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], a = o ? r + 1 : n.length, s = r < 0 ? a : o ? r : 0; s < a; s++)
                                if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))) {
                                    if (t = C(t).val(), o) return t;
                                    i.push(t)
                                } return i
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), i)) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                    }
                }, v.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), v.focusin = "onfocusin" in T;

            function St(e) {
                e.stopPropagation()
            }
            var Ct = /^(?:focusinfocus|focusoutblur)$/;
            C.extend(C.event, {
                trigger: function(e, t, n, r) {
                    var o, i, a, s, u, l, c, f = [n || S],
                        d = y.call(e, "type") ? e.type : e,
                        p = y.call(e, "namespace") ? e.namespace.split(".") : [],
                        h = c = i = n = n || S;
                    if (3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(d + C.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), s = d.indexOf(":") < 0 && "on" + d, (e = e[C.expando] ? e : new C.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), l = C.event.special[d] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                        if (!r && !l.noBubble && !g(n)) {
                            for (a = l.delegateType || d, Ct.test(a + d) || (h = h.parentNode); h; h = h.parentNode) f.push(h), i = h;
                            i === (n.ownerDocument || S) && f.push(i.defaultView || i.parentWindow || T)
                        }
                        for (o = 0;
                            (h = f[o++]) && !e.isPropagationStopped();) c = h, e.type = 1 < o ? a : l.bindType || d, (u = (V.get(h, "events") || Object.create(null))[e.type] && V.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && X(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
                        return e.type = d, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !X(n) || s && x(n[d]) && !g(n) && ((i = n[s]) && (n[s] = null), C.event.triggered = d, e.isPropagationStopped() && c.addEventListener(d, St), n[d](), e.isPropagationStopped() && c.removeEventListener(d, St), C.event.triggered = void 0, i && (n[s] = i)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    e = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(e, null, t)
                }
            }), C.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return C.event.trigger(e, t, n, !0)
                }
            }), v.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                function o(e) {
                    C.event.simulate(r, e.target, C.event.fix(e))
                }
                C.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this.document || this,
                            t = V.access(e, r);
                        t || e.addEventListener(n, o, !0), V.access(e, r, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this.document || this,
                            t = V.access(e, r) - 1;
                        t ? V.access(e, r, t) : (e.removeEventListener(n, o, !0), V.remove(e, r))
                    }
                }
            });
            var At = T.location,
                kt = {
                    guid: Date.now()
                },
                Dt = /\?/;
            C.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new T.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {}
                return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function(e) {
                    return e.textContent
                }).join("\n") : e)), t
            };
            var Et = /\[\]$/,
                Nt = /\r?\n/g,
                jt = /^(?:submit|button|image|reset|file)$/i,
                Lt = /^(?:input|select|textarea|keygen)/i;
            C.param = function(e, t) {
                function n(e, t) {
                    t = x(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
                }
                var r, o = [];
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                    n(this.name, this.value)
                });
                else
                    for (r in e) ! function n(r, e, o, i) {
                        if (Array.isArray(e)) C.each(e, function(e, t) {
                            o || Et.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
                        });
                        else if (o || "object" !== h(e)) i(r, e);
                        else
                            for (var t in e) n(r + "[" + t + "]", e[t], o, i)
                    }(r, e[r], t, n);
                return o.join("&")
            }, C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !jt.test(e) && (this.checked || !le.test(e))
                    }).map(function(e, t) {
                        var n = C(this).val();
                        return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Nt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Nt, "\r\n")
                        }
                    }).get()
                }
            });
            var qt = /%20/g,
                $t = /#.*$/,
                Ht = /([?&])_=[^&]*/,
                Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ot = /^(?:GET|HEAD)$/,
                Pt = /^\/\//,
                Rt = {},
                Ft = {},
                zt = "*/".concat("*"),
                It = S.createElement("a");

            function _t(i) {
                return function(e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, r = 0,
                        o = e.toLowerCase().match(H) || [];
                    if (x(t))
                        for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
                }
            }

            function Bt(t, r, o, i) {
                var a = {},
                    s = t === Ft;

                function u(e) {
                    var n;
                    return a[e] = !0, C.each(t[e] || [], function(e, t) {
                        t = t(r, o, i);
                        return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
                    }), n
                }
                return u(r.dataTypes[0]) || !a["*"] && u("*")
            }

            function Wt(e, t) {
                var n, r, o = C.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
                return r && C.extend(!0, e, r), e
            }
            It.href = At.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: At.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": zt,
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
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
                },
                ajaxPrefilter: _t(Rt),
                ajaxTransport: _t(Ft),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var u, l, c, n, f, r, d, p, o, h = C.ajaxSetup({}, t),
                        g = h.context || h,
                        m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                        y = C.Deferred(),
                        v = C.Callbacks("once memory"),
                        x = h.statusCode || {},
                        i = {},
                        a = {},
                        s = "canceled",
                        b = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (d) {
                                    if (!n)
                                        for (n = {}; t = Mt.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = n[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return d ? c : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == d && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, i[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == d && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                if (e)
                                    if (d) b.always(e[b.status]);
                                    else
                                        for (var t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                e = e || s;
                                return u && u.abort(e), w(0, e), this
                            }
                        };
                    if (y.promise(b), h.url = ((e || h.url || At.href) + "").replace(Pt, At.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) {
                        r = S.createElement("a");
                        try {
                            r.href = h.url, r.href = r.href, h.crossDomain = It.protocol + "//" + It.host != r.protocol + "//" + r.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Bt(Rt, h, t, b), d) return b;
                    for (o in (p = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), l = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (e = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (Dt.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(Ht, "$1"), e = (Dt.test(l) ? "&" : "?") + "_=" + kt.guid++ + e), h.url = l + e), h.ifModified && (C.lastModified[l] && b.setRequestHeader("If-Modified-Since", C.lastModified[l]), C.etag[l] && b.setRequestHeader("If-None-Match", C.etag[l])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(o, h.headers[o]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || d)) return b.abort();
                    if (s = "abort", v.add(h.complete), b.done(h.success), b.fail(h.error), u = Bt(Ft, h, t, b)) {
                        if (b.readyState = 1, p && m.trigger("ajaxSend", [b, h]), d) return b;
                        h.async && 0 < h.timeout && (f = T.setTimeout(function() {
                            b.abort("timeout")
                        }, h.timeout));
                        try {
                            d = !1, u.send(i, w)
                        } catch (e) {
                            if (d) throw e;
                            w(-1, e)
                        }
                    } else w(-1, "No Transport");

                    function w(e, t, n, r) {
                        var o, i, a, s = t;
                        d || (d = !0, f && T.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                            for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (o in s)
                                    if (s[o] && s[o].test(r)) {
                                        u.unshift(o);
                                        break
                                    } if (u[0] in n) i = u[0];
                            else {
                                for (o in n) {
                                    if (!u[0] || e.converters[o + " " + u[0]]) {
                                        i = o;
                                        break
                                    }
                                    a = a || o
                                }
                                i = i || a
                            }
                            if (i) return i !== u[0] && u.unshift(i), n[i]
                        }(h, b, n)), !r && -1 < C.inArray("script", h.dataTypes) && C.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), a = function(e, t, n, r) {
                            var o, i, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (i = c.shift(); i;)
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                                    if ("*" === i) i = u;
                                    else if ("*" !== u && u !== i) {
                                if (!(a = l[u + " " + i] || l["* " + i]))
                                    for (o in l)
                                        if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + i
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, a, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (C.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (C.etag[l] = n)), 204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, o = a.data, r = !(i = a.error))) : (i = s, !e && s || (s = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || s) + "", r ? y.resolveWith(g, [o, s, b]) : y.rejectWith(g, [b, s, i]), b.statusCode(x), x = void 0, p && m.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? o : i]), v.fireWith(g, [b, s]), p && (m.trigger("ajaxComplete", [b, h]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return b
                },
                getJSON: function(e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }), C.each(["get", "post"], function(e, o) {
                C[o] = function(e, t, n, r) {
                    return x(t) && (r = r || n, n = t, t = void 0), C.ajax(C.extend({
                        url: e,
                        type: o,
                        dataType: r,
                        data: t,
                        success: n
                    }, C.isPlainObject(e) && e))
                }
            }), C.ajaxPrefilter(function(e) {
                for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }), C._evalUrl = function(e, t, n) {
                return C.ajax({
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
                        C.globalEval(e, t, n)
                    }
                })
            }, C.fn.extend({
                wrapAll: function(e) {
                    return this[0] && (x(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(n) {
                    return x(n) ? this.each(function(e) {
                        C(this).wrapInner(n.call(this, e))
                    }) : this.each(function() {
                        var e = C(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                },
                wrap: function(t) {
                    var n = x(t);
                    return this.each(function(e) {
                        C(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        C(this).replaceWith(this.childNodes)
                    }), this
                }
            }), C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }, C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, C.ajaxSettings.xhr = function() {
                try {
                    return new T.XMLHttpRequest
                } catch (e) {}
            };
            var Ut = {
                    0: 200,
                    1223: 204
                },
                Xt = C.ajaxSettings.xhr();
            v.cors = !!Xt && "withCredentials" in Xt, v.ajax = Xt = !!Xt, C.ajaxTransport(function(o) {
                var i, a;
                if (v.cors || Xt && !o.crossDomain) return {
                    send: function(e, t) {
                        var n, r = o.xhr();
                        if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                            for (n in o.xhrFields) r[n] = o.xhrFields[n];
                        for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                        i = function(e) {
                            return function() {
                                i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()))
                            }
                        }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                            4 === r.readyState && T.setTimeout(function() {
                                i && a()
                            })
                        }, i = i("abort");
                        try {
                            r.send(o.hasContent && o.data || null)
                        } catch (e) {
                            if (i) throw e
                        }
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }), C.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e), e
                    }
                }
            }), C.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), C.ajaxTransport("script", function(n) {
                var r, o;
                if (n.crossDomain || n.scriptAttrs) return {
                    send: function(e, t) {
                        r = C("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", o = function(e) {
                            r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                        }), S.head.appendChild(r[0])
                    },
                    abort: function() {
                        o && o()
                    }
                }
            });
            var Zt, Vt = [],
                Yt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Vt.pop() || C.expando + "_" + kt.guid++;
                    return this[e] = !0, e
                }
            }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
                var r, o, i, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return i || C.error(r + " was not called"), i[0]
                }, e.dataTypes[0] = "json", o = T[r], T[r] = function() {
                    i = arguments
                }, n.always(function() {
                    void 0 === o ? C(T).removeProp(r) : T[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Vt.push(r)), i && x(o) && o(i[0]), i = o = void 0
                }), "script"
            }), v.createHTMLDocument = ((Zt = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Zt.childNodes.length), C.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), r = !n && [], (n = D.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, r), r && r.length && C(r).remove(), C.merge([], n.childNodes)));
                var r
            }, C.fn.load = function(e, t, n) {
                var r, o, i, a = this,
                    s = e.indexOf(" ");
                return -1 < s && (r = xt(e.slice(s)), e = e.slice(0, s)), x(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && C.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }), this
            }, C.expr.pseudos.animated = function(t) {
                return C.grep(C.timers, function(e) {
                    return t === e.elem
                }).length
            }, C.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, a, s = C.css(e, "position"),
                        u = C(e),
                        l = {};
                    "static" === s && (e.style.position = "relative"), i = u.offset(), r = C.css(e, "top"), a = C.css(e, "left"), a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (o = (s = u.position()).top, s.left) : (o = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = x(t) ? t.call(e, n, C.extend({}, i)) : t).top && (l.top = t.top - i.top + o), null != t.left && (l.left = t.left - i.left + a), "using" in t ? t.using.call(e, l) : u.css(l)
                }
            }, C.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        C.offset.setOffset(this, t, e)
                    });
                    var e, n = this[0];
                    return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - C.css(r, "marginTop", !0),
                            left: t.left - o.left - C.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                        return e || ne
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, o) {
                var i = "pageYOffset" === o;
                C.fn[t] = function(e) {
                    return I(this, function(e, t, n) {
                        var r;
                        return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[o] : e[t] : void(r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n)
                    }, t, e, arguments.length)
                }
            }), C.each(["top", "left"], function(e, n) {
                C.cssHooks[n] = Ze(v.pixelPosition, function(e, t) {
                    if (t) return t = Xe(e, n), Ie.test(t) ? C(e).position()[n] + "px" : t
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function(a, s) {
                C.each({
                    padding: "inner" + a,
                    content: s,
                    "": "outer" + a
                }, function(r, i) {
                    C.fn[i] = function(e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e),
                            o = r || (!0 === e || !0 === t ? "margin" : "border");
                        return I(this, function(e, t, n) {
                            var r;
                            return g(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
                        }, s, n ? e : void 0, n)
                    }
                })
            }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), C.fn.extend({
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
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
                C.fn[n] = function(e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            });
            var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            C.proxy = function(e, t) {
                var n, r;
                if ("string" == typeof t && (r = e[t], t = e, e = r), x(e)) return n = s.call(arguments, 2), (r = function() {
                    return e.apply(t || this, n.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, r
            }, C.holdReady = function(e) {
                e ? C.readyWait++ : C.ready(!0)
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = x, C.isWindow = g, C.camelCase = U, C.type = h, C.now = Date.now, C.isNumeric = function(e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, C.trim = function(e) {
                return null == e ? "" : (e + "").replace(Gt, "")
            }, "function" == typeof define && define.amd && define("jquery", [], function() {
                return C
            });
            var Jt = T.jQuery,
                Qt = T.$;
            return C.noConflict = function(e) {
                return T.$ === C && (T.$ = Qt), e && T.jQuery === C && (T.jQuery = Jt), C
            }, void 0 === e && (T.jQuery = T.$ = C), C
        })
    }, {}],
    md5: [function(e, t, n) {
        "use strict";

        function f(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function s(e, t, n, r, o, i) {
            return f((i = f(f(t, e), f(r, i))) << (o = o) | i >>> 32 - o, n)
        }

        function d(e, t, n, r, o, i, a) {
            return s(t & n | ~t & r, e, t, o, i, a)
        }

        function p(e, t, n, r, o, i, a) {
            return s(t & r | n & ~r, e, t, o, i, a)
        }

        function h(e, t, n, r, o, i, a) {
            return s(t ^ n ^ r, e, t, o, i, a)
        }

        function g(e, t, n, r, o, i, a) {
            return s(n ^ (t | ~r), e, t, o, i, a)
        }

        function a(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var n, r, o, i, a = 1732584193, s = -271733879, u = -1732584194, l = 271733878, c = 0; c < e.length; c += 16) a = d(n = a, r = s, o = u, i = l, e[c], 7, -680876936), l = d(l, a, s, u, e[c + 1], 12, -389564586), u = d(u, l, a, s, e[c + 2], 17, 606105819), s = d(s, u, l, a, e[c + 3], 22, -1044525330), a = d(a, s, u, l, e[c + 4], 7, -176418897), l = d(l, a, s, u, e[c + 5], 12, 1200080426), u = d(u, l, a, s, e[c + 6], 17, -1473231341), s = d(s, u, l, a, e[c + 7], 22, -45705983), a = d(a, s, u, l, e[c + 8], 7, 1770035416), l = d(l, a, s, u, e[c + 9], 12, -1958414417), u = d(u, l, a, s, e[c + 10], 17, -42063), s = d(s, u, l, a, e[c + 11], 22, -1990404162), a = d(a, s, u, l, e[c + 12], 7, 1804603682), l = d(l, a, s, u, e[c + 13], 12, -40341101), u = d(u, l, a, s, e[c + 14], 17, -1502002290), a = p(a, s = d(s, u, l, a, e[c + 15], 22, 1236535329), u, l, e[c + 1], 5, -165796510), l = p(l, a, s, u, e[c + 6], 9, -1069501632), u = p(u, l, a, s, e[c + 11], 14, 643717713), s = p(s, u, l, a, e[c], 20, -373897302), a = p(a, s, u, l, e[c + 5], 5, -701558691), l = p(l, a, s, u, e[c + 10], 9, 38016083), u = p(u, l, a, s, e[c + 15], 14, -660478335), s = p(s, u, l, a, e[c + 4], 20, -405537848), a = p(a, s, u, l, e[c + 9], 5, 568446438), l = p(l, a, s, u, e[c + 14], 9, -1019803690), u = p(u, l, a, s, e[c + 3], 14, -187363961), s = p(s, u, l, a, e[c + 8], 20, 1163531501), a = p(a, s, u, l, e[c + 13], 5, -1444681467), l = p(l, a, s, u, e[c + 2], 9, -51403784), u = p(u, l, a, s, e[c + 7], 14, 1735328473), a = h(a, s = p(s, u, l, a, e[c + 12], 20, -1926607734), u, l, e[c + 5], 4, -378558), l = h(l, a, s, u, e[c + 8], 11, -2022574463), u = h(u, l, a, s, e[c + 11], 16, 1839030562), s = h(s, u, l, a, e[c + 14], 23, -35309556), a = h(a, s, u, l, e[c + 1], 4, -1530992060), l = h(l, a, s, u, e[c + 4], 11, 1272893353), u = h(u, l, a, s, e[c + 7], 16, -155497632), s = h(s, u, l, a, e[c + 10], 23, -1094730640), a = h(a, s, u, l, e[c + 13], 4, 681279174), l = h(l, a, s, u, e[c], 11, -358537222), u = h(u, l, a, s, e[c + 3], 16, -722521979), s = h(s, u, l, a, e[c + 6], 23, 76029189), a = h(a, s, u, l, e[c + 9], 4, -640364487), l = h(l, a, s, u, e[c + 12], 11, -421815835), u = h(u, l, a, s, e[c + 15], 16, 530742520), a = g(a, s = h(s, u, l, a, e[c + 2], 23, -995338651), u, l, e[c], 6, -198630844), l = g(l, a, s, u, e[c + 7], 10, 1126891415), u = g(u, l, a, s, e[c + 14], 15, -1416354905), s = g(s, u, l, a, e[c + 5], 21, -57434055), a = g(a, s, u, l, e[c + 12], 6, 1700485571), l = g(l, a, s, u, e[c + 3], 10, -1894986606), u = g(u, l, a, s, e[c + 10], 15, -1051523), s = g(s, u, l, a, e[c + 1], 21, -2054922799), a = g(a, s, u, l, e[c + 8], 6, 1873313359), l = g(l, a, s, u, e[c + 15], 10, -30611744), u = g(u, l, a, s, e[c + 6], 15, -1560198380), s = g(s, u, l, a, e[c + 13], 21, 1309151649), a = g(a, s, u, l, e[c + 4], 6, -145523070), l = g(l, a, s, u, e[c + 11], 10, -1120210379), u = g(u, l, a, s, e[c + 2], 15, 718787259), s = g(s, u, l, a, e[c + 9], 21, -343485551), a = f(a, n), s = f(s, r), u = f(u, o), l = f(l, i);
            return [a, s, u, l]
        }

        function u(e) {
            for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
            return t
        }

        function l(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function r(e) {
            for (var t, n = "0123456789abcdef", r = "", o = 0; o < e.length; o += 1) t = e.charCodeAt(o), r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
            return r
        }

        function o(e) {
            return unescape(encodeURIComponent(e))
        }

        function i(e) {
            return u(a(l(e = o(e)), 8 * e.length))
        }

        function c(e, t) {
            return function(e, t) {
                var n, r = l(e),
                    o = [],
                    i = [];
                for (o[15] = i[15] = void 0, 16 < r.length && (r = a(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], i[n] = 1549556828 ^ r[n];
                return t = a(o.concat(l(t)), 512 + 8 * t.length), u(a(i.concat(t), 640))
            }(o(e), o(t))
        }
        t.exports = function(e, t, n) {
            return t ? n ? c(t, e) : r(c(t, e)) : n ? i(e) : r(i(e))
        }
    }, {}],
    web: [function(e, t, n) {
        var r, o, i = function() {
            String.prototype.capitalize = function() {
                return this.charAt(0).toUpperCase() + this.slice(1)
            }, String.prototype.camelize = function() {
                var e, t = this.split("-"),
                    n = [];
                for (n.push(t[0].toLowerCase()), e = 1; e < t.length; e++) n.push(t[e].capitalize());
                return n.join("")
            };
            var p = {
                types: {
                    none: null,
                    any: "^[ -~a-zA-Z0-9ÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\t\\n\\r]*$",
                    text: "^[a-zA-Z0-9ÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\_\\-\\\\\"\\'\\ \\?\\!\\.\\,\\:\\;\\(\\)\\/\\#\\&\\@\\$\\%\\*\\+\\=\\~\\`\\^\\[\\]\\{\\}\\|\\n\\r]+$",
                    utf8any: null,
                    utf8text: "^[^\\<\\>]+$",
                    utf8content: null,
                    data: "^[ -~a-zA-Z0-9ÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\t\\n\\r]*$",
                    alnum: "^[a-zA-Z0-9]+$",
                    alpha: "^[a-zA-Z]+$",
                    digits: "^[0-9]+$",
                    bool: null,
                    domain: "^[a-z0-9][a-z0-9\\-\\.]*\\.[a-z][a-z0-9\\-]+$",
                    email: "^([a-zA-Z0-9][a-zA-Z0-9\\_\\-\\.\\+]*)@([a-zA-Z0-9\\-\\.]+)\\.([a-zA-Z]+)$",
                    emailname: "^([ a-zA-Z0-9\\_\\-\\.\\+ÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\-\\'\\\"]+) <([a-zA-Z0-9][a-zA-Z0-9\\_\\-\\.\\+]*)@([a-zA-Z0-9\\-\\.]+)\\.([a-zA-Z]+)>$",
                    tel: "^[0-9\\-\\+\\(\\)\\s]+$",
                    float: "^-?([0-9]+)(\\.([0-9]+)){0,1}$",
                    id: "^[a-z0-9\\-]+$",
                    recordid: "^[0-9]{16}$",
                    int: "^-?([0-9]+)$",
                    ip: "^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$",
                    name: "^([a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\-\\']+(?:\\.)?(?: [a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð\\-\\']+(?:\\.)?)*)$",
                    password: "^[ -~]+$",
                    request: "^([/!#$&-;=+?-[]_a-zA-Z0-9~]|%[0-9a-fA-F]{2})+$",
                    title: "^[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð0-9\\_\\-\\\\\"\\'\\ \\?\\!\\.\\,\\:\\;\\(\\)\\/\\#\\&\\@\\$\\%\\*\\+\\=]+$",
                    uri: "^[a-z0-9\\-\\.]+:[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð0-9\\~\\!\\@\\#\\$\\%\\&\\-\\_\\+\\=\\;\\,\\.\\?\\/\\:]+$",
                    url: "^https?:\\/\\/[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð0-9\\~\\!\\@\\#\\$\\%\\&\\-\\_\\+\\=\\;\\,\\.\\?\\/\\:]+$",
                    href: "^(#|#[a-zA-Z0-9\\_\\-]+|[a-z0-9\\-\\.]+:[a-zA-ZÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð0-9\\~\\!\\@\\#\\$\\%\\&\\-\\_\\+\\=\\;\\,\\.\\?\\/\\:]+)$",
                    username: "^[a-zA-Z0-9\\_]+$",
                    word: "^[a-zA-Z0-9\\_\\-]+$",
                    lcword: "^[a-z0-9\\_\\-]+$",
                    key: "^[a-z0-9\\_\\-\\.]+$",
                    mfacode: "^[A-Z0-9\\s]+$",
                    base64: "^[a-zA-Z0-9+=/]+$",
                    safebase64: "^[a-zA-Z0-9+=/%]+$",
                    htmlattr: "^[a-zA-Z0-9\\_\\-\\.\\:\\@]+$",
                    htmlacolor: "(^#[a-fA-F0-9]{6}$|^#[a-fA-F0-9]{8}$)",
                    htmlcolor: "^#[a-fA-F0-9]{6}$",
                    rgbacolor: "rgba\\([0-9]+,\\s*[0-9]+,\\s*[0-9]+,\\s*[0-9\\.]+\\)",
                    rgbcolor: "rgb\\([0-9]+,\\s*[0-9]+,\\s*[0-9]+\\)"
                },
                typeNames: {
                    none: !(Array.countValues = function(e) {
                        var t, n = [];
                        for (t in e) e[t] in n || (n[e[t]] = 0), n[e[t]]++;
                        return n
                    }),
                    any: !1,
                    text: !1,
                    utf8text: !1,
                    alnum: "alphanumeric string",
                    alpha: "alphabetic string",
                    digits: "string of digits",
                    bool: "boolean",
                    email: "email address",
                    float: "decimal value",
                    id: !1,
                    int: "integer",
                    ip: "IP address",
                    name: !1,
                    tel: "telephone number",
                    title: !1,
                    url: "URL",
                    username: !1,
                    word: !1,
                    htmlacolor: "HTML color",
                    htmlcolor: "HTML color",
                    rgbacolor: "RGB color",
                    rgbcolor: "RGB color"
                },
                cookie: function(e, t, n, r) {
                    if ("" === t) return r = r || "/", document.cookie = e + "=; expires=Thu, 1 Jan 1970 12:00:00 UTC; path=" + r, null;
                    var o;
                    if (t) return n = n || 0, (o = new Date).setTime(o.getTime() + n), o = o.toGMTString(), r = r || "/", document.cookie = e + "=" + t + "; expires=" + o + "; path=" + r, t;
                    var i, a = document.cookie.split(";");
                    for (s in a)
                        if ((i = a[s].split("="))[0].trim() == e) return unescape(i[1]);
                    return null
                },
                condenseBlankLines: function(e) {
                    for (var t = e.split("\n"), n = [], r = !1, o = 0; o < t.length; o++) t[o] = t[o].trim(), "" == t[o] ? 1 != r && (r = !0, n.push("")) : (r = !1, n.push(t[o]));
                    return n.join("\n").trim()
                },
                is: function(e, t) {
                    return !t || ("function" == typeof e ? e(t) : !p.types[e] || !!t.match(new RegExp(p.types[e])))
                },
                escapeHTML: function(e) {
                    var t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    };
                    return e = e.replace(/[&<>"']/g, function(e) {
                        return t[e]
                    })
                },
                typeName: function(e) {
                    return p.typeNames[e] || !1
                },
                fieldValue: function(e, t, n) {
                    var r, t = "#" == t[0] ? e.find(t) : e.find('[name="' + t + '"]');
                    return "checkbox" == t.attr("type") ? (n && t.prop("checked", n).trigger("change"), t.prop("checked")) : r = "radio" == t.attr("type") ? (n && t.filter('[value="' + n + '"]').prop("checked", !0).trigger("change"), null == (r = t.filter(":checked").val()) ? "" : r) : (!n && "" !== n || t.val(n).trigger("change"), null == (r = t.val()) ? "" : r)
                },
                scrollTo: function(e, t, n) {
                    var r = $(window);
                    return n = n || $("body,html"), e = Math.max(0, e.offset().top - (r.height() - e.outerHeight()) / 2), Math.abs(e - r.scrollTop()) < 50 ? (n.scrollTop(e), t && t()) : n.stop().animate({
                        scrollTop: e
                    }, 750, "swing", t), !0
                },
                friendlyfy: function(e) {
                    return e = (e = (e = (e = (e = (e = (e = (e = (e = e.toLowerCase()).replace(" & ", " and ")).replace(/([a-zA-Z0-9])\.([a-z]+)/g, "$1 dot $2")).replace("-", "")).replace(/[\s]+/g, "-")).replace(/[\/]+/g, "-")).replace(/[^a-z0-9\-]/g, "")).replace(/^[\s\-]/g, "")).replace(/[\s\-]$/, "")
                },
                bit: {
                    A: 1,
                    B: 2,
                    C: 4,
                    D: 8,
                    E: 16,
                    F: 32,
                    G: 64,
                    H: 128,
                    I: 256,
                    J: 512,
                    K: 1024,
                    L: 2048,
                    M: 4096,
                    N: 8192,
                    O: 16384,
                    P: 32768,
                    Q: 65536,
                    R: 131072,
                    S: 262144,
                    T: 524288,
                    U: 1048576,
                    V: 2097152,
                    W: 4194304,
                    X: 8388608,
                    Y: 16777216,
                    Z: 33554432,
                    AA: 67108864,
                    AB: 134217728,
                    AC: 268435456,
                    AD: 536870912,
                    AE: 1073741824,
                    has: function(e, t) {
                        return !!(e & t)
                    },
                    on: function(e, t) {
                        return e |= t
                    },
                    off: function(e, t) {
                        return e &= ~t
                    }
                },
                date: {
                    offsetValue: 0,
                    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    offset: function(e) {
                        return void 0 !== e && (p.date.offsetValue = parseInt(e)), p.date.offsetValue
                    },
                    timestamp: function() {
                        return parseInt(Date.now() / 1e3) - p.date.offset()
                    },
                    absolute: function(e, t) {
                        e = e || p.date.timestamp(), t = t || 1;
                        var n, r, o, i, a, s, u, l, c, f = new Date,
                            d = "";
                        switch (f.setTime(1e3 * e), n = p.date.months[f.getMonth()], r = f.getDate(), o = f.getFullYear(), i = f.getHours(), a = f.getMinutes(), s = f.getSeconds(), u = p.date.days[f.getDay()], c = 12 < i ? (l = i - 12, "pm") : (l = i, "am"), t) {
                            case 1:
                                d = n + " " + r + ", " + o;
                                break;
                            case 2:
                                d = n + " " + r + ", " + o + " " + l + ":" + a + c;
                                break;
                            case 3:
                                d = u + ", " + n + " " + r + ", " + o + " " + i + ":" + a + ":" + s
                        }
                        return d
                    },
                    relative: function(e, t, n) {
                        e = e || p.date.timestamp(), t = t || 1, n = n || 129600;
                        var r, o, i, a, s, u = p.date.timestamp(),
                            l = "",
                            c = !1;
                        if (u < e ? (r = e - u, c = !0) : (r = u - e, l = " ago"), !1 !== n && n < r) return p.date.absolute(e, t);
                        if (r < 60) switch (t) {
                            case 1:
                                if (r < 30) return "just now";
                                if (r < 60) return "about a minute" + l;
                            case 2:
                                return r + " second" + (1 != r ? "s" : "") + l;
                            case 3:
                            default:
                                return r + " secs" + l
                        }
                        if (r < 3600) switch (i = Math.floor(r / 60), seconds = r -= 60 * i, t) {
                            case 1:
                                if (45 < i) return "about an hour" + l;
                            case 2:
                                return i + " minute" + (1 != i ? "s" : "") + l;
                            case 3:
                            default:
                                return i + " mins " + seconds + " secs" + l
                        }
                        if (r < 86400) {
                            if (0 === (r -= 3600 * (o = Math.floor(r / 3600)))) return o + " hrs" + l;
                            switch (i = Math.floor(r / 60), t) {
                                case 2:
                                    return o + " hour" + (1 != o ? "s" : "") + l;
                                case 1:
                                case 3:
                                default:
                                    return o + " hrs " + i + " mins" + l
                            }
                        }
                        if (r < 604800) switch (r -= 86400 * (a = Math.floor(r / 86400)), o = Math.floor(r / 3600), t) {
                            case 1:
                                if (1 == a && o < 6) return c ? "tomorrow" : "yesterday";
                            case 2:
                                return 12 < o && a++, a + " day" + (1 != a ? "s" : "") + l;
                            case 3:
                            default:
                                return a + " days " + o + " hrs" + l
                        }
                        switch (r -= 604800 * (s = Math.floor(r / 604800)), r -= 86400 * (a = Math.floor(r / 86400)), o = Math.floor(r / 3600), t) {
                            case 1:
                                if (1 == s && a < 2) return "about a week" + l;
                                if (4 == s) return "about a month" + l;
                            case 2:
                                return 4 < a && s++, 4 <= s ? (months = Math.floor(s / 4), 12 <= months ? (years = Math.floor(months / 12), years + " year" + (1 != years ? "s" : "") + l) : months + " month" + (1 != months ? "s" : "") + l) : s + " week" + (1 != s ? "s" : "") + l;
                            case 3:
                            default:
                                return s + " wks " + a + " days" + l
                        }
                        return ""
                    }
                }
            };
            return p
        }();
        r = this, o = function() {
            return i
        }, "function" == typeof define && define.amd ? define([], o) : "object" == typeof n ? t.exports = i : r.web = i, window.web = i
    }, {}]
}, {}, []);