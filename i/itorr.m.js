var iTorr = function(a, c, b) {
    if (!a.localStorage || !a.XMLHttpRequest) {
        return c.getElementsByTagName("body")[0].innerHTML = "<p class=loading>请更新现代浏览器。";
    }
    b = function(d) {
        return c.querySelector(d);
    };
    b.S = function(d) {
        return c.querySelectorAll(d);
    };
    b.css = function(e, d) {
        e.style.cssText += (";" + d);
    };
    b.x = function(d) {
        return function(j, f, e, h, g) {
            if (typeof f == "function") {
                h = e;
                e = f;
                f = 0;
            }
            if (d[j]) {
                return e(d[j]);
            } (g = new XMLHttpRequest()).open(f ? "POST": "GET", j, 1); ! f || g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            if (e || h) {
                g.onreadystatechange = function() {
                    if (g.readyState == 4) { ((g.status > 199 && g.status < 301) || g.status == 304) ? e(d[j + (f || "")] = (g.getResponseHeader("Content-Type") || "").match(/json/) ? JSON.parse(g.responseText || "null") : g.responseText) : (!h) || h(g.status);
                    }
                };
            }
            g.send(f || "");
            return g;
        };
    } ({});
    b.j = function(g, e, f, h, d) {
        h = b.D.m("script");
        d = "cb" + new Date().valueOf() + (Math.random() + "").substring(3);
        if (e && g.match(/\{cb\}/)) {
            a[d] = e;
        }
        h.src = g.replace(/\{cb\}/, d);
        h.charset = "UTF-8";
        h.onload = function() {
            if (e && !g.match(/\{cb\}/)) {
                e();
            }
            b.D.d(h);
        };
        h.onerror = function() {
            if (f) {
                f();
            }
            b.D.d(h);
        };
        b.D.a(h);
    };
    b.cookie = function(h, g, d) {
        if (typeof g != "undefined") {
            d = d || 31536000;
            var f = new Date();
            f.setTime(f.getTime() + d * 1000);
            c.cookie = h + "=" + escape(g) + ";expires=" + f.toGMTString();
        } else {
            var e = c.cookie.match(new RegExp("(^| )" + h + "=([^;]*)(;|$)"));
            return e == null ? null: unescape(e[2]);
        }
    };
    b.b = b("html").className = self.ActiveXObject ? "IE": self.chrome ? "Cr": self.mozPaintCount > ~ [] ? "FF": self.opera ? "Op": self.chrome && !!self.WebKitPoint ? "Sa": "";
    b.D = {
        m: function(d) {
            return c.createElement(d);
        },
        d: function(d) {
            if (d) {
                return d.parentNode.removeChild(d);
            }
        },
        a: function(e, d) { ! d && (d = e) && (e = c.body);
            return e.appendChild(d);
        },
        b: function(e, d) {
            e.insertBefore(d, e.childNodes[0]);
        },
        c: function(d) {
            return d.cloneNode(1);
        }
    };
    b.swf = function(d) {
        return c[d] || b("#" + d);
    };
    b.re_date = function(g) {
        var e = new Date(),
            f = new Date((g + "").match(/[0-9]{10}/) ? g * 1000 : g),
            d = parseInt,
            h = d((e - f) / 1000);
        return ! g || h < 0 ? "刚刚": h < 60 ? (h + "秒前") : (h /= 60) < 60 ? d(h) + "分前": (h /= 60) < 24 ? d(h) + "时前": (h /= 24) < 7 ? d(h) + "天前": (h /= 7) < 2 ? d(h) + "周前": f > new Date(e.getFullYear() + "-01-01") ? (f.getMonth() + 1) + "月" + f.getDate() + "日": f.getFullYear() + "年" + (f.getMonth() + 1) + "月" + f.getDate() + "日";
    };
    String.prototype.enTxt = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/\n/g, "<br>");
    };
    String.prototype.enHtml = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "").replace(/(http\:\/\/[0-9A-Za-z\/.#&!?%:;=_]+\.)(gif|jpg|jpeg|png)/g, '<img src="$1$2">').replace(/(http\:\/\/ww[0-9]{1}\.sinaimg\.cn\/)([\w]{4,10})(\/[\w]{16,32}\.)(gif|jpg|jpeg|png)/g, "$1mw1024$3$4").replace(/http:\/\/www\.xiami\.com\/song\/([0-9]{5,12})[\?\w\.\=]*/g, '<a href="//www.xiami.com/song/$1" target="_blank" class="xiami">http://www.xiami.com/song/$1</a>').replace(/(@)([\u4e00-\u9fa5\u0800-\u4e00A-Za-z0-9\-_]{2,32})/g, '<a href="//weibo.com/n/$2" target="_blank" class="at">$1$2</a>').replace(/(^|[^\"\'\]>])(http|ftp|mms|rstp|news|https|telnet)\:\/\/([0-9A-Za-z\/.#&!?%:;=\-_]+)/g, '$1<a href="$2://$3" rel="external nofollow noreferer" class="link" target="_blank">$2://$3</a>').replace(/\n/g, "<br>");
    };
    Element.prototype.css=function(i){
        if(!i)
            return this.style.cssText;

        this.style.cssText+=(';'+i);
        return this
    };
    if (!a.console) {
        a.console = {
            log: function() {}
        };
    }
    b.lcss = function(d) {
        return function(e, f, g) {
            if (d.indexOf(e) < 0) { (f = b.D.m("link")).href = e;
                g = b("head");
                f.rel = "stylesheet";
                f.charset = "UTF-8";
                b.D.a(g, f);
                d += e + "|";
            }
        };
    } ("|");
    return b;
} (window, document);
if (!window.$) {
    $ = iTorr;
}
W = function(b, a) {
    return {
        en: function(c) {
            for (a = b.length, i = 0; i < a; i++) {
                c = c.replace(new RegExp(b[i][0], "g"), b[i][1]);
            }
            return c;
        },
        de: function(c) {
            for (i = b.length - 1; i >= 0; i--) {
                c = c.replace(new RegExp(b[i][1], "g"), b[i][0]);
            }
            return c;
        }
    };
} ([["me", "2"], ["ga2", "3"], ["om", "4"], ["e", "5"], ["o", "6"], ["/", "0"], ["c", "7"], ["www", "8"], ["x", "9"]]);
$.onsubmit = function(c, d) {
    c.onsubmit = function() {
        for (var g = 0,
                 h = c.length,
                 a, b = []; g < h; g++) {
            a = c[g];
            if (a.name) {
                if (a.type == "radio") {
                    if (a.checked == 1) {
                        b.push(a.name + "=" + encodeURIComponent(a.value));
                    }
                } else {
                    b.push(a.name + "=" + encodeURIComponent(a.value));
                }
            }
        }
        $.x(c.action, b.join("&"), d);
        return false;
    };
};