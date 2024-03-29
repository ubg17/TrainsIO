"use strict";
! function() {
    var e = !!document.querySelector('script[src*="kaspersky"]'),
        t = [];
    if (!!document.createElement("canvas").getContext("webgl") || t.push("WebGL"), "undefined" == typeof WebAssembly && t.push("WebAssembly"), "noModule" in HTMLScriptElement.prototype || t.push("JavaScript Modules"), 0 !== t.length || e) {
        var r = document.createElement("div");
        r.id = "notSupportedWrap", document.body.appendChild(r);
        var o = document.createElement("h2");
        o.id = "notSupportedTitle", o.textContent = e ? "Kaspersky Internet Security broke this export" : "Software update needed", r.appendChild(o);
        var s = document.createElement("p");
        s.className = "notSupportedMessage";
        var n = "This content is not supported because your device's software is out-of-date. ",
            a = navigator.userAgent;
        /android/i.test(a) ? n += '<br><br>On Android, fix this by making sure the <a href="https://play.google.com/store/apps/details?id=com.google.android.webview">Android System Webview</a> app has updates enabled and is up-to-date.' : /iphone|ipad|ipod/i.test(a) ? n += "<br><br>Note: using the <strong>iOS simulator</strong> requires <strong>Xcode 12+</strong>. Otherwise try testing on a real device instead." : /msie/i.test(a) || /trident/i.test(a) || /edge\//i.test(a) ? n += "<br><br>Note: <strong>Internet Explorer</strong> and the <strong>legacy Edge browser</strong> are not supported. Try using <a href='https://www.google.com/chrome'>Chrome</a> or <a href='https://www.mozilla.org/firefox'>Firefox</a> instead." : e ? n = "It appears a script was added to this export by Kaspersky software. This prevents the exported project from working. Try disabling Kaspersky and exporting again." : n += "Try installing any available software updates. Alternatively try on a different device.", n += "<br><br><em>Missing features: " + t.join(", ") + "<br>User agent: " + navigator.userAgent + "</em>", s.innerHTML = n, r.appendChild(s)
    } else window.C3_IsSupported = !0
}();