function removeSpaces(e) {
    return e = e.replace(/\s/g, "")
}
videojs.registerPlugin("downloadAudio", (function() {
    if (videojs.browser.IS_IOS)
        return;
    this.on("play", (function() {
        let e = this
          , t = []
          , n = e.mediainfo.name;
        n = removeSpaces(n);
        let o = e.mediainfo.sources
          , r = o.length;
        for (var i = 0; i < r; i++)
            "MP4" === o[i].container && o[i].hasOwnProperty("src") && t.push(o[i]);
        if (t.sort((function(e, t) {
            return t.size - e.size
        }
        )),
        t.length > 0) {
            let o = t[0].src
              , r = document.createElement("div");
            r.id = "downloadImage",
            r.className = "vjs-control downloadStyle";
            let i = document.createElement("img");
            i.setAttribute("src", "https://solutions.brightcove.com/bcls/brightcove-player/download-video/file-download.png"),
            i.style.cursor = "pointer",
            i.onclick = function() {
                var e = new XMLHttpRequest;
                e.open("GET", o, !0),
                e.responseType = "blob",
                e.onload = function(t) {
                    download(e.response, n, "video/mp4")
                }
                ,
                e.send()
            }
            ,
            r.appendChild(i);
            let a = e.controlBar.customControlSpacer.el();
            a.setAttribute("style", "justify-content: flex-end;"),
            a.appendChild(r)
        }
    }
    ))
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.download = t()
}(this, (function() {
    return function e(t, n, o) {
        var r, i, a = window, d = "application/octet-stream", s = o || d, l = t, c = !n && !o && l, u = document.createElement("a"), p = function(e) {
            return String(e)
        }, f = a.Blob || a.MozBlob || a.WebKitBlob || p, m = n || "download";
        if (f = f.call ? f.bind(a) : Blob,
        "true" === String(this) && (s = (l = [l, s])[0],
        l = l[1]),
        c && c.length < 2048 && (m = c.split("/").pop().split("?")[0],
        u.href = c,
        -1 !== u.href.indexOf(c))) {
            var b = new XMLHttpRequest;
            return b.open("GET", c, !0),
            b.responseType = "blob",
            b.onload = function(t) {
                e(t.target.response, m, d)
            }
            ,
            setTimeout((function() {
                b.send()
            }
            ), 0),
            b
        }
        if (/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(l)) {
            if (!(l.length > 2096103.424 && f !== p))
                return navigator.msSaveBlob ? navigator.msSaveBlob(h(l), m) : w(l);
            s = (l = h(l)).type || d
        }
        function h(e) {
            for (var t = e.split(/[:;,]/), n = t[1], o = ("base64" == t[2] ? atob : decodeURIComponent)(t.pop()), r = o.length, i = 0, a = new Uint8Array(r); i < r; ++i)
                a[i] = o.charCodeAt(i);
            return new f([a],{
                type: n
            })
        }
        function w(e, t) {
            if ("download"in u)
                return u.href = e,
                u.setAttribute("download", m),
                u.className = "download-js-link",
                u.innerHTML = "downloading...",
                u.style.display = "none",
                document.body.appendChild(u),
                setTimeout((function() {
                    u.click(),
                    document.body.removeChild(u),
                    !0 === t && setTimeout((function() {
                        a.URL.revokeObjectURL(u.href)
                    }
                    ), 250)
                }
                ), 66),
                !0;
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))
                return e = e.replace(/^data:([\w\/\-\+]+)/, d),
                window.open(e) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = e),
                !0;
            var n = document.createElement("iframe");
            document.body.appendChild(n),
            t || (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, d)),
            n.src = e,
            setTimeout((function() {
                document.body.removeChild(n)
            }
            ), 333)
        }
        if (r = l instanceof f ? l : new f([l],{
            type: s
        }),
        navigator.msSaveBlob)
            return navigator.msSaveBlob(r, m);
        if (a.URL)
            w(a.URL.createObjectURL(r), !0);
        else {
            if ("string" == typeof r || r.constructor === p)
                try {
                    return w("data:" + s + ";base64," + a.btoa(r))
                } catch (e) {
                    return w("data:" + s + "," + encodeURIComponent(r))
                }
            (i = new FileReader).onload = function(e) {
                w(this.result)
            }
            ,
            i.readAsDataURL(r)
        }
        return !0
    }
}
));
let playersAdPlaying = []
  , playersStarted = [];
