(function () {
  function d(a, b) {
    try {
      for (var c in b)
        Object.defineProperty(a.prototype, c, { value: b[c], enumerable: !1 });
    } catch (d) {
      a.prototype = b;
    }
  }
  function f(a) {
    var b = -1,
      c = a.length,
      d = [];
    while (++b < c) d.push(a[b]);
    return d;
  }
  function g(a) {
    return Array.prototype.slice.call(a);
  }
  function j() {}
  function m(a) {
    return a;
  }
  function n() {
    return this;
  }
  function o() {
    return !0;
  }
  function p(a) {
    return typeof a == "function"
      ? a
      : function () {
          return a;
        };
  }
  function q(a, b, c) {
    return function () {
      var d = c.apply(b, arguments);
      return arguments.length ? a : d;
    };
  }
  function r(a) {
    return a != null && !isNaN(a);
  }
  function s(a) {
    return a.length;
  }
  function u(a) {
    return a == null;
  }
  function v(a) {
    return a.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
  }
  function w(a) {
    var b = 1;
    while ((a * b) % 1) b *= 10;
    return b;
  }
  function z() {}
  function A(a) {
    function d() {
      var c = b,
        d = -1,
        e = c.length,
        f;
      while (++d < e) (f = c[d].on) && f.apply(this, arguments);
      return a;
    }
    var b = [],
      c = new j();
    return (
      (d.on = function (d, e) {
        var f = c.get(d),
          g;
        return arguments.length < 2
          ? f && f.on
          : (f &&
              ((f.on = null),
              (b = b.slice(0, (g = b.indexOf(f))).concat(b.slice(g + 1))),
              c.remove(d)),
            e && b.push(c.set(d, { on: e })),
            a);
      }),
      d
    );
  }
  function D(a, b) {
    return (
      b -
      (a
        ? 1 +
          Math.floor(
            Math.log(
              a + Math.pow(10, 1 + Math.floor(Math.log(a) / Math.LN10) - b)
            ) / Math.LN10
          )
        : 1)
    );
  }
  function E(a) {
    return a + "";
  }
  function F(a) {
    var b = a.lastIndexOf("."),
      c = b >= 0 ? a.substring(b) : ((b = a.length), ""),
      d = [];
    while (b > 0) d.push(a.substring((b -= 3), b + 3));
    return d.reverse().join(",") + c;
  }
  function H(a, b) {
    var c = Math.pow(10, Math.abs(8 - b) * 3);
    return {
      scale:
        b > 8
          ? function (a) {
              return a / c;
            }
          : function (a) {
              return a * c;
            },
      symbol: a,
    };
  }
  function N(a) {
    return function (b) {
      return b <= 0 ? 0 : b >= 1 ? 1 : a(b);
    };
  }
  function O(a) {
    return function (b) {
      return 1 - a(1 - b);
    };
  }
  function P(a) {
    return function (b) {
      return 0.5 * (b < 0.5 ? a(2 * b) : 2 - a(2 - 2 * b));
    };
  }
  function Q(a) {
    return a;
  }
  function R(a) {
    return function (b) {
      return Math.pow(b, a);
    };
  }
  function S(a) {
    return 1 - Math.cos((a * Math.PI) / 2);
  }
  function T(a) {
    return Math.pow(2, 10 * (a - 1));
  }
  function U(a) {
    return 1 - Math.sqrt(1 - a * a);
  }
  function V(a, b) {
    var c;
    return (
      arguments.length < 2 && (b = 0.45),
      arguments.length < 1
        ? ((a = 1), (c = b / 4))
        : (c = (b / (2 * Math.PI)) * Math.asin(1 / a)),
      function (d) {
        return (
          1 + a * Math.pow(2, 10 * -d) * Math.sin(((d - c) * 2 * Math.PI) / b)
        );
      }
    );
  }
  function W(a) {
    return (
      a || (a = 1.70158),
      function (b) {
        return b * b * ((a + 1) * b - a);
      }
    );
  }
  function X(a) {
    return a < 1 / 2.75
      ? 7.5625 * a * a
      : a < 2 / 2.75
      ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
      : a < 2.5 / 2.75
      ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
      : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
  }
  function Y() {
    d3.event.stopPropagation(), d3.event.preventDefault();
  }
  function Z() {
    var a = d3.event,
      b;
    while ((b = a.sourceEvent)) a = b;
    return a;
  }
  function $(a) {
    var b = new z(),
      c = 0,
      d = arguments.length;
    while (++c < d) b[arguments[c]] = A(b);
    return (
      (b.of = function (c, d) {
        return function (e) {
          try {
            var f = (e.sourceEvent = d3.event);
            (e.target = a), (d3.event = e), b[e.type].apply(c, d);
          } finally {
            d3.event = f;
          }
        };
      }),
      b
    );
  }
  function ba(a) {
    return a == "transform" ? d3.interpolateTransform : d3.interpolate;
  }
  function bb(a, b) {
    return (
      (b = b - (a = +a) ? 1 / (b - a) : 0),
      function (c) {
        return (c - a) * b;
      }
    );
  }
  function bc(a, b) {
    return (
      (b = b - (a = +a) ? 1 / (b - a) : 0),
      function (c) {
        return Math.max(0, Math.min(1, (c - a) * b));
      }
    );
  }
  function bd(a, b, c) {
    return new be(a, b, c);
  }
  function be(a, b, c) {
    (this.r = a), (this.g = b), (this.b = c);
  }
  function bf(a) {
    return a < 16
      ? "0" + Math.max(0, a).toString(16)
      : Math.min(255, a).toString(16);
  }
  function bg(a, b, c) {
    var d = 0,
      e = 0,
      f = 0,
      g,
      h,
      i;
    g = /([a-z]+)\((.*)\)/i.exec(a);
    if (g) {
      h = g[2].split(",");
      switch (g[1]) {
        case "hsl":
          return c(
            parseFloat(h[0]),
            parseFloat(h[1]) / 100,
            parseFloat(h[2]) / 100
          );
        case "rgb":
          return b(bi(h[0]), bi(h[1]), bi(h[2]));
      }
    }
    return (i = bj.get(a))
      ? b(i.r, i.g, i.b)
      : (a != null &&
          a.charAt(0) === "#" &&
          (a.length === 4
            ? ((d = a.charAt(1)),
              (d += d),
              (e = a.charAt(2)),
              (e += e),
              (f = a.charAt(3)),
              (f += f))
            : a.length === 7 &&
              ((d = a.substring(1, 3)),
              (e = a.substring(3, 5)),
              (f = a.substring(5, 7))),
          (d = parseInt(d, 16)),
          (e = parseInt(e, 16)),
          (f = parseInt(f, 16))),
        b(d, e, f));
  }
  function bh(a, b, c) {
    var d = Math.min((a /= 255), (b /= 255), (c /= 255)),
      e = Math.max(a, b, c),
      f = e - d,
      g,
      h,
      i = (e + d) / 2;
    return (
      f
        ? ((h = i < 0.5 ? f / (e + d) : f / (2 - e - d)),
          a == e
            ? (g = (b - c) / f + (b < c ? 6 : 0))
            : b == e
            ? (g = (c - a) / f + 2)
            : (g = (a - b) / f + 4),
          (g *= 60))
        : (h = g = 0),
      bk(g, h, i)
    );
  }
  function bi(a) {
    var b = parseFloat(a);
    return a.charAt(a.length - 1) === "%" ? Math.round(b * 2.55) : b;
  }
  function bk(a, b, c) {
    return new bl(a, b, c);
  }
  function bl(a, b, c) {
    (this.h = a), (this.s = b), (this.l = c);
  }
  function bm(a, b, c) {
    function f(a) {
      return (
        a > 360 ? (a -= 360) : a < 0 && (a += 360),
        a < 60
          ? d + ((e - d) * a) / 60
          : a < 180
          ? e
          : a < 240
          ? d + ((e - d) * (240 - a)) / 60
          : d
      );
    }
    function g(a) {
      return Math.round(f(a) * 255);
    }
    var d, e;
    return (
      (a %= 360),
      a < 0 && (a += 360),
      (b = b < 0 ? 0 : b > 1 ? 1 : b),
      (c = c < 0 ? 0 : c > 1 ? 1 : c),
      (e = c <= 0.5 ? c * (1 + b) : c + b - c * b),
      (d = 2 * c - e),
      bd(g(a + 120), g(a), g(a - 120))
    );
  }
  function bn(a) {
    return i(a, bt), a;
  }
  function bu(a) {
    return function () {
      return bo(a, this);
    };
  }
  function bv(a) {
    return function () {
      return bp(a, this);
    };
  }
  function bw(a, b) {
    function f() {
      if ((b = this.classList)) return b.add(a);
      var b = this.className,
        d = b.baseVal != null,
        e = d ? b.baseVal : b;
      (c.lastIndex = 0),
        c.test(e) ||
          ((e = v(e + " " + a)), d ? (b.baseVal = e) : (this.className = e));
    }
    function g() {
      if ((b = this.classList)) return b.remove(a);
      var b = this.className,
        d = b.baseVal != null,
        e = d ? b.baseVal : b;
      (e = v(e.replace(c, " "))), d ? (b.baseVal = e) : (this.className = e);
    }
    function h() {
      (b.apply(this, arguments) ? f : g).call(this);
    }
    var c = new RegExp("(^|\\s+)" + d3.requote(a) + "(\\s+|$)", "g");
    if (arguments.length < 2) {
      var d = this.node();
      if ((e = d.classList)) return e.contains(a);
      var e = d.className;
      return (c.lastIndex = 0), c.test(e.baseVal != null ? e.baseVal : e);
    }
    return this.each(typeof b == "function" ? h : b ? f : g);
  }
  function bx(a) {
    return { __data__: a };
  }
  function by(a) {
    return function () {
      return bs(this, a);
    };
  }
  function bz(a) {
    return (
      arguments.length || (a = d3.ascending),
      function (b, c) {
        return a(b && b.__data__, c && c.__data__);
      }
    );
  }
  function bA(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      for (var e = a[c], f = 0, g = e.length, h; f < g; f++)
        (h = e[f]) && b(h, f, c);
    return a;
  }
  function bC(a) {
    return i(a, bD), a;
  }
  function bE(a, b, c) {
    i(a, bI);
    var d = new j(),
      e = d3.dispatch("start", "end"),
      f = bQ;
    return (
      (a.id = b),
      (a.time = c),
      (a.tween = function (b, c) {
        return arguments.length < 2
          ? d.get(b)
          : (c == null ? d.remove(b) : d.set(b, c), a);
      }),
      (a.ease = function (b) {
        return arguments.length
          ? ((f = typeof b == "function" ? b : d3.ease.apply(d3, arguments)), a)
          : f;
      }),
      (a.each = function (b, c) {
        return arguments.length < 2 ? bR.call(a, b) : (e.on(b, c), a);
      }),
      d3.timer(
        function (g) {
          return bA(a, function (a, h, i) {
            function o(f) {
              return m.active > b
                ? q()
                : ((m.active = b),
                  d.forEach(function (b, c) {
                    (c = c.call(a, n, h)) && j.push(c);
                  }),
                  e.start.call(a, n, h),
                  p(f) || d3.timer(p, 0, c),
                  1);
            }
            function p(c) {
              if (m.active !== b) return q();
              var d = (c - k) / l,
                g = f(d),
                i = j.length;
              while (i > 0) j[--i].call(a, g);
              if (d >= 1)
                return q(), (bK = b), e.end.call(a, n, h), (bK = 0), 1;
            }
            function q() {
              return --m.count || delete a.__transition__, 1;
            }
            var j = [],
              k = a.delay,
              l = a.duration,
              m =
                (a = a.node).__transition__ ||
                (a.__transition__ = { active: 0, count: 0 }),
              n = a.__data__;
            ++m.count, k <= g ? o(g) : d3.timer(o, k, c);
          });
        },
        0,
        c
      ),
      a
    );
  }
  function bG(a, b, c) {
    return c != "" && bF;
  }
  function bH(a, b) {
    function d(a, d, e) {
      var f = b.call(this, a, d);
      return f == null ? e != "" && bF : e != f && c(e, f);
    }
    function e(a, d, e) {
      return e != b && c(e, b);
    }
    var c = ba(a);
    return typeof b == "function" ? d : b == null ? bG : ((b += ""), e);
  }
  function bR(a) {
    var b = bK,
      c = bQ,
      d = bO,
      e = bP;
    return (
      (bK = this.id),
      (bQ = this.ease()),
      bA(this, function (b, c, d) {
        (bO = b.delay),
          (bP = b.duration),
          a.call((b = b.node), b.__data__, c, d);
      }),
      (bK = b),
      (bQ = c),
      (bO = d),
      (bP = e),
      this
    );
  }
  function bV() {
    var a,
      b = Date.now(),
      c = bS;
    while (c)
      (a = b - c.then), a >= c.delay && (c.flush = c.callback(a)), (c = c.next);
    var d = bW() - b;
    d > 24
      ? (isFinite(d) && (clearTimeout(bU), (bU = setTimeout(bV, d))), (bT = 0))
      : ((bT = 1), bX(bV));
  }
  function bW() {
    var a = null,
      b = bS,
      c = Infinity;
    while (b)
      b.flush
        ? (b = a ? (a.next = b.next) : (bS = b.next))
        : ((c = Math.min(c, b.then + b.delay)), (b = (a = b).next));
    return c;
  }
  function bY(a) {
    var b = [a.a, a.b],
      c = [a.c, a.d],
      d = b$(b),
      e = bZ(b, c),
      f = b$(b_(c, b, -e)) || 0;
    b[0] * c[1] < c[0] * b[1] &&
      ((b[0] *= -1), (b[1] *= -1), (d *= -1), (e *= -1)),
      (this.rotate =
        (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * ca),
      (this.translate = [a.e, a.f]),
      (this.scale = [d, f]),
      (this.skew = f ? Math.atan2(e, f) * ca : 0);
  }
  function bZ(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function b$(a) {
    var b = Math.sqrt(bZ(a, a));
    return b && ((a[0] /= b), (a[1] /= b)), b;
  }
  function b_(a, b, c) {
    return (a[0] += c * b[0]), (a[1] += c * b[1]), a;
  }
  function cc(a, b) {
    var c = a.ownerSVGElement || a;
    if (c.createSVGPoint) {
      var d = c.createSVGPoint();
      if (cb < 0 && (window.scrollX || window.scrollY)) {
        c = d3
          .select(document.body)
          .append("svg")
          .style("position", "absolute")
          .style("top", 0)
          .style("left", 0);
        var e = c[0][0].getScreenCTM();
        (cb = !e.f && !e.e), c.remove();
      }
      return (
        cb
          ? ((d.x = b.pageX), (d.y = b.pageY))
          : ((d.x = b.clientX), (d.y = b.clientY)),
        (d = d.matrixTransform(a.getScreenCTM().inverse())),
        [d.x, d.y]
      );
    }
    var f = a.getBoundingClientRect();
    return [b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop];
  }
  function cd() {}
  function ce(a) {
    var b = a[0],
      c = a[a.length - 1];
    return b < c ? [b, c] : [c, b];
  }
  function cf(a) {
    return a.rangeExtent ? a.rangeExtent() : ce(a.range());
  }
  function cg(a, b) {
    var c = 0,
      d = a.length - 1,
      e = a[c],
      f = a[d],
      g;
    f < e && ((g = c), (c = d), (d = g), (g = e), (e = f), (f = g));
    if ((g = f - e)) (b = b(g)), (a[c] = b.floor(e)), (a[d] = b.ceil(f));
    return a;
  }
  function ch() {
    return Math;
  }
  function ci(a, b, c, d) {
    function g() {
      var g = Math.min(a.length, b.length) > 2 ? cp : co,
        i = d ? bc : bb;
      return (e = g(a, b, i, c)), (f = g(b, a, i, d3.interpolate)), h;
    }
    function h(a) {
      return e(a);
    }
    var e, f;
    return (
      (h.invert = function (a) {
        return f(a);
      }),
      (h.domain = function (b) {
        return arguments.length ? ((a = b.map(Number)), g()) : a;
      }),
      (h.range = function (a) {
        return arguments.length ? ((b = a), g()) : b;
      }),
      (h.rangeRound = function (a) {
        return h.range(a).interpolate(d3.interpolateRound);
      }),
      (h.clamp = function (a) {
        return arguments.length ? ((d = a), g()) : d;
      }),
      (h.interpolate = function (a) {
        return arguments.length ? ((c = a), g()) : c;
      }),
      (h.ticks = function (b) {
        return cm(a, b);
      }),
      (h.tickFormat = function (b) {
        return cn(a, b);
      }),
      (h.nice = function () {
        return cg(a, ck), g();
      }),
      (h.copy = function () {
        return ci(a, b, c, d);
      }),
      g()
    );
  }
  function cj(a, b) {
    return d3.rebind(a, b, "range", "rangeRound", "interpolate", "clamp");
  }
  function ck(a) {
    return (
      (a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1)),
      {
        floor: function (b) {
          return Math.floor(b / a) * a;
        },
        ceil: function (b) {
          return Math.ceil(b / a) * a;
        },
      }
    );
  }
  function cl(a, b) {
    var c = ce(a),
      d = c[1] - c[0],
      e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
      f = (b / d) * e;
    return (
      f <= 0.15 ? (e *= 10) : f <= 0.35 ? (e *= 5) : f <= 0.75 && (e *= 2),
      (c[0] = Math.ceil(c[0] / e) * e),
      (c[1] = Math.floor(c[1] / e) * e + e * 0.5),
      (c[2] = e),
      c
    );
  }
  function cm(a, b) {
    return d3.range.apply(d3, cl(a, b));
  }
  function cn(a, b) {
    return d3.format(
      ",." +
        Math.max(0, -Math.floor(Math.log(cl(a, b)[2]) / Math.LN10 + 0.01)) +
        "f"
    );
  }
  function co(a, b, c, d) {
    var e = c(a[0], a[1]),
      f = d(b[0], b[1]);
    return function (a) {
      return f(e(a));
    };
  }
  function cp(a, b, c, d) {
    var e = [],
      f = [],
      g = 0,
      h = Math.min(a.length, b.length) - 1;
    a[h] < a[0] && ((a = a.slice().reverse()), (b = b.slice().reverse()));
    while (++g <= h) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
    return function (b) {
      var c = d3.bisect(a, b, 1, h) - 1;
      return f[c](e[c](b));
    };
  }
  function cq(a, b) {
    function d(c) {
      return a(b(c));
    }
    var c = b.pow;
    return (
      (d.invert = function (b) {
        return c(a.invert(b));
      }),
      (d.domain = function (e) {
        return arguments.length
          ? ((b = e[0] < 0 ? ct : cs), (c = b.pow), a.domain(e.map(b)), d)
          : a.domain().map(c);
      }),
      (d.nice = function () {
        return a.domain(cg(a.domain(), ch)), d;
      }),
      (d.ticks = function () {
        var d = ce(a.domain()),
          e = [];
        if (d.every(isFinite)) {
          var f = Math.floor(d[0]),
            g = Math.ceil(d[1]),
            h = c(d[0]),
            i = c(d[1]);
          if (b === ct) {
            e.push(c(f));
            for (; f++ < g; ) for (var j = 9; j > 0; j--) e.push(c(f) * j);
          } else {
            for (; f < g; f++) for (var j = 1; j < 10; j++) e.push(c(f) * j);
            e.push(c(f));
          }
          for (f = 0; e[f] < h; f++);
          for (g = e.length; e[g - 1] > i; g--);
          e = e.slice(f, g);
        }
        return e;
      }),
      (d.tickFormat = function (a, e) {
        arguments.length < 2 && (e = cr);
        if (arguments.length < 1) return e;
        var f = Math.max(0.1, a / d.ticks().length),
          g = b === ct ? ((h = -1e-12), Math.floor) : ((h = 1e-12), Math.ceil),
          h;
        return function (a) {
          return a / c(g(b(a) + h)) <= f ? e(a) : "";
        };
      }),
      (d.copy = function () {
        return cq(a.copy(), b);
      }),
      cj(d, a)
    );
  }
  function cs(a) {
    return Math.log(a < 0 ? 0 : a) / Math.LN10;
  }
  function ct(a) {
    return -Math.log(a > 0 ? 0 : -a) / Math.LN10;
  }
  function cu(a, b) {
    function e(b) {
      return a(c(b));
    }
    var c = cv(b),
      d = cv(1 / b);
    return (
      (e.invert = function (b) {
        return d(a.invert(b));
      }),
      (e.domain = function (b) {
        return arguments.length ? (a.domain(b.map(c)), e) : a.domain().map(d);
      }),
      (e.ticks = function (a) {
        return cm(e.domain(), a);
      }),
      (e.tickFormat = function (a) {
        return cn(e.domain(), a);
      }),
      (e.nice = function () {
        return e.domain(cg(e.domain(), ck));
      }),
      (e.exponent = function (a) {
        if (!arguments.length) return b;
        var f = e.domain();
        return (c = cv((b = a))), (d = cv(1 / b)), e.domain(f);
      }),
      (e.copy = function () {
        return cu(a.copy(), b);
      }),
      cj(e, a)
    );
  }
  function cv(a) {
    return function (b) {
      return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a);
    };
  }
  function cw(a, b) {
    function f(b) {
      return d[((c.get(b) || c.set(b, a.push(b))) - 1) % d.length];
    }
    function g(b, c) {
      return d3.range(a.length).map(function (a) {
        return b + c * a;
      });
    }
    var c, d, e;
    return (
      (f.domain = function (d) {
        if (!arguments.length) return a;
        (a = []), (c = new j());
        var e = -1,
          g = d.length,
          h;
        while (++e < g) c.has((h = d[e])) || c.set(h, a.push(h));
        return f[b.t](b.x, b.p);
      }),
      (f.range = function (a) {
        return arguments.length
          ? ((d = a), (e = 0), (b = { t: "range", x: a }), f)
          : d;
      }),
      (f.rangePoints = function (c, h) {
        arguments.length < 2 && (h = 0);
        var i = c[0],
          j = c[1],
          k = (j - i) / (a.length - 1 + h);
        return (
          (d = g(a.length < 2 ? (i + j) / 2 : i + (k * h) / 2, k)),
          (e = 0),
          (b = { t: "rangePoints", x: c, p: h }),
          f
        );
      }),
      (f.rangeBands = function (c, h) {
        arguments.length < 2 && (h = 0);
        var i = c[1] < c[0],
          j = c[i - 0],
          k = c[1 - i],
          l = (k - j) / (a.length + h);
        return (
          (d = g(j + l * h, l)),
          i && d.reverse(),
          (e = l * (1 - h)),
          (b = { t: "rangeBands", x: c, p: h }),
          f
        );
      }),
      (f.rangeRoundBands = function (c, h) {
        arguments.length < 2 && (h = 0);
        var i = c[1] < c[0],
          j = c[i - 0],
          k = c[1 - i],
          l = Math.floor((k - j) / (a.length + h)),
          m = k - j - (a.length - h) * l;
        return (
          (d = g(j + Math.round(m / 2), l)),
          i && d.reverse(),
          (e = Math.round(l * (1 - h))),
          (b = { t: "rangeRoundBands", x: c, p: h }),
          f
        );
      }),
      (f.rangeBand = function () {
        return e;
      }),
      (f.rangeExtent = function () {
        return ce(b.x);
      }),
      (f.copy = function () {
        return cw(a, b);
      }),
      f.domain(a)
    );
  }
  function cB(a, b) {
    function d() {
      var d = 0,
        f = a.length,
        g = b.length;
      c = [];
      while (++d < g) c[d - 1] = d3.quantile(a, d / g);
      return e;
    }
    function e(a) {
      return isNaN((a = +a)) ? NaN : b[d3.bisect(c, a)];
    }
    var c;
    return (
      (e.domain = function (b) {
        return arguments.length
          ? ((a = b
              .filter(function (a) {
                return !isNaN(a);
              })
              .sort(d3.ascending)),
            d())
          : a;
      }),
      (e.range = function (a) {
        return arguments.length ? ((b = a), d()) : b;
      }),
      (e.quantiles = function () {
        return c;
      }),
      (e.copy = function () {
        return cB(a, b);
      }),
      d()
    );
  }
  function cC(a, b, c) {
    function f(b) {
      return c[Math.max(0, Math.min(e, Math.floor(d * (b - a))))];
    }
    function g() {
      return (d = c.length / (b - a)), (e = c.length - 1), f;
    }
    var d, e;
    return (
      (f.domain = function (c) {
        return arguments.length
          ? ((a = +c[0]), (b = +c[c.length - 1]), g())
          : [a, b];
      }),
      (f.range = function (a) {
        return arguments.length ? ((c = a), g()) : c;
      }),
      (f.copy = function () {
        return cC(a, b, c);
      }),
      g()
    );
  }
  function cD(a) {
    function b(a) {
      return +a;
    }
    return (
      (b.invert = b),
      (b.domain = b.range =
        function (c) {
          return arguments.length ? ((a = c.map(b)), b) : a;
        }),
      (b.ticks = function (b) {
        return cm(a, b);
      }),
      (b.tickFormat = function (b) {
        return cn(a, b);
      }),
      (b.copy = function () {
        return cD(a);
      }),
      b
    );
  }
  function cG(a) {
    return a.innerRadius;
  }
  function cH(a) {
    return a.outerRadius;
  }
  function cI(a) {
    return a.startAngle;
  }
  function cJ(a) {
    return a.endAngle;
  }
  function cK(a) {
    function h(e) {
      function o() {
        h.push("M", f(a(i), g));
      }
      var h = [],
        i = [],
        j = -1,
        k = e.length,
        l,
        m = p(b),
        n = p(c);
      while (++j < k)
        d.call(this, (l = e[j]), j)
          ? i.push([+m.call(this, l, j), +n.call(this, l, j)])
          : i.length && (o(), (i = []));
      return i.length && o(), h.length ? h.join("") : null;
    }
    var b = cL,
      c = cM,
      d = o,
      e = cN,
      f = cP,
      g = 0.7;
    return (
      (h.x = function (a) {
        return arguments.length ? ((b = a), h) : b;
      }),
      (h.y = function (a) {
        return arguments.length ? ((c = a), h) : c;
      }),
      (h.defined = function (a) {
        return arguments.length ? ((d = a), h) : d;
      }),
      (h.interpolate = function (a) {
        return arguments.length
          ? (cO.has((a += "")) || (a = cN), (f = cO.get((e = a))), h)
          : e;
      }),
      (h.tension = function (a) {
        return arguments.length ? ((g = a), h) : g;
      }),
      h
    );
  }
  function cL(a) {
    return a[0];
  }
  function cM(a) {
    return a[1];
  }
  function cP(a) {
    var b = 0,
      c = a.length,
      d = a[0],
      e = [d[0], ",", d[1]];
    while (++b < c) e.push("L", (d = a[b])[0], ",", d[1]);
    return e.join("");
  }
  function cQ(a) {
    var b = 0,
      c = a.length,
      d = a[0],
      e = [d[0], ",", d[1]];
    while (++b < c) e.push("V", (d = a[b])[1], "H", d[0]);
    return e.join("");
  }
  function cR(a) {
    var b = 0,
      c = a.length,
      d = a[0],
      e = [d[0], ",", d[1]];
    while (++b < c) e.push("H", (d = a[b])[0], "V", d[1]);
    return e.join("");
  }
  function cS(a, b) {
    return a.length < 4 ? cP(a) : a[1] + cV(a.slice(1, a.length - 1), cW(a, b));
  }
  function cT(a, b) {
    return a.length < 3
      ? cP(a)
      : a[0] +
          cV((a.push(a[0]), a), cW([a[a.length - 2]].concat(a, [a[1]]), b));
  }
  function cU(a, b, c) {
    return a.length < 3 ? cP(a) : a[0] + cV(a, cW(a, b));
  }
  function cV(a, b) {
    if (b.length < 1 || (a.length != b.length && a.length != b.length + 2))
      return cP(a);
    var c = a.length != b.length,
      d = "",
      e = a[0],
      f = a[1],
      g = b[0],
      h = g,
      i = 1;
    c &&
      ((d +=
        "Q" +
        (f[0] - (g[0] * 2) / 3) +
        "," +
        (f[1] - (g[1] * 2) / 3) +
        "," +
        f[0] +
        "," +
        f[1]),
      (e = a[1]),
      (i = 2));
    if (b.length > 1) {
      (h = b[1]),
        (f = a[i]),
        i++,
        (d +=
          "C" +
          (e[0] + g[0]) +
          "," +
          (e[1] + g[1]) +
          "," +
          (f[0] - h[0]) +
          "," +
          (f[1] - h[1]) +
          "," +
          f[0] +
          "," +
          f[1]);
      for (var j = 2; j < b.length; j++, i++)
        (f = a[i]),
          (h = b[j]),
          (d +=
            "S" +
            (f[0] - h[0]) +
            "," +
            (f[1] - h[1]) +
            "," +
            f[0] +
            "," +
            f[1]);
    }
    if (c) {
      var k = a[i];
      d +=
        "Q" +
        (f[0] + (h[0] * 2) / 3) +
        "," +
        (f[1] + (h[1] * 2) / 3) +
        "," +
        k[0] +
        "," +
        k[1];
    }
    return d;
  }
  function cW(a, b) {
    var c = [],
      d = (1 - b) / 2,
      e,
      f = a[0],
      g = a[1],
      h = 1,
      i = a.length;
    while (++h < i)
      (e = f),
        (f = g),
        (g = a[h]),
        c.push([d * (g[0] - e[0]), d * (g[1] - e[1])]);
    return c;
  }
  function cX(a) {
    if (a.length < 3) return cP(a);
    var b = 1,
      c = a.length,
      d = a[0],
      e = d[0],
      f = d[1],
      g = [e, e, e, (d = a[1])[0]],
      h = [f, f, f, d[1]],
      i = [e, ",", f];
    dd(i, g, h);
    while (++b < c)
      (d = a[b]), g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), dd(i, g, h);
    b = -1;
    while (++b < 2)
      g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), dd(i, g, h);
    return i.join("");
  }
  function cY(a) {
    if (a.length < 4) return cP(a);
    var b = [],
      c = -1,
      d = a.length,
      e,
      f = [0],
      g = [0];
    while (++c < 3) (e = a[c]), f.push(e[0]), g.push(e[1]);
    b.push(c_(dc, f) + "," + c_(dc, g)), --c;
    while (++c < d)
      (e = a[c]), f.shift(), f.push(e[0]), g.shift(), g.push(e[1]), dd(b, f, g);
    return b.join("");
  }
  function cZ(a) {
    var b,
      c = -1,
      d = a.length,
      e = d + 4,
      f,
      g = [],
      h = [];
    while (++c < 4) (f = a[c % d]), g.push(f[0]), h.push(f[1]);
    (b = [c_(dc, g), ",", c_(dc, h)]), --c;
    while (++c < e)
      (f = a[c % d]),
        g.shift(),
        g.push(f[0]),
        h.shift(),
        h.push(f[1]),
        dd(b, g, h);
    return b.join("");
  }
  function c$(a, b) {
    var c = a.length - 1;
    if (c) {
      var d = a[0][0],
        e = a[0][1],
        f = a[c][0] - d,
        g = a[c][1] - e,
        h = -1,
        i,
        j;
      while (++h <= c)
        (i = a[h]),
          (j = h / c),
          (i[0] = b * i[0] + (1 - b) * (d + j * f)),
          (i[1] = b * i[1] + (1 - b) * (e + j * g));
    }
    return cX(a);
  }
  function c_(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  function dd(a, b, c) {
    a.push(
      "C",
      c_(da, b),
      ",",
      c_(da, c),
      ",",
      c_(db, b),
      ",",
      c_(db, c),
      ",",
      c_(dc, b),
      ",",
      c_(dc, c)
    );
  }
  function de(a, b) {
    return (b[1] - a[1]) / (b[0] - a[0]);
  }
  function df(a) {
    var b = 0,
      c = a.length - 1,
      d = [],
      e = a[0],
      f = a[1],
      g = (d[0] = de(e, f));
    while (++b < c) d[b] = g + (g = de((e = f), (f = a[b + 1])));
    return (d[b] = g), d;
  }
  function dg(a) {
    var b = [],
      c,
      d,
      e,
      f,
      g = df(a),
      h = -1,
      i = a.length - 1;
    while (++h < i)
      (c = de(a[h], a[h + 1])),
        Math.abs(c) < 1e-6
          ? (g[h] = g[h + 1] = 0)
          : ((d = g[h] / c),
            (e = g[h + 1] / c),
            (f = d * d + e * e),
            f > 9 &&
              ((f = (c * 3) / Math.sqrt(f)),
              (g[h] = f * d),
              (g[h + 1] = f * e)));
    h = -1;
    while (++h <= i)
      (f =
        (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) /
        (6 * (1 + g[h] * g[h]))),
        b.push([f || 0, g[h] * f || 0]);
    return b;
  }
  function dh(a) {
    return a.length < 3 ? cP(a) : a[0] + cV(a, dg(a));
  }
  function di(a) {
    var b,
      c = -1,
      d = a.length,
      e,
      f;
    while (++c < d)
      (b = a[c]),
        (e = b[0]),
        (f = b[1] + cE),
        (b[0] = e * Math.cos(f)),
        (b[1] = e * Math.sin(f));
    return a;
  }
  function dj(a) {
    function l(g) {
      function y() {
        l.push("M", h(a(n), k), j, i(a(m.reverse()), k), "Z");
      }
      var l = [],
        m = [],
        n = [],
        o = -1,
        q = g.length,
        r,
        s = p(b),
        t = p(d),
        u =
          b === c
            ? function () {
                return w;
              }
            : p(c),
        v =
          d === e
            ? function () {
                return x;
              }
            : p(e),
        w,
        x;
      while (++o < q)
        f.call(this, (r = g[o]), o)
          ? (m.push([(w = +s.call(this, r, o)), (x = +t.call(this, r, o))]),
            n.push([+u.call(this, r, o), +v.call(this, r, o)]))
          : m.length && (y(), (m = []), (n = []));
      return m.length && y(), l.length ? l.join("") : null;
    }
    var b = cL,
      c = cL,
      d = 0,
      e = cM,
      f = o,
      g = cN,
      h = cP,
      i = cP,
      j = "L",
      k = 0.7;
    return (
      (l.x = function (a) {
        return arguments.length ? ((b = c = a), l) : c;
      }),
      (l.x0 = function (a) {
        return arguments.length ? ((b = a), l) : b;
      }),
      (l.x1 = function (a) {
        return arguments.length ? ((c = a), l) : c;
      }),
      (l.y = function (a) {
        return arguments.length ? ((d = e = a), l) : e;
      }),
      (l.y0 = function (a) {
        return arguments.length ? ((d = a), l) : d;
      }),
      (l.y1 = function (a) {
        return arguments.length ? ((e = a), l) : e;
      }),
      (l.defined = function (a) {
        return arguments.length ? ((f = a), l) : f;
      }),
      (l.interpolate = function (a) {
        return arguments.length
          ? (cO.has((a += "")) || (a = cN),
            (h = cO.get((g = a))),
            (i = h.reverse || h),
            (j = /-closed$/.test(a) ? "M" : "L"),
            l)
          : g;
      }),
      (l.tension = function (a) {
        return arguments.length ? ((k = a), l) : k;
      }),
      l
    );
  }
  function dk(a) {
    return a.source;
  }
  function dl(a) {
    return a.target;
  }
  function dm(a) {
    return a.radius;
  }
  function dn(a) {
    return a.startAngle;
  }
  function dp(a) {
    return a.endAngle;
  }
  function dq(a) {
    return [a.x, a.y];
  }
  function dr(a) {
    return function () {
      var b = a.apply(this, arguments),
        c = b[0],
        d = b[1] + cE;
      return [c * Math.cos(d), c * Math.sin(d)];
    };
  }
  function ds() {
    return 64;
  }
  function dt() {
    return "circle";
  }
  function du(a) {
    var b = Math.sqrt(a / Math.PI);
    return (
      "M0," +
      b +
      "A" +
      b +
      "," +
      b +
      " 0 1,1 0," +
      -b +
      "A" +
      b +
      "," +
      b +
      " 0 1,1 0," +
      b +
      "Z"
    );
  }
  function dy(a, b) {
    a.attr("transform", function (a) {
      return "translate(" + b(a) + ",0)";
    });
  }
  function dz(a, b) {
    a.attr("transform", function (a) {
      return "translate(0," + b(a) + ")";
    });
  }
  function dA(a, b, c) {
    e = [];
    if (c && b.length > 1) {
      var d = ce(a.domain()),
        e,
        f = -1,
        g = b.length,
        h = (b[1] - b[0]) / ++c,
        i,
        j;
      while (++f < g)
        for (i = c; --i > 0; ) (j = +b[f] - i * h) >= d[0] && e.push(j);
      for (--f, i = 0; ++i < c && (j = +b[f] + i * h) < d[1]; ) e.push(j);
    }
    return e;
  }
  function dF() {
    dD ||
      (dD = d3
        .select("body")
        .append("div")
        .style("visibility", "hidden")
        .style("top", 0)
        .style("height", 0)
        .style("width", 0)
        .style("overflow-y", "scroll")
        .append("div")
        .style("height", "2000px")
        .node().parentNode);
    var a = d3.event,
      b;
    try {
      (dD.scrollTop = 1e3), dD.dispatchEvent(a), (b = 1e3 - dD.scrollTop);
    } catch (c) {
      b = a.wheelDelta || -a.detail * 5;
    }
    return b;
  }
  function dG(a) {
    var b = a.source,
      c = a.target,
      d = dI(b, c),
      e = [b];
    while (b !== d) (b = b.parent), e.push(b);
    var f = e.length;
    while (c !== d) e.splice(f, 0, c), (c = c.parent);
    return e;
  }
  function dH(a) {
    var b = [],
      c = a.parent;
    while (c != null) b.push(a), (a = c), (c = c.parent);
    return b.push(a), b;
  }
  function dI(a, b) {
    if (a === b) return a;
    var c = dH(a),
      d = dH(b),
      e = c.pop(),
      f = d.pop(),
      g = null;
    while (e === f) (g = e), (e = c.pop()), (f = d.pop());
    return g;
  }
  function dL(a) {
    a.fixed |= 2;
  }
  function dM(a) {
    a !== dK && (a.fixed &= 1);
  }
  function dN() {
    (dK.fixed &= 1), (dJ = dK = null);
  }
  function dO() {
    (dK.px = d3.event.x), (dK.py = d3.event.y), dJ.resume();
  }
  function dP(a, b, c) {
    var d = 0,
      e = 0;
    a.charge = 0;
    if (!a.leaf) {
      var f = a.nodes,
        g = f.length,
        h = -1,
        i;
      while (++h < g) {
        i = f[h];
        if (i == null) continue;
        dP(i, b, c),
          (a.charge += i.charge),
          (d += i.charge * i.cx),
          (e += i.charge * i.cy);
      }
    }
    if (a.point) {
      a.leaf ||
        ((a.point.x += Math.random() - 0.5),
        (a.point.y += Math.random() - 0.5));
      var j = b * c[a.point.index];
      (a.charge += a.pointCharge = j),
        (d += j * a.point.x),
        (e += j * a.point.y);
    }
    (a.cx = d / a.charge), (a.cy = e / a.charge);
  }
  function dQ(a) {
    return 20;
  }
  function dR(a) {
    return 1;
  }
  function dT(a) {
    return a.x;
  }
  function dU(a) {
    return a.y;
  }
  function dV(a, b, c) {
    (a.y0 = b), (a.y = c);
  }
  function dY(a) {
    return d3.range(a.length);
  }
  function dZ(a) {
    var b = -1,
      c = a[0].length,
      d = [];
    while (++b < c) d[b] = 0;
    return d;
  }
  function d$(a) {
    var b = 1,
      c = 0,
      d = a[0][1],
      e,
      f = a.length;
    for (; b < f; ++b) (e = a[b][1]) > d && ((c = b), (d = e));
    return c;
  }
  function d_(a) {
    return a.reduce(ea, 0);
  }
  function ea(a, b) {
    return a + b[1];
  }
  function eb(a, b) {
    return ec(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1));
  }
  function ec(a, b) {
    var c = -1,
      d = +a[0],
      e = (a[1] - d) / b,
      f = [];
    while (++c <= b) f[c] = e * c + d;
    return f;
  }
  function ed(a) {
    return [d3.min(a), d3.max(a)];
  }
  function ee(a, b) {
    return (
      d3.rebind(a, b, "sort", "children", "value"),
      (a.links = ei),
      (a.nodes = function (b) {
        return (ej = !0), (a.nodes = a)(b);
      }),
      a
    );
  }
  function ef(a) {
    return a.children;
  }
  function eg(a) {
    return a.value;
  }
  function eh(a, b) {
    return b.value - a.value;
  }
  function ei(a) {
    return d3.merge(
      a.map(function (a) {
        return (a.children || []).map(function (b) {
          return { source: a, target: b };
        });
      })
    );
  }
  function ek(a, b) {
    return a.value - b.value;
  }
  function el(a, b) {
    var c = a._pack_next;
    (a._pack_next = b),
      (b._pack_prev = a),
      (b._pack_next = c),
      (c._pack_prev = b);
  }
  function em(a, b) {
    (a._pack_next = b), (b._pack_prev = a);
  }
  function en(a, b) {
    var c = b.x - a.x,
      d = b.y - a.y,
      e = a.r + b.r;
    return e * e - c * c - d * d > 0.001;
  }
  function eo(a) {
    function l(a) {
      (b = Math.min(a.x - a.r, b)),
        (c = Math.max(a.x + a.r, c)),
        (d = Math.min(a.y - a.r, d)),
        (e = Math.max(a.y + a.r, e));
    }
    var b = Infinity,
      c = -Infinity,
      d = Infinity,
      e = -Infinity,
      f = a.length,
      g,
      h,
      i,
      j,
      k;
    a.forEach(ep), (g = a[0]), (g.x = -g.r), (g.y = 0), l(g);
    if (f > 1) {
      (h = a[1]), (h.x = h.r), (h.y = 0), l(h);
      if (f > 2) {
        (i = a[2]),
          et(g, h, i),
          l(i),
          el(g, i),
          (g._pack_prev = i),
          el(i, h),
          (h = g._pack_next);
        for (var m = 3; m < f; m++) {
          et(g, h, (i = a[m]));
          var n = 0,
            o = 1,
            p = 1;
          for (j = h._pack_next; j !== h; j = j._pack_next, o++)
            if (en(j, i)) {
              n = 1;
              break;
            }
          if (n == 1)
            for (k = g._pack_prev; k !== j._pack_prev; k = k._pack_prev, p++)
              if (en(k, i)) break;
          n
            ? (o < p || (o == p && h.r < g.r) ? em(g, (h = j)) : em((g = k), h),
              m--)
            : (el(g, i), (h = i), l(i));
        }
      }
    }
    var q = (b + c) / 2,
      r = (d + e) / 2,
      s = 0;
    for (var m = 0; m < f; m++) {
      var t = a[m];
      (t.x -= q),
        (t.y -= r),
        (s = Math.max(s, t.r + Math.sqrt(t.x * t.x + t.y * t.y)));
    }
    return a.forEach(eq), s;
  }
  function ep(a) {
    a._pack_next = a._pack_prev = a;
  }
  function eq(a) {
    delete a._pack_next, delete a._pack_prev;
  }
  function er(a) {
    var b = a.children;
    b && b.length ? (b.forEach(er), (a.r = eo(b))) : (a.r = Math.sqrt(a.value));
  }
  function es(a, b, c, d) {
    var e = a.children;
    (a.x = b += d * a.x), (a.y = c += d * a.y), (a.r *= d);
    if (e) {
      var f = -1,
        g = e.length;
      while (++f < g) es(e[f], b, c, d);
    }
  }
  function et(a, b, c) {
    var d = a.r + c.r,
      e = b.x - a.x,
      f = b.y - a.y;
    if (d && (e || f)) {
      var g = b.r + c.r,
        h = Math.sqrt(e * e + f * f),
        i = Math.max(-1, Math.min(1, (d * d + h * h - g * g) / (2 * d * h))),
        j = Math.acos(i),
        k = i * (d /= h),
        l = Math.sin(j) * d;
      (c.x = a.x + k * e + l * f), (c.y = a.y + k * f - l * e);
    } else (c.x = a.x + d), (c.y = a.y);
  }
  function eu(a) {
    return (
      1 +
      d3.max(a, function (a) {
        return a.y;
      })
    );
  }
  function ev(a) {
    return (
      a.reduce(function (a, b) {
        return a + b.x;
      }, 0) / a.length
    );
  }
  function ew(a) {
    var b = a.children;
    return b && b.length ? ew(b[0]) : a;
  }
  function ex(a) {
    var b = a.children,
      c;
    return b && (c = b.length) ? ex(b[c - 1]) : a;
  }
  function ey(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function ez(a) {
    var b = a.children;
    return b && b.length ? b[0] : a._tree.thread;
  }
  function eA(a) {
    var b = a.children,
      c;
    return b && (c = b.length) ? b[c - 1] : a._tree.thread;
  }
  function eB(a, b) {
    var c = a.children;
    if (c && (e = c.length)) {
      var d,
        e,
        f = -1;
      while (++f < e) b((d = eB(c[f], b)), a) > 0 && (a = d);
    }
    return a;
  }
  function eC(a, b) {
    return a.x - b.x;
  }
  function eD(a, b) {
    return b.x - a.x;
  }
  function eE(a, b) {
    return a.depth - b.depth;
  }
  function eF(a, b) {
    function c(a, d) {
      var e = a.children;
      if (e && (i = e.length)) {
        var f,
          g = null,
          h = -1,
          i;
        while (++h < i) (f = e[h]), c(f, g), (g = f);
      }
      b(a, d);
    }
    c(a, null);
  }
  function eG(a) {
    var b = 0,
      c = 0,
      d = a.children,
      e = d.length,
      f;
    while (--e >= 0)
      (f = d[e]._tree),
        (f.prelim += b),
        (f.mod += b),
        (b += f.shift + (c += f.change));
  }
  function eH(a, b, c) {
    (a = a._tree), (b = b._tree);
    var d = c / (b.number - a.number);
    (a.change += d),
      (b.change -= d),
      (b.shift += c),
      (b.prelim += c),
      (b.mod += c);
  }
  function eI(a, b, c) {
    return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c;
  }
  function eJ(a) {
    return { x: a.x, y: a.y, dx: a.dx, dy: a.dy };
  }
  function eK(a, b) {
    var c = a.x + b[3],
      d = a.y + b[0],
      e = a.dx - b[1] - b[3],
      f = a.dy - b[0] - b[2];
    return (
      e < 0 && ((c += e / 2), (e = 0)),
      f < 0 && ((d += f / 2), (f = 0)),
      { x: c, y: d, dx: e, dy: f }
    );
  }
  function eL(a) {
    return a.map(eM).join(",");
  }
  function eM(a) {
    return /[",\n]/.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a;
  }
  function eO(a, b) {
    return function (c) {
      return c && a.hasOwnProperty(c.type) ? a[c.type](c) : b;
    };
  }
  function eP(a) {
    return (
      "m0," +
      a +
      "a" +
      a +
      "," +
      a +
      " 0 1,1 0," +
      -2 * a +
      "a" +
      a +
      "," +
      a +
      " 0 1,1 0," +
      2 * a +
      "z"
    );
  }
  function eQ(a, b) {
    eR.hasOwnProperty(a.type) && eR[a.type](a, b);
  }
  function eS(a, b) {
    eQ(a.geometry, b);
  }
  function eT(a, b) {
    for (var c = a.features, d = 0, e = c.length; d < e; d++)
      eQ(c[d].geometry, b);
  }
  function eU(a, b) {
    for (var c = a.geometries, d = 0, e = c.length; d < e; d++) eQ(c[d], b);
  }
  function eV(a, b) {
    for (var c = a.coordinates, d = 0, e = c.length; d < e; d++)
      b.apply(null, c[d]);
  }
  function eW(a, b) {
    for (var c = a.coordinates, d = 0, e = c.length; d < e; d++)
      for (var f = c[d], g = 0, h = f.length; g < h; g++) b.apply(null, f[g]);
  }
  function eX(a, b) {
    for (var c = a.coordinates, d = 0, e = c.length; d < e; d++)
      for (var f = c[d][0], g = 0, h = f.length; g < h; g++)
        b.apply(null, f[g]);
  }
  function eY(a, b) {
    b.apply(null, a.coordinates);
  }
  function eZ(a, b) {
    for (var c = a.coordinates[0], d = 0, e = c.length; d < e; d++)
      b.apply(null, c[d]);
  }
  function e$(a) {
    return a.source;
  }
  function e_(a) {
    return a.target;
  }
  function fa() {
    function o(a) {
      var b = Math.sin((a *= m)) * n,
        c = Math.sin(m - a) * n,
        g = c * e + b * k,
        h = c * f + b * l,
        i = c * d + b * j;
      return [
        Math.atan2(h, g) / eN,
        Math.atan2(i, Math.sqrt(g * g + h * h)) / eN,
      ];
    }
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n;
    return (
      (o.distance = function () {
        return (
          m == null &&
            (n =
              1 /
              Math.sin(
                (m = Math.acos(
                  Math.max(-1, Math.min(1, d * j + c * i * Math.cos(g - a)))
                ))
              )),
          m
        );
      }),
      (o.source = function (g) {
        var h = Math.cos((a = g[0] * eN)),
          i = Math.sin(a);
        return (
          (c = Math.cos((b = g[1] * eN))),
          (d = Math.sin(b)),
          (e = c * h),
          (f = c * i),
          (m = null),
          o
        );
      }),
      (o.target = function (a) {
        var b = Math.cos((g = a[0] * eN)),
          c = Math.sin(g);
        return (
          (i = Math.cos((h = a[1] * eN))),
          (j = Math.sin(h)),
          (k = i * b),
          (l = i * c),
          (m = null),
          o
        );
      }),
      o
    );
  }
  function fb(a, b) {
    var c = fa().source(a).target(b);
    return c.distance(), c;
  }
  function fe(a) {
    var b = 0,
      c = 0;
    for (;;) {
      if (a(b, c)) return [b, c];
      b === 0 ? ((b = c + 1), (c = 0)) : ((b -= 1), (c += 1));
    }
  }
  function ff(a, b, c, d) {
    var e, f, g, h, i, j, k;
    return (
      (e = d[a]),
      (f = e[0]),
      (g = e[1]),
      (e = d[b]),
      (h = e[0]),
      (i = e[1]),
      (e = d[c]),
      (j = e[0]),
      (k = e[1]),
      (k - g) * (h - f) - (i - g) * (j - f) > 0
    );
  }
  function fg(a, b, c) {
    return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0]);
  }
  function fh(a, b, c, d) {
    var e = a[0],
      f = b[0],
      g = c[0],
      h = d[0],
      i = a[1],
      j = b[1],
      k = c[1],
      l = d[1],
      m = e - g,
      n = f - e,
      o = h - g,
      p = i - k,
      q = j - i,
      r = l - k,
      s = (o * p - r * m) / (r * n - o * q);
    return [e + s * n, i + s * q];
  }
  function fj(a, b) {
    var c = {
        list: a
          .map(function (a, b) {
            return { index: b, x: a[0], y: a[1] };
          })
          .sort(function (a, b) {
            return a.y < b.y
              ? -1
              : a.y > b.y
              ? 1
              : a.x < b.x
              ? -1
              : a.x > b.x
              ? 1
              : 0;
          }),
        bottomSite: null,
      },
      d = {
        list: [],
        leftEnd: null,
        rightEnd: null,
        init: function () {
          (d.leftEnd = d.createHalfEdge(null, "l")),
            (d.rightEnd = d.createHalfEdge(null, "l")),
            (d.leftEnd.r = d.rightEnd),
            (d.rightEnd.l = d.leftEnd),
            d.list.unshift(d.leftEnd, d.rightEnd);
        },
        createHalfEdge: function (a, b) {
          return { edge: a, side: b, vertex: null, l: null, r: null };
        },
        insert: function (a, b) {
          (b.l = a), (b.r = a.r), (a.r.l = b), (a.r = b);
        },
        leftBound: function (a) {
          var b = d.leftEnd;
          do b = b.r;
          while (b != d.rightEnd && e.rightOf(b, a));
          return (b = b.l), b;
        },
        del: function (a) {
          (a.l.r = a.r), (a.r.l = a.l), (a.edge = null);
        },
        right: function (a) {
          return a.r;
        },
        left: function (a) {
          return a.l;
        },
        leftRegion: function (a) {
          return a.edge == null ? c.bottomSite : a.edge.region[a.side];
        },
        rightRegion: function (a) {
          return a.edge == null ? c.bottomSite : a.edge.region[fi[a.side]];
        },
      },
      e = {
        bisect: function (a, b) {
          var c = { region: { l: a, r: b }, ep: { l: null, r: null } },
            d = b.x - a.x,
            e = b.y - a.y,
            f = d > 0 ? d : -d,
            g = e > 0 ? e : -e;
          return (
            (c.c = a.x * d + a.y * e + (d * d + e * e) * 0.5),
            f > g
              ? ((c.a = 1), (c.b = e / d), (c.c /= d))
              : ((c.b = 1), (c.a = d / e), (c.c /= e)),
            c
          );
        },
        intersect: function (a, b) {
          var c = a.edge,
            d = b.edge;
          if (!c || !d || c.region.r == d.region.r) return null;
          var e = c.a * d.b - c.b * d.a;
          if (Math.abs(e) < 1e-10) return null;
          var f = (c.c * d.b - d.c * c.b) / e,
            g = (d.c * c.a - c.c * d.a) / e,
            h = c.region.r,
            i = d.region.r,
            j,
            k;
          h.y < i.y || (h.y == i.y && h.x < i.x)
            ? ((j = a), (k = c))
            : ((j = b), (k = d));
          var l = f >= k.region.r.x;
          return (l && j.side === "l") || (!l && j.side === "r")
            ? null
            : { x: f, y: g };
        },
        rightOf: function (a, b) {
          var c = a.edge,
            d = c.region.r,
            e = b.x > d.x;
          if (e && a.side === "l") return 1;
          if (!e && a.side === "r") return 0;
          if (c.a === 1) {
            var f = b.y - d.y,
              g = b.x - d.x,
              h = 0,
              i = 0;
            (!e && c.b < 0) || (e && c.b >= 0)
              ? (i = h = f >= c.b * g)
              : ((i = b.x + b.y * c.b > c.c),
                c.b < 0 && (i = !i),
                i || (h = 1));
            if (!h) {
              var j = d.x - c.region.l.x;
              (i =
                c.b * (g * g - f * f) < j * f * (1 + (2 * g) / j + c.b * c.b)),
                c.b < 0 && (i = !i);
            }
          } else {
            var k = c.c - c.a * b.x,
              l = b.y - k,
              m = b.x - d.x,
              n = k - d.y;
            i = l * l > m * m + n * n;
          }
          return a.side === "l" ? i : !i;
        },
        endPoint: function (a, c, d) {
          a.ep[c] = d;
          if (!a.ep[fi[c]]) return;
          b(a);
        },
        distance: function (a, b) {
          var c = a.x - b.x,
            d = a.y - b.y;
          return Math.sqrt(c * c + d * d);
        },
      },
      f = {
        list: [],
        insert: function (a, b, c) {
          (a.vertex = b), (a.ystar = b.y + c);
          for (var d = 0, e = f.list, g = e.length; d < g; d++) {
            var h = e[d];
            if (a.ystar > h.ystar || (a.ystar == h.ystar && b.x > h.vertex.x))
              continue;
            break;
          }
          e.splice(d, 0, a);
        },
        del: function (a) {
          for (var b = 0, c = f.list, d = c.length; b < d && c[b] != a; ++b);
          c.splice(b, 1);
        },
        empty: function () {
          return f.list.length === 0;
        },
        nextEvent: function (a) {
          for (var b = 0, c = f.list, d = c.length; b < d; ++b)
            if (c[b] == a) return c[b + 1];
          return null;
        },
        min: function () {
          var a = f.list[0];
          return { x: a.vertex.x, y: a.ystar };
        },
        extractMin: function () {
          return f.list.shift();
        },
      };
    d.init(), (c.bottomSite = c.list.shift());
    var g = c.list.shift(),
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t;
    for (;;) {
      f.empty() || (h = f.min());
      if (g && (f.empty() || g.y < h.y || (g.y == h.y && g.x < h.x)))
        (i = d.leftBound(g)),
          (j = d.right(i)),
          (n = d.rightRegion(i)),
          (s = e.bisect(n, g)),
          (m = d.createHalfEdge(s, "l")),
          d.insert(i, m),
          (q = e.intersect(i, m)),
          q && (f.del(i), f.insert(i, q, e.distance(q, g))),
          (i = m),
          (m = d.createHalfEdge(s, "r")),
          d.insert(i, m),
          (q = e.intersect(m, j)),
          q && f.insert(m, q, e.distance(q, g)),
          (g = c.list.shift());
      else if (!f.empty())
        (i = f.extractMin()),
          (k = d.left(i)),
          (j = d.right(i)),
          (l = d.right(j)),
          (n = d.leftRegion(i)),
          (o = d.rightRegion(j)),
          (r = i.vertex),
          e.endPoint(i.edge, i.side, r),
          e.endPoint(j.edge, j.side, r),
          d.del(i),
          f.del(j),
          d.del(j),
          (t = "l"),
          n.y > o.y && ((p = n), (n = o), (o = p), (t = "r")),
          (s = e.bisect(n, o)),
          (m = d.createHalfEdge(s, t)),
          d.insert(k, m),
          e.endPoint(s, fi[t], r),
          (q = e.intersect(k, m)),
          q && (f.del(k), f.insert(k, q, e.distance(q, n))),
          (q = e.intersect(m, l)),
          q && f.insert(m, q, e.distance(q, n));
      else break;
    }
    for (i = d.right(d.leftEnd); i != d.rightEnd; i = d.right(i)) b(i.edge);
  }
  function fk() {
    return { leaf: !0, nodes: [], point: null };
  }
  function fl(a, b, c, d, e, f) {
    if (!a(b, c, d, e, f)) {
      var g = (c + e) * 0.5,
        h = (d + f) * 0.5,
        i = b.nodes;
      i[0] && fl(a, i[0], c, d, g, h),
        i[1] && fl(a, i[1], g, d, e, h),
        i[2] && fl(a, i[2], c, h, g, f),
        i[3] && fl(a, i[3], g, h, e, f);
    }
  }
  function fm(a) {
    return { x: a[0], y: a[1] };
  }
  function fo() {
    this._ = new Date(
      arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]
    );
  }
  function fq(a, b, c, d) {
    var e,
      f,
      g = 0,
      h = b.length,
      i = c.length;
    while (g < h) {
      if (d >= i) return -1;
      e = b.charCodeAt(g++);
      if (e == 37) {
        f = fw[b.charAt(g++)];
        if (!f || (d = f(a, c, d)) < 0) return -1;
      } else if (e != c.charCodeAt(d++)) return -1;
    }
    return d;
  }
  function fx(a, b, c) {
    return fz.test(b.substring(c, (c += 3))) ? c : -1;
  }
  function fy(a, b, c) {
    fA.lastIndex = 0;
    var d = fA.exec(b.substring(c, c + 10));
    return d ? (c += d[0].length) : -1;
  }
  function fC(a, b, c) {
    var d = fD.get(b.substring(c, (c += 3)).toLowerCase());
    return d == null ? -1 : ((a.m = d), c);
  }
  function fE(a, b, c) {
    fF.lastIndex = 0;
    var d = fF.exec(b.substring(c, c + 12));
    return d ? ((a.m = fG.get(d[0].toLowerCase())), (c += d[0].length)) : -1;
  }
  function fI(a, b, c) {
    return fq(a, fv.c.toString(), b, c);
  }
  function fJ(a, b, c) {
    return fq(a, fv.x.toString(), b, c);
  }
  function fK(a, b, c) {
    return fq(a, fv.X.toString(), b, c);
  }
  function fL(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 4));
    return d ? ((a.y = +d[0]), (c += d[0].length)) : -1;
  }
  function fM(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 2));
    return d ? ((a.y = fN() + +d[0]), (c += d[0].length)) : -1;
  }
  function fN() {
    return ~~(new Date().getFullYear() / 1e3) * 1e3;
  }
  function fO(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 2));
    return d ? ((a.m = d[0] - 1), (c += d[0].length)) : -1;
  }
  function fP(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 2));
    return d ? ((a.d = +d[0]), (c += d[0].length)) : -1;
  }
  function fQ(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 2));
    return d ? ((a.H = +d[0]), (c += d[0].length)) : -1;
  }
  function fR(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 2));
    return d ? ((a.M = +d[0]), (c += d[0].length)) : -1;
  }
  function fS(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 2));
    return d ? ((a.S = +d[0]), (c += d[0].length)) : -1;
  }
  function fT(a, b, c) {
    fU.lastIndex = 0;
    var d = fU.exec(b.substring(c, c + 3));
    return d ? ((a.L = +d[0]), (c += d[0].length)) : -1;
  }
  function fV(a, b, c) {
    var d = fW.get(b.substring(c, (c += 2)).toLowerCase());
    return d == null ? -1 : ((a.p = d), c);
  }
  function fX(a) {
    var b = a.getTimezoneOffset(),
      c = b > 0 ? "-" : "+",
      d = ~~(Math.abs(b) / 60),
      e = Math.abs(b) % 60;
    return c + fr(d) + fr(e);
  }
  function fZ(a) {
    return a.toISOString();
  }
  function f$(a, b, c) {
    function d(b) {
      var c = a(b),
        d = f(c, 1);
      return b - c < d - b ? c : d;
    }
    function e(c) {
      return b((c = a(new fn(c - 1))), 1), c;
    }
    function f(a, c) {
      return b((a = new fn(+a)), c), a;
    }
    function g(a, d, f) {
      var g = e(a),
        h = [];
      if (f > 1) while (g < d) c(g) % f || h.push(new Date(+g)), b(g, 1);
      else while (g < d) h.push(new Date(+g)), b(g, 1);
      return h;
    }
    function h(a, b, c) {
      try {
        fn = fo;
        var d = new fo();
        return (d._ = a), g(d, b, c);
      } finally {
        fn = Date;
      }
    }
    (a.floor = a), (a.round = d), (a.ceil = e), (a.offset = f), (a.range = g);
    var i = (a.utc = f_(a));
    return (
      (i.floor = i),
      (i.round = f_(d)),
      (i.ceil = f_(e)),
      (i.offset = f_(f)),
      (i.range = h),
      a
    );
  }
  function f_(a) {
    return function (b, c) {
      try {
        fn = fo;
        var d = new fo();
        return (d._ = b), a(d, c)._;
      } finally {
        fn = Date;
      }
    };
  }
  function ga(a, b, c) {
    function d(b) {
      return a(b);
    }
    return (
      (d.invert = function (b) {
        return gc(a.invert(b));
      }),
      (d.domain = function (b) {
        return arguments.length ? (a.domain(b), d) : a.domain().map(gc);
      }),
      (d.nice = function (a) {
        var b = gb(d.domain());
        return d.domain([a.floor(b[0]), a.ceil(b[1])]);
      }),
      (d.ticks = function (c, e) {
        var f = gb(d.domain());
        if (typeof c != "function") {
          var g = f[1] - f[0],
            h = g / c,
            i = d3.bisect(gg, h);
          if (i == gg.length) return b.year(f, c);
          if (!i) return a.ticks(c).map(gc);
          Math.log(h / gg[i - 1]) < Math.log(gg[i] / h) && --i,
            (c = b[i]),
            (e = c[1]),
            (c = c[0].range);
        }
        return c(f[0], new Date(+f[1] + 1), e);
      }),
      (d.tickFormat = function () {
        return c;
      }),
      (d.copy = function () {
        return ga(a.copy(), b, c);
      }),
      d3.rebind(d, a, "range", "rangeRound", "interpolate", "clamp")
    );
  }
  function gb(a) {
    var b = a[0],
      c = a[a.length - 1];
    return b < c ? [b, c] : [c, b];
  }
  function gc(a) {
    return new Date(a);
  }
  function gd(a) {
    return function (b) {
      var c = a.length - 1,
        d = a[c];
      while (!d[1](b)) d = a[--c];
      return d[0](b);
    };
  }
  function ge(a) {
    var b = new Date(a, 0, 1);
    return b.setFullYear(a), b;
  }
  function gf(a) {
    var b = a.getFullYear(),
      c = ge(b),
      d = ge(b + 1);
    return b + (a - c) / (d - c);
  }
  function go(a) {
    var b = new Date(Date.UTC(a, 0, 1));
    return b.setUTCFullYear(a), b;
  }
  function gp(a) {
    var b = a.getUTCFullYear(),
      c = go(b),
      d = go(b + 1);
    return b + (a - c) / (d - c);
  }
  Date.now ||
    (Date.now = function () {
      return +new Date();
    });
  try {
    document.createElement("div").style.setProperty("opacity", 0, "");
  } catch (a) {
    var b = CSSStyleDeclaration.prototype,
      c = b.setProperty;
    b.setProperty = function (a, b, d) {
      c.call(this, a, b + "", d);
    };
  }
  d3 = { version: "2.9.6" };
  var e = g;
  try {
    e(document.documentElement.childNodes)[0].nodeType;
  } catch (h) {
    e = f;
  }
  var i = [].__proto__
    ? function (a, b) {
        a.__proto__ = b;
      }
    : function (a, b) {
        for (var c in b) a[c] = b[c];
      };
  (d3.map = function (a) {
    var b = new j();
    for (var c in a) b.set(c, a[c]);
    return b;
  }),
    d(j, {
      has: function (a) {
        return k + a in this;
      },
      get: function (a) {
        return this[k + a];
      },
      set: function (a, b) {
        return (this[k + a] = b);
      },
      remove: function (a) {
        return (a = k + a), a in this && delete this[a];
      },
      keys: function () {
        var a = [];
        return (
          this.forEach(function (b) {
            a.push(b);
          }),
          a
        );
      },
      values: function () {
        var a = [];
        return (
          this.forEach(function (b, c) {
            a.push(c);
          }),
          a
        );
      },
      entries: function () {
        var a = [];
        return (
          this.forEach(function (b, c) {
            a.push({ key: b, value: c });
          }),
          a
        );
      },
      forEach: function (a) {
        for (var b in this)
          b.charCodeAt(0) === l && a.call(this, b.substring(1), this[b]);
      },
    });
  var k = "\0",
    l = k.charCodeAt(0);
  (d3.functor = p),
    (d3.rebind = function (a, b) {
      var c = 1,
        d = arguments.length,
        e;
      while (++c < d) a[(e = arguments[c])] = q(a, b, b[e]);
      return a;
    }),
    (d3.ascending = function (a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }),
    (d3.descending = function (a, b) {
      return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    }),
    (d3.mean = function (a, b) {
      var c = a.length,
        d,
        e = 0,
        f = -1,
        g = 0;
      if (arguments.length === 1)
        while (++f < c) r((d = a[f])) && (e += (d - e) / ++g);
      else while (++f < c) r((d = b.call(a, a[f], f))) && (e += (d - e) / ++g);
      return g ? e : undefined;
    }),
    (d3.median = function (a, b) {
      return (
        arguments.length > 1 && (a = a.map(b)),
        (a = a.filter(r)),
        a.length ? d3.quantile(a.sort(d3.ascending), 0.5) : undefined
      );
    }),
    (d3.min = function (a, b) {
      var c = -1,
        d = a.length,
        e,
        f;
      if (arguments.length === 1) {
        while (++c < d && ((e = a[c]) == null || e != e)) e = undefined;
        while (++c < d) (f = a[c]) != null && e > f && (e = f);
      } else {
        while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e))
          e = undefined;
        while (++c < d) (f = b.call(a, a[c], c)) != null && e > f && (e = f);
      }
      return e;
    }),
    (d3.max = function (a, b) {
      var c = -1,
        d = a.length,
        e,
        f;
      if (arguments.length === 1) {
        while (++c < d && ((e = a[c]) == null || e != e)) e = undefined;
        while (++c < d) (f = a[c]) != null && f > e && (e = f);
      } else {
        while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e))
          e = undefined;
        while (++c < d) (f = b.call(a, a[c], c)) != null && f > e && (e = f);
      }
      return e;
    }),
    (d3.extent = function (a, b) {
      var c = -1,
        d = a.length,
        e,
        f,
        g;
      if (arguments.length === 1) {
        while (++c < d && ((e = g = a[c]) == null || e != e)) e = g = undefined;
        while (++c < d)
          (f = a[c]) != null && (e > f && (e = f), g < f && (g = f));
      } else {
        while (++c < d && ((e = g = b.call(a, a[c], c)) == null || e != e))
          e = undefined;
        while (++c < d)
          (f = b.call(a, a[c], c)) != null &&
            (e > f && (e = f), g < f && (g = f));
      }
      return [e, g];
    }),
    (d3.random = {
      normal: function (a, b) {
        return (
          arguments.length < 2 && (b = 1),
          arguments.length < 1 && (a = 0),
          function () {
            var c, d, e;
            do
              (c = Math.random() * 2 - 1),
                (d = Math.random() * 2 - 1),
                (e = c * c + d * d);
            while (!e || e > 1);
            return a + b * c * Math.sqrt((-2 * Math.log(e)) / e);
          }
        );
      },
    }),
    (d3.sum = function (a, b) {
      var c = 0,
        d = a.length,
        e,
        f = -1;
      if (arguments.length === 1)
        while (++f < d) isNaN((e = +a[f])) || (c += e);
      else while (++f < d) isNaN((e = +b.call(a, a[f], f))) || (c += e);
      return c;
    }),
    (d3.quantile = function (a, b) {
      var c = (a.length - 1) * b + 1,
        d = Math.floor(c),
        e = a[d - 1],
        f = c - d;
      return f ? e + f * (a[d] - e) : e;
    }),
    (d3.transpose = function (a) {
      return d3.zip.apply(d3, a);
    }),
    (d3.zip = function () {
      if (!(e = arguments.length)) return [];
      for (var a = -1, b = d3.min(arguments, s), c = new Array(b); ++a < b; )
        for (var d = -1, e, f = (c[a] = new Array(e)); ++d < e; )
          f[d] = arguments[d][a];
      return c;
    }),
    (d3.bisector = function (a) {
      return {
        left: function (b, c, d, e) {
          arguments.length < 3 && (d = 0),
            arguments.length < 4 && (e = b.length);
          while (d < e) {
            var f = (d + e) >> 1;
            a.call(b, b[f], f) < c ? (d = f + 1) : (e = f);
          }
          return d;
        },
        right: function (b, c, d, e) {
          arguments.length < 3 && (d = 0),
            arguments.length < 4 && (e = b.length);
          while (d < e) {
            var f = (d + e) >> 1;
            c < a.call(b, b[f], f) ? (e = f) : (d = f + 1);
          }
          return d;
        },
      };
    });
  var t = d3.bisector(function (a) {
    return a;
  });
  (d3.bisectLeft = t.left),
    (d3.bisect = d3.bisectRight = t.right),
    (d3.first = function (a, b) {
      var c = 0,
        d = a.length,
        e = a[0],
        f;
      arguments.length === 1 && (b = d3.ascending);
      while (++c < d) b.call(a, e, (f = a[c])) > 0 && (e = f);
      return e;
    }),
    (d3.last = function (a, b) {
      var c = 0,
        d = a.length,
        e = a[0],
        f;
      arguments.length === 1 && (b = d3.ascending);
      while (++c < d) b.call(a, e, (f = a[c])) <= 0 && (e = f);
      return e;
    }),
    (d3.nest = function () {
      function f(c, g) {
        if (g >= b.length) return e ? e.call(a, c) : d ? c.sort(d) : c;
        var h = -1,
          i = c.length,
          k = b[g++],
          l,
          m,
          n = new j(),
          o,
          p = {};
        while (++h < i)
          (o = n.get((l = k((m = c[h]))))) ? o.push(m) : n.set(l, [m]);
        return (
          n.forEach(function (a) {
            p[a] = f(n.get(a), g);
          }),
          p
        );
      }
      function g(a, d) {
        if (d >= b.length) return a;
        var e = [],
          f = c[d++],
          h;
        for (h in a) e.push({ key: h, values: g(a[h], d) });
        return (
          f &&
            e.sort(function (a, b) {
              return f(a.key, b.key);
            }),
          e
        );
      }
      var a = {},
        b = [],
        c = [],
        d,
        e;
      return (
        (a.map = function (a) {
          return f(a, 0);
        }),
        (a.entries = function (a) {
          return g(f(a, 0), 0);
        }),
        (a.key = function (c) {
          return b.push(c), a;
        }),
        (a.sortKeys = function (d) {
          return (c[b.length - 1] = d), a;
        }),
        (a.sortValues = function (b) {
          return (d = b), a;
        }),
        (a.rollup = function (b) {
          return (e = b), a;
        }),
        a
      );
    }),
    (d3.keys = function (a) {
      var b = [];
      for (var c in a) b.push(c);
      return b;
    }),
    (d3.values = function (a) {
      var b = [];
      for (var c in a) b.push(a[c]);
      return b;
    }),
    (d3.entries = function (a) {
      var b = [];
      for (var c in a) b.push({ key: c, value: a[c] });
      return b;
    }),
    (d3.permute = function (a, b) {
      var c = [],
        d = -1,
        e = b.length;
      while (++d < e) c[d] = a[b[d]];
      return c;
    }),
    (d3.merge = function (a) {
      return Array.prototype.concat.apply([], a);
    }),
    (d3.split = function (a, b) {
      var c = [],
        d = [],
        e,
        f = -1,
        g = a.length;
      arguments.length < 2 && (b = u);
      while (++f < g)
        b.call(d, (e = a[f]), f)
          ? (d = [])
          : (d.length || c.push(d), d.push(e));
      return c;
    }),
    (d3.range = function (a, b, c) {
      arguments.length < 3 &&
        ((c = 1), arguments.length < 2 && ((b = a), (a = 0)));
      if ((b - a) / c === Infinity) throw new Error("infinite range");
      var d = [],
        e = w(Math.abs(c)),
        f = -1,
        g;
      (a *= e), (b *= e), (c *= e);
      if (c < 0) while ((g = a + c * ++f) > b) d.push(g / e);
      else while ((g = a + c * ++f) < b) d.push(g / e);
      return d;
    }),
    (d3.requote = function (a) {
      return a.replace(x, "\\$&");
    });
  var x = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  (d3.round = function (a, b) {
    return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a);
  }),
    (d3.xhr = function (a, b, c) {
      var d = new XMLHttpRequest();
      arguments.length < 3
        ? ((c = b), (b = null))
        : b && d.overrideMimeType && d.overrideMimeType(b),
        d.open("GET", a, !0),
        b && d.setRequestHeader("Accept", b),
        (d.onreadystatechange = function () {
          if (d.readyState === 4) {
            var a = d.status;
            c(
              (!a && d.response) || (a >= 200 && a < 300) || a === 304
                ? d
                : null
            );
          }
        }),
        d.send(null);
    }),
    (d3.text = function (a, b, c) {
      function d(a) {
        c(a && a.responseText);
      }
      arguments.length < 3 && ((c = b), (b = null)), d3.xhr(a, b, d);
    }),
    (d3.json = function (a, b) {
      d3.text(a, "application/json", function (a) {
        b(a ? JSON.parse(a) : null);
      });
    }),
    (d3.html = function (a, b) {
      d3.text(a, "text/html", function (a) {
        if (a != null) {
          var c = document.createRange();
          c.selectNode(document.body), (a = c.createContextualFragment(a));
        }
        b(a);
      });
    }),
    (d3.xml = function (a, b, c) {
      function d(a) {
        c(a && a.responseXML);
      }
      arguments.length < 3 && ((c = b), (b = null)), d3.xhr(a, b, d);
    });
  var y = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
  (d3.ns = {
    prefix: y,
    qualify: function (a) {
      var b = a.indexOf(":"),
        c = a;
      return (
        b >= 0 && ((c = a.substring(0, b)), (a = a.substring(b + 1))),
        y.hasOwnProperty(c) ? { space: y[c], local: a } : a
      );
    },
  }),
    (d3.dispatch = function () {
      var a = new z(),
        b = -1,
        c = arguments.length;
      while (++b < c) a[arguments[b]] = A(a);
      return a;
    }),
    (z.prototype.on = function (a, b) {
      var c = a.indexOf("."),
        d = "";
      return (
        c > 0 && ((d = a.substring(c + 1)), (a = a.substring(0, c))),
        arguments.length < 2 ? this[a].on(d) : this[a].on(d, b)
      );
    }),
    (d3.format = function (a) {
      var b = B.exec(a),
        c = b[1] || " ",
        d = b[3] || "",
        e = b[5],
        f = +b[6],
        g = b[7],
        h = b[8],
        i = b[9],
        j = 1,
        k = "",
        l = !1;
      h && (h = +h.substring(1)),
        e && ((c = "0"), g && (f -= Math.floor((f - 1) / 4)));
      switch (i) {
        case "n":
          (g = !0), (i = "g");
          break;
        case "%":
          (j = 100), (k = "%"), (i = "f");
          break;
        case "p":
          (j = 100), (k = "%"), (i = "r");
          break;
        case "d":
          (l = !0), (h = 0);
          break;
        case "s":
          (j = -1), (i = "r");
      }
      return (
        i == "r" && !h && (i = "g"),
        (i = C.get(i) || E),
        function (a) {
          if (l && a % 1) return "";
          var b = a < 0 && (a = -a) ? "−" : d;
          if (j < 0) {
            var m = d3.formatPrefix(a, h);
            (a = m.scale(a)), (k = m.symbol);
          } else a *= j;
          a = i(a, h);
          if (e) {
            var n = a.length + b.length;
            n < f && (a = new Array(f - n + 1).join(c) + a),
              g && (a = F(a)),
              (a = b + a);
          } else {
            g && (a = F(a)), (a = b + a);
            var n = a.length;
            n < f && (a = new Array(f - n + 1).join(c) + a);
          }
          return a + k;
        }
      );
    });
  var B =
      /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
    C = d3.map({
      g: function (a, b) {
        return a.toPrecision(b);
      },
      e: function (a, b) {
        return a.toExponential(b);
      },
      f: function (a, b) {
        return a.toFixed(b);
      },
      r: function (a, b) {
        return d3.round(a, (b = D(a, b))).toFixed(Math.max(0, Math.min(20, b)));
      },
    }),
    G = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "μ",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ].map(H);
  d3.formatPrefix = function (a, b) {
    var c = 0;
    return (
      a &&
        (a < 0 && (a *= -1),
        b && (a = d3.round(a, D(a, b))),
        (c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10)),
        (c = Math.max(
          -24,
          Math.min(24, Math.floor((c <= 0 ? c + 1 : c - 1) / 3) * 3)
        ))),
      G[8 + c / 3]
    );
  };
  var I = R(2),
    J = R(3),
    K = function () {
      return Q;
    },
    L = d3.map({
      linear: K,
      poly: R,
      quad: function () {
        return I;
      },
      cubic: function () {
        return J;
      },
      sin: function () {
        return S;
      },
      exp: function () {
        return T;
      },
      circle: function () {
        return U;
      },
      elastic: V,
      back: W,
      bounce: function () {
        return X;
      },
    }),
    M = d3.map({
      in: Q,
      out: O,
      "in-out": P,
      "out-in": function (a) {
        return P(O(a));
      },
    });
  (d3.ease = function (a) {
    var b = a.indexOf("-"),
      c = b >= 0 ? a.substring(0, b) : a,
      d = b >= 0 ? a.substring(b + 1) : "in";
    return (
      (c = L.get(c) || K),
      (d = M.get(d) || Q),
      N(d(c.apply(null, Array.prototype.slice.call(arguments, 1))))
    );
  }),
    (d3.event = null),
    (d3.interpolate = function (a, b) {
      var c = d3.interpolators.length,
        d;
      while (--c >= 0 && !(d = d3.interpolators[c](a, b)));
      return d;
    }),
    (d3.interpolateNumber = function (a, b) {
      return (
        (b -= a),
        function (c) {
          return a + b * c;
        }
      );
    }),
    (d3.interpolateRound = function (a, b) {
      return (
        (b -= a),
        function (c) {
          return Math.round(a + b * c);
        }
      );
    }),
    (d3.interpolateString = function (a, b) {
      var c,
        d,
        e,
        f = 0,
        g = 0,
        h = [],
        i = [],
        j,
        k;
      _.lastIndex = 0;
      for (d = 0; (c = _.exec(b)); ++d)
        c.index && h.push(b.substring(f, (g = c.index))),
          i.push({ i: h.length, x: c[0] }),
          h.push(null),
          (f = _.lastIndex);
      f < b.length && h.push(b.substring(f));
      for (d = 0, j = i.length; (c = _.exec(a)) && d < j; ++d) {
        k = i[d];
        if (k.x == c[0]) {
          if (k.i)
            if (h[k.i + 1] == null) {
              (h[k.i - 1] += k.x), h.splice(k.i, 1);
              for (e = d + 1; e < j; ++e) i[e].i--;
            } else {
              (h[k.i - 1] += k.x + h[k.i + 1]), h.splice(k.i, 2);
              for (e = d + 1; e < j; ++e) i[e].i -= 2;
            }
          else if (h[k.i + 1] == null) h[k.i] = k.x;
          else {
            (h[k.i] = k.x + h[k.i + 1]), h.splice(k.i + 1, 1);
            for (e = d + 1; e < j; ++e) i[e].i--;
          }
          i.splice(d, 1), j--, d--;
        } else k.x = d3.interpolateNumber(parseFloat(c[0]), parseFloat(k.x));
      }
      while (d < j)
        (k = i.pop()),
          h[k.i + 1] == null
            ? (h[k.i] = k.x)
            : ((h[k.i] = k.x + h[k.i + 1]), h.splice(k.i + 1, 1)),
          j--;
      return h.length === 1
        ? h[0] == null
          ? i[0].x
          : function () {
              return b;
            }
        : function (a) {
            for (d = 0; d < j; ++d) h[(k = i[d]).i] = k.x(a);
            return h.join("");
          };
    }),
    (d3.interpolateTransform = function (a, b) {
      var c = [],
        d = [],
        e,
        f = d3.transform(a),
        g = d3.transform(b),
        h = f.translate,
        i = g.translate,
        j = f.rotate,
        k = g.rotate,
        l = f.skew,
        m = g.skew,
        n = f.scale,
        o = g.scale;
      return (
        h[0] != i[0] || h[1] != i[1]
          ? (c.push("translate(", null, ",", null, ")"),
            d.push(
              { i: 1, x: d3.interpolateNumber(h[0], i[0]) },
              { i: 3, x: d3.interpolateNumber(h[1], i[1]) }
            ))
          : i[0] || i[1]
          ? c.push("translate(" + i + ")")
          : c.push(""),
        j != k
          ? (j - k > 180 ? (k += 360) : k - j > 180 && (j += 360),
            d.push({
              i: c.push(c.pop() + "rotate(", null, ")") - 2,
              x: d3.interpolateNumber(j, k),
            }))
          : k && c.push(c.pop() + "rotate(" + k + ")"),
        l != m
          ? d.push({
              i: c.push(c.pop() + "skewX(", null, ")") - 2,
              x: d3.interpolateNumber(l, m),
            })
          : m && c.push(c.pop() + "skewX(" + m + ")"),
        n[0] != o[0] || n[1] != o[1]
          ? ((e = c.push(c.pop() + "scale(", null, ",", null, ")")),
            d.push(
              { i: e - 4, x: d3.interpolateNumber(n[0], o[0]) },
              { i: e - 2, x: d3.interpolateNumber(n[1], o[1]) }
            ))
          : (o[0] != 1 || o[1] != 1) && c.push(c.pop() + "scale(" + o + ")"),
        (e = d.length),
        function (a) {
          var b = -1,
            f;
          while (++b < e) c[(f = d[b]).i] = f.x(a);
          return c.join("");
        }
      );
    }),
    (d3.interpolateRgb = function (a, b) {
      (a = d3.rgb(a)), (b = d3.rgb(b));
      var c = a.r,
        d = a.g,
        e = a.b,
        f = b.r - c,
        g = b.g - d,
        h = b.b - e;
      return function (a) {
        return (
          "#" +
          bf(Math.round(c + f * a)) +
          bf(Math.round(d + g * a)) +
          bf(Math.round(e + h * a))
        );
      };
    }),
    (d3.interpolateHsl = function (a, b) {
      (a = d3.hsl(a)), (b = d3.hsl(b));
      var c = a.h,
        d = a.s,
        e = a.l,
        f = b.h - c,
        g = b.s - d,
        h = b.l - e;
      return (
        f > 180 ? (f -= 360) : f < -180 && (f += 360),
        function (a) {
          return bm(c + f * a, d + g * a, e + h * a).toString();
        }
      );
    }),
    (d3.interpolateArray = function (a, b) {
      var c = [],
        d = [],
        e = a.length,
        f = b.length,
        g = Math.min(a.length, b.length),
        h;
      for (h = 0; h < g; ++h) c.push(d3.interpolate(a[h], b[h]));
      for (; h < e; ++h) d[h] = a[h];
      for (; h < f; ++h) d[h] = b[h];
      return function (a) {
        for (h = 0; h < g; ++h) d[h] = c[h](a);
        return d;
      };
    }),
    (d3.interpolateObject = function (a, b) {
      var c = {},
        d = {},
        e;
      for (e in a) e in b ? (c[e] = ba(e)(a[e], b[e])) : (d[e] = a[e]);
      for (e in b) e in a || (d[e] = b[e]);
      return function (a) {
        for (e in c) d[e] = c[e](a);
        return d;
      };
    });
  var _ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  (d3.interpolators = [
    d3.interpolateObject,
    function (a, b) {
      return b instanceof Array && d3.interpolateArray(a, b);
    },
    function (a, b) {
      return (
        (typeof a == "string" || typeof b == "string") &&
        d3.interpolateString(a + "", b + "")
      );
    },
    function (a, b) {
      return (
        (typeof b == "string"
          ? bj.has(b) || /^(#|rgb\(|hsl\()/.test(b)
          : b instanceof be || b instanceof bl) && d3.interpolateRgb(a, b)
      );
    },
    function (a, b) {
      return !isNaN((a = +a)) && !isNaN((b = +b)) && d3.interpolateNumber(a, b);
    },
  ]),
    (d3.rgb = function (a, b, c) {
      return arguments.length === 1
        ? a instanceof be
          ? bd(a.r, a.g, a.b)
          : bg("" + a, bd, bm)
        : bd(~~a, ~~b, ~~c);
    }),
    (be.prototype.brighter = function (a) {
      a = Math.pow(0.7, arguments.length ? a : 1);
      var b = this.r,
        c = this.g,
        d = this.b,
        e = 30;
      return !b && !c && !d
        ? bd(e, e, e)
        : (b && b < e && (b = e),
          c && c < e && (c = e),
          d && d < e && (d = e),
          bd(
            Math.min(255, Math.floor(b / a)),
            Math.min(255, Math.floor(c / a)),
            Math.min(255, Math.floor(d / a))
          ));
    }),
    (be.prototype.darker = function (a) {
      return (
        (a = Math.pow(0.7, arguments.length ? a : 1)),
        bd(
          Math.floor(a * this.r),
          Math.floor(a * this.g),
          Math.floor(a * this.b)
        )
      );
    }),
    (be.prototype.hsl = function () {
      return bh(this.r, this.g, this.b);
    }),
    (be.prototype.toString = function () {
      return "#" + bf(this.r) + bf(this.g) + bf(this.b);
    });
  var bj = d3.map({
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  });
  bj.forEach(function (a, b) {
    bj.set(a, bg(b, bd, bm));
  }),
    (d3.hsl = function (a, b, c) {
      return arguments.length === 1
        ? a instanceof bl
          ? bk(a.h, a.s, a.l)
          : bg("" + a, bh, bk)
        : bk(+a, +b, +c);
    }),
    (bl.prototype.brighter = function (a) {
      return (
        (a = Math.pow(0.7, arguments.length ? a : 1)),
        bk(this.h, this.s, this.l / a)
      );
    }),
    (bl.prototype.darker = function (a) {
      return (
        (a = Math.pow(0.7, arguments.length ? a : 1)),
        bk(this.h, this.s, a * this.l)
      );
    }),
    (bl.prototype.rgb = function () {
      return bm(this.h, this.s, this.l);
    }),
    (bl.prototype.toString = function () {
      return this.rgb().toString();
    });
  var bo = function (a, b) {
      return b.querySelector(a);
    },
    bp = function (a, b) {
      return b.querySelectorAll(a);
    },
    bq = document.documentElement,
    br =
      bq.matchesSelector ||
      bq.webkitMatchesSelector ||
      bq.mozMatchesSelector ||
      bq.msMatchesSelector ||
      bq.oMatchesSelector,
    bs = function (a, b) {
      return br.call(a, b);
    };
  typeof Sizzle == "function" &&
    ((bo = function (a, b) {
      return Sizzle(a, b)[0] || null;
    }),
    (bp = function (a, b) {
      return Sizzle.uniqueSort(Sizzle(a, b));
    }),
    (bs = Sizzle.matchesSelector));
  var bt = [];
  (d3.selection = function () {
    return bB;
  }),
    (d3.selection.prototype = bt),
    (bt.select = function (a) {
      var b = [],
        c,
        d,
        e,
        f;
      typeof a != "function" && (a = bu(a));
      for (var g = -1, h = this.length; ++g < h; ) {
        b.push((c = [])), (c.parentNode = (e = this[g]).parentNode);
        for (var i = -1, j = e.length; ++i < j; )
          (f = e[i])
            ? (c.push((d = a.call(f, f.__data__, i))),
              d && "__data__" in f && (d.__data__ = f.__data__))
            : c.push(null);
      }
      return bn(b);
    }),
    (bt.selectAll = function (a) {
      var b = [],
        c,
        d;
      typeof a != "function" && (a = bv(a));
      for (var f = -1, g = this.length; ++f < g; )
        for (var h = this[f], i = -1, j = h.length; ++i < j; )
          if ((d = h[i]))
            b.push((c = e(a.call(d, d.__data__, i)))), (c.parentNode = d);
      return bn(b);
    }),
    (bt.attr = function (a, b) {
      function d() {
        this.removeAttribute(a);
      }
      function e() {
        this.removeAttributeNS(a.space, a.local);
      }
      function f() {
        this.setAttribute(a, b);
      }
      function g() {
        this.setAttributeNS(a.space, a.local, b);
      }
      function h() {
        var c = b.apply(this, arguments);
        c == null ? this.removeAttribute(a) : this.setAttribute(a, c);
      }
      function i() {
        var c = b.apply(this, arguments);
        c == null
          ? this.removeAttributeNS(a.space, a.local)
          : this.setAttributeNS(a.space, a.local, c);
      }
      a = d3.ns.qualify(a);
      if (arguments.length < 2) {
        var c = this.node();
        return a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a);
      }
      return this.each(
        b == null
          ? a.local
            ? e
            : d
          : typeof b == "function"
          ? a.local
            ? i
            : h
          : a.local
          ? g
          : f
      );
    }),
    (bt.classed = function (a, b) {
      var c = v(a).split(" "),
        d = c.length,
        e = -1;
      if (arguments.length > 1) {
        while (++e < d) bw.call(this, c[e], b);
        return this;
      }
      while (++e < d) if (!bw.call(this, c[e])) return !1;
      return !0;
    }),
    (bt.style = function (a, b, c) {
      function d() {
        this.style.removeProperty(a);
      }
      function e() {
        this.style.setProperty(a, b, c);
      }
      function f() {
        var d = b.apply(this, arguments);
        d == null
          ? this.style.removeProperty(a)
          : this.style.setProperty(a, d, c);
      }
      return (
        arguments.length < 3 && (c = ""),
        arguments.length < 2
          ? window.getComputedStyle(this.node(), null).getPropertyValue(a)
          : this.each(b == null ? d : typeof b == "function" ? f : e)
      );
    }),
    (bt.property = function (a, b) {
      function c() {
        delete this[a];
      }
      function d() {
        this[a] = b;
      }
      function e() {
        var c = b.apply(this, arguments);
        c == null ? delete this[a] : (this[a] = c);
      }
      return arguments.length < 2
        ? this.node()[a]
        : this.each(b == null ? c : typeof b == "function" ? e : d);
    }),
    (bt.text = function (a) {
      return arguments.length < 1
        ? this.node().textContent
        : this.each(
            typeof a == "function"
              ? function () {
                  var b = a.apply(this, arguments);
                  this.textContent = b == null ? "" : b;
                }
              : a == null
              ? function () {
                  this.textContent = "";
                }
              : function () {
                  this.textContent = a;
                }
          );
    }),
    (bt.html = function (a) {
      return arguments.length < 1
        ? this.node().innerHTML
        : this.each(
            typeof a == "function"
              ? function () {
                  var b = a.apply(this, arguments);
                  this.innerHTML = b == null ? "" : b;
                }
              : a == null
              ? function () {
                  this.innerHTML = "";
                }
              : function () {
                  this.innerHTML = a;
                }
          );
    }),
    (bt.append = function (a) {
      function b() {
        return this.appendChild(document.createElementNS(this.namespaceURI, a));
      }
      function c() {
        return this.appendChild(document.createElementNS(a.space, a.local));
      }
      return (a = d3.ns.qualify(a)), this.select(a.local ? c : b);
    }),
    (bt.insert = function (a, b) {
      function c() {
        return this.insertBefore(
          document.createElementNS(this.namespaceURI, a),
          bo(b, this)
        );
      }
      function d() {
        return this.insertBefore(
          document.createElementNS(a.space, a.local),
          bo(b, this)
        );
      }
      return (a = d3.ns.qualify(a)), this.select(a.local ? d : c);
    }),
    (bt.remove = function () {
      return this.each(function () {
        var a = this.parentNode;
        a && a.removeChild(this);
      });
    }),
    (bt.data = function (a, b) {
      function g(a, c) {
        var d,
          e = a.length,
          f = c.length,
          g = Math.min(e, f),
          l = Math.max(e, f),
          m = [],
          n = [],
          o = [],
          p,
          q;
        if (b) {
          var r = new j(),
            s = [],
            t,
            u = c.length;
          for (d = -1; ++d < e; )
            (t = b.call((p = a[d]), p.__data__, d)),
              r.has(t) ? (o[u++] = p) : r.set(t, p),
              s.push(t);
          for (d = -1; ++d < f; )
            (t = b.call(c, (q = c[d]), d)),
              r.has(t)
                ? ((m[d] = p = r.get(t)),
                  (p.__data__ = q),
                  (n[d] = o[d] = null))
                : ((n[d] = bx(q)), (m[d] = o[d] = null)),
              r.remove(t);
          for (d = -1; ++d < e; ) r.has(s[d]) && (o[d] = a[d]);
        } else {
          for (d = -1; ++d < g; )
            (p = a[d]),
              (q = c[d]),
              p
                ? ((p.__data__ = q), (m[d] = p), (n[d] = o[d] = null))
                : ((n[d] = bx(q)), (m[d] = o[d] = null));
          for (; d < f; ++d) (n[d] = bx(c[d])), (m[d] = o[d] = null);
          for (; d < l; ++d) (o[d] = a[d]), (n[d] = m[d] = null);
        }
        (n.update = m),
          (n.parentNode = m.parentNode = o.parentNode = a.parentNode),
          h.push(n),
          i.push(m),
          k.push(o);
      }
      var c = -1,
        d = this.length,
        e,
        f;
      if (!arguments.length) {
        a = new Array((d = (e = this[0]).length));
        while (++c < d) if ((f = e[c])) a[c] = f.__data__;
        return a;
      }
      var h = bC([]),
        i = bn([]),
        k = bn([]);
      if (typeof a == "function")
        while (++c < d) g((e = this[c]), a.call(e, e.parentNode.__data__, c));
      else while (++c < d) g((e = this[c]), a);
      return (
        (i.enter = function () {
          return h;
        }),
        (i.exit = function () {
          return k;
        }),
        i
      );
    }),
    (bt.datum = bt.map =
      function (a) {
        return arguments.length < 1
          ? this.property("__data__")
          : this.property("__data__", a);
      }),
    (bt.filter = function (a) {
      var b = [],
        c,
        d,
        e;
      typeof a != "function" && (a = by(a));
      for (var f = 0, g = this.length; f < g; f++) {
        b.push((c = [])), (c.parentNode = (d = this[f]).parentNode);
        for (var h = 0, i = d.length; h < i; h++)
          (e = d[h]) && a.call(e, e.__data__, h) && c.push(e);
      }
      return bn(b);
    }),
    (bt.order = function () {
      for (var a = -1, b = this.length; ++a < b; )
        for (var c = this[a], d = c.length - 1, e = c[d], f; --d >= 0; )
          if ((f = c[d]))
            e && e !== f.nextSibling && e.parentNode.insertBefore(f, e),
              (e = f);
      return this;
    }),
    (bt.sort = function (a) {
      a = bz.apply(this, arguments);
      for (var b = -1, c = this.length; ++b < c; ) this[b].sort(a);
      return this.order();
    }),
    (bt.on = function (a, b, c) {
      arguments.length < 3 && (c = !1);
      var d = "__on" + a,
        e = a.indexOf(".");
      return (
        e > 0 && (a = a.substring(0, e)),
        arguments.length < 2
          ? (e = this.node()[d]) && e._
          : this.each(function (e, f) {
              function i(a) {
                var c = d3.event;
                d3.event = a;
                try {
                  b.call(g, g.__data__, f);
                } finally {
                  d3.event = c;
                }
              }
              var g = this,
                h = g[d];
              h && (g.removeEventListener(a, h, h.$), delete g[d]),
                b && (g.addEventListener(a, (g[d] = i), (i.$ = c)), (i._ = b));
            })
      );
    }),
    (bt.each = function (a) {
      return bA(this, function (b, c, d) {
        a.call(b, b.__data__, c, d);
      });
    }),
    (bt.call = function (a) {
      return a.apply(this, ((arguments[0] = this), arguments)), this;
    }),
    (bt.empty = function () {
      return !this.node();
    }),
    (bt.node = function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        for (var d = this[b], e = 0, f = d.length; e < f; e++) {
          var g = d[e];
          if (g) return g;
        }
      return null;
    }),
    (bt.transition = function () {
      var a = [],
        b,
        c;
      for (var d = -1, e = this.length; ++d < e; ) {
        a.push((b = []));
        for (var f = this[d], g = -1, h = f.length; ++g < h; )
          b.push((c = f[g]) ? { node: c, delay: bO, duration: bP } : null);
      }
      return bE(a, bK || ++bJ, Date.now());
    });
  var bB = bn([[document]]);
  (bB[0].parentNode = bq),
    (d3.select = function (a) {
      return typeof a == "string" ? bB.select(a) : bn([[a]]);
    }),
    (d3.selectAll = function (a) {
      return typeof a == "string" ? bB.selectAll(a) : bn([e(a)]);
    });
  var bD = [];
  (d3.selection.enter = bC),
    (d3.selection.enter.prototype = bD),
    (bD.append = bt.append),
    (bD.insert = bt.insert),
    (bD.empty = bt.empty),
    (bD.node = bt.node),
    (bD.select = function (a) {
      var b = [],
        c,
        d,
        e,
        f,
        g;
      for (var h = -1, i = this.length; ++h < i; ) {
        (e = (f = this[h]).update),
          b.push((c = [])),
          (c.parentNode = f.parentNode);
        for (var j = -1, k = f.length; ++j < k; )
          (g = f[j])
            ? (c.push((e[j] = d = a.call(f.parentNode, g.__data__, j))),
              (d.__data__ = g.__data__))
            : c.push(null);
      }
      return bn(b);
    });
  var bF = {},
    bI = [],
    bJ = 0,
    bK = 0,
    bL = 0,
    bM = 250,
    bN = d3.ease("cubic-in-out"),
    bO = bL,
    bP = bM,
    bQ = bN;
  (bI.call = bt.call),
    (d3.transition = function (a) {
      return arguments.length ? (bK ? a.transition() : a) : bB.transition();
    }),
    (d3.transition.prototype = bI),
    (bI.select = function (a) {
      var b = [],
        c,
        d,
        e;
      typeof a != "function" && (a = bu(a));
      for (var f = -1, g = this.length; ++f < g; ) {
        b.push((c = []));
        for (var h = this[f], i = -1, j = h.length; ++i < j; )
          (e = h[i]) && (d = a.call(e.node, e.node.__data__, i))
            ? ("__data__" in e.node && (d.__data__ = e.node.__data__),
              c.push({ node: d, delay: e.delay, duration: e.duration }))
            : c.push(null);
      }
      return bE(b, this.id, this.time).ease(this.ease());
    }),
    (bI.selectAll = function (a) {
      var b = [],
        c,
        d,
        e;
      typeof a != "function" && (a = bv(a));
      for (var f = -1, g = this.length; ++f < g; )
        for (var h = this[f], i = -1, j = h.length; ++i < j; )
          if ((e = h[i])) {
            (d = a.call(e.node, e.node.__data__, i)), b.push((c = []));
            for (var k = -1, l = d.length; ++k < l; )
              c.push({ node: d[k], delay: e.delay, duration: e.duration });
          }
      return bE(b, this.id, this.time).ease(this.ease());
    }),
    (bI.attr = function (a, b) {
      return this.attrTween(a, bH(a, b));
    }),
    (bI.attrTween = function (a, b) {
      function d(a, d) {
        var e = b.call(this, a, d, this.getAttribute(c));
        return e === bF
          ? (this.removeAttribute(c), null)
          : e &&
              function (a) {
                this.setAttribute(c, e(a));
              };
      }
      function e(a, d) {
        var e = b.call(this, a, d, this.getAttributeNS(c.space, c.local));
        return e === bF
          ? (this.removeAttributeNS(c.space, c.local), null)
          : e &&
              function (a) {
                this.setAttributeNS(c.space, c.local, e(a));
              };
      }
      var c = d3.ns.qualify(a);
      return this.tween("attr." + a, c.local ? e : d);
    }),
    (bI.style = function (a, b, c) {
      return arguments.length < 3 && (c = ""), this.styleTween(a, bH(a, b), c);
    }),
    (bI.styleTween = function (a, b, c) {
      return (
        arguments.length < 3 && (c = ""),
        this.tween("style." + a, function (d, e) {
          var f = b.call(
            this,
            d,
            e,
            window.getComputedStyle(this, null).getPropertyValue(a)
          );
          return f === bF
            ? (this.style.removeProperty(a), null)
            : f &&
                function (b) {
                  this.style.setProperty(a, f(b), c);
                };
        })
      );
    }),
    (bI.text = function (a) {
      return this.tween("text", function (b, c) {
        this.textContent = typeof a == "function" ? a.call(this, b, c) : a;
      });
    }),
    (bI.remove = function () {
      return this.each("end.transition", function () {
        var a;
        !this.__transition__ && (a = this.parentNode) && a.removeChild(this);
      });
    }),
    (bI.delay = function (a) {
      return bA(
        this,
        typeof a == "function"
          ? function (b, c, d) {
              b.delay = a.call((b = b.node), b.__data__, c, d) | 0;
            }
          : ((a |= 0),
            function (b) {
              b.delay = a;
            })
      );
    }),
    (bI.duration = function (a) {
      return bA(
        this,
        typeof a == "function"
          ? function (b, c, d) {
              b.duration = Math.max(
                1,
                a.call((b = b.node), b.__data__, c, d) | 0
              );
            }
          : ((a = Math.max(1, a | 0)),
            function (b) {
              b.duration = a;
            })
      );
    }),
    (bI.transition = function () {
      return this.select(n);
    });
  var bS = null,
    bT,
    bU;
  (d3.timer = function (a, b, c) {
    var d = !1,
      e,
      f = bS;
    if (arguments.length < 3) {
      if (arguments.length < 2) b = 0;
      else if (!isFinite(b)) return;
      c = Date.now();
    }
    while (f) {
      if (f.callback === a) {
        (f.then = c), (f.delay = b), (d = !0);
        break;
      }
      (e = f), (f = f.next);
    }
    d || (bS = { callback: a, then: c, delay: b, next: bS }),
      bT || ((bU = clearTimeout(bU)), (bT = 1), bX(bV));
  }),
    (d3.timer.flush = function () {
      var a,
        b = Date.now(),
        c = bS;
      while (c)
        (a = b - c.then), c.delay || (c.flush = c.callback(a)), (c = c.next);
      bW();
    });
  var bX =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      setTimeout(a, 17);
    };
  (d3.transform = function (a) {
    var b = document.createElementNS(d3.ns.prefix.svg, "g"),
      c = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    return (d3.transform = function (a) {
      b.setAttribute("transform", a);
      var d = b.transform.baseVal.consolidate();
      return new bY(d ? d.matrix : c);
    })(a);
  }),
    (bY.prototype.toString = function () {
      return (
        "translate(" +
        this.translate +
        ")rotate(" +
        this.rotate +
        ")skewX(" +
        this.skew +
        ")scale(" +
        this.scale +
        ")"
      );
    });
  var ca = 180 / Math.PI;
  d3.mouse = function (a) {
    return cc(a, Z());
  };
  var cb = /WebKit/.test(navigator.userAgent) ? -1 : 0;
  (d3.touches = function (a, b) {
    return (
      arguments.length < 2 && (b = Z().touches),
      b
        ? e(b).map(function (b) {
            var c = cc(a, b);
            return (c.identifier = b.identifier), c;
          })
        : []
    );
  }),
    (d3.scale = {}),
    (d3.scale.linear = function () {
      return ci([0, 1], [0, 1], d3.interpolate, !1);
    }),
    (d3.scale.log = function () {
      return cq(d3.scale.linear(), cs);
    });
  var cr = d3.format(".0e");
  (cs.pow = function (a) {
    return Math.pow(10, a);
  }),
    (ct.pow = function (a) {
      return -Math.pow(10, -a);
    }),
    (d3.scale.pow = function () {
      return cu(d3.scale.linear(), 1);
    }),
    (d3.scale.sqrt = function () {
      return d3.scale.pow().exponent(0.5);
    }),
    (d3.scale.ordinal = function () {
      return cw([], { t: "range", x: [] });
    }),
    (d3.scale.category10 = function () {
      return d3.scale.ordinal().range(cx);
    }),
    (d3.scale.category20 = function () {
      return d3.scale.ordinal().range(cy);
    }),
    (d3.scale.category20b = function () {
      return d3.scale.ordinal().range(cz);
    }),
    (d3.scale.category20c = function () {
      return d3.scale.ordinal().range(cA);
    });
  var cx = [
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#8c564b",
      "#e377c2",
      "#7f7f7f",
      "#bcbd22",
      "#17becf",
    ],
    cy = [
      "#1f77b4",
      "#aec7e8",
      "#ff7f0e",
      "#ffbb78",
      "#2ca02c",
      "#98df8a",
      "#d62728",
      "#ff9896",
      "#9467bd",
      "#c5b0d5",
      "#8c564b",
      "#c49c94",
      "#e377c2",
      "#f7b6d2",
      "#7f7f7f",
      "#c7c7c7",
      "#bcbd22",
      "#dbdb8d",
      "#17becf",
      "#9edae5",
    ],
    cz = [
      "#393b79",
      "#5254a3",
      "#6b6ecf",
      "#9c9ede",
      "#637939",
      "#8ca252",
      "#b5cf6b",
      "#cedb9c",
      "#8c6d31",
      "#bd9e39",
      "#e7ba52",
      "#e7cb94",
      "#843c39",
      "#ad494a",
      "#d6616b",
      "#e7969c",
      "#7b4173",
      "#a55194",
      "#ce6dbd",
      "#de9ed6",
    ],
    cA = [
      "#3182bd",
      "#6baed6",
      "#9ecae1",
      "#c6dbef",
      "#e6550d",
      "#fd8d3c",
      "#fdae6b",
      "#fdd0a2",
      "#31a354",
      "#74c476",
      "#a1d99b",
      "#c7e9c0",
      "#756bb1",
      "#9e9ac8",
      "#bcbddc",
      "#dadaeb",
      "#636363",
      "#969696",
      "#bdbdbd",
      "#d9d9d9",
    ];
  (d3.scale.quantile = function () {
    return cB([], []);
  }),
    (d3.scale.quantize = function () {
      return cC(0, 1, [0, 1]);
    }),
    (d3.scale.identity = function () {
      return cD([0, 1]);
    }),
    (d3.svg = {}),
    (d3.svg.arc = function () {
      function e() {
        var e = a.apply(this, arguments),
          f = b.apply(this, arguments),
          g = c.apply(this, arguments) + cE,
          h = d.apply(this, arguments) + cE,
          i = (h < g && ((i = g), (g = h), (h = i)), h - g),
          j = i < Math.PI ? "0" : "1",
          k = Math.cos(g),
          l = Math.sin(g),
          m = Math.cos(h),
          n = Math.sin(h);
        return i >= cF
          ? e
            ? "M0," +
              f +
              "A" +
              f +
              "," +
              f +
              " 0 1,1 0," +
              -f +
              "A" +
              f +
              "," +
              f +
              " 0 1,1 0," +
              f +
              "M0," +
              e +
              "A" +
              e +
              "," +
              e +
              " 0 1,0 0," +
              -e +
              "A" +
              e +
              "," +
              e +
              " 0 1,0 0," +
              e +
              "Z"
            : "M0," +
              f +
              "A" +
              f +
              "," +
              f +
              " 0 1,1 0," +
              -f +
              "A" +
              f +
              "," +
              f +
              " 0 1,1 0," +
              f +
              "Z"
          : e
          ? "M" +
            f * k +
            "," +
            f * l +
            "A" +
            f +
            "," +
            f +
            " 0 " +
            j +
            ",1 " +
            f * m +
            "," +
            f * n +
            "L" +
            e * m +
            "," +
            e * n +
            "A" +
            e +
            "," +
            e +
            " 0 " +
            j +
            ",0 " +
            e * k +
            "," +
            e * l +
            "Z"
          : "M" +
            f * k +
            "," +
            f * l +
            "A" +
            f +
            "," +
            f +
            " 0 " +
            j +
            ",1 " +
            f * m +
            "," +
            f * n +
            "L0,0" +
            "Z";
      }
      var a = cG,
        b = cH,
        c = cI,
        d = cJ;
      return (
        (e.innerRadius = function (b) {
          return arguments.length ? ((a = p(b)), e) : a;
        }),
        (e.outerRadius = function (a) {
          return arguments.length ? ((b = p(a)), e) : b;
        }),
        (e.startAngle = function (a) {
          return arguments.length ? ((c = p(a)), e) : c;
        }),
        (e.endAngle = function (a) {
          return arguments.length ? ((d = p(a)), e) : d;
        }),
        (e.centroid = function () {
          var e = (a.apply(this, arguments) + b.apply(this, arguments)) / 2,
            f = (c.apply(this, arguments) + d.apply(this, arguments)) / 2 + cE;
          return [Math.cos(f) * e, Math.sin(f) * e];
        }),
        e
      );
    });
  var cE = -Math.PI / 2,
    cF = 2 * Math.PI - 1e-6;
  d3.svg.line = function () {
    return cK(m);
  };
  var cN = "linear",
    cO = d3.map({
      linear: cP,
      "step-before": cQ,
      "step-after": cR,
      basis: cX,
      "basis-open": cY,
      "basis-closed": cZ,
      bundle: c$,
      cardinal: cU,
      "cardinal-open": cS,
      "cardinal-closed": cT,
      monotone: dh,
    }),
    da = [0, 2 / 3, 1 / 3, 0],
    db = [0, 1 / 3, 2 / 3, 0],
    dc = [0, 1 / 6, 2 / 3, 1 / 6];
  (d3.svg.line.radial = function () {
    var a = cK(di);
    return (a.radius = a.x), delete a.x, (a.angle = a.y), delete a.y, a;
  }),
    (cQ.reverse = cR),
    (cR.reverse = cQ),
    (d3.svg.area = function () {
      return dj(Object);
    }),
    (d3.svg.area.radial = function () {
      var a = dj(di);
      return (
        (a.radius = a.x),
        delete a.x,
        (a.innerRadius = a.x0),
        delete a.x0,
        (a.outerRadius = a.x1),
        delete a.x1,
        (a.angle = a.y),
        delete a.y,
        (a.startAngle = a.y0),
        delete a.y0,
        (a.endAngle = a.y1),
        delete a.y1,
        a
      );
    }),
    (d3.svg.chord = function () {
      function f(c, d) {
        var e = g(this, a, c, d),
          f = g(this, b, c, d);
        return (
          "M" +
          e.p0 +
          i(e.r, e.p1, e.a1 - e.a0) +
          (h(e, f)
            ? j(e.r, e.p1, e.r, e.p0)
            : j(e.r, e.p1, f.r, f.p0) +
              i(f.r, f.p1, f.a1 - f.a0) +
              j(f.r, f.p1, e.r, e.p0)) +
          "Z"
        );
      }
      function g(a, b, f, g) {
        var h = b.call(a, f, g),
          i = c.call(a, h, g),
          j = d.call(a, h, g) + cE,
          k = e.call(a, h, g) + cE;
        return {
          r: i,
          a0: j,
          a1: k,
          p0: [i * Math.cos(j), i * Math.sin(j)],
          p1: [i * Math.cos(k), i * Math.sin(k)],
        };
      }
      function h(a, b) {
        return a.a0 == b.a0 && a.a1 == b.a1;
      }
      function i(a, b, c) {
        return "A" + a + "," + a + " 0 " + +(c > Math.PI) + ",1 " + b;
      }
      function j(a, b, c, d) {
        return "Q 0,0 " + d;
      }
      var a = dk,
        b = dl,
        c = dm,
        d = cI,
        e = cJ;
      return (
        (f.radius = function (a) {
          return arguments.length ? ((c = p(a)), f) : c;
        }),
        (f.source = function (b) {
          return arguments.length ? ((a = p(b)), f) : a;
        }),
        (f.target = function (a) {
          return arguments.length ? ((b = p(a)), f) : b;
        }),
        (f.startAngle = function (a) {
          return arguments.length ? ((d = p(a)), f) : d;
        }),
        (f.endAngle = function (a) {
          return arguments.length ? ((e = p(a)), f) : e;
        }),
        f
      );
    }),
    (d3.svg.diagonal = function () {
      function d(d, e) {
        var f = a.call(this, d, e),
          g = b.call(this, d, e),
          h = (f.y + g.y) / 2,
          i = [f, { x: f.x, y: h }, { x: g.x, y: h }, g];
        return (
          (i = i.map(c)), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        );
      }
      var a = dk,
        b = dl,
        c = dq;
      return (
        (d.source = function (b) {
          return arguments.length ? ((a = p(b)), d) : a;
        }),
        (d.target = function (a) {
          return arguments.length ? ((b = p(a)), d) : b;
        }),
        (d.projection = function (a) {
          return arguments.length ? ((c = a), d) : c;
        }),
        d
      );
    }),
    (d3.svg.diagonal.radial = function () {
      var a = d3.svg.diagonal(),
        b = dq,
        c = a.projection;
      return (
        (a.projection = function (a) {
          return arguments.length ? c(dr((b = a))) : b;
        }),
        a
      );
    }),
    (d3.svg.mouse = d3.mouse),
    (d3.svg.touches = d3.touches),
    (d3.svg.symbol = function () {
      function c(c, d) {
        return (dv.get(a.call(this, c, d)) || du)(b.call(this, c, d));
      }
      var a = dt,
        b = ds;
      return (
        (c.type = function (b) {
          return arguments.length ? ((a = p(b)), c) : a;
        }),
        (c.size = function (a) {
          return arguments.length ? ((b = p(a)), c) : b;
        }),
        c
      );
    });
  var dv = d3.map({
    circle: du,
    cross: function (a) {
      var b = Math.sqrt(a / 5) / 2;
      return (
        "M" +
        -3 * b +
        "," +
        -b +
        "H" +
        -b +
        "V" +
        -3 * b +
        "H" +
        b +
        "V" +
        -b +
        "H" +
        3 * b +
        "V" +
        b +
        "H" +
        b +
        "V" +
        3 * b +
        "H" +
        -b +
        "V" +
        b +
        "H" +
        -3 * b +
        "Z"
      );
    },
    diamond: function (a) {
      var b = Math.sqrt(a / (2 * dx)),
        c = b * dx;
      return "M0," + -b + "L" + c + ",0" + " 0," + b + " " + -c + ",0" + "Z";
    },
    square: function (a) {
      var b = Math.sqrt(a) / 2;
      return (
        "M" +
        -b +
        "," +
        -b +
        "L" +
        b +
        "," +
        -b +
        " " +
        b +
        "," +
        b +
        " " +
        -b +
        "," +
        b +
        "Z"
      );
    },
    "triangle-down": function (a) {
      var b = Math.sqrt(a / dw),
        c = (b * dw) / 2;
      return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z";
    },
    "triangle-up": function (a) {
      var b = Math.sqrt(a / dw),
        c = (b * dw) / 2;
      return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z";
    },
  });
  d3.svg.symbolTypes = dv.keys();
  var dw = Math.sqrt(3),
    dx = Math.tan((30 * Math.PI) / 180);
  (d3.svg.axis = function () {
    function k(k) {
      k.each(function () {
        var k = d3.select(this),
          l = h == null ? (a.ticks ? a.ticks.apply(a, g) : a.domain()) : h,
          m =
            i == null ? (a.tickFormat ? a.tickFormat.apply(a, g) : String) : i,
          n = dA(a, l, j),
          o = k.selectAll(".minor").data(n, String),
          p = o
            .enter()
            .insert("line", "g")
            .attr("class", "tick minor")
            .style("opacity", 1e-6),
          q = d3.transition(o.exit()).style("opacity", 1e-6).remove(),
          r = d3.transition(o).style("opacity", 1),
          s = k.selectAll("g").data(l, String),
          t = s.enter().insert("g", "path").style("opacity", 1e-6),
          u = d3.transition(s.exit()).style("opacity", 1e-6).remove(),
          v = d3.transition(s).style("opacity", 1),
          w,
          x = cf(a),
          y = k.selectAll(".domain").data([0]),
          z = y.enter().append("path").attr("class", "domain"),
          A = d3.transition(y),
          B = a.copy(),
          C = this.__chart__ || B;
        (this.__chart__ = B),
          t.append("line").attr("class", "tick"),
          t.append("text");
        var D = t.select("line"),
          E = v.select("line"),
          F = s.select("text").text(m),
          G = t.select("text"),
          H = v.select("text");
        switch (b) {
          case "bottom":
            (w = dy),
              p.attr("y2", d),
              r.attr("x2", 0).attr("y2", d),
              D.attr("y2", c),
              G.attr("y", Math.max(c, 0) + f),
              E.attr("x2", 0).attr("y2", c),
              H.attr("x", 0).attr("y", Math.max(c, 0) + f),
              F.attr("dy", ".71em").attr("text-anchor", "middle"),
              A.attr("d", "M" + x[0] + "," + e + "V0H" + x[1] + "V" + e);
            break;
          case "top":
            (w = dy),
              p.attr("y2", -d),
              r.attr("x2", 0).attr("y2", -d),
              D.attr("y2", -c),
              G.attr("y", -(Math.max(c, 0) + f)),
              E.attr("x2", 0).attr("y2", -c),
              H.attr("x", 0).attr("y", -(Math.max(c, 0) + f)),
              F.attr("dy", "0em").attr("text-anchor", "middle"),
              A.attr("d", "M" + x[0] + "," + -e + "V0H" + x[1] + "V" + -e);
            break;
          case "left":
            (w = dz),
              p.attr("x2", -d),
              r.attr("x2", -d).attr("y2", 0),
              D.attr("x2", -c),
              G.attr("x", -(Math.max(c, 0) + f)),
              E.attr("x2", -c).attr("y2", 0),
              H.attr("x", -(Math.max(c, 0) + f)).attr("y", 0),
              F.attr("dy", ".32em").attr("text-anchor", "end"),
              A.attr("d", "M" + -e + "," + x[0] + "H0V" + x[1] + "H" + -e);
            break;
          case "right":
            (w = dz),
              p.attr("x2", d),
              r.attr("x2", d).attr("y2", 0),
              D.attr("x2", c),
              G.attr("x", Math.max(c, 0) + f),
              E.attr("x2", c).attr("y2", 0),
              H.attr("x", Math.max(c, 0) + f).attr("y", 0),
              F.attr("dy", ".32em").attr("text-anchor", "start"),
              A.attr("d", "M" + e + "," + x[0] + "H0V" + x[1] + "H" + e);
        }
        if (a.ticks)
          t.call(w, C),
            v.call(w, B),
            u.call(w, B),
            p.call(w, C),
            r.call(w, B),
            q.call(w, B);
        else {
          var I = B.rangeBand() / 2,
            J = function (a) {
              return B(a) + I;
            };
          t.call(w, J), v.call(w, J);
        }
      });
    }
    var a = d3.scale.linear(),
      b = "bottom",
      c = 6,
      d = 6,
      e = 6,
      f = 3,
      g = [10],
      h = null,
      i,
      j = 0;
    return (
      (k.scale = function (b) {
        return arguments.length ? ((a = b), k) : a;
      }),
      (k.orient = function (a) {
        return arguments.length ? ((b = a), k) : b;
      }),
      (k.ticks = function () {
        return arguments.length ? ((g = arguments), k) : g;
      }),
      (k.tickValues = function (a) {
        return arguments.length ? ((h = a), k) : h;
      }),
      (k.tickFormat = function (a) {
        return arguments.length ? ((i = a), k) : i;
      }),
      (k.tickSize = function (a, b, f) {
        if (!arguments.length) return c;
        var g = arguments.length - 1;
        return (
          (c = +a), (d = g > 1 ? +b : c), (e = g > 0 ? +arguments[g] : c), k
        );
      }),
      (k.tickPadding = function (a) {
        return arguments.length ? ((f = +a), k) : f;
      }),
      (k.tickSubdivide = function (a) {
        return arguments.length ? ((j = +a), k) : j;
      }),
      k
    );
  }),
    (d3.svg.brush = function () {
      function g(a) {
        a.each(function () {
          var a = d3.select(this),
            e = a.selectAll(".background").data([0]),
            f = a.selectAll(".extent").data([0]),
            l = a.selectAll(".resize").data(d, String),
            m;
          a
            .style("pointer-events", "all")
            .on("mousedown.brush", k)
            .on("touchstart.brush", k),
            e
              .enter()
              .append("rect")
              .attr("class", "background")
              .style("visibility", "hidden")
              .style("cursor", "crosshair"),
            f
              .enter()
              .append("rect")
              .attr("class", "extent")
              .style("cursor", "move"),
            l
              .enter()
              .append("g")
              .attr("class", function (a) {
                return "resize " + a;
              })
              .style("cursor", function (a) {
                return dB[a];
              })
              .append("rect")
              .attr("x", function (a) {
                return /[ew]$/.test(a) ? -3 : null;
              })
              .attr("y", function (a) {
                return /^[ns]/.test(a) ? -3 : null;
              })
              .attr("width", 6)
              .attr("height", 6)
              .style("visibility", "hidden"),
            l.style("display", g.empty() ? "none" : null),
            l.exit().remove(),
            b &&
              ((m = cf(b)), e.attr("x", m[0]).attr("width", m[1] - m[0]), i(a)),
            c &&
              ((m = cf(c)),
              e.attr("y", m[0]).attr("height", m[1] - m[0]),
              j(a)),
            h(a);
        });
      }
      function h(a) {
        a.selectAll(".resize").attr("transform", function (a) {
          return (
            "translate(" + e[+/e$/.test(a)][0] + "," + e[+/^s/.test(a)][1] + ")"
          );
        });
      }
      function i(a) {
        a.select(".extent").attr("x", e[0][0]),
          a
            .selectAll(".extent,.n>rect,.s>rect")
            .attr("width", e[1][0] - e[0][0]);
      }
      function j(a) {
        a.select(".extent").attr("y", e[0][1]),
          a
            .selectAll(".extent,.e>rect,.w>rect")
            .attr("height", e[1][1] - e[0][1]);
      }
      function k() {
        function x() {
          var a = d3.event.changedTouches;
          return a ? d3.touches(d, a)[0] : d3.mouse(d);
        }
        function y() {
          d3.event.keyCode == 32 &&
            (q || ((r = null), (s[0] -= e[1][0]), (s[1] -= e[1][1]), (q = 2)),
            Y());
        }
        function z() {
          d3.event.keyCode == 32 &&
            q == 2 &&
            ((s[0] += e[1][0]), (s[1] += e[1][1]), (q = 0), Y());
        }
        function A() {
          var a = x(),
            d = !1;
          t && ((a[0] += t[0]), (a[1] += t[1])),
            q ||
              (d3.event.altKey
                ? (r ||
                    (r = [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]),
                  (s[0] = e[+(a[0] < r[0])][0]),
                  (s[1] = e[+(a[1] < r[1])][1]))
                : (r = null)),
            o && B(a, b, 0) && (i(m), (d = !0)),
            p && B(a, c, 1) && (j(m), (d = !0)),
            d && (h(m), l({ type: "brush", mode: q ? "move" : "resize" }));
        }
        function B(a, b, c) {
          var d = cf(b),
            g = d[0],
            h = d[1],
            i = s[c],
            j = e[1][c] - e[0][c],
            k,
            l;
          q && ((g -= i), (h -= j + i)),
            (k = Math.max(g, Math.min(h, a[c]))),
            q
              ? (l = (k += i) + j)
              : (r && (i = Math.max(g, Math.min(h, 2 * r[c] - k))),
                i < k ? ((l = k), (k = i)) : (l = i));
          if (e[0][c] !== k || e[1][c] !== l)
            return (f = null), (e[0][c] = k), (e[1][c] = l), !0;
        }
        function C() {
          A(),
            m
              .style("pointer-events", "all")
              .selectAll(".resize")
              .style("display", g.empty() ? "none" : null),
            d3.select("body").style("cursor", null),
            u
              .on("mousemove.brush", null)
              .on("mouseup.brush", null)
              .on("touchmove.brush", null)
              .on("touchend.brush", null)
              .on("keydown.brush", null)
              .on("keyup.brush", null),
            l({ type: "brushend" }),
            Y();
        }
        var d = this,
          k = d3.select(d3.event.target),
          l = a.of(d, arguments),
          m = d3.select(d),
          n = k.datum(),
          o = !/^(n|s)$/.test(n) && b,
          p = !/^(e|w)$/.test(n) && c,
          q = k.classed("extent"),
          r,
          s = x(),
          t,
          u = d3
            .select(window)
            .on("mousemove.brush", A)
            .on("mouseup.brush", C)
            .on("touchmove.brush", A)
            .on("touchend.brush", C)
            .on("keydown.brush", y)
            .on("keyup.brush", z);
        if (q) (s[0] = e[0][0] - s[0]), (s[1] = e[0][1] - s[1]);
        else if (n) {
          var v = +/w$/.test(n),
            w = +/^n/.test(n);
          (t = [e[1 - v][0] - s[0], e[1 - w][1] - s[1]]),
            (s[0] = e[v][0]),
            (s[1] = e[w][1]);
        } else d3.event.altKey && (r = s.slice());
        m
          .style("pointer-events", "none")
          .selectAll(".resize")
          .style("display", null),
          d3.select("body").style("cursor", k.style("cursor")),
          l({ type: "brushstart" }),
          A(),
          Y();
      }
      var a = $(g, "brushstart", "brush", "brushend"),
        b = null,
        c = null,
        d = dC[0],
        e = [
          [0, 0],
          [0, 0],
        ],
        f;
      return (
        (g.x = function (a) {
          return arguments.length ? ((b = a), (d = dC[(!b << 1) | !c]), g) : b;
        }),
        (g.y = function (a) {
          return arguments.length ? ((c = a), (d = dC[(!b << 1) | !c]), g) : c;
        }),
        (g.extent = function (a) {
          var d, h, i, j, k;
          return arguments.length
            ? ((f = [
                [0, 0],
                [0, 0],
              ]),
              b &&
                ((d = a[0]),
                (h = a[1]),
                c && ((d = d[0]), (h = h[0])),
                (f[0][0] = d),
                (f[1][0] = h),
                b.invert && ((d = b(d)), (h = b(h))),
                h < d && ((k = d), (d = h), (h = k)),
                (e[0][0] = d | 0),
                (e[1][0] = h | 0)),
              c &&
                ((i = a[0]),
                (j = a[1]),
                b && ((i = i[1]), (j = j[1])),
                (f[0][1] = i),
                (f[1][1] = j),
                c.invert && ((i = c(i)), (j = c(j))),
                j < i && ((k = i), (i = j), (j = k)),
                (e[0][1] = i | 0),
                (e[1][1] = j | 0)),
              g)
            : ((a = f || e),
              b &&
                ((d = a[0][0]),
                (h = a[1][0]),
                f ||
                  ((d = e[0][0]),
                  (h = e[1][0]),
                  b.invert && ((d = b.invert(d)), (h = b.invert(h))),
                  h < d && ((k = d), (d = h), (h = k)))),
              c &&
                ((i = a[0][1]),
                (j = a[1][1]),
                f ||
                  ((i = e[0][1]),
                  (j = e[1][1]),
                  c.invert && ((i = c.invert(i)), (j = c.invert(j))),
                  j < i && ((k = i), (i = j), (j = k)))),
              b && c
                ? [
                    [d, i],
                    [h, j],
                  ]
                : b
                ? [d, h]
                : c && [i, j]);
        }),
        (g.clear = function () {
          return (f = null), (e[0][0] = e[0][1] = e[1][0] = e[1][1] = 0), g;
        }),
        (g.empty = function () {
          return (b && e[0][0] === e[1][0]) || (c && e[0][1] === e[1][1]);
        }),
        d3.rebind(g, a, "on")
      );
    });
  var dB = {
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize",
    },
    dC = [
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
      ["e", "w"],
      ["n", "s"],
      [],
    ];
  (d3.behavior = {}),
    (d3.behavior.drag = function () {
      function c() {
        this.on("mousedown.drag", d).on("touchstart.drag", d);
      }
      function d() {
        function j() {
          var a = c.parentNode,
            b = d3.event.changedTouches;
          return b ? d3.touches(a, b)[0] : d3.mouse(a);
        }
        function k() {
          if (!c.parentNode) return l();
          var a = j(),
            b = a[0] - g[0],
            e = a[1] - g[1];
          (h |= b | e),
            (g = a),
            Y(),
            d({ type: "drag", x: a[0] + f[0], y: a[1] + f[1], dx: b, dy: e });
        }
        function l() {
          d({ type: "dragend" }),
            h && (Y(), d3.event.target === e && i.on("click.drag", m, !0)),
            i
              .on("mousemove.drag", null)
              .on("touchmove.drag", null)
              .on("mouseup.drag", null)
              .on("touchend.drag", null);
        }
        function m() {
          Y(), i.on("click.drag", null);
        }
        var c = this,
          d = a.of(c, arguments),
          e = d3.event.target,
          f,
          g = j(),
          h = 0,
          i = d3
            .select(window)
            .on("mousemove.drag", k)
            .on("touchmove.drag", k)
            .on("mouseup.drag", l, !0)
            .on("touchend.drag", l, !0);
        b
          ? ((f = b.apply(c, arguments)), (f = [f.x - g[0], f.y - g[1]]))
          : (f = [0, 0]),
          Y(),
          d({ type: "dragstart" });
      }
      var a = $(c, "drag", "dragstart", "dragend"),
        b = null;
      return (
        (c.origin = function (a) {
          return arguments.length ? ((b = a), c) : b;
        }),
        d3.rebind(c, a, "on")
      );
    }),
    (d3.behavior.zoom = function () {
      function l() {
        this.on("mousedown.zoom", r)
          .on("mousewheel.zoom", s)
          .on("mousemove.zoom", t)
          .on("DOMMouseScroll.zoom", s)
          .on("dblclick.zoom", u)
          .on("touchstart.zoom", v)
          .on("touchmove.zoom", w)
          .on("touchend.zoom", v);
      }
      function m(b) {
        return [(b[0] - a[0]) / c, (b[1] - a[1]) / c];
      }
      function n(b) {
        return [b[0] * c + a[0], b[1] * c + a[1]];
      }
      function o(a) {
        c = Math.max(e[0], Math.min(e[1], a));
      }
      function p(b, c) {
        (c = n(c)), (a[0] += b[0] - c[0]), (a[1] += b[1] - c[1]);
      }
      function q(b) {
        h &&
          h.domain(
            g
              .range()
              .map(function (b) {
                return (b - a[0]) / c;
              })
              .map(g.invert)
          ),
          j &&
            j.domain(
              i
                .range()
                .map(function (b) {
                  return (b - a[1]) / c;
                })
                .map(i.invert)
            ),
          d3.event.preventDefault(),
          b({ type: "zoom", scale: c, translate: a });
      }
      function r() {
        function h() {
          (d = 1), p(d3.mouse(a), g), q(b);
        }
        function i() {
          d && Y(),
            e.on("mousemove.zoom", null).on("mouseup.zoom", null),
            d && d3.event.target === c && e.on("click.zoom", j, !0);
        }
        function j() {
          Y(), e.on("click.zoom", null);
        }
        var a = this,
          b = f.of(a, arguments),
          c = d3.event.target,
          d = 0,
          e = d3.select(window).on("mousemove.zoom", h).on("mouseup.zoom", i),
          g = m(d3.mouse(a));
        window.focus(), Y();
      }
      function s() {
        b || (b = m(d3.mouse(this))),
          o(Math.pow(2, dF() * 0.002) * c),
          p(d3.mouse(this), b),
          q(f.of(this, arguments));
      }
      function t() {
        b = null;
      }
      function u() {
        var a = d3.mouse(this),
          b = m(a);
        o(d3.event.shiftKey ? c / 2 : c * 2), p(a, b), q(f.of(this, arguments));
      }
      function v() {
        var a = d3.touches(this),
          e = Date.now();
        (d = c),
          (b = {}),
          a.forEach(function (a) {
            b[a.identifier] = m(a);
          }),
          Y();
        if (a.length === 1 && e - k < 500) {
          var g = a[0],
            h = m(a[0]);
          o(c * 2), p(g, h), q(f.of(this, arguments));
        }
        k = e;
      }
      function w() {
        var a = d3.touches(this),
          c = a[0],
          e = b[c.identifier];
        if ((g = a[1])) {
          var g,
            h = b[g.identifier];
          (c = [(c[0] + g[0]) / 2, (c[1] + g[1]) / 2]),
            (e = [(e[0] + h[0]) / 2, (e[1] + h[1]) / 2]),
            o(d3.event.scale * d);
        }
        p(c, e), q(f.of(this, arguments));
      }
      var a = [0, 0],
        b,
        c = 1,
        d,
        e = dE,
        f = $(l, "zoom"),
        g,
        h,
        i,
        j,
        k;
      return (
        (l.translate = function (b) {
          return arguments.length ? ((a = b.map(Number)), l) : a;
        }),
        (l.scale = function (a) {
          return arguments.length ? ((c = +a), l) : c;
        }),
        (l.scaleExtent = function (a) {
          return arguments.length
            ? ((e = a == null ? dE : a.map(Number)), l)
            : e;
        }),
        (l.x = function (a) {
          return arguments.length ? ((h = a), (g = a.copy()), l) : h;
        }),
        (l.y = function (a) {
          return arguments.length ? ((j = a), (i = a.copy()), l) : j;
        }),
        d3.rebind(l, f, "on")
      );
    });
  var dD,
    dE = [0, Infinity];
  (d3.layout = {}),
    (d3.layout.bundle = function () {
      return function (a) {
        var b = [],
          c = -1,
          d = a.length;
        while (++c < d) b.push(dG(a[c]));
        return b;
      };
    }),
    (d3.layout.chord = function () {
      function j() {
        var a = {},
          j = [],
          l = d3.range(e),
          m = [],
          n,
          o,
          p,
          q,
          r;
        (b = []), (c = []), (n = 0), (q = -1);
        while (++q < e) {
          (o = 0), (r = -1);
          while (++r < e) o += d[q][r];
          j.push(o), m.push(d3.range(e)), (n += o);
        }
        g &&
          l.sort(function (a, b) {
            return g(j[a], j[b]);
          }),
          h &&
            m.forEach(function (a, b) {
              a.sort(function (a, c) {
                return h(d[b][a], d[b][c]);
              });
            }),
          (n = (2 * Math.PI - f * e) / n),
          (o = 0),
          (q = -1);
        while (++q < e) {
          (p = o), (r = -1);
          while (++r < e) {
            var s = l[q],
              t = m[s][r],
              u = d[s][t],
              v = o,
              w = (o += u * n);
            a[s + "-" + t] = {
              index: s,
              subindex: t,
              startAngle: v,
              endAngle: w,
              value: u,
            };
          }
          (c[s] = { index: s, startAngle: p, endAngle: o, value: (o - p) / n }),
            (o += f);
        }
        q = -1;
        while (++q < e) {
          r = q - 1;
          while (++r < e) {
            var x = a[q + "-" + r],
              y = a[r + "-" + q];
            (x.value || y.value) &&
              b.push(
                x.value < y.value
                  ? { source: y, target: x }
                  : { source: x, target: y }
              );
          }
        }
        i && k();
      }
      function k() {
        b.sort(function (a, b) {
          return i(
            (a.source.value + a.target.value) / 2,
            (b.source.value + b.target.value) / 2
          );
        });
      }
      var a = {},
        b,
        c,
        d,
        e,
        f = 0,
        g,
        h,
        i;
      return (
        (a.matrix = function (f) {
          return arguments.length
            ? ((e = (d = f) && d.length), (b = c = null), a)
            : d;
        }),
        (a.padding = function (d) {
          return arguments.length ? ((f = d), (b = c = null), a) : f;
        }),
        (a.sortGroups = function (d) {
          return arguments.length ? ((g = d), (b = c = null), a) : g;
        }),
        (a.sortSubgroups = function (c) {
          return arguments.length ? ((h = c), (b = null), a) : h;
        }),
        (a.sortChords = function (c) {
          return arguments.length ? ((i = c), b && k(), a) : i;
        }),
        (a.chords = function () {
          return b || j(), b;
        }),
        (a.groups = function () {
          return c || j(), c;
        }),
        a
      );
    }),
    (d3.layout.force = function () {
      function t(a) {
        return function (b, c, d, e, f) {
          if (b.point !== a) {
            var g = b.cx - a.x,
              h = b.cy - a.y,
              i = 1 / Math.sqrt(g * g + h * h);
            if ((e - c) * i < k) {
              var j = b.charge * i * i;
              return (a.px -= g * j), (a.py -= h * j), !0;
            }
            if (b.point && isFinite(i)) {
              var j = b.pointCharge * i * i;
              (a.px -= g * j), (a.py -= h * j);
            }
          }
          return !b.charge;
        };
      }
      function u(b) {
        dL((dK = b)), (dJ = a);
      }
      var a = {},
        b = d3.dispatch("start", "tick", "end"),
        c = [1, 1],
        d,
        e,
        f = 0.9,
        g = dQ,
        h = dR,
        i = -30,
        j = 0.1,
        k = 0.8,
        l,
        n = [],
        o = [],
        q,
        r,
        s;
      return (
        (a.tick = function () {
          if ((e *= 0.99) < 0.005)
            return b.end({ type: "end", alpha: (e = 0) }), !0;
          var a = n.length,
            d = o.length,
            g,
            h,
            k,
            l,
            m,
            p,
            u,
            v,
            w;
          for (h = 0; h < d; ++h) {
            (k = o[h]),
              (l = k.source),
              (m = k.target),
              (v = m.x - l.x),
              (w = m.y - l.y);
            if ((p = v * v + w * w))
              (p = (e * r[h] * ((p = Math.sqrt(p)) - q[h])) / p),
                (v *= p),
                (w *= p),
                (m.x -= v * (u = l.weight / (m.weight + l.weight))),
                (m.y -= w * u),
                (l.x += v * (u = 1 - u)),
                (l.y += w * u);
          }
          if ((u = e * j)) {
            (v = c[0] / 2), (w = c[1] / 2), (h = -1);
            if (u)
              while (++h < a)
                (k = n[h]), (k.x += (v - k.x) * u), (k.y += (w - k.y) * u);
          }
          if (i) {
            dP((g = d3.geom.quadtree(n)), e, s), (h = -1);
            while (++h < a) (k = n[h]).fixed || g.visit(t(k));
          }
          h = -1;
          while (++h < a)
            (k = n[h]),
              k.fixed
                ? ((k.x = k.px), (k.y = k.py))
                : ((k.x -= (k.px - (k.px = k.x)) * f),
                  (k.y -= (k.py - (k.py = k.y)) * f));
          b.tick({ type: "tick", alpha: e });
        }),
        (a.nodes = function (b) {
          return arguments.length ? ((n = b), a) : n;
        }),
        (a.links = function (b) {
          return arguments.length ? ((o = b), a) : o;
        }),
        (a.size = function (b) {
          return arguments.length ? ((c = b), a) : c;
        }),
        (a.linkDistance = function (b) {
          return arguments.length ? ((g = p(b)), a) : g;
        }),
        (a.distance = a.linkDistance),
        (a.linkStrength = function (b) {
          return arguments.length ? ((h = p(b)), a) : h;
        }),
        (a.friction = function (b) {
          return arguments.length ? ((f = b), a) : f;
        }),
        (a.charge = function (b) {
          return arguments.length
            ? ((i = typeof b == "function" ? b : +b), a)
            : i;
        }),
        (a.gravity = function (b) {
          return arguments.length ? ((j = b), a) : j;
        }),
        (a.theta = function (b) {
          return arguments.length ? ((k = b), a) : k;
        }),
        (a.alpha = function (c) {
          return arguments.length
            ? (e
                ? c > 0
                  ? (e = c)
                  : (e = 0)
                : c > 0 &&
                  (b.start({ type: "start", alpha: (e = c) }),
                  d3.timer(a.tick)),
              a)
            : e;
        }),
        (a.start = function () {
          function p(a, c) {
            var d = t(b),
              e = -1,
              f = d.length,
              g;
            while (++e < f) if (!isNaN((g = d[e][a]))) return g;
            return Math.random() * c;
          }
          function t() {
            if (!l) {
              l = [];
              for (d = 0; d < e; ++d) l[d] = [];
              for (d = 0; d < f; ++d) {
                var a = o[d];
                l[a.source.index].push(a.target),
                  l[a.target.index].push(a.source);
              }
            }
            return l[b];
          }
          var b,
            d,
            e = n.length,
            f = o.length,
            j = c[0],
            k = c[1],
            l,
            m;
          for (b = 0; b < e; ++b) ((m = n[b]).index = b), (m.weight = 0);
          (q = []), (r = []);
          for (b = 0; b < f; ++b)
            (m = o[b]),
              typeof m.source == "number" && (m.source = n[m.source]),
              typeof m.target == "number" && (m.target = n[m.target]),
              (q[b] = g.call(this, m, b)),
              (r[b] = h.call(this, m, b)),
              ++m.source.weight,
              ++m.target.weight;
          for (b = 0; b < e; ++b)
            (m = n[b]),
              isNaN(m.x) && (m.x = p("x", j)),
              isNaN(m.y) && (m.y = p("y", k)),
              isNaN(m.px) && (m.px = m.x),
              isNaN(m.py) && (m.py = m.y);
          s = [];
          if (typeof i == "function")
            for (b = 0; b < e; ++b) s[b] = +i.call(this, n[b], b);
          else for (b = 0; b < e; ++b) s[b] = i;
          return a.resume();
        }),
        (a.resume = function () {
          return a.alpha(0.1);
        }),
        (a.stop = function () {
          return a.alpha(0);
        }),
        (a.drag = function () {
          d ||
            (d = d3.behavior
              .drag()
              .origin(m)
              .on("dragstart", u)
              .on("drag", dO)
              .on("dragend", dN)),
            this.on("mouseover.force", dL).on("mouseout.force", dM).call(d);
        }),
        d3.rebind(a, b, "on")
      );
    });
  var dJ, dK;
  (d3.layout.partition = function () {
    function c(a, b, d, e) {
      var f = a.children;
      (a.x = b), (a.y = a.depth * e), (a.dx = d), (a.dy = e);
      if (f && (h = f.length)) {
        var g = -1,
          h,
          i,
          j;
        d = a.value ? d / a.value : 0;
        while (++g < h) c((i = f[g]), b, (j = i.value * d), e), (b += j);
      }
    }
    function d(a) {
      var b = a.children,
        c = 0;
      if (b && (f = b.length)) {
        var e = -1,
          f;
        while (++e < f) c = Math.max(c, d(b[e]));
      }
      return 1 + c;
    }
    function e(e, f) {
      var g = a.call(this, e, f);
      return c(g[0], 0, b[0], b[1] / d(g[0])), g;
    }
    var a = d3.layout.hierarchy(),
      b = [1, 1];
    return (
      (e.size = function (a) {
        return arguments.length ? ((b = a), e) : b;
      }),
      ee(e, a)
    );
  }),
    (d3.layout.pie = function () {
      function e(f, g) {
        var h = f.map(function (b, c) {
            return +a.call(e, b, c);
          }),
          i = +(typeof c == "function" ? c.apply(this, arguments) : c),
          j =
            ((typeof d == "function" ? d.apply(this, arguments) : d) - c) /
            d3.sum(h),
          k = d3.range(f.length);
        b != null &&
          k.sort(
            b === dS
              ? function (a, b) {
                  return h[b] - h[a];
                }
              : function (a, c) {
                  return b(f[a], f[c]);
                }
          );
        var l = [];
        return (
          k.forEach(function (a) {
            var b;
            l[a] = {
              data: f[a],
              value: (b = h[a]),
              startAngle: i,
              endAngle: (i += b * j),
            };
          }),
          l
        );
      }
      var a = Number,
        b = dS,
        c = 0,
        d = 2 * Math.PI;
      return (
        (e.value = function (b) {
          return arguments.length ? ((a = b), e) : a;
        }),
        (e.sort = function (a) {
          return arguments.length ? ((b = a), e) : b;
        }),
        (e.startAngle = function (a) {
          return arguments.length ? ((c = a), e) : c;
        }),
        (e.endAngle = function (a) {
          return arguments.length ? ((d = a), e) : d;
        }),
        e
      );
    });
  var dS = {};
  d3.layout.stack = function () {
    function g(h, i) {
      var j = h.map(function (b, c) {
          return a.call(g, b, c);
        }),
        k = j.map(function (a, b) {
          return a.map(function (a, b) {
            return [e.call(g, a, b), f.call(g, a, b)];
          });
        }),
        l = b.call(g, k, i);
      (j = d3.permute(j, l)), (k = d3.permute(k, l));
      var m = c.call(g, k, i),
        n = j.length,
        o = j[0].length,
        p,
        q,
        r;
      for (q = 0; q < o; ++q) {
        d.call(g, j[0][q], (r = m[q]), k[0][q][1]);
        for (p = 1; p < n; ++p)
          d.call(g, j[p][q], (r += k[p - 1][q][1]), k[p][q][1]);
      }
      return h;
    }
    var a = m,
      b = dY,
      c = dZ,
      d = dV,
      e = dT,
      f = dU;
    return (
      (g.values = function (b) {
        return arguments.length ? ((a = b), g) : a;
      }),
      (g.order = function (a) {
        return arguments.length
          ? ((b = typeof a == "function" ? a : dW.get(a) || dY), g)
          : b;
      }),
      (g.offset = function (a) {
        return arguments.length
          ? ((c = typeof a == "function" ? a : dX.get(a) || dZ), g)
          : c;
      }),
      (g.x = function (a) {
        return arguments.length ? ((e = a), g) : e;
      }),
      (g.y = function (a) {
        return arguments.length ? ((f = a), g) : f;
      }),
      (g.out = function (a) {
        return arguments.length ? ((d = a), g) : d;
      }),
      g
    );
  };
  var dW = d3.map({
      "inside-out": function (a) {
        var b = a.length,
          c,
          d,
          e = a.map(d$),
          f = a.map(d_),
          g = d3.range(b).sort(function (a, b) {
            return e[a] - e[b];
          }),
          h = 0,
          i = 0,
          j = [],
          k = [];
        for (c = 0; c < b; ++c)
          (d = g[c]),
            h < i ? ((h += f[d]), j.push(d)) : ((i += f[d]), k.push(d));
        return k.reverse().concat(j);
      },
      reverse: function (a) {
        return d3.range(a.length).reverse();
      },
      default: dY,
    }),
    dX = d3.map({
      silhouette: function (a) {
        var b = a.length,
          c = a[0].length,
          d = [],
          e = 0,
          f,
          g,
          h,
          i = [];
        for (g = 0; g < c; ++g) {
          for (f = 0, h = 0; f < b; f++) h += a[f][g][1];
          h > e && (e = h), d.push(h);
        }
        for (g = 0; g < c; ++g) i[g] = (e - d[g]) / 2;
        return i;
      },
      wiggle: function (a) {
        var b = a.length,
          c = a[0],
          d = c.length,
          e = 0,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = [];
        o[0] = m = n = 0;
        for (g = 1; g < d; ++g) {
          for (f = 0, i = 0; f < b; ++f) i += a[f][g][1];
          for (f = 0, j = 0, l = c[g][0] - c[g - 1][0]; f < b; ++f) {
            for (h = 0, k = (a[f][g][1] - a[f][g - 1][1]) / (2 * l); h < f; ++h)
              k += (a[h][g][1] - a[h][g - 1][1]) / l;
            j += k * a[f][g][1];
          }
          (o[g] = m -= i ? (j / i) * l : 0), m < n && (n = m);
        }
        for (g = 0; g < d; ++g) o[g] -= n;
        return o;
      },
      expand: function (a) {
        var b = a.length,
          c = a[0].length,
          d = 1 / b,
          e,
          f,
          g,
          h = [];
        for (f = 0; f < c; ++f) {
          for (e = 0, g = 0; e < b; e++) g += a[e][f][1];
          if (g) for (e = 0; e < b; e++) a[e][f][1] /= g;
          else for (e = 0; e < b; e++) a[e][f][1] = d;
        }
        for (f = 0; f < c; ++f) h[f] = 0;
        return h;
      },
      zero: dZ,
    });
  (d3.layout.histogram = function () {
    function e(e, f) {
      var g = [],
        h = e.map(b, this),
        i = c.call(this, h, f),
        j = d.call(this, i, h, f),
        k,
        f = -1,
        l = h.length,
        m = j.length - 1,
        n = a ? 1 : 1 / l,
        o;
      while (++f < m)
        (k = g[f] = []), (k.dx = j[f + 1] - (k.x = j[f])), (k.y = 0);
      if (m > 0) {
        f = -1;
        while (++f < l)
          (o = h[f]),
            o >= i[0] &&
              o <= i[1] &&
              ((k = g[d3.bisect(j, o, 1, m) - 1]), (k.y += n), k.push(e[f]));
      }
      return g;
    }
    var a = !0,
      b = Number,
      c = ed,
      d = eb;
    return (
      (e.value = function (a) {
        return arguments.length ? ((b = a), e) : b;
      }),
      (e.range = function (a) {
        return arguments.length ? ((c = p(a)), e) : c;
      }),
      (e.bins = function (a) {
        return arguments.length
          ? ((d =
              typeof a == "number"
                ? function (b) {
                    return ec(b, a);
                  }
                : p(a)),
            e)
          : d;
      }),
      (e.frequency = function (b) {
        return arguments.length ? ((a = !!b), e) : a;
      }),
      e
    );
  }),
    (d3.layout.hierarchy = function () {
      function d(e, g, h) {
        var i = b.call(f, e, g),
          j = ej ? e : { data: e };
        (j.depth = g), h.push(j);
        if (i && (l = i.length)) {
          var k = -1,
            l,
            m = (j.children = []),
            n = 0,
            o = g + 1,
            p;
          while (++k < l)
            (p = d(i[k], o, h)), (p.parent = j), m.push(p), (n += p.value);
          a && m.sort(a), c && (j.value = n);
        } else c && (j.value = +c.call(f, e, g) || 0);
        return j;
      }
      function e(a, b) {
        var d = a.children,
          g = 0;
        if (d && (i = d.length)) {
          var h = -1,
            i,
            j = b + 1;
          while (++h < i) g += e(d[h], j);
        } else c && (g = +c.call(f, ej ? a : a.data, b) || 0);
        return c && (a.value = g), g;
      }
      function f(a) {
        var b = [];
        return d(a, 0, b), b;
      }
      var a = eh,
        b = ef,
        c = eg;
      return (
        (f.sort = function (b) {
          return arguments.length ? ((a = b), f) : a;
        }),
        (f.children = function (a) {
          return arguments.length ? ((b = a), f) : b;
        }),
        (f.value = function (a) {
          return arguments.length ? ((c = a), f) : c;
        }),
        (f.revalue = function (a) {
          return e(a, 0), a;
        }),
        f
      );
    });
  var ej = !1;
  (d3.layout.pack = function () {
    function c(c, d) {
      var e = a.call(this, c, d),
        f = e[0];
      (f.x = 0), (f.y = 0), er(f);
      var g = b[0],
        h = b[1],
        i = 1 / Math.max((2 * f.r) / g, (2 * f.r) / h);
      return es(f, g / 2, h / 2, i), e;
    }
    var a = d3.layout.hierarchy().sort(ek),
      b = [1, 1];
    return (
      (c.size = function (a) {
        return arguments.length ? ((b = a), c) : b;
      }),
      ee(c, a)
    );
  }),
    (d3.layout.cluster = function () {
      function d(d, e) {
        var f = a.call(this, d, e),
          g = f[0],
          h,
          i = 0,
          j,
          k;
        eF(g, function (a) {
          var c = a.children;
          c && c.length
            ? ((a.x = ev(c)), (a.y = eu(c)))
            : ((a.x = h ? (i += b(a, h)) : 0), (a.y = 0), (h = a));
        });
        var l = ew(g),
          m = ex(g),
          n = l.x - b(l, m) / 2,
          o = m.x + b(m, l) / 2;
        return (
          eF(g, function (a) {
            (a.x = ((a.x - n) / (o - n)) * c[0]),
              (a.y = (1 - (g.y ? a.y / g.y : 1)) * c[1]);
          }),
          f
        );
      }
      var a = d3.layout.hierarchy().sort(null).value(null),
        b = ey,
        c = [1, 1];
      return (
        (d.separation = function (a) {
          return arguments.length ? ((b = a), d) : b;
        }),
        (d.size = function (a) {
          return arguments.length ? ((c = a), d) : c;
        }),
        ee(d, a)
      );
    }),
    (d3.layout.tree = function () {
      function d(d, e) {
        function h(a, c) {
          var d = a.children,
            e = a._tree;
          if (d && (f = d.length)) {
            var f,
              g = d[0],
              i,
              k = g,
              l,
              m = -1;
            while (++m < f) (l = d[m]), h(l, i), (k = j(l, i, k)), (i = l);
            eG(a);
            var n = 0.5 * (g._tree.prelim + l._tree.prelim);
            c
              ? ((e.prelim = c._tree.prelim + b(a, c)), (e.mod = e.prelim - n))
              : (e.prelim = n);
          } else c && (e.prelim = c._tree.prelim + b(a, c));
        }
        function i(a, b) {
          a.x = a._tree.prelim + b;
          var c = a.children;
          if (c && (e = c.length)) {
            var d = -1,
              e;
            b += a._tree.mod;
            while (++d < e) i(c[d], b);
          }
        }
        function j(a, c, d) {
          if (c) {
            var e = a,
              f = a,
              g = c,
              h = a.parent.children[0],
              i = e._tree.mod,
              j = f._tree.mod,
              k = g._tree.mod,
              l = h._tree.mod,
              m;
            while (((g = eA(g)), (e = ez(e)), g && e))
              (h = ez(h)),
                (f = eA(f)),
                (f._tree.ancestor = a),
                (m = g._tree.prelim + k - e._tree.prelim - i + b(g, e)),
                m > 0 && (eH(eI(g, a, d), a, m), (i += m), (j += m)),
                (k += g._tree.mod),
                (i += e._tree.mod),
                (l += h._tree.mod),
                (j += f._tree.mod);
            g && !eA(f) && ((f._tree.thread = g), (f._tree.mod += k - j)),
              e &&
                !ez(h) &&
                ((h._tree.thread = e), (h._tree.mod += i - l), (d = a));
          }
          return d;
        }
        var f = a.call(this, d, e),
          g = f[0];
        eF(g, function (a, b) {
          a._tree = {
            ancestor: a,
            prelim: 0,
            mod: 0,
            change: 0,
            shift: 0,
            number: b ? b._tree.number + 1 : 0,
          };
        }),
          h(g),
          i(g, -g._tree.prelim);
        var k = eB(g, eD),
          l = eB(g, eC),
          m = eB(g, eE),
          n = k.x - b(k, l) / 2,
          o = l.x + b(l, k) / 2,
          p = m.depth || 1;
        return (
          eF(g, function (a) {
            (a.x = ((a.x - n) / (o - n)) * c[0]),
              (a.y = (a.depth / p) * c[1]),
              delete a._tree;
          }),
          f
        );
      }
      var a = d3.layout.hierarchy().sort(null).value(null),
        b = ey,
        c = [1, 1];
      return (
        (d.separation = function (a) {
          return arguments.length ? ((b = a), d) : b;
        }),
        (d.size = function (a) {
          return arguments.length ? ((c = a), d) : c;
        }),
        ee(d, a)
      );
    }),
    (d3.layout.treemap = function () {
      function i(a, b) {
        var c = -1,
          d = a.length,
          e,
          f;
        while (++c < d)
          (f = (e = a[c]).value * (b < 0 ? 0 : b)),
            (e.area = isNaN(f) || f <= 0 ? 0 : f);
      }
      function j(a) {
        var b = a.children;
        if (b && b.length) {
          var c = e(a),
            d = [],
            f = b.slice(),
            g,
            h = Infinity,
            k,
            n = Math.min(c.dx, c.dy),
            o;
          i(f, (c.dx * c.dy) / a.value), (d.area = 0);
          while ((o = f.length) > 0)
            d.push((g = f[o - 1])),
              (d.area += g.area),
              (k = l(d, n)) <= h
                ? (f.pop(), (h = k))
                : ((d.area -= d.pop().area),
                  m(d, n, c, !1),
                  (n = Math.min(c.dx, c.dy)),
                  (d.length = d.area = 0),
                  (h = Infinity));
          d.length && (m(d, n, c, !0), (d.length = d.area = 0)), b.forEach(j);
        }
      }
      function k(a) {
        var b = a.children;
        if (b && b.length) {
          var c = e(a),
            d = b.slice(),
            f,
            g = [];
          i(d, (c.dx * c.dy) / a.value), (g.area = 0);
          while ((f = d.pop()))
            g.push(f),
              (g.area += f.area),
              f.z != null &&
                (m(g, f.z ? c.dx : c.dy, c, !d.length),
                (g.length = g.area = 0));
          b.forEach(k);
        }
      }
      function l(a, b) {
        var c = a.area,
          d,
          e = 0,
          f = Infinity,
          g = -1,
          i = a.length;
        while (++g < i) {
          if (!(d = a[g].area)) continue;
          d < f && (f = d), d > e && (e = d);
        }
        return (
          (c *= c),
          (b *= b),
          c ? Math.max((b * e * h) / c, c / (b * f * h)) : Infinity
        );
      }
      function m(a, c, d, e) {
        var f = -1,
          g = a.length,
          h = d.x,
          i = d.y,
          j = c ? b(a.area / c) : 0,
          k;
        if (c == d.dx) {
          if (e || j > d.dy) j = d.dy;
          while (++f < g)
            (k = a[f]),
              (k.x = h),
              (k.y = i),
              (k.dy = j),
              (h += k.dx = Math.min(d.x + d.dx - h, j ? b(k.area / j) : 0));
          (k.z = !0), (k.dx += d.x + d.dx - h), (d.y += j), (d.dy -= j);
        } else {
          if (e || j > d.dx) j = d.dx;
          while (++f < g)
            (k = a[f]),
              (k.x = h),
              (k.y = i),
              (k.dx = j),
              (i += k.dy = Math.min(d.y + d.dy - i, j ? b(k.area / j) : 0));
          (k.z = !1), (k.dy += d.y + d.dy - i), (d.x += j), (d.dx -= j);
        }
      }
      function n(b) {
        var d = g || a(b),
          e = d[0];
        return (
          (e.x = 0),
          (e.y = 0),
          (e.dx = c[0]),
          (e.dy = c[1]),
          g && a.revalue(e),
          i([e], (e.dx * e.dy) / e.value),
          (g ? k : j)(e),
          f && (g = d),
          d
        );
      }
      var a = d3.layout.hierarchy(),
        b = Math.round,
        c = [1, 1],
        d = null,
        e = eJ,
        f = !1,
        g,
        h = 0.5 * (1 + Math.sqrt(5));
      return (
        (n.size = function (a) {
          return arguments.length ? ((c = a), n) : c;
        }),
        (n.padding = function (a) {
          function b(b) {
            var c = a.call(n, b, b.depth);
            return c == null
              ? eJ(b)
              : eK(b, typeof c == "number" ? [c, c, c, c] : c);
          }
          function c(b) {
            return eK(b, a);
          }
          if (!arguments.length) return d;
          var f;
          return (
            (e =
              (d = a) == null
                ? eJ
                : (f = typeof a) === "function"
                ? b
                : f === "number"
                ? ((a = [a, a, a, a]), c)
                : c),
            n
          );
        }),
        (n.round = function (a) {
          return arguments.length
            ? ((b = a ? Math.round : Number), n)
            : b != Number;
        }),
        (n.sticky = function (a) {
          return arguments.length ? ((f = a), (g = null), n) : f;
        }),
        (n.ratio = function (a) {
          return arguments.length ? ((h = a), n) : h;
        }),
        ee(n, a)
      );
    }),
    (d3.csv = function (a, b) {
      d3.text(a, "text/csv", function (a) {
        b(a && d3.csv.parse(a));
      });
    }),
    (d3.csv.parse = function (a) {
      var b;
      return d3.csv.parseRows(a, function (a, c) {
        if (c) {
          var d = {},
            e = -1,
            f = b.length;
          while (++e < f) d[b[e]] = a[e];
          return d;
        }
        return (b = a), null;
      });
    }),
    (d3.csv.parseRows = function (a, b) {
      function j() {
        if (f.lastIndex >= a.length) return d;
        if (i) return (i = !1), c;
        var b = f.lastIndex;
        if (a.charCodeAt(b) === 34) {
          var e = b;
          while (e++ < a.length)
            if (a.charCodeAt(e) === 34) {
              if (a.charCodeAt(e + 1) !== 34) break;
              e++;
            }
          f.lastIndex = e + 2;
          var g = a.charCodeAt(e + 1);
          return (
            g === 13
              ? ((i = !0), a.charCodeAt(e + 2) === 10 && f.lastIndex++)
              : g === 10 && (i = !0),
            a.substring(b + 1, e).replace(/""/g, '"')
          );
        }
        var h = f.exec(a);
        return h
          ? ((i = h[0].charCodeAt(0) !== 44), a.substring(b, h.index))
          : ((f.lastIndex = a.length), a.substring(b));
      }
      var c = {},
        d = {},
        e = [],
        f = /\r\n|[,\r\n]/g,
        g = 0,
        h,
        i;
      f.lastIndex = 0;
      while ((h = j()) !== d) {
        var k = [];
        while (h !== c && h !== d) k.push(h), (h = j());
        if (b && !(k = b(k, g++))) continue;
        e.push(k);
      }
      return e;
    }),
    (d3.csv.format = function (a) {
      return a.map(eL).join("\n");
    }),
    (d3.geo = {});
  var eN = Math.PI / 180;
  (d3.geo.azimuthal = function () {
    function i(b) {
      var f = b[0] * eN - e,
        i = b[1] * eN,
        j = Math.cos(f),
        k = Math.sin(f),
        l = Math.cos(i),
        m = Math.sin(i),
        n = a !== "orthographic" ? h * m + g * l * j : null,
        o,
        p =
          a === "stereographic"
            ? 1 / (1 + n)
            : a === "gnomonic"
            ? 1 / n
            : a === "equidistant"
            ? ((o = Math.acos(n)), o ? o / Math.sin(o) : 0)
            : a === "equalarea"
            ? Math.sqrt(2 / (1 + n))
            : 1,
        q = p * l * k,
        r = p * (h * l * j - g * m);
      return [c * q + d[0], c * r + d[1]];
    }
    var a = "orthographic",
      b,
      c = 200,
      d = [480, 250],
      e,
      f,
      g,
      h;
    return (
      (i.invert = function (b) {
        var f = (b[0] - d[0]) / c,
          i = (b[1] - d[1]) / c,
          j = Math.sqrt(f * f + i * i),
          k =
            a === "stereographic"
              ? 2 * Math.atan(j)
              : a === "gnomonic"
              ? Math.atan(j)
              : a === "equidistant"
              ? j
              : a === "equalarea"
              ? 2 * Math.asin(0.5 * j)
              : Math.asin(j),
          l = Math.sin(k),
          m = Math.cos(k);
        return [
          (e + Math.atan2(f * l, j * g * m + i * h * l)) / eN,
          Math.asin(m * h - (j ? (i * l * g) / j : 0)) / eN,
        ];
      }),
      (i.mode = function (b) {
        return arguments.length ? ((a = b + ""), i) : a;
      }),
      (i.origin = function (a) {
        return arguments.length
          ? ((b = a),
            (e = b[0] * eN),
            (f = b[1] * eN),
            (g = Math.cos(f)),
            (h = Math.sin(f)),
            i)
          : b;
      }),
      (i.scale = function (a) {
        return arguments.length ? ((c = +a), i) : c;
      }),
      (i.translate = function (a) {
        return arguments.length ? ((d = [+a[0], +a[1]]), i) : d;
      }),
      i.origin([0, 0])
    );
  }),
    (d3.geo.albers = function () {
      function i(a) {
        var b = f * (eN * a[0] - e),
          i = Math.sqrt(g - 2 * f * Math.sin(eN * a[1])) / f;
        return [c * i * Math.sin(b) + d[0], c * (i * Math.cos(b) - h) + d[1]];
      }
      function j() {
        var c = eN * b[0],
          d = eN * b[1],
          j = eN * a[1],
          k = Math.sin(c),
          l = Math.cos(c);
        return (
          (e = eN * a[0]),
          (f = 0.5 * (k + Math.sin(d))),
          (g = l * l + 2 * f * k),
          (h = Math.sqrt(g - 2 * f * Math.sin(j)) / f),
          i
        );
      }
      var a = [-98, 38],
        b = [29.5, 45.5],
        c = 1e3,
        d = [480, 250],
        e,
        f,
        g,
        h;
      return (
        (i.invert = function (a) {
          var b = (a[0] - d[0]) / c,
            i = (a[1] - d[1]) / c,
            j = h + i,
            k = Math.atan2(b, j),
            l = Math.sqrt(b * b + j * j);
          return [
            (e + k / f) / eN,
            Math.asin((g - l * l * f * f) / (2 * f)) / eN,
          ];
        }),
        (i.origin = function (b) {
          return arguments.length ? ((a = [+b[0], +b[1]]), j()) : a;
        }),
        (i.parallels = function (a) {
          return arguments.length ? ((b = [+a[0], +a[1]]), j()) : b;
        }),
        (i.scale = function (a) {
          return arguments.length ? ((c = +a), i) : c;
        }),
        (i.translate = function (a) {
          return arguments.length ? ((d = [+a[0], +a[1]]), i) : d;
        }),
        j()
      );
    }),
    (d3.geo.albersUsa = function () {
      function e(e) {
        var f = e[0],
          g = e[1];
        return (g > 50 ? b : f < -140 ? c : g < 21 ? d : a)(e);
      }
      var a = d3.geo.albers(),
        b = d3.geo.albers().origin([-160, 60]).parallels([55, 65]),
        c = d3.geo.albers().origin([-160, 20]).parallels([8, 18]),
        d = d3.geo.albers().origin([-60, 10]).parallels([8, 18]);
      return (
        (e.scale = function (f) {
          return arguments.length
            ? (a.scale(f),
              b.scale(f * 0.6),
              c.scale(f),
              d.scale(f * 1.5),
              e.translate(a.translate()))
            : a.scale();
        }),
        (e.translate = function (f) {
          if (!arguments.length) return a.translate();
          var g = a.scale() / 1e3,
            h = f[0],
            i = f[1];
          return (
            a.translate(f),
            b.translate([h - 400 * g, i + 170 * g]),
            c.translate([h - 190 * g, i + 200 * g]),
            d.translate([h + 580 * g, i + 430 * g]),
            e
          );
        }),
        e.scale(a.scale())
      );
    }),
    (d3.geo.bonne = function () {
      function g(g) {
        var h = g[0] * eN - c,
          i = g[1] * eN - d;
        if (e) {
          var j = f + e - i,
            k = (h * Math.cos(i)) / j;
          (h = j * Math.sin(k)), (i = j * Math.cos(k) - f);
        } else (h *= Math.cos(i)), (i *= -1);
        return [a * h + b[0], a * i + b[1]];
      }
      var a = 200,
        b = [480, 250],
        c,
        d,
        e,
        f;
      return (
        (g.invert = function (d) {
          var g = (d[0] - b[0]) / a,
            h = (d[1] - b[1]) / a;
          if (e) {
            var i = f + h,
              j = Math.sqrt(g * g + i * i);
            (h = f + e - j), (g = c + (j * Math.atan2(g, i)) / Math.cos(h));
          } else (h *= -1), (g /= Math.cos(h));
          return [g / eN, h / eN];
        }),
        (g.parallel = function (a) {
          return arguments.length
            ? ((f = 1 / Math.tan((e = a * eN))), g)
            : e / eN;
        }),
        (g.origin = function (a) {
          return arguments.length
            ? ((c = a[0] * eN), (d = a[1] * eN), g)
            : [c / eN, d / eN];
        }),
        (g.scale = function (b) {
          return arguments.length ? ((a = +b), g) : a;
        }),
        (g.translate = function (a) {
          return arguments.length ? ((b = [+a[0], +a[1]]), g) : b;
        }),
        g.origin([0, 0]).parallel(45)
      );
    }),
    (d3.geo.equirectangular = function () {
      function c(c) {
        var d = c[0] / 360,
          e = -c[1] / 360;
        return [a * d + b[0], a * e + b[1]];
      }
      var a = 500,
        b = [480, 250];
      return (
        (c.invert = function (c) {
          var d = (c[0] - b[0]) / a,
            e = (c[1] - b[1]) / a;
          return [360 * d, -360 * e];
        }),
        (c.scale = function (b) {
          return arguments.length ? ((a = +b), c) : a;
        }),
        (c.translate = function (a) {
          return arguments.length ? ((b = [+a[0], +a[1]]), c) : b;
        }),
        c
      );
    }),
    (d3.geo.mercator = function () {
      function c(c) {
        var d = c[0] / 360,
          e = -(Math.log(Math.tan(Math.PI / 4 + (c[1] * eN) / 2)) / eN) / 360;
        return [a * d + b[0], a * Math.max(-0.5, Math.min(0.5, e)) + b[1]];
      }
      var a = 500,
        b = [480, 250];
      return (
        (c.invert = function (c) {
          var d = (c[0] - b[0]) / a,
            e = (c[1] - b[1]) / a;
          return [360 * d, (2 * Math.atan(Math.exp(-360 * e * eN))) / eN - 90];
        }),
        (c.scale = function (b) {
          return arguments.length ? ((a = +b), c) : a;
        }),
        (c.translate = function (a) {
          return arguments.length ? ((b = [+a[0], +a[1]]), c) : b;
        }),
        c
      );
    }),
    (d3.geo.path = function () {
      function e(c, e) {
        typeof a == "function" && (b = eP(a.apply(this, arguments))), g(c);
        var f = d.length ? d.join("") : null;
        return (d = []), f;
      }
      function f(a) {
        return c(a).join(",");
      }
      function i(a) {
        var b = l(a[0]),
          c = 0,
          d = a.length;
        while (++c < d) b -= l(a[c]);
        return b;
      }
      function j(a) {
        var b = d3.geom.polygon(a[0].map(c)),
          d = b.area(),
          e = b.centroid(d < 0 ? ((d *= -1), 1) : -1),
          f = e[0],
          g = e[1],
          h = d,
          i = 0,
          j = a.length;
        while (++i < j)
          (b = d3.geom.polygon(a[i].map(c))),
            (d = b.area()),
            (e = b.centroid(d < 0 ? ((d *= -1), 1) : -1)),
            (f -= e[0]),
            (g -= e[1]),
            (h -= d);
        return [f, g, 6 * h];
      }
      function l(a) {
        return Math.abs(d3.geom.polygon(a.map(c)).area());
      }
      var a = 4.5,
        b = eP(a),
        c = d3.geo.albersUsa(),
        d = [],
        g = eO({
          FeatureCollection: function (a) {
            var b = a.features,
              c = -1,
              e = b.length;
            while (++c < e) d.push(g(b[c].geometry));
          },
          Feature: function (a) {
            g(a.geometry);
          },
          Point: function (a) {
            d.push("M", f(a.coordinates), b);
          },
          MultiPoint: function (a) {
            var c = a.coordinates,
              e = -1,
              g = c.length;
            while (++e < g) d.push("M", f(c[e]), b);
          },
          LineString: function (a) {
            var b = a.coordinates,
              c = -1,
              e = b.length;
            d.push("M");
            while (++c < e) d.push(f(b[c]), "L");
            d.pop();
          },
          MultiLineString: function (a) {
            var b = a.coordinates,
              c = -1,
              e = b.length,
              g,
              h,
              i;
            while (++c < e) {
              (g = b[c]), (h = -1), (i = g.length), d.push("M");
              while (++h < i) d.push(f(g[h]), "L");
              d.pop();
            }
          },
          Polygon: function (a) {
            var b = a.coordinates,
              c = -1,
              e = b.length,
              g,
              h,
              i;
            while (++c < e) {
              (g = b[c]), (h = -1);
              if ((i = g.length - 1) > 0) {
                d.push("M");
                while (++h < i) d.push(f(g[h]), "L");
                d[d.length - 1] = "Z";
              }
            }
          },
          MultiPolygon: function (a) {
            var b = a.coordinates,
              c = -1,
              e = b.length,
              g,
              h,
              i,
              j,
              k,
              l;
            while (++c < e) {
              (g = b[c]), (h = -1), (i = g.length);
              while (++h < i) {
                (j = g[h]), (k = -1);
                if ((l = j.length - 1) > 0) {
                  d.push("M");
                  while (++k < l) d.push(f(j[k]), "L");
                  d[d.length - 1] = "Z";
                }
              }
            }
          },
          GeometryCollection: function (a) {
            var b = a.geometries,
              c = -1,
              e = b.length;
            while (++c < e) d.push(g(b[c]));
          },
        }),
        h = (e.area = eO(
          {
            FeatureCollection: function (a) {
              var b = 0,
                c = a.features,
                d = -1,
                e = c.length;
              while (++d < e) b += h(c[d]);
              return b;
            },
            Feature: function (a) {
              return h(a.geometry);
            },
            Polygon: function (a) {
              return i(a.coordinates);
            },
            MultiPolygon: function (a) {
              var b = 0,
                c = a.coordinates,
                d = -1,
                e = c.length;
              while (++d < e) b += i(c[d]);
              return b;
            },
            GeometryCollection: function (a) {
              var b = 0,
                c = a.geometries,
                d = -1,
                e = c.length;
              while (++d < e) b += h(c[d]);
              return b;
            },
          },
          0
        )),
        k = (e.centroid = eO({
          Feature: function (a) {
            return k(a.geometry);
          },
          Polygon: function (a) {
            var b = j(a.coordinates);
            return [b[0] / b[2], b[1] / b[2]];
          },
          MultiPolygon: function (a) {
            var b = 0,
              c = a.coordinates,
              d,
              e = 0,
              f = 0,
              g = 0,
              h = -1,
              i = c.length;
            while (++h < i)
              (d = j(c[h])), (e += d[0]), (f += d[1]), (g += d[2]);
            return [e / g, f / g];
          },
        }));
      return (
        (e.projection = function (a) {
          return (c = a), e;
        }),
        (e.pointRadius = function (c) {
          return typeof c == "function" ? (a = c) : ((a = +c), (b = eP(a))), e;
        }),
        e
      );
    }),
    (d3.geo.bounds = function (a) {
      var b = Infinity,
        c = Infinity,
        d = -Infinity,
        e = -Infinity;
      return (
        eQ(a, function (a, f) {
          a < b && (b = a),
            a > d && (d = a),
            f < c && (c = f),
            f > e && (e = f);
        }),
        [
          [b, c],
          [d, e],
        ]
      );
    });
  var eR = {
    Feature: eS,
    FeatureCollection: eT,
    GeometryCollection: eU,
    LineString: eV,
    MultiLineString: eW,
    MultiPoint: eV,
    MultiPolygon: eX,
    Point: eY,
    Polygon: eZ,
  };
  (d3.geo.circle = function () {
    function e() {}
    function f(a) {
      return d.distance(a) < c;
    }
    function h(a) {
      var b = -1,
        e = a.length,
        f = [],
        g,
        h,
        j,
        k,
        l;
      while (++b < e)
        (l = d.distance((j = a[b]))),
          l < c
            ? (h && f.push(fb(h, j)((k - c) / (k - l))),
              f.push(j),
              (g = h = null))
            : ((h = j),
              !g &&
                f.length &&
                (f.push(fb(f[f.length - 1], h)((c - k) / (l - k))), (g = h))),
          (k = l);
      return (
        (g = a[0]),
        (h = f[0]),
        h &&
          j[0] === g[0] &&
          j[1] === g[1] &&
          (j[0] !== h[0] || j[1] !== h[1]) &&
          f.push(h),
        i(f)
      );
    }
    function i(a) {
      var b = 0,
        c = a.length,
        e,
        f,
        g = c ? [a[0]] : a,
        h,
        i = d.source();
      while (++b < c) {
        h = d.source(a[b - 1])(a[b]).coordinates;
        for (e = 0, f = h.length; ++e < f; ) g.push(h[e]);
      }
      return d.source(i), g;
    }
    var a = [0, 0],
      b = 89.99,
      c = b * eN,
      d = d3.geo.greatArc().source(a).target(m);
    e.clip = function (b) {
      return (
        typeof a == "function" && d.source(a.apply(this, arguments)),
        g(b) || null
      );
    };
    var g = eO({
      FeatureCollection: function (a) {
        var b = a.features.map(g).filter(m);
        return b && ((a = Object.create(a)), (a.features = b), a);
      },
      Feature: function (a) {
        var b = g(a.geometry);
        return b && ((a = Object.create(a)), (a.geometry = b), a);
      },
      Point: function (a) {
        return f(a.coordinates) && a;
      },
      MultiPoint: function (a) {
        var b = a.coordinates.filter(f);
        return b.length && { type: a.type, coordinates: b };
      },
      LineString: function (a) {
        var b = h(a.coordinates);
        return b.length && ((a = Object.create(a)), (a.coordinates = b), a);
      },
      MultiLineString: function (a) {
        var b = a.coordinates.map(h).filter(function (a) {
          return a.length;
        });
        return b.length && ((a = Object.create(a)), (a.coordinates = b), a);
      },
      Polygon: function (a) {
        var b = a.coordinates.map(h);
        return b[0].length && ((a = Object.create(a)), (a.coordinates = b), a);
      },
      MultiPolygon: function (a) {
        var b = a.coordinates
          .map(function (a) {
            return a.map(h);
          })
          .filter(function (a) {
            return a[0].length;
          });
        return b.length && ((a = Object.create(a)), (a.coordinates = b), a);
      },
      GeometryCollection: function (a) {
        var b = a.geometries.map(g).filter(m);
        return b.length && ((a = Object.create(a)), (a.geometries = b), a);
      },
    });
    return (
      (e.origin = function (b) {
        return arguments.length
          ? ((a = b), typeof a != "function" && d.source(a), e)
          : a;
      }),
      (e.angle = function (a) {
        return arguments.length ? ((c = (b = +a) * eN), e) : b;
      }),
      d3.rebind(e, d, "precision")
    );
  }),
    (d3.geo.greatArc = function () {
      function g() {
        var a = g.distance.apply(this, arguments),
          c = 0,
          h = e / a,
          i = [b];
        while ((c += h) < 1) i.push(f(c));
        return i.push(d), { type: "LineString", coordinates: i };
      }
      var a = e$,
        b,
        c = e_,
        d,
        e = 6 * eN,
        f = fa();
      return (
        (g.distance = function () {
          return (
            typeof a == "function" && f.source((b = a.apply(this, arguments))),
            typeof c == "function" && f.target((d = c.apply(this, arguments))),
            f.distance()
          );
        }),
        (g.source = function (c) {
          return arguments.length
            ? ((a = c), typeof a != "function" && f.source((b = a)), g)
            : a;
        }),
        (g.target = function (a) {
          return arguments.length
            ? ((c = a), typeof c != "function" && f.target((d = c)), g)
            : c;
        }),
        (g.precision = function (a) {
          return arguments.length ? ((e = a * eN), g) : e / eN;
        }),
        g
      );
    }),
    (d3.geo.greatCircle = d3.geo.circle),
    (d3.geom = {}),
    (d3.geom.contour = function (a, b) {
      var c = b || fe(a),
        d = [],
        e = c[0],
        f = c[1],
        g = 0,
        h = 0,
        i = NaN,
        j = NaN,
        k = 0;
      do
        (k = 0),
          a(e - 1, f - 1) && (k += 1),
          a(e, f - 1) && (k += 2),
          a(e - 1, f) && (k += 4),
          a(e, f) && (k += 8),
          k === 6
            ? ((g = j === -1 ? -1 : 1), (h = 0))
            : k === 9
            ? ((g = 0), (h = i === 1 ? -1 : 1))
            : ((g = fc[k]), (h = fd[k])),
          g != i && h != j && (d.push([e, f]), (i = g), (j = h)),
          (e += g),
          (f += h);
      while (c[0] != e || c[1] != f);
      return d;
    });
  var fc = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN],
    fd = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN];
  (d3.geom.hull = function (a) {
    if (a.length < 3) return [];
    var b = a.length,
      c = b - 1,
      d = [],
      e = [],
      f,
      g,
      h = 0,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p;
    for (f = 1; f < b; ++f)
      a[f][1] < a[h][1]
        ? (h = f)
        : a[f][1] == a[h][1] && (h = a[f][0] < a[h][0] ? f : h);
    for (f = 0; f < b; ++f) {
      if (f === h) continue;
      (j = a[f][1] - a[h][1]),
        (i = a[f][0] - a[h][0]),
        d.push({ angle: Math.atan2(j, i), index: f });
    }
    d.sort(function (a, b) {
      return a.angle - b.angle;
    }),
      (o = d[0].angle),
      (n = d[0].index),
      (m = 0);
    for (f = 1; f < c; ++f)
      (g = d[f].index),
        o == d[f].angle
          ? ((i = a[n][0] - a[h][0]),
            (j = a[n][1] - a[h][1]),
            (k = a[g][0] - a[h][0]),
            (l = a[g][1] - a[h][1]),
            i * i + j * j >= k * k + l * l
              ? (d[f].index = -1)
              : ((d[m].index = -1), (o = d[f].angle), (m = f), (n = g)))
          : ((o = d[f].angle), (m = f), (n = g));
    e.push(h);
    for (f = 0, g = 0; f < 2; ++g)
      d[g].index !== -1 && (e.push(d[g].index), f++);
    p = e.length;
    for (; g < c; ++g) {
      if (d[g].index === -1) continue;
      while (!ff(e[p - 2], e[p - 1], d[g].index, a)) --p;
      e[p++] = d[g].index;
    }
    var q = [];
    for (f = 0; f < p; ++f) q.push(a[e[f]]);
    return q;
  }),
    (d3.geom.polygon = function (a) {
      return (
        (a.area = function () {
          var b = 0,
            c = a.length,
            d = a[c - 1][0] * a[0][1],
            e = a[c - 1][1] * a[0][0];
          while (++b < c)
            (d += a[b - 1][0] * a[b][1]), (e += a[b - 1][1] * a[b][0]);
          return (e - d) * 0.5;
        }),
        (a.centroid = function (b) {
          var c = -1,
            d = a.length,
            e = 0,
            f = 0,
            g,
            h = a[d - 1],
            i;
          arguments.length || (b = -1 / (6 * a.area()));
          while (++c < d)
            (g = h),
              (h = a[c]),
              (i = g[0] * h[1] - h[0] * g[1]),
              (e += (g[0] + h[0]) * i),
              (f += (g[1] + h[1]) * i);
          return [e * b, f * b];
        }),
        (a.clip = function (b) {
          var c,
            d = -1,
            e = a.length,
            f,
            g,
            h = a[e - 1],
            i,
            j,
            k;
          while (++d < e) {
            (c = b.slice()),
              (b.length = 0),
              (i = a[d]),
              (j = c[(g = c.length) - 1]),
              (f = -1);
            while (++f < g)
              (k = c[f]),
                fg(k, h, i)
                  ? (fg(j, h, i) || b.push(fh(j, k, h, i)), b.push(k))
                  : fg(j, h, i) && b.push(fh(j, k, h, i)),
                (j = k);
            h = i;
          }
          return b;
        }),
        a
      );
    }),
    (d3.geom.voronoi = function (a) {
      var b = a.map(function () {
        return [];
      });
      return (
        fj(a, function (a) {
          var c, d, e, f, g, h;
          a.a === 1 && a.b >= 0
            ? ((c = a.ep.r), (d = a.ep.l))
            : ((c = a.ep.l), (d = a.ep.r)),
            a.a === 1
              ? ((g = c ? c.y : -1e6),
                (e = a.c - a.b * g),
                (h = d ? d.y : 1e6),
                (f = a.c - a.b * h))
              : ((e = c ? c.x : -1e6),
                (g = a.c - a.a * e),
                (f = d ? d.x : 1e6),
                (h = a.c - a.a * f));
          var i = [e, g],
            j = [f, h];
          b[a.region.l.index].push(i, j), b[a.region.r.index].push(i, j);
        }),
        b.map(function (b, c) {
          var d = a[c][0],
            e = a[c][1];
          return (
            b.forEach(function (a) {
              a.angle = Math.atan2(a[0] - d, a[1] - e);
            }),
            b
              .sort(function (a, b) {
                return a.angle - b.angle;
              })
              .filter(function (a, c) {
                return !c || a.angle - b[c - 1].angle > 1e-10;
              })
          );
        })
      );
    });
  var fi = { l: "r", r: "l" };
  (d3.geom.delaunay = function (a) {
    var b = a.map(function () {
        return [];
      }),
      c = [];
    return (
      fj(a, function (c) {
        b[c.region.l.index].push(a[c.region.r.index]);
      }),
      b.forEach(function (b, d) {
        var e = a[d],
          f = e[0],
          g = e[1];
        b.forEach(function (a) {
          a.angle = Math.atan2(a[0] - f, a[1] - g);
        }),
          b.sort(function (a, b) {
            return a.angle - b.angle;
          });
        for (var h = 0, i = b.length - 1; h < i; h++)
          c.push([e, b[h], b[h + 1]]);
      }),
      c
    );
  }),
    (d3.geom.quadtree = function (a, b, c, d, e) {
      function k(a, b, c, d, e, f) {
        if (isNaN(b.x) || isNaN(b.y)) return;
        if (a.leaf) {
          var g = a.point;
          g
            ? Math.abs(g.x - b.x) + Math.abs(g.y - b.y) < 0.01
              ? l(a, b, c, d, e, f)
              : ((a.point = null), l(a, g, c, d, e, f), l(a, b, c, d, e, f))
            : (a.point = b);
        } else l(a, b, c, d, e, f);
      }
      function l(a, b, c, d, e, f) {
        var g = (c + e) * 0.5,
          h = (d + f) * 0.5,
          i = b.x >= g,
          j = b.y >= h,
          l = (j << 1) + i;
        (a.leaf = !1),
          (a = a.nodes[l] || (a.nodes[l] = fk())),
          i ? (c = g) : (e = g),
          j ? (d = h) : (f = h),
          k(a, b, c, d, e, f);
      }
      var f,
        g = -1,
        h = a.length;
      h && isNaN(a[0].x) && (a = a.map(fm));
      if (arguments.length < 5)
        if (arguments.length === 3) (e = d = c), (c = b);
        else {
          (b = c = Infinity), (d = e = -Infinity);
          while (++g < h)
            (f = a[g]),
              f.x < b && (b = f.x),
              f.y < c && (c = f.y),
              f.x > d && (d = f.x),
              f.y > e && (e = f.y);
          var i = d - b,
            j = e - c;
          i > j ? (e = c + i) : (d = b + j);
        }
      var m = fk();
      return (
        (m.add = function (a) {
          k(m, a, b, c, d, e);
        }),
        (m.visit = function (a) {
          fl(a, m, b, c, d, e);
        }),
        a.forEach(m.add),
        m
      );
    }),
    (d3.time = {});
  var fn = Date;
  fo.prototype = {
    getDate: function () {
      return this._.getUTCDate();
    },
    getDay: function () {
      return this._.getUTCDay();
    },
    getFullYear: function () {
      return this._.getUTCFullYear();
    },
    getHours: function () {
      return this._.getUTCHours();
    },
    getMilliseconds: function () {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function () {
      return this._.getUTCMinutes();
    },
    getMonth: function () {
      return this._.getUTCMonth();
    },
    getSeconds: function () {
      return this._.getUTCSeconds();
    },
    getTime: function () {
      return this._.getTime();
    },
    getTimezoneOffset: function () {
      return 0;
    },
    valueOf: function () {
      return this._.valueOf();
    },
    setDate: function () {
      fp.setUTCDate.apply(this._, arguments);
    },
    setDay: function () {
      fp.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function () {
      fp.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function () {
      fp.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function () {
      fp.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function () {
      fp.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function () {
      fp.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function () {
      fp.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function () {
      fp.setTime.apply(this._, arguments);
    },
  };
  var fp = Date.prototype;
  d3.time.format = function (a) {
    function c(c) {
      var d = [],
        e = -1,
        f = 0,
        g,
        h;
      while (++e < b)
        a.charCodeAt(e) == 37 &&
          (d.push(a.substring(f, e), (h = fv[(g = a.charAt(++e))]) ? h(c) : g),
          (f = e + 1));
      return d.push(a.substring(f, e)), d.join("");
    }
    var b = a.length;
    return (
      (c.parse = function (b) {
        var c = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 },
          d = fq(c, a, b, 0);
        if (d != b.length) return null;
        "p" in c && (c.H = (c.H % 12) + c.p * 12);
        var e = new fn();
        return e.setFullYear(c.y, c.m, c.d), e.setHours(c.H, c.M, c.S, c.L), e;
      }),
      (c.toString = function () {
        return a;
      }),
      c
    );
  };
  var fr = d3.format("02d"),
    fs = d3.format("03d"),
    ft = d3.format("04d"),
    fu = d3.format("2d"),
    fv = {
      a: function (a) {
        return fB[a.getDay()].substring(0, 3);
      },
      A: function (a) {
        return fB[a.getDay()];
      },
      b: function (a) {
        return fH[a.getMonth()].substring(0, 3);
      },
      B: function (a) {
        return fH[a.getMonth()];
      },
      c: d3.time.format("%a %b %e %H:%M:%S %Y"),
      d: function (a) {
        return fr(a.getDate());
      },
      e: function (a) {
        return fu(a.getDate());
      },
      H: function (a) {
        return fr(a.getHours());
      },
      I: function (a) {
        return fr(a.getHours() % 12 || 12);
      },
      j: function (a) {
        return fs(1 + d3.time.dayOfYear(a));
      },
      L: function (a) {
        return fs(a.getMilliseconds());
      },
      m: function (a) {
        return fr(a.getMonth() + 1);
      },
      M: function (a) {
        return fr(a.getMinutes());
      },
      p: function (a) {
        return a.getHours() >= 12 ? "PM" : "AM";
      },
      S: function (a) {
        return fr(a.getSeconds());
      },
      U: function (a) {
        return fr(d3.time.sundayOfYear(a));
      },
      w: function (a) {
        return a.getDay();
      },
      W: function (a) {
        return fr(d3.time.mondayOfYear(a));
      },
      x: d3.time.format("%m/%d/%y"),
      X: d3.time.format("%H:%M:%S"),
      y: function (a) {
        return fr(a.getFullYear() % 100);
      },
      Y: function (a) {
        return ft(a.getFullYear() % 1e4);
      },
      Z: fX,
      "%": function (a) {
        return "%";
      },
    },
    fw = {
      a: fx,
      A: fy,
      b: fC,
      B: fE,
      c: fI,
      d: fP,
      e: fP,
      H: fQ,
      I: fQ,
      L: fT,
      m: fO,
      M: fR,
      p: fV,
      S: fS,
      x: fJ,
      X: fK,
      y: fM,
      Y: fL,
    },
    fz = /^(?:sun|mon|tue|wed|thu|fri|sat)/i,
    fA = /^(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/i,
    fB = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    fD = d3.map({
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    }),
    fF =
      /^(?:January|February|March|April|May|June|July|August|September|October|November|December)/gi,
    fG = d3.map({
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    }),
    fH = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    fU = /\s*\d+/,
    fW = d3.map({ am: 0, pm: 1 });
  d3.time.format.utc = function (a) {
    function c(a) {
      try {
        fn = fo;
        var c = new fn();
        return (c._ = a), b(c);
      } finally {
        fn = Date;
      }
    }
    var b = d3.time.format(a);
    return (
      (c.parse = function (a) {
        try {
          fn = fo;
          var c = b.parse(a);
          return c && c._;
        } finally {
          fn = Date;
        }
      }),
      (c.toString = b.toString),
      c
    );
  };
  var fY = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
  (d3.time.format.iso = Date.prototype.toISOString ? fZ : fY),
    (fZ.parse = function (a) {
      var b = new Date(a);
      return isNaN(b) ? null : b;
    }),
    (fZ.toString = fY.toString),
    (d3.time.second = f$(
      function (a) {
        return new fn(Math.floor(a / 1e3) * 1e3);
      },
      function (a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 1e3);
      },
      function (a) {
        return a.getSeconds();
      }
    )),
    (d3.time.seconds = d3.time.second.range),
    (d3.time.seconds.utc = d3.time.second.utc.range),
    (d3.time.minute = f$(
      function (a) {
        return new fn(Math.floor(a / 6e4) * 6e4);
      },
      function (a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 6e4);
      },
      function (a) {
        return a.getMinutes();
      }
    )),
    (d3.time.minutes = d3.time.minute.range),
    (d3.time.minutes.utc = d3.time.minute.utc.range),
    (d3.time.hour = f$(
      function (a) {
        var b = a.getTimezoneOffset() / 60;
        return new fn((Math.floor(a / 36e5 - b) + b) * 36e5);
      },
      function (a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 36e5);
      },
      function (a) {
        return a.getHours();
      }
    )),
    (d3.time.hours = d3.time.hour.range),
    (d3.time.hours.utc = d3.time.hour.utc.range),
    (d3.time.day = f$(
      function (a) {
        return new fn(a.getFullYear(), a.getMonth(), a.getDate());
      },
      function (a, b) {
        a.setDate(a.getDate() + b);
      },
      function (a) {
        return a.getDate() - 1;
      }
    )),
    (d3.time.days = d3.time.day.range),
    (d3.time.days.utc = d3.time.day.utc.range),
    (d3.time.dayOfYear = function (a) {
      var b = d3.time.year(a);
      return Math.floor(
        (a - b) / 864e5 - (a.getTimezoneOffset() - b.getTimezoneOffset()) / 1440
      );
    }),
    fB.forEach(function (a, b) {
      (a = a.toLowerCase()), (b = 7 - b);
      var c = (d3.time[a] = f$(
        function (a) {
          return (
            (a = d3.time.day(a)).setDate(a.getDate() - ((a.getDay() + b) % 7)),
            a
          );
        },
        function (a, b) {
          a.setDate(a.getDate() + Math.floor(b) * 7);
        },
        function (a) {
          var c = d3.time.year(a).getDay();
          return (
            Math.floor((d3.time.dayOfYear(a) + ((c + b) % 7)) / 7) - (c !== b)
          );
        }
      ));
      (d3.time[a + "s"] = c.range),
        (d3.time[a + "s"].utc = c.utc.range),
        (d3.time[a + "OfYear"] = function (a) {
          var c = d3.time.year(a).getDay();
          return Math.floor((d3.time.dayOfYear(a) + ((c + b) % 7)) / 7);
        });
    }),
    (d3.time.week = d3.time.sunday),
    (d3.time.weeks = d3.time.sunday.range),
    (d3.time.weeks.utc = d3.time.sunday.utc.range),
    (d3.time.weekOfYear = d3.time.sundayOfYear),
    (d3.time.month = f$(
      function (a) {
        return new fn(a.getFullYear(), a.getMonth(), 1);
      },
      function (a, b) {
        a.setMonth(a.getMonth() + b);
      },
      function (a) {
        return a.getMonth();
      }
    )),
    (d3.time.months = d3.time.month.range),
    (d3.time.months.utc = d3.time.month.utc.range),
    (d3.time.year = f$(
      function (a) {
        return new fn(a.getFullYear(), 0, 1);
      },
      function (a, b) {
        a.setFullYear(a.getFullYear() + b);
      },
      function (a) {
        return a.getFullYear();
      }
    )),
    (d3.time.years = d3.time.year.range),
    (d3.time.years.utc = d3.time.year.utc.range);
  var gg = [
      1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5,
      864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6,
    ],
    gh = [
      [d3.time.second, 1],
      [d3.time.second, 5],
      [d3.time.second, 15],
      [d3.time.second, 30],
      [d3.time.minute, 1],
      [d3.time.minute, 5],
      [d3.time.minute, 15],
      [d3.time.minute, 30],
      [d3.time.hour, 1],
      [d3.time.hour, 3],
      [d3.time.hour, 6],
      [d3.time.hour, 12],
      [d3.time.day, 1],
      [d3.time.day, 2],
      [d3.time.week, 1],
      [d3.time.month, 1],
      [d3.time.month, 3],
      [d3.time.year, 1],
    ],
    gi = [
      [
        d3.time.format("%Y"),
        function (a) {
          return !0;
        },
      ],
      [
        d3.time.format("%B"),
        function (a) {
          return a.getMonth();
        },
      ],
      [
        d3.time.format("%b %d"),
        function (a) {
          return a.getDate() != 1;
        },
      ],
      [
        d3.time.format("%a %d"),
        function (a) {
          return a.getDay() && a.getDate() != 1;
        },
      ],
      [
        d3.time.format("%I %p"),
        function (a) {
          return a.getHours();
        },
      ],
      [
        d3.time.format("%I:%M"),
        function (a) {
          return a.getMinutes();
        },
      ],
      [
        d3.time.format(":%S"),
        function (a) {
          return a.getSeconds();
        },
      ],
      [
        d3.time.format(".%L"),
        function (a) {
          return a.getMilliseconds();
        },
      ],
    ],
    gj = d3.scale.linear(),
    gk = gd(gi);
  (gh.year = function (a, b) {
    return gj.domain(a.map(gf)).ticks(b).map(ge);
  }),
    (d3.time.scale = function () {
      return ga(d3.scale.linear(), gh, gk);
    });
  var gl = gh.map(function (a) {
      return [a[0].utc, a[1]];
    }),
    gm = [
      [
        d3.time.format.utc("%Y"),
        function (a) {
          return !0;
        },
      ],
      [
        d3.time.format.utc("%B"),
        function (a) {
          return a.getUTCMonth();
        },
      ],
      [
        d3.time.format.utc("%b %d"),
        function (a) {
          return a.getUTCDate() != 1;
        },
      ],
      [
        d3.time.format.utc("%a %d"),
        function (a) {
          return a.getUTCDay() && a.getUTCDate() != 1;
        },
      ],
      [
        d3.time.format.utc("%I %p"),
        function (a) {
          return a.getUTCHours();
        },
      ],
      [
        d3.time.format.utc("%I:%M"),
        function (a) {
          return a.getUTCMinutes();
        },
      ],
      [
        d3.time.format.utc(":%S"),
        function (a) {
          return a.getUTCSeconds();
        },
      ],
      [
        d3.time.format.utc(".%L"),
        function (a) {
          return a.getUTCMilliseconds();
        },
      ],
    ],
    gn = gd(gm);
  (gl.year = function (a, b) {
    return gj.domain(a.map(gp)).ticks(b).map(go);
  }),
    (d3.time.scale.utc = function () {
      return ga(d3.scale.linear(), gl, gn);
    });
})();

jsPlumbUtil={isArray:function(b){return Object.prototype.toString.call(b)==="[object Array]"},isString:function(a){return typeof a==="string"},isObject:function(a){return Object.prototype.toString.call(a)==="[object Object]"},convertStyle:function(b,a){if("transparent"===b){return b}var g=b,f=function(h){return h.length==1?"0"+h:h},c=function(h){return f(Number(h).toString(16))},d=/(rgb[a]?\()(.*)(\))/;if(b.match(d)){var e=b.match(d)[2].split(",");g="#"+c(e[0])+c(e[1])+c(e[2]);if(!a&&e.length==4){g=g+c(e[3])}}return g},gradient:function(b,a){b=jsPlumbUtil.isArray(b)?b:[b.x,b.y];a=jsPlumbUtil.isArray(a)?a:[a.x,a.y];return(a[1]-b[1])/(a[0]-b[0])},normal:function(b,a){return -1/jsPlumbUtil.gradient(b,a)},lineLength:function(b,a){b=jsPlumbUtil.isArray(b)?b:[b.x,b.y];a=jsPlumbUtil.isArray(a)?a:[a.x,a.y];return Math.sqrt(Math.pow(a[1]-b[1],2)+Math.pow(a[0]-b[0],2))},segment:function(b,a){b=jsPlumbUtil.isArray(b)?b:[b.x,b.y];a=jsPlumbUtil.isArray(a)?a:[a.x,a.y];if(a[0]>b[0]){return(a[1]>b[1])?2:1}else{return(a[1]>b[1])?3:4}},intersects:function(f,e){var c=f.x,a=f.x+f.w,k=f.y,h=f.y+f.h,d=e.x,b=e.x+e.w,i=e.y,g=e.y+e.h;return((c<=d&&d<=a)&&(k<=i&&i<=h))||((c<=b&&b<=a)&&(k<=i&&i<=h))||((c<=d&&d<=a)&&(k<=g&&g<=h))||((c<=b&&d<=a)&&(k<=g&&g<=h))||((d<=c&&c<=b)&&(i<=k&&k<=g))||((d<=a&&a<=b)&&(i<=k&&k<=g))||((d<=c&&c<=b)&&(i<=h&&h<=g))||((d<=a&&c<=b)&&(i<=h&&h<=g))},segmentMultipliers:[null,[1,-1],[1,1],[-1,1],[-1,-1]],inverseSegmentMultipliers:[null,[-1,-1],[-1,1],[1,1],[1,-1]],pointOnLine:function(a,e,b){var d=jsPlumbUtil.gradient(a,e),i=jsPlumbUtil.segment(a,e),h=b>0?jsPlumbUtil.segmentMultipliers[i]:jsPlumbUtil.inverseSegmentMultipliers[i],c=Math.atan(d),f=Math.abs(b*Math.sin(c))*h[1],g=Math.abs(b*Math.cos(c))*h[0];return{x:a.x+g,y:a.y+f}},perpendicularLineTo:function(c,d,e){var b=jsPlumbUtil.gradient(c,d),f=Math.atan(-1/b),g=e/2*Math.sin(f),a=e/2*Math.cos(f);return[{x:d.x+a,y:d.y+g},{x:d.x-a,y:d.y-g}]},findWithFunction:function(b,d){if(b){for(var c=0;c<b.length;c++){if(d(b[c])){return c}}}return -1},indexOf:function(a,b){return jsPlumbUtil.findWithFunction(a,function(c){return c==b})},removeWithFunction:function(c,d){var b=jsPlumbUtil.findWithFunction(c,d);if(b>-1){c.splice(b,1)}return b!=-1},remove:function(b,c){var a=jsPlumbUtil.indexOf(b,c);if(a>-1){b.splice(a,1)}return a!=-1},addWithFunction:function(c,b,a){if(jsPlumbUtil.findWithFunction(c,a)==-1){c.push(b)}},addToList:function(d,b,c){var a=d[b];if(a==null){a=[],d[b]=a}a.push(c);return a},EventGenerator:function(){var c={},b=this;var a=["ready"];this.bind=function(d,e){jsPlumbUtil.addToList(c,d,e);return b};this.fire=function(g,h,d){if(c[g]){for(var f=0;f<c[g].length;f++){if(jsPlumbUtil.findWithFunction(a,function(i){return i===g})!=-1){c[g][f](h,d)}else{try{c[g][f](h,d)}catch(k){jsPlumbUtil.log("jsPlumb: fire failed for event "+g+" : "+k)}}}}return b};this.unbind=function(d){if(d){delete c[d]}else{delete c;c={}}return b};this.getListener=function(d){return c[d]}},logEnabled:true,log:function(){if(jsPlumbUtil.logEnabled&&typeof console!="undefined"){try{var b=arguments[arguments.length-1];console.log(b)}catch(a){}}},group:function(a){if(jsPlumbUtil.logEnabled&&typeof console!="undefined"){console.group(a)}},groupEnd:function(a){if(jsPlumbUtil.logEnabled&&typeof console!="undefined"){console.groupEnd(a)}},time:function(a){if(jsPlumbUtil.logEnabled&&typeof console!="undefined"){console.time(a)}},timeEnd:function(a){if(jsPlumbUtil.logEnabled&&typeof console!="undefined"){console.timeEnd(a)}}};(function(){var A=!!document.createElement("canvas").getContext,e=!!window.SVGAngle||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),b=function(){if(b.vml==undefined){var L=document.body.appendChild(document.createElement("div"));L.innerHTML='<v:shape id="vml_flag1" adj="1" />';var K=L.firstChild;K.style.behavior="url(#default#VML)";b.vml=K?typeof K.adj=="object":true;L.parentNode.removeChild(L)}return b.vml};var i=jsPlumbUtil.findWithFunction,J=jsPlumbUtil.indexOf,D=jsPlumbUtil.removeWithFunction,m=jsPlumbUtil.remove,u=jsPlumbUtil.addWithFunction,l=jsPlumbUtil.addToList,n=jsPlumbUtil.isArray,C=jsPlumbUtil.isString,w=jsPlumbUtil.isObject;if(!window.console){window.console={time:function(){},timeEnd:function(){},group:function(){},groupEnd:function(){},log:function(){}}}var x=null,d=function(K,L){return p.CurrentLibrary.getAttribute(F(K),L)},f=function(L,M,K){p.CurrentLibrary.setAttribute(F(L),M,K)},B=function(L,K){p.CurrentLibrary.addClass(F(L),K)},k=function(L,K){return p.CurrentLibrary.hasClass(F(L),K)},o=function(L,K){p.CurrentLibrary.removeClass(F(L),K)},F=function(K){return p.CurrentLibrary.getElementObject(K)},t=function(K){return p.CurrentLibrary.getOffset(F(K))},a=function(K){return p.CurrentLibrary.getSize(F(K))},q=jsPlumbUtil.log,I=jsPlumbUtil.group,h=jsPlumbUtil.groupEnd,H=jsPlumbUtil.time,v=jsPlumbUtil.timeEnd,r=function(){return""+(new Date()).getTime()},E=function(Z){var U=this,aa=arguments,R=false,O=Z.parameters||{},M=U.idPrefix,W=M+(new Date()).getTime(),V=null,ab=null;U._jsPlumb=Z._jsPlumb;U.getId=function(){return W};U.tooltip=Z.tooltip;U.hoverClass=Z.hoverClass||U._jsPlumb.Defaults.HoverClass||p.Defaults.HoverClass;jsPlumbUtil.EventGenerator.apply(this);this.clone=function(){var ac=new Object();U.constructor.apply(ac,aa);return ac};this.getParameter=function(ac){return O[ac]},this.getParameters=function(){return O},this.setParameter=function(ac,ad){O[ac]=ad},this.setParameters=function(ac){O=ac},this.overlayPlacements=[];var N=Z.beforeDetach;this.isDetachAllowed=function(ac){var ad=U._jsPlumb.checkCondition("beforeDetach",ac);if(N){try{ad=N(ac)}catch(ae){q("jsPlumb: beforeDetach callback failed",ae)}}return ad};var Q=Z.beforeDrop;this.isDropAllowed=function(ah,ae,af,ac,ad){var ag=U._jsPlumb.checkCondition("beforeDrop",{sourceId:ah,targetId:ae,scope:af,connection:ac,dropEndpoint:ad});if(Q){try{ag=Q({sourceId:ah,targetId:ae,scope:af,connection:ac,dropEndpoint:ad})}catch(ai){q("jsPlumb: beforeDrop callback failed",ai)}}return ag};var X=function(){if(V&&ab){var ac={};p.extend(ac,V);p.extend(ac,ab);delete U.hoverPaintStyle;if(ac.gradient&&V.fillStyle){delete ac.gradient}ab=ac}};this.setPaintStyle=function(ac,ad){V=ac;U.paintStyleInUse=V;X();if(!ad){U.repaint()}};this.getPaintStyle=function(){return V};this.setHoverPaintStyle=function(ac,ad){ab=ac;X();if(!ad){U.repaint()}};this.getHoverPaintStyle=function(){return ab};this.setHover=function(ac,ae,ad){if(!U._jsPlumb.currentlyDragging&&!U._jsPlumb.isHoverSuspended()){R=ac;if(U.hoverClass!=null&&U.canvas!=null){if(ac){L.addClass(U.canvas,U.hoverClass)}else{L.removeClass(U.canvas,U.hoverClass)}}if(ab!=null){U.paintStyleInUse=ac?ab:V;ad=ad||r();U.repaint({timestamp:ad,recalc:false})}if(U.getAttachedElements&&!ae){Y(ac,r(),U)}}};this.isHover=function(){return R};var L=p.CurrentLibrary,K=["click","dblclick","mouseenter","mouseout","mousemove","mousedown","mouseup","contextmenu"],T={mouseout:"mouseexit"},P=function(ae,af,ad){var ac=T[ad]||ad;L.bind(ae,ad,function(ag){af.fire(ac,af,ag)})},S=function(ae,ad){var ac=T[ad]||ad;L.unbind(ae,ad)};this.attachListeners=function(ad,ae){for(var ac=0;ac<K.length;ac++){P(ad,ae,K[ac])}};var Y=function(ag,af,ac){var ae=U.getAttachedElements();if(ae){for(var ad=0;ad<ae.length;ad++){if(!ac||ac!=ae[ad]){ae[ad].setHover(ag,true,af)}}}};this.reattachListenersForElement=function(ad){if(arguments.length>1){for(var ac=0;ac<K.length;ac++){S(ad,K[ac])}for(var ac=1;ac<arguments.length;ac++){U.attachListeners(ad,arguments[ac])}}}},z=function(P){E.apply(this,arguments);var U=this;this.overlays=[];var N=function(Z){var X=null;if(n(Z)){var W=Z[0],Y=p.extend({component:U,_jsPlumb:U._jsPlumb},Z[1]);if(Z.length==3){p.extend(Y,Z[2])}X=new p.Overlays[U._jsPlumb.getRenderMode()][W](Y);if(Y.events){for(var V in Y.events){X.bind(V,Y.events[V])}}}else{if(Z.constructor==String){X=new p.Overlays[U._jsPlumb.getRenderMode()][Z]({component:U,_jsPlumb:U._jsPlumb})}else{X=Z}}U.overlays.push(X)},O=function(Z){var V=U.defaultOverlayKeys||[],Y=Z.overlays,W=function(aa){return U._jsPlumb.Defaults[aa]||p.Defaults[aa]||[]};if(!Y){Y=[]}for(var X=0;X<V.length;X++){Y.unshift.apply(Y,W(V[X]))}return Y};var L=O(P);if(L){for(var Q=0;Q<L.length;Q++){N(L[Q])}}var K=function(X){var V=-1;for(var W=0;W<U.overlays.length;W++){if(X===U.overlays[W].id){V=W;break}}return V};this.addOverlay=function(V){N(V);U.repaint()};this.getOverlay=function(W){var V=K(W);return V>=0?U.overlays[V]:null};this.getOverlays=function(){return U.overlays};this.hideOverlay=function(W){var V=U.getOverlay(W);if(V){V.hide()}};this.hideOverlays=function(){for(var V=0;V<U.overlays.length;V++){U.overlays[V].hide()}};this.showOverlay=function(W){var V=U.getOverlay(W);if(V){V.show()}};this.showOverlays=function(){for(var V=0;V<U.overlays.length;V++){U.overlays[V].show()}};this.removeAllOverlays=function(){for(var V in U.overlays){U.overlays[V].cleanup()}U.overlays.splice(0,U.overlays.length);U.repaint()};this.removeOverlay=function(W){var V=K(W);if(V!=-1){var X=U.overlays[V];X.cleanup();U.overlays.splice(V,1)}};this.removeOverlays=function(){for(var V=0;V<arguments.length;V++){U.removeOverlay(arguments[V])}};var M="__label",T=function(X){var V={cssClass:X.cssClass,labelStyle:this.labelStyle,id:M,component:U,_jsPlumb:U._jsPlumb},W=p.extend(V,X);return new p.Overlays[U._jsPlumb.getRenderMode()].Label(W)};if(P.label){var R=P.labelLocation||U.defaultLabelLocation||0.5,S=P.labelStyle||U._jsPlumb.Defaults.LabelStyle||p.Defaults.LabelStyle;this.overlays.push(T({label:P.label,location:R,labelStyle:S}))}this.setLabel=function(V){var W=U.getOverlay(M);if(!W){var X=V.constructor==String||V.constructor==Function?{label:V}:V;W=T(X);this.overlays.push(W)}else{if(V.constructor==String||V.constructor==Function){W.setLabel(V)}else{if(V.label){W.setLabel(V.label)}if(V.location){W.setLocation(V.location)}}}U.repaint()};this.getLabel=function(){var V=U.getOverlay(M);return V!=null?V.getLabel():null};this.getLabelOverlay=function(){return U.getOverlay(M)}},G=function(M,K,L){M.bind("click",function(N,O){K.fire("click",K,O)});M.bind("dblclick",function(N,O){K.fire("dblclick",K,O)});M.bind("contextmenu",function(N,O){K.fire("contextmenu",K,O)});M.bind("mouseenter",function(N,O){if(!K.isHover()){L(true);K.fire("mouseenter",K,O)}});M.bind("mouseexit",function(N,O){if(K.isHover()){L(false);K.fire("mouseexit",K,O)}})};var g=0,c=function(){var K=g+1;g++;return K};var y=function(L){this.Defaults={Anchor:"BottomCenter",Anchors:[null,null],ConnectionsDetachable:true,ConnectionOverlays:[],Connector:"Bezier",Container:null,DragOptions:{},DropOptions:{},Endpoint:"Dot",EndpointOverlays:[],Endpoints:[null,null],EndpointStyle:{fillStyle:"#456"},EndpointStyles:[null,null],EndpointHoverStyle:null,EndpointHoverStyles:[null,null],HoverPaintStyle:null,LabelStyle:{color:"black"},LogEnabled:false,Overlays:[],MaxConnections:1,PaintStyle:{lineWidth:8,strokeStyle:"#456"},RenderMode:"svg",Scope:"jsPlumb_DefaultScope"};if(L){p.extend(this.Defaults,L)}this.logEnabled=this.Defaults.LogEnabled;jsPlumbUtil.EventGenerator.apply(this);var bn=this,aL=c(),aO=bn.bind,aC={};for(var aB in this.Defaults){aC[aB]=this.Defaults[aB]}this.bind=function(bw,bv){if("ready"===bw&&M){bv()}else{aO.apply(bn,[bw,bv])}};bn.importDefaults=function(bw){for(var bv in bw){bn.Defaults[bv]=bw[bv]}};bn.restoreDefaults=function(){bn.Defaults=p.extend({},aC)};var P=null,ar=function(){p.repaintEverything()},bp=true,aP=function(){if(bp){ar()}},be=null,M=false,aY={},aT={},aU={},ah={},br={},bf={},bm={},bu=[],ae=[],Q=this.Defaults.Scope,X=null,V=function(by,bw,bx){var bv=by[bw];if(bv==null){bv=[];by[bw]=bv}bv.push(bx);return bv},aW=function(bw,bv){if(bn.Defaults.Container){p.CurrentLibrary.appendElement(bw,bn.Defaults.Container)}else{if(!bv){document.body.appendChild(bw)}else{p.CurrentLibrary.appendElement(bw,bv)}}},aD=1,ak=function(){return""+aD++},aI=function(bv){return bv._nodes?bv._nodes:bv},a6=false,bg=function(bw,bv){a6=bw;if(bv){bn.repaintEverything()}},ba=function(bx,bz,by){if(!a6){var bA=d(bx,"id"),bv=bn.dragManager.getElementsForDraggable(bA);if(by==null){by=r()}bn.anchorManager.redraw(bA,bz,by);if(bv){for(var bw in bv){bn.anchorManager.redraw(bv[bw].id,bz,by,bv[bw].offset)}}}},aG=function(bw,by){var bz=null;if(n(bw)){bz=[];for(var bv=0;bv<bw.length;bv++){var bx=F(bw[bv]),bA=d(bx,"id");bz.push(by(bx,bA))}}else{var bx=F(bw),bA=d(bx,"id");bz=by(bx,bA)}return bz},av=function(bv){return aU[bv]},bb=function(bz,bv,bC){var bE=bv==null?false:bv,bA=p.CurrentLibrary;if(bE){if(bA.isDragSupported(bz)&&!bA.isAlreadyDraggable(bz)){var bD=bC||bn.Defaults.DragOptions||p.Defaults.DragOptions;bD=p.extend({},bD);var bB=bA.dragEvents.drag,bw=bA.dragEvents.stop,by=bA.dragEvents.start;bD[by]=am(bD[by],function(){bn.setHoverSuspended(true)});bD[bB]=am(bD[bB],function(){var bF=bA.getUIPosition(arguments);ba(bz,bF);B(bz,"jsPlumb_dragged")});bD[bw]=am(bD[bw],function(){var bF=bA.getUIPosition(arguments);ba(bz,bF);o(bz,"jsPlumb_dragged");bn.setHoverSuspended(false)});var bx=K(bz);bm[bx]=true;var bE=bm[bx];bD.disabled=bE==null?false:!bE;bA.initDraggable(bz,bD,false);bn.dragManager.register(bz)}}},aA=function(bB,bw){var bv=p.extend({},bB);if(bw){p.extend(bv,bw)}if(bv.source&&bv.source.endpoint){bv.sourceEndpoint=bv.source}if(bv.source&&bv.target.endpoint){bv.targetEndpoint=bv.target}if(bB.uuids){bv.sourceEndpoint=av(bB.uuids[0]);bv.targetEndpoint=av(bB.uuids[1])}if(bv.sourceEndpoint&&bv.sourceEndpoint.isFull()){q(bn,"could not add connection; source endpoint is full");return}if(bv.targetEndpoint&&bv.targetEndpoint.isFull()){q(bn,"could not add connection; target endpoint is full");return}if(bv.sourceEndpoint&&bv.sourceEndpoint.connectorOverlays){bv.overlays=bv.overlays||[];for(var bz=0;bz<bv.sourceEndpoint.connectorOverlays.length;bz++){bv.overlays.push(bv.sourceEndpoint.connectorOverlays[bz])}}bv.tooltip=bB.tooltip;if(!bv.tooltip&&bv.sourceEndpoint&&bv.sourceEndpoint.connectorTooltip){bv.tooltip=bv.sourceEndpoint.connectorTooltip}if(bv.target&&!bv.target.endpoint&&!bv.targetEndpoint&&!bv.newConnection){var bA=K(bv.target),bC=aZ[bA],bx=aH[bA];if(bC){if(!aj[bA]){return}var by=bx!=null?bx:bn.addEndpoint(bv.target,bC);if(bh[bA]){aH[bA]=by}bv.targetEndpoint=by;by._makeTargetCreator=true}}if(bv.source&&!bv.source.endpoint&&!bv.sourceEndpoint&&!bv.newConnection){var bA=K(bv.source),bC=az[bA],bx=a5[bA];if(bC){if(!ac[bA]){return}var by=bx!=null?bx:bn.addEndpoint(bv.source,bC);if(a9[bA]){a5[bA]=by}bv.sourceEndpoint=by}}return bv},ad=function(bz){var by=bn.Defaults.ConnectionType||bn.getDefaultConnectionType(),bx=bn.Defaults.EndpointType||af,bw=p.CurrentLibrary.getParent;if(bz.container){bz.parent=bz.container}else{if(bz.sourceEndpoint){bz.parent=bz.sourceEndpoint.parent}else{if(bz.source.constructor==bx){bz.parent=bz.source.parent}else{bz.parent=bw(bz.source)}}}bz._jsPlumb=bn;var bv=new by(bz);bv.id="con_"+ak();bs("click","click",bv);bs("dblclick","dblclick",bv);bs("contextmenu","contextmenu",bv);return bv},bt=function(bw,bx,bv){bx=bx||{};if(!bw.suspendedEndpoint){V(aY,bw.scope,bw)}if(!bx.doNotFireConnectionEvent&&bx.fireEvent!==false){bn.fire("jsPlumbConnection",{connection:bw,source:bw.source,target:bw.target,sourceId:bw.sourceId,targetId:bw.targetId,sourceEndpoint:bw.endpoints[0],targetEndpoint:bw.endpoints[1]},bv)}bn.anchorManager.newConnection(bw);ba(bw.source)},bs=function(bv,bw,bx){bx.bind(bv,function(bz,by){bn.fire(bw,bx,by)})},aw=function(bx){if(bx.container){return bx.container}else{var bv=p.CurrentLibrary.getTagName(bx.source),bw=p.CurrentLibrary.getParent(bx.source);if(bv&&bv.toLowerCase()==="td"){return p.CurrentLibrary.getParent(bw)}else{return bw}}},aF=function(bx){var bw=bn.Defaults.EndpointType||af;bx.parent=aw(bx);bx._jsPlumb=bn;var bv=new bw(bx);bv.id="ep_"+ak();bs("click","endpointClick",bv);bs("dblclick","endpointDblClick",bv);bs("contextmenu","contextmenu",bv);return bv},U=function(bx,bA,bz){var bv=aT[bx];if(bv&&bv.length){for(var by=0;by<bv.length;by++){for(var bw=0;bw<bv[by].connections.length;bw++){var bB=bA(bv[by].connections[bw]);if(bB){return}}if(bz){bz(bv[by])}}}},Y=function(bw){for(var bv in aT){U(bv,bw)}},au=function(bv,bw){if(bv!=null&&bv.parentNode!=null){bv.parentNode.removeChild(bv)}},aX=function(bx,bw){for(var bv=0;bv<bx.length;bv++){au(bx[bv],bw)}},bk=function(bw,bv){return aG(bw,function(bx,by){bm[by]=bv;if(p.CurrentLibrary.isDragSupported(bx)){p.CurrentLibrary.setDraggable(bx,bv)}})},a3=function(bx,by,bv){by=by==="block";var bw=null;if(bv){if(by){bw=function(bA){bA.setVisible(true,true,true)}}else{bw=function(bA){bA.setVisible(false,true,true)}}}var bz=d(bx,"id");U(bz,function(bB){if(by&&bv){var bA=bB.sourceId===bz?1:0;if(bB.endpoints[bA].isVisible()){bB.setVisible(true)}}else{bB.setVisible(by)}},bw)},bi=function(bv){return aG(bv,function(bx,bw){var by=bm[bw]==null?false:bm[bw];by=!by;bm[bw]=by;p.CurrentLibrary.setDraggable(bx,by);return by})},aQ=function(bv,bx){var bw=null;if(bx){bw=function(by){var bz=by.isVisible();by.setVisible(!bz)}}U(bv,function(bz){var by=bz.isVisible();bz.setVisible(!by)},bw)},W=function(bA){var by=bA.timestamp,bv=bA.recalc,bz=bA.offset,bw=bA.elId;if(!bv){if(by&&by===br[bw]){return ah[bw]}}if(bv||!bz){var bx=F(bw);if(bx!=null){ae[bw]=a(bx);ah[bw]=t(bx);br[bw]=by}}else{ah[bw]=bz;if(ae[bw]==null){var bx=F(bw);if(bx!=null){ae[bw]=a(bx)}}}if(ah[bw]&&!ah[bw].right){ah[bw].right=ah[bw].left+ae[bw][0];ah[bw].bottom=ah[bw].top+ae[bw][1];ah[bw].width=ae[bw][0];ah[bw].height=ae[bw][1];ah[bw].centerx=ah[bw].left+(ah[bw].width/2);ah[bw].centery=ah[bw].top+(ah[bw].height/2)}return ah[bw]},aN=function(bv){var bw=ah[bv];if(!bw){bw=W({elId:bv})}return{o:bw,s:ae[bv]}},K=function(bv,bw,by){var bx=F(bv);var bz=d(bx,"id");if(!bz||bz=="undefined"){if(arguments.length==2&&arguments[1]!=undefined){bz=bw}else{if(arguments.length==1||(arguments.length==3&&!arguments[2])){bz="jsPlumb_"+aL+"_"+ak()}}f(bx,"id",bz)}return bz},am=function(bx,bv,bw){bx=bx||function(){};bv=bv||function(){};return function(){var by=null;try{by=bv.apply(this,arguments)}catch(bz){q(bn,"jsPlumb function failed : "+bz)}if(bw==null||(by!==bw)){try{bx.apply(this,arguments)}catch(bz){q(bn,"wrapped function failed : "+bz)}}return by}};this.connectorClass="_jsPlumb_connector";this.endpointClass="_jsPlumb_endpoint";this.overlayClass="_jsPlumb_overlay";this.Anchors={};this.Connectors={canvas:{},svg:{},vml:{}};this.Endpoints={canvas:{},svg:{},vml:{}};this.Overlays={canvas:{},svg:{},vml:{}};this.addClass=function(bw,bv){return p.CurrentLibrary.addClass(bw,bv)};this.removeClass=function(bw,bv){return p.CurrentLibrary.removeClass(bw,bv)};this.hasClass=function(bw,bv){return p.CurrentLibrary.hasClass(bw,bv)};this.addEndpoint=function(bx,by,bH){bH=bH||{};var bw=p.extend({},bH);p.extend(bw,by);bw.endpoint=bw.endpoint||bn.Defaults.Endpoint||p.Defaults.Endpoint;bw.paintStyle=bw.paintStyle||bn.Defaults.EndpointStyle||p.Defaults.EndpointStyle;bx=aI(bx);var bz=[],bC=bx.length&&bx.constructor!=String?bx:[bx];for(var bA=0;bA<bC.length;bA++){var bF=F(bC[bA]),bv=K(bF);bw.source=bF;W({elId:bv});var bE=aF(bw);if(bw.parentAnchor){bE.parentAnchor=bw.parentAnchor}V(aT,bv,bE);var bD=ah[bv],bB=ae[bv];var bG=bE.anchor.compute({xy:[bD.left,bD.top],wh:bB,element:bE});bE.paint({anchorLoc:bG});bz.push(bE);bn.dragManager.endpointAdded(bF)}return bz.length==1?bz[0]:bz};this.addEndpoints=function(bz,bw,bv){var by=[];for(var bx=0;bx<bw.length;bx++){var bA=bn.addEndpoint(bz,bw[bx],bv);if(n(bA)){Array.prototype.push.apply(by,bA)}else{by.push(bA)}}return by};this.animate=function(bx,bw,bv){var by=F(bx),bB=d(bx,"id");bv=bv||{};var bA=p.CurrentLibrary.dragEvents.step;var bz=p.CurrentLibrary.dragEvents.complete;bv[bA]=am(bv[bA],function(){bn.repaint(bB)});bv[bz]=am(bv[bz],function(){bn.repaint(bB)});p.CurrentLibrary.animate(by,bw,bv)};this.checkCondition=function(bx,bz){var bv=bn.getListener(bx);var by=true;if(bv&&bv.length>0){try{for(var bw=0;bw<bv.length;bw++){by=by&&bv[bw](bz)}}catch(bA){q(bn,"cannot check condition ["+bx+"]"+bA)}}return by};this.connect=function(by,bw){var bv=aA(by,bw);if(bv){if(bv.deleteEndpointsOnDetach==null){bv.deleteEndpointsOnDetach=true}var bx=ad(bv);bt(bx,bv);return bx}};this.deleteEndpoint=function(bw){var bB=(typeof bw=="string")?aU[bw]:bw;if(bB){var by=bB.getUuid();if(by){aU[by]=null}bB.detachAll();aX(bB.endpoint.getDisplayElements());bn.anchorManager.deleteEndpoint(bB);for(var bA in aT){var bv=aT[bA];if(bv){var bz=[];for(var bx=0;bx<bv.length;bx++){if(bv[bx]!=bB){bz.push(bv[bx])}}aT[bA]=bz}}bn.dragManager.endpointDeleted(bB)}};this.deleteEveryEndpoint=function(){for(var bx in aT){var bv=aT[bx];if(bv&&bv.length){for(var bw=0;bw<bv.length;bw++){bn.deleteEndpoint(bv[bw])}}}delete aT;aT={};delete aU;aU={}};var a7=function(by,bA,bv){var bx=bn.Defaults.ConnectionType||bn.getDefaultConnectionType(),bw=by.constructor==bx,bz=bw?{connection:by,source:by.source,target:by.target,sourceId:by.sourceId,targetId:by.targetId,sourceEndpoint:by.endpoints[0],targetEndpoint:by.endpoints[1]}:by;if(bA){bn.fire("jsPlumbConnectionDetached",bz,bv)}bn.anchorManager.connectionDetached(bz)},a4=function(bv){bn.fire("connectionDrag",bv)},aR=function(bv){bn.fire("connectionDragStop",bv)};this.detach=function(){if(arguments.length==0){return}var bz=bn.Defaults.ConnectionType||bn.getDefaultConnectionType(),bA=arguments[0].constructor==bz,by=arguments.length==2?bA?(arguments[1]||{}):arguments[0]:arguments[0],bD=(by.fireEvent!==false),bx=by.forceDetach,bw=bA?arguments[0]:by.connection;if(bw){if(bx||(bw.isDetachAllowed(bw)&&bw.endpoints[0].isDetachAllowed(bw)&&bw.endpoints[1].isDetachAllowed(bw))){if(bx||bn.checkCondition("beforeDetach",bw)){bw.endpoints[0].detach(bw,false,true,bD)}}}else{var bv=p.extend({},by);if(bv.uuids){av(bv.uuids[0]).detachFrom(av(bv.uuids[1]),bD)}else{if(bv.sourceEndpoint&&bv.targetEndpoint){bv.sourceEndpoint.detachFrom(bv.targetEndpoint)}else{var bC=K(bv.source),bB=K(bv.target);U(bC,function(bE){if((bE.sourceId==bC&&bE.targetId==bB)||(bE.targetId==bC&&bE.sourceId==bB)){if(bn.checkCondition("beforeDetach",bE)){bE.endpoints[0].detach(bE,false,true,bD)}}})}}}};this.detachAllConnections=function(bx,by){by=by||{};bx=F(bx);var bz=d(bx,"id"),bv=aT[bz];if(bv&&bv.length){for(var bw=0;bw<bv.length;bw++){bv[bw].detachAll(by.fireEvent)}}};this.detachEveryConnection=function(bx){bx=bx||{};for(var by in aT){var bv=aT[by];if(bv&&bv.length){for(var bw=0;bw<bv.length;bw++){bv[bw].detachAll(bx.fireEvent)}}}delete aY;aY={}};this.draggable=function(bx,bv){if(typeof bx=="object"&&bx.length){for(var bw=0;bw<bx.length;bw++){var by=F(bx[bw]);if(by){bb(by,true,bv)}}}else{if(bx._nodes){for(var bw=0;bw<bx._nodes.length;bw++){var by=F(bx._nodes[bw]);if(by){bb(by,true,bv)}}}else{var by=F(bx);if(by){bb(by,true,bv)}}}};this.extend=function(bw,bv){return p.CurrentLibrary.extend(bw,bv)};this.getDefaultEndpointType=function(){return af};this.getDefaultConnectionType=function(){return ax};var bq=function(bz,by,bw,bv){for(var bx=0;bx<bz.length;bx++){bz[bx][by].apply(bz[bx],bw)}return bv(bz)},S=function(bz,by,bw){var bv=[];for(var bx=0;bx<bz.length;bx++){bv.push([bz[bx][by].apply(bz[bx],bw),bz[bx]])}return bv},an=function(bx,bw,bv){return function(){return bq(bx,bw,arguments,bv)}},ay=function(bw,bv){return function(){return S(bw,bv,arguments)}};this.getConnections=function(bH,bw){if(!bH){bH={}}else{if(bH.constructor==String){bH={scope:bH}}}var bE=function(bI){var bJ=[];if(bI){if(typeof bI=="string"){if(bI==="*"){return bI}bJ.push(bI)}else{bJ=bI}}return bJ},bF=bH.scope||bn.getDefaultScope(),bD=bE(bF),bv=bE(bH.source),bB=bE(bH.target),bx=function(bJ,bI){if(bJ==="*"){return true}return bJ.length>0?J(bJ,bI)!=-1:true},bA=(!bw&&bD.length>1)?{}:[],bG=function(bJ,bK){if(!bw&&bD.length>1){var bI=bA[bJ];if(bI==null){bI=[];bA[bJ]=bI}bI.push(bK)}else{bA.push(bK)}};for(var bz in aY){if(bx(bD,bz)){for(var by=0;by<aY[bz].length;by++){var bC=aY[bz][by];if(bx(bv,bC.sourceId)&&bx(bB,bC.targetId)){bG(bz,bC)}}}}return bA};var aK=function(bv){return{setHover:an(bv,"setHover",aK),removeAllOverlays:an(bv,"removeAllOverlays",aK),setLabel:an(bv,"setLabel",aK),addOverlay:an(bv,"addOverlay",aK),removeOverlay:an(bv,"removeOverlay",aK),removeOverlays:an(bv,"removeOverlays",aK),showOverlay:an(bv,"showOverlay",aK),hideOverlay:an(bv,"hideOverlay",aK),showOverlays:an(bv,"showOverlays",aK),hideOverlays:an(bv,"hideOverlays",aK),setPaintStyle:an(bv,"setPaintStyle",aK),setHoverPaintStyle:an(bv,"setHoverPaintStyle",aK),setDetachable:an(bv,"setDetachable",aK),setConnector:an(bv,"setConnector",aK),setParameter:an(bv,"setParameter",aK),setParameters:an(bv,"setParameters",aK),detach:function(){for(var bw=0;bw<bv.length;bw++){bn.detach(bv[bw])}},getLabel:ay(bv,"getLabel"),getOverlay:ay(bv,"getOverlay"),isHover:ay(bv,"isHover"),isDetachable:ay(bv,"isDetachable"),getParameter:ay(bv,"getParameter"),getParameters:ay(bv,"getParameters"),getPaintStyle:ay(bv,"getPaintStyle"),getHoverPaintStyle:ay(bv,"getHoverPaintStyle"),length:bv.length,each:function(bx){for(var bw=0;bw<bv.length;bw++){bx(bv[bw])}return aK(bv)},get:function(bw){return bv[bw]}}};this.select=function(bv){bv=bv||{};bv.scope=bv.scope||"*";var bw=bn.getConnections(bv,true);return aK(bw)};this.getAllConnections=function(){return aY};this.getDefaultScope=function(){return Q};this.getEndpoint=av;this.getEndpoints=function(bv){return aT[K(bv)]};this.getId=K;this.getOffset=function(bw){var bv=ah[bw];return W({elId:bw})};this.getSelector=function(bv){return p.CurrentLibrary.getSelector(bv)};this.getSize=function(bw){var bv=ae[bw];if(!bv){W({elId:bw})}return ae[bw]};this.appendElement=aW;var aS=false;this.isHoverSuspended=function(){return aS};this.setHoverSuspended=function(bv){aS=bv};this.isCanvasAvailable=function(){return A};this.isSVGAvailable=function(){return e};this.isVMLAvailable=b;this.hide=function(bv,bw){a3(bv,"none",bw)};this.idstamp=ak;this.init=function(){if(!M){bn.setRenderMode(bn.Defaults.RenderMode);var bv=function(bw){p.CurrentLibrary.bind(document,bw,function(bC){if(!bn.currentlyDragging&&X==p.CANVAS){for(var bB in aY){var bD=aY[bB];for(var bz=0;bz<bD.length;bz++){var by=bD[bz].connector[bw](bC);if(by){return}}}for(var bA in aT){var bx=aT[bA];for(var bz=0;bz<bx.length;bz++){if(bx[bz].endpoint[bw](bC)){return}}}}})};bv("click");bv("dblclick");bv("mousemove");bv("mousedown");bv("mouseup");bv("contextmenu");M=true;bn.fire("ready")}};this.log=P;this.jsPlumbUIComponent=E;this.makeAnchor=function(){if(arguments.length==0){return null}var bA=arguments[0],bx=arguments[1],bw=arguments[2],by=null;if(bA.compute&&bA.getOrientation){return bA}else{if(typeof bA=="string"){by=p.Anchors[arguments[0]]({elementId:bx,jsPlumbInstance:bn})}else{if(n(bA)){if(n(bA[0])||C(bA[0])){if(bA.length==2&&C(bA[0])&&w(bA[1])){var bv=p.extend({elementId:bx,jsPlumbInstance:bn},bA[1]);by=p.Anchors[bA[0]](bv)}else{by=new aq(bA,null,bx)}}else{var bz={x:bA[0],y:bA[1],orientation:(bA.length>=4)?[bA[2],bA[3]]:[0,0],offsets:(bA.length==6)?[bA[4],bA[5]]:[0,0],elementId:bx};by=new aa(bz);by.clone=function(){return new aa(bz)}}}}}if(!by.id){by.id="anchor_"+ak()}return by};this.makeAnchors=function(by,bw,bv){var bz=[];for(var bx=0;bx<by.length;bx++){if(typeof by[bx]=="string"){bz.push(p.Anchors[by[bx]]({elementId:bw,jsPlumbInstance:bv}))}else{if(n(by[bx])){bz.push(bn.makeAnchor(by[bx],bw,bv))}}}return bz};this.makeDynamicAnchor=function(bv,bw){return new aq(bv,bw)};var aZ={},aH={},bh={},ap={},ab=function(bv,bw){bv.paintStyle=bv.paintStyle||bn.Defaults.EndpointStyles[bw]||bn.Defaults.EndpointStyle||p.Defaults.EndpointStyles[bw]||p.Defaults.EndpointStyle;bv.hoverPaintStyle=bv.hoverPaintStyle||bn.Defaults.EndpointHoverStyles[bw]||bn.Defaults.EndpointHoverStyle||p.Defaults.EndpointHoverStyles[bw]||p.Defaults.EndpointHoverStyle;bv.anchor=bv.anchor||bn.Defaults.Anchors[bw]||bn.Defaults.Anchor||p.Defaults.Anchors[bw]||p.Defaults.Anchor;bv.endpoint=bv.endpoint||bn.Defaults.Endpoints[bw]||bn.Defaults.Endpoint||p.Defaults.Endpoints[bw]||p.Defaults.Endpoint};this.makeTarget=function(by,bz,bF){var bw=p.extend({_jsPlumb:bn},bF);p.extend(bw,bz);ab(bw,1);var bD=p.CurrentLibrary,bE=bw.scope||bn.Defaults.Scope,bA=!(bw.deleteEndpointsOnDetach===false),bx=bw.maxConnections||-1,bv=function(bK){var bI=K(bK);aZ[bI]=bw;bh[bI]=bw.uniqueEndpoint,ap[bI]=bx,aj[bI]=true,proxyComponent=new E(bw);var bH=p.extend({},bw.dropOptions||{}),bG=function(){var bN=p.CurrentLibrary.getDropEvent(arguments),bP=bn.select({target:bI}).length;if(!aj[bI]||ap[bI]>0&&bP>=ap[bI]){console.log("target element "+bI+" is full.");return false}bn.currentlyDragging=false;var bZ=F(bD.getDragObject(arguments)),bO=d(bZ,"dragId"),bX=d(bZ,"originalScope"),bU=bf[bO],bM=bU.endpoints[0],bL=bw.endpoint?p.extend({},bw.endpoint):{};bM.anchor.locked=false;if(bX){bD.setDragScope(bZ,bX)}var bS=proxyComponent.isDropAllowed(bU.sourceId,K(bK),bU.scope,bU,null);if(bU.endpointsToDeleteOnDetach){if(bM===bU.endpointsToDeleteOnDetach[0]){bU.endpointsToDeleteOnDetach[0]=null}else{if(bM===bU.endpointsToDeleteOnDetach[1]){bU.endpointsToDeleteOnDetach[1]=null}}}if(bU.suspendedEndpoint){bU.targetId=bU.suspendedEndpoint.elementId;bU.target=bD.getElementObject(bU.suspendedEndpoint.elementId);bU.endpoints[1]=bU.suspendedEndpoint}if(bS){bM.detach(bU,false,true,false);var bY=aH[bI]||bn.addEndpoint(bK,bw);if(bw.uniqueEndpoint){aH[bI]=bY}bY._makeTargetCreator=true;if(bY.anchor.positionFinder!=null){var bV=bD.getUIPosition(arguments),bR=bD.getOffset(bK),bW=bD.getSize(bK),bQ=bY.anchor.positionFinder(bV,bR,bW,bY.anchor.constructorParams);bY.anchor.x=bQ[0];bY.anchor.y=bQ[1]}var bT=bn.connect({source:bM,target:bY,scope:bX,previousConnection:bU,container:bU.parent,deleteEndpointsOnDetach:bA,doNotFireConnectionEvent:bM.endpointWillMoveAfterConnection});if(bU.endpoints[1]._makeTargetCreator&&bU.endpoints[1].connections.length<2){bn.deleteEndpoint(bU.endpoints[1])}if(bA){bT.endpointsToDeleteOnDetach=[bM,bY]}bT.repaint()}else{if(bU.suspendedEndpoint){if(bM.isReattach){bU.setHover(false);bU.floatingAnchorIndex=null;bU.suspendedEndpoint.addConnection(bU);bn.repaint(bM.elementId)}else{bM.detach(bU,false,true,true,bN)}}}};var bJ=bD.dragEvents.drop;bH.scope=bH.scope||bE;bH[bJ]=am(bH[bJ],bG);bD.initDroppable(bK,bH,true)};by=aI(by);var bC=by.length&&by.constructor!=String?by:[by];for(var bB=0;bB<bC.length;bB++){bv(F(bC[bB]))}return bn};this.unmakeTarget=function(bw,bx){bw=p.CurrentLibrary.getElementObject(bw);var bv=K(bw);if(!bx){delete aZ[bv];delete bh[bv];delete ap[bv];delete aj[bv]}return bn};this.makeTargets=function(bx,by,bv){for(var bw=0;bw<bx.length;bw++){bn.makeTarget(bx[bw],by,bv)}};var az={},a5={},a9={},ac={},N={},aj={};this.makeSource=function(bz,bC,bv){var bA=p.extend({},bv);p.extend(bA,bC);ab(bA,0);var by=p.CurrentLibrary,bB=function(bK){var bE=K(bK),bL=bA.parent,bD=bL!=null?bn.getId(by.getElementObject(bL)):bE;az[bD]=bA;a9[bD]=bA.uniqueEndpoint;ac[bD]=true;var bF=by.dragEvents.stop,bJ=by.dragEvents.drag,bM=p.extend({},bA.dragOptions||{}),bH=bM.drag,bN=bM.stop,bO=null,bI=false;bM.scope=bM.scope||bA.scope;bM[bJ]=am(bM[bJ],function(){if(bH){bH.apply(this,arguments)}bI=false});bM[bF]=am(bM[bF],function(){if(bN){bN.apply(this,arguments)}bn.currentlyDragging=false;if(bO.connections.length==0){bn.deleteEndpoint(bO)}else{by.unbind(bO.canvas,"mousedown");var bQ=bA.anchor||bn.Defaults.Anchor,bR=bO.anchor,bT=bO.connections[0];bO.anchor=bn.makeAnchor(bQ,bE,bn);if(bA.parent){var bS=by.getElementObject(bA.parent);if(bS){var bP=bO.elementId;var bU=bA.container||bn.Defaults.Container||p.Defaults.Container;bO.setElement(bS,bU);bO.endpointWillMoveAfterConnection=false;bn.anchorManager.rehomeEndpoint(bP,bS);bT.previousConnection=null;D(aY[bT.scope],function(bV){return bV.id===bT.id});bn.anchorManager.connectionDetached({sourceId:bT.sourceId,targetId:bT.targetId,connection:bT});bt(bT)}}bO.repaint();bn.repaint(bO.elementId);bn.repaint(bT.targetId)}});var bG=function(bS){if(!ac[bD]){return}if(bC.filter){var bP=bC.filter(by.getOriginalEvent(bS),bK);if(bP===false){return}}var bW=W({elId:bE});var bV=((bS.pageX||bS.page.x)-bW.left)/bW.width,bU=((bS.pageY||bS.page.y)-bW.top)/bW.height,b0=bV,bZ=bU;if(bA.parent){var bT=by.getElementObject(bA.parent),bR=K(bT);bW=W({elId:bR});b0=((bS.pageX||bS.page.x)-bW.left)/bW.width,bZ=((bS.pageY||bS.page.y)-bW.top)/bW.height}var bY={};p.extend(bY,bA);bY.isSource=true;bY.anchor=[bV,bU,0,0];bY.parentAnchor=[b0,bZ,0,0];bY.dragOptions=bM;if(bA.parent){var bQ=bY.container||bn.Defaults.Container||p.Defaults.Container;if(bQ){bY.container=bQ}else{bY.container=p.CurrentLibrary.getParent(bA.parent)}}bO=bn.addEndpoint(bE,bY);bI=true;bO.endpointWillMoveAfterConnection=bA.parent!=null;bO.endpointWillMoveTo=bA.parent?by.getElementObject(bA.parent):null;var bX=function(){if(bI){bn.deleteEndpoint(bO)}};bn.registerListener(bO.canvas,"mouseup",bX);bn.registerListener(bK,"mouseup",bX);by.trigger(bO.canvas,"mousedown",bS)};bn.registerListener(bK,"mousedown",bG);N[bE]=bG};bz=aI(bz);var bw=bz.length&&bz.constructor!=String?bz:[bz];for(var bx=0;bx<bw.length;bx++){bB(F(bw[bx]))}return bn};this.unmakeSource=function(bw,bx){bw=p.CurrentLibrary.getElementObject(bw);var by=K(bw),bv=N[by];if(bv){bn.unregisterListener(_el,"mousedown",bv)}if(!bx){delete az[by];delete a9[by];delete ac[by];delete N[by]}return bn};this.unmakeEverySource=function(){for(var bv in ac){bn.unmakeSource(bv,true)}az={};a9={};ac={};N={}};this.unmakeEveryTarget=function(){for(var bv in aj){bn.unmakeTarget(bv,true)}aZ={};bh={};ap={};aj={};return bn};this.makeSources=function(bx,by,bv){for(var bw=0;bw<bx.length;bw++){bn.makeSource(bx[bw],by,bv)}return bn};var aM=function(bz,by,bA,bv){var bw=bz=="source"?ac:aj;if(C(by)){bw[by]=bv?!bw[by]:bA}else{if(by.length){by=aI(by);for(var bx=0;bx<by.length;bx++){var bB=_el=p.CurrentLibrary.getElementObject(by[bx]),bB=K(_el);bw[bB]=bv?!bw[bB]:bA}}}return bn};this.setSourceEnabled=function(bv,bw){return aM("source",bv,bw)};this.toggleSourceEnabled=function(bv){aM("source",bv,null,true);return bn.isSourceEnabled(bv)};this.isSource=function(bv){bv=p.CurrentLibrary.getElementObject(bv);return ac[K(bv)]!=null};this.isSourceEnabled=function(bv){bv=p.CurrentLibrary.getElementObject(bv);return ac[K(bv)]===true};this.setTargetEnabled=function(bv,bw){return aM("target",bv,bw)};this.toggleTargetEnabled=function(bv){return aM("target",bv,null,true);return bn.isTargetEnabled(bv)};this.isTarget=function(bv){bv=p.CurrentLibrary.getElementObject(bv);return aj[K(bv)]!=null};this.isTargetEnabled=function(bv){bv=p.CurrentLibrary.getElementObject(bv);return aj[K(bv)]===true};this.ready=function(bv){bn.bind("ready",bv)},this.repaint=function(bw){var bx=function(by){ba(F(by))};if(typeof bw=="object"){for(var bv=0;bv<bw.length;bv++){bx(bw[bv])}}else{bx(bw)}};this.repaintEverything=function(){for(var bv in aT){ba(F(bv),null,null)}};this.removeAllEndpoints=function(bx){var bv=d(bx,"id"),by=aT[bv];if(by){for(var bw=0;bw<by.length;bw++){bn.deleteEndpoint(by[bw])}}aT[bv]=[]};this.removeEveryEndpoint=this.deleteEveryEndpoint;this.removeEndpoint=function(bv,bw){bn.deleteEndpoint(bw)};var ag={},bd=function(){for(var bw in ag){for(var bv=0;bv<ag[bw].length;bv++){var bx=ag[bw][bv];p.CurrentLibrary.unbind(bx.el,bx.event,bx.listener)}}ag={}};this.registerListener=function(bw,bv,bx){p.CurrentLibrary.bind(bw,bv,bx);V(ag,bv,{el:bw,event:bv,listener:bx})};this.unregisterListener=function(bw,bv,bx){p.CurrentLibrary.unbind(bw,bv,bx);D(ag,function(by){return by.type==bv&&by.listener==bx})};this.reset=function(){bn.deleteEveryEndpoint();bn.unbind();aZ={};aH={};bh={};ap={};az={};a5={};a9={};bd();bn.anchorManager.reset();bn.dragManager.reset()};this.setDefaultScope=function(bv){Q=bv};this.setDraggable=bk;this.setId=function(bz,bv,bB){var bC=bz.constructor==String?bz:bn.getId(bz),by=bn.getConnections({source:bC,scope:"*"},true),bx=bn.getConnections({target:bC,scope:"*"},true);bv=""+bv;if(!bB){bz=p.CurrentLibrary.getElementObject(bC);p.CurrentLibrary.setAttribute(bz,"id",bv)}bz=p.CurrentLibrary.getElementObject(bv);aT[bv]=aT[bC]||[];for(var bw=0;bw<aT[bv].length;bw++){aT[bv][bw].elementId=bv;aT[bv][bw].element=bz;aT[bv][bw].anchor.elementId=bv}delete aT[bC];bn.anchorManager.changeId(bC,bv);var bA=function(bG,bD,bF){for(var bE=0;bE<bG.length;bE++){bG[bE].endpoints[bD].elementId=bv;bG[bE].endpoints[bD].element=bz;bG[bE][bF+"Id"]=bv;bG[bE][bF]=bz}};bA(by,0,"source");bA(bx,1,"target")};this.setIdChanged=function(bw,bv){bn.setId(bw,bv,true)};this.setDebugLog=function(bv){P=bv};this.setRepaintFunction=function(bv){ar=bv};this.setSuspendDrawing=bg;this.CANVAS="canvas";this.SVG="svg";this.VML="vml";this.setRenderMode=function(bv){if(bv){bv=bv.toLowerCase()}else{return}if(bv!==p.CANVAS&&bv!==p.SVG&&bv!==p.VML){throw new Error("render mode must be one of jsPlumb.CANVAS, jsPlumb.SVG or jsPlumb.VML")}if(bv===p.SVG){if(e){X=p.SVG}else{if(A){X=p.CANVAS}else{if(b()){X=p.VML}}}}else{if(bv===p.CANVAS&&A){X=p.CANVAS}else{if(b()){X=p.VML}}}return X};this.getRenderMode=function(){return X};this.show=function(bv,bw){a3(bv,"block",bw)};this.sizeCanvas=function(bx,bv,bz,bw,by){if(bx){bx.style.height=by+"px";bx.height=by;bx.style.width=bw+"px";bx.width=bw;bx.style.left=bv+"px";bx.style.top=bz+"px"}};this.getTestHarness=function(){return{endpointsByElement:aT,endpointCount:function(bv){var bw=aT[bv];return bw?bw.length:0},connectionCount:function(bv){bv=bv||Q;var bw=aY[bv];return bw?bw.length:0},getId:K,makeAnchor:self.makeAnchor,makeDynamicAnchor:self.makeDynamicAnchor}};this.toggle=aQ;this.toggleVisible=aQ;this.toggleDraggable=bi;this.unload=function(){};this.wrap=am;this.addListener=this.bind;var bo=function(bA,bx){var by=null,bv=bA;if(bx.tagName.toLowerCase()==="svg"&&bx.parentNode){by=bx.parentNode}else{if(bx.offsetParent){by=bx.offsetParent}}if(by!=null){var bw=by.tagName.toLowerCase()==="body"?{left:0,top:0}:t(by),bz=by.tagName.toLowerCase()==="body"?{left:0,top:0}:{left:by.scrollLeft,top:by.scrollTop};bv[0]=bA[0]-bw.left+bz.left;bv[1]=bA[1]-bw.top+bz.top}return bv};var aa=function(bz){var bx=this;this.x=bz.x||0;this.y=bz.y||0;this.elementId=bz.elementId;var bw=bz.orientation||[0,0];var by=null,bv=null;this.offsets=bz.offsets||[0,0];bx.timestamp=null;this.compute=function(bE){var bD=bE.xy,bA=bE.wh,bB=bE.element,bC=bE.timestamp;if(bC&&bC===bx.timestamp){return bv}bv=[bD[0]+(bx.x*bA[0])+bx.offsets[0],bD[1]+(bx.y*bA[1])+bx.offsets[1]];bv=bo(bv,bB.canvas);bx.timestamp=bC;return bv};this.getOrientation=function(bA){return bw};this.equals=function(bA){if(!bA){return false}var bB=bA.getOrientation();var bC=this.getOrientation();return this.x==bA.x&&this.y==bA.y&&this.offsets[0]==bA.offsets[0]&&this.offsets[1]==bA.offsets[1]&&bC[0]==bB[0]&&bC[1]==bB[1]};this.getCurrentLocation=function(){return bv}};var a1=function(bB){var bz=bB.reference,bA=bB.referenceCanvas,bx=a(F(bA)),bw=0,bC=0,bv=null,by=null;this.x=0;this.y=0;this.isFloating=true;this.compute=function(bG){var bF=bG.xy,bE=bG.element,bD=[bF[0]+(bx[0]/2),bF[1]+(bx[1]/2)];bD=bo(bD,bE.canvas);by=bD;return bD};this.getOrientation=function(bE){if(bv){return bv}else{var bD=bz.getOrientation(bE);return[Math.abs(bD[0])*bw*-1,Math.abs(bD[1])*bC*-1]}};this.over=function(bD){bv=bD.getOrientation()};this.out=function(){bv=null};this.getCurrentLocation=function(){return by}};var aq=function(bx,bw,bC){this.isSelective=true;this.isDynamic=true;var bF=[],bE=this,bD=function(bG){return bG.constructor==aa?bG:bn.makeAnchor(bG,bC,bn)};for(var bB=0;bB<bx.length;bB++){bF[bB]=bD(bx[bB])}this.addAnchor=function(bG){bF.push(bD(bG))};this.getAnchors=function(){return bF};this.locked=false;var by=bF.length>0?bF[0]:null,bA=bF.length>0?0:-1,bE=this,bz=function(bI,bG,bM,bL,bH){var bK=bL[0]+(bI.x*bH[0]),bJ=bL[1]+(bI.y*bH[1]);return Math.sqrt(Math.pow(bG-bK,2)+Math.pow(bM-bJ,2))},bv=bw||function(bQ,bH,bI,bJ,bG){var bL=bI[0]+(bJ[0]/2),bK=bI[1]+(bJ[1]/2);var bN=-1,bP=Infinity;for(var bM=0;bM<bG.length;bM++){var bO=bz(bG[bM],bL,bK,bQ,bH);if(bO<bP){bN=bM+0;bP=bO}}return bG[bN]};this.compute=function(bK){var bJ=bK.xy,bG=bK.wh,bI=bK.timestamp,bH=bK.txy,bL=bK.twh;if(bE.locked||bH==null||bL==null){return by.compute(bK)}else{bK.timestamp=null}by=bv(bJ,bG,bH,bL,bF);bE.x=by.x;bE.y=by.y;return by.compute(bK)};this.getCurrentLocation=function(){return by!=null?by.getCurrentLocation():null};this.getOrientation=function(bG){return by!=null?by.getOrientation(bG):[0,0]};this.over=function(bG){if(by!=null){by.over(bG)}};this.out=function(){if(by!=null){by.out()}}};var bj={},ai={},aJ={},T={HORIZONTAL:"horizontal",VERTICAL:"vertical",DIAGONAL:"diagonal",IDENTITY:"identity"},bl=function(bE,bF,bB,by){if(bE===bF){return{orientation:T.IDENTITY,a:["top","top"]}}var bw=Math.atan2((by.centery-bB.centery),(by.centerx-bB.centerx)),bz=Math.atan2((bB.centery-by.centery),(bB.centerx-by.centerx)),bA=((bB.left<=by.left&&bB.right>=by.left)||(bB.left<=by.right&&bB.right>=by.right)||(bB.left<=by.left&&bB.right>=by.right)||(by.left<=bB.left&&by.right>=bB.right)),bG=((bB.top<=by.top&&bB.bottom>=by.top)||(bB.top<=by.bottom&&bB.bottom>=by.bottom)||(bB.top<=by.top&&bB.bottom>=by.bottom)||(by.top<=bB.top&&by.bottom>=bB.bottom));if(!(bA||bG)){var bD=null,bx=false,bv=false,bC=null;if(by.left>bB.left&&by.top>bB.top){bD=["right","top"]}else{if(by.left>bB.left&&bB.top>by.top){bD=["top","left"]}else{if(by.left<bB.left&&by.top<bB.top){bD=["top","right"]}else{if(by.left<bB.left&&by.top>bB.top){bD=["left","top"]}}}}return{orientation:T.DIAGONAL,a:bD,theta:bw,theta2:bz}}else{if(bA){return{orientation:T.HORIZONTAL,a:bB.top<by.top?["bottom","top"]:["top","bottom"],theta:bw,theta2:bz}}else{return{orientation:T.VERTICAL,a:bB.left<by.left?["right","left"]:["left","right"],theta:bw,theta2:bz}}}},a2=function(bJ,bF,bD,bE,bK,bG,bx){var bL=[],bw=bF[bK?0:1]/(bE.length+1);for(var bH=0;bH<bE.length;bH++){var bM=(bH+1)*bw,bv=bG*bF[bK?1:0];if(bx){bM=bF[bK?0:1]-bM}var bC=(bK?bM:bv),bz=bD[0]+bC,bB=bC/bF[0],bA=(bK?bv:bM),by=bD[1]+bA,bI=bA/bF[1];bL.push([bz,by,bB,bI,bE[bH][1],bE[bH][2]])}return bL},a8=function(bw,bv){return bw[0]>bv[0]?1:-1},Z=function(bv){return function(bx,bw){var by=true;if(bv){if(bx[0][0]<bw[0][0]){by=true}else{by=bx[0][1]>bw[0][1]}}else{if(bx[0][0]>bw[0][0]){by=true}else{by=bx[0][1]>bw[0][1]}}return by===false?-1:1}},O=function(bw,bv){var by=bw[0][0]<0?-Math.PI-bw[0][0]:Math.PI-bw[0][0],bx=bv[0][0]<0?-Math.PI-bv[0][0]:Math.PI-bv[0][0];if(by>bx){return 1}else{return bw[0][1]>bv[0][1]?1:-1}},a0={top:a8,right:Z(true),bottom:Z(true),left:O},ao=function(bv,bw){return bv.sort(bw)},al=function(bw,bv){var by=ae[bw],bz=ah[bw],bx=function(bG,bN,bC,bF,bL,bK,bB){if(bF.length>0){var bJ=ao(bF,a0[bG]),bH=bG==="right"||bG==="top",bA=a2(bG,bN,bC,bJ,bL,bK,bH);var bO=function(bR,bQ){var bP=bo([bQ[0],bQ[1]],bR.canvas);ai[bR.id]=[bP[0],bP[1],bQ[2],bQ[3]];aJ[bR.id]=bB};for(var bD=0;bD<bA.length;bD++){var bI=bA[bD][4],bM=bI.endpoints[0].elementId===bw,bE=bI.endpoints[1].elementId===bw;if(bM){bO(bI.endpoints[0],bA[bD])}else{if(bE){bO(bI.endpoints[1],bA[bD])}}}}};bx("bottom",by,[bz.left,bz.top],bv.bottom,true,1,[0,1]);bx("top",by,[bz.left,bz.top],bv.top,true,0,[0,-1]);bx("left",by,[bz.left,bz.top],bv.left,false,0,[-1,0]);bx("right",by,[bz.left,bz.top],bv.right,false,1,[1,0])},aE=function(){var bv={},bz={},bw=this,by={};this.reset=function(){bv={};bz={};by={}};this.newConnection=function(bD){var bF=bD.sourceId,bC=bD.targetId,bA=bD.endpoints,bE=true,bB=function(bG,bH,bJ,bI,bK){if((bF==bC)&&bJ.isContinuous){p.CurrentLibrary.removeElement(bA[1].canvas);bE=false}V(bz,bI,[bK,bH,bJ.constructor==aq])};bB(0,bA[0],bA[0].anchor,bC,bD);if(bE){bB(1,bA[1],bA[1].anchor,bF,bD)}};this.connectionDetached=function(bA){var bB=bA.connection||bA;var bG=bB.sourceId,bH=bB.targetId,bK=bB.endpoints,bF=function(bL,bM,bO,bN,bP){if(bO.constructor==a1){}else{D(bz[bN],function(bQ){return bQ[0].id==bP.id})}};bF(1,bK[1],bK[1].anchor,bG,bB);bF(0,bK[0],bK[0].anchor,bH,bB);var bC=bB.sourceId,bD=bB.targetId,bJ=bB.endpoints[0].id,bE=bB.endpoints[1].id,bI=function(bN,bL){if(bN){var bM=function(bO){return bO[4]==bL};D(bN.top,bM);D(bN.left,bM);D(bN.bottom,bM);D(bN.right,bM)}};bI(by[bC],bJ);bI(by[bD],bE);bw.redraw(bC);bw.redraw(bD)};this.add=function(bB,bA){V(bv,bA,bB)};this.changeId=function(bB,bA){bz[bA]=bz[bB];bv[bA]=bv[bB];delete bz[bB];delete bv[bB]};this.getConnectionsFor=function(bA){return bz[bA]||[]};this.getEndpointsFor=function(bA){return bv[bA]||[]};this.deleteEndpoint=function(bA){D(bv[bA.elementId],function(bB){return bB.id==bA.id})};this.clearFor=function(bA){delete bv[bA];bv[bA]=[]};var bx=function(bU,bH,bP,bE,bK,bL,bN,bJ,bW,bM,bD,bT){var bR=-1,bC=-1,bF=bE.endpoints[bN],bO=bF.id,bI=[1,0][bN],bA=[[bH,bP],bE,bK,bL,bO],bB=bU[bW],bV=bF._continuousAnchorEdge?bU[bF._continuousAnchorEdge]:null;if(bV){var bS=i(bV,function(bX){return bX[4]==bO});if(bS!=-1){bV.splice(bS,1);for(var bQ=0;bQ<bV.length;bQ++){u(bD,bV[bQ][1],function(bX){return bX.id==bV[bQ][1].id});u(bT,bV[bQ][1].endpoints[bN],function(bX){return bX.id==bV[bQ][1].endpoints[bN].id})}}}for(var bQ=0;bQ<bB.length;bQ++){if(bN==1&&bB[bQ][3]===bL&&bC==-1){bC=bQ}u(bD,bB[bQ][1],function(bX){return bX.id==bB[bQ][1].id});u(bT,bB[bQ][1].endpoints[bN],function(bX){return bX.id==bB[bQ][1].endpoints[bN].id})}if(bR!=-1){bB[bR]=bA}else{var bG=bJ?bC!=-1?bC:0:bB.length;bB.splice(bG,0,bA)}bF._continuousAnchorEdge=bW};this.redraw=function(bP,bR,bC,bF){var b0=bv[bP]||[],bZ=bz[bP]||[],bB=[],bY=[],bD=[];bC=bC||r();bF=bF||{left:0,top:0};if(bR){bR={left:bR.left+bF.left,top:bR.top+bF.top}}W({elId:bP,offset:bR,recalc:false,timestamp:bC});var bK=ah[bP],bG=ae[bP],bM={};for(var bW=0;bW<bZ.length;bW++){var bH=bZ[bW][0],bJ=bH.sourceId,bE=bH.targetId,bI=bH.endpoints[0].anchor.isContinuous,bO=bH.endpoints[1].anchor.isContinuous;if(bI||bO){var bX=bJ+"_"+bE,bU=bE+"_"+bJ,bT=bM[bX],bN=bH.sourceId==bP?1:0;if(bI&&!by[bJ]){by[bJ]={top:[],right:[],bottom:[],left:[]}}if(bO&&!by[bE]){by[bE]={top:[],right:[],bottom:[],left:[]}}if(bP!=bE){W({elId:bE,timestamp:bC})}if(bP!=bJ){W({elId:bJ,timestamp:bC})}var bL=aN(bE),bA=aN(bJ);if(bE==bJ&&(bI||bO)){bx(by[bJ],-Math.PI/2,0,bH,false,bE,0,false,"top",bJ,bB,bY)}else{if(!bT){bT=bl(bJ,bE,bA.o,bL.o);bM[bX]=bT}if(bI){bx(by[bJ],bT.theta,0,bH,false,bE,0,false,bT.a[0],bJ,bB,bY)}if(bO){bx(by[bE],bT.theta2,-1,bH,true,bJ,1,true,bT.a[1],bE,bB,bY)}}if(bI){u(bD,bJ,function(b1){return b1===bJ})}if(bO){u(bD,bE,function(b1){return b1===bE})}u(bB,bH,function(b1){return b1.id==bH.id});if((bI&&bN==0)||(bO&&bN==1)){u(bY,bH.endpoints[bN],function(b1){return b1.id==bH.endpoints[bN].id})}}}for(var bW=0;bW<bD.length;bW++){al(bD[bW],by[bD[bW]])}for(var bW=0;bW<b0.length;bW++){b0[bW].paint({timestamp:bC,offset:bK,dimensions:bG})}for(var bW=0;bW<bY.length;bW++){bY[bW].paint({timestamp:bC,offset:bK,dimensions:bG})}for(var bW=0;bW<bZ.length;bW++){var bQ=bZ[bW][1];if(bQ.anchor.constructor==aq){bQ.paint({elementWithPrecedence:bP});u(bB,bZ[bW][0],function(b1){return b1.id==bZ[bW][0].id});for(var bV=0;bV<bQ.connections.length;bV++){if(bQ.connections[bV]!==bZ[bW][0]){u(bB,bQ.connections[bV],function(b1){return b1.id==bQ.connections[bV].id})}}}else{if(bQ.anchor.constructor==aa){u(bB,bZ[bW][0],function(b1){return b1.id==bZ[bW][0].id})}}}var bS=bf[bP];if(bS){bS.paint({timestamp:bC,recalc:false,elId:bP})}for(var bW=0;bW<bB.length;bW++){bB[bW].paint({elId:bP,timestamp:bC,recalc:false})}};this.rehomeEndpoint=function(bA,bE){var bB=bv[bA]||[],bC=bn.getId(bE);for(var bD=0;bD<bB.length;bD++){bw.add(bB[bD],bC)}bB.splice(0,bB.length)}};bn.anchorManager=new aE();bn.continuousAnchorFactory={get:function(bw){var bv=bj[bw.elementId];if(!bv){bv={type:"Continuous",compute:function(bx){return ai[bx.element.id]||[0,0]},getCurrentLocation:function(bx){return ai[bx.id]||[0,0]},getOrientation:function(bx){return aJ[bx.id]||[0,0]},isDynamic:true,isContinuous:true};bj[bw.elementId]=bv}return bv}};var aV=function(){var by={},bx=[],bw={},bv={};this.register=function(bB){var bA=p.CurrentLibrary;bB=bA.getElementObject(bB);var bD=bn.getId(bB),bz=bA.getDOMElement(bB);if(!by[bD]){by[bD]=bB;bx.push(bB);bw[bD]={}}var bC=function(bH){var bK=bA.getElementObject(bH),bJ=bA.getOffset(bK);for(var bE=0;bE<bH.childNodes.length;bE++){if(bH.childNodes[bE].nodeType!=3){var bG=bA.getElementObject(bH.childNodes[bE]),bI=bn.getId(bG,null,true);if(bI&&bv[bI]&&bv[bI]>0){var bF=bA.getOffset(bG);bw[bD][bI]={id:bI,offset:{left:bF.left-bJ.left,top:bF.top-bJ.top}}}}}};bC(bz)};this.endpointAdded=function(bB){var bF=p.CurrentLibrary,bI=document.body,bz=bn.getId(bB),bH=bF.getDOMElement(bB),bA=bH.parentNode,bD=bA==bI;bv[bz]=bv[bz]?bv[bz]+1:1;while(bA!=bI){var bE=bn.getId(bA);if(by[bE]){var bK=-1,bG=bF.getElementObject(bA),bC=bF.getOffset(bG);if(bw[bE][bz]==null){var bJ=p.CurrentLibrary.getOffset(bB);bw[bE][bz]={id:bz,offset:{left:bJ.left-bC.left,top:bJ.top-bC.top}}}break}bA=bA.parentNode}};this.endpointDeleted=function(bA){if(bv[bA.elementId]){bv[bA.elementId]--;if(bv[bA.elementId]<=0){for(var bz in bw){delete bw[bz][bA.elementId]}}}};this.getElementsForDraggable=function(bz){return bw[bz]};this.reset=function(){by={};bx=[];bw={};bv={}}};bn.dragManager=new aV();var ax=function(bN){var bG=this,bx=true;bG.idPrefix="_jsplumb_c_";bG.defaultLabelLocation=0.5;bG.defaultOverlayKeys=["Overlays","ConnectionOverlays"];this.parent=bN.parent;z.apply(this,arguments);this.isVisible=function(){return bx};this.setVisible=function(bP){bx=bP;bG[bP?"showOverlays":"hideOverlays"]();if(bG.connector&&bG.connector.canvas){bG.connector.canvas.style.display=bP?"block":"none"}};this.source=F(bN.source);this.target=F(bN.target);if(bN.sourceEndpoint){this.source=bN.sourceEndpoint.endpointWillMoveTo||bN.sourceEndpoint.getElement()}if(bN.targetEndpoint){this.target=bN.targetEndpoint.getElement()}bG.previousConnection=bN.previousConnection;var bD=bN.cost;bG.getCost=function(){return bD};bG.setCost=function(bP){bD=bP};var bB=bN.bidirectional===false?false:true;bG.isBidirectional=function(){return bB};this.sourceId=d(this.source,"id");this.targetId=d(this.target,"id");this.getAttachedElements=function(){return bG.endpoints};this.scope=bN.scope;this.endpoints=[];this.endpointStyles=[];var bM=function(bQ,bP){if(bQ){return bn.makeAnchor(bQ,bP,bn)}},bK=function(bP,bV,bQ,bS,bT,bR,bU){if(bP){bG.endpoints[bV]=bP;bP.addConnection(bG)}else{if(!bQ.endpoints){bQ.endpoints=[null,null]}var b1=bQ.endpoints[bV]||bQ.endpoint||bn.Defaults.Endpoints[bV]||p.Defaults.Endpoints[bV]||bn.Defaults.Endpoint||p.Defaults.Endpoint;if(!bQ.endpointStyles){bQ.endpointStyles=[null,null]}if(!bQ.endpointHoverStyles){bQ.endpointHoverStyles=[null,null]}var bZ=bQ.endpointStyles[bV]||bQ.endpointStyle||bn.Defaults.EndpointStyles[bV]||p.Defaults.EndpointStyles[bV]||bn.Defaults.EndpointStyle||p.Defaults.EndpointStyle;if(bZ.fillStyle==null&&bR!=null){bZ.fillStyle=bR.strokeStyle}if(bZ.outlineColor==null&&bR!=null){bZ.outlineColor=bR.outlineColor}if(bZ.outlineWidth==null&&bR!=null){bZ.outlineWidth=bR.outlineWidth}var bY=bQ.endpointHoverStyles[bV]||bQ.endpointHoverStyle||bn.Defaults.EndpointHoverStyles[bV]||p.Defaults.EndpointHoverStyles[bV]||bn.Defaults.EndpointHoverStyle||p.Defaults.EndpointHoverStyle;if(bU!=null){if(bY==null){bY={}}if(bY.fillStyle==null){bY.fillStyle=bU.strokeStyle}}var bX=bQ.anchors?bQ.anchors[bV]:bQ.anchor?bQ.anchor:bM(bn.Defaults.Anchors[bV],bT)||bM(p.Defaults.Anchors[bV],bT)||bM(bn.Defaults.Anchor,bT)||bM(p.Defaults.Anchor,bT),b0=bQ.uuids?bQ.uuids[bV]:null,bW=aF({paintStyle:bZ,hoverPaintStyle:bY,endpoint:b1,connections:[bG],uuid:b0,anchor:bX,source:bS,scope:bQ.scope,container:bQ.container,reattach:bQ.reattach,detachable:bQ.detachable});bG.endpoints[bV]=bW;if(bQ.drawEndpoints===false){bW.setVisible(false,true,true)}return bW}};var bI=bK(bN.sourceEndpoint,0,bN,bG.source,bG.sourceId,bN.paintStyle,bN.hoverPaintStyle);if(bI){V(aT,this.sourceId,bI)}var by=((bG.sourceId==bG.targetId)&&bN.targetEndpoint==null)?bI:bN.targetEndpoint,bH=bK(by,1,bN,bG.target,bG.targetId,bN.paintStyle,bN.hoverPaintStyle);if(bH){V(aT,this.targetId,bH)}if(!this.scope){this.scope=this.endpoints[0].scope}if(bN.deleteEndpointsOnDetach){bG.endpointsToDeleteOnDetach=[bI,bH]}var bw=bn.Defaults.ConnectionsDetachable;if(bN.detachable===false){bw=false}if(bG.endpoints[0].connectionsDetachable===false){bw=false}if(bG.endpoints[1].connectionsDetachable===false){bw=false}if(bD==null){bD=bG.endpoints[0].getConnectionCost()}if(bN.bidirectional==null){bB=bG.endpoints[0].areConnectionsBidirectional()}this.isDetachable=function(){return bw===true};this.setDetachable=function(bP){bw=bP===true};var bO=p.extend({},this.endpoints[0].getParameters());p.extend(bO,this.endpoints[1].getParameters());p.extend(bO,bG.getParameters());bG.setParameters(bO);var bE=bG.setHover;bG.setHover=function(bP){bG.connector.setHover.apply(bG.connector,arguments);bE.apply(bG,arguments)};var bL=function(bP){if(x==null){bG.setHover(bP,false)}};this.setConnector=function(bP,bQ){if(bG.connector!=null){aX(bG.connector.getDisplayElements(),bG.parent)}var bR={_jsPlumb:bG._jsPlumb,parent:bN.parent,cssClass:bN.cssClass,container:bN.container,tooltip:bG.tooltip};if(C(bP)){this.connector=new p.Connectors[X][bP](bR)}else{if(n(bP)){this.connector=new p.Connectors[X][bP[0]](p.extend(bP[1],bR))}}bG.canvas=bG.connector.canvas;G(bG.connector,bG,bL);if(!bQ){bG.repaint()}};bG.setConnector(this.endpoints[0].connector||this.endpoints[1].connector||bN.connector||bn.Defaults.Connector||p.Defaults.Connector,true);this.setPaintStyle(this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||bN.paintStyle||bn.Defaults.PaintStyle||p.Defaults.PaintStyle,true);this.setHoverPaintStyle(this.endpoints[0].connectorHoverStyle||this.endpoints[1].connectorHoverStyle||bN.hoverPaintStyle||bn.Defaults.HoverPaintStyle||p.Defaults.HoverPaintStyle,true);this.paintStyleInUse=this.getPaintStyle();this.moveParent=function(bS){var bR=p.CurrentLibrary,bQ=bR.getParent(bG.connector.canvas);if(bG.connector.bgCanvas){bR.removeElement(bG.connector.bgCanvas,bQ);bR.appendElement(bG.connector.bgCanvas,bS)}bR.removeElement(bG.connector.canvas,bQ);bR.appendElement(bG.connector.canvas,bS);for(var bP=0;bP<bG.overlays.length;bP++){if(bG.overlays[bP].isAppendedAtTopLevel){bR.removeElement(bG.overlays[bP].canvas,bQ);bR.appendElement(bG.overlays[bP].canvas,bS);if(bG.overlays[bP].reattachListeners){bG.overlays[bP].reattachListeners(bG.connector)}}}if(bG.connector.reattachListeners){bG.connector.reattachListeners()}};W({elId:this.sourceId});W({elId:this.targetId});var bA=ah[this.sourceId],bz=ae[this.sourceId],bv=ah[this.targetId],bC=ae[this.targetId],bF=r(),bJ=this.endpoints[0].anchor.compute({xy:[bA.left,bA.top],wh:bz,element:this.endpoints[0],elementId:this.endpoints[0].elementId,txy:[bv.left,bv.top],twh:bC,tElement:this.endpoints[1],timestamp:bF});this.endpoints[0].paint({anchorLoc:bJ,timestamp:bF});bJ=this.endpoints[1].anchor.compute({xy:[bv.left,bv.top],wh:bC,element:this.endpoints[1],elementId:this.endpoints[1].elementId,txy:[bA.left,bA.top],twh:bz,tElement:this.endpoints[0],timestamp:bF});this.endpoints[1].paint({anchorLoc:bJ,timestamp:bF});this.paint=function(b6){b6=b6||{};var bX=b6.elId,bY=b6.ui,bV=b6.recalc,bQ=b6.timestamp,bZ=false,b5=bZ?this.sourceId:this.targetId,bU=bZ?this.targetId:this.sourceId,bR=bZ?0:1,b7=bZ?1:0;var b8=W({elId:bX,offset:bY,recalc:bV,timestamp:bQ}),bW=W({elId:b5,timestamp:bQ});var b1=this.endpoints[b7],bP=this.endpoints[bR],bT=b1.anchor.getCurrentLocation(b1),b4=bP.anchor.getCurrentLocation(bP);var bS=0;for(var b3=0;b3<bG.overlays.length;b3++){var b0=bG.overlays[b3];if(b0.isVisible()){bS=Math.max(bS,b0.computeMaxSize(bG.connector))}}var b2=this.connector.compute(bT,b4,this.endpoints[b7],this.endpoints[bR],this.endpoints[b7].anchor,this.endpoints[bR].anchor,bG.paintStyleInUse.lineWidth,bS,b8,bW);bG.connector.paint(b2,bG.paintStyleInUse);for(var b3=0;b3<bG.overlays.length;b3++){var b0=bG.overlays[b3];if(b0.isVisible){bG.overlayPlacements[b3]=b0.draw(bG.connector,bG.paintStyleInUse,b2)}}};this.repaint=function(bQ){bQ=bQ||{};var bP=!(bQ.recalc===false);this.paint({elId:this.sourceId,recalc:bP,timestamp:bQ.timestamp})}};var bc=function(bw){var bv=false;return{drag:function(){if(bv){bv=false;return true}var bx=p.CurrentLibrary.getUIPosition(arguments),by=bw.element;if(by){p.CurrentLibrary.setOffset(by,bx);ba(F(by),bx)}},stopDrag:function(){bv=true}}};var at=function(bz,by,bA,bx,bv){var bw=new a1({reference:by,referenceCanvas:bx});return aF({paintStyle:bz,endpoint:bA,anchor:bw,source:bv,scope:"__floating"})};var R=function(bx,bv){var bz=document.createElement("div");bz.style.position="absolute";var bw=F(bz);aW(bz,bv);var by=K(bw);W({elId:by});bx.id=by;bx.element=bw};var af=function(b0){var bO=this;bO.idPrefix="_jsplumb_e_";bO.defaultLabelLocation=[0.5,0.5];bO.defaultOverlayKeys=["Overlays","EndpointOverlays"];this.parent=b0.parent;z.apply(this,arguments);b0=b0||{};var bA=true,by=!(b0.enabled===false);this.isVisible=function(){return bA};this.setVisible=function(b3,b6,b2){bA=b3;if(bO.canvas){bO.canvas.style.display=b3?"block":"none"}bO[b3?"showOverlays":"hideOverlays"]();if(!b6){for(var b5=0;b5<bO.connections.length;b5++){bO.connections[b5].setVisible(b3);if(!b2){var b4=bO===bO.connections[b5].endpoints[0]?1:0;if(bO.connections[b5].endpoints[b4].connections.length==1){bO.connections[b5].endpoints[b4].setVisible(b3,true,true)}}}}};this.isEnabled=function(){return by};this.setEnabled=function(b2){by=b2};var bN=b0.source,bH=b0.uuid,bY=null,bC=null;if(bH){aU[bH]=bO}var bF=d(bN,"id");this.elementId=bF;this.element=bN;var bx=b0.connectionCost;this.getConnectionCost=function(){return bx};this.setConnectionCost=function(b2){bx=b2};var bX=b0.connectionsBidirectional===false?false:true;this.areConnectionsBidirectional=function(){return bX};this.setConnectionsBidirectional=function(b2){bX=b2};bO.anchor=b0.anchor?bn.makeAnchor(b0.anchor,bF,bn):b0.anchors?bn.makeAnchor(b0.anchors,bF,bn):bn.makeAnchor("TopCenter",bF,bn);if(!b0._transient){bn.anchorManager.add(bO,bF)}var bL=null,bQ=null;this.setEndpoint=function(b2){var b3={_jsPlumb:bO._jsPlumb,parent:b0.parent,container:b0.container,tooltip:b0.tooltip,connectorTooltip:b0.connectorTooltip,endpoint:bO};if(C(b2)){bL=new p.Endpoints[X][b2](b3)}else{if(n(b2)){b3=p.extend(b2[1],b3);bL=new p.Endpoints[X][b2[0]](b3)}else{bL=b2.clone()}}var b4=p.extend({},b3);bL.clone=function(){var b5=new Object();bL.constructor.apply(b5,[b4]);return b5};bO.endpoint=bL;bO.type=bO.endpoint.type};this.setEndpoint(b0.endpoint||bn.Defaults.Endpoint||p.Defaults.Endpoint||"Dot");bQ=bL;var bM=bO.setHover;bO.setHover=function(){bO.endpoint.setHover.apply(bO.endpoint,arguments);bM.apply(bO,arguments)};var b1=function(b2){if(bO.connections.length>0){bO.connections[0].setHover(b2,false)}else{bO.setHover(b2)}};G(bO.endpoint,bO,b1);this.setPaintStyle(b0.paintStyle||b0.style||bn.Defaults.EndpointStyle||p.Defaults.EndpointStyle,true);this.setHoverPaintStyle(b0.hoverPaintStyle||bn.Defaults.EndpointHoverStyle||p.Defaults.EndpointHoverStyle,true);this.paintStyleInUse=this.getPaintStyle();var bJ=this.getPaintStyle();this.connectorStyle=b0.connectorStyle;this.connectorHoverStyle=b0.connectorHoverStyle;this.connectorOverlays=b0.connectorOverlays;this.connector=b0.connector;this.connectorTooltip=b0.connectorTooltip;this.isSource=b0.isSource||false;this.isTarget=b0.isTarget||false;var bU=b0.maxConnections||bn.Defaults.MaxConnections;this.getAttachedElements=function(){return bO.connections};this.canvas=this.endpoint.canvas;this.connections=b0.connections||[];this.scope=b0.scope||Q;this.timestamp=null;bO.isReattach=b0.reattach||false;bO.connectionsDetachable=bn.Defaults.ConnectionsDetachable;if(b0.connectionsDetachable===false||b0.detachable===false){bO.connectionsDetachable=false}var bI=b0.dragAllowedWhenFull||true;this.computeAnchor=function(b2){return bO.anchor.compute(b2)};this.addConnection=function(b2){bO.connections.push(b2)};this.detach=function(b3,b8,b4,cb,b2){var ca=i(bO.connections,function(cd){return cd.id==b3.id}),b9=false;cb=(cb!==false);if(ca>=0){if(b4||b3._forceDetach||b3.isDetachable()||b3.isDetachAllowed(b3)){var cc=b3.endpoints[0]==bO?b3.endpoints[1]:b3.endpoints[0];if(b4||b3._forceDetach||(bO.isDetachAllowed(b3))){bO.connections.splice(ca,1);if(!b8){cc.detach(b3,true,b4);if(b3.endpointsToDeleteOnDetach){for(var b7=0;b7<b3.endpointsToDeleteOnDetach.length;b7++){var b5=b3.endpointsToDeleteOnDetach[b7];if(b5&&b5.connections.length==0){bn.deleteEndpoint(b5)}}}}aX(b3.connector.getDisplayElements(),b3.parent);D(aY[b3.scope],function(cd){return cd.id==b3.id});b9=true;var b6=(!b8&&cb);a7(b3,b6,b2)}}}return b9};this.detachAll=function(b3,b2){while(bO.connections.length>0){bO.detach(bO.connections[0],false,true,b3,b2)}};this.detachFrom=function(b5,b4,b2){var b6=[];for(var b3=0;b3<bO.connections.length;b3++){if(bO.connections[b3].endpoints[1]==b5||bO.connections[b3].endpoints[0]==b5){b6.push(bO.connections[b3])}}for(var b3=0;b3<b6.length;b3++){if(bO.detach(b6[b3],false,true,b4,b2)){b6[b3].setHover(false,false)}}};this.detachFromConnection=function(b3){var b2=i(bO.connections,function(b4){return b4.id==b3.id});if(b2>=0){bO.connections.splice(b2,1)}};this.getElement=function(){return bN};this.setElement=function(b5,b2){var b7=K(b5);D(aT[bO.elementId],function(b8){return b8.id==bO.id});bN=F(b5);bF=K(bN);bO.elementId=bF;var b6=aw({source:b7,container:b2}),b4=bz.getParent(bO.canvas);bz.removeElement(bO.canvas,b4);bz.appendElement(bO.canvas,b6);for(var b3=0;b3<bO.connections.length;b3++){bO.connections[b3].moveParent(b6);bO.connections[b3].sourceId=bF;bO.connections[b3].source=bN}V(aT,b7,bO)};this.getUuid=function(){return bH};this.makeInPlaceCopy=function(){var b4=bO.anchor.getCurrentLocation(bO),b3=bO.anchor.getOrientation(bO),b2={compute:function(){return[b4[0],b4[1]]},getCurrentLocation:function(){return[b4[0],b4[1]]},getOrientation:function(){return b3}};return aF({anchor:b2,source:bN,paintStyle:this.getPaintStyle(),endpoint:bL,_transient:true,scope:bO.scope})};this.isConnectedTo=function(b4){var b3=false;if(b4){for(var b2=0;b2<bO.connections.length;b2++){if(bO.connections[b2].endpoints[1]==b4){b3=true;break}}}return b3};this.isFloating=function(){return bY!=null};this.connectorSelector=function(){var b2=bO.connections[0];if(bO.isTarget&&b2){return b2}else{return(bO.connections.length<bU)||bU==-1?null:b2}};this.isFull=function(){return !(bO.isFloating()||bU<1||bO.connections.length<bU)};this.setDragAllowedWhenFull=function(b2){bI=b2};this.setStyle=bO.setPaintStyle;this.equals=function(b2){return this.anchor.equals(b2.anchor)};var bK=function(b3){var b2=0;if(b3!=null){for(var b4=0;b4<bO.connections.length;b4++){if(bO.connections[b4].sourceId==b3||bO.connections[b4].targetId==b3){b2=b4;break}}}return bO.connections[b2]};this.paint=function(b5){b5=b5||{};var cb=b5.timestamp,ca=!(b5.recalc===false);if(!cb||bO.timestamp!==cb){W({elId:bF,timestamp:cb,recalc:ca});var ch=b5.offset||ah[bF];if(ch){var b8=b5.anchorPoint,b6=b5.connectorPaintStyle;if(b8==null){var b2=b5.dimensions||ae[bF];if(ch==null||b2==null){W({elId:bF,timestamp:cb});ch=ah[bF];b2=ae[bF]}var b4={xy:[ch.left,ch.top],wh:b2,element:bO,timestamp:cb};if(ca&&bO.anchor.isDynamic&&bO.connections.length>0){var ce=bK(b5.elementWithPrecedence),cg=ce.endpoints[0]==bO?1:0,b7=cg==0?ce.sourceId:ce.targetId,cd=ah[b7],cf=ae[b7];b4.txy=[cd.left,cd.top];b4.twh=cf;b4.tElement=ce.endpoints[cg]}b8=bO.anchor.compute(b4)}var cc=bL.compute(b8,bO.anchor.getOrientation(bO),bO.paintStyleInUse,b6||bO.paintStyleInUse);bL.paint(cc,bO.paintStyleInUse,bO.anchor);bO.timestamp=cb;for(var b9=0;b9<bO.overlays.length;b9++){var b3=bO.overlays[b9];if(b3.isVisible){bO.overlayPlacements[b9]=b3.draw(bO.endpoint,bO.paintStyleInUse,cc)}}}}};this.repaint=this.paint;this.removeConnection=this.detach;if(p.CurrentLibrary.isDragSupported(bN)){var bT={id:null,element:null},bS=null,bw=false,bB=null,bv=bc(bT);var bD=function(){bS=bO.connectorSelector();var b2=true;if(!bO.isEnabled()){b2=false}if(bS==null&&!b0.isSource){b2=false}if(b0.isSource&&bO.isFull()&&!bI){b2=false}if(bS!=null&&!bS.isDetachable()){b2=false}if(b2===false){if(p.CurrentLibrary.stopDrag){p.CurrentLibrary.stopDrag()}bv.stopDrag();return false}if(bS&&!bO.isFull()&&b0.isSource){bS=null}W({elId:bF});bC=bO.makeInPlaceCopy();bC.paint();R(bT,bO.parent);var b8=F(bC.canvas),b6=p.CurrentLibrary.getOffset(b8),b3=bo([b6.left,b6.top],bC.canvas);p.CurrentLibrary.setOffset(bT.element,{left:b3[0],top:b3[1]});if(bO.parentAnchor){bO.anchor=bn.makeAnchor(bO.parentAnchor,bO.elementId,bn)}f(F(bO.canvas),"dragId",bT.id);f(F(bO.canvas),"elId",bF);if(b0.proxy){bO.setPaintStyle(b0.proxy.paintStyle)}bY=at(bO.getPaintStyle(),bO.anchor,bL,bO.canvas,bT.element);if(bS==null){bO.anchor.locked=true;bO.setHover(false,false);bS=ad({sourceEndpoint:bO,targetEndpoint:bY,source:bO.endpointWillMoveTo||F(bN),target:bT.element,anchors:[bO.anchor,bY.anchor],paintStyle:b0.connectorStyle,hoverPaintStyle:b0.connectorHoverStyle,connector:b0.connector,overlays:b0.connectorOverlays})}else{bw=true;bS.connector.setHover(false,false);bE(F(bC.canvas),false,true);var b5=bS.endpoints[0].id==bO.id?0:1;bS.floatingAnchorIndex=b5;bO.detachFromConnection(bS);var b9=F(bO.canvas),b7=p.CurrentLibrary.getDragScope(b9);f(b9,"originalScope",b7);var b4=p.CurrentLibrary.getDropScope(b9);p.CurrentLibrary.setDragScope(b9,b4);if(b5==0){bB=[bS.source,bS.sourceId,bW,b7];bS.source=bT.element;bS.sourceId=bT.id}else{bB=[bS.target,bS.targetId,bW,b7];bS.target=bT.element;bS.targetId=bT.id}bS.endpoints[b5==0?1:0].anchor.locked=true;bS.suspendedEndpoint=bS.endpoints[b5];bS.suspendedEndpoint.setHover(false);bS.endpoints[b5]=bY;a4(bS)}bf[bT.id]=bS;bY.addConnection(bS);V(aT,bT.id,bY);bn.currentlyDragging=true};var bz=p.CurrentLibrary,bV=b0.dragOptions||{},bP=p.extend({},bz.defaultDragOptions),bR=bz.dragEvents.start,bZ=bz.dragEvents.stop,bG=bz.dragEvents.drag;bV=p.extend(bP,bV);bV.scope=bV.scope||bO.scope;bV[bR]=am(bV[bR],bD);bV[bG]=am(bV[bG],bv.drag);bV[bZ]=am(bV[bZ],function(){var b3=bz.getDropEvent(arguments);bn.currentlyDragging=false;D(aT[bT.id],function(b4){return b4.id==bY.id});aX([bT.element[0],bY.canvas],bN);au(bC.canvas,bN);bn.anchorManager.clearFor(bT.id);var b2=bS.floatingAnchorIndex==null?1:bS.floatingAnchorIndex;bS.endpoints[b2==0?1:0].anchor.locked=false;bO.setPaintStyle(bJ);if(bS.endpoints[b2]==bY){if(bw&&bS.suspendedEndpoint){if(b2==0){bS.source=bB[0];bS.sourceId=bB[1]}else{bS.target=bB[0];bS.targetId=bB[1]}p.CurrentLibrary.setDragScope(bB[2],bB[3]);bS.endpoints[b2]=bS.suspendedEndpoint;if(bO.isReattach||bS._forceDetach||!bS.endpoints[b2==0?1:0].detach(bS,false,false,true,b3)){bS.setHover(false);bS.floatingAnchorIndex=null;bS.suspendedEndpoint.addConnection(bS);bn.repaint(bB[1])}bS._forceDetach=null}else{aX(bS.connector.getDisplayElements(),bO.parent);bO.detachFromConnection(bS)}}bO.anchor.locked=false;bO.paint({recalc:false});bS.setHover(false,false);aR(bS);bS=null;bC=null;delete aT[bY.elementId];bY.anchor=null;bY=null;bn.currentlyDragging=false});var bW=F(bO.canvas);p.CurrentLibrary.initDraggable(bW,bV,true)}var bE=function(b4,b9,b7,ca){if((b0.isTarget||b9)&&p.CurrentLibrary.isDropSupported(bN)){var b5=b0.dropOptions||bn.Defaults.DropOptions||p.Defaults.DropOptions;b5=p.extend({},b5);b5.scope=b5.scope||bO.scope;var b3=p.CurrentLibrary.dragEvents.drop,b8=p.CurrentLibrary.dragEvents.over,b2=p.CurrentLibrary.dragEvents.out,b6=function(){var cb=p.CurrentLibrary.getDropEvent(arguments),co=F(p.CurrentLibrary.getDragObject(arguments)),cc=d(co,"dragId"),cf=d(co,"elId"),cn=d(co,"originalScope"),ci=bf[cc];if(ci!=null){var ck=ci.floatingAnchorIndex==null?1:ci.floatingAnchorIndex,cl=ck==0?1:0;if(cn){p.CurrentLibrary.setDragScope(co,cn)}var cm=ca!=null?ca.isEnabled():true;if(!bO.isFull()&&!(ck==0&&!bO.isSource)&&!(ck==1&&!bO.isTarget)&&cm){var cg=true;if(ci.suspendedEndpoint&&ci.suspendedEndpoint.id!=bO.id){if(ck==0){ci.source=ci.suspendedEndpoint.element;ci.sourceId=ci.suspendedEndpoint.elementId}else{ci.target=ci.suspendedEndpoint.element;ci.targetId=ci.suspendedEndpoint.elementId}if(!ci.isDetachAllowed(ci)||!ci.endpoints[ck].isDetachAllowed(ci)||!ci.suspendedEndpoint.isDetachAllowed(ci)||!bn.checkCondition("beforeDetach",ci)){cg=false}}if(ck==0){ci.source=bO.element;ci.sourceId=bO.elementId}else{ci.target=bO.element;ci.targetId=bO.elementId}cg=cg&&bO.isDropAllowed(ci.sourceId,ci.targetId,ci.scope,ci,bO);if(cg){ci.endpoints[ck].detachFromConnection(ci);if(ci.suspendedEndpoint){ci.suspendedEndpoint.detachFromConnection(ci)}ci.endpoints[ck]=bO;bO.addConnection(ci);var ce=bO.getParameters();for(var cj in ce){ci.setParameter(cj,ce[cj])}if(!ci.suspendedEndpoint){if(ce.draggable){p.CurrentLibrary.initDraggable(bO.element,bV,true)}}else{var ch=ci.suspendedEndpoint.getElement(),cd=ci.suspendedEndpoint.elementId;a7({source:ck==0?ch:ci.source,target:ck==1?ch:ci.target,sourceId:ck==0?cd:ci.sourceId,targetId:ck==1?cd:ci.targetId,sourceEndpoint:ck==0?ci.suspendedEndpoint:ci.endpoints[0],targetEndpoint:ck==1?ci.suspendedEndpoint:ci.endpoints[1],connection:ci},true,cb)}bt(ci,null,cb)}else{if(ci.suspendedEndpoint){ci.endpoints[ck]=ci.suspendedEndpoint;ci.setHover(false);ci._forceDetach=true;if(ck==0){ci.source=ci.suspendedEndpoint.element;ci.sourceId=ci.suspendedEndpoint.elementId}else{ci.target=ci.suspendedEndpoint.element;ci.targetId=ci.suspendedEndpoint.elementId}ci.suspendedEndpoint.addConnection(ci);ci.endpoints[0].repaint();ci.repaint();bn.repaint(ci.source.elementId);ci._forceDetach=false}}ci.floatingAnchorIndex=null}bn.currentlyDragging=false;delete bf[cc]}};b5[b3]=am(b5[b3],b6);b5[b8]=am(b5[b8],function(){if(bO.isTarget){var cc=p.CurrentLibrary.getDragObject(arguments),ce=d(F(cc),"dragId"),cd=bf[ce];if(cd!=null){var cb=cd.floatingAnchorIndex==null?1:cd.floatingAnchorIndex;cd.endpoints[cb].anchor.over(bO.anchor)}}});b5[b2]=am(b5[b2],function(){if(bO.isTarget){var cc=p.CurrentLibrary.getDragObject(arguments),ce=d(F(cc),"dragId"),cd=bf[ce];if(cd!=null){var cb=cd.floatingAnchorIndex==null?1:cd.floatingAnchorIndex;cd.endpoints[cb].anchor.out()}}});p.CurrentLibrary.initDroppable(b4,b5,true,b7)}};bE(F(bO.canvas),true,!(b0._transient||bO.anchor.isFloating),bO);return bO}};var p=window.jsPlumb=new y();p.getInstance=function(L){var K=new y(L);K.init();return K};var s=function(K,P,M,L,O,N){return function(R){R=R||{};var Q=R.jsPlumbInstance.makeAnchor([K,P,M,L,0,0],R.elementId,R.jsPlumbInstance);Q.type=O;if(N){N(Q,R)}return Q}};p.Anchors.TopCenter=s(0.5,0,0,-1,"TopCenter");p.Anchors.BottomCenter=s(0.5,1,0,1,"BottomCenter");p.Anchors.LeftMiddle=s(0,0.5,-1,0,"LeftMiddle");p.Anchors.RightMiddle=s(1,0.5,1,0,"RightMiddle");p.Anchors.Center=s(0.5,0.5,0,0,"Center");p.Anchors.TopRight=s(1,0,0,-1,"TopRight");p.Anchors.BottomRight=s(1,1,0,1,"BottomRight");p.Anchors.TopLeft=s(0,0,0,-1,"TopLeft");p.Anchors.BottomLeft=s(0,1,0,1,"BottomLeft");p.Defaults.DynamicAnchors=function(K){return K.jsPlumbInstance.makeAnchors(["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],K.elementId,K.jsPlumbInstance)};p.Anchors.AutoDefault=function(L){var K=L.jsPlumbInstance.makeDynamicAnchor(p.Defaults.DynamicAnchors(L));K.type="AutoDefault";return K};p.Anchors.Assign=s(0,0,0,0,"Assign",function(L,M){var K=M.position||"Fixed";L.positionFinder=K.constructor==String?M.jsPlumbInstance.AnchorPositionFinders[K]:K;L.constructorParams=M});p.Anchors.Continuous=function(K){return K.jsPlumbInstance.continuousAnchorFactory.get(K)};p.AnchorPositionFinders={Fixed:function(N,K,M,L){return[(N.left-K.left)/M[0],(N.top-K.top)/M[1]]},Grid:function(K,T,O,L){var S=K.left-T.left,R=K.top-T.top,Q=O[0]/(L.grid[0]),P=O[1]/(L.grid[1]),N=Math.floor(S/Q),M=Math.floor(R/P);return[((N*Q)+(Q/2))/O[0],((M*P)+(P/2))/O[1]]}}})();(function(){jsPlumb.DOMElementComponent=function(c){jsPlumb.jsPlumbUIComponent.apply(this,arguments);this.mousemove=this.dblclick=this.click=this.mousedown=this.mouseup=function(d){}};jsPlumb.Connectors.Straight=function(){this.type="Straight";var r=this,i=null,e,k,p,n,l,f,q,h,g,d,c,o,m;this.compute=function(A,J,s,z,F,t,D,v){var I=Math.abs(A[0]-J[0]),C=Math.abs(A[1]-J[1]),B=0.45*I,u=0.45*C;I*=1.9;C*=1.9;var G=Math.min(A[0],J[0])-B;var E=Math.min(A[1],J[1])-u;var H=Math.max(2*D,v);if(I<H){I=H;G=A[0]+((J[0]-A[0])/2)-(H/2);B=(I-Math.abs(A[0]-J[0]))/2}if(C<H){C=H;E=A[1]+((J[1]-A[1])/2)-(H/2);u=(C-Math.abs(A[1]-J[1]))/2}h=A[0]<J[0]?B:I-B;g=A[1]<J[1]?u:C-u;d=A[0]<J[0]?I-B:B;c=A[1]<J[1]?C-u:u;i=[G,E,I,C,h,g,d,c];n=d-h,l=c-g;e=jsPlumbUtil.gradient({x:h,y:g},{x:d,y:c}),k=-1/e;p=-1*((e*h)-g);f=Math.atan(e);q=Math.atan(k);m=Math.sqrt((n*n)+(l*l));return i};this.pointOnPath=function(t,u){if(t==0&&!u){return{x:h,y:g}}else{if(t==1&&!u){return{x:d,y:c}}else{var s=u?t>0?t:m+t:t*m;return jsPlumbUtil.pointOnLine({x:h,y:g},{x:d,y:c},s)}}};this.gradientAtPoint=function(s){return e};this.pointAlongPathFrom=function(s,w,v){var u=r.pointOnPath(s,v),t=s==1?{x:h+((d-h)*10),y:g+((g-c)*10)}:{x:d,y:c};return jsPlumbUtil.pointOnLine(u,t,w)}};jsPlumb.Connectors.Bezier=function(v){var p=this;v=v||{};this.majorAnchor=v.curviness||150;this.minorAnchor=10;var t=null;this.type="Bezier";this._findControlPoint=function(H,w,C,x,A,F,y){var E=F.getOrientation(x),G=y.getOrientation(A),B=E[0]!=G[0]||E[1]==G[1],z=[],I=p.majorAnchor,D=p.minorAnchor;if(!B){if(E[0]==0){z.push(w[0]<C[0]?H[0]+D:H[0]-D)}else{z.push(H[0]-(I*E[0]))}if(E[1]==0){z.push(w[1]<C[1]?H[1]+D:H[1]-D)}else{z.push(H[1]+(I*G[1]))}}else{if(G[0]==0){z.push(C[0]<w[0]?H[0]+D:H[0]-D)}else{z.push(H[0]+(I*G[0]))}if(G[1]==0){z.push(C[1]<w[1]?H[1]+D:H[1]-D)}else{z.push(H[1]+(I*E[1]))}}return z};var q,l,f,o,n,f,e,s,r,u,d,h,g,k,i;this.compute=function(S,z,M,A,Q,x,w,L){w=w||0;u=Math.abs(S[0]-z[0])+w;d=Math.abs(S[1]-z[1])+w;s=Math.min(S[0],z[0])-(w/2);r=Math.min(S[1],z[1])-(w/2);f=S[0]<z[0]?u-(w/2):(w/2);e=S[1]<z[1]?d-(w/2):(w/2);o=S[0]<z[0]?(w/2):u-(w/2);n=S[1]<z[1]?(w/2):d-(w/2);q=p._findControlPoint([f,e],S,z,M,A,Q,x);l=p._findControlPoint([o,n],z,S,A,M,x,Q);var K=Math.min(f,o),J=Math.min(q[0],l[0]),F=Math.min(K,J),R=Math.max(f,o),O=Math.max(q[0],l[0]),C=Math.max(R,O);if(C>u){u=C}if(F<0){s+=F;var H=Math.abs(F);u+=H;q[0]+=H;f+=H;o+=H;l[0]+=H}var P=Math.min(e,n),N=Math.min(q[1],l[1]),B=Math.min(P,N),G=Math.max(e,n),E=Math.max(q[1],l[1]),y=Math.max(G,E);if(y>d){d=y}if(B<0){r+=B;var D=Math.abs(B);d+=D;q[1]+=D;e+=D;n+=D;l[1]+=D}if(L&&u<L){var I=(L-u)/2;u=L;s-=I;f=f+I;o=o+I;q[0]=q[0]+I;l[0]=l[0]+I}if(L&&d<L){var I=(L-d)/2;d=L;r-=I;e=e+I;n=n+I;q[1]=q[1]+I;l[1]=l[1]+I}t=[s,r,u,d,f,e,o,n,q[0],q[1],l[0],l[1]];return t};var c=function(){return[{x:f,y:e},{x:q[0],y:q[1]},{x:l[0],y:l[1]},{x:o,y:n}]};var m=function(x,w,y){if(y){w=jsBezier.locationAlongCurveFrom(x,w>0?0:1,w)}return w};this.pointOnPath=function(w,y){var x=c();w=m(x,w,y);return jsBezier.pointOnCurve(x,w)};this.gradientAtPoint=function(w,y){var x=c();w=m(x,w,y);return jsBezier.gradientAtPoint(x,w)};this.pointAlongPathFrom=function(w,z,y){var x=c();w=m(x,w,y);return jsBezier.pointAlongCurveFrom(x,w,z)}};jsPlumb.Connectors.Flowchart=function(v){this.type="Flowchart";v=v||{};var n=this,c=v.stub||v.minStubLength||30,f=jsPlumbUtil.isArray(c)?c[0]:c,k=jsPlumbUtil.isArray(c)?c[1]:c,p=v.gap||0,q=[],i=0,d=[],m=[],r=[],o,l,u=-Infinity,s=-Infinity,w=Infinity,t=Infinity,x=function(z,y,D,C){var B=0;for(var A=0;A<q.length;A++){m[A]=q[A][5]/i;d[A]=[B,(B+=(q[A][5]/i))]}},h=function(){r.push(q.length);for(var y=0;y<q.length;y++){r.push(q[y][0]);r.push(q[y][1])}},g=function(I,F,H,G,E,D){var A=q.length==0?H:q[q.length-1][0],z=q.length==0?G:q[q.length-1][1],B=I==A?Infinity:0,C=Math.abs(I==A?F-z:I-A);q.push([I,F,A,z,B,C]);i+=C;u=Math.max(u,I);s=Math.max(s,F);w=Math.min(w,I);t=Math.min(t,F)},e=function(A,C){if(C){A=A>0?A/i:(i+A)/i}var y=d.length-1,z=1;for(var B=0;B<d.length;B++){if(d[B][1]>=A){y=B;z=(A-d[B][0])/m[B];break}}return{segment:q[y],proportion:z,index:y}};this.compute=function(W,ak,z,Q,av,K,U,P,ap,am){q=[];d=[];i=0;m=[];u=s=-Infinity;w=t=Infinity;o=ak[0]<W[0];l=ak[1]<W[1];var aa=U||1,E=(aa/2)+(f+k),B=(aa/2)+(k+f),D=(aa/2)+(f+k),A=(aa/2)+(k+f),N=av.orientation||av.getOrientation(z),aw=K.orientation||K.getOrientation(Q),aj=o?ak[0]:W[0],ai=l?ak[1]:W[1],al=Math.abs(ak[0]-W[0])+E+B,au=Math.abs(ak[1]-W[1])+D+A;if(N[0]==0&&N[1]==0||aw[0]==0&&aw[1]==0){var ac=al>au?0:1,ae=[1,0][ac];N=[];aw=[];N[ac]=W[ac]>ak[ac]?-1:1;aw[ac]=W[ac]>ak[ac]?1:-1;N[ae]=0;aw[ae]=0}if(al<P){E+=(P-al)/2;al=P}if(au<P){D+=(P-au)/2;au=P}var I=o?(al-B)+(p*N[0]):E+(p*N[0]),H=l?(au-A)+(p*N[1]):D+(p*N[1]),ar=o?E+(p*aw[0]):(al-B)+(p*aw[0]),aq=l?D+(p*aw[1]):(au-A)+(p*aw[1]),Z=I+(N[0]*f),Y=H+(N[1]*f),L=ar+(aw[0]*k),J=aq+(aw[1]*k),V=Math.abs(I-ar)>(f+k),X=Math.abs(H-aq)>(f+k),ah=Z+((L-Z)/2),af=Y+((J-Y)/2),O=((N[0]*aw[0])+(N[1]*aw[1])),ab=O==-1,ad=O==0,C=O==1;aj-=E;ai-=D;r=[aj,ai,al,au,I,H,ar,aq];var ao=[];var S=N[0]==0?"y":"x",M=ab?"opposite":C?"orthogonal":"perpendicular",F=jsPlumbUtil.segment([I,H],[ar,aq]),ag=N[S=="x"?0:1]==-1,R={x:[null,4,3,2,1],y:[null,2,1,4,3]};if(ag){F=R[S][F]}g(Z,Y,I,H,ar,aq);var T=function(az,ay,y,ax){return az+(ay*((1-y)*ax)+Math.max(f,k))},G={oppositex:function(){if(z.elementId==Q.elementId){var y=Y+((1-av.y)*ap.height)+Math.max(f,k);return[[Z,y],[L,y]]}else{if(V&&(F==1||F==2)){return[[ah,H],[ah,aq]]}else{return[[Z,af],[L,af]]}}},orthogonalx:function(){if(F==1||F==2){return[[L,Y]]}else{return[[Z,J]]}},perpendicularx:function(){var y=(aq+H)/2;if((F==1&&aw[1]==1)||(F==2&&aw[1]==-1)){if(Math.abs(ar-I)>Math.max(f,k)){return[[L,Y]]}else{return[[Z,Y],[Z,y],[L,y]]}}else{if((F==3&&aw[1]==-1)||(F==4&&aw[1]==1)){return[[Z,y],[L,y]]}else{if((F==3&&aw[1]==1)||(F==4&&aw[1]==-1)){return[[Z,J]]}else{if((F==1&&aw[1]==-1)||(F==2&&aw[1]==1)){if(Math.abs(ar-I)>Math.max(f,k)){return[[ah,Y],[ah,J]]}else{return[[Z,J]]}}}}}},oppositey:function(){if(z.elementId==Q.elementId){var y=Z+((1-av.x)*ap.width)+Math.max(f,k);return[[y,Y],[y,J]]}else{if(X&&(F==2||F==3)){return[[I,af],[ar,af]]}else{return[[ah,Y],[ah,J]]}}},orthogonaly:function(){if(F==2||F==3){return[[Z,J]]}else{return[[L,Y]]}},perpendiculary:function(){var y=(ar+I)/2;if((F==2&&aw[0]==-1)||(F==3&&aw[0]==1)){if(Math.abs(ar-I)>Math.max(f,k)){return[[Z,J]]}else{return[[Z,af],[L,af]]}}else{if((F==1&&aw[0]==-1)||(F==4&&aw[0]==1)){var y=(ar+I)/2;return[[y,Y],[y,J]]}else{if((F==1&&aw[0]==1)||(F==4&&aw[0]==-1)){return[[L,Y]]}else{if((F==2&&aw[0]==1)||(F==3&&aw[0]==-1)){if(Math.abs(aq-H)>Math.max(f,k)){return[[Z,af],[L,af]]}else{return[[L,Y]]}}}}}}};var an=G[M+S]();if(an){for(var at=0;at<an.length;at++){g(an[at][0],an[at][1],I,H,ar,aq)}}g(L,J,I,H,ar,aq);g(ar,aq,I,H,ar,aq);h();x(I,H,ar,aq);if(s>r[3]){r[3]=s+(U*2)}if(u>r[2]){r[2]=u+(U*2)}return r};this.pointOnPath=function(y,z){return n.pointAlongPathFrom(y,0,z)};this.gradientAtPoint=function(y,z){return q[e(y,z)["index"]][4]};this.pointAlongPathFrom=function(F,y,E){var G=e(F,E),C=G.segment,z=G.proportion,B=q[G.index][5],A=q[G.index][4];var D={x:A==Infinity?C[2]:C[2]>C[0]?C[0]+((1-z)*B)-y:C[2]+(z*B)+y,y:A==0?C[3]:C[3]>C[1]?C[1]+((1-z)*B)-y:C[3]+(z*B)+y,segmentInfo:G};return D}};jsPlumb.Endpoints.Dot=function(d){this.type="Dot";var c=this;d=d||{};this.radius=d.radius||10;this.defaultOffset=0.5*this.radius;this.defaultInnerRadius=this.radius/3;this.compute=function(i,f,l,h){var g=l.radius||c.radius,e=i[0]-g,k=i[1]-g;return[e,k,g*2,g*2,g]}};jsPlumb.Endpoints.Rectangle=function(d){this.type="Rectangle";var c=this;d=d||{};this.width=d.width||20;this.height=d.height||20;this.compute=function(k,g,m,i){var h=m.width||c.width,f=m.height||c.height,e=k[0]-(h/2),l=k[1]-(f/2);return[e,l,h,f]}};var a=function(e){jsPlumb.DOMElementComponent.apply(this,arguments);var c=this;var d=[];this.getDisplayElements=function(){return d};this.appendDisplayElement=function(f){d.push(f)}};jsPlumb.Endpoints.Image=function(g){this.type="Image";a.apply(this,arguments);var l=this,f=false,e=g.width,d=g.height,i=null,c=g.endpoint;this.img=new Image();l.ready=false;this.img.onload=function(){l.ready=true;e=e||l.img.width;d=d||l.img.height;if(i){i(l)}};c.setImage=function(m,o){var n=m.constructor==String?m:m.src;i=o;l.img.src=m;if(l.canvas!=null){l.canvas.setAttribute("src",m)}};c.setImage(g.src||g.url,g.onload);this.compute=function(o,m,p,n){l.anchorPoint=o;if(l.ready){return[o[0]-e/2,o[1]-d/2,e,d]}else{return[0,0,0,0]}};l.canvas=document.createElement("img"),f=false;l.canvas.style.margin=0;l.canvas.style.padding=0;l.canvas.style.outline=0;l.canvas.style.position="absolute";var h=g.cssClass?" "+g.cssClass:"";l.canvas.className=jsPlumb.endpointClass+h;if(e){l.canvas.setAttribute("width",e)}if(d){l.canvas.setAttribute("height",d)}jsPlumb.appendElement(l.canvas,g.parent);l.attachListeners(l.canvas,l);var k=function(p,o,n){if(!f){l.canvas.setAttribute("src",l.img.src);l.appendDisplayElement(l.canvas);f=true}var m=l.anchorPoint[0]-(e/2),q=l.anchorPoint[1]-(d/2);jsPlumb.sizeCanvas(l.canvas,m,q,e,d)};this.paint=function(o,n,m){if(l.ready){k(o,n,m)}else{window.setTimeout(function(){l.paint(o,n,m)},200)}}};jsPlumb.Endpoints.Blank=function(d){var c=this;this.type="Blank";a.apply(this,arguments);this.compute=function(g,e,h,f){return[g[0],g[1],10,0]};c.canvas=document.createElement("div");c.canvas.style.display="block";c.canvas.style.width="1px";c.canvas.style.height="1px";c.canvas.style.background="transparent";c.canvas.style.position="absolute";c.canvas.className=c._jsPlumb.endpointClass;jsPlumb.appendElement(c.canvas,d.parent);this.paint=function(g,f,e){jsPlumb.sizeCanvas(c.canvas,g[0],g[1],g[2],g[3])}};jsPlumb.Endpoints.Triangle=function(c){this.type="Triangle";c=c||{};c.width=c.width||55;c.height=c.height||55;this.width=c.width;this.height=c.height;this.compute=function(i,f,l,h){var g=l.width||self.width,e=l.height||self.height,d=i[0]-(g/2),k=i[1]-(e/2);return[d,k,g,e]}};var b=function(e){var d=true,c=this;this.isAppendedAtTopLevel=true;this.component=e.component;this.loc=e.location==null?0.5:e.location;this.endpointLoc=e.endpointLocation==null?[0.5,0.5]:e.endpointLocation;this.setVisible=function(f){d=f;c.component.repaint()};this.isVisible=function(){return d};this.hide=function(){c.setVisible(false)};this.show=function(){c.setVisible(true)};this.incrementLocation=function(f){c.loc+=f;c.component.repaint()};this.setLocation=function(f){c.loc=f;c.component.repaint()};this.getLocation=function(){return c.loc}};jsPlumb.Overlays.Arrow=function(g){this.type="Arrow";b.apply(this,arguments);this.isAppendedAtTopLevel=false;g=g||{};var d=this;this.length=g.length||20;this.width=g.width||20;this.id=g.id;var f=(g.direction||1)<0?-1:1,e=g.paintStyle||{lineWidth:1},c=g.foldback||0.623;this.computeMaxSize=function(){return d.width*1.5};this.cleanup=function(){};this.draw=function(k,z,u){var o,v,h,p,n;if(k.pointAlongPathFrom){if(jsPlumbUtil.isString(d.loc)||d.loc>1||d.loc<0){var i=parseInt(d.loc);o=k.pointAlongPathFrom(i,f*d.length/2,true),v=k.pointOnPath(i,true),h=jsPlumbUtil.pointOnLine(o,v,d.length)}else{if(d.loc==1){o=k.pointOnPath(d.loc);v=k.pointAlongPathFrom(d.loc,-1);h=jsPlumbUtil.pointOnLine(o,v,d.length)}else{if(d.loc==0){h=k.pointOnPath(d.loc);v=k.pointAlongPathFrom(d.loc,1);o=jsPlumbUtil.pointOnLine(h,v,d.length)}else{o=k.pointAlongPathFrom(d.loc,f*d.length/2),v=k.pointOnPath(d.loc),h=jsPlumbUtil.pointOnLine(o,v,d.length)}}}p=jsPlumbUtil.perpendicularLineTo(o,h,d.width);n=jsPlumbUtil.pointOnLine(o,h,c*d.length);var y=Math.min(o.x,p[0].x,p[1].x),s=Math.max(o.x,p[0].x,p[1].x),x=Math.min(o.y,p[0].y,p[1].y),r=Math.max(o.y,p[0].y,p[1].y);var q={hxy:o,tail:p,cxy:n},t=e.strokeStyle||z.strokeStyle,w=e.fillStyle||z.strokeStyle,m=e.lineWidth||z.lineWidth;d.paint(k,q,m,t,w,u);return[y,s,x,r]}else{return[0,0,0,0]}}};jsPlumb.Overlays.PlainArrow=function(d){d=d||{};var c=jsPlumb.extend(d,{foldback:1});jsPlumb.Overlays.Arrow.call(this,c);this.type="PlainArrow"};jsPlumb.Overlays.Diamond=function(e){e=e||{};var c=e.length||40,d=jsPlumb.extend(e,{length:c/2,foldback:2});jsPlumb.Overlays.Arrow.call(this,d);this.type="Diamond"};jsPlumb.Overlays.Label=function(i){this.type="Label";jsPlumb.DOMElementComponent.apply(this,arguments);b.apply(this,arguments);this.labelStyle=i.labelStyle||jsPlumb.Defaults.LabelStyle;this.id=i.id;this.cachedDimensions=null;var e=i.label||"",c=this,f=false,k=document.createElement("div"),g=null;k.style.position="absolute";var d=i._jsPlumb.overlayClass+" "+(c.labelStyle.cssClass?c.labelStyle.cssClass:i.cssClass?i.cssClass:"");k.className=d;jsPlumb.appendElement(k,i.component.parent);jsPlumb.getId(k);c.attachListeners(k,c);c.canvas=k;var h=c.setVisible;c.setVisible=function(l){h(l);k.style.display=l?"block":"none"};this.getElement=function(){return k};this.cleanup=function(){if(k!=null){jsPlumb.CurrentLibrary.removeElement(k)}};this.setLabel=function(m){e=m;g=null;c.component.repaint()};this.getLabel=function(){return e};this.paint=function(l,n,m){if(!f){l.appendDisplayElement(k);c.attachListeners(k,l);f=true}k.style.left=(m[0]+n.minx)+"px";k.style.top=(m[1]+n.miny)+"px"};this.getTextDimensions=function(){if(typeof e=="function"){var l=e(c);k.innerHTML=l.replace(/\r\n/g,"<br/>")}else{if(g==null){g=e;k.innerHTML=g.replace(/\r\n/g,"<br/>")}}var n=jsPlumb.CurrentLibrary.getElementObject(k),m=jsPlumb.CurrentLibrary.getSize(n);return{width:m[0],height:m[1]}};this.computeMaxSize=function(l){var m=c.getTextDimensions(l);return m.width?Math.max(m.width,m.height)*1.5:0};this.draw=function(m,n,o){var s=c.getTextDimensions(m);if(s.width!=null){var p={x:0,y:0};if(m.pointOnPath){var q=c.loc,r=false;if(jsPlumbUtil.isString(c.loc)||c.loc<0||c.loc>1){q=parseInt(c.loc);r=true}p=m.pointOnPath(q,r)}else{var l=c.loc.constructor==Array?c.loc:c.endpointLoc;p={x:l[0]*o[2],y:l[1]*o[3]}}minx=p.x-(s.width/2),miny=p.y-(s.height/2);c.paint(m,{minx:minx,miny:miny,td:s,cxy:p},o);return[minx,minx+s.width,miny,miny+s.height]}else{return[0,0,0,0]}};this.reattachListeners=function(l){if(k){c.reattachListenersForElement(k,c,l)}}};jsPlumb.Overlays.GuideLines=function(){var c=this;c.length=50;c.lineWidth=5;this.type="GuideLines";b.apply(this,arguments);jsPlumb.jsPlumbUIComponent.apply(this,arguments);this.draw=function(e,l,k){var i=e.pointAlongPathFrom(c.loc,c.length/2),h=e.pointOnPath(c.loc),g=jsPlumbUtil.pointOnLine(i,h,c.length),f=jsPlumbUtil.perpendicularLineTo(i,g,40),d=jsPlumbUtil.perpendicularLineTo(g,i,20);c.paint(e,[i,g,f,d],c.lineWidth,"red",null,k);return[Math.min(i.x,g.x),Math.min(i.y,g.y),Math.max(i.x,g.x),Math.max(i.y,g.y)]};this.computeMaxSize=function(){return 50};this.cleanup=function(){}}})();(function(){var c=function(e,g,d,f){this.m=(f-g)/(d-e);this.b=-1*((this.m*e)-g);this.rectIntersect=function(q,p,s,o){var n=[];var k=(p-this.b)/this.m;if(k>=q&&k<=(q+s)){n.push([k,(this.m*k)+this.b])}var t=(this.m*(q+s))+this.b;if(t>=p&&t<=(p+o)){n.push([(t-this.b)/this.m,t])}var k=((p+o)-this.b)/this.m;if(k>=q&&k<=(q+s)){n.push([k,(this.m*k)+this.b])}var t=(this.m*q)+this.b;if(t>=p&&t<=(p+o)){n.push([(t-this.b)/this.m,t])}if(n.length==2){var m=(n[0][0]+n[1][0])/2,l=(n[0][1]+n[1][1])/2;n.push([m,l]);var i=m<=q+(s/2)?-1:1,r=l<=p+(o/2)?-1:1;n.push([i,r]);return n}return null}},a=function(e,g,d,f){if(e<=d&&f<=g){return 1}else{if(e<=d&&g<=f){return 2}else{if(d<=e&&f>=g){return 3}}}return 4},b=function(g,f,i,e,h,m,l,d,k){if(d<=k){return[g,f]}if(i==1){if(e[3]<=0&&h[3]>=1){return[g+(e[2]<0.5?-1*m:m),f]}else{if(e[2]>=1&&h[2]<=0){return[g,f+(e[3]<0.5?-1*l:l)]}else{return[g+(-1*m),f+(-1*l)]}}}else{if(i==2){if(e[3]>=1&&h[3]<=0){return[g+(e[2]<0.5?-1*m:m),f]}else{if(e[2]>=1&&h[2]<=0){return[g,f+(e[3]<0.5?-1*l:l)]}else{return[g+(1*m),f+(-1*l)]}}}else{if(i==3){if(e[3]>=1&&h[3]<=0){return[g+(e[2]<0.5?-1*m:m),f]}else{if(e[2]<=0&&h[2]>=1){return[g,f+(e[3]<0.5?-1*l:l)]}else{return[g+(-1*m),f+(-1*l)]}}}else{if(i==4){if(e[3]<=0&&h[3]>=1){return[g+(e[2]<0.5?-1*m:m),f]}else{if(e[2]<=0&&h[2]>=1){return[g,f+(e[3]<0.5?-1*l:l)]}else{return[g+(1*m),f+(-1*l)]}}}}}}};jsPlumb.Connectors.StateMachine=function(l){var u=this,n=null,o,m,g,e,p=[],d=l.curviness||10,k=l.margin||5,q=l.proximityLimit||80,f=l.orientation&&l.orientation=="clockwise",i=l.loopbackRadius||25,h=false,t=l.showLoopback!==false;this.type="StateMachine";l=l||{};this.compute=function(ad,H,W,I,ac,z,v,U){var Q=Math.abs(ad[0]-H[0]),Y=Math.abs(ad[1]-H[1]),S=0.45*Q,ab=0.45*Y;Q*=1.9;Y*=1.9;v=v||1;var O=Math.min(ad[0],H[0])-S,M=Math.min(ad[1],H[1])-ab;if(!t||(W.elementId!=I.elementId)){h=false;o=ad[0]<H[0]?S:Q-S;m=ad[1]<H[1]?ab:Y-ab;g=ad[0]<H[0]?Q-S:S;e=ad[1]<H[1]?Y-ab:ab;if(ad[2]==0){o-=k}if(ad[2]==1){o+=k}if(ad[3]==0){m-=k}if(ad[3]==1){m+=k}if(H[2]==0){g-=k}if(H[2]==1){g+=k}if(H[3]==0){e-=k}if(H[3]==1){e+=k}var N=(o+g)/2,L=(m+e)/2,A=(-1*N)/L,V=Math.atan(A),P=(A==Infinity||A==-Infinity)?0:Math.abs(d/2*Math.sin(V)),R=(A==Infinity||A==-Infinity)?0:Math.abs(d/2*Math.cos(V)),B=a(o,m,g,e),J=Math.sqrt(Math.pow(g-o,2)+Math.pow(e-m,2));p=b(N,L,B,ad,H,d,d,J,q);var G=Math.max(Math.abs(p[0]-o)*3,Math.abs(p[0]-g)*3,Math.abs(g-o),2*v,U),K=Math.max(Math.abs(p[1]-m)*3,Math.abs(p[1]-e)*3,Math.abs(e-m),2*v,U);if(Q<G){var T=G-Q;O-=(T/2);o+=(T/2);g+=(T/2);Q=G;p[0]+=(T/2)}if(Y<K){var aa=K-Y;M-=(aa/2);m+=(aa/2);e+=(aa/2);Y=K;p[1]+=(aa/2)}n=[O,M,Q,Y,o,m,g,e,p[0],p[1]]}else{h=true;var Z=ad[0],X=ad[0],F=ad[1]-k,D=ad[1]-k,E=Z,C=F-i;Q=((2*v)+(4*i)),Y=((2*v)+(4*i));O=E-i-v-i,M=C-i-v-i;n=[O,M,Q,Y,E-O,C-M,i,f,Z-O,F-M,X-O,D-M]}return n};var r=function(){return[{x:g,y:e},{x:p[0],y:p[1]},{x:p[0]+1,y:p[1]+1},{x:o,y:m}]};var s=function(w,v,x){if(x){v=jsBezier.locationAlongCurveFrom(w,v>0?0:1,v)}return v};this.pointOnPath=function(x,B){if(h){if(B){var y=Math.PI*2*i;x=x/y}if(x>0&&x<1){x=1-x}var z=(x*2*Math.PI)+(Math.PI/2),w=n[4]+(n[6]*Math.cos(z)),v=n[5]+(n[6]*Math.sin(z));return{x:w,y:v}}else{var A=r();x=s(A,x,B);return jsBezier.pointOnCurve(A,x)}};this.gradientAtPoint=function(v,y){if(h){if(y){var w=Math.PI*2*i;v=v/w}return Math.atan(v*2*Math.PI)}else{var x=r();v=s(x,v,y);return jsBezier.gradientAtPoint(x,v)}};this.pointAlongPathFrom=function(D,v,C){if(h){if(C){var B=Math.PI*2*i;D=D/B}if(D>0&&D<1){D=1-D}var B=2*Math.PI*n[6],w=v/B*2*Math.PI,z=(D*2*Math.PI)-w+(Math.PI/2),y=n[4]+(n[6]*Math.cos(z)),x=n[5]+(n[6]*Math.sin(z));return{x:y,y:x}}else{var A=r();D=s(A,D,C);return jsBezier.pointAlongCurveFrom(A,D,v)}}};jsPlumb.Connectors.canvas.StateMachine=function(f){f=f||{};var d=this,g=f.drawGuideline||true,e=f.avoidSelector;jsPlumb.Connectors.StateMachine.apply(this,arguments);jsPlumb.CanvasConnector.apply(this,arguments);this._paint=function(l){if(l.length==10){d.ctx.beginPath();d.ctx.moveTo(l[4],l[5]);d.ctx.bezierCurveTo(l[8],l[9],l[8],l[9],l[6],l[7]);d.ctx.stroke()}else{d.ctx.save();d.ctx.beginPath();var k=0,i=2*Math.PI,h=l[7];d.ctx.arc(l[4],l[5],l[6],0,i,h);d.ctx.stroke();d.ctx.closePath();d.ctx.restore()}};this.createGradient=function(i,h){return h.createLinearGradient(i[4],i[5],i[6],i[7])}};jsPlumb.Connectors.svg.StateMachine=function(){var d=this;jsPlumb.Connectors.StateMachine.apply(this,arguments);jsPlumb.SvgConnector.apply(this,arguments);this.getPath=function(e){if(e.length==10){return"M "+e[4]+" "+e[5]+" C "+e[8]+" "+e[9]+" "+e[8]+" "+e[9]+" "+e[6]+" "+e[7]}else{return"M"+(e[8]+4)+" "+e[9]+" A "+e[6]+" "+e[6]+" 0 1,0 "+(e[8]-4)+" "+e[9]}}};jsPlumb.Connectors.vml.StateMachine=function(){jsPlumb.Connectors.StateMachine.apply(this,arguments);jsPlumb.VmlConnector.apply(this,arguments);var d=jsPlumb.vml.convertValue;this.getPath=function(k){if(k.length==10){return"m"+d(k[4])+","+d(k[5])+" c"+d(k[8])+","+d(k[9])+","+d(k[8])+","+d(k[9])+","+d(k[6])+","+d(k[7])+" e"}else{var h=d(k[8]-k[6]),g=d(k[9]-(2*k[6])),f=h+d(2*k[6]),e=g+d(2*k[6]),l=h+","+g+","+f+","+e;var i="ar "+l+","+d(k[8])+","+d(k[9])+","+d(k[8])+","+d(k[9])+" e";return i}}}})();(function(){var h={"stroke-linejoin":"joinstyle",joinstyle:"joinstyle",endcap:"endcap",miterlimit:"miterlimit"},c=null;if(document.createStyleSheet&&document.namespaces){var m=[".jsplumb_vml","jsplumb\\:textbox","jsplumb\\:oval","jsplumb\\:rect","jsplumb\\:stroke","jsplumb\\:shape","jsplumb\\:group"],g="behavior:url(#default#VML);position:absolute;";c=document.createStyleSheet();for(var r=0;r<m.length;r++){c.addRule(m[r],g)}document.namespaces.add("jsplumb","urn:schemas-microsoft-com:vml")}jsPlumb.vml={};var t=1000,s={},a=function(u,i){var w=jsPlumb.getId(u),v=s[w];if(!v){v=f("group",[0,0,t,t],{"class":i});v.style.backgroundColor="red";s[w]=v;jsPlumb.appendElement(v,u)}return v},e=function(v,w){for(var u in w){v[u]=w[u]}},f=function(u,x,y,v,i){y=y||{};var w=document.createElement("jsplumb:"+u);i.appendElement(w,v);w.className=(y["class"]?y["class"]+" ":"")+"jsplumb_vml";k(w,x);e(w,y);return w},k=function(u,i){u.style.left=i[0]+"px";u.style.top=i[1]+"px";u.style.width=i[2]+"px";u.style.height=i[3]+"px";u.style.position="absolute"},p=jsPlumb.vml.convertValue=function(i){return Math.floor(i*t)},b=function(w,u,v,i){if("transparent"===u){i.setOpacity(v,"0.0")}else{i.setOpacity(v,"1.0")}},q=function(y,u,B,C){var x={};if(u.strokeStyle){x.stroked="true";var D=jsPlumbUtil.convertStyle(u.strokeStyle,true);x.strokecolor=D;b(x,D,"stroke",B);x.strokeweight=u.lineWidth+"px"}else{x.stroked="false"}if(u.fillStyle){x.filled="true";var v=jsPlumbUtil.convertStyle(u.fillStyle,true);x.fillcolor=v;b(x,v,"fill",B)}else{x.filled="false"}if(u.dashstyle){if(B.strokeNode==null){B.strokeNode=f("stroke",[0,0,0,0],{dashstyle:u.dashstyle},y,C)}else{B.strokeNode.dashstyle=u.dashstyle}}else{if(u["stroke-dasharray"]&&u.lineWidth){var E=u["stroke-dasharray"].indexOf(",")==-1?" ":",",z=u["stroke-dasharray"].split(E),w="";for(var A=0;A<z.length;A++){w+=(Math.floor(z[A]/u.lineWidth)+E)}if(B.strokeNode==null){B.strokeNode=f("stroke",[0,0,0,0],{dashstyle:w},y,C)}else{B.strokeNode.dashstyle=w}}}e(y,x)},n=function(){var i=this;jsPlumb.jsPlumbUIComponent.apply(this,arguments);this.opacityNodes={stroke:null,fill:null};this.initOpacityNodes=function(v){i.opacityNodes.stroke=f("stroke",[0,0,1,1],{opacity:"0.0"},v,i._jsPlumb);i.opacityNodes.fill=f("fill",[0,0,1,1],{opacity:"0.0"},v,i._jsPlumb)};this.setOpacity=function(v,x){var w=i.opacityNodes[v];if(w){w.opacity=""+x}};var u=[];this.getDisplayElements=function(){return u};this.appendDisplayElement=function(w,v){if(!v){i.canvas.parentNode.appendChild(w)}u.push(w)}},d=jsPlumb.VmlConnector=function(v){var i=this;i.strokeNode=null;i.canvas=null;n.apply(this,arguments);var u=i._jsPlumb.connectorClass+(v.cssClass?(" "+v.cssClass):"");this.paint=function(A,x,z){if(x!=null){var E=i.getPath(A),y={path:E};if(x.outlineColor){var C=x.outlineWidth||1,D=x.lineWidth+(2*C),B={strokeStyle:jsPlumbUtil.convertStyle(x.outlineColor),lineWidth:D};for(var w in h){B[w]=x[w]}if(i.bgCanvas==null){y["class"]=u;y.coordsize=(A[2]*t)+","+(A[3]*t);i.bgCanvas=f("shape",A,y,v.parent,i._jsPlumb);k(i.bgCanvas,A);i.appendDisplayElement(i.bgCanvas,true);i.attachListeners(i.bgCanvas,i);i.initOpacityNodes(i.bgCanvas,["stroke"])}else{y.coordsize=(A[2]*t)+","+(A[3]*t);k(i.bgCanvas,A);e(i.bgCanvas,y)}q(i.bgCanvas,B,i)}if(i.canvas==null){y["class"]=u;y.coordsize=(A[2]*t)+","+(A[3]*t);if(i.tooltip){y.label=i.tooltip}i.canvas=f("shape",A,y,v.parent,i._jsPlumb);i.appendDisplayElement(i.canvas,true);i.attachListeners(i.canvas,i);i.initOpacityNodes(i.canvas,["stroke"])}else{y.coordsize=(A[2]*t)+","+(A[3]*t);k(i.canvas,A);e(i.canvas,y)}q(i.canvas,x,i,i._jsPlumb)}};this.reattachListeners=function(){if(i.canvas){i.reattachListenersForElement(i.canvas,i)}}},l=window.VmlEndpoint=function(y){n.apply(this,arguments);var i=null,v=this,u=null,x=null;v.canvas=document.createElement("div");v.canvas.style.position="absolute";var w=v._jsPlumb.endpointClass+(y.cssClass?(" "+y.cssClass):"");y._jsPlumb.appendElement(v.canvas,y.parent);if(v.tooltip){v.canvas.setAttribute("label",v.tooltip)}this.paint=function(C,A,z){var B={};jsPlumb.sizeCanvas(v.canvas,C[0],C[1],C[2],C[3]);if(i==null){B["class"]=w;i=v.getVml([0,0,C[2],C[3]],B,z,v.canvas,v._jsPlumb);v.attachListeners(i,v);v.appendDisplayElement(i,true);v.appendDisplayElement(v.canvas,true);v.initOpacityNodes(i,["fill"])}else{k(i,[0,0,C[2],C[3]]);e(i,B)}q(i,A,v)};this.reattachListeners=function(){if(i){v.reattachListenersForElement(i,v)}}};jsPlumb.Connectors.vml.Bezier=function(){jsPlumb.Connectors.Bezier.apply(this,arguments);d.apply(this,arguments);this.getPath=function(i){return"m"+p(i[4])+","+p(i[5])+" c"+p(i[8])+","+p(i[9])+","+p(i[10])+","+p(i[11])+","+p(i[6])+","+p(i[7])+" e"}};jsPlumb.Connectors.vml.Straight=function(){jsPlumb.Connectors.Straight.apply(this,arguments);d.apply(this,arguments);this.getPath=function(i){return"m"+p(i[4])+","+p(i[5])+" l"+p(i[6])+","+p(i[7])+" e"}};jsPlumb.Connectors.vml.Flowchart=function(){jsPlumb.Connectors.Flowchart.apply(this,arguments);d.apply(this,arguments);this.getPath=function(v){var w="m "+p(v[4])+","+p(v[5])+" l";for(var u=0;u<v[8];u++){w=w+" "+p(v[9+(u*2)])+","+p(v[10+(u*2)])}w=w+" "+p(v[6])+","+p(v[7])+" e";return w}};jsPlumb.Endpoints.vml.Dot=function(){jsPlumb.Endpoints.Dot.apply(this,arguments);l.apply(this,arguments);this.getVml=function(w,x,u,v,i){return f("oval",w,x,v,i)}};jsPlumb.Endpoints.vml.Rectangle=function(){jsPlumb.Endpoints.Rectangle.apply(this,arguments);l.apply(this,arguments);this.getVml=function(w,x,u,v,i){return f("rect",w,x,v,i)}};jsPlumb.Endpoints.vml.Image=jsPlumb.Endpoints.Image;jsPlumb.Endpoints.vml.Blank=jsPlumb.Endpoints.Blank;jsPlumb.Overlays.vml.Label=jsPlumb.Overlays.Label;var o=function(x,v){x.apply(this,v);n.apply(this,v);var u=this,w=null;u.canvas=null;u.isAppendedAtTopLevel=true;var i=function(z,y){return"m "+p(z.hxy.x)+","+p(z.hxy.y)+" l "+p(z.tail[0].x)+","+p(z.tail[0].y)+" "+p(z.cxy.x)+","+p(z.cxy.y)+" "+p(z.tail[1].x)+","+p(z.tail[1].y)+" x e"};this.paint=function(B,G,F,H,L,K){var z={};if(H){z.stroked="true";z.strokecolor=jsPlumbUtil.convertStyle(H,true)}if(F){z.strokeweight=F+"px"}if(L){z.filled="true";z.fillcolor=L}var y=Math.min(G.hxy.x,G.tail[0].x,G.tail[1].x,G.cxy.x),J=Math.min(G.hxy.y,G.tail[0].y,G.tail[1].y,G.cxy.y),C=Math.max(G.hxy.x,G.tail[0].x,G.tail[1].x,G.cxy.x),A=Math.max(G.hxy.y,G.tail[0].y,G.tail[1].y,G.cxy.y),I=Math.abs(C-y),E=Math.abs(A-J),D=[y,J,I,E];z.path=i(G,K);z.coordsize=(K[2]*t)+","+(K[3]*t);D[0]=K[0];D[1]=K[1];D[2]=K[2];D[3]=K[3];if(u.canvas==null){u.canvas=f("shape",D,z,B.canvas.parentNode,B._jsPlumb);B.appendDisplayElement(u.canvas,true);u.attachListeners(u.canvas,B);u.attachListeners(u.canvas,u)}else{k(u.canvas,D);e(u.canvas,z)}};this.reattachListeners=function(){if(u.canvas){u.reattachListenersForElement(u.canvas,u)}};this.cleanup=function(){if(u.canvas!=null){jsPlumb.CurrentLibrary.removeElement(u.canvas)}}};jsPlumb.Overlays.vml.Arrow=function(){o.apply(this,[jsPlumb.Overlays.Arrow,arguments])};jsPlumb.Overlays.vml.PlainArrow=function(){o.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])};jsPlumb.Overlays.vml.Diamond=function(){o.apply(this,[jsPlumb.Overlays.Diamond,arguments])}})();(function(){var l={joinstyle:"stroke-linejoin","stroke-linejoin":"stroke-linejoin","stroke-dashoffset":"stroke-dashoffset","stroke-linecap":"stroke-linecap"},w="stroke-dasharray",A="dashstyle",e="linearGradient",b="radialGradient",c="fill",a="stop",z="stroke",q="stroke-width",h="style",m="none",t="jsplumb_gradient_",o="lineWidth",C={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml"},g=function(F,D){for(var E in D){F.setAttribute(E,""+D[E])}},f=function(E,D){var F=document.createElementNS(C.svg,E);D=D||{};D.version="1.1";D.xmlns=C.xhtml;g(F,D);return F},n=function(D){return"position:absolute;left:"+D[0]+"px;top:"+D[1]+"px"},i=function(E){for(var D=0;D<E.childNodes.length;D++){if(E.childNodes[D].tagName==e||E.childNodes[D].tagName==b){E.removeChild(E.childNodes[D])}}},v=function(N,I,F,D,J){var G=t+J._jsPlumb.idstamp();i(N);if(!F.gradient.offset){var L=f(e,{id:G,gradientUnits:"userSpaceOnUse"});N.appendChild(L)}else{var L=f(b,{id:G});N.appendChild(L)}for(var K=0;K<F.gradient.stops.length;K++){var H=K;if(D.length==8){H=D[4]<D[6]?K:F.gradient.stops.length-1-K}else{H=D[4]<D[6]?F.gradient.stops.length-1-K:K}var M=jsPlumbUtil.convertStyle(F.gradient.stops[H][1],true);var O=f(a,{offset:Math.floor(F.gradient.stops[K][0]*100)+"%","stop-color":M});L.appendChild(O)}var E=F.strokeStyle?z:c;I.setAttribute(h,E+":url(#"+G+")")},x=function(K,G,E,D,H){if(E.gradient){v(K,G,E,D,H)}else{i(K);G.setAttribute(h,"")}G.setAttribute(c,E.fillStyle?jsPlumbUtil.convertStyle(E.fillStyle,true):m);G.setAttribute(z,E.strokeStyle?jsPlumbUtil.convertStyle(E.strokeStyle,true):m);if(E.lineWidth){G.setAttribute(q,E.lineWidth)}if(E[A]&&E[o]&&!E[w]){var L=E[A].indexOf(",")==-1?" ":",",I=E[A].split(L),F="";I.forEach(function(M){F+=(Math.floor(M*E.lineWidth)+L)});G.setAttribute(w,F)}else{if(E[w]){G.setAttribute(w,E[w])}}for(var J in l){if(E[J]){G.setAttribute(l[J],E[J])}}},B=function(F){var D=/([0-9].)(p[xt])\s(.*)/;var E=F.match(D);return{size:E[1]+E[2],font:E[3]}},r=function(I,J,E){var K=E.split(" "),H=I.className,G=H.baseVal.split(" ");for(var F=0;F<K.length;F++){if(J){if(G.indexOf(K[F])==-1){G.push(K[F])}}else{var D=G.indexOf(K[F]);if(D!=-1){G.splice(D,1)}}}I.className.baseVal=G.join(" ")},u=function(E,D){r(E,true,D)},k=function(E,D){r(E,false,D)};jsPlumbUtil.svg={addClass:u,removeClass:k,node:f,attr:g,pos:n};var s=function(H){var D=this,G=H.pointerEventsSpec||"all";jsPlumb.jsPlumbUIComponent.apply(this,H.originalArgs);D.canvas=null,D.path=null,D.svg=null;var F=H.cssClass+" "+(H.originalArgs[0].cssClass||""),I={style:"",width:0,height:0,"pointer-events":G,position:"absolute"};if(D.tooltip){I.title=D.tooltip}D.svg=f("svg",I);if(H.useDivWrapper){D.canvas=document.createElement("div");D.canvas.style.position="absolute";jsPlumb.sizeCanvas(D.canvas,0,0,1,1);D.canvas.className=F;if(D.tooltip){D.canvas.setAttribute("title",D.tooltip)}}else{g(D.svg,{"class":F});D.canvas=D.svg}H._jsPlumb.appendElement(D.canvas,H.originalArgs[0]["parent"]);if(H.useDivWrapper){D.canvas.appendChild(D.svg)}var E=[D.canvas];this.getDisplayElements=function(){return E};this.appendDisplayElement=function(J){E.push(J)};this.paint=function(M,L,K){if(L!=null){var J=M[0],N=M[1];if(H.useDivWrapper){jsPlumb.sizeCanvas(D.canvas,M[0],M[1],M[2],M[3]);J=0,N=0}g(D.svg,{style:n([J,N,M[2],M[3]]),width:M[2],height:M[3]});D._paint.apply(this,arguments)}}};var d=jsPlumb.SvgConnector=function(E){var D=this;s.apply(this,[{cssClass:E._jsPlumb.connectorClass,originalArgs:arguments,pointerEventsSpec:"none",tooltip:E.tooltip,_jsPlumb:E._jsPlumb}]);this._paint=function(L,H){var K=D.getPath(L),F={d:K},J=null;F["pointer-events"]="all";if(H.outlineColor){var I=H.outlineWidth||1,G=H.lineWidth+(2*I),J=jsPlumb.CurrentLibrary.extend({},H);J.strokeStyle=jsPlumbUtil.convertStyle(H.outlineColor);J.lineWidth=G;if(D.bgPath==null){D.bgPath=f("path",F);D.svg.appendChild(D.bgPath);D.attachListeners(D.bgPath,D)}else{g(D.bgPath,F)}x(D.svg,D.bgPath,J,L,D)}if(D.path==null){D.path=f("path",F);D.svg.appendChild(D.path);D.attachListeners(D.path,D)}else{g(D.path,F)}x(D.svg,D.path,H,L,D)};this.reattachListeners=function(){if(D.bgPath){D.reattachListenersForElement(D.bgPath,D)}if(D.path){D.reattachListenersForElement(D.path,D)}}};jsPlumb.Connectors.svg.Bezier=function(D){jsPlumb.Connectors.Bezier.apply(this,arguments);d.apply(this,arguments);this.getPath=function(F){var E="M "+F[4]+" "+F[5];E+=(" C "+F[8]+" "+F[9]+" "+F[10]+" "+F[11]+" "+F[6]+" "+F[7]);return E}};jsPlumb.Connectors.svg.Straight=function(D){jsPlumb.Connectors.Straight.apply(this,arguments);d.apply(this,arguments);this.getPath=function(E){return"M "+E[4]+" "+E[5]+" L "+E[6]+" "+E[7]}};jsPlumb.Connectors.svg.Flowchart=function(){var D=this;jsPlumb.Connectors.Flowchart.apply(this,arguments);d.apply(this,arguments);this.getPath=function(F){var G="M "+F[4]+","+F[5];for(var E=0;E<F[8];E++){G=G+" L "+F[9+(E*2)]+" "+F[10+(E*2)]}G=G+" "+F[6]+","+F[7];return G}};var y=window.SvgEndpoint=function(E){var D=this;s.apply(this,[{cssClass:E._jsPlumb.endpointClass,originalArgs:arguments,pointerEventsSpec:"all",useDivWrapper:true,_jsPlumb:E._jsPlumb}]);this._paint=function(H,G){var F=jsPlumb.extend({},G);if(F.outlineColor){F.strokeWidth=F.outlineWidth;F.strokeStyle=jsPlumbUtil.convertStyle(F.outlineColor,true)}if(D.node==null){D.node=D.makeNode(H,F);D.svg.appendChild(D.node);D.attachListeners(D.node,D)}x(D.svg,D.node,F,H,D);n(D.node,H)};this.reattachListeners=function(){if(D.node){D.reattachListenersForElement(D.node,D)}}};jsPlumb.Endpoints.svg.Dot=function(){jsPlumb.Endpoints.Dot.apply(this,arguments);y.apply(this,arguments);this.makeNode=function(E,D){return f("circle",{cx:E[2]/2,cy:E[3]/2,r:E[2]/2})}};jsPlumb.Endpoints.svg.Rectangle=function(){jsPlumb.Endpoints.Rectangle.apply(this,arguments);y.apply(this,arguments);this.makeNode=function(E,D){return f("rect",{width:E[2],height:E[3]})}};jsPlumb.Endpoints.svg.Image=jsPlumb.Endpoints.Image;jsPlumb.Endpoints.svg.Blank=jsPlumb.Endpoints.Blank;jsPlumb.Overlays.svg.Label=jsPlumb.Overlays.Label;var p=function(H,F){H.apply(this,F);jsPlumb.jsPlumbUIComponent.apply(this,F);this.isAppendedAtTopLevel=false;var D=this,G=null;this.paint=function(J,M,I,N,K){if(G==null){G=f("path",{"pointer-events":"all"});J.svg.appendChild(G);D.attachListeners(G,J);D.attachListeners(G,D)}var L=F&&(F.length==1)?(F[0].cssClass||""):"";g(G,{d:E(M),"class":L,stroke:N?N:null,fill:K?K:null})};var E=function(I){return"M"+I.hxy.x+","+I.hxy.y+" L"+I.tail[0].x+","+I.tail[0].y+" L"+I.cxy.x+","+I.cxy.y+" L"+I.tail[1].x+","+I.tail[1].y+" L"+I.hxy.x+","+I.hxy.y};this.reattachListeners=function(){if(G){D.reattachListenersForElement(G,D)}};this.cleanup=function(){if(G!=null){jsPlumb.CurrentLibrary.removeElement(G)}}};jsPlumb.Overlays.svg.Arrow=function(){p.apply(this,[jsPlumb.Overlays.Arrow,arguments])};jsPlumb.Overlays.svg.PlainArrow=function(){p.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])};jsPlumb.Overlays.svg.Diamond=function(){p.apply(this,[jsPlumb.Overlays.Diamond,arguments])};jsPlumb.Overlays.svg.GuideLines=function(){var I=null,D=this,H=null,G,F;jsPlumb.Overlays.GuideLines.apply(this,arguments);this.paint=function(K,M,J,N,L){if(I==null){I=f("path");K.svg.appendChild(I);D.attachListeners(I,K);D.attachListeners(I,D);G=f("path");K.svg.appendChild(G);D.attachListeners(G,K);D.attachListeners(G,D);F=f("path");K.svg.appendChild(F);D.attachListeners(F,K);D.attachListeners(F,D)}g(I,{d:E(M[0],M[1]),stroke:"red",fill:null});g(G,{d:E(M[2][0],M[2][1]),stroke:"blue",fill:null});g(F,{d:E(M[3][0],M[3][1]),stroke:"green",fill:null})};var E=function(K,J){return"M "+K.x+","+K.y+" L"+J.x+","+J.y}}})();(function(){var d=null,i=function(p,o){return jsPlumb.CurrentLibrary.hasClass(a(p),o)},a=function(o){return jsPlumb.CurrentLibrary.getElementObject(o)},m=function(o){return jsPlumb.CurrentLibrary.getOffset(a(o))},n=function(o){return jsPlumb.CurrentLibrary.getPageXY(o)},f=function(o){return jsPlumb.CurrentLibrary.getClientXY(o)};var k=function(){var q=this;q.overlayPlacements=[];jsPlumb.jsPlumbUIComponent.apply(this,arguments);jsPlumbUtil.EventGenerator.apply(this,arguments);this._over=function(z){var B=m(a(q.canvas)),D=n(z),u=D[0]-B.left,C=D[1]-B.top;if(u>0&&C>0&&u<q.canvas.width&&C<q.canvas.height){for(var v=0;v<q.overlayPlacements.length;v++){var w=q.overlayPlacements[v];if(w&&(w[0]<=u&&w[1]>=u&&w[2]<=C&&w[3]>=C)){return true}}var A=q.canvas.getContext("2d").getImageData(parseInt(u),parseInt(C),1,1);return A.data[0]!=0||A.data[1]!=0||A.data[2]!=0||A.data[3]!=0}return false};var p=false,o=false,t=null,s=false,r=function(v,u){return v!=null&&i(v,u)};this.mousemove=function(x){var z=n(x),w=f(x),v=document.elementFromPoint(w[0],w[1]),y=r(v,"_jsPlumb_overlay");var u=d==null&&(r(v,"_jsPlumb_endpoint")||r(v,"_jsPlumb_connector"));if(!p&&u&&q._over(x)){p=true;q.fire("mouseenter",q,x);return true}else{if(p&&(!q._over(x)||!u)&&!y){p=false;q.fire("mouseexit",q,x)}}q.fire("mousemove",q,x)};this.click=function(u){if(p&&q._over(u)&&!s){q.fire("click",q,u)}s=false};this.dblclick=function(u){if(p&&q._over(u)&&!s){q.fire("dblclick",q,u)}s=false};this.mousedown=function(u){if(q._over(u)&&!o){o=true;t=m(a(q.canvas));q.fire("mousedown",q,u)}};this.mouseup=function(u){o=false;q.fire("mouseup",q,u)};this.contextmenu=function(u){if(p&&q._over(u)&&!s){q.fire("contextmenu",q,u)}s=false}};var c=function(p){var o=document.createElement("canvas");p._jsPlumb.appendElement(o,p.parent);o.style.position="absolute";if(p["class"]){o.className=p["class"]}p._jsPlumb.getId(o,p.uuid);if(p.tooltip){o.setAttribute("title",p.tooltip)}return o};var l=function(p){k.apply(this,arguments);var o=[];this.getDisplayElements=function(){return o};this.appendDisplayElement=function(q){o.push(q)}};var h=jsPlumb.CanvasConnector=function(r){l.apply(this,arguments);var o=function(v,t){p.ctx.save();jsPlumb.extend(p.ctx,t);if(t.gradient){var u=p.createGradient(v,p.ctx);for(var s=0;s<t.gradient.stops.length;s++){u.addColorStop(t.gradient.stops[s][0],t.gradient.stops[s][1])}p.ctx.strokeStyle=u}p._paint(v,t);p.ctx.restore()};var p=this,q=p._jsPlumb.connectorClass+" "+(r.cssClass||"");p.canvas=c({"class":q,_jsPlumb:p._jsPlumb,parent:r.parent,tooltip:r.tooltip});p.ctx=p.canvas.getContext("2d");p.appendDisplayElement(p.canvas);p.paint=function(w,t){if(t!=null){jsPlumb.sizeCanvas(p.canvas,w[0],w[1],w[2],w[3]);if(t.outlineColor!=null){var v=t.outlineWidth||1,s=t.lineWidth+(2*v),u={strokeStyle:t.outlineColor,lineWidth:s};o(w,u)}o(w,t)}}};var b=function(r){var p=this;l.apply(this,arguments);var q=p._jsPlumb.endpointClass+" "+(r.cssClass||""),o={"class":q,_jsPlumb:p._jsPlumb,parent:r.parent,tooltip:p.tooltip};p.canvas=c(o);p.ctx=p.canvas.getContext("2d");p.appendDisplayElement(p.canvas);this.paint=function(x,u,s){jsPlumb.sizeCanvas(p.canvas,x[0],x[1],x[2],x[3]);if(u.outlineColor!=null){var w=u.outlineWidth||1,t=u.lineWidth+(2*w);var v={strokeStyle:u.outlineColor,lineWidth:t}}p._paint.apply(this,arguments)}};jsPlumb.Endpoints.canvas.Dot=function(r){jsPlumb.Endpoints.Dot.apply(this,arguments);b.apply(this,arguments);var q=this,p=function(s){try{return parseInt(s)}catch(t){if(s.substring(s.length-1)=="%"){return parseInt(s.substring(0,s-1))}}},o=function(u){var s=q.defaultOffset,t=q.defaultInnerRadius;u.offset&&(s=p(u.offset));u.innerRadius&&(t=p(u.innerRadius));return[s,t]};this._paint=function(A,t,x){if(t!=null){var B=q.canvas.getContext("2d"),u=x.getOrientation(q);jsPlumb.extend(B,t);if(t.gradient){var v=o(t.gradient),y=u[1]==1?v[0]*-1:v[0],s=u[0]==1?v[0]*-1:v[0],z=B.createRadialGradient(A[4],A[4],A[4],A[4]+s,A[4]+y,v[1]);for(var w=0;w<t.gradient.stops.length;w++){z.addColorStop(t.gradient.stops[w][0],t.gradient.stops[w][1])}B.fillStyle=z}B.beginPath();B.arc(A[4],A[4],A[4],0,Math.PI*2,true);B.closePath();if(t.fillStyle||t.gradient){B.fill()}if(t.strokeStyle){B.stroke()}}}};jsPlumb.Endpoints.canvas.Rectangle=function(p){var o=this;jsPlumb.Endpoints.Rectangle.apply(this,arguments);b.apply(this,arguments);this._paint=function(x,r,v){var A=o.canvas.getContext("2d"),t=v.getOrientation(o);jsPlumb.extend(A,r);if(r.gradient){var z=t[1]==1?x[3]:t[1]==0?x[3]/2:0;var y=t[1]==-1?x[3]:t[1]==0?x[3]/2:0;var s=t[0]==1?x[2]:t[0]==0?x[2]/2:0;var q=t[0]==-1?x[2]:t[0]==0?x[2]/2:0;var w=A.createLinearGradient(s,z,q,y);for(var u=0;u<r.gradient.stops.length;u++){w.addColorStop(r.gradient.stops[u][0],r.gradient.stops[u][1])}A.fillStyle=w}A.beginPath();A.rect(0,0,x[2],x[3]);A.closePath();if(r.fillStyle||r.gradient){A.fill()}if(r.strokeStyle){A.stroke()}}};jsPlumb.Endpoints.canvas.Triangle=function(p){var o=this;jsPlumb.Endpoints.Triangle.apply(this,arguments);b.apply(this,arguments);this._paint=function(z,q,v){var s=z[2],C=z[3],B=z[0],A=z[1],D=o.canvas.getContext("2d"),w=0,u=0,t=0,r=v.getOrientation(o);if(r[0]==1){w=s;u=C;t=180}if(r[1]==-1){w=s;t=90}if(r[1]==1){u=C;t=-90}D.fillStyle=q.fillStyle;D.translate(w,u);D.rotate(t*Math.PI/180);D.beginPath();D.moveTo(0,0);D.lineTo(s/2,C/2);D.lineTo(0,C);D.closePath();if(q.fillStyle||q.gradient){D.fill()}if(q.strokeStyle){D.stroke()}}};jsPlumb.Endpoints.canvas.Image=jsPlumb.Endpoints.Image;jsPlumb.Endpoints.canvas.Blank=jsPlumb.Endpoints.Blank;jsPlumb.Connectors.canvas.Bezier=function(){var o=this;jsPlumb.Connectors.Bezier.apply(this,arguments);h.apply(this,arguments);this._paint=function(q,p){o.ctx.beginPath();o.ctx.moveTo(q[4],q[5]);o.ctx.bezierCurveTo(q[8],q[9],q[10],q[11],q[6],q[7]);o.ctx.stroke()};this.createGradient=function(r,p,q){return o.ctx.createLinearGradient(r[6],r[7],r[4],r[5])}};jsPlumb.Connectors.canvas.Straight=function(){var p=this,o=[null,[1,-1],[1,1],[-1,1],[-1,-1]];jsPlumb.Connectors.Straight.apply(this,arguments);h.apply(this,arguments);this._paint=function(r,t){p.ctx.beginPath();if(t.dashstyle&&t.dashstyle.split(" ").length==2){var v=t.dashstyle.split(" ");if(v.length!=2){v=[2,2]}var C=[v[0]*t.lineWidth,v[1]*t.lineWidth],y=(r[6]-r[4])/(r[7]-r[5]),G=jsPlumbUtil.segment([r[4],r[5]],[r[6],r[7]]),x=o[G],u=Math.atan(y),z=Math.sqrt(Math.pow(r[6]-r[4],2)+Math.pow(r[7]-r[5],2)),B=Math.floor(z/(C[0]+C[1])),w=[r[4],r[5]];for(var A=0;A<B;A++){p.ctx.moveTo(w[0],w[1]);var q=w[0]+(Math.abs(Math.sin(u)*C[0])*x[0]),F=w[1]+(Math.abs(Math.cos(u)*C[0])*x[1]),E=w[0]+(Math.abs(Math.sin(u)*(C[0]+C[1]))*x[0]),D=w[1]+(Math.abs(Math.cos(u)*(C[0]+C[1]))*x[1]);p.ctx.lineTo(q,F);w=[E,D]}p.ctx.moveTo(w[0],w[1]);p.ctx.lineTo(r[6],r[7])}else{p.ctx.moveTo(r[4],r[5]);p.ctx.lineTo(r[6],r[7])}p.ctx.stroke()};this.createGradient=function(r,q){return q.createLinearGradient(r[4],r[5],r[6],r[7])}};jsPlumb.Connectors.canvas.Flowchart=function(){var o=this;jsPlumb.Connectors.Flowchart.apply(this,arguments);h.apply(this,arguments);this._paint=function(r,q){o.ctx.beginPath();o.ctx.moveTo(r[4],r[5]);for(var p=0;p<r[8];p++){o.ctx.lineTo(r[9+(p*2)],r[10+(p*2)])}o.ctx.lineTo(r[6],r[7]);o.ctx.stroke()};this.createGradient=function(q,p){return p.createLinearGradient(q[4],q[5],q[6],q[7])}};jsPlumb.Overlays.canvas.Label=jsPlumb.Overlays.Label;var g=function(){jsPlumb.jsPlumbUIComponent.apply(this,arguments)};var e=function(p,o){p.apply(this,o);g.apply(this,o);this.paint=function(s,u,q,v,t){var r=s.ctx;r.lineWidth=q;r.beginPath();r.moveTo(u.hxy.x,u.hxy.y);r.lineTo(u.tail[0].x,u.tail[0].y);r.lineTo(u.cxy.x,u.cxy.y);r.lineTo(u.tail[1].x,u.tail[1].y);r.lineTo(u.hxy.x,u.hxy.y);r.closePath();if(v){r.strokeStyle=v;r.stroke()}if(t){r.fillStyle=t;r.fill()}}};jsPlumb.Overlays.canvas.Arrow=function(){e.apply(this,[jsPlumb.Overlays.Arrow,arguments])};jsPlumb.Overlays.canvas.PlainArrow=function(){e.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])};jsPlumb.Overlays.canvas.Diamond=function(){e.apply(this,[jsPlumb.Overlays.Diamond,arguments])}})();(function(a){jsPlumb.CurrentLibrary={addClass:function(c,b){c=jsPlumb.CurrentLibrary.getElementObject(c);try{if(c[0].className.constructor==SVGAnimatedString){jsPlumb.util.svg.addClass(c[0],b)}}catch(d){}c.addClass(b)},animate:function(d,c,b){d.animate(c,b)},appendElement:function(c,b){jsPlumb.CurrentLibrary.getElementObject(b).append(c)},ajax:function(b){b=b||{};b.type=b.type||"get";a.ajax(b)},bind:function(b,c,d){b=jsPlumb.CurrentLibrary.getElementObject(b);b.bind(c,d)},dragEvents:{start:"start",stop:"stop",drag:"drag",step:"step",over:"over",out:"out",drop:"drop",complete:"complete"},extend:function(c,b){return a.extend(c,b)},getAttribute:function(b,c){return b.attr(c)},getClientXY:function(b){return[b.clientX,b.clientY]},getDocumentElement:function(){return document},getDragObject:function(b){return b[1].draggable},getDragScope:function(b){return b.draggable("option","scope")},getDropEvent:function(b){return b[0]},getDropScope:function(b){return b.droppable("option","scope")},getDOMElement:function(b){if(typeof(b)=="string"){return document.getElementById(b)}else{if(b.context){return b[0]}else{return b}}},getElementObject:function(b){return typeof(b)=="string"?a("#"+b):a(b)},getOffset:function(b){return b.offset()},getOriginalEvent:function(b){return b.originalEvent},getPageXY:function(b){return[b.pageX,b.pageY]},getParent:function(b){return jsPlumb.CurrentLibrary.getElementObject(b).parent()},getScrollLeft:function(b){return b.scrollLeft()},getScrollTop:function(b){return b.scrollTop()},getSelector:function(b){return a(b)},getSize:function(b){return[b.outerWidth(),b.outerHeight()]},getTagName:function(b){var c=jsPlumb.CurrentLibrary.getElementObject(b);return c.length>0?c[0].tagName:null},getUIPosition:function(c){if(c.length==1){ret={left:c[0].pageX,top:c[0].pageY}}else{var d=c[1],b=d.offset;ret=b||d.absolutePosition}return ret},hasClass:function(c,b){return c.hasClass(b)},initDraggable:function(c,b,d){b=b||{};b.helper=null;if(d){b.scope=b.scope||jsPlumb.Defaults.Scope}c.draggable(b)},initDroppable:function(c,b){b.scope=b.scope||jsPlumb.Defaults.Scope;c.droppable(b)},isAlreadyDraggable:function(b){b=jsPlumb.CurrentLibrary.getElementObject(b);return b.hasClass("ui-draggable")},isDragSupported:function(c,b){return c.draggable},isDropSupported:function(c,b){return c.droppable},removeClass:function(c,b){c=jsPlumb.CurrentLibrary.getElementObject(c);try{if(c[0].className.constructor==SVGAnimatedString){jsPlumb.util.svg.removeClass(c[0],b)}}catch(d){}c.removeClass(b)},removeElement:function(b,c){jsPlumb.CurrentLibrary.getElementObject(b).remove()},setAttribute:function(c,d,b){c.attr(d,b)},setDraggable:function(c,b){c.draggable("option","disabled",!b)},setDragScope:function(c,b){c.draggable("option","scope",b)},setOffset:function(b,c){jsPlumb.CurrentLibrary.getElementObject(b).offset(c)},trigger:function(d,e,b){var c=jQuery._data(jsPlumb.CurrentLibrary.getElementObject(d)[0],"handle");c(b)},unbind:function(b,c,d){b=jsPlumb.CurrentLibrary.getElementObject(b);b.unbind(c,d)}};a(document).ready(jsPlumb.init)})(jQuery);(function(){"undefined"==typeof Math.sgn&&(Math.sgn=function(l){return 0==l?0:0<l?1:-1});var d={subtract:function(m,l){return{x:m.x-l.x,y:m.y-l.y}},dotProduct:function(m,l){return m.x*l.x+m.y*l.y},square:function(l){return Math.sqrt(l.x*l.x+l.y*l.y)},scale:function(m,l){return{x:m.x*l,y:m.y*l}}},f=Math.pow(2,-65),h=function(y,x){for(var t=[],v=x.length-1,r=2*v-1,s=[],w=[],p=[],q=[],o=[[1,0.6,0.3,0.1],[0.4,0.6,0.6,0.4],[0.1,0.3,0.6,1]],u=0;u<=v;u++){s[u]=d.subtract(x[u],y)}for(u=0;u<=v-1;u++){w[u]=d.subtract(x[u+1],x[u]);w[u]=d.scale(w[u],3)}for(u=0;u<=v-1;u++){for(var m=0;m<=v;m++){p[u]||(p[u]=[]);p[u][m]=d.dotProduct(w[u],s[m])}}for(u=0;u<=r;u++){q[u]||(q[u]=[]);q[u].y=0;q[u].x=parseFloat(u)/r}r=v-1;for(s=0;s<=v+r;s++){u=Math.max(0,s-r);for(w=Math.min(s,v);u<=w;u++){j=s-u;q[u+j].y=q[u+j].y+p[j][u]*o[j][u]}}v=x.length-1;q=a(q,2*v-1,t,0);r=d.subtract(y,x[0]);p=d.square(r);for(u=o=0;u<q;u++){r=d.subtract(y,k(x,v,t[u],null,null));r=d.square(r);if(r<p){p=r;o=t[u]}}r=d.subtract(y,x[v]);r=d.square(r);if(r<p){p=r;o=1}return{location:o,distance:p}},a=function(C,B,x,z){var v=[],w=[],A=[],t=[],u=0,s,y;y=Math.sgn(C[0].y);for(var q=1;q<=B;q++){s=Math.sgn(C[q].y);s!=y&&u++;y=s}switch(u){case 0:return 0;case 1:if(z>=64){x[0]=(C[0].x+C[B].x)/2;return 1}var p,u=C[0].y-C[B].y;y=C[B].x-C[0].x;q=C[0].x*C[B].y-C[B].x*C[0].y;s=max_distance_below=0;for(p=1;p<B;p++){var r=u*C[p].x+y*C[p].y+q;r>s?s=r:r<max_distance_below&&(max_distance_below=r)}p=y;s=(1*(q-s)-p*0)*(1/(0*p-u*1));p=y;y=q-max_distance_below;u=(1*y-p*0)*(1/(0*p-u*1));y=Math.min(s,u);if(Math.max(s,u)-y<f){A=C[B].x-C[0].x;t=C[B].y-C[0].y;x[0]=0+1*(A*(C[0].y-0)-t*(C[0].x-0))*(1/(A*0-t*1));return 1}}k(C,B,0.5,v,w);C=a(v,B,A,z+1);B=a(w,B,t,z+1);for(z=0;z<C;z++){x[z]=A[z]}for(z=0;z<B;z++){x[z+C]=t[z]}return C+B},k=function(m,l,p,q,n){for(var o=[[]],r=0;r<=l;r++){o[0][r]=m[r]}for(m=1;m<=l;m++){for(r=0;r<=l-m;r++){o[m]||(o[m]=[]);o[m][r]||(o[m][r]={});o[m][r].x=(1-p)*o[m-1][r].x+p*o[m-1][r+1].x;o[m][r].y=(1-p)*o[m-1][r].y+p*o[m-1][r+1].y}}if(q!=null){for(r=0;r<=l;r++){q[r]=o[r][0]}}if(n!=null){for(r=0;r<=l;r++){n[r]=o[l-r][r]}}return o[l][0]},g={},e=function(t){var s=g[t];if(!s){var s=[],p=function(u){return function(){return u}},q=function(){return function(u){return u}},n=function(){return function(u){return 1-u}},o=function(u){return function(v){for(var x=1,w=0;w<u.length;w++){x=x*u[w](v)}return x}};s.push(new function(){return function(u){return Math.pow(u,t)}});for(var r=1;r<t;r++){for(var l=[new p(t)],m=0;m<t-r;m++){l.push(new q)}for(m=0;m<r;m++){l.push(new n)}s.push(new o(l))}s.push(new function(){return function(u){return Math.pow(1-u,t)}});g[t]=s}return s},c=function(m,l){for(var p=e(m.length-1),q=0,n=0,o=0;o<m.length;o++){q=q+m[o].x*p[o](l);n=n+m[o].y*p[o](l)}return{x:q,y:n}},b=function(m,l,p){for(var q=c(m,l),n=0,o=p>0?1:-1,r=null;n<Math.abs(p);){l=l+0.005*o;r=c(m,l);n=n+Math.sqrt(Math.pow(r.x-q.x,2)+Math.pow(r.y-q.y,2));q=r}return{point:r,location:l}},i=function(m,l){var o=c(m,l),p=c(m.slice(0,m.length-1),l),n=p.y-o.y,o=p.x-o.x;return n==0?Infinity:Math.atan(n/o)};window.jsBezier={distanceFromCurve:h,gradientAtPoint:i,gradientAtPointAlongCurveFrom:function(m,l,n){l=b(m,l,n);if(l.location>1){l.location=1}if(l.location<0){l.location=0}return i(m,l.location)},nearestPointOnCurve:function(m,l){var n=h(m,l);return{point:k(l,l.length-1,n.location,null,null),location:n.location}},pointOnCurve:c,pointAlongCurveFrom:function(m,l,n){return b(m,l,n).point},perpendicularToCurveAt:function(m,l,n,o){l=b(m,l,o==null?0:o);m=i(m,l.location);o=Math.atan(-1/m);m=n/2*Math.sin(o);n=n/2*Math.cos(o);return[{x:l.point.x+n,y:l.point.y+m},{x:l.point.x-n,y:l.point.y-m}]},locationAlongCurveFrom:function(m,l,n){return b(m,l,n).location}}})();


(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});

var SVG_ARROW_POLYGON="0,3 12,3 12,0 18,5 12,10 12,7 0,7";var SVG_ARROW_HEIGHT=10;var curVisualizerID=1;function ExecutionVisualizer(domRootID,dat,params){this.curInputCode=dat.code.main_code.rtrim();this.curTrace=dat.trace;this.sourceFiles=dat.code;this.curFile="";this.DEFAULT_EMBEDDED_CODE_DIV_WIDTH=350;this.DEFAULT_EMBEDDED_CODE_DIV_HEIGHT=400;if(this.curTrace.length>0){var lastEntry=this.curTrace[this.curTrace.length-1];if(lastEntry.event=="raw_input"){this.promptForUserInput=true;this.userInputPromptStr=htmlspecialchars(lastEntry.prompt);this.curTrace.pop()}else if(lastEntry.event=="mouse_input"){this.promptForMouseInput=true;this.userInputPromptStr=htmlspecialchars(lastEntry.prompt);this.curTrace.pop()}}this.curInstr=0;this.params=params;if(!this.params){this.params={}}var arrowLinesDef=this.params.arrowLines!==undefined;var highlightLinesDef=this.params.highlightLines!==undefined;if(!arrowLinesDef&&!highlightLinesDef){this.params.highlightLines=false;this.params.arrowLines=true}else if(arrowLinesDef&&highlightLinesDef){}else if(arrowLinesDef){this.params.highlightLines=!this.params.arrowLines}else{this.params.arrowLines=!this.params.highlightLines}this.compactFuncLabels=this.params.compactFuncLabels;if(this.params.pyCrazyMode){this.params.arrowLines=this.params.highlightLines=false}if(this.params.visualizerIdOverride){this.visualizerID=this.params.visualizerIdOverride}else{this.visualizerID=curVisualizerID;curVisualizerID++}this.leftGutterSvgInitialized=false;this.arrowOffsetY=undefined;this.codeRowHeight=undefined;this.disableHeapNesting=this.params.disableHeapNesting==true;this.drawParentPointers=this.params.drawParentPointers==true;this.textualMemoryLabels=this.params.textualMemoryLabels==true;this.showOnlyOutputs=this.params.showOnlyOutputs==true;this.tabularView=this.params.tabularView==true;this.showAllFrameLabels=this.params.showAllFrameLabels==true;this.executeCodeWithRawInputFunc=this.params.executeCodeWithRawInputFunc;this.jsPlumbInstance=jsPlumb.getInstance({Endpoint:["Dot",{radius:3}],EndpointStyles:[{fillStyle:connectorBaseColor},{fillstyle:null}],Anchors:["RightMiddle","LeftMiddle"],PaintStyle:{lineWidth:1,strokeStyle:connectorBaseColor},Connector:["StateMachine"],Overlays:[["Arrow",{length:10,width:7,foldback:.55,location:1}]],EndpointHoverStyles:[{fillStyle:connectorHighlightColor},{fillstyle:null}],HoverPaintStyle:{lineWidth:1,strokeStyle:connectorHighlightColor}});var instrLimitReached=false;this.domRoot=$("#"+domRootID);this.domRoot.data("vis",this);this.domRootD3=d3.select("#"+domRootID);this.domRoot.html('<div class="ExecutionVisualizer"></div>');this.domRoot=this.domRoot.find("div.ExecutionVisualizer");this.domRootD3=this.domRootD3.select("div.ExecutionVisualizer");this.codeOutputLines=null;this.breakpoints=null;this.sortedBreakpointsList=[];this.classAttrsHidden={};this.pytutor_hooks={};if(this.params.lang==="java"){this.activateJavaFrontend()}this.numStdoutLines=0;var lastStdout;for(var i=this.curTrace.length-1;i>=0;i--){lastStdout=this.curTrace[i].stdout;if(lastStdout){break}}if(lastStdout){this.numStdoutLines=lastStdout.rtrim().split("\n").length}this.try_hook("end_constructor",{myViz:this});this.hasRendered=false;this.render()}ExecutionVisualizer.prototype.add_pytutor_hook=function(hook_name,func){if(this.pytutor_hooks[hook_name])this.pytutor_hooks[hook_name].push(func);else this.pytutor_hooks[hook_name]=[func]};ExecutionVisualizer.prototype.try_hook=function(hook_name,args){if(this.pytutor_hooks[hook_name]){for(var i=0;i<this.pytutor_hooks[hook_name].length;i++){var handled_and_result=this.pytutor_hooks[hook_name][i].apply(null,[args]);if(handled_and_result&&handled_and_result[0])return handled_and_result}}return[false]};ExecutionVisualizer.prototype.resetJsPlumbManager=function(){this.jsPlumbManager={heap_pointer_src_id:1,connectionEndpointIDs:d3.map(),heapConnectionEndpointIDs:d3.map(),parentPointerConnectionEndpointIDs:d3.map(),renderedHeapObjectIDs:d3.map()}};ExecutionVisualizer.prototype.generateID=function(original_id){return"v"+this.visualizerID+"__"+original_id};ExecutionVisualizer.prototype.generateHeapObjID=function(objID,stepNum){return this.generateID("heap_object_"+objID+"_s"+stepNum)};ExecutionVisualizer.prototype.render=function(){if(this.hasRendered){alert("ERROR: You should only call render() ONCE on an ExecutionVisualizer object.");return}var myViz=this;var codeDisplayHTML='<div id="codeDisplayDiv">        <div id="langDisplayDiv"></div>        <div id="pyCodeOutputDiv"/>        <div id="editCodeLinkDiv"><a id="editBtn">Edit code</a>        <span id="liveModeSpan" style="display: none;">| <a id="editLiveModeBtn" href="#">Live programming</a></a>        </div>        <div id="legendDiv"/>        <div id="executionSlider" class="executionSlider"/>        <div id="executionSliderFooter"/>        <div id="vcrControls">        <button id="jmpFirstInstr", type="button">&lt;&lt; First</button>        <button id="jmpStepBack", type="button">&lt; Back</button>        <button id="jmpStepFwd", type="button">Forward &gt;</button>        <button id="jmpLastInstr", type="button">Last &gt;&gt;</button>        <div><span id="curInstr">Step ? of ?</span></div>        </div>        <div id="rawUserInputDiv">        <span id="userInputPromptStr"/>        <input type="text" id="raw_input_textbox" size="30"/>        <button id="raw_input_submit_btn">Submit</button>        </div>        <div id="errorOutput"/>        <div id="stepAnnotationDiv">        <textarea class="annotationText" id="stepAnnotationEditor" cols="60" rows="3"></textarea>        <div class="annotationText" id="stepAnnotationViewer"></div>        </div>        <div id="annotateLinkDiv"><button id="annotateBtn" type="button">Annotate this step</button></div>        </div>';var outputsHTML='<div id="htmlOutputDiv"></div>        <div id="progOutputs">        <div id="printOutputDocs">Print output (drag lower right corner to resize)</div>\n        <textarea id="pyStdout" cols="40" rows="5" wrap="off" readonly></textarea>        </div>';var codeVizHTML='<div id="dataViz">        <table id="stackHeapTable">        <tr>        <td id="stack_td">        <div id="globals_area">        <div id="stackHeader">Frames</div>        </div>        <div id="stack"></div>        </td>        <td id="heap_td">        <div id="heap">        <div id="heapHeader">Objects</div>        </div>        </td>        </tr>        </table>        </div>';if(myViz.tabularView){codeVizHTML='<div id="optTabularView"></div>'}var vizHeaderHTML='<div id="vizHeader">        <textarea class="vizTitleText" id="vizTitleEditor" cols="60" rows="1"></textarea>        <div class="vizTitleText" id="vizTitleViewer"></div>        <textarea class="vizDescriptionText" id="vizDescriptionEditor" cols="75" rows="2"></textarea>        <div class="vizDescriptionText" id="vizDescriptionViewer"></div>        </div>';if(this.params.verticalStack){this.domRoot.html(vizHeaderHTML+'<table border="0" class="visualizer"><tr><td class="vizLayoutTd" id="vizLayoutTdFirst"">'+codeDisplayHTML+'</td></tr><tr><td class="vizLayoutTd" id="vizLayoutTdSecond">'+codeVizHTML+"</td></tr></table>")}else{this.domRoot.html(vizHeaderHTML+'<table border="0" class="visualizer"><tr><td class="vizLayoutTd" id="vizLayoutTdFirst">'+codeDisplayHTML+'</td><td class="vizLayoutTd" id="vizLayoutTdSecond">'+codeVizHTML+"</td></tr></table>")}if(this.showOnlyOutputs){myViz.domRoot.find("#dataViz").hide();this.domRoot.find("#vizLayoutTdSecond").append(outputsHTML);if(this.params.verticalStack){this.domRoot.find("#vizLayoutTdSecond").css("padding-top","25px")}else{this.domRoot.find("#vizLayoutTdSecond").css("padding-left","25px")}}else{var stdoutHeight="75px";if(this.numStdoutLines<=3){stdoutHeight=18*this.numStdoutLines+"px"}if(this.params.embeddedMode){stdoutHeight="45px"}this.domRoot.find("#vizLayoutTdSecond").prepend(outputsHTML);this.domRoot.find("#pyStdout").width("350px").height(stdoutHeight).resizable()}if(this.params.arrowLines){this.domRoot.find("#legendDiv").append('<svg id="prevLegendArrowSVG"/> line that has just executed').append('<p style="margin-top: 4px"><svg id="curLegendArrowSVG"/> next line to execute</p>');myViz.domRootD3.select("svg#prevLegendArrowSVG").append("polygon").attr("points",SVG_ARROW_POLYGON).attr("fill",lightArrowColor);myViz.domRootD3.select("svg#curLegendArrowSVG").append("polygon").attr("points",SVG_ARROW_POLYGON).attr("fill",darkArrowColor)}else if(this.params.highlightLines){myViz.domRoot.find("#legendDiv").append('<span class="highlight-legend highlight-prev">line that has just executed</span> ').append('<span class="highlight-legend highlight-cur">next line to execute</span>')}else if(this.params.pyCrazyMode){myViz.domRoot.find("#legendDiv").append('<a href="https://github.com/pgbovine/Py2crazy">Py2crazy</a> mode!').append(" Stepping through (roughly) each executed expression. Color codes:<p/>").append('<span class="pycrazy-highlight-prev">expression that just executed</span><br/>').append('<span class="pycrazy-highlight-cur">next expression to execute</span>')}if(this.params.editCodeBaseURL){var pyVer="2";if(this.params.lang==="js"){pyVer="js"}else if(this.params.lang==="ts"){pyVer="ts"}else if(this.params.lang==="java"){pyVer="java"}else if(this.params.lang==="py3"){pyVer="3"}else if(this.params.lang==="c"){pyVer="c"}else if(this.params.lang==="cpp"){pyVer="cpp"}var urlStr=$.param.fragment(this.params.editCodeBaseURL,{code:this.curInputCode,py:pyVer},2);this.domRoot.find("#editBtn").attr("href",urlStr)}else{this.domRoot.find("#editCodeLinkDiv").hide();this.domRoot.find("#editBtn").attr("href","#");this.domRoot.find("#editBtn").click(function(){return false})}if(this.params.lang!==undefined){if(this.params.lang==="js"){this.domRoot.find("#langDisplayDiv").html("JavaScript")}else if(this.params.lang==="ts"){this.domRoot.find("#langDisplayDiv").html("TypeScript")}else if(this.params.lang==="ruby"){this.domRoot.find("#langDisplayDiv").html("Ruby")}else if(this.params.lang==="java"){this.domRoot.find("#langDisplayDiv").html("Java")}else if(this.params.lang==="py2"){this.domRoot.find("#langDisplayDiv").html("Python 2.7")}else if(this.params.lang==="py3"){this.domRoot.find("#langDisplayDiv").html("Python 3")}else if(this.params.lang==="c"){this.domRoot.find("#langDisplayDiv").html('C (gcc 4.8, C11) <font color="#e93f34">EXPERIMENTAL!</font><br/>see <a href="https://github.com/pgbovine/opt-cpp-backend/issues" target="_blank">known bugs</a> and report to philip@pgbovine.net')}else if(this.params.lang==="cpp"){this.domRoot.find("#langDisplayDiv").html('C++ (gcc 4.8, C++11) <font color="#e93f34">EXPERIMENTAL!</font><br/>see <a href="https://github.com/pgbovine/opt-cpp-backend/issues" target="_blank">known bugs</a> and report to philip@pgbovine.net')}else{this.domRoot.find("#langDisplayDiv").hide()}}if(this.params.allowEditAnnotations!==undefined){this.allowEditAnnotations=this.params.allowEditAnnotations}else{this.allowEditAnnotations=false}if(this.params.pyCrazyMode!==undefined){this.pyCrazyMode=this.params.pyCrazyMode}else{this.pyCrazyMode=false}this.domRoot.find("#stepAnnotationEditor").hide();if(this.params.embeddedMode){this.embeddedMode=true;if(this.params.codeDivWidth===undefined){this.params.codeDivWidth=this.DEFAULT_EMBEDDED_CODE_DIV_WIDTH}if(this.params.codeDivHeight===undefined){this.params.codeDivHeight=this.DEFAULT_EMBEDDED_CODE_DIV_HEIGHT}this.allowEditAnnotations=false;this.domRoot.find("#codeDisplayDiv").append('<div style="font-size: 8pt; margin-bottom: 20px;">Visualized using <a href="http://pythontutor.com" target="_blank" style="color: #3D58A2;">Online Python Tutor</a> by <a href="http://www.pgbovine.net/" target="_blank" style="color: #3D58A2;">Philip Guo</a></div>');myViz.domRoot.find("#executionSliderDocs").hide()}myViz.editAnnotationMode=false;if(this.allowEditAnnotations){var ab=this.domRoot.find("#annotateBtn");ab.click(function(){if(myViz.editAnnotationMode){myViz.enterViewAnnotationsMode();myViz.domRoot.find("#jmpFirstInstr,#jmpLastInstr,#jmpStepBack,#jmpStepFwd,#executionSlider,#editCodeLinkDiv,#stepAnnotationViewer").show();myViz.domRoot.find("#stepAnnotationEditor").hide();ab.html("Annotate this step")}else{myViz.enterEditAnnotationsMode();myViz.domRoot.find("#jmpFirstInstr,#jmpLastInstr,#jmpStepBack,#jmpStepFwd,#executionSlider,#editCodeLinkDiv,#stepAnnotationViewer").hide();myViz.domRoot.find("#stepAnnotationEditor").show();ab.html("Done annotating")}})}else{this.domRoot.find("#annotateBtn").hide()}if(this.params.codeDivWidth&&this.params.codeDivWidth<470){this.domRoot.find("#jmpFirstInstr").hide();this.domRoot.find("#jmpLastInstr").hide()}if(this.params.codeDivWidth){this.domRoot.find("#codeDisplayDiv").width(this.params.codeDivWidth)}this.domRoot.find("#codeDisplayDiv").resizable({handles:"e",minWidth:250,resize:function(event,ui){myViz.domRoot.find("#codeDisplayDiv").css("height","auto");myViz.renderSliderBreakpoints();if(myViz.params.updateOutputCallback)myViz.params.updateOutputCallback(this)}});if(this.params.codeDivHeight){this.domRoot.find("#pyCodeOutputDiv").css("max-height",this.params.codeDivHeight+"px")}this.domRoot.find("#globals_area").append('<div class="stackFrame" id="'+myViz.generateID("globals")+'"><div id="'+myViz.generateID("globals_header")+'" class="stackFrameHeader">'+this.getRealLabel("Global frame")+'</div><table class="stackFrameVarTable" id="'+myViz.generateID("global_table")+'"></table></div>');if(this.params.hideOutput){this.domRoot.find("#progOutputs").hide()}this.domRoot.find("#jmpFirstInstr").click(function(){myViz.renderStep(0)});this.domRoot.find("#jmpLastInstr").click(function(){myViz.renderStep(myViz.curTrace.length-1)});this.domRoot.find("#jmpStepBack").click(function(){myViz.stepBack()});this.domRoot.find("#jmpStepFwd").click(function(){myViz.stepForward()});this.domRoot.find("#vcrControls #jmpFirstInstr").attr("disabled",true);this.domRoot.find("#vcrControls #jmpStepBack").attr("disabled",true);this.domRoot.find("#vcrControls #jmpStepFwd").attr("disabled",true);this.domRoot.find("#vcrControls #jmpLastInstr").attr("disabled",true);var lastEntry=this.curTrace[this.curTrace.length-1];this.instrLimitReached=lastEntry.event=="instruction_limit_reached";if(this.instrLimitReached){this.curTrace.pop();var warningMsg=lastEntry.exception_msg;this.instrLimitReachedWarningMsg=warningMsg;myViz.domRoot.find("#errorOutput").html(htmlspecialchars(warningMsg));myViz.domRoot.find("#errorOutput").show()}var sliderDiv=this.domRoot.find("#executionSlider");sliderDiv.slider({min:0,max:this.curTrace.length-1,step:1});sliderDiv.find(".ui-slider-handle").unbind("keydown");sliderDiv.find(".ui-slider-handle").css("width","0.8em");sliderDiv.find(".ui-slider-handle").css("height","1.4em");this.domRoot.find(".ui-widget-content").css("font-size","0.9em");this.domRoot.find("#executionSlider").bind("slide",function(evt,ui){if(evt.originalEvent){myViz.renderStep(ui.value)}});if(this.params.startingInstruction){this.params.jumpToEnd=false;if(this.params.startingInstruction==this.curTrace.length){this.params.startingInstruction--}if(this.params.startingInstruction<0){this.params.startingInstruction=0}if(this.params.startingInstruction>=this.curTrace.length){this.params.startingInstruction=this.curTrace.length-1}assert(0<=this.params.startingInstruction&&this.params.startingInstruction<this.curTrace.length);this.curInstr=this.params.startingInstruction}if(this.params.jumpToEnd){var firstErrorStep=-1;for(var i=0;i<this.curTrace.length;i++){var e=this.curTrace[i];if(e.event=="exception"||e.event=="uncaught_exception"){firstErrorStep=i;break}}if(firstErrorStep>=0){this.curInstr=firstErrorStep}else{this.curInstr=this.curTrace.length-1}}if(this.params.hideCode){this.domRoot.find("#vizLayoutTdFirst").hide()}this.try_hook("end_render",{myViz:this});this.precomputeCurTraceLayouts();if(!this.params.hideCode){this.renderPyCodeOutput()}if(this.tabularView){this.renderTabularView();$(window).scroll(function(){var codePane=myViz.domRoot.find("#vizLayoutTdFirst");var docScrollTop=$(document).scrollTop();var offset=codePane.offset().top;var delta=docScrollTop-offset;if(delta<0){delta=0}var optTable=myViz.domRoot.find("#optTabularView");var optTableBottom=optTable.height()+optTable.offset().top;var codeDisplayHeight=myViz.domRoot.find("#codeDisplayDiv").height();if(delta-offset<optTableBottom-codeDisplayHeight){codePane.css("padding-top",delta)}})}var ruiDiv=myViz.domRoot.find("#rawUserInputDiv");ruiDiv.find("#userInputPromptStr").html(myViz.userInputPromptStr);ruiDiv.find("#raw_input_submit_btn").click(function(){var userInput=ruiDiv.find("#raw_input_textbox").val();myViz.executeCodeWithRawInputFunc(userInput,myViz.curInstr+1)});this.updateOutput();this.hasRendered=true};ExecutionVisualizer.prototype.showVizHeaderViewMode=function(){var titleVal=this.domRoot.find("#vizTitleEditor").val().trim();var descVal=this.domRoot.find("#vizDescriptionEditor").val().trim();this.domRoot.find("#vizTitleEditor,#vizDescriptionEditor").hide();if(!titleVal&&!descVal){this.domRoot.find("#vizHeader").hide()}else{this.domRoot.find("#vizHeader,#vizTitleViewer,#vizDescriptionViewer").show();if(titleVal){this.domRoot.find("#vizTitleViewer").html(htmlsanitize(titleVal))}if(descVal){this.domRoot.find("#vizDescriptionViewer").html(htmlsanitize(descVal))}}};ExecutionVisualizer.prototype.showVizHeaderEditMode=function(){this.domRoot.find("#vizHeader").show();this.domRoot.find("#vizTitleViewer,#vizDescriptionViewer").hide();this.domRoot.find("#vizTitleEditor,#vizDescriptionEditor").show()};ExecutionVisualizer.prototype.destroyAllAnnotationBubbles=function(){var myViz=this;if(myViz.allAnnotationBubbles){$.each(myViz.allAnnotationBubbles,function(i,e){e.destroyQTip()})}this.domRoot.find("#pyCodeOutputDiv").unbind("scroll");myViz.allAnnotationBubbles=null};ExecutionVisualizer.prototype.initStepAnnotation=function(){var curEntry=this.curTrace[this.curInstr];if(curEntry.stepAnnotation){this.domRoot.find("#stepAnnotationViewer").html(htmlsanitize(curEntry.stepAnnotation));this.domRoot.find("#stepAnnotationEditor").val(curEntry.stepAnnotation)}else{this.domRoot.find("#stepAnnotationViewer").html("");this.domRoot.find("#stepAnnotationEditor").val("")}};ExecutionVisualizer.prototype.initAllAnnotationBubbles=function(){var myViz=this;myViz.destroyAllAnnotationBubbles();var codelineIDs=[];$.each(this.domRoot.find("#pyCodeOutput .cod"),function(i,e){codelineIDs.push($(e).attr("id"))});var heapObjectIDs=[];$.each(this.domRoot.find(".heapObject"),function(i,e){heapObjectIDs.push($(e).attr("id"))});var variableIDs=[];$.each(this.domRoot.find(".variableTr"),function(i,e){variableIDs.push($(e).attr("id"))});var frameIDs=[];$.each(this.domRoot.find(".stackFrame"),function(i,e){frameIDs.push($(e).attr("id"))});myViz.allAnnotationBubbles=[];$.each(codelineIDs,function(i,e){myViz.allAnnotationBubbles.push(new AnnotationBubble(myViz,"codeline",e))});$.each(heapObjectIDs,function(i,e){myViz.allAnnotationBubbles.push(new AnnotationBubble(myViz,"object",e))});$.each(variableIDs,function(i,e){myViz.allAnnotationBubbles.push(new AnnotationBubble(myViz,"variable",e))});$.each(frameIDs,function(i,e){myViz.allAnnotationBubbles.push(new AnnotationBubble(myViz,"frame",e))});this.domRoot.find("#pyCodeOutputDiv").scroll(function(){$.each(myViz.allAnnotationBubbles,function(i,e){if(e.type=="codeline"){e.redrawCodelineBubble()}})})};ExecutionVisualizer.prototype.enterViewAnnotationsMode=function(){this.editAnnotationMode=false;var curEntry=this.curTrace[this.curInstr];var myViz=this;if(!myViz.allAnnotationBubbles){if(curEntry.bubbleAnnotations){myViz.initAllAnnotationBubbles();$.each(myViz.allAnnotationBubbles,function(i,e){var txt=curEntry.bubbleAnnotations[e.domID];if(txt){e.preseedText(txt)}})}}if(myViz.allAnnotationBubbles){var curAnnotations={};$.each(myViz.allAnnotationBubbles,function(i,e){e.enterViewMode();if(e.text){curAnnotations[e.domID]=e.text}});curEntry.bubbleAnnotations=curAnnotations}var stepAnnotationEditorVal=myViz.domRoot.find("#stepAnnotationEditor").val().trim();if(stepAnnotationEditorVal){curEntry.stepAnnotation=stepAnnotationEditorVal}else{delete curEntry.stepAnnotation}myViz.initStepAnnotation();myViz.showVizHeaderViewMode();myViz.redrawConnectors();myViz.redrawAllAnnotationBubbles()};ExecutionVisualizer.prototype.enterEditAnnotationsMode=function(){this.editAnnotationMode=true;var myViz=this;var curEntry=this.curTrace[this.curInstr];if(!myViz.allAnnotationBubbles){myViz.initAllAnnotationBubbles()}$.each(myViz.allAnnotationBubbles,function(i,e){e.enterEditMode()});if(curEntry.stepAnnotation){myViz.domRoot.find("#stepAnnotationEditor").val(curEntry.stepAnnotation)}else{myViz.domRoot.find("#stepAnnotationEditor").val("")}myViz.showVizHeaderEditMode();myViz.redrawConnectors();myViz.redrawAllAnnotationBubbles()};ExecutionVisualizer.prototype.redrawAllAnnotationBubbles=function(){if(this.allAnnotationBubbles){$.each(this.allAnnotationBubbles,function(i,e){e.redrawBubble()})}};ExecutionVisualizer.prototype.findPrevBreakpoint=function(){var myViz=this;var c=myViz.curInstr;if(myViz.sortedBreakpointsList.length==0){return-1}else{for(var i=1;i<myViz.sortedBreakpointsList.length;i++){var prev=myViz.sortedBreakpointsList[i-1];var cur=myViz.sortedBreakpointsList[i];if(c<=prev)return-1;if(cur>=c)return prev}var lastElt=myViz.sortedBreakpointsList[myViz.sortedBreakpointsList.length-1];return lastElt<c?lastElt:-1}};ExecutionVisualizer.prototype.findNextBreakpoint=function(){var myViz=this;var c=myViz.curInstr;if(myViz.sortedBreakpointsList.length==0){return-1}else if($.inArray(c,myViz.sortedBreakpointsList)>=0){return c+1}else{for(var i=0;i<myViz.sortedBreakpointsList.length-1;i++){var cur=myViz.sortedBreakpointsList[i];var next=myViz.sortedBreakpointsList[i+1];if(c<cur)return cur;if(cur<=c&&c<next)return next}var lastElt=myViz.sortedBreakpointsList[myViz.sortedBreakpointsList.length-1];return lastElt>c?lastElt:-1}};ExecutionVisualizer.prototype.renderCorrectFile=function(prevStep){var myViz=this;var curStep=myViz.curTrace[myViz.curInstr];if(curStep&&curStep.custom_module_name){this.curInputCode=this.sourceFiles[curStep.custom_module_name]}else if(curStep){this.curInputCode=this.sourceFiles.main_code}if(prevStep&&prevStep>0){pastStep=myViz.curTrace[prevStep]}else if(!prevStep&&myViz.curInstr>0){pastStep=myViz.curTrace[myViz.curInstr-1]}var newFileName="Python 3";if(curStep.custom_module_name){newFileName=curStep.custom_module_name+".py"}this.domRoot.find("#langDisplayDiv").html(newFileName);if(pastStep&&pastStep.custom_module_name!=curStep.custom_module_name){this.justSwitchedFiles=true}else{this.justSwitchedFiles=false}var lines=this.curInputCode.split("\n");this.codeOutputLines=[];for(var i=0;i<lines.length;i++){var cod=lines[i];var n={text:cod,lineNumber:i||1,executionPoints:[],breakpointHere:false};$.each(this.curTrace,function(j,elt){if(elt.line===n.lineNumber){n.executionPoints.push(j)}});var breakpointInComment=false;var toks=cod.split("#");for(var j=1;j<toks.length;j++){if(toks[j].indexOf("breakpoint")!=-1){breakpointInComment=true}}if(breakpointInComment&&n.executionPoints.length>0){n.breakpointHere=true;this.addToBreakpoints(n.executionPoints)}this.codeOutputLines.push(n)}this.renderPyCodeOutput(true);this.updateOutput(true)};ExecutionVisualizer.prototype.stepForward=function(){var myViz=this;if(myViz.editAnnotationMode){return}if(myViz.curInstr<myViz.curTrace.length-1){if(myViz.sortedBreakpointsList.length>0){var nextBreakpoint=myViz.findNextBreakpoint();if(nextBreakpoint!=-1)myViz.curInstr=nextBreakpoint;else myViz.curInstr+=1}else{myViz.curInstr+=1}this.renderCorrectFile();myViz.updateOutput(true);return true}return false};ExecutionVisualizer.prototype.stepBack=function(){var myViz=this;if(myViz.editAnnotationMode){return}if(myViz.curInstr>0){if(myViz.sortedBreakpointsList.length>0){var prevBreakpoint=myViz.findPrevBreakpoint();if(prevBreakpoint!=-1)myViz.curInstr=prevBreakpoint;else myViz.curInstr-=1}else{myViz.curInstr-=1}myViz.renderCorrectFile();myViz.updateOutput();return true}return false};ExecutionVisualizer.prototype.renderSliderBreakpoints=function(){var myViz=this;myViz.domRoot.find("#executionSliderFooter").empty();var w=myViz.domRoot.find("#executionSlider").width();var sliderOverlay=myViz.domRootD3.select("#executionSliderFooter").append("svg").attr("id","sliderOverlay").attr("width",w).attr("height",12);var xrange=d3.scale.linear().domain([0,myViz.curTrace.length-1]).range([0,w]);sliderOverlay.selectAll("rect").data(myViz.sortedBreakpointsList).enter().append("rect").attr("x",function(d,i){return d===0?0:xrange(d)-1}).attr("y",0).attr("width",2).attr("height",12).style("fill",function(d){return breakpointColor})};ExecutionVisualizer.prototype.renderPyCodeOutput=function(){var myViz=this;this.breakpoints=d3.map();this.sortedBreakpointsList=[];this.codeOutputLines=[];function _getSortedBreakpointsList(){var ret=[];myViz.breakpoints.forEach(function(k,v){ret.push(Number(k))});ret.sort(function(x,y){return x-y});return ret}function addToBreakpoints(executionPoints){$.each(executionPoints,function(i,ep){myViz.breakpoints.set(ep,1)});myViz.sortedBreakpointsList=_getSortedBreakpointsList()}function removeFromBreakpoints(executionPoints){$.each(executionPoints,function(i,ep){myViz.breakpoints.remove(ep)});myViz.sortedBreakpointsList=_getSortedBreakpointsList()}function setBreakpoint(t,d){addToBreakpoints(d.executionPoints);d3.select(t.parentNode).select("td.lineNo").style("color",breakpointColor);d3.select(t.parentNode).select("td.lineNo").style("font-weight","bold");d3.select(t.parentNode).select("td.cod").style("color",breakpointColor);myViz.renderSliderBreakpoints()}function unsetBreakpoint(t,d){removeFromBreakpoints(d.executionPoints);d3.select(t.parentNode).select("td.lineNo").style("color","");d3.select(t.parentNode).select("td.lineNo").style("font-weight","");d3.select(t.parentNode).select("td.cod").style("color","");myViz.renderSliderBreakpoints()}var lines=this.curInputCode.split("\n");for(var i=0;i<lines.length;i++){var cod=lines[i];var n={};n.text=cod;n.lineNumber=i+1;n.executionPoints=[];n.breakpointHere=false;$.each(this.curTrace,function(j,elt){if(elt.line==n.lineNumber){n.executionPoints.push(j)}});var breakpointInComment=false;var toks=cod.split("#");for(var j=1;j<toks.length;j++){if(toks[j].indexOf("breakpoint")!=-1){breakpointInComment=true}}if(breakpointInComment&&n.executionPoints.length>0){n.breakpointHere=true;addToBreakpoints(n.executionPoints)}this.codeOutputLines.push(n)}myViz.domRoot.find("#pyCodeOutputDiv").empty();var codeOutputD3=this.domRootD3.select("#pyCodeOutputDiv").append("table").attr("id","pyCodeOutput").selectAll("tr").data(this.codeOutputLines).enter().append("tr").selectAll("td").data(function(d,i){return[d,d]}).enter().append("td").attr("class",function(d,i){if(i==0){return"lineNo"}else{return"cod"}}).attr("id",function(d,i){if(i==0){return"lineNo"+d.lineNumber}else{return myViz.generateID("cod"+d.lineNumber)}}).html(function(d,i){if(i==0){return d.lineNumber}else{return htmlspecialchars(d.text)}});if(myViz.params.arrowLines){myViz.domRoot.find("#pyCodeOutput tr:first").prepend('<td id="gutterTD" valign="top" rowspan="'+this.codeOutputLines.length+'"><svg id="leftCodeGutterSVG"/></td>');myViz.domRootD3.select("svg#leftCodeGutterSVG").append("polygon").attr("id","prevLineArrow").attr("points",SVG_ARROW_POLYGON).attr("fill",lightArrowColor);myViz.domRootD3.select("svg#leftCodeGutterSVG").append("polygon").attr("id","curLineArrow").attr("points",SVG_ARROW_POLYGON).attr("fill",darkArrowColor)}codeOutputD3.style("cursor",function(d,i){var exePts=d.executionPoints;if(!exePts||exePts.length==0){return}else{return"pointer"}}).on("click",function(d,i){var exePts=d.executionPoints;if(!exePts||exePts.length==0){return}d.breakpointHere=!d.breakpointHere;if(d.breakpointHere){setBreakpoint(this,d)}else{unsetBreakpoint(this,d)}})};function htmlWithHighlight(inputStr,highlightInd,extent,highlightCssClass){var prefix="";if(highlightInd>0){prefix=inputStr.slice(0,highlightInd)}var highlightedChars=inputStr.slice(highlightInd,highlightInd+extent);var suffix="";if(highlightInd+extent<inputStr.length){suffix=inputStr.slice(highlightInd+extent,inputStr.length)}var lineHTML=htmlspecialchars(prefix)+'<span class="'+highlightCssClass+'">'+htmlspecialchars(highlightedChars)+"</span>"+htmlspecialchars(suffix);return lineHTML}ExecutionVisualizer.prototype.renderStdout=function(){var curEntry=this.curTrace[this.curInstr];if(!this.params.hideOutput&&this.numStdoutLines>0){this.domRoot.find("#progOutputs").show();var pyStdout=this.domRoot.find("#pyStdout");var oldLeft=pyStdout.scrollLeft();pyStdout.val(curEntry.stdout.rtrim());pyStdout.scrollLeft(oldLeft);pyStdout.scrollTop(pyStdout[0].scrollHeight)}else{this.domRoot.find("#progOutputs").hide()}};ExecutionVisualizer.prototype.updateCurPrevLines=function(){var myViz=this;var totalInstrs=myViz.curTrace.length;var isLastInstr=myViz.curInstr===totalInstrs-1;var isTerminated=!myViz.instrLimitReached&&isLastInstr;var curLineNumber=null;var prevLineNumber=null;var curEntry=myViz.curTrace[myViz.curInstr];var hasError=false;var curIsReturn=curEntry.event=="return";var prevIsReturn=false;if(myViz.curInstr>0){prevLineNumber=myViz.curTrace[myViz.curInstr-1].line;prevIsReturn=myViz.curTrace[myViz.curInstr-1].event=="return";if(prevIsReturn){var idx=myViz.curInstr-1;var retStack=myViz.curTrace[idx].stack_to_render;assert(retStack.length>0);var retFrameId=retStack[retStack.length-1].frame_id;while(idx>=0){var entry=myViz.curTrace[idx];if(entry.event=="call"&&entry.stack_to_render){var topFrame=entry.stack_to_render[entry.stack_to_render.length-1];if(topFrame.frame_id==retFrameId){break}}idx--}if(idx>0){var callingEntry=myViz.curTrace[idx-1];prevLineNumber=callingEntry.line;prevIsReturn=false}}}if(curEntry.event=="exception"||curEntry.event=="uncaught_exception"){assert(curEntry.exception_msg);hasError=true;myViz.curLineExceptionMsg=curEntry.exception_msg}curLineNumber=curEntry.line;if(isTerminated&&!hasError){if(prevLineNumber==curLineNumber){curLineNumber=null}}myViz.curLineNumber=curLineNumber;myViz.prevLineNumber=prevLineNumber;myViz.curLineIsReturn=curIsReturn;myViz.prevLineIsReturn=prevIsReturn};ExecutionVisualizer.prototype.updateOutput=function(smoothTransition){if(this.params.hideCode){this.updateOutputMini()}else{this.updateOutputFull(smoothTransition)}this.renderStdout();this.try_hook("end_updateOutput",{myViz:this})};ExecutionVisualizer.prototype.updateOutputFull=function(smoothTransition){assert(this.curTrace);assert(!this.params.hideCode);var myViz=this;if(!myViz.domRoot.is(":visible")){return}myViz.curLineNumber=undefined;myViz.prevLineNumber=undefined;myViz.curLineIsReturn=undefined;myViz.prevLineIsReturn=undefined;myViz.curLineExceptionMsg=undefined;myViz.codeHorizontalOverflow=myViz.domRoot.find("#pyCodeOutput").width()-myViz.domRoot.find("#pyCodeOutputDiv").width();if(myViz.codeHorizontalOverflow<0){myViz.codeHorizontalOverflow=0}var prevDataVizHeight=myViz.domRoot.find("#dataViz").height();var gutterSVG=myViz.domRoot.find("svg#leftCodeGutterSVG");if(!myViz.leftGutterSvgInitialized&&myViz.params.arrowLines){gutterSVG.height(gutterSVG.parent().height());var firstRowOffsetY=myViz.domRoot.find("table#pyCodeOutput tr:first").offset().top;myViz.codeRowHeight=myViz.domRoot.find("table#pyCodeOutput td.cod:first").height();if(this.codeOutputLines&&this.codeOutputLines.length>1){var secondRowOffsetY=myViz.domRoot.find("table#pyCodeOutput tr:nth-child(2)").offset().top;myViz.codeRowHeight=secondRowOffsetY-firstRowOffsetY}assert(myViz.codeRowHeight>0);var gutterOffsetY=gutterSVG.offset().top;var teenyAdjustment=gutterOffsetY-firstRowOffsetY;myViz.arrowOffsetY=Math.floor(myViz.codeRowHeight/2-SVG_ARROW_HEIGHT/2)-teenyAdjustment;myViz.leftGutterSvgInitialized=true}if(myViz.params.arrowLines){assert(myViz.arrowOffsetY!==undefined);assert(myViz.codeRowHeight!==undefined);assert(0<=myViz.arrowOffsetY&&myViz.arrowOffsetY<=myViz.codeRowHeight)}if(this.params.updateOutputCallback){this.params.updateOutputCallback(this)}var curEntry=this.curTrace[this.curInstr];var hasError=false;if(curEntry.question){$("#"+curEntry.question.div).modal({position:["25%","50%"]})}if(myViz.params.debugMode){console.log("updateOutputFull",curEntry);myViz.debugMode=true}var totalInstrs=this.curTrace.length;var isLastInstr=this.curInstr==totalInstrs-1;var vcrControls=myViz.domRoot.find("#vcrControls");if(isLastInstr){if(this.promptForUserInput||this.promptForMouseInput){vcrControls.find("#curInstr").html('<b><font color="'+brightRed+'">Enter user input below:</font></b>')}else if(this.instrLimitReached){vcrControls.find("#curInstr").html("Instruction limit reached")}else{vcrControls.find("#curInstr").html("Program terminated")}}else{vcrControls.find("#curInstr").html("Step "+String(this.curInstr+1)+" of "+String(totalInstrs-1))}vcrControls.find("#jmpFirstInstr").attr("disabled",false);vcrControls.find("#jmpStepBack").attr("disabled",false);vcrControls.find("#jmpStepFwd").attr("disabled",false);vcrControls.find("#jmpLastInstr").attr("disabled",false);if(this.curInstr==0){vcrControls.find("#jmpFirstInstr").attr("disabled",true);vcrControls.find("#jmpStepBack").attr("disabled",true)}if(isLastInstr){vcrControls.find("#jmpLastInstr").attr("disabled",true);vcrControls.find("#jmpStepFwd").attr("disabled",true)}myViz.domRoot.find("#executionSlider").slider("value",this.curInstr);if(curEntry.event=="exception"||curEntry.event=="uncaught_exception"){assert(curEntry.exception_msg);if(curEntry.exception_msg=="Unknown error"){myViz.domRoot.find("#errorOutput").html("Unknown error: Please email a bug report to philip@pgbovine.net")}else{myViz.domRoot.find("#errorOutput").html(htmlspecialchars(curEntry.exception_msg))}myViz.domRoot.find("#errorOutput").show();hasError=true;myViz.curLineExceptionMsg=curEntry.exception_msg}else{if(!this.instrLimitReached){myViz.domRoot.find("#errorOutput").hide()}}function highlightCodeLine(){var isTerminated=!myViz.instrLimitReached&&isLastInstr;var pcod=myViz.domRoot.find("#pyCodeOutputDiv");var curLineNumber=null;var prevLineNumber=null;var prevColumn=undefined;var prevExprStartCol=undefined;var prevExprWidth=undefined;var curIsReturn=curEntry.event=="return";var prevIsReturn=false;if(myViz.curInstr>0){prevLineNumber=myViz.curTrace[myViz.curInstr-1].line;prevIsReturn=myViz.curTrace[myViz.curInstr-1].event=="return";if(prevIsReturn){var idx=myViz.curInstr-1;var retStack=myViz.curTrace[idx].stack_to_render;assert(retStack.length>0);var retFrameId=retStack[retStack.length-1].frame_id;while(idx>=0){var entry=myViz.curTrace[idx];if(entry.event=="call"&&entry.stack_to_render){var topFrame=entry.stack_to_render[entry.stack_to_render.length-1];if(topFrame.frame_id==retFrameId){break}}idx--}if(idx>0){var callingEntry=myViz.curTrace[idx-1];prevLineNumber=callingEntry.line;prevIsReturn=false;smoothTransition=false}}if(myViz.pyCrazyMode){var p=myViz.curTrace[myViz.curInstr-1];prevColumn=p.column;prevExprStartCol=p.expr_start_col!==undefined?p.expr_start_col:p.column;prevExprWidth=p.expr_width!==undefined?p.expr_width:1}}curLineNumber=curEntry.line;if(myViz.pyCrazyMode){var curColumn=curEntry.column;var curExprStartCol=curEntry.expr_start_col!==undefined?curEntry.expr_start_col:curColumn;var curExprWidth=curEntry.expr_width!==undefined?curEntry.expr_width:1;var curLineInfo=myViz.codeOutputLines[curLineNumber-1];assert(curLineInfo.lineNumber==curLineNumber);var codeAtLine=curLineInfo.text;$.each(myViz.codeOutputLines,function(i,e){var d=myViz.generateID("cod"+e.lineNumber);myViz.domRoot.find("#"+d).html(htmlspecialchars(e.text))});if(prevLineNumber==curLineNumber){var curLineHTML="";for(var i=0;i<codeAtLine.length;i++){var isCur=curExprStartCol<=i&&i<curExprStartCol+curExprWidth;var isPrev=prevExprStartCol<=i&&i<prevExprStartCol+prevExprWidth;var htmlEscapedChar=htmlspecialchars(codeAtLine[i]);if(isCur&&isPrev){curLineHTML+='<span class="pycrazy-highlight-prev-and-cur">'+htmlEscapedChar+"</span>"}else if(isPrev){curLineHTML+='<span class="pycrazy-highlight-prev">'+htmlEscapedChar+"</span>"}else if(isCur){curLineHTML+='<span class="pycrazy-highlight-cur">'+htmlEscapedChar+"</span>"}else{curLineHTML+=htmlEscapedChar}}assert(curLineHTML);myViz.domRoot.find("#"+myViz.generateID("cod"+curLineNumber)).html(curLineHTML)}else{if(prevLineNumber){var prevLineInfo=myViz.codeOutputLines[prevLineNumber-1];var prevLineHTML=htmlWithHighlight(prevLineInfo.text,prevExprStartCol,prevExprWidth,"pycrazy-highlight-prev");myViz.domRoot.find("#"+myViz.generateID("cod"+prevLineNumber)).html(prevLineHTML)}var curLineHTML=htmlWithHighlight(codeAtLine,curExprStartCol,curExprWidth,"pycrazy-highlight-cur");myViz.domRoot.find("#"+myViz.generateID("cod"+curLineNumber)).html(curLineHTML)}}var prevVerticalNudge=prevIsReturn?Math.floor(myViz.codeRowHeight/3):0;var curVerticalNudge=curIsReturn?Math.floor(myViz.codeRowHeight/3):0;if(isTerminated&&!hasError){if(prevLineNumber==curLineNumber){curLineNumber=null}else{curVerticalNudge=curVerticalNudge-2}}if(myViz.params.arrowLines){if(prevLineNumber&&!myViz.justSwitchedFiles){var pla=myViz.domRootD3.select("#prevLineArrow");var translatePrevCmd="translate(0, "+((prevLineNumber-1)*myViz.codeRowHeight+myViz.arrowOffsetY+prevVerticalNudge)+")";if(smoothTransition){pla.transition().duration(200).attr("fill","white").each("end",function(){pla.attr("transform",translatePrevCmd).attr("fill",lightArrowColor);gutterSVG.find("#prevLineArrow").show()})}else{pla.attr("transform",translatePrevCmd);gutterSVG.find("#prevLineArrow").show()}}else{gutterSVG.find("#prevLineArrow").hide()}if(curLineNumber){var cla=myViz.domRootD3.select("#curLineArrow");var translateCurCmd="translate(0, "+((curLineNumber-1)*myViz.codeRowHeight+myViz.arrowOffsetY+curVerticalNudge)+")";if(smoothTransition){cla.transition().delay(200).duration(250).attr("transform",translateCurCmd)}else{cla.attr("transform",translateCurCmd)}gutterSVG.find("#curLineArrow").show()}else{gutterSVG.find("#curLineArrow").hide()}}myViz.domRootD3.selectAll("#pyCodeOutputDiv td.cod").style("border-top",function(d){if(hasError&&d.lineNumber==curEntry.line){return"1px solid "+errorColor}else{return""}}).style("border-bottom",function(d){if(hasError&&d.lineNumber==curEntry.line){return"1px solid "+errorColor}else{return""}});function isOutputLineVisible(lineNo){var lineNoTd=myViz.domRoot.find("#lineNo"+lineNo);var LO=lineNoTd.offset().top;var PO=pcod.offset().top;var ST=pcod.scrollTop();var H=pcod.height();return PO<=LO&&LO<PO+H-30}function scrollCodeOutputToLine(lineNo){var lineNoTd=myViz.domRoot.find("#lineNo"+lineNo);var LO=lineNoTd.offset().top;var PO=pcod.offset().top;var ST=pcod.scrollTop();var H=pcod.height();pcod.stop();pcod.animate({scrollTop:ST+(LO-PO-Math.round(H/2))},300)}if(myViz.params.highlightLines){myViz.domRoot.find("#pyCodeOutputDiv td.cod").removeClass("highlight-prev");myViz.domRoot.find("#pyCodeOutputDiv td.cod").removeClass("highlight-cur");if(curLineNumber)myViz.domRoot.find("#"+myViz.generateID("cod"+curLineNumber)).addClass("highlight-cur");if(prevLineNumber&&!myViz.justSwitchedFiles){myViz.domRoot.find("#"+myViz.generateID("cod"+prevLineNumber)).addClass("highlight-prev")}}if(!isOutputLineVisible(curEntry.line)||myViz.justSwitchedFiles){scrollCodeOutputToLine(curEntry.line)}myViz.curLineNumber=curLineNumber;myViz.prevLineNumber=prevLineNumber;myViz.curLineIsReturn=curIsReturn;myViz.prevLineIsReturn=prevIsReturn}if(curEntry.line){highlightCodeLine()}myViz.domRoot.find("#htmlOutputDiv").empty();if(curEntry.html_output){if(curEntry.css_output){myViz.domRoot.find("#htmlOutputDiv").append('<style type="text/css">'+curEntry.css_output+"</style>")}myViz.domRoot.find("#htmlOutputDiv").append(curEntry.html_output);if(curEntry.js_output){myViz.domRoot.find("#htmlOutputDiv").append('<script type="text/javascript">'+curEntry.js_output+"<\/script>")}}var curEntry=this.curTrace[this.curInstr];var curToplevelLayout=this.curTraceLayouts[this.curInstr];this.renderDataStructures(curEntry,curToplevelLayout);this.enterViewAnnotationsMode();if(myViz.domRoot.find("#dataViz").height()!=prevDataVizHeight){if(this.params.heightChangeCallback){this.params.heightChangeCallback(this)}}var ruiDiv=myViz.domRoot.find("#rawUserInputDiv");ruiDiv.hide();if(isLastInstr&&myViz.executeCodeWithRawInputFunc){if(myViz.promptForUserInput){ruiDiv.show()}}};ExecutionVisualizer.prototype.updateOutputMini=function(){assert(this.params.hideCode);var curEntry=this.curTrace[this.curInstr];var curToplevelLayout=this.curTraceLayouts[this.curInstr];this.renderDataStructures(curEntry,curToplevelLayout);this.enterViewAnnotationsMode()};ExecutionVisualizer.prototype.renderStep=function(step){assert(0<=step);assert(step<this.curTrace.length);if(this.curInstr==step){return}var pastStep=this.curInstr;this.curInstr=step;this.renderCorrectFile(pastStep);this.updateOutput()};ExecutionVisualizer.prototype.isCppMode=function(){return this.params.lang==="c"||this.params.lang==="cpp"};ExecutionVisualizer.prototype.precomputeCurTraceLayouts=function(){this.curTraceLayouts=[];this.curTraceLayouts.push([]);var myViz=this;assert(this.curTrace.length>0);$.each(this.curTrace,function(i,curEntry){var prevLayout=myViz.curTraceLayouts[myViz.curTraceLayouts.length-1];var curLayout=$.extend(true,[],prevLayout);var idsToRemove=d3.map();$.each(curLayout,function(i,row){for(var j=1;j<row.length;j++){idsToRemove.set(row[j],1)}});var idsAlreadyLaidOut=d3.map();function curLayoutIndexOf(id){for(var i=0;i<curLayout.length;i++){var row=curLayout[i];var index=row.indexOf(id);if(index>0){return{row:row,index:index}}}return null}function isLinearObj(heapObj){var hook_result=myViz.try_hook("isLinearObj",{heapObj:heapObj});if(hook_result[0])return hook_result[1];return heapObj[0]=="LIST"||heapObj[0]=="TUPLE"||heapObj[0]=="SET"}function recurseIntoObject(id,curRow,newRow){var heapObj=curEntry.heap[id];if(myViz.isCppMode()){if(!heapObj){return}}else{assert(heapObj)}if(isLinearObj(heapObj)){$.each(heapObj,function(ind,child){if(ind<1)return;if(!myViz.isPrimitiveType(child)){var childID=getRefID(child);if(myViz.disableHeapNesting){updateCurLayout(childID,[],[])}else{updateCurLayout(childID,curRow,newRow)}}})}else if(heapObj[0]=="DICT"){$.each(heapObj,function(ind,child){if(ind<1)return;if(myViz.disableHeapNesting){var dictKey=child[0];if(!myViz.isPrimitiveType(dictKey)){var keyChildID=getRefID(dictKey);updateCurLayout(keyChildID,[],[])}}var dictVal=child[1];if(!myViz.isPrimitiveType(dictVal)){var childID=getRefID(dictVal);if(myViz.structurallyEquivalent(heapObj,curEntry.heap[childID])){updateCurLayout(childID,curRow,newRow)}else if(myViz.disableHeapNesting){updateCurLayout(childID,[],[])}}})}else if(heapObj[0]=="INSTANCE"||heapObj[0]=="CLASS"){$.each(heapObj,function(ind,child){var headerLength=heapObj[0]=="INSTANCE"?2:3;if(ind<headerLength)return;if(myViz.disableHeapNesting){var instKey=child[0];if(!myViz.isPrimitiveType(instKey)){var keyChildID=getRefID(instKey);updateCurLayout(keyChildID,[],[])}}var instVal=child[1];if(!myViz.isPrimitiveType(instVal)){var childID=getRefID(instVal);if(myViz.structurallyEquivalent(heapObj,curEntry.heap[childID])){updateCurLayout(childID,curRow,newRow)}else if(myViz.disableHeapNesting){updateCurLayout(childID,[],[])}}})}else if(heapObj[0]=="C_ARRAY"||heapObj[0]=="C_STRUCT"){updateCurLayoutAndRecurse(heapObj)}}function updateCurLayout(id,curRow,newRow){if(idsAlreadyLaidOut.has(id)){return}var curLayoutLoc=curLayoutIndexOf(id);var alreadyLaidOut=idsAlreadyLaidOut.has(id);idsAlreadyLaidOut.set(id,1);if(curLayoutLoc){var foundRow=curLayoutLoc.row;var foundIndex=curLayoutLoc.index;idsToRemove.remove(id);if(!alreadyLaidOut){if(newRow.length>1){var args=[foundIndex,0];for(var i=1;i<newRow.length;i++){args.push(newRow[i]);idsToRemove.remove(newRow[i])}foundRow.splice.apply(foundRow,args);newRow.splice(0,newRow.length)}}recurseIntoObject(id,foundRow,[])}else{if(newRow.length==0){newRow.push("row"+id)}newRow.push(id);recurseIntoObject(id,curRow,newRow);if(newRow.length>0){if(curRow&&curRow.length>0){for(var i=1;i<newRow.length;i++){curRow.push(newRow[i])}}else{curLayout.push($.extend(true,[],newRow))}for(var i=1;i<newRow.length;i++){idsToRemove.remove(newRow[i])}newRow.splice(0,newRow.length)}}}function updateCurLayoutAndRecurse(elt){if(!elt)return;if(isHeapRef(elt,curEntry.heap)){var id=getRefID(elt);updateCurLayout(id,null,[])}recurseIntoCStructArray(elt)}function recurseIntoCStructArray(val){if(val[0]==="C_ARRAY"){$.each(val,function(ind,elt){if(ind<2)return;updateCurLayoutAndRecurse(elt)})}else if(val[0]==="C_STRUCT"){$.each(val,function(ind,kvPair){if(ind<3)return;updateCurLayoutAndRecurse(kvPair[1])})}}$.each(curEntry.ordered_globals,function(i,varname){var val=curEntry.globals[varname];if(val!==undefined){if(myViz.isCppMode()){updateCurLayoutAndRecurse(val)}else{if(!myViz.isPrimitiveType(val)){var id=getRefID(val);updateCurLayout(id,null,[])}}}});$.each(curEntry.stack_to_render,function(i,frame){$.each(frame.ordered_varnames,function(xxx,varname){var val=frame.encoded_locals[varname];if(myViz.isCppMode()){updateCurLayoutAndRecurse(val)}else{if(!myViz.isPrimitiveType(val)){var id=getRefID(val);updateCurLayout(id,null,[])}}})});idsToRemove.forEach(function(id,xxx){id=Number(id);$.each(curLayout,function(rownum,row){var ind=row.indexOf(id);if(ind>0){row.splice(ind,1)}})});curLayout=curLayout.filter(function(row){return row.length>1});myViz.curTraceLayouts.push(curLayout)});this.curTraceLayouts.splice(0,1);assert(this.curTrace.length==this.curTraceLayouts.length)};var heapPtrSrcRE=/__heap_pointer_src_/;var rightwardNudgeHack=true;ExecutionVisualizer.prototype.renderDataStructures=function(curEntry,curToplevelLayout){var myViz=this;if(myViz.tabularView){return}myViz.resetJsPlumbManager();var existingConnectionEndpointIDs=d3.map();myViz.jsPlumbInstance.select({scope:"varValuePointer"}).each(function(c){if(!c.sourceId.match(heapPtrSrcRE)){existingConnectionEndpointIDs.set(c.sourceId,c.targetId)}});var existingParentPointerConnectionEndpointIDs=d3.map();myViz.jsPlumbInstance.select({scope:"frameParentPointer"}).each(function(c){existingParentPointerConnectionEndpointIDs.set(c.sourceId,c.targetId)});$.each(curToplevelLayout,function(xxx,row){for(var i=0;i<row.length;i++){var objID=row[i];var heapObjID=myViz.generateHeapObjID(objID,myViz.curInstr);myViz.jsPlumbManager.renderedHeapObjectIDs.set(heapObjID,1)}});myViz.domRoot.find("#heap").empty().html('<div id="heapHeader">Objects</div>');var heapRows=myViz.domRootD3.select("#heap").selectAll("table.heapRow").attr("id",function(d,i){return"heapRow"+i}).data(curToplevelLayout,function(objLst){return objLst[0]});heapRows.enter().append("table").attr("id",function(d,i){return"heapRow"+i}).attr("class","heapRow");var hrExit=heapRows.exit();hrExit.each(function(d,idx){$(this).empty()}).remove();var toplevelHeapObjects=heapRows.selectAll("td.toplevelHeapObject").data(function(d,i){return d.slice(1,d.length)},function(objID){return objID});var tlhEnter=toplevelHeapObjects.enter().append("td").attr("class","toplevelHeapObject").attr("id",function(d,i){return"toplevel_heap_object_"+d});toplevelHeapObjects.order().each(function(objID,i){$(this).empty();if(myViz.isCppMode()){if(curEntry.heap[objID]!==undefined){myViz.renderCompoundObject(objID,myViz.curInstr,$(this),true)}}else{myViz.renderCompoundObject(objID,myViz.curInstr,$(this),true)}});var tlhExit=toplevelHeapObjects.exit();tlhExit.each(function(d,idx){$(this).empty()}).remove();function highlightAliasedConnectors(d,i){var stackPtrId=$(this).find("div.stack_pointer").attr("id");if(stackPtrId){var foundTargetId=null;myViz.jsPlumbInstance.select({source:stackPtrId}).each(function(c){foundTargetId=c.targetId});myViz.jsPlumbInstance.select().each(function(c){if(c.targetId==foundTargetId){c.setHover(true);$(c.canvas).css("z-index",2e3)}else{c.setHover(false)}})}}function unhighlightAllConnectors(d,i){myViz.jsPlumbInstance.select().each(function(c){c.setHover(false)})}var realGlobalsLst=[];$.each(curEntry.ordered_globals,function(i,varname){var val=curEntry.globals[varname];if(val!==undefined){realGlobalsLst.push(varname)}});var globalsID=myViz.generateID("globals");var globalTblID=myViz.generateID("global_table");var globalVarTable=myViz.domRootD3.select("#"+globalTblID).selectAll("tr").data(realGlobalsLst,function(d){return d});globalVarTable.enter().append("tr").attr("class","variableTr").attr("id",function(d,i){return myViz.generateID(varnameToCssID("global__"+d+"_tr"))});var globalVarTableCells=globalVarTable.selectAll("td.stackFrameVar,td.stackFrameValue").data(function(d,i){return[d,d]});globalVarTableCells.enter().append("td").attr("class",function(d,i){return i==0?"stackFrameVar":"stackFrameValue"});globalVarTableCells.order().each(function(varname,i){if(i==0){$(this).html(varname)}else{$(this).empty();var varDivID=myViz.generateID("global__"+varnameToCssID(varname));existingConnectionEndpointIDs.remove(varDivID);var val=curEntry.globals[varname];if(myViz.isPrimitiveType(val)){myViz.renderPrimitiveObject(val,$(this))}else if(val[0]==="C_STRUCT"||val[0]==="C_ARRAY"){myViz.renderCStructArray(val,myViz.curInstr,$(this))}else{var heapObjID=myViz.generateHeapObjID(getRefID(val),myViz.curInstr);if(myViz.textualMemoryLabels){var labelID=varDivID+"_text_label";$(this).append('<div class="objectIdLabel" id="'+labelID+'">id'+getRefID(val)+"</div>");$(this).find("div#"+labelID).hover(function(){myViz.jsPlumbInstance.connect({source:labelID,target:heapObjID,scope:"varValuePointer"})},function(){myViz.jsPlumbInstance.select({source:labelID}).detach()})}else{$(this).append('<div class="stack_pointer" id="'+varDivID+'">&nbsp;</div>');assert(!myViz.jsPlumbManager.connectionEndpointIDs.has(varDivID));myViz.jsPlumbManager.connectionEndpointIDs.set(varDivID,heapObjID)}}}});globalVarTableCells.exit().each(function(d,idx){$(this).empty()}).remove();globalVarTable.exit().each(function(d,i){$(this).find(".stack_pointer").each(function(i,sp){existingConnectionEndpointIDs.remove($(sp).attr("id"))});$(this).empty()}).remove();if(curEntry.ordered_globals.length==0){this.domRoot.find("#"+globalsID).hide()}else{this.domRoot.find("#"+globalsID).show()}var stackDiv=myViz.domRootD3.select("#stack");var stackFrameDiv=stackDiv.selectAll("div.stackFrame,div.zombieStackFrame").data(curEntry.stack_to_render,function(frame){return frame.unique_hash});var sfdEnter=stackFrameDiv.enter().append("div").attr("class",function(d,i){return d.is_zombie?"zombieStackFrame":"stackFrame"}).attr("id",function(d,i){return d.is_zombie?myViz.generateID("zombie_stack"+i):myViz.generateID("stack"+i)}).attr("data-frame_id",function(frame,i){return frame.frame_id}).attr("data-parent_frame_id",function(frame,i){return frame.parent_frame_id_list.length>0?frame.parent_frame_id_list[0]:null}).each(function(frame,i){if(!myViz.drawParentPointers){return}var my_CSS_id=$(this).attr("id");if(frame.parent_frame_id_list.length>0){var parent_frame_id=frame.parent_frame_id_list[0];myViz.domRoot.find("div#stack [data-frame_id="+parent_frame_id+"]").each(function(i,e){var parent_CSS_id=$(this).attr("id");myViz.jsPlumbManager.parentPointerConnectionEndpointIDs.set(my_CSS_id,parent_CSS_id)})}else{if(curEntry.ordered_globals.length>0){myViz.jsPlumbManager.parentPointerConnectionEndpointIDs.set(my_CSS_id,globalsID)}}var my_frame_id=frame.frame_id;myViz.domRoot.find("div#stack [data-parent_frame_id="+my_frame_id+"]").each(function(i,e){var child_CSS_id=$(this).attr("id");myViz.jsPlumbManager.parentPointerConnectionEndpointIDs.set(child_CSS_id,my_CSS_id)})});sfdEnter.append("div").attr("class","stackFrameHeader").html(function(frame,i){var funcName=htmlspecialchars(frame.func_name).replace("&lt;lambda&gt;","λ").replace("\n","<br/>");var headerLabel=funcName;if(frame.is_parent||myViz.showAllFrameLabels){headerLabel="f"+frame.frame_id+": "+headerLabel}if(frame.parent_frame_id_list.length>0){var parentFrameID=frame.parent_frame_id_list[0];headerLabel=headerLabel+" [parent=f"+parentFrameID+"]"}else if(myViz.showAllFrameLabels){headerLabel=headerLabel+" [parent=Global]"}return headerLabel});sfdEnter.append("table").attr("class","stackFrameVarTable");var stackVarTable=stackFrameDiv.order().select("table").selectAll("tr").data(function(frame){return frame.ordered_varnames.map(function(varname){return{varname:varname,frame:frame}})},function(d){if(d){return d.varname}});stackVarTable.enter().append("tr").attr("class","variableTr").attr("id",function(d,i){return myViz.generateID(varnameToCssID(d.frame.unique_hash+"__"+d.varname+"_tr"))});var stackVarTableCells=stackVarTable.selectAll("td.stackFrameVar,td.stackFrameValue").data(function(d,i){return[d,d]});stackVarTableCells.enter().append("td").attr("class",function(d,i){return i==0?"stackFrameVar":"stackFrameValue"});stackVarTableCells.order().each(function(d,i){var varname=d.varname;var frame=d.frame;if(i==0){if(varname=="__return__")$(this).html('<span class="retval">Return<br/>value</span>');else $(this).html(varname)}else{$(this).empty();var varDivID=myViz.generateID(varnameToCssID(frame.unique_hash+"__"+varname));existingConnectionEndpointIDs.remove(varDivID);var val=frame.encoded_locals[varname];if(myViz.isPrimitiveType(val)){myViz.renderPrimitiveObject(val,$(this))}else if(val[0]==="C_STRUCT"||val[0]==="C_ARRAY"){myViz.renderCStructArray(val,myViz.curInstr,$(this))}else{var heapObjID=myViz.generateHeapObjID(getRefID(val),myViz.curInstr);if(myViz.textualMemoryLabels){var labelID=varDivID+"_text_label";$(this).append('<div class="objectIdLabel" id="'+labelID+'">id'+getRefID(val)+"</div>");$(this).find("div#"+labelID).hover(function(){myViz.jsPlumbInstance.connect({source:labelID,target:heapObjID,scope:"varValuePointer"})},function(){myViz.jsPlumbInstance.select({source:labelID}).detach()})}else{$(this).append('<div class="stack_pointer" id="'+varDivID+'">&nbsp;</div>');assert(!myViz.jsPlumbManager.connectionEndpointIDs.has(varDivID));myViz.jsPlumbManager.connectionEndpointIDs.set(varDivID,heapObjID)}}}});stackVarTableCells.exit().each(function(d,idx){$(this).empty()}).remove();stackVarTable.exit().each(function(d,i){$(this).find(".stack_pointer").each(function(i,sp){existingConnectionEndpointIDs.remove($(sp).attr("id"))});$(this).empty()}).remove();stackFrameDiv.exit().each(function(frame,i){$(this).find(".stack_pointer").each(function(i,sp){existingConnectionEndpointIDs.remove($(sp).attr("id"))});var my_CSS_id=$(this).attr("id");existingParentPointerConnectionEndpointIDs.forEach(function(k,v){if(k==my_CSS_id||v==my_CSS_id){existingParentPointerConnectionEndpointIDs.remove(k)}});$(this).empty()}).remove();if(rightwardNudgeHack){var nudger_to_nudged_rows={};var srcHeapConnectorIDs=myViz.jsPlumbManager.heapConnectionEndpointIDs.keys();srcHeapConnectorIDs.sort();$.each(srcHeapConnectorIDs,function(i,srcID){var dstID=myViz.jsPlumbManager.heapConnectionEndpointIDs.get(srcID);var srcAnchorObject=myViz.domRoot.find("#"+srcID);var srcHeapObject=srcAnchorObject.closest(".heapObject");var dstHeapObject=myViz.domRoot.find("#"+dstID);assert(dstHeapObject.attr("class")=="heapObject");var srcHeapRow=srcHeapObject.closest(".heapRow");var dstHeapRow=dstHeapObject.closest(".heapRow");var srcRowID=srcHeapRow.attr("id");var dstRowID=dstHeapRow.attr("id");if(srcRowID!=dstRowID){var srcAnchorLeft=srcAnchorObject.offset().left;var srcHeapObjectLeft=srcHeapObject.offset().left;var dstHeapObjectLeft=dstHeapObject.offset().left;if(srcAnchorLeft>dstHeapObjectLeft){var delta=srcAnchorLeft-dstHeapObjectLeft+32;dstHeapObject.css("margin-left","+="+delta);var cur_nudgee_set=nudger_to_nudged_rows[srcRowID];if(cur_nudgee_set===undefined){cur_nudgee_set=d3.map();nudger_to_nudged_rows[srcRowID]=cur_nudgee_set}cur_nudgee_set.set(dstRowID,1);var dst_nudgee_set=nudger_to_nudged_rows[dstRowID];if(dst_nudgee_set){dst_nudgee_set.forEach(function(k,v){if(k!=srcRowID){myViz.domRoot.find("#"+k).css("margin-left","+="+delta);cur_nudgee_set.set(k,1)}})}}}})}myViz.jsPlumbInstance.reset();function renderVarValueConnector(varID,valueID){if(myViz.isCppMode()){if(myViz.domRoot.find("#"+valueID).length){myViz.jsPlumbInstance.connect({source:varID,target:valueID,scope:"varValuePointer"})}else{myViz.domRoot.find("#"+varID).html("💩")}}else{myViz.jsPlumbInstance.connect({source:varID,target:valueID,scope:"varValuePointer"})}}var totalParentPointersRendered=0;function renderParentPointerConnector(srcID,dstID){if(myViz.domRoot.find("#"+srcID).length==0||myViz.domRoot.find("#"+dstID).length==0){return}myViz.jsPlumbInstance.connect({source:srcID,target:dstID,anchors:["LeftMiddle","LeftMiddle"],connector:["Bezier",{curviness:45}],endpoint:["Dot",{radius:4}],scope:"frameParentPointer"});totalParentPointersRendered++}if(!myViz.textualMemoryLabels){if(!myViz.isCppMode()){existingConnectionEndpointIDs.forEach(renderVarValueConnector)}myViz.jsPlumbManager.connectionEndpointIDs.forEach(renderVarValueConnector)}if(myViz.drawParentPointers){existingParentPointerConnectionEndpointIDs.forEach(renderParentPointerConnector);myViz.jsPlumbManager.parentPointerConnectionEndpointIDs.forEach(renderParentPointerConnector)}function highlight_frame(frameID){myViz.jsPlumbInstance.select().each(function(c){var stackFrameDiv=c.source.closest(".stackFrame");if(stackFrameDiv.attr("id")==frameID){c.setPaintStyle({lineWidth:1,strokeStyle:connectorBaseColor});c.endpoints[0].setPaintStyle({fillStyle:connectorBaseColor});$(c.canvas).css("z-index",1e3)}else if(myViz.jsPlumbManager.heapConnectionEndpointIDs.has(c.endpoints[0].elementId)){}else if(stackFrameDiv.length>0){c.setPaintStyle({lineWidth:1,strokeStyle:connectorInactiveColor});c.endpoints[0].setPaintStyle({fillStyle:connectorInactiveColor});$(c.canvas).css("z-index",0)}});myViz.domRoot.find(".stackFrame").removeClass("highlightedStackFrame");myViz.domRoot.find("#"+frameID).addClass("highlightedStackFrame")}var frame_already_highlighted=false;$.each(curEntry.stack_to_render,function(i,e){if(e.is_highlighted){highlight_frame(myViz.generateID("stack"+i));frame_already_highlighted=true}});if(!frame_already_highlighted){highlight_frame(myViz.generateID("globals"))}myViz.try_hook("end_renderDataStructures",{myViz:myViz})};ExecutionVisualizer.prototype.renderTabularView=function(){var myViz=this;myViz.resetJsPlumbManager();var allGlobalVars=[];var funcNameToOrderedVars={};var orderedFuncNames=[];$.each(myViz.curTrace,function(i,elt){$.each(elt.ordered_globals,function(i,g){if($.inArray(g,allGlobalVars)===-1){allGlobalVars.push(g)}});$.each(elt.stack_to_render,function(i,sf){var funcVarsList=funcNameToOrderedVars[sf.func_name];if(funcVarsList===undefined){funcVarsList=[];funcNameToOrderedVars[sf.func_name]=funcVarsList;orderedFuncNames.push(sf.func_name)}$.each(sf.ordered_varnames,function(i,v){if($.inArray(v,funcVarsList)===-1&&v!=="__return__"){funcVarsList.push(v)}})})});var allVarNames=["Step"];$.each(allGlobalVars,function(i,e){allVarNames.push(e)});$.each(orderedFuncNames,function(i,funcName){$.each(funcNameToOrderedVars[funcName],function(i,v){allVarNames.push(funcName+":"+v)})});function getAllOrderedValues(curEntry){var allVarValues=[""];$.each(allGlobalVars,function(i,e){allVarValues.push(curEntry.globals[e])});var highlightedFrame=null;$.each(curEntry.stack_to_render,function(i,sf){if(sf.is_highlighted){highlightedFrame=sf}});$.each(orderedFuncNames,function(i,funcName){$.each(funcNameToOrderedVars[funcName],function(i,v){var found=false;if(highlightedFrame&&funcName==highlightedFrame.func_name){var obj=highlightedFrame.encoded_locals[v];if(obj){allVarValues.push(obj);found=true}}if(!found){allVarValues.push(undefined)}})});return allVarValues}var tblRoot=myViz.domRootD3.select("#optTabularView");var tbl=tblRoot.append("table");tbl.attr("id","optTable");var tHead=tbl.append("thead").attr("class","stepTableThead").append("tr");tHead.attr("class","stepTableTr");tHead.selectAll("thead td").data(allVarNames).enter().append("td").attr("class","stepTableTd").html(function(d){return d});var tBody=tbl.append("tbody");tBody.attr("class","stepTableTbody");var stepsAndTraceEntries=[];$.each(myViz.curTrace,function(i,e){stepsAndTraceEntries.push([i,e])});var tr=tBody.selectAll("tbody tr").data(stepsAndTraceEntries).enter().append("tr").attr("step",function(d,i){return i}).attr("class","stepTableTr");var td=tr.selectAll("td").data(function(e){return getAllOrderedValues(e[1])}).enter().append("td").attr("class","stepTableTd").each(function(obj,i){$(this).empty();var step=parseInt($(this).closest("tr").attr("step"));if(i==0){$(this).html(step+1)}else{if(obj===undefined){}else{myViz.renderNestedObject(obj,step,$(this),"tabular")}}});myViz.jsPlumbInstance.reset();function renderTableVarValueConnector(varID,valueID){myViz.jsPlumbInstance.connect({source:varID,target:valueID,scope:"varValuePointer",anchors:["TopCenter","LeftMiddle"]})}myViz.jsPlumbManager.connectionEndpointIDs.forEach(renderTableVarValueConnector)};ExecutionVisualizer.prototype.renderPrimitiveObject=function(obj,d3DomElement){var myViz=this;if(this.try_hook("renderPrimitiveObject",{obj:obj,d3DomElement:d3DomElement})[0])return;var typ=typeof obj;if(obj==null){d3DomElement.append('<span class="nullObj">'+this.getRealLabel("None")+"</span>")}else if(typ=="number"){d3DomElement.append('<span class="numberObj">'+obj+"</span>")}else if(typ=="boolean"){if(obj){d3DomElement.append('<span class="boolObj">'+this.getRealLabel("True")+"</span>")}else{d3DomElement.append('<span class="boolObj">'+this.getRealLabel("False")+"</span>")}}else if(typ=="string"){var literalStr=htmlspecialchars(obj);literalStr=literalStr.replace(new RegExp("\n","g"),"<br/>");literalStr=literalStr.replace(new RegExp('"',"g"),'\\"');literalStr='"'+literalStr+'"';d3DomElement.append('<span class="stringObj">'+literalStr+"</span>")}else if(typ=="object"){if(obj[0]=="C_DATA"){var typeName=obj[2];if(typeName==="short int"){typeName="short"}else if(typeName==="short unsigned int"){typeName="unsigned short"}else if(typeName==="long int"){typeName="long"}else if(typeName==="long long int"){typeName="long long"}else if(typeName==="long unsigned int"){typeName="unsigned long"}else if(typeName==="long long unsigned int"){typeName="unsigned long long int"}var isValidPtr=typeName==="pointer"&&obj[3]!=="<UNINITIALIZED>"&&obj[3]!=="<UNALLOCATED>";var addr=obj[1];var leader="";if(myViz.debugMode){leader=addr+"<br/>"}var cdataId=myViz.generateHeapObjID("cdata_"+addr,myViz.curInstr);if(isValidPtr){d3DomElement.append('<div id="'+cdataId+'" class="cdataHeader">'+leader+typeName+"</div>");var ptrVal=obj[3];var ptrSrcId=myViz.generateHeapObjID("ptrSrc_"+addr,myViz.curInstr);var ptrTargetId=myViz.generateHeapObjID("cdata_"+ptrVal,myViz.curInstr);var debugInfo="";if(myViz.debugMode){debugInfo=ptrTargetId}d3DomElement.append('<div style="width: 10px;" id="'+ptrSrcId+'" class="cdataElt">&nbsp;'+debugInfo+"</div>");assert(!myViz.jsPlumbManager.connectionEndpointIDs.has(ptrSrcId));myViz.jsPlumbManager.connectionEndpointIDs.set(ptrSrcId,ptrTargetId)}else{d3DomElement.append('<div class="cdataHeader">'+leader+typeName+"</div>");var rep="";if(typeof obj[3]==="string"){var literalStr=obj[3];if(literalStr==="<UNINITIALIZED>"){rep='<span class="cdataUninit">?</span>'}else if(literalStr=="<UNALLOCATED>"){rep="💀"}else{literalStr=literalStr.replace(new RegExp("\n","g"),"\\n");literalStr=literalStr.replace(new RegExp("\t","g"),"\\t");literalStr=literalStr.replace(new RegExp('"',"g"),'\\"');literalStr="'"+literalStr+"'";rep=htmlspecialchars(literalStr)}}else{rep=htmlspecialchars(obj[3])}d3DomElement.append('<div id="'+cdataId+'" class="cdataElt">'+rep+"</div>")}}else{assert(obj[0]=="SPECIAL_FLOAT"||obj[0]=="JS_SPECIAL_VAL");d3DomElement.append('<span class="numberObj">'+obj[1]+"</span>")}}else{assert(false)}};ExecutionVisualizer.prototype.renderNestedObject=function(obj,stepNum,d3DomElement){if(this.isPrimitiveType(obj)){this.renderPrimitiveObject(obj,d3DomElement)}else{if(obj[0]==="REF"){this.renderCompoundObject(getRefID(obj),stepNum,d3DomElement,false)}else{assert(obj[0]==="C_STRUCT"||obj[0]==="C_ARRAY");this.renderCStructArray(obj,stepNum,d3DomElement)}}};ExecutionVisualizer.prototype.renderCompoundObject=function(objID,stepNum,d3DomElement,isTopLevel){var myViz=this;var heapObjID=myViz.generateHeapObjID(objID,stepNum);if(!isTopLevel&&myViz.jsPlumbManager.renderedHeapObjectIDs.has(heapObjID)){var srcDivID=myViz.generateID("heap_pointer_src_"+myViz.jsPlumbManager.heap_pointer_src_id);myViz.jsPlumbManager.heap_pointer_src_id++;var dstDivID=heapObjID;if(myViz.textualMemoryLabels){var labelID=srcDivID+"_text_label";d3DomElement.append('<div class="objectIdLabel" id="'+labelID+'">id'+objID+"</div>");myViz.domRoot.find("div#"+labelID).hover(function(){myViz.jsPlumbInstance.connect({source:labelID,target:dstDivID,scope:"varValuePointer"})},function(){myViz.jsPlumbInstance.select({source:labelID}).detach()})}else{d3DomElement.append('<div id="'+srcDivID+'">&nbsp;</div>');assert(!myViz.jsPlumbManager.connectionEndpointIDs.has(srcDivID));myViz.jsPlumbManager.connectionEndpointIDs.set(srcDivID,dstDivID);assert(!myViz.jsPlumbManager.heapConnectionEndpointIDs.has(srcDivID));myViz.jsPlumbManager.heapConnectionEndpointIDs.set(srcDivID,dstDivID)}return}d3DomElement.append('<div class="heapObject" id="'+heapObjID+'"></div>');d3DomElement=myViz.domRoot.find("#"+heapObjID);myViz.jsPlumbManager.renderedHeapObjectIDs.set(heapObjID,1);var curHeap=myViz.curTrace[stepNum].heap;var obj=curHeap[objID];assert($.isArray(obj));var typeLabelPrefix="";if(myViz.textualMemoryLabels){typeLabelPrefix="id"+objID+":"}var hook_result=myViz.try_hook("renderCompoundObject",{objID:objID,d3DomElement:d3DomElement,isTopLevel:isTopLevel,obj:obj,typeLabelPrefix:typeLabelPrefix,stepNum:stepNum,myViz:myViz});if(hook_result[0])return;if(obj[0]=="LIST"||obj[0]=="TUPLE"||obj[0]=="SET"||obj[0]=="DICT"){var label=obj[0].toLowerCase();assert(obj.length>=1);if(obj.length==1){d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+" empty "+myViz.getRealLabel(label)+"</div>")}else{d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+myViz.getRealLabel(label)+"</div>");d3DomElement.append('<table class="'+label+'Tbl"></table>');var tbl=d3DomElement.children("table");if(obj[0]=="LIST"||obj[0]=="TUPLE"){tbl.append("<tr></tr><tr></tr>");var headerTr=tbl.find("tr:first");var contentTr=tbl.find("tr:last");$.each(obj,function(ind,val){if(ind<1)return;headerTr.append('<td class="'+label+'Header"></td>');headerTr.find("td:last").append(ind-1);contentTr.append('<td class="'+label+'Elt"></td>');myViz.renderNestedObject(val,stepNum,contentTr.find("td:last"))})}else if(obj[0]=="SET"){var numElts=obj.length-1;var numRows=Math.round(Math.sqrt(numElts));if(numRows>3){numRows-=1}var numCols=Math.round(numElts/numRows);if(numElts%numRows){numCols+=1}$.each(obj,function(ind,val){if(ind<1)return;if((ind-1)%numCols==0){tbl.append("<tr></tr>")}var curTr=tbl.find("tr:last");curTr.append('<td class="setElt"></td>');myViz.renderNestedObject(val,stepNum,curTr.find("td:last"))})}else if(obj[0]=="DICT"){$.each(obj,function(ind,kvPair){if(ind<1)return;tbl.append('<tr class="dictEntry"><td class="dictKey"></td><td class="dictVal"></td></tr>');var newRow=tbl.find("tr:last");var keyTd=newRow.find("td:first");var valTd=newRow.find("td:last");var key=kvPair[0];var val=kvPair[1];myViz.renderNestedObject(key,stepNum,keyTd);myViz.renderNestedObject(val,stepNum,valTd)})}}}else if(obj[0]=="INSTANCE"||obj[0]=="CLASS"){var isInstance=obj[0]=="INSTANCE";var headerLength=isInstance?2:3;assert(obj.length>=headerLength);if(isInstance){d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+obj[1]+" "+myViz.getRealLabel("instance")+"</div>")}else{var superclassStr="";if(obj[2].length>0){superclassStr+="[extends "+obj[2].join(", ")+"] "}d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+obj[1]+" class "+superclassStr+"<br/>"+'<a href="#" id="attrToggleLink">hide attributes</a>'+"</div>")}if(obj.length>headerLength){var lab=isInstance?"inst":"class";d3DomElement.append('<table class="'+lab+'Tbl"></table>');var tbl=d3DomElement.children("table");$.each(obj,function(ind,kvPair){if(ind<headerLength)return;tbl.append('<tr class="'+lab+'Entry"><td class="'+lab+'Key"></td><td class="'+lab+'Val"></td></tr>');var newRow=tbl.find("tr:last");var keyTd=newRow.find("td:first");var valTd=newRow.find("td:last");if(typeof kvPair[0]=="string"){var attrnameStr=htmlspecialchars(kvPair[0]);keyTd.append('<span class="keyObj">'+attrnameStr+"</span>")}else{myViz.renderNestedObject(kvPair[0],stepNum,keyTd)}myViz.renderNestedObject(kvPair[1],stepNum,valTd)})}if(!isInstance){$(d3DomElement.selector+" .typeLabel #attrToggleLink").click(function(){var elt=$(d3DomElement.selector+" .classTbl");elt.toggle();$(this).html((elt.is(":visible")?"hide":"show")+" attributes");if(elt.is(":visible")){myViz.classAttrsHidden[d3DomElement.selector]=false;$(this).html("hide attributes")}else{myViz.classAttrsHidden[d3DomElement.selector]=true;$(this).html("show attributes")}myViz.redrawConnectors();return false});if(myViz.classAttrsHidden[d3DomElement.selector]){$(d3DomElement.selector+" .classTbl").hide();$(d3DomElement.selector+" .typeLabel #attrToggleLink").html("show attributes")}}}else if(obj[0]=="INSTANCE_PPRINT"){d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+obj[1]+" instance</div>");strRepr=htmlspecialchars(obj[2]);d3DomElement.append('<table class="customObjTbl"><tr><td class="customObjElt">'+strRepr+"</td></tr></table>")}else if(obj[0]=="FUNCTION"){assert(obj.length==3);var funcName=htmlspecialchars(obj[1]).replace("&lt;lambda&gt;","λ");var parentFrameID=obj[2];if(!myViz.compactFuncLabels){d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+myViz.getRealLabel("function")+"</div>")}var funcPrefix=myViz.compactFuncLabels?"func":"";if(parentFrameID){d3DomElement.append('<div class="funcObj">'+funcPrefix+" "+funcName+" [parent=f"+parentFrameID+"]</div>")}else if(myViz.showAllFrameLabels){d3DomElement.append('<div class="funcObj">'+funcPrefix+" "+funcName+" [parent=Global]</div>")}else{d3DomElement.append('<div class="funcObj">'+funcPrefix+" "+funcName+"</div>")}}else if(obj[0]=="JS_FUNCTION"){assert(obj.length==5);var funcName=htmlspecialchars(obj[1]);var funcCode=typeLabelPrefix+htmlspecialchars(obj[2]);var funcProperties=obj[3];var parentFrameID=obj[4];if(funcProperties||parentFrameID||myViz.showAllFrameLabels){d3DomElement.append('<table class="classTbl"></table>');var tbl=d3DomElement.children("table");tbl.append('<tr><td class="funcCod" colspan="2"><pre class="funcCode">'+funcCode+"</pre>"+"</td></tr>");if(funcProperties){assert(funcProperties.length>0);$.each(funcProperties,function(ind,kvPair){tbl.append('<tr class="classEntry"><td class="classKey"></td><td class="classVal"></td></tr>');var newRow=tbl.find("tr:last");var keyTd=newRow.find("td:first");var valTd=newRow.find("td:last");keyTd.append('<span class="keyObj">'+htmlspecialchars(kvPair[0])+"</span>");myViz.renderNestedObject(kvPair[1],stepNum,valTd)})}if(parentFrameID){tbl.append('<tr class="classEntry"><td class="classKey">parent</td><td class="classVal">'+"f"+parentFrameID+"</td></tr>")}else if(myViz.showAllFrameLabels){tbl.append('<tr class="classEntry"><td class="classKey">parent</td><td class="classVal">'+"global"+"</td></tr>")}}else{d3DomElement.append('<pre class="funcCode">'+funcCode+"</pre>")}}else if(obj[0]=="HEAP_PRIMITIVE"){assert(obj.length==3);var typeName=obj[1];var primitiveVal=obj[2];d3DomElement.append('<div class="heapPrimitive"></div>');d3DomElement.find("div.heapPrimitive").append('<div class="typeLabel">'+typeLabelPrefix+typeName+"</div>");myViz.renderPrimitiveObject(primitiveVal,d3DomElement.find("div.heapPrimitive"))}else if(obj[0]=="C_STRUCT"||obj[0]=="C_ARRAY"){myViz.renderCStructArray(obj,stepNum,d3DomElement)}else{assert(obj.length==2);var typeName=obj[0];var strRepr=obj[1];strRepr=htmlspecialchars(strRepr);d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+typeName+"</div>");d3DomElement.append('<table class="customObjTbl"><tr><td class="customObjElt">'+strRepr+"</td></tr></table>")}};ExecutionVisualizer.prototype.renderCStructArray=function(obj,stepNum,d3DomElement){var myViz=this;if(obj[0]=="C_STRUCT"){assert(obj.length>=3);var addr=obj[1];var typename=obj[2];var leader="";if(myViz.debugMode){leader=addr+"<br/>"}if(myViz.params.lang==="cpp"){d3DomElement.append('<div class="typeLabel">'+leader+"object "+typename+"</div>")}else{d3DomElement.append('<div class="typeLabel">'+leader+"struct "+typename+"</div>")}if(obj.length>3){d3DomElement.append('<table class="instTbl"></table>');var tbl=d3DomElement.children("table");$.each(obj,function(ind,kvPair){if(ind<3)return;tbl.append('<tr class="instEntry"><td class="instKey"></td><td class="instVal"></td></tr>');var newRow=tbl.find("tr:last");var keyTd=newRow.find("td:first");var valTd=newRow.find("td:last");assert(typeof kvPair[0]=="string");var attrnameStr=htmlspecialchars(kvPair[0]);keyTd.append('<span class="keyObj">'+attrnameStr+"</span>");myViz.renderNestedObject(kvPair[1],stepNum,valTd)})}}else{assert(obj[0]=="C_ARRAY");assert(obj.length>=2);var addr=obj[1];var leader="";if(myViz.debugMode){leader=addr+"<br/>"}d3DomElement.append('<div class="typeLabel">'+leader+"array</div>");d3DomElement.append('<table class="cArrayTbl"></table>');var tbl=d3DomElement.children("table");tbl.append("<tr></tr><tr></tr>");var headerTr=tbl.find("tr:first");var contentTr=tbl.find("tr:last");$.each(obj,function(ind,val){if(ind<2)return;headerTr.append('<td class="cArrayHeader"></td>');headerTr.find("td:last").append(ind-2);contentTr.append('<td class="cArrayElt"></td>');myViz.renderNestedObject(val,stepNum,contentTr.find("td:last"))})}};ExecutionVisualizer.prototype.redrawConnectors=function(){this.jsPlumbInstance.repaintEverything()};ExecutionVisualizer.prototype.getRealLabel=function(label){if(this.params.lang==="js"||this.params.lang==="ts"||this.params.lang==="ruby"){if(label==="list"){return"array"}else if(label==="instance"){return"object"}else if(label==="True"){return"true"}else if(label==="False"){return"false"}}if(this.params.lang==="js"){if(label==="dict"){return"Map"}else if(label==="set"){return"Set"}}if(this.params.lang==="ruby"){if(label==="dict"){return"hash"}else if(label==="set"){return"Set"}else if(label==="function"){return"method"}else if(label==="None"){return"nil"}else if(label==="Global frame"){return"Global Object"}}return label};var highlightedLineColor="#e4faeb";var highlightedLineBorderColor="#005583";var highlightedLineLighterColor="#e8fff0";var funcCallLineColor="#a2eebd";var brightRed="#e93f34";var connectorBaseColor="#005583";var connectorHighlightColor=brightRed;var connectorInactiveColor="#cccccc";var errorColor=brightRed;var breakpointColor=brightRed;var darkArrowColor=brightRed;var lightArrowColor="#c9e6ca";function assert(cond){if(!cond){alert("Assertion Failure (see console log for backtrace)");throw"Assertion Failure"}}function htmlspecialchars(str){if(typeof str=="string"){str=str.replace(/&/g,"&amp;");str=str.replace(/</g,"&lt;");str=str.replace(/>/g,"&gt;");str=str.replace(/ /g,"&nbsp;");str=str.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}return str}function htmlsanitize(str){if(typeof str=="string"){str=str.replace(/&/g,"&amp;");str=str.replace(/</g,"&lt;");str=str.replace(/>/g,"&gt;")}return str}String.prototype.rtrim=function(){return this.replace(/\s*$/g,"")};var lbRE=new RegExp("\\[|{|\\(|<","g");var rbRE=new RegExp("\\]|}|\\)|>","g");function varnameToCssID(varname){return varname.replace(lbRE,"LeftB_").replace(rbRE,"_RightB").replace(/[!]/g,"_BANG_").replace(/[?]/g,"_QUES_").replace(/[:]/g,"_COLON_").replace(/[=]/g,"_EQ_").replace(/[.]/g,"_DOT_").replace(/ /g,"_")}ExecutionVisualizer.prototype.structurallyEquivalent=function(obj1,obj2){if(this.isPrimitiveType(obj1)||this.isPrimitiveType(obj2)){return false}if(obj1[0]!=obj2[0]){return false}if(obj1.length!=obj2.length){return false}if(obj1[0]=="LIST"||obj1[0]=="TUPLE"){return true}else{var startingInd=-1;if(obj1[0]=="DICT"){startingInd=2}else if(obj1[0]=="INSTANCE"){startingInd=3}else{return false}var obj1fields=d3.map();for(var i=startingInd;i<obj1.length;i++){obj1fields.set(obj1[i][0],1)}for(var i=startingInd;i<obj2.length;i++){if(!obj1fields.has(obj2[i][0])){return false}}return true}};ExecutionVisualizer.prototype.isPrimitiveType=function(obj){var hook_result=this.try_hook("isPrimitiveType",{obj:obj});if(hook_result[0])return hook_result[1];if(obj===null){return true}if(typeof obj=="object"){return obj[0]=="SPECIAL_FLOAT"||obj[0]=="JS_SPECIAL_VAL"||obj[0]=="C_DATA"}else{return true}};function isHeapRef(obj,heap){if(obj[0]==="REF"){return heap[obj[1]]!==undefined}else if(obj[0]==="C_DATA"&&obj[2]==="pointer"){if(obj[3]!="<UNINITIALIZED>"&&obj[3]!="<UNALLOCATED>"){return heap[obj[3]]!==undefined}}return false}function getRefID(obj){if(obj[0]=="REF"){return obj[1]}else{assert(obj[0]==="C_DATA"&&obj[2]==="pointer");assert(obj[3]!="<UNINITIALIZED>"&&obj[3]!="<UNALLOCATED>");return obj[3]}}var qtipShared={show:{ready:true,delay:0,event:null,effect:function(){$(this).show()}},hide:{fixed:true,event:null,effect:function(){$(this).hide()}},style:{classes:"ui-tooltip-pgbootstrap"}};function AnnotationBubble(parentViz,type,domID){this.parentViz=parentViz;this.domID=domID;this.hashID="#"+domID;this.type=type;if(type=="codeline"){this.my="left center";this.at="right center"}else if(type=="frame"){this.my="right center";this.at="left center"}else if(type=="variable"){this.my="right center";this.at="left center"}else if(type=="object"){this.my="bottom left";this.at="top center"}else{assert(false)}this.state="invisible";this.text="";this.qtipHidden=false}AnnotationBubble.prototype.showStub=function(){assert(this.state=="invisible"||this.state=="edit");assert(this.text=="");var myBubble=this;this.destroyQTip();$(this.hashID).qtip($.extend({},qtipShared,{content:" ",id:this.domID,position:{my:this.my,at:this.at,adjust:{x:myBubble.type=="codeline"?-6:0},effect:null},style:{classes:"ui-tooltip-pgbootstrap ui-tooltip-pgbootstrap-stub"}}));$(this.qTipID()).unbind("click").click(function(){myBubble.showEditor()});this.state="stub"};AnnotationBubble.prototype.showEditor=function(){assert(this.state=="stub"||this.state=="view"||this.state=="minimized");var myBubble=this;var ta='<textarea class="bubbleInputText">'+this.text+"</textarea>";this.destroyQTip();$(this.hashID).qtip($.extend({},qtipShared,{content:ta,id:this.domID,position:{my:this.my,at:this.at,adjust:{x:myBubble.type=="codeline"?-6:0},effect:null}}));$(this.qTipContentID()).find("textarea.bubbleInputText").blur(function(){myBubble.text=$(this).val().trim();if(myBubble.text){myBubble.showViewer()}else{myBubble.showStub()}}).focus();this.state="edit"};AnnotationBubble.prototype.bindViewerClickHandler=function(){var myBubble=this;$(this.qTipID()).unbind("click").click(function(){if(myBubble.parentViz.editAnnotationMode){myBubble.showEditor()}else{myBubble.minimizeViewer()}})};AnnotationBubble.prototype.showViewer=function(){assert(this.state=="edit"||this.state=="invisible");assert(this.text);var myBubble=this;this.destroyQTip();$(this.hashID).qtip($.extend({},qtipShared,{content:htmlsanitize(this.text),id:this.domID,position:{my:this.my,at:this.at,adjust:{x:myBubble.type=="codeline"?-6:0},effect:null}}));this.bindViewerClickHandler();this.state="view"};AnnotationBubble.prototype.minimizeViewer=function(){assert(this.state=="view");var myBubble=this;$(this.hashID).qtip("option","content.text"," ");$(this.qTipID()).unbind("click").click(function(){if(myBubble.parentViz.editAnnotationMode){myBubble.showEditor()}else{myBubble.restoreViewer()}});this.state="minimized"};AnnotationBubble.prototype.restoreViewer=function(){assert(this.state=="minimized");$(this.hashID).qtip("option","content.text",htmlsanitize(this.text));this.bindViewerClickHandler();this.state="view"};AnnotationBubble.prototype.makeInvisible=function(){assert(this.state=="stub"||this.state=="edit");this.destroyQTip();this.state="invisible"};AnnotationBubble.prototype.destroyQTip=function(){$(this.hashID).qtip("destroy")};AnnotationBubble.prototype.qTipContentID=function(){return"#ui-tooltip-"+this.domID+"-content"};AnnotationBubble.prototype.qTipID=function(){return"#ui-tooltip-"+this.domID};AnnotationBubble.prototype.enterEditMode=function(){assert(this.parentViz.editAnnotationMode);if(this.state=="invisible"){this.showStub();if(this.type=="codeline"){this.redrawCodelineBubble()}}};AnnotationBubble.prototype.enterViewMode=function(){assert(!this.parentViz.editAnnotationMode);if(this.state=="stub"){this.makeInvisible()}else if(this.state=="edit"){this.text=$(this.qTipContentID()).find("textarea.bubbleInputText").val().trim();if(this.text){this.showViewer();if(this.type=="codeline"){this.redrawCodelineBubble()}}else{this.makeInvisible()}}else if(this.state=="invisible"){if(this.text){this.showViewer();if(this.type=="codeline"){this.redrawCodelineBubble()}}}};AnnotationBubble.prototype.preseedText=function(txt){assert(this.state=="invisible");this.text=txt};AnnotationBubble.prototype.redrawCodelineBubble=function(){assert(this.type=="codeline");if(isOutputLineVisibleForBubbles(this.domID)){if(this.qtipHidden){$(this.hashID).qtip("show")}else{$(this.hashID).qtip("reposition")}this.qtipHidden=false}else{$(this.hashID).qtip("hide");this.qtipHidden=true}};AnnotationBubble.prototype.redrawBubble=function(){$(this.hashID).qtip("reposition")};function isOutputLineVisibleForBubbles(lineDivID){var pcod=$("#pyCodeOutputDiv");var lineNoTd=$("#"+lineDivID);var LO=lineNoTd.offset().top;var PO=pcod.offset().top;var ST=pcod.scrollTop();var H=pcod.height();return PO<=LO&&LO<PO+H-25}function traceQCheckMe(inputId,divId,answer){var vis=$("#"+divId).data("vis");var i=vis.curInstr;var curEntry=vis.curTrace[i+1];var ans=$("#"+inputId).val();var attrs=answer.split(".");var correctAns=curEntry;for(var j in attrs){correctAns=correctAns[attrs[j]]}var feedbackElement=$("#"+divId+"_feedbacktext");if(ans.length>0&&ans==correctAns){feedbackElement.html("Correct")}else{feedbackElement.html(vis.curTrace[i].question.feedback)}}function closeModal(divId){$.modal.close();$("#"+divId).data("vis").stepForward()}ExecutionVisualizer.prototype.activateJavaFrontend=function(){var prevLine=null;this.curTrace.forEach(function(e,i){if(e.event==="exception"&&!e.line){e.line=prevLine}if(e.stack_to_render!==undefined){e.stack_to_render.reverse()}prevLine=e.line});this.add_pytutor_hook("renderPrimitiveObject",function(args){var obj=args.obj,d3DomElement=args.d3DomElement;var typ=typeof obj;if(obj==null)d3DomElement.append('<span class="nullObj">null</span>');else if(typ=="number")d3DomElement.append('<span class="numberObj">'+obj+"</span>");else if(typ=="boolean"){if(obj)d3DomElement.append('<span class="boolObj">true</span>');else d3DomElement.append('<span class="boolObj">false</span>')}else if(obj instanceof Array&&obj[0]=="VOID"){d3DomElement.append('<span class="voidObj">void</span>')}else if(obj instanceof Array&&obj[0]=="NUMBER-LITERAL"){d3DomElement.append('<span class="numberObj">'+obj[1]+"</span>")}else if(obj instanceof Array&&obj[0]=="CHAR-LITERAL"){var asc=obj[1].charCodeAt(0);var ch=obj[1];var show=asc.toString(16);while(show.length<4)show="0"+show;show="\\u"+show;if(ch=="\n")show="\\n";else if(ch=="\r")show="\\r";else if(ch=="\t")show="\\t";else if(ch=="\b")show="\\b";else if(ch=="\f")show="\\f";else if(ch=="'")show="\\'";else if(ch=='"')show='\\"';else if(ch=="\\")show="\\\\";else if(asc>=32)show=ch;d3DomElement.append('<span class="stringObj">\''+show+"'</span>")}else return[false];return[true]});this.add_pytutor_hook("isPrimitiveType",function(args){var obj=args.obj;if(obj instanceof Array&&obj[0]=="VOID"||obj instanceof Array&&obj[0]=="NUMBER-LITERAL"||obj instanceof Array&&obj[0]=="CHAR-LITERAL"||obj instanceof Array&&obj[0]=="ELIDE")return[true,true];return[false]});this.add_pytutor_hook("end_updateOutput",function(args){var myViz=args.myViz;var curEntry=myViz.curTrace[myViz.curInstr];if(myViz.params.stdin&&myViz.params.stdin!=""){var stdinPosition=curEntry.stdinPosition||0;var stdinContent='<span style="color:lightgray;text-decoration: line-through">'+escapeHtml(myViz.params.stdin.substr(0,stdinPosition))+"</span>"+escapeHtml(myViz.params.stdin.substr(stdinPosition));myViz.domRoot.find("#stdinShow").html(stdinContent)}return[false]});this.add_pytutor_hook("end_constructor",function(args){var myViz=args.myViz;if(myViz.curTrace.length>0&&myViz.curTrace[myViz.curTrace.length-1]&&myViz.curTrace[myViz.curTrace.length-1].stdout){myViz.hasStdout=true;myViz.stdoutLines=myViz.curTrace[myViz.curTrace.length-1].stdout.split("\n").length}else if(myViz.curTrace.length>1&&myViz.curTrace[myViz.curTrace.length-2]&&myViz.curTrace[myViz.curTrace.length-2].stdout){myViz.hasStdout=true;myViz.stdoutLines=myViz.curTrace[myViz.curTrace.length-2].stdout.split("\n").length}else{myViz.stdoutLines=-1}if(myViz.hasStdout)for(var i=0;i<myViz.curTrace.length;i++)if(!myViz.curTrace[i].stdout)myViz.curTrace[i].stdout=" "});this.add_pytutor_hook("end_render",function(args){var myViz=args.myViz;if(myViz.params.stdin&&myViz.params.stdin!=""){var stdinHTML='<div id="stdinWrap">stdin:<pre id="stdinShow" style="border:1px solid gray"></pre></div>';myViz.domRoot.find("#dataViz").append(stdinHTML)}myViz.domRoot.find("#"+myViz.generateID("globals_header")).html("Static fields")});this.add_pytutor_hook("isLinearObject",function(args){var heapObj=args.heapObj;if(heapObj[0]=="STACK"||heapObj[0]=="QUEUE")return["true","true"];return["false"]});this.add_pytutor_hook("renderCompoundObject",function(args){var objID=args.objID;var d3DomElement=args.d3DomElement;var obj=args.obj;var typeLabelPrefix=args.typeLabelPrefix;var myViz=args.myViz;var stepNum=args.stepNum;if(!(obj[0]=="LIST"||obj[0]=="QUEUE"||obj[0]=="STACK"))return[false];var label=obj[0].toLowerCase();var visibleLabel={list:"array",queue:"queue",stack:"stack"}[label];if(obj.length==1){d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+"empty "+visibleLabel+"</div>");return[true]}d3DomElement.append('<div class="typeLabel">'+typeLabelPrefix+visibleLabel+"</div>");d3DomElement.append('<table class="'+label+'Tbl"></table>');var tbl=d3DomElement.children("table");if(obj[0]=="LIST"){tbl.append("<tr></tr><tr></tr>");var headerTr=tbl.find("tr:first");var contentTr=tbl.find("tr:last");for(var i=1,ind=0;i<obj.length;i++){var val=obj[i];var elide=val instanceof Array&&val[0]=="ELIDE";headerTr.append('<td class="'+label+'Header"></td>');headerTr.find("td:last").append(elide?"&hellip;":ind);contentTr.append('<td class="'+label+'Elt"></td>');if(!elide){myViz.renderNestedObject(val,stepNum,contentTr.find("td:last"));ind++}else{contentTr.find("td:last").append("&hellip;");ind+=val[1]}}}if(obj[0]=="STACK"){tbl.append("<tr></tr><tr></tr>");var contentTr=tbl.find("tr:last");contentTr.append('<td class="'+label+'FElt">'+'<span class="stringObj symbolic">&#8596;</span>'+"</td>");$.each(obj,function(ind,val){if(ind<1)return;contentTr.append('<td class="'+label+'Elt"></td>');myViz.renderNestedObject(val,stepNum,contentTr.find("td:last"))});contentTr.append('<td class="'+label+'LElt">'+"</td>")}if(obj[0]=="QUEUE"){tbl.append("<tr></tr><tr></tr>");var contentTr=tbl.find("tr:last");contentTr.append('<td class="'+label+'FElt">'+'<span class="stringObj symbolic">&#8592;</span></td>');$.each(obj,function(ind,val){if(ind<1)return;contentTr.append('<td class="'+label+'Elt"></td>');myViz.renderNestedObject(val,stepNum,contentTr.find("td:last"))});contentTr.append('<td class="'+label+'LElt">'+'<span class="stringObj symbolic">&#8592;</span></td>')}return[true]});this.add_pytutor_hook("end_renderDataStructures",function(args){var myViz=args.myViz;myViz.domRoot.find("td.instKey:contains('___NO_LABEL!___')").hide();myViz.domRoot.find(".typeLabel:contains('dict')").each(function(i){if($(this).html()=="dict")$(this).html("symbol table");if($(this).html()=="empty dict")$(this).html("empty symbol table")})});var old_generateID=ExecutionVisualizer.prototype.generateID.bind(this);this.generateID=function(original_id){var sanitized=original_id.replace(/[^0-9a-zA-Z_]/g,function(match){return"-"+match.charCodeAt(0)+"-"});return old_generateID(sanitized)};var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};var escapeHtml=function(string){return String(string).replace(/[&<>"'\/]/g,function(s){return entityMap[s]})}};