!(function () {
  var e = {
      92903: function (e, t) {
        t.config = {
          type: "production",
          cdn: {
            enabled: { forAssets: !1, forApi: !1 },
            assets: "assetscdn-",
            api: "apicdn-",
            domain: { production: "wchat.freshchat.com" },
            subDomain: "",
            protocol: { production: "https://" },
          },
        };
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = (t[i] = { exports: {} });
    return e[i](r, r.exports, n), r.exports;
  }
  (n.p = "https://assetscdn-wchat.freshchat.com/static/assets/"),
    (function () {
      "use strict";
      var e = {
        SAMPLE_TOKEN: "WEB_CHAT_TOKEN",
        frameDivId: "fc_frame",
        frameId: "fc_widget",
        pushFrameDivId: "fc_push_frame",
        pushFrameId: "fc_push",
        modalDivId: "fc_web_modal",
        classes: { fullscreenClass: "fc-widget-fullscreen" },
        FAQ_EXPAND_WIDTH: 835,
        AJAX_URL: { canary: "/app/services/app/webchat/{token}/canary" },
        canaryRoutes: { feature: "canary", rts: "rtscanary" },
        config: {
          model: "config",
          url: "/app/services/app/webchat/{token}/config?domain={domainName}",
        },
        impostor: {
          getFreshChatConfigs: "get_freshchat_configs",
          activityEvents: [
            "click",
            "dblclick",
            "mousemove",
            "mouseover",
            "mousewheel",
            "mouseout",
            "contextmenu",
            "mousedown",
            "mouseup",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "keydown",
            "keypress",
            "keyup",
            "focus",
            "blur",
            "change",
            "submit",
            "scroll",
            "resize",
          ],
          timeoutForFetchingConfigInMillis: 3e3,
          tagName: "freshchat-widget",
        },
        omniCookieName: "_fw_crm_v",
        eagerLoadBetaFeature: "EAGER_LOAD_ENABLED",
        widgetCssSelector: "/widget/css/widget.css",
        preChatCssSelector: "/css/fc-pre-chat-form-v2.css",
      };
      var t = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var e = !1,
          t = !1,
          n = !1,
          i = !1,
          o = [],
          r = {};
        return {
          isLoaded: function () {
            return e;
          },
          loaded: function (t) {
            e = t;
          },
          isInitialized: function () {
            return t;
          },
          initialized: function (e) {
            t = e;
          },
          isOpened: function () {
            return n;
          },
          opened: function (e) {
            n = e;
          },
          doOpen: function () {
            return i;
          },
          openOnLoad: function (e) {
            i = e;
          },
          getTags: function () {
            return o;
          },
          setTags: function (e) {
            o = e;
          },
          getFaqTags: function () {
            return r;
          },
          setFaqTags: function (e) {
            r = e;
          },
          reset: function () {
            (e = !1), (t = !1), (n = !1), (i = !1), (o = []), (r = {});
          },
        };
      }.bind(void 0)();
      function i(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      var o = function () {
        i(this, undefined);
        var e = null,
          t = null,
          n = null,
          o = null,
          r = null,
          a = !1,
          s = null,
          d = null,
          c = {},
          l = {},
          u = {},
          f = [
            "firstName",
            "lastName",
            "email",
            "phone",
            "phoneCountry",
            "locale",
          ];
        return {
          getIntegrations: function () {
            return c;
          },
          getcampaignRuleIds: function () {
            return d;
          },
          setcampaignRuleIds: function (e) {
            d = e;
          },
          setIntegrations: function (e) {
            c = e;
          },
          getFlowId: function () {
            return n;
          },
          setFlowId: function (e) {
            n = e;
          },
          getFlowVersionId: function () {
            return o;
          },
          setFlowVersionId: function (e) {
            o = e;
          },
          getPreviewMode: function () {
            return r;
          },
          setPreviewMode: function (e) {
            r = e;
          },
          getIsTemplateBot: function () {
            return s;
          },
          setIsTemplateBot: function (e) {
            s = e;
          },
          getExternalId: function () {
            return e;
          },
          setExternalId: function (t) {
            e = t;
          },
          getRestoreId: function () {
            return t;
          },
          setRestoreId: function (e) {
            t = e;
          },
          setIdentifyByReferenceId: function (e) {
            a = e;
          },
          getIdentifyByReferenceId: function () {
            return a;
          },
          getConfig: function () {
            return l;
          },
          setConfig: function (e) {
            l = e;
          },
          getProperties: function () {
            return u;
          },
          setProperties: function (e) {
            var t = this;
            e &&
              (f.forEach(
                function (n) {
                  i(this, t), e[n] && (u[n] = e[n]);
                }.bind(this)
              ),
              e.meta && this.setUserMeta(e.meta));
          },
          setFirstName: function (e) {
            u.firstName = e;
          },
          setLastName: function (e) {
            u.lastName = e;
          },
          setEmail: function (e) {
            u.email = e;
          },
          setPhone: function (e) {
            u.phone = e;
          },
          setPhoneCountry: function (e) {
            u.phoneCountry = e;
          },
          setUserMeta: function (e) {
            if (((u.meta = u.meta || {}), e))
              for (var t in e) e.hasOwnProperty(t) && (u.meta[t] = e[t]);
          },
          setLocale: function (e) {
            u.locale = e;
          },
          reset: function () {
            (e = null), (t = null), (l = {}), (u = {});
          },
          getJSON: function () {
            return {
              externalId: e,
              restoreId: t,
              customConfig: l,
              properties: u,
            };
          },
        };
      }.bind(void 0)();
      var r,
        a,
        s,
        d,
        c,
        l,
        u,
        f,
        h,
        p = function () {
          !(function (e, t) {
            if (e !== t)
              throw new TypeError("Cannot instantiate an arrow function");
          })(this, undefined);
          var e = {},
            t = {},
            n = {},
            i = {};
          return {
            setProperties: function (n) {
              for (var o in n)
                "fc_override_bot_property" !== o && (t[o] = n[o]);
              for (var r in (i = n.fc_override_bot_property)) e[r] = i[r];
              for (var a in e)
                for (var s in t) e[a].hasOwnProperty(s) || (e[a][s] = t[s]);
              e.commonBotsProperties = t;
            },
            getProperties: function () {
              return e;
            },
            reset: function () {
              (e = {}), (n = {});
            },
            setConversationPropertiesMeta: function (e) {
              n = e;
            },
            getConversationPropertiesMeta: function () {
              return n;
            },
          };
        }.bind(void 0)(),
        g = n(92903),
        v = {
          url_domain: function (e) {
            var t = document.createElement("a");
            return (t.href = e), t.origin;
          },
          getElementStyle: function (e, t) {
            return window.getComputedStyle(e)[t];
          },
          setAttr: function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && e.setAttribute(n, t[n]);
            return e;
          },
          remove: function (e) {
            var t = document,
              n = t.body,
              i = t.getElementById(e);
            i && (this.purge(i), n.removeChild(i));
          },
          purge: function (e) {
            var t,
              n,
              i,
              o = e.attributes;
            if (o)
              for (t = o.length - 1; t >= 0; t -= 1)
                "function" == typeof e[(i = o[t].name)] && (e[i] = null);
            if ((o = e.childNodes))
              for (n = o.length, t = 0; t < n; t += 1)
                this.purge(e.childNodes[t]);
          },
          cdn_url: function () {
            if (g && g.config) {
              var e = g.config.type,
                t = g.config.cdn;
              return (
                t.protocol[e] +
                (t.enabled.forAssets ? t.assets : "") +
                t.domain[e]
              );
            }
          },
          bindEvent: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            window.addEventListener
              ? window.addEventListener(e, t, n)
              : window.attachEvent(e, t, n);
          },
          unbindEvent: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            window.removeEventListener
              ? window.removeEventListener(e, t, n)
              : window.detachEvent(e, t, n);
          },
          parseJSON: function (e) {
            var t;
            if (e) {
              try {
                t = JSON.parse(e);
              } catch (e) {}
              return t;
            }
          },
          stringifyJSON: function (e) {
            var t = null;
            if (e) {
              try {
                var n = window.ItilUtil && window.ItilUtil.jsonStringifyWrapper;
                t = (n && "function" == typeof n && n(e)) || JSON.stringify(e);
              } catch (e) {}
              return t;
            }
          },
          storageAvailable: (function (e) {
            var t;
            try {
              var n = "__storage_test__";
              return (
                (t = window.localStorage).setItem(n, n), t.removeItem(n), !0
              );
            } catch (e) {
              return (
                e instanceof DOMException &&
                (22 === e.code ||
                  1014 === e.code ||
                  "QuotaExceededError" === e.name ||
                  "NS_ERROR_DOM_QUOTA_REACHED" === e.name) &&
                0 !== t.length
              );
            }
          })(),
          isPushSupportedByBrowser: function () {
            var e,
              t,
              n,
              i,
              o,
              r,
              a,
              s,
              d = !1,
              c = !1;
            (i = window.chrome),
              (o = window.navigator),
              (r = o.vendor),
              (a = o.userAgent.indexOf("OPR") > -1),
              (s = o.userAgent.indexOf("Edge") > -1),
              null != i &&
                "Google Inc." === r &&
                !1 === a &&
                !1 === s &&
                (e =
                  !!(n = navigator.userAgent.match(
                    /Chrom(e|ium)\/([0-9]+)\./
                  )) && parseInt(n[2], 10)) &&
                (d = e >= 50),
              navigator.userAgent.toLowerCase().indexOf("firefox") > -1 &&
                ((t = (function () {
                  var e = navigator.userAgent,
                    t = e.indexOf("Firefox"),
                    n = e.substring(t + 8).split(".");
                  return !(!n || !n.length) && parseInt(n[0], 10);
                })()),
                t && (c = t >= 44));
            var l = "serviceWorker" in navigator,
              u = (function () {
                var e = !1;
                try {
                  ServiceWorkerRegistration &&
                    "showNotification" in ServiceWorkerRegistration.prototype &&
                    (e = !0);
                } catch (e) {}
                return e;
              })(),
              f = "PushManager" in window;
            return l && u && f && (d || c);
          },
          getAgent:
            ((c = navigator.appVersion),
            (l = navigator.userAgent),
            (u = navigator.appName),
            (f = "" + parseFloat(c)),
            (h = parseInt(c, 10)),
            -1 !== l.indexOf("Station") && (d = "Station"),
            -1 !== (a = l.indexOf("Opera"))
              ? ((u = "Opera"),
                (f = l.substring(a + 6)),
                -1 !== (a = l.indexOf("Version")) && (f = l.substring(a + 8)))
              : -1 !== (a = l.indexOf("MSIE"))
              ? ((u = "Microsoft Internet Explorer"), (f = l.substring(a + 5)))
              : -1 !== (a = l.indexOf("Edge"))
              ? ((u = "Edge"), (f = l.substring(a + 5)))
              : -1 !== (a = l.indexOf("Trident"))
              ? ((u = "Trident"), (f = l.substring(a + 8)))
              : -1 !== (a = l.indexOf("Chrome"))
              ? ((u = "Chrome"), (f = l.substring(a + 7)))
              : -1 !== (a = l.indexOf("Safari"))
              ? ((u = "Safari"),
                (f = l.substring(a + 7)),
                -1 !== (a = l.indexOf("Version")) && (f = l.substring(a + 8)))
              : -1 !== (a = l.indexOf("Firefox"))
              ? ((u = "Firefox"), (f = l.substring(a + 8)))
              : ("MacIntel" === navigator.platform &&
                  navigator.maxTouchPoints > 1) ||
                -1 !== l.indexOf("iPad") ||
                -1 !== l.indexOf("iPhone") ||
                -1 !== l.indexOf("iPod") ||
                -1 !== l.indexOf("wv")
              ? ((u = "WebView"), (f = l.substring(a + 8)))
              : (r = l.lastIndexOf(" ") + 1) < (a = l.lastIndexOf("/")) &&
                ((u = l.substring(r, a)),
                (f = l.substring(a + 1)),
                u.toLowerCase() === u.toUpperCase() && (u = navigator.appName)),
            -1 !== (s = f.indexOf(";")) && (f = f.substring(0, s)),
            -1 !== (s = f.indexOf(" ")) && (f = f.substring(0, s)),
            (h = parseInt("" + f, 10)),
            isNaN(h) && ((f = "" + parseFloat(c)), (h = parseInt(c, 10))),
            {
              name: u,
              appName: d,
              version: h,
              versionx: f,
              os: navigator.platform,
            }),
          isSafariBrowser: function () {
            return !(!this.getAgent || "Safari" !== this.getAgent.name);
          },
        };
      function m(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      var w = function () {
        m(this, undefined);
        var t = null,
          n = null,
          i = null,
          r = null,
          a = null,
          s = null,
          d = null,
          c = !1,
          l = !1,
          u = null,
          f = !1,
          h = null,
          p = null,
          g = null,
          w = null,
          b = !1,
          y = null,
          C = null,
          k = ["get_user_uuid"],
          _ = null,
          E = null,
          x = null;
        return {
          getHost: function () {
            return s;
          },
          getToken: function () {
            return n;
          },
          getWidgetUuid: function () {
            return i;
          },
          getReferrer: function () {
            return r;
          },
          getSiteId: function () {
            return a;
          },
          getSettings: function () {
            return d;
          },
          getJsFunctions: function () {
            return E;
          },
          setSettings: function (e) {
            (c = !!(
              (d = e).userAuthConfig &&
              d.userAuthConfig.jwtAuthEnabled &&
              d.userAuthConfig.strictModeEnabled
            )),
              (l = !(!d.userAuthConfig || !d.userAuthConfig.jwtAuthEnabled));
          },
          isJWTStrictMode: function () {
            return c;
          },
          isJWTEnabled: function () {
            return l;
          },
          getJWTAuthToken: function () {
            return u;
          },
          setJWTAuthToken: function (e) {
            u = e;
          },
          isLoaded: function () {
            return f;
          },
          loaded: function (e) {
            f = e;
          },
          loadingActions: function () {
            return k;
          },
          getConversationRefId: function () {
            return x;
          },
          init: function (e) {
            (n = e.token),
              (i = e.widgetUuid),
              (r = e.referrer),
              (s = e.host),
              (a = e.siteId),
              (c = !1),
              (l = !1),
              (u = e.jwtAuthToken),
              (f = !1),
              (h = e.flowId),
              (p = e.flowVersionId),
              (w = e.isTemplateBot),
              (g = e.previewMode),
              (b = e.isPostAgentResolutionEnabled),
              (y = e.cspNonce),
              (C = e.omniCookie),
              (_ = e.eagerLoad),
              (E = e.jsFunctions || {}),
              (x = e.conversationReferenceId);
          },
          reset: function () {
            (n =
              i =
              r =
              s =
              a =
              c =
              l =
              u =
              f =
              h =
              p =
              g =
              C =
              w =
              x =
                void 0),
              (d = null);
          },
          getJSON: function () {
            return {
              token: n,
              flowId: h,
              widgetUuid: i,
              flowVersionId: p,
              previewMode: g,
              isTemplateBot: w,
              isPostAgentResolutionEnabled: b,
              referrer: r,
              host: s,
              siteId: a,
              jwtStrictMode: c,
              jwtEnabled: l,
              jwtAuthToken: u,
              loaded: f,
              omniCookie: C,
              conversationReferenceId: x,
            };
          },
          load: function (e, n, i) {
            if (v.isSafariBrowser() && y) {
              var o = document.createElement("script");
              (o.nonce = y),
                (o.textContent = 'window.location = "'.concat(e, '"')),
                (t = i.contentWindow),
                i.contentDocument.body.appendChild(o);
            } else t = window.open(e, n);
          },
          postMessage: function (e) {
            t && t.postMessage(e, s);
          },
          dispatch: function (e, t) {
            e && t && "function" == typeof e && e(t);
          },
          unload: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.postMessage({
              action: "push_subscribe_destroy",
              payload: { isClearIndexDB: e },
            });
          },
          add: function () {
            var t = document,
              n = t.body,
              i = t.getElementById(e.frameDivId),
              r = t.createElement("IFRAME"),
              a = o.getConfig(),
              s = a && a.cssNames;
            (i && "DIV" === i.tagName) ||
              ((i = t.createElement("DIV")), n.appendChild(i)),
              v.setAttr(i, { id: e.frameDivId, class: (s && s.widget) || "" }),
              i.classList.add("fc_dn"),
              a && a.headerProperty
                ? ("ltr" === a.headerProperty.direction &&
                    i.classList.add("fc_l2r"),
                  a.headerProperty.hideChatButton ||
                    i.classList.remove("fc_dn"))
                : i.classList.remove("fc_dn"),
              v.setAttr(r, {
                id: e.frameId,
                name: e.frameId,
                title: "Chat",
                frameborder: "0",
                allowFullScreen: "true",
                webkitallowfullscreen: "true",
                mozallowfullscreen: "true",
              }),
              i.appendChild(r);
            var d = a && a.widgetCanary ? e.canaryRoutes.feature : "";
            this.loadCanaryWidget(d, r);
          },
          loadRTSCanaryWidget: function (t) {
            var i = this,
              o = new XMLHttpRequest(),
              r = e.AJAX_URL.canary.replace("{token}", n);
            (r = s + r),
              o.open("GET", r, !0),
              (o.onreadystatechange = function () {
                if ((m(this, i), 4 === o.readyState)) {
                  var n = v.parseJSON(o.response),
                    r = n && n.canary_enabled ? e.canaryRoutes.rts : "";
                  this.loadCanaryWidget(r, t);
                }
              }.bind(this)),
              o.send();
          },
          loadCanaryWidget: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              o = arguments.length > 1 ? arguments[1] : void 0,
              a = "";
            (a =
              !g || ("botflow" !== g && "autofaq" !== g)
                ? ""
                    .concat(s, "/widget/")
                    .concat(t, "?token=")
                    .concat(n, "&referrer=")
                    .concat(r)
                : ""
                    .concat(s, "/widget/")
                    .concat(t, "?token=")
                    .concat(n, "&referrer=")
                    .concat(r, "&previewMode=")
                    .concat(g)),
              i && (a += "&widgetUuid=".concat(i)),
              _ && (a += "&eagerLoad=true"),
              this.load(a, e.frameId, o);
          },
          remove: function (e) {
            v.remove(e), (t = null);
          },
          setFrameSize: function () {
            var t,
              n = this.getSettings(),
              i = o.getConfig();
            if (null === n) return "";
            var r =
                null == n || null === (t = n.appearanceConfig) || void 0 === t
                  ? void 0
                  : t.widgetSize,
              a = !(!i || !i.fullscreen) && i.fullscreen,
              s = "fc-widget-normal",
              d = document.getElementById(e.frameDivId);
            !0 === a && d.classList.add(e.classes.fullscreenClass),
              r && r.length > 0 && (s = "fc-widget-" + r.toLowerCase()),
              d.classList.add(s);
          },
          setFramePosition: function () {
            var t,
              n,
              i,
              o,
              r = this.getSettings(),
              a = document.getElementById(e.frameDivId),
              s =
                "BOTTOM_LEFT" ===
                (null == r || null === (t = r.appearanceConfig) || void 0 === t
                  ? void 0
                  : t.widgetPosition),
              d =
                null == r || null === (n = r.appearanceConfig) || void 0 === n
                  ? void 0
                  : n.widgetBottomOffsetPx,
              c =
                null == r || null === (i = r.appearanceConfig) || void 0 === i
                  ? void 0
                  : i.widgetRightOffsetPx;
            if (
              "TEXT" ===
              (null == r || null === (o = r.appearanceConfig) || void 0 === o
                ? void 0
                : o.widgetLauncherStyle)
            ) {
              var l,
                u = document.createElement("span");
              (u.innerText =
                null == r || null === (l = r.appearanceConfig) || void 0 === l
                  ? void 0
                  : l.widgetLauncherValue),
                (u.id = "fc-chat-temp-text"),
                (u.style.cssText =
                  '\n          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;\n          font-size: 14px;\n          font-weight:500;\n          white-space: nowrap;\n          visibility: hidden;\n          position: absolute;\n          bottom: 0px;\n        '),
                a.parentNode.appendChild(u);
              var f = document.createElement("style");
              (f.innerHTML = "#fc_frame.fc-launcher-text{width: ".concat(
                u.offsetWidth + 60,
                "px}"
              )),
                a.parentNode.appendChild(f),
                a.parentNode.removeChild(u),
                a.classList.add("fc-launcher-text");
            }
            (a.style.bottom = "".concat(d || 15, "px")),
              s
                ? (a.classList.add("fc-widget-left"),
                  (a.style.left = "".concat(c || 15, "px")))
                : (a.style.right = "".concat(c || 15, "px"));
          },
          setWidgetDisplayStyle: function () {
            var t = document.body,
              n = document.getElementById(e.frameDivId),
              i = v.getElementStyle(t, "display");
            i &&
              -1 !== ["flex"].indexOf(i) &&
              n.style.setProperty("display", i);
          },
        };
      }.bind(void 0)();
      var b = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var e = [],
          t = !1;
        return {
          enque: function (n) {
            t || (void 0 === e && (e = []), e.push(n));
          },
          deque: function () {
            if (e && e.length) return e.shift();
          },
          toggleLock: function (e) {
            t = e;
          },
          isLocked: function () {
            return t;
          },
          isEmpty: function () {
            return !e || !e.length;
          },
        };
      }.bind(void 0)();
      var y = function () {
          !(function (e, t) {
            if (e !== t)
              throw new TypeError("Cannot instantiate an arrow function");
          })(this, undefined);
          var e = {};
          return {
            subscribe: function (n, i, o) {
              t.isLoaded() ||
              (w.isLoaded() &&
                -1 !== w.loadingActions().indexOf("get_user_uuid"))
                ? ((e[n + "_ack"] = o),
                  w.postMessage({ action: n, payload: i }))
                : b.enque({ action: n, payload: i, handler: o });
            },
            publish: function (t, n) {
              w.dispatch(e[t], {
                success: n.success,
                status: n.status,
                data: n.data,
              });
            },
          };
        }.bind(void 0)(),
        C = function (e, t) {
          return new Promise(function (n, i) {
            y.subscribe(e, t, function (e) {
              var t = e && e.status,
                o = e && e.success;
              200 === t || o ? n(e) : i(e);
            });
          });
        },
        k = function (e, t, n) {
          t && "function" == typeof t && ((n = t), (t = null)),
            y.subscribe(e, t, n);
        },
        _ = function (e) {
          return !(!e || "function" != typeof e);
        };
      var E = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var e = {},
          t = [
            "widget:opened",
            "widget:closed",
            "widget:loaded",
            "dialog:opened",
            "dialog:closed",
            "widget:destroyed",
            "frame:statechange",
            "user:statechange",
            "user:created",
            "user:cleared",
            "user:authenticated",
            "message:sent",
            "message:received",
            "conversation:resolved",
            "unreadCount:notify",
            "push:subscribed",
            "readReceipts:update",
            "csat:received",
            "csat:updated",
            "csat:show",
            "anchorLink:clicked",
            "faq:clicked",
            "download:file",
            "rts:connected",
            "rts:disconnected",
          ];
        return {
          clear: function () {
            e = {};
          },
          valid: function (e) {
            return !(!e || !t) && -1 !== t.indexOf(e);
          },
          subscribe: function (t, n) {
            this.valid(t) && (void 0 === e[t] && (e[t] = []), e[t].push(n));
          },
          unsubscribe: function (t, n) {
            if (this.valid(t)) {
              var i,
                o = e && e[t];
              if (o)
                for (var r = 0, a = o.length; r < a; r++)
                  if (((i = o[r]), _(i) && (!n || i.name === n.name))) {
                    e[t].splice(r, 1);
                    break;
                  }
            }
          },
          publish: function (t, n, i) {
            if (this.valid(t)) {
              var o = e && e[t];
              if (o)
                for (
                  var r = function (e) {
                      return function () {
                        n ? e(n) : e();
                      };
                    },
                    a = 0,
                    s = o.length;
                  a < s;
                  a++
                ) {
                  var d = r(o[a]);
                  i ? setTimeout(d, 0) : d();
                }
              if ("function" == typeof window.CustomEvent) {
                var c = new CustomEvent("fwcrm_event_consume", {
                  detail: { name: t, origin: window.origin, args: n },
                });
                window.dispatchEvent(c);
              }
            }
          },
        };
      }.bind(void 0)();
      var x = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var t = null,
          n = null,
          i = null,
          o = !1,
          r = null,
          a = null,
          s = null;
        return {
          isLoaded: function () {
            return o;
          },
          loaded: function (e) {
            o = e;
          },
          getSource: function () {
            return s;
          },
          setSource: function (e) {
            s = e;
          },
          getHost: function () {
            return t;
          },
          getHostOrigin: function () {
            return n;
          },
          getLogoPath: function () {
            return i;
          },
          init: function (e) {
            (t = e.host),
              (n = e.hostOrigin),
              (i = e.appLogoPath),
              (r = e.locale),
              (a = e.sales360App),
              this.load();
          },
          reset: function () {
            (t = null),
              (n = null),
              (i = null),
              (r = null),
              (a = null),
              (o = !1),
              (s = null);
          },
          postMessage: function (e) {
            e.openWindow
              ? window.open(
                  t +
                    "&action=" +
                    btoa(e.action) +
                    "&appLogoPath=" +
                    btoa(i) +
                    "&locale=" +
                    btoa(r) +
                    "&sales360App=" +
                    btoa(a),
                  "_blank",
                  "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
                )
              : o && this.post({ action: e.action, payload: e.payload });
          },
          post: function (e) {
            s.postMessage(e, n);
          },
          add: function () {
            var n = document,
              i = n.body,
              o = n.getElementById(e.pushFrameDivId),
              r = n.createElement("IFRAME");
            (o && "DIV" === o.tagName) ||
              ((o = n.createElement("DIV")), i.appendChild(o)),
              o.setAttribute("id", e.pushFrameDivId),
              v.setAttr(r, {
                id: e.pushFrameId,
                src: t,
                title: "Chat",
                frameborder: "0",
              }),
              o.appendChild(r);
          },
          load: function () {
            v.isPushSupportedByBrowser() && this.add();
          },
          unload: function () {
            v.remove(e.pushFrameDivId), this.reset();
          },
        };
      }.bind(void 0)();
      var I = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var t = function (e) {
          27 === e.keyCode && this.destroy();
        };
        return {
          create: function (n) {
            var i = document,
              o = i.body,
              r = i.createElement("DIV"),
              a = i.createElement("IMG"),
              s = i.createElement("DIV"),
              d = i.createElement("DIV");
            r.setAttribute("id", e.modalDivId),
              (r.onclick = this.destroy),
              a.setAttribute("src", n),
              (a.onclick = this.destory),
              d.appendChild(a),
              (d.className = "image-cell"),
              s.appendChild(d),
              (s.className = "image-wrapper"),
              r.appendChild(s),
              o.appendChild(r),
              window.addEventListener
                ? window.addEventListener("keydown", t.bind(this), !1)
                : window.attachEvent("keydown", t.bind(this), !1);
          },
          destroy: function () {
            var n = document,
              i = n.body,
              o = n.getElementById(e.modalDivId);
            o && (v.purge(o), i.removeChild(o)),
              window.removeEventListener
                ? window.removeEventListener("keydown", t.bind(this))
                : window.detachEvent("keydown", t.bind(this));
          },
        };
      }.bind(void 0)();
      var L = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var e = {},
          t = "_fc_observer";
        return {
          attach: function (n, i, o) {
            var r = "".concat(i).concat(t);
            n[i] &&
              o &&
              (void 0 === n[r] || n[r] !== o) &&
              ((n[r] = o),
              (function (n, i) {
                (e[i] = n[i]),
                  (n[i] = function () {
                    var o = e[i].apply(n, arguments),
                      r = n["".concat(i).concat(t)];
                    return "function" == typeof r && r(), o;
                  });
              })(n, i));
          },
          detach: function (n, i) {
            var o = "".concat(i).concat(t);
            n[i] &&
              n[o] &&
              ((n[o] = void 0),
              (function (t, n) {
                e[n] && (delete t[n], (t[n] = e[n]), delete e[n]);
              })(n, i));
          },
        };
      }.bind(void 0)();
      var P = function () {
        !(function (e, t) {
          if (e !== t)
            throw new TypeError("Cannot instantiate an arrow function");
        })(this, undefined);
        var e,
          t,
          n,
          i = function (i) {
            (e = i.oldValue),
              (t = i.newValue),
              (n = i.title),
              w.postMessage({
                action: "track_location",
                payload: { pageUrl: i },
              });
          },
          o = function () {
            var o = window.location.href;
            t !== o &&
              ((e = t),
              (t = o),
              (n = document.title),
              i({ oldValue: e, newValue: t, title: n }));
          };
        return {
          start: function () {
            (t = window.location.href),
              i({ newValue: t, title: document.title }),
              L.attach(window.history, "pushState", o),
              L.attach(window.history, "replaceState", o),
              window.addEventListener
                ? (window.addEventListener("hashchange", o, !1),
                  window.addEventListener("popstate", o, !1))
                : (window.attachEvent("hashchange", o, !1),
                  window.attachEvent("popstate", o, !1));
          },
          stop: function () {
            (e = t = void 0),
              L.detach(window.history, "pushState"),
              L.detach(window.history, "replaceState"),
              window.removeEventListener
                ? (window.removeEventListener("hashchange", o),
                  window.removeEventListener("popstate", o))
                : (window.detachEvent("hashchange", o),
                  window.detachEvent("popstate", o));
          },
          track: i,
        };
      }.bind(void 0)();
      function T(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      var O = function () {
          var e = this;
          T(this, undefined);
          var t = null,
            n = null,
            i = null,
            o = function () {
              T(this, e),
                w.postMessage({
                  action: "track_activity",
                  payload: { seen: n },
                });
            }.bind(this),
            r = function () {
              T(this, e), (n = new Date().getTime());
            }.bind(this),
            a = function (t) {
              T(this, e),
                v.unbindEvent("keypress", r),
                v.unbindEvent("mousemove", r),
                v.unbindEvent("click", r),
                t &&
                  (v.bindEvent("keypress", r),
                  v.bindEvent("mousemove", r),
                  v.bindEvent("click", r));
            }.bind(this),
            s = function () {
              T(this, e);
              var r = new Date().getTime();
              null === i ||
                null === n ||
                (t &&
                  (r < t || n < t || r - t < 59e3 || (n > t && n < r && o()))),
                (t = r);
            }.bind(this),
            d = function () {
              T(this, e),
                i && clearInterval(i),
                (i = null),
                (n = null),
                (t = null);
            }.bind(this),
            c = function () {
              T(this, e),
                d(),
                a(!0),
                (t = new Date().getTime()),
                (i = setInterval(s, 6e4));
            }.bind(this),
            l = function () {
              T(this, e), (n = new Date().getTime()), o(), d(), a(!1);
            }.bind(this),
            u = function () {
              T(this, e), "hidden" === document.visibilityState && l();
            }.bind(this);
          return {
            start: function () {
              c(),
                v.bindEvent("focus", c),
                v.bindEvent("blur", l),
                v.bindEvent("beforeunload", l),
                v.bindEvent("visibilitychange", u);
            },
            stop: function () {
              l(),
                v.unbindEvent("focus", c),
                v.unbindEvent("blur", l),
                v.unbindEvent("beforeunload", l),
                v.unbindEvent("visibilitychange", u);
            },
          };
        }.bind(void 0)(),
        S = function () {
          P.start(), O.start();
        },
        B = function () {
          P.stop(), O.stop();
        };
      function M(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      var D = {
        start: function () {
          b.isEmpty() || b.isLocked() || (b.toggleLock(!0), this.run());
        },
        run: function () {
          var e = b.deque();
          e ? this.process(e) : b.toggleLock(!1);
        },
        process: function (e) {
          var t = this;
          e.handler
            ? y.subscribe(
                e.action,
                e.payload,
                function (n) {
                  M(this, t),
                    "function" == typeof e.handler && e.handler(n),
                    this.run();
                }.bind(this)
              )
            : (y.subscribe(e.action, e.payload),
              setTimeout(
                function () {
                  M(this, t), this.run();
                }.bind(this),
                0
              ));
        },
      };
      var F = function () {
          return (
            (function (e, t) {
              if (e !== t)
                throw new TypeError("Cannot instantiate an arrow function");
            })(this, undefined),
            {
              init: function (e) {
                var t = document.createElement("script"),
                  n = e.host;
                (t.type = "text/javascript"),
                  (t.src = n + "/widget/js/co-browsing.js"),
                  (document.body
                    ? document.body
                    : document.getElementsByTagName("head")[0]
                  ).appendChild(t),
                  (window.fc_cobrowse = { host: e.host, locale: e.locale });
              },
            }
          );
        }.bind(void 0)(),
        N = {
          setCookie: function (t) {
            var n,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e.omniCookieName;
            null === (n = window.zargetCookie) ||
              void 0 === n ||
              n.setCookie(i, t);
          },
          removeCookie: function () {
            var t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : e.omniCookieName;
            null === (t = window.zargetCookie) ||
              void 0 === t ||
              t.removeCookie(n);
          },
          getCookie: function () {
            var t, n;
            return null === (t = window.zargetCookie) ||
              void 0 === t ||
              null === (n = t.getCookies()) ||
              void 0 === n
              ? void 0
              : n[e.omniCookieName];
          },
          generateUUID: function () {
            var e = new Date().getTime(),
              t =
                (performance && performance.now && 1e3 * performance.now()) ||
                0;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (n) {
                var i = 16 * Math.random();
                return (
                  e > 0
                    ? ((i = (e + i) % 16 | 0), (e = Math.floor(e / 16)))
                    : ((i = (t + i) % 16 | 0), (t = Math.floor(t / 16))),
                  ("x" == n ? i : (7 & i) | 8).toString(16)
                );
              }
            );
          },
        },
        A = N;
      function W(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var i,
              o,
              r = [],
              a = !0,
              s = !1;
            try {
              for (
                n = n.call(e);
                !(a = (i = n.next()).done) &&
                (r.push(i.value), !t || r.length !== t);
                a = !0
              );
            } catch (e) {
              (s = !0), (o = e);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return R(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function j(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      function U(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var V = {
          onMessageCB: (function () {
            var e;
            return function () {
              return e || (e = this.onMessage.bind(this));
            };
          })(),
          onCustomEventCB: (function () {
            var e;
            return function () {
              return e || (e = this.onCustomMessage.bind(this));
            };
          })(),
          onVisibilityChangeCB: (function () {
            var e;
            return function () {
              return e || (e = this.onVisibilityChange.bind(this));
            };
          })(),
          subscribe: function () {
            window.addEventListener
              ? (window.addEventListener("message", this.onMessageCB(), !1),
                window.addEventListener(
                  "focus",
                  this.onVisibilityChangeCB(),
                  !1
                ),
                window.addEventListener(
                  "blur",
                  this.onVisibilityChangeCB(),
                  !1
                ))
              : (window.attachEvent("onmessage", this.onMessageCB()),
                window.attachEvent("focus", this.onVisibilityChangeCB()),
                window.attachEvent("blur", this.onVisibilityChangeCB())),
              this.subscribeSales360Event();
          },
          unsubscribe: function () {
            window.removeEventListener
              ? (window.removeEventListener("message", this.onMessageCB(), !1),
                window.removeEventListener(
                  "focus",
                  this.onVisibilityChangeCB(),
                  !1
                ),
                window.removeEventListener(
                  "blur",
                  this.onVisibilityChangeCB(),
                  !1
                ))
              : (window.detachEvent("onmessage", this.onMessageCB()),
                window.detachEvent("focus", this.onVisibilityChangeCB()),
                window.detachEvent("blur", this.onVisibilityChangeCB())),
              this.unsubscribeSales360Event();
          },
          subscribeSales360Event: function () {
            window.addEventListener
              ? window.addEventListener(
                  "fwcrm_event",
                  this.onCustomEventCB(),
                  !1
                )
              : window.attachEvent("fwcrm_event", this.onCustomEventCB());
          },
          unsubscribeSales360Event: function () {
            window.removeEventListener
              ? window.removeEventListener(
                  "fwcrm_event",
                  this.onCustomEventCB(),
                  !1
                )
              : window.detachEvent("fwcrm_event", this.onCustomEventCB());
          },
          onVisibilityChange: function (e) {
            switch (e.type) {
              case "focus":
                w.postMessage({ action: "widget_focus" });
                break;
              case "blur":
                w.postMessage({
                  action: "widget_blur",
                  payload: {
                    title: document.title,
                    location: window.location.href,
                  },
                }),
                  x.postMessage({
                    action: "widget_location",
                    openWindow: !1,
                    payload: window.location.href,
                  });
            }
          },
          onUserCreate: function (e) {
            E.publish("user:created", e);
          },
          loadWidget: function () {
            if (!1 === t.isInitialized()) {
              t.initialized(!0);
              var e = w.getJSON(),
                n = o.getProperties(),
                i = o.getConfig(),
                r = t.getTags(),
                a = t.getFaqTags(),
                s = p.getProperties(),
                d = p.getConversationPropertiesMeta();
              if (
                ((e.integrations = o.getIntegrations()),
                (e.campaignRuleIds = o.getcampaignRuleIds()),
                (e.externalId = o.getExternalId()),
                (e.restoreId = o.getRestoreId()),
                (e.flowId = o.getFlowId()),
                (e.flowVersionId = o.getFlowVersionId()),
                (e.previewMode = o.getPreviewMode()),
                (e.isTemplateBot = o.getIsTemplateBot()),
                (e.identifyByReferenceId = o.getIdentifyByReferenceId()),
                n && (e.properties = n),
                s && (e.botsMeta = s),
                d && (e.conversationPropertiesMeta = d),
                i && (e.config = i),
                r && (e.tags = r),
                a && (e.faqTags = a),
                (e.userAgent = v.getAgent),
                v.storageAvailable)
              ) {
                var c = e.token,
                  l = localStorage.getItem(c),
                  u = e.siteId
                    ? "".concat(e.token, "_").concat(e.siteId)
                    : null,
                  f = u ? localStorage.getItem(u) : null;
                if (
                  ((l || (u && f)) &&
                    ((e.storage = {}),
                    (e.storage[c] = l || JSON.stringify({})),
                    u && (e.storage[u] = f || JSON.stringify({}))),
                  i && i.overrideDS)
                ) {
                  var h = "lsds_".concat(u || c),
                    g = localStorage.getItem(h);
                  g
                    ? (e.lsds = U({}, h, g))
                    : ((e.lsds = U({}, h, JSON.stringify({}))),
                      (e.migrateLFDS = !0));
                }
              }
              w.setFrameSize(),
                w.setFramePosition(),
                w.setWidgetDisplayStyle(),
                w.postMessage({ action: "load_widget", payload: e });
            }
          },
          removeWidgetCss: function () {
            var t = this;
            document.head
              .querySelectorAll(
                'link[href*="'
                  .concat(e.widgetCssSelector, '"], link[href*="')
                  .concat(e.preChatCssSelector, '"]')
              )
              .forEach(
                function (e) {
                  return j(this, t), document.head.removeChild(e);
                }.bind(this)
              );
          },
          unloadWidget: function () {
            x.isLoaded() && x.unload(),
              t.reset(),
              o.reset(),
              p.reset(),
              B(),
              w.reset(),
              w.remove(e.frameDivId),
              this.unsubscribe(),
              this.removeWidgetCss(),
              E.publish("widget:destroyed", null, !0),
              E.clear();
          },
          updateFrameSettings: function (e) {
            if (null !== w.getSettings() || void 0 === e) return !1;
            w.setSettings(e);
          },
          onCustomMessage: function (e) {},
          onMessage: function (n) {
            var i = this,
              r = n.origin || n.originalEvent.origin,
              a = o.getConfig(),
              s = a && a.cssNames;
            if (r === w.getHost() || r === x.getHostOrigin()) {
              var d = n.data,
                c = d && d.action;
              if ((this.updateFrameSettings(d.settingsPayload), c)) {
                var l,
                  u,
                  f = document.getElementById(e.frameDivId),
                  h = (s && s.expanded) || "expanded",
                  p = w.getSettings(),
                  g =
                    null == p ||
                    null === (l = p.appearanceConfig) ||
                    void 0 === l
                      ? void 0
                      : l.widgetRightOffsetPx,
                  m =
                    "BOTTOM_LEFT" ===
                    (null == p ||
                    null === (u = p.appearanceConfig) ||
                    void 0 === u
                      ? void 0
                      : u.widgetPosition);
                switch (c) {
                  case "push_subscribe_destroy_response":
                    this.unloadWidget();
                    break;
                  case "TRIGGER_JS_FUNCTION":
                    var b,
                      C =
                        null === (b = d.data.functionName) || void 0 === b
                          ? void 0
                          : b.replace("options.", ""),
                      k = w.getJsFunctions()[C],
                      _ = k && k.call(this, JSON.parse(d.data.params));
                    (d.data.value =
                      "string" == typeof _ ? _ : JSON.stringify(_)),
                      w.postMessage(d);
                    break;
                  case "OPEN_URL":
                    w.postMessage(d), window.open(d.data.url, d.data.target);
                    break;
                  case "push_user_meta":
                    E.publish("push:subscribed", d.data), w.postMessage(d);
                    break;
                  case "toggle_dialog":
                    d.data
                      ? E.publish("dialog:opened")
                      : E.publish("dialog:closed");
                    break;
                  case "reset_user_cookie":
                    A.removeCookie(),
                      w.postMessage({
                        action: "update_cookie",
                        payload: { omniCookie: A.getCookie() },
                      });
                    break;
                  case "restore_user_cookie":
                    A.removeCookie(),
                      A.setCookie(d.alias),
                      w.postMessage({
                        action: "restore_cookie",
                        payload: { alias: d.alias },
                      });
                    break;
                  case "notify_frame":
                    var L = d.data,
                      P = document.getElementById(e.frameDivId),
                      T = (s && s.open) || "fc-open";
                    "expand" === L
                      ? (P.style.removeProperty("max-height"),
                        P.style.removeProperty("height"),
                        P.classList.add("h-open-notify"),
                        P.classList.add(T),
                        P.classList.add(L))
                      : "close" === L
                      ? (P.style.removeProperty("max-height"),
                        P.style.removeProperty("height"),
                        P.classList.remove("h-open-notify"),
                        P.classList.remove(T),
                        P.classList.remove("expand"))
                      : "mobile-view" === L
                      ? P.classList.add("fc-mobile-view")
                      : (P.classList.add("h-open-notify"), P.classList.add(T));
                    break;
                  case "resize_frame":
                    var O = document.getElementsByTagName("BODY")[0],
                      B = (s && s.open) || "fc-open";
                    t.opened(d.isOpen),
                      t.isOpened()
                        ? (f.classList.add("h-open-container"),
                          f.classList.add(B),
                          f.classList.add("widget-open-animate"),
                          E.publish("widget:opened"),
                          setTimeout(
                            function () {
                              j(this, i),
                                f.classList.remove("widget-open-animate");
                            }.bind(this),
                            1e3
                          ),
                          O && O.classList.add("fc-widget-open"))
                        : (f.style.removeProperty("max-height"),
                          f.style.removeProperty("height"),
                          f.classList.remove("h-open-container"),
                          f.classList.remove(B),
                          E.publish("widget:closed"),
                          O && O.classList.remove("fc-widget-open"));
                    break;
                  case "toggle_frame":
                    d.show
                      ? f.classList.remove("hide")
                      : -1 === f.className.trim().indexOf("hide") &&
                        f.classList.add("hide");
                    break;
                  case "push_frame_loaded":
                    x.loaded(!0),
                      x.setSource(n && n.source),
                      x.postMessage({
                        action: "widget_location",
                        openWindow: !1,
                        payload: window.location.href,
                      }),
                      w.postMessage({
                        action: "widget_location",
                        payload: {
                          title: document.title,
                          location: window.location.href,
                        },
                      });
                    break;
                  case "frame_state_change":
                    var M = document.getElementById(e.frameDivId),
                      N = d && d.data,
                      R = N && N.frameState,
                      U = w.getSettings() && w.getSettings().enabledFeatures,
                      V = o.getConfig();
                    E.publish("frame:statechange", d),
                      "initialized" === R &&
                        (w.isJWTEnabled() &&
                          w.isJWTStrictMode() &&
                          M.classList.add("fc_dn"),
                        null != V &&
                          V.eagerLoad &&
                          M.style.setProperty("display", "none"),
                        this.loadWidget(),
                        U &&
                          -1 !== U.indexOf("COBROWSING") &&
                          F.init({
                            host: w.getHost(),
                            locale: o.getProperties().locale,
                          })),
                      "loaded" === R && w.loaded(!0),
                      ("authenticated" !== R && "not_authenticated" !== R) ||
                        (w.isJWTEnabled() &&
                          w.isJWTStrictMode() &&
                          (d.success
                            ? M.classList.remove("fc_dn")
                            : 304 !== d.status && this.unloadWidget()));
                    break;
                  case "widget_loaded":
                    t.loaded(!0), E.publish("widget:loaded");
                    var q = o.getConfig(),
                      J = document.getElementById(e.frameDivId);
                    null != q &&
                      q.eagerLoad &&
                      J.style.removeProperty("display"),
                      t.doOpen() && w.postMessage({ action: "open_chat" }),
                      w.postMessage({
                        action: "widget_location",
                        payload: {
                          title: document.title,
                          location: window.location.href,
                        },
                      });
                    break;
                  case "datastore_loaded":
                    w.postMessage({ action: "load_rules" });
                    break;
                  case "take_screenshot":
                    var z = document.getElementById(e.frameDivId);
                    z &&
                      ((z.style.visibility = "hidden"),
                      navigator.mediaDevices
                        .getDisplayMedia({ video: !0 })
                        .then(
                          function (e) {
                            var t = this;
                            j(this, i);
                            var n = W(e.getVideoTracks(), 1)[0];
                            setTimeout(
                              function () {
                                var e = this;
                                j(this, t),
                                  new ImageCapture(n)
                                    .grabFrame()
                                    .then(
                                      function (t) {
                                        j(this, e);
                                        var n =
                                          document.createElement("canvas");
                                        (n.width = t.width),
                                          (n.height = t.height),
                                          n.getContext("2d").drawImage(t, 0, 0),
                                          w.postMessage({
                                            action: "capture_frame",
                                            payload: { imageBitmap: t },
                                          });
                                      }.bind(this)
                                    )
                                    .finally(
                                      function () {
                                        j(this, e), n.stop();
                                      }.bind(this)
                                    ),
                                  (z.style.visibility = "visible");
                              }.bind(this),
                              400
                            );
                          }.bind(this)
                        )
                        .catch(
                          function () {
                            j(this, i),
                              w.postMessage({ action: "stop_sharing" }),
                              (z.style.visibility = "visible");
                          }.bind(this)
                        ));
                    break;
                  case "rules_loaded":
                    S(), D.start();
                    break;
                  case "enlarge_image":
                    I.create(d.picUrl);
                    break;
                  case "expand_all":
                    document
                      .getElementById(e.frameDivId)
                      .classList.add("expanded-modal"),
                      document.getElementById(e.frameDivId).classList.add(h);
                    break;
                  case "expand_article_view":
                    window.innerWidth < e.FAQ_EXPAND_WIDTH + g &&
                      (f.classList.add(
                        m ? "expand-article-left" : "expand-article-right"
                      ),
                      f.style.setProperty(m ? "left" : "right", "15px")),
                      f.classList.remove(
                        "collapsed-article_view",
                        "collapse-article-left",
                        "collapse-article-right"
                      ),
                      f.classList.add("expanded-article_view");
                    break;
                  case "collapse_article_view":
                    f.classList.add(
                      m ? "collapse-article-left" : "collapse-article-right"
                    ),
                      f.style.setProperty(
                        m ? "left" : "right",
                        "".concat(g, "px")
                      ),
                      f.classList.remove("expanded-article_view"),
                      f.classList.add("collapsed-article_view");
                    break;
                  case "collapse_all_article_view":
                    f.classList.remove(
                      "expanded-article_view",
                      "collapsed-article_view"
                    ),
                      f.style.setProperty(
                        m ? "left" : "right",
                        "".concat(g, "px")
                      ),
                      f.classList.remove(
                        "expand-article-left",
                        "expand-article-right",
                        "collapse-article-left",
                        "collapse-article-right"
                      );
                    break;
                  case "set_bubble_height":
                    document.getElementById(e.frameDivId).style.height =
                      d.height + "px";
                    break;
                  case "collapse_all":
                    document
                      .getElementById(e.frameDivId)
                      .classList.remove("expanded-modal"),
                      document.getElementById(e.frameDivId).classList.remove(h),
                      document
                        .getElementById(e.frameDivId)
                        .classList.add("avoid-jitter"),
                      setTimeout(
                        function () {
                          j(this, i),
                            document
                              .getElementById(e.frameDivId)
                              .classList.remove("avoid-jitter");
                        }.bind(this),
                        300
                      );
                    break;
                  case "user_state_change":
                    E.publish("user:statechange", d);
                    break;
                  case "user_authenticated":
                    E.publish("user:authenticated", d);
                    break;
                  case "user_created":
                    var H = d.data;
                    if (t.isLoaded())
                      H && o.setRestoreId(H.restoreId), this.onUserCreate(d);
                    else if (d.success) {
                      var G = H && H.externalId,
                        X = H && H.restoreId,
                        Q = o.getExternalId();
                      Q
                        ? Q === G && (o.setRestoreId(X), this.onUserCreate(d))
                        : this.onUserCreate(d);
                    } else this.onUserCreate(d);
                    break;
                  case "user_cleared":
                    E.publish("user:cleared"),
                      x.postMessage({
                        action: "clear:subscription",
                        openWindow: !1,
                      }),
                      o.reset();
                    break;
                  case "message_sent":
                    E.publish("message:sent", d);
                    break;
                  case "message_received":
                    E.publish("message:received", d);
                    break;
                  case "read_receipts_update":
                    E.publish("readReceipts:update", d);
                    break;
                  case "csat_updated":
                    E.publish("csat:updated", d);
                    break;
                  case "csat_received":
                    E.publish("csat:received", d);
                    break;
                  case "anchor_link_clicked":
                    E.publish("anchorLink:clicked", d);
                    break;
                  case "faq_clicked":
                    E.publish("faq:clicked", d);
                    break;
                  case "download_file":
                    E.publish("download:file", d);
                    break;
                  case "ask_permission":
                    x.postMessage({ action: "ask:permission", openWindow: !0 });
                    break;
                  case "smart_polling":
                    for (
                      var K = function (e) {
                          var t = d.unreadMessages[e];
                          setTimeout(function () {
                            var e,
                              n = this,
                              i = new Notification(
                                "Conversation with ".concat(
                                  null == t ? void 0 : t.userFirstName
                                ),
                                {
                                  body: ""
                                    .concat(
                                      null == t ? void 0 : t.userFirstName,
                                      ": "
                                    )
                                    .concat(
                                      null === (e = t.messageFragments[0]) ||
                                        void 0 === e
                                        ? void 0
                                        : e.content
                                    ),
                                  icon: d.icon,
                                }
                              );
                            if (
                              ((i.onclick = function () {
                                parent.focus(),
                                  window.focus(),
                                  window.fcWidget.open(
                                    null == t ? void 0 : t.channelId
                                  ),
                                  this.close();
                              }),
                              "granted" === Notification.permission)
                            )
                              return i;
                            Notification.requestPermission().then(
                              function (e) {
                                if ((j(this, n), "granted" === e)) return i;
                              }.bind(this)
                            );
                          }, 500 * e);
                        },
                        Y = 0;
                      Y < d.unreadMessages.length;
                      Y++
                    )
                      K(Y);
                    break;
                  case "clear_subscription":
                    x.postMessage({
                      action: "clear:subscription",
                      openWindow: !1,
                    });
                    break;
                  case "unread_count_notify":
                    E.publish("unreadCount:notify", d.data);
                    break;
                  case "message_from_agent":
                    E.publish("message:received", d.data);
                    break;
                  case "message_from_user":
                    E.publish("message:sent", d.data);
                    break;
                  case "conversation_resolved":
                    E.publish("conversation:resolved", d.data);
                    break;
                  case "set_storage_item":
                    if (v.storageAvailable) {
                      var $ = d.data;
                      $ &&
                        $.key &&
                        $.value &&
                        localStorage.setItem($.key, JSON.stringify($.value));
                    }
                    break;
                  case "remove_storage_item":
                    if (v.storageAvailable) {
                      var Z = d.data;
                      Z && Z.key && localStorage.removeItem(Z.key);
                    }
                    break;
                  case "startScreenShare":
                    window.fc_cobrowse &&
                      window.fc_cobrowse.allowScreenShare(n);
                    break;
                  case "set_lsds_item":
                    if (v.storageAvailable) {
                      var ee = d.data,
                        te = ee && ee.key;
                      if (te) {
                        var ne = ee && ee.value;
                        localStorage.setItem(te, v.stringifyJSON(ne));
                      }
                    }
                    break;
                  case "get_lsds_item":
                    if (v.storageAvailable) {
                      var ie = d.data,
                        oe = ie && ie.key;
                      oe && localStorage.getItem(oe);
                    }
                    break;
                  case "remove_lsds_item":
                    if (v.storageAvailable) {
                      var re = d.data,
                        ae = re && re.key;
                      ae && localStorage.removeItem(ae);
                    }
                    break;
                  case "requestForAudioCall":
                    window.fc_cobrowse &&
                      window.fc_cobrowse.requestForAudioCall(n);
                    break;
                  case "rts_connected":
                    E.publish("rts:connected", d.data);
                    break;
                  case "rts_disconnected":
                    E.publish("rts:disconnected", d.data);
                    break;
                  case "stack_max_height":
                    var se =
                      screen.height <= 568
                        ? screen.height
                        : screen.height - 250;
                    (document.getElementById(e.frameDivId).style.maxHeight =
                      se + "px"),
                      w.postMessage({
                        action: "stacked_max_height",
                        payload: { height: se },
                      });
                    break;
                  case "hide_widget":
                    document
                      .getElementById(e.frameDivId)
                      .style.setProperty("display", "none");
                    break;
                  default:
                    y.publish(c, d);
                }
              }
            }
          },
          syncResponse: function (e, t) {
            var n = e && e.status;
            n
              ? w.dispatch(t, { success: 200 === n, status: n })
              : w.dispatch(t, { success: !1, status: 400 });
          },
        },
        q = {
          track: function (e, t) {
            y.subscribe("track_event", { eventName: e, data: t });
          },
        };
      function J(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var H = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              z(this, "listenToConfigDataCB", void 0),
              z(this, "payload", void 0),
              z(this, "resolve", void 0),
              z(this, "iframeWindow", void 0),
              (this.payload = t);
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: "fetch",
                value: function () {
                  var e = this;
                  return new Promise(
                    function (t) {
                      var n;
                      !(function (e, t) {
                        if (e !== t)
                          throw new TypeError(
                            "Cannot instantiate an arrow function"
                          );
                      })(this, e);
                      var i = document.createElement("iframe"),
                        o =
                          null !== (n = this.payload) &&
                          void 0 !== n &&
                          n.widgetUuid
                            ? "&widgetUuid=".concat(this.payload.widgetUuid)
                            : "",
                        r = ""
                          .concat(
                            this.payload.host,
                            "/widget/config_iframe.html?host="
                          )
                          .concat(this.payload.host, "&token=")
                          .concat(this.payload.token, "&origin=")
                          .concat(window.location.origin)
                          .concat(o);
                      (i.id = "config-load-iframe"),
                        (i.style.display = "none"),
                        (i.src = r),
                        document.body.append(i),
                        (this.iframeWindow = i.contentWindow),
                        (this.resolve = t),
                        (this.listenToConfigDataCB =
                          this.listenToConfigData.bind(this)),
                        window.addEventListener(
                          "message",
                          this.listenToConfigDataCB
                        );
                    }.bind(this)
                  );
                },
              },
              {
                key: "cleanUp",
                value: function () {
                  var e;
                  (this.iframeWindow = null),
                    null ===
                      (e = document.querySelector("#config-load-iframe")) ||
                      void 0 === e ||
                      e.remove(),
                    window.removeEventListener(
                      "message",
                      this.listenToConfigDataCB
                    );
                },
              },
              {
                key: "listenToConfigData",
                value: function (e) {
                  e.source === this.iframeWindow &&
                    (this.cleanUp(), this.resolve(JSON.parse(e.data)));
                },
              },
            ]),
            n && J(t.prototype, n),
            i && J(t, i),
            e
          );
        })(),
        G = H;
      function X(e) {
        return (
          (X =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          X(e)
        );
      }
      function Q(e, t) {
        if (t && ("object" === X(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return K(e);
      }
      function K(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Y(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (Y = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, i);
            }
            function i() {
              return $(e, arguments, te(this).constructor);
            }
            return (
              (i.prototype = Object.create(e.prototype, {
                constructor: {
                  value: i,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              ee(i, e)
            );
          }),
          Y(e)
        );
      }
      function $(e, t, n) {
        return (
          ($ = Z()
            ? Reflect.construct
            : function (e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var o = new (Function.bind.apply(e, i))();
                return n && ee(o, n.prototype), o;
              }),
          $.apply(null, arguments)
        );
      }
      function Z() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function ee(e, t) {
        return (
          (ee =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          ee(e, t)
        );
      }
      function te(e) {
        return (
          (te = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          te(e)
        );
      }
      function ne(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ie(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function oe(e, t, n) {
        return t && ie(e.prototype, t), n && ie(e, n), e;
      }
      function re(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ae = (function () {
          function t(e) {
            ne(this, t),
              re(this, "impostorConfig", void 0),
              (this.impostorConfig = e);
          }
          return (
            oe(t, [
              {
                key: "create",
                value: function () {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    a,
                    s,
                    d,
                    c,
                    l,
                    u,
                    f,
                    h,
                    p = this,
                    g =
                      ((t = this.impostorConfig),
                      (i = t.background),
                      (o = t.foreground),
                      (r = t.isCustomText),
                      (a = t.widgetLauncherValue),
                      (s = t.isLeftPositionedWidget),
                      (d = t.helpIcon),
                      (c = t.host),
                      (l = t.offsetBottomWidth),
                      (u = t.offsetRightWidth),
                      (f = d.includes("http")
                        ? d
                        : "".concat(c, "/").concat(d)),
                      (h =
                        '<div id="fc-widget-chat-text">\n        <img class="fc-widget-help-icon" src="'
                          .concat(f, '" alt="help-icon" />\n        <span>')
                          .concat(a || "Help", "</span>\n      </div>")),
                      (n =
                        a && !r
                          ? '<img class="fc_widget_custom-icon" src='.concat(
                              a,
                              ' alt="Freshchat Logo" />'
                            )
                          : '<div id="fc-widget-chat-icon" />'),
                      {
                        content:
                          '\n            <div class="freshdesk_messaging">\n                <div id="static-bubble" class="d-hotline '
                            .concat(
                              r && "d-hotline-text",
                              '">\n                    <div id="bubble-content">\n                        '
                            )
                            .concat(
                              r ? h : n,
                              '\n                    </div>                    \n\n                    <div id="loading" class="fc-widget-align-center">\n                        <div class="flexbox">\n                            <div class="dot-loader"></div>\n                            <div class="dot-loader"></div>\n                            <div class="dot-loader"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        '
                            ),
                        styles: "\n        :host {\n            --background: "
                          .concat(i, ";\n            --foreground: ")
                          .concat(
                            o,
                            ";\n        }\n\n        .d-hotline-text {\n            border-radius: 24px 4px 16px 24px !important;\n            height: 32px !important;\n            padding: 0 10px;\n            width: unset !important;\n        }\n\n        #fc-widget-chat-text {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe UI Emoji', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Cantarell', 'Helvetica Neue', sans-serif;\n            -webkit-font-smoothing: antialiased;\n            display: flex;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n            white-space: nowrap;\n            margin: 5px 0px;\n        }\n\n        .fc-widget-help-icon {\n            margin: 2px 5px 0 0;\n        }\n\n        .fc-widget-align-center {\n            top: 50% !important;\n            left: 50% !important;\n            transform: translate(-50%, -50%);\n        }\n\n        .fc_widget_custom-icon {\n            width: 38%;\n            height: 17px;\n            border-radius: 6px 6px 6px 2px;\n            position: absolute;\n            top: 37%;\n            left: 32%;\n        }\n\n        .freshdesk_messaging .d-hotline {\n                display: none;\n                border-radius: 34px 8px 34px 34px;\n                position: fixed !important;\n                bottom: "
                          )
                          .concat(
                            l,
                            "px;\n                box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.26) !important;\n                color: #fff;\n                cursor: pointer;\n                display: table;\n                position: absolute;\n                right: "
                          )
                          .concat(
                            s ? "auto" : u + "px",
                            ";\n                left: "
                          )
                          .concat(
                            s ? u + "px" : "auto",
                            ';\n                z-index: 3147483602 !important;\n                height: 60px;\n                width: 60px;\n                background-color: var(--background) !important;\n                color: #ffffff !important;\n                border-color: var(--background) !important;\n                -webkit-animation: 0.5s zoomIn;\n                animation: 0.5s zoomIn;\n            }\n            .freshdesk_messaging.fullscreen #static-bubble {\n                bottom: 6px !important;\n            }\n            .freshdesk_messaging.fullscreen #loading {\n                bottom: 62px;\n            }\n            .freshdesk_messaging.l2r #static-bubble {\n                left: 20px;\n            }\n            .freshdesk_messaging.l2r #loading {\n                left: 85px;\n            }\n            .freshdesk_messaging.l2r.fullscreen #static-bubble {\n                left: 5px !important;\n            }\n            .freshdesk_messaging.r2l.fullscreen #static-bubble {\n                right: 5px !important;\n            }\n            .freshdesk_messaging.r2l.fullscreen #loading {\n                right: 64px;\n            }\n            .freshdesk_messaging.l2r.fullscreen #loading {\n                left: 72px;\n            }\n            .freshdesk_messaging #fc-widget-chat-icon {\n                width: 38%;\n                height: 17px;\n                border-radius: 6px 6px 6px 2px;\n                position: absolute;\n                background: var(--foreground) !important;\n                top: 37%;\n                left: 32%;\n            }\n            .freshdesk_messaging #fc-widget-chat-icon:before {\n                border-radius: 2px 2px 2px 2px;\n                height: 2px;\n                content: "";\n                border-top: 5px;\n                background: var(--background) !important;\n                width: 65%;\n                position: absolute;\n                top: 5px;\n                left: 4px;\n            }\n            .freshdesk_messaging #fc-widget-chat-icon:after {\n                border-radius: 2px 2px 2px 2px;\n                height: 2px;\n                content: "";\n                border-top: 5px;\n                background: var(--background) !important;\n                width: 44%;\n                position: absolute;\n                top: 10px;\n                left: 4px;\n            }\n            .freshdesk_messaging #loading {\n                visibility: hidden;\n                position: absolute;\n                bottom: '
                          )
                          .concat(
                            r ? "auto" : "25px",
                            ";\n                min-width: 55px !important;\n                left: "
                          )
                          .concat(
                            r ? "auto" : "6px",
                            ";\n            }\n            .freshdesk_messaging .flexbox {\n                opacity: 0.7;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -ms-flex-wrap: wrap;\n                flex-wrap: wrap;\n            }\n            .freshdesk_messaging .dot-loader {\n                height: 8px;\n                width: 8px;\n                border-radius: 50%;\n                background-color: var(--foreground) !important;\n                position: relative;\n                -webkit-animation: 1.2s scaleDown ease-in-out infinite;\n                animation: 1.2s scaleDown ease-in-out infinite;\n            }\n            .freshdesk_messaging .dot-loader:nth-child(2) {\n                margin: 0 10px;\n                -webkit-animation: 1.2s scaleDown ease-in-out infinite 0.15555s;\n                animation: 1.2s scaleDown ease-in-out infinite 0.15555s;\n            }\n            .freshdesk_messaging .dot-loader:nth-child(3) {\n                -webkit-animation: 1.2s scaleDown ease-in-out infinite 0.3s;\n                animation: 1.2s scaleDown ease-in-out infinite 0.3s;\n            }\n            @-webkit-keyframes scaleDown {\n                0%,\n                80%,\n                100% {\n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                }\n                40% {\n                    -webkit-transform: scale(1);\n                    transform: scale(1);\n                }\n            }\n            @keyframes scaleDown {\n                0%,\n                80%,\n                100% {\n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                }\n                40% {\n                    -webkit-transform: scale(1);\n                    transform: scale(1);\n                }\n            }\n            @-webkit-keyframes zoomIn {\n            0% {\n                -webkit-transform: scale(0);\n                transform: scale(0);\n            }\n\n            100% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n            }\n            }\n\n            @keyframes zoomIn {\n            0% {\n                -webkit-transform: scale(0);\n                transform: scale(0);\n            }\n\n            100% {\n                -webkit-transform: scale(1);\n                transform: scale(1);\n            }\n            }\n\n            @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n              .mobile .d-hotline {\n                  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2) !important;\n\n                  width: 50px;\n                  height: 50px;\n            }\n\n            .mobile #fc-widget-chat-icon {\n                width: 43% !important;\n                top: 32% !important;\n            }\n        "
                          ),
                      });
                  return function (t) {
                    var n = t.onDemandWidgetCB,
                      i = t.fullscreen,
                      o = t.l2r,
                      r = t.isMobile;
                    !(function (e, t) {
                      if (e !== t)
                        throw new TypeError(
                          "Cannot instantiate an arrow function"
                        );
                    })(this, p);
                    var a = e.impostor.tagName,
                      s = (function () {
                        var e = document.createElement("template");
                        return (
                          (e.innerHTML =
                            '\n              <style id="widget-style">'
                              .concat(
                                g.styles.toString(),
                                "</style>\n              "
                              )
                              .concat(g.content, "\n            ")),
                          e
                        );
                      })(),
                      d = (function (e) {
                        !(function (e, t) {
                          if ("function" != typeof t && null !== t)
                            throw new TypeError(
                              "Super expression must either be null or a function"
                            );
                          (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                              value: e,
                              writable: !0,
                              configurable: !0,
                            },
                          })),
                            t && ee(e, t);
                        })(l, e);
                        var t,
                          d,
                          c =
                            ((t = l),
                            (d = Z()),
                            function () {
                              var e,
                                n = te(t);
                              if (d) {
                                var i = te(this).constructor;
                                e = Reflect.construct(n, arguments, i);
                              } else e = n.apply(this, arguments);
                              return Q(this, e);
                            });
                        function l() {
                          var e, t;
                          ne(this, l),
                            re(K((t = c.call(this))), "onDemandCB", void 0),
                            t
                              .attachShadow({ mode: "open" })
                              .appendChild(s.content.cloneNode(!0)),
                            (t.onDemandCB = t.onDemand.bind(K(t))),
                            null === (e = t.shadowRoot) ||
                              void 0 === e ||
                              e
                                .querySelector("#static-bubble")
                                .addEventListener("mousedown", t.onDemandCB);
                          var n,
                            a,
                            d = [];
                          (i && d.push("fullscreen"),
                          o ? d.push("l2r") : d.push("r2l"),
                          r && d.push("mobile"),
                          d.length) &&
                            (null === (n = t.shadowRoot) ||
                              void 0 === n ||
                              (a = n.querySelector(
                                ".freshdesk_messaging"
                              ).classList).add.apply(a, d));
                          return t;
                        }
                        return (
                          oe(l, [
                            {
                              key: "onDemand",
                              value: function () {
                                this.removeMouseDownHandler(),
                                  this.showLoading(),
                                  n();
                              },
                            },
                            {
                              key: "removeMouseDownHandler",
                              value: function () {
                                var e,
                                  t =
                                    null === (e = this.shadowRoot) ||
                                    void 0 === e
                                      ? void 0
                                      : e.querySelector("#static-bubble");
                                t &&
                                  t.removeEventListener(
                                    "mousedown",
                                    this.onDemandCB
                                  );
                              },
                            },
                            {
                              key: "removeBubble",
                              value: function () {
                                (this.shadowRoot.querySelector(
                                  "#static-bubble"
                                ).style.display = "none"),
                                  this.removeMouseDownHandler();
                              },
                            },
                            {
                              key: "removeImpostor",
                              value: function () {
                                this.removeLoading(),
                                  (this.shadowRoot.querySelector(
                                    ".freshdesk_messaging"
                                  ).style.display = "none"),
                                  document.querySelector(a).remove();
                              },
                            },
                            {
                              key: "removeLoading",
                              value: function () {
                                var e,
                                  t,
                                  n =
                                    null === (e = this.shadowRoot) ||
                                    void 0 === e
                                      ? void 0
                                      : e.querySelector(
                                          ".freshdesk_messaging #loading"
                                        ),
                                  i =
                                    null === (t = this.shadowRoot) ||
                                    void 0 === t
                                      ? void 0
                                      : t.querySelector("#bubble-content");
                                (n.style.visibility = "hidden"),
                                  (i.style.visibility = "visible");
                              },
                            },
                            {
                              key: "showLoading",
                              value: function () {
                                var e,
                                  t,
                                  n =
                                    null === (e = this.shadowRoot) ||
                                    void 0 === e
                                      ? void 0
                                      : e.querySelector(
                                          ".freshdesk_messaging #loading"
                                        ),
                                  i =
                                    null === (t = this.shadowRoot) ||
                                    void 0 === t
                                      ? void 0
                                      : t.querySelector("#bubble-content");
                                (n.style.visibility = "visible"),
                                  (i.style.visibility = "hidden");
                              },
                            },
                          ]),
                          l
                        );
                      })(Y(HTMLElement));
                    customElements.get(a) || customElements.define(a, d);
                    var c = document.createElement(a, { is: a });
                    return document.body.appendChild(c), c;
                  }.bind(this)(this.impostorConfig);
                },
              },
            ]),
            t
          );
        })(),
        se = ae;
      function de(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      var ce = n.p + "help_icon.407f0467c911236190038c9631c321f8.svg",
        le = n.p + "help_icon_black.5668a2cc609a7b782f2ea0dab26bae20.svg";
      function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                ge(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function he(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      function pe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ge(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ve = (function () {
          function t(e) {
            var n;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ge(this, "payload", void 0),
              ge(this, "eagerLoad", void 0),
              ge(this, "onWidgetLoadedCB", void 0),
              ge(this, "onWidgetOpenedCB", void 0),
              ge(this, "listenToConfigDataCB", void 0),
              ge(this, "sendConfigsToFreshChatCB", void 0),
              ge(this, "appConfig", void 0),
              ge(this, "appConfigService", void 0),
              ge(this, "impostorConfig", void 0),
              ge(this, "impostor", void 0),
              ge(this, "openWidgetOnLoad", void 0),
              ge(this, "isWidgetBeingLoaded", void 0),
              ge(this, "loadFreshChatCB", void 0),
              ge(this, "unbindBrowserEventsCB", void 0),
              ge(this, "rejectLoadingFreshchat", void 0),
              ge(this, "activityEvents", void 0),
              ge(this, "dontLoadWithImpostor", !0),
              ge(this, "eventUnbindTimer", void 0),
              (this.payload = e),
              (this.eagerLoad =
                null == e || null === (n = e.config) || void 0 === n
                  ? void 0
                  : n.eagerLoad);
          }
          var n, i, o;
          return (
            (n = t),
            (i = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  return new Promise(
                    function (t, n) {
                      var i;
                      he(this, e),
                        (this.loadFreshChatCB = t),
                        (this.rejectLoadingFreshchat = n),
                        (null !== (i = this.payload) &&
                          void 0 !== i &&
                          i.open) ||
                        !1 === this.eagerLoad
                          ? this.loadFreshChat(!1)
                          : this.processImpostor();
                    }.bind(this)
                  );
                },
              },
              {
                key: "onDemand",
                value: function () {
                  this.isWidgetBeingLoaded
                    ? (this.openWidgetOnLoad = !0)
                    : ((this.payload.open = !0), this.loadFreshChat());
                },
              },
              {
                key: "handleForceLoadFreshChat",
                value: function (e) {
                  this.appConfigService.cleanUp(), this.loadFreshChat(e);
                },
              },
              {
                key: "processImpostor",
                value: function () {
                  var t = this;
                  (this.appConfigService = new G(this.payload)),
                    (function (e, t) {
                      var n = this,
                        i = new Promise(
                          function (e, i) {
                            var o = this;
                            de(this, n),
                              setTimeout(
                                function () {
                                  de(this, o),
                                    i(new Error("Timeout triggered"));
                                }.bind(this),
                                t
                              );
                          }.bind(this)
                        );
                      return Promise.race([e, i]);
                    })(
                      this.appConfigService.fetch(),
                      e.impostor.timeoutForFetchingConfigInMillis
                    ).then(
                      function (n) {
                        var i;
                        he(this, t);
                        var o,
                          r = null == n ? void 0 : n.betaFeatures;
                        (this.appConfig = n),
                          (this.impostorConfig = this.getImpostorConfig()),
                          this.eagerLoad ||
                          !r ||
                          -1 !== r.indexOf(e.eagerLoadBetaFeature)
                            ? (null !== (i = this.impostorConfig) &&
                                void 0 !== i &&
                                i.hideMessenger) ||
                              null == n ||
                              !n.appId
                              ? this.rejectLoadingFreshchat()
                              : (this.listenToWidgetAndBrowserEvents(),
                                null !== (o = this.impostorConfig) &&
                                  void 0 !== o &&
                                  o.show &&
                                  (this.impostor = new se(
                                    this.impostorConfig
                                  ).create()))
                            : this.handleForceLoadFreshChat(!0);
                      }.bind(this),
                      function () {
                        he(this, t), this.handleForceLoadFreshChat(!1);
                      }.bind(this)
                    );
                },
              },
              {
                key: "getImpostorConfig",
                value: function () {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    a,
                    s,
                    d,
                    c,
                    l,
                    u,
                    f,
                    h,
                    p,
                    g,
                    v,
                    m,
                    w,
                    b,
                    y,
                    C,
                    k,
                    _,
                    E,
                    x,
                    I,
                    L,
                    P,
                    T,
                    O,
                    S,
                    B,
                    M,
                    D,
                    F,
                    N =
                      (null === (t = this.payload) ||
                      void 0 === t ||
                      null === (n = t.config) ||
                      void 0 === n ||
                      null === (i = n.headerProperty) ||
                      void 0 === i
                        ? void 0
                        : i.hideChatButton) || !1;
                  return {
                    hideChatButton: N,
                    hideMessenger:
                      (null === (o = this.appConfig) || void 0 === o
                        ? void 0
                        : o.hideMessenger) || !1,
                    background:
                      (null === (r = this.payload) ||
                      void 0 === r ||
                      null === (a = r.config) ||
                      void 0 === a ||
                      null === (s = a.headerProperty) ||
                      void 0 === s
                        ? void 0
                        : s.backgroundColor) ||
                      (null === (d = this.appConfig) ||
                      void 0 === d ||
                      null === (c = d.appearanceConfig) ||
                      void 0 === c ||
                      null === (l = c.widgetLauncherColor) ||
                      void 0 === l
                        ? void 0
                        : l.backgroundColor),
                    foreground:
                      (null === (u = this.payload) ||
                      void 0 === u ||
                      null === (f = u.config) ||
                      void 0 === f ||
                      null === (h = f.headerProperty) ||
                      void 0 === h
                        ? void 0
                        : h.foregroundColor) ||
                      (null === (p = this.appConfig) ||
                      void 0 === p ||
                      null === (g = p.appearanceConfig) ||
                      void 0 === g ||
                      null === (v = g.widgetLauncherColor) ||
                      void 0 === v
                        ? void 0
                        : v.foregroundColor) ||
                      "white",
                    offsetBottomWidth:
                      (null === (m = this.appConfig) ||
                      void 0 === m ||
                      null === (w = m.appearanceConfig) ||
                      void 0 === w
                        ? void 0
                        : w.widgetBottomOffsetPx) + 6 || 20,
                    offsetRightWidth:
                      (null === (b = this.appConfig) ||
                      void 0 === b ||
                      null === (y = b.appearanceConfig) ||
                      void 0 === y
                        ? void 0
                        : y.widgetRightOffsetPx) + 5 || 21,
                    show: !N,
                    fullscreen:
                      (null === (C = this.payload) ||
                      void 0 === C ||
                      null === (k = C.config) ||
                      void 0 === k
                        ? void 0
                        : k.fullscreen) || !1,
                    l2r:
                      "ltr" ===
                      (null === (_ = this.payload) ||
                      void 0 === _ ||
                      null === (E = _.config) ||
                      void 0 === E ||
                      null === (x = E.headerProperty) ||
                      void 0 === x
                        ? void 0
                        : x.direction),
                    onDemandWidgetCB: this.onDemand.bind(this),
                    isMobile: /Android|iPhone|iPad|iPod/i.test(
                      navigator.userAgent
                    ),
                    isCustomText:
                      "TEXT" ===
                        (null === (I = this.appConfig) ||
                        void 0 === I ||
                        null === (L = I.appearanceConfig) ||
                        void 0 === L
                          ? void 0
                          : L.widgetLauncherStyle) || !1,
                    widgetLauncherValue:
                      (null === (P = this.appConfig) ||
                      void 0 === P ||
                      null === (T = P.appearanceConfig) ||
                      void 0 === T
                        ? void 0
                        : T.widgetLauncherValue) || !1,
                    isLeftPositionedWidget:
                      "BOTTOM_LEFT" ===
                        (null === (O = this.appConfig) ||
                        void 0 === O ||
                        null === (S = O.appearanceConfig) ||
                        void 0 === S
                          ? void 0
                          : S.widgetPosition) || !1,
                    helpIcon:
                      (null === (B = this.appConfig) ||
                      void 0 === B ||
                      null === (M = B.appearanceConfig) ||
                      void 0 === M ||
                      null === (D = M.widgetLauncherColor) ||
                      void 0 === D
                        ? void 0
                        : D.foregroundColor) === e.LauncherTextColor
                        ? le
                        : ce,
                    host:
                      null === (F = this.payload) || void 0 === F
                        ? void 0
                        : F.host,
                  };
                },
              },
              {
                key: "loadFreshChat",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  (this.isWidgetBeingLoaded = !0),
                    this.loadFreshChatCB(e),
                    e &&
                      ((this.sendConfigsToFreshChatCB =
                        this.sendConfigsToFreshChat.bind(this)),
                      window.addEventListener(
                        "message",
                        this.sendConfigsToFreshChatCB
                      ));
                },
              },
              {
                key: "sendConfigsToFreshChat",
                value: function (t) {
                  t.data.action === e.impostor.getFreshChatConfigs &&
                    (w.postMessage({
                      action: "config_data",
                      payload: fe({}, this.appConfig),
                    }),
                    window.removeEventListener(
                      "message",
                      this.sendConfigsToFreshChatCB
                    ));
                },
              },
              {
                key: "listenToWidgetAndBrowserEvents",
                value: function () {
                  (this.onWidgetOpenedCB = this.onWidgetOpened.bind(this)),
                    (this.onWidgetLoadedCB = this.onWidgetLoaded.bind(this)),
                    window.fcWidget.on("widget:loaded", this.onWidgetLoadedCB),
                    window.fcWidget.on("widget:opened", this.onWidgetOpenedCB),
                    (this.activityEvents = e.impostor.activityEvents),
                    (this.unbindBrowserEventsCB = this.unbindBrowserEvents.bind(
                      this,
                      !1
                    )),
                    this.bindBrowserEvents.bind(this)();
                },
              },
              {
                key: "unbindBrowserEvents",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  this.activityEvents.forEach(
                    function (t) {
                      he(this, e),
                        document.removeEventListener(
                          t,
                          this.unbindBrowserEventsCB,
                          !0
                        );
                    }.bind(this)
                  ),
                    t || this.loadFreshChat();
                },
              },
              {
                key: "bindBrowserEvents",
                value: function () {
                  var e = this;
                  this.activityEvents.forEach(
                    function (t) {
                      he(this, e),
                        document.addEventListener(
                          t,
                          this.unbindBrowserEventsCB,
                          !0
                        );
                    }.bind(this)
                  );
                },
              },
              {
                key: "onWidgetOpened",
                value: function () {
                  this.cleanUp();
                },
              },
              {
                key: "onWidgetLoaded",
                value: function () {
                  this.openWidgetOnLoad
                    ? window.fcWidget.open()
                    : this.cleanUp();
                },
              },
              {
                key: "unbindFCEvents",
                value: function () {
                  window.fcWidget.off("widget:opened", this.onWidgetOpenedCB),
                    window.fcWidget.off("widget:loaded", this.onWidgetLoadedCB);
                },
              },
              {
                key: "cleanUp",
                value: function () {
                  var e,
                    t,
                    n = this;
                  (this.appConfig = null),
                    window.removeEventListener(
                      "message",
                      this.sendConfigsToFreshChatCB
                    ),
                    null === (e = this.impostor) ||
                      void 0 === e ||
                      e.removeBubble(),
                    (this.isWidgetBeingLoaded = !1),
                    this.unbindBrowserEvents(!0),
                    null === (t = this.impostor) ||
                      void 0 === t ||
                      t.removeImpostor(),
                    this.eventUnbindTimer &&
                      clearTimeout(this.eventUnbindTimer),
                    (this.eventUnbindTimer = setTimeout(
                      function () {
                        he(this, n), this.unbindFCEvents();
                      }.bind(this)
                    ));
                },
              },
            ]),
            i && pe(n.prototype, i),
            o && pe(n, o),
            t
          );
        })(),
        me = ve;
      function we(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? we(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : we(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ye(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ce(e, t) {
        if (e !== t)
          throw new TypeError("Cannot instantiate an arrow function");
      }
      var ke = function () {
        Ce(this, undefined);
        var n;
        return {
          init: function (i) {
            window.fcWidgetMessengerConfig &&
              (i = Object.assign(i, window.fcWidgetMessengerConfig));
            var r = function (n) {
              var r, a, s;
              i.config = be(be({}, i.config), {}, { eagerLoad: n });
              var d,
                c,
                l,
                u,
                f,
                h,
                g =
                  -1 !==
                  [
                    "Chrome",
                    "Firefox",
                    "Safari",
                    "Edge",
                    "Trident",
                    "WebView",
                  ].indexOf(v.getAgent.name),
                m = -1 !== ["Station"].indexOf(v.getAgent.appName),
                b =
                  null === (r = i) ||
                  void 0 === r ||
                  null === (a = r.config) ||
                  void 0 === a ||
                  null === (s = a.headerProperty) ||
                  void 0 === s
                    ? void 0
                    : s.customUserAgent,
                y = b && "string" == typeof b && "CNA" === b.toUpperCase();
              if ((g && !m && !this.isInitialized()) || y) {
                var C = i && i.token;
                C &&
                  C.toUpperCase() !== e.SAMPLE_TOKEN &&
                  (window.location.origin ||
                    (window.location.origin =
                      window.location.protocol +
                      "//" +
                      window.location.hostname +
                      (window.location.port ? ":" + window.location.port : "")),
                  (i.referrer = btoa(window.location.origin)),
                  void 0 === i.open && (i.open = !1),
                  (u = i),
                  t.reset(),
                  o.reset(),
                  p.reset(),
                  B(),
                  V.unsubscribe(),
                  w.init({
                    host: u.host.trim(),
                    token: u.token.trim(),
                    widgetUuid:
                      null === (f = u.widgetUuid) || void 0 === f
                        ? void 0
                        : f.trim(),
                    referrer: u.referrer,
                    siteId: u.siteId,
                    flowId: u.flowId,
                    flowVersionId: u.flowVersionId,
                    campaignRuleIds: u.campaignRuleIds,
                    previewMode: u.previewMode,
                    isTemplateBot: u.isTemplateBot,
                    isPostAgentResolutionEnabled:
                      u.isPostAgentResolutionEnabled,
                    jwtAuthToken: u.jwtAuthToken,
                    cspNonce: u.cspNonce,
                    omniCookie: A.getCookie() || u.omniCookie,
                    eagerLoad:
                      (null == u || null === (h = u.config) || void 0 === h
                        ? void 0
                        : h.eagerLoad) || null,
                    jsFunctions: u.jsFunctions,
                    conversationReferenceId: u.conversationReferenceId,
                  }),
                  t.openOnLoad(u.open),
                  u.identifyByReferenceId && o.setIdentifyByReferenceId(!0),
                  u.flowId && o.setFlowId(u.flowId),
                  u.integrations && o.setIntegrations(u.integrations),
                  u.campaignRuleIds && o.setcampaignRuleIds(u.campaignRuleIds),
                  u.flowVersionId && o.setFlowVersionId(u.flowVersionId),
                  u.previewMode && o.setPreviewMode(u.previewMode),
                  o.setIsTemplateBot(u.isTemplateBot),
                  u.externalId &&
                    (o.setExternalId(u.externalId),
                    o.setRestoreId(u.restoreId)),
                  u.tags && u.tags.length && t.setTags(u.tags),
                  u.faqTags && t.setFaqTags(u.faqTags),
                  u.botsMeta && p.setProperties(u.botsMeta),
                  u.conversationPropertiesMeta &&
                    p.setConversationPropertiesMeta(
                      u.conversationPropertiesMeta
                    ),
                  o.setProperties({
                    firstName: u.firstName,
                    lastName: u.lastName,
                    email: u.email,
                    phone: u.phone,
                    phoneCountry: u.phoneCountryCode,
                    locale: u.locale,
                    meta: u.meta,
                  }),
                  o.setConfig(u.config),
                  u.onLoad && E.subscribe("widget:loaded", u.onLoad),
                  w.add(),
                  V.subscribe(),
                  (d = document),
                  (c = d.createElement("link")),
                  (l = w.getHost()),
                  (c.href =
                    l + "/widget/css/widget.css?t=" + new Date().getTime()),
                  (c.rel = "stylesheet"),
                  d.getElementsByTagName("head")[0].appendChild(c));
              }
            }.bind(this);
            window.Promise && !n
              ? (n = new me(i)).init(i).then(r, function () {})
              : r();
          },
          destroy: function (e) {
            x.unload(), w.unload(e);
          },
          isOpen: function () {
            return t.isOpened();
          },
          isInitialized: function () {
            return !!w.getToken();
          },
          isLoaded: function () {
            return t.isLoaded();
          },
          on: function (e, t) {
            E.subscribe(e, t);
          },
          off: function (e, t) {
            E.unsubscribe(e, t);
          },
          open: function (e) {
            e ? y.subscribe("open_channel", e) : y.subscribe("open_chat");
          },
          close: function () {
            y.subscribe("close_chat");
          },
          show: function () {
            y.subscribe("show_chat");
          },
          hide: function () {
            y.subscribe("hide_chat");
          },
          setTags: function (e) {
            t.isLoaded() &&
              (e && e.length ? t.setTags(e) : t.setTags([]),
              y.subscribe("set_tags", { tags: t.getTags(), force: !0 }));
          },
          setFaqTags: function (e) {
            t.isLoaded() &&
              (e ? t.setFaqTags(e) : t.setFaqTags({}),
              y.subscribe("set_faq_tags", {
                faqTags: t.getFaqTags(),
                force: !0,
              }));
          },
          setExternalId: function (e, t) {
            var n = {};
            if (e) {
              if (
                ("string" == typeof e ? (n.externalId = e) : (n = e),
                !(void 0 === window.Promise || (t && "function" == typeof t)))
              )
                return C("set_external_id", n);
              k("set_external_id", n, t);
            }
          },
          setConfig: function (t) {
            var n = document.getElementById(e.frameDivId);
            n &&
              t &&
              (void 0 !== t.fullscreen &&
                (n.classList.remove(e.classes.fullscreenClass),
                !0 === t.fullscreen &&
                  n.classList.add(e.classes.fullscreenClass)),
              t.headerProperty &&
                (void 0 !== t.headerProperty.direction &&
                  (n.classList.remove("fc_l2r"),
                  "ltr" === t.headerProperty.direction &&
                    n.classList.add("fc_l2r")),
                void 0 !== t.headerProperty.hideChatButton &&
                  (n.classList.remove("fc_dn"),
                  t.headerProperty.hideChatButton &&
                    n.classList.add("fc_dn")))),
              y.subscribe("set_custom_config", t);
          },
          setBotConfig: function (e) {
            o.getPreviewMode() && y.subscribe("set_bot_config", e);
          },
          conversation: {
            setProperties: function (e) {
              p.setProperties(e),
                y.subscribe("set_bots_properties", p.getProperties());
            },
            setBotVariables: function (e) {
              this.setProperties(e);
            },
            setConversationProperties: function (e) {
              p.setConversationPropertiesMeta(e),
                y.subscribe(
                  "set_conversation_properties",
                  p.getConversationPropertiesMeta()
                );
            },
          },
          user: {
            get: function (e) {
              if (!(void 0 === window.Promise || (e && "function" == typeof e)))
                return C("get_user");
              k("get_user", e);
            },
            isExists: function (e) {
              if (!(void 0 === window.Promise || (e && "function" == typeof e)))
                return C("user_exists");
              k("user_exists", e);
            },
            update: function (e, t) {
              if (
                (e.jwtAuthToken
                  ? w.setJWTAuthToken(e.jwtAuthToken)
                  : (e.firstName && o.setFirstName(e.firstName),
                    e.lastName && o.setLastName(e.lastName),
                    e.email && o.setEmail(e.email),
                    e.phone && o.setPhone(e.phone),
                    e.phoneCountry && o.setPhoneCountry(e.phoneCountry),
                    e.meta && o.setUserMeta(e.meta)),
                !(void 0 === window.Promise || (t && "function" == typeof t)))
              )
                return C("update_user", e);
              k("update_user", e, t);
            },
            setProperties: function (e, t) {
              var n = {};
              if (
                (e.jwtAuthToken
                  ? (w.setJWTAuthToken(e.jwtAuthToken), (n = e))
                  : (e.firstName &&
                      ((n.firstName = e.firstName), delete e.firstName),
                    e.lastName &&
                      ((n.lastName = e.lastName), delete e.lastName),
                    e.email && ((n.email = e.email), delete e.email),
                    e.phone && ((n.phone = e.phone), delete e.phone),
                    e.phoneCountryCode &&
                      ((n.phoneCountry = e.phoneCountryCode),
                      delete e.phoneCountryCode),
                    e.locale && ((n.locale = e.locale), delete e.locale),
                    (n.meta = e),
                    o.setProperties(n)),
                !(void 0 === window.Promise || (t && "function" == typeof t)))
              )
                return C("set_user_properties", n);
              k("set_user_properties", n, t);
            },
            setFirstName: function (e, t) {
              var n = {};
              if (e) {
                if (("string" == typeof e ? (n.firstName = e) : (n = e), !t))
                  return this.setProperties(n);
                this.setProperties(n, t);
              }
            },
            setLastName: function (e, t) {
              var n = {};
              if (e) {
                if (("string" == typeof e ? (n.lastName = e) : (n = e), !t))
                  return this.setProperties(n);
                this.setProperties(n, t);
              }
            },
            setEmail: function (e, t) {
              var n = {};
              if (e) {
                if (("string" == typeof e ? (n.email = e) : (n = e), !t))
                  return this.setProperties(n);
                this.setProperties(n, t);
              }
            },
            setPhone: function (e, t) {
              var n = {};
              if (e) {
                if (("string" == typeof e ? (n.phone = e) : (n = e), !t))
                  return this.setProperties(n);
                this.setProperties(n, t);
              }
            },
            setPhoneCountryCode: function (e, t) {
              var n = {};
              if (e) {
                if (
                  ("string" == typeof e ? (n.phoneCountryCode = e) : (n = e),
                  !t)
                )
                  return this.setProperties(n);
                this.setProperties(n, t);
              }
            },
            setMeta: function (e, t) {
              if (!t) return this.setProperties(e);
              this.setProperties(e, t);
            },
            setLocale: function (e, t) {
              var n = {};
              if (e) {
                if (("string" == typeof e ? (n.locale = e) : (n = e), !t))
                  return this.setProperties(n);
                this.setProperties(n, t);
              }
            },
            clear: function (e) {
              if (!(void 0 === window.Promise || (e && "function" == typeof e)))
                return C("reset_user");
              k("reset_user", e);
            },
            create: function (e, t) {
              if (
                ("function" == typeof e && ((t = e), (e = null)),
                !(void 0 === window.Promise || (t && "function" == typeof t)))
              )
                return C("create_user", e);
              k("create_user", e, t);
            },
            clone: function (e, t) {
              if (
                ("function" == typeof e && ((t = e), (e = null)),
                !(void 0 === window.Promise || (t && "function" == typeof t)))
              )
                return C("clone_user", e);
              k("clone_user", e, t);
            },
            getUUID: function (e) {
              if (!(void 0 === window.Promise || (e && "function" == typeof e)))
                return C("get_user_uuid");
              k("get_user_uuid", e);
            },
            generateUUID: function (e) {
              if (!(void 0 === window.Promise || (e && "function" == typeof e)))
                return C("generate_user_uuid");
              k("generate_user_uuid", e);
            },
          },
          track: q.track,
          trackPage: function (e, t) {
            P.track({ newValue: e, title: t, force: !0 });
          },
          authenticate: function (e) {
            var t = this;
            if (w.isJWTEnabled()) {
              var n = function () {
                  Ce(this, t),
                    w.setJWTAuthToken(e),
                    w.postMessage({ action: "authenticate_user", payload: e });
                }.bind(this),
                i = function (i) {
                  Ce(this, t),
                    i && 200 === i.status
                      ? this.user.update({ jwtAuthToken: e })
                      : n();
                }.bind(this);
              this.isLoaded()
                ? void 0 === window.Promise
                  ? this.user.get(i)
                  : this.user.get().then(i, i)
                : n();
            }
          },
        };
      }.bind(void 0)();
      if ((window.fcWidget || (window.fcWidget = ke), window.fcSettings))
        if (
          (window.fcWidgetMessengerConfig &&
            (window.fcSettings = Object.assign(
              window.fcSettings,
              window.fcWidgetMessengerConfig
            )),
          "complete" === document.readyState)
        ) {
          var _e = window.fcSettings.onInit;
          _e && "function" == typeof _e && _e(),
            window.fcSettings.token &&
              window.fcSettings.host &&
              ke.init(window.fcSettings);
        } else
          document.onreadystatechange = (function (e) {
            return function () {
              if ("complete" === document.readyState) {
                var t = window.fcSettings.onInit;
                t && "function" == typeof t && t(),
                  window.fcSettings.token &&
                    window.fcSettings.host &&
                    e.init(window.fcSettings);
              }
            };
          })(ke);
    })();
})();
