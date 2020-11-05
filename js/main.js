// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function (t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o, i, a, s = [], r = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "", i ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), a = n.fancybox.open(s, e, r), a.$trigger = o))
  }

  if (t.console = t.console || {
    info: function (t) {
    }
  }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
      closeExisting: !1,
      loop: !1,
      gutter: 50,
      keyboard: !0,
      preventCaptionOverlap: !0,
      arrows: !0,
      infobar: !0,
      smallBtn: "auto",
      toolbar: "auto",
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      idleTime: 3,
      protect: !1,
      modal: !1,
      image: {preload: !1},
      ajax: {settings: {data: {fancybox: !0}}},
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
        preload: !0,
        css: {},
        attr: {scrolling: "auto"}
      },
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
        format: "",
        autoStart: !0
      },
      defaultType: "image",
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
      btnTpl: {
        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
      },
      parentEl: "body",
      hideScrollbar: !0,
      autoFocus: !0,
      backFocus: !0,
      trapFocus: !0,
      fullScreen: {autoStart: !1},
      touch: {vertical: !0, momentum: !0},
      hash: null,
      media: {},
      slideShow: {autoStart: !1, speed: 3e3},
      thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
      wheel: "auto",
      onInit: n.noop,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeShow: n.noop,
      afterShow: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
      clickContent: function (t, e) {
        return "image" === t.type && "zoom"
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        preventCaptionOverlap: !1, idleTime: !1, clickContent: function (t, e) {
          return "image" === t.type && "toggleControls"
        }, clickSlide: function (t, e) {
          return "image" === t.type ? "toggleControls" : "close"
        }, dblclickContent: function (t, e) {
          return "image" === t.type && "zoom"
        }, dblclickSlide: function (t, e) {
          return "image" === t.type && "zoom"
        }
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schlie&szlig;en",
          NEXT: "Weiter",
          PREV: "Zur&uuml;ck",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Vergr&ouml;&szlig;ern"
        }
      }
    }, s = n(t), r = n(e), c = 0, l = function (t) {
      return t && t.hasOwnProperty && t instanceof n
    }, d = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60)
      }
    }(), u = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e)
      }
    }(), f = function () {
      var t, n = e.createElement("fakeelement"), o = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };
      for (t in o) if (void 0 !== n.style[t]) return o[t];
      return "transitionend"
    }(), p = function (t) {
      return t && t.length && t[0].offsetHeight
    }, h = function (t, e) {
      var o = n.extend(!0, {}, t, e);
      return n.each(e, function (t, e) {
        n.isArray(e) && (o[t] = e)
      }), o
    }, g = function (t) {
      var o, i;
      return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
        x: t.getBoundingClientRect().left + t.offsetWidth / 2,
        y: t.getBoundingClientRect().top + t.offsetHeight / 2
      }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
    }, b = function (t, e, o) {
      var i = this;
      i.opts = h({index: o}, n.fancybox.defaults), n.isPlainObject(e) && (i.opts = h(i.opts, e)), n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)), i.id = i.opts.id || ++c, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(t), i.group.length && i.init()
    };
    n.extend(b.prototype, {
      init: function () {
        var o, i, a = this, s = a.group[a.currIndex], r = s.opts;
        r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(r.buttons, function (t, e) {
          i += r.btnTpl[e] || ""
        }), o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl), a.$refs = {container: o}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
          a.$refs[t] = o.find(".fancybox-" + t)
        }), a.trigger("onInit"), a.activate(), a.jumpTo(a.currIndex)
      }, translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e]
        })
      }, addContent: function (t) {
        var e, o = this, i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i, a, s, r, c, l = {}, d = {};
          n.isPlainObject(e) ? (l = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, l.src = o.opts.src || d.src || i.attr("href"), l.type || l.src || (l.type = "inline", l.src = e)) : l = {
            type: "html",
            src: e + ""
          }, l.opts = n.extend(!0, {}, o.opts, d), n.isArray(d.buttons) && (l.opts.buttons = d.buttons), n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)), a = l.type || l.opts.type, r = l.src || "", !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", l = n.extend(!0, l, {
            contentType: "pdf",
            opts: {iframe: {preload: !1}}
          })) : "#" === r.charAt(0) && (a = "inline")), a ? l.type = a : o.trigger("objectNeedsType", l), l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type), l.index = o.group.length, "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1), "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn), l.$thumb = l.opts.$thumb || null, l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)), l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")), l.$thumb && !l.$thumb.length && (l.$thumb = null), l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null), "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])), "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === l.type && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), o.group.push(l)
        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
      }, addEvents: function () {
        var e = this;
        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.close(t)
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.previous()
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), e.next()
        }).on("click.fb", "[data-fancybox-zoom]", function (t) {
          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = d(function () {
            e.update(t)
          })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
            e.$refs.stage.show(), e.update(t)
          }, n.fancybox.isMobile ? 600 : 250))
        }), r.on("keydown.fb", function (t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null, i = o.current, a = t.keyCode || t.which;
          if (9 == a) return void (i.opts.trapFocus && e.focus(t));
          if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === a || 27 === a ? (t.preventDefault(), void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, a)
        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
          e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
        }), e.idleInterval = t.setInterval(function () {
          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
        }, 1e3))
      }, removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
      }, previous: function (t) {
        return this.jumpTo(this.currPos - 1, t)
      }, next: function (t) {
        return this.jumpTo(this.currPos + 1, t)
      }, jumpTo: function (t, e) {
        var o, i, a, s, r, c, l, d, u, f = this, h = f.group.length;
        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
          if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h)) return !1;
          if (o = f.firstRun = !Object.keys(f.slides).length, r = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, s = f.createSlide(t), h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)), f.current = s, f.currIndex = s.index, f.currPos = s.pos, f.trigger("beforeShow", o), f.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = f.isMoved(s), s.$slide.addClass("fancybox-slide--current"), o) return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
          c = n.fancybox.getTranslate(r.$slide), l = n.fancybox.getTranslate(f.$refs.stage), n.each(f.slides, function (t, e) {
            n.fancybox.stop(e.$slide, !0)
          }), r.pos !== s.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter), n.each(f.slides, function (t, o) {
            o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
            });
            var i = o.pos * c.width + o.pos * o.opts.gutter;
            n.fancybox.setTranslate(o.$slide, {
              top: 0,
              left: i - l.left + u
            }), o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")), p(o.$slide), n.fancybox.animate(o.$slide, {
              top: 0,
              left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
            }, e, function () {
              o.$slide.css({
                transform: "",
                opacity: ""
              }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete()
            })
          })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")), n.fancybox.animate(r.$slide, d, e, function () {
            r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
          }, !1)), s.isLoaded ? f.revealContent(s) : f.loadSlide(s), f.preload("image")
        }
      }, createSlide: function (t) {
        var e, o, i = this;
        return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), i.updateSlide(i.slides[t])), i.slides[t]
      }, scaleToActual: function (t, e, o) {
        var i, a, s, r, c, l = this, d = l.current, u = d.$content, f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height, h = d.width, g = d.height;
        l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0, n.fancybox.stop(u), t = void 0 === t ? .5 * f : t, e = void 0 === e ? .5 * p : e, i = n.fancybox.getTranslate(u), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, r = h / i.width, c = g / i.height, a = .5 * f - .5 * h, s = .5 * p - .5 * g, h > f && (a = i.left * r - (t * r - t), a > 0 && (a = 0), a < f - h && (a = f - h)), g > p && (s = i.top * c - (e * c - e), s > 0 && (s = 0), s < p - g && (s = p - g)), l.updateCursor(h, g), n.fancybox.animate(u, {
          top: s,
          left: a,
          scaleX: r,
          scaleY: c
        }, o || 366, function () {
          l.isAnimating = !1
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
      }, scaleToFit: function (t) {
        var e, o = this, i = o.current, a = i.$content;
        o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(a), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
          top: e.top,
          left: e.left,
          scaleX: e.width / a.width(),
          scaleY: e.height / a.height()
        }, t || 366, function () {
          o.isAnimating = !1
        }))
      }, getFitPos: function (t) {
        var e, o, i, a, s = this, r = t.$content, c = t.$slide, l = t.width || t.opts.width,
          d = t.height || t.opts.height, u = {};
        return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && d || (l = e, d = o), i = Math.min(1, e / l, o / d), l *= i, d *= i, l > e - .5 && (l = e), d > o - .5 && (d = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9, d > l / a ? d = l / a : l > d * a && (l = d * a)), u.width = l, u.height = d, u)
      }, update: function (t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t)
        })
      }, updateSlide: function (t, e) {
        var o = this, i = t && t.$content, a = t.width || t.opts.width, s = t.height || t.opts.height, r = t.$slide;
        o.adjustCaption(t), i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), o.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t, e)
      }, centerSlide: function (t) {
        var e = this, o = e.current, i = o.$slide;
        !e.isClosing && o && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, void 0 === t ? 0 : t, function () {
          i.css({transform: "", opacity: ""}), o.isComplete || e.complete()
        }, !1))
      }, isMoved: function (t) {
        var e, o, i = t || this.current;
        return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
      }, updateCursor: function (t, e) {
        var o, i, a = this, s = a.current, r = a.$refs.container;
        s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = a.canPan(t, e), i = !!o || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
      }, isZoomable: function () {
        var t, e = this, n = e.current;
        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
        }
        return !1
      }, isScaledDown: function (t, e) {
        var o = this, i = !1, a = o.current, s = a.$content;
        return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s), i = i.width < a.width && i.height < a.height), i
      }, canPan: function (t, e) {
        var o = this, i = o.current, a = null, s = !1;
        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i), void 0 !== t && void 0 !== e ? a = {
          width: t,
          height: e
        } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)), a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)), s
      }, loadSlide: function (t) {
        var e, o, i, a = this;
        if (!t.isLoading && !t.isLoaded) {
          if (t.isLoading = !0, !1 === a.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
          switch (e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
            case"image":
              a.setImage(t);
              break;
            case"iframe":
              a.setIframe(t);
              break;
            case"html":
              a.setContent(t, t.src || t.content);
              break;
            case"video":
              a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
              break;
            case"inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case"ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src, success: function (e, n) {
                  "success" === n && a.setContent(t, e)
                }, error: function (e, n) {
                  e && "abort" !== n && a.setError(t)
                }
              })), o.one("onReset", function () {
                i.abort()
              });
              break;
            default:
              a.setError(t)
          }
          return !0
        }
      }, setImage: function (t) {
        var o, i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
        }, 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, o = e.createElement("img"), o.onerror = function () {
          n(this).remove(), t.$ghost = null
        }, o.onload = function () {
          i.afterLoad(t)
        }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
      }, checkSrcset: function (e) {
        var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          i = t.devicePixelRatio || 1, a = t.innerWidth * i, o = s.split(",").map(function (t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              if (0 === n) return e.url = t;
              o && (e.value = o, e.postfix = t[t.length - 1])
            }), e
          }), o.sort(function (t, e) {
            return t.value - e.value
          });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
              n = c;
              break
            }
          }
          !n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
        }
      }, setBigImage: function (t) {
        var o = this, i = e.createElement("img"), a = n(i);
        t.$image = a.one("error", function () {
          o.setError(t)
        }).one("load", function () {
          var e;
          t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && (e = t.opts.sizes, e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), a.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !o.isClosing && t.$ghost.hide()
          }, Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error")
      }, resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10), i = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
      }, setIframe: function (t) {
        var e, o = this, i = t.opts.iframe, a = t.$slide;
        t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
        }), a.on("refresh.fb", function () {
          var n, o, s = t.$content, r = i.css.width, c = i.css.height;
          if (1 === e[0].isReady) {
            try {
              n = e.contents(), o = n.find("body")
            } catch (t) {
            }
            o && o.length && o.children().length && (a.css("overflow", "visible"), s.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))), s.css("width", r || "").css("max-width", ""), void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))), s.css("height", c || ""), a.css("overflow", "auto")), s.removeClass("fancybox-is-hidden")
          }
        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
          } catch (t) {
          }
          n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
        })
      }, setContent: function (t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), o.afterLoad(t))
      }, setError: function (t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
      }, showLoading: function (t) {
        var e = this;
        (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
      }, hideLoading: function (t) {
        var e = this;
        (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
      }, afterLoad: function (t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
      }, adjustCaption: function (t) {
        var e, n = this, o = t || n.current, i = o.opts.caption, a = o.opts.preventCaptionOverlap, s = n.$refs.caption,
          r = !1;
        s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""))
      }, adjustLayout: function (t) {
        var e, n, o, i, a = this, s = t || a.current;
        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
      }, revealContent: function (t) {
        var e, o, i, a, s = this, r = t.$slide, c = !1, l = !1, d = s.isMoved(t), u = t.isRevealed;
        return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !d && t.pos === s.currPos && i || (e = !1), "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, c.scaleX = c.width / l.width, c.scaleY = c.height / l.height, a = t.opts.zoomOpacity, "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1), a && (l.opacity = .1, c.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void n.fancybox.animate(t.$content, c, i, function () {
          s.isAnimating = !1, s.complete()
        })) : (s.updateSlide(t), e ? (n.fancybox.stop(r), o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(o).css({transform: "", opacity: ""}), t.pos === s.currPos && s.complete()
        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())))
      }, getThumbPos: function (t) {
        var e, o, i, a, s, r = !1, c = t.$thumb;
        return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), i = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), s = parseFloat(c.css("border-left-width") || 0), r = {
          top: e.top + o,
          left: e.left + s,
          width: e.width - i - s,
          height: e.height - o - a,
          scaleX: 1,
          scaleY: 1
        }, e.width > 0 && e.height > 0 && r)
      }, complete: function () {
        var t, e = this, o = e.current, i = {};
        !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), p(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, o) {
          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
        }), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
        }), o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
      }, preload: function (t) {
        var e, n, o = this;
        o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
      }, focus: function (t, o) {
        var i, a, s = this,
          r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"), i = i.filter(r).filter(function () {
          return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
        }), i.length ? (a = i.index(e.activeElement), t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
      }, activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
      }, close: function (t, e) {
        var o, i, a, s, r, c, l, u = this, f = u.current, h = function () {
          u.cleanUp(t)
        };
        return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, d(function () {
          u.update()
        }), !1) : (u.removeEvents(), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
          top: s.top,
          left: s.left,
          scaleX: s.width / l.width,
          scaleY: s.height / l.height,
          width: l.width,
          height: l.height
        }, r = f.opts.zoomOpacity,
        "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), p(a), n.fancybox.animate(a, l, i, h), !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)))
      }, cleanUp: function (e) {
        var o, i, a, s = this, r = s.current.opts.$orig;
        s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (i = t.scrollX, a = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
      }, trigger: function (t, e) {
        var o, i = Array.prototype.slice.call(arguments, 1), a = this, s = e && e.opts ? e : a.current;
        if (s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o) return o;
        "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i)
      }, updateControls: function () {
        var t = this, o = t.current, i = o.index, a = t.$refs.container, s = t.$refs.caption, r = o.opts.caption;
        o.$slide.trigger("refresh"), r && r.length ? (t.$caption = s, s.children().eq(0).html(r)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(i + 1), a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0), a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1), "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
      }, hideControls: function (t) {
        var e = this, n = ["infobar", "toolbar", "nav"];
        !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
          return "fancybox-show-" + t
        }).join(" ")), this.hasHiddenControls = !0
      }, showControls: function () {
        var t = this, e = t.current ? t.current.opts : t.opts, n = t.$refs.container;
        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
      }, toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls()
      }
    }), n.fancybox = {
      version: "3.5.7",
      defaults: a,
      getInstance: function (t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          o = Array.prototype.slice.call(arguments, 1);
        return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
      },
      open: function (t, e, n) {
        return new b(t, e, n)
      },
      close: function (t) {
        var e = this.getInstance();
        e && (e.close(), !0 === t && this.close(t))
      },
      destroy: function () {
        this.close(!0), r.add("body").off("click.fb-start", "**")
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: function () {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
      }(),
      getTranslate: function (t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css("opacity"))
        })
      },
      setTranslate: function (t, e) {
        var n = "", o = {};
        if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
      },
      animate: function (t, e, o, i, a) {
        var s, r = this;
        n.isFunction(o) && (i = o, o = null), r.stop(t), s = r.getTranslate(t), t.on(f, function (c) {
          (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
            top: e.top,
            left: e.left,
            width: s.width * e.scaleX,
            height: s.height * e.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : !0 !== a && t.removeClass(e), n.isFunction(i) && i(c))
        }), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger(f)
        }, o + 33))
      },
      stop: function (t, e) {
        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
      }
    }, n.fn.fancybox = function (t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {options: t}, i) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, i), this
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
      n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: n(this)})
    }), function () {
      var t = null;
      r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
        switch (e.type) {
          case"mousedown":
            t = n(this);
            break;
          case"mouseup":
            t = null;
            break;
          case"focusin":
            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
            break;
          case"focusout":
            n(".fancybox-button").removeClass("fancybox-focus")
        }
      })
    }()
  }
}(window, document, jQuery), function (t) {
  "use strict";
  var e = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (t) {
        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (t) {
        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
      }
    }
  }, n = function (e, n, o) {
    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
      e = e.replace("$" + t, n || "")
    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
  };
  t(document).on("objectNeedsType.fb", function (o, i, a) {
    var s, r, c, l, d, u, f, p = a.src || "", h = !1;
    s = t.extend(!0, {}, e, a.opts.media), t.each(s, function (e, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = e, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
          for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
          }
        }
        return l = t.extend(!0, {}, o.params, a.opts[e], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {scrolling: "no"}
      }
    })), t.extend(a, {
      type: h,
      src: p,
      origSrc: a.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (a.type = a.opts.defaultType)
  });
  var o = {
    youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
    vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
    load: function (t) {
      var e, n = this;
      if (this[t].loaded) return void setTimeout(function () {
        n.done(t)
      });
      this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
        n[t].loaded = !0, n.done(t)
      } : e.onload = function () {
        n[t].loaded = !0, n.done(t)
      }, document.body.appendChild(e))
    },
    done: function (e) {
      var n, o, i;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"), {
        events: {
          onStateChange: function (t) {
            0 == t.data && n.next()
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o), i.on("ended", function () {
        n.next()
      })))
    }
  };
  t(document).on({
    "afterShow.fb": function (t, e, n) {
      e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
    }
  })
}(jQuery), function (t, e, n) {
  "use strict";
  var o = function () {
    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 1e3 / 60)
    }
  }(), i = function () {
    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
      t.clearTimeout(e)
    }
  }(), a = function (e) {
    var n = [];
    e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
    for (var o in e) e[o].pageX ? n.push({x: e[o].pageX, y: e[o].pageY}) : e[o].clientX && n.push({
      x: e[o].clientX,
      y: e[o].clientY
    });
    return n
  }, s = function (t, e, n) {
    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
  }, r = function (t) {
    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
    for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
    return !1
  }, c = function (e) {
    var n = t.getComputedStyle(e)["overflow-y"], o = t.getComputedStyle(e)["overflow-x"],
      i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
      a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
    return i || a
  }, l = function (t) {
    for (var e = !1; ;) {
      if (e = c(t.get(0))) break;
      if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
    }
    return e
  }, d = function (t) {
    var e = this;
    e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
  };
  d.prototype.destroy = function () {
    var t = this;
    t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
  }, d.prototype.ontouchstart = function (o) {
    var i = this, c = n(o.target), d = i.instance, u = d.current, f = u.$slide, p = u.$content,
      h = "touchstart" == o.type;
    if (h && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
      i.realPoints = i.startPoints = a(o), i.startPoints.length && (u.touch && o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = p, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.canPan = d.canPan(), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(f[0].clientWidth), i.canvasHeight = Math.round(f[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
        top: 0,
        left: 0
      }, i.sliderStartPos = n.fancybox.getTranslate(f), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && i.isScrollable || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-is-grabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
    }
  }, d.prototype.onscroll = function (t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
  }, d.prototype.ontouchmove = function (t) {
    var e = this;
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
  }, d.prototype.onSwipe = function (e) {
    var a, s = this, r = s.instance, c = s.isSwiping, l = s.sliderStartPos.left || 0;
    if (!0 !== c) "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
      top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
      left: l
    }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        })
      }), s.$container.addClass("fancybox-is-sliding"))
    }); else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
      r.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(r.slides, function (t, e) {
        var o, i;
        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (t, e) {
          return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
        }), e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top, s.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
          top: o.top - i.top,
          left: o.left - i.left
        })
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
    }
  }, d.prototype.onPan = function () {
    var t = this;
    if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
    t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos)
    })
  }, d.prototype.limitMovement = function () {
    var t, e, n, o, i, a, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, d = s.distanceY,
      u = s.contentStartPos, f = u.left, p = u.top, h = u.width, g = u.height;
    return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: a,
      left: i
    }
  }, d.prototype.limitPosition = function (t, e, n, o) {
    var i = this, a = i.canvasWidth, s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    }
  }, d.prototype.onZoom = function () {
    var e = this, a = e.contentStartPos, r = a.width, c = a.height, l = a.left, d = a.top,
      u = s(e.newPoints[0], e.newPoints[1]), f = u / e.startDistanceBetweenFingers, p = Math.floor(r * f),
      h = Math.floor(c * f), g = (r - p) * e.percentageOfImageAtPinchPointX,
      b = (c - h) * e.percentageOfImageAtPinchPointY, m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
      v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(), y = m - e.centerPointStartX,
      x = v - e.centerPointStartY, w = l + (g + y), $ = d + (b + x), S = {top: $, left: w, scaleX: f, scaleY: f};
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && i(e.requestId), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos)
    })
  }, d.prototype.ontouchend = function (t) {
    var o = this, s = o.isSwiping, r = o.isPanning, c = o.isZooming, l = o.isScrolling;
    if (o.endPoints = a(t), o.dMs = Math.max((new Date).getTime() - o.startTime, 1), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap) return o.onTap(t);
    o.speed = 100, o.velocityX = o.distanceX / o.dMs * .5, o.velocityY = o.distanceY / o.dMs * .5, r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
  }, d.prototype.endSwiping = function (t, e) {
    var o = this, i = !1, a = o.instance.group.length, s = Math.abs(o.distanceX),
      r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)), !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200), o.$container.removeClass("fancybox-is-sliding")
  }, d.prototype.endPanning = function () {
    var t, e, o, i = this;
    i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, e = i.contentLastPos.top + 500 * i.velocityY), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 366))
  }, d.prototype.endZooming = function () {
    var t, e, o, i, a = this, s = a.instance.current, r = a.newWidth, c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.animate(a.$content, o, 150)))
  }, d.prototype.onTap = function (e) {
    var o, i = this, s = n(e.target), r = i.instance, c = r.current, l = e && a(e) || i.startPoints,
      d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
      u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0, f = function (t) {
        var o = c.opts[t];
        if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
          case"close":
            r.close(i.startEvent);
            break;
          case"toggleControls":
            r.toggleControls();
            break;
          case"next":
            r.next();
            break;
          case"nextOrClose":
            r.group.length > 1 ? r.next() : r.close(i.startEvent);
            break;
          case"zoom":
            "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
        }
      };
    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside"; else if (s.is(".fancybox-slide")) o = "Slide"; else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content"
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
        f("dblclick" + o)
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || f("click" + o)
      }, 500) : f("click" + o);
      return this
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new d(e))
  }).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy()
  })
}(window, document, jQuery), function (t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
    slideShow: {autoStart: !1, speed: 3e3, progress: !0}
  });
  var n = function (t) {
    this.instance = t, this.init()
  };
  e.extend(n.prototype, {
    timer: null, isActive: !1, $button: null, init: function () {
      var t = this, n = t.instance, o = n.group[n.currIndex].opts.slideShow;
      t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle()
      }), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
    }, set: function (t) {
      var n = this, o = n.instance, i = o.current;
      i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {scaleX: 1}, i.opts.slideShow.speed), n.timer = setTimeout(function () {
        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
      }, i.opts.slideShow.speed)) : (n.stop(), o.idleSecondsCounter = 0, o.showControls())
    }, clear: function () {
      var t = this;
      clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
    }, start: function () {
      var t = this, e = t.instance.current;
      e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
    }, stop: function () {
      var t = this, e = t.instance.current;
      t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
    }, toggle: function () {
      var t = this;
      t.isActive ? t.stop() : t.start()
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e))
    }, "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
    }, "afterShow.fb": function (t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set()
    }, "afterKeydown.fb": function (n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
    }, "beforeClose.fb onDeactivate.fb": function (t, e) {
      var n = e && e.SlideShow;
      n && n.stop()
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(), o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set())
  })
}(document, jQuery), function (t, e) {
  "use strict";
  var n = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];
      if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
        return n
      }
    }
    return !1
  }();
  if (n) {
    var o = {
      request: function (e) {
        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
      }, exit: function () {
        t[n.exitFullscreen]()
      }, toggle: function (e) {
        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
      }, isFullscreen: function () {
        return Boolean(t[n.fullscreenElement])
      }, enabled: function () {
        return Boolean(t[n.fullscreenEnabled])
      }
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
      fullScreen: {autoStart: !1}
    }), e(t).on(n.fullscreenchange, function () {
      var t = o.isFullscreen(), n = e.fancybox.getInstance();
      n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
    })
  }
  e(t).on({
    "onInit.fb": function (t, e) {
      var i;
      if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container, i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle()
      }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
    }, "afterKeydown.fb": function (t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
    }, "beforeClose.fb": function (t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
    }
  })
}(document, jQuery), function (t, e) {
  "use strict";
  var n = "fancybox-thumbs";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
    thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
  }, e.fancybox.defaults);
  var o = function (t) {
    this.init(t)
  };
  e.extend(o.prototype, {
    $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (t) {
      var e = this, n = t.group, o = 0;
      e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
      for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) ;
      o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
        e.toggle()
      }), e.isActive = !0) : e.$button.hide()
    }, create: function () {
      var t, o = this, i = o.instance, a = o.opts.parentEl, s = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)), o.$grid.on("click", "a", function () {
        i.jumpTo(e(this).attr("data-index"))
      })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(i.group, function (e, n) {
        t = n.thumb, t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
      }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
    }, focus: function (t) {
      var e, n, o = this, i = o.$list, a = o.$grid;
      o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({scrollTop: i.scrollTop() + n.top}, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({scrollLeft: n.left}, t))
    }, update: function () {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
    }, hide: function () {
      this.isVisible = !1, this.update()
    }, show: function () {
      this.isVisible = !0, this.update()
    }, toggle: function () {
      this.isVisible = !this.isVisible, this.update()
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      var n;
      e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show())
    }, "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.Thumbs;
      i && i.isVisible && i.focus(o ? 0 : 250)
    }, "afterKeydown.fb": function (t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
    }, "beforeClose.fb": function (t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
    }
  })
}(document, jQuery), function (t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function (t) {
      return e[t]
    })
  }

  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
    share: {
      url: function (t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function () {
    var t, o, i = e.fancybox.getInstance(), a = i.current || null;
    a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
      src: i.translate(i, o),
      type: "html",
      opts: {
        touch: !1, animationEffect: !1, afterLoad: function (t, e) {
          i.$refs.container.one("beforeClose.fb", function () {
            t.close(null, 0)
          }), e.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1
          })
        }, mobile: {autoFocus: !1}
      }
    }))
  })
}(document, jQuery), function (t, e, n) {
  "use strict";

  function o() {
    var e = t.location.hash.substr(1), n = e.split("-"),
      o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1, i = n.join("-");
    return {hash: e, index: o < 1 ? 1 : o, gallery: i}
  }

  function i(t) {
    "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
  }

  function a(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
  }

  n.escapeSelector || (n.escapeSelector = function (t) {
    return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    })
  }), n(function () {
    !1 !== n.fancybox.defaults.hash && (n(e).on({
      "onInit.fb": function (t, e) {
        var n, i;
        !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
      }, "beforeShow.fb": function (n, o, i, s) {
        var r;
        i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
          "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
        }, 300)))
      }, "beforeClose.fb": function (n, o, i) {
        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
      }
    }), n(t).on("hashchange.fb", function () {
      var t = o(), e = null;
      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
        var i = n(o).data("FancyBox");
        if (i && i.currentHash) return e = i, !1
      }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
    }), setTimeout(function () {
      n.fancybox.getInstance() || i(o())
    }, 50))
  })
}(window, document, jQuery), function (t, e) {
  "use strict";
  var n = (new Date).getTime();
  e(t).on({
    "onInit.fb": function (t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
        var o = e.current, i = (new Date).getTime();
        e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
      })
    }
  })
}(document, jQuery);


