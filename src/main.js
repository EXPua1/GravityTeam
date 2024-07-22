!(function (e) {
  var t = {};
  function i(r) {
    if (t[r]) return t[r].exports;
    var n = (t[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return e[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, r) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r,
        });
    }),
    (i.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          value: e,
        }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          i.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ''),
    i((i.s = 14));
})([
  function (e, t, i) {
    !(function () {
      'use strict';
      e.exports = {
        polyfill: function () {
          var e = window,
            t = document;
          if (
            !('scrollBehavior' in t.documentElement.style) ||
            !0 === e.__forceSmoothScrollPolyfill__
          ) {
            var i,
              r = e.HTMLElement || e.Element,
              n = {
                scroll: e.scroll || e.scrollTo,
                scrollBy: e.scrollBy,
                elementScroll: r.prototype.scroll || o,
                scrollIntoView: r.prototype.scrollIntoView,
              },
              s =
                e.performance && e.performance.now
                  ? e.performance.now.bind(e.performance)
                  : Date.now,
              a =
                ((i = e.navigator.userAgent),
                new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(i)
                  ? 1
                  : 0);
            (e.scroll = e.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== l(arguments[0])
                    ? f.call(
                        e,
                        t.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : e.scrollX || e.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : e.scrollY || e.pageYOffset
                      )
                    : n.scroll.call(
                        e,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? arguments[0]
                          : e.scrollX || e.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : e.scrollY || e.pageYOffset
                      ));
              }),
              (e.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (l(arguments[0])
                    ? n.scrollBy.call(
                        e,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : f.call(
                        e,
                        t.body,
                        ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                        ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                      ));
              }),
              (r.prototype.scroll = r.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== l(arguments[0])) {
                      var e = arguments[0].left,
                        t = arguments[0].top;
                      f.call(
                        this,
                        this,
                        void 0 === e ? this.scrollLeft : ~~e,
                        void 0 === t ? this.scrollTop : ~~t
                      );
                    } else {
                      if (
                        'number' == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError('Value could not be converted');
                      n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (r.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== l(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (r.prototype.scrollIntoView = function () {
                if (!0 !== l(arguments[0])) {
                  var i = h(this),
                    r = i.getBoundingClientRect(),
                    s = this.getBoundingClientRect();
                  i !== t.body
                    ? (f.call(
                        this,
                        i,
                        i.scrollLeft + s.left - r.left,
                        i.scrollTop + s.top - r.top
                      ),
                      'fixed' !== e.getComputedStyle(i).position &&
                        e.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: 'smooth',
                        }))
                    : e.scrollBy({
                        left: s.left,
                        top: s.top,
                        behavior: 'smooth',
                      });
                } else
                  n.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function o(e, t) {
            (this.scrollLeft = e), (this.scrollTop = t);
          }
          function l(e) {
            if (
              null === e ||
              'object' != typeof e ||
              void 0 === e.behavior ||
              'auto' === e.behavior ||
              'instant' === e.behavior
            )
              return !0;
            if ('object' == typeof e && 'smooth' === e.behavior) return !1;
            throw new TypeError(
              'behavior member of ScrollOptions ' +
                e.behavior +
                ' is not a valid value for enumeration ScrollBehavior.'
            );
          }
          function c(e, t) {
            return 'Y' === t
              ? e.clientHeight + a < e.scrollHeight
              : 'X' === t
              ? e.clientWidth + a < e.scrollWidth
              : void 0;
          }
          function u(t, i) {
            var r = e.getComputedStyle(t, null)['overflow' + i];
            return 'auto' === r || 'scroll' === r;
          }
          function d(e) {
            var t = c(e, 'Y') && u(e, 'Y'),
              i = c(e, 'X') && u(e, 'X');
            return t || i;
          }
          function h(e) {
            for (; e !== t.body && !1 === d(e); ) e = e.parentNode || e.host;
            return e;
          }
          function p(t) {
            var i,
              r,
              n,
              a,
              o = (s() - t.startTime) / 468;
            (a = o = o > 1 ? 1 : o),
              (i = 0.5 * (1 - Math.cos(Math.PI * a))),
              (r = t.startX + (t.x - t.startX) * i),
              (n = t.startY + (t.y - t.startY) * i),
              t.method.call(t.scrollable, r, n),
              (r === t.x && n === t.y) || e.requestAnimationFrame(p.bind(e, t));
          }
          function f(i, r, a) {
            var l,
              c,
              u,
              d,
              h = s();
            i === t.body
              ? ((l = e),
                (c = e.scrollX || e.pageXOffset),
                (u = e.scrollY || e.pageYOffset),
                (d = n.scroll))
              : ((l = i), (c = i.scrollLeft), (u = i.scrollTop), (d = o)),
              p({
                scrollable: l,
                method: d,
                startTime: h,
                startX: c,
                startY: u,
                x: r,
                y: a,
              });
          }
        },
      };
    })();
  },
  function (e, t, i) {
    e.exports = (function () {
      'use strict';
      function e() {
        return (e =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var t = 'undefined' != typeof window,
        i =
          (t && !('onscroll' in window)) ||
          ('undefined' != typeof navigator &&
            /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
        r = t && 'IntersectionObserver' in window,
        n = t && 'classList' in document.createElement('p'),
        s = t && window.devicePixelRatio > 1,
        a = {
          elements_selector: '.lazy',
          container: i || t ? document : null,
          threshold: 300,
          thresholds: null,
          data_src: 'src',
          data_srcset: 'srcset',
          data_sizes: 'sizes',
          data_bg: 'bg',
          data_bg_hidpi: 'bg-hidpi',
          data_bg_multi: 'bg-multi',
          data_bg_multi_hidpi: 'bg-multi-hidpi',
          data_bg_set: 'bg-set',
          data_poster: 'poster',
          class_applied: 'applied',
          class_loading: 'loading',
          class_loaded: 'loaded',
          class_error: 'error',
          class_entered: 'entered',
          class_exited: 'exited',
          unobserve_completed: !0,
          unobserve_entered: !1,
          cancel_on_exit: !0,
          callback_enter: null,
          callback_exit: null,
          callback_applied: null,
          callback_loading: null,
          callback_loaded: null,
          callback_error: null,
          callback_finish: null,
          callback_cancel: null,
          use_native: !1,
          restore_on_error: !1,
        },
        o = function (t) {
          return e({}, a, t);
        },
        l = function (e, t) {
          var i,
            r = 'LazyLoad::Initialized',
            n = new e(t);
          try {
            i = new CustomEvent(r, {
              detail: {
                instance: n,
              },
            });
          } catch (e) {
            (i = document.createEvent('CustomEvent')).initCustomEvent(
              r,
              !1,
              !1,
              {
                instance: n,
              }
            );
          }
          window.dispatchEvent(i);
        },
        c = 'src',
        u = 'srcset',
        d = 'sizes',
        h = 'poster',
        p = 'llOriginalAttrs',
        f = 'data',
        v = 'loading',
        g = 'loaded',
        m = 'applied',
        y = 'error',
        b = 'native',
        _ = function (e, t) {
          return e.getAttribute('data-' + t);
        },
        w = function (e) {
          return _(e, 'll-status');
        },
        T = function (e, t) {
          return (function (e, t, i) {
            var r = 'data-ll-status';
            null !== i ? e.setAttribute(r, i) : e.removeAttribute(r);
          })(e, 0, t);
        },
        x = function (e) {
          return T(e, null);
        },
        S = function (e) {
          return null === w(e);
        },
        E = function (e) {
          return w(e) === b;
        },
        C = [v, g, m, y],
        k = function (e, t, i, r) {
          e && (void 0 === r ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, r));
        },
        L = function (e, t) {
          n
            ? e.classList.add(t)
            : (e.className += (e.className ? ' ' : '') + t);
        },
        M = function (e, t) {
          n
            ? e.classList.remove(t)
            : (e.className = e.className
                .replace(new RegExp('(^|\\s+)' + t + '(\\s+|$)'), ' ')
                .replace(/^\s+/, '')
                .replace(/\s+$/, ''));
        },
        A = function (e) {
          return e.llTempImage;
        },
        P = function (e, t) {
          if (t) {
            var i = t._observer;
            i && i.unobserve(e);
          }
        },
        O = function (e, t) {
          e && (e.loadingCount += t);
        },
        D = function (e, t) {
          e && (e.toLoadCount = t);
        },
        z = function (e) {
          for (var t, i = [], r = 0; (t = e.children[r]); r += 1)
            'SOURCE' === t.tagName && i.push(t);
          return i;
        },
        I = function (e, t) {
          var i = e.parentNode;
          i && 'PICTURE' === i.tagName && z(i).forEach(t);
        },
        j = function (e, t) {
          z(e).forEach(t);
        },
        q = [c],
        B = [c, h],
        F = [c, u, d],
        R = [f],
        N = function (e) {
          return !!e[p];
        },
        G = function (e) {
          return e[p];
        },
        V = function (e) {
          return delete e[p];
        },
        H = function (e, t) {
          if (!N(e)) {
            var i = {};
            t.forEach(function (t) {
              i[t] = e.getAttribute(t);
            }),
              (e[p] = i);
          }
        },
        Y = function (e, t) {
          if (N(e)) {
            var i = G(e);
            t.forEach(function (t) {
              !(function (e, t, i) {
                i ? e.setAttribute(t, i) : e.removeAttribute(t);
              })(e, t, i[t]);
            });
          }
        },
        X = function (e, t, i) {
          L(e, t.class_applied),
            T(e, m),
            i &&
              (t.unobserve_completed && P(e, t), k(t.callback_applied, e, i));
        },
        $ = function (e, t, i) {
          L(e, t.class_loading),
            T(e, v),
            i && (O(i, 1), k(t.callback_loading, e, i));
        },
        W = function (e, t, i) {
          i && e.setAttribute(t, i);
        },
        U = function (e, t) {
          W(e, d, _(e, t.data_sizes)),
            W(e, u, _(e, t.data_srcset)),
            W(e, c, _(e, t.data_src));
        },
        K = {
          IMG: function (e, t) {
            I(e, function (e) {
              H(e, F), U(e, t);
            }),
              H(e, F),
              U(e, t);
          },
          IFRAME: function (e, t) {
            H(e, q), W(e, c, _(e, t.data_src));
          },
          VIDEO: function (e, t) {
            j(e, function (e) {
              H(e, q), W(e, c, _(e, t.data_src));
            }),
              H(e, B),
              W(e, h, _(e, t.data_poster)),
              W(e, c, _(e, t.data_src)),
              e.load();
          },
          OBJECT: function (e, t) {
            H(e, R), W(e, f, _(e, t.data_src));
          },
        },
        Q = ['IMG', 'IFRAME', 'VIDEO', 'OBJECT'],
        Z = function (e, t) {
          !t ||
            (function (e) {
              return e.loadingCount > 0;
            })(t) ||
            (function (e) {
              return e.toLoadCount > 0;
            })(t) ||
            k(e.callback_finish, t);
        },
        J = function (e, t, i) {
          e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
        },
        ee = function (e, t, i) {
          e.removeEventListener(t, i);
        },
        te = function (e) {
          return !!e.llEvLisnrs;
        },
        ie = function (e) {
          if (te(e)) {
            var t = e.llEvLisnrs;
            for (var i in t) {
              var r = t[i];
              ee(e, i, r);
            }
            delete e.llEvLisnrs;
          }
        },
        re = function (e, t, i) {
          !(function (e) {
            delete e.llTempImage;
          })(e),
            O(i, -1),
            (function (e) {
              e && (e.toLoadCount -= 1);
            })(i),
            M(e, t.class_loading),
            t.unobserve_completed && P(e, i);
        },
        ne = function (e, t, i) {
          var r = A(e) || e;
          te(r) ||
            (function (e, t, i) {
              te(e) || (e.llEvLisnrs = {});
              var r = 'VIDEO' === e.tagName ? 'loadeddata' : 'load';
              J(e, r, t), J(e, 'error', i);
            })(
              r,
              function (n) {
                !(function (e, t, i, r) {
                  var n = E(t);
                  re(t, i, r),
                    L(t, i.class_loaded),
                    T(t, g),
                    k(i.callback_loaded, t, r),
                    n || Z(i, r);
                })(0, e, t, i),
                  ie(r);
              },
              function (n) {
                !(function (e, t, i, r) {
                  var n = E(t);
                  re(t, i, r),
                    L(t, i.class_error),
                    T(t, y),
                    k(i.callback_error, t, r),
                    i.restore_on_error && Y(t, F),
                    n || Z(i, r);
                })(0, e, t, i),
                  ie(r);
              }
            );
        },
        se = function (e, t, i) {
          !(function (e) {
            return Q.indexOf(e.tagName) > -1;
          })(e)
            ? (function (e, t, i) {
                !(function (e) {
                  e.llTempImage = document.createElement('IMG');
                })(e),
                  ne(e, t, i),
                  (function (e) {
                    N(e) ||
                      (e[p] = {
                        backgroundImage: e.style.backgroundImage,
                      });
                  })(e),
                  (function (e, t, i) {
                    var r = _(e, t.data_bg),
                      n = _(e, t.data_bg_hidpi),
                      a = s && n ? n : r;
                    a &&
                      ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                      A(e).setAttribute(c, a),
                      $(e, t, i));
                  })(e, t, i),
                  (function (e, t, i) {
                    var r = _(e, t.data_bg_multi),
                      n = _(e, t.data_bg_multi_hidpi),
                      a = s && n ? n : r;
                    a && ((e.style.backgroundImage = a), X(e, t, i));
                  })(e, t, i),
                  (function (e, t, i) {
                    var r = _(e, t.data_bg_set);
                    if (r) {
                      var n = r.split('|'),
                        s = n.map(function (e) {
                          return 'image-set('.concat(e, ')');
                        });
                      (e.style.backgroundImage = s.join()),
                        '' === e.style.backgroundImage &&
                          ((s = n.map(function (e) {
                            return '-webkit-image-set('.concat(e, ')');
                          })),
                          (e.style.backgroundImage = s.join())),
                        X(e, t, i);
                    }
                  })(e, t, i);
              })(e, t, i)
            : (function (e, t, i) {
                ne(e, t, i),
                  (function (e, t, i) {
                    var r = K[e.tagName];
                    r && (r(e, t), $(e, t, i));
                  })(e, t, i);
              })(e, t, i);
        },
        ae = function (e) {
          e.removeAttribute(c), e.removeAttribute(u), e.removeAttribute(d);
        },
        oe = function (e) {
          I(e, function (e) {
            Y(e, F);
          }),
            Y(e, F);
        },
        le = {
          IMG: oe,
          IFRAME: function (e) {
            Y(e, q);
          },
          VIDEO: function (e) {
            j(e, function (e) {
              Y(e, q);
            }),
              Y(e, B),
              e.load();
          },
          OBJECT: function (e) {
            Y(e, R);
          },
        },
        ce = ['IMG', 'IFRAME', 'VIDEO'],
        ue = function (e) {
          return e.use_native && 'loading' in HTMLImageElement.prototype;
        },
        de = function (e) {
          return Array.prototype.slice.call(e);
        },
        he = function (e) {
          return e.container.querySelectorAll(e.elements_selector);
        },
        pe = function (e) {
          return (function (e) {
            return w(e) === y;
          })(e);
        },
        fe = function (e, t) {
          return (function (e) {
            return de(e).filter(S);
          })(e || he(t));
        },
        ve = function (e, i) {
          var n = o(e);
          (this._settings = n),
            (this.loadingCount = 0),
            (function (e, t) {
              r &&
                !ue(e) &&
                (t._observer = new IntersectionObserver(
                  function (i) {
                    !(function (e, t, i) {
                      e.forEach(function (e) {
                        return (function (e) {
                          return e.isIntersecting || e.intersectionRatio > 0;
                        })(e)
                          ? (function (e, t, i, r) {
                              var n = (function (e) {
                                return C.indexOf(w(e)) >= 0;
                              })(e);
                              T(e, 'entered'),
                                L(e, i.class_entered),
                                M(e, i.class_exited),
                                (function (e, t, i) {
                                  t.unobserve_entered && P(e, i);
                                })(e, i, r),
                                k(i.callback_enter, e, t, r),
                                n || se(e, i, r);
                            })(e.target, e, t, i)
                          : (function (e, t, i, r) {
                              S(e) ||
                                (L(e, i.class_exited),
                                (function (e, t, i, r) {
                                  i.cancel_on_exit &&
                                    (function (e) {
                                      return w(e) === v;
                                    })(e) &&
                                    'IMG' === e.tagName &&
                                    (ie(e),
                                    (function (e) {
                                      I(e, function (e) {
                                        ae(e);
                                      }),
                                        ae(e);
                                    })(e),
                                    oe(e),
                                    M(e, i.class_loading),
                                    O(r, -1),
                                    x(e),
                                    k(i.callback_cancel, e, t, r));
                                })(e, t, i, r),
                                k(i.callback_exit, e, t, r));
                            })(e.target, e, t, i);
                      });
                    })(i, e, t);
                  },
                  (function (e) {
                    return {
                      root: e.container === document ? null : e.container,
                      rootMargin: e.thresholds || e.threshold + 'px',
                    };
                  })(e)
                ));
            })(n, this),
            (function (e, i) {
              t &&
                ((i._onlineHandler = function () {
                  !(function (e, t) {
                    var i;
                    ((i = he(e)), de(i).filter(pe)).forEach(function (t) {
                      M(t, e.class_error), x(t);
                    }),
                      t.update();
                  })(e, i);
                }),
                window.addEventListener('online', i._onlineHandler));
            })(n, this),
            this.update(i);
        };
      return (
        (ve.prototype = {
          update: function (e) {
            var t,
              n,
              s = this._settings,
              a = fe(e, s);
            D(this, a.length),
              !i && r
                ? ue(s)
                  ? (function (e, t, i) {
                      e.forEach(function (e) {
                        -1 !== ce.indexOf(e.tagName) &&
                          (function (e, t, i) {
                            e.setAttribute('loading', 'lazy'),
                              ne(e, t, i),
                              (function (e, t) {
                                var i = K[e.tagName];
                                i && i(e, t);
                              })(e, t),
                              T(e, b);
                          })(e, t, i);
                      }),
                        D(i, 0);
                    })(a, s, this)
                  : ((n = a),
                    (function (e) {
                      e.disconnect();
                    })((t = this._observer)),
                    (function (e, t) {
                      t.forEach(function (t) {
                        e.observe(t);
                      });
                    })(t, n))
                : this.loadAll(a);
          },
          destroy: function () {
            this._observer && this._observer.disconnect(),
              t && window.removeEventListener('online', this._onlineHandler),
              he(this._settings).forEach(function (e) {
                V(e);
              }),
              delete this._observer,
              delete this._settings,
              delete this._onlineHandler,
              delete this.loadingCount,
              delete this.toLoadCount;
          },
          loadAll: function (e) {
            var t = this,
              i = this._settings;
            fe(e, i).forEach(function (e) {
              P(e, t), se(e, i, t);
            });
          },
          restoreAll: function () {
            var e = this._settings;
            he(e).forEach(function (t) {
              !(function (e, t) {
                (function (e) {
                  var t = le[e.tagName];
                  t
                    ? t(e)
                    : (function (e) {
                        if (N(e)) {
                          var t = G(e);
                          e.style.backgroundImage = t.backgroundImage;
                        }
                      })(e);
                })(e),
                  (function (e, t) {
                    S(e) ||
                      E(e) ||
                      (M(e, t.class_entered),
                      M(e, t.class_exited),
                      M(e, t.class_applied),
                      M(e, t.class_loading),
                      M(e, t.class_loaded),
                      M(e, t.class_error));
                  })(e, t),
                  x(e),
                  V(e);
              })(t, e);
            });
          },
        }),
        (ve.load = function (e, t) {
          var i = o(t);
          se(e, i);
        }),
        (ve.resetStatus = function (e) {
          x(e);
        }),
        t &&
          (function (e, t) {
            if (t)
              if (t.length) for (var i, r = 0; (i = t[r]); r += 1) l(e, i);
              else l(e, t);
          })(ve, window.lazyLoadOptions),
        ve
      );
    })();
  },
  function (e, t) {
    var i = document.querySelector('.js-bottom-scroll-indicator'),
      r = document.querySelector('.u-section--other-posts'),
      n = document.querySelector('.u-section--contact-us'),
      s = function () {
        var e = window.scrollY || document.documentElement.scrollTop,
          t =
            Math.max(
              document.body.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.clientHeight,
              document.documentElement.scrollHeight,
              document.documentElement.offsetHeight
            ) - window.innerHeight;
        r && (t = t - r.offsetHeight - 128),
          n && (t -= n.offsetHeight),
          (i.style.width = ((e / t) * 100).toFixed(2) + '%');
      };
    i &&
      setTimeout(function () {
        window.addEventListener('scroll', s),
          window.addEventListener('resize', s),
          s();
      }, 500);
  },
  function (e, t) {
    setTimeout(function () {
      document
        .querySelector('body')
        .setAttribute('data-already-animated', 'true');
    }, 4e3);
  },
  function (e, t) {
    var i = document.querySelectorAll('.js-crypto-hero-numbers-hld');
    i &&
      i.forEach(function (e) {
        var t = e.querySelectorAll('.js-crypto-hero-numbers'),
          i = e.dataset.count,
          r = e.dataset.switchTime;
        t.forEach(function (e) {
          var t = e.querySelectorAll('.js-crypto-hero-number'),
            n = 0;
          setInterval(function () {
            t[n].classList.remove('is-active'),
              n === i - 1 ? (n = 0) : (n += 1),
              t[n].classList.add('is-active');
          }, r);
        });
      });
  },
  function (e, t) {
    var i = document.querySelectorAll('.js-faq');
    i &&
      i.forEach(function (e) {
        var t = e.querySelectorAll('.js-faq-item');
        t.forEach(function (e) {
          e
            .querySelector('.js-faq-item__btn')
            .addEventListener('click', function () {
              e.classList.contains('is-active')
                ? e.classList.remove('is-active')
                : (t.forEach(function (e) {
                    e.classList.remove('is-active');
                  }),
                  e.classList.add('is-active'));
            }),
            e
              .querySelector('.js-faq-item__title')
              .addEventListener('click', function () {
                e.classList.contains('is-active')
                  ? e.classList.remove('is-active')
                  : (t.forEach(function (e) {
                      e.classList.remove('is-active');
                    }),
                    e.classList.add('is-active'));
              });
        });
      });
  },
  function (e, t) {
    var i,
      r = document.querySelector('body'),
      n = document.querySelector('.u-section--hero-home'),
      s = window.innerWidth,
      a = function () {
        (i =
          'true' === r.getAttribute('data-show-trade-bar')
            ? window.innerWidth >= 1024
              ? 78
              : 60
            : 0),
          (n.style.minHeight = Math.max(window.innerHeight - i, 500) + 'px');
      };
    n &&
      (window.addEventListener('resize', function () {
        var e = s;
        window.innerWidth !== e && ((s = window.innerWidth), a());
      }),
      a());
  },
  function (e, t) {
    document.querySelectorAll('.js-header').forEach(function (e) {
      var t,
        i = window.scrollY || document.documentElement.scrollTop,
        r = 0,
        n = 0,
        s =
          Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          ) - window.innerHeight,
        a = function () {
          (t = window.scrollY || document.documentElement.scrollTop) > i
            ? (n = 2)
            : t < i && (n = 1),
            t >= s && (n = 2),
            n !== r && o(n, t),
            t > 0
              ? e.classList.add('is-scrolled')
              : e.classList.remove('is-scrolled'),
            (i = t);
        },
        o = function (t, i) {
          2 === t && i > 80
            ? (e.classList.add('is-scrolled-down'), (r = t))
            : 1 === t && (e.classList.remove('is-scrolled-down'), (r = t));
        };
      setInterval(function () {
        s =
          Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          ) - window.innerHeight;
      }, 1e3),
        window.addEventListener('scroll', a),
        window.addEventListener('load', a);
    });
  },
  function (e, t) {
    var i = document.querySelector('body'),
      r = document.querySelector('.js-mobile-nav'),
      n = document.querySelectorAll('.js-mobile-nav-toggle'),
      s = document.querySelectorAll('.js-mobile-nav-close'),
      a = function () {
        i.classList.remove('is-mobile-open'), r.classList.remove('is-active');
      };
    n &&
      n.forEach(function (e) {
        e.addEventListener('click', function () {
          r.classList.contains('is-active')
            ? a()
            : (i.classList.add('is-mobile-open'), r.classList.add('is-active'));
        });
      }),
      s &&
        s.forEach(function (e) {
          e.addEventListener('click', function () {
            a();
          });
        });
    var o = document.querySelectorAll('.mobile-nav .menu-item-has-children');
    o &&
      o.forEach(function (e) {
        e.addEventListener('click', function () {
          e.classList.toggle('is-active');
        });
      }),
      window.addEventListener('resize', function () {
        window.innerWidth >= 1280 && a();
      });
  },
  function (e, t) {
    var i = document.querySelectorAll('.js-sponsors-hld');
    i &&
      i.forEach(function (e) {
        var t = e.querySelector('.js-sponsors'),
          i = e.querySelector('.js-sponsors-more-btn-hld'),
          r = e.querySelector('.js-sponsors-more-btn');
        t &&
          i &&
          r &&
          r.addEventListener('click', function () {
            r.classList.contains('is-active')
              ? (r.classList.remove('is-active'),
                (r.querySelector('.text').textContent = r.dataset.textInitial),
                t.classList.add('is-capped'))
              : (r.classList.add('is-active'),
                (r.querySelector('.text').textContent = r.dataset.textActive),
                t.classList.remove('is-capped'));
          });
      });
  },
  function (e, t) {
    var i = document.querySelectorAll('.u-content table');
    i.forEach(function (e) {
      !(function (e, t, i) {
        if (!e.parentNode.classList.contains(i)) {
          var r = document.createElement(t);
          r.classList.add(i), e.parentNode.insertBefore(r, e), r.appendChild(e);
        }
      })(e, 'div', 'u-table-hld');
    });
  },
  function (e, t) {
    var i = document.querySelector('.js-trade-bar-hld'),
      r = document.querySelector('.js-trade-bar'),
      n = document.querySelector('.js-trade-bar-inner'),
      s = window.innerWidth < 768 ? 32 : 56;
    if (
      (window.addEventListener('resize', function () {
        s = window.innerWidth < 768 ? 32 : 56;
      }),
      i && r && n)
    ) {
      var a = function () {
        n.setAttribute(
          'data-current-left',
          parseFloat(n.getAttribute('data-current-left')) + 150
        ),
          n.setAttribute(
            'style',
            'transform: translate3d(-' +
              n.getAttribute('data-current-left') +
              'px, 0, 0);'
          );
        var e = n.querySelectorAll('.trade-bar__item');
        e &&
          e.forEach(function (e) {
            e.getBoundingClientRect().left < -e.offsetWidth &&
              (n.appendChild(e),
              (e.style.left = n.getAttribute('data-current-position') + 'px'),
              n.setAttribute(
                'data-current-position',
                parseFloat(n.getAttribute('data-current-position')) +
                  e.offsetWidth +
                  s
              ));
          });
      };
      fetch('https://api.binance.com/api/v3/ticker/price')
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          var t = {
              UNIUSDT: {
                name: 'UNI',
                icon: 'uni.svg',
                price: '',
              },
              SANDUSDT: {
                name: 'SAND',
                icon: 'sand.svg',
                price: '',
              },
              HBARUSDT: {
                name: 'HBAR',
                icon: 'hbar.svg',
                price: '',
              },
              NEARUSDT: {
                name: 'NEAR',
                icon: 'near.svg',
                price: '',
              },
              AAVEUSDT: {
                name: 'AAVE',
                icon: 'aave.svg',
                price: '',
              },
              BTCUSDT: {
                name: 'BTC',
                icon: 'btc.svg',
                price: '',
              },
              ETHUSDT: {
                name: 'ETH',
                icon: 'eth.svg',
                price: '',
              },
              LUNAUSDT: {
                name: 'LUNA',
                icon: 'luna.svg',
                price: '',
              },
              ADAUSDT: {
                name: 'ADA',
                icon: 'ada.svg',
                price: '',
              },
              SOLUSDT: {
                name: 'SOL',
                icon: 'sol.svg',
                price: '',
              },
              AVAXUSDT: {
                name: 'AVAX',
                icon: 'avax.svg',
                price: '',
              },
              DOTUSDT: {
                name: 'DOT',
                icon: 'dot.svg',
                price: '',
              },
              DOGEUSDT: {
                name: 'DOGE',
                icon: 'doge.svg',
                price: '',
              },
              MATICUSDT: {
                name: 'MATIC',
                icon: 'matic.svg',
                price: '',
              },
              SHIBUSDT: {
                name: 'SHIBA',
                icon: 'shiba.svg',
                price: '',
              },
              AXSUSDT: {
                name: 'AXS',
                icon: 'axs.svg',
                price: '',
              },
              ATOMUSDT: {
                name: 'ATOM',
                icon: 'atom.svg',
                price: '',
              },
              KSMUSDT: {
                name: 'KSM',
                icon: 'ksm.svg',
                price: '',
              },
              FTTUSDT: {
                name: 'FTX',
                icon: 'ftx.svg',
                price: '',
              },
            },
            i = [];
          if (t) {
            for (var o in t) i.push(o);
            for (var l in (e.forEach(function (e) {
              i.includes(e.symbol) && (t[e.symbol].price = e.price);
            }),
            t))
              if (t.hasOwnProperty(l) && t[l].price) {
                var c = document.createElement('div');
                c.classList.add('trade-bar__item');
                var u = document.createElement('span');
                u.classList.add('price'),
                  t[l].price >= 10
                    ? (u.textContent =
                        '$' +
                        (
                          (Math.round(
                            100 * (parseFloat(t[l].price) + Number.EPSILON)
                          ) /
                            100) *
                          1
                        ).toLocaleString())
                    : (u.textContent = '$' + 1 * t[l].price);
                var d = document.createElement('span');
                if (
                  (d.classList.add('name'),
                  (d.textContent = t[l].name),
                  '' !== t[l].icon)
                ) {
                  c.classList.add('trade-bar__item--iconed');
                  var h = document.createElement('img');
                  h.setAttribute(
                    'src',
                    document
                      .querySelector('body')
                      .getAttribute('data-theme-url') +
                      '/src/img/crypto/' +
                      t[l].icon
                  ),
                    c.appendChild(h);
                }
                c.appendChild(u),
                  c.appendChild(d),
                  n.appendChild(c),
                  (c.style.left =
                    n.getAttribute('data-current-position') + 'px'),
                  n.setAttribute(
                    'data-current-position',
                    parseFloat(n.getAttribute('data-current-position')) +
                      c.offsetWidth +
                      s
                  );
              }
            r.classList.add('is-initialized'),
              setTimeout(function () {
                a(),
                  setInterval(function () {
                    a();
                  }, 2e3);
              }, 1e3);
          }
        })
        .catch(function (e) {
          console.warn(
            'Something went wrong with the currencies prices bar.',
            e
          ),
            i.parentNode.removeChild(i),
            document.body.setAttribute('data-show-trade-bar', 'false');
        });
    }
  },
  function (e, t) {
    var i = document.querySelectorAll('.js-matrix-table');
    i &&
      i.forEach(function (e) {
        var t = e.querySelectorAll('.js-matrix-table-item');
        if (t && t.length > 7) {
          var i = !1;
          if (
            (window.innerWidth >= 1280
              ? (i = [4, 1, 6, 3, 7, 2, 5, 0])
              : window.innerWidth >= 768 && (i = [0, 3, 4, 7, 6, 5, 2, 1]),
            i)
          ) {
            var r = 0,
              n = i.length,
              s = setInterval(function () {
                t.forEach(function (e) {
                  e.classList.remove('is-active');
                }),
                  t[i[r]] && t[i[r]].classList.add('is-active'),
                  r < n - 1 ? r++ : (r = 0);
              }, e.dataset.autoswitchTime);
            e.addEventListener('mouseenter', function () {
              t.forEach(function (e) {
                e.classList.remove('is-active');
              }),
                clearInterval(s);
            });
          }
        }
      });
  },
  function (e, t) {
    var i = document.querySelector('body'),
      r = document.querySelector('#site-modal'),
      n = document.querySelectorAll('.js-modal-show'),
      s = document.querySelectorAll('.js-modal-close');
    function a() {
      r.classList.add('is-hiding'),
        setTimeout(function () {
          i.classList.remove('is-modal-open'),
            (i.style.paddingRight = ''),
            r.classList.remove('is-visible', 'is-hiding');
          var e = r.querySelectorAll('.site-modal__box.is-visible');
          e &&
            e.forEach(function (e) {
              e.classList.remove('is-visible');
            });
        }, 200);
    }
    i &&
      r &&
      n &&
      s &&
      (n.forEach(function (e) {
        e.addEventListener('click', function (t) {
          t.preventDefault(),
            i.classList.add('is-modal-open'),
            r.classList.add('is-visible');
          var n = r.querySelector(
            '[data-modal-id="' + e.getAttribute('data-modal-id') + '"]'
          );
          n && n.classList.add('is-visible');
        });
      }),
      s.forEach(function (e) {
        e.addEventListener('click', function () {
          a();
        });
      }),
      (document.onkeydown = function (e) {
        ('key' in (e = e || window.event)
          ? 'Escape' === e.key || 'Esc' === e.key
          : 27 === e.keyCode) && a();
      }));
  },
  function (e, t, i) {
    'use strict';
    i.r(t);
    var r = i(0),
      n = i.n(r);
    n.a.polyfill();
    var s = document.querySelector('body'),
      a = document.querySelector(
        '.site-top-nav__item a[href="/?section=crypto-market-making"]'
      );
    if (
      (a &&
        s.classList.contains('home') &&
        a.addEventListener('click', function (e) {
          e.preventDefault();
          var t = document.querySelector('.u-section--crypto-market-making');
          t &&
            window.scrollTo({
              top: t.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth',
            });
        }),
      window.location.href.indexOf('?section=crypto-market-making') > -1 &&
        s.classList.contains('home'))
    ) {
      var o = document.querySelector('.u-section--crypto-market-making');
      o &&
        setTimeout(function () {
          window.scrollTo({
            top: o.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }, 1500);
    }
    function l(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function c(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    /*!
     * GSAP 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var u,
      d,
      h,
      p,
      f,
      v,
      g,
      m,
      y,
      b,
      _,
      w,
      T,
      x = {
        autoSleep: 120,
        force3D: 'auto',
        nullTargetWarn: 1,
        units: {
          lineHeight: '',
        },
      },
      S = {
        duration: 0.5,
        overwrite: !1,
        delay: 0,
      },
      E = 1e8,
      C = 2 * Math.PI,
      k = C / 4,
      L = 0,
      M = Math.sqrt,
      A = Math.cos,
      P = Math.sin,
      O = function (e) {
        return 'string' == typeof e;
      },
      D = function (e) {
        return 'function' == typeof e;
      },
      z = function (e) {
        return 'number' == typeof e;
      },
      I = function (e) {
        return void 0 === e;
      },
      j = function (e) {
        return 'object' == typeof e;
      },
      q = function (e) {
        return !1 !== e;
      },
      B = function () {
        return 'undefined' != typeof window;
      },
      F = function (e) {
        return D(e) || O(e);
      },
      R =
        ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      N = Array.isArray,
      G = /(?:-?\.?\d|\.)+/gi,
      V = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      X = /[+-]=-?[.\d]+/,
      $ = /[^,'"\[\]\s]+/gi,
      W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      U = {},
      K = {},
      Q = function (e) {
        return (K = xe(e, U)) && ui;
      },
      Z = function (e, t) {
        return console.warn(
          'Invalid property',
          e,
          'set to',
          t,
          'Missing plugin? gsap.registerPlugin()'
        );
      },
      J = function (e, t) {
        return !t && console.warn(e);
      },
      ee = function (e, t) {
        return (e && (U[e] = t) && K && (K[e] = t)) || U;
      },
      te = function () {
        return 0;
      },
      ie = {},
      re = [],
      ne = {},
      se = {},
      ae = {},
      oe = 30,
      le = [],
      ce = '',
      ue = function (e) {
        var t,
          i,
          r = e[0];
        if ((j(r) || D(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
          for (i = le.length; i-- && !le[i].targetTest(r); );
          t = le[i];
        }
        for (i = e.length; i--; )
          (e[i] && (e[i]._gsap || (e[i]._gsap = new Dt(e[i], t)))) ||
            e.splice(i, 1);
        return e;
      },
      de = function (e) {
        return e._gsap || ue(Je(e))[0]._gsap;
      },
      he = function (e, t, i) {
        return (i = e[t]) && D(i)
          ? e[t]()
          : (I(i) && e.getAttribute && e.getAttribute(t)) || i;
      },
      pe = function (e, t) {
        return (e = e.split(',')).forEach(t) || e;
      },
      fe = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      ve = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      },
      ge = function (e, t) {
        var i = t.charAt(0),
          r = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          '+' === i ? e + r : '-' === i ? e - r : '*' === i ? e * r : e / r
        );
      },
      me = function (e, t) {
        for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
        return r < i;
      },
      ye = function () {
        var e,
          t,
          i = re.length,
          r = re.slice(0);
        for (ne = {}, re.length = 0, e = 0; e < i; e++)
          (t = r[e]) &&
            t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
      },
      be = function (e, t, i, r) {
        re.length && ye(), e.render(t, i, r), re.length && ye();
      },
      _e = function (e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + '').match($).length < 2
          ? t
          : O(e)
          ? e.trim()
          : e;
      },
      we = function (e) {
        return e;
      },
      Te = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
      },
      xe = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      },
      Se = function e(t, i) {
        for (var r in i)
          '__proto__' !== r &&
            'constructor' !== r &&
            'prototype' !== r &&
            (t[r] = j(i[r]) ? e(t[r] || (t[r] = {}), i[r]) : i[r]);
        return t;
      },
      Ee = function (e, t) {
        var i,
          r = {};
        for (i in e) i in t || (r[i] = e[i]);
        return r;
      },
      Ce = function (e) {
        var t,
          i = e.parent || d,
          r = e.keyframes
            ? ((t = N(e.keyframes)),
              function (e, i) {
                for (var r in i)
                  r in e ||
                    ('duration' === r && t) ||
                    'ease' === r ||
                    (e[r] = i[r]);
              })
            : Te;
        if (q(e.inherit))
          for (; i; ) r(e, i.vars.defaults), (i = i.parent || i._dp);
        return e;
      },
      ke = function (e, t, i, r, n) {
        void 0 === i && (i = '_first'), void 0 === r && (r = '_last');
        var s,
          a = e[r];
        if (n) for (s = t[n]; a && a[n] > s; ) a = a._prev;
        return (
          a
            ? ((t._next = a._next), (a._next = t))
            : ((t._next = e[i]), (e[i] = t)),
          t._next ? (t._next._prev = t) : (e[r] = t),
          (t._prev = a),
          (t.parent = t._dp = e),
          t
        );
      },
      Le = function (e, t, i, r) {
        void 0 === i && (i = '_first'), void 0 === r && (r = '_last');
        var n = t._prev,
          s = t._next;
        n ? (n._next = s) : e[i] === t && (e[i] = s),
          s ? (s._prev = n) : e[r] === t && (e[r] = n),
          (t._next = t._prev = t.parent = null);
      },
      Me = function (e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
          (e._act = 0);
      },
      Ae = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
        return e;
      },
      Pe = function (e) {
        for (var t = e.parent; t && t.parent; )
          (t._dirty = 1), t.totalDuration(), (t = t.parent);
        return e;
      },
      Oe = function (e) {
        return e._repeat ? De(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      },
      De = function (e, t) {
        var i = Math.floor((e /= t));
        return e && i === e ? i - 1 : i;
      },
      ze = function (e, t) {
        return (
          (e - t._start) * t._ts +
          (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        );
      },
      Ie = function (e) {
        return (e._end = ve(
          e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)
        ));
      },
      je = function (e, t) {
        var i = e._dp;
        return (
          i &&
            i.smoothChildTiming &&
            e._ts &&
            ((e._start = ve(
              i._time -
                (e._ts > 0
                  ? t / e._ts
                  : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            Ie(e),
            i._dirty || Ae(i, e)),
          e
        );
      },
      qe = function (e, t) {
        var i;
        if (
          ((t._time || (t._initted && !t._dur)) &&
            ((i = ze(e.rawTime(), t)),
            (!t._dur || We(0, t.totalDuration(), i) - t._tTime > 1e-8) &&
              t.render(i, !0)),
          Ae(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (i = e; i._dp; )
              i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
          e._zTime = -1e-8;
        }
      },
      Be = function (e, t, i, r) {
        return (
          t.parent && Me(t),
          (t._start = ve(
            (z(i) ? i : i || e !== d ? Ye(e, i, t) : e._time) + t._delay
          )),
          (t._end = ve(
            t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
          )),
          ke(e, t, '_first', '_last', e._sort ? '_start' : 0),
          Ne(t) || (e._recent = t),
          r || qe(e, t),
          e
        );
      },
      Fe = function (e, t) {
        return (
          (U.ScrollTrigger || Z('scrollTrigger', t)) &&
          U.ScrollTrigger.create(t, e)
        );
      },
      Re = function (e, t, i, r) {
        return (
          Nt(e, t),
          e._initted
            ? !i &&
              e._pt &&
              ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
              g !== _t.frame
              ? (re.push(e), (e._lazy = [t, r]), 1)
              : void 0
            : 1
        );
      },
      Ne = function (e) {
        var t = e.data;
        return 'isFromStart' === t || 'isStart' === t;
      },
      Ge = function (e, t, i, r) {
        var n = e._repeat,
          s = ve(t) || 0,
          a = e._tTime / e._tDur;
        return (
          a && !r && (e._time *= s / e._dur),
          (e._dur = s),
          (e._tDur = n ? (n < 0 ? 1e10 : ve(s * (n + 1) + e._rDelay * n)) : s),
          a > 0 && !r ? je(e, (e._tTime = e._tDur * a)) : e.parent && Ie(e),
          i || Ae(e.parent, e),
          e
        );
      },
      Ve = function (e) {
        return e instanceof It ? Ae(e) : Ge(e, e._dur);
      },
      He = {
        _start: 0,
        endTime: te,
        totalDuration: te,
      },
      Ye = function e(t, i, r) {
        var n,
          s,
          a,
          o = t.labels,
          l = t._recent || He,
          c = t.duration() >= E ? l.endTime(!1) : t._dur;
        return O(i) && (isNaN(i) || i in o)
          ? ((s = i.charAt(0)),
            (a = '%' === i.substr(-1)),
            (n = i.indexOf('=')),
            '<' === s || '>' === s
              ? (n >= 0 && (i = i.replace(/=/, '')),
                ('<' === s ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(i.substr(1)) || 0) *
                    (a ? (n < 0 ? l : r).totalDuration() / 100 : 1))
              : n < 0
              ? (i in o || (o[i] = c), o[i])
              : ((s = parseFloat(i.charAt(n - 1) + i.substr(n + 1))),
                a && r && (s = (s / 100) * (N(r) ? r[0] : r).totalDuration()),
                n > 1 ? e(t, i.substr(0, n - 1), r) + s : c + s))
          : null == i
          ? c
          : +i;
      },
      Xe = function (e, t, i) {
        var r,
          n,
          s = z(t[1]),
          a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
          o = t[a];
        if ((s && (o.duration = t[1]), (o.parent = i), e)) {
          for (r = o, n = i; n && !('immediateRender' in r); )
            (r = n.vars.defaults || {}), (n = q(n.vars.inherit) && n.parent);
          (o.immediateRender = q(r.immediateRender)),
            e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
        }
        return new Xt(t[0], o, t[a + 1]);
      },
      $e = function (e, t) {
        return e || 0 === e ? t(e) : t;
      },
      We = function (e, t, i) {
        return i < e ? e : i > t ? t : i;
      },
      Ue = function (e, t) {
        return O(e) && (t = W.exec(e)) ? t[1] : '';
      },
      Ke = [].slice,
      Qe = function (e, t) {
        return (
          e &&
          j(e) &&
          'length' in e &&
          ((!t && !e.length) || (e.length - 1 in e && j(e[0]))) &&
          !e.nodeType &&
          e !== h
        );
      },
      Ze = function (e, t, i) {
        return (
          void 0 === i && (i = []),
          e.forEach(function (e) {
            var r;
            return (O(e) && !t) || Qe(e, 1)
              ? (r = i).push.apply(r, Je(e))
              : i.push(e);
          }) || i
        );
      },
      Je = function (e, t, i) {
        return !O(e) || i || (!p && wt())
          ? N(e)
            ? Ze(e, i)
            : Qe(e)
            ? Ke.call(e, 0)
            : e
            ? [e]
            : []
          : Ke.call((t || f).querySelectorAll(e), 0);
      },
      et = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      },
      tt = function (e) {
        if (D(e)) return e;
        var t = j(e)
            ? e
            : {
                each: e,
              },
          i = Lt(t.ease),
          r = t.from || 0,
          n = parseFloat(t.base) || 0,
          s = {},
          a = r > 0 && r < 1,
          o = isNaN(r) || a,
          l = t.axis,
          c = r,
          u = r;
        return (
          O(r)
            ? (c = u =
                {
                  center: 0.5,
                  edges: 0.5,
                  end: 1,
                }[r] || 0)
            : !a && o && ((c = r[0]), (u = r[1])),
          function (e, a, d) {
            var h,
              p,
              f,
              v,
              g,
              m,
              y,
              b,
              _,
              w = (d || t).length,
              T = s[w];
            if (!T) {
              if (!(_ = 'auto' === t.grid ? 0 : (t.grid || [1, E])[1])) {
                for (
                  y = -E;
                  y < (y = d[_++].getBoundingClientRect().left) && _ < w;

                );
                _--;
              }
              for (
                T = s[w] = [],
                  h = o ? Math.min(_, w) * c - 0.5 : r % _,
                  p = _ === E ? 0 : o ? (w * u) / _ - 0.5 : (r / _) | 0,
                  y = 0,
                  b = E,
                  m = 0;
                m < w;
                m++
              )
                (f = (m % _) - h),
                  (v = p - ((m / _) | 0)),
                  (T[m] = g =
                    l ? Math.abs('y' === l ? v : f) : M(f * f + v * v)),
                  g > y && (y = g),
                  g < b && (b = g);
              'random' === r && et(T),
                (T.max = y - b),
                (T.min = b),
                (T.v = w =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (_ > w
                        ? w - 1
                        : l
                        ? 'y' === l
                          ? w / _
                          : _
                        : Math.max(_, w / _)) ||
                    0) * ('edges' === r ? -1 : 1)),
                (T.b = w < 0 ? n - w : n),
                (T.u = Ue(t.amount || t.each) || 0),
                (i = i && w < 0 ? Ct(i) : i);
            }
            return (
              (w = (T[e] - T.min) / T.max || 0),
              ve(T.b + (i ? i(w) : w) * T.v) + T.u
            );
          }
        );
      },
      it = function (e) {
        var t = Math.pow(10, ((e + '').split('.')[1] || '').length);
        return function (i) {
          var r = Math.round(parseFloat(i) / e) * e * t;
          return (r - (r % 1)) / t + (z(i) ? 0 : Ue(i));
        };
      },
      rt = function (e, t) {
        var i,
          r,
          n = N(e);
        return (
          !n &&
            j(e) &&
            ((i = n = e.radius || E),
            e.values
              ? ((e = Je(e.values)), (r = !z(e[0])) && (i *= i))
              : (e = it(e.increment))),
          $e(
            t,
            n
              ? D(e)
                ? function (t) {
                    return (r = e(t)), Math.abs(r - t) <= i ? r : t;
                  }
                : function (t) {
                    for (
                      var n,
                        s,
                        a = parseFloat(r ? t.x : t),
                        o = parseFloat(r ? t.y : 0),
                        l = E,
                        c = 0,
                        u = e.length;
                      u--;

                    )
                      (n = r
                        ? (n = e[u].x - a) * n + (s = e[u].y - o) * s
                        : Math.abs(e[u] - a)) < l && ((l = n), (c = u));
                    return (
                      (c = !i || l <= i ? e[c] : t),
                      r || c === t || z(t) ? c : c + Ue(t)
                    );
                  }
              : it(e)
          )
        );
      },
      nt = function (e, t, i, r) {
        return $e(N(e) ? !t : !0 === i ? !!(i = 0) : !r, function () {
          return N(e)
            ? e[~~(Math.random() * e.length)]
            : (i = i || 1e-5) &&
                (r = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (e - i / 2 + Math.random() * (t - e + 0.99 * i)) / i
                  ) *
                    i *
                    r
                ) / r;
        });
      },
      st = function (e, t, i) {
        return $e(i, function (i) {
          return e[~~t(i)];
        });
      },
      at = function (e) {
        for (var t, i, r, n, s = 0, a = ''; ~(t = e.indexOf('random(', s)); )
          (r = e.indexOf(')', t)),
            (n = '[' === e.charAt(t + 7)),
            (i = e.substr(t + 7, r - t - 7).match(n ? $ : G)),
            (a +=
              e.substr(s, t - s) +
              nt(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
            (s = r + 1);
        return a + e.substr(s, e.length - s);
      },
      ot = function (e, t, i, r, n) {
        var s = t - e,
          a = r - i;
        return $e(n, function (t) {
          return i + (((t - e) / s) * a || 0);
        });
      },
      lt = function (e, t, i) {
        var r,
          n,
          s,
          a = e.labels,
          o = E;
        for (r in a)
          (n = a[r] - t) < 0 == !!i &&
            n &&
            o > (n = Math.abs(n)) &&
            ((s = r), (o = n));
        return s;
      },
      ct = function (e, t, i) {
        var r,
          n,
          s = e.vars,
          a = s[t];
        if (a)
          return (
            (r = s[t + 'Params']),
            (n = s.callbackScope || e),
            i && re.length && ye(),
            r ? a.apply(n, r) : a.call(n)
          );
      },
      ut = function (e) {
        return (
          Me(e),
          e.scrollTrigger && e.scrollTrigger.kill(!1),
          e.progress() < 1 && ct(e, 'onInterrupt'),
          e
        );
      },
      dt = function (e) {
        var t = (e = (!e.name && e.default) || e).name,
          i = D(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: te,
            render: ti,
            add: Ft,
            kill: ri,
            modifier: ii,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Qt,
            aliases: {},
            register: 0,
          };
        if ((wt(), e !== r)) {
          if (se[t]) return;
          Te(r, Te(Ee(e, n), s)),
            xe(r.prototype, xe(n, Ee(e, s))),
            (se[(r.prop = t)] = r),
            e.targetTest && (le.push(r), (ie[t] = 1)),
            (t =
              ('css' === t ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) +
              'Plugin');
        }
        ee(t, r), e.register && e.register(ui, r, ai);
      },
      ht = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      pt = function (e, t, i) {
        return (
          (255 *
            (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? t + (i - t) * e * 6
              : e < 0.5
              ? i
              : 3 * e < 2
              ? t + (i - t) * (2 / 3 - e) * 6
              : t) +
            0.5) |
          0
        );
      },
      ft = function (e, t, i) {
        var r,
          n,
          s,
          a,
          o,
          l,
          c,
          u,
          d,
          h,
          p = e ? (z(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : ht.black;
        if (!p) {
          if ((',' === e.substr(-1) && (e = e.substr(0, e.length - 1)), ht[e]))
            p = ht[e];
          else if ('#' === e.charAt(0)) {
            if (
              (e.length < 6 &&
                ((r = e.charAt(1)),
                (n = e.charAt(2)),
                (s = e.charAt(3)),
                (e =
                  '#' +
                  r +
                  r +
                  n +
                  n +
                  s +
                  s +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : ''))),
              9 === e.length)
            )
              return [
                (p = parseInt(e.substr(1, 6), 16)) >> 16,
                (p >> 8) & 255,
                255 & p,
                parseInt(e.substr(7), 16) / 255,
              ];
            p = [
              (e = parseInt(e.substr(1), 16)) >> 16,
              (e >> 8) & 255,
              255 & e,
            ];
          } else if ('hsl' === e.substr(0, 3))
            if (((p = h = e.match(G)), t)) {
              if (~e.indexOf('='))
                return (p = e.match(V)), i && p.length < 4 && (p[3] = 1), p;
            } else
              (a = (+p[0] % 360) / 360),
                (o = +p[1] / 100),
                (r =
                  2 * (l = +p[2] / 100) -
                  (n = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = pt(a + 1 / 3, r, n)),
                (p[1] = pt(a, r, n)),
                (p[2] = pt(a - 1 / 3, r, n));
          else p = e.match(G) || ht.transparent;
          p = p.map(Number);
        }
        return (
          t &&
            !h &&
            ((r = p[0] / 255),
            (n = p[1] / 255),
            (s = p[2] / 255),
            (l = ((c = Math.max(r, n, s)) + (u = Math.min(r, n, s))) / 2),
            c === u
              ? (a = o = 0)
              : ((d = c - u),
                (o = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
                (a =
                  c === r
                    ? (n - s) / d + (n < s ? 6 : 0)
                    : c === n
                    ? (s - r) / d + 2
                    : (r - n) / d + 4),
                (a *= 60)),
            (p[0] = ~~(a + 0.5)),
            (p[1] = ~~(100 * o + 0.5)),
            (p[2] = ~~(100 * l + 0.5))),
          i && p.length < 4 && (p[3] = 1),
          p
        );
      },
      vt = function (e) {
        var t = [],
          i = [],
          r = -1;
        return (
          e.split(mt).forEach(function (e) {
            var n = e.match(H) || [];
            t.push.apply(t, n), i.push((r += n.length + 1));
          }),
          (t.c = i),
          t
        );
      },
      gt = function (e, t, i) {
        var r,
          n,
          s,
          a,
          o = '',
          l = (e + o).match(mt),
          c = t ? 'hsla(' : 'rgba(',
          u = 0;
        if (!l) return e;
        if (
          ((l = l.map(function (e) {
            return (
              (e = ft(e, t, 1)) &&
              c +
                (t
                  ? e[0] + ',' + e[1] + '%,' + e[2] + '%,' + e[3]
                  : e.join(',')) +
                ')'
            );
          })),
          i && ((s = vt(e)), (r = i.c).join(o) !== s.c.join(o)))
        )
          for (a = (n = e.replace(mt, '1').split(H)).length - 1; u < a; u++)
            o +=
              n[u] +
              (~r.indexOf(u)
                ? l.shift() || c + '0,0,0,0)'
                : (s.length ? s : l.length ? l : i).shift());
        if (!n)
          for (a = (n = e.split(mt)).length - 1; u < a; u++) o += n[u] + l[u];
        return o + n[a];
      },
      mt = (function () {
        var e,
          t =
            '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
        for (e in ht) t += '|' + e + '\\b';
        return new RegExp(t + ')', 'gi');
      })(),
      yt = /hsl[a]?\(/,
      bt = function (e) {
        var t,
          i = e.join(' ');
        if (((mt.lastIndex = 0), mt.test(i)))
          return (
            (t = yt.test(i)),
            (e[1] = gt(e[1], t)),
            (e[0] = gt(e[0], t, vt(e[1]))),
            !0
          );
      },
      _t = (function () {
        var e,
          t,
          i,
          r,
          n,
          s,
          a = Date.now,
          o = 500,
          l = 33,
          c = a(),
          u = c,
          d = 1e3 / 240,
          g = d,
          m = [],
          b = function i(h) {
            var p,
              f,
              v,
              y,
              b = a() - u,
              _ = !0 === h;
            if (
              (b > o && (c += b - l),
              ((p = (v = (u += b) - c) - g) > 0 || _) &&
                ((y = ++r.frame),
                (n = v - 1e3 * r.time),
                (r.time = v /= 1e3),
                (g += p + (p >= d ? 4 : d - p)),
                (f = 1)),
              _ || (e = t(i)),
              f)
            )
              for (s = 0; s < m.length; s++) m[s](v, n, y, h);
          };
        return (r = {
          time: 0,
          frame: 0,
          tick: function () {
            b(!0);
          },
          deltaRatio: function (e) {
            return n / (1e3 / (e || 60));
          },
          wake: function () {
            v &&
              (!p &&
                B() &&
                ((h = p = window),
                (f = h.document || {}),
                (U.gsap = ui),
                (h.gsapVersions || (h.gsapVersions = [])).push(ui.version),
                Q(K || h.GreenSockGlobals || (!h.gsap && h) || {}),
                (i = h.requestAnimationFrame)),
              e && r.sleep(),
              (t =
                i ||
                function (e) {
                  return setTimeout(e, (g - 1e3 * r.time + 1) | 0);
                }),
              (y = 1),
              b(2));
          },
          sleep: function () {
            (i ? h.cancelAnimationFrame : clearTimeout)(e), (y = 0), (t = te);
          },
          lagSmoothing: function (e, t) {
            (o = e || 1 / 1e-8), (l = Math.min(t, o, 0));
          },
          fps: function (e) {
            (d = 1e3 / (e || 240)), (g = 1e3 * r.time + d);
          },
          add: function (e, t, i) {
            var n = t
              ? function (t, i, s, a) {
                  e(t, i, s, a), r.remove(n);
                }
              : e;
            return r.remove(e), m[i ? 'unshift' : 'push'](n), wt(), n;
          },
          remove: function (e, t) {
            ~(t = m.indexOf(e)) && m.splice(t, 1) && s >= t && s--;
          },
          _listeners: m,
        });
      })(),
      wt = function () {
        return !y && _t.wake();
      },
      Tt = {},
      xt = /^[\d.\-M][\d.\-,\s]/,
      St = /["']/g,
      Et = function (e) {
        for (
          var t,
            i,
            r,
            n = {},
            s = e.substr(1, e.length - 3).split(':'),
            a = s[0],
            o = 1,
            l = s.length;
          o < l;
          o++
        )
          (i = s[o]),
            (t = o !== l - 1 ? i.lastIndexOf(',') : i.length),
            (r = i.substr(0, t)),
            (n[a] = isNaN(r) ? r.replace(St, '').trim() : +r),
            (a = i.substr(t + 1).trim());
        return n;
      },
      Ct = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      kt = function e(t, i) {
        for (var r, n = t._first; n; )
          n instanceof It
            ? e(n, i)
            : !n.vars.yoyoEase ||
              (n._yoyo && n._repeat) ||
              n._yoyo === i ||
              (n.timeline
                ? e(n.timeline, i)
                : ((r = n._ease),
                  (n._ease = n._yEase),
                  (n._yEase = r),
                  (n._yoyo = i))),
            (n = n._next);
      },
      Lt = function (e, t) {
        return (
          (e &&
            (D(e)
              ? e
              : Tt[e] ||
                (function (e) {
                  var t,
                    i,
                    r,
                    n,
                    s = (e + '').split('('),
                    a = Tt[s[0]];
                  return a && s.length > 1 && a.config
                    ? a.config.apply(
                        null,
                        ~e.indexOf('{')
                          ? [Et(s[1])]
                          : ((t = e),
                            (i = t.indexOf('(') + 1),
                            (r = t.indexOf(')')),
                            (n = t.indexOf('(', i)),
                            t.substring(
                              i,
                              ~n && n < r ? t.indexOf(')', r + 1) : r
                            ))
                              .split(',')
                              .map(_e)
                      )
                    : Tt._CE && xt.test(e)
                    ? Tt._CE('', e)
                    : a;
                })(e))) ||
          t
        );
      },
      Mt = function (e, t, i, r) {
        void 0 === i &&
          (i = function (e) {
            return 1 - t(1 - e);
          }),
          void 0 === r &&
            (r = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            });
        var n,
          s = {
            easeIn: t,
            easeOut: i,
            easeInOut: r,
          };
        return (
          pe(e, function (e) {
            for (var t in ((Tt[e] = U[e] = s),
            (Tt[(n = e.toLowerCase())] = i),
            s))
              Tt[
                n +
                  ('easeIn' === t ? '.in' : 'easeOut' === t ? '.out' : '.inOut')
              ] = Tt[e + '.' + t] = s[t];
          }),
          s
        );
      },
      At = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      },
      Pt = function e(t, i, r) {
        var n = i >= 1 ? i : 1,
          s = (r || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
          a = (s / C) * (Math.asin(1 / n) || 0),
          o = function (e) {
            return 1 === e ? 1 : n * Math.pow(2, -10 * e) * P((e - a) * s) + 1;
          },
          l =
            'out' === t
              ? o
              : 'in' === t
              ? function (e) {
                  return 1 - o(1 - e);
                }
              : At(o);
        return (
          (s = C / s),
          (l.config = function (i, r) {
            return e(t, i, r);
          }),
          l
        );
      },
      Ot = function e(t, i) {
        void 0 === i && (i = 1.70158);
        var r = function (e) {
            return e ? --e * e * ((i + 1) * e + i) + 1 : 0;
          },
          n =
            'out' === t
              ? r
              : 'in' === t
              ? function (e) {
                  return 1 - r(1 - e);
                }
              : At(r);
        return (
          (n.config = function (i) {
            return e(t, i);
          }),
          n
        );
      };
    pe('Linear,Quad,Cubic,Quart,Quint,Strong', function (e, t) {
      var i = t < 5 ? t + 1 : t;
      Mt(
        e + ',Power' + (i - 1),
        t
          ? function (e) {
              return Math.pow(e, i);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, i);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, i) / 2
            : 1 - Math.pow(2 * (1 - e), i) / 2;
        }
      );
    }),
      (Tt.Linear.easeNone = Tt.none = Tt.Linear.easeIn),
      Mt('Elastic', Pt('in'), Pt('out'), Pt()),
      (b = 7.5625),
      (w = 1 / (_ = 2.75)),
      Mt(
        'Bounce',
        function (e) {
          return 1 - T(1 - e);
        },
        (T = function (e) {
          return e < w
            ? b * e * e
            : e < 0.7272727272727273
            ? b * Math.pow(e - 1.5 / _, 2) + 0.75
            : e < 0.9090909090909092
            ? b * (e -= 2.25 / _) * e + 0.9375
            : b * Math.pow(e - 2.625 / _, 2) + 0.984375;
        })
      ),
      Mt('Expo', function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0;
      }),
      Mt('Circ', function (e) {
        return -(M(1 - e * e) - 1);
      }),
      Mt('Sine', function (e) {
        return 1 === e ? 1 : 1 - A(e * k);
      }),
      Mt('Back', Ot('in'), Ot('out'), Ot()),
      (Tt.SteppedEase =
        Tt.steps =
        U.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var i = 1 / e,
                r = e + (t ? 0 : 1),
                n = t ? 1 : 0;
              return function (e) {
                return (((r * We(0, 1 - 1e-8, e)) | 0) + n) * i;
              };
            },
          }),
      (S.ease = Tt['quad.out']),
      pe(
        'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
        function (e) {
          return (ce += e + ',' + e + 'Params,');
        }
      );
    var Dt = function (e, t) {
        (this.id = L++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : he),
          (this.set = t ? t.getSetter : Qt);
      },
      zt = (function () {
        function e(e) {
          (this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0),
              (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            Ge(this, +e.duration, 1, 1),
            (this.data = e.data),
            y || _t.wake();
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || 0 === e
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                )
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                Ge(
                  this,
                  this._repeat < 0
                    ? e
                    : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((wt(), !arguments.length)) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
              for (
                je(this, e), !i._dp || i.parent || qe(i, this);
                i && i.parent;

              )
                i.parent._time !==
                  i._start +
                    (i._ts >= 0
                      ? i._tTime / i._ts
                      : (i.totalDuration() - i._tTime) / -i._ts) &&
                  i.totalTime(i._tTime, !0),
                  (i = i.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Be(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), be(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + Oe(this)) %
                    (this._dur + this._rDelay) || (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                    Oe(this),
                  t
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (t.iteration = function (e, t) {
            var i = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * i, t)
              : this._repeat
              ? De(this._tTime, i) + 1
              : 1;
          }),
          (t.timeScale = function (e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var t =
              this.parent && this._ts
                ? ze(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
              this.totalTime(We(-this._delay, this._tDur, t), !0),
              Ie(this),
              Pe(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (wt(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (
                t && (t._sort || !this.parent) && Be(t, this, e - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (q(e) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? ze(t.rawTime(e), this)
                : this._tTime
              : this._tTime;
          }),
          (t.globalTime = function (e) {
            for (var t = this, i = arguments.length ? e : t.rawTime(); t; )
              (i = t._start + i / (t._ts || 1)), (t = t._dp);
            return i;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), Ve(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return (this._rDelay = e), Ve(this), t ? this.time(t) : this;
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(Ye(this, e), q(t));
          }),
          (t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, q(t));
          }),
          (t.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
          }),
          (t.reverse = function (e, t) {
            return (
              null != e && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0);
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() &&
                  this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              i = this._start;
            return !(
              t &&
              !(
                this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= i &&
                e < this.endTime(!0) - 1e-8
              )
            );
          }),
          (t.eventCallback = function (e, t, i) {
            var r = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((r[e] = t),
                    i && (r[e + 'Params'] = i),
                    'onUpdate' === e && (this._onUpdate = t))
                  : delete r[e],
                this)
              : r[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (i) {
              var r = D(e) ? e : we,
                n = function () {
                  var e = t.then;
                  (t.then = null),
                    D(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                    i(r),
                    (t.then = e);
                };
              (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
              (!t._tTime && t._ts < 0)
                ? n()
                : (t._prom = n);
            });
          }),
          (t.kill = function () {
            ut(this);
          }),
          e
        );
      })();
    Te(zt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var It = (function (e) {
      function t(t, i) {
        var r;
        return (
          void 0 === t && (t = {}),
          ((r = e.call(this, t) || this).labels = {}),
          (r.smoothChildTiming = !!t.smoothChildTiming),
          (r.autoRemoveChildren = !!t.autoRemoveChildren),
          (r._sort = q(t.sortChildren)),
          d && Be(t.parent || d, l(r), i),
          t.reversed && r.reverse(),
          t.paused && r.paused(!0),
          t.scrollTrigger && Fe(l(r), t.scrollTrigger),
          r
        );
      }
      c(t, e);
      var i = t.prototype;
      return (
        (i.to = function (e, t, i) {
          return Xe(0, arguments, this), this;
        }),
        (i.from = function (e, t, i) {
          return Xe(1, arguments, this), this;
        }),
        (i.fromTo = function (e, t, i, r) {
          return Xe(2, arguments, this), this;
        }),
        (i.set = function (e, t, i) {
          return (
            (t.duration = 0),
            (t.parent = this),
            Ce(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new Xt(e, t, Ye(this, i), 1),
            this
          );
        }),
        (i.call = function (e, t, i) {
          return Be(this, Xt.delayedCall(0, e, t), i);
        }),
        (i.staggerTo = function (e, t, i, r, n, s, a) {
          return (
            (i.duration = t),
            (i.stagger = i.stagger || r),
            (i.onComplete = s),
            (i.onCompleteParams = a),
            (i.parent = this),
            new Xt(e, i, Ye(this, n)),
            this
          );
        }),
        (i.staggerFrom = function (e, t, i, r, n, s, a) {
          return (
            (i.runBackwards = 1),
            (Ce(i).immediateRender = q(i.immediateRender)),
            this.staggerTo(e, t, i, r, n, s, a)
          );
        }),
        (i.staggerFromTo = function (e, t, i, r, n, s, a, o) {
          return (
            (r.startAt = i),
            (Ce(r).immediateRender = q(r.immediateRender)),
            this.staggerTo(e, t, r, n, s, a, o)
          );
        }),
        (i.render = function (e, t, i) {
          var r,
            n,
            s,
            a,
            o,
            l,
            c,
            u,
            h,
            p,
            f,
            v,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            b = e <= 0 ? 0 : ve(e),
            _ = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (
            (this !== d && b > m && e >= 0 && (b = m),
            b !== this._tTime || i || _)
          ) {
            if (
              (g !== this._time &&
                y &&
                ((b += this._time - g), (e += this._time - g)),
              (r = b),
              (h = this._start),
              (l = !(u = this._ts)),
              _ && (y || (g = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (
                ((f = this._yoyo),
                (o = y + this._rDelay),
                this._repeat < -1 && e < 0)
              )
                return this.totalTime(100 * o + e, t, i);
              if (
                ((r = ve(b % o)),
                b === m
                  ? ((a = this._repeat), (r = y))
                  : ((a = ~~(b / o)) && a === b / o && ((r = y), a--),
                    r > y && (r = y)),
                (p = De(this._tTime, o)),
                !g && this._tTime && p !== a && (p = a),
                f && 1 & a && ((r = y - r), (v = 1)),
                a !== p && !this._lock)
              ) {
                var w = f && 1 & p,
                  T = w === (f && 1 & a);
                if (
                  (a < p && (w = !w),
                  (g = w ? 0 : y),
                  (this._lock = 1),
                  (this.render(g || (v ? 0 : ve(a * o)), t, !y)._lock = 0),
                  (this._tTime = b),
                  !t && this.parent && ct(this, 'onRepeat'),
                  this.vars.repeatRefresh &&
                    !v &&
                    (this.invalidate()._lock = 1),
                  (g && g !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((y = this._dur),
                  (m = this._tDur),
                  T &&
                    ((this._lock = 2),
                    (g = w ? y : -1e-4),
                    this.render(g, !0),
                    this.vars.repeatRefresh && !v && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                kt(this, v);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (c = (function (e, t, i) {
                  var r;
                  if (i > t)
                    for (r = e._first; r && r._start <= i; ) {
                      if ('isPause' === r.data && r._start > t) return r;
                      r = r._next;
                    }
                  else
                    for (r = e._last; r && r._start >= i; ) {
                      if ('isPause' === r.data && r._start < t) return r;
                      r = r._prev;
                    }
                })(this, ve(g), ve(r))) &&
                (b -= r - (r = c._start)),
              (this._tTime = b),
              (this._time = r),
              (this._act = !u),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (g = 0)),
              !g && r && !t && (ct(this, 'onStart'), this._tTime !== b))
            )
              return this;
            if (r >= g && e >= 0)
              for (n = this._first; n; ) {
                if (
                  ((s = n._next), (n._act || r >= n._start) && n._ts && c !== n)
                ) {
                  if (n.parent !== this) return this.render(e, t, i);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (r - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (r - n._start) * n._ts,
                      t,
                      i
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), s && (b += this._zTime = -1e-8);
                    break;
                  }
                }
                n = s;
              }
            else {
              n = this._last;
              for (var x = e < 0 ? e : r; n; ) {
                if (
                  ((s = n._prev), (n._act || x <= n._end) && n._ts && c !== n)
                ) {
                  if (n.parent !== this) return this.render(e, t, i);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (x - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (x - n._start) * n._ts,
                      t,
                      i
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), s && (b += this._zTime = x ? -1e-8 : 1e-8);
                    break;
                  }
                }
                n = s;
              }
            }
            if (
              c &&
              !t &&
              (this.pause(),
              (c.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = h), Ie(this), this.render(e, t, i);
            this._onUpdate && !t && ct(this, 'onUpdate', !0),
              ((b === m && this._tTime >= this.totalDuration()) || (!b && g)) &&
                ((h !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((e || !y) &&
                    ((b === m && this._ts > 0) || (!b && this._ts < 0)) &&
                    Me(this, 1),
                  t ||
                    (e < 0 && !g) ||
                    (!b && !g && m) ||
                    (ct(
                      this,
                      b === m && e >= 0 ? 'onComplete' : 'onReverseComplete',
                      !0
                    ),
                    this._prom &&
                      !(b < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (i.add = function (e, t) {
          var i = this;
          if ((z(t) || (t = Ye(this, t, e)), !(e instanceof zt))) {
            if (N(e))
              return (
                e.forEach(function (e) {
                  return i.add(e, t);
                }),
                this
              );
            if (O(e)) return this.addLabel(e, t);
            if (!D(e)) return this;
            e = Xt.delayedCall(0, e);
          }
          return this !== e ? Be(this, e, t) : this;
        }),
        (i.getChildren = function (e, t, i, r) {
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === i && (i = !0),
            void 0 === r && (r = -E);
          for (var n = [], s = this._first; s; )
            s._start >= r &&
              (s instanceof Xt
                ? t && n.push(s)
                : (i && n.push(s),
                  e && n.push.apply(n, s.getChildren(!0, t, i)))),
              (s = s._next);
          return n;
        }),
        (i.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
            if (t[i].vars.id === e) return t[i];
        }),
        (i.remove = function (e) {
          return O(e)
            ? this.removeLabel(e)
            : D(e)
            ? this.killTweensOf(e)
            : (Le(this, e),
              e === this._recent && (this._recent = this._last),
              Ae(this));
        }),
        (i.totalTime = function (t, i) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = ve(
                  _t.time -
                    (this._ts > 0
                      ? t / this._ts
                      : (this.totalDuration() - t) / -this._ts)
                )),
              e.prototype.totalTime.call(this, t, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (i.addLabel = function (e, t) {
          return (this.labels[e] = Ye(this, t)), this;
        }),
        (i.removeLabel = function (e) {
          return delete this.labels[e], this;
        }),
        (i.addPause = function (e, t, i) {
          var r = Xt.delayedCall(0, t || te, i);
          return (
            (r.data = 'isPause'), (this._hasPause = 1), Be(this, r, Ye(this, e))
          );
        }),
        (i.removePause = function (e) {
          var t = this._first;
          for (e = Ye(this, e); t; )
            t._start === e && 'isPause' === t.data && Me(t), (t = t._next);
        }),
        (i.killTweensOf = function (e, t, i) {
          for (var r = this.getTweensOf(e, i), n = r.length; n--; )
            jt !== r[n] && r[n].kill(e, t);
          return this;
        }),
        (i.getTweensOf = function (e, t) {
          for (var i, r = [], n = Je(e), s = this._first, a = z(t); s; )
            s instanceof Xt
              ? me(s._targets, n) &&
                (a
                  ? (!jt || (s._initted && s._ts)) &&
                    s.globalTime(0) <= t &&
                    s.globalTime(s.totalDuration()) > t
                  : !t || s.isActive()) &&
                r.push(s)
              : (i = s.getTweensOf(n, t)).length && r.push.apply(r, i),
              (s = s._next);
          return r;
        }),
        (i.tweenTo = function (e, t) {
          t = t || {};
          var i,
            r = this,
            n = Ye(r, e),
            s = t,
            a = s.startAt,
            o = s.onStart,
            l = s.onStartParams,
            c = s.immediateRender,
            u = Xt.to(
              r,
              Te(
                {
                  ease: t.ease || 'none',
                  lazy: !1,
                  immediateRender: !1,
                  time: n,
                  overwrite: 'auto',
                  duration:
                    t.duration ||
                    Math.abs(
                      (n - (a && 'time' in a ? a.time : r._time)) /
                        r.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((r.pause(), !i)) {
                      var e =
                        t.duration ||
                        Math.abs(
                          (n - (a && 'time' in a ? a.time : r._time)) /
                            r.timeScale()
                        );
                      u._dur !== e && Ge(u, e, 0, 1).render(u._time, !0, !0),
                        (i = 1);
                    }
                    o && o.apply(u, l || []);
                  },
                },
                t
              )
            );
          return c ? u.render(0) : u;
        }),
        (i.tweenFromTo = function (e, t, i) {
          return this.tweenTo(
            t,
            Te(
              {
                startAt: {
                  time: Ye(this, e),
                },
              },
              i
            )
          );
        }),
        (i.recent = function () {
          return this._recent;
        }),
        (i.nextLabel = function (e) {
          return void 0 === e && (e = this._time), lt(this, Ye(this, e));
        }),
        (i.previousLabel = function (e) {
          return void 0 === e && (e = this._time), lt(this, Ye(this, e), 1);
        }),
        (i.currentLabel = function (e) {
          return arguments.length
            ? this.seek(e, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (i.shiftChildren = function (e, t, i) {
          void 0 === i && (i = 0);
          for (var r, n = this._first, s = this.labels; n; )
            n._start >= i && ((n._start += e), (n._end += e)), (n = n._next);
          if (t) for (r in s) s[r] >= i && (s[r] += e);
          return Ae(this);
        }),
        (i.invalidate = function () {
          var t = this._first;
          for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
          return e.prototype.invalidate.call(this);
        }),
        (i.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, i = this._first; i; )
            (t = i._next), this.remove(i), (i = t);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            Ae(this)
          );
        }),
        (i.totalDuration = function (e) {
          var t,
            i,
            r,
            n = 0,
            s = this,
            a = s._last,
            o = E;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -e : e)
            );
          if (s._dirty) {
            for (r = s.parent; a; )
              (t = a._prev),
                a._dirty && a.totalDuration(),
                (i = a._start) > o && s._sort && a._ts && !s._lock
                  ? ((s._lock = 1), (Be(s, a, i - a._delay, 1)._lock = 0))
                  : (o = i),
                i < 0 &&
                  a._ts &&
                  ((n -= i),
                  ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                    ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
                  s.shiftChildren(-i, !1, -Infinity),
                  (o = 0)),
                a._end > n && a._ts && (n = a._end),
                (a = t);
            Ge(s, s === d && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (t.updateRoot = function (e) {
          if ((d._ts && (be(d, ze(e, d)), (g = _t.frame)), _t.frame >= oe)) {
            oe += x.autoSleep || 120;
            var t = d._first;
            if ((!t || !t._ts) && x.autoSleep && _t._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || _t.sleep();
            }
          }
        }),
        t
      );
    })(zt);
    Te(It.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0,
    });
    var jt,
      qt,
      Bt = function (e, t, i, r, n, s, a) {
        var o,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          v = new ai(this._pt, e, t, 0, 1, ei, null, n),
          g = 0,
          m = 0;
        for (
          v.b = i,
            v.e = r,
            i += '',
            (p = ~(r += '').indexOf('random(')) && (r = at(r)),
            s && (s((f = [i, r]), e, t), (i = f[0]), (r = f[1])),
            l = i.match(Y) || [];
          (o = Y.exec(r));

        )
          (u = o[0]),
            (d = r.substring(g, o.index)),
            c ? (c = (c + 1) % 5) : 'rgba(' === d.substr(-5) && (c = 1),
            u !== l[m++] &&
              ((h = parseFloat(l[m - 1]) || 0),
              (v._pt = {
                _next: v._pt,
                p: d || 1 === m ? d : ',',
                s: h,
                c: '=' === u.charAt(1) ? ge(h, u) - h : parseFloat(u) - h,
                m: c && c < 4 ? Math.round : 0,
              }),
              (g = Y.lastIndex));
        return (
          (v.c = g < r.length ? r.substring(g, r.length) : ''),
          (v.fp = a),
          (X.test(r) || p) && (v.e = 0),
          (this._pt = v),
          v
        );
      },
      Ft = function (e, t, i, r, n, s, a, o, l) {
        D(r) && (r = r(n || 0, e, s));
        var c,
          u = e[t],
          d =
            'get' !== i
              ? i
              : D(u)
              ? l
                ? e[
                    t.indexOf('set') || !D(e['get' + t.substr(3)])
                      ? t
                      : 'get' + t.substr(3)
                  ](l)
                : e[t]()
              : u,
          h = D(u) ? (l ? Ut : Wt) : $t;
        if (
          (O(r) &&
            (~r.indexOf('random(') && (r = at(r)),
            '=' === r.charAt(1) &&
              ((c = ge(d, r) + (Ue(d) || 0)) || 0 === c) &&
              (r = c)),
          d !== r || qt)
        )
          return isNaN(d * r) || '' === r
            ? (!u && !(t in e) && Z(t, r),
              Bt.call(this, e, t, d, r, h, o || x.stringFilter, l))
            : ((c = new ai(
                this._pt,
                e,
                t,
                +d || 0,
                r - (d || 0),
                'boolean' == typeof u ? Jt : Zt,
                0,
                h
              )),
              l && (c.fp = l),
              a && c.modifier(a, this, e),
              (this._pt = c));
      },
      Rt = function (e, t, i, r, n, s) {
        var a, o, l, c;
        if (
          se[e] &&
          !1 !==
            (a = new se[e]()).init(
              n,
              a.rawVars
                ? t[e]
                : (function (e, t, i, r, n) {
                    if (
                      (D(e) && (e = Vt(e, n, t, i, r)),
                      !j(e) || (e.style && e.nodeType) || N(e) || R(e))
                    )
                      return O(e) ? Vt(e, n, t, i, r) : e;
                    var s,
                      a = {};
                    for (s in e) a[s] = Vt(e[s], n, t, i, r);
                    return a;
                  })(t[e], r, n, s, i),
              i,
              r,
              s
            ) &&
          ((i._pt = o = new ai(i._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
          i !== m)
        )
          for (
            l = i._ptLookup[i._targets.indexOf(n)], c = a._props.length;
            c--;

          )
            l[a._props[c]] = o;
        return a;
      },
      Nt = function e(t, i) {
        var r,
          n,
          s,
          a,
          o,
          l,
          c,
          h,
          p,
          f,
          v,
          g,
          m,
          y = t.vars,
          b = y.ease,
          _ = y.startAt,
          w = y.immediateRender,
          T = y.lazy,
          x = y.onUpdate,
          C = y.onUpdateParams,
          k = y.callbackScope,
          L = y.runBackwards,
          M = y.yoyoEase,
          A = y.keyframes,
          P = y.autoRevert,
          O = t._dur,
          D = t._startAt,
          z = t._targets,
          I = t.parent,
          j = I && 'nested' === I.data ? I.parent._targets : z,
          B = 'auto' === t._overwrite && !u,
          F = t.timeline;
        if (
          (F && (!A || !b) && (b = 'none'),
          (t._ease = Lt(b, S.ease)),
          (t._yEase = M ? Ct(Lt(!0 === M ? b : M, S.ease)) : 0),
          M &&
            t._yoyo &&
            !t._repeat &&
            ((M = t._yEase), (t._yEase = t._ease), (t._ease = M)),
          (t._from = !F && !!y.runBackwards),
          !F || (A && !y.stagger))
        ) {
          if (
            ((g = (h = z[0] ? de(z[0]).harness : 0) && y[h.prop]),
            (r = Ee(y, ie)),
            D && (Me(D.render(-1, !0)), (D._lazy = 0)),
            _)
          )
            if (
              (Me(
                (t._startAt = Xt.set(
                  z,
                  Te(
                    {
                      data: 'isStart',
                      overwrite: !1,
                      parent: I,
                      immediateRender: !0,
                      lazy: q(T),
                      startAt: null,
                      delay: 0,
                      onUpdate: x,
                      onUpdateParams: C,
                      callbackScope: k,
                      stagger: 0,
                    },
                    _
                  )
                ))
              ),
              i < 0 && !w && !P && t._startAt.render(-1, !0),
              w)
            ) {
              if ((i > 0 && !P && (t._startAt = 0), O && i <= 0))
                return void (i && (t._zTime = i));
            } else !1 === P && (t._startAt = 0);
          else if (L && O)
            if (D) !P && (t._startAt = 0);
            else if (
              (i && (w = !1),
              (s = Te(
                {
                  overwrite: !1,
                  data: 'isFromStart',
                  lazy: w && q(T),
                  immediateRender: w,
                  stagger: 0,
                  parent: I,
                },
                r
              )),
              g && (s[h.prop] = g),
              Me((t._startAt = Xt.set(z, s))),
              i < 0 && t._startAt.render(-1, !0),
              (t._zTime = i),
              w)
            ) {
              if (!i) return;
            } else e(t._startAt, 1e-8);
          for (
            t._pt = t._ptCache = 0, T = (O && q(T)) || (T && !O), n = 0;
            n < z.length;
            n++
          ) {
            if (
              ((c = (o = z[n])._gsap || ue(z)[n]._gsap),
              (t._ptLookup[n] = f = {}),
              ne[c.id] && re.length && ye(),
              (v = j === z ? n : j.indexOf(o)),
              h &&
                !1 !== (p = new h()).init(o, g || r, t, v, j) &&
                ((t._pt = a =
                  new ai(t._pt, o, p.name, 0, 1, p.render, p, 0, p.priority)),
                p._props.forEach(function (e) {
                  f[e] = a;
                }),
                p.priority && (l = 1)),
              !h || g)
            )
              for (s in r)
                se[s] && (p = Rt(s, r, t, v, o, j))
                  ? p.priority && (l = 1)
                  : (f[s] = a =
                      Ft.call(t, o, s, 'get', r[s], v, j, 0, y.stringFilter));
            t._op && t._op[n] && t.kill(o, t._op[n]),
              B &&
                t._pt &&
                ((jt = t),
                d.killTweensOf(o, f, t.globalTime(i)),
                (m = !t.parent),
                (jt = 0)),
              t._pt && T && (ne[c.id] = 1);
          }
          l && si(t), t._onInit && t._onInit(t);
        }
        (t._onUpdate = x),
          (t._initted = (!t._op || t._pt) && !m),
          A && i <= 0 && F.render(E, !0, !0);
      },
      Gt = function (e, t, i, r) {
        var n,
          s,
          a = t.ease || r || 'power1.inOut';
        if (N(t))
          (s = i[e] || (i[e] = [])),
            t.forEach(function (e, i) {
              return s.push({
                t: (i / (t.length - 1)) * 100,
                v: e,
                e: a,
              });
            });
        else
          for (n in t)
            (s = i[n] || (i[n] = [])),
              'ease' === n ||
                s.push({
                  t: parseFloat(e),
                  v: t[n],
                  e: a,
                });
      },
      Vt = function (e, t, i, r, n) {
        return D(e)
          ? e.call(t, i, r, n)
          : O(e) && ~e.indexOf('random(')
          ? at(e)
          : e;
      },
      Ht = ce + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
      Yt = {};
    pe(Ht + ',id,stagger,delay,duration,paused,scrollTrigger', function (e) {
      return (Yt[e] = 1);
    });
    var Xt = (function (e) {
      function t(t, i, r, n) {
        var s;
        'number' == typeof i && ((r.duration = i), (i = r), (r = null));
        var a,
          o,
          c,
          h,
          p,
          f,
          v,
          g,
          m = (s = e.call(this, n ? i : Ce(i)) || this).vars,
          y = m.duration,
          b = m.delay,
          _ = m.immediateRender,
          w = m.stagger,
          T = m.overwrite,
          S = m.keyframes,
          E = m.defaults,
          C = m.scrollTrigger,
          k = m.yoyoEase,
          L = i.parent || d,
          M = (N(t) || R(t) ? z(t[0]) : 'length' in i) ? [t] : Je(t);
        if (
          ((s._targets = M.length
            ? ue(M)
            : J(
                'GSAP target ' + t + ' not found. https://greensock.com',
                !x.nullTargetWarn
              ) || []),
          (s._ptLookup = []),
          (s._overwrite = T),
          S || w || F(y) || F(b))
        ) {
          if (
            ((i = s.vars),
            (a = s.timeline =
              new It({
                data: 'nested',
                defaults: E || {},
              })).kill(),
            (a.parent = a._dp = l(s)),
            (a._start = 0),
            w || F(y) || F(b))
          ) {
            if (((h = M.length), (v = w && tt(w)), j(w)))
              for (p in w) ~Ht.indexOf(p) && (g || (g = {}), (g[p] = w[p]));
            for (o = 0; o < h; o++)
              ((c = Ee(i, Yt)).stagger = 0),
                k && (c.yoyoEase = k),
                g && xe(c, g),
                (f = M[o]),
                (c.duration = +Vt(y, l(s), o, f, M)),
                (c.delay = (+Vt(b, l(s), o, f, M) || 0) - s._delay),
                !w &&
                  1 === h &&
                  c.delay &&
                  ((s._delay = b = c.delay), (s._start += b), (c.delay = 0)),
                a.to(f, c, v ? v(o, f, M) : 0),
                (a._ease = Tt.none);
            a.duration() ? (y = b = 0) : (s.timeline = 0);
          } else if (S) {
            Ce(
              Te(a.vars.defaults, {
                ease: 'none',
              })
            ),
              (a._ease = Lt(S.ease || i.ease || 'none'));
            var A,
              P,
              O,
              D = 0;
            if (N(S))
              S.forEach(function (e) {
                return a.to(M, e, '>');
              });
            else {
              for (p in ((c = {}), S))
                'ease' === p || 'easeEach' === p || Gt(p, S[p], c, S.easeEach);
              for (p in c)
                for (
                  A = c[p].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    D = 0,
                    o = 0;
                  o < A.length;
                  o++
                )
                  ((O = {
                    ease: (P = A[o]).e,
                    duration: ((P.t - (o ? A[o - 1].t : 0)) / 100) * y,
                  })[p] = P.v),
                    a.to(M, O, D),
                    (D += O.duration);
              a.duration() < y &&
                a.to(
                  {},
                  {
                    duration: y - a.duration(),
                  }
                );
            }
          }
          y || s.duration((y = a.duration()));
        } else s.timeline = 0;
        return (
          !0 !== T || u || ((jt = l(s)), d.killTweensOf(M), (jt = 0)),
          Be(L, l(s), r),
          i.reversed && s.reverse(),
          i.paused && s.paused(!0),
          (_ ||
            (!y &&
              !S &&
              s._start === ve(L._time) &&
              q(_) &&
              (function e(t) {
                return !t || (t._ts && e(t.parent));
              })(l(s)) &&
              'nested' !== L.data)) &&
            ((s._tTime = -1e-8), s.render(Math.max(0, -b))),
          C && Fe(l(s), C),
          s
        );
      }
      c(t, e);
      var i = t.prototype;
      return (
        (i.render = function (e, t, i) {
          var r,
            n,
            s,
            a,
            o,
            l,
            c,
            u,
            d,
            h = this._time,
            p = this._tDur,
            f = this._dur,
            v = e > p - 1e-8 && e >= 0 ? p : e < 1e-8 ? 0 : e;
          if (f) {
            if (
              v !== this._tTime ||
              !e ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != e < 0)
            ) {
              if (((r = v), (u = this.timeline), this._repeat)) {
                if (((a = f + this._rDelay), this._repeat < -1 && e < 0))
                  return this.totalTime(100 * a + e, t, i);
                if (
                  ((r = ve(v % a)),
                  v === p
                    ? ((s = this._repeat), (r = f))
                    : ((s = ~~(v / a)) && s === v / a && ((r = f), s--),
                      r > f && (r = f)),
                  (l = this._yoyo && 1 & s) && ((d = this._yEase), (r = f - r)),
                  (o = De(this._tTime, a)),
                  r === h && !i && this._initted)
                )
                  return (this._tTime = v), this;
                s !== o &&
                  (u && this._yEase && kt(u, l),
                  !this.vars.repeatRefresh ||
                    l ||
                    this._lock ||
                    ((this._lock = i = 1),
                    (this.render(ve(a * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Re(this, e < 0 ? e : r, i, t))
                  return (this._tTime = 0), this;
                if (h !== this._time) return this;
                if (f !== this._dur) return this.render(e, t, i);
              }
              if (
                ((this._tTime = v),
                (this._time = r),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = c = (d || this._ease)(r / f)),
                this._from && (this.ratio = c = 1 - c),
                r && !h && !t && (ct(this, 'onStart'), this._tTime !== v))
              )
                return this;
              for (n = this._pt; n; ) n.r(c, n.d), (n = n._next);
              (u &&
                u.render(
                  e < 0 ? e : !r && l ? -1e-8 : u._dur * u._ease(r / this._dur),
                  t,
                  i
                )) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate &&
                  !t &&
                  (e < 0 && this._startAt && this._startAt.render(e, !0, i),
                  ct(this, 'onUpdate')),
                this._repeat &&
                  s !== o &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  ct(this, 'onRepeat'),
                (v !== this._tDur && v) ||
                  this._tTime !== v ||
                  (e < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(e, !0, !0),
                  (e || !f) &&
                    ((v === this._tDur && this._ts > 0) ||
                      (!v && this._ts < 0)) &&
                    Me(this, 1),
                  t ||
                    (e < 0 && !h) ||
                    (!v && !h) ||
                    (ct(this, v === p ? 'onComplete' : 'onReverseComplete', !0),
                    this._prom &&
                      !(v < p && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (e, t, i, r) {
              var n,
                s,
                a,
                o = e.ratio,
                l =
                  t < 0 ||
                  (!t &&
                    ((!e._start &&
                      (function e(t) {
                        var i = t.parent;
                        return (
                          i &&
                          i._ts &&
                          i._initted &&
                          !i._lock &&
                          (i.rawTime() < 0 || e(i))
                        );
                      })(e) &&
                      (e._initted || !Ne(e))) ||
                      ((e._ts < 0 || e._dp._ts < 0) && !Ne(e))))
                    ? 0
                    : 1,
                c = e._rDelay,
                u = 0;
              if (
                (c &&
                  e._repeat &&
                  ((u = We(0, e._tDur, t)),
                  (s = De(u, c)),
                  e._yoyo && 1 & s && (l = 1 - l),
                  s !== De(e._tTime, c) &&
                    ((o = 1 - l),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
                l !== o || r || 1e-8 === e._zTime || (!t && e._zTime))
              ) {
                if (!e._initted && Re(e, t, r, i)) return;
                for (
                  a = e._zTime,
                    e._zTime = t || (i ? 1e-8 : 0),
                    i || (i = t && !a),
                    e.ratio = l,
                    e._from && (l = 1 - l),
                    e._time = 0,
                    e._tTime = u,
                    n = e._pt;
                  n;

                )
                  n.r(l, n.d), (n = n._next);
                e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                  e._onUpdate && !i && ct(e, 'onUpdate'),
                  u && e._repeat && !i && e.parent && ct(e, 'onRepeat'),
                  (t >= e._tDur || t < 0) &&
                    e.ratio === l &&
                    (l && Me(e, 1),
                    i ||
                      (ct(e, l ? 'onComplete' : 'onReverseComplete', !0),
                      e._prom && e._prom()));
              } else e._zTime || (e._zTime = t);
            })(this, e, t, i);
          return this;
        }),
        (i.targets = function () {
          return this._targets;
        }),
        (i.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            e.prototype.invalidate.call(this)
          );
        }),
        (i.resetTo = function (e, t, i, r) {
          y || _t.wake(), this._ts || this.play();
          var n = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts
          );
          return (
            this._initted || Nt(this, n),
            (function (e, t, i, r, n, s, a) {
              var o,
                l,
                c,
                u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
              if (!u)
                for (
                  u = e._ptCache[t] = [],
                    l = e._ptLookup,
                    c = e._targets.length;
                  c--;

                ) {
                  if ((o = l[c][t]) && o.d && o.d._pt)
                    for (o = o.d._pt; o && o.p !== t; ) o = o._next;
                  if (!o)
                    return (qt = 1), (e.vars[t] = '+=0'), Nt(e, a), (qt = 0), 1;
                  u.push(o);
                }
              for (c = u.length; c--; )
                ((o = u[c]).s =
                  (!r && 0 !== r) || n ? o.s + (r || 0) + s * o.c : r),
                  (o.c = i - o.s),
                  o.e && (o.e = fe(i) + Ue(o.e)),
                  o.b && (o.b = o.s + Ue(o.b));
            })(this, e, t, i, r, this._ease(n / this._dur), n)
              ? this.resetTo(e, t, i, r)
              : (je(this, 0),
                this.parent ||
                  ke(
                    this._dp,
                    this,
                    '_first',
                    '_last',
                    this._dp._sort ? '_start' : 0
                  ),
                this.render(0))
          );
        }),
        (i.kill = function (e, t) {
          if ((void 0 === t && (t = 'all'), !(e || (t && 'all' !== t))))
            return (this._lazy = this._pt = 0), this.parent ? ut(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, jt && !0 !== jt.vars.overwrite)
                ._first || ut(this),
              this.parent &&
                i !== this.timeline.totalDuration() &&
                Ge(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var r,
            n,
            s,
            a,
            o,
            l,
            c,
            u = this._targets,
            d = e ? Je(e) : u,
            h = this._ptLookup,
            p = this._pt;
          if (
            (!t || 'all' === t) &&
            (function (e, t) {
              for (
                var i = e.length, r = i === t.length;
                r && i-- && e[i] === t[i];

              );
              return i < 0;
            })(u, d)
          )
            return 'all' === t && (this._pt = 0), ut(this);
          for (
            r = this._op = this._op || [],
              'all' !== t &&
                (O(t) &&
                  ((o = {}),
                  pe(t, function (e) {
                    return (o[e] = 1);
                  }),
                  (t = o)),
                (t = (function (e, t) {
                  var i,
                    r,
                    n,
                    s,
                    a = e[0] ? de(e[0]).harness : 0,
                    o = a && a.aliases;
                  if (!o) return t;
                  for (r in ((i = xe({}, t)), o))
                    if ((r in i))
                      for (n = (s = o[r].split(',')).length; n--; )
                        i[s[n]] = i[r];
                  return i;
                })(u, t))),
              c = u.length;
            c--;

          )
            if (~d.indexOf(u[c]))
              for (o in ((n = h[c]),
              'all' === t
                ? ((r[c] = t), (a = n), (s = {}))
                : ((s = r[c] = r[c] || {}), (a = t)),
              a))
                (l = n && n[o]) &&
                  (('kill' in l.d && !0 !== l.d.kill(o)) || Le(this, l, '_pt'),
                  delete n[o]),
                  'all' !== s && (s[o] = 1);
          return this._initted && !this._pt && p && ut(this), this;
        }),
        (t.to = function (e, i) {
          return new t(e, i, arguments[2]);
        }),
        (t.from = function (e, t) {
          return Xe(1, arguments);
        }),
        (t.delayedCall = function (e, i, r, n) {
          return new t(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (t.fromTo = function (e, t, i) {
          return Xe(2, arguments);
        }),
        (t.set = function (e, i) {
          return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new t(e, i);
        }),
        (t.killTweensOf = function (e, t, i) {
          return d.killTweensOf(e, t, i);
        }),
        t
      );
    })(zt);
    Te(Xt.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      pe('staggerTo,staggerFrom,staggerFromTo', function (e) {
        Xt[e] = function () {
          var t = new It(),
            i = Ke.call(arguments, 0);
          return (
            i.splice('staggerFromTo' === e ? 5 : 4, 0, 0), t[e].apply(t, i)
          );
        };
      });
    var $t = function (e, t, i) {
        return (e[t] = i);
      },
      Wt = function (e, t, i) {
        return e[t](i);
      },
      Ut = function (e, t, i, r) {
        return e[t](r.fp, i);
      },
      Kt = function (e, t, i) {
        return e.setAttribute(t, i);
      },
      Qt = function (e, t) {
        return D(e[t]) ? Wt : I(e[t]) && e.setAttribute ? Kt : $t;
      },
      Zt = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      },
      Jt = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      ei = function (e, t) {
        var i = t._pt,
          r = '';
        if (!e && t.b) r = t.b;
        else if (1 === e && t.e) r = t.e;
        else {
          for (; i; )
            (r =
              i.p +
              (i.m
                ? i.m(i.s + i.c * e)
                : Math.round(1e4 * (i.s + i.c * e)) / 1e4) +
              r),
              (i = i._next);
          r += t.c;
        }
        t.set(t.t, t.p, r, t);
      },
      ti = function (e, t) {
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      },
      ii = function (e, t, i, r) {
        for (var n, s = this._pt; s; )
          (n = s._next), s.p === r && s.modifier(e, t, i), (s = n);
      },
      ri = function (e) {
        for (var t, i, r = this._pt; r; )
          (i = r._next),
            (r.p === e && !r.op) || r.op === e
              ? Le(this, r, '_pt')
              : r.dep || (t = 1),
            (r = i);
        return !t;
      },
      ni = function (e, t, i, r) {
        r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
      },
      si = function (e) {
        for (var t, i, r, n, s = e._pt; s; ) {
          for (t = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
          (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s),
            (s._next = i) ? (i._prev = s) : (n = s),
            (s = t);
        }
        e._pt = r;
      },
      ai = (function () {
        function e(e, t, i, r, n, s, a, o, l) {
          (this.t = t),
            (this.s = r),
            (this.c = n),
            (this.p = i),
            (this.r = s || Zt),
            (this.d = a || this),
            (this.set = o || $t),
            (this.pr = l || 0),
            (this._next = e),
            e && (e._prev = this);
        }
        return (
          (e.prototype.modifier = function (e, t, i) {
            (this.mSet = this.mSet || this.set),
              (this.set = ni),
              (this.m = e),
              (this.mt = i),
              (this.tween = t);
          }),
          e
        );
      })();
    pe(
      ce +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
      function (e) {
        return (ie[e] = 1);
      }
    ),
      (U.TweenMax = U.TweenLite = Xt),
      (U.TimelineLite = U.TimelineMax = It),
      (d = new It({
        sortChildren: !1,
        defaults: S,
        autoRemoveChildren: !0,
        id: 'root',
        smoothChildTiming: !0,
      })),
      (x.stringFilter = bt);
    var oi = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (e) {
          return dt(e);
        });
      },
      timeline: function (e) {
        return new It(e);
      },
      getTweensOf: function (e, t) {
        return d.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        O(e) && (e = Je(e)[0]);
        var n = de(e || {}).get,
          s = i ? we : _e;
        return (
          'native' === i && (i = ''),
          e
            ? t
              ? s(((se[t] && se[t].get) || n)(e, t, i, r))
              : function (t, i, r) {
                  return s(((se[t] && se[t].get) || n)(e, t, i, r));
                }
            : e
        );
      },
      quickSetter: function (e, t, i) {
        if ((e = Je(e)).length > 1) {
          var r = e.map(function (e) {
              return ui.quickSetter(e, t, i);
            }),
            n = r.length;
          return function (e) {
            for (var t = n; t--; ) r[t](e);
          };
        }
        e = e[0] || {};
        var s = se[t],
          a = de(e),
          o = (a.harness && (a.harness.aliases || {})[t]) || t,
          l = s
            ? function (t) {
                var r = new s();
                (m._pt = 0),
                  r.init(e, i ? t + i : t, m, 0, [e]),
                  r.render(1, r),
                  m._pt && ti(1, m);
              }
            : a.set(e, o);
        return s
          ? l
          : function (t) {
              return l(e, o, i ? t + i : t, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          n = ui.to(
            e,
            xe((((r = {})[t] = '+=0.1'), (r.paused = !0), r), i || {})
          ),
          s = function (e, i, r) {
            return n.resetTo(t, e, i, r);
          };
        return (s.tween = n), s;
      },
      isTweening: function (e) {
        return d.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Lt(e.ease, S.ease)), Se(S, e || {});
      },
      config: function (e) {
        return Se(x, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          n = e.defaults,
          s = e.extendTimeline;
        (r || '').split(',').forEach(function (e) {
          return (
            e && !se[e] && !U[e] && J(t + ' effect requires ' + e + ' plugin.')
          );
        }),
          (ae[t] = function (e, t, r) {
            return i(Je(e), Te(t || {}, n), r);
          }),
          s &&
            (It.prototype[t] = function (e, i, r) {
              return this.add(ae[t](e, j(i) ? i : (r = i) && {}, this), r);
            });
      },
      registerEase: function (e, t) {
        Tt[e] = Lt(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Lt(e, t) : Tt;
      },
      getById: function (e) {
        return d.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var i,
          r,
          n = new It(e);
        for (
          n.smoothChildTiming = q(e.smoothChildTiming),
            d.remove(n),
            n._dp = 0,
            n._time = n._tTime = d._time,
            i = d._first;
          i;

        )
          (r = i._next),
            (!t &&
              !i._dur &&
              i instanceof Xt &&
              i.vars.onComplete === i._targets[0]) ||
              Be(n, i, i._start - i._delay),
            (i = r);
        return Be(d, n, 0), n;
      },
      utils: {
        wrap: function e(t, i, r) {
          var n = i - t;
          return N(t)
            ? st(t, e(0, t.length), i)
            : $e(r, function (e) {
                return ((n + ((e - t) % n)) % n) + t;
              });
        },
        wrapYoyo: function e(t, i, r) {
          var n = i - t,
            s = 2 * n;
          return N(t)
            ? st(t, e(0, t.length - 1), i)
            : $e(r, function (e) {
                return t + ((e = (s + ((e - t) % s)) % s || 0) > n ? s - e : e);
              });
        },
        distribute: tt,
        random: nt,
        snap: rt,
        normalize: function (e, t, i) {
          return ot(e, t, 0, 1, i);
        },
        getUnit: Ue,
        clamp: function (e, t, i) {
          return $e(i, function (i) {
            return We(e, t, i);
          });
        },
        splitColor: ft,
        toArray: Je,
        selector: function (e) {
          return (
            (e = Je(e)[0] || J('Invalid scope') || {}),
            function (t) {
              var i = e.current || e.nativeElement || e;
              return Je(
                t,
                i.querySelectorAll
                  ? i
                  : i === e
                  ? J('Invalid scope') || f.createElement('div')
                  : e
              );
            }
          );
        },
        mapRange: ot,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (i) {
            return e(parseFloat(i)) + (t || Ue(i));
          };
        },
        interpolate: function e(t, i, r, n) {
          var s = isNaN(t + i)
            ? 0
            : function (e) {
                return (1 - e) * t + e * i;
              };
          if (!s) {
            var a,
              o,
              l,
              c,
              u,
              d = O(t),
              h = {};
            if ((!0 === r && (n = 1) && (r = null), d))
              (t = {
                p: t,
              }),
                (i = {
                  p: i,
                });
            else if (N(t) && !N(i)) {
              for (l = [], c = t.length, u = c - 2, o = 1; o < c; o++)
                l.push(e(t[o - 1], t[o]));
              c--,
                (s = function (e) {
                  e *= c;
                  var t = Math.min(u, ~~e);
                  return l[t](e - t);
                }),
                (r = i);
            } else n || (t = xe(N(t) ? [] : {}, t));
            if (!l) {
              for (a in i) Ft.call(h, t, a, 'get', i[a]);
              s = function (e) {
                return ti(e, h) || (d ? t.p : t);
              };
            }
          }
          return $e(r, s);
        },
        shuffle: et,
      },
      install: Q,
      effects: ae,
      ticker: _t,
      updateRoot: It.updateRoot,
      plugins: se,
      globalTimeline: d,
      core: {
        PropTween: ai,
        globals: ee,
        Tween: Xt,
        Timeline: It,
        Animation: zt,
        getCache: de,
        _removeLinkedListItem: Le,
        suppressOverwrites: function (e) {
          return (u = e);
        },
      },
    };
    pe('to,from,fromTo,delayedCall,set,killTweensOf', function (e) {
      return (oi[e] = Xt[e]);
    }),
      _t.add(It.updateRoot),
      (m = oi.to(
        {},
        {
          duration: 0,
        }
      ));
    var li = function (e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
          i = i._next;
        return i;
      },
      ci = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, i, r) {
            r._onInit = function (e) {
              var r, n;
              if (
                (O(i) &&
                  ((r = {}),
                  pe(i, function (e) {
                    return (r[e] = 1);
                  }),
                  (i = r)),
                t)
              ) {
                for (n in ((r = {}), i)) r[n] = t(i[n]);
                i = r;
              }
              !(function (e, t) {
                var i,
                  r,
                  n,
                  s = e._targets;
                for (i in t)
                  for (r = s.length; r--; )
                    (n = e._ptLookup[r][i]) &&
                      (n = n.d) &&
                      (n._pt && (n = li(n, i)),
                      n && n.modifier && n.modifier(t[i], e, s[r], i));
              })(e, i);
            };
          },
        };
      },
      ui =
        oi.registerPlugin(
          {
            name: 'attr',
            init: function (e, t, i, r, n) {
              var s, a;
              for (s in t)
                (a = this.add(
                  e,
                  'setAttribute',
                  (e.getAttribute(s) || 0) + '',
                  t[s],
                  r,
                  n,
                  0,
                  0,
                  s
                )) && (a.op = s),
                  this._props.push(s);
            },
          },
          {
            name: 'endArray',
            init: function (e, t) {
              for (var i = t.length; i--; ) this.add(e, i, e[i] || 0, t[i]);
            },
          },
          ci('roundProps', it),
          ci('modifiers'),
          ci('snap', rt)
        ) || oi;
    (Xt.version = It.version = ui.version = '3.10.4'), (v = 1), B() && wt();
    Tt.Power0,
      Tt.Power1,
      Tt.Power2,
      Tt.Power3,
      Tt.Power4,
      Tt.Linear,
      Tt.Quad,
      Tt.Cubic,
      Tt.Quart,
      Tt.Quint,
      Tt.Strong,
      Tt.Elastic,
      Tt.Back,
      Tt.SteppedEase,
      Tt.Bounce,
      Tt.Sine,
      Tt.Expo,
      Tt.Circ;
    /*!
     * CSSPlugin 3.10.4
     * https://greensock.com
     *
     * Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var di,
      hi,
      pi,
      fi,
      vi,
      gi,
      mi,
      yi = {},
      bi = 180 / Math.PI,
      _i = Math.PI / 180,
      wi = Math.atan2,
      Ti = /([A-Z])/g,
      xi = /(left|right|width|margin|padding|x)/i,
      Si = /[\s,\(]\S/,
      Ei = {
        autoAlpha: 'opacity,visibility',
        scale: 'scaleX,scaleY',
        alpha: 'opacity',
      },
      Ci = function (e, t) {
        return t.set(
          t.t,
          t.p,
          Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      ki = function (e, t) {
        return t.set(
          t.t,
          t.p,
          1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      Li = function (e, t) {
        return t.set(
          t.t,
          t.p,
          e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
          t
        );
      },
      Mi = function (e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
      },
      Ai = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      },
      Pi = function (e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
      },
      Oi = function (e, t, i) {
        return (e.style[t] = i);
      },
      Di = function (e, t, i) {
        return e.style.setProperty(t, i);
      },
      zi = function (e, t, i) {
        return (e._gsap[t] = i);
      },
      Ii = function (e, t, i) {
        return (e._gsap.scaleX = e._gsap.scaleY = i);
      },
      ji = function (e, t, i, r, n) {
        var s = e._gsap;
        (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
      },
      qi = function (e, t, i, r, n) {
        var s = e._gsap;
        (s[t] = i), s.renderTransform(n, s);
      },
      Bi = 'transform',
      Fi = Bi + 'Origin',
      Ri = function (e, t) {
        var i = hi.createElementNS
          ? hi.createElementNS(
              (t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
              e
            )
          : hi.createElement(e);
        return i.style ? i : hi.createElement(e);
      },
      Ni = function e(t, i, r) {
        var n = getComputedStyle(t);
        return (
          n[i] ||
          n.getPropertyValue(i.replace(Ti, '-$1').toLowerCase()) ||
          n.getPropertyValue(i) ||
          (!r && e(t, Vi(i) || i, 1)) ||
          ''
        );
      },
      Gi = 'O,Moz,ms,Ms,Webkit'.split(','),
      Vi = function (e, t, i) {
        var r = (t || vi).style,
          n = 5;
        if (e in r && !i) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          n-- && !(Gi[n] + e in r);

        );
        return n < 0 ? null : (3 === n ? 'ms' : n >= 0 ? Gi[n] : '') + e;
      },
      Hi = function () {
        'undefined' != typeof window &&
          window.document &&
          ((di = window),
          (hi = di.document),
          (pi = hi.documentElement),
          (vi = Ri('div') || {
            style: {},
          }),
          Ri('div'),
          (Bi = Vi(Bi)),
          (Fi = Bi + 'Origin'),
          (vi.style.cssText =
            'border-width:0;line-height:0;position:absolute;padding:0'),
          (mi = !!Vi('perspective')),
          (fi = 1));
      },
      Yi = function e(t) {
        var i,
          r = Ri(
            'svg',
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute('xmlns')) ||
              'http://www.w3.org/2000/svg'
          ),
          n = this.parentNode,
          s = this.nextSibling,
          a = this.style.cssText;
        if (
          (pi.appendChild(r),
          r.appendChild(this),
          (this.style.display = 'block'),
          t)
        )
          try {
            (i = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = e);
          } catch (e) {}
        else this._gsapBBox && (i = this._gsapBBox());
        return (
          n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
          pi.removeChild(r),
          (this.style.cssText = a),
          i
        );
      },
      Xi = function (e, t) {
        for (var i = t.length; i--; )
          if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
      },
      $i = function (e) {
        var t;
        try {
          t = e.getBBox();
        } catch (i) {
          t = Yi.call(e, !0);
        }
        return (
          (t && (t.width || t.height)) ||
            e.getBBox === Yi ||
            (t = Yi.call(e, !0)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +Xi(e, ['x', 'cx', 'x1']) || 0,
                y: +Xi(e, ['y', 'cy', 'y1']) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Wi = function (e) {
        return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !$i(e));
      },
      Ui = function (e, t) {
        if (t) {
          var i = e.style;
          t in yi && t !== Fi && (t = Bi),
            i.removeProperty
              ? (('ms' !== t.substr(0, 2) && 'webkit' !== t.substr(0, 6)) ||
                  (t = '-' + t),
                i.removeProperty(t.replace(Ti, '-$1').toLowerCase()))
              : i.removeAttribute(t);
        }
      },
      Ki = function (e, t, i, r, n, s) {
        var a = new ai(e._pt, t, i, 0, 1, s ? Pi : Ai);
        return (e._pt = a), (a.b = r), (a.e = n), e._props.push(i), a;
      },
      Qi = {
        deg: 1,
        rad: 1,
        turn: 1,
      },
      Zi = function e(t, i, r, n) {
        var s,
          a,
          o,
          l,
          c = parseFloat(r) || 0,
          u = (r + '').trim().substr((c + '').length) || 'px',
          d = vi.style,
          h = xi.test(i),
          p = 'svg' === t.tagName.toLowerCase(),
          f = (p ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
          v = 'px' === n,
          g = '%' === n;
        return n === u || !c || Qi[n] || Qi[u]
          ? c
          : ('px' !== u && !v && (c = e(t, i, r, 'px')),
            (l = t.getCTM && Wi(t)),
            (!g && '%' !== u) || (!yi[i] && !~i.indexOf('adius'))
              ? ((d[h ? 'width' : 'height'] = 100 + (v ? u : n)),
                (a =
                  ~i.indexOf('adius') || ('em' === n && t.appendChild && !p)
                    ? t
                    : t.parentNode),
                l && (a = (t.ownerSVGElement || {}).parentNode),
                (a && a !== hi && a.appendChild) || (a = hi.body),
                (o = a._gsap) && g && o.width && h && o.time === _t.time
                  ? fe((c / o.width) * 100)
                  : ((g || '%' === u) && (d.position = Ni(t, 'position')),
                    a === t && (d.position = 'static'),
                    a.appendChild(vi),
                    (s = vi[f]),
                    a.removeChild(vi),
                    (d.position = 'absolute'),
                    h && g && (((o = de(a)).time = _t.time), (o.width = a[f])),
                    fe(v ? (s * c) / 100 : s && c ? (100 / s) * c : 0)))
              : ((s = l ? t.getBBox()[h ? 'width' : 'height'] : t[f]),
                fe(g ? (c / s) * 100 : (c / 100) * s)));
      },
      Ji = function (e, t, i, r) {
        var n;
        return (
          fi || Hi(),
          t in Ei &&
            'transform' !== t &&
            ~(t = Ei[t]).indexOf(',') &&
            (t = t.split(',')[0]),
          yi[t] && 'transform' !== t
            ? ((n = ur(e, r)),
              (n =
                'transformOrigin' !== t
                  ? n[t]
                  : n.svg
                  ? n.origin
                  : dr(Ni(e, Fi)) + ' ' + n.zOrigin + 'px'))
            : (!(n = e.style[t]) ||
                'auto' === n ||
                r ||
                ~(n + '').indexOf('calc(')) &&
              (n =
                (rr[t] && rr[t](e, t, i)) ||
                Ni(e, t) ||
                he(e, t) ||
                ('opacity' === t ? 1 : 0)),
          i && !~(n + '').trim().indexOf(' ') ? Zi(e, t, n, i) + i : n
        );
      },
      er = function (e, t, i, r) {
        if (!i || 'none' === i) {
          var n = Vi(t, e, 1),
            s = n && Ni(e, n, 1);
          s && s !== i
            ? ((t = n), (i = s))
            : 'borderColor' === t && (i = Ni(e, 'borderTopColor'));
        }
        var a,
          o,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          v,
          g,
          m = new ai(this._pt, e.style, t, 0, 1, ei),
          y = 0,
          b = 0;
        if (
          ((m.b = i),
          (m.e = r),
          (i += ''),
          'auto' === (r += '') &&
            ((e.style[t] = r), (r = Ni(e, t) || r), (e.style[t] = i)),
          bt((a = [i, r])),
          (r = a[1]),
          (l = (i = a[0]).match(H) || []),
          (r.match(H) || []).length)
        ) {
          for (; (o = H.exec(r)); )
            (h = o[0]),
              (f = r.substring(y, o.index)),
              u
                ? (u = (u + 1) % 5)
                : ('rgba(' !== f.substr(-5) && 'hsla(' !== f.substr(-5)) ||
                  (u = 1),
              h !== (d = l[b++] || '') &&
                ((c = parseFloat(d) || 0),
                (g = d.substr((c + '').length)),
                '=' === h.charAt(1) && (h = ge(c, h) + g),
                (p = parseFloat(h)),
                (v = h.substr((p + '').length)),
                (y = H.lastIndex - v.length),
                v ||
                  ((v = v || x.units[t] || g),
                  y === r.length && ((r += v), (m.e += v))),
                g !== v && (c = Zi(e, t, d, v) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: f || 1 === b ? f : ',',
                  s: c,
                  c: p - c,
                  m: (u && u < 4) || 'zIndex' === t ? Math.round : 0,
                }));
          m.c = y < r.length ? r.substring(y, r.length) : '';
        } else m.r = 'display' === t && 'none' === r ? Pi : Ai;
        return X.test(r) && (m.e = 0), (this._pt = m), m;
      },
      tr = {
        top: '0%',
        bottom: '100%',
        left: '0%',
        right: '100%',
        center: '50%',
      },
      ir = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var i,
            r,
            n,
            s = t.t,
            a = s.style,
            o = t.u,
            l = s._gsap;
          if ('all' === o || !0 === o) (a.cssText = ''), (r = 1);
          else
            for (n = (o = o.split(',')).length; --n > -1; )
              (i = o[n]),
                yi[i] && ((r = 1), (i = 'transformOrigin' === i ? Fi : Bi)),
                Ui(s, i);
          r &&
            (Ui(s, Bi),
            l &&
              (l.svg && s.removeAttribute('transform'),
              ur(s, 1),
              (l.uncache = 1)));
        }
      },
      rr = {
        clearProps: function (e, t, i, r, n) {
          if ('isFromStart' !== n.data) {
            var s = (e._pt = new ai(e._pt, t, i, 0, 0, ir));
            return (s.u = r), (s.pr = -10), (s.tween = n), e._props.push(i), 1;
          }
        },
      },
      nr = [1, 0, 0, 1, 0, 0],
      sr = {},
      ar = function (e) {
        return 'matrix(1, 0, 0, 1, 0, 0)' === e || 'none' === e || !e;
      },
      or = function (e) {
        var t = Ni(e, Bi);
        return ar(t) ? nr : t.substr(7).match(V).map(fe);
      },
      lr = function (e, t) {
        var i,
          r,
          n,
          s,
          a = e._gsap || de(e),
          o = e.style,
          l = or(e);
        return a.svg && e.getAttribute('transform')
          ? '1,0,0,1,0,0' ===
            (l = [
              (n = e.transform.baseVal.consolidate().matrix).a,
              n.b,
              n.c,
              n.d,
              n.e,
              n.f,
            ]).join(',')
            ? nr
            : l
          : (l !== nr ||
              e.offsetParent ||
              e === pi ||
              a.svg ||
              ((n = o.display),
              (o.display = 'block'),
              ((i = e.parentNode) && e.offsetParent) ||
                ((s = 1), (r = e.nextSibling), pi.appendChild(e)),
              (l = or(e)),
              n ? (o.display = n) : Ui(e, 'display'),
              s &&
                (r
                  ? i.insertBefore(e, r)
                  : i
                  ? i.appendChild(e)
                  : pi.removeChild(e))),
            t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      cr = function (e, t, i, r, n, s) {
        var a,
          o,
          l,
          c = e._gsap,
          u = n || lr(e, !0),
          d = c.xOrigin || 0,
          h = c.yOrigin || 0,
          p = c.xOffset || 0,
          f = c.yOffset || 0,
          v = u[0],
          g = u[1],
          m = u[2],
          y = u[3],
          b = u[4],
          _ = u[5],
          w = t.split(' '),
          T = parseFloat(w[0]) || 0,
          x = parseFloat(w[1]) || 0;
        i
          ? u !== nr &&
            (o = v * y - g * m) &&
            ((l = T * (-g / o) + x * (v / o) - (v * _ - g * b) / o),
            (T = T * (y / o) + x * (-m / o) + (m * _ - y * b) / o),
            (x = l))
          : ((T =
              (a = $i(e)).x + (~w[0].indexOf('%') ? (T / 100) * a.width : T)),
            (x =
              a.y + (~(w[1] || w[0]).indexOf('%') ? (x / 100) * a.height : x))),
          r || (!1 !== r && c.smooth)
            ? ((b = T - d),
              (_ = x - h),
              (c.xOffset = p + (b * v + _ * m) - b),
              (c.yOffset = f + (b * g + _ * y) - _))
            : (c.xOffset = c.yOffset = 0),
          (c.xOrigin = T),
          (c.yOrigin = x),
          (c.smooth = !!r),
          (c.origin = t),
          (c.originIsAbsolute = !!i),
          (e.style[Fi] = '0px 0px'),
          s &&
            (Ki(s, c, 'xOrigin', d, T),
            Ki(s, c, 'yOrigin', h, x),
            Ki(s, c, 'xOffset', p, c.xOffset),
            Ki(s, c, 'yOffset', f, c.yOffset)),
          e.setAttribute('data-svg-origin', T + ' ' + x);
      },
      ur = function (e, t) {
        var i = e._gsap || new Dt(e);
        if ('x' in i && !t && !i.uncache) return i;
        var r,
          n,
          s,
          a,
          o,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          v,
          g,
          m,
          y,
          b,
          _,
          w,
          T,
          S,
          E,
          C,
          k,
          L,
          M,
          A,
          P,
          O,
          D,
          z,
          I,
          j = e.style,
          q = i.scaleX < 0,
          B = Ni(e, Fi) || '0';
        return (
          (r = n = s = l = c = u = d = h = p = 0),
          (a = o = 1),
          (i.svg = !(!e.getCTM || !Wi(e))),
          (g = lr(e, i.svg)),
          i.svg &&
            ((k =
              (!i.uncache || '0px 0px' === B) &&
              !t &&
              e.getAttribute('data-svg-origin')),
            cr(e, k || B, !!k || i.originIsAbsolute, !1 !== i.smooth, g)),
          (f = i.xOrigin || 0),
          (v = i.yOrigin || 0),
          g !== nr &&
            ((_ = g[0]),
            (w = g[1]),
            (T = g[2]),
            (S = g[3]),
            (r = E = g[4]),
            (n = C = g[5]),
            6 === g.length
              ? ((a = Math.sqrt(_ * _ + w * w)),
                (o = Math.sqrt(S * S + T * T)),
                (l = _ || w ? wi(w, _) * bi : 0),
                (d = T || S ? wi(T, S) * bi + l : 0) &&
                  (o *= Math.abs(Math.cos(d * _i))),
                i.svg &&
                  ((r -= f - (f * _ + v * T)), (n -= v - (f * w + v * S))))
              : ((I = g[6]),
                (D = g[7]),
                (A = g[8]),
                (P = g[9]),
                (O = g[10]),
                (z = g[11]),
                (r = g[12]),
                (n = g[13]),
                (s = g[14]),
                (c = (m = wi(I, O)) * bi),
                m &&
                  ((k = E * (y = Math.cos(-m)) + A * (b = Math.sin(-m))),
                  (L = C * y + P * b),
                  (M = I * y + O * b),
                  (A = E * -b + A * y),
                  (P = C * -b + P * y),
                  (O = I * -b + O * y),
                  (z = D * -b + z * y),
                  (E = k),
                  (C = L),
                  (I = M)),
                (u = (m = wi(-T, O)) * bi),
                m &&
                  ((y = Math.cos(-m)),
                  (z = S * (b = Math.sin(-m)) + z * y),
                  (_ = k = _ * y - A * b),
                  (w = L = w * y - P * b),
                  (T = M = T * y - O * b)),
                (l = (m = wi(w, _)) * bi),
                m &&
                  ((k = _ * (y = Math.cos(m)) + w * (b = Math.sin(m))),
                  (L = E * y + C * b),
                  (w = w * y - _ * b),
                  (C = C * y - E * b),
                  (_ = k),
                  (E = L)),
                c &&
                  Math.abs(c) + Math.abs(l) > 359.9 &&
                  ((c = l = 0), (u = 180 - u)),
                (a = fe(Math.sqrt(_ * _ + w * w + T * T))),
                (o = fe(Math.sqrt(C * C + I * I))),
                (m = wi(E, C)),
                (d = Math.abs(m) > 2e-4 ? m * bi : 0),
                (p = z ? 1 / (z < 0 ? -z : z) : 0)),
            i.svg &&
              ((k = e.getAttribute('transform')),
              (i.forceCSS = e.setAttribute('transform', '') || !ar(Ni(e, Bi))),
              k && e.setAttribute('transform', k))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (q
              ? ((a *= -1),
                (d += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((o *= -1), (d += d <= 0 ? 180 : -180))),
          (t = t || i.uncache),
          (i.x =
            r -
            ((i.xPercent =
              r &&
              ((!t && i.xPercent) ||
                (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetWidth * i.xPercent) / 100
              : 0) +
            'px'),
          (i.y =
            n -
            ((i.yPercent =
              n &&
              ((!t && i.yPercent) ||
                (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
              ? (e.offsetHeight * i.yPercent) / 100
              : 0) +
            'px'),
          (i.z = s + 'px'),
          (i.scaleX = fe(a)),
          (i.scaleY = fe(o)),
          (i.rotation = fe(l) + 'deg'),
          (i.rotationX = fe(c) + 'deg'),
          (i.rotationY = fe(u) + 'deg'),
          (i.skewX = d + 'deg'),
          (i.skewY = h + 'deg'),
          (i.transformPerspective = p + 'px'),
          (i.zOrigin = parseFloat(B.split(' ')[2]) || 0) && (j[Fi] = dr(B)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = x.force3D),
          (i.renderTransform = i.svg ? vr : mi ? fr : pr),
          (i.uncache = 0),
          i
        );
      },
      dr = function (e) {
        return (e = e.split(' '))[0] + ' ' + e[1];
      },
      hr = function (e, t, i) {
        var r = Ue(t);
        return fe(parseFloat(t) + parseFloat(Zi(e, 'x', i + 'px', r))) + r;
      },
      pr = function (e, t) {
        (t.z = '0px'),
          (t.rotationY = t.rotationX = '0deg'),
          (t.force3D = 0),
          fr(e, t);
      },
      fr = function (e, t) {
        var i = t || this,
          r = i.xPercent,
          n = i.yPercent,
          s = i.x,
          a = i.y,
          o = i.z,
          l = i.rotation,
          c = i.rotationY,
          u = i.rotationX,
          d = i.skewX,
          h = i.skewY,
          p = i.scaleX,
          f = i.scaleY,
          v = i.transformPerspective,
          g = i.force3D,
          m = i.target,
          y = i.zOrigin,
          b = '',
          _ = ('auto' === g && e && 1 !== e) || !0 === g;
        if (y && ('0deg' !== u || '0deg' !== c)) {
          var w,
            T = parseFloat(c) * _i,
            x = Math.sin(T),
            S = Math.cos(T);
          (T = parseFloat(u) * _i),
            (w = Math.cos(T)),
            (s = hr(m, s, x * w * -y)),
            (a = hr(m, a, -Math.sin(T) * -y)),
            (o = hr(m, o, S * w * -y + y));
        }
        '0px' !== v && (b += 'perspective(' + v + ') '),
          (r || n) && (b += 'translate(' + r + '%, ' + n + '%) '),
          (_ || '0px' !== s || '0px' !== a || '0px' !== o) &&
            (b +=
              '0px' !== o || _
                ? 'translate3d(' + s + ', ' + a + ', ' + o + ') '
                : 'translate(' + s + ', ' + a + ') '),
          '0deg' !== l && (b += 'rotate(' + l + ') '),
          '0deg' !== c && (b += 'rotateY(' + c + ') '),
          '0deg' !== u && (b += 'rotateX(' + u + ') '),
          ('0deg' === d && '0deg' === h) ||
            (b += 'skew(' + d + ', ' + h + ') '),
          (1 === p && 1 === f) || (b += 'scale(' + p + ', ' + f + ') '),
          (m.style[Bi] = b || 'translate(0, 0)');
      },
      vr = function (e, t) {
        var i,
          r,
          n,
          s,
          a,
          o = t || this,
          l = o.xPercent,
          c = o.yPercent,
          u = o.x,
          d = o.y,
          h = o.rotation,
          p = o.skewX,
          f = o.skewY,
          v = o.scaleX,
          g = o.scaleY,
          m = o.target,
          y = o.xOrigin,
          b = o.yOrigin,
          _ = o.xOffset,
          w = o.yOffset,
          T = o.forceCSS,
          x = parseFloat(u),
          S = parseFloat(d);
        (h = parseFloat(h)),
          (p = parseFloat(p)),
          (f = parseFloat(f)) && ((p += f = parseFloat(f)), (h += f)),
          h || p
            ? ((h *= _i),
              (p *= _i),
              (i = Math.cos(h) * v),
              (r = Math.sin(h) * v),
              (n = Math.sin(h - p) * -g),
              (s = Math.cos(h - p) * g),
              p &&
                ((f *= _i),
                (a = Math.tan(p - f)),
                (n *= a = Math.sqrt(1 + a * a)),
                (s *= a),
                f &&
                  ((a = Math.tan(f)),
                  (i *= a = Math.sqrt(1 + a * a)),
                  (r *= a))),
              (i = fe(i)),
              (r = fe(r)),
              (n = fe(n)),
              (s = fe(s)))
            : ((i = v), (s = g), (r = n = 0)),
          ((x && !~(u + '').indexOf('px')) ||
            (S && !~(d + '').indexOf('px'))) &&
            ((x = Zi(m, 'x', u, 'px')), (S = Zi(m, 'y', d, 'px'))),
          (y || b || _ || w) &&
            ((x = fe(x + y - (y * i + b * n) + _)),
            (S = fe(S + b - (y * r + b * s) + w))),
          (l || c) &&
            ((a = m.getBBox()),
            (x = fe(x + (l / 100) * a.width)),
            (S = fe(S + (c / 100) * a.height))),
          (a =
            'matrix(' +
            i +
            ',' +
            r +
            ',' +
            n +
            ',' +
            s +
            ',' +
            x +
            ',' +
            S +
            ')'),
          m.setAttribute('transform', a),
          T && (m.style[Bi] = a);
      },
      gr = function (e, t, i, r, n) {
        var s,
          a,
          o = O(n),
          l = parseFloat(n) * (o && ~n.indexOf('rad') ? bi : 1) - r,
          c = r + l + 'deg';
        return (
          o &&
            ('short' === (s = n.split('_')[1]) &&
              (l %= 360) !== l % 180 &&
              (l += l < 0 ? 360 : -360),
            'cw' === s && l < 0
              ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
              : 'ccw' === s &&
                l > 0 &&
                (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
          (e._pt = a = new ai(e._pt, t, i, r, l, ki)),
          (a.e = c),
          (a.u = 'deg'),
          e._props.push(i),
          a
        );
      },
      mr = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      },
      yr = function (e, t, i) {
        var r,
          n,
          s,
          a,
          o,
          l,
          c,
          u = mr({}, i._gsap),
          d = i.style;
        for (n in (u.svg
          ? ((s = i.getAttribute('transform')),
            i.setAttribute('transform', ''),
            (d[Bi] = t),
            (r = ur(i, 1)),
            Ui(i, Bi),
            i.setAttribute('transform', s))
          : ((s = getComputedStyle(i)[Bi]),
            (d[Bi] = t),
            (r = ur(i, 1)),
            (d[Bi] = s)),
        yi))
          (s = u[n]) !== (a = r[n]) &&
            'perspective,force3D,transformOrigin,svgOrigin'.indexOf(n) < 0 &&
            ((o = Ue(s) !== (c = Ue(a)) ? Zi(i, n, s, c) : parseFloat(s)),
            (l = parseFloat(a)),
            (e._pt = new ai(e._pt, r, n, o, l - o, Ci)),
            (e._pt.u = c || 0),
            e._props.push(n));
        mr(r, u);
      };
    pe('padding,margin,Width,Radius', function (e, t) {
      var i = 'Top',
        r = 'Right',
        n = 'Bottom',
        s = 'Left',
        a = (t < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function (
          i
        ) {
          return t < 2 ? e + i : 'border' + i + e;
        });
      rr[t > 1 ? 'border' + e : e] = function (e, t, i, r, n) {
        var s, o;
        if (arguments.length < 4)
          return (
            (s = a.map(function (t) {
              return Ji(e, t, i);
            })),
            5 === (o = s.join(' ')).split(s[0]).length ? s[0] : o
          );
        (s = (r + '').split(' ')),
          (o = {}),
          a.forEach(function (e, t) {
            return (o[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
          }),
          e.init(t, o, n);
      };
    });
    var br,
      _r,
      wr = {
        name: 'css',
        register: Hi,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, i, r, n) {
          var s,
            a,
            o,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            v,
            g,
            m,
            y,
            b,
            _,
            w,
            T,
            S,
            E = this._props,
            C = e.style,
            k = i.vars.startAt;
          for (d in (fi || Hi(), t))
            if (
              'autoRound' !== d &&
              ((a = t[d]), !se[d] || !Rt(d, t, i, r, e, n))
            )
              if (
                ((c = typeof a),
                (u = rr[d]),
                'function' === c && (c = typeof (a = a.call(i, r, e, n))),
                'string' === c && ~a.indexOf('random(') && (a = at(a)),
                u)
              )
                u(this, e, d, a, i) && (b = 1);
              else if ('--' === d.substr(0, 2))
                (s = (getComputedStyle(e).getPropertyValue(d) + '').trim()),
                  (a += ''),
                  (mt.lastIndex = 0),
                  mt.test(s) || ((h = Ue(s)), (p = Ue(a))),
                  p ? h !== p && (s = Zi(e, d, s, p) + p) : h && (a += h),
                  this.add(C, 'setProperty', s, a, r, n, 0, 0, d),
                  E.push(d);
              else if ('undefined' !== c) {
                if (
                  (k && d in k
                    ? ((s =
                        'function' == typeof k[d]
                          ? k[d].call(i, r, e, n)
                          : k[d]),
                      O(s) && ~s.indexOf('random(') && (s = at(s)),
                      Ue(s + '') || (s += x.units[d] || Ue(Ji(e, d)) || ''),
                      '=' === (s + '').charAt(1) && (s = Ji(e, d)))
                    : (s = Ji(e, d)),
                  (l = parseFloat(s)),
                  (f =
                    'string' === c && '=' === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (o = parseFloat(a)),
                  d in Ei &&
                    ('autoAlpha' === d &&
                      (1 === l &&
                        'hidden' === Ji(e, 'visibility') &&
                        o &&
                        (l = 0),
                      Ki(
                        this,
                        C,
                        'visibility',
                        l ? 'inherit' : 'hidden',
                        o ? 'inherit' : 'hidden',
                        !o
                      )),
                    'scale' !== d &&
                      'transform' !== d &&
                      ~(d = Ei[d]).indexOf(',') &&
                      (d = d.split(',')[0])),
                  (v = d in yi))
                )
                  if (
                    (g ||
                      (((m = e._gsap).renderTransform && !t.parseTransform) ||
                        ur(e, t.parseTransform),
                      (y = !1 !== t.smoothOrigin && m.smooth),
                      ((g = this._pt =
                        new ai(
                          this._pt,
                          C,
                          Bi,
                          0,
                          1,
                          m.renderTransform,
                          m,
                          0,
                          -1
                        )).dep = 1)),
                    'scale' === d)
                  )
                    (this._pt = new ai(
                      this._pt,
                      m,
                      'scaleY',
                      m.scaleY,
                      (f ? ge(m.scaleY, f + o) : o) - m.scaleY || 0
                    )),
                      E.push('scaleY', d),
                      (d += 'X');
                  else {
                    if ('transformOrigin' === d) {
                      (w = void 0),
                        (T = void 0),
                        (S = void 0),
                        (w = (_ = a).split(' ')),
                        (T = w[0]),
                        (S = w[1] || '50%'),
                        ('top' !== T &&
                          'bottom' !== T &&
                          'left' !== S &&
                          'right' !== S) ||
                          ((_ = T), (T = S), (S = _)),
                        (w[0] = tr[T] || T),
                        (w[1] = tr[S] || S),
                        (a = w.join(' ')),
                        m.svg
                          ? cr(e, a, 0, y, 0, this)
                          : ((p = parseFloat(a.split(' ')[2]) || 0) !==
                              m.zOrigin && Ki(this, m, 'zOrigin', m.zOrigin, p),
                            Ki(this, C, d, dr(s), dr(a)));
                      continue;
                    }
                    if ('svgOrigin' === d) {
                      cr(e, a, 1, y, 0, this);
                      continue;
                    }
                    if (d in sr) {
                      gr(this, m, d, l, f ? ge(l, f + a) : a);
                      continue;
                    }
                    if ('smoothOrigin' === d) {
                      Ki(this, m, 'smooth', m.smooth, a);
                      continue;
                    }
                    if ('force3D' === d) {
                      m[d] = a;
                      continue;
                    }
                    if ('transform' === d) {
                      yr(this, a, e);
                      continue;
                    }
                  }
                else d in C || (d = Vi(d) || d);
                if (
                  v ||
                  ((o || 0 === o) && (l || 0 === l) && !Si.test(a) && d in C)
                )
                  o || (o = 0),
                    (h = (s + '').substr((l + '').length)) !==
                      (p = Ue(a) || (d in x.units ? x.units[d] : h)) &&
                      (l = Zi(e, d, s, p)),
                    (this._pt = new ai(
                      this._pt,
                      v ? m : C,
                      d,
                      l,
                      (f ? ge(l, f + o) : o) - l,
                      v || ('px' !== p && 'zIndex' !== d) || !1 === t.autoRound
                        ? Ci
                        : Mi
                    )),
                    (this._pt.u = p || 0),
                    h !== p &&
                      '%' !== p &&
                      ((this._pt.b = s), (this._pt.r = Li));
                else if (d in C) er.call(this, e, d, s, f ? f + a : a);
                else {
                  if (!(d in e)) {
                    Z(d, a);
                    continue;
                  }
                  this.add(e, d, s || e[d], f ? f + a : a, r, n);
                }
                E.push(d);
              }
          b && si(this);
        },
        get: Ji,
        aliases: Ei,
        getSetter: function (e, t, i) {
          var r = Ei[t];
          return (
            r && r.indexOf(',') < 0 && (t = r),
            t in yi && t !== Fi && (e._gsap.x || Ji(e, 'x'))
              ? i && gi === i
                ? 'scale' === t
                  ? Ii
                  : zi
                : (gi = i || {}) && ('scale' === t ? ji : qi)
              : e.style && !I(e.style[t])
              ? Oi
              : ~t.indexOf('-')
              ? Di
              : Qt(e, t)
          );
        },
        core: {
          _removeProperty: Ui,
          _getMatrix: lr,
        },
      };
    (ui.utils.checkPrefix = Vi),
      (_r = pe(
        'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' +
          (br = 'rotation,rotationX,rotationY,skewX,skewY') +
          ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
        function (e) {
          yi[e] = 1;
        }
      )),
      pe(br, function (e) {
        (x.units[e] = 'deg'), (sr[e] = 1);
      }),
      (Ei[_r[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + br),
      pe(
        '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
        function (e) {
          var t = e.split(':');
          Ei[t[1]] = _r[t[0]];
        }
      ),
      pe(
        'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
        function (e) {
          x.units[e] = 'px';
        }
      ),
      ui.registerPlugin(wr);
    var Tr = ui.registerPlugin(wr) || ui;
    Tr.core.Tween;
    function xr(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    /*!
     * Observer 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Sr,
      Er,
      Cr,
      kr,
      Lr,
      Mr,
      Ar,
      Pr,
      Or,
      Dr,
      zr,
      Ir,
      jr = function () {
        return (
          Sr ||
          ('undefined' != typeof window &&
            (Sr = window.gsap) &&
            Sr.registerPlugin &&
            Sr)
        );
      },
      qr = 1,
      Br = [],
      Fr = [],
      Rr = [],
      Nr = Date.now,
      Gr = function (e, t) {
        return t;
      },
      Vr = function (e, t) {
        return ~Rr.indexOf(e) && Rr[Rr.indexOf(e) + 1][t];
      },
      Hr = function (e) {
        return !!~Dr.indexOf(e);
      },
      Yr = function (e, t, i, r, n) {
        return e.addEventListener(t, i, {
          passive: !r,
          capture: !!n,
        });
      },
      Xr = function (e, t, i, r) {
        return e.removeEventListener(t, i, !!r);
      },
      $r = function () {
        return (zr && zr.isPressed) || Fr.cache++;
      },
      Wr = function (e, t) {
        var i = function i(r) {
          if (r || 0 === r) {
            qr && (Cr.history.scrollRestoration = 'manual');
            var n = zr && zr.isPressed;
            (r = i.v = Math.round(r) || (zr && zr.iOS ? 1 : 0)),
              e(r),
              (i.cacheID = Fr.cache),
              n && Gr('ss', r);
          } else
            (t || Fr.cache !== i.cacheID || Gr('ref')) &&
              ((i.cacheID = Fr.cache), (i.v = e()));
          return i.v + i.offset;
        };
        return (i.offset = 0), e && i;
      },
      Ur = {
        s: 'scrollLeft',
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: Wr(function (e) {
          return arguments.length
            ? Cr.scrollTo(e, Kr.sc())
            : Cr.pageXOffset ||
                kr.scrollLeft ||
                Lr.scrollLeft ||
                Mr.scrollLeft ||
                0;
        }),
      },
      Kr = {
        s: 'scrollTop',
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: Ur,
        sc: Wr(function (e) {
          return arguments.length
            ? Cr.scrollTo(Ur.sc(), e)
            : Cr.pageYOffset ||
                kr.scrollTop ||
                Lr.scrollTop ||
                Mr.scrollTop ||
                0;
        }),
      },
      Qr = function (e) {
        return (
          Sr.utils.toArray(e)[0] ||
          ('string' == typeof e && !1 !== Sr.config().nullTargetWarn
            ? console.warn('Element not found:', e)
            : null)
        );
      },
      Zr = function (e, t) {
        var i = t.s,
          r = t.sc,
          n = Fr.indexOf(e),
          s = r === Kr.sc ? 1 : 2;
        return (
          !~n && (n = Fr.push(e) - 1),
          Fr[n + s] ||
            (Fr[n + s] =
              Wr(Vr(e, i), !0) ||
              (Hr(e)
                ? r
                : Wr(function (t) {
                    return arguments.length ? (e[i] = t) : e[i];
                  })))
        );
      },
      Jr = function (e, t, i) {
        var r = e,
          n = e,
          s = Nr(),
          a = s,
          o = t || 50,
          l = Math.max(500, 3 * o),
          c = function (e, t) {
            var l = Nr();
            t || l - s > o
              ? ((n = r), (r = e), (a = s), (s = l))
              : i
              ? (r += e)
              : (r = n + ((e - n) / (l - a)) * (s - a));
          };
        return {
          update: c,
          reset: function () {
            (n = r = i ? 0 : r), (a = s = 0);
          },
          getVelocity: function (e) {
            var t = a,
              o = n,
              u = Nr();
            return (
              (e || 0 === e) && e !== r && c(e),
              s === a || u - a > l
                ? 0
                : ((r + (i ? o : -o)) / ((i ? u : s) - t)) * 1e3
            );
          },
        };
      },
      en = function (e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      tn = function (e) {
        var t = Math.max.apply(Math, e),
          i = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(i) ? t : i;
      },
      rn = function () {
        var e, t, i, r;
        (Or = Sr.core.globals().ScrollTrigger) &&
          Or.core &&
          ((e = Or.core),
          (t = e.bridge || {}),
          (i = e._scrollers),
          (r = e._proxies),
          i.push.apply(i, Fr),
          r.push.apply(r, Rr),
          (Fr = i),
          (Rr = r),
          (Gr = function (e, i) {
            return t[e](i);
          }));
      },
      nn = function (e) {
        return (
          (Sr = e || jr()) &&
            'undefined' != typeof document &&
            document.body &&
            ((Cr = window),
            (kr = document),
            (Lr = kr.documentElement),
            (Mr = kr.body),
            (Dr = [Cr, kr, Lr, Mr]),
            Sr.utils.clamp,
            (Pr = 'onpointerenter' in Mr ? 'pointer' : 'mouse'),
            (Ar = sn.isTouch =
              Cr.matchMedia &&
              Cr.matchMedia('(hover: none), (pointer: coarse)').matches
                ? 1
                : 'ontouchstart' in Cr ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
            (Ir = sn.eventTypes =
              (
                'ontouchstart' in Lr
                  ? 'touchstart,touchmove,touchcancel,touchend'
                  : 'onpointerdown' in Lr
                  ? 'pointerdown,pointermove,pointercancel,pointerup'
                  : 'mousedown,mousemove,mouseup,mouseup'
              ).split(',')),
            setTimeout(function () {
              return (qr = 0);
            }, 500),
            rn(),
            (Er = 1)),
          Er
        );
      };
    (Ur.op = Kr), (Fr.cache = 0);
    var sn = (function () {
      function e(e) {
        this.init(e);
      }
      var t, i, r;
      return (
        (e.prototype.init = function (e) {
          Er || nn(Sr) || console.warn('Please gsap.registerPlugin(Observer)'),
            Or || rn();
          var t = e.tolerance,
            i = e.dragMinimum,
            r = e.type,
            n = e.target,
            s = e.lineHeight,
            a = e.debounce,
            o = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            d = e.wheelSpeed,
            h = e.event,
            p = e.onDragStart,
            f = e.onDragEnd,
            v = e.onDrag,
            g = e.onPress,
            m = e.onRelease,
            y = e.onRight,
            b = e.onLeft,
            _ = e.onUp,
            w = e.onDown,
            T = e.onChangeX,
            x = e.onChangeY,
            S = e.onChange,
            E = e.onToggleX,
            C = e.onToggleY,
            k = e.onHover,
            L = e.onHoverEnd,
            M = e.onMove,
            A = e.ignoreCheck,
            P = e.isNormalizer,
            O = e.onGestureStart,
            D = e.onGestureEnd,
            z = e.onWheel,
            I = e.onEnable,
            j = e.onDisable,
            q = e.onClick,
            B = e.scrollSpeed,
            F = e.capture,
            R = e.allowClicks,
            N = e.lockAxis,
            G = e.onLockAxis;
          (this.target = n = Qr(n) || Lr),
            (this.vars = e),
            u && (u = Sr.utils.toArray(u)),
            (t = t || 0),
            (i = i || 0),
            (d = d || 1),
            (B = B || 1),
            (r = r || 'wheel,touch,pointer'),
            (a = !1 !== a),
            s || (s = parseFloat(Cr.getComputedStyle(Mr).lineHeight) || 22);
          var V,
            H,
            Y,
            X,
            $,
            W,
            U,
            K = this,
            Q = 0,
            Z = 0,
            J = Zr(n, Ur),
            ee = Zr(n, Kr),
            te = J(),
            ie = ee(),
            re =
              ~r.indexOf('touch') &&
              !~r.indexOf('pointer') &&
              'pointerdown' === Ir[0],
            ne = Hr(n),
            se = n.ownerDocument || kr,
            ae = [0, 0, 0],
            oe = [0, 0, 0],
            le = 0,
            ce = function () {
              return (le = Nr());
            },
            ue = function (e, t) {
              return (
                ((K.event = e) && u && ~u.indexOf(e.target)) ||
                (t && re && 'touch' !== e.pointerType) ||
                (A && A(e, t))
              );
            },
            de = function () {
              var e = (K.deltaX = tn(ae)),
                i = (K.deltaY = tn(oe)),
                r = Math.abs(e) >= t,
                n = Math.abs(i) >= t;
              S && (r || n) && S(K, e, i, ae, oe),
                r &&
                  (y && K.deltaX > 0 && y(K),
                  b && K.deltaX < 0 && b(K),
                  T && T(K),
                  E && K.deltaX < 0 != Q < 0 && E(K),
                  (Q = K.deltaX),
                  (ae[0] = ae[1] = ae[2] = 0)),
                n &&
                  (w && K.deltaY > 0 && w(K),
                  _ && K.deltaY < 0 && _(K),
                  x && x(K),
                  C && K.deltaY < 0 != Z < 0 && C(K),
                  (Z = K.deltaY),
                  (oe[0] = oe[1] = oe[2] = 0)),
                (X || Y) &&
                  (M && M(K),
                  G && W && G(K),
                  Y && (v(K), (Y = !1)),
                  (X = W = !1)),
                $ && (z(K), ($ = !1)),
                (V = 0);
            },
            he = function (e, t, i) {
              (ae[i] += e),
                (oe[i] += t),
                K._vx.update(e),
                K._vy.update(t),
                a ? V || (V = requestAnimationFrame(de)) : de();
            },
            pe = function (e, t) {
              'y' !== U && ((ae[2] += e), K._vx.update(e, !0)),
                'x' !== U && ((oe[2] += t), K._vy.update(t, !0)),
                N &&
                  !U &&
                  ((K.axis = U = Math.abs(e) > Math.abs(t) ? 'x' : 'y'),
                  (W = !0)),
                a ? V || (V = requestAnimationFrame(de)) : de();
            },
            fe = function (e) {
              if (!ue(e, 1)) {
                var t = (e = en(e, o)).clientX,
                  r = e.clientY,
                  n = t - K.x,
                  s = r - K.y,
                  a = K.isDragging;
                (K.x = t),
                  (K.y = r),
                  (a ||
                    Math.abs(K.startX - t) >= i ||
                    Math.abs(K.startY - r) >= i) &&
                    (v && (Y = !0),
                    a || (K.isDragging = !0),
                    pe(n, s),
                    a || (p && p(K)));
              }
            },
            ve = (K.onPress = function (e) {
              ue(e, 1) ||
                ((K.axis = U = null),
                H.pause(),
                (K.isPressed = !0),
                (e = en(e)),
                (Q = Z = 0),
                (K.startX = K.x = e.clientX),
                (K.startY = K.y = e.clientY),
                K._vx.reset(),
                K._vy.reset(),
                Yr(P ? n : se, Ir[1], fe, o, !0),
                (K.deltaX = K.deltaY = 0),
                g && g(K));
            }),
            ge = function (e) {
              if (!ue(e, 1)) {
                Xr(P ? n : se, Ir[1], fe, !0);
                var t =
                    K.isDragging &&
                    (Math.abs(K.x - K.startX) > 3 ||
                      Math.abs(K.y - K.startY) > 3),
                  i = en(e);
                t ||
                  (K._vx.reset(),
                  K._vy.reset(),
                  o &&
                    R &&
                    Sr.delayedCall(0.08, function () {
                      if (Nr() - le > 300 && !e.defaultPrevented)
                        if (e.target.click) e.target.click();
                        else if (se.createEvent) {
                          var t = se.createEvent('MouseEvents');
                          t.initMouseEvent(
                            'click',
                            !0,
                            !0,
                            Cr,
                            1,
                            i.screenX,
                            i.screenY,
                            i.clientX,
                            i.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            e.target.dispatchEvent(t);
                        }
                    })),
                  (K.isDragging = K.isGesturing = K.isPressed = !1),
                  l && !P && H.restart(!0),
                  f && t && f(K),
                  m && m(K, t);
              }
            },
            me = function (e) {
              return (
                e.touches &&
                e.touches.length > 1 &&
                (K.isGesturing = !0) &&
                O(e, K.isDragging)
              );
            },
            ye = function () {
              return (K.isGesturing = !1) || D(K);
            },
            be = function (e) {
              if (!ue(e)) {
                var t = J(),
                  i = ee();
                he((t - te) * B, (i - ie) * B, 1),
                  (te = t),
                  (ie = i),
                  l && H.restart(!0);
              }
            },
            _e = function (e) {
              if (!ue(e)) {
                (e = en(e, o)), z && ($ = !0);
                var t =
                  (1 === e.deltaMode
                    ? s
                    : 2 === e.deltaMode
                    ? Cr.innerHeight
                    : 1) * d;
                he(e.deltaX * t, e.deltaY * t, 0), l && !P && H.restart(!0);
              }
            },
            we = function (e) {
              if (!ue(e)) {
                var t = e.clientX,
                  i = e.clientY,
                  r = t - K.x,
                  n = i - K.y;
                (K.x = t), (K.y = i), (X = !0), (r || n) && pe(r, n);
              }
            },
            Te = function (e) {
              (K.event = e), k(K);
            },
            xe = function (e) {
              (K.event = e), L(K);
            },
            Se = function (e) {
              return ue(e) || (en(e, o) && q(K));
            };
          (H = K._dc =
            Sr.delayedCall(c || 0.25, function () {
              K._vx.reset(), K._vy.reset(), H.pause(), l && l(K);
            }).pause()),
            (K.deltaX = K.deltaY = 0),
            (K._vx = Jr(0, 50, !0)),
            (K._vy = Jr(0, 50, !0)),
            (K.scrollX = J),
            (K.scrollY = ee),
            (K.isDragging = K.isGesturing = K.isPressed = !1),
            (K.enable = function (e) {
              return (
                K.isEnabled ||
                  (Yr(ne ? se : n, 'scroll', $r),
                  r.indexOf('scroll') >= 0 &&
                    Yr(ne ? se : n, 'scroll', be, o, F),
                  r.indexOf('wheel') >= 0 && Yr(n, 'wheel', _e, o, F),
                  ((r.indexOf('touch') >= 0 && Ar) ||
                    r.indexOf('pointer') >= 0) &&
                    (Yr(n, Ir[0], ve, o, F),
                    Yr(se, Ir[2], ge),
                    Yr(se, Ir[3], ge),
                    R && Yr(n, 'click', ce, !1, !0),
                    q && Yr(n, 'click', Se),
                    O && Yr(se, 'gesturestart', me),
                    D && Yr(se, 'gestureend', ye),
                    k && Yr(n, Pr + 'enter', Te),
                    L && Yr(n, Pr + 'leave', xe),
                    M && Yr(n, Pr + 'move', we)),
                  (K.isEnabled = !0),
                  e && e.type && ve(e),
                  I && I(K)),
                K
              );
            }),
            (K.disable = function () {
              K.isEnabled &&
                (Br.filter(function (e) {
                  return e !== K && Hr(e.target);
                }).length || Xr(ne ? se : n, 'scroll', $r),
                K.isPressed &&
                  (K._vx.reset(), K._vy.reset(), Xr(P ? n : se, Ir[1], fe, !0)),
                Xr(ne ? se : n, 'scroll', be, F),
                Xr(n, 'wheel', _e, F),
                Xr(n, Ir[0], ve, F),
                Xr(se, Ir[2], ge),
                Xr(se, Ir[3], ge),
                Xr(n, 'click', ce, !0),
                Xr(n, 'click', Se),
                Xr(se, 'gesturestart', me),
                Xr(se, 'gestureend', ye),
                Xr(n, Pr + 'enter', Te),
                Xr(n, Pr + 'leave', xe),
                Xr(n, Pr + 'move', we),
                (K.isEnabled = K.isPressed = K.isDragging = !1),
                j && j(K));
            }),
            (K.kill = function () {
              K.disable();
              var e = Br.indexOf(K);
              e >= 0 && Br.splice(e, 1), zr === K && (zr = 0);
            }),
            Br.push(K),
            P && Hr(n) && (zr = K),
            K.enable(h);
        }),
        (t = e),
        (i = [
          {
            key: 'velocityX',
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: 'velocityY',
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]) && xr(t.prototype, i),
        r && xr(t, r),
        e
      );
    })();
    (sn.version = '3.10.4'),
      (sn.create = function (e) {
        return new sn(e);
      }),
      (sn.register = nn),
      (sn.getAll = function () {
        return Br.slice();
      }),
      (sn.getById = function (e) {
        return Br.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      jr() && Sr.registerPlugin(sn);
    /*!
     * ScrollTrigger 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var an,
      on,
      ln,
      cn,
      un,
      dn,
      hn,
      pn,
      fn,
      vn,
      gn,
      mn,
      yn,
      bn,
      _n,
      wn,
      Tn,
      xn,
      Sn,
      En,
      Cn,
      kn,
      Ln,
      Mn,
      An,
      Pn,
      On,
      Dn,
      zn,
      In,
      jn,
      qn,
      Bn,
      Fn = 1,
      Rn = Date.now,
      Nn = Rn(),
      Gn = 0,
      Vn = 0,
      Hn = function () {
        return (bn = 1);
      },
      Yn = function () {
        return (bn = 0);
      },
      Xn = function (e) {
        return e;
      },
      $n = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      Wn = function () {
        return 'undefined' != typeof window;
      },
      Un = function () {
        return an || (Wn() && (an = window.gsap) && an.registerPlugin && an);
      },
      Kn = function (e) {
        return !!~hn.indexOf(e);
      },
      Qn = function (e) {
        return (
          Vr(e, 'getBoundingClientRect') ||
          (Kn(e)
            ? function () {
                return (
                  (ea.width = ln.innerWidth), (ea.height = ln.innerHeight), ea
                );
              }
            : function () {
                return ps(e);
              })
        );
      },
      Zn = function (e, t) {
        var i = t.s,
          r = t.d2,
          n = t.d,
          s = t.a;
        return (i = 'scroll' + r) && (s = Vr(e, i))
          ? s() - Qn(e)()[n]
          : Kn(e)
          ? (un[i] || dn[i]) -
            (ln['inner' + r] || un['client' + r] || dn['client' + r])
          : e[i] - e['offset' + r];
      },
      Jn = function (e, t) {
        for (var i = 0; i < Sn.length; i += 3)
          (!t || ~t.indexOf(Sn[i + 1])) && e(Sn[i], Sn[i + 1], Sn[i + 2]);
      },
      es = function (e) {
        return 'string' == typeof e;
      },
      ts = function (e) {
        return 'function' == typeof e;
      },
      is = function (e) {
        return 'number' == typeof e;
      },
      rs = function (e) {
        return 'object' == typeof e;
      },
      ns = function (e) {
        return ts(e) && e();
      },
      ss = function (e, t) {
        return function () {
          var i = ns(e),
            r = ns(t);
          return function () {
            ns(i), ns(r);
          };
        };
      },
      as = function (e, t, i) {
        return e && e.progress(t ? 0 : 1) && i && e.pause();
      },
      os = function (e, t) {
        if (e.enabled) {
          var i = t(e);
          i && i.totalTime && (e.callbackAnimation = i);
        }
      },
      ls = Math.abs,
      cs = 'padding',
      us = 'px',
      ds = function (e) {
        return ln.getComputedStyle(e);
      },
      hs = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
      },
      ps = function (e, t) {
        var i =
            t &&
            'matrix(1, 0, 0, 1, 0, 0)' !== ds(e)[_n] &&
            an
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          r = e.getBoundingClientRect();
        return i && i.progress(0).kill(), r;
      },
      fs = function (e, t) {
        var i = t.d2;
        return e['offset' + i] || e['client' + i] || 0;
      },
      vs = function (e) {
        var t,
          i = [],
          r = e.labels,
          n = e.duration();
        for (t in r) i.push(r[t] / n);
        return i;
      },
      gs = function (e) {
        var t = an.utils.snap(e),
          i =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return i
          ? function (e, r, n) {
              var s;
              if ((void 0 === n && (n = 0.001), !r)) return t(e);
              if (r > 0) {
                for (e -= n, s = 0; s < i.length; s++)
                  if (i[s] >= e) return i[s];
                return i[s - 1];
              }
              for (s = i.length, e += n; s--; ) if (i[s] <= e) return i[s];
              return i[0];
            }
          : function (i, r, n) {
              void 0 === n && (n = 0.001);
              var s = t(i);
              return !r || Math.abs(s - i) < n || s - i < 0 == r < 0
                ? s
                : t(r < 0 ? i - e : i + e);
            };
      },
      ms = function (e, t, i, r) {
        return i.split(',').forEach(function (i) {
          return e(t, i, r);
        });
      },
      ys = function (e, t, i, r, n) {
        return e.addEventListener(t, i, {
          passive: !r,
          capture: !!n,
        });
      },
      bs = function (e, t, i, r) {
        return e.removeEventListener(t, i, !!r);
      },
      _s = function (e, t, i) {
        return i && i.wheelHandler && e(t, 'wheel', i);
      },
      ws = {
        startColor: 'green',
        endColor: 'red',
        indent: 0,
        fontSize: '16px',
        fontWeight: 'normal',
      },
      Ts = {
        toggleActions: 'play',
        anticipatePin: 0,
      },
      xs = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1,
      },
      Ss = function (e, t) {
        if (es(e)) {
          var i = e.indexOf('='),
            r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
          ~i &&
            (e.indexOf('%') > i && (r *= t / 100), (e = e.substr(0, i - 1))),
            (e =
              r +
              (e in xs
                ? xs[e] * t
                : ~e.indexOf('%')
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      Es = function (e, t, i, r, n, s, a, o) {
        var l = n.startColor,
          c = n.endColor,
          u = n.fontSize,
          d = n.indent,
          h = n.fontWeight,
          p = cn.createElement('div'),
          f = Kn(i) || 'fixed' === Vr(i, 'pinType'),
          v = -1 !== e.indexOf('scroller'),
          g = f ? dn : i,
          m = -1 !== e.indexOf('start'),
          y = m ? l : c,
          b =
            'border-color:' +
            y +
            ';font-size:' +
            u +
            ';color:' +
            y +
            ';font-weight:' +
            h +
            ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
        return (
          (b += 'position:' + ((v || o) && f ? 'fixed;' : 'absolute;')),
          (v || o || !f) &&
            (b +=
              (r === Kr ? 'right' : 'bottom') +
              ':' +
              (s + parseFloat(d)) +
              'px;'),
          a &&
            (b +=
              'box-sizing:border-box;text-align:left;width:' +
              a.offsetWidth +
              'px;'),
          (p._isStart = m),
          p.setAttribute(
            'class',
            'gsap-marker-' + e + (t ? ' marker-' + t : '')
          ),
          (p.style.cssText = b),
          (p.innerText = t || 0 === t ? e + '-' + t : e),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p['offset' + r.op.d2]),
          Cs(p, 0, r, m),
          p
        );
      },
      Cs = function (e, t, i, r) {
        var n = {
            display: 'block',
          },
          s = i[r ? 'os2' : 'p2'],
          a = i[r ? 'p2' : 'os2'];
        (e._isFlipped = r),
          (n[i.a + 'Percent'] = r ? -100 : 0),
          (n[i.a] = r ? '1px' : 0),
          (n['border' + s + 'Width'] = 1),
          (n['border' + a + 'Width'] = 0),
          (n[i.p] = t + 'px'),
          an.set(e, n);
      },
      ks = [],
      Ls = {},
      Ms = function () {
        return Rn() - Gn > 34 && $s();
      },
      As = function () {
        (!Ln || !Ln.isPressed || Ln.startX > dn.clientWidth) &&
          (Fr.cache++,
          zn || (zn = requestAnimationFrame($s)),
          Gn || Bs('scrollStart'),
          (Gn = Rn()));
      },
      Ps = function () {
        (Pn = ln.innerWidth), (An = ln.innerHeight);
      },
      Os = function () {
        Fr.cache++,
          !yn &&
            !kn &&
            !cn.fullscreenElement &&
            !cn.webkitFullscreenElement &&
            (!Mn ||
              Pn !== ln.innerWidth ||
              Math.abs(ln.innerHeight - An) > 0.25 * ln.innerHeight) &&
            pn.restart(!0);
      },
      Ds = {},
      zs = [],
      Is = [],
      js = function (e) {
        var t,
          i = an.ticker.frame,
          r = [],
          n = 0;
        if (jn !== i || Fn) {
          for (Ns(); n < Is.length; n += 4)
            (t = ln.matchMedia(Is[n]).matches) !== Is[n + 3] &&
              ((Is[n + 3] = t),
              t ? r.push(n) : Ns(1, Is[n]) || (ts(Is[n + 2]) && Is[n + 2]()));
          for (Rs(), n = 0; n < r.length; n++)
            (t = r[n]), (In = Is[t]), (Is[t + 2] = Is[t + 1](e));
          (In = 0), on && Hs(0, 1), (jn = i), Bs('matchMedia');
        }
      },
      qs = function e() {
        return bs(sa, 'scrollEnd', e) || Hs(!0);
      },
      Bs = function (e) {
        return (
          (Ds[e] &&
            Ds[e].map(function (e) {
              return e();
            })) ||
          zs
        );
      },
      Fs = [],
      Rs = function (e) {
        for (var t = 0; t < Fs.length; t += 5)
          (e && Fs[t + 4] !== e) ||
            ((Fs[t].style.cssText = Fs[t + 1]),
            Fs[t].getBBox && Fs[t].setAttribute('transform', Fs[t + 2] || ''),
            (Fs[t + 3].uncache = 1));
      },
      Ns = function (e, t) {
        var i;
        for (wn = 0; wn < ks.length; wn++)
          (i = ks[wn]), (t && i.media !== t) || (e ? i.kill(1) : i.revert());
        t && Rs(t), t || Bs('revert');
      },
      Gs = function () {
        return (
          Fr.cache++ &&
          Fr.forEach(function (e) {
            return 'function' == typeof e && (e.rec = 0);
          })
        );
      },
      Vs = 0,
      Hs = function (e, t) {
        if (!Gn || e) {
          qn = !0;
          var i = Bs('refreshInit');
          En && sa.sort(),
            t || Ns(),
            ks.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            ks.forEach(function (e) {
              return (
                'max' === e.vars.end &&
                e.setPositions(e.start, Zn(e.scroller, e._dir))
              );
            }),
            i.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            Gs(),
            pn.pause(),
            Vs++,
            (qn = !1),
            Bs('refresh');
        } else ys(sa, 'scrollEnd', qs);
      },
      Ys = 0,
      Xs = 1,
      $s = function () {
        if (!qn) {
          (sa.isUpdating = !0), Bn && Bn.update(0);
          var e = ks.length,
            t = Rn(),
            i = t - Nn >= 50,
            r = e && ks[0].scroll();
          if (
            ((Xs = Ys > r ? -1 : 1),
            (Ys = r),
            i &&
              (Gn && !bn && t - Gn > 200 && ((Gn = 0), Bs('scrollEnd')),
              (gn = Nn),
              (Nn = t)),
            Xs < 0)
          ) {
            for (wn = e; wn-- > 0; ) ks[wn] && ks[wn].update(0, i);
            Xs = 1;
          } else for (wn = 0; wn < e; wn++) ks[wn] && ks[wn].update(0, i);
          sa.isUpdating = !1;
        }
        zn = 0;
      },
      Ws = [
        'left',
        'top',
        'bottom',
        'right',
        'marginBottom',
        'marginRight',
        'marginTop',
        'marginLeft',
        'display',
        'flexShrink',
        'float',
        'zIndex',
        'gridColumnStart',
        'gridColumnEnd',
        'gridRowStart',
        'gridRowEnd',
        'gridArea',
        'justifySelf',
        'alignSelf',
        'placeSelf',
        'order',
      ],
      Us = Ws.concat([
        'width',
        'height',
        'boxSizing',
        'maxWidth',
        'maxHeight',
        'position',
        'margin',
        cs,
        cs + 'Top',
        cs + 'Right',
        cs + 'Bottom',
        cs + 'Left',
      ]),
      Ks = function (e, t, i, r) {
        if (e.parentNode !== t) {
          for (var n, s = Ws.length, a = t.style, o = e.style; s--; )
            a[(n = Ws[s])] = i[n];
          (a.position = 'absolute' === i.position ? 'absolute' : 'relative'),
            'inline' === i.display && (a.display = 'inline-block'),
            (o.bottom = o.right = a.flexBasis = 'auto'),
            (a.overflow = 'visible'),
            (a.boxSizing = 'border-box'),
            (a.width = fs(e, Ur) + us),
            (a.height = fs(e, Kr) + us),
            (a[cs] = o.margin = o.top = o.left = '0'),
            Zs(r),
            (o.width = o.maxWidth = i.width),
            (o.height = o.maxHeight = i.height),
            (o[cs] = i[cs]),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
        }
      },
      Qs = /([A-Z])/g,
      Zs = function (e) {
        if (e) {
          var t,
            i,
            r = e.t.style,
            n = e.length,
            s = 0;
          for ((e.t._gsap || an.core.getCache(e.t)).uncache = 1; s < n; s += 2)
            (i = e[s + 1]),
              (t = e[s]),
              i
                ? (r[t] = i)
                : r[t] && r.removeProperty(t.replace(Qs, '-$1').toLowerCase());
        }
      },
      Js = function (e) {
        for (var t = Us.length, i = e.style, r = [], n = 0; n < t; n++)
          r.push(Us[n], i[Us[n]]);
        return (r.t = e), r;
      },
      ea = {
        left: 0,
        top: 0,
      },
      ta = function (e, t, i, r, n, s, a, o, l, c, u, d, h) {
        ts(e) && (e = e(o)),
          es(e) &&
            'max' === e.substr(0, 3) &&
            (e = d + ('=' === e.charAt(4) ? Ss('0' + e.substr(3), i) : 0));
        var p,
          f,
          v,
          g = h ? h.time() : 0;
        if ((h && h.seek(0), is(e))) a && Cs(a, i, r, !0);
        else {
          ts(t) && (t = t(o));
          var m,
            y,
            b,
            _,
            w = e.split(' ');
          (v = Qr(t) || dn),
            ((m = ps(v) || {}) && (m.left || m.top)) ||
              'none' !== ds(v).display ||
              ((_ = v.style.display),
              (v.style.display = 'block'),
              (m = ps(v)),
              _ ? (v.style.display = _) : v.style.removeProperty('display')),
            (y = Ss(w[0], m[r.d])),
            (b = Ss(w[1] || '0', i)),
            (e = m[r.p] - l[r.p] - c + y + n - b),
            a && Cs(a, b, r, i - b < 20 || (a._isStart && b > 20)),
            (i -= i - b);
        }
        if (s) {
          var T = e + i,
            x = s._isStart;
          (p = 'scroll' + r.d2),
            Cs(
              s,
              T,
              r,
              (x && T > 20) ||
                (!x && (u ? Math.max(dn[p], un[p]) : s.parentNode[p]) <= T + 1)
            ),
            u &&
              ((l = ps(a)),
              u && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + us));
        }
        return (
          h &&
            v &&
            ((p = ps(v)),
            h.seek(d),
            (f = ps(v)),
            (h._caScrollDist = p[r.p] - f[r.p]),
            (e = (e / h._caScrollDist) * d)),
          h && h.seek(g),
          h ? e : Math.round(e)
        );
      },
      ia = /(webkit|moz|length|cssText|inset)/i,
      ra = function (e, t, i, r) {
        if (e.parentNode !== t) {
          var n,
            s,
            a = e.style;
          if (t === dn) {
            for (n in ((e._stOrig = a.cssText), (s = ds(e))))
              +n ||
                ia.test(n) ||
                !s[n] ||
                'string' != typeof a[n] ||
                '0' === n ||
                (a[n] = s[n]);
            (a.top = i), (a.left = r);
          } else a.cssText = e._stOrig;
          (an.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      },
      na = function (e, t) {
        var i,
          r,
          n = Zr(e, t),
          s = '_scroll' + t.p2,
          a = function t(a, o, l, c, u) {
            var d = t.tween,
              h = o.onComplete,
              p = {};
            return (
              (l = l || n()),
              (u = (c && u) || 0),
              (c = c || a - l),
              d && d.kill(),
              (i = Math.round(l)),
              (o[s] = a),
              (o.modifiers = p),
              (p[s] = function (e) {
                return (
                  (e = $n(n())) !== i &&
                  e !== r &&
                  Math.abs(e - i) > 2 &&
                  Math.abs(e - r) > 2
                    ? (d.kill(), (t.tween = 0))
                    : (e = l + c * d.ratio + u * d.ratio * d.ratio),
                  (r = i),
                  (i = $n(e))
                );
              }),
              (o.onComplete = function () {
                (t.tween = 0), h && h.call(d);
              }),
              (d = t.tween = an.to(e, o))
            );
          };
        return (
          (e[s] = n),
          (n.wheelHandler = function () {
            return a.tween && a.tween.kill() && (a.tween = 0);
          }),
          ys(e, 'wheel', n.wheelHandler),
          a
        );
      },
      sa = (function () {
        function e(t, i) {
          on ||
            e.register(an) ||
            console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
            this.init(t, i);
        }
        return (
          (e.prototype.init = function (t, i) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              Vn)
            ) {
              var r,
                n,
                s,
                a,
                o,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                v,
                g,
                m,
                y,
                b,
                _,
                w,
                T,
                x,
                S,
                E,
                C,
                k,
                L,
                M,
                A,
                P,
                O,
                D,
                z,
                I,
                j,
                q,
                B,
                F,
                R,
                N,
                G,
                V,
                H = (t = hs(
                  es(t) || is(t) || t.nodeType
                    ? {
                        trigger: t,
                      }
                    : t,
                  Ts
                )),
                Y = H.onUpdate,
                X = H.toggleClass,
                $ = H.id,
                W = H.onToggle,
                U = H.onRefresh,
                K = H.scrub,
                Q = H.trigger,
                Z = H.pin,
                J = H.pinSpacing,
                ee = H.invalidateOnRefresh,
                te = H.anticipatePin,
                ie = H.onScrubComplete,
                re = H.onSnapComplete,
                ne = H.once,
                se = H.snap,
                ae = H.pinReparent,
                oe = H.pinSpacer,
                le = H.containerAnimation,
                ce = H.fastScrollEnd,
                ue = H.preventOverlaps,
                de =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? Ur
                    : Kr,
                he = !K && 0 !== K,
                pe = Qr(t.scroller || ln),
                fe = an.core.getCache(pe),
                ve = Kn(pe),
                ge =
                  'fixed' ===
                  ('pinType' in t
                    ? t.pinType
                    : Vr(pe, 'pinType') || (ve && 'fixed')),
                me = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                ye = he && t.toggleActions.split(' '),
                be = 'markers' in t ? t.markers : Ts.markers,
                _e = ve
                  ? 0
                  : parseFloat(ds(pe)['border' + de.p2 + 'Width']) || 0,
                we = this,
                Te =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(we);
                  },
                xe = (function (e, t, i) {
                  var r = i.d,
                    n = i.d2,
                    s = i.a;
                  return (s = Vr(e, 'getBoundingClientRect'))
                    ? function () {
                        return s()[r];
                      }
                    : function () {
                        return (t ? ln['inner' + n] : e['client' + n]) || 0;
                      };
                })(pe, ve, de),
                Se = (function (e, t) {
                  return !t || ~Rr.indexOf(e)
                    ? Qn(e)
                    : function () {
                        return ea;
                      };
                })(pe, ve),
                Ee = 0,
                Ce = 0,
                ke = Zr(pe, de);
              if (
                ((we.media = In),
                (we._dir = de),
                (te *= 45),
                (we.scroller = pe),
                (we.scroll = le ? le.time.bind(le) : ke),
                (a = ke()),
                (we.vars = t),
                (i = i || t.animation),
                'refreshPriority' in t &&
                  ((En = 1), -9999 === t.refreshPriority && (Bn = we)),
                (fe.tweenScroll = fe.tweenScroll || {
                  top: na(pe, Kr),
                  left: na(pe, Ur),
                }),
                (we.tweenTo = r = fe.tweenScroll[de.p]),
                (we.scrubDuration = function (e) {
                  (D = is(e) && e)
                    ? O
                      ? O.duration(e)
                      : (O = an.to(i, {
                          ease: 'expo',
                          totalProgress: '+=0.001',
                          duration: D,
                          paused: !0,
                          onComplete: function () {
                            return ie && ie(we);
                          },
                        }))
                    : (O && O.progress(1).kill(), (O = 0));
                }),
                i &&
                  ((i.vars.lazy = !1),
                  i._initted ||
                    (!1 !== i.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      i.render(0, !0, !0)),
                  (we.animation = i.pause()),
                  (i.scrollTrigger = we),
                  we.scrubDuration(K),
                  (A = 0),
                  $ || ($ = i.vars.id)),
                ks.push(we),
                se &&
                  ((rs(se) && !se.push) ||
                    (se = {
                      snapTo: se,
                    }),
                  'scrollBehavior' in dn.style &&
                    an.set(ve ? [dn, un] : pe, {
                      scrollBehavior: 'auto',
                    }),
                  (s = ts(se.snapTo)
                    ? se.snapTo
                    : 'labels' === se.snapTo
                    ? (function (e) {
                        return function (t) {
                          return an.utils.snap(vs(e), t);
                        };
                      })(i)
                    : 'labelsDirectional' === se.snapTo
                    ? ((N = i),
                      function (e, t) {
                        return gs(vs(N))(e, t.direction);
                      })
                    : !1 !== se.directional
                    ? function (e, t) {
                        return gs(se.snapTo)(
                          e,
                          Rn() - Ce < 500 ? 0 : t.direction
                        );
                      }
                    : an.utils.snap(se.snapTo)),
                  (z = se.duration || {
                    min: 0.1,
                    max: 2,
                  }),
                  (z = rs(z) ? vn(z.min, z.max) : vn(z, z)),
                  (I = an
                    .delayedCall(se.delay || D / 2 || 0.1, function () {
                      var e = ke(),
                        t = Rn() - Ce < 500,
                        n = r.tween;
                      if (
                        !(t || Math.abs(we.getVelocity()) < 10) ||
                        n ||
                        bn ||
                        Ee === e
                      )
                        we.isActive && Ee !== e && I.restart(!0);
                      else {
                        var a = (e - l) / v,
                          o = i && !he ? i.totalProgress() : a,
                          u = t ? 0 : ((o - P) / (Rn() - gn)) * 1e3 || 0,
                          d = an.utils.clamp(
                            -a,
                            1 - a,
                            (ls(u / 2) * u) / 0.185
                          ),
                          h = a + (!1 === se.inertia ? 0 : d),
                          p = vn(0, 1, s(h, we)),
                          f = Math.round(l + p * v),
                          g = se,
                          m = g.onStart,
                          y = g.onInterrupt,
                          b = g.onComplete;
                        if (e <= c && e >= l && f !== e) {
                          if (n && !n._initted && n.data <= ls(f - e)) return;
                          !1 === se.inertia && (d = p - a),
                            r(
                              f,
                              {
                                duration: z(
                                  ls(
                                    (0.185 * Math.max(ls(h - o), ls(p - o))) /
                                      u /
                                      0.05 || 0
                                  )
                                ),
                                ease: se.ease || 'power3',
                                data: ls(f - e),
                                onInterrupt: function () {
                                  return I.restart(!0) && y && y(we);
                                },
                                onComplete: function () {
                                  we.update(),
                                    (Ee = ke()),
                                    (A = P =
                                      i && !he
                                        ? i.totalProgress()
                                        : we.progress),
                                    re && re(we),
                                    b && b(we);
                                },
                              },
                              e,
                              d * v,
                              f - e - d * v
                            ),
                            m && m(we, r.tween);
                        }
                      }
                    })
                    .pause())),
                $ && (Ls[$] = we),
                (R =
                  (Q = we.trigger = Qr(Q || Z)) &&
                  Q._gsap &&
                  Q._gsap.stRevert) && (R = R(we)),
                (Z = !0 === Z ? Q : Qr(Z)),
                es(X) &&
                  (X = {
                    targets: Q,
                    className: X,
                  }),
                Z &&
                  (!1 === J ||
                    'margin' === J ||
                    (J = !(!J && 'flex' === ds(Z.parentNode).display) && cs),
                  (we.pin = Z),
                  !1 !== t.force3D &&
                    an.set(Z, {
                      force3D: !0,
                    }),
                  (n = an.core.getCache(Z)).spacer
                    ? (g = n.pinState)
                    : (oe &&
                        ((oe = Qr(oe)) &&
                          !oe.nodeType &&
                          (oe = oe.current || oe.nativeElement),
                        (n.spacerIsNative = !!oe),
                        oe && (n.spacerState = Js(oe))),
                      (n.spacer = b = oe || cn.createElement('div')),
                      b.classList.add('pin-spacer'),
                      $ && b.classList.add('pin-spacer-' + $),
                      (n.pinState = g = Js(Z))),
                  (we.spacer = b = n.spacer),
                  (M = ds(Z)),
                  (E = M[J + de.os2]),
                  (w = an.getProperty(Z)),
                  (T = an.quickSetter(Z, de.a, us)),
                  Ks(Z, b, M),
                  (y = Js(Z))),
                be)
              ) {
                (f = rs(be) ? hs(be, ws) : ws),
                  (h = Es('scroller-start', $, pe, de, f, 0)),
                  (p = Es('scroller-end', $, pe, de, f, 0, h)),
                  (_ = h['offset' + de.op.d2]);
                var Le = Qr(Vr(pe, 'content') || pe);
                (u = this.markerStart = Es('start', $, Le, de, f, _, 0, le)),
                  (d = this.markerEnd = Es('end', $, Le, de, f, _, 0, le)),
                  le && (F = an.quickSetter([u, d], de.a, us)),
                  ge ||
                    (Rr.length && !0 === Vr(pe, 'fixedMarkers')) ||
                    ((V = ds((G = ve ? dn : pe)).position),
                    (G.style.position =
                      'absolute' === V || 'fixed' === V ? V : 'relative'),
                    an.set([h, p], {
                      force3D: !0,
                    }),
                    (k = an.quickSetter(h, de.a, us)),
                    (L = an.quickSetter(p, de.a, us)));
              }
              if (le) {
                var Me = le.vars.onUpdate,
                  Ae = le.vars.onUpdateParams;
                le.eventCallback('onUpdate', function () {
                  we.update(0, 0, 1), Me && Me.apply(Ae || []);
                });
              }
              (we.previous = function () {
                return ks[ks.indexOf(we) - 1];
              }),
                (we.next = function () {
                  return ks[ks.indexOf(we) + 1];
                }),
                (we.revert = function (e) {
                  var t = !1 !== e || !we.enabled,
                    r = yn;
                  t !== we.isReverted &&
                    (t &&
                      (we.scroll.rec || !yn || !qn || (we.scroll.rec = ke()),
                      (q = Math.max(ke(), we.scroll.rec || 0)),
                      (j = we.progress),
                      (B = i && i.progress())),
                    u &&
                      [u, d, h, p].forEach(function (e) {
                        return (e.style.display = t ? 'none' : 'block');
                      }),
                    t && (yn = 1),
                    we.update(t),
                    (yn = r),
                    Z &&
                      (t
                        ? (function (e, t, i) {
                            Zs(i);
                            var r = e._gsap;
                            if (r.spacerIsNative) Zs(r.spacerState);
                            else if (e.parentNode === t) {
                              var n = t.parentNode;
                              n && (n.insertBefore(e, t), n.removeChild(t));
                            }
                          })(Z, b, g)
                        : (!ae || !we.isActive) && Ks(Z, b, ds(Z), C)),
                    (we.isReverted = t));
                }),
                (we.refresh = function (n, s) {
                  if ((!yn && we.enabled) || s)
                    if (Z && n && Gn) ys(e, 'scrollEnd', qs);
                    else {
                      !qn && Te && Te(we),
                        (yn = 1),
                        (Ce = Rn()),
                        r.tween && (r.tween.kill(), (r.tween = 0)),
                        O && O.pause(),
                        ee && i && i.time(-0.01, !0).invalidate(),
                        we.isReverted || we.revert();
                      for (
                        var f,
                          _,
                          T,
                          E,
                          k,
                          L,
                          M,
                          A,
                          P,
                          D,
                          z = xe(),
                          F = Se(),
                          R = le ? le.duration() : Zn(pe, de),
                          N = 0,
                          G = 0,
                          V = t.end,
                          H = t.endTrigger || Q,
                          Y =
                            t.start ||
                            (0 !== t.start && Q ? (Z ? '0 0' : '0 100%') : 0),
                          X = (we.pinnedContainer =
                            t.pinnedContainer && Qr(t.pinnedContainer)),
                          $ = (Q && Math.max(0, ks.indexOf(we))) || 0,
                          W = $;
                        W--;

                      )
                        (L = ks[W]).end || L.refresh(0, 1) || (yn = 1),
                          !(M = L.pin) ||
                            (M !== Q && M !== Z) ||
                            L.isReverted ||
                            (D || (D = []), D.unshift(L), L.revert()),
                          L !== ks[W] && ($--, W--);
                      for (
                        ts(Y) && (Y = Y(we)),
                          l =
                            ta(Y, Q, z, de, ke(), u, h, we, F, _e, ge, R, le) ||
                            (Z ? -0.001 : 0),
                          ts(V) && (V = V(we)),
                          es(V) &&
                            !V.indexOf('+=') &&
                            (~V.indexOf(' ')
                              ? (V = (es(Y) ? Y.split(' ')[0] : '') + V)
                              : ((N = Ss(V.substr(2), z)),
                                (V = es(Y) ? Y : l + N),
                                (H = Q))),
                          c =
                            Math.max(
                              l,
                              ta(
                                V || (H ? '100% 0' : R),
                                H,
                                z,
                                de,
                                ke() + N,
                                d,
                                p,
                                we,
                                F,
                                _e,
                                ge,
                                R,
                                le
                              )
                            ) || -0.001,
                          v = c - l || ((l -= 0.01) && 0.001),
                          N = 0,
                          W = $;
                        W--;

                      )
                        (M = (L = ks[W]).pin) &&
                          L.start - L._pinPush < l &&
                          !le &&
                          L.end > 0 &&
                          ((f = L.end - L.start),
                          (M !== Q && M !== X) ||
                            is(Y) ||
                            (N += f * (1 - L.progress)),
                          M === Z && (G += f));
                      if (
                        ((l += N),
                        (c += N),
                        (we._pinPush = G),
                        u &&
                          N &&
                          (((f = {})[de.a] = '+=' + N),
                          X && (f[de.p] = '-=' + ke()),
                          an.set([u, d], f)),
                        Z)
                      )
                        (f = ds(Z)),
                          (E = de === Kr),
                          (T = ke()),
                          (x = parseFloat(w(de.a)) + G),
                          !R &&
                            c > 1 &&
                            ((ve ? dn : pe).style['overflow-' + de.a] =
                              'scroll'),
                          Ks(Z, b, f),
                          (y = Js(Z)),
                          (_ = ps(Z, !0)),
                          (A = ge && Zr(pe, E ? Ur : Kr)()),
                          J &&
                            (((C = [J + de.os2, v + G + us]).t = b),
                            (W = J === cs ? fs(Z, de) + v + G : 0) &&
                              C.push(de.d, W + us),
                            Zs(C),
                            ge && ke(q)),
                          ge &&
                            (((k = {
                              top: _.top + (E ? T - l : A) + us,
                              left: _.left + (E ? A : T - l) + us,
                              boxSizing: 'border-box',
                              position: 'fixed',
                            }).width = k.maxWidth =
                              Math.ceil(_.width) + us),
                            (k.height = k.maxHeight = Math.ceil(_.height) + us),
                            (k.margin =
                              k.marginTop =
                              k.marginRight =
                              k.marginBottom =
                              k.marginLeft =
                                '0'),
                            (k[cs] = f[cs]),
                            (k[cs + 'Top'] = f[cs + 'Top']),
                            (k[cs + 'Right'] = f[cs + 'Right']),
                            (k[cs + 'Bottom'] = f[cs + 'Bottom']),
                            (k[cs + 'Left'] = f[cs + 'Left']),
                            (m = (function (e, t, i) {
                              for (
                                var r, n = [], s = e.length, a = i ? 8 : 0;
                                a < s;
                                a += 2
                              )
                                (r = e[a]), n.push(r, r in t ? t[r] : e[a + 1]);
                              return (n.t = e.t), n;
                            })(g, k, ae))),
                          i
                            ? ((P = i._initted),
                              Cn(1),
                              i.render(i.duration(), !0, !0),
                              (S = w(de.a) - x + v + G),
                              v !== S && ge && m.splice(m.length - 2, 2),
                              i.render(0, !0, !0),
                              P || i.invalidate(),
                              Cn(0))
                            : (S = v);
                      else if (Q && ke() && !le)
                        for (_ = Q.parentNode; _ && _ !== dn; )
                          _._pinOffset &&
                            ((l -= _._pinOffset), (c -= _._pinOffset)),
                            (_ = _.parentNode);
                      D &&
                        D.forEach(function (e) {
                          return e.revert(!1);
                        }),
                        (we.start = l),
                        (we.end = c),
                        (a = o = ke()),
                        le || (a < q && ke(q), (we.scroll.rec = 0)),
                        we.revert(!1),
                        I &&
                          ((Ee = -1),
                          we.isActive && ke(l + v * j),
                          I.restart(!0)),
                        (yn = 0),
                        i &&
                          he &&
                          (i._initted || B) &&
                          i.progress() !== B &&
                          i.progress(B, !0).render(i.time(), !0, !0),
                        (j !== we.progress || le) &&
                          (i && !he && i.totalProgress(j, !0),
                          (we.progress = j),
                          we.update(0, 0, 1)),
                        Z && J && (b._pinOffset = Math.round(we.progress * S)),
                        U && U(we);
                    }
                }),
                (we.getVelocity = function () {
                  return ((ke() - o) / (Rn() - gn)) * 1e3 || 0;
                }),
                (we.endAnimation = function () {
                  as(we.callbackAnimation),
                    i &&
                      (O
                        ? O.progress(1)
                        : i.paused()
                        ? he || as(i, we.direction < 0, 1)
                        : as(i, i.reversed()));
                }),
                (we.labelToScroll = function (e) {
                  return (
                    (i &&
                      i.labels &&
                      (l || we.refresh() || l) +
                        (i.labels[e] / i.duration()) * v) ||
                    0
                  );
                }),
                (we.getTrailing = function (e) {
                  var t = ks.indexOf(we),
                    i =
                      we.direction > 0
                        ? ks.slice(0, t).reverse()
                        : ks.slice(t + 1);
                  return (
                    es(e)
                      ? i.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : i
                  ).filter(function (e) {
                    return we.direction > 0 ? e.end <= l : e.start >= c;
                  });
                }),
                (we.update = function (e, t, n) {
                  if (!le || n || e) {
                    var s,
                      u,
                      d,
                      p,
                      f,
                      g,
                      _,
                      w = we.scroll(),
                      C = e ? 0 : (w - l) / v,
                      M = C < 0 ? 0 : C > 1 ? 1 : C || 0,
                      D = we.progress;
                    if (
                      (t &&
                        ((o = a),
                        (a = le ? ke() : w),
                        se &&
                          ((P = A), (A = i && !he ? i.totalProgress() : M))),
                      te &&
                        !M &&
                        Z &&
                        !yn &&
                        !Fn &&
                        Gn &&
                        l < w + ((w - o) / (Rn() - gn)) * te &&
                        (M = 1e-4),
                      M !== D && we.enabled)
                    ) {
                      if (
                        ((p =
                          (f =
                            (s = we.isActive = !!M && M < 1) !==
                            (!!D && D < 1)) || !!M != !!D),
                        (we.direction = M > D ? 1 : -1),
                        (we.progress = M),
                        p &&
                          !yn &&
                          ((u = M && !D ? 0 : 1 === M ? 1 : 1 === D ? 2 : 3),
                          he &&
                            ((d =
                              (!f && 'none' !== ye[u + 1] && ye[u + 1]) ||
                              ye[u]),
                            (_ =
                              i &&
                              ('complete' === d || 'reset' === d || d in i)))),
                        ue &&
                          (f || _) &&
                          (_ || K || !i) &&
                          (ts(ue)
                            ? ue(we)
                            : we.getTrailing(ue).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        he ||
                          (!O || yn || Fn
                            ? i && i.totalProgress(M, !!yn)
                            : ((le || (Bn && Bn !== we)) &&
                                O.render(O._dp._time - O._start),
                              O.resetTo
                                ? O.resetTo(
                                    'totalProgress',
                                    M,
                                    i._tTime / i._tDur
                                  )
                                : ((O.vars.totalProgress = M),
                                  O.invalidate().restart()))),
                        Z)
                      )
                        if ((e && J && (b.style[J + de.os2] = E), ge)) {
                          if (p) {
                            if (
                              ((g =
                                !e &&
                                M > D &&
                                c + 1 > w &&
                                w + 1 >= Zn(pe, de)),
                              ae)
                            )
                              if (e || (!s && !g)) ra(Z, b);
                              else {
                                var z = ps(Z, !0),
                                  j = w - l;
                                ra(
                                  Z,
                                  dn,
                                  z.top + (de === Kr ? j : 0) + us,
                                  z.left + (de === Kr ? 0 : j) + us
                                );
                              }
                            Zs(s || g ? m : y),
                              (S !== v && M < 1 && s) ||
                                T(x + (1 !== M || g ? 0 : S));
                          }
                        } else T($n(x + S * M));
                      se && !r.tween && !yn && !Fn && I.restart(!0),
                        X &&
                          (f || (ne && M && (M < 1 || !Dn))) &&
                          fn(X.targets).forEach(function (e) {
                            return e.classList[s || ne ? 'add' : 'remove'](
                              X.className
                            );
                          }),
                        Y && !he && !e && Y(we),
                        p && !yn
                          ? (he &&
                              (_ &&
                                ('complete' === d
                                  ? i.pause().totalProgress(1)
                                  : 'reset' === d
                                  ? i.restart(!0).pause()
                                  : 'restart' === d
                                  ? i.restart(!0)
                                  : i[d]()),
                              Y && Y(we)),
                            (!f && Dn) ||
                              (W && f && os(we, W),
                              me[u] && os(we, me[u]),
                              ne && (1 === M ? we.kill(!1, 1) : (me[u] = 0)),
                              f ||
                                (me[(u = 1 === M ? 1 : 3)] && os(we, me[u]))),
                            ce &&
                              !s &&
                              Math.abs(we.getVelocity()) >
                                (is(ce) ? ce : 2500) &&
                              (as(we.callbackAnimation),
                              O ? O.progress(1) : as(i, !M, 1)))
                          : he && Y && !yn && Y(we);
                    }
                    if (L) {
                      var q = le
                        ? (w / le.duration()) * (le._caScrollDist || 0)
                        : w;
                      k(q + (h._isFlipped ? 1 : 0)), L(q);
                    }
                    F && F((-w / le.duration()) * (le._caScrollDist || 0));
                  }
                }),
                (we.enable = function (t, i) {
                  we.enabled ||
                    ((we.enabled = !0),
                    ys(pe, 'resize', Os),
                    ys(ve ? cn : pe, 'scroll', As),
                    Te && ys(e, 'refreshInit', Te),
                    !1 !== t && ((we.progress = j = 0), (a = o = Ee = ke())),
                    !1 !== i && we.refresh());
                }),
                (we.getTween = function (e) {
                  return e && r ? r.tween : O;
                }),
                (we.setPositions = function (e, t) {
                  Z && ((x += e - l), (S += t - e - v)),
                    (we.start = l = e),
                    (we.end = c = t),
                    (v = t - e),
                    we.update();
                }),
                (we.disable = function (t, i) {
                  if (
                    we.enabled &&
                    (!1 !== t && we.revert(),
                    (we.enabled = we.isActive = !1),
                    i || (O && O.pause()),
                    (q = 0),
                    n && (n.uncache = 1),
                    Te && bs(e, 'refreshInit', Te),
                    I &&
                      (I.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                    !ve)
                  ) {
                    for (var s = ks.length; s--; )
                      if (ks[s].scroller === pe && ks[s] !== we) return;
                    bs(pe, 'resize', Os), bs(pe, 'scroll', As);
                  }
                }),
                (we.kill = function (e, r) {
                  we.disable(e, r), O && !r && O.kill(), $ && delete Ls[$];
                  var s = ks.indexOf(we);
                  s >= 0 && ks.splice(s, 1),
                    s === wn && Xs > 0 && wn--,
                    (s = 0),
                    ks.forEach(function (e) {
                      return e.scroller === we.scroller && (s = 1);
                    }),
                    s || (we.scroll.rec = 0),
                    i &&
                      ((i.scrollTrigger = null),
                      e && i.render(-1),
                      r || i.kill()),
                    u &&
                      [u, d, h, p].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    Bn === we && (Bn = 0),
                    Z &&
                      (n && (n.uncache = 1),
                      (s = 0),
                      ks.forEach(function (e) {
                        return e.pin === Z && s++;
                      }),
                      s || (n.spacer = 0)),
                    t.onKill && t.onKill(we);
                }),
                we.enable(!1, !1),
                R && R(we),
                i && i.add && !v
                  ? an.delayedCall(0.01, function () {
                      return l || c || we.refresh();
                    }) &&
                    (v = 0.01) &&
                    (l = c = 0)
                  : we.refresh();
            } else this.update = this.refresh = this.kill = Xn;
          }),
          (e.register = function (t) {
            return (
              on ||
                ((an = t || Un()),
                Wn() && window.document && e.enable(),
                (on = Vn)),
              on
            );
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) Ts[t] = e[t];
            return Ts;
          }),
          (e.disable = function (e, t) {
            (Vn = 0),
              ks.forEach(function (i) {
                return i[t ? 'kill' : 'disable'](e);
              }),
              bs(ln, 'wheel', As),
              bs(cn, 'scroll', As),
              clearInterval(mn),
              bs(cn, 'touchcancel', Xn),
              bs(dn, 'touchstart', Xn),
              ms(bs, cn, 'pointerdown,touchstart,mousedown', Hn),
              ms(bs, cn, 'pointerup,touchend,mouseup', Yn),
              pn.kill(),
              Jn(bs);
            for (var i = 0; i < Fr.length; i += 3)
              _s(bs, Fr[i], Fr[i + 1]), _s(bs, Fr[i], Fr[i + 2]);
          }),
          (e.enable = function () {
            if (
              ((ln = window),
              (cn = document),
              (un = cn.documentElement),
              (dn = cn.body),
              an &&
                ((fn = an.utils.toArray),
                (vn = an.utils.clamp),
                (Cn = an.core.suppressOverwrites || Xn),
                an.core.globals('ScrollTrigger', e),
                dn))
            ) {
              (Vn = 1),
                sn.register(an),
                (e.isTouch = sn.isTouch),
                (On =
                  sn.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                ys(ln, 'wheel', As),
                (hn = [ln, cn, un, dn]),
                e.matchMedia({
                  '(orientation: portrait)': function () {
                    return Ps(), Ps;
                  },
                }),
                ys(cn, 'scroll', As);
              var t,
                i,
                r = dn.style,
                n = r.borderTopStyle;
              for (
                r.borderTopStyle = 'solid',
                  t = ps(dn),
                  Kr.m = Math.round(t.top + Kr.sc()) || 0,
                  Ur.m = Math.round(t.left + Ur.sc()) || 0,
                  n
                    ? (r.borderTopStyle = n)
                    : r.removeProperty('border-top-style'),
                  mn = setInterval(Ms, 250),
                  an.delayedCall(0.5, function () {
                    return (Fn = 0);
                  }),
                  ys(cn, 'touchcancel', Xn),
                  ys(dn, 'touchstart', Xn),
                  ms(ys, cn, 'pointerdown,touchstart,mousedown', Hn),
                  ms(ys, cn, 'pointerup,touchend,mouseup', Yn),
                  _n = an.utils.checkPrefix('transform'),
                  Us.push(_n),
                  on = Rn(),
                  pn = an.delayedCall(0.2, Hs).pause(),
                  Sn = [
                    cn,
                    'visibilitychange',
                    function () {
                      var e = ln.innerWidth,
                        t = ln.innerHeight;
                      cn.hidden
                        ? ((Tn = e), (xn = t))
                        : (Tn === e && xn === t) || Os();
                    },
                    cn,
                    'DOMContentLoaded',
                    Hs,
                    ln,
                    'load',
                    Hs,
                    ln,
                    'resize',
                    Os,
                  ],
                  Jn(ys),
                  ks.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  i = 0;
                i < Fr.length;
                i += 3
              )
                _s(bs, Fr[i], Fr[i + 1]), _s(bs, Fr[i], Fr[i + 2]);
            }
          }),
          (e.config = function (t) {
            'limitCallbacks' in t && (Dn = !!t.limitCallbacks);
            var i = t.syncInterval;
            (i && clearInterval(mn)) || ((mn = i) && setInterval(Ms, i)),
              'ignoreMobileResize' in t &&
                (Mn = 1 === e.isTouch && t.ignoreMobileResize),
              'autoRefreshEvents' in t &&
                (Jn(bs) || Jn(ys, t.autoRefreshEvents || 'none'),
                (kn = -1 === (t.autoRefreshEvents + '').indexOf('resize')));
          }),
          (e.scrollerProxy = function (e, t) {
            var i = Qr(e),
              r = Fr.indexOf(i),
              n = Kn(i);
            ~r && Fr.splice(r, n ? 6 : 2),
              t && (n ? Rr.unshift(ln, t, dn, t, un, t) : Rr.unshift(i, t));
          }),
          (e.matchMedia = function (e) {
            var t, i, r, n, s;
            for (i in e)
              (r = Is.indexOf(i)),
                (n = e[i]),
                (In = i),
                'all' === i
                  ? n()
                  : (t = ln.matchMedia(i)) &&
                    (t.matches && (s = n()),
                    ~r
                      ? ((Is[r + 1] = ss(Is[r + 1], n)),
                        (Is[r + 2] = ss(Is[r + 2], s)))
                      : ((r = Is.length),
                        Is.push(i, n, s),
                        t.addListener
                          ? t.addListener(js)
                          : t.addEventListener('change', js)),
                    (Is[r + 3] = t.matches)),
                (In = 0);
            return Is;
          }),
          (e.clearMatchMedia = function (e) {
            e || (Is.length = 0), (e = Is.indexOf(e)) >= 0 && Is.splice(e, 4);
          }),
          (e.isInViewport = function (e, t, i) {
            var r = (es(e) ? Qr(e) : e).getBoundingClientRect(),
              n = r[i ? 'width' : 'height'] * t || 0;
            return i
              ? r.right - n > 0 && r.left + n < ln.innerWidth
              : r.bottom - n > 0 && r.top + n < ln.innerHeight;
          }),
          (e.positionInViewport = function (e, t, i) {
            es(e) && (e = Qr(e));
            var r = e.getBoundingClientRect(),
              n = r[i ? 'width' : 'height'],
              s =
                null == t
                  ? n / 2
                  : t in xs
                  ? xs[t] * n
                  : ~t.indexOf('%')
                  ? (parseFloat(t) * n) / 100
                  : parseFloat(t) || 0;
            return i
              ? (r.left + s) / ln.innerWidth
              : (r.top + s) / ln.innerHeight;
          }),
          e
        );
      })();
    (sa.version = '3.10.4'),
      (sa.saveStyles = function (e) {
        return e
          ? fn(e).forEach(function (e) {
              if (e && e.style) {
                var t = Fs.indexOf(e);
                t >= 0 && Fs.splice(t, 5),
                  Fs.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute('transform'),
                    an.core.getCache(e),
                    In
                  );
              }
            })
          : Fs;
      }),
      (sa.revert = function (e, t) {
        return Ns(!e, t);
      }),
      (sa.create = function (e, t) {
        return new sa(e, t);
      }),
      (sa.refresh = function (e) {
        return e ? Os() : (on || sa.register()) && Hs(!0);
      }),
      (sa.update = $s),
      (sa.clearScrollMemory = Gs),
      (sa.maxScroll = function (e, t) {
        return Zn(e, t ? Ur : Kr);
      }),
      (sa.getScrollFunc = function (e, t) {
        return Zr(Qr(e), t ? Ur : Kr);
      }),
      (sa.getById = function (e) {
        return Ls[e];
      }),
      (sa.getAll = function () {
        return ks.filter(function (e) {
          return 'ScrollSmoother' !== e.vars.id;
        });
      }),
      (sa.isScrolling = function () {
        return !!Gn;
      }),
      (sa.snapDirectional = gs),
      (sa.addEventListener = function (e, t) {
        var i = Ds[e] || (Ds[e] = []);
        ~i.indexOf(t) || i.push(t);
      }),
      (sa.removeEventListener = function (e, t) {
        var i = Ds[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      }),
      (sa.batch = function (e, t) {
        var i,
          r = [],
          n = {},
          s = t.interval || 0.016,
          a = t.batchMax || 1e9,
          o = function (e, t) {
            var i = [],
              r = [],
              n = an
                .delayedCall(s, function () {
                  t(i, r), (i = []), (r = []);
                })
                .pause();
            return function (e) {
              i.length || n.restart(!0),
                i.push(e.trigger),
                r.push(e),
                a <= i.length && n.progress(1);
            };
          };
        for (i in t)
          n[i] =
            'on' === i.substr(0, 2) && ts(t[i]) && 'onRefreshInit' !== i
              ? o(0, t[i])
              : t[i];
        return (
          ts(a) &&
            ((a = a()),
            ys(sa, 'refresh', function () {
              return (a = t.batchMax());
            })),
          fn(e).forEach(function (e) {
            var t = {};
            for (i in n) t[i] = n[i];
            (t.trigger = e), r.push(sa.create(t));
          }),
          r
        );
      });
    var aa,
      oa = function (e, t, i, r) {
        return (
          t > r ? e(r) : t < 0 && e(0),
          i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
        );
      },
      la = function e(t, i) {
        !0 === i
          ? t.style.removeProperty('touch-action')
          : (t.style.touchAction =
              !0 === i
                ? 'auto'
                : i
                ? 'pan-' + i + (sn.isTouch ? ' pinch-zoom' : '')
                : 'none'),
          t === un && e(dn, i);
      },
      ca = {
        auto: 1,
        scroll: 1,
      },
      ua = function (e) {
        var t,
          i = e.event,
          r = e.target,
          n = e.axis,
          s = (i.changedTouches ? i.changedTouches[0] : i).target,
          a = s._gsap || an.core.getCache(s),
          o = Rn();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
          for (; s && s.scrollHeight <= s.clientHeight; ) s = s.parentNode;
          (a._isScroll =
            s &&
            !Kn(s) &&
            s !== r &&
            (ca[(t = ds(s)).overflowY] || ca[t.overflowX])),
            (a._isScrollT = o);
        }
        (a._isScroll || 'x' === n) && (i._gsapAllow = !0);
      },
      da = function (e, t, i, r) {
        return sn.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (r = r && ua),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return i && ys(cn, sn.eventTypes[0], pa, !1, !0);
          },
          onDisable: function () {
            return bs(cn, sn.eventTypes[0], pa, !0);
          },
        });
      },
      ha = /(input|label|select|textarea)/i,
      pa = function (e) {
        var t = ha.test(e.target.tagName);
        (t || aa) && ((e._gsapAllow = !0), (aa = t));
      },
      fa = function (e) {
        rs(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = 'wheel,touch'),
          (e.debounce = !!e.debounce),
          (e.id = e.id || 'normalizer');
        var t,
          i,
          r,
          n,
          s,
          a,
          o,
          l,
          c = e,
          u = c.normalizeScrollX,
          d = c.momentum,
          h = c.allowNestedScroll,
          p = Qr(e.target) || un,
          f = an.core.globals().ScrollSmoother,
          v =
            On &&
            ((e.content && Qr(e.content)) ||
              (f && f.get() && f.get().content())),
          g = Zr(p, Kr),
          m = Zr(p, Ur),
          y = 1,
          b =
            (sn.isTouch && ln.visualViewport
              ? ln.visualViewport.scale * ln.visualViewport.width
              : ln.outerWidth) / ln.innerWidth,
          _ = 0,
          w = ts(d)
            ? function () {
                return d(t);
              }
            : function () {
                return d || 2.8;
              },
          T = da(p, e.type, !0, h),
          x = function () {
            return (r = !1);
          },
          S = Xn,
          E = Xn,
          C = function () {
            (i = Zn(p, Kr)),
              (E = vn(On ? 1 : 0, i)),
              u && (S = vn(0, Zn(p, Ur))),
              (n = Vs);
          },
          k = function () {
            C(),
              s.isActive() &&
                s.vars.scrollY > i &&
                (g() > i ? s.progress(1) && g(i) : s.resetTo('scrollY', i));
          };
        return (
          (e.ignoreCheck = function (e) {
            return (
              (On &&
                'touchmove' === e.type &&
                (function () {
                  if (r) {
                    requestAnimationFrame(x);
                    var e = $n(t.deltaY / 2),
                      i = E(g.v - e);
                    return (
                      v &&
                        i !== g.v + g.offset &&
                        ((g.offset = i - g.v),
                        (v.style.transform = 'translateY(' + -g.offset + 'px)'),
                        v._gsap && (v._gsap.y = -g.offset + 'px'),
                        (g.cacheID = Fr.cache),
                        $s()),
                      !0
                    );
                  }
                  v &&
                    ((v.style.transform = 'translateY(0px)'),
                    (g.offset = g.cacheID = 0),
                    v._gsap && (v._gsap.y = '0px')),
                    (r = !0);
                })()) ||
              (y > 1.05 && 'touchstart' !== e.type) ||
              t.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            var e = y;
            (y = $n(((ln.visualViewport && ln.visualViewport.scale) || 1) / b)),
              s.pause(),
              e !== y && la(p, y > 1.01 || (!u && 'x')),
              (r = !1),
              (a = m()),
              (o = g()),
              C(),
              (n = Vs);
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if (
                (v &&
                  ((v.style.transform = 'translateY(0px)'),
                  (g.offset = g.cacheID = 0),
                  v._gsap && (v._gsap.y = '0px')),
                t)
              ) {
                Fr.cache++;
                var r,
                  n,
                  a = w();
                u &&
                  ((n = (r = m()) + (0.05 * a * -e.velocityX) / 0.227),
                  (a *= oa(m, r, n, Zn(p, Ur))),
                  (s.vars.scrollX = S(n))),
                  (n = (r = g()) + (0.05 * a * -e.velocityY) / 0.227),
                  (a *= oa(g, r, n, Zn(p, Kr))),
                  (s.vars.scrollY = E(n)),
                  s.invalidate().duration(a).play(0.01),
                  ((On && s.vars.scrollY >= i) || r >= i - 1) &&
                    an.to(
                      {},
                      {
                        onUpdate: k,
                        duration: a,
                      }
                    );
              } else l.restart(!0);
            }),
          (e.onWheel = function () {
            s._ts && s.pause(), Rn() - _ > 1e3 && ((n = 0), (_ = Rn()));
          }),
          (e.onChange = function (e, t, i, r, s) {
            Vs !== n && C(),
              t &&
                u &&
                m(S(r[2] === t ? a + (e.startX - e.x) : m() + t - r[1])),
              i && g(E(s[2] === i ? o + (e.startY - e.y) : g() + i - s[1])),
              $s();
          }),
          (e.onEnable = function () {
            la(p, !u && 'x'), ys(ln, 'resize', k), T.enable();
          }),
          (e.onDisable = function () {
            la(p, !0), bs(ln, 'resize', k), T.kill();
          }),
          ((t = new sn(e)).iOS = On),
          On && !g() && g(1),
          (l = t._dc),
          (s = an.to(t, {
            ease: 'power4',
            paused: !0,
            scrollX: u ? '+=0.1' : '+=0',
            scrollY: '+=0.1',
            onComplete: l.vars.onComplete,
          })),
          t
        );
      };
    function va(e) {
      var t = e.getBoundingClientRect(),
        i = window.pageXOffset || document.documentElement.scrollLeft,
        r = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: t.top + r,
        left: t.left + i,
      };
    }
    (sa.sort = function (e) {
      return ks.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (t.start + -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      );
    }),
      (sa.observe = function (e) {
        return new sn(e);
      }),
      (sa.normalizeScroll = function (e) {
        if (void 0 === e) return Ln;
        if (!0 === e && Ln) return Ln.enable();
        if (!1 === e) return Ln && Ln.kill();
        var t = e instanceof sn ? e : fa(e);
        return (
          Ln && Ln.target === t.target && Ln.kill(), Kn(t.target) && (Ln = t), t
        );
      }),
      (sa.core = {
        _getVelocityProp: Jr,
        _inputObserver: da,
        _scrollers: Fr,
        _proxies: Rr,
        bridge: {
          ss: function () {
            Gn || Bs('scrollStart'), (Gn = Rn());
          },
          ref: function () {
            return yn;
          },
        },
      }),
      Un() && an.registerPlugin(sa),
      Tr.registerPlugin(sa),
      document.querySelectorAll('.js-bg-shape-hld').forEach(function (e) {
        (e && (document.body.style.overflowX = 'hidden'),
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )) ||
          e.querySelectorAll('.js-bg-shape').forEach(function (t) {
            var i = t.dataset.version,
              r = Tr.timeline({
                repeat: -1,
                yoyo: !0,
              }),
              n = Tr.timeline({
                repeat: -1,
                yoyo: !0,
              });
            if (
              (r.pause(),
              n.pause(),
              Tr.to(e, {
                scrollTrigger: {
                  trigger: e,
                  start: 'top 75%',
                  end: 'bottom 10%',
                  scrub: !0,
                  onEnter: function () {
                    r.play(), n.play();
                  },
                  onEnterBack: function () {
                    r.play(), n.play();
                  },
                  onLeave: function () {
                    r.pause(), n.pause();
                  },
                  onLeaveBack: function () {
                    r.pause(), n.pause();
                  },
                },
              }),
              'cols-title-text' === i)
            ) {
              var s = t.querySelector('.js-bg-shape-item-1'),
                a = t.querySelector('.js-bg-shape-item-2');
              r.to(
                s,
                {
                  x: -40,
                  y: -20,
                  scaleX: 1.4,
                  scaleY: 1.4,
                  duration: 4,
                  rotation: 20,
                  rotate: -30,
                  ease: 'Power2.easeInOut',
                },
                0
              ),
                n.to(
                  a,
                  {
                    x: -40,
                    y: 30,
                    scaleX: 1.4,
                    scaleY: 1.2,
                    duration: 2.5,
                    ease: 'Power2.easeInOut',
                  },
                  0
                );
            }
            if ('top-right-1' === i) {
              var o = e.querySelector('.js-bg-shape-item-1');
              r.set(
                o,
                {
                  duration: 20,
                  x: -100,
                  y: 150,
                  scale: 1.8,
                  rotation: 60,
                  opacity: 0.6,
                  ease: 'Power2.easeOut',
                },
                0
              );
            }
            if ('left-and-right' === i) {
              var l = e.querySelector('.js-bg-shape-item-1'),
                c = e.querySelector('.js-bg-shape-item-2'),
                u = e.querySelector('.js-bg-shape-item-3'),
                d = e.querySelector('.js-bg-shape-item-4');
              l &&
                r.to(
                  l,
                  {
                    duration: 30,
                    x: -280,
                    y: -120,
                    scale: 1.2,
                    rotation: 180,
                    repeat: -1,
                    yoyo: !0,
                  },
                  0
                ),
                c &&
                  r.to(
                    c,
                    {
                      duration: 10,
                      x: -100,
                      y: 200,
                      rotation: 20,
                      scale: 0.5,
                      repeat: -1,
                      yoyo: !0,
                    },
                    0
                  ),
                u &&
                  n.to(
                    u,
                    {
                      duration: 15,
                      x: 500,
                      y: 50,
                      scale: 0.5,
                      repeat: -1,
                      yoyo: !0,
                    },
                    0
                  ),
                d &&
                  n.to(
                    d,
                    {
                      duration: 25,
                      x: -400,
                      y: 50,
                      scale: 0.5,
                      repeat: -1,
                      yoyo: !0,
                    },
                    0
                  );
            }
          });
      }),
      n.a.polyfill();
    var ga = document.querySelector('.js-blog-details-scroller-hld'),
      ma = document.querySelector('.js-blog-details-scroller'),
      ya = document.querySelector('.js-blog-details-scroller-content');
    ga &&
      ma &&
      ya &&
      window.addEventListener('load', function () {
        var e = ya.querySelectorAll('h2, h3, h4');
        if ((0 === e.length && ga.classList.add('is-hidden'), e)) {
          ga.classList.add('is-active'),
            e.forEach(function (e, t) {
              e.classList.add('js-header-to-scroll'),
                e.setAttribute('data-scroll-id', t);
              var i = document.createElement('li');
              (i.innerHTML = e.textContent),
                ma.appendChild(i),
                i.setAttribute('data-scroll-id', t),
                i.classList.add('js-scroll-to-header'),
                i.addEventListener('click', function () {
                  var e = document.querySelector(
                    '.js-header-to-scroll[data-scroll-id="' +
                      i.getAttribute('data-scroll-id') +
                      '"]'
                  );
                  e &&
                    window.scrollTo({
                      top: va(e).top - 152,
                      behavior: 'smooth',
                    });
                });
            });
          var t = function () {
            var t;
            e.forEach(function (e) {
              var i = document.querySelector(
                '.js-scroll-to-header[data-scroll-id="' +
                  e.getAttribute('data-scroll-id') +
                  '"]'
              );
              i &&
                (i.classList.remove('is-active'),
                window.pageYOffset + window.innerHeight / 2 - 100 > va(e).top &&
                  (t = i));
            }),
              t && t.classList.add('is-active');
          };
          t(),
            window.addEventListener('scroll', function () {
              t();
            }),
            window.addEventListener('resize', function () {
              t();
            });
        }
      });
    i(2), i(3), i(4), i(5);
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
      (Tr.registerPlugin(sa),
      window.addEventListener('resize', sa.refresh),
      document.querySelectorAll('.js-faq-parallax-hld').forEach(function (e) {
        var t = e.querySelector('.js-faq-parallax-satelite-1'),
          i = e.querySelector('.js-faq-parallax-satelite-2'),
          r = e.querySelector('.js-faq-parallax-gradient-1');
        t &&
          Tr.to(t, {
            y: -60,
            x: 0,
            scrollTrigger: {
              trigger: e,
              start: '-=100px center',
              end: 'bottom 30%',
              scrub: 0.6,
            },
          }),
          i &&
            Tr.to(i, {
              y: -120,
              x: 0,
              scrollTrigger: {
                trigger: e,
                start: '-=100px center',
                end: 'bottom 30%',
                scrub: 0.6,
              },
            });
        var n = Tr.timeline();
        n.pause(),
          Tr.to(e, {
            scrollTrigger: {
              trigger: e,
              start: '-=400px center',
              end: 'bottom 30%',
              onEnter: function () {
                return n.play();
              },
              onEnterBack: function () {
                return n.play();
              },
              onLeave: function () {
                return n.pause();
              },
              onLeaveBack: function () {
                return n.pause();
              },
            },
          }),
          r &&
            n.to(r, {
              duration: 15,
              y: -50,
              x: 100,
              scale: 1.1,
              rotation: -45,
              transformOrigin: 'center',
              repeat: -1,
              yoyo: !0,
            });
      }));
    window.innerWidth >= 1024
      ? (document
          .querySelector('body')
          .classList.add('gsap-before-initialized'),
        (function () {
          Tr.registerPlugin(sa), window.addEventListener('resize', sa.refresh);
          var e = document.querySelectorAll('.js-gsap-hld');
          e &&
            e.forEach(function (e) {
              var t = e.hasAttribute('data-offset')
                  ? e.getAttribute('data-offset')
                  : 'top 75%',
                i = e.querySelectorAll('.js-gsap-hero-fade-up'),
                r = e.querySelectorAll('.js-gsap-fade-up'),
                n = e.querySelectorAll('.js-gsap-fade-in'),
                s = e.querySelectorAll('.js-gsap-scale-down'),
                a = e.querySelectorAll('.js-gsap-true-fade-in'),
                o = e.querySelectorAll('.js-gsap-fade-up-stagger'),
                l = e.querySelectorAll('.js-gsap-fade-left-stagger'),
                c = e.querySelectorAll('.js-gsap-just-add-class'),
                u = e.hasAttribute('data-stagger-time')
                  ? parseFloat(e.getAttribute('data-stagger-time'))
                  : 0.075;
              i &&
                i.forEach(function (e) {
                  var t = e.hasAttribute('data-duration')
                      ? parseFloat(e.getAttribute('data-duration'))
                      : 1,
                    i = e.hasAttribute('data-delay')
                      ? parseFloat(e.getAttribute('data-delay'))
                      : 0;
                  Tr.to(e, {
                    duration: t,
                    delay: i,
                    y: 0,
                    opacity: 1,
                  });
                }),
                r &&
                  r.forEach(function (i) {
                    var r = i.hasAttribute('data-duration')
                        ? parseFloat(i.getAttribute('data-duration'))
                        : 1,
                      n = i.hasAttribute('data-delay')
                        ? parseFloat(i.getAttribute('data-delay'))
                        : 0,
                      s = i.hasAttribute('data-how-much-y')
                        ? parseFloat(i.getAttribute('data-how-much-y'))
                        : 50;
                    Tr.from(i, {
                      duration: r,
                      delay: n,
                      y: s,
                      opacity: 0,
                      scrollTrigger: {
                        trigger: e,
                        markers: !1,
                        start: t,
                        onEnter: function () {},
                      },
                    });
                  }),
                s &&
                  s.forEach(function (i) {
                    var r = i.hasAttribute('data-duration')
                        ? parseFloat(i.getAttribute('data-duration'))
                        : 1,
                      n = i.hasAttribute('data-delay')
                        ? parseFloat(i.getAttribute('data-delay'))
                        : 0,
                      s = i.hasAttribute('data-how-much-scale')
                        ? parseFloat(i.getAttribute('data-how-much-y'))
                        : '1.1';
                    Tr.from(i, {
                      duration: r,
                      delay: n,
                      scale: s,
                      scrollTrigger: {
                        trigger: e,
                        markers: !1,
                        start: t,
                        onEnter: function () {},
                      },
                    });
                  }),
                n &&
                  n.forEach(function (i) {
                    var r = i.hasAttribute('data-duration')
                        ? parseFloat(i.getAttribute('data-duration'))
                        : 1,
                      n = i.hasAttribute('data-delay')
                        ? parseFloat(i.getAttribute('data-delay'))
                        : 0;
                    Tr.from(i, {
                      duration: r,
                      delay: n,
                      y: 25,
                      opacity: 0,
                      scrollTrigger: {
                        trigger: e,
                        markers: !1,
                        start: t,
                      },
                    });
                  }),
                a &&
                  a.forEach(function (i) {
                    var r = i.hasAttribute('data-duration')
                        ? parseFloat(i.getAttribute('data-duration'))
                        : 1,
                      n = i.hasAttribute('data-delay')
                        ? parseFloat(i.getAttribute('data-delay'))
                        : 0;
                    Tr.from(i, {
                      duration: r,
                      delay: n,
                      opacity: 0,
                      scrollTrigger: {
                        trigger: e,
                        markers: !1,
                        start: t,
                      },
                    });
                  }),
                o &&
                  o.length > 0 &&
                  Tr.from(o, {
                    duration: 0.75,
                    y: 75,
                    opacity: 0,
                    stagger: u,
                    scrollTrigger: {
                      trigger: e,
                      markers: !1,
                      start: t,
                    },
                  }),
                l &&
                  l.length > 0 &&
                  Tr.from(l, {
                    duration: 0.75,
                    x: 50,
                    opacity: 0,
                    stagger: u,
                    scrollTrigger: {
                      trigger: e,
                      markers: !1,
                      start: t,
                    },
                  }),
                c &&
                  c.forEach(function (i) {
                    Tr.from(i, {
                      duration: 0,
                      scrollTrigger: {
                        trigger: e,
                        markers: !1,
                        start: t,
                        onEnter: function () {
                          i.classList.add('is-animated');
                        },
                      },
                    });
                  });
            });
        })())
      : document
          .querySelector('body')
          .classList.add('gsap-fallback-initialized');
    i(6), i(7), i(8);
    n.a.polyfill();
    var ba = document.querySelectorAll('.js-scroll-to');
    function _a(e) {
      return (
        null !== e &&
        'object' == typeof e &&
        'constructor' in e &&
        e.constructor === Object
      );
    }
    function wa(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach(function (i) {
          void 0 === e[i]
            ? (e[i] = t[i])
            : _a(t[i]) &&
              _a(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              wa(e[i], t[i]);
        });
    }
    ba &&
      ba.forEach(function (e) {
        e.addEventListener('click', function () {
          var t = e.getAttribute('data-scroll-to'),
            i = document.querySelectorAll('.js-lifecycle-hld'),
            r = null;
          if ((t && (r = document.querySelector(t)), r)) {
            var n = new Event('disableLifeCycle'),
              s = new Event('enableLifeCycle');
            i &&
              i.forEach(function (e) {
                e.dispatchEvent(n);
              }),
              window.scrollTo({
                top: r.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth',
              }),
              setTimeout(function () {
                i &&
                  i.forEach(function (e) {
                    e.dispatchEvent(s);
                  });
              }, 2e3);
          }
        });
      });
    var Ta = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: '',
      },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return {
          initEvent: function () {},
        };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          },
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
    };
    function xa() {
      var e = 'undefined' != typeof document ? document : {};
      return wa(e, Ta), e;
    }
    var Sa = {
      document: Ta,
      navigator: {
        userAgent: '',
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return '';
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
      requestAnimationFrame: function (e) {
        return 'undefined' == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame: function (e) {
        'undefined' != typeof setTimeout && clearTimeout(e);
      },
    };
    function Ea() {
      var e = 'undefined' != typeof window ? window : {};
      return wa(e, Sa), e;
    }
    function Ca(e) {
      return (Ca = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ka(e, t) {
      return (ka =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function La() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function Ma(e, t, i) {
      return (Ma = La()
        ? Reflect.construct
        : function (e, t, i) {
            var r = [null];
            r.push.apply(r, t);
            var n = new (Function.bind.apply(e, r))();
            return i && ka(n, i.prototype), n;
          }).apply(null, arguments);
    }
    function Aa(e) {
      var t = 'function' == typeof Map ? new Map() : void 0;
      return (Aa = function (e) {
        if (
          null === e ||
          ((i = e), -1 === Function.toString.call(i).indexOf('[native code]'))
        )
          return e;
        var i;
        if ('function' != typeof e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return Ma(e, arguments, Ca(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          ka(r, e)
        );
      })(e);
    }
    var Pa = (function (e) {
      var t, i;
      function r(t) {
        var i, r, n;
        return (
          (i = e.call.apply(e, [this].concat(t)) || this),
          (r = (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(i)),
          (n = r.__proto__),
          Object.defineProperty(r, '__proto__', {
            get: function () {
              return n;
            },
            set: function (e) {
              n.__proto__ = e;
            },
          }),
          i
        );
      }
      return (
        (i = e),
        ((t = r).prototype = Object.create(i.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = i),
        r
      );
    })(Aa(Array));
    function Oa(e) {
      void 0 === e && (e = []);
      var t = [];
      return (
        e.forEach(function (e) {
          Array.isArray(e) ? t.push.apply(t, Oa(e)) : t.push(e);
        }),
        t
      );
    }
    function Da(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function za(e, t) {
      var i = Ea(),
        r = xa(),
        n = [];
      if (!t && e instanceof Pa) return e;
      if (!e) return new Pa(n);
      if ('string' == typeof e) {
        var s = e.trim();
        if (s.indexOf('<') >= 0 && s.indexOf('>') >= 0) {
          var a = 'div';
          0 === s.indexOf('<li') && (a = 'ul'),
            0 === s.indexOf('<tr') && (a = 'tbody'),
            (0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (a = 'tr'),
            0 === s.indexOf('<tbody') && (a = 'table'),
            0 === s.indexOf('<option') && (a = 'select');
          var o = r.createElement(a);
          o.innerHTML = s;
          for (var l = 0; l < o.childNodes.length; l += 1)
            n.push(o.childNodes[l]);
        } else
          n = (function (e, t) {
            if ('string' != typeof e) return [e];
            for (
              var i = [], r = t.querySelectorAll(e), n = 0;
              n < r.length;
              n += 1
            )
              i.push(r[n]);
            return i;
          })(e.trim(), t || r);
      } else if (e.nodeType || e === i || e === r) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof Pa) return e;
        n = e;
      }
      return new Pa(
        (function (e) {
          for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(n)
      );
    }
    za.fn = Pa.prototype;
    var Ia = 'resize scroll'.split(' ');
    function ja(e) {
      return function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        if (void 0 === i[0]) {
          for (var n = 0; n < this.length; n += 1)
            Ia.indexOf(e) < 0 &&
              (e in this[n] ? this[n][e]() : za(this[n]).trigger(e));
          return this;
        }
        return this.on.apply(this, [e].concat(i));
      };
    }
    ja('click'),
      ja('blur'),
      ja('focus'),
      ja('focusin'),
      ja('focusout'),
      ja('keyup'),
      ja('keydown'),
      ja('keypress'),
      ja('submit'),
      ja('change'),
      ja('mousedown'),
      ja('mousemove'),
      ja('mouseup'),
      ja('mouseenter'),
      ja('mouseleave'),
      ja('mouseout'),
      ja('mouseover'),
      ja('touchstart'),
      ja('touchend'),
      ja('touchmove'),
      ja('resize'),
      ja('scroll');
    var qa = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var r = Oa(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, r);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var r = Oa(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, r);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var r = Oa(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        return (
          Da(this, function (e) {
            return (
              r.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var r = Oa(
          t.map(function (e) {
            return e.split(' ');
          })
        );
        this.forEach(function (e) {
          r.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && 'string' == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (var r in e) (this[i][r] = e[r]), this[i].setAttribute(r, e[r]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            'string' != typeof e ? e + 'ms' : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var r = t[0],
          n = t[1],
          s = t[2],
          a = t[3];
        function o(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), za(t).is(n))) s.apply(t, i);
            else
              for (var r = za(t).parents(), a = 0; a < r.length; a += 1)
                za(r[a]).is(n) && s.apply(r[a], i);
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        'function' == typeof t[1] &&
          ((r = t[0]), (s = t[1]), (a = t[2]), (n = void 0)),
          a || (a = !1);
        for (var c, u = r.split(' '), d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (n)
            for (c = 0; c < u.length; c += 1) {
              var p = u[c];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []),
                h.dom7LiveListeners[p].push({
                  listener: s,
                  proxyListener: o,
                }),
                h.addEventListener(p, o, a);
            }
          else
            for (c = 0; c < u.length; c += 1) {
              var f = u[c];
              h.dom7Listeners || (h.dom7Listeners = {}),
                h.dom7Listeners[f] || (h.dom7Listeners[f] = []),
                h.dom7Listeners[f].push({
                  listener: s,
                  proxyListener: l,
                }),
                h.addEventListener(f, l, a);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var r = t[0],
          n = t[1],
          s = t[2],
          a = t[3];
        'function' == typeof t[1] &&
          ((r = t[0]), (s = t[1]), (a = t[2]), (n = void 0)),
          a || (a = !1);
        for (var o = r.split(' '), l = 0; l < o.length; l += 1)
          for (var c = o[l], u = 0; u < this.length; u += 1) {
            var d = this[u],
              h = void 0;
            if (
              (!n && d.dom7Listeners
                ? (h = d.dom7Listeners[c])
                : n && d.dom7LiveListeners && (h = d.dom7LiveListeners[c]),
              h && h.length)
            )
              for (var p = h.length - 1; p >= 0; p -= 1) {
                var f = h[p];
                (s && f.listener === s) ||
                (s &&
                  f.listener &&
                  f.listener.dom7proxy &&
                  f.listener.dom7proxy === s)
                  ? (d.removeEventListener(c, f.proxyListener, a),
                    h.splice(p, 1))
                  : s ||
                    (d.removeEventListener(c, f.proxyListener, a),
                    h.splice(p, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = Ea(), t = arguments.length, i = new Array(t), r = 0;
          r < t;
          r++
        )
          i[r] = arguments[r];
        for (var n = i[0].split(' '), s = i[1], a = 0; a < n.length; a += 1)
          for (var o = n[a], l = 0; l < this.length; l += 1) {
            var c = this[l];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(o, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (c.dom7EventData = i.filter(function (e, t) {
                return t > 0;
              })),
                c.dispatchEvent(u),
                (c.dom7EventData = []),
                delete c.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on('transitionend', function i(r) {
              r.target === this && (e.call(this, r), t.off('transitionend', i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue('margin-right')) +
              parseFloat(t.getPropertyValue('margin-left'))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue('margin-top')) +
              parseFloat(t.getPropertyValue('margin-bottom'))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = Ea();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = Ea(),
            t = xa(),
            i = this[0],
            r = i.getBoundingClientRect(),
            n = t.body,
            s = i.clientTop || n.clientTop || 0,
            a = i.clientLeft || n.clientLeft || 0,
            o = i === e ? e.scrollY : i.scrollTop,
            l = i === e ? e.scrollX : i.scrollLeft;
          return {
            top: r.top + o - s,
            left: r.left + l - a,
          };
        }
        return null;
      },
      css: function (e, t) {
        var i,
          r = Ea();
        if (1 === arguments.length) {
          if ('string' != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (var n in e) this[i].style[n] = e[n];
            return this;
          }
          if (this[0])
            return r.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && 'string' == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, i) {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          i,
          r = Ea(),
          n = xa(),
          s = this[0];
        if (!s || void 0 === e) return !1;
        if ('string' == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (t = za(e), i = 0; i < t.length; i += 1)
            if (t[i] === s) return !0;
          return !1;
        }
        if (e === n) return s === n;
        if (e === r) return s === r;
        if (e.nodeType || e instanceof Pa) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
            if (t[i] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return za([]);
        if (e < 0) {
          var i = t + e;
          return za(i < 0 ? [] : [this[i]]);
        }
        return za([this[e]]);
      },
      append: function () {
        for (var e, t = xa(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (var r = 0; r < this.length; r += 1)
            if ('string' == typeof e) {
              var n = t.createElement('div');
              for (n.innerHTML = e; n.firstChild; )
                this[r].appendChild(n.firstChild);
            } else if (e instanceof Pa)
              for (var s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
            else this[r].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          i,
          r = xa();
        for (t = 0; t < this.length; t += 1)
          if ('string' == typeof e) {
            var n = r.createElement('div');
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[t].insertBefore(n.childNodes[i], this[t].childNodes[0]);
          } else if (e instanceof Pa)
            for (i = 0; i < e.length; i += 1)
              this[t].insertBefore(e[i], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && za(this[0].nextElementSibling).is(e)
              ? za([this[0].nextElementSibling])
              : za([])
            : this[0].nextElementSibling
            ? za([this[0].nextElementSibling])
            : za([])
          : za([]);
      },
      nextAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return za([]);
        for (; i.nextElementSibling; ) {
          var r = i.nextElementSibling;
          e ? za(r).is(e) && t.push(r) : t.push(r), (i = r);
        }
        return za(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && za(t.previousElementSibling).is(e)
              ? za([t.previousElementSibling])
              : za([])
            : t.previousElementSibling
            ? za([t.previousElementSibling])
            : za([]);
        }
        return za([]);
      },
      prevAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return za([]);
        for (; i.previousElementSibling; ) {
          var r = i.previousElementSibling;
          e ? za(r).is(e) && t.push(r) : t.push(r), (i = r);
        }
        return za(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? za(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return za(t);
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var r = this[i].parentNode; r; )
            e ? za(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
        return za(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? za([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var r = this[i].querySelectorAll(e), n = 0; n < r.length; n += 1)
            t.push(r[n]);
        return za(t);
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var r = this[i].children, n = 0; n < r.length; n += 1)
            (e && !za(r[n]).is(e)) || t.push(r[n]);
        return za(t);
      },
      filter: function (e) {
        return za(Da(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(qa).forEach(function (e) {
      Object.defineProperty(za.fn, e, {
        value: qa[e],
        writable: !0,
      });
    });
    var Ba,
      Fa,
      Ra,
      Na = za;
    function Ga(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function Va() {
      return Date.now();
    }
    function Ha(e, t) {
      void 0 === t && (t = 'x');
      var i,
        r,
        n,
        s = Ea(),
        a = (function (e) {
          var t,
            i = Ea();
          return (
            i.getComputedStyle && (t = i.getComputedStyle(e, null)),
            !t && e.currentStyle && (t = e.currentStyle),
            t || (t = e.style),
            t
          );
        })(e);
      return (
        s.WebKitCSSMatrix
          ? ((r = a.transform || a.webkitTransform).split(',').length > 6 &&
              (r = r
                .split(', ')
                .map(function (e) {
                  return e.replace(',', '.');
                })
                .join(', ')),
            (n = new s.WebKitCSSMatrix('none' === r ? '' : r)))
          : (i = (n =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue('transform')
                .replace('translate(', 'matrix(1, 0, 0, 1,'))
              .toString()
              .split(',')),
        'x' === t &&
          (r = s.WebKitCSSMatrix
            ? n.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        'y' === t &&
          (r = s.WebKitCSSMatrix
            ? n.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function Ya(e) {
      return (
        'object' == typeof e &&
        null !== e &&
        e.constructor &&
        'Object' === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function Xa(e) {
      return 'undefined' != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function $a() {
      for (
        var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ['__proto__', 'constructor', 'prototype'],
          i = 1;
        i < arguments.length;
        i += 1
      ) {
        var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != r && !Xa(r))
          for (
            var n = Object.keys(Object(r)).filter(function (e) {
                return t.indexOf(e) < 0;
              }),
              s = 0,
              a = n.length;
            s < a;
            s += 1
          ) {
            var o = n[s],
              l = Object.getOwnPropertyDescriptor(r, o);
            void 0 !== l &&
              l.enumerable &&
              (Ya(e[o]) && Ya(r[o])
                ? r[o].__swiper__
                  ? (e[o] = r[o])
                  : $a(e[o], r[o])
                : !Ya(e[o]) && Ya(r[o])
                ? ((e[o] = {}),
                  r[o].__swiper__ ? (e[o] = r[o]) : $a(e[o], r[o]))
                : (e[o] = r[o]));
          }
      }
      return e;
    }
    function Wa(e, t) {
      Object.keys(t).forEach(function (i) {
        Ya(t[i]) &&
          Object.keys(t[i]).forEach(function (r) {
            'function' == typeof t[i][r] && (t[i][r] = t[i][r].bind(e));
          }),
          (e[i] = t[i]);
      });
    }
    function Ua(e) {
      return (
        void 0 === e && (e = ''),
        '.' +
          e
            .trim()
            .replace(/([\.:!\/])/g, '\\$1')
            .replace(/ /g, '.')
      );
    }
    function Ka(e, t, i, r) {
      var n = xa();
      return (
        i &&
          Object.keys(r).forEach(function (i) {
            if (!t[i] && !0 === t.auto) {
              var s = n.createElement('div');
              (s.className = r[i]), e.append(s), (t[i] = s);
            }
          }),
        t
      );
    }
    function Qa() {
      return (
        Ba ||
          (Ba = (function () {
            var e = Ea(),
              t = xa();
            return {
              touch: !!(
                'ontouchstart' in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              pointerEvents:
                !!e.PointerEvent &&
                'maxTouchPoints' in e.navigator &&
                e.navigator.maxTouchPoints >= 0,
              observer:
                'MutationObserver' in e || 'WebkitMutationObserver' in e,
              passiveListener: (function () {
                var t = !1;
                try {
                  var i = Object.defineProperty({}, 'passive', {
                    get: function () {
                      t = !0;
                    },
                  });
                  e.addEventListener('testPassiveListener', null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: 'ongesturestart' in e,
            };
          })()),
        Ba
      );
    }
    function Za(e) {
      return (
        void 0 === e && (e = {}),
        Fa ||
          (Fa = (function (e) {
            var t = (void 0 === e ? {} : e).userAgent,
              i = Qa(),
              r = Ea(),
              n = r.navigator.platform,
              s = t || r.navigator.userAgent,
              a = {
                ios: !1,
                android: !1,
              },
              o = r.screen.width,
              l = r.screen.height,
              c = s.match(/(Android);?[\s\/]+([\d.]+)?/),
              u = s.match(/(iPad).*OS\s([\d_]+)/),
              d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = 'Win32' === n,
              f = 'MacIntel' === n;
            return (
              !u &&
                f &&
                i.touch &&
                [
                  '1024x1366',
                  '1366x1024',
                  '834x1194',
                  '1194x834',
                  '834x1112',
                  '1112x834',
                  '768x1024',
                  '1024x768',
                  '820x1180',
                  '1180x820',
                  '810x1080',
                  '1080x810',
                ].indexOf(o + 'x' + l) >= 0 &&
                ((u = s.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, '13_0_0']),
                (f = !1)),
              c && !p && ((a.os = 'android'), (a.android = !0)),
              (u || h || d) && ((a.os = 'ios'), (a.ios = !0)),
              a
            );
          })(e)),
        Fa
      );
    }
    function Ja() {
      return (
        Ra ||
          (Ra = (function () {
            var e,
              t = Ea();
            return {
              isEdge: !!t.navigator.userAgent.match(/Edge/g),
              isSafari:
                ((e = t.navigator.userAgent.toLowerCase()),
                e.indexOf('safari') >= 0 &&
                  e.indexOf('chrome') < 0 &&
                  e.indexOf('android') < 0),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                t.navigator.userAgent
              ),
            };
          })()),
        Ra
      );
    }
    var eo = {
      name: 'resize',
      create: function () {
        var e = this;
        $a(e, {
          resize: {
            observer: null,
            createObserver: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                ((e.resize.observer = new ResizeObserver(function (t) {
                  var i = e.width,
                    r = e.height,
                    n = i,
                    s = r;
                  t.forEach(function (t) {
                    var i = t.contentBoxSize,
                      r = t.contentRect,
                      a = t.target;
                    (a && a !== e.el) ||
                      ((n = r ? r.width : (i[0] || i).inlineSize),
                      (s = r ? r.height : (i[0] || i).blockSize));
                  }),
                    (n === i && s === r) || e.resize.resizeHandler();
                })),
                e.resize.observer.observe(e.el));
            },
            removeObserver: function () {
              e.resize.observer &&
                e.resize.observer.unobserve &&
                e.el &&
                (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
            },
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit('beforeResize'), e.emit('resize'));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit('orientationchange');
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = Ea();
          e.params.resizeObserver && void 0 !== Ea().ResizeObserver
            ? e.resize.createObserver()
            : (t.addEventListener('resize', e.resize.resizeHandler),
              t.addEventListener(
                'orientationchange',
                e.resize.orientationChangeHandler
              ));
        },
        destroy: function (e) {
          var t = Ea();
          e.resize.removeObserver(),
            t.removeEventListener('resize', e.resize.resizeHandler),
            t.removeEventListener(
              'orientationchange',
              e.resize.orientationChangeHandler
            );
        },
      },
    };
    function to() {
      return (to =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var io = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var i = Ea(),
            r = this,
            n = new (i.MutationObserver || i.WebkitMutationObserver)(function (
              e
            ) {
              if (1 !== e.length) {
                var t = function () {
                  r.emit('observerUpdate', e[0]);
                };
                i.requestAnimationFrame
                  ? i.requestAnimationFrame(t)
                  : i.setTimeout(t, 0);
              } else r.emit('observerUpdate', e[0]);
            });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            r.observer.observers.push(n);
        },
        init: function () {
          if (this.support.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: this.params.observeSlideChildren,
            }),
              this.observer.attach(this.$wrapperEl[0], {
                attributes: !1,
              });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      ro = {
        name: 'observer',
        params: {
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1,
        },
        create: function () {
          Wa(this, {
            observer: to({}, io, {
              observers: [],
            }),
          });
        },
        on: {
          init: function (e) {
            e.observer.init();
          },
          destroy: function (e) {
            e.observer.destroy();
          },
        },
      };
    function no(e) {
      var t = xa(),
        i = Ea(),
        r = this.touchEventsData,
        n = this.params,
        s = this.touches;
      if (
        this.enabled &&
        (!this.animating || !n.preventInteractionOnTransition)
      ) {
        var a = e;
        a.originalEvent && (a = a.originalEvent);
        var o = Na(a.target);
        if (
          ('wrapper' !== n.touchEventsTarget ||
            o.closest(this.wrapperEl).length) &&
          ((r.isTouchEvent = 'touchstart' === a.type),
          (r.isTouchEvent || !('which' in a) || 3 !== a.which) &&
            !(
              (!r.isTouchEvent && 'button' in a && a.button > 0) ||
              (r.isTouched && r.isMoved)
            ))
        ) {
          !!n.noSwipingClass &&
            '' !== n.noSwipingClass &&
            a.target &&
            a.target.shadowRoot &&
            e.path &&
            e.path[0] &&
            (o = Na(e.path[0]));
          var l = n.noSwipingSelector
              ? n.noSwipingSelector
              : '.' + n.noSwipingClass,
            c = !(!a.target || !a.target.shadowRoot);
          if (
            n.noSwiping &&
            (c
              ? (function (e, t) {
                  return (
                    void 0 === t && (t = this),
                    (function t(i) {
                      return i && i !== xa() && i !== Ea()
                        ? (i.assignedSlot && (i = i.assignedSlot),
                          i.closest(e) || t(i.getRootNode().host))
                        : null;
                    })(t)
                  );
                })(l, a.target)
              : o.closest(l)[0])
          )
            this.allowClick = !0;
          else if (!n.swipeHandler || o.closest(n.swipeHandler)[0]) {
            (s.currentX =
              'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX),
              (s.currentY =
                'touchstart' === a.type ? a.targetTouches[0].pageY : a.pageY);
            var u = s.currentX,
              d = s.currentY,
              h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
              p = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
            if (h && (u <= p || u >= i.innerWidth - p)) {
              if ('prevent' !== h) return;
              e.preventDefault();
            }
            if (
              ($a(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (s.startX = u),
              (s.startY = d),
              (r.touchStartTime = Va()),
              (this.allowClick = !0),
              this.updateSize(),
              (this.swipeDirection = void 0),
              n.threshold > 0 && (r.allowThresholdMove = !1),
              'touchstart' !== a.type)
            ) {
              var f = !0;
              o.is(r.focusableElements) && (f = !1),
                t.activeElement &&
                  Na(t.activeElement).is(r.focusableElements) &&
                  t.activeElement !== o[0] &&
                  t.activeElement.blur();
              var v = f && this.allowTouchMove && n.touchStartPreventDefault;
              (!n.touchStartForcePreventDefault && !v) ||
                o[0].isContentEditable ||
                a.preventDefault();
            }
            this.emit('touchStart', a);
          }
        }
      }
    }
    function so(e) {
      var t = xa(),
        i = this.touchEventsData,
        r = this.params,
        n = this.touches,
        s = this.rtlTranslate;
      if (this.enabled) {
        var a = e;
        if ((a.originalEvent && (a = a.originalEvent), i.isTouched)) {
          if (!i.isTouchEvent || 'touchmove' === a.type) {
            var o =
                'touchmove' === a.type &&
                a.targetTouches &&
                (a.targetTouches[0] || a.changedTouches[0]),
              l = 'touchmove' === a.type ? o.pageX : a.pageX,
              c = 'touchmove' === a.type ? o.pageY : a.pageY;
            if (a.preventedByNestedSwiper)
              return (n.startX = l), void (n.startY = c);
            if (!this.allowTouchMove)
              return (
                (this.allowClick = !1),
                void (
                  i.isTouched &&
                  ($a(n, {
                    startX: l,
                    startY: c,
                    currentX: l,
                    currentY: c,
                  }),
                  (i.touchStartTime = Va()))
                )
              );
            if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
              if (this.isVertical()) {
                if (
                  (c < n.startY && this.translate <= this.maxTranslate()) ||
                  (c > n.startY && this.translate >= this.minTranslate())
                )
                  return (i.isTouched = !1), void (i.isMoved = !1);
              } else if (
                (l < n.startX && this.translate <= this.maxTranslate()) ||
                (l > n.startX && this.translate >= this.minTranslate())
              )
                return;
            if (
              i.isTouchEvent &&
              t.activeElement &&
              a.target === t.activeElement &&
              Na(a.target).is(i.focusableElements)
            )
              return (i.isMoved = !0), void (this.allowClick = !1);
            if (
              (i.allowTouchCallbacks && this.emit('touchMove', a),
              !(a.targetTouches && a.targetTouches.length > 1))
            ) {
              (n.currentX = l), (n.currentY = c);
              var u = n.currentX - n.startX,
                d = n.currentY - n.startY;
              if (
                !(
                  this.params.threshold &&
                  Math.sqrt(Math.pow(u, 2) + Math.pow(d, 2)) <
                    this.params.threshold
                )
              ) {
                var h;
                if (void 0 === i.isScrolling)
                  (this.isHorizontal() && n.currentY === n.startY) ||
                  (this.isVertical() && n.currentX === n.startX)
                    ? (i.isScrolling = !1)
                    : u * u + d * d >= 25 &&
                      ((h =
                        (180 * Math.atan2(Math.abs(d), Math.abs(u))) / Math.PI),
                      (i.isScrolling = this.isHorizontal()
                        ? h > r.touchAngle
                        : 90 - h > r.touchAngle));
                if (
                  (i.isScrolling && this.emit('touchMoveOpposite', a),
                  void 0 === i.startMoving &&
                    ((n.currentX === n.startX && n.currentY === n.startY) ||
                      (i.startMoving = !0)),
                  i.isScrolling)
                )
                  i.isTouched = !1;
                else if (i.startMoving) {
                  (this.allowClick = !1),
                    !r.cssMode && a.cancelable && a.preventDefault(),
                    r.touchMoveStopPropagation &&
                      !r.nested &&
                      a.stopPropagation(),
                    i.isMoved ||
                      (r.loop && this.loopFix(),
                      (i.startTranslate = this.getTranslate()),
                      this.setTransition(0),
                      this.animating &&
                        this.$wrapperEl.trigger(
                          'webkitTransitionEnd transitionend'
                        ),
                      (i.allowMomentumBounce = !1),
                      !r.grabCursor ||
                        (!0 !== this.allowSlideNext &&
                          !0 !== this.allowSlidePrev) ||
                        this.setGrabCursor(!0),
                      this.emit('sliderFirstMove', a)),
                    this.emit('sliderMove', a),
                    (i.isMoved = !0);
                  var p = this.isHorizontal() ? u : d;
                  (n.diff = p),
                    (p *= r.touchRatio),
                    s && (p = -p),
                    (this.swipeDirection = p > 0 ? 'prev' : 'next'),
                    (i.currentTranslate = p + i.startTranslate);
                  var f = !0,
                    v = r.resistanceRatio;
                  if (
                    (r.touchReleaseOnEdges && (v = 0),
                    p > 0 && i.currentTranslate > this.minTranslate()
                      ? ((f = !1),
                        r.resistance &&
                          (i.currentTranslate =
                            this.minTranslate() -
                            1 +
                            Math.pow(
                              -this.minTranslate() + i.startTranslate + p,
                              v
                            )))
                      : p < 0 &&
                        i.currentTranslate < this.maxTranslate() &&
                        ((f = !1),
                        r.resistance &&
                          (i.currentTranslate =
                            this.maxTranslate() +
                            1 -
                            Math.pow(
                              this.maxTranslate() - i.startTranslate - p,
                              v
                            ))),
                    f && (a.preventedByNestedSwiper = !0),
                    !this.allowSlideNext &&
                      'next' === this.swipeDirection &&
                      i.currentTranslate < i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    !this.allowSlidePrev &&
                      'prev' === this.swipeDirection &&
                      i.currentTranslate > i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    this.allowSlidePrev ||
                      this.allowSlideNext ||
                      (i.currentTranslate = i.startTranslate),
                    r.threshold > 0)
                  ) {
                    if (!(Math.abs(p) > r.threshold || i.allowThresholdMove))
                      return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove)
                      return (
                        (i.allowThresholdMove = !0),
                        (n.startX = n.currentX),
                        (n.startY = n.currentY),
                        (i.currentTranslate = i.startTranslate),
                        void (n.diff = this.isHorizontal()
                          ? n.currentX - n.startX
                          : n.currentY - n.startY)
                      );
                  }
                  r.followFinger &&
                    !r.cssMode &&
                    ((r.freeMode ||
                      r.watchSlidesProgress ||
                      r.watchSlidesVisibility) &&
                      (this.updateActiveIndex(), this.updateSlidesClasses()),
                    r.freeMode &&
                      (0 === i.velocities.length &&
                        i.velocities.push({
                          position:
                            n[this.isHorizontal() ? 'startX' : 'startY'],
                          time: i.touchStartTime,
                        }),
                      i.velocities.push({
                        position:
                          n[this.isHorizontal() ? 'currentX' : 'currentY'],
                        time: Va(),
                      })),
                    this.updateProgress(i.currentTranslate),
                    this.setTranslate(i.currentTranslate));
                }
              }
            }
          }
        } else
          i.startMoving && i.isScrolling && this.emit('touchMoveOpposite', a);
      }
    }
    function ao(e) {
      var t = this,
        i = t.touchEventsData,
        r = t.params,
        n = t.touches,
        s = t.rtlTranslate,
        a = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid;
      if (t.enabled) {
        var c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          i.allowTouchCallbacks && t.emit('touchEnd', c),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && r.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        r.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var u,
          d = Va(),
          h = d - i.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(c),
            t.emit('tap click', c),
            h < 300 &&
              d - i.lastClickTime < 300 &&
              t.emit('doubleTap doubleClick', c)),
          (i.lastClickTime = Va()),
          Ga(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = r.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -i.currentTranslate),
          !r.cssMode)
        )
          if (r.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (r.freeModeMomentum) {
              if (i.velocities.length > 1) {
                var p = i.velocities.pop(),
                  f = i.velocities.pop(),
                  v = p.position - f.position,
                  g = p.time - f.time;
                (t.velocity = v / g),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < r.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (g > 150 || Va() - p.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= r.freeModeMomentumVelocityRatio),
                (i.velocities.length = 0);
              var m = 1e3 * r.freeModeMomentumRatio,
                y = t.velocity * m,
                b = t.translate + y;
              s && (b = -b);
              var _,
                w,
                T = !1,
                x = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
              if (b < t.maxTranslate())
                r.freeModeMomentumBounce
                  ? (b + t.maxTranslate() < -x && (b = t.maxTranslate() - x),
                    (_ = t.maxTranslate()),
                    (T = !0),
                    (i.allowMomentumBounce = !0))
                  : (b = t.maxTranslate()),
                  r.loop && r.centeredSlides && (w = !0);
              else if (b > t.minTranslate())
                r.freeModeMomentumBounce
                  ? (b - t.minTranslate() > x && (b = t.minTranslate() + x),
                    (_ = t.minTranslate()),
                    (T = !0),
                    (i.allowMomentumBounce = !0))
                  : (b = t.minTranslate()),
                  r.loop && r.centeredSlides && (w = !0);
              else if (r.freeModeSticky) {
                for (var S, E = 0; E < l.length; E += 1)
                  if (l[E] > -b) {
                    S = E;
                    break;
                  }
                b = -(b =
                  Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) ||
                  'next' === t.swipeDirection
                    ? l[S]
                    : l[S - 1]);
              }
              if (
                (w &&
                  t.once('transitionEnd', function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((m = s
                    ? Math.abs((-b - t.translate) / t.velocity)
                    : Math.abs((b - t.translate) / t.velocity)),
                  r.freeModeSticky)
                ) {
                  var C = Math.abs((s ? -b : b) - t.translate),
                    k = t.slidesSizesGrid[t.activeIndex];
                  m =
                    C < k ? r.speed : C < 2 * k ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeModeSticky) return void t.slideToClosest();
              r.freeModeMomentumBounce && T
                ? (t.updateProgress(_),
                  t.setTransition(m),
                  t.setTranslate(b),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  a.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      i.allowMomentumBounce &&
                      (t.emit('momentumBounce'),
                      t.setTransition(r.speed),
                      setTimeout(function () {
                        t.setTranslate(_),
                          a.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(b),
                  t.setTransition(m),
                  t.setTranslate(b),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    a.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : (t.emit('_freeModeNoMomentumRelease'), t.updateProgress(b)),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else {
              if (r.freeModeSticky) return void t.slideToClosest();
              r.freeMode && t.emit('_freeModeNoMomentumRelease');
            }
            (!r.freeModeMomentum || h >= r.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses());
          } else {
            for (
              var L = 0, M = t.slidesSizesGrid[0], A = 0;
              A < o.length;
              A += A < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
            ) {
              var P = A < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              void 0 !== o[A + P]
                ? u >= o[A] && u < o[A + P] && ((L = A), (M = o[A + P] - o[A]))
                : u >= o[A] &&
                  ((L = A), (M = o[o.length - 1] - o[o.length - 2]));
            }
            var O = (u - o[L]) / M,
              D = L < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (h > r.longSwipesMs) {
              if (!r.longSwipes) return void t.slideTo(t.activeIndex);
              'next' === t.swipeDirection &&
                (O >= r.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L)),
                'prev' === t.swipeDirection &&
                  (O > 1 - r.longSwipesRatio ? t.slideTo(L + D) : t.slideTo(L));
            } else {
              if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
              t.navigation &&
              (c.target === t.navigation.nextEl ||
                c.target === t.navigation.prevEl)
                ? c.target === t.navigation.nextEl
                  ? t.slideTo(L + D)
                  : t.slideTo(L)
                : ('next' === t.swipeDirection && t.slideTo(L + D),
                  'prev' === t.swipeDirection && t.slideTo(L));
            }
          }
      }
    }
    function oo() {
      var e = this.params,
        t = this.el;
      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          r = this.allowSlidePrev,
          n = this.snapGrid;
        (this.allowSlideNext = !0),
          (this.allowSlidePrev = !0),
          this.updateSize(),
          this.updateSlides(),
          this.updateSlidesClasses(),
          ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
          this.isEnd &&
          !this.isBeginning &&
          !this.params.centeredSlides
            ? this.slideTo(this.slides.length - 1, 0, !1, !0)
            : this.slideTo(this.activeIndex, 0, !1, !0),
          this.autoplay &&
            this.autoplay.running &&
            this.autoplay.paused &&
            this.autoplay.run(),
          (this.allowSlidePrev = r),
          (this.allowSlideNext = i),
          this.params.watchOverflow &&
            n !== this.snapGrid &&
            this.checkOverflow();
      }
    }
    function lo(e) {
      this.enabled &&
        (this.allowClick ||
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function co() {
      var e = this.wrapperEl,
        t = this.rtlTranslate;
      if (this.enabled) {
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = t
                ? e.scrollWidth - e.offsetWidth - e.scrollLeft
                : -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          -0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit('setTranslate', this.translate, !1);
      }
    }
    var uo = !1;
    function ho() {}
    var po = {
      init: !0,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: 'swiper-container-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function fo(e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var vo = {
        modular: {
          useParams: function (e) {
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (i) {
                var r = t.modules[i];
                r.params && $a(e, r.params);
              });
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (i) {
                var r = t.modules[i],
                  n = e[i] || {};
                r.on &&
                  t.on &&
                  Object.keys(r.on).forEach(function (e) {
                    t.on(e, r.on[e]);
                  }),
                  r.create && r.create.bind(t)(n);
              });
          },
        },
        eventsEmitter: {
          on: function (e, t, i) {
            var r = this;
            if ('function' != typeof t) return r;
            var n = i ? 'unshift' : 'push';
            return (
              e.split(' ').forEach(function (e) {
                r.eventsListeners[e] || (r.eventsListeners[e] = []),
                  r.eventsListeners[e][n](t);
              }),
              r
            );
          },
          once: function (e, t, i) {
            var r = this;
            if ('function' != typeof t) return r;
            function n() {
              r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
              for (
                var i = arguments.length, s = new Array(i), a = 0;
                a < i;
                a++
              )
                s[a] = arguments[a];
              t.apply(r, s);
            }
            return (n.__emitterProxy = t), r.on(e, n, i);
          },
          onAny: function (e, t) {
            if ('function' != typeof e) return this;
            var i = t ? 'unshift' : 'push';
            return (
              this.eventsAnyListeners.indexOf(e) < 0 &&
                this.eventsAnyListeners[i](e),
              this
            );
          },
          offAny: function (e) {
            if (!this.eventsAnyListeners) return this;
            var t = this.eventsAnyListeners.indexOf(e);
            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
          },
          off: function (e, t) {
            var i = this;
            return i.eventsListeners
              ? (e.split(' ').forEach(function (e) {
                  void 0 === t
                    ? (i.eventsListeners[e] = [])
                    : i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach(function (r, n) {
                        (r === t ||
                          (r.__emitterProxy && r.__emitterProxy === t)) &&
                          i.eventsListeners[e].splice(n, 1);
                      });
                }),
                i)
              : i;
          },
          emit: function () {
            var e,
              t,
              i,
              r = this;
            if (!r.eventsListeners) return r;
            for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++)
              s[a] = arguments[a];
            'string' == typeof s[0] || Array.isArray(s[0])
              ? ((e = s[0]), (t = s.slice(1, s.length)), (i = r))
              : ((e = s[0].events), (t = s[0].data), (i = s[0].context || r)),
              t.unshift(i);
            var o = Array.isArray(e) ? e : e.split(' ');
            return (
              o.forEach(function (e) {
                r.eventsAnyListeners &&
                  r.eventsAnyListeners.length &&
                  r.eventsAnyListeners.forEach(function (r) {
                    r.apply(i, [e].concat(t));
                  }),
                  r.eventsListeners &&
                    r.eventsListeners[e] &&
                    r.eventsListeners[e].forEach(function (e) {
                      e.apply(i, t);
                    });
              }),
              r
            );
          },
        },
        update: {
          updateSize: function () {
            var e,
              t,
              i = this.$el;
            (e =
              void 0 !== this.params.width && null !== this.params.width
                ? this.params.width
                : i[0].clientWidth),
              (t =
                void 0 !== this.params.height && null !== this.params.height
                  ? this.params.height
                  : i[0].clientHeight),
              (0 === e && this.isHorizontal()) ||
                (0 === t && this.isVertical()) ||
                ((e =
                  e -
                  parseInt(i.css('padding-left') || 0, 10) -
                  parseInt(i.css('padding-right') || 0, 10)),
                (t =
                  t -
                  parseInt(i.css('padding-top') || 0, 10) -
                  parseInt(i.css('padding-bottom') || 0, 10)),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(t) && (t = 0),
                $a(this, {
                  width: e,
                  height: t,
                  size: this.isHorizontal() ? e : t,
                }));
          },
          updateSlides: function () {
            var e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                  }[t];
            }
            function i(e, i) {
              return parseFloat(e.getPropertyValue(t(i)) || 0);
            }
            var r = e.params,
              n = e.$wrapperEl,
              s = e.size,
              a = e.rtlTranslate,
              o = e.wrongRTL,
              l = e.virtual && r.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              u = n.children('.' + e.params.slideClass),
              d = l ? e.virtual.slides.length : u.length,
              h = [],
              p = [],
              f = [],
              v = r.slidesOffsetBefore;
            'function' == typeof v && (v = r.slidesOffsetBefore.call(e));
            var g = r.slidesOffsetAfter;
            'function' == typeof g && (g = r.slidesOffsetAfter.call(e));
            var m = e.snapGrid.length,
              y = e.slidesGrid.length,
              b = r.spaceBetween,
              _ = -v,
              w = 0,
              T = 0;
            if (void 0 !== s) {
              var x, S;
              'string' == typeof b &&
                b.indexOf('%') >= 0 &&
                (b = (parseFloat(b.replace('%', '')) / 100) * s),
                (e.virtualSize = -b),
                a
                  ? u.css({
                      marginLeft: '',
                      marginBottom: '',
                      marginTop: '',
                    })
                  : u.css({
                      marginRight: '',
                      marginBottom: '',
                      marginTop: '',
                    }),
                r.slidesPerColumn > 1 &&
                  ((x =
                    Math.floor(d / r.slidesPerColumn) ===
                    d / e.params.slidesPerColumn
                      ? d
                      : Math.ceil(d / r.slidesPerColumn) * r.slidesPerColumn),
                  'auto' !== r.slidesPerView &&
                    'row' === r.slidesPerColumnFill &&
                    (x = Math.max(x, r.slidesPerView * r.slidesPerColumn)));
              for (
                var E,
                  C,
                  k,
                  L = r.slidesPerColumn,
                  M = x / L,
                  A = Math.floor(d / r.slidesPerColumn),
                  P = 0;
                P < d;
                P += 1
              ) {
                S = 0;
                var O = u.eq(P);
                if (r.slidesPerColumn > 1) {
                  var D = void 0,
                    z = void 0,
                    I = void 0;
                  if ('row' === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                    var j = Math.floor(
                        P / (r.slidesPerGroup * r.slidesPerColumn)
                      ),
                      q = P - r.slidesPerColumn * r.slidesPerGroup * j,
                      B =
                        0 === j
                          ? r.slidesPerGroup
                          : Math.min(
                              Math.ceil((d - j * L * r.slidesPerGroup) / L),
                              r.slidesPerGroup
                            );
                    (D =
                      (z =
                        q -
                        (I = Math.floor(q / B)) * B +
                        j * r.slidesPerGroup) +
                      (I * x) / L),
                      O.css({
                        '-webkit-box-ordinal-group': D,
                        '-moz-box-ordinal-group': D,
                        '-ms-flex-order': D,
                        '-webkit-order': D,
                        order: D,
                      });
                  } else
                    'column' === r.slidesPerColumnFill
                      ? ((I = P - (z = Math.floor(P / L)) * L),
                        (z > A || (z === A && I === L - 1)) &&
                          (I += 1) >= L &&
                          ((I = 0), (z += 1)))
                      : (z = P - (I = Math.floor(P / M)) * M);
                  O.css(
                    t('margin-top'),
                    0 !== I ? r.spaceBetween && r.spaceBetween + 'px' : ''
                  );
                }
                if ('none' !== O.css('display')) {
                  if ('auto' === r.slidesPerView) {
                    var F = getComputedStyle(O[0]),
                      R = O[0].style.transform,
                      N = O[0].style.webkitTransform;
                    if (
                      (R && (O[0].style.transform = 'none'),
                      N && (O[0].style.webkitTransform = 'none'),
                      r.roundLengths)
                    )
                      S = e.isHorizontal()
                        ? O.outerWidth(!0)
                        : O.outerHeight(!0);
                    else {
                      var G = i(F, 'width'),
                        V = i(F, 'padding-left'),
                        H = i(F, 'padding-right'),
                        Y = i(F, 'margin-left'),
                        X = i(F, 'margin-right'),
                        $ = F.getPropertyValue('box-sizing');
                      if ($ && 'border-box' === $) S = G + Y + X;
                      else {
                        var W = O[0],
                          U = W.clientWidth;
                        S = G + V + H + Y + X + (W.offsetWidth - U);
                      }
                    }
                    R && (O[0].style.transform = R),
                      N && (O[0].style.webkitTransform = N),
                      r.roundLengths && (S = Math.floor(S));
                  } else
                    (S = (s - (r.slidesPerView - 1) * b) / r.slidesPerView),
                      r.roundLengths && (S = Math.floor(S)),
                      u[P] && (u[P].style[t('width')] = S + 'px');
                  u[P] && (u[P].swiperSlideSize = S),
                    f.push(S),
                    r.centeredSlides
                      ? ((_ = _ + S / 2 + w / 2 + b),
                        0 === w && 0 !== P && (_ = _ - s / 2 - b),
                        0 === P && (_ = _ - s / 2 - b),
                        Math.abs(_) < 0.001 && (_ = 0),
                        r.roundLengths && (_ = Math.floor(_)),
                        T % r.slidesPerGroup == 0 && h.push(_),
                        p.push(_))
                      : (r.roundLengths && (_ = Math.floor(_)),
                        (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                          e.params.slidesPerGroup ==
                          0 && h.push(_),
                        p.push(_),
                        (_ = _ + S + b)),
                    (e.virtualSize += S + b),
                    (w = S),
                    (T += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, s) + g),
                a &&
                  o &&
                  ('slide' === r.effect || 'coverflow' === r.effect) &&
                  n.css({
                    width: e.virtualSize + r.spaceBetween + 'px',
                  }),
                r.setWrapperSize)
              )
                n.css(
                  (((C = {})[t('width')] =
                    e.virtualSize + r.spaceBetween + 'px'),
                  C)
                );
              if (r.slidesPerColumn > 1)
                if (
                  ((e.virtualSize = (S + r.spaceBetween) * x),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / r.slidesPerColumn) -
                    r.spaceBetween),
                  n.css(
                    (((k = {})[t('width')] =
                      e.virtualSize + r.spaceBetween + 'px'),
                    k)
                  ),
                  r.centeredSlides)
                ) {
                  E = [];
                  for (var K = 0; K < h.length; K += 1) {
                    var Q = h[K];
                    r.roundLengths && (Q = Math.floor(Q)),
                      h[K] < e.virtualSize + h[0] && E.push(Q);
                  }
                  h = E;
                }
              if (!r.centeredSlides) {
                E = [];
                for (var Z = 0; Z < h.length; Z += 1) {
                  var J = h[Z];
                  r.roundLengths && (J = Math.floor(J)),
                    h[Z] <= e.virtualSize - s && E.push(J);
                }
                (h = E),
                  Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) >
                    1 && h.push(e.virtualSize - s);
              }
              if ((0 === h.length && (h = [0]), 0 !== r.spaceBetween)) {
                var ee,
                  te = e.isHorizontal() && a ? 'marginLeft' : t('marginRight');
                u.filter(function (e, t) {
                  return !r.cssMode || t !== u.length - 1;
                }).css((((ee = {})[te] = b + 'px'), ee));
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                var ie = 0;
                f.forEach(function (e) {
                  ie += e + (r.spaceBetween ? r.spaceBetween : 0);
                });
                var re = (ie -= r.spaceBetween) - s;
                h = h.map(function (e) {
                  return e < 0 ? -v : e > re ? re + g : e;
                });
              }
              if (r.centerInsufficientSlides) {
                var ne = 0;
                if (
                  (f.forEach(function (e) {
                    ne += e + (r.spaceBetween ? r.spaceBetween : 0);
                  }),
                  (ne -= r.spaceBetween) < s)
                ) {
                  var se = (s - ne) / 2;
                  h.forEach(function (e, t) {
                    h[t] = e - se;
                  }),
                    p.forEach(function (e, t) {
                      p[t] = e + se;
                    });
                }
              }
              $a(e, {
                slides: u,
                snapGrid: h,
                slidesGrid: p,
                slidesSizesGrid: f,
              }),
                d !== c && e.emit('slidesLengthChange'),
                h.length !== m &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit('snapGridLengthChange')),
                p.length !== y && e.emit('slidesGridLengthChange'),
                (r.watchSlidesProgress || r.watchSlidesVisibility) &&
                  e.updateSlidesOffset();
            }
          },
          updateAutoHeight: function (e) {
            var t,
              i = this,
              r = [],
              n = i.virtual && i.params.virtual.enabled,
              s = 0;
            'number' == typeof e
              ? i.setTransition(e)
              : !0 === e && i.setTransition(i.params.speed);
            var a = function (e) {
              return n
                ? i.slides.filter(function (t) {
                    return (
                      parseInt(
                        t.getAttribute('data-swiper-slide-index'),
                        10
                      ) === e
                    );
                  })[0]
                : i.slides.eq(e)[0];
            };
            if ('auto' !== i.params.slidesPerView && i.params.slidesPerView > 1)
              if (i.params.centeredSlides)
                i.visibleSlides.each(function (e) {
                  r.push(e);
                });
              else
                for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                  var o = i.activeIndex + t;
                  if (o > i.slides.length && !n) break;
                  r.push(a(o));
                }
            else r.push(a(i.activeIndex));
            for (t = 0; t < r.length; t += 1)
              if (void 0 !== r[t]) {
                var l = r[t].offsetHeight;
                s = l > s ? l : s;
              }
            s && i.$wrapperEl.css('height', s + 'px');
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                ? e[t].offsetLeft
                : e[t].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this.params,
              i = this.slides,
              r = this.rtlTranslate;
            if (0 !== i.length) {
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              var n = -e;
              r && (n = e),
                i.removeClass(t.slideVisibleClass),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              for (var s = 0; s < i.length; s += 1) {
                var a = i[s],
                  o =
                    (n +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      a.swiperSlideOffset) /
                    (a.swiperSlideSize + t.spaceBetween);
                if (
                  t.watchSlidesVisibility ||
                  (t.centeredSlides && t.autoHeight)
                ) {
                  var l = -(n - a.swiperSlideOffset),
                    c = l + this.slidesSizesGrid[s];
                  ((l >= 0 && l < this.size - 1) ||
                    (c > 1 && c <= this.size) ||
                    (l <= 0 && c >= this.size)) &&
                    (this.visibleSlides.push(a),
                    this.visibleSlidesIndexes.push(s),
                    i.eq(s).addClass(t.slideVisibleClass));
                }
                a.progress = r ? -o : o;
              }
              this.visibleSlides = Na(this.visibleSlides);
            }
          },
          updateProgress: function (e) {
            if (void 0 === e) {
              var t = this.rtlTranslate ? -1 : 1;
              e = (this && this.translate && this.translate * t) || 0;
            }
            var i = this.params,
              r = this.maxTranslate() - this.minTranslate(),
              n = this.progress,
              s = this.isBeginning,
              a = this.isEnd,
              o = s,
              l = a;
            0 === r
              ? ((n = 0), (s = !0), (a = !0))
              : ((s = (n = (e - this.minTranslate()) / r) <= 0), (a = n >= 1)),
              $a(this, {
                progress: n,
                isBeginning: s,
                isEnd: a,
              }),
              (i.watchSlidesProgress ||
                i.watchSlidesVisibility ||
                (i.centeredSlides && i.autoHeight)) &&
                this.updateSlidesProgress(e),
              s && !o && this.emit('reachBeginning toEdge'),
              a && !l && this.emit('reachEnd toEdge'),
              ((o && !s) || (l && !a)) && this.emit('fromEdge'),
              this.emit('progress', n);
          },
          updateSlidesClasses: function () {
            var e,
              t = this.slides,
              i = this.params,
              r = this.$wrapperEl,
              n = this.activeIndex,
              s = this.realIndex,
              a = this.virtual && i.virtual.enabled;
            t.removeClass(
              i.slideActiveClass +
                ' ' +
                i.slideNextClass +
                ' ' +
                i.slidePrevClass +
                ' ' +
                i.slideDuplicateActiveClass +
                ' ' +
                i.slideDuplicateNextClass +
                ' ' +
                i.slideDuplicatePrevClass
            ),
              (e = a
                ? this.$wrapperEl.find(
                    '.' + i.slideClass + '[data-swiper-slide-index="' + n + '"]'
                  )
                : t.eq(n)).addClass(i.slideActiveClass),
              i.loop &&
                (e.hasClass(i.slideDuplicateClass)
                  ? r
                      .children(
                        '.' +
                          i.slideClass +
                          ':not(.' +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          s +
                          '"]'
                      )
                      .addClass(i.slideDuplicateActiveClass)
                  : r
                      .children(
                        '.' +
                          i.slideClass +
                          '.' +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          s +
                          '"]'
                      )
                      .addClass(i.slideDuplicateActiveClass));
            var o = e
              .nextAll('.' + i.slideClass)
              .eq(0)
              .addClass(i.slideNextClass);
            i.loop &&
              0 === o.length &&
              (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e
              .prevAll('.' + i.slideClass)
              .eq(0)
              .addClass(i.slidePrevClass);
            i.loop &&
              0 === l.length &&
              (l = t.eq(-1)).addClass(i.slidePrevClass),
              i.loop &&
                (o.hasClass(i.slideDuplicateClass)
                  ? r
                      .children(
                        '.' +
                          i.slideClass +
                          ':not(.' +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          o.attr('data-swiper-slide-index') +
                          '"]'
                      )
                      .addClass(i.slideDuplicateNextClass)
                  : r
                      .children(
                        '.' +
                          i.slideClass +
                          '.' +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          o.attr('data-swiper-slide-index') +
                          '"]'
                      )
                      .addClass(i.slideDuplicateNextClass),
                l.hasClass(i.slideDuplicateClass)
                  ? r
                      .children(
                        '.' +
                          i.slideClass +
                          ':not(.' +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          l.attr('data-swiper-slide-index') +
                          '"]'
                      )
                      .addClass(i.slideDuplicatePrevClass)
                  : r
                      .children(
                        '.' +
                          i.slideClass +
                          '.' +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          l.attr('data-swiper-slide-index') +
                          '"]'
                      )
                      .addClass(i.slideDuplicatePrevClass)),
              this.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t,
              i = this.rtlTranslate ? this.translate : -this.translate,
              r = this.slidesGrid,
              n = this.snapGrid,
              s = this.params,
              a = this.activeIndex,
              o = this.realIndex,
              l = this.snapIndex,
              c = e;
            if (void 0 === c) {
              for (var u = 0; u < r.length; u += 1)
                void 0 !== r[u + 1]
                  ? i >= r[u] && i < r[u + 1] - (r[u + 1] - r[u]) / 2
                    ? (c = u)
                    : i >= r[u] && i < r[u + 1] && (c = u + 1)
                  : i >= r[u] && (c = u);
              s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (n.indexOf(i) >= 0) t = n.indexOf(i);
            else {
              var d = Math.min(s.slidesPerGroupSkip, c);
              t = d + Math.floor((c - d) / s.slidesPerGroup);
            }
            if ((t >= n.length && (t = n.length - 1), c !== a)) {
              var h = parseInt(
                this.slides.eq(c).attr('data-swiper-slide-index') || c,
                10
              );
              $a(this, {
                snapIndex: t,
                realIndex: h,
                previousIndex: a,
                activeIndex: c,
              }),
                this.emit('activeIndexChange'),
                this.emit('snapIndexChange'),
                o !== h && this.emit('realIndexChange'),
                (this.initialized || this.params.runCallbacksOnInit) &&
                  this.emit('slideChange');
            } else
              t !== l && ((this.snapIndex = t), this.emit('snapIndexChange'));
          },
          updateClickedSlide: function (e) {
            var t,
              i = this.params,
              r = Na(e.target).closest('.' + i.slideClass)[0],
              n = !1;
            if (r)
              for (var s = 0; s < this.slides.length; s += 1)
                if (this.slides[s] === r) {
                  (n = !0), (t = s);
                  break;
                }
            if (!r || !n)
              return (
                (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
              );
            (this.clickedSlide = r),
              this.virtual && this.params.virtual.enabled
                ? (this.clickedIndex = parseInt(
                    Na(r).attr('data-swiper-slide-index'),
                    10
                  ))
                : (this.clickedIndex = t),
              i.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
            var t = this.params,
              i = this.rtlTranslate,
              r = this.translate,
              n = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -r : r;
            if (t.cssMode) return r;
            var s = Ha(n[0], e);
            return i && (s = -s), s || 0;
          },
          setTranslate: function (e, t) {
            var i = this.rtlTranslate,
              r = this.params,
              n = this.$wrapperEl,
              s = this.wrapperEl,
              a = this.progress,
              o = 0,
              l = 0;
            this.isHorizontal() ? (o = i ? -e : e) : (l = e),
              r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
              r.cssMode
                ? (s[this.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                    this.isHorizontal() ? -o : -l)
                : r.virtualTranslate ||
                  n.transform('translate3d(' + o + 'px, ' + l + 'px, 0px)'),
              (this.previousTranslate = this.translate),
              (this.translate = this.isHorizontal() ? o : l);
            var c = this.maxTranslate() - this.minTranslate();
            (0 === c ? 0 : (e - this.minTranslate()) / c) !== a &&
              this.updateProgress(e),
              this.emit('setTranslate', this.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, i, r, n) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              void 0 === r && (r = !0);
            var s = this,
              a = s.params,
              o = s.wrapperEl;
            if (s.animating && a.preventInteractionOnTransition) return !1;
            var l,
              c = s.minTranslate(),
              u = s.maxTranslate();
            if (
              ((l = r && e > c ? c : r && e < u ? u : e),
              s.updateProgress(l),
              a.cssMode)
            ) {
              var d,
                h = s.isHorizontal();
              if (0 === t) o[h ? 'scrollLeft' : 'scrollTop'] = -l;
              else if (o.scrollTo)
                o.scrollTo(
                  (((d = {})[h ? 'left' : 'top'] = -l),
                  (d.behavior = 'smooth'),
                  d)
                );
              else o[h ? 'scrollLeft' : 'scrollTop'] = -l;
              return !0;
            }
            return (
              0 === t
                ? (s.setTransition(0),
                  s.setTranslate(l),
                  i &&
                    (s.emit('beforeTransitionStart', t, n),
                    s.emit('transitionEnd')))
                : (s.setTransition(t),
                  s.setTranslate(l),
                  i &&
                    (s.emit('beforeTransitionStart', t, n),
                    s.emit('transitionStart')),
                  s.animating ||
                    ((s.animating = !0),
                    s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          s.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          (s.onTranslateToWrapperTransitionEnd = null),
                          delete s.onTranslateToWrapperTransitionEnd,
                          i && s.emit('transitionEnd'));
                      }),
                    s.$wrapperEl[0].addEventListener(
                      'transitionend',
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      s.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
              this.emit('setTransition', e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              r = this.params,
              n = this.previousIndex;
            if (!r.cssMode) {
              r.autoHeight && this.updateAutoHeight();
              var s = t;
              if (
                (s || (s = i > n ? 'next' : i < n ? 'prev' : 'reset'),
                this.emit('transitionStart'),
                e && i !== n)
              ) {
                if ('reset' === s)
                  return void this.emit('slideResetTransitionStart');
                this.emit('slideChangeTransitionStart'),
                  'next' === s
                    ? this.emit('slideNextTransitionStart')
                    : this.emit('slidePrevTransitionStart');
              }
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              r = this.previousIndex,
              n = this.params;
            if (((this.animating = !1), !n.cssMode)) {
              this.setTransition(0);
              var s = t;
              if (
                (s || (s = i > r ? 'next' : i < r ? 'prev' : 'reset'),
                this.emit('transitionEnd'),
                e && i !== r)
              ) {
                if ('reset' === s)
                  return void this.emit('slideResetTransitionEnd');
                this.emit('slideChangeTransitionEnd'),
                  'next' === s
                    ? this.emit('slideNextTransitionEnd')
                    : this.emit('slidePrevTransitionEnd');
              }
            }
          },
        },
        slide: {
          slideTo: function (e, t, i, r, n) {
            if (
              (void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              'number' != typeof e && 'string' != typeof e)
            )
              throw new Error(
                "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                  typeof e +
                  '] given.'
              );
            if ('string' == typeof e) {
              var s = parseInt(e, 10);
              if (!isFinite(s))
                throw new Error(
                  "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                    e +
                    '] given.'
                );
              e = s;
            }
            var a = this,
              o = e;
            o < 0 && (o = 0);
            var l = a.params,
              c = a.snapGrid,
              u = a.slidesGrid,
              d = a.previousIndex,
              h = a.activeIndex,
              p = a.rtlTranslate,
              f = a.wrapperEl,
              v = a.enabled;
            if (
              (a.animating && l.preventInteractionOnTransition) ||
              (!v && !r && !n)
            )
              return !1;
            var g = Math.min(a.params.slidesPerGroupSkip, o),
              m = g + Math.floor((o - g) / a.params.slidesPerGroup);
            m >= c.length && (m = c.length - 1),
              (h || l.initialSlide || 0) === (d || 0) &&
                i &&
                a.emit('beforeSlideChangeStart');
            var y,
              b = -c[m];
            if ((a.updateProgress(b), l.normalizeSlideIndex))
              for (var _ = 0; _ < u.length; _ += 1) {
                var w = -Math.floor(100 * b),
                  T = Math.floor(100 * u[_]),
                  x = Math.floor(100 * u[_ + 1]);
                void 0 !== u[_ + 1]
                  ? w >= T && w < x - (x - T) / 2
                    ? (o = _)
                    : w >= T && w < x && (o = _ + 1)
                  : w >= T && (o = _);
              }
            if (a.initialized && o !== h) {
              if (!a.allowSlideNext && b < a.translate && b < a.minTranslate())
                return !1;
              if (
                !a.allowSlidePrev &&
                b > a.translate &&
                b > a.maxTranslate() &&
                (h || 0) !== o
              )
                return !1;
            }
            if (
              ((y = o > h ? 'next' : o < h ? 'prev' : 'reset'),
              (p && -b === a.translate) || (!p && b === a.translate))
            )
              return (
                a.updateActiveIndex(o),
                l.autoHeight && a.updateAutoHeight(),
                a.updateSlidesClasses(),
                'slide' !== l.effect && a.setTranslate(b),
                'reset' !== y &&
                  (a.transitionStart(i, y), a.transitionEnd(i, y)),
                !1
              );
            if (l.cssMode) {
              var S,
                E = a.isHorizontal(),
                C = -b;
              if ((p && (C = f.scrollWidth - f.offsetWidth - C), 0 === t))
                f[E ? 'scrollLeft' : 'scrollTop'] = C;
              else if (f.scrollTo)
                f.scrollTo(
                  (((S = {})[E ? 'left' : 'top'] = C),
                  (S.behavior = 'smooth'),
                  S)
                );
              else f[E ? 'scrollLeft' : 'scrollTop'] = C;
              return !0;
            }
            return (
              0 === t
                ? (a.setTransition(0),
                  a.setTranslate(b),
                  a.updateActiveIndex(o),
                  a.updateSlidesClasses(),
                  a.emit('beforeTransitionStart', t, r),
                  a.transitionStart(i, y),
                  a.transitionEnd(i, y))
                : (a.setTransition(t),
                  a.setTranslate(b),
                  a.updateActiveIndex(o),
                  a.updateSlidesClasses(),
                  a.emit('beforeTransitionStart', t, r),
                  a.transitionStart(i, y),
                  a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            a.onSlideToWrapperTransitionEnd
                          ),
                          a.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(i, y));
                      }),
                    a.$wrapperEl[0].addEventListener(
                      'transitionend',
                      a.onSlideToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      a.onSlideToWrapperTransitionEnd
                    ))),
              !0
            );
          },
          slideToLoop: function (e, t, i, r) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0);
            var n = e;
            return (
              this.params.loop && (n += this.loopedSlides),
              this.slideTo(n, t, i, r)
            );
          },
          slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var r = this.params,
              n = this.animating;
            if (!this.enabled) return this;
            var s =
              this.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
            if (r.loop) {
              if (n && r.loopPreventsSlide) return !1;
              this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            return this.slideTo(this.activeIndex + s, e, t, i);
          },
          slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var r = this.params,
              n = this.animating,
              s = this.snapGrid,
              a = this.slidesGrid,
              o = this.rtlTranslate;
            if (!this.enabled) return this;
            if (r.loop) {
              if (n && r.loopPreventsSlide) return !1;
              this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            function l(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var c,
              u = l(o ? this.translate : -this.translate),
              d = s.map(function (e) {
                return l(e);
              }),
              h = s[d.indexOf(u) - 1];
            return (
              void 0 === h &&
                r.cssMode &&
                s.forEach(function (e) {
                  !h && u >= e && (h = e);
                }),
              void 0 !== h &&
                (c = a.indexOf(h)) < 0 &&
                (c = this.activeIndex - 1),
              this.slideTo(c, e, t, i)
            );
          },
          slideReset: function (e, t, i) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, i)
            );
          },
          slideToClosest: function (e, t, i, r) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === r && (r = 0.5);
            var n = this.activeIndex,
              s = Math.min(this.params.slidesPerGroupSkip, n),
              a = s + Math.floor((n - s) / this.params.slidesPerGroup),
              o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[a]) {
              var l = this.snapGrid[a];
              o - l > (this.snapGrid[a + 1] - l) * r &&
                (n += this.params.slidesPerGroup);
            } else {
              var c = this.snapGrid[a - 1];
              o - c <= (this.snapGrid[a] - c) * r &&
                (n -= this.params.slidesPerGroup);
            }
            return (
              (n = Math.max(n, 0)),
              (n = Math.min(n, this.slidesGrid.length - 1)),
              this.slideTo(n, e, t, i)
            );
          },
          slideToClickedSlide: function () {
            var e,
              t = this,
              i = t.params,
              r = t.$wrapperEl,
              n =
                'auto' === i.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : i.slidesPerView,
              s = t.clickedIndex;
            if (i.loop) {
              if (t.animating) return;
              (e = parseInt(
                Na(t.clickedSlide).attr('data-swiper-slide-index'),
                10
              )),
                i.centeredSlides
                  ? s < t.loopedSlides - n / 2 ||
                    s > t.slides.length - t.loopedSlides + n / 2
                    ? (t.loopFix(),
                      (s = r
                        .children(
                          '.' +
                            i.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.slideDuplicateClass +
                            ')'
                        )
                        .eq(0)
                        .index()),
                      Ga(function () {
                        t.slideTo(s);
                      }))
                    : t.slideTo(s)
                  : s > t.slides.length - n
                  ? (t.loopFix(),
                    (s = r
                      .children(
                        '.' +
                          i.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          i.slideDuplicateClass +
                          ')'
                      )
                      .eq(0)
                      .index()),
                    Ga(function () {
                      t.slideTo(s);
                    }))
                  : t.slideTo(s);
            } else t.slideTo(s);
          },
        },
        loop: {
          loopCreate: function () {
            var e = this,
              t = xa(),
              i = e.params,
              r = e.$wrapperEl;
            r.children(
              '.' + i.slideClass + '.' + i.slideDuplicateClass
            ).remove();
            var n = r.children('.' + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              var s = i.slidesPerGroup - (n.length % i.slidesPerGroup);
              if (s !== i.slidesPerGroup) {
                for (var a = 0; a < s; a += 1) {
                  var o = Na(t.createElement('div')).addClass(
                    i.slideClass + ' ' + i.slideBlankClass
                  );
                  r.append(o);
                }
                n = r.children('.' + i.slideClass);
              }
            }
            'auto' !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = n.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(i.loopedSlides || i.slidesPerView, 10)
              )),
              (e.loopedSlides += i.loopAdditionalSlides),
              e.loopedSlides > n.length && (e.loopedSlides = n.length);
            var l = [],
              c = [];
            n.each(function (t, i) {
              var r = Na(t);
              i < e.loopedSlides && c.push(t),
                i < n.length && i >= n.length - e.loopedSlides && l.push(t),
                r.attr('data-swiper-slide-index', i);
            });
            for (var u = 0; u < c.length; u += 1)
              r.append(Na(c[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var d = l.length - 1; d >= 0; d -= 1)
              r.prepend(Na(l[d].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function () {
            this.emit('beforeLoopFix');
            var e,
              t = this.activeIndex,
              i = this.slides,
              r = this.loopedSlides,
              n = this.allowSlidePrev,
              s = this.allowSlideNext,
              a = this.snapGrid,
              o = this.rtlTranslate;
            (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
            var l = -a[t] - this.getTranslate();
            if (t < r)
              (e = i.length - 3 * r + t),
                (e += r),
                this.slideTo(e, 0, !1, !0) &&
                  0 !== l &&
                  this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - r) {
              (e = -i.length + t + r),
                (e += r),
                this.slideTo(e, 0, !1, !0) &&
                  0 !== l &&
                  this.setTranslate((o ? -this.translate : this.translate) - l);
            }
            (this.allowSlidePrev = n),
              (this.allowSlideNext = s),
              this.emit('loopFix');
          },
          loopDestroy: function () {
            var e = this.$wrapperEl,
              t = this.params,
              i = this.slides;
            e
              .children(
                '.' +
                  t.slideClass +
                  '.' +
                  t.slideDuplicateClass +
                  ',.' +
                  t.slideClass +
                  '.' +
                  t.slideBlankClass
              )
              .remove(),
              i.removeAttr('data-swiper-slide-index');
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            if (
              !(
                this.support.touch ||
                !this.params.simulateTouch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode
              )
            ) {
              var t = this.el;
              (t.style.cursor = 'move'),
                (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
                (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                (t.style.cursor = e ? 'grabbing' : 'grab');
            }
          },
          unsetGrabCursor: function () {
            this.support.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this.el.style.cursor = '');
          },
        },
        manipulation: {
          appendSlide: function (e) {
            var t = this.$wrapperEl,
              i = this.params;
            if (
              (i.loop && this.loopDestroy(),
              'object' == typeof e && 'length' in e)
            )
              for (var r = 0; r < e.length; r += 1) e[r] && t.append(e[r]);
            else t.append(e);
            i.loop && this.loopCreate(),
              (i.observer && this.support.observer) || this.update();
          },
          prependSlide: function (e) {
            var t = this.params,
              i = this.$wrapperEl,
              r = this.activeIndex;
            t.loop && this.loopDestroy();
            var n = r + 1;
            if ('object' == typeof e && 'length' in e) {
              for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
              n = r + e.length;
            } else i.prepend(e);
            t.loop && this.loopCreate(),
              (t.observer && this.support.observer) || this.update(),
              this.slideTo(n, 0, !1);
          },
          addSlide: function (e, t) {
            var i = this.$wrapperEl,
              r = this.params,
              n = this.activeIndex;
            r.loop &&
              ((n -= this.loopedSlides),
              this.loopDestroy(),
              (this.slides = i.children('.' + r.slideClass)));
            var s = this.slides.length;
            if (e <= 0) this.prependSlide(t);
            else if (e >= s) this.appendSlide(t);
            else {
              for (
                var a = n > e ? n + 1 : n, o = [], l = s - 1;
                l >= e;
                l -= 1
              ) {
                var c = this.slides.eq(l);
                c.remove(), o.unshift(c);
              }
              if ('object' == typeof t && 'length' in t) {
                for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                a = n > e ? n + t.length : n;
              } else i.append(t);
              for (var d = 0; d < o.length; d += 1) i.append(o[d]);
              r.loop && this.loopCreate(),
                (r.observer && this.support.observer) || this.update(),
                r.loop
                  ? this.slideTo(a + this.loopedSlides, 0, !1)
                  : this.slideTo(a, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this.params,
              i = this.$wrapperEl,
              r = this.activeIndex;
            t.loop &&
              ((r -= this.loopedSlides),
              this.loopDestroy(),
              (this.slides = i.children('.' + t.slideClass)));
            var n,
              s = r;
            if ('object' == typeof e && 'length' in e) {
              for (var a = 0; a < e.length; a += 1)
                (n = e[a]),
                  this.slides[n] && this.slides.eq(n).remove(),
                  n < s && (s -= 1);
              s = Math.max(s, 0);
            } else
              (n = e),
                this.slides[n] && this.slides.eq(n).remove(),
                n < s && (s -= 1),
                (s = Math.max(s, 0));
            t.loop && this.loopCreate(),
              (t.observer && this.support.observer) || this.update(),
              t.loop
                ? this.slideTo(s + this.loopedSlides, 0, !1)
                : this.slideTo(s, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        events: {
          attachEvents: function () {
            var e = xa(),
              t = this.params,
              i = this.touchEvents,
              r = this.el,
              n = this.wrapperEl,
              s = this.device,
              a = this.support;
            (this.onTouchStart = no.bind(this)),
              (this.onTouchMove = so.bind(this)),
              (this.onTouchEnd = ao.bind(this)),
              t.cssMode && (this.onScroll = co.bind(this)),
              (this.onClick = lo.bind(this));
            var o = !!t.nested;
            if (!a.touch && a.pointerEvents)
              r.addEventListener(i.start, this.onTouchStart, !1),
                e.addEventListener(i.move, this.onTouchMove, o),
                e.addEventListener(i.end, this.onTouchEnd, !1);
            else {
              if (a.touch) {
                var l = !(
                  'touchstart' !== i.start ||
                  !a.passiveListener ||
                  !t.passiveListeners
                ) && {
                  passive: !0,
                  capture: !1,
                };
                r.addEventListener(i.start, this.onTouchStart, l),
                  r.addEventListener(
                    i.move,
                    this.onTouchMove,
                    a.passiveListener
                      ? {
                          passive: !1,
                          capture: o,
                        }
                      : o
                  ),
                  r.addEventListener(i.end, this.onTouchEnd, l),
                  i.cancel && r.addEventListener(i.cancel, this.onTouchEnd, l),
                  uo || (e.addEventListener('touchstart', ho), (uo = !0));
              }
              ((t.simulateTouch && !s.ios && !s.android) ||
                (t.simulateTouch && !a.touch && s.ios)) &&
                (r.addEventListener('mousedown', this.onTouchStart, !1),
                e.addEventListener('mousemove', this.onTouchMove, o),
                e.addEventListener('mouseup', this.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              r.addEventListener('click', this.onClick, !0),
              t.cssMode && n.addEventListener('scroll', this.onScroll),
              t.updateOnWindowResize
                ? this.on(
                    s.ios || s.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                    oo,
                    !0
                  )
                : this.on('observerUpdate', oo, !0);
          },
          detachEvents: function () {
            var e = xa(),
              t = this.params,
              i = this.touchEvents,
              r = this.el,
              n = this.wrapperEl,
              s = this.device,
              a = this.support,
              o = !!t.nested;
            if (!a.touch && a.pointerEvents)
              r.removeEventListener(i.start, this.onTouchStart, !1),
                e.removeEventListener(i.move, this.onTouchMove, o),
                e.removeEventListener(i.end, this.onTouchEnd, !1);
            else {
              if (a.touch) {
                var l = !(
                  'onTouchStart' !== i.start ||
                  !a.passiveListener ||
                  !t.passiveListeners
                ) && {
                  passive: !0,
                  capture: !1,
                };
                r.removeEventListener(i.start, this.onTouchStart, l),
                  r.removeEventListener(i.move, this.onTouchMove, o),
                  r.removeEventListener(i.end, this.onTouchEnd, l),
                  i.cancel &&
                    r.removeEventListener(i.cancel, this.onTouchEnd, l);
              }
              ((t.simulateTouch && !s.ios && !s.android) ||
                (t.simulateTouch && !a.touch && s.ios)) &&
                (r.removeEventListener('mousedown', this.onTouchStart, !1),
                e.removeEventListener('mousemove', this.onTouchMove, o),
                e.removeEventListener('mouseup', this.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              r.removeEventListener('click', this.onClick, !0),
              t.cssMode && n.removeEventListener('scroll', this.onScroll),
              this.off(
                s.ios || s.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                oo
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this.activeIndex,
              t = this.initialized,
              i = this.loopedSlides,
              r = void 0 === i ? 0 : i,
              n = this.params,
              s = this.$el,
              a = n.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
              var o = this.getBreakpoint(
                a,
                this.params.breakpointsBase,
                this.el
              );
              if (o && this.currentBreakpoint !== o) {
                var l = o in a ? a[o] : void 0;
                l &&
                  [
                    'slidesPerView',
                    'spaceBetween',
                    'slidesPerGroup',
                    'slidesPerGroupSkip',
                    'slidesPerColumn',
                  ].forEach(function (e) {
                    var t = l[e];
                    void 0 !== t &&
                      (l[e] =
                        'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                          ? 'slidesPerView' === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : 'auto');
                  });
                var c = l || this.originalParams,
                  u = n.slidesPerColumn > 1,
                  d = c.slidesPerColumn > 1,
                  h = n.enabled;
                u && !d
                  ? (s.removeClass(
                      n.containerModifierClass +
                        'multirow ' +
                        n.containerModifierClass +
                        'multirow-column'
                    ),
                    this.emitContainerClasses())
                  : !u &&
                    d &&
                    (s.addClass(n.containerModifierClass + 'multirow'),
                    ((c.slidesPerColumnFill &&
                      'column' === c.slidesPerColumnFill) ||
                      (!c.slidesPerColumnFill &&
                        'column' === n.slidesPerColumnFill)) &&
                      s.addClass(n.containerModifierClass + 'multirow-column'),
                    this.emitContainerClasses());
                var p = c.direction && c.direction !== n.direction,
                  f = n.loop && (c.slidesPerView !== n.slidesPerView || p);
                p && t && this.changeDirection(), $a(this.params, c);
                var v = this.params.enabled;
                $a(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                  h && !v ? this.disable() : !h && v && this.enable(),
                  (this.currentBreakpoint = o),
                  this.emit('_beforeBreakpoint', c),
                  f &&
                    t &&
                    (this.loopDestroy(),
                    this.loopCreate(),
                    this.updateSlides(),
                    this.slideTo(e - r + this.loopedSlides, 0, !1)),
                  this.emit('breakpoint', c);
              }
            }
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = 'window'), e && ('container' !== t || i))
            ) {
              var r = !1,
                n = Ea(),
                s = 'window' === t ? n.innerHeight : i.clientHeight,
                a = Object.keys(e).map(function (e) {
                  if ('string' == typeof e && 0 === e.indexOf('@')) {
                    var t = parseFloat(e.substr(1));
                    return {
                      value: s * t,
                      point: e,
                    };
                  }
                  return {
                    value: e,
                    point: e,
                  };
                });
              a.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var o = 0; o < a.length; o += 1) {
                var l = a[o],
                  c = l.point,
                  u = l.value;
                'window' === t
                  ? n.matchMedia('(min-width: ' + u + 'px)').matches && (r = c)
                  : u <= i.clientWidth && (r = c);
              }
              return r || 'max';
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this.params,
              t = this.isLocked,
              i =
                this.slides.length > 0 &&
                e.slidesOffsetBefore +
                  e.spaceBetween * (this.slides.length - 1) +
                  this.slides[0].offsetWidth * this.slides.length;
            e.slidesOffsetBefore && e.slidesOffsetAfter && i
              ? (this.isLocked = i <= this.size)
              : (this.isLocked = 1 === this.snapGrid.length),
              (this.allowSlideNext = !this.isLocked),
              (this.allowSlidePrev = !this.isLocked),
              t !== this.isLocked &&
                this.emit(this.isLocked ? 'lock' : 'unlock'),
              t &&
                t !== this.isLocked &&
                ((this.isEnd = !1),
                this.navigation && this.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var e,
              t,
              i,
              r = this.classNames,
              n = this.params,
              s = this.rtl,
              a = this.$el,
              o = this.device,
              l = this.support,
              c =
                ((e = [
                  'initialized',
                  n.direction,
                  {
                    'pointer-events': l.pointerEvents && !l.touch,
                  },
                  {
                    'free-mode': n.freeMode,
                  },
                  {
                    autoheight: n.autoHeight,
                  },
                  {
                    rtl: s,
                  },
                  {
                    multirow: n.slidesPerColumn > 1,
                  },
                  {
                    'multirow-column':
                      n.slidesPerColumn > 1 &&
                      'column' === n.slidesPerColumnFill,
                  },
                  {
                    android: o.android,
                  },
                  {
                    ios: o.ios,
                  },
                  {
                    'css-mode': n.cssMode,
                  },
                ]),
                (t = n.containerModifierClass),
                (i = []),
                e.forEach(function (e) {
                  'object' == typeof e
                    ? Object.keys(e).forEach(function (r) {
                        e[r] && i.push(t + r);
                      })
                    : 'string' == typeof e && i.push(t + e);
                }),
                i);
            r.push.apply(r, c),
              a.addClass([].concat(r).join(' ')),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(' ')), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, i, r, n, s) {
            var a,
              o = Ea();
            function l() {
              s && s();
            }
            Na(e).parent('picture')[0] || (e.complete && n)
              ? l()
              : t
              ? (((a = new o.Image()).onload = l),
                (a.onerror = l),
                r && (a.sizes = r),
                i && (a.srcset = i),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit('imagesReady')));
            }
            e.imagesToLoad = e.$el.find('img');
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var r = e.imagesToLoad[i];
              e.loadImage(
                r,
                r.currentSrc || r.getAttribute('src'),
                r.srcset || r.getAttribute('srcset'),
                r.sizes || r.getAttribute('sizes'),
                !0,
                t
              );
            }
          },
        },
      },
      go = {},
      mo = (function () {
        function e() {
          for (
            var t, i, r = arguments.length, n = new Array(r), s = 0;
            s < r;
            s++
          )
            n[s] = arguments[s];
          if (
            (1 === n.length &&
            n[0].constructor &&
            'Object' === Object.prototype.toString.call(n[0]).slice(8, -1)
              ? (i = n[0])
              : ((t = n[0]), (i = n[1])),
            i || (i = {}),
            (i = $a({}, i)),
            t && !i.el && (i.el = t),
            i.el && Na(i.el).length > 1)
          ) {
            var a = [];
            return (
              Na(i.el).each(function (t) {
                var r = $a({}, i, {
                  el: t,
                });
                a.push(new e(r));
              }),
              a
            );
          }
          var o = this;
          (o.__swiper__ = !0),
            (o.support = Qa()),
            (o.device = Za({
              userAgent: i.userAgent,
            })),
            (o.browser = Ja()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            void 0 === o.modules && (o.modules = {}),
            Object.keys(o.modules).forEach(function (e) {
              var t = o.modules[e];
              if (t.params) {
                var r = Object.keys(t.params)[0],
                  n = t.params[r];
                if ('object' != typeof n || null === n) return;
                if (
                  (['navigation', 'pagination', 'scrollbar'].indexOf(r) >= 0 &&
                    !0 === i[r] &&
                    (i[r] = {
                      auto: !0,
                    }),
                  !(r in i) || !('enabled' in n))
                )
                  return;
                !0 === i[r] &&
                  (i[r] = {
                    enabled: !0,
                  }),
                  'object' != typeof i[r] ||
                    'enabled' in i[r] ||
                    (i[r].enabled = !0),
                  i[r] ||
                    (i[r] = {
                      enabled: !1,
                    });
              }
            });
          var l,
            c,
            u = $a({}, po);
          return (
            o.useParams(u),
            (o.params = $a({}, u, go, i)),
            (o.originalParams = $a({}, o.params)),
            (o.passedParams = $a({}, i)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach(function (e) {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            (o.$ = Na),
            $a(o, {
              enabled: o.params.enabled,
              el: t,
              classNames: [],
              slides: Na(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return 'horizontal' === o.params.direction;
              },
              isVertical: function () {
                return 'vertical' === o.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEvents:
                ((l = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
                (c = ['mousedown', 'mousemove', 'mouseup']),
                o.support.pointerEvents &&
                  (c = ['pointerdown', 'pointermove', 'pointerup']),
                (o.touchEventsTouch = {
                  start: l[0],
                  move: l[1],
                  end: l[2],
                  cancel: l[3],
                }),
                (o.touchEventsDesktop = {
                  start: c[0],
                  move: c[1],
                  end: c[2],
                }),
                o.support.touch || !o.params.simulateTouch
                  ? o.touchEventsTouch
                  : o.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: Va(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.useModules(),
            o.emit('_swiper'),
            o.params.init && o.init(),
            o
          );
        }
        var t,
          i,
          r,
          n = e.prototype;
        return (
          (n.enable = function () {
            this.enabled ||
              ((this.enabled = !0),
              this.params.grabCursor && this.setGrabCursor(),
              this.emit('enable'));
          }),
          (n.disable = function () {
            this.enabled &&
              ((this.enabled = !1),
              this.params.grabCursor && this.unsetGrabCursor(),
              this.emit('disable'));
          }),
          (n.setProgress = function (e, t) {
            e = Math.min(Math.max(e, 0), 1);
            var i = this.minTranslate(),
              r = (this.maxTranslate() - i) * e + i;
            this.translateTo(r, void 0 === t ? 0 : t),
              this.updateActiveIndex(),
              this.updateSlidesClasses();
          }),
          (n.emitContainerClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
              var t = e.el.className.split(' ').filter(function (t) {
                return (
                  0 === t.indexOf('swiper-container') ||
                  0 === t.indexOf(e.params.containerModifierClass)
                );
              });
              e.emit('_containerClasses', t.join(' '));
            }
          }),
          (n.getSlideClasses = function (e) {
            var t = this;
            return e.className
              .split(' ')
              .filter(function (e) {
                return (
                  0 === e.indexOf('swiper-slide') ||
                  0 === e.indexOf(t.params.slideClass)
                );
              })
              .join(' ');
          }),
          (n.emitSlidesClasses = function () {
            var e = this;
            if (e.params._emitClasses && e.el) {
              var t = [];
              e.slides.each(function (i) {
                var r = e.getSlideClasses(i);
                t.push({
                  slideEl: i,
                  classNames: r,
                }),
                  e.emit('_slideClass', i, r);
              }),
                e.emit('_slideClasses', t);
            }
          }),
          (n.slidesPerViewDynamic = function () {
            var e = this.params,
              t = this.slides,
              i = this.slidesGrid,
              r = this.size,
              n = this.activeIndex,
              s = 1;
            if (e.centeredSlides) {
              for (
                var a, o = t[n].swiperSlideSize, l = n + 1;
                l < t.length;
                l += 1
              )
                t[l] &&
                  !a &&
                  ((s += 1), (o += t[l].swiperSlideSize) > r && (a = !0));
              for (var c = n - 1; c >= 0; c -= 1)
                t[c] &&
                  !a &&
                  ((s += 1), (o += t[c].swiperSlideSize) > r && (a = !0));
            } else
              for (var u = n + 1; u < t.length; u += 1)
                i[u] - i[n] < r && (s += 1);
            return s;
          }),
          (n.update = function () {
            var e = this;
            if (e && !e.destroyed) {
              var t = e.snapGrid,
                i = e.params;
              i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode
                  ? (r(), e.params.autoHeight && e.updateAutoHeight())
                  : (('auto' === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit('update');
            }
            function r() {
              var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
          }),
          (n.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return (
              e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
              e === i ||
                ('horizontal' !== e && 'vertical' !== e) ||
                (this.$el
                  .removeClass('' + this.params.containerModifierClass + i)
                  .addClass('' + this.params.containerModifierClass + e),
                this.emitContainerClasses(),
                (this.params.direction = e),
                this.slides.each(function (t) {
                  'vertical' === e
                    ? (t.style.width = '')
                    : (t.style.height = '');
                }),
                this.emit('changeDirection'),
                t && this.update()),
              this
            );
          }),
          (n.mount = function (e) {
            var t = this;
            if (t.mounted) return !0;
            var i = Na(e || t.params.el);
            if (!(e = i[0])) return !1;
            e.swiper = t;
            var r = function () {
                return (
                  '.' +
                  (t.params.wrapperClass || '').trim().split(' ').join('.')
                );
              },
              n = (function () {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                  var t = Na(e.shadowRoot.querySelector(r()));
                  return (
                    (t.children = function (e) {
                      return i.children(e);
                    }),
                    t
                  );
                }
                return i.children(r());
              })();
            if (0 === n.length && t.params.createElements) {
              var s = xa().createElement('div');
              (n = Na(s)),
                (s.className = t.params.wrapperClass),
                i.append(s),
                i.children('.' + t.params.slideClass).each(function (e) {
                  n.append(e);
                });
            }
            return (
              $a(t, {
                $el: i,
                el: e,
                $wrapperEl: n,
                wrapperEl: n[0],
                mounted: !0,
                rtl:
                  'rtl' === e.dir.toLowerCase() || 'rtl' === i.css('direction'),
                rtlTranslate:
                  'horizontal' === t.params.direction &&
                  ('rtl' === e.dir.toLowerCase() ||
                    'rtl' === i.css('direction')),
                wrongRTL: '-webkit-box' === n.css('display'),
              }),
              !0
            );
          }),
          (n.init = function (e) {
            return (
              this.initialized ||
                !1 === this.mount(e) ||
                (this.emit('beforeInit'),
                this.params.breakpoints && this.setBreakpoint(),
                this.addClasses(),
                this.params.loop && this.loopCreate(),
                this.updateSize(),
                this.updateSlides(),
                this.params.watchOverflow && this.checkOverflow(),
                this.params.grabCursor && this.enabled && this.setGrabCursor(),
                this.params.preloadImages && this.preloadImages(),
                this.params.loop
                  ? this.slideTo(
                      this.params.initialSlide + this.loopedSlides,
                      0,
                      this.params.runCallbacksOnInit,
                      !1,
                      !0
                    )
                  : this.slideTo(
                      this.params.initialSlide,
                      0,
                      this.params.runCallbacksOnInit,
                      !1,
                      !0
                    ),
                this.attachEvents(),
                (this.initialized = !0),
                this.emit('init'),
                this.emit('afterInit')),
              this
            );
          }),
          (n.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i,
              r = this,
              n = r.params,
              s = r.$el,
              a = r.$wrapperEl,
              o = r.slides;
            return (
              void 0 === r.params ||
                r.destroyed ||
                (r.emit('beforeDestroy'),
                (r.initialized = !1),
                r.detachEvents(),
                n.loop && r.loopDestroy(),
                t &&
                  (r.removeClasses(),
                  s.removeAttr('style'),
                  a.removeAttr('style'),
                  o &&
                    o.length &&
                    o
                      .removeClass(
                        [
                          n.slideVisibleClass,
                          n.slideActiveClass,
                          n.slideNextClass,
                          n.slidePrevClass,
                        ].join(' ')
                      )
                      .removeAttr('style')
                      .removeAttr('data-swiper-slide-index')),
                r.emit('destroy'),
                Object.keys(r.eventsListeners).forEach(function (e) {
                  r.off(e);
                }),
                !1 !== e &&
                  ((r.$el[0].swiper = null),
                  (i = r),
                  Object.keys(i).forEach(function (e) {
                    try {
                      i[e] = null;
                    } catch (e) {}
                    try {
                      delete i[e];
                    } catch (e) {}
                  })),
                (r.destroyed = !0)),
              null
            );
          }),
          (e.extendDefaults = function (e) {
            $a(go, e);
          }),
          (e.installModule = function (t) {
            e.prototype.modules || (e.prototype.modules = {});
            var i =
              t.name || Object.keys(e.prototype.modules).length + '_' + Va();
            e.prototype.modules[i] = t;
          }),
          (e.use = function (t) {
            return Array.isArray(t)
              ? (t.forEach(function (t) {
                  return e.installModule(t);
                }),
                e)
              : (e.installModule(t), e);
          }),
          (t = e),
          (r = [
            {
              key: 'extendedDefaults',
              get: function () {
                return go;
              },
            },
            {
              key: 'defaults',
              get: function () {
                return po;
              },
            },
          ]),
          (i = null) && fo(t.prototype, i),
          r && fo(t, r),
          e
        );
      })();
    Object.keys(vo).forEach(function (e) {
      Object.keys(vo[e]).forEach(function (t) {
        mo.prototype[t] = vo[e][t];
      });
    }),
      mo.use([eo, ro]);
    var yo = mo;
    function bo() {
      return (bo =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var _o = {
        setTranslate: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var i = this.slides.eq(t),
              r = -i[0].swiperSlideOffset;
            this.params.virtualTranslate || (r -= this.translate);
            var n = 0;
            this.isHorizontal() || ((n = r), (r = 0));
            var s = this.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(i[0].progress), 0)
              : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({
              opacity: s,
            }).transform('translate3d(' + r + 'px, ' + n + 'px, 0px)');
          }
        },
        setTransition: function (e) {
          var t = this,
            i = t.slides,
            r = t.$wrapperEl;
          if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var n = !1;
            i.transitionEnd(function () {
              if (!n && t && !t.destroyed) {
                (n = !0), (t.animating = !1);
                for (
                  var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                  i < e.length;
                  i += 1
                )
                  r.trigger(e[i]);
              }
            });
          }
        },
      },
      wo = {
        name: 'effect-fade',
        params: {
          fadeEffect: {
            crossFade: !1,
          },
        },
        create: function () {
          Wa(this, {
            fadeEffect: bo({}, _o),
          });
        },
        on: {
          beforeInit: function (e) {
            if ('fade' === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + 'fade');
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              $a(e.params, t), $a(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            'fade' === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            'fade' === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      };
    function To() {
      return (To =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var xo = {
        toggleEl: function (e, t) {
          e[t ? 'addClass' : 'removeClass'](
            this.params.navigation.disabledClass
          ),
            e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = t);
        },
        update: function () {
          var e = this.params.navigation,
            t = this.navigation.toggleEl;
          if (!this.params.loop) {
            var i = this.navigation,
              r = i.$nextEl,
              n = i.$prevEl;
            n &&
              n.length > 0 &&
              (this.isBeginning ? t(n, !0) : t(n, !1),
              this.params.watchOverflow &&
                this.enabled &&
                n[this.isLocked ? 'addClass' : 'removeClass'](e.lockClass)),
              r &&
                r.length > 0 &&
                (this.isEnd ? t(r, !0) : t(r, !1),
                this.params.watchOverflow &&
                  this.enabled &&
                  r[this.isLocked ? 'addClass' : 'removeClass'](e.lockClass));
          }
        },
        onPrevClick: function (e) {
          e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick: function (e) {
          e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init: function () {
          var e,
            t,
            i = this.params.navigation;
          ((this.params.navigation = Ka(
            this.$el,
            this.params.navigation,
            this.params.createElements,
            {
              nextEl: 'swiper-button-next',
              prevEl: 'swiper-button-prev',
            }
          )),
          i.nextEl || i.prevEl) &&
            (i.nextEl &&
              ((e = Na(i.nextEl)),
              this.params.uniqueNavElements &&
                'string' == typeof i.nextEl &&
                e.length > 1 &&
                1 === this.$el.find(i.nextEl).length &&
                (e = this.$el.find(i.nextEl))),
            i.prevEl &&
              ((t = Na(i.prevEl)),
              this.params.uniqueNavElements &&
                'string' == typeof i.prevEl &&
                t.length > 1 &&
                1 === this.$el.find(i.prevEl).length &&
                (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on('click', this.navigation.onNextClick),
            t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
            $a(this.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }),
            this.enabled ||
              (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
        },
        destroy: function () {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          t &&
            t.length &&
            (t.off('click', this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off('click', this.navigation.onPrevClick),
              i.removeClass(this.params.navigation.disabledClass));
        },
      },
      So = {
        name: 'navigation',
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        },
        create: function () {
          Wa(this, {
            navigation: To({}, xo),
          });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          'enable disable': function (e) {
            var t = e.navigation,
              i = t.$nextEl,
              r = t.$prevEl;
            i &&
              i[e.enabled ? 'removeClass' : 'addClass'](
                e.params.navigation.lockClass
              ),
              r &&
                r[e.enabled ? 'removeClass' : 'addClass'](
                  e.params.navigation.lockClass
                );
          },
          click: function (e, t) {
            var i = e.navigation,
              r = i.$nextEl,
              n = i.$prevEl,
              s = t.target;
            if (
              e.params.navigation.hideOnClick &&
              !Na(s).is(n) &&
              !Na(s).is(r)
            ) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === s || e.pagination.el.contains(s))
              )
                return;
              var a;
              r
                ? (a = r.hasClass(e.params.navigation.hiddenClass))
                : n && (a = n.hasClass(e.params.navigation.hiddenClass)),
                !0 === a ? e.emit('navigationShow') : e.emit('navigationHide'),
                r && r.toggleClass(e.params.navigation.hiddenClass),
                n && n.toggleClass(e.params.navigation.hiddenClass);
            }
          },
        },
      };
    function Eo() {
      return (Eo =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Co = {
        update: function () {
          var e = this.rtl,
            t = this.params.pagination;
          if (
            t.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var i,
              r =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              n = this.pagination.$el,
              s = this.params.loop
                ? Math.ceil(
                    (r - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length;
            if (
              (this.params.loop
                ? ((i = Math.ceil(
                    (this.activeIndex - this.loopedSlides) /
                      this.params.slidesPerGroup
                  )) >
                    r - 1 - 2 * this.loopedSlides &&
                    (i -= r - 2 * this.loopedSlides),
                  i > s - 1 && (i -= s),
                  i < 0 &&
                    'bullets' !== this.params.paginationType &&
                    (i = s + i))
                : (i =
                    void 0 !== this.snapIndex
                      ? this.snapIndex
                      : this.activeIndex || 0),
              'bullets' === t.type &&
                this.pagination.bullets &&
                this.pagination.bullets.length > 0)
            ) {
              var a,
                o,
                l,
                c = this.pagination.bullets;
              if (
                (t.dynamicBullets &&
                  ((this.pagination.bulletSize = c
                    .eq(0)
                    [this.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  n.css(
                    this.isHorizontal() ? 'width' : 'height',
                    this.pagination.bulletSize * (t.dynamicMainBullets + 4) +
                      'px'
                  ),
                  t.dynamicMainBullets > 1 &&
                    void 0 !== this.previousIndex &&
                    ((this.pagination.dynamicBulletIndex +=
                      i - this.previousIndex),
                    this.pagination.dynamicBulletIndex >
                    t.dynamicMainBullets - 1
                      ? (this.pagination.dynamicBulletIndex =
                          t.dynamicMainBullets - 1)
                      : this.pagination.dynamicBulletIndex < 0 &&
                        (this.pagination.dynamicBulletIndex = 0)),
                  (a = i - this.pagination.dynamicBulletIndex),
                  (l =
                    ((o = a + (Math.min(c.length, t.dynamicMainBullets) - 1)) +
                      a) /
                    2)),
                c.removeClass(
                  t.bulletActiveClass +
                    ' ' +
                    t.bulletActiveClass +
                    '-next ' +
                    t.bulletActiveClass +
                    '-next-next ' +
                    t.bulletActiveClass +
                    '-prev ' +
                    t.bulletActiveClass +
                    '-prev-prev ' +
                    t.bulletActiveClass +
                    '-main'
                ),
                n.length > 1)
              )
                c.each(function (e) {
                  var r = Na(e),
                    n = r.index();
                  n === i && r.addClass(t.bulletActiveClass),
                    t.dynamicBullets &&
                      (n >= a &&
                        n <= o &&
                        r.addClass(t.bulletActiveClass + '-main'),
                      n === a &&
                        r
                          .prev()
                          .addClass(t.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(t.bulletActiveClass + '-prev-prev'),
                      n === o &&
                        r
                          .next()
                          .addClass(t.bulletActiveClass + '-next')
                          .next()
                          .addClass(t.bulletActiveClass + '-next-next'));
                });
              else {
                var u = c.eq(i),
                  d = u.index();
                if ((u.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                  for (var h = c.eq(a), p = c.eq(o), f = a; f <= o; f += 1)
                    c.eq(f).addClass(t.bulletActiveClass + '-main');
                  if (this.params.loop)
                    if (d >= c.length - t.dynamicMainBullets) {
                      for (var v = t.dynamicMainBullets; v >= 0; v -= 1)
                        c.eq(c.length - v).addClass(
                          t.bulletActiveClass + '-main'
                        );
                      c.eq(c.length - t.dynamicMainBullets - 1).addClass(
                        t.bulletActiveClass + '-prev'
                      );
                    } else
                      h
                        .prev()
                        .addClass(t.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(t.bulletActiveClass + '-prev-prev'),
                        p
                          .next()
                          .addClass(t.bulletActiveClass + '-next')
                          .next()
                          .addClass(t.bulletActiveClass + '-next-next');
                  else
                    h
                      .prev()
                      .addClass(t.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(t.bulletActiveClass + '-prev-prev'),
                      p
                        .next()
                        .addClass(t.bulletActiveClass + '-next')
                        .next()
                        .addClass(t.bulletActiveClass + '-next-next');
                }
              }
              if (t.dynamicBullets) {
                var g = Math.min(c.length, t.dynamicMainBullets + 4),
                  m =
                    (this.pagination.bulletSize * g -
                      this.pagination.bulletSize) /
                      2 -
                    l * this.pagination.bulletSize,
                  y = e ? 'right' : 'left';
                c.css(this.isHorizontal() ? y : 'top', m + 'px');
              }
            }
            if (
              ('fraction' === t.type &&
                (n
                  .find(Ua(t.currentClass))
                  .text(t.formatFractionCurrent(i + 1)),
                n.find(Ua(t.totalClass)).text(t.formatFractionTotal(s))),
              'progressbar' === t.type)
            ) {
              var b;
              b = t.progressbarOpposite
                ? this.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : this.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              var _ = (i + 1) / s,
                w = 1,
                T = 1;
              'horizontal' === b ? (w = _) : (T = _),
                n
                  .find(Ua(t.progressbarFillClass))
                  .transform(
                    'translate3d(0,0,0) scaleX(' + w + ') scaleY(' + T + ')'
                  )
                  .transition(this.params.speed);
            }
            'custom' === t.type && t.renderCustom
              ? (n.html(t.renderCustom(this, i + 1, s)),
                this.emit('paginationRender', n[0]))
              : this.emit('paginationUpdate', n[0]),
              this.params.watchOverflow &&
                this.enabled &&
                n[this.isLocked ? 'addClass' : 'removeClass'](t.lockClass);
          }
        },
        render: function () {
          var e = this.params.pagination;
          if (
            e.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var t =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              i = this.pagination.$el,
              r = '';
            if ('bullets' === e.type) {
              var n = this.params.loop
                ? Math.ceil(
                    (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length;
              this.params.freeMode && !this.params.loop && n > t && (n = t);
              for (var s = 0; s < n; s += 1)
                e.renderBullet
                  ? (r += e.renderBullet.call(this, s, e.bulletClass))
                  : (r +=
                      '<' +
                      e.bulletElement +
                      ' class="' +
                      e.bulletClass +
                      '"></' +
                      e.bulletElement +
                      '>');
              i.html(r), (this.pagination.bullets = i.find(Ua(e.bulletClass)));
            }
            'fraction' === e.type &&
              ((r = e.renderFraction
                ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                : '<span class="' +
                  e.currentClass +
                  '"></span> / <span class="' +
                  e.totalClass +
                  '"></span>'),
              i.html(r)),
              'progressbar' === e.type &&
                ((r = e.renderProgressbar
                  ? e.renderProgressbar.call(this, e.progressbarFillClass)
                  : '<span class="' + e.progressbarFillClass + '"></span>'),
                i.html(r)),
              'custom' !== e.type &&
                this.emit('paginationRender', this.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this;
          e.params.pagination = Ka(
            e.$el,
            e.params.pagination,
            e.params.createElements,
            {
              el: 'swiper-pagination',
            }
          );
          var t = e.params.pagination;
          if (t.el) {
            var i = Na(t.el);
            0 !== i.length &&
              (e.params.uniqueNavElements &&
                'string' == typeof t.el &&
                i.length > 1 &&
                (i = e.$el.find(t.el)),
              'bullets' === t.type &&
                t.clickable &&
                i.addClass(t.clickableClass),
              i.addClass(t.modifierClass + t.type),
              'bullets' === t.type &&
                t.dynamicBullets &&
                (i.addClass('' + t.modifierClass + t.type + '-dynamic'),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              'progressbar' === t.type &&
                t.progressbarOpposite &&
                i.addClass(t.progressbarOppositeClass),
              t.clickable &&
                i.on('click', Ua(t.bulletClass), function (t) {
                  t.preventDefault();
                  var i = Na(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }),
              $a(e.pagination, {
                $el: i,
                el: i[0],
              }),
              e.enabled || i.addClass(t.lockClass));
          }
        },
        destroy: function () {
          var e = this.params.pagination;
          if (
            e.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var t = this.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              this.pagination.bullets &&
                this.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off('click', Ua(e.bulletClass));
          }
        },
      },
      ko = {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create: function () {
          Wa(this, {
            pagination: Eo(
              {
                dynamicBulletIndex: 0,
              },
              Co
            ),
          });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          'enable disable': function (e) {
            var t = e.pagination.$el;
            t &&
              t[e.enabled ? 'removeClass' : 'addClass'](
                e.params.pagination.lockClass
              );
          },
          click: function (e, t) {
            var i = t.target;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !Na(i).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit('paginationShow')
                : e.emit('paginationHide'),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
            }
          },
        },
      };
    function Lo() {
      return (Lo =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Mo = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr('data-swiper-autoplay') &&
            (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = Ga(function () {
              var t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    e.emit('autoplay'))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      e.emit('autoplay'))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)),
                    e.emit('autoplay'))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  e.emit('autoplay'))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                    e.emit('autoplay'))
                : ((t = e.slideNext(e.params.speed, !0, !0)),
                  e.emit('autoplay')),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                  e.autoplay.run();
            }, i));
        },
        start: function () {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit('autoplayStart'),
            this.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          return (
            !!this.autoplay.running &&
            void 0 !== this.autoplay.timeout &&
            (this.autoplay.timeout &&
              (clearTimeout(this.autoplay.timeout),
              (this.autoplay.timeout = void 0)),
            (this.autoplay.running = !1),
            this.emit('autoplayStop'),
            !0)
          );
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? ['transitionend', 'webkitTransitionEnd'].forEach(function (
                    e
                  ) {
                    t.$wrapperEl[0].addEventListener(
                      e,
                      t.autoplay.onTransitionEnd
                    );
                  })
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
        onVisibilityChange: function () {
          var e = xa();
          'hidden' === e.visibilityState &&
            this.autoplay.running &&
            this.autoplay.pause(),
            'visible' === e.visibilityState &&
              this.autoplay.paused &&
              (this.autoplay.run(), (this.autoplay.paused = !1));
        },
        onTransitionEnd: function (e) {
          var t = this;
          t &&
            !t.destroyed &&
            t.$wrapperEl &&
            e.target === t.$wrapperEl[0] &&
            (['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
              t.$wrapperEl[0].removeEventListener(
                e,
                t.autoplay.onTransitionEnd
              );
            }),
            (t.autoplay.paused = !1),
            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
        },
        onMouseEnter: function () {
          var e = this;
          e.params.autoplay.disableOnInteraction
            ? e.autoplay.stop()
            : e.autoplay.pause(),
            ['transitionend', 'webkitTransitionEnd'].forEach(function (t) {
              e.$wrapperEl[0].removeEventListener(
                t,
                e.autoplay.onTransitionEnd
              );
            });
        },
        onMouseLeave: function () {
          this.params.autoplay.disableOnInteraction ||
            ((this.autoplay.paused = !1), this.autoplay.run());
        },
        attachMouseEvents: function () {
          this.params.autoplay.pauseOnMouseEnter &&
            (this.$el.on('mouseenter', this.autoplay.onMouseEnter),
            this.$el.on('mouseleave', this.autoplay.onMouseLeave));
        },
        detachMouseEvents: function () {
          this.$el.off('mouseenter', this.autoplay.onMouseEnter),
            this.$el.off('mouseleave', this.autoplay.onMouseLeave);
        },
      },
      Ao = {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        },
        create: function () {
          Wa(this, {
            autoplay: Lo({}, Mo, {
              running: !1,
              paused: !1,
            }),
          });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              xa().addEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange
              ),
              e.autoplay.attachMouseEvents());
          },
          beforeTransitionStart: function (e, t, i) {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.detachMouseEvents(),
              e.autoplay.running && e.autoplay.stop(),
              xa().removeEventListener(
                'visibilitychange',
                e.autoplay.onVisibilityChange
              );
          },
        },
      };
    function Po() {
      return (Po =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Oo = {
        setTranslate: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = this.rtlTranslate,
              i = this.progress,
              r = e.dragSize,
              n = e.trackSize,
              s = e.$dragEl,
              a = e.$el,
              o = this.params.scrollbar,
              l = r,
              c = (n - r) * i;
            t
              ? (c = -c) > 0
                ? ((l = r - c), (c = 0))
                : -c + r > n && (l = n + c)
              : c < 0
              ? ((l = r + c), (c = 0))
              : c + r > n && (l = n - c),
              this.isHorizontal()
                ? (s.transform('translate3d(' + c + 'px, 0, 0)'),
                  (s[0].style.width = l + 'px'))
                : (s.transform('translate3d(0px, ' + c + 'px, 0)'),
                  (s[0].style.height = l + 'px')),
              o.hide &&
                (clearTimeout(this.scrollbar.timeout),
                (a[0].style.opacity = 1),
                (this.scrollbar.timeout = setTimeout(function () {
                  (a[0].style.opacity = 0), a.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = e.$dragEl,
              i = e.$el;
            (t[0].style.width = ''), (t[0].style.height = '');
            var r,
              n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              s = this.size / this.virtualSize,
              a = s * (n / this.size);
            (r =
              'auto' === this.params.scrollbar.dragSize
                ? n * s
                : parseInt(this.params.scrollbar.dragSize, 10)),
              this.isHorizontal()
                ? (t[0].style.width = r + 'px')
                : (t[0].style.height = r + 'px'),
              (i[0].style.display = s >= 1 ? 'none' : ''),
              this.params.scrollbar.hide && (i[0].style.opacity = 0),
              $a(e, {
                trackSize: n,
                divider: s,
                moveDivider: a,
                dragSize: r,
              }),
              this.params.watchOverflow &&
                this.enabled &&
                e.$el[this.isLocked ? 'addClass' : 'removeClass'](
                  this.params.scrollbar.lockClass
                );
          }
        },
        getPointerPosition: function (e) {
          return this.isHorizontal()
            ? 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
            i = this.scrollbar,
            r = this.rtlTranslate,
            n = i.$el,
            s = i.dragSize,
            a = i.trackSize,
            o = i.dragStartPos;
          (t =
            (i.getPointerPosition(e) -
              n.offset()[this.isHorizontal() ? 'left' : 'top'] -
              (null !== o ? o : s / 2)) /
            (a - s)),
            (t = Math.max(Math.min(t, 1), 0)),
            r && (t = 1 - t);
          var l =
            this.minTranslate() +
            (this.maxTranslate() - this.minTranslate()) * t;
          this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            r = this.$wrapperEl,
            n = i.$el,
            s = i.$dragEl;
          (this.scrollbar.isTouched = !0),
            (this.scrollbar.dragStartPos =
              e.target === s[0] || e.target === s
                ? i.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    this.isHorizontal() ? 'left' : 'top'
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            r.transition(100),
            s.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            n.transition(0),
            t.hide && n.css('opacity', 1),
            this.params.cssMode &&
              this.$wrapperEl.css('scroll-snap-type', 'none'),
            this.emit('scrollbarDragStart', e);
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            r = t.$el,
            n = t.$dragEl;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            i.transition(0),
            r.transition(0),
            n.transition(0),
            this.emit('scrollbarDragMove', e));
        },
        onDragEnd: function (e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            r = this.$wrapperEl,
            n = i.$el;
          this.scrollbar.isTouched &&
            ((this.scrollbar.isTouched = !1),
            this.params.cssMode &&
              (this.$wrapperEl.css('scroll-snap-type', ''), r.transition('')),
            t.hide &&
              (clearTimeout(this.scrollbar.dragTimeout),
              (this.scrollbar.dragTimeout = Ga(function () {
                n.css('opacity', 0), n.transition(400);
              }, 1e3))),
            this.emit('scrollbarDragEnd', e),
            t.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function () {
          if (this.params.scrollbar.el) {
            var e = xa(),
              t = this.scrollbar,
              i = this.touchEventsTouch,
              r = this.touchEventsDesktop,
              n = this.params,
              s = this.support,
              a = t.$el[0],
              o = !(!s.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              l = !(!s.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            a &&
              (s.touch
                ? (a.addEventListener(i.start, this.scrollbar.onDragStart, o),
                  a.addEventListener(i.move, this.scrollbar.onDragMove, o),
                  a.addEventListener(i.end, this.scrollbar.onDragEnd, l))
                : (a.addEventListener(r.start, this.scrollbar.onDragStart, o),
                  e.addEventListener(r.move, this.scrollbar.onDragMove, o),
                  e.addEventListener(r.end, this.scrollbar.onDragEnd, l)));
          }
        },
        disableDraggable: function () {
          if (this.params.scrollbar.el) {
            var e = xa(),
              t = this.scrollbar,
              i = this.touchEventsTouch,
              r = this.touchEventsDesktop,
              n = this.params,
              s = this.support,
              a = t.$el[0],
              o = !(!s.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              l = !(!s.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            a &&
              (s.touch
                ? (a.removeEventListener(
                    i.start,
                    this.scrollbar.onDragStart,
                    o
                  ),
                  a.removeEventListener(i.move, this.scrollbar.onDragMove, o),
                  a.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
                : (a.removeEventListener(
                    r.start,
                    this.scrollbar.onDragStart,
                    o
                  ),
                  e.removeEventListener(r.move, this.scrollbar.onDragMove, o),
                  e.removeEventListener(r.end, this.scrollbar.onDragEnd, l)));
          }
        },
        init: function () {
          var e = this.scrollbar,
            t = this.$el;
          this.params.scrollbar = Ka(
            t,
            this.params.scrollbar,
            this.params.createElements,
            {
              el: 'swiper-scrollbar',
            }
          );
          var i = this.params.scrollbar;
          if (i.el) {
            var r = Na(i.el);
            this.params.uniqueNavElements &&
              'string' == typeof i.el &&
              r.length > 1 &&
              1 === t.find(i.el).length &&
              (r = t.find(i.el));
            var n = r.find('.' + this.params.scrollbar.dragClass);
            0 === n.length &&
              ((n = Na(
                '<div class="' + this.params.scrollbar.dragClass + '"></div>'
              )),
              r.append(n)),
              $a(e, {
                $el: r,
                el: r[0],
                $dragEl: n,
                dragEl: n[0],
              }),
              i.draggable && e.enableDraggable(),
              r &&
                r[this.enabled ? 'removeClass' : 'addClass'](
                  this.params.scrollbar.lockClass
                );
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      Do = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create: function () {
          Wa(this, {
            scrollbar: Po(
              {
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
              Oo
            ),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          'enable disable': function (e) {
            var t = e.scrollbar.$el;
            t &&
              t[e.enabled ? 'removeClass' : 'addClass'](
                e.params.scrollbar.lockClass
              );
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      },
      zo = i(1),
      Io = i.n(zo);
    Tr.registerPlugin(sa);
    var jo = new Io.a({
      elements_selector: '.js-lazy',
      restore_on_error: !0,
      callback_loaded: sa.refresh,
    });
    yo.use([wo, So, ko, Ao, Do]);
    var qo = document.querySelectorAll('.js-photo-slider-hld');
    qo &&
      qo.forEach(function (e) {
        var t = e.querySelector('.js-photo-slider');
        new yo(t, {
          slidesPerView: 'auto',
          spaceBetween: 24,
          loop: !1,
          grabCursor: !0,
          observer: !0,
          observeParents: !0,
          scrollbar: {
            el: t.querySelector('.js-photo-slider__scrollbar'),
            draggable: !0,
            dragSize: 120,
          },
          breakpoints: {
            768: {
              scrollbar: {
                el: t.querySelector('.js-photo-slider__scrollbar'),
                draggable: !0,
                dragSize: 400,
              },
            },
          },
          on: {
            slideChange: function () {
              jo.update();
            },
          },
        });
      });
    var Bo = document.querySelectorAll('.js-others-slider-2-hld');
    Bo &&
      Bo.forEach(function (e) {
        var t = e.querySelector('.js-others-slider-2');
        new yo(t, {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: !1,
          grabCursor: !1,
          observer: !0,
          observeParents: !0,
          navigation: {
            prevEl: e.querySelector('.js-swiper-prev'),
            nextEl: e.querySelector('.js-swiper-next'),
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
            },
          },
          on: {
            slideChange: function () {
              jo.update();
            },
          },
        });
      });
    var Fo = document.querySelectorAll('.js-others-slider-3-hld');
    Fo &&
      Fo.forEach(function (e) {
        var t = e.querySelector('.js-others-slider-3');
        new yo(t, {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: !1,
          grabCursor: !1,
          observer: !0,
          observeParents: !0,
          navigation: {
            prevEl: e.querySelector('.js-swiper-prev'),
            nextEl: e.querySelector('.js-swiper-next'),
          },
          pagination: {
            el: e.querySelector('.u-swiper-dots'),
            type: 'bullets',
            clickable: !0,
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          },
          on: {
            slideChange: function () {
              jo.update();
            },
          },
        });
      }),
      document
        .querySelectorAll('.js-testimonials-slider-hld')
        .forEach(function (e) {
          var t,
            i = e.querySelector('.js-testimonials-slider');
          t = 'true' === e.dataset.autoplay && {
            disableOnInteraction: !1,
            delay: 2500,
          };
          var r = new yo(i, {
            slidesPerView: 1,
            loop: !0,
            grabCursor: !0,
            spaceBetween: 150,
            speed: 1500,
            autoplay: t,
            navigation: {
              prevEl: e.querySelector('.js-swiper-prev'),
              nextEl: e.querySelector('.js-swiper-next'),
            },
            pagination: {
              el: e.querySelector('.u-swiper-dots'),
              type: 'bullets',
              clickable: !0,
            },
          });
          r.on('slideChange', function () {
            jo.update(),
              r.pagination.render(),
              r.pagination.update(),
              r.slides.forEach(function (e) {
                e.style.opacity = '0';
              }),
              (r.slides[r.activeIndex].style.opacity = '1');
          });
        });
    i(9), i(10), i(11);
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
      (Tr.registerPlugin(sa),
      window.addEventListener('resize', sa.refresh),
      document.querySelectorAll('.js-glass-parallax-hld').forEach(function (e) {
        var t = e.querySelector('.js-glass-parallax-boxes'),
          i = e.querySelector('.js-glass-parallax-satelite-1'),
          r = e.querySelector('.js-glass-parallax-satelite-2'),
          n = e.querySelector('.js-glass-parallax-satelite-3'),
          s = e.querySelector('.js-glass-parallax-gradient-1'),
          a = e.querySelector('.js-glass-parallax-gradient-2'),
          o = e.querySelector('.js-glass-parallax-gradient-3');
        t &&
          Tr.to(t, {
            y: -100,
            scrollTrigger: {
              trigger: e,
              start: '-=100px center',
              end: 'bottom 30%',
              scrub: 0.6,
            },
          }),
          i &&
            Tr.to(i, {
              y: -120,
              x: 30,
              scrollTrigger: {
                trigger: e,
                start: '-=100px center',
                end: 'bottom 30%',
                scrub: 0.6,
              },
            }),
          r &&
            Tr.to(r, {
              x: -30,
              scrollTrigger: {
                trigger: e,
                start: '-=100px center',
                end: 'bottom 30%',
                scrub: 0.6,
              },
            }),
          n &&
            Tr.to(n, {
              y: -220,
              scrollTrigger: {
                trigger: e,
                start: '-=100px center',
                end: 'bottom 30%',
                scrub: 0.6,
              },
            });
        var l = Tr.timeline();
        l.pause(),
          Tr.to(e, {
            scrollTrigger: {
              trigger: e,
              start: '-=400px center',
              end: 'bottom 30%',
              onEnter: function () {
                return l.play();
              },
              onEnterBack: function () {
                return l.play();
              },
              onLeave: function () {
                return l.pause();
              },
              onLeaveBack: function () {
                return l.pause();
              },
            },
          }),
          s &&
            l.to(s, {
              duration: 15,
              y: -50,
              x: 100,
              scale: 1.1,
              rotation: -45,
              transformOrigin: 'center',
              repeat: -1,
              yoyo: !0,
            }),
          a &&
            l.to(
              a,
              {
                duration: 25,
                scale: 1.5,
                transformOrigin: 'center',
                repeat: -1,
                yoyo: !0,
              },
              '-=20'
            ),
          o &&
            l.to(
              o,
              {
                duration: 10,
                y: -100,
                x: -100,
                scale: 1.5,
                rotation: 180,
                transformOrigin: 'center',
                repeat: -1,
                yoyo: !0,
              },
              '-=30'
            );
      }));
    var Ro = document.querySelectorAll('.js-moving-logos-hld'),
      No = null;
    function Go(e) {
      No ||
        ((No = document.createElement('style')), document.head.appendChild(No)),
        No.sheet.insertRule(e, No.length);
    }
    Ro.forEach(function (e) {
      if (
        (e.querySelectorAll('.js-moving-logos-box').forEach(function (e) {
          var t = e.dataset.keyframes,
            i = e.querySelectorAll('.js-moving-logos-logo'),
            r = 0,
            n = 0;
          i.forEach(function (e) {
            (r = e.getBoundingClientRect().height),
              (n += e.getBoundingClientRect().height);
          }),
            'MoveDown' === t &&
              Go(
                '@keyframes '
                  .concat(
                    t,
                    ' {\n                    0% {\n                        transform: translate3d(0, 0, 0);\n                    }\n\n                    50% {\n                        transform: translate3d(0, '
                  )
                  .concat(
                    n - r,
                    'px, 0);\n                    }\n\n                    100% {\n                        transform: translate3d(0, 0, 0);\n                    }\n                }'
                  )
              ),
            'MoveUp' === t &&
              Go(
                '@keyframes '
                  .concat(
                    t,
                    ' {\n                    0% {\n                        transform: translate3d(0, 0, 0);\n                    }\n\n                    50% {\n                        transform: translate3d(0, -'
                  )
                  .concat(
                    n - r,
                    'px, 0);\n                    }\n\n                    100% {\n                        transform: translate3d(0, 0, 0);\n                    }\n                }'
                  )
              );
        }),
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )) &&
        e.querySelector('.js-moving-logos-bg-satelite-hld')
      ) {
        var t = e.querySelector('.js-moving-logos-bg-satelite-1'),
          i = e.querySelector('.js-moving-logos-bg-satelite-2'),
          r = e.querySelector('.js-moving-logos-bg-satelite-3');
        Tr.to(t, {
          x: 80,
          y: 60,
          scrollTrigger: {
            trigger: e,
            start: '-=400px center',
            end: 'bottom 70%',
            scrub: 0.6,
          },
        }),
          Tr.to(i, {
            x: -80,
            y: 20,
            scrollTrigger: {
              trigger: e,
              start: '-=400px center',
              end: 'bottom 70%',
              scrub: 0.6,
            },
          }),
          Tr.to(r, {
            x: 40,
            y: -100,
            scrollTrigger: {
              trigger: e,
              start: '-=400px center',
              end: 'bottom 70%',
              scrub: 0.6,
            },
          });
      }
    }),
      Tr.registerPlugin(sa),
      document
        .querySelectorAll('.js-tokens-growth-hld[data-variant="1"]')
        .forEach(function (e) {
          var t,
            i = e.querySelector('.js-tokens-growth-chart-1'),
            r = i.querySelector('.js-tokens-growth-shadow-1'),
            n = i.querySelector('.js-tokens-growth-token-1'),
            s = e.querySelector('.js-tokens-growth-chart-2'),
            a = s.querySelector('.js-tokens-growth-shadow-2'),
            o = s.querySelector('.js-tokens-growth-token-2'),
            l = e.querySelector('.js-tokens-growth-chart-3'),
            c = l.querySelector('.js-tokens-growth-shadow-3'),
            u = l.querySelector('.js-tokens-growth-token-3'),
            d = e.querySelector('.js-tokens-growth-chart-4'),
            h = d.querySelector('.js-tokens-growth-shadow-4'),
            p = d.querySelector('.js-tokens-growth-token-4');
          (t =
            'false' !== e.dataset.looped
              ? Tr.timeline({
                  repeat: -1,
                  ease: 'power2.in',
                  repeatDelay: 1,
                })
              : Tr.timeline({
                  repeat: 0,
                  ease: 'power2.in',
                })).pause(),
            'lower' === e.dataset.markers
              ? Tr.to(e, {
                  scrollTrigger: {
                    trigger: e,
                    start: '-10% bottom',
                    end: 'bottom top',
                    onEnter: function () {
                      return t.play();
                    },
                    onEnterBack: function () {
                      return t.play();
                    },
                    onLeave: function () {
                      return t.pause();
                    },
                    onLeaveBack: function () {
                      return t.pause();
                    },
                  },
                })
              : Tr.to(e, {
                  scrollTrigger: {
                    trigger: e,
                    start: '-10% top',
                    end: 'bottom top',
                    onEnter: function () {
                      return t.play();
                    },
                    onEnterBack: function () {
                      return t.play();
                    },
                    onLeave: function () {
                      return t.pause();
                    },
                    onLeaveBack: function () {
                      return t.pause();
                    },
                  },
                }),
            t.to(i, {
              duration: 4,
              height: 282,
            }),
            t.to(
              r,
              {
                duration: 4,
                scale: 0.5,
                ease: 'Bounce.easeIn',
              },
              '<'
            ),
            t.to(
              n,
              {
                duration: 4,
                y: -50,
                ease: 'Bounce.easeIn',
              },
              '<'
            ),
            t.to(r, {
              duration: 3,
              scale: 1,
            }),
            t.to(
              n,
              {
                duration: 3,
                y: 0,
              },
              '<'
            ),
            t.to(
              s,
              {
                duration: 6,
                height: 190,
              },
              0.5
            ),
            t.to(
              a,
              {
                duration: 3,
                scale: 0.5,
              },
              '<'
            ),
            t.to(
              o,
              {
                duration: 3,
                y: -20,
              },
              '<'
            ),
            t.to(
              a,
              {
                duration: 3,
                scale: 1,
              },
              '>'
            ),
            t.to(
              o,
              {
                duration: 3,
                y: 0,
              },
              '<'
            ),
            t.to(
              l,
              {
                duration: 4,
                height: 130,
              },
              1
            ),
            t.to(
              c,
              {
                duration: 5,
                scale: 0.5,
                ease: 'Bounce.easeIn',
              },
              '<'
            ),
            t.to(
              u,
              {
                duration: 5,
                y: -30,
                ease: 'Bounce.easeIn',
              },
              '<'
            ),
            t.to(
              c,
              {
                duration: 2,
                scale: 1,
              },
              '>'
            ),
            t.to(
              u,
              {
                duration: 2,
                y: 0,
              },
              '<'
            ),
            t.to(
              d,
              {
                duration: 7,
                height: 130,
              },
              0.25
            ),
            t.to(
              h,
              {
                duration: 2,
                scale: 0.5,
              },
              '<2'
            ),
            t.to(
              p,
              {
                duration: 2,
                y: -10,
              },
              '<'
            ),
            t.to(
              h,
              {
                duration: 2,
                scale: 1,
              },
              '>'
            ),
            t.to(
              p,
              {
                duration: 2,
                y: 0,
              },
              '<'
            );
        }),
      document
        .querySelectorAll('.js-tokens-growth-hld[data-variant="2"]')
        .forEach(function (e) {
          var t,
            i,
            r,
            n,
            s = e.querySelector('.js-tokens-growth-chart-2-1-new'),
            a = e.querySelector('.js-tokens-growth-chart-2-2-new'),
            o = e.querySelector('.js-tokens-growth-chart-2-3-new'),
            l = e.querySelector('.js-tokens-growth-chart-2-4-new'),
            c = 'power1.inOut';
          (t =
            'false' !== e.dataset.looped
              ? Tr.timeline({
                  repeat: -1,
                  ease: c,
                  repeatDelay: 0,
                  yoyo: !0,
                })
              : Tr.timeline({
                  repeat: 0,
                  ease: c,
                })),
            (i =
              'false' !== e.dataset.looped
                ? Tr.timeline({
                    repeat: -1,
                    ease: c,
                    repeatDelay: 0,
                    yoyo: !0,
                  })
                : Tr.timeline({
                    repeat: 0,
                    ease: c,
                  })),
            (r =
              'false' !== e.dataset.looped
                ? Tr.timeline({
                    repeat: -1,
                    ease: c,
                    repeatDelay: 0,
                    yoyo: !0,
                  })
                : Tr.timeline({
                    repeat: 0,
                    ease: c,
                  })),
            (n =
              'false' !== e.dataset.looped
                ? Tr.timeline({
                    repeat: -1,
                    ease: c,
                    repeatDelay: 0,
                    yoyo: !0,
                  })
                : Tr.timeline({
                    repeat: 0,
                    ease: c,
                  })),
            t.pause(),
            i.pause(),
            r.pause(),
            n.pause(),
            'lower' === e.dataset.markers
              ? Tr.to(e, {
                  scrollTrigger: {
                    trigger: e,
                    start: '-10% bottom',
                    end: 'bottom top',
                    onEnter: function () {
                      t.play(), i.play(), r.play(), n.play();
                    },
                    onEnterBack: function () {
                      t.play(), i.play(), r.play(), n.play();
                    },
                    onLeave: function () {
                      t.pause(), i.pause(), r.pause(), n.pause();
                    },
                    onLeaveBack: function () {
                      t.pause(), i.pause(), r.pause(), n.pause();
                    },
                  },
                })
              : Tr.to(e, {
                  scrollTrigger: {
                    trigger: e,
                    start: '-10% top',
                    end: 'bottom top',
                    onEnter: function () {
                      t.play(), i.play(), r.play(), n.play();
                    },
                    onEnterBack: function () {
                      t.play(), i.play(), r.play(), n.play();
                    },
                    onLeave: function () {
                      t.pause(), i.pause(), r.pause(), n.pause();
                    },
                    onLeaveBack: function () {
                      t.pause(), i.pause(), r.pause(), n.pause();
                    },
                  },
                }),
            t.add('start').to(
              s,
              {
                duration: 1.75,
                height: 62,
                delay: 0,
              },
              'start'
            ),
            i.to(
              a,
              {
                duration: 1.5,
                height: 42,
                delay: 0,
              },
              'start'
            ),
            r.to(
              o,
              {
                duration: 2,
                height: 72,
                delay: 0,
              },
              'start'
            ),
            n.to(
              l,
              {
                duration: 1.25,
                height: 40,
                delay: 0,
              },
              'start'
            );
        });
    /*!
     * DrawSVGPlugin 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Vo,
      Ho,
      Yo,
      Xo,
      $o,
      Wo,
      Uo = function () {
        return 'undefined' != typeof window;
      },
      Ko = function () {
        return Vo || (Uo() && (Vo = window.gsap) && Vo.registerPlugin && Vo);
      },
      Qo = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      Zo = {
        rect: ['width', 'height'],
        circle: ['r', 'r'],
        ellipse: ['rx', 'ry'],
        line: ['x2', 'y2'],
      },
      Jo = function (e) {
        return Math.round(1e4 * e) / 1e4;
      },
      el = function (e) {
        return parseFloat(e) || 0;
      },
      tl = function (e, t) {
        var i = el(e);
        return ~e.indexOf('%') ? (i / 100) * t : i;
      },
      il = function (e, t) {
        return el(e.getAttribute(t));
      },
      rl = Math.sqrt,
      nl = function (e, t, i, r, n, s) {
        return rl(
          Math.pow((el(i) - el(e)) * n, 2) + Math.pow((el(r) - el(t)) * s, 2)
        );
      },
      sl = function (e) {
        return console.warn(e);
      },
      al = function (e) {
        return 'non-scaling-stroke' === e.getAttribute('vector-effect');
      },
      ol = function (e) {
        if (!(e = Ho(e)[0])) return 0;
        var t,
          i,
          r,
          n,
          s,
          a,
          o,
          l = e.tagName.toLowerCase(),
          c = e.style,
          u = 1,
          d = 1;
        al(e) &&
          ((d = e.getScreenCTM()),
          (u = rl(d.a * d.a + d.b * d.b)),
          (d = rl(d.d * d.d + d.c * d.c)));
        try {
          i = e.getBBox();
        } catch (e) {
          sl(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
          );
        }
        var h = i || {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
          },
          p = h.x,
          f = h.y,
          v = h.width,
          g = h.height;
        if (
          ((i && (v || g)) ||
            !Zo[l] ||
            ((v = il(e, Zo[l][0])),
            (g = il(e, Zo[l][1])),
            'rect' !== l && 'line' !== l && ((v *= 2), (g *= 2)),
            'line' === l &&
              ((p = il(e, 'x1')),
              (f = il(e, 'y1')),
              (v = Math.abs(v - p)),
              (g = Math.abs(g - f)))),
          'path' === l)
        )
          (n = c.strokeDasharray),
            (c.strokeDasharray = 'none'),
            (t = e.getTotalLength() || 0),
            Jo(u) !== Jo(d) &&
              !Wo &&
              (Wo = 1) &&
              sl(
                "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
              ),
            (t *= (u + d) / 2),
            (c.strokeDasharray = n);
        else if ('rect' === l) t = 2 * v * u + 2 * g * d;
        else if ('line' === l) t = nl(p, f, p + v, f + g, u, d);
        else if ('polyline' === l || 'polygon' === l)
          for (
            r = e.getAttribute('points').match(Qo) || [],
              'polygon' === l && r.push(r[0], r[1]),
              t = 0,
              s = 2;
            s < r.length;
            s += 2
          )
            t += nl(r[s - 2], r[s - 1], r[s], r[s + 1], u, d) || 0;
        else
          ('circle' !== l && 'ellipse' !== l) ||
            ((a = (v / 2) * u),
            (o = (g / 2) * d),
            (t = Math.PI * (3 * (a + o) - rl((3 * a + o) * (a + 3 * o)))));
        return t || 0;
      },
      ll = function (e, t) {
        if (!(e = Ho(e)[0])) return [0, 0];
        t || (t = ol(e) + 1);
        var i = Yo.getComputedStyle(e),
          r = i.strokeDasharray || '',
          n = el(i.strokeDashoffset),
          s = r.indexOf(',');
        return (
          s < 0 && (s = r.indexOf(' ')),
          (r = s < 0 ? t : el(r.substr(0, s))) > t && (r = t),
          [-n || 0, r - n || 0]
        );
      },
      cl = function () {
        Uo() &&
          (document,
          (Yo = window),
          ($o = Vo = Ko()),
          (Ho = Vo.utils.toArray),
          (Xo = -1 !== ((Yo.navigator || {}).userAgent || '').indexOf('Edge')));
      },
      ul = {
        version: '3.10.4',
        name: 'drawSVG',
        register: function (e) {
          (Vo = e), cl();
        },
        init: function (e, t, i, r, n) {
          if (!e.getBBox) return !1;
          $o || cl();
          var s,
            a,
            o,
            l = ol(e);
          return (
            (this._style = e.style),
            (this._target = e),
            t + '' == 'true'
              ? (t = '0 100%')
              : t
              ? -1 === (t + '').indexOf(' ') && (t = '0 ' + t)
              : (t = '0 0'),
            (a = (function (e, t, i) {
              var r,
                n,
                s = e.indexOf(' ');
              return (
                s < 0
                  ? ((r = void 0 !== i ? i + '' : e), (n = e))
                  : ((r = e.substr(0, s)), (n = e.substr(s + 1))),
                (r = tl(r, t)) > (n = tl(n, t)) ? [n, r] : [r, n]
              );
            })(t, l, (s = ll(e, l))[0])),
            (this._length = Jo(l)),
            (this._dash = Jo(s[1] - s[0])),
            (this._offset = Jo(-s[0])),
            (this._dashPT = this.add(
              this,
              '_dash',
              this._dash,
              Jo(a[1] - a[0])
            )),
            (this._offsetPT = this.add(
              this,
              '_offset',
              this._offset,
              Jo(-a[0])
            )),
            Xo &&
              (o = Yo.getComputedStyle(e)).strokeLinecap !== o.strokeLinejoin &&
              ((a = el(o.strokeMiterlimit)),
              this.add(e.style, 'strokeMiterlimit', a, a + 0.01)),
            (this._live = al(e) || ~(t + '').indexOf('live')),
            (this._nowrap = ~(t + '').indexOf('nowrap')),
            this._props.push('drawSVG'),
            1
          );
        },
        render: function (e, t) {
          var i,
            r,
            n,
            s,
            a = t._pt,
            o = t._style;
          if (a) {
            for (
              t._live &&
              (i = ol(t._target)) !== t._length &&
              ((r = i / t._length),
              (t._length = i),
              t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
              t._dashPT
                ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
                : (t._dash *= r));
              a;

            )
              a.r(e, a.d), (a = a._next);
            (n = t._dash || (e && 1 !== e && 1e-4) || 0),
              (i = t._length - n + 0.1),
              (s = t._offset),
              n &&
                s &&
                n + Math.abs(s % t._length) > t._length - 0.2 &&
                (s += s < 0 ? 0.1 : -0.1) &&
                (i += 0.1),
              (o.strokeDashoffset = n ? s : s + 0.001),
              (o.strokeDasharray =
                i < 0.2
                  ? 'none'
                  : n
                  ? n + 'px,' + (t._nowrap ? 999999 : i) + 'px'
                  : '0px, 999999px');
          }
        },
        getLength: ol,
        getPosition: ll,
      };
    Ko() && Vo.registerPlugin(ul);
    /*!
     * ScrollToPlugin 3.10.4
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var dl,
      hl,
      pl,
      fl,
      vl,
      gl,
      ml,
      yl = function () {
        return 'undefined' != typeof window;
      },
      bl = function () {
        return dl || (yl() && (dl = window.gsap) && dl.registerPlugin && dl);
      },
      _l = function (e) {
        return 'string' == typeof e;
      },
      wl = function (e) {
        return 'function' == typeof e;
      },
      Tl = function (e, t) {
        var i = 'x' === t ? 'Width' : 'Height',
          r = 'scroll' + i,
          n = 'client' + i;
        return e === pl || e === fl || e === vl
          ? Math.max(fl[r], vl[r]) - (pl['inner' + i] || fl[n] || vl[n])
          : e[r] - e['offset' + i];
      },
      xl = function (e, t) {
        var i = 'scroll' + ('x' === t ? 'Left' : 'Top');
        return (
          e === pl &&
            (null != e.pageXOffset
              ? (i = 'page' + t.toUpperCase() + 'Offset')
              : (e = null != fl[i] ? fl : vl)),
          function () {
            return e[i];
          }
        );
      },
      Sl = function (e, t) {
        if (!(e = gl(e)[0]) || !e.getBoundingClientRect)
          return (
            console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0,
            }
          );
        var i = e.getBoundingClientRect(),
          r = !t || t === pl || t === vl,
          n = r
            ? {
                top:
                  fl.clientTop -
                  (pl.pageYOffset || fl.scrollTop || vl.scrollTop || 0),
                left:
                  fl.clientLeft -
                  (pl.pageXOffset || fl.scrollLeft || vl.scrollLeft || 0),
              }
            : t.getBoundingClientRect(),
          s = {
            x: i.left - n.left,
            y: i.top - n.top,
          };
        return !r && t && ((s.x += xl(t, 'x')()), (s.y += xl(t, 'y')())), s;
      },
      El = function (e, t, i, r, n) {
        return isNaN(e) || 'object' == typeof e
          ? _l(e) && '=' === e.charAt(1)
            ? parseFloat(e.substr(2)) * ('-' === e.charAt(0) ? -1 : 1) + r - n
            : 'max' === e
            ? Tl(t, i) - n
            : Math.min(Tl(t, i), Sl(e, t)[i] - n)
          : parseFloat(e) - n;
      },
      Cl = function () {
        (dl = bl()),
          yl() &&
            dl &&
            document.body &&
            ((pl = window),
            (vl = document.body),
            (fl = document.documentElement),
            (gl = dl.utils.toArray),
            dl.config({
              autoKillThreshold: 7,
            }),
            (ml = dl.config()),
            (hl = 1));
      },
      kl = {
        version: '3.10.4',
        name: 'scrollTo',
        rawVars: 1,
        register: function (e) {
          (dl = e), Cl();
        },
        init: function (e, t, i, r, n) {
          hl || Cl();
          var s = dl.getProperty(e, 'scrollSnapType');
          (this.isWin = e === pl),
            (this.target = e),
            (this.tween = i),
            (t = (function (e, t, i, r) {
              if ((wl(e) && (e = e(t, i, r)), 'object' != typeof e))
                return _l(e) && 'max' !== e && '=' !== e.charAt(1)
                  ? {
                      x: e,
                      y: e,
                    }
                  : {
                      y: e,
                    };
              if (e.nodeType)
                return {
                  y: e,
                  x: e,
                };
              var n,
                s = {};
              for (n in e)
                s[n] = 'onAutoKill' !== n && wl(e[n]) ? e[n](t, i, r) : e[n];
              return s;
            })(t, r, e, n)),
            (this.vars = t),
            (this.autoKill = !!t.autoKill),
            (this.getX = xl(e, 'x')),
            (this.getY = xl(e, 'y')),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            s &&
              'none' !== s &&
              ((this.snap = 1),
              (this.snapInline = e.style.scrollSnapType),
              (e.style.scrollSnapType = 'none')),
            null != t.x
              ? (this.add(
                  this,
                  'x',
                  this.x,
                  El(t.x, e, 'x', this.x, t.offsetX || 0),
                  r,
                  n
                ),
                this._props.push('scrollTo_x'))
              : (this.skipX = 1),
            null != t.y
              ? (this.add(
                  this,
                  'y',
                  this.y,
                  El(t.y, e, 'y', this.y, t.offsetY || 0),
                  r,
                  n
                ),
                this._props.push('scrollTo_y'))
              : (this.skipY = 1);
        },
        render: function (e, t) {
          for (
            var i,
              r,
              n,
              s,
              a,
              o = t._pt,
              l = t.target,
              c = t.tween,
              u = t.autoKill,
              d = t.xPrev,
              h = t.yPrev,
              p = t.isWin,
              f = t.snap,
              v = t.snapInline;
            o;

          )
            o.r(e, o.d), (o = o._next);
          (i = p || !t.skipX ? t.getX() : d),
            (n = (r = p || !t.skipY ? t.getY() : h) - h),
            (s = i - d),
            (a = ml.autoKillThreshold),
            t.x < 0 && (t.x = 0),
            t.y < 0 && (t.y = 0),
            u &&
              (!t.skipX && (s > a || s < -a) && i < Tl(l, 'x') && (t.skipX = 1),
              !t.skipY && (n > a || n < -a) && r < Tl(l, 'y') && (t.skipY = 1),
              t.skipX &&
                t.skipY &&
                (c.kill(),
                t.vars.onAutoKill &&
                  t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))),
            p
              ? pl.scrollTo(t.skipX ? i : t.x, t.skipY ? r : t.y)
              : (t.skipY || (l.scrollTop = t.y),
                t.skipX || (l.scrollLeft = t.x)),
            !f ||
              (1 !== e && 0 !== e) ||
              ((r = l.scrollTop),
              (i = l.scrollLeft),
              v
                ? (l.style.scrollSnapType = v)
                : l.style.removeProperty('scroll-snap-type'),
              (l.scrollTop = r + 1),
              (l.scrollLeft = i + 1),
              (l.scrollTop = r),
              (l.scrollLeft = i)),
            (t.xPrev = t.x),
            (t.yPrev = t.y);
        },
        kill: function (e) {
          var t = 'scrollTo' === e;
          (t || 'scrollTo_x' === e) && (this.skipX = 1),
            (t || 'scrollTo_y' === e) && (this.skipY = 1);
        },
      };
    (kl.max = Tl),
      (kl.getOffset = Sl),
      (kl.buildGetter = xl),
      bl() && dl.registerPlugin(kl),
      Tr.registerPlugin(sa),
      Tr.registerPlugin(ul),
      Tr.registerPlugin(kl);
    var Ll = document.querySelectorAll('.js-lifecycle-hld'),
      Ml = window.matchMedia('(min-width: 1024px)'),
      Al = function (e) {
        e.matches
          ? Ll.forEach(function (e) {
              var t = e.querySelector('.js-lifecycle-svg-line-path'),
                i = e.querySelector('.js-lifecycle-item-0'),
                r = e.querySelector('.js-lifecycle-item-1'),
                n = e.querySelector('.js-lifecycle-item-2'),
                s = e.querySelector('.js-lifecycle-item-3'),
                a = e.querySelector('.js-lifecycle-item-4'),
                o = e.querySelector('.js-lifecycle-item-5'),
                l = e.querySelector('.js-lifecycle-dot-1'),
                c = e.querySelector('.js-lifecycle-dot-2'),
                u = e.querySelector('.js-lifecycle-dot-3'),
                d = e.querySelector('.js-lifecycle-dot-4'),
                h = e.querySelector('.js-lifecycle-dot-5'),
                p = e.querySelector('.js-lifecycle-dot-6'),
                f = e.querySelector('.js-lifecycle-tooltip-1'),
                v = e.querySelector('.js-lifecycle-tooltip-2'),
                g = e.querySelector('.js-lifecycle-tooltip-3'),
                m = e.querySelector('.js-lifecycle-tooltip-4'),
                y = e.querySelector('.js-lifecycle-tooltip-5'),
                b = e.querySelector('.js-lifecycle-tooltip-6'),
                _ = e.querySelectorAll('.js-lifecycle-skip'),
                w = !0;
              e.addEventListener('disableLifeCycle', function () {
                w = !1;
              }),
                e.addEventListener('enableLifeCycle', function () {
                  w = !0;
                });
              var T = function (e) {
                sa.refresh(),
                  w &&
                    Tr.to(window, {
                      ease: 'none',
                      duration: 0.5,
                      scrollTo: {
                        y: e,
                      },
                    });
              };
              _.forEach(function (t) {
                t.addEventListener('click', function () {
                  (w = !1),
                    Tr.to(window, {
                      duration: 1,
                      scrollTo: {
                        y: e.nextElementSibling,
                        offsetY: 100,
                      },
                    }),
                    setTimeout(function () {
                      w = !0;
                    }, 1100);
                });
              }),
                Tr.to(t, {
                  drawSVG: 0,
                  duration: 0.01,
                }),
                Tr.to(t, {
                  opacity: 1,
                }),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 0',
                  },
                  {
                    drawSVG: '0 20%',
                    ease: 'power4.out',
                    scrollTrigger: {
                      id: 'trigger0',
                      trigger: i,
                      markers: !1,
                      start: 'top-=100 49%',
                      end: '90% 95%',
                      toggleActions: 'play pause pause reverse',
                      scrub: 0.5,
                      onEnter: function () {
                        return T(i);
                      },
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.45 &&
                          (l.classList.remove('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.45 &&
                            (l.classList.add('is-active'),
                            f.classList.add('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 20%',
                  },
                  {
                    drawSVG: '0 36%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger1',
                      trigger: r,
                      markers: !1,
                      start: 'top 95%',
                      end: '95% bottom',
                      toggleActions: 'play complete reverse reverse',
                      onEnter: function () {
                        return T(r);
                      },
                      onEnterBack: function () {
                        return T(i);
                      },
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.99 &&
                          (c.classList.remove('is-active'),
                          v.classList.remove('is-active'),
                          f.classList.add('is-active')),
                          e.progress.toFixed(2) >= 0.99 &&
                            (c.classList.add('is-active'),
                            v.classList.add('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 36%',
                  },
                  {
                    drawSVG: '0 47%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger2',
                      trigger: n,
                      markers: !1,
                      start: 'top 95%',
                      end: '95% bottom',
                      toggleActions: 'play complete reverse reverse',
                      onEnter: function () {
                        return T(n);
                      },
                      onEnterBack: function () {
                        return T(r);
                      },
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (u.classList.remove('is-active'),
                          g.classList.remove('is-active'),
                          v.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (u.classList.add('is-active'),
                            g.classList.add('is-active'),
                            v.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 47%',
                  },
                  {
                    drawSVG: '0 59%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger3',
                      trigger: s,
                      markers: !1,
                      start: 'top 95%',
                      end: '95% bottom',
                      toggleActions: 'play complete reverse reverse',
                      onEnter: function () {
                        return T(s);
                      },
                      onEnterBack: function () {
                        return T(n);
                      },
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (d.classList.remove('is-active'),
                          m.classList.remove('is-active'),
                          g.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (d.classList.add('is-active'),
                            m.classList.add('is-active'),
                            g.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 59%',
                  },
                  {
                    drawSVG: '0 70%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger4',
                      trigger: a,
                      markers: !1,
                      start: 'top 95%',
                      end: '95% bottom',
                      toggleActions: 'play complete reverse reverse',
                      onEnter: function () {
                        return T(a);
                      },
                      onEnterBack: function () {
                        return T(s);
                      },
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (h.classList.remove('is-active'),
                          y.classList.remove('is-active'),
                          m.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (h.classList.add('is-active'),
                            y.classList.add('is-active'),
                            m.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 70%',
                  },
                  {
                    drawSVG: '0 84%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger5',
                      trigger: o,
                      markers: !1,
                      start: 'top 95%',
                      end: '95% bottom',
                      toggleActions: 'play complete reverse reverse',
                      onEnter: function () {
                        return T(o);
                      },
                      onEnterBack: function () {
                        return T(a);
                      },
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (p.classList.remove('is-active'),
                          b.classList.remove('is-active'),
                          y.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (p.classList.add('is-active'),
                            b.classList.add('is-active'),
                            y.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 84%',
                  },
                  {
                    drawSVG: '0 100%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger6',
                      trigger: o,
                      markers: !1,
                      start: 'bottom 90%',
                      end: 'bottom 40%',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onEnterBack: function () {
                        return T(o);
                      },
                      onUpdate: function (e) {
                        f.classList.remove('is-active');
                      },
                    },
                  }
                );
            })
          : Ll.forEach(function (e) {
              var t = e.querySelector('.js-lifecycle-svg-line-path'),
                i = e.querySelector('.js-lifecycle-item-0'),
                r = e.querySelector('.js-lifecycle-item-1'),
                n = e.querySelector('.js-lifecycle-item-2'),
                s = e.querySelector('.js-lifecycle-item-3'),
                a = e.querySelector('.js-lifecycle-item-4'),
                o = e.querySelector('.js-lifecycle-item-5'),
                l = e.querySelector('.js-lifecycle-dot-1'),
                c = e.querySelector('.js-lifecycle-dot-2'),
                u = e.querySelector('.js-lifecycle-dot-3'),
                d = e.querySelector('.js-lifecycle-dot-4'),
                h = e.querySelector('.js-lifecycle-dot-5'),
                p = e.querySelector('.js-lifecycle-dot-6'),
                f = e.querySelector('.js-lifecycle-tooltip-1'),
                v = e.querySelector('.js-lifecycle-tooltip-2'),
                g = e.querySelector('.js-lifecycle-tooltip-3'),
                m = e.querySelector('.js-lifecycle-tooltip-4'),
                y = e.querySelector('.js-lifecycle-tooltip-5'),
                b = e.querySelector('.js-lifecycle-tooltip-6');
              e.querySelectorAll('.js-lifecycle-skip').forEach(function (t) {
                t.addEventListener('click', function () {
                  sa.refresh(),
                    Tr.to(window, {
                      duration: 1,
                      scrollTo: {
                        y: e.nextElementSibling,
                        offsetY: 100,
                      },
                    });
                });
              }),
                Tr.to(t, {
                  drawSVG: 0,
                  duration: 0.01,
                }),
                Tr.to(t, {
                  opacity: 1,
                }),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 0',
                  },
                  {
                    drawSVG: '0 20%',
                    ease: 'power4.out',
                    scrollTrigger: {
                      id: 'trigger0',
                      trigger: i,
                      markers: !1,
                      start: 'top 85%',
                      end: '95% 95%',
                      toggleActions: 'play pause pause reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.45 &&
                          (l.classList.remove('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.45 &&
                            (l.classList.add('is-active'),
                            f.classList.add('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 20%',
                  },
                  {
                    drawSVG: '0 36%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger1',
                      trigger: r,
                      markers: !1,
                      start: 'top 95%',
                      end: '50% bottom',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.99 &&
                          (c.classList.remove('is-active'),
                          v.classList.remove('is-active'),
                          f.classList.add('is-active')),
                          e.progress.toFixed(2) >= 0.99 &&
                            (c.classList.add('is-active'),
                            v.classList.add('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 36%',
                  },
                  {
                    drawSVG: '0 47%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger2',
                      trigger: n,
                      markers: !1,
                      start: 'top 95%',
                      end: '50% bottom',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (u.classList.remove('is-active'),
                          g.classList.remove('is-active'),
                          v.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (u.classList.add('is-active'),
                            g.classList.add('is-active'),
                            v.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 47%',
                  },
                  {
                    drawSVG: '0 59%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger3',
                      trigger: s,
                      markers: !1,
                      start: 'top 95%',
                      end: '50% bottom',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (d.classList.remove('is-active'),
                          m.classList.remove('is-active'),
                          g.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (d.classList.add('is-active'),
                            m.classList.add('is-active'),
                            g.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 59%',
                  },
                  {
                    drawSVG: '0 70%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger4',
                      trigger: a,
                      markers: !1,
                      start: 'top 95%',
                      end: '50% bottom',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (h.classList.remove('is-active'),
                          y.classList.remove('is-active'),
                          m.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (h.classList.add('is-active'),
                            y.classList.add('is-active'),
                            m.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 70%',
                  },
                  {
                    drawSVG: '0 84%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger5',
                      trigger: o,
                      markers: !1,
                      start: 'top 95%',
                      end: '50% bottom',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        e.progress.toFixed(2) < 0.9 &&
                          (p.classList.remove('is-active'),
                          b.classList.remove('is-active'),
                          y.classList.add('is-active'),
                          f.classList.remove('is-active')),
                          e.progress.toFixed(2) >= 0.9 &&
                            (p.classList.add('is-active'),
                            b.classList.add('is-active'),
                            y.classList.remove('is-active'),
                            f.classList.remove('is-active'));
                      },
                    },
                  }
                ),
                Tr.fromTo(
                  t,
                  {
                    drawSVG: '0 84%',
                  },
                  {
                    drawSVG: '0 100%',
                    ease: 'none',
                    scrollTrigger: {
                      id: 'trigger6',
                      trigger: o,
                      markers: !1,
                      start: 'bottom 90%',
                      end: 'bottom 40%',
                      toggleActions: 'play complete reverse reverse',
                      scrub: 0.5,
                      onUpdate: function (e) {
                        f.classList.remove('is-active');
                      },
                    },
                  }
                );
            });
      };
    Ml.addEventListener('change', Al), Al(Ml);
    i(12), i(13);
    document.querySelector('body').classList.add('scripts-initialized');
  },
]);