videojs.registerPlugin("scrollIntoViewAds", (function() {
    let e = this;
    function a(e, a) {
        let d = a.el().id
          , l = playersAdPlaying.includes(d);
        if (!l)
            return;
        let t = l ? a.ima3.adPlayer : a;
        e ? (t.play(),
        l && a.pause()) : t.pause()
    }
    function d(e, d) {
        let l = d.el().id;
        playersStarted.includes(l) && a(e, d)
    }
    e.on(["ads-ad-started", "ads-ad-ended", "ima3-complete", "ads-ad-skipped", "adserror", "ads-ad-skipped", "ads-allpods-completed"], (function(e) {
        let a = e.target.player.el().id;
        var d, l, t;
        "ads-ad-started" == e.type || "ads-play" == e.type ? playersAdPlaying.includes(a) || playersAdPlaying.push(a) : (l = a,
        -1 !== (t = (d = playersAdPlaying).indexOf(l)) && d.splice(t, 1))
    }
    )),
    e.on(["play"], (function(e) {
        let a = e.target.player.el().id;
        playersStarted.includes(a) || playersStarted.push(a)
    }
    )),
    window.addEventListener("focus", (function() {
        d(!0, e)
    }
    ), !1),
    window.addEventListener("blur", (function() {
        d(!1, e)
    }
    ), !1)
}
));
function hideSugeridos() {
    document.getElementsByClassName("bc-sugeridos").length > 0 && document.getElementsByClassName("bc-sugeridos")[0].parentElement.remove()
}
let slideIndex = 1;
function moveSlide(e) {
    showSlide(slideIndex += e)
}
function showSlide(e) {
    let i = document.getElementsByClassName("sugeridosItem");
    if (0 != i.length) {
        e > i.length && (slideIndex = 1),
        e < 1 && (slideIndex = i.length);
        for (let e = 0; e < i.length; e++)
            i[e].style.display = "none";
        i[slideIndex - 1].style.display = "block"
    }
}
function checkIsMobile() {
    return window.matchMedia("(max-width: 767px)").matches
}
function getChunks(e, i) {
    if (i <= 0)
        return e;
    let s = [];
    for (var l = 0, t = e.length; l < t; l += i)
        s.push(e.slice(l, l + i));
    return s
}
function createLayerSugeridos(e, i) {
    try {
        if (null == e || !Array.isArray(e))
            return null;
        i && null != i && "" !== i || (i = "Vídeos sugeridos");
        var s = checkIsMobile()
          , l = '<div class="bc-sugeridos"><span class="titleSugeridos">' + i + '</span><a class="closeSugeridos" href="javascript:void(0)" onclick="hideSugeridos()" title="Fechar Sugeridos">x</a><div class="slideshow-container">';
        if (s && (l += '<div class="sugeridosItem fadesugeridos">    <div class="sugeridosMain">        <div class="sugeridosOutros">' + buildSugeridosOutrosHtml(e) + "        </div>    </div></div>"),
        !s) {
            l += '<div class="sugeridosItem fadesugeridos">    <div class="sugeridosMain">' + buildSugeridosMainDesktopHtml(e.splice(0, 7)) + "    </div></div>";
            var t = getChunks(e, 9);
            if (null != t && t.length > 0)
                for (var d = 0; d < t.length; d++)
                    l += '<div class="sugeridosItem fadesugeridos">    <div class="sugeridosMain">        <div class="sugeridosOutros">' + buildSugeridosOutrosHtml(t[d]) + "        </div>    </div></div>";
            l += '<a class="prev" onclick="moveSlide(-1)">&#10094;</a><a class="next" onclick="moveSlide(1)">&#10095;</a>'
        }
        return l += "</div></div>"
    } catch (e) {
        console.log(e, e.message)
    }
    return null
}
function buildSugeridosMainDesktopHtml(e) {
    let i = ' <div class="sugeridoSeguinte">';
    if (i += buildArticleHtml(e[0], !0),
    i += "</div>",
    e.length > 1) {
        i += '<div class="sugeridosProximos">';
        for (var s = 1; s < e.length; s++)
            i += buildArticleHtml(e[s]);
        i += "</div>"
    }
    return i
}
function buildSugeridosOutrosHtml(e) {
    let i = "";
    for (var s = 0; s < e.length; s++)
        i += buildArticleHtml(e[s]);
    return i
}
function buildArticleHtml(e, i) {
    let s = '<article class="sugeridoCover" style="background-image: url(' + e.image + ');">     <div class="videoTitle">';
    return !0 === i && (s += '         <span class="videoSeguinte">Seguinte</span>'),
    s += '         <a href="' + e.link + '" title="' + e.title + '">' + e.title + "</a>     </div> </article>",
    s
}