//scrollbar
!function (t, e) {
  "object" == typeof exports ? module.exports = e(window, document) : t.SimpleScrollbar = e(window, document)
}(this, function (t, e) {
  function s(t) {
    Object.prototype.hasOwnProperty.call(t, "data-simple-scrollbar") || Object.defineProperty(t, "data-simple-scrollbar", {value: new o(t)})
  }

  function i(t, s) {
    function i(t) {
      var e = t.pageY - a;
      a = t.pageY, n(function () {
        s.el.scrollTop += e / s.scrollRatio
      })
    }

    function r() {
      t.classList.remove("ss-grabbed"), e.body.classList.remove("ss-grabbed"), e.removeEventListener("mousemove", i), e.removeEventListener("mouseup", r)
    }

    var a;
    t.addEventListener("mousedown", function (s) {
      return a = s.pageY, t.classList.add("ss-grabbed"), e.body.classList.add("ss-grabbed"), e.addEventListener("mousemove", i), e.addEventListener("mouseup", r), !1
    })
  }

  function r(t) {
    for (this.target = t, this.direction = window.getComputedStyle(this.target).direction, this.bar = '<div class="ss-scroll">', this.wrapper = e.createElement("div"), this.wrapper.setAttribute("class", "ss-wrapper"), this.el = e.createElement("div"), this.el.setAttribute("class", "ss-content"), "rtl" === this.direction && this.el.classList.add("rtl"), this.wrapper.appendChild(this.el); this.target.firstChild;) this.el.appendChild(this.target.firstChild);
    this.target.appendChild(this.wrapper), this.target.insertAdjacentHTML("beforeend", this.bar), this.bar = this.target.lastChild, i(this.bar, this), this.moveBar(), this.el.addEventListener("scroll", this.moveBar.bind(this)), this.el.addEventListener("mouseenter", this.moveBar.bind(this)), this.target.classList.add("ss-container");
    var s = window.getComputedStyle(t);
    "0px" === s.height && "0px" !== s["max-height"] && (t.style.height = s["max-height"])
  }

  function a() {
    for (var t = e.querySelectorAll("*[ss-container]"), i = 0; i < t.length; i++) s(t[i])
  }

  var n = t.requestAnimationFrame || t.setImmediate || function (t) {
    return setTimeout(t, 0)
  };
  r.prototype = {
    moveBar: function (t) {
      var e = this.el.scrollHeight, s = this.el.clientHeight, i = this;
      this.scrollRatio = s / e;
      var r = "rtl" === i.direction,
        a = r ? i.target.clientWidth - i.bar.clientWidth + 18 : -1 * (i.target.clientWidth - i.bar.clientWidth);
      n(function () {
        i.scrollRatio >= 1 ? i.bar.classList.add("ss-hidden") : (i.bar.classList.remove("ss-hidden"), i.bar.style.cssText = "height:" + Math.max(100 * i.scrollRatio, 10) + "%; top:" + i.el.scrollTop / e * 100 + "%;right:" + a + "px;")
      })
    }
  }, e.addEventListener("DOMContentLoaded", a), r.initEl = s, r.initAll = a;
  var o = r;
  return o
});


