function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
if (document.getElementById("extra_bottomads")) {
    document.getElementById("extra_bottomads").innerHTML = '<script async="async" data-cfasync="false" src="//pl18616640.highcpmrevenuegate.com/21ee3c3c56bdcf8148c61d25727396c4/invoke.js"></script><div id="container-21ee3c3c56bdcf8148c61d25727396c4"></div>';
}
// social bar
(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'pl18582382.highcpmrevenuegate.com/b2/64/31/b264313bb3ccc941df54cb0765564b64.js';
    document.body.appendChild(script);
})();
async function relCall() {
    var script, el;
    await sleep(1000);
    // ads banner 728x90
    if (document.getElementById("top_720")) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = "atOptions = {'key' : 'b0e3ca53895396aabddc418500f71389','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
        el = document.getElementById("top_720");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//www.profitablecreativeformat.com/b0e3ca53895396aabddc418500f71389/invoke.js';
        el = document.getElementById("top_720");
        el.appendChild(script);
    }
    // ads sidebar 300x250
    await sleep(3000);
    if (document.getElementById("sidebar_300")) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = "atOptions = {'key' : 'eb6187f7d5b2e51d45ca20def81a11e4','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
        el = document.getElementById("sidebar_300");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//www.profitablecreativeformat.com/eb6187f7d5b2e51d45ca20def81a11e4/invoke.js';
        el = document.getElementById("sidebar_300");
        el.appendChild(script);
    }
    // ads banner 468x60
    await sleep(3000);
    if (document.getElementById("in_post_bottomads")) {
        script = document.createElement('center');
        script.id = '15369677';
        el = document.getElementById("in_post_bottomads");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = "atOptions = {'key' : '0a030e57a080793545ffc6d71beee598','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
        el = document.getElementById("15369677");
        el.appendChild(script);
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//www.profitablecreativeformat.com/0a030e57a080793545ffc6d71beee598/invoke.js';
        el = document.getElementById("15369677");
        el.appendChild(script);
    }
}
relCall();

/* click body */
var valued = true

function addEvent(obj, eventName, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + eventName, func);
    } else if (obj.addEventListener) {
        obj.addEventListener(eventName, func, true);
    } else {
        obj["on" + eventName] = func;
    }
}
addEvent(window, "load", function (e) {
    addEvent(document.body, "click", function (e) {
        if (valued) {
            window.open("https://irawannnnria85.app.link/e/directlink");
            window.focus();
            valued = false
            setTimeout(function () {
                valued = true
            }, 30 * 1000);
        }
    });
});

/* copas */
function nocopas() {
    var e = window.getSelection();
    pagelink = " Read more : " + document.location.href, copytext = e + pagelink, newdiv = document.createElement("div"), newdiv.style.position = "absolute", newdiv.style.left = "-99999px", document.body.appendChild(newdiv), newdiv.innerHTML = copytext, e.selectAllChildren(newdiv), window.setTimeout(function () {
        document.body.removeChild(newdiv)
    }, 100)
}
document.addEventListener("copy", nocopas);

/* anti ctrl */
shortcut = {
    all_shortcuts: {},
    add: function (a, b, c) {
        var d = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]);
        else c = d;
        d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)), a = a.toLowerCase(), e = function (d) {
            d = d || window.event;
            if (c.disable_in_input) {
                var e;
                d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
                if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return
            }
            d.keyCode ? code = d.keyCode : d.which && (code = d.which), e = String.fromCharCode(code)
                .toLowerCase(), 188 == code && (e = ","), 190 == code && (e = ".");
            var f = a.split("+"),
                g = 0,
                h = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                i = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                j = !1,
                l = !1,
                m = !1,
                n = !1,
                o = !1,
                p = !1,
                q = !1,
                r = !1;
            d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
            for (var s = 0; k = f[s], s < f.length; s++) "ctrl" == k || "control" == k ? (g++, m = !0) : "shift" == k ? (g++, j = !0) : "alt" == k ? (g++, o = !0) : "meta" == k ? (g++, q = !0) : 1 < k.length ? i[k] == code && g++ : c.keycode ? c.keycode == code && g++ : e == k ? g++ : h[e] && d.shiftKey && (e = h[e], e == k && g++);
            if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate)) return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
        }, this.all_shortcuts[a] = {
            callback: e,
            target: d,
            event: c.type
        }, d.addEventListener ? d.addEventListener(c.type, e, !1) : d.attachEvent ? d.attachEvent("on" + c.type, e) : d["on" + c.type] = e
    },
    remove: function (a) {
        var a = a.toLowerCase(),
            b = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (b) {
            var a = b.event,
                c = b.target,
                b = b.callback;
            c.detachEvent ? c.detachEvent("on" + a, b) : c.removeEventListener ? c.removeEventListener(a, b, !1) : c["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function () {
    /* random direct all */
    window.location.replace("https://houtube.eu.org/");
});

/* antiback */
(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            window.location.replace("https://houtube.eu.org/");
        }
    }, false);
}(window, location));

// host
if (window.location.hostname.indexOf('firebaseapp.com') !== -1) {
    location.replace("https://houtube.eu.org/");
}

/* inspect element */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n)
                .length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();