/*
 * jQuery mmenu v5.7.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function (e) {
  function n() {
    e[t].glbl || (r = {
      $wndw: e(window),
      $docu: e(document),
      $html: e("html"),
      $body: e("body")
    }, i = {}, a = {}, o = {}, e.each([i, a, o], function (e, n) {
      n.add = function (e) {
        e = e.split(" ");
        for (var t = 0, s = e.length; s > t; t++) n[e[t]] = n.mm(e[t])
      }
    }), i.mm = function (e) {
      return "mm-" + e
    }, i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), i.umm = function (e) {
      return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
    }, a.mm = function (e) {
      return "mm-" + e
    }, a.add("parent child"), o.mm = function (e) {
      return e + ".mm"
    }, o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[t]._c = i, e[t]._d = a, e[t]._e = o, e[t].glbl = r)
  }

  var t = "mmenu", s = "5.7.2";
  if (!(e[t] && e[t].version > s)) {
    e[t] = function (e, n, t) {
      this.$menu = e, this._api = ["bind", "initPanels", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = n, this.conf = t, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
      var s = this.$pnls.children();
      return this._initAddons(), this.initPanels(s), "function" == typeof this.___debug && this.___debug(), this
    }, e[t].version = s, e[t].addons = {}, e[t].uniqueId = 0, e[t].defaults = {
      extensions: [], initMenu: function () {
      }, initPanels: function () {
      }, navbar: {add: !0, title: "Menu", titleLink: "panel"}, onClick: {setSelected: !0}, slidingSubmenus: !0
    }, e[t].configuration = {
      classNames: {
        divider: "Divider",
        inset: "Inset",
        panel: "Panel",
        selected: "Selected",
        spacer: "Spacer",
        vertical: "Vertical"
      }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400
    }, e[t].prototype = {
      init: function (e) {
        this.initPanels(e)
      }, initPanels: function (e) {
        e = e.not("." + i.nopanel), e = this._initPanels(e), this.opts.initPanels.call(this, e), this.trigger("initPanels", e), this.trigger("update")
      }, update: function () {
        this.trigger("update")
      }, setSelected: function (e) {
        this.$menu.find("." + i.listview).children().removeClass(i.selected), e.addClass(i.selected), this.trigger("setSelected", e)
      }, openPanel: function (n) {
        var s = n.parent(), a = this;
        if (s.hasClass(i.vertical)) {
          var o = s.parents("." + i.subopened);
          if (o.length) return void this.openPanel(o.first());
          s.addClass(i.opened), this.trigger("openPanel", n), this.trigger("openingPanel", n), this.trigger("openedPanel", n)
        } else {
          if (n.hasClass(i.current)) return;
          var r = this.$pnls.children("." + i.panel), l = r.filter("." + i.current);
          r.removeClass(i.highest).removeClass(i.current).not(n).not(l).not("." + i.vertical).addClass(i.hidden), e[t].support.csstransitions || l.addClass(i.hidden), n.hasClass(i.opened) ? n.nextAll("." + i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened) : (n.addClass(i.highest), l.addClass(i.subopened)), n.removeClass(i.hidden).addClass(i.current), a.trigger("openPanel", n), setTimeout(function () {
            n.removeClass(i.subopened).addClass(i.opened), a.trigger("openingPanel", n), a.__transitionend(n, function () {
              a.trigger("openedPanel", n)
            }, a.conf.transitionDuration)
          }, this.conf.openingInterval)
        }
      }, closePanel: function (e) {
        var n = e.parent();
        n.hasClass(i.vertical) && (n.removeClass(i.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
      }, closeAllPanels: function () {
        this.$menu.find("." + i.listview).children().removeClass(i.selected).filter("." + i.vertical).removeClass(i.opened);
        var e = this.$pnls.children("." + i.panel), n = e.first();
        this.$pnls.children("." + i.panel).not(n).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden), this.openPanel(n)
      }, togglePanel: function (e) {
        var n = e.parent();
        n.hasClass(i.vertical) && this[n.hasClass(i.opened) ? "closePanel" : "openPanel"](e)
      }, getInstance: function () {
        return this
      }, bind: function (e, n) {
        e = "init" == e ? "initPanels" : e, this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(n)
      }, trigger: function () {
        var e = this, n = Array.prototype.slice.call(arguments), t = n.shift();
        if (t = "init" == t ? "initPanels" : t, this.cbck[t]) for (var s = 0, i = this.cbck[t].length; i > s; s++) this.cbck[t][s].apply(e, n)
      }, _initMenu: function () {
        this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
          e(this).attr("id", i.mm(e(this).attr("id")))
        })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + i.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(i.wrapper);
        var n = [i.menu];
        this.opts.slidingSubmenus || n.push(i.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && n.push(this.opts.extensions), this.$menu.addClass(n.join(" "))
      }, _initPanels: function (n) {
        var t = this, s = this.__findAddBack(n, "ul, ol");
        this.__refactorClass(s, this.conf.classNames.inset, "inset").addClass(i.nolistview + " " + i.nopanel), s.not("." + i.nolistview).addClass(i.listview);
        var o = this.__findAddBack(n, "." + i.listview).children();
        this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(n, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
        var r = e(),
          l = n.add(n.find("." + i.panel)).add(this.__findAddBack(n, "." + i.listview).children().children(this.conf.panelNodetype)).not("." + i.nopanel);
        this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(i.vertical), l.each(function () {
          var n = e(this), s = n;
          n.is("ul, ol") ? (n.wrap('<div class="' + i.panel + '" />'), s = n.parent()) : s.addClass(i.panel);
          var a = n.attr("id");
          n.removeAttr("id"), s.attr("id", a || t.__getUniqueId()), n.hasClass(i.vertical) && (n.removeClass(t.conf.classNames.vertical), s.add(s.parent()).addClass(i.vertical)), r = r.add(s)
        });
        var d = e("." + i.panel, this.$menu);
        r.each(function (n) {
          var s, o, r = e(this), l = r.parent(), d = l.children("a, span").first();
          if (l.is("." + i.panels) || (l.data(a.child, r), r.data(a.parent, l)), l.children("." + i.next).length || l.parent().is("." + i.listview) && (s = r.attr("id"), o = e('<a class="' + i.next + '" href="#' + s + '" data-target="#' + s + '" />').insertBefore(d), d.is("span") && o.addClass(i.fullsubopen)), !r.children("." + i.navbar).length && !l.hasClass(i.vertical)) {
            l.parent().is("." + i.listview) ? l = l.closest("." + i.panel) : (d = l.closest("." + i.panel).find('a[href="#' + r.attr("id") + '"]').first(), l = d.closest("." + i.panel));
            var c = !1, h = e('<div class="' + i.navbar + '" />');
            if (t.opts.navbar.add && r.addClass(i.hasnavbar), l.length) {
              switch (s = l.attr("id"), t.opts.navbar.titleLink) {
                case"anchor":
                  c = d.attr("href");
                  break;
                case"panel":
                case"parent":
                  c = "#" + s;
                  break;
                default:
                  c = !1
              }
              h.append('<a class="' + i.btn + " " + i.prev + '" href="#' + s + '" data-target="#' + s + '" />').append(e('<a class="' + i.title + '"' + (c ? ' href="' + c + '"' : "") + " />").text(d.text())).prependTo(r)
            } else t.opts.navbar.title && h.append('<a class="' + i.title + '">' + t.opts.navbar.title + "</a>").prependTo(r)
          }
        });
        var c = this.__findAddBack(n, "." + i.listview).children("." + i.selected).removeClass(i.selected).last().addClass(i.selected);
        c.add(c.parentsUntil("." + i.menu, "li")).filter("." + i.vertical).addClass(i.opened).end().each(function () {
          e(this).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened)
        }), c.children("." + i.panel).not("." + i.vertical).addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened);
        var h = d.filter("." + i.opened);
        return h.length || (h = r.first()), h.addClass(i.opened).last().addClass(i.current), r.not("." + i.vertical).not(h.last()).addClass(i.hidden).end().filter(function () {
          return !e(this).parent().hasClass(i.panels)
        }).appendTo(this.$pnls), r
      }, _initAnchors: function () {
        var n = this;
        r.$body.on(o.click + "-oncanvas", "a[href]", function (s) {
          var a = e(this), o = !1, r = n.$menu.find(a).length;
          for (var l in e[t].addons) if (e[t].addons[l].clickAnchor.call(n, a, r)) {
            o = !0;
            break
          }
          var d = a.attr("href");
          if (!o && r && d.length > 1 && "#" == d.slice(0, 1)) try {
            var c = e(d, n.$menu);
            c.is("." + i.panel) && (o = !0, n[a.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](c))
          } catch (h) {
          }
          if (o && s.preventDefault(), !o && r && a.is("." + i.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
            n.__valueOrFn(n.opts.onClick.setSelected, a) && n.setSelected(e(s.target).parent());
            var u = n.__valueOrFn(n.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
            u && s.preventDefault(), n.__valueOrFn(n.opts.onClick.close, a, u) && n.close()
          }
        })
      }, _initAddons: function () {
        var n;
        for (n in e[t].addons) e[t].addons[n].add.call(this), e[t].addons[n].add = function () {
        };
        for (n in e[t].addons) e[t].addons[n].setup.call(this)
      }, _getOriginalMenuId: function () {
        var e = this.$menu.attr("id");
        return e && e.length && this.conf.clone && (e = i.umm(e)), e
      }, __api: function () {
        var n = this, t = {};
        return e.each(this._api, function (e) {
          var s = this;
          t[s] = function () {
            var e = n[s].apply(n, arguments);
            return "undefined" == typeof e ? t : e
          }
        }), t
      }, __valueOrFn: function (e, n, t) {
        return "function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof t ? t : e
      }, __refactorClass: function (e, n, t) {
        return e.filter("." + n).removeClass(n).addClass(i[t])
      }, __findAddBack: function (e, n) {
        return e.find(n).add(e.filter(n))
      }, __filterListItems: function (e) {
        return e.not("." + i.divider).not("." + i.hidden)
      }, __transitionend: function (n, t, s) {
        var i = !1, a = function (s) {
          if ("undefined" != typeof s) {
            if (!e(s.target).is(n)) return !1;
            n.unbind(o.transitionend), n.unbind(o.webkitTransitionEnd)
          }
          i || t.call(n[0]), i = !0
        };
        n.on(o.transitionend, a), n.on(o.webkitTransitionEnd, a), setTimeout(a, 1.1 * s)
      }, __getUniqueId: function () {
        return i.mm(e[t].uniqueId++)
      }
    }, e.fn[t] = function (s, i) {
      return n(), s = e.extend(!0, {}, e[t].defaults, s), i = e.extend(!0, {}, e[t].configuration, i), this.each(function () {
        var n = e(this);
        if (!n.data(t)) {
          var a = new e[t](n, s, i);
          a.$menu.data(t, a.__api())
        }
      })
    }, e[t].support = {
      touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
      csstransitions: function () {
        if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
        var e = document.body || document.documentElement, n = e.style, t = "transition";
        if ("string" == typeof n[t]) return !0;
        var s = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
        t = t.charAt(0).toUpperCase() + t.substr(1);
        for (var i = 0; i < s.length; i++) if ("string" == typeof n[s[i] + t]) return !0;
        return !1
      }(),
      csstransforms: function () {
        return "undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransforms ? Modernizr.csstransforms : !0
      }(),
      csstransforms3d: function () {
        return "undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransforms3d ? Modernizr.csstransforms3d : !0
      }()
    };
    var i, a, o, r
  }
}(jQuery),/*
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "offCanvas";
    e[n].addons[t] = {
      setup: function () {
        if (this.opts[t]) {
          var i = this.opts[t], a = this.conf[t];
          o = e[n].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == i.position || "bottom" == i.position) && (i.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), o.$allMenus = (o.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
          var r = [s.offcanvas];
          "left" != i.position && r.push(s.mm(i.position)), "back" != i.zposition && r.push(s.mm(i.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper), e[n].support.csstransforms || this.$menu.addClass(s["no-csstransforms"]), e[n].support.csstransforms3d || this.$menu.addClass(s["no-csstransforms3d"]), this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + t](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector);
          var l = window.location.hash;
          if (l) {
            var d = this._getOriginalMenuId();
            d && d == l.slice(1) && this.open()
          }
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), i.add("style"), a.add("resize")
      }, clickAnchor: function (e, n) {
        if (!this.opts[t]) return !1;
        var s = this._getOriginalMenuId();
        if (s && e.is('[href="#' + s + '"]')) return this.open(), !0;
        if (o.$page) return s = o.$page.first().attr("id"), s && e.is('[href="#' + s + '"]') ? (this.close(), !0) : !1
      }
    }, e[n].defaults[t] = {
      position: "left",
      zposition: "back",
      blockUI: !0,
      moveBackground: !0
    }, e[n].configuration[t] = {
      pageNodetype: "div",
      pageSelector: null,
      noPageSelector: [],
      wrapPageIfNeeded: !0,
      menuWrapperSelector: "body",
      menuInjectMethod: "prepend"
    }, e[n].prototype.open = function () {
      if (!this.vars.opened) {
        var e = this;
        this._openSetup(), setTimeout(function () {
          e._openFinish()
        }, this.conf.openingInterval), this.trigger("open")
      }
    }, e[n].prototype._openSetup = function () {
      var n = this, r = this.opts[t];
      this.closeAllOthers(), o.$page.each(function () {
        e(this).data(i.style, e(this).attr("style") || "")
      }), o.$wndw.trigger(a.resize + "-" + t, [!0]);
      var l = [s.opened];
      r.blockUI && l.push(s.blocking), "modal" == r.blockUI && l.push(s.modal), r.moveBackground && l.push(s.background), "left" != r.position && l.push(s.mm(this.opts[t].position)), "back" != r.zposition && l.push(s.mm(this.opts[t].zposition)), this.opts.extensions && l.push(this.opts.extensions), o.$html.addClass(l.join(" ")), setTimeout(function () {
        n.vars.opened = !0
      }, this.conf.openingInterval), this.$menu.addClass(s.current + " " + s.opened)
    }, e[n].prototype._openFinish = function () {
      var e = this;
      this.__transitionend(o.$page.first(), function () {
        e.trigger("opened")
      }, this.conf.transitionDuration), o.$html.addClass(s.opening), this.trigger("opening")
    }, e[n].prototype.close = function () {
      if (this.vars.opened) {
        var n = this;
        this.__transitionend(o.$page.first(), function () {
          n.$menu.removeClass(s.current).removeClass(s.opened), o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(n.opts[t].position)).removeClass(s.mm(n.opts[t].zposition)), n.opts.extensions && o.$html.removeClass(n.opts.extensions), o.$page.each(function () {
            e(this).attr("style", e(this).data(i.style))
          }), n.vars.opened = !1, n.trigger("closed")
        }, this.conf.transitionDuration), o.$html.removeClass(s.opening), this.trigger("close"), this.trigger("closing")
      }
    }, e[n].prototype.closeAllOthers = function () {
      o.$allMenus.not(this.$menu).each(function () {
        var t = e(this).data(n);
        t && t.close && t.close()
      })
    }, e[n].prototype.setPage = function (n) {
      var i = this, a = this.conf[t];
      n && n.length || (n = o.$body.find(a.pageSelector), a.noPageSelector.length && (n = n.not(a.noPageSelector.join(", "))), n.length > 1 && a.wrapPageIfNeeded && (n = n.wrapAll("<" + this.conf[t].pageNodetype + " />").parent())), n.each(function () {
        e(this).attr("id", e(this).attr("id") || i.__getUniqueId())
      }), n.addClass(s.page + " " + s.slideout), o.$page = n, this.trigger("setPage", n)
    }, e[n].prototype["_initWindow_" + t] = function () {
      o.$wndw.off(a.keydown + "-" + t).on(a.keydown + "-" + t, function (e) {
        return o.$html.hasClass(s.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
      });
      var e = 0;
      o.$wndw.off(a.resize + "-" + t).on(a.resize + "-" + t, function (n, t) {
        if (1 == o.$page.length && (t || o.$html.hasClass(s.opened))) {
          var i = o.$wndw.height();
          (t || i != e) && (e = i, o.$page.css("minHeight", i))
        }
      })
    }, e[n].prototype._initBlocker = function () {
      var n = this;
      this.opts[t].blockUI && (o.$blck || (o.$blck = e('<div id="' + s.blocker + '" class="' + s.slideout + '" />')), o.$blck.appendTo(o.$body).off(a.touchstart + "-" + t + " " + a.touchmove + "-" + t).on(a.touchstart + "-" + t + " " + a.touchmove + "-" + t, function (e) {
        e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + t)
      }).off(a.mousedown + "-" + t).on(a.mousedown + "-" + t, function (e) {
        e.preventDefault(), o.$html.hasClass(s.modal) || (n.closeAllOthers(), n.close())
      }))
    };
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu scrollBugFix addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "scrollBugFix";
    e[n].addons[t] = {
      setup: function () {
        var i = this, r = this.opts[t];
        this.conf[t];
        if (o = e[n].glbl, e[n].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof r && (r = {fix: r}), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), r.fix)) {
          var l = this.$menu.attr("id"), d = !1;
          this.bind("opening", function () {
            this.$pnls.children("." + s.current).scrollTop(0)
          }), o.$docu.on(a.touchmove, function (e) {
            i.vars.opened && e.preventDefault()
          }), o.$body.on(a.touchstart, "#" + l + "> ." + s.panels + "> ." + s.current, function (e) {
            i.vars.opened && (d || (d = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), d = !1))
          }).on(a.touchmove, "#" + l + "> ." + s.panels + "> ." + s.current, function (n) {
            i.vars.opened && e(this)[0].scrollHeight > e(this).innerHeight() && n.stopPropagation()
          }), o.$wndw.on(a.orientationchange, function () {
            i.$pnls.children("." + s.current).scrollTop(0).css({"-webkit-overflow-scrolling": "auto"}).css({"-webkit-overflow-scrolling": "touch"})
          })
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {fix: !0};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu autoHeight addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "autoHeight";
    e[n].addons[t] = {
      setup: function () {
        if (this.opts.offCanvas) {
          var i = this.opts[t];
          this.conf[t];
          if (o = e[n].glbl, "boolean" == typeof i && i && (i = {height: "auto"}), "string" == typeof i && (i = {height: i}), "object" != typeof i && (i = {}), i = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], i), "auto" == i.height || "highest" == i.height) {
            this.$menu.addClass(s.autoheight);
            var a = function (n) {
              if (this.vars.opened) {
                var t = parseInt(this.$pnls.css("top"), 10) || 0, a = parseInt(this.$pnls.css("bottom"), 10) || 0,
                  o = 0;
                this.$menu.addClass(s.measureheight), "auto" == i.height ? (n = n || this.$pnls.children("." + s.current), n.is("." + s.vertical) && (n = n.parents("." + s.panel).not("." + s.vertical).first()), o = n.outerHeight()) : "highest" == i.height && this.$pnls.children().each(function () {
                  var n = e(this);
                  n.is("." + s.vertical) && (n = n.parents("." + s.panel).not("." + s.vertical).first()), o = Math.max(o, n.outerHeight())
                }), this.$menu.height(o + t + a).removeClass(s.measureheight)
              }
            };
            this.bind("opening", a), "highest" == i.height && this.bind("initPanels", a), "auto" == i.height && (this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a))
          }
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("autoheight measureheight"), a.add("resize")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {height: "default"};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu backButton addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "backButton";
    e[n].addons[t] = {
      setup: function () {
        if (this.opts.offCanvas) {
          var i = this, a = this.opts[t];
          this.conf[t];
          if (o = e[n].glbl, "boolean" == typeof a && (a = {close: a}), "object" != typeof a && (a = {}), a = e.extend(!0, {}, e[n].defaults[t], a), a.close) {
            var r = "#" + i.$menu.attr("id");
            this.bind("opened", function (e) {
              location.hash != r && history.pushState(null, document.title, r)
            }), e(window).on("popstate", function (e) {
              o.$html.hasClass(s.opened) ? (e.stopPropagation(), i.close()) : location.hash == r && (e.stopPropagation(), i.open())
            })
          }
        }
      }, add: function () {
        return window.history && window.history.pushState ? (s = e[n]._c, i = e[n]._d, void (a = e[n]._e)) : void (e[n].addons[t].setup = function () {
        })
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {close: !1};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu columns addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "columns";
    e[n].addons[t] = {
      setup: function () {
        var i = this.opts[t];
        this.conf[t];
        if (o = e[n].glbl, "boolean" == typeof i && (i = {add: i}), "number" == typeof i && (i = {
          add: !0,
          visible: i
        }), "object" != typeof i && (i = {}), "number" == typeof i.visible && (i.visible = {
          min: i.visible,
          max: i.visible
        }), i = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], i), i.add) {
          i.visible.min = Math.max(1, Math.min(6, i.visible.min)), i.visible.max = Math.max(i.visible.min, Math.min(6, i.visible.max)), this.$menu.addClass(s.columns);
          for (var a = this.opts.offCanvas ? this.$menu.add(o.$html) : this.$menu, r = [], l = 0; l <= i.visible.max; l++) r.push(s.columns + "-" + l);
          r = r.join(" ");
          var d = function (e) {
            u.call(this, this.$pnls.children("." + s.current))
          }, c = function () {
            var e = this.$pnls.children("." + s.panel).filter("." + s.opened).length;
            e = Math.min(i.visible.max, Math.max(i.visible.min, e)), a.removeClass(r).addClass(s.columns + "-" + e)
          }, h = function () {
            this.opts.offCanvas && o.$html.removeClass(r)
          }, u = function (n) {
            this.$pnls.children("." + s.panel).removeClass(r).filter("." + s.subopened).removeClass(s.hidden).add(n).slice(-i.visible.max).each(function (n) {
              e(this).addClass(s.columns + "-" + n)
            })
          };
          this.bind("open", c), this.bind("close", h), this.bind("initPanels", d), this.bind("openPanel", u), this.bind("openingPanel", c), this.bind("openedPanel", c), this.opts.offCanvas || c.call(this)
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("columns")
      }, clickAnchor: function (n, i) {
        if (!this.opts[t].add) return !1;
        if (i) {
          var a = n.attr("href");
          if (a.length > 1 && "#" == a.slice(0, 1)) try {
            var o = e(a, this.$menu);
            if (o.is("." + s.panel)) for (var r = parseInt(n.closest("." + s.panel).attr("class").split(s.columns + "-")[1].split(" ")[0], 10) + 1; r !== !1;) {
              var l = this.$pnls.children("." + s.columns + "-" + r);
              if (!l.length) {
                r = !1;
                break
              }
              r++, l.removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden)
            }
          } catch (d) {
          }
        }
      }
    }, e[n].defaults[t] = {add: !1, visible: {min: 1, max: 3}};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "counters";
    e[n].addons[t] = {
      setup: function () {
        var a = this, r = this.opts[t];
        this.conf[t];
        o = e[n].glbl, "boolean" == typeof r && (r = {
          add: r,
          update: r
        }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), this.bind("initPanels", function (n) {
          this.__refactorClass(e("em", n), this.conf.classNames[t].counter, "counter")
        }), r.add && this.bind("initPanels", function (n) {
          var t;
          switch (r.addTo) {
            case"panels":
              t = n;
              break;
            default:
              t = n.filter(r.addTo)
          }
          t.each(function () {
            var n = e(this).data(i.parent);
            n && (n.children("em." + s.counter).length || n.prepend(e('<em class="' + s.counter + '" />')))
          })
        }), r.update && this.bind("update", function () {
          this.$pnls.find("." + s.panel).each(function () {
            var n = e(this), t = n.data(i.parent);
            if (t) {
              var o = t.children("em." + s.counter);
              o.length && (n = n.children("." + s.listview), n.length && o.html(a.__filterListItems(n.children()).length))
            }
          })
        })
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("counter search noresultsmsg")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {
      add: !1,
      addTo: "panels",
      update: !1
    }, e[n].configuration.classNames[t] = {counter: "Counter"};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu dividers addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "dividers";
    e[n].addons[t] = {
      setup: function () {
        var i = this, r = this.opts[t];
        this.conf[t];
        if (o = e[n].glbl, "boolean" == typeof r && (r = {
          add: r,
          fixed: r
        }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), this.bind("initPanels", function (n) {
          this.__refactorClass(e("li", this.$menu), this.conf.classNames[t].collapsed, "collapsed")
        }), r.add && this.bind("initPanels", function (n) {
          var t;
          switch (r.addTo) {
            case"panels":
              t = n;
              break;
            default:
              t = n.filter(r.addTo)
          }
          e("." + s.divider, t).remove(), t.find("." + s.listview).not("." + s.vertical).each(function () {
            var n = "";
            i.__filterListItems(e(this).children()).each(function () {
              var t = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
              t != n && t.length && (n = t, e('<li class="' + s.divider + '">' + t + "</li>").insertBefore(this))
            })
          })
        }), r.collapse && this.bind("initPanels", function (n) {
          e("." + s.divider, n).each(function () {
            var n = e(this), t = n.nextUntil("." + s.divider, "." + s.collapsed);
            t.length && (n.children("." + s.subopen).length || (n.wrapInner("<span />"), n.prepend('<a href="#" class="' + s.subopen + " " + s.fullsubopen + '" />')))
          })
        }), r.fixed) {
          var l = function (n) {
            n = n || this.$pnls.children("." + s.current);
            var t = n.find("." + s.divider).not("." + s.hidden);
            if (t.length) {
              this.$menu.addClass(s.hasdividers);
              var i = n.scrollTop() || 0, a = "";
              n.is(":visible") && n.find("." + s.divider).not("." + s.hidden).each(function () {
                e(this).position().top + i < i + 1 && (a = e(this).text())
              }), this.$fixeddivider.text(a)
            } else this.$menu.removeClass(s.hasdividers)
          };
          this.$fixeddivider = e('<ul class="' + s.listview + " " + s.fixeddivider + '"><li class="' + s.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("initPanels", function (n) {
            n.off(a.scroll + "-dividers " + a.touchmove + "-dividers").on(a.scroll + "-dividers " + a.touchmove + "-dividers", function (n) {
              l.call(i, e(this))
            })
          })
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("collapsed uncollapsed fixeddivider hasdividers"), a.add("scroll")
      }, clickAnchor: function (e, n) {
        if (this.opts[t].collapse && n) {
          var i = e.parent();
          if (i.is("." + s.divider)) {
            var a = i.nextUntil("." + s.divider, "." + s.collapsed);
            return i.toggleClass(s.opened), a[i.hasClass(s.opened) ? "addClass" : "removeClass"](s.uncollapsed), !0
          }
        }
        return !1
      }
    }, e[n].defaults[t] = {
      add: !1,
      addTo: "panels",
      fixed: !1,
      collapse: !1
    }, e[n].configuration.classNames[t] = {collapsed: "Collapsed"};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu drag addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    function n(e, n, t) {
      return n > e && (e = n), e > t && (e = t), e
    }

    function t(t, s, i) {
      var r, l, d, c, h, u = this, p = {}, f = 0, v = !1, m = !1, g = 0, b = 0;
      switch (this.opts.offCanvas.position) {
        case"left":
        case"right":
          p.events = "panleft panright", p.typeLower = "x", p.typeUpper = "X", m = "width";
          break;
        case"top":
        case"bottom":
          p.events = "panup pandown", p.typeLower = "y", p.typeUpper = "Y", m = "height"
      }
      switch (this.opts.offCanvas.position) {
        case"right":
        case"bottom":
          p.negative = !0, c = function (e) {
            e >= i.$wndw[m]() - t.maxStartPos && (f = 1)
          };
          break;
        default:
          p.negative = !1, c = function (e) {
            e <= t.maxStartPos && (f = 1)
          }
      }
      switch (this.opts.offCanvas.position) {
        case"left":
          p.open_dir = "right", p.close_dir = "left";
          break;
        case"right":
          p.open_dir = "left", p.close_dir = "right";
          break;
        case"top":
          p.open_dir = "down", p.close_dir = "up";
          break;
        case"bottom":
          p.open_dir = "up", p.close_dir = "down"
      }
      switch (this.opts.offCanvas.zposition) {
        case"front":
          h = function () {
            return this.$menu
          };
          break;
        default:
          h = function () {
            return e("." + o.slideout)
          }
      }
      var _ = this.__valueOrFn(t.node, this.$menu, i.$page);
      "string" == typeof _ && (_ = e(_));
      var C = new Hammer(_[0], this.opts[a].vendors.hammer);
      C.on("panstart", function (e) {
        c(e.center[p.typeLower]), i.$slideOutNodes = h(), v = p.open_dir
      }).on(p.events + " panend", function (e) {
        f > 0 && e.preventDefault()
      }).on(p.events, function (e) {
        if (r = e["delta" + p.typeUpper], p.negative && (r = -r), r != g && (v = r >= g ? p.open_dir : p.close_dir), g = r, g > t.threshold && 1 == f) {
          if (i.$html.hasClass(o.opened)) return;
          f = 2, u._openSetup(), u.trigger("opening"), i.$html.addClass(o.dragging), b = n(i.$wndw[m]() * s[m].perc, s[m].min, s[m].max)
        }
        2 == f && (l = n(g, 10, b) - ("front" == u.opts.offCanvas.zposition ? b : 0), p.negative && (l = -l), d = "translate" + p.typeUpper + "(" + l + "px )", i.$slideOutNodes.css({
          "-webkit-transform": "-webkit-" + d,
          transform: d
        }))
      }).on("panend", function (e) {
        2 == f && (i.$html.removeClass(o.dragging), i.$slideOutNodes.css("transform", ""), u[v == p.open_dir ? "_openFinish" : "close"]()), f = 0
      })
    }

    function s(n, t, s, i) {
      var l = this;
      n.each(function () {
        var n = e(this), t = n.data(r.parent);
        if (t && (t = t.closest("." + o.panel), t.length)) {
          var s = new Hammer(n[0], l.opts[a].vendors.hammer);
          s.on("panright", function (e) {
            l.openPanel(t)
          })
        }
      })
    }

    var i = "mmenu", a = "drag";
    e[i].addons[a] = {
      setup: function () {
        if (this.opts.offCanvas) {
          var n = this.opts[a], o = this.conf[a];
          d = e[i].glbl, "boolean" == typeof n && (n = {
            menu: n,
            panels: n
          }), "object" != typeof n && (n = {}), "boolean" == typeof n.menu && (n.menu = {open: n.menu}), "object" != typeof n.menu && (n.menu = {}), "boolean" == typeof n.panels && (n.panels = {close: n.panels}), "object" != typeof n.panels && (n.panels = {}), n = this.opts[a] = e.extend(!0, {}, e[i].defaults[a], n), n.menu.open && t.call(this, n.menu, o.menu, d), n.panels.close && this.bind("initPanels", function (e) {
            s.call(this, e, n.panels, o.panels, d)
          })
        }
      }, add: function () {
        return "function" != typeof Hammer || Hammer.VERSION < 2 ? void (e[i].addons[a].setup = function () {
        }) : (o = e[i]._c, r = e[i]._d, l = e[i]._e, void o.add("dragging"))
      }, clickAnchor: function (e, n) {
      }
    }, e[i].defaults[a] = {
      menu: {open: !1, maxStartPos: 100, threshold: 50},
      panels: {close: !1},
      vendors: {hammer: {}}
    }, e[i].configuration[a] = {
      menu: {width: {perc: .8, min: 140, max: 440}, height: {perc: .8, min: 140, max: 880}},
      panels: {}
    };
    var o, r, l, d
  }(jQuery),/*
 * jQuery mmenu dropdown addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "dropdown";
    e[n].addons[t] = {
      setup: function () {
        if (this.opts.offCanvas) {
          var r = this, l = this.opts[t], d = this.conf[t];
          if (o = e[n].glbl, "boolean" == typeof l && l && (l = {drop: l}), "object" != typeof l && (l = {}), "string" == typeof l.position && (l.position = {of: l.position}), l = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], l), l.drop) {
            if ("string" != typeof l.position.of) {
              var c = this.$menu.attr("id");
              c && c.length && (this.conf.clone && (c = s.umm(c)), l.position.of = '[href="#' + c + '"]')
            }
            if ("string" == typeof l.position.of) {
              var h = e(l.position.of);
              if (h.length) {
                this.$menu.addClass(s.dropdown), l.tip && this.$menu.addClass(s.tip), l.event = l.event.split(" "), 1 == l.event.length && (l.event[1] = l.event[0]), "hover" == l.event[0] && h.on(a.mouseenter + "-dropdown", function () {
                  r.open()
                }), "hover" == l.event[1] && this.$menu.on(a.mouseleave + "-dropdown", function () {
                  r.close()
                }), this.bind("opening", function () {
                  this.$menu.data(i.style, this.$menu.attr("style") || ""), o.$html.addClass(s.dropdown)
                }), this.bind("closed", function () {
                  this.$menu.attr("style", this.$menu.data(i.style)), o.$html.removeClass(s.dropdown)
                });
                var u = function (i, a) {
                  var r = a[0], c = a[1], u = "x" == i ? "scrollLeft" : "scrollTop",
                    p = "x" == i ? "outerWidth" : "outerHeight", f = "x" == i ? "left" : "top",
                    v = "x" == i ? "right" : "bottom", m = "x" == i ? "width" : "height",
                    g = "x" == i ? "maxWidth" : "maxHeight", b = null, _ = o.$wndw[u](), C = h.offset()[f] -= _,
                    $ = C + h[p](), y = o.$wndw[m](), x = d.offset.button[i] + d.offset.viewport[i];
                  if (l.position[i]) switch (l.position[i]) {
                    case"left":
                    case"bottom":
                      b = "after";
                      break;
                    case"right":
                    case"top":
                      b = "before"
                  }
                  null === b && (b = y / 2 > C + ($ - C) / 2 ? "after" : "before");
                  var w, k;
                  return "after" == b ? (w = "x" == i ? C : $, k = y - (w + x), r[f] = w + d.offset.button[i], r[v] = "auto", c.push(s["x" == i ? "tipleft" : "tiptop"])) : (w = "x" == i ? $ : C, k = w - x, r[v] = "calc( 100% - " + (w - d.offset.button[i]) + "px )", r[f] = "auto", c.push(s["x" == i ? "tipright" : "tipbottom"])), r[g] = Math.min(e[n].configuration[t][m].max, k), [r, c]
                }, p = function (e) {
                  if (this.vars.opened) {
                    this.$menu.attr("style", this.$menu.data(i.style));
                    var n = [{}, []];
                    n = u.call(this, "y", n), n = u.call(this, "x", n), this.$menu.css(n[0]), l.tip && this.$menu.removeClass(s.tipleft + " " + s.tipright + " " + s.tiptop + " " + s.tipbottom).addClass(n[1].join(" "))
                  }
                };
                this.bind("opening", p), o.$wndw.on(a.resize + "-dropdown", function (e) {
                  p.call(r)
                }), this.opts.offCanvas.blockUI || o.$wndw.on(a.scroll + "-dropdown", function (e) {
                  p.call(r)
                })
              }
            }
          }
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("dropdown tip tipleft tipright tiptop tipbottom"), a.add("mouseenter mouseleave resize scroll")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {
      drop: !1,
      event: "click",
      position: {},
      tip: !0
    }, e[n].configuration[t] = {
      offset: {button: {x: -10, y: 10}, viewport: {x: 20, y: 20}},
      height: {max: 880},
      width: {max: 440}
    };
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "fixedElements";
    e[n].addons[t] = {
      setup: function () {
        if (this.opts.offCanvas) {
          var s = this.opts[t];
          this.conf[t];
          o = e[n].glbl, s = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], s);
          var i = function (e) {
            var n = this.conf.classNames[t].fixed;
            this.__refactorClass(e.find("." + n), n, "slideout").appendTo(o.$body)
          };
          i.call(this, o.$page), this.bind("setPage", i)
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("fixed")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].configuration.classNames[t] = {fixed: "Fixed"};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu iconPanels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "iconPanels";
    e[n].addons[t] = {
      setup: function () {
        var i = this, a = this.opts[t];
        this.conf[t];
        if (o = e[n].glbl, "boolean" == typeof a && (a = {add: a}), "number" == typeof a && (a = {
          add: !0,
          visible: a
        }), "object" != typeof a && (a = {}), a = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], a), a.visible++, a.add) {
          this.$menu.addClass(s.iconpanel);
          for (var r = [], l = 0; l <= a.visible; l++) r.push(s.iconpanel + "-" + l);
          r = r.join(" ");
          var d = function (n) {
            n.hasClass(s.vertical) || i.$pnls.children("." + s.panel).removeClass(r).filter("." + s.subopened).removeClass(s.hidden).add(n).not("." + s.vertical).slice(-a.visible).each(function (n) {
              e(this).addClass(s.iconpanel + "-" + n)
            })
          };
          this.bind("openPanel", d), this.bind("initPanels", function (n) {
            d.call(i, i.$pnls.children("." + s.current)), n.not("." + s.vertical).each(function () {
              e(this).children("." + s.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + s.panel).attr("id") + '" class="' + s.subblocker + '" />')
            })
          })
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("iconpanel subblocker")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {add: !1, visible: 3};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu navbar addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars";
    e[n].addons[t] = {
      setup: function () {
        var i = this, a = this.opts[t], r = this.conf[t];
        if (o = e[n].glbl, "undefined" != typeof a) {
          a instanceof Array || (a = [a]);
          var l = {};
          e.each(a, function (o) {
            var d = a[o];
            "boolean" == typeof d && d && (d = {}), "object" != typeof d && (d = {}), "undefined" == typeof d.content && (d.content = ["prev", "title"]), d.content instanceof Array || (d.content = [d.content]), d = e.extend(!0, {}, i.opts.navbar, d);
            var c = d.position, h = d.height;
            "number" != typeof h && (h = 1), h = Math.min(4, Math.max(1, h)), "bottom" != c && (c = "top"), l[c] || (l[c] = 0), l[c]++;
            var u = e("<div />").addClass(s.navbar + " " + s.navbar + "-" + c + " " + s.navbar + "-" + c + "-" + l[c] + " " + s.navbar + "-size-" + h);
            l[c] += h - 1;
            for (var p = 0, f = 0, v = d.content.length; v > f; f++) {
              var m = e[n].addons[t][d.content[f]] || !1;
              m ? p += m.call(i, u, d, r) : (m = d.content[f], m instanceof e || (m = e(d.content[f])), u.append(m))
            }
            p += Math.ceil(u.children().not("." + s.btn).length / h), p > 1 && u.addClass(s.navbar + "-content-" + p), u.children("." + s.btn).length && u.addClass(s.hasbtns), u.prependTo(i.$menu)
          });
          for (var d in l) i.$menu.addClass(s.hasnavbar + "-" + d + "-" + l[d])
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("close hasbtns")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].configuration[t] = {breadcrumbSeparator: "/"}, e[n].configuration.classNames[t] = {};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu navbar addon breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars", s = "breadcrumbs";
    e[n].addons[t][s] = function (t, s, i) {
      var a = e[n]._c, o = e[n]._d;
      a.add("breadcrumbs separator");
      var r = e('<span class="' + a.breadcrumbs + '" />').appendTo(t);
      this.bind("initPanels", function (n) {
        n.removeClass(a.hasnavbar).each(function () {
          for (var n = [], t = e(this), s = e('<span class="' + a.breadcrumbs + '"></span>'), r = e(this).children().first(), l = !0; r && r.length;) {
            r.is("." + a.panel) || (r = r.closest("." + a.panel));
            var d = r.children("." + a.navbar).children("." + a.title).text();
            n.unshift(l ? "<span>" + d + "</span>" : '<a href="#' + r.attr("id") + '">' + d + "</a>"), l = !1, r = r.data(o.parent)
          }
          s.append(n.join('<span class="' + a.separator + '">' + i.breadcrumbSeparator + "</span>")).appendTo(t.children("." + a.navbar))
        })
      });
      var l = function () {
        r.html(this.$pnls.children("." + a.current).children("." + a.navbar).children("." + a.breadcrumbs).html())
      };
      return this.bind("openPanel", l), this.bind("initPanels", l), 0
    }
  }(jQuery),/*
 * jQuery mmenu navbar addon close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars", s = "close";
    e[n].addons[t][s] = function (t, s) {
      var i = e[n]._c, a = e[n].glbl, o = e('<a class="' + i.close + " " + i.btn + '" href="#" />').appendTo(t),
        r = function (e) {
          o.attr("href", "#" + e.attr("id"))
        };
      return r.call(this, a.$page), this.bind("setPage", r), -1
    }
  }(jQuery),/*
 * jQuery mmenu navbar addon next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars", s = "next";
    e[n].addons[t][s] = function (s, i) {
      var a, o, r = e[n]._c, l = e('<a class="' + r.next + " " + r.btn + '" href="#" />').appendTo(s),
        d = function (e) {
          e = e || this.$pnls.children("." + r.current);
          var n = e.find("." + this.conf.classNames[t].panelNext);
          a = n.attr("href"), o = n.html(), l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
        };
      return this.bind("openPanel", d), this.bind("initPanels", function () {
        d.call(this)
      }), -1
    }, e[n].configuration.classNames[t].panelNext = "Next"
  }(jQuery),/*
 * jQuery mmenu navbar addon prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars", s = "prev";
    e[n].addons[t][s] = function (s, i) {
      var a = e[n]._c, o = e('<a class="' + a.prev + " " + a.btn + '" href="#" />').appendTo(s);
      this.bind("initPanels", function (e) {
        e.removeClass(a.hasnavbar).children("." + a.navbar).addClass(a.hidden)
      });
      var r, l, d = function (e) {
        if (e = e || this.$pnls.children("." + a.current), !e.hasClass(a.vertical)) {
          var n = e.find("." + this.conf.classNames[t].panelPrev);
          n.length || (n = e.children("." + a.navbar).children("." + a.prev)), r = n.attr("href"), l = n.html(), o[r ? "attr" : "removeAttr"]("href", r), o[r || l ? "removeClass" : "addClass"](a.hidden), o.html(l)
        }
      };
      return this.bind("openPanel", d), this.bind("initPanels", function () {
        d.call(this)
      }), -1
    }, e[n].configuration.classNames[t].panelPrev = "Prev"
  }(jQuery),/*
 * jQuery mmenu navbar addon searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars", s = "searchfield";
    e[n].addons[t][s] = function (t, s) {
      var i = e[n]._c, a = e('<div class="' + i.search + '" />').appendTo(t);
      return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = a, 0
    }
  }(jQuery),/*
 * jQuery mmenu navbar addon title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "navbars", s = "title";
    e[n].addons[t][s] = function (s, i) {
      var a, o, r = e[n]._c, l = e('<a class="' + r.title + '" />').appendTo(s), d = function (e) {
        if (e = e || this.$pnls.children("." + r.current), !e.hasClass(r.vertical)) {
          var n = e.find("." + this.conf.classNames[t].panelTitle);
          n.length || (n = e.children("." + r.navbar).children("." + r.title)), a = n.attr("href"), o = n.html() || i.title, l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
        }
      };
      return this.bind("openPanel", d), this.bind("initPanels", function (e) {
        d.call(this)
      }), 0
    }, e[n].configuration.classNames[t].panelTitle = "Title"
  }(jQuery),/*
 * jQuery mmenu RTL addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "rtl";
    e[n].addons[t] = {
      setup: function () {
        var i = this.opts[t];
        this.conf[t];
        o = e[n].glbl, "object" != typeof i && (i = {use: i}), i = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], i), "boolean" != typeof i.use && (i.use = "rtl" == (o.$html.attr("dir") || "").toLowerCase()), i.use && this.$menu.addClass(s.rtl)
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("rtl")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {use: "detect"};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu screenReader addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    function n(e, n, t) {
      e.prop("aria-" + n, t)[t ? "attr" : "removeAttr"]("aria-" + n, "true")
    }

    function t(e) {
      return '<span class="' + a.sronly + '">' + e + "</span>"
    }

    var s = "mmenu", i = "screenReader";
    e[s].addons[i] = {
      setup: function () {
        var o = this.opts[i], r = this.conf[i];
        if (l = e[s].glbl, "boolean" == typeof o && (o = {
          aria: o,
          text: o
        }), "object" != typeof o && (o = {}), o = this.opts[i] = e.extend(!0, {}, e[s].defaults[i], o), o.aria) {
          if (this.opts.offCanvas) {
            var d = function () {
              n(this.$menu, "hidden", !1)
            }, c = function () {
              n(this.$menu, "hidden", !0)
            };
            this.bind("open", d), this.bind("close", c), c.call(this)
          }
          var h = function () {
            n(this.$menu.find("." + a.hidden), "hidden", !0), n(this.$menu.find('[aria-hidden="true"]').not("." + a.hidden), "hidden", !1)
          }, u = function (e) {
            n(this.$pnls.children("." + a.panel).not(e).not("." + a.hidden), "hidden", !0), n(e, "hidden", !1)
          };
          this.bind("update", h), this.bind("openPanel", h), this.bind("openPanel", u);
          var p = function (e) {
            n(e.find("." + a.prev + ", ." + a.next), "haspopup", !0)
          };
          this.bind("initPanels", p), p.call(this, this.$menu.children("." + a.navbar))
        }
        if (o.text) {
          var f = function (n) {
            n.children("." + a.navbar).children("." + a.prev).html(t(r.text.closeSubmenu)).end().children("." + a.next).html(t(r.text.openSubmenu)).end().children("." + a.close).html(t(r.text.closeMenu)), n.is("." + a.panel) && n.find("." + a.listview).find("." + a.next).each(function () {
              e(this).html(t(r.text[e(this).parent().is("." + a.vertical) ? "toggleSubmenu" : "openSubmenu"]))
            })
          };
          this.bind("initPanels", f), f.call(this, this.$menu)
        }
      }, add: function () {
        a = e[s]._c, o = e[s]._d, r = e[s]._e, a.add("sronly")
      }, clickAnchor: function (e, n) {
      }
    }, e[s].defaults[i] = {aria: !1, text: !1}, e[s].configuration[i] = {
      text: {
        closeMenu: "Close menu",
        closeSubmenu: "Close submenu",
        openSubmenu: "Open submenu",
        toggleSubmenu: "Toggle submenu"
      }
    };
    var a, o, r, l
  }(jQuery),/*
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    function n(e) {
      switch (e) {
        case 9:
        case 16:
        case 17:
        case 18:
        case 37:
        case 38:
        case 39:
        case 40:
          return !0
      }
      return !1
    }

    var t = "mmenu", s = "searchfield";
    e[t].addons[s] = {
      setup: function () {
        var l = this, d = this.opts[s], c = this.conf[s];
        r = e[t].glbl, "boolean" == typeof d && (d = {add: d}), "object" != typeof d && (d = {}), "boolean" == typeof d.resultsPanel && (d.resultsPanel = {add: d.resultsPanel}), d = this.opts[s] = e.extend(!0, {}, e[t].defaults[s], d), c = this.conf[s] = e.extend(!0, {}, e[t].configuration[s], c), this.bind("close", function () {
          this.$menu.find("." + i.search).find("input").blur()
        }), this.bind("initPanels", function (t) {
          if (d.add) {
            var r;
            switch (d.addTo) {
              case"panels":
                r = t;
                break;
              default:
                r = this.$menu.find(d.addTo)
            }
            if (r.each(function () {
              var n = e(this);
              if (!n.is("." + i.panel) || !n.is("." + i.vertical)) {
                if (!n.children("." + i.search).length) {
                  var t = l.__valueOrFn(c.clear, n), s = l.__valueOrFn(c.form, n), a = l.__valueOrFn(c.input, n),
                    r = l.__valueOrFn(c.submit, n), h = e("<" + (s ? "form" : "div") + ' class="' + i.search + '" />'),
                    u = e('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />');
                  h.append(u);
                  var p;
                  if (a) for (p in a) u.attr(p, a[p]);
                  if (t && e('<a class="' + i.btn + " " + i.clear + '" href="#" />').appendTo(h).on(o.click + "-searchfield", function (e) {
                    e.preventDefault(), u.val("").trigger(o.keyup + "-searchfield")
                  }), s) {
                    for (p in s) h.attr(p, s[p]);
                    r && !t && e('<a class="' + i.btn + " " + i.next + '" href="#" />').appendTo(h).on(o.click + "-searchfield", function (e) {
                      e.preventDefault(), h.submit()
                    })
                  }
                  n.hasClass(i.search) ? n.replaceWith(h) : n.prepend(h).addClass(i.hassearch)
                }
                if (d.noResults) {
                  var f = n.closest("." + i.panel).length;
                  if (f || (n = l.$pnls.children("." + i.panel).first()), !n.children("." + i.noresultsmsg).length) {
                    var v = n.children("." + i.listview).first();
                    e('<div class="' + i.noresultsmsg + " " + i.hidden + '" />').append(d.noResults)[v.length ? "insertAfter" : "prependTo"](v.length ? v : n)
                  }
                }
              }
            }), d.search) {
              if (d.resultsPanel.add) {
                d.showSubPanels = !1;
                var h = this.$pnls.children("." + i.resultspanel);
                h.length || (h = e('<div class="' + i.panel + " " + i.resultspanel + " " + i.hidden + '" />').appendTo(this.$pnls).append('<div class="' + i.navbar + " " + i.hidden + '"><a class="' + i.title + '">' + d.resultsPanel.title + "</a></div>").append('<ul class="' + i.listview + '" />').append(this.$pnls.find("." + i.noresultsmsg).first().clone()), this.initPanels(h))
              }
              this.$menu.find("." + i.search).each(function () {
                var t, r, c = e(this), u = c.closest("." + i.panel).length;
                u ? (t = c.closest("." + i.panel), r = t) : (t = e("." + i.panel, l.$menu), r = l.$menu), d.resultsPanel.add && (t = t.not(h));
                var p = c.children("input"), f = l.__findAddBack(t, "." + i.listview).children("li"),
                  v = f.filter("." + i.divider), m = l.__filterListItems(f), g = "a", b = g + ", span", _ = "",
                  C = function () {
                    var n = p.val().toLowerCase();
                    if (n != _) {
                      if (_ = n, d.resultsPanel.add && h.children("." + i.listview).empty(), t.scrollTop(0), m.add(v).addClass(i.hidden).find("." + i.fullsubopensearch).removeClass(i.fullsubopen + " " + i.fullsubopensearch), m.each(function () {
                        var n = e(this), t = g;
                        (d.showTextItems || d.showSubPanels && n.find("." + i.next)) && (t = b);
                        var s = n.data(a.searchtext) || n.children(t).text();
                        s.toLowerCase().indexOf(_) > -1 && n.add(n.prevAll("." + i.divider).first()).removeClass(i.hidden)
                      }), d.showSubPanels && t.each(function (n) {
                        var t = e(this);
                        l.__filterListItems(t.find("." + i.listview).children()).each(function () {
                          var n = e(this), t = n.data(a.child);
                          n.removeClass(i.nosubresults), t && t.find("." + i.listview).children().removeClass(i.hidden)
                        })
                      }), d.resultsPanel.add) if ("" === _) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + i.subopened).last()); else {
                        var s = e();
                        t.each(function () {
                          var n = l.__filterListItems(e(this).find("." + i.listview).children()).not("." + i.hidden).clone(!0);
                          n.length && (d.resultsPanel.dividers && (s = s.add('<li class="' + i.divider + '">' + e(this).children("." + i.navbar).text() + "</li>")), s = s.add(n))
                        }), s.find("." + i.next).remove(), h.children("." + i.listview).append(s), this.openPanel(h)
                      } else e(t.get().reverse()).each(function (n) {
                        var t = e(this), s = t.data(a.parent);
                        s && (l.__filterListItems(t.find("." + i.listview).children()).length ? (s.hasClass(i.hidden) && s.children("." + i.next).not("." + i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch), s.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("." + i.divider).first().removeClass(i.hidden)) : u || (t.hasClass(i.opened) && setTimeout(function () {
                          l.openPanel(s.closest("." + i.panel))
                        }, (n + 1) * (1.5 * l.conf.openingInterval)), s.addClass(i.nosubresults)))
                      });
                      r.find("." + i.noresultsmsg)[m.not("." + i.hidden).length ? "addClass" : "removeClass"](i.hidden), this.update()
                    }
                  };
                p.off(o.keyup + "-" + s + " " + o.change + "-" + s).on(o.keyup + "-" + s, function (e) {
                  n(e.keyCode) || C.call(l)
                }).on(o.change + "-" + s, function (e) {
                  C.call(l)
                });
                var $ = c.children("." + i.btn);
                $.length && p.on(o.keyup + "-" + s, function (e) {
                  $[p.val().length ? "removeClass" : "addClass"](i.hidden)
                }), p.trigger(o.keyup + "-" + s)
              })
            }
          }
        })
      }, add: function () {
        i = e[t]._c, a = e[t]._d, o = e[t]._e, i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), a.add("searchtext"), o.add("change keyup")
      }, clickAnchor: function (e, n) {
      }
    }, e[t].defaults[s] = {
      add: !1,
      addTo: "panels",
      placeholder: "Search",
      noResults: "No results found.",
      resultsPanel: {add: !1, dividers: !0, title: "Search results"},
      search: !0,
      showTextItems: !1,
      showSubPanels: !0
    }, e[t].configuration[s] = {clear: !1, form: !1, input: !1, submit: !1};
    var i, a, o, r
  }(jQuery),/*
 * jQuery mmenu sectionIndexer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "sectionIndexer";
    e[n].addons[t] = {
      setup: function () {
        var i = this, r = this.opts[t];
        this.conf[t];
        o = e[n].glbl, "boolean" == typeof r && (r = {add: r}), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), this.bind("initPanels", function (n) {
          if (r.add) {
            var t;
            switch (r.addTo) {
              case"panels":
                t = n;
                break;
              default:
                t = e(r.addTo, this.$menu).filter("." + s.panel)
            }
            t.find("." + s.divider).closest("." + s.panel).addClass(s.hasindexer)
          }
          if (!this.$indexer && this.$pnls.children("." + s.hasindexer).length) {
            this.$indexer = e('<div class="' + s.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(a.mouseover + "-sectionindexer " + s.touchstart + "-sectionindexer", function (n) {
              var t = e(this).attr("href").slice(1), a = i.$pnls.children("." + s.current),
                o = a.find("." + s.listview), r = !1, l = a.scrollTop();
              a.scrollTop(0), o.children("." + s.divider).not("." + s.hidden).each(function () {
                r === !1 && t == e(this).text().slice(0, 1).toLowerCase() && (r = e(this).position().top)
              }), a.scrollTop(r !== !1 ? r : l)
            });
            var o = function (e) {
              i.$menu[(e.hasClass(s.hasindexer) ? "add" : "remove") + "Class"](s.hasindexer)
            };
            this.bind("openPanel", o), o.call(this, this.$pnls.children("." + s.current))
          }
        })
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("indexer hasindexer"), a.add("mouseover touchstart")
      }, clickAnchor: function (e, n) {
        return e.parent().is("." + s.indexer) ? !0 : void 0
      }
    }, e[n].defaults[t] = {add: !1, addTo: "panels"};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu setSelected addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "setSelected";
    e[n].addons[t] = {
      setup: function () {
        var a = this, r = this.opts[t];
        this.conf[t];
        if (o = e[n].glbl, "boolean" == typeof r && (r = {
          hover: r,
          parent: r
        }), "object" != typeof r && (r = {}), r = this.opts[t] = e.extend(!0, {}, e[n].defaults[t], r), "detect" == r.current) {
          var l = function (e) {
            e = e.split("?")[0].split("#")[0];
            var n = a.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
            n.length ? a.setSelected(n.parent(), !0) : (e = e.split("/").slice(0, -1), e.length && l(e.join("/")))
          };
          l(window.location.href)
        } else r.current || this.bind("initPanels", function (e) {
          e.find("." + s.listview).children("." + s.selected).removeClass(s.selected)
        });
        if (r.hover && this.$menu.addClass(s.hoverselected), r.parent) {
          this.$menu.addClass(s.parentselected);
          var d = function (e) {
            this.$pnls.find("." + s.listview).find("." + s.next).removeClass(s.selected);
            for (var n = e.data(i.parent); n && n.length;) n = n.not("." + s.vertical).children("." + s.next).addClass(s.selected).end().closest("." + s.panel).data(i.parent)
          };
          this.bind("openedPanel", d), this.bind("initPanels", function (e) {
            d.call(this, this.$pnls.children("." + s.current))
          })
        }
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("hoverselected parentselected")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].defaults[t] = {current: !0, hover: !1, parent: !1};
    var s, i, a, o
  }(jQuery),/*
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
  function (e) {
    var n = "mmenu", t = "toggles";
    e[n].addons[t] = {
      setup: function () {
        var i = this;
        this.opts[t], this.conf[t];
        o = e[n].glbl, this.bind("initPanels", function (n) {
          this.__refactorClass(e("input", n), this.conf.classNames[t].toggle, "toggle"), this.__refactorClass(e("input", n), this.conf.classNames[t].check, "check"), e("input." + s.toggle + ", input." + s.check, n).each(function () {
            var n = e(this), t = n.closest("li"), a = n.hasClass(s.toggle) ? "toggle" : "check",
              o = n.attr("id") || i.__getUniqueId();
            t.children('label[for="' + o + '"]').length || (n.attr("id", o), t.prepend(n), e('<label for="' + o + '" class="' + s[a] + '"></label>').insertBefore(t.children("a, span").last()))
          })
        })
      }, add: function () {
        s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("toggle check")
      }, clickAnchor: function (e, n) {
      }
    }, e[n].configuration.classNames[t] = {toggle: "Toggle", check: "Check"};
    var s, i, a, o
  }(jQuery);

/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
  var e = -1, o = -1, n = function (t) {
    return parseFloat(t) || 0
  }, a = function (e) {
    var o = 1, a = t(e), i = null, r = [];
    return a.each(function () {
      var e = t(this), a = e.offset().top - n(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null;
      null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a
    }), r
  }, i = function (e) {
    var o = {
      byRow: !0, property: "height", target: null, remove: !1
    };
    return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
  }, r = t.fn.matchHeight = function (e) {
    var o = i(e);
    if (o.remove) {
      var n = this;
      return this.css(o.property, ""), t.each(r._groups, function (t, e) {
        e.elements = e.elements.not(n)
      }), this
    }
    return this.length <= 1 && !o.target ? this : (r._groups.push({
      elements: this,
      options: o
    }), r._apply(this, o), this)
  };
  r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
    r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
    var s = i(o), h = t(e), l = [h], c = t(window).scrollTop(), p = t("html").outerHeight(!0),
      u = h.parents().filter(":hidden");
    return u.each(function () {
      var e = t(this);
      e.data("style-cache", e.attr("style"))
    }), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
      var e = t(this), o = e.css("display");
      "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
        display: o,
        "padding-top": "0",
        "padding-bottom": "0",
        "margin-top": "0",
        "margin-bottom": "0",
        "border-top-width": "0",
        "border-bottom-width": "0",
        height: "100px",
        overflow: "hidden"
      })
    }), l = a(h), h.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || "")
    })), t.each(l, function (e, o) {
      var a = t(o), i = 0;
      if (s.target) i = s.target.outerHeight(!1); else {
        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
        a.each(function () {
          var e = t(this), o = e.attr("style"), n = e.css("display");
          "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
          var a = {
            display: n
          };
          a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
        })
      }
      a.each(function () {
        var e = t(this), o = 0;
        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"))
      })
    }), u.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || null)
    }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
      this
  }, r._applyDataApi = function () {
    var e = {};
    t("[data-match-height], [data-mh]").each(function () {
      var o = t(this), n = o.attr("data-mh") || o.attr("data-match-height");
      n in e ? e[n] = e[n].add(o) : e[n] = o
    }), t.each(e, function () {
      this.matchHeight(!0)
    })
  };
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
      r._apply(this.elements, this.options)
    }), r._afterUpdate && r._afterUpdate(e, r._groups)
  };
  r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();
      if (i === e) return;
      e = i;
    }
    n ? o === -1 && (o = setTimeout(function () {
      s(a), o = -1
    }, r._throttle)) : s(a)
  }, t(r._applyDataApi);
  var h = t.fn.on ? "on" : "bind";
  t(window)[h]("load", function (t) {
    r._update(!1, t)
  }), t(window)[h]("resize orientationchange", function (t) {
    r._update(!0, t)
  })
});


/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {start: null, current: null},
      direction: null
    }, this._states = {
      current: {},
      tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
    }, this)), this.setup(), this.initialize()
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"], run: function () {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"], run: function (a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"], run: function () {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"], run: function (a) {
      var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
        e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
      !c && this.$stage.children().css(e), a.css = e
    }
  }, {
    filter: ["width", "items", "settings"], run: function (a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length,
        e = !this.settings.autoWidth, f = [];
      for (a.items = {
        merge: !1,
        width: b
      }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      this._widths = f
    }
  }, {
    filter: ["items", "settings"], run: function () {
      var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
      for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"], run: function () {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      this._coordinates = f
    }
  }, {
    filter: ["width", "items", "settings"], run: function () {
      var a = this.settings.stagePadding, b = this._coordinates,
        c = {width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || ""};
      this.$stage.css(c)
    }
  }, {
    filter: ["width", "items", "settings"], run: function (a) {
      var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
    }
  }, {
    filter: ["items"], run: function () {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"], run: function (a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
    }
  }, {
    filter: ["position"], run: function () {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"], run: function () {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
      for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(a("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b)
    }), this._mergers = this._items.map(function () {
      return 1
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
    }
    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible")
  }, e.prototype.setup = function () {
    var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    })
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {content: b});
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a]
    }, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function () {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, e.prototype.onDragMove = function (a) {
    var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)),
      f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
      f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function (b, c) {
    var e = -1, f = 30, g = this.width(), h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {property: {name: "position", value: a}});
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b
    })
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length, e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function (a) {
    var b, c, d, e = this.settings, f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
      if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) ;
      f = b + 1
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
      return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
    };
    return b === d ? a.map(this._clones, function (a, b) {
      return f(b)
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function (b) {
    var c, e = 1, f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function (a, b) {
    var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length,
      h = this.minimum(), i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated")
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    })
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
    }, this))
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case"<":
        return d ? a > c : a < c;
      case">":
        return d ? a < c : a > c;
      case">=":
        return d ? a <= c : a >= c;
      case"<=":
        return d ? a >= c : a <= c
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {item: {count: this._items.length, index: this.current()}},
      i = a.camelCase(a.grep(["on", b, d], function (a) {
        return a
      }).join("-").toLowerCase()),
      j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
    }, this))
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--
    }, this))
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
        }, a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.pointer = function (a) {
    var c = {x: null, y: null};
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a))
  }, e.prototype.difference = function (a, b) {
    return {x: a.x - b.x, y: a.y - b.y}
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this), f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({type: e.Type.Event, name: c}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
          var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0,
            g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
            h = this._core.clones().length, i = a.proxy(function (a, b) {
              this.load(b)
            }, this);
          for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {element: f, url: g}, "lazy")
      }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function () {
        f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (c) {
    this._core = c, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this), "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
      }, this), "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update()
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update()
      }, 250))
    })
  };
  e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
    var b = this._core._current, c = b + this._core.settings.items, d = this._core.settings.lazyLoad,
      e = this._core.$stage.children().toArray().slice(b, c), f = [], g = 0;
    a.each(e, function (b, c) {
      f.push(a(c).height())
    }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
      }, this), "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this), "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this), "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop()
      }, this), "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
    var c = function () {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
      }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function (b, c) {
    var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"),
      i = "src", j = "", k = this._core.settings, l = function (c) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
          class: "owl-video-tn " + j,
          srcType: c
        }) : a("<div/>", {
          class: "owl-video-tn",
          style: "opacity:1;background-image:url(" + c + ")"
        }), b.after(d), b.after(e)
      };
    if (b.wrap(a("<div/>", {
      class: "owl-video-wrapper",
      style: g
    })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a[0].thumbnail_large, l(f)
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a.framegrab_url, l(f)
      }
    })
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function (b) {
    var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")],
      g = f.width || "100%", h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function () {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type)
      }, this), "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
        g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
      }, this), "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c)
      }, this), "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop()
      }, this), "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this), "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this), "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this), "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
  }, e.prototype.read = function () {
    return (new Date).getTime() - this._time
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";
  var e = function (b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
      }, this), "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this), "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this), "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw()
      }, this), "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this), "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b, c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed)
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed)
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function () {
    var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0),
      g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f) break;
        b = 0, ++c
      }
      b += this._core.mergers(this._core.relative(a))
    }
  }, e.prototype.draw = function () {
    var b, c = this._core.settings, d = this._core.items().length <= c.items,
      e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  }, e.prototype.getPosition = function (b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";
  var e = function (c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this), "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this), "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null
          }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1), e = this._core.$stage.children(),
        f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1
    }), e
  }

  function f(a) {
    return e(a, !0)
  }

  var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  }, j = {
    csstransforms: function () {
      return !!e("transform")
    }, csstransforms3d: function () {
      return !!e("perspective")
    }, csstransitions: function () {
      return !!e("transition")
    }, cssanimations: function () {
      return !!e("animation")
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery)
}(function (e) {
  "use strict";

  function t(t, s) {
    this.element = t, this.options = e.extend({}, l, s);
    var i = this.options.locale;
    void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
  }

  function s(t) {
    if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
      var s = e("div.jq-selectbox.opened"), l = e("div.jq-selectbox__search input", s),
        o = e("div.jq-selectbox__dropdown", s);
      s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown")
    }
  }

  var i = "styler", l = {
    idSuffix: "-styler",
    filePlaceholder: "Файл не выбран",
    fileBrowse: "Обзор...",
    fileNumber: "Выбрано файлов: %s",
    selectPlaceholder: "Выберите...",
    selectSearch: !1,
    selectSearchLimit: 10,
    selectSearchNotFound: "Совпадений не найдено",
    selectSearchPlaceholder: "Поиск...",
    selectVisibleOptions: 0,
    selectSmartPositioning: !0,
    locale: "ru",
    locales: {
      en: {
        filePlaceholder: "No file selected",
        fileBrowse: "Browse...",
        fileNumber: "Selected files: %s",
        selectPlaceholder: "Select...",
        selectSearchNotFound: "No matches found",
        selectSearchPlaceholder: "Search..."
      }
    },
    onSelectOpened: function () {
    },
    onSelectClosed: function () {
    },
    onFormStyled: function () {
    }
  };
  t.prototype = {
    init: function () {
      function t() {
        void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data()
      }

      var i = e(this.element), l = this.options,
        o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
        a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
      if (i.is(":checkbox")) {
        var d = function () {
          var s = new t, l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
            e.preventDefault(), i.triggerHandler("click"), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change())
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
          }), i.on("change.styler", function () {
            i.is(":checked") ? l.addClass("checked") : l.removeClass("checked")
          }).on("keydown.styler", function (e) {
            32 == e.which && l.click()
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused")
          }).on("blur.styler", function () {
            l.removeClass("focused")
          })
        };
        d(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d()
        })
      } else if (i.is(":radio")) {
        var r = function () {
          var s = new t, l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
            var t = this;
            return t.first().parents().filter(function () {
              return e(this).find(t).length === t.length
            })
          }, e.fn.commonParent = function () {
            return e(this).commonParents().first()
          }, l.click(function (t) {
            if (t.preventDefault(), i.triggerHandler("click"), !l.is(".disabled")) {
              var s = e('input[name="' + i.attr("name") + '"]');
              s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change()
            }
          }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
          }), i.on("change.styler", function () {
            i.parent().addClass("checked")
          }).on("focus.styler", function () {
            l.is(".disabled") || l.addClass("focused")
          }).on("blur.styler", function () {
            l.removeClass("focused")
          })
        };
        r(), i.on("refresh", function () {
          i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r()
        })
      } else if (i.is(":file")) {
        var c = function () {
          var s = new t, o = i.data("placeholder");
          void 0 === o && (o = l.filePlaceholder);
          var a = i.data("browse");
          void 0 !== a && "" !== a || (a = l.fileBrowse);
          var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").attr({
            id: s.id,
            title: s.title
          }).addClass(s.classes).data(s.data);
          i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled");
          var r = i.val(), c = e("div.jq-file__name", d);
          r && c.text(r.replace(/.+[\\\/]/, "")), i.on("change.styler", function () {
            var e = i.val();
            if (i.is("[multiple]")) {
              e = "";
              var t = i[0].files.length;
              if (t > 0) {
                var s = i.data("number");
                void 0 === s && (s = l.fileNumber), s = s.replace("%s", t), e = s
              }
            }
            c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(o), d.removeClass("changed")) : d.addClass("changed")
          }).on("focus.styler", function () {
            d.addClass("focused")
          }).on("blur.styler", function () {
            d.removeClass("focused")
          }).on("click.styler", function () {
            d.removeClass("focused")
          })
        };
        c(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), c()
        })
      } else if (i.is('input[type="number"]')) {
        var n = function () {
          var s = new t,
            l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
              id: s.id,
              title: s.title
            }).addClass(s.classes).data(s.data);
          i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
          var o, a, d, r = null, c = null;
          void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
          var n = function (t) {
            var s, l = i.val();
            e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
            var r = (d.toString().split(".")[1] || []).length;
            if (r > 0) {
              for (var c = "1"; c.length <= r;) c += "0";
              s = Math.round(s * c) / c
            }
            e.isNumeric(o) && e.isNumeric(a) ? s >= o && s <= a && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? s <= a && i.val(s) : i.val(s)
          };
          l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
            var t = e(this);
            n(t), r = setTimeout(function () {
              c = setInterval(function () {
                n(t)
              }, 40)
            }, 350)
          }).on("mouseup mouseout", "div.jq-number__spin", function () {
            clearTimeout(r), clearInterval(c)
          }).on("mouseup", "div.jq-number__spin", function () {
            i.change().trigger("input")
          }), i.on("focus.styler", function () {
            l.addClass("focused")
          }).on("blur.styler", function () {
            l.removeClass("focused")
          }))
        };
        n(), i.on("refresh", function () {
          i.off(".styler").closest(".jq-number").before(i).remove(), n()
        })
      } else if (i.is("select")) {
        var f = function () {
          function d(e) {
            var t = e.prop("scrollHeight") - e.outerHeight(), s = null, i = null;
            e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (l) {
              s = l.originalEvent.detail < 0 || l.originalEvent.wheelDelta > 0 ? 1 : -1, ((i = e.scrollTop()) >= t && s < 0 || i <= 0 && s > 0) && (l.stopPropagation(), l.preventDefault())
            })
          }

          function r() {
            for (var e = 0; e < c.length; e++) {
              var t = c.eq(e), s = "", i = "", o = "", a = "", d = "", r = "", f = "", h = "", u = "";
              t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== c.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
              var p = t.data();
              for (var v in p) "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
              i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), n += s
            }
          }

          var c = e("option", i), n = "";
          if (i.is("[multiple]")) {
            if (a || o) return;
            !function () {
              var s = new t, l = e('<div class="jq-select-multiple jqselect"></div>').attr({
                id: s.id,
                title: s.title
              }).addClass(s.classes).data(s.data);
              i.after(l), r(), l.append("<ul>" + n + "</ul>");
              var o = e("ul", l), a = e("li", l), f = i.attr("size"), h = o.outerHeight(), u = a.outerHeight();
              void 0 !== f && f > 0 ? o.css({height: u * f}) : o.css({height: 4 * u}), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l), i.is(":disabled") ? (l.addClass("disabled"), c.each(function () {
                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected")
              })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
                i.focus();
                var s = e(this);
                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                  var l = !1, o = !1;
                  s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                    e(this).is(".first") && (l = !0)
                  }), s.nextAll().each(function () {
                    e(this).is(".first") && (o = !0)
                  }), l && s.prevAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected")
                  }), o && s.nextAll().each(function () {
                    if (e(this).is(".selected")) return !1;
                    e(this).not(".disabled, .optgroup").addClass("selected")
                  }), 1 == a.filter(".selected").length && s.addClass("first")
                }
                c.prop("selected", !1), a.filter(".selected").each(function () {
                  var t = e(this), s = t.index();
                  t.is(".option") && (s -= t.prevAll(".optgroup").length), c.eq(s).prop("selected", !0)
                }), i.change()
              }), c.each(function (t) {
                e(this).data("optionIndex", t)
              }), i.on("change.styler", function () {
                a.removeClass("selected");
                var t = [];
                c.filter(":selected").each(function () {
                  t.push(e(this).data("optionIndex"))
                }), a.not(".optgroup").filter(function (s) {
                  return e.inArray(s, t) > -1
                }).addClass("selected")
              }).on("focus.styler", function () {
                l.addClass("focused")
              }).on("blur.styler", function () {
                l.removeClass("focused")
              }), h > l.height() && i.on("keydown.styler", function (e) {
                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u)
              }))
            }()
          } else !function () {
            var a = new t, f = "", h = i.data("placeholder"), u = i.data("search"), p = i.data("search-limit"),
              v = i.data("search-not-found"), m = i.data("search-placeholder"), g = i.data("smart-positioning");
            void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.selectSmartPositioning);
            var b = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
              id: a.id,
              title: a.title
            }).addClass(a.classes).data(a.data);
            i.after(b).prependTo(b);
            var C = b.css("z-index");
            C = C > 0 ? C : 1;
            var x = e("div.jq-selectbox__select", b), y = e("div.jq-selectbox__select-text", b),
              w = c.filter(":selected");
            r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
            var q = e('<div class="jq-selectbox__dropdown">' + f + "<ul>" + n + "</ul></div>");
            b.append(q);
            var _ = e("ul", q), j = e("li", q), k = e("input", q), S = e("div.jq-selectbox__not-found", q).hide();
            j.length < p && k.parent().hide(), "" === c.first().text() && c.first().is(":selected") && !1 !== h ? y.text(h).addClass("placeholder") : y.text(w.text());
            var T = 0, N = 0;
            if (j.css({display: "inline-block"}), j.each(function () {
              var t = e(this);
              t.innerWidth() > T && (T = t.innerWidth(), N = t.width())
            }), j.css({display: ""}), y.is(".placeholder") && y.width() > T) y.width(y.width()); else {
              var P = b.clone().appendTo("body").width("auto"), H = P.outerWidth();
              P.remove(), H == b.outerWidth() && y.width(N)
            }
            T > b.width() && q.width(T), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide();
            var A = b.outerHeight(!0), D = k.parent().outerHeight(!0) || 0, I = _.css("max-height"),
              K = j.filter(".selected");
            if (K.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
              var O = j.outerHeight();
              !1 !== h && (O = j.eq(1).outerHeight()), j.data("li-height", O)
            }
            var M = q.css("top");
            if ("auto" == q.css("left") && q.css({left: 0}), "auto" == q.css("top") && (q.css({top: A}), M = A), q.hide(), K.length && (c.first().text() != w.text() && b.addClass("changed"), b.data("jqfs-class", K.data("jqfs-class")), b.addClass(K.data("jqfs-class"))), i.is(":disabled")) return b.addClass("disabled"), !1;
            x.click(function () {
              if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                var t = e(window), s = j.data("li-height"), a = b.offset().top,
                  r = t.height() - A - (a - t.scrollTop()), n = i.data("visible-options");
                void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                var f = 5 * s, h = s * n;
                n > 0 && n < 6 && (f = h), 0 === n && (h = "auto");
                var u = function () {
                  q.height("auto").css({bottom: "auto", top: M});
                  var e = function () {
                    _.css("max-height", Math.floor((r - 20 - D) / s) * s)
                  };
                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e()
                };
                !0 === g || 1 === g ? r > f + D + 20 ? (u(), b.removeClass("dropup").addClass("dropdown")) : (function () {
                  q.height("auto").css({top: "auto", bottom: M});
                  var e = function () {
                    _.css("max-height", Math.floor((a - t.scrollTop() - 20 - D) / s) * s)
                  };
                  e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e()
                }(), b.removeClass("dropdown").addClass("dropup")) : !1 === g || 0 === g ? r > f + D + 20 && (u(), b.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                  bottom: "auto",
                  top: M
                }), _.css("max-height", h), "none" != I && _.css("max-height", I)), b.offset().left + q.outerWidth() > t.width() && q.css({
                  left: "auto",
                  right: 0
                }), e("div.jqselect").css({zIndex: C - 1}).removeClass("opened"), b.css({zIndex: C}), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), b.addClass("opened focused"), l.onSelectOpened.call(b)) : (q.hide(), b.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(b)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                  var t = e(this).val();
                  j.each(function () {
                    e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide()
                  }), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide()
                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_)
              }
            }), j.hover(function () {
              e(this).siblings().removeClass("selected")
            });
            var W = j.filter(".selected").text();
            j.filter(":not(.disabled):not(.optgroup)").click(function () {
              i.focus();
              var t = e(this), s = t.text();
              if (!t.is(".selected")) {
                var o = t.index();
                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), c.prop("selected", !1).eq(o).prop("selected", !0), W = s, y.text(s), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", t.data("jqfs-class")), b.addClass(t.data("jqfs-class")), i.change()
              }
              q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b)
            }), q.mouseout(function () {
              e("li.sel", q).addClass("selected")
            }), i.on("change.styler", function () {
              y.text(c.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), c.first().text() != j.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed")
            }).on("focus.styler", function () {
              b.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
            }).on("blur.styler", function () {
              b.removeClass("focused")
            }).on("keydown.styler keyup.styler", function (e) {
              var t = j.data("li-height");
              "" === i.val() ? y.text(h).addClass("placeholder") : y.text(c.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b))
            }).on("keydown.styler", function (e) {
              32 == e.which && (e.preventDefault(), x.click())
            }), s.registered || (e(document).on("click", s), s.registered = !0)
          }()
        };
        f(), i.on("refresh", function () {
          i.off(".styler").parent().before(i).remove(), f()
        })
      } else i.is(":reset") && i.on("click", function () {
        setTimeout(function () {
          i.closest("form").find("input, select").trigger("refresh")
        }, 1)
      })
    }, destroy: function () {
      var t = e(this.element);
      t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove()
    }
  }, e.fn[i] = function (s) {
    var l = arguments;
    if (void 0 === s || "object" == typeof s) return this.each(function () {
      e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s))
    }).promise().done(function () {
      var t = e(this[0]).data("_" + i);
      t && t.options.onFormStyled.call()
    }), this;
    if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
      var o;
      return this.each(function () {
        var a = e.data(this, "_" + i);
        a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)))
      }), void 0 !== o ? o : this
    }
  }, s.registered = !1
});


/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
  function a() {
  }

  function b(a) {
    return f.retinaImageSuffix + a
  }

  function c(a, c) {
    if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1; else {
      if (void 0 !== document.createElement) {
        var d = document.createElement("a");
        d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
      } else {
        var e = this.path.split("?");
        e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
      }
      this.perform_check = !0
    }
  }

  function d(a) {
    this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
    var b = this;
    this.path.check_2x_variant(function (a) {
      a && b.swap()
    })
  }

  var e = "undefined" == typeof exports ? window : exports,
    f = {retinaImageSuffix: "@2x", check_mime_type: !0, force_original_dimensions: !0};
  e.Retina = a, a.configure = function (a) {
    null === a && (a = {});
    for (var b in a) a.hasOwnProperty(b) && (f[b] = a[b])
  }, a.init = function (a) {
    null === a && (a = e);
    var b = a.onload || function () {
    };
    a.onload = function () {
      var a, c, e = document.getElementsByTagName("img"), f = [];
      for (a = 0; a < e.length; a += 1) c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
      b()
    }
  }, a.isRetina = function () {
    var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
  };
  var g = /\.\w+$/;
  e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () {
    return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
  }, c.prototype.check_2x_variant = function (a) {
    var b, d = this;
    return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () {
      if (4 !== b.readyState) return a(!1);
      if (b.status >= 200 && b.status <= 399) {
        if (f.check_mime_type) {
          var e = b.getResponseHeader("Content-Type");
          if (null === e || !e.match(/^image/i)) return a(!1)
        }
        return c.confirmed_paths.push(d.at_2x_path), a(!0)
      }
      return a(!1)
    }, b.send(), void 0) : a(!0)
  }, e.RetinaImage = d, d.prototype.swap = function (a) {
    function b() {
      c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
    }

    "undefined" == typeof a && (a = this.path.at_2x_path);
    var c = this;
    b()
  }, a.isRetina() && a.init(e)
}();

;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_dotdotdot_js = factory(root.jQuery);
  }
}(this, function (jQuery) {
  /*
 *	jQuery dotdotdot 3.2.2
 *	@requires jQuery 1.7.0 or later
 *
 *	dotdotdot.frebsite.nl
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	License: CC-BY-NC-4.0
 *	http://creativecommons.org/licenses/by-nc/4.0/
 */
  !function (t) {
    "use strict";

    function e() {
      h = t(window), s = {}, o = {}, r = {}, t.each([s, o, r], function (t, e) {
        e.add = function (t) {
          t = t.split(" ");
          for (var i = 0, n = t.length; i < n; i++) e[t[i]] = e.ddd(t[i])
        }
      }), s.ddd = function (t) {
        return "ddd-" + t
      }, s.add("truncated keep"), o.ddd = function (t) {
        return "ddd-" + t
      }, r.ddd = function (t) {
        return t + ".ddd"
      }, r.add("resize"), e = function () {
      }
    }

    var i = "dotdotdot", n = "3.2.2";
    if (!(t[i] && t[i].version > n)) {
      t[i] = function (t, e) {
        this.$dot = t, this.api = ["getInstance", "truncate", "restore", "destroy", "watch", "unwatch"], this.opts = e;
        var n = this.$dot.data(i);
        return n && n.destroy(), this.init(), this.truncate(), this.opts.watch && this.watch(), this
      }, t[i].version = n, t[i].uniqueId = 0, t[i].defaults = {
        ellipsis: "… ", callback: function (t) {
        }, truncate: "word", tolerance: 0, keep: null, watch: "window", height: null
      }, t[i].prototype = {
        init: function () {
          this.watchTimeout = null, this.watchInterval = null, this.uniqueId = t[i].uniqueId++, this.originalStyle = this.$dot.attr("style") || "", this.originalContent = this._getOriginalContent(), "break-word" !== this.$dot.css("word-wrap") && this.$dot.css("word-wrap", "break-word"), "nowrap" === this.$dot.css("white-space") && this.$dot.css("white-space", "normal"), null === this.opts.height && (this.opts.height = this._getMaxHeight()), "string" == typeof this.opts.ellipsis && (this.opts.ellipsis = document.createTextNode(this.opts.ellipsis))
        }, getInstance: function () {
          return this
        }, truncate: function () {
          this.$inner = this.$dot.wrapInner("<div />").children().css({
            display: "block",
            height: "auto",
            width: "auto",
            border: "none",
            padding: 0,
            margin: 0
          }), this.$inner.empty().append(this.originalContent.clone(!0)), this.maxHeight = this._getMaxHeight();
          var t = !1;
          return this._fits() || (t = !0, this._truncateToNode(this.$inner[0])), this.$dot[t ? "addClass" : "removeClass"](s.truncated), this.$inner.replaceWith(this.$inner.contents()), this.$inner = null, this.opts.callback.call(this.$dot[0], t), t
        }, restore: function () {
          this.unwatch(), this.$dot.empty().append(this.originalContent).attr("style", this.originalStyle).removeClass(s.truncated)
        }, destroy: function () {
          this.restore(), this.$dot.data(i, null)
        }, watch: function () {
          var t = this;
          this.unwatch();
          var e = {};
          "window" == this.opts.watch ? h.on(r.resize + t.uniqueId, function (i) {
            t.watchTimeout && clearTimeout(t.watchTimeout), t.watchTimeout = setTimeout(function () {
              e = t._watchSizes(e, h, "width", "height")
            }, 100)
          }) : this.watchInterval = setInterval(function () {
            e = t._watchSizes(e, t.$dot, "innerWidth", "innerHeight")
          }, 500)
        }, unwatch: function () {
          h.off(r.resize + this.uniqueId), this.watchInterval && clearInterval(this.watchInterval), this.watchTimeout && clearTimeout(this.watchTimeout)
        }, _api: function () {
          var e = this, i = {};
          return t.each(this.api, function (t) {
            var n = this;
            i[n] = function () {
              var t = e[n].apply(e, arguments);
              return "undefined" == typeof t ? i : t
            }
          }), i
        }, _truncateToNode: function (e) {
          var i = [], n = [];
          if (t(e).contents().each(function () {
            var e = t(this);
            if (!e.hasClass(s.keep)) {
              var o = document.createComment("");
              e.replaceWith(o), n.push(this), i.push(o)
            }
          }), n.length) {
            for (var o = 0; o < n.length; o++) {
              t(i[o]).replaceWith(n[o]), t(n[o]).append(this.opts.ellipsis);
              var r = this._fits();
              if (t(this.opts.ellipsis, n[o]).remove(), !r) {
                if ("node" == this.opts.truncate && o > 1) return void t(n[o - 2]).remove();
                break
              }
            }
            for (var h = o; h < i.length; h++) t(i[h]).remove();
            var a = n[Math.max(0, Math.min(o, n.length - 1))];
            if (1 == a.nodeType) {
              var d = t("<" + a.nodeName + " />");
              d.append(this.opts.ellipsis), t(a).replaceWith(d), this._fits() ? d.replaceWith(a) : (d.remove(), a = n[Math.max(0, o - 1)])
            }
            1 == a.nodeType ? this._truncateToNode(a) : this._truncateToWord(a)
          }
        }, _truncateToWord: function (t) {
          for (var e = t, i = this, n = this.__getTextContent(e), s = n.indexOf(" ") !== -1 ? " " : "　", o = n.split(s), r = "", h = o.length; h >= 0; h--) if (r = o.slice(0, h).join(s), i.__setTextContent(e, i._addEllipsis(r)), i._fits()) {
            "letter" == i.opts.truncate && (i.__setTextContent(e, o.slice(0, h + 1).join(s)), i._truncateToLetter(e));
            break
          }
        }, _truncateToLetter: function (t) {
          for (var e = this, i = this.__getTextContent(t), n = i.split(""), s = "", o = n.length; o >= 0 && (s = n.slice(0, o).join(""), !s.length || (e.__setTextContent(t, e._addEllipsis(s)), !e._fits())); o--) ;
        }, _fits: function () {
          return this.$inner.innerHeight() <= this.maxHeight + this.opts.tolerance
        }, _addEllipsis: function (e) {
          for (var i = [" ", "　", ",", ";", ".", "!", "?"]; t.inArray(e.slice(-1), i) > -1;) e = e.slice(0, -1);
          return e += this.__getTextContent(this.opts.ellipsis)
        }, _getOriginalContent: function () {
          var e = this;
          return this.$dot.find("script, style").addClass(s.keep), this.opts.keep && this.$dot.find(this.opts.keep).addClass(s.keep), this.$dot.find("*").not("." + s.keep).add(this.$dot).contents().each(function () {
            var i = this, n = t(this);
            if (3 == i.nodeType) {
              if ("" == t.trim(e.__getTextContent(i))) {
                if (n.parent().is("table, thead, tbody, tfoot, tr, dl, ul, ol, video")) return void n.remove();
                if (n.prev().is("div, p, table, td, td, dt, dd, li")) return void n.remove();
                if (n.next().is("div, p, table, td, td, dt, dd, li")) return void n.remove();
                if (!n.prev().length) return void n.remove();
                if (!n.next().length) return void n.remove()
              }
            } else 8 == i.nodeType && n.remove()
          }), this.$dot.contents()
        }, _getMaxHeight: function () {
          if ("number" == typeof this.opts.height) return this.opts.height;
          for (var t = ["maxHeight", "height"], e = 0, i = 0; i < t.length; i++) if (e = window.getComputedStyle(this.$dot[0])[t[i]], "px" == e.slice(-2)) {
            e = parseFloat(e);
            break
          }
          var t = [];
          switch (this.$dot.css("boxSizing")) {
            case"border-box":
              t.push("borderTopWidth"), t.push("borderBottomWidth");
            case"padding-box":
              t.push("paddingTop"), t.push("paddingBottom")
          }
          for (var i = 0; i < t.length; i++) {
            var n = window.getComputedStyle(this.$dot[0])[t[i]];
            "px" == n.slice(-2) && (e -= parseFloat(n))
          }
          return Math.max(e, 0)
        }, _watchSizes: function (t, e, i, n) {
          if (this.$dot.is(":visible")) {
            var s = {width: e[i](), height: e[n]()};
            return t.width == s.width && t.height == s.height || this.truncate(), s
          }
          return t
        }, __getTextContent: function (t) {
          for (var e = ["nodeValue", "textContent", "innerText"], i = 0; i < e.length; i++) if ("string" == typeof t[e[i]]) return t[e[i]];
          return ""
        }, __setTextContent: function (t, e) {
          for (var i = ["nodeValue", "textContent", "innerText"], n = 0; n < i.length; n++) t[i[n]] = e
        }
      }, t.fn[i] = function (n) {
        return e(), n = t.extend(!0, {}, t[i].defaults, n), this.each(function () {
          t(this).data(i, new t[i](t(this), n)._api())
        })
      };
      var s, o, r, h
    }
  }(jQuery);
  return true;
}));

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case'HTML':
      case'BODY':
        return e.ownerDocument.body;
      case'#document':
        return e.body;
    }
    var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
  }

  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe
  }

  function p(e) {
    if (!e) return document.documentElement;
    for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode)
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host)
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
      return r[o]
    }
    return e[o]
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'),
      r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
  }

  function h(e, t, o, n) {
    return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }

  function c() {
    var e = document.body, t = document.documentElement, o = r(10) && getComputedStyle(t);
    return {height: h('Height', e, t, o), width: h('Width', e, t, o)}
  }

  function g(e) {
    return le({}, e, {right: e.left + e.width, bottom: e.top + e.height})
  }

  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'), i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i
      } else o = e.getBoundingClientRect()
    } catch (t) {
    }
    var p = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top},
      s = 'HTML' === e.nodeName ? c() : {}, d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
    }
    return g(p)
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName,
      d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
    var b = g({top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height});
    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var y = parseFloat(m.marginTop, 10), w = parseFloat(m.marginLeft, 10);
      b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
    }
    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
  }

  function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement,
      n = b(e, o), i = $(o.clientWidth, window.innerWidth || 0), r = $(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'),
      d = {top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r};
    return g(d)
  }

  function w(e) {
    var n = e.nodeName;
    return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
    return o || document.documentElement
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = {top: 0, left: 0},
      d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = y(d, p); else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);
      if ('HTML' === l.nodeName && !w(d)) {
        var m = c(), h = m.height, g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
      } else s = f
    }
    return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
  }

  function x(e) {
    var t = e.width, o = e.height;
    return t * o
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i), s = {
      top: {width: p.width, height: t.top - p.top},
      right: {width: p.right - t.right, height: p.height},
      bottom: {width: p.width, height: p.bottom - t.bottom},
      left: {width: t.left - p.left, height: p.height}
    }, d = Object.keys(s).map(function (e) {
      return le({key: e}, s[e], {area: x(s[e])})
    }).sort(function (e, t) {
      return t.area - e.area
    }), a = d.filter(function (e) {
      var t = e.width, n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight
    }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
    return l + (f ? '-' + f : '')
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o);
    return b(o, i, n)
  }

  function S(e) {
    var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      i = {width: e.offsetWidth + n, height: e.offsetHeight + o};
    return i
  }

  function T(e) {
    var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e), i = {width: n.width, height: n.height}, r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
  }

  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o
    });
    var n = D(e, function (e) {
      return e[t] === o
    });
    return e.indexOf(n)
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
    }), o
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name, n = e.enabled;
      return n && o === t
    })
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n], r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r
    }
    return null
  }

  function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {passive: !0}), r || M(n(p.parentNode), t, o, i), i.push(p)
  }

  function I(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {passive: !0});
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
  }

  function F() {
    this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
    })
  }

  function K(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
    })
  }

  function q(e, t, o) {
    var n = D(e, function (e) {
      var o = e.name;
      return o === t
    }), i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order
    });
    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
    }
    return i
  }

  function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = me.indexOf(e),
      n = me.slice(o + 1).concat(me.slice(0, o));
    return t ? n.reverse() : n
  }

  function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case'%p':
          s = o;
          break;
        case'%':
        case'%r':
        default:
          s = n;
      }
      var d = g(s);
      return d[t] / 100 * r
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
    }
    return r
  }

  function _(e, t, o, n) {
    var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim()
    }), s = p.indexOf(D(p, function (e) {
      return -1 !== e.search(/,|\s/)
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return V(e, i, t, o)
      })
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
      })
    }), i
  }

  function X(e, t) {
    var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
  }

  for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1) if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
    oe = 1;
    break
  }
  var i = ee && window.Promise, ie = i ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e()
        }))
      }
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e()
        }, oe))
      }
    }, re = ee && !!(window.MSInputMethodContext && document.documentMode),
    pe = ee && /MSIE 10/.test(navigator.userAgent), se = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }, de = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }

      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    }(), ae = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    }, le = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    },
    fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    me = fe.slice(3), he = {FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'},
    ce = function () {
      function t(o, n) {
        var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        se(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(i.update)
        }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return le({name: e}, i.options.modifiers[e])
        }).sort(function (e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p
      }

      return de(t, [{
        key: 'update', value: function () {
          return k.call(this)
        }
      }, {
        key: 'destroy', value: function () {
          return H.call(this)
        }
      }, {
        key: 'enableEventListeners', value: function () {
          return F.call(this)
        }
      }, {
        key: 'disableEventListeners', value: function () {
          return U.call(this)
        }
      }]), t
    }();
  return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
    placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
    }, onUpdate: function () {
    }, modifiers: {
      shift: {
        order: 100, enabled: !0, fn: function (e) {
          var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
          if (n) {
            var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top', a = s ? 'width' : 'height',
              l = {start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a])};
            e.offsets.popper = le({}, p, l[n])
          }
          return e
        }
      },
      offset: {order: 200, enabled: !0, fn: X, offset: 0},
      preventOverflow: {
        order: 300, enabled: !0, fn: function (e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority, f = e.offsets.popper, m = {
            primary: function (e) {
              var o = f[e];
              return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o)
            }, secondary: function (e) {
              var o = 'right' === e ? 'left' : 'top', n = f[o];
              return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = le({}, f, m[t](e))
          }), e.offsets.popper = f, e
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400, enabled: !0, fn: function (e) {
          var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z,
            p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
        }
      },
      arrow: {
        order: 500, enabled: !0, fn: function (e, o) {
          var n;
          if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;
          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference,
            a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left',
            m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2, y = t(e.instance.popper), w = parseFloat(y['margin' + f], 10),
            E = parseFloat(y['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - w - E;
          return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e
        }, element: '[x-arrow]'
      },
      flip: {
        order: 600, enabled: !0, fn: function (e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
            n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = [];
          switch (t.behavior) {
            case he.FLIP:
              p = [n, i];
              break;
            case he.CLOCKWISE:
              p = z(n);
              break;
            case he.COUNTERCLOCKWISE:
              p = z(n, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper, l = e.offsets.reference, f = Z,
              m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
              h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top),
              u = f(a.bottom) > f(o.bottom),
              b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
              y = -1 !== ['top', 'bottom'].indexOf(n),
              w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
          }), e
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport'
      },
      inner: {
        order: 700, enabled: !1, fn: function (e) {
          var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference,
            p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
        }
      },
      hide: {
        order: 800, enabled: !0, fn: function (e) {
          if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name
          }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850, enabled: !0, fn: function (e, t) {
          var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name
          }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l),
            m = {position: i.position}, h = {left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right)},
            c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else {
            var y = 'bottom' == c ? -1 : 1, w = 'right' == g ? -1 : 1;
            m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
          }
          var E = {"x-placement": e.placement};
          return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
        }, gpuAcceleration: !0, x: 'bottom', y: 'right'
      },
      applyStyle: {
        order: 900, enabled: !0, fn: function (e) {
          return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
        }, onLoad: function (e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
            p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), j(t, {position: o.positionFixed ? 'fixed' : 'absolute'}), o
        }, gpuAcceleration: void 0
      }
    }
  }, ce
});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, c) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {}, e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i
      })
    }
    return r
  }

  e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
  var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V,
    Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt,
    Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt,
    Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae,
    De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e,
    tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function (i) {
      var e = "transitionend";

      function t(t) {
        var e = this, n = !1;
        return i(this).one(l.TRANSITION_END, function () {
          n = !0
        }), setTimeout(function () {
          n || l.triggerTransitionEnd(e)
        }, t), this
      }

      var l = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
          for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
          return t
        }, getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          e && "#" !== e || (e = t.getAttribute("href") || "");
          try {
            return 0 < i(document).find(e).length ? e : null
          } catch (t) {
            return null
          }
        }, getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
        }, reflow: function (t) {
          return t.offsetHeight
        }, triggerTransitionEnd: function (t) {
          i(t).trigger(e)
        }, supportsTransitionEnd: function () {
          return Boolean(e)
        }, isElement: function (t) {
          return (t[0] || t).nodeType
        }, typeCheckConfig: function (t, e, n) {
          for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i], s = e[i],
              o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
          }
          var a
        }
      };
      return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function (t) {
          if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
      }, l
    }(e), In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + ".data-api"
    }, f = "alert", d = "fade", _ = "show", g = function () {
      function i(t) {
        this._element = t
      }

      var t = i.prototype;
      return t.close = function (t) {
        var e = this._element;
        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      }, t.dispose = function () {
        r.removeData(this._element, s), this._element = null
      }, t._getRootElement = function (t) {
        var e = Cn.getSelectorFromElement(t), n = !1;
        return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n
      }, t._triggerCloseEvent = function (t) {
        var e = r.Event(u.CLOSE);
        return r(t).trigger(e), e
      }, t._removeElement = function (e) {
        var n = this;
        if (r(e).removeClass(_), r(e).hasClass(d)) {
          var t = Cn.getTransitionDurationFromElement(e);
          r(e).one(Cn.TRANSITION_END, function (t) {
            return n._destroyElement(e, t)
          }).emulateTransitionEnd(t)
        } else this._destroyElement(e)
      }, t._destroyElement = function (t) {
        r(t).detach().trigger(u.CLOSED).remove()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = r(this), e = t.data(s);
          e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this)
        })
      }, i._handleDismiss = function (e) {
        return function (t) {
          t && t.preventDefault(), e.close(this)
        }
      }, o(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }]), i
    }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
      return r.fn[n] = l, g._jQueryInterface
    }, g),
    An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
      CLICK_DATA_API: "click" + E + y,
      FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
    }, k = function () {
      function n(t) {
        this._element = t
      }

      var t = n.prototype;
      return t.toggle = function () {
        var t = !0, e = !0, n = m(this._element).closest(b)[0];
        if (n) {
          var i = m(this._element).find(S)[0];
          if (i) {
            if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1; else {
              var r = m(n).find(w)[0];
              r && m(r).removeClass(C)
            }
            if (t) {
              if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
              i.checked = !m(this._element).hasClass(C), m(i).trigger("change")
            }
            i.focus(), e = !1
          }
        }
        e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C)
      }, t.dispose = function () {
        m.removeData(this._element, v), this._element = null
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var t = m(this).data(v);
          t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
        })
      }, o(n, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }]), n
    }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
      t.preventDefault();
      var e = t.target;
      m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
      var e = m(t.target).closest(N)[0];
      m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
    }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
      return m.fn[p] = T, k._jQueryInterface
    }, k), Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    }, x = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    }, U = "next", K = "prev", F = "left", V = "right", Q = {
      SLIDE: "slide" + R,
      SLID: "slid" + R,
      KEYDOWN: "keydown" + R,
      MOUSEENTER: "mouseenter" + R,
      MOUSELEAVE: "mouseleave" + R,
      TOUCHEND: "touchend" + R,
      LOAD_DATA_API: "load" + R + H,
      CLICK_DATA_API: "click" + R + H
    }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    }, $ = function () {
      function s(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners()
      }

      var t = s.prototype;
      return t.next = function () {
        this._isSliding || this._slide(U)
      }, t.nextWhenVisible = function () {
        !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
      }, t.prev = function () {
        this._isSliding || this._slide(K)
      }, t.pause = function (t) {
        t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, t.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, t.to = function (t) {
        var e = this;
        this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
          return e.to(t)
        }); else {
          if (n === t) return this.pause(), void this.cycle();
          var i = n < t ? U : K;
          this._slide(i, this._items[t])
        }
      }, t.dispose = function () {
        P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, t._getConfig = function (t) {
        return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t
      }, t._addEventListeners = function () {
        var e = this;
        this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
          return e._keydown(t)
        }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
          return e.pause(t)
        }).on(Q.MOUSELEAVE, function (t) {
          return e.cycle(t)
        }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t)
          }, 500 + e._config.interval)
        }))
      }, t._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;
          case 39:
            t.preventDefault(), this.next()
        }
      }, t._getItemIndex = function (t) {
        return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t)
      }, t._getItemByDirection = function (t, e) {
        var n = t === U, i = t === K, r = this._getItemIndex(e), s = this._items.length - 1;
        if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
        var o = (r + (t === K ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
      }, t._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t), i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, {relatedTarget: t, direction: e, from: i, to: n});
        return P(this._element).trigger(r), r
      }, t._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
          var e = this._indicatorsElement.children[this._getItemIndex(t)];
          e && P(e).addClass(Y)
        }
      }, t._slide = function (t, e) {
        var n, i, r, s = this, o = P(this._element).find(Z.ACTIVE_ITEM)[0], a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o), h = this._getItemIndex(l), c = Boolean(this._interval);
        if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
          this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
          var u = P.Event(Q.SLID, {relatedTarget: l, direction: r, from: a, to: h});
          if (P(this._element).hasClass(G)) {
            P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
            var f = Cn.getTransitionDurationFromElement(o);
            P(o).one(Cn.TRANSITION_END, function () {
              P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
                return P(s._element).trigger(u)
              }, 0)
            }).emulateTransitionEnd(f)
          } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
          c && this.cycle()
        }
      }, s._jQueryInterface = function (i) {
        return this.each(function () {
          var t = P(this).data(j), e = h({}, M, P(this).data());
          "object" == typeof i && (e = h({}, e, i));
          var n = "string" == typeof i ? i : e.slide;
          if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          } else e.interval && (t.pause(), t.cycle())
        })
      }, s._dataApiClickHandler = function (t) {
        var e = Cn.getSelectorFromElement(this);
        if (e) {
          var n = P(e)[0];
          if (n && P(n).hasClass(B)) {
            var i = h({}, P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to");
            r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault()
          }
        }
      }, o(s, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return M
        }
      }]), s
    }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
      P(Z.DATA_RIDE).each(function () {
        var t = P(this);
        $._jQueryInterface.call(t, t.data())
      })
    }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
      return P.fn[L] = W, $._jQueryInterface
    }, $), bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
      toggle: !0,
      parent: ""
    }, ot = {toggle: "boolean", parent: "(string|element)"}, at = {
      SHOW: "show" + it,
      SHOWN: "shown" + it,
      HIDE: "hide" + it,
      HIDDEN: "hidden" + it,
      CLICK_DATA_API: "click" + it + ".data-api"
    }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    }, gt = function () {
      function a(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
          var r = n[i], s = Cn.getSelectorFromElement(r);
          null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
      }

      var t = a.prototype;
      return t.toggle = function () {
        tt(this._element).hasClass(lt) ? this.hide() : this.show()
      }, t.show = function () {
        var t, e, n = this;
        if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
          var i = tt.Event(at.SHOW);
          if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
            t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
            var r = this._getDimension();
            tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
            var s = "scroll" + (r[0].toUpperCase() + r.slice(1)), o = Cn.getTransitionDurationFromElement(this._element);
            tt(this._element).one(Cn.TRANSITION_END, function () {
              tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN)
            }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
          }
        }
      }, t.hide = function () {
        var t = this;
        if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
          var e = tt.Event(at.HIDE);
          if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
            var n = this._getDimension();
            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
              var r = this._triggerArray[i], s = Cn.getSelectorFromElement(r);
              if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1)
            }
            this.setTransitioning(!0);
            this._element.style[n] = "";
            var o = Cn.getTransitionDurationFromElement(this._element);
            tt(this._element).one(Cn.TRANSITION_END, function () {
              t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)
            }).emulateTransitionEnd(o)
          }
        }
      }, t.setTransitioning = function (t) {
        this._isTransitioning = t
      }, t.dispose = function () {
        tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
      }, t._getConfig = function (t) {
        return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t
      }, t._getDimension = function () {
        return tt(this._element).hasClass(ft) ? ft : dt
      }, t._getParent = function () {
        var n = this, t = null;
        Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
        var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return tt(t).find(e).each(function (t, e) {
          n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
        }), t
      }, t._addAriaAndCollapsedClass = function (t, e) {
        if (t) {
          var n = tt(t).hasClass(lt);
          0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n)
        }
      }, a._getTargetFromElement = function (t) {
        var e = Cn.getSelectorFromElement(t);
        return e ? tt(e)[0] : null
      }, a._jQueryInterface = function (i) {
        return this.each(function () {
          var t = tt(this), e = t.data(nt), n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
          if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
            if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
            e[i]()
          }
        })
      }, o(a, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return st
        }
      }]), a
    }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = tt(this), e = Cn.getSelectorFromElement(this);
      tt(e).each(function () {
        var t = tt(this), e = t.data(nt) ? "toggle" : n.data();
        gt._jQueryInterface.call(t, e)
      })
    }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
      return tt.fn[et] = rt, gt._jQueryInterface
    }, gt),
    Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
      HIDE: "hide" + Et,
      HIDDEN: "hidden" + Et,
      SHOW: "show" + Et,
      SHOWN: "shown" + Et,
      CLICK: "click" + Et,
      CLICK_DATA_API: "click" + Et + yt,
      KEYDOWN_DATA_API: "keydown" + Et + yt,
      KEYUP_DATA_API: "keyup" + Et + yt
    }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic"
    }, Vt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string"
    }, Qt = function () {
      function l(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
      }

      var t = l.prototype;
      return t.toggle = function () {
        if (!this._element.disabled && !mt(this._element).hasClass(At)) {
          var t = l._getParentFromElement(this._element), e = mt(this._menu).hasClass(Dt);
          if (l._clearMenus(), !e) {
            var n = {relatedTarget: this._element}, i = mt.Event(It.SHOW, n);
            if (mt(t).trigger(i), !i.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var r = this._element;
                "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig())
              }
              "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n))
            }
          }
        }
      }, t.dispose = function () {
        mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
      }, t.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
      }, t._addEventListeners = function () {
        var e = this;
        mt(this._element).on(It.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle()
        })
      }, t._getConfig = function (t) {
        return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t
      }, t._getMenuElement = function () {
        if (!this._menu) {
          var t = l._getParentFromElement(this._element);
          this._menu = mt(t).find(Lt)[0]
        }
        return this._menu
      }, t._getPlacement = function () {
        var t = mt(this._element).parent(), e = Mt;
        return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e
      }, t._detectNavbar = function () {
        return 0 < mt(this._element).closest(".navbar").length
      }, t._getPopperConfig = function () {
        var e = this, t = {};
        "function" == typeof this._config.offset ? t.fn = function (t) {
          return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t
        } : t.offset = this._config.offset;
        var n = {
          placement: this._getPlacement(),
          modifiers: {
            offset: t,
            flip: {enabled: this._config.flip},
            preventOverflow: {boundariesElement: this._config.boundary}
          }
        };
        return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var t = mt(this).data(vt);
          if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
            t[e]()
          }
        })
      }, l._clearMenus = function (t) {
        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
          var i = l._getParentFromElement(e[n]), r = mt(e[n]).data(vt), s = {relatedTarget: e[n]};
          if (r) {
            var o = r._menu;
            if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
              var a = mt.Event(It.HIDE, s);
              mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
            }
          }
        }
      }, l._getParentFromElement = function (t) {
        var e, n = Cn.getSelectorFromElement(t);
        return n && (e = mt(n)[0]), e || t.parentNode
      }, l._dataApiKeydownHandler = function (t) {
        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
          var e = l._getParentFromElement(this), n = mt(e).hasClass(Dt);
          if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
            var i = mt(e).find(Rt).get();
            if (0 !== i.length) {
              var r = i.indexOf(t.target);
              38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
            }
          } else {
            if (27 === t.which) {
              var s = mt(e).find(kt)[0];
              mt(s).trigger("focus")
            }
            mt(this).trigger("click")
          }
        }
      }, o(l, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return Ft
        }
      }, {
        key: "DefaultType", get: function () {
          return Vt
        }
      }]), l
    }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
      t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle")
    }).on(It.CLICK_DATA_API, Pt, function (t) {
      t.stopPropagation()
    }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
      return mt.fn[pt] = Tt, Qt._jQueryInterface
    }, Qt), wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    }, Jt = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    }, Zt = {
      HIDE: "hide" + qt,
      HIDDEN: "hidden" + qt,
      SHOW: "show" + qt,
      SHOWN: "shown" + qt,
      FOCUSIN: "focusin" + qt,
      RESIZE: "resize" + qt,
      CLICK_DISMISS: "click.dismiss" + qt,
      KEYDOWN_DISMISS: "keydown.dismiss" + qt,
      MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
      CLICK_DATA_API: "click" + qt + ".data-api"
    }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
    }, se = function () {
      function r(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
      }

      var t = r.prototype;
      return t.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t)
      }, t.show = function (t) {
        var e = this;
        if (!this._isTransitioning && !this._isShown) {
          Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
          var n = Bt.Event(Zt.SHOW, {relatedTarget: t});
          Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
            return e.hide(t)
          }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
            Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
              Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
            })
          }), this._showBackdrop(function () {
            return e._showElement(t)
          }))
        }
      }, t.hide = function (t) {
        var e = this;
        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var n = Bt.Event(Zt.HIDE);
          if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;
            var i = Bt(this._element).hasClass(ne);
            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
              var r = Cn.getTransitionDurationFromElement(this._element);
              Bt(this._element).one(Cn.TRANSITION_END, function (t) {
                return e._hideModal(t)
              }).emulateTransitionEnd(r)
            } else this._hideModal()
          }
        }
      }, t.dispose = function () {
        Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
      }, t.handleUpdate = function () {
        this._adjustDialog()
      }, t._getConfig = function (t) {
        return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t
      }, t._showElement = function (t) {
        var e = this, n = Bt(this._element).hasClass(ne);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();
        var i = Bt.Event(Zt.SHOWN, {relatedTarget: t}), r = function () {
          e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i)
        };
        if (n) {
          var s = Cn.getTransitionDurationFromElement(this._element);
          Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
        } else r()
      }, t._enforceFocus = function () {
        var e = this;
        Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
          document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus()
        })
      }, t._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide())
        }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS)
      }, t._setResizeEvent = function () {
        var e = this;
        this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
          return e.handleUpdate(t)
        }) : Bt(window).off(Zt.RESIZE)
      }, t._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN)
        })
      }, t._removeBackdrop = function () {
        this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null)
      }, t._showBackdrop = function (t) {
        var e = this, n = Bt(this._element).hasClass(ne) ? ne : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
          }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
          if (!n) return void t();
          var i = Cn.getTransitionDurationFromElement(this._backdrop);
          Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i)
        } else if (!this._isShown && this._backdrop) {
          Bt(this._backdrop).removeClass(ie);
          var r = function () {
            e._removeBackdrop(), t && t()
          };
          if (Bt(this._element).hasClass(ne)) {
            var s = Cn.getTransitionDurationFromElement(this._backdrop);
            Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
          } else r()
        } else t && t()
      }, t._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, t._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, t._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, t._setScrollbar = function () {
        var r = this;
        if (this._isBodyOverflowing) {
          Bt(re.FIXED_CONTENT).each(function (t, e) {
            var n = Bt(e)[0].style.paddingRight, i = Bt(e).css("padding-right");
            Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
          }), Bt(re.STICKY_CONTENT).each(function (t, e) {
            var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right");
            Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
          }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
            var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right");
            Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
          });
          var t = document.body.style.paddingRight, e = Bt(document.body).css("padding-right");
          Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
        }
      }, t._resetScrollbar = function () {
        Bt(re.FIXED_CONTENT).each(function (t, e) {
          var n = Bt(e).data("padding-right");
          "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right")
        }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Bt(e).data("margin-right");
          "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right")
        });
        var t = Bt(document.body).data("padding-right");
        "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right")
      }, t._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = $t, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e
      }, r._jQueryInterface = function (n, i) {
        return this.each(function () {
          var t = Bt(this).data(Gt), e = h({}, Xt, Bt(this).data(), "object" == typeof n && n ? n : {});
          if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n](i)
          } else e.show && t.show(i)
        })
      }, o(r, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return Xt
        }
      }]), r
    }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
      var e, n = this, i = Cn.getSelectorFromElement(this);
      i && (e = Bt(i)[0]);
      var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
      var s = Bt(e).one(Zt.SHOW, function (t) {
        t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
          Bt(n).is(":visible") && n.focus()
        })
      });
      se._jQueryInterface.call(Bt(e), r, this)
    }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
      return Bt.fn[Yt] = zt, se._jQueryInterface
    }, se),
    Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !(_e = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}),
      selector: !(de = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
      }),
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    }, pe = "out", ve = {
      HIDE: "hide" + he,
      HIDDEN: "hidden" + he,
      SHOW: (me = "show") + he,
      SHOWN: "shown" + he,
      INSERTED: "inserted" + he,
      CLICK: "click" + he,
      FOCUSIN: "focusin" + he,
      FOCUSOUT: "focusout" + he,
      MOUSEENTER: "mouseenter" + he,
      MOUSELEAVE: "mouseleave" + he
    }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
      function i(t, e) {
        if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
      }

      var t = i.prototype;
      return t.enable = function () {
        this._isEnabled = !0
      }, t.disable = function () {
        this._isEnabled = !1
      }, t.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      }, t.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var e = this.constructor.DATA_KEY, n = oe(t.currentTarget).data(e);
          n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
        } else {
          if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
          this._enter(null, this)
        }
      }, t.dispose = function () {
        clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
      }, t.show = function () {
        var e = this;
        if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
        var t = oe.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          oe(this.element).trigger(t);
          var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
          if (t.isDefaultPrevented() || !n) return;
          var i = this.getTipElement(), r = Cn.getUID(this.constructor.NAME);
          i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
          var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            o = this._getAttachment(s);
          this.addAttachmentClass(o);
          var a = !1 === this.config.container ? document.body : oe(this.config.container);
          oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
            placement: o,
            modifiers: {
              offset: {offset: this.config.offset},
              flip: {behavior: this.config.fallbackPlacement},
              arrow: {element: Ce},
              preventOverflow: {boundariesElement: this.config.boundary}
            },
            onCreate: function (t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
            },
            onUpdate: function (t) {
              e._handlePopperPlacementChange(t)
            }
          }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
          var l = function () {
            e.config.animation && e._fixTransition();
            var t = e._hoverState;
            e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e)
          };
          if (oe(this.tip).hasClass(Ee)) {
            var h = Cn.getTransitionDurationFromElement(this.tip);
            oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
          } else l()
        }
      }, t.hide = function (t) {
        var e = this, n = this.getTipElement(), i = oe.Event(this.constructor.Event.HIDE), r = function () {
          e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
        };
        if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
          if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
            var s = Cn.getTransitionDurationFromElement(n);
            oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
          } else r();
          this._hoverState = ""
        }
      }, t.update = function () {
        null !== this._popper && this._popper.scheduleUpdate()
      }, t.isWithContent = function () {
        return Boolean(this.getTitle())
      }, t.addAttachmentClass = function (t) {
        oe(this.getTipElement()).addClass(ue + "-" + t)
      }, t.getTipElement = function () {
        return this.tip = this.tip || oe(this.config.template)[0], this.tip
      }, t.setContent = function () {
        var t = oe(this.getTipElement());
        this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye)
      }, t.setElementContent = function (t, e) {
        var n = this.config.html;
        "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e)
      }, t.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
      }, t._getAttachment = function (t) {
        return _e[t.toUpperCase()]
      }, t._setListeners = function () {
        var i = this;
        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
            return i.toggle(t)
          }); else if (t !== be) {
            var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
            oe(i.element).on(e, i.config.selector, function (t) {
              return i._enter(t)
            }).on(n, i.config.selector, function (t) {
              return i._leave(t)
            })
          }
          oe(i.element).closest(".modal").on("hide.bs.modal", function () {
            return i.hide()
          })
        }), this.config.selector ? this.config = h({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, t._fixTitle = function () {
        var t = typeof this.element.getAttribute("data-original-title");
        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
      }, t._enter = function (t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === me && e.show()
        }, e.config.delay.show) : e.show())
      }, t._leave = function (t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === pe && e.hide()
        }, e.config.delay.hide) : e.hide())
      }, t._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
        return !1
      }, t._getConfig = function (t) {
        return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t
      }, t._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      }, t._cleanTipClass = function () {
        var t = oe(this.getTipElement()), e = t.attr("class").match(fe);
        null !== e && 0 < e.length && t.removeClass(e.join(""))
      }, t._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
      }, t._fixTransition = function () {
        var t = this.getTipElement(), e = this.config.animation;
        null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = oe(this).data(le), e = "object" == typeof n && n;
          if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          }
        })
      }, o(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return ge
        }
      }, {
        key: "NAME", get: function () {
          return ae
        }
      }, {
        key: "DATA_KEY", get: function () {
          return le
        }
      }, {
        key: "Event", get: function () {
          return ve
        }
      }, {
        key: "EVENT_KEY", get: function () {
          return he
        }
      }, {
        key: "DefaultType", get: function () {
          return de
        }
      }]), i
    }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
      return oe.fn[ae] = ce, Se._jQueryInterface
    }, Se),
    On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), He = h({}, Nn.DefaultType, {content: "(string|element|function)"}), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
      HIDE: "hide" + ke,
      HIDDEN: "hidden" + ke,
      SHOW: (Me = "show") + ke,
      SHOWN: "shown" + ke,
      INSERTED: "inserted" + ke,
      CLICK: "click" + ke,
      FOCUSIN: "focusin" + ke,
      FOCUSOUT: "focusout" + ke,
      MOUSEENTER: "mouseenter" + ke,
      MOUSELEAVE: "mouseleave" + ke
    }, Fe = function (t) {
      var e, n;

      function i() {
        return t.apply(this, arguments) || this
      }

      n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
      var r = i.prototype;
      return r.isWithContent = function () {
        return this.getTitle() || this._getContent()
      }, r.addAttachmentClass = function (t) {
        we(this.getTipElement()).addClass(Le + "-" + t)
      }, r.getTipElement = function () {
        return this.tip = this.tip || we(this.config.template)[0], this.tip
      }, r.setContent = function () {
        var t = we(this.getTipElement());
        this.setElementContent(t.find(xe), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me)
      }, r._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content
      }, r._cleanTipClass = function () {
        var t = we(this.getTipElement()), e = t.attr("class").match(je);
        null !== e && 0 < e.length && t.removeClass(e.join(""))
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = we(this).data(Oe), e = "object" == typeof n ? n : null;
          if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          }
        })
      }, o(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return Re
        }
      }, {
        key: "NAME", get: function () {
          return Ne
        }
      }, {
        key: "DATA_KEY", get: function () {
          return Oe
        }
      }, {
        key: "Event", get: function () {
          return Ke
        }
      }, {
        key: "EVENT_KEY", get: function () {
          return ke
        }
      }, {
        key: "DefaultType", get: function () {
          return He
        }
      }]), i
    }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
      return we.fn[Ne] = Pe, Fe._jQueryInterface
    }, Fe), kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
      offset: 10,
      method: "auto",
      target: ""
    }, ze = {offset: "number", method: "string", target: "(string|element)"}, Xe = {
      ACTIVATE: "activate" + Ye,
      SCROLL: "scroll" + Ye,
      LOAD_DATA_API: "load" + Ye + ".data-api"
    }, Je = "dropdown-item", Ze = "active", $e = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    }, tn = "offset", en = "position", nn = function () {
      function n(t, e) {
        var n = this;
        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
          return n._process(t)
        }), this.refresh(), this._process()
      }

      var t = n.prototype;
      return t.refresh = function () {
        var e = this, t = this._scrollElement === this._scrollElement.window ? tn : en,
          r = "auto" === this._config.method ? t : this._config.method, s = r === en ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
          var e, n = Cn.getSelectorFromElement(t);
          if (n && (e = Ve(n)[0]), e) {
            var i = e.getBoundingClientRect();
            if (i.width || i.height) return [Ve(e)[r]().top + s, n]
          }
          return null
        }).filter(function (t) {
          return t
        }).sort(function (t, e) {
          return t[0] - e[0]
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1])
        })
      }, t.dispose = function () {
        Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, t._getConfig = function (t) {
        if ("string" != typeof (t = h({}, qe, "object" == typeof t && t ? t : {})).target) {
          var e = Ve(t.target).attr("id");
          e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e
        }
        return Cn.typeCheckConfig(Qe, t, ze), t
      }, t._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, t._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, t._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, t._process = function () {
        var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), n <= t) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i)
        } else {
          if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
          for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
          }
        }
      }, t._activate = function (e) {
        this._activeTarget = e, this._clear();
        var t = this._selector.split(",");
        t = t.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
        });
        var n = Ve(t.join(","));
        n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {relatedTarget: e})
      }, t._clear = function () {
        Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)
      }, n._jQueryInterface = function (e) {
        return this.each(function () {
          var t = Ve(this).data(Be);
          if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) {
            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
            t[e]()
          }
        })
      }, o(n, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return qe
        }
      }]), n
    }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
      for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
        var n = Ve(t[e]);
        nn._jQueryInterface.call(n, n.data())
      }
    }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
      return Ve.fn[Qe] = Ge, nn._jQueryInterface
    }, nn), Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
      HIDE: "hide" + on,
      HIDDEN: "hidden" + on,
      SHOW: "show" + on,
      SHOWN: "shown" + on,
      CLICK_DATA_API: "click" + on + ".data-api"
    }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
      function i(t) {
        this._element = t
      }

      var t = i.prototype;
      return t.show = function () {
        var n = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
          var t, i, e = rn(this._element).closest(gn)[0], r = Cn.getSelectorFromElement(this._element);
          if (e) {
            var s = "UL" === e.nodeName ? pn : mn;
            i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1]
          }
          var o = rn.Event(ln.HIDE, {relatedTarget: this._element}), a = rn.Event(ln.SHOW, {relatedTarget: i});
          if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
            r && (t = rn(r)[0]), this._activate(this._element, e);
            var l = function () {
              var t = rn.Event(ln.HIDDEN, {relatedTarget: n._element}), e = rn.Event(ln.SHOWN, {relatedTarget: i});
              rn(i).trigger(t), rn(n._element).trigger(e)
            };
            t ? this._activate(t, t.parentNode, l) : l()
          }
        }
      }, t.dispose = function () {
        rn.removeData(this._element, sn), this._element = null
      }, t._activate = function (t, e, n) {
        var i = this, r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
          s = n && r && rn(r).hasClass(fn), o = function () {
            return i._transitionComplete(t, r, n)
          };
        if (r && s) {
          var a = Cn.getTransitionDurationFromElement(r);
          rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
        } else o()
      }, t._transitionComplete = function (t, e, n) {
        if (e) {
          rn(e).removeClass(dn + " " + cn);
          var i = rn(e.parentNode).find(yn)[0];
          i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
        }
        if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
          var r = rn(t).closest(_n)[0];
          r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0)
        }
        n && n()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var t = rn(this), e = t.data(sn);
          if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          }
        })
      }, o(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }]), i
    }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
      t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show")
    }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
      return rn.fn.tab = an, Tn._jQueryInterface
    }, Tn);
  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {value: !0})
});
//# sourceMappingURL=bootstrap.min.js.map

jQuery(document).mousemove(function () {
  if (jQuery("header:hover").length != 0) {
  } else {
    jQuery('.tab_menus_content').hide();
    jQuery('.tab_menu_item').addClass('checkborder');
  }
});

jQuery(document).ready(function ($) {

  jQuery('input[name="quantity"]').change(function () {
    var quan = jQuery(this).val();

    var link = jQuery('#addtobacket').attr('href');

    var catpos = link.indexOf('quantity=')

    link = link.substr(0, catpos);

    link += 'quantity=' + quan;

    jQuery('#addtobacket').attr('href', link)
    console.log(link);
  });

  jQuery('.tab_menu_item').hover(function () {
    jQuery('.tab_menu_item').removeClass('checkborder');
    jQuery(this).addClass('checkborder');
    var datamenu = jQuery(this).attr('data-menu');
    //console.log(datamenu);
    jQuery('.tab_menus_content').hide();
    jQuery('#' + datamenu + '').show();

    jQuery('.menu_block').matchHeight();
  });

  /*jQuery('header .tab_menus .tab_menu_item a').click(function(e){
	    e.preventDefault();
	});*/

  jQuery('.condbox h3').matchHeight();
  jQuery('.episodebox h4').matchHeight();


  jQuery("#nav-menu").mmenu();

  jQuery('.searchtrigger').click(function (e) {
    e.preventDefault();
    jQuery('.search_place').slideToggle();
  });

  jQuery('.scrollink').click(function (e) {
    e.preventDefault();
    var target = jQuery(jQuery(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top - 80;
      jQuery('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
    }
  });


  /**
   * Ajax buy 1 year subscription
   */

  jQuery('.annual_subscription').click(function () {

    let data = {
      action: 'buy_annual_subscription',
      'subscription_type': 'annual'
    };

    jQuery.post(ajaxurl, data, function (response) {
      console.log(response);
    });
  })

  /**
   * Ajax add donation (membership) to cart
   */

  jQuery('#membership_tick_box').click(function () {
    if (this.checked) {
      let data = {
        action: 'make_donation'
      };

      jQuery.post(ajaxurl, data, function (response) {
        jQuery('body').trigger('update_checkout');
        console.log(response);
        jQuery('.membership_notification')
          .html(response)
          .removeClass('notification_hide');
      });
    }
  });


  $("a#subscribe_annual").fancybox();

});