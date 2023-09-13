require = function i(s, n, o) {
    function r(e, t) {
        if (!n[e]) {
            if (!s[e]) {
                var a = "function" == typeof require && require;
                if (!t && a) return a(e, !0);
                if (l) return l(e, !0);
                throw (a = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", a
            }
            a = n[e] = {
                exports: {}
            }, s[e][0].call(a.exports, function(t) {
                return r(s[e][1][t] || t)
            }, a, a.exports, i, s, n, o)
        }
        return n[e].exports
    }
    for (var l = "function" == typeof require && require, t = 0; t < o.length; t++) r(o[t]);
    return r
}({
    1: [function(t, e, a) {
        window.app = function() {
            window.browser = t("browser"), window.breakpoints = t("breakpoints"), window.$ = window.jQuery = t("jquery"), window.md5 = t("md5"), t("jquery.touch"), t("web");
            t("form"), t("tabs");
            var p = {
                tmp: null,
                buildTimestamp: 1641936433,
                instanceId: null,
                countries: {
                    us: "United States",
                    af: "Afghanistan",
                    ax: "Aland Islands",
                    al: "Albania",
                    dz: "Algeria",
                    as: "American Samoa",
                    ad: "Andorra",
                    ao: "Angola",
                    ai: "Anguilla",
                    aq: "Antarctica",
                    ag: "Antigua And Barbuda",
                    ar: "Argentina",
                    am: "Armenia",
                    aw: "Aruba",
                    au: "Australia",
                    at: "Austria",
                    az: "Azerbaijan",
                    bs: "Bahamas",
                    bh: "Bahrain",
                    bd: "Bangladesh",
                    bb: "Barbados",
                    by: "Belarus",
                    be: "Belgium",
                    bz: "Belize",
                    bj: "Benin",
                    bm: "Bermuda",
                    bt: "Bhutan",
                    bo: "Bolivia",
                    bq: "Bonaire",
                    ba: "Bosnia And Herzegovina",
                    bw: "Botswana",
                    bv: "Bouvetisland",
                    br: "Brazil",
                    io: "British Indian Ocean Territory",
                    bn: "Brunei Darussalam",
                    bg: "Bulgaria",
                    bf: "Burkina Faso",
                    bi: "Burundi",
                    kh: "Cambodia",
                    cm: "Cameroon",
                    ca: "Canada",
                    cv: "Capeverde",
                    ky: "Cayman Islands",
                    cf: "Central African Republic",
                    td: "Chad",
                    cl: "Chile",
                    cn: "China",
                    cx: "Christmas Island",
                    cc: "Cocos (Keeling) Islands",
                    co: "Colombia",
                    km: "Comoros",
                    cg: "Congo",
                    cd: "Congo",
                    ck: "Cook Islands",
                    cr: "Costarica",
                    ci: "Cote D'Ivoire",
                    hr: "Croatia",
                    cu: "Cuba",
                    cw: "Curacao",
                    cy: "Cyprus",
                    cz: "Czech Republic",
                    dk: "Denmark",
                    dj: "Djibouti",
                    dm: "Dominica",
                    do: "Dominican Republic",
                    ec: "Ecuador",
                    eg: "Egypt",
                    sv: "El Salvador",
                    gq: "Equatorial Guinea",
                    er: "Eritrea",
                    ee: "Estonia",
                    et: "Ethiopia",
                    fk: "Falkland Islands (Malvinas)",
                    fo: "Faroe Islands",
                    fj: "Fiji",
                    fi: "Finland",
                    fr: "France",
                    gf: "French Guiana",
                    pf: "French Polynesia",
                    tf: "French Southern Territories",
                    ga: "Gabon",
                    gm: "Gambia",
                    ge: "Georgia",
                    de: "Germany",
                    gh: "Ghana",
                    gi: "Gibraltar",
                    gr: "Greece",
                    gl: "Greenland",
                    gd: "Grenada",
                    gp: "Guadeloupe",
                    gu: "Guam",
                    gt: "Guatemala",
                    gg: "Guernsey",
                    gn: "Guinea",
                    gw: "Guinea-Bissau",
                    gy: "Guyana",
                    ht: "Haiti",
                    hm: "Heard Island And Mcdonald Islands",
                    va: "Vatican City State",
                    hn: "Honduras",
                    hk: "Hongkong",
                    hu: "Hungary",
                    is: "Iceland",
                    in: "India",
                    id: "Indonesia",
                    ir: "Iran",
                    iq: "Iraq",
                    ie: "Ireland",
                    im: "Isleofman",
                    il: "Israel",
                    it: "Italy",
                    jm: "Jamaica",
                    jp: "Japan",
                    je: "Jersey",
                    jo: "Jordan",
                    kz: "Kazakhstan",
                    ke: "Kenya",
                    ki: "Kiribati",
                    kp: "Democratic People's Republic Of Korea",
                    kr: "Republic Of Korea",
                    kw: "Kuwait",
                    kg: "Kyrgyzstan",
                    la: "Lao People's Democratic Republic",
                    lv: "Latvia",
                    lb: "Lebanon",
                    ls: "Lesotho",
                    lr: "Liberia",
                    ly: "Libyan Arab Jamahiriya",
                    li: "Liechtenstein",
                    lt: "Lithuania",
                    lu: "Luxembourg",
                    mo: "Macao",
                    mk: "Macedonia",
                    mg: "Madagascar",
                    mw: "Malawi",
                    my: "Malaysia",
                    mv: "Maldives",
                    ml: "Mali",
                    mt: "Malta",
                    mh: "Marshall Islands",
                    mq: "Martinique",
                    mr: "Mauritania",
                    mu: "Mauritius",
                    yt: "Mayotte",
                    mx: "Mexico",
                    fm: "Micronesia",
                    md: "Moldova",
                    mc: "Monaco",
                    mn: "Mongolia",
                    me: "Montenegro",
                    ms: "Montserrat",
                    ma: "Morocco",
                    mz: "Mozambique",
                    mm: "Myanmar",
                    na: "Namibia",
                    nr: "Nauru",
                    np: "Nepal",
                    nl: "Netherlands",
                    nc: "New Caledonia",
                    nz: "New Zealand",
                    ni: "Nicaragua",
                    ne: "Niger",
                    ng: "Nigeria",
                    nu: "Niue",
                    nf: "Norfolk Island",
                    mp: "Northern Mariana Islands",
                    no: "Norway",
                    om: "Oman",
                    pk: "Pakistan",
                    pw: "Palau",
                    ps: "Palestinian Territory",
                    pa: "Panama",
                    pg: "Papuanewguinea",
                    py: "Paraguay",
                    pe: "Peru",
                    ph: "Philippines",
                    pn: "Pitcairn",
                    pl: "Poland",
                    pt: "Portugal",
                    pr: "Puertorico",
                    qa: "Qatar",
                    re: "Reunion",
                    ro: "Romania",
                    ru: "Russia",
                    rw: "Rwanda",
                    bl: "Saint Barthelemy",
                    sh: "Saint Helena",
                    kn: "Saint Kitts And Nevis",
                    lc: "Saint Lucia",
                    mf: "Saint Martin",
                    pm: "Saint Pierre And Miquelon",
                    vc: "Saint Vincent And The Grenadines",
                    ws: "Samoa",
                    sm: "Sanmarino",
                    st: "Saotome And Principe",
                    sa: "Saudi Arabia",
                    sn: "Senegal",
                    rs: "Serbia",
                    sc: "Seychelles",
                    sl: "Sierraleone",
                    sg: "Singapore",
                    sx: "Sintmaarten",
                    sk: "Slovakia",
                    si: "Slovenia",
                    sb: "Solomon Islands",
                    so: "Somalia",
                    za: "South Africa",
                    gs: "South Georgia And The South Sandwich Islands",
                    es: "Spain",
                    lk: "Srilanka",
                    sd: "Sudan",
                    sr: "Suriname",
                    sj: "Svalbard And Jan Mayen",
                    sz: "Swaziland",
                    se: "Sweden",
                    ch: "Switzerland",
                    sy: "Syrian Arab Republic",
                    tw: "Taiwan",
                    tj: "Tajikistan",
                    tz: "Tanzania",
                    th: "Thailand",
                    tl: "Timor-Leste",
                    tg: "Togo",
                    tk: "Tokelau",
                    to: "Tonga",
                    tt: "Trinidad And Tobago",
                    tn: "Tunisia",
                    tr: "Turkey",
                    tm: "Turkmenistan",
                    tc: "Turks And Caicos Islands",
                    tv: "Tuvalu",
                    ug: "Uganda",
                    ua: "Ukraine",
                    ae: "United Arab Emirates",
                    gb: "United Kingdom",
                    um: "United States Minor Outlying Islands",
                    uy: "Uruguay",
                    uz: "Uzbekistan",
                    vu: "Vanuatu",
                    ve: "Venezuela",
                    vn: "Vietnam",
                    vg: "British Virgin Islands",
                    vi: "Us Virgin Islands",
                    wf: "Wallis And Futuna",
                    eh: "Western Sahara",
                    ye: "Yemen",
                    zm: "Zambia",
                    zw: "Zimbabwe"
                },
                languages: {
                    ab: "Abkhazian",
                    aa: "Afar",
                    af: "Afrikaans",
                    ak: "Akan",
                    sq: "Albanian",
                    am: "Amharic",
                    ar: "Arabic",
                    an: "Aragonese",
                    hy: "Armenian",
                    as: "Assamese",
                    av: "Avaric",
                    ae: "Avestan",
                    ay: "Aymara",
                    az: "Azerbaijani",
                    bm: "Bambara",
                    ba: "Bashkir",
                    eu: "Basque",
                    be: "Belarusian",
                    bn: "Bengali",
                    bh: "Bihari languages",
                    bi: "Bislama",
                    nb: "Bokmål, Norwegian",
                    bs: "Bosnian",
                    br: "Breton",
                    bg: "Bulgarian",
                    my: "Burmese",
                    ca: "Catalan",
                    km: "Central Khmer",
                    ch: "Chamorro",
                    ce: "Chechen",
                    ny: "Chichewa",
                    zh: "Chinese",
                    cu: "Church Slavic",
                    cv: "Chuvash",
                    kw: "Cornish",
                    co: "Corsican",
                    cr: "Cree",
                    hr: "Croatian",
                    cs: "Czech",
                    da: "Danish",
                    dv: "Divehi",
                    nl: "Dutch",
                    dz: "Dzongkha",
                    en: "English",
                    eo: "Esperanto",
                    et: "Estonian",
                    ee: "Ewe",
                    fo: "Faroese",
                    fj: "Fijian",
                    fi: "Finnish",
                    fr: "French",
                    ff: "Fulah",
                    gd: "Gaelic",
                    gl: "Galician",
                    lg: "Ganda",
                    ka: "Georgian",
                    de: "German",
                    el: "Greek",
                    gn: "Guarani",
                    gu: "Gujarati",
                    ht: "Haitian",
                    ha: "Hausa",
                    he: "Hebrew",
                    hz: "Herero",
                    hi: "Hindi",
                    ho: "Hiri Motu",
                    hu: "Hungarian",
                    is: "Icelandic",
                    io: "Ido",
                    ig: "Igbo",
                    id: "Indonesian",
                    ia: "Interlingua",
                    ie: "Interlingue",
                    iu: "Inuktitut",
                    ik: "Inupiaq",
                    ga: "Irish",
                    it: "Italian",
                    ja: "Japanese",
                    jv: "Javanese",
                    kl: "Kalaallisut",
                    kn: "Kannada",
                    kr: "Kanuri",
                    ks: "Kashmiri",
                    kk: "Kazakh",
                    ki: "Kikuyu",
                    rw: "Kinyarwanda",
                    ky: "Kirghiz",
                    kv: "Komi",
                    kg: "Kongo",
                    ko: "Korean",
                    kj: "Kuanyama",
                    ku: "Kurdish",
                    lo: "Lao",
                    la: "Latin",
                    lv: "Latvian",
                    li: "Limburgan",
                    ln: "Lingala",
                    lt: "Lithuanian",
                    lu: "Luba-Katanga",
                    lb: "Luxembourgish",
                    mk: "Macedonian",
                    mg: "Malagasy",
                    ms: "Malay",
                    ml: "Malayalam",
                    mt: "Maltese",
                    gv: "Manx",
                    mi: "Maori",
                    mr: "Marathi",
                    mh: "Marshallese",
                    mn: "Mongolian",
                    na: "Nauru",
                    nv: "Navajo",
                    nd: "Ndebele, North",
                    nr: "Ndebele, South",
                    ng: "Ndonga",
                    ne: "Nepali",
                    se: "Northern Sami",
                    no: "Norwegian",
                    nn: "Norwegian Nynorsk",
                    oc: "Occitan",
                    oj: "Ojibwa",
                    or: "Oriya",
                    om: "Oromo",
                    os: "Ossetian",
                    pi: "Pali",
                    pa: "Panjabi",
                    fa: "Persian",
                    pl: "Polish",
                    pt: "Portuguese",
                    "pt-br": "Portuguese, Brazilian",
                    ps: "Pushto",
                    qu: "Quechua",
                    ro: "Romanian",
                    rm: "Romansh",
                    rn: "Rundi",
                    ru: "Russian",
                    sm: "Samoan",
                    sg: "Sango",
                    sa: "Sanskrit",
                    sc: "Sardinian",
                    sr: "Serbian",
                    sn: "Shona",
                    ii: "Sichuan Yi",
                    sd: "Sindhi",
                    si: "Sinhala",
                    sk: "Slovak",
                    sl: "Slovenian",
                    so: "Somali",
                    st: "Sotho, Southern",
                    es: "Spanish",
                    su: "Sundanese",
                    sw: "Swahili",
                    ss: "Swati",
                    sv: "Swedish",
                    tl: "Tagalog",
                    ty: "Tahitian",
                    tg: "Tajik",
                    ta: "Tamil",
                    tt: "Tatar",
                    te: "Telugu",
                    th: "Thai",
                    bo: "Tibetan",
                    ti: "Tigrinya",
                    to: "Tonga",
                    ts: "Tsonga",
                    tn: "Tswana",
                    tr: "Turkish",
                    tk: "Turkmen",
                    tw: "Twi",
                    ug: "Uighur",
                    uk: "Ukrainian",
                    ur: "Urdu",
                    uz: "Uzbek",
                    ve: "Venda",
                    vi: "Vietnamese",
                    vo: "Volapük",
                    wa: "Walloon",
                    cy: "Welsh",
                    fy: "Western Frisian",
                    wo: "Wolof",
                    xh: "Xhosa",
                    yi: "Yiddish",
                    yo: "Yoruba",
                    za: "Zhuang",
                    zu: "Zulu"
                },
                touch: {
                    useTouch: !0,
                    useMouse: !0,
                    dragStartEvents: "dragStart tapAndHold",
                    dragPreventDefault: !1,
                    scrollbars: !0
                },
                flags: {
                    incompleteSVG: !1
                },
                registry: {
                    get: function(t) {
                        return localStorage.getItem(t)
                    },
                    set: function(t, e) {
                        return localStorage.setItem(t, e)
                    },
                    unset: function(t) {
                        return localStorage.removeItem(t)
                    },
                    exists: function(t) {
                        return null !== localStorage.getItem(t)
                    },
                    watch: function(t) {
                        window.addEventListener("storage", t)
                    }
                },
                temp: {
                    get: function(t) {
                        return sessionStorage.getItem(t)
                    },
                    set: function(t, e) {
                        return sessionStorage.setItem(t, e)
                    },
                    unset: function(t) {
                        return sessionStorage.removeItem(t)
                    },
                    exists: function(t) {
                        return null !== sessionStorage.getItem(t)
                    }
                },
                flag: {
                    has: function(t, e) {
                        return web.bit.has(t, e)
                    },
                    set: function(t, e) {
                        return web.bit.on(t, e)
                    },
                    unset: function(t, e) {
                        return web.bit.off(t, e)
                    }
                },
                rootCSS: {
                    setVar: function(t, e) {
                        document.documentElement.style.setProperty("--" + t, e)
                    },
                    unsetVar: function(t) {
                        document.documentElement.style.setProperty("--" + t, null)
                    }
                },
                dialog: {
                    $wrapper: null,
                    $inner: null,
                    $content: null,
                    $actions: null,
                    $notice: null,
                    timeoutId: null,
                    init: function() {
                        var e = this;
                        this.$wrapper = $('<div id="dialog" class="modal" tabindex="-1"><section class="inner"><div class="content"></div><ul class="actions special"></ul><p class="notice"></p><span class="close do-close"><svg><use xlink:href="#icon-cancel"></use></svg></span></section></div>').on("mousedown", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.isLocked() || e.inPreshow() || e.hide()
                        }).on("click mousedown", ".inner", function(t) {
                            t.stopPropagation()
                        }).on("click", ".do-close", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.isLocked() || e.hide()
                        }).on("keydown", function(t) {
                            if (!e.isLocked()) switch (t.keyCode) {
                                case 13:
                                    if (e.inPreshow()) return;
                                    e.$actions.find("li > span").first().not(".disabled").trigger("click");
                                    break;
                                case 27:
                                    if (e.inPreshow()) return;
                                    e.hide()
                            }
                        }), this.$inner = this.$wrapper.find(".inner"), this.$content = this.$wrapper.find(".content"), this.$actions = this.$wrapper.find(".actions"), this.$notice = this.$wrapper.find(".notice")
                    },
                    show: function(t) {
                        var e, a, i = this,
                            s = 0;
                        for (this.$wrapper.appendTo(p.$body), e = $.extend({
                                content: null,
                                title: "Alert",
                                message: "Something happened apparently.",
                                html: !1,
                                class: null,
                                dockable: !1,
                                confirmation: !1,
                                error: !1,
                                actions: {
                                    Okay: function() {
                                        this.hide()
                                    }
                                },
                                notice: null,
                                noticeType: "none",
                                show: null,
                                delay: 100
                            }, t), this.$content.children().remove(), e.content ? this.$content.html(e.content) : (e.title && this.$content.append('<h2 class="title">' + e.title + "</h2>"), e.message && this.$content.append('<div class="message">' + (e.html ? e.message : "<p>" + e.message + "</p>") + "</div>")), null === e.notice ? this.$notice.hide() : this.$notice.attr("data-type", e.noticeType).show().html(e.notice), this.$actions.children().remove(), null === e.actions ? this.$actions.hide() : (this.$actions.show(), s = 0, $.each(e.actions, function(t, a) {
                                $('<li><span class="button' + (0 == s++ ? e.error ? " error" : " special" : "") + (!1 === a ? " disabled" : "") + '">' + t + "</span></li>").appendTo(i.$actions).on("click", ".button", function(t) {
                                    var e = $(this);
                                    t.preventDefault(), t.stopPropagation(), e.hasClass("disabled") || a.apply(i)
                                })
                            })), e.confirmation && (i.$actions.find("li > span").first().addClass("disabled"), this.$content.append('<div class="confirmation"><input type="checkbox" id="dialog-confirmation" /><label for="dialog-confirmation">' + e.confirmation + "</label></div>"), this.$content.find('input[type="checkbox"]').on("change", function() {
                                var t = $(this),
                                    e = i.$actions.find("li > span").first();
                                t.prop("checked") ? e.removeClass("disabled") : e.addClass("disabled")
                            })), e.show && e.show.apply(this), a = this.$wrapper[0].classList, s = 0; s < a.length; s++) "modal" != a[s] && "preshow" != a[s] && "visible" != a[s] && this.$wrapper.removeClass(a[s]);
                        e.class && this.$wrapper.addClass(e.class), e.dockable && (p.$body.css("overflow", "hidden"), p.$window.on("resize.dialog", function() {
                            clearTimeout(i.timeoutId), i.timeoutId = setTimeout(function() {
                                var t = p.$window.height(),
                                    e = i.$inner.height();
                                i.$wrapper.hasClass("docked") ? e < t && i.$wrapper.removeClass("docked") : t < e && i.$wrapper.addClass("docked")
                            }, 25)
                        }).trigger("resize.dialog")), window.setTimeout(function() {
                            i.$wrapper.removeClass("preshow"), i.$wrapper.addClass("visible"), window.setTimeout(function() {
                                i.$wrapper.focus()
                            }, 150)
                        }, e.delay)
                    },
                    hide: function() {
                        var t = this;
                        this.$wrapper.removeClass("visible"), window.setTimeout(function() {
                            t.$content.children().remove(), t.$notice.html(""), t.$actions.children().remove(), p.$body.css("overflow", ""), p.$window.off("resize.dialog"), clearTimeout(t.timeoutId)
                        }, 125)
                    },
                    preshow: function(t) {
                        var e = this;
                        this.$wrapper.appendTo(p.$body), this.$wrapper.addClass("preshow"), t ? this.$wrapper.removeClass("with-spinner") : this.$wrapper.addClass("with-spinner"), window.setTimeout(function() {
                            e.$wrapper.addClass("visible")
                        }, 100), window.setTimeout(function() {
                            e.$wrapper.focus()
                        }, 250)
                    },
                    inPreshow: function() {
                        return this.$wrapper.hasClass("preshow")
                    },
                    isLocked: function() {
                        return this.$wrapper.hasClass("locked")
                    }
                },
                progressOverlay: {
                    $wrapper: null,
                    $progress: null,
                    $status: null,
                    options: null,
                    autoIntervalId: null,
                    autoProgressHandler: null,
                    autoStatusHandler: null,
                    init: function() {
                        this.$wrapper = $('<div id="progress-overlay" tabindex="-1"><div class="progress"></div><div class="status"></div></div>'), this.$progress = this.$wrapper.find(".progress"), this.$status = this.$wrapper.find(".status")
                    },
                    show: function(t) {
                        var e, a = this;
                        for (0 == this.$wrapper.parent().length && this.$wrapper.appendTo(p.$body), this.options = $.extend({
                                class: null,
                                scrollLock: !1
                            }, t), this.$progress.attr("data-value", "0"), this.$status.text(""), e = this.$wrapper[0].classList, i = 0; i < e.length; i++) "visible" != e[i] && this.$wrapper.removeClass(e[i]);
                        this.options.class && this.$wrapper.addClass(this.options.class), a.$wrapper.addClass("visible"), this.options.scrollLock && p.$body.css("overflow", "hidden"), window.setTimeout(function() {
                            a.$wrapper.focus()
                        }, 100), window.setTimeout(function() {
                            a.$wrapper.addClass("active")
                        }, 250)
                    },
                    hide: function() {
                        var t = this;
                        this.autoIntervalId && (clearInterval(this.autoIntervalId), this.progress(this.autoProgressHandler(100), this.autoStatusHandler ? this.autoStatusHandler(100) : void 0)), t.$wrapper.removeClass("active"), setTimeout(function() {
                            t.$progress.attr("data-value", "0"), t.$status.text(""), t.$wrapper.removeClass("visible"), t.options.scrollLock && p.$body.css("overflow", ""), t.options = null
                        }, 250)
                    },
                    progress: function(t, e, a) {
                        if (void 0 === t) return parseInt(this.$progress.attr("data-value"));
                        this.$progress.attr("data-value", t), void 0 !== e && this.status(e, a)
                    },
                    status: function(t) {
                        this.$status.text(t)
                    },
                    auto: function(e, t, a, i) {
                        var s = this;
                        this.autoProgressHandler = a, this.autoStatusHandler = i, this.autoIntervalId = setInterval(function() {
                            var t = Math.min(98, s.progress() + e);
                            s.progress(s.autoProgressHandler(t), s.autoStatusHandler ? s.autoStatusHandler(t) : void 0)
                        }, t)
                    }
                },
                $window: null,
                $document: null,
                $head: null,
                $body: null,
                $html: null,
                URL_PLACEHOLDER: "https://domain.ext/path",
                dataUrl: {
                    is: function(t) {
                        return "string" == typeof t && !!t.match(/^data:/)
                    },
                    createFromUrl: function(t, a) {
                        var e = new XMLHttpRequest;
                        e.open("GET", t, !0), e.responseType = "blob", e.onload = function(t) {
                            var e = new FileReader;
                            e.onloadend = function() {
                                a(e.result)
                            }, e.readAsDataURL(this.response)
                        }, e.send()
                    }
                },
                objectUrl: {
                    list: {},
                    is: function(t) {
                        return "string" == typeof t && !!t.match(/^blob:/)
                    },
                    get: function(t) {
                        return t in this.list ? this.list[t] : null
                    },
                    create: function(t) {
                        var e = void 0 !== window.webkitURL ? window.webkitURL.createObjectURL(t) : void 0 !== window.URL ? window.URL.createObjectURL(t) : null;
                        return this.list[e] = t, e
                    },
                    revoke: function(t) {
                        void 0 !== window.webkitURL ? window.webkitURL.revokeObjectURL(t) : void 0 !== window.URL && window.URL.revokeObjectURL(t), t in this.list && delete this.list[t]
                    },
                    clone: function(t) {
                        t = this.get(t);
                        return app.objectUrl.create(t.slice())
                    },
                    createFromUrl: function(t, a) {
                        var i = this,
                            s = new XMLHttpRequest;
                        s.open("GET", t, !0), s.responseType = "arraybuffer", s.onload = function(t) {
                            var e = i.create(new Blob([new Uint8Array(this.response)], {
                                type: s.getResponseHeader("content-type")
                            }));
                            a(e)
                        }, s.send()
                    }
                },
                user: {
                    loggedIn: !1,
                    gtoken: null,
                    hash: null,
                    isLoggedIn: function() {
                        return !0 === this.loggedIn
                    },
                    isNew: function() {
                        return !this.isLoggedIn()
                    },
                    init: function(t) {
                        this.loggedIn = t.loggedIn, this.gtoken = t.gtoken, this.hash = t.hash, app.globalEvents.trigger("user.init", t)
                    },
                    sync: function(t) {
                        return this.loggedIn != t.loggedIn && (this.loggedIn = t.loggedIn, this.gtoken = t.gtoken, this.hash = t.hash, !0)
                    }
                },
                globalEvents: {
                    events: {},
                    channel: null,
                    init: function() {
                        var a = this;
                        "BroadcastChannel" in window ? (this.channel = new BroadcastChannel("default"), this.channel.onmessage = function(t) {
                            a.handle(t.data)
                        }) : app.registry.watch(function() {
                            var t, e;
                            for (t in a.events) e = "globalEvent." + t, app.registry.exists(e) && (e = app.registry.get(e), e = JSON.parse(e), a.handle(e))
                        })
                    },
                    on: function(t, e) {
                        t in this.events || (this.events[t] = []), this.events[t].push({
                            handler: e,
                            timestamp: 0
                        })
                    },
                    handle: function(t) {
                        var e, a;
                        if (t.instanceId != p.instanceId && t.event in this.events)
                            for (e in this.events[t.event]) a = this.events[t.event][e], t.timestamp > a.timestamp && (a.timestamp = t.timestamp, a.handler(t.args))
                    },
                    trigger: function(t, e) {
                        e = {
                            timestamp: Date.now(),
                            instanceId: p.instanceId,
                            event: t,
                            args: e
                        };
                        this.channel ? this.channel.postMessage(e) : (t = "globalEvent." + t, app.registry.set(t, JSON.stringify(e)))
                    }
                },
                plan: {
                    PERK_PREMIUM_NAMES: 1,
                    PERK_CUSTOM_DOMAINS: 2,
                    PERK_NO_CREDITS: 3,
                    PERK_FORM_COMPONENTS: 4,
                    PERK_ADVANCED_FORM_COMPONENTS: 5,
                    PERK_DOWNLOAD_SITES: 6,
                    PERK_TRANSFER_SITES: 7,
                    PERK_SHARE_SITES: 8,
                    PERK_PRO_TEMPLATES: 9,
                    PERK_WIDGET_COMPONENTS: 10,
                    PERK_EMBED_COMPONENTS: 11,
                    PERK_HIGH_QUALITY_ASSETS: 12,
                    PERK_LARGER_ASSETS: 13,
                    PERK_FAVICONS: 14,
                    PERK_OPENGRAPH: 15,
                    PERK_TRACKING: 16,
                    PERK_MORE_COMPONENTS: 17,
                    PERK_MORE_COMPONENTS_100: 18,
                    PERK_META: 19,
                    PERK_REDIRECTS: 20,
                    PERK_PASSWORD: 21,
                    PERK_ADVANCED_SETTINGS: 22,
                    PERK_EXPERIMENTAL: 23,
                    PERK_TEMPLATE_MODE: 24,
                    PERK_VIDEO_UPLOAD_COMPONENTS: 25,
                    PERK_SLIDESHOW_COMPONENTS: 26,
                    PERK_UNUSED_PROPLUS: 27,
                    PERK_ADVANCED_TEMPLATE_MODE: 28,
                    PERK_UPDATE_FREQUENCY: 1001,
                    PERK_MULTIPLE_SITES: 1002,
                    PERK_MULTIPLE_SITES_25: 1003,
                    PERK_MULTIPLE_SITES_50: 1004,
                    PERK_MULTIPLE_SITES_100: 1005,
                    PERK_MULTIPLE_SITES_250: 1006,
                    PERK_MULTIPLE_SITES_500: 1007,
                    PERK_UNLIMITED_SITES: 1008,
                    ID_BASIC: 1,
                    ID_TRIAL: 2,
                    id: 1,
                    lastId: null,
                    perks: [],
                    trialPerks: [],
                    trialUsed: !1,
                    startTrialHandler: null,
                    messages: {
                        upgrade: "Available with upgrade – click to learn more!",
                        full: "Available with Pro – click to learn more!",
                        trial: "Try free for 7 days – click to learn more!"
                    },
                    perkToKey: function(t) {
                        return "#" + t
                    },
                    keyToPerk: function(t) {
                        return parseInt(t.substr(1))
                    },
                    init: function(t) {
                        this.id = t.id, this.perks = t.perks, this.trialPerks = t.trialPerks, this.trialUsed = t.trialUsed, app.globalEvents.trigger("plan.init", t)
                    },
                    sync: function(t) {
                        return t.id != this.id && (this.id = t.id, this.perks = t.perks, this.trialPerks = t.trialPerks, this.trialUsed = t.trialUsed, !0)
                    },
                    dependencies: {},
                    canStartTrial: function() {
                        return !1 === this.trialUsed
                    },
                    hasPerk: function(t) {
                        return -1 !== this.perks.indexOf(t)
                    },
                    addDependency: function(e) {
                        var a = this,
                            t = this.perkToKey(e.perk);
                        e.enabled = !0, t in this.dependencies || (this.dependencies[t] = []), this.dependencies[t].push(e), "watch" in e && e.watch.on("change", function() {
                            var t = "function" == typeof e.target ? e.target() : e.target;
                            e.enabled ? t.each(function() {
                                e.enable.apply($(this))
                            }) : t.each(function() {
                                e.disable.apply($(this), [function(t) {
                                    t.preventDefault(), t.stopPropagation(), a.dependencyDialog(e.perk)(e.action)
                                }, a.dependencyMessage(e.perk)])
                            })
                        })
                    },
                    enableDependencies: function(t) {
                        var e, a, i = this.perkToKey(t);
                        for (e in this.dependencies[i])(a = this.dependencies[i][e]).enabled || (a.enable.apply("function" == typeof a.target ? a.target() : a.target), a.enabled = !0)
                    },
                    disableDependencies: function(e) {
                        var t, a, i = this,
                            s = this.perkToKey(e);
                        for (t in this.dependencies[s])(a = this.dependencies[s][t]).enabled && (a.disable.apply("function" == typeof a.target ? a.target() : a.target, [function(t) {
                            t.preventDefault(), t.stopPropagation(), i.dependencyDialog(e)(a.action)
                        }, i.dependencyMessage(e)]), a.enabled = !1)
                    },
                    refresh: function() {
                        var t, e;
                        for (t in this.dependencies) e = this.keyToPerk(t), this.hasPerk(e) ? this.enableDependencies(e) : this.disableDependencies(e)
                    },
                    dependencyDialog: function(t) {
                        return -1 != this.trialPerks.indexOf(t) && this.canStartTrial() ? this.trialDialog : this.id == this.ID_BASIC || this.id == this.ID_TRIAL ? this.fullDialog : this.upgradeDialog
                    },
                    dependencyMessage: function(t) {
                        return -1 != this.trialPerks.indexOf(t) && this.canStartTrial() ? this.messages.trial : this.id == this.ID_BASIC || this.id == this.ID_TRIAL ? this.messages.full : this.messages.upgrade
                    },
                    upgradeDialog: function() {
                        p.dialog.show({
                            title: "Available with Upgrade",
                            message: "Get access to this feature by upgrading your Pro plan.",
                            actions: {
                                "Learn More": function() {
                                    this.hide(), window.open(p.user.isLoggedIn() ? "/dashboard/account/plan/change" : "/pro")
                                },
                                "Maybe Later": function() {
                                    this.hide()
                                }
                            }
                        })
                    },
                    fullDialog: function() {
                        p.dialog.show({
                            title: "Available with Pro",
                            message: "Access this feature by upgrading to a full Pro plan from just <strong>$19 / year</strong>.",
                            actions: {
                                "Learn More": function() {
                                    this.hide(), window.open(p.user.isLoggedIn() ? "/dashboard/account/plan/change" : "/pro")
                                },
                                "Maybe Later": function() {
                                    this.hide()
                                }
                            }
                        })
                    },
                    trialDialog: function(t, e, a) {
                        var i = {};
                        a = a || "Test drive this", i[e = e || "Start Free Trial"] = function() {
                            this.hide(), p.plan.startTrialHandler(t)
                        }, i["Learn More"] = function() {
                            this.hide(), window.open(p.user.isLoggedIn() ? "/dashboard/account/plan/change" : "/pro")
                        }, i["Maybe Later"] = function() {
                            this.hide()
                        }, p.dialog.show({
                            class: "pro",
                            dockable: !0,
                            content: "<header><h2>Try Pro!</h2><p>" + a + ' and other top Pro features free for <strong>7 days</strong> &ndash; no credit card required! Upgrade to a full Pro plan any time from just <strong>$19 / year</strong>.</p></header><ul class="pro-features"><li><h3>Custom Domains</h3><p>Publish sites to any custom domains you own with <a href="/docs/sites/setting-up-ssl" target="_blank">full SSL support via Let\'s Encrypt</a>.</p></li><li><h3>Forms</h3><p>Add fully functional <a href="/docs/forms/setting-up-a-contact-form" target="_blank">contact forms</a>, <a href="/docs/forms/setting-up-a-signup-form" target="_blank">signup forms</a>, or build your own custom forms.</p></li><li><h3>Widgets</h3><p>Embed third-party widgets from <a href="/docs/building/adding-a-stripe-checkout-button" target="_blank">Stripe</a>, <a href="/docs/building/adding-a-paypal-button" target="_blank">PayPal</a>, <a href="/docs/building/adding-a-gumroad-buy-button" target="_blank">Gumroad</a>, <a href="/docs/building/adding-a-typeform" target="_blank">Typeform</a>, and more.</p></li><li><h3>High Quality Images</h3><p>Publish sites with bigger, higher quality images and backgrounds.</p></li><li><h3>Video Uploads</h3><p>Upload and use your own <a href="/docs/building/adding-videos" target="_blank">videos</a> throughout your site (or as its <a href="/docs/building/setting-a-background-video" target="_blank">background</a>).</p></li><li><h3>Slideshows</h3><p>Create fully animated slideshows as <a href="/docs/building/setting-a-background-slideshow" target="_blank">backgrounds</a> or standalone elements.</p></li><li><h3>No Branding</h3><p>Publish sites to unbranded URLs (like .crd.co) and without the "Made with Carrd" branding.</p></li><li><h3>Pro Templates</h3><p>Access premium starting point templates exclusive to all Pro users.</p></li><li><h3>And more ...</h3><p><a href="/docs/sites/setting-up-google-analytics" target="_blank">Google Analytics</a>, customizable <a href="/docs/sites/adding-a-site-icon" target="_blank">site icons</a>, editable <a href="/docs/sites/setting-up-meta-tags" target="_blank">meta tags</a>, and <a href="/docs/pro/trial" target="_blank">more</a>.</p></li></ul>',
                            actions: i
                        })
                    }
                },
                round: function(t, e) {
                    e = "number" == typeof e ? Math.pow(10, e) : 1;
                    return Math.round(t * e) / e
                },
                markdownify: function(e, t) {
                    var a, i, s = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = web.escapeHTML(e)).replace(/\\_/g, "%5F")).replace(/\\\*/g, "%2A")).replace(/\\~/g, "%7E")).replace(/\\`/g, "%80")).replace(/\\=/g, "%3D")).replace(/\\-/g, "%2D")).replace(/\\\(/g, "%28")).replace(/\\\)/g, "%29")).replace(/\\\[/g, "%5B")).replace(/\\\]/g, "%5D")).replace(/\\\{/g, "%7B")).replace(/\\\}/g, "%7D")).match(/\[([^\]]+?)\]\(([^\s\)]+?)\)/g);
                    if (s && 0 < s.length)
                        for (i in s) e = e.replace(s[i], s[i].replace(/_/g, "%5F"));
                    return a = e.match(/\[[^\[\]]+?\]\{[^\s\}]+?\}/g), Array.isArray(a) && a.forEach(function(t) {
                        (t.match(/\[[^\[\]]+?\]\{[a-zA-Z]+?\}/g) || t.match(/\[[^\[\]]+?\]\{#[a-fA-F0-9]{6}?\}/g)) && (e = e.replace(t, t.replace(/\[([^\[\]]+?)\]\{([^\s\}]+?)\}/g, '<span style%3D"color: $2">$1</span>')))
                    }), e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/\[([^\[\]]+?)\]\(([^\s\)]+?)\)/g, '<span class%3D"--a" data-href%3D"$2">$1</span>')).replace(/__([^_]+?)__/g, '<span class%3D"--u">$1</span>')).replace(/\*\*\*([^\*]+?)\*\*\*/g, '<span class%3D"--strong"><span class%3D"--em">$1</span></span>')).replace(/\*\*([^\*]+?)\*\*/g, '<span class%3D"--strong">$1</span>')).replace(/\*([^\*]+?)\*/g, '<span class%3D"--em">$1</span>')).replace(/_([^_]+?)_/g, '<span class%3D"--em">$1</span>')).replace(/`([^`]+?)`/g, '<span class%3D"--code">$1</span>')).replace(/~~([^~]+?)~~/g, '<span class%3D"--s">$1</span>')).replace(/==([^=]+?)==/g, '<span class%3D"--mark">$1</span>'), e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = !0 === t ? e.replace(/(^|\n)- (.+)/g, '$1<span class%3D"--li">$2</span>') : e).replace(/%5F/g, "_")).replace(/%2A/g, "*")).replace(/%7E/g, "~")).replace(/%80/g, "`")).replace(/%3D/g, "=")).replace(/%2D/g, "-")).replace(/%28/g, "(")).replace(/%29/g, ")")).replace(/%5B/g, "[")).replace(/%5D/g, "]")).replace(/%7B/g, "{")).replace(/%7D/g, "}")).replace(/%5F/g, "_")
                },
                hasMarkdown: function(t, e) {
                    switch (t) {
                        case "link":
                            return !!e.match(/\[(.+?)\]\(([^\[\]]+?)\)/g);
                        case "strong":
                            return !!e.match(/\*\*([^\*]+?)\*\*/g) || !!e.match(/__([^_]+?)__/g);
                        case "emphasis":
                            return !!e.match(/\*([^\*]+?)\*/g) || !!e.match(/_([^_]+?)_/g);
                        case "code":
                            return !!e.match(/`([^`]+?)`/g);
                        case "strike":
                            return !!e.match(/~~([^~]+?)~~/g);
                        case "highlight":
                            return !!e.match(/==([^=]+?)==/g);
                        case "list-item":
                            return !!e.match(/(^|\n)- (.+)/g)
                    }
                    return !1
                },
                transparentize: function(t, e) {
                    var a;
                    return 1 == e || "#" != t.charAt(0) || 7 != t.length && 9 != t.length ? t : (0 == e && (e = .01), a = t.substr(0, 7), t = 9 == t.length ? parseInt(t.substr(7, 2), 16) : 255, (a + (t = 1 == (t = parseInt(t * e).toString(16)).length ? "0" + t : t)).toUpperCase())
                },
                htmlaToHtml: function(t) {
                    return 9 == t.length ? t.substr(0, 7) : t
                },
                htmlToMatrixValues: function(t) {
                    var e;
                    for (i in e = [(t = "#" == t.charAt(0) ? t.substr(1) : t).substr(0, 2), t.substr(2, 2), t.substr(4, 2), t.substr(6, 2)]) e[i] = "" !== e[i] ? parseInt(e[i], 16) / 256 : 1;
                    return e[0] + " 0 0 0 0 0 " + e[1] + " 0 0 0 0 0 " + e[2] + " 0 0 0 0 0 " + e[3] + " 0"
                },
                htmlTorgb: function(t, e) {
                    var a, i;
                    if ("string" != typeof t) return "rgba(0,0,0," + (void 0 !== e ? e : "") + ")";
                    for (i in a = [(t = "#" == t.charAt(0) ? t.substr(1) : t).substr(0, 2), t.substr(2, 2), t.substr(4, 2)]) a[i] = parseInt(a[i], 16);
                    return a = a.join(","), void 0 !== e ? "rgba(" + a + "," + e + ")" : "rgb(" + a + ")"
                },
                CSSPositionValue: function(t) {
                    var e;
                    switch (t) {
                        case "top-left":
                            e = "top left";
                            break;
                        case "top":
                            e = "top";
                            break;
                        case "top-right":
                            e = "top right";
                            break;
                        case "right":
                            e = "right";
                            break;
                        case "bottom-right":
                            e = "bottom right";
                            break;
                        case "bottom":
                            e = "bottom";
                            break;
                        case "bottom-left":
                            e = "bottom left";
                            break;
                        case "left":
                            e = "left";
                            break;
                        case "center":
                        default:
                            e = "center"
                    }
                    return e
                },
                CSSRepeatValue: function(t) {
                    var e;
                    switch (t) {
                        case "horizontal":
                            e = "repeat-x";
                            break;
                        case "vertical":
                            e = "repeat-y";
                            break;
                        case "both":
                            e = "repeat";
                            break;
                        default:
                            e = "no-repeat"
                    }
                    return e
                },
                CSSSizeValue: function(t, e) {
                    var a;
                    switch (t) {
                        case "stretch":
                            a = "100% 100%";
                            break;
                        case "fit":
                            a = "contain";
                            break;
                        case "fill":
                            a = "cover";
                            break;
                        case "custom":
                            a = e + "rem";
                            break;
                        case "default":
                        default:
                            a = "auto"
                    }
                    return a
                },
                cleanHref: function() {
                    var t = window.location.href;
                    return t = -1 !== (t = -1 !== t.indexOf("?") ? t.split("?")[0] : t).indexOf("#") ? t.split("#")[0] : t
                },
                cleanBaseHref: function() {
                    return window.location.protocol + "//" + window.location.hostname
                },
                isRTLLanguage: function(t) {
                    switch (t) {
                        case "ar":
                        case "arc":
                        case "dv":
                        case "fa":
                        case "ha":
                        case "he":
                        case "khw":
                        case "ks":
                        case "ku":
                        case "ps":
                        case "ur":
                        case "yi":
                            return !0
                    }
                    return !1
                },
                normalizeWheel: function(t) {
                    var e = 0,
                        a = 0,
                        i = 0,
                        s = 0;
                    return "detail" in t ? a = t.detail : "wheelDelta" in t ? a = t.wheelDelta / -120 : "wheelDeltaY" in t && (a = t.wheelDeltaY / -120), "wheelDeltaX" in t && (e = t.wheelDeltaX / -120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = a, a = 0), i = 10 * e, s = 10 * a, "deltaY" in t && (s = t.deltaY), ((i = "deltaX" in t ? t.deltaX : i) || s) && t.deltaMode && (1 == t.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), {
                        spinX: e = i && !e ? i < 1 ? -1 : 1 : e,
                        spinY: a = s && !a ? s < 1 ? -1 : 1 : a,
                        pixelX: i,
                        pixelY: s
                    }
                },
                scrollify: function(o, t) {
                    var r, l = $.extend({
                        middle: !1,
                        replay: !1,
                        delay: 0,
                        offset: 0,
                        duration: 0,
                        onPlay: null
                    }, t);
                    l.replay && o.on("click", function(t) {
                        t.preventDefault(), t.stopPropagation(), o.hasClass("played") && (o.removeClass("played").removeClass("active").removeClass("paused"), setTimeout(function() {
                            o.addClass("active"), l.onPlay && l.onPlay(o), setTimeout(function() {
                                o.addClass("played")
                            }, l.duration)
                        }, 250))
                    }), p.$window.on("scroll", function(t) {
                        var e, a = $(document).scrollTop(),
                            i = window.innerHeight,
                            s = o.offset().top,
                            n = o.offset().top + o.outerHeight();
                        o.hasClass("active") ? o.hasClass("paused") ? a < n && s < a + i && o.removeClass("paused") : (n < a || a + i < s) && o.addClass("paused") : (result = l.middle ? s < (e = a + i / 2) && e < n : a < n && s < a + i, result ? (clearTimeout(r), r = setTimeout(function() {
                            o.addClass("active"), l.onPlay && l.onPlay(o), l.replay && setTimeout(function() {
                                o.addClass("played")
                            }, l.duration)
                        }, l.delay)) : clearTimeout(r))
                    }).triggerHandler("scroll")
                },
                scrollTo: function(t) {
                    var a, i, s, e, n, o, r, l, c, h, d = $.extend({
                        $context: null,
                        $target: null,
                        callback: null,
                        offset: 0,
                        center: !1,
                        duration: 750,
                        nested: !1
                    }, t);
                    setTimeout(function() {
                        s = d.$context ? (a = d.$context, h = d.$target.position().top, d.nested && d.$target.parents().each(function() {
                            var t = $(this);
                            if (t[0] === a[0]) return !1;
                            h += Math.max(0, t.position().top)
                        }), i = a.scrollTop(), s = Math.max(0, h + d.offset + (d.center ? d.$target.outerHeight() / 2 : 0)), e = Math.abs(i - s), n = Math.max(250, Math.min(d.duration, d.duration * (e / (a.innerHeight() / 2)))), Math.min(Math.floor(s), a.prop("scrollHeight") - a.innerHeight())) : (a = $("body,html"), h = d.$target.offset().top, i = a.scrollTop(), s = Math.max(0, h + d.offset - (p.$window.height() - (d.center ? d.$target.outerHeight() : 0)) / 2), e = Math.abs(i - s), n = Math.max(250, Math.min(d.duration, d.duration * (e / (p.$window.height() / 2)))), Math.floor(s)), o = Date.now(), l = s - i, r = function(t) {
                            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                        }, (c = function() {
                            var t = Date.now() - o,
                                e = a[0].scrollTop;
                            d.callback && s - 1 <= e && e <= s + 1 && setTimeout(function() {
                                d.callback()
                            }, 25), n <= t ? a[0].scroll(0, s) : (a[0].scroll(0, i + l * r(t / n)), requestAnimationFrame(c))
                        })()
                    }, 0)
                },
                splitCSSStyles: function(t) {
                    var e, a, i = {},
                        s = ["margin", "margin-top", "margin-bottom"],
                        n = t.split("\n");
                    if (0 == n.length) return {};
                    for (a = 0; a < n.length; a++) 2 === (e = n[a].split(":")).length && (e[0] = e[0].trim(), e[1] = e[1].trim(), web.is("id", e[0]) && ";" == e[1].substr(-1) && (i[e[0]] = e[1].slice(0, -1).replace("!important", "") + (-1 != s.indexOf(e[0]) ? " !important" : "")));
                    return i
                },
                wrapText: null,
                recaptchaKeys: {
                    default: "6Lc-J2waAAAAAA4F5ErF9Qt2tBvKnhWAOkKPrMoJ",
                    alternate: "6LdUJ2waAAAAAENAw3WF9ZRXEL3d4mCLa5YLwuEA"
                },
                enableReCAPTCHA: function(t, e, i) {
                    var s = e && e in this.recaptchaKeys ? this.recaptchaKeys[e] : this.recaptchaKeys.default;
                    grecaptcha.ready(function() {
                        var e, a = $(t)[0]._form;
                        a.options.submitHandler = function(t) {
                            "-" != a.value("xtoken") && a.submitHandler(function() {
                                a.value("xtoken", "-"), grecaptcha.reset(e), setTimeout(function() {
                                    a.$obj.find('[name="g-recaptcha-response"]').removeAttr("data-missing").removeData("missing")
                                }, 0), t && t()
                            })
                        }, e = grecaptcha.render(a.$submits()[0], {
                            sitekey: s,
                            isolated: !0,
                            callback: function(t) {
                                a.value("xtoken", t), a.$obj.triggerHandler("submit")
                            }
                        }), !0 !== i && a.disableSubmits()
                    })
                },
                keyHandler: function(t) {
                    var e = $(this);
                    switch (t.keyCode) {
                        case 27:
                            t.stopPropagation(), t.preventDefault(), e.blur();
                            break;
                        case 13:
                            t.stopPropagation(), t.preventDefault(), e.trigger("click");
                            break;
                        case 8:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            t.preventDefault(), t.stopPropagation()
                    }
                },
                clearAlert: function() {
                    p.registry.unset("app.alert")
                },
                setAlert: function(t) {
                    p.registry.set("app.alert", JSON.stringify(t))
                },
                hasAlert: function() {
                    return !!p.registry.get("app.alert")
                },
                getAlert: function() {
                    var t, e, a, i = p.registry.get("app.alert");
                    if (!i) return {};
                    if ("actions" in (t = JSON.parse(i))) {
                        for (a in e = {}, t.actions) ! function(t) {
                            switch (t.action) {
                                case "hide":
                                    e[a] = function() {
                                        this.hide()
                                    };
                                    break;
                                case "open":
                                    e[a] = function() {
                                        this.hide(), window.open(t.url)
                                    };
                                    break;
                                case "redirect":
                                    e[a] = function() {
                                        this.hide(), window.location.href = t.url
                                    }
                            }
                        }(t.actions[a]);
                        t.actions = e
                    }
                    return t
                },
                showAlert: function() {
                    this.hasAlert() && (p.dialog.show(this.getAlert()), this.clearAlert())
                },
                init: function(t, e) {
                    var a, i, l;
                    p.instanceId = md5(Date.now() + Math.ceil(9999 * Math.random() + 1e3)), p.flags.incompleteSVG = "edge" == browser.name || "ie" == browser.name, p.$window = $(window), p.$document = $(document), p.$head = $("head"), p.$body = $("body"), p.$html = $("html"), breakpoints({
                        xlarge: ["1281px", "1680px"],
                        large: ["981px", "1280px"],
                        medium: ["737px", "980px"],
                        small: ["481px", "736px"],
                        xsmall: ["361px", "480px"],
                        xxsmall: [null, "360px"],
                        xshort: "(max-height: 480px)",
                        short: "(max-height: 640px)",
                        tall: "(min-height: 641px)"
                    }), $.event.special.destroyed = {
                        remove: function(t) {
                            t.handler && t.handler()
                        }
                    }, Element.prototype._addEventListener = Element.prototype.addEventListener, Element.prototype.addEventListener = function(t, e, a) {
                        return "wheel" == t && (a = {
                            passive: !1
                        }), this._addEventListener(t, e, a)
                    }, browser.mobile ? (p.$body.addClass("is-touch"), p.touch.useTouch = !0, p.touch.useMouse = !1, p.touch.dragStartEvents = "tapAndHold", p.touch.dragPreventDefault = function(t) {
                        return t.inTapAndHold
                    }, p.touch.scrollbars = !1) : p.$body.addClass("is-nonTouch"), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
                        value: function(s, n, o) {
                            var r = this;
                            setTimeout(function() {
                                for (var t = atob(r.toDataURL(n, o).split(",")[1]), e = t.length, a = new Uint8Array(e), i = 0; i < e; i++) a[i] = t.charCodeAt(i);
                                s(new Blob([a], {
                                    type: n || "image/png"
                                }))
                            })
                        }
                    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                        value: function(t, e) {
                            if (null == this) throw new TypeError('"this" is null or not defined');
                            var a = Object(this),
                                i = a.length >>> 0;
                            if (0 == i) return !1;
                            var s, n, e = 0 | e,
                                o = Math.max(0 <= e ? e : i - Math.abs(e), 0);
                            for (; o < i;) {
                                if ((s = a[o]) === (n = t) || "number" == typeof s && "number" == typeof n && isNaN(s) && isNaN(n)) return !0;
                                o++
                            }
                            return !1
                        }
                    }), p.$body.attr("data-browser", browser.name), "ie" == browser.name && p.$body.addClass("is-ie"), p.flags.incompleteSVG && p.$html.addClass("is-incomplete-svg"), browser.mobile ? p.wrapText = function(t) {
                        return '<span class="ui-text">' + t + "</span>"
                    } : p.wrapText = function(t) {
                        return t
                    }, p.$window.on("load", function() {
                        window.setTimeout(function() {
                            p.$body.removeClass("is-loading")
                        }, 100)
                    }), ("admin" == p.$body.attr("id") ? $("#admin-form-responder") : $('form:not([method="get"])')).form(), p.dialog.init(), p.progressOverlay.init(), p.globalEvents.init(), p.globalEvents.on("plan.init", function(t) {
                        p.plan.sync(t, !0) && p.plan.refresh()
                    }), p.$body.on("click", "a.behavior-replace", function(t) {
                        var e = $(this).attr("href");
                        t.preventDefault(), t.stopPropagation(), window.location.replace(e)
                    }), p.$body.on("click", "a.behavior-replace-long-wait", function(t) {
                        var e = $(this).attr("href");
                        t.preventDefault(), t.stopPropagation(), p.dialog.preshow(), window.setTimeout(function() {
                            window.location.replace(e)
                        }, 250)
                    }), p.$body.on("click", "a.behavior-long-wait", function(t) {
                        var e = $(this).attr("href");
                        t.preventDefault(), t.stopPropagation(), p.dialog.preshow(), window.setTimeout(function() {
                            window.location.href = e
                        }, 750)
                    }), p.$body.on("click", "a.behavior-download", function(t) {
                        var e = $(this).attr("href");
                        t.preventDefault(), t.stopPropagation(), p.dialog.preshow(), window.setTimeout(function() {
                            window.location.href = e, p.dialog.show({
                                title: "Downloading Zip",
                                message: "Preparing your download. Please wait a moment.",
                                actions: {
                                    Dismiss: function() {
                                        this.hide()
                                    }
                                }
                            })
                        }, 750)
                    }), p.$body.on("click", "a.behavior-requires-confirmation, a.behavior-requires-confirmation-long-wait", function(t) {
                        var e = $(this),
                            a = e.attr("data-confirm-href"),
                            i = e.attr("data-confirm-message"),
                            s = e.text(),
                            n = {};
                        t.preventDefault(), t.stopPropagation(), n[s] = function() {
                            e.hasClass("behavior-requires-confirmation-long-wait") ? (p.dialog.preshow(), window.setTimeout(function() {
                                window.location.href = a
                            }, 750)) : window.location.href = a
                        }, n.Cancel = function() {
                            this.hide()
                        }, p.dialog.show({
                            title: "Are you sure?",
                            message: i || null,
                            actions: n
                        })
                    }), p.$body.on("click", "a.behavior-requires-double-confirmation, a.behavior-requires-double-confirmation-long-wait", function(t) {
                        var e = $(this),
                            a = e.attr("data-confirm-href"),
                            i = e.text(),
                            s = {};
                        t.preventDefault(), t.stopPropagation(), s[i] = function() {
                            e.hasClass("behavior-requires-double-confirmation-long-wait") ? (p.dialog.preshow(), window.setTimeout(function() {
                                window.location.href = a
                            }, 750)) : window.location.href = a
                        }, s.Cancel = function() {
                            this.hide()
                        }, p.dialog.show({
                            title: "Are you sure?",
                            message: null,
                            confirmation: "Yes, I am sure I want to do this.",
                            actions: s
                        })
                    }), p.$body.on("click", ".behavior-requires-more-sites", function(t) {
                        var e = $(this),
                            e = parseInt(e.attr("data-sites-limit"));
                        t.preventDefault(), t.stopPropagation(), p.dialog.show({
                            title: "Out of sites :(",
                            message: "Woops! You've reached your account's limit of <strong>" + e + "</strong> sites. Please either change to a different plan or delete a site and try again.",
                            actions: {
                                "Change Plan": function() {
                                    this.hide(), window.location.href = "/dashboard/account/plan/change"
                                },
                                "Maybe Later": function() {
                                    this.hide()
                                }
                            }
                        })
                    }), p.$body.on("click", ".behavior-requires-pro-plus", function(t) {
                        $(this);
                        t.preventDefault(), t.stopPropagation(), p.dialog.show({
                            title: "Upgrade to Pro Plus",
                            message: "Upgrade to the <strong>Pro Plus</strong> plan and get access to this and many other awesome features.",
                            actions: {
                                "Learn More": function() {
                                    this.hide(), window.location.href = "/dashboard/account/plan/change"
                                },
                                "Maybe Later": function() {
                                    this.hide()
                                }
                            }
                        })
                    }), p.$body.on("click", ".behavior-requires-verification", function(t) {
                        $(this);
                        t.preventDefault(), t.stopPropagation(), p.dialog.show({
                            title: "Not Verified!",
                            message: "Woops, looks like you haven't verified your account yet! Please click the link in the verification email we sent you before trying to upgrade."
                        })
                    }), p.$body.on("click", "a.behavior-recommend-higher-plan", function(t) {
                        var e = $(this).attr("href"),
                            a = {};
                        t.preventDefault(), t.stopPropagation(), a["Choose a different plan"] = function() {
                            this.hide(), window.location.href = "/dashboard/account/plan/change"
                        }, a["Continue with this plan"] = function() {
                            this.hide(), window.location.href = e
                        }, p.dialog.show({
                            title: "Are you sure?",
                            message: "One or more of your sites uses features not available with this plan. Upgrading to this plan will disable those features on your sites, but will otherwise leave them intact. What would you like to do?",
                            actions: a
                        })
                    }), p.$body.on("click", "a.behavior-unusable-plan", function(t) {
                        var e = $(this),
                            a = JSON.parse(unescape(e.attr("data-missing-perks")));
                        t.preventDefault(), t.stopPropagation(), p.dialog.show({
                            title: "Can't select plan :(",
                            html: !0,
                            message: '<p>Woops! Your account (or one or more of your sites) is currently using the following features that aren\'t available with the selected plan:</p><ul class="checklist special">' + function() {
                                for (var t = "", e = 0; e < a.length; e++) t += "<li>" + a[e] + "</li>";
                                return t
                            }() + "</ul><p>Please select a different plan that includes the above features, or discontinue using them and try selecting this plan again.</p>"
                        })
                    }), p.$body.on("click", "a.behavior-background-fetch", function(t) {
                        var e = $(this).attr("href");
                        t.preventDefault(), t.stopPropagation(), fetch(e), setTimeout(function() {
                            window.location.reload()
                        }, 25)
                    }), p.$body.on("click", "ul.brand-selector.behavior-brand-steps > li > a", function(t, e) {
                        var a = $(this),
                            i = a.parent(),
                            s = i.siblings(),
                            n = a.parents("li").eq(1),
                            o = n.siblings(),
                            r = window.location.href.split("#")[0],
                            l = a.attr("href").substr(1);
                        t.preventDefault(), t.stopPropagation(), i.hasClass("active") || $.ajax({
                            url: r + "/" + l,
                            type: "GET",
                            dataType: "json",
                            success: function(t) {
                                s.removeClass("active"), o.filter("[data-brand]").remove(), i.addClass("active"), t = t.excerpt.replace(/\<li\>/g, '<li data-brand="' + l + '">'), $(t).insertAfter(n), history.replaceState({}, null, "#" + l), e || app.scrollTo({
                                    $target: n.next()
                                })
                            }
                        })
                    }), $("ul.brand-selector.behavior-brand-steps").each(function() {
                        var t, e = $(this),
                            a = window.location.hash.substr(1);
                        a && 0 < (t = e.find('a[href="#' + a + '"]')).length && t.trigger("click", [!0])
                    }), p.$body.on("change", "select.jump-menu", function(t) {
                        var e = $(this).val().trim();
                        e && (window.location.href = e)
                    }), $("select.jump-menu").val(""), p.$body.on("click", '.toggle-wrapper.jump-menu > input[type="radio"]', function(t) {
                        t.preventDefault();
                        t = $(this).val().trim();
                        t && (window.location.href = t)
                    }), p.$body.on("click", ".snippet:not(.disabled) a.url", function(t) {
                        t.stopPropagation()
                    }), p.$body.on("click", ".snippet:not(.disabled)", function(t) {
                        var e, a, i = $(this),
                            s = i.find(".content");
                        i.hasClass("active") || ("clipboard" in navigator ? navigator.clipboard.writeText(s.text()) : (e = document.createRange(), a = window.getSelection(), s.prop("contentEditable", !0), s.prop("readonly", !0), e.selectNodeContents(s[0]), a.removeAllRanges(), a.addRange(e), document.execCommand("copy"), s.blur(), a.removeAllRanges(), s.prop("contentEditable", !1), s.prop("readonly", !1)), i.addClass("active"), setTimeout(function() {
                            i.removeClass("active")
                        }, 1e3))
                    }), $(".printable").each(function() {
                        $(this).find("table").each(function() {
                            var i, t = $(this),
                                e = t.children("tbody").first(),
                                a = t.next(".actions");
                            0 != a.length && (i = '<tr class="editable">', t.find("tr").first().children().each(function(t) {
                                var e = $(this)[0].tagName,
                                    a = "";
                                a += "<" + e + ">", a += '<div class="string" contenteditable="true"></div>', 0 == t && (a += '<div class="do-delete"></div>'), i += a += "</" + e + ">"
                            }), i += "</tr>", t.on("click", ".do-delete", function(t) {
                                t.preventDefault(), t.stopPropagation(), $(this).parent().parent().remove()
                            }), a.on("click", ".do-add", function(t) {
                                t.preventDefault(), t.stopPropagation(), e.append($(i))
                            }))
                        })
                    }), 0 < $(".defer-loading").length && (a = $(".defer-loading"), i = p.$body.data("defer-from-id") ? $("#" + p.$body.data("defer-from-id")) : null, l = i && 0 < i.length ? i.offset().top : 0, a.each(function() {
                        var e = $(this),
                            a = e.children("img").first(),
                            i = a[0];
                        e.css("background-image", "url(" + a.attr("src") + ")").css("background-size", "100% auto").css("background-position", "top left").css("background-repeat", "no-repeat"), a.css("opacity", "0").css("transition", "opacity 0.375s ease-in-out"), a.on("load", function(t) {
                            "done" == a.data("src") && (Date.now() - i._startLoad < 375 ? (e.removeClass("loading"), e.css("background-image", "none"), a.css("transition", ""), a.css("opacity", "1")) : (e.removeClass("loading"), a.css("opacity", "1"), setTimeout(function() {
                                e.css("background-image", "none")
                            }, 375)))
                        })
                    }), i = function() {
                        var n = document.documentElement.clientHeight,
                            o = ("ios" == browser.os ? document.body : document.documentElement).scrollTop,
                            r = o + n;
                        a.each(function() {
                            var t = $(this),
                                e = t.children("img").first(),
                                a = e[0];
                            if (null === a.offsetParent) return !0;
                            if ("done" === e.data("src")) return !0;
                            var i = a.getBoundingClientRect(),
                                s = o + Math.floor(i.top) - n,
                                i = o + Math.ceil(i.bottom) + n;
                            l < r && s <= r && o <= i && (i = e.data("src"), e.data("src", "done"), t.addClass("loading"), a._startLoad = Date.now(), e.attr("src", i))
                        })
                    }, p.$window.on("load resize scroll", i)), $(".plans").on("click", ".plan > header .next:not(.last)", function() {
                        var t = $(this).parents(".plan"),
                            e = t.data("level"),
                            a = t.data("rank"),
                            a = t.siblings().filter('[data-level="' + e + '"][data-rank="' + (a + 1) + '"]');
                        0 != a.length && (t.removeClass("active"), a.addClass("active"))
                    }).on("click", ".plan > header .previous:not(.first)", function() {
                        var t = $(this).parents(".plan"),
                            e = t.data("level"),
                            a = t.data("rank"),
                            a = t.siblings().filter('[data-level="' + e + '"][data-rank="' + (a - 1) + '"]');
                        0 != a.length && (t.removeClass("active"), a.addClass("active"))
                    }).children(".plan").each(function() {
                        $(this).find(".title").append('<div class="next">Next</div><div class="previous">Previous</div>')
                    }), p.$window.on("load", function() {
                        window.setTimeout(function() {
                            p.showAlert()
                        }, 250)
                    })
                }
            };
            return p
        }(), app.init()
    }, {
        breakpoints: "breakpoints",
        browser: "browser",
        form: "form",
        jquery: "jquery",
        "jquery.touch": "jquery.touch",
        md5: "md5",
        tabs: "tabs",
        web: "web"
    }],
    2: [function(t, e, a) {
        function i(t, e) {
            var a, i = this;
            this.count = 1e3, this.id = t.attr("id"), t.removeAttr("id"), this.name = t.attr("name"), t.removeAttr("name"), a = unescape(t.data("value")), t.removeData("value").removeAttr("data-value"), this.form = e, this.min = parseInt(t.data("min")), t.removeData("min").removeAttr("data-min"), isNaN(this.min) && (this.min = 1), 1 == t.data("optional") && (this.min = 0), this.max = parseInt(t.data("max")), t.removeData("max").removeAttr("data-max"), this.max || (this.max = 0), this.type = t.data("type"), t.removeData("type").removeAttr("data-type"), this.type || (this.type = "any"), this.label = t.data("label"), t.removeData("label").removeAttr("data-label"), this.label || (this.label = "item"), this.delimiter = t.data("delimiter"), t.removeData("delimiter").removeAttr("data-delimiter"), this.delimiter || (this.delimiter = "\t"), this.$template = $('<div class="item"><div class="inner"></div><div class="do-delete" tabindex="0"><svg><use xlink:href="#icon-delete"></use></svg><span class="label">Delete</span></div></div>'), t.children().appendTo(this.$template.children(".inner")), this.$template.find("input, textarea, select").prop("disabled", !1), this.$wrapper = t, this.$wrapper.on("keydown", ".items input, .items textarea, .items select", function(t) {
                13 === t.keyCode && (t.stopPropagation(), t.stopImmediatePropagation(), $(this).blur())
            }).on("input", ".items input, .items textarea, .items select", function(t, e) {
                t.stopPropagation()
            }).on("change", ".items input, .items textarea, .items select", function(t, e) {
                var a = $(this).attr("id");
                t.stopPropagation(), "formList.val" != e && "init" != e && a != i.id + "_count" && i.sync("change")
            }).on("blur", ".items input, .items textarea, .items select", function(t) {
                $(this).attr("id");
                t.stopPropagation(), i.sync("blur")
            }), this.$items = $('<div class="items"></div>').appendTo(this.$wrapper).on("keydown", ".do-delete", function(t) {
                return 13 !== t.keyCode ? app.keyHandler.apply(this, [t]) : void $(this).trigger("click")
            }).on("click", ".do-delete", function(t, e) {
                var a = $(this).parents(".item");
                i.remove(i.itemIndex(a))
            }), this.$footer = $('<div class="footer"><span class="action-link add do-add" tabindex="0">Add ' + this.label + " &hellip;</span></div>").appendTo(this.$wrapper), this.$footer.on("mousedown", ".do-add", function(t) {
                $(this).addClass("is-clicked")
            }).on("blur", ".do-add", function(t) {
                $(this).removeClass("is-clicked")
            }).on("click", ".do-add", function(t, e) {
                t.preventDefault(), $(this).blur(), i.add(e)
            }).on("keydown", ".do-add", function(t) {
                return 13 !== t.keyCode ? app.keyHandler.apply(this, [t]) : void $(this).trigger("click", [!0])
            }).on("click", ".do-dump", function(t) {
                t.stopPropagation(), t.preventDefault()
            }), this.$target = $("<textarea />").attr("id", this.id).attr("name", this.name).attr("data-type", this.type).data("type", this.type).attr("rows", 5).css("position", "absolute").css("width", "0px").css("height", "0px").css("visibility", "hidden").css("z-index", "-1").css("overflow", "hidden").css("-moz-pointer-events", "none").css("-webkit-pointer-events", "none").css("-ms-pointer-events", "none").css("pointer-events", "none").prependTo(this.$wrapper), 0 == this.min && this.$target.attr("data-optional", "1").data("optional", "1"), (this.$target[0]._formList = this).val(a)
        }
        i.prototype.itemIndex = function(t) {
            return this.$wrapper.find(".item").index(t)
        }, i.prototype.get = function(t) {
            return this.$item.eq(t)
        }, i.prototype.length = function() {
            return this.$items.children(".item").length
        }, i.prototype.remove = function(t) {
            this.removeBase(t) && (this.lastAction = {
                action: "remove",
                index: t
            }, this.sync("remove"))
        }, i.prototype.removeBase = function(t) {
            return !(this.length() <= this.min) && (this.get(t).remove(), !0)
        }, i.prototype.add = function(t) {
            var e;
            this.collapseSingular && this.collapseAll(), (e = this.addBase()) && (this.form.initTypes(e), this.lastAction = {
                action: "add",
                $item: e
            }, t && e.find("input, textarea, select").first().focus(), this.sync("add"))
        }, i.prototype.addBase = function() {
            var e = this,
                t = this.$template.clone(!0),
                a = this.count++;
            if (!(0 < this.max && this.length() >= this.max)) return t.data("id", a), t.find("input, textarea, select").each(function() {
                var t = $(this);
                t.attr("type"), t.parents(".field").first();
                t.attr("id", e.id + "_" + a), t.val(t.attr("value"))
            }), t.appendTo(this.$items), t
        }, i.prototype.val = function(t) {
            var e, a, i, s, n = this;
            if (void 0 !== t) {
                if (o = t ? t.split("\n") : [], i = Math.max(o.length, this.min), t = this.length(), 0 == i) this.$item && this.$item.remove();
                else if (t < i) {
                    for (s = t; s < i; s++) this.addBase();
                    this.$item = this.$items.children(".item")
                } else if (i < t) {
                    for (s = t; i < s; s--) this.removeBase(s - 1);
                    this.$item = this.$items.children(".item")
                }
                if (0 < i)
                    for (s in this.$items.find("input, textarea, select").val(""), o) a = (e = this.get(s)).data("id"), "checkbox" == (a = e.find('[id="' + this.id + "_" + a + '"]')).attr("type") ? a.prop("checked", o[s]) : a.val(o[s]), a.trigger("change", ["formList.val"]);
                return this.sync("val"), this.$wrapper
            }
            var o = [];
            return this.$item.each(function() {
                var t = $(this),
                    a = [];
                t.find("input, textarea, select").each(function() {
                    var t = $(this),
                        e = t.val().trim();
                    "checkbox" == t.attr("type") ? e = !!t.prop("checked") : a.push(e)
                }), "" !== (t = a.join(n.delimiter)) && o.push(t)
            }), (o = 0 < this.max && o.length > this.max ? o.slice(0, this.max) : o).join("\n")
        }, i.prototype.sync = function(t) {
            var e, a, i = this.length();
            if (this.$item = this.$items.children(".item"), status = 0 == i ? "empty" : i <= this.min ? "min" : 0 < this.max && i >= this.max ? "max" : "", this.$wrapper.attr("data-status", status), (e = this.val()) != (a = this.$target.val())) switch (t) {
                case "change":
                case "add":
                case "remove":
                case "val":
                    this.$target.val(e), this.$target.trigger("change");
                    break;
                case "blur":
                    this.$target.val(e), this.$target.trigger("blur");
                    break;
                case "target":
                    this.val(a)
            }
        }, i.prototype.dump = function() {}, $.fn.formList = function(t) {
            var e = $(this);
            if (0 == this.length) return e;
            if (1 < this.length) {
                for (var a = 0; a < this.length; a++) $(this[a]).formList(t);
                return e
            }
            return new i(e, t), e
        }, $.valHandlers.push({
            condition: function() {
                return "TEXTAREA" == this.tagName && "_formList" in this
            },
            get: function() {
                return $.fn.origVal.call($(this))
            },
            set: function(t) {
                t = $.fn.origVal.call($(this), t);
                return this._formList.sync("target"), t
            }
        }), e.exports = i
    }, {}],
    formArray: [function(t, e, a) {
        function i(t, e) {
            var a, r = this;
            this.count = 1e3, this.states = [], this.isDragging = !1, this.hasDropTarget = !1, this.isLocked = !1, this.id = t.attr("id"), t.removeAttr("id"), this.name = t.attr("name"), t.removeAttr("name"), this.title = t.data("title"), t.removeData("title").removeAttr("data-title"), this.thumbnail = t.data("thumbnail"), t.removeData("thumbnail").removeAttr("data-thumbnail"), a = t.data("value"), t.removeData("value").removeAttr("data-value"), this.form = e, this.min = t.data("min"), t.removeData("min").removeAttr("data-min"), this.max = t.data("max"), t.removeData("max").removeAttr("data-max"), this.collapse = "1" == t.data("collapse"), t.removeData("collapse").removeAttr("collapse"), this.collapseAlt = "1" == t.data("collapse-alt"), t.removeData("collapse-alt").removeAttr("collapse-alt"), this.collapseSingular = "1" == t.data("collapse-singular"), t.removeData("collapse-singular").removeAttr("collapse-singular"), t.data("clone-fields") ? (this.cloneFields = t.data("clone-fields").split(","), t.removeData("clone-fields").removeAttr("clone-fields")) : this.cloneFields = null, this.exposeCount = "1" == t.data("expose-count"), t.removeData("expose-count").removeAttr("expose-count"), this.lastAction = {
                action: null
            }, this.$template = $('<div class="item' + (this.thumbnail ? " with-thumbnail" : "") + '" tabindex="0"><div class="header">' + (this.thumbnail ? '<div class="thumbnail ' + this.thumbnail + '"></div>' : "") + '<span class="title"></span><div class="actions"><div class="do-delete"><svg><use xlink:href="#icon-delete"></use></svg><span class="label">Delete</span></div></div></div><div class="inner"></div></div>'), t.children().appendTo(this.$template.children(".inner")), this.$template.find("input, textarea, select").prop("disabled", !1), this.$placeholder = $('<div class="placeholder" />'), this.$wrapper = t, this.$wrapper.attr("id", this.id).attr("name", this.name).on("input", "input, textarea, select", function(t, e) {
                t.stopPropagation()
            }).on("change", "input, textarea, select", function(t, e) {
                var a = $(this).attr("id");
                t.stopPropagation(), "formArray.val" != e && "init" != e && a != r.id + "_count" && r.change("formArray.change", a)
            }).on("blur", "input, textarea, select", function(t) {
                var e = $(this).attr("id");
                t.stopPropagation(), r.blur("formArray.blur", e)
            }).on("change.title", '[name^="' + this.title + '_"]', function(t) {
                var e = $(this),
                    a = e.parents(".item"),
                    i = e.val();
                t.stopPropagation(), i ? "SELECT" == this.tagName && (i = e.find('option[value="' + i + '"]').text()) : i = "(untitled)", a.find(".header .title").text(i)
            }), this.thumbnail && this.$wrapper.on("change.thumbnail", function() {
                var t;
                switch (r.thumbnail) {
                    case "asset":
                        t = '[name^="assetId_"]';
                        break;
                    case "icon":
                        t = '[name^="type_"]';
                        break;
                    case "buttonIcon":
                        t = '[name^="iconType_"]'
                }
                return t
            }(), function(t) {
                var e, a, i, s = $(this).parents(".item");
                switch (t.stopPropagation(), e = s.find(".header .thumbnail"), r.thumbnail) {
                    case "asset":
                        a = s.find('[name^="assetData_"]').val(), r.$wrapper.data("thumbnailDisabled") ? e.addClass("is-disabled") : e.removeClass("is-disabled"), a ? e.removeClass("is-unassigned").css("background-image", 'url("' + a + '")') : e.addClass("is-unassigned").css("background-image", "");
                        break;
                    case "icon":
                        a = s.find('[name^="type_"]').val(), r.$wrapper.data("thumbnailDisabled") ? e.addClass("is-disabled") : e.removeClass("is-disabled"), a ? (i = app.build.icons.get(a), e.removeClass("is-unassigned").html('<svg><use xlink:href="' + (app.build.icons.inlined ? "" : app.build.icons.url) + "#icon-" + i.code + '"></use></svg>')) : e.addClass("is-unassigned").html("");
                        break;
                    case "buttonIcon":
                        a = s.find('[name^="iconType_"]').val(), r.$wrapper.data("thumbnailDisabled") ? e.addClass("is-disabled") : e.removeClass("is-disabled"), a ? (i = app.build.icons.get(a), e.removeClass("is-unassigned").html('<svg><use xlink:href="' + (app.build.icons.inlined ? "" : app.build.icons.url) + "#icon-" + i.code + '"></use></svg>')) : e.addClass("is-unassigned").html("")
                }
            }), this.$items = $('<div class="items"></div>').appendTo(this.$wrapper).touch({
                useMouse: app.touch.useMouse,
                useTouch: app.touch.useTouch,
                dragThreshold: 0,
                dragDelay: 0,
                tapAndHoldDelay: browser.mobile ? 150 : 300,
                trackDocument: !0,
                delegateSelector: ".item, .item > .inner, .do-delete",
                dropFilter: ".item",
                preventDefault: {
                    drag: app.touch.dragPreventDefault
                }
            }).on("mousedown", ".item", function(t) {
                $(this).addClass("is-clicked")
            }).on("mousedown", ".item > .inner", function(t) {
                $(this).parent().addClass("is-clicked")
            }).on("mousedown", ".do-delete", function(t) {
                $(this).parents(".item").addClass("is-clicked")
            }).on("blur", ".item", function(t) {
                t.target === this && $(this).removeClass("is-clicked")
            }).on("click", ".item", function(t) {
                var e = $(t.target);
                0 < e.length && "A" == e[0].tagName && "#" == e.attr("href").charAt(0) || t.stopPropagation()
            }).on("keydown", ".item:focus", function(t) {
                switch (t.keyCode) {
                    case 13:
                    case 32:
                        $(this).trigger("tap");
                        break;
                    default:
                        return app.keyHandler.apply(this, [t])
                }
            }).on("tap dragStart tapAndHold", ".do-delete", function(t, e) {
                var a = $(this).parents(".item");
                t.stopPropagation(), r.isLocked = !0, r.remove(r.itemIndex(a), function() {
                    r.isLocked = !1
                })
            }).on("tap dragStart tapAndHold", ".item > .inner", function(t, e) {
                t.stopPropagation()
            }).on("tap", ".item", function(t, e) {
                var a = $(this);
                t.stopPropagation(), r.toggle(r.itemIndex(a)), r.$items.trigger("click")
            }).on(app.touch.dragStartEvents, ".item", function(t, e) {
                var a = $(this),
                    i = app.$document.scrollLeft(),
                    s = app.$document.scrollTop(),
                    n = a[0].getBoundingClientRect().width,
                    o = a[0].getBoundingClientRect().height;
                t.stopPropagation(), r.isDragging = !0, r.$wrapper.addClass("is-dragging"), "android" == browser.os && app.$body.css("overflow", "hidden"), r.$placeholder.css("width", n + "px").css("height", o + "px").insertAfter(a), a.css("width", n + "px").css("height", o + "px").addClass("is-dragging").css("left", e.x - e.ex - i + "px").css("top", e.y - e.ey - s + "px")
            }).on("drag", ".item", function(t, e) {
                var a = $(this),
                    i = app.$document.scrollLeft(),
                    s = app.$document.scrollTop();
                a.hasClass("is-dragging") && r.isDragging && (t.stopPropagation(), a.css("left", e.x - e.start.ex - i + "px").css("top", e.y - e.start.ey - s + "px"))
            }).on("dragEnd tapAndHoldEnd", ".item", function(t, e) {
                var a = $(this);
                a.hasClass("is-dragging") && r.isDragging && (t.stopPropagation(), r.isDragging = !1, r.$wrapper.removeClass("is-dragging"), "android" == browser.os && app.$body.css("overflow", ""), r.$placeholder.detach().css("width", "").css("height", ""), a.removeClass("is-dragging").css("left", "").css("top", "").css("width", "").css("height", ""), r.hasDropTarget = !1, a.removeClass("is-dropTarget").removeClass("after").removeClass("before"))
            }).on("dragEnter", ".item", function(t, e) {
                var a = $(this),
                    e = $(e.element);
                a.hasClass("is-dragging") && r.isDragging && (t.stopPropagation(), r.hasDropTarget = !0, e.add(e.siblings()).removeClass("is-dropTarget").removeClass("after").removeClass("before"), e.addClass("is-dropTarget"))
            }).on("dragOver", ".item", function(t, e) {
                var a = $(this),
                    i = $(e.element);
                a.hasClass("is-dragging") && r.isDragging && (t.stopPropagation(), e.ey < Math.ceil(i.outerHeight() / 2) ? i.addClass("before").removeClass("after") : i.addClass("after").removeClass("before"))
            }).on("dragLeave", ".item", function(t, e) {
                var a = $(this),
                    e = $(e.element);
                a.hasClass("is-dragging") && r.isDragging && (t.stopPropagation(), r.hasDropTarget = !1, e.removeClass("is-dropTarget"))
            }).on("drop", ".item", function(t, e) {
                var a = $(this),
                    e = $(e.element);
                a.hasClass("is-dragging") && r.isDragging && r.hasDropTarget && (t.stopPropagation(), r.hasDropTarget = !1, t = e.hasClass("after") ? 1 : -1, e.removeClass("is-dropTarget").removeClass("after").removeClass("before"), r.move(a, e, t))
            }), this.$footer = $('<div class="footer"><ul class="actions fit"><li><span class="button do-add" tabindex="0">Add</span></li></ul></div>').appendTo(this.$wrapper), this.$footer.on("click", ".do-add", function(t, e) {
                t.preventDefault(), $(this).blur(), r.isLocked || r.add(e)
            }).on("keydown", ".do-add", function(t) {
                return 13 !== t.keyCode ? app.keyHandler.apply(this, [t]) : void $(this).trigger("click", [!0])
            }).on("click", ".do-dump", function(t) {
                t.stopPropagation(), t.preventDefault()
            }), this.exposeCount ? this.$count = $('<input type="hidden" name="' + this.id + '_count" id="' + this.id + '_count" value="0" />').appendTo(this.$wrapper) : this.$count = null, this.sync(), a && this.val("object" == typeof a ? a : JSON.parse(a))
        }
        i.prototype.itemIndex = function(t) {
            return this.$wrapper.find(".item").index(t)
        }, i.prototype.get = function(t) {
            return this.$item.eq(t)
        }, i.prototype.length = function() {
            return this.$items.children(".item").length
        }, i.prototype.toggle = function(t) {
            !0 === this.states[t] ? (this.get(t).removeClass("collapsed"), this.states[t] = !1, this.collapseSingular && this.collapseAll(t)) : (this.get(t).addClass("collapsed"), this.states[t] = !0)
        }, i.prototype.collapseAll = function(t) {
            for (var e = 0, a = this.length(), e = 0; e < a; e++) void 0 !== t && e == t || (this.get(e).addClass("collapsed"), this.states[e] = !0)
        }, i.prototype.move = function(t, e, a) {
            var i, s, n = "object" == typeof t ? (i = t, this.itemIndex(t)) : (i = this.get(t), t),
                e = "object" == typeof e ? (s = e, this.itemIndex(e)) : (s = this.get(e), e);
            n == e || e < 0 || e >= this.length() || (1 == a ? i.insertAfter(s) : i.insertBefore(s), t = this.states[e], this.states[e] = this.states[n], this.states[n] = t, this.lastAction = {
                action: "move",
                src: n,
                dest: e,
                pos: a
            }, this.sync(), this.change("formArray.move"))
        }, i.prototype.remove = function(t, e) {
            this.removeBase(t) && (this.lastAction = {
                action: "remove",
                index: t
            }, this.sync(), this.change("formArray.remove"), e && setTimeout(e, 250))
        }, i.prototype.removeBase = function(t) {
            return !(this.length() <= this.min) && (this.get(t).remove(), this.states.splice(t, 1), !0)
        }, i.prototype.add = function(t) {
            var e;
            this.collapseSingular && this.collapseAll(), (e = this.addBase()) && (this.form.initTypes(e), this.form.initRequires(e, this.form.$obj), this.form.initConditions(e, this.form.$obj), this.lastAction = {
                action: "add",
                $item: e
            }, this.sync(), this.change("formArray.add"), t && e.focus())
        }, i.prototype.addBase = function() {
            var n = this.$template.clone(!0),
                o = this.count++;
            if (!(0 < this.max && this.length() >= this.max)) {
                if (n.data("id", o), this.$wrapper.attr("tabindex") && n.data("tabindex", "0").attr("tabindex", this.$wrapper.attr("tabindex")), n.find("input, textarea, select").each(function() {
                        var t = $(this),
                            e = t.attr("type"),
                            a = (t.parents(".field").first(), t.attr("id")),
                            i = t.attr("name"),
                            s = n.find('label[for="' + a + '"]');
                        t.attr("id", a.replace("_xxx", "_" + o)).attr("name", i.replace("_xxx", "_" + o)), 0 < s.length && s.attr("for", a.replace("_xxx", "_" + o)), "checkbox" != e && "radio" != e && s.on("click", function(t) {
                            t.preventDefault()
                        }), t.val(t.attr("value"))
                    }), n.find("[data-requires]").each(function() {
                        var t = $(this),
                            e = t.attr("data-requires");
                        e && t.attr("data-requires", e.replace("_xxx", "_" + o))
                    }), this.cloneFields && 0 < this.length()) {
                    var t, e, a, i = this.$item.last();
                    for (a in this.cloneFields) e = this.cloneFields[a], t = i.find('[name^="' + e + '_"]').first(), n.find('[name^="' + e + '_"]').first().val(t.val())
                }
                return n.appendTo(this.$items), n
            }
        }, i.prototype.val = function(t) {
            if (t) {
                var e, a, i, s, n, o, r = Math.max(t.length, this.min),
                    l = this.length();
                if (0 == r) this.$item.remove();
                else if (l < r) {
                    for (e = l; e < r; e++) this.addBase();
                    this.$item = this.$items.children(".item")
                } else if (r < l) {
                    for (e = l; r < e; e--) this.removeBase(e - 1);
                    this.$item = this.$items.children(".item")
                }
                if (0 < r)
                    for (e in this.$items.find("input, textarea, select").val(""), t) {
                        for (a in s = (n = this.get(e)).data("id"), t[e])
                            if ("object" == typeof t[e][a])
                                for (i in t[e][a]) "checkbox" == (o = n.find('[name="' + a + "." + i + "_" + s + '"]')).attr("type") ? o.prop("checked", t[e][a][i]) : o.val(t[e][a][i]);
                            else "checkbox" == (o = n.find('[name="' + a + "_" + s + '"]')).attr("type") ? o.prop("checked", t[e][a]) : o.val(t[e][a]), o.trigger("change", ["formArray.val"]);
                        e in this.states ? !1 === this.states[e] ? n.removeClass("collapsed") : n.addClass("collapsed") : this.collapse && (!this.collapseAlt || 0 < e) ? n.addClass("collapsed") : n.removeClass("collapsed"), this.form.initTypes(n), this.form.initRequires(n, this.form.$obj), this.form.initConditions(n, this.form.$obj)
                    }
                return this.sync(), this.$wrapper
            }
            var c = [];
            return this.$item.each(function() {
                var t = $(this),
                    i = {};
                t.find("input, textarea, select").each(function() {
                    var t = $(this),
                        e = t.attr("name").replace(/_[0-9]+$/, "").split("."),
                        a = t.val();
                    "checkbox" == t.attr("type") && (a = !!t.prop("checked")), 2 == e.length ? (e[0] in i || (i[e[0]] = {}), i[e[0]][e[1]] = a) : i[e[0]] = a
                }), c.push(i)
            }), c
        }, i.prototype.change = function(t, e) {
            this.$wrapper.trigger("change", [t, e])
        }, i.prototype.blur = function(t, e) {
            this.$wrapper.trigger("blur", [t, e])
        }, i.prototype.sync = function() {
            var t = this,
                e = this.length();
            if (this.$item = this.$items.children(".item"), 0 == e) this.$wrapper.addClass("empty");
            else switch (this.$wrapper.removeClass("empty"), 0 < this.min && e <= this.min ? this.$wrapper.addClass("is-min") : this.$wrapper.removeClass("is-min"), this.$items.find('[name^="' + this.title + '_"]').trigger("change.title", ["formArray.sync"]), this.thumbnail) {
                case "asset":
                    this.$items.find('[name^="assetId_"]').trigger("change.thumbnail", ["formArray.sync.asset"]);
                    break;
                case "icon":
                    this.$items.find('[name^="type_"]').trigger("change.thumbnail", ["formArray.sync.icon"]);
                    break;
                case "buttonIcon":
                    this.$items.find('[name^="iconType_"]').trigger("change.thumbnail", ["formArray.sync.thumbnail"])
            }
            this.states = [], this.$item.each(function() {
                t.states.push($(this).hasClass("collapsed"))
            }), this.exposeCount && this.$count.val(e).attr("value", e).trigger("change", ["formArray.sync"])
        }, i.prototype.dump = function() {}, i.prototype.scrollTop = function() {
            return $(window).scrollTop()
        }, $.fn.formArray = function(t) {
            var e = $(this);
            if (0 == this.length) return e;
            if (1 < this.length) {
                for (var a = 0; a < this.length; a++) $(this[a]).formArray(t);
                return e
            }
            return this[0]._formArray = new i(e, t), e
        }, $.valHandlers.push({
            condition: function() {
                return "_formArray" in this
            },
            get: function() {
                return this._formArray.val()
            },
            set: function(t) {
                return this._formArray.val(t)
            }
        }), e.exports = i
    }, {}],
    formColorPicker: [function(t, e, a) {
        function i(t) {
            var s, e, a, i, o, r, l, c, h, d = this;
            this.alpha = "1" == t.data("alpha"), t.removeData("alpha").removeAttr("data-alpha"), this.optional = "1" == t.data("optional"), this.optional && t.attr("placeholder", "(none)"), this.expand = t.hasClass("left") || t.hasClass("right"), t.attr("type", "text").attr("data-manual", "1").data("manual", "1").attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off").attr("spellcheck", "false").attr("maxlength", this.alpha ? 9 : 7).on("focus", function() {
                var t, e;
                s.addClass("focus"), d.expand && ("static" == (e = (t = s.parent()).parent()).css("position") && e.css("position", "relative"), s.addClass("expand").css("width", e.width()).css("left", -1 * t.position().left + "px"), e.css("position", ""))
            }).on("blur", function() {
                s.removeClass("focus"), d.expand && s.removeClass("expand").css("width", "").css("left", "")
            }), r = {
                $input: null,
                $swatch: null,
                currentValue: "#FFFFFF",
                init: function(t) {
                    var n = this;
                    this.$input = t, d.optional && (this.currentValue = ""), this.$swatch = $('<div class="swatch" />').insertBefore(this.$input), this.$input.on("change input", function(t, e, a) {
                        if (!a) {
                            var i, s = n.$input.val();
                            if ("" == s && d.optional) o = !0, c.pos = 0, l.pos[0] = 100, l.pos[1] = 0, d.alpha && (h.pos = 100);
                            else {
                                if (o = !1, !(i = d.hexaToRgba(s))) return;
                                r.currentValue = s.toUpperCase(), i = d.rgbaToHsva(i.r, i.g, i.b, i.a), c.pos = 100 * i.h, l.pos[0] = 100 * i.s, l.pos[1] = 100 * (1 - i.v), d.alpha ? h.pos = 100 * i.a : h.pos = 0
                            }
                            d.alpha && h.sync(), c.sync(), l.sync(), n.sync(e, a)
                        }
                    }).on("blur", function() {
                        n.$input.val(r.currentValue)
                    })
                },
                sync: function(t, e) {
                    if (o) return s.addClass("empty"), this.$swatch.css("background-color", ""), r.currentValue = "", this.$input.val("").trigger("change", [t, !0]), void l.redraw();
                    s.removeClass("empty"), c.changed() && l.redraw();
                    var a = {
                        h: null,
                        s: null,
                        v: null,
                        a: null
                    };
                    a.h = c.pos / 100, a.s = l.pos[0] / 100, a.v = 1 - l.pos[1] / 100, d.alpha ? a.a = h.pos / 100 : a.a = 1;
                    var i = d.hsvaToRgba(a.h, a.s, a.v, a.a),
                        a = d.rgbaToHexa(i.r, i.g, i.b, i.a),
                        i = "rgba(" + i.r + "," + i.g + "," + i.b + "," + i.a / 255 + ")";
                    this.$swatch.css("background-color", i), r.currentValue = a, this.$input.val() != a && this.$input.val(a).trigger("change", [t, !0])
                }
            }, s = $('<div class="form-color-picker ' + (t.attr("class") ? t.attr("class") : "") + '"><div class="content"><div class="inner"><div class="hueSlider"><div class="cursor"></div><canvas></canvas></div><div class="picker"><div class="cursor"></div><canvas></canvas></div>' + (d.alpha ? '<div class="alphaSlider"><div class="cursor"></div><canvas></canvas></div>' : "") + "</div></div></div>").insertAfter(t), t.prependTo(s), s.find(".content").on("mousedown touchstart", function(t) {
                t.preventDefault(), t.stopPropagation()
            }), e = s.find(".picker"), l = {
                $cursor: null,
                $wrapper: null,
                $canvas: null,
                canvas: null,
                context: null,
                imageData: null,
                pos: [0, 0],
                dragTimeoutId: null,
                sync: function() {
                    this.$cursor.css("left", this.pos[0] + "%").css("top", this.pos[1] + "%")
                },
                init: function(t) {
                    var a = this;
                    this.$wrapper = t, this.$canvas = this.$wrapper.find("canvas").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("cursor", "crosshair"), this.canvas = this.$canvas[0], this.canvas.width = 100, this.canvas.height = 100, this.context = this.canvas.getContext("2d"), this.imageData = this.context.getImageData(0, 0, 100, 100), this.$cursor = this.$wrapper.find(".cursor"), this.$canvas.touch({
                        useMouse: app.touch.useMouse,
                        useTouch: app.touch.useTouch,
                        trackDocument: !0,
                        trackDocumentNormalize: !0,
                        dragThreshold: 0,
                        dragDelay: 0,
                        preventDefault: {
                            drag: !0
                        }
                    }).on("tap dragStart drag", function(t, e) {
                        a.pos[0] = Math.round(e.ex / a.$canvas.width() * 100), a.pos[1] = Math.round(e.ey / a.$canvas.height() * 100), o = !1, clearTimeout(a.dragTimeoutId), a.dragTimeoutId = setTimeout(function() {
                            a.sync(), r.sync()
                        }, 1)
                    }), this.redraw()
                },
                redraw: function() {
                    for (var t, e, a, i, s = 0; s < 100; s++)
                        for (t = 0; t < 100; t++) e = t, a = 99 - s, i = d.hsvaToRgba(c.pos / 100, t / 100, s / 100, 1), a = 4 * (e + 100 * a), this.imageData.data[0 + a] = i.r, this.imageData.data[1 + a] = i.g, this.imageData.data[2 + a] = i.b, this.imageData.data[3 + a] = 255;
                    this.context.putImageData(this.imageData, 0, 0), this.sync()
                }
            }, a = s.find(".hueSlider"), c = {
                $cursor: null,
                $wrapper: null,
                $canvas: null,
                canvas: null,
                context: null,
                imageData: null,
                pos: 0,
                lastPos: 0,
                dragTimeoutId: null,
                changed: function() {
                    return this.pos != this.lastPos
                },
                sync: function() {
                    this.$cursor.css("top", this.pos + "%")
                },
                init: function(t) {
                    var a = this;
                    this.$wrapper = t, this.$canvas = this.$wrapper.find("canvas").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("cursor", "crosshair").appendTo(this.$wrapper), this.canvas = this.$canvas[0], this.canvas.width = 1, this.canvas.height = 100, this.context = this.canvas.getContext("2d"), this.imageData = this.context.getImageData(0, 0, 1, 100), this.$cursor = this.$wrapper.find(".cursor"), this.$canvas.touch({
                        useMouse: app.touch.useMouse,
                        useTouch: app.touch.useTouch,
                        trackDocument: !0,
                        trackDocumentNormalize: !0,
                        dragThreshold: 0,
                        dragDelay: 0,
                        preventDefault: {
                            drag: !0
                        }
                    }).on("tap dragStart drag", function(t, e) {
                        a.lastPos = a.pos, a.pos = Math.round(e.ey / a.$canvas.height() * 100), o = !1, clearTimeout(a.dragTimeoutId), a.dragTimeoutId = setTimeout(function() {
                            a.sync(), r.sync()
                        }, 1)
                    }).on("dragEnd", function(t, e) {
                        a.lastPos = a.pos, a.pos = Math.round(e.end.ey / a.$canvas.height() * 100), (100 < a.pos || a.pos < 0) && (a.pos = Math.max(0, Math.min(100, a.lastPos))), o = !1, a.sync(), r.sync(), l.redraw()
                    }), this.redraw()
                },
                redraw: function() {
                    for (var t, e, a, i, s = 0; s < 100; s++)
                        for (i = d.hsvaToRgba(s / 100, 1, 1, 1), e = s, t = 0; t < 1; t++) a = 4 * (t + +e), this.imageData.data[0 + a] = i.r, this.imageData.data[1 + a] = i.g, this.imageData.data[2 + a] = i.b, this.imageData.data[3 + a] = i.a;
                    this.context.putImageData(this.imageData, 0, 0), this.sync(), this.lastPos = this.pos
                }
            }, i = s.find(".alphaSlider"), h = {
                $cursor: null,
                $wrapper: null,
                $canvas: null,
                canvas: null,
                context: null,
                imageData: null,
                pos: 0,
                lastPos: 0,
                dragTimeoutId: null,
                changed: function() {
                    return this.pos != this.lastPos
                },
                sync: function() {
                    this.$cursor.css("left", this.pos + "%")
                },
                init: function(t) {
                    var a = this;
                    this.$wrapper = t, this.$canvas = this.$wrapper.find("canvas").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("cursor", "crosshair").appendTo(this.$wrapper), this.canvas = this.$canvas[0], this.canvas.width = 100, this.canvas.height = 1, this.context = this.canvas.getContext("2d"), this.imageData = this.context.getImageData(0, 0, 100, 1), this.$cursor = this.$wrapper.find(".cursor"), this.$canvas.touch({
                        useMouse: app.touch.useMouse,
                        useTouch: app.touch.useTouch,
                        trackDocument: !0,
                        trackDocumentNormalize: !0,
                        dragThreshold: 0,
                        dragDelay: 0,
                        preventDefault: {
                            drag: !0
                        }
                    }).on("tap dragStart drag", function(t, e) {
                        a.lastPos = a.pos, a.pos = Math.round(e.ex / a.$canvas.width() * 100), o = !1, clearTimeout(a.dragTimeoutId), a.dragTimeoutId = setTimeout(function() {
                            a.sync(), r.sync()
                        }, 1)
                    }), this.redraw()
                },
                redraw: function() {
                    for (var t, e, a, i = 0; i < 100; i++)
                        for (e = i, t = 0; t < 1; t++) a = 4 * (t + +e), this.imageData.data[0 + a] = 255, this.imageData.data[1 + a] = 255, this.imageData.data[2 + a] = 255, this.imageData.data[3 + a] = e / 100 * 255;
                    this.context.putImageData(this.imageData, 0, 0), this.sync(), this.lastPos = this.pos
                }
            }, r.init(t), l.init(e), c.init(a), this.alpha && h.init(i), t.triggerHandler("change", ["init", !1])
        }
        i.prototype.rgbaToHsva = function(t, e, a, i) {
            var s, n = Math.max(t, e, a),
                o = Math.min(t, e, a),
                r = n - o,
                l = 0 === n ? 0 : r / n,
                c = n / 255,
                i = i / 255;
            switch (n) {
                case o:
                    s = 0;
                    break;
                case t:
                    s = e - a + r * (e < a ? 6 : 0), s /= 6 * r;
                    break;
                case e:
                    s = a - t + 2 * r, s /= 6 * r;
                    break;
                case a:
                    s = t - e + 4 * r, s /= 6 * r
            }
            return {
                h: s,
                s: l,
                v: c,
                a: i
            }
        }, i.prototype.hexaToRgba = function(t) {
            var e, a, i, s = 255;
            if ("#" != t.charAt(0)) return null;
            if (6 == (t = t.substr(1)).length) {
                if (e = parseInt(t.substr(0, 2), 16), a = parseInt(t.substr(2, 2), 16), i = parseInt(t.substr(4, 2), 16), isNaN(e) || isNaN(a) || isNaN(i)) return null
            } else {
                if (8 != t.length || !this.alpha) return null;
                if (e = parseInt(t.substr(0, 2), 16), a = parseInt(t.substr(2, 2), 16), i = parseInt(t.substr(4, 2), 16), s = parseInt(t.substr(6, 2), 16), isNaN(e) || isNaN(a) || isNaN(i) || isNaN(s)) return null
            }
            return {
                r: e,
                g: a,
                b: i,
                a: s
            }
        }, i.prototype.rgbaToHexa = function(t, e, a, i) {
            t = t.toString(16), e = e.toString(16), a = a.toString(16), i = i.toString(16);
            return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == a.length && (a = "0" + a), 1 == i.length && (i = "0" + i), "#" + (t + e + a + (i = !this.alpha || "ff" == i ? "" : i)).toUpperCase()
        }, i.prototype.hsvaToRgba = function(t, e, a, i) {
            var s, n, o, r = Math.floor(6 * t),
                t = 6 * t - r,
                l = a * (1 - e),
                c = a * (1 - t * e),
                h = a * (1 - (1 - t) * e);
            switch (r % 6) {
                case 0:
                    s = a, n = h, o = l;
                    break;
                case 1:
                    s = c, n = a, o = l;
                    break;
                case 2:
                    s = l, n = a, o = h;
                    break;
                case 3:
                    s = l, n = c, o = a;
                    break;
                case 4:
                    s = h, n = l, o = a;
                    break;
                case 5:
                    s = a, n = l, o = c
            }
            return {
                r: Math.round(255 * s),
                g: Math.round(255 * n),
                b: Math.round(255 * o),
                a: Math.round(255 * i)
            }
        }, $.fn.formColorPicker = function() {
            var t = $(this);
            if (0 == this.length) return t;
            if (1 < this.length) {
                for (var e = 0; e < this.length; e++) $(this[e]).formColorPicker();
                return t
            }
            return "_formColorPicker" in this[0] || (this[0]._formColorPicker = new i(t)), t
        }, void 0 !== e && (e.exports = i)
    }, {}],
    formImageUploader: [function(t, e, a) {
        function i(t) {
            this.$obj = t, this.inputPrefix = "", this.image = {
                canvas: null,
                width: 0,
                height: 0,
                type: null,
                size: 0,
                orientation: null,
                animated: !1,
                editable: !1,
                original: null,
                adjustments: {},
                crop: {
                    topLeft: {
                        x: null,
                        y: null
                    },
                    bottomRight: {
                        x: null,
                        y: null
                    }
                }
            }, this.settings = {
                mode: "data",
                editable: !0,
                forceCropMode: null,
                maxCanvasWH: 2560,
                maxWH: 1024,
                maxSize: 2048,
                forceCanvas: !1,
                forceType: !1,
                circle: !1,
                minWidth: 150,
                minHeight: 150,
                inArray: !1
            }, void 0 !== (t = this.$obj.attr("data-mode")) && (this.settings.mode = t), void 0 !== (t = this.$obj.attr("data-editable")) && (this.settings.editable = "1" == t), void 0 !== (t = this.$obj.attr("data-maxWH")) && (this.settings.maxWH = parseInt(t), this.settings.maxCanvasWH = 2.5 * this.settings.maxWH), void 0 !== (t = this.$obj.attr("data-maxCanvasWH")) && (this.settings.maxCanvasWH = parseInt(t)), void 0 !== (t = this.$obj.attr("data-maxSize")) && (this.settings.maxSize = parseInt(t)), void 0 !== (t = this.$obj.attr("data-forceCanvas")) && (this.settings.forceCanvas = "1" == t), void 0 !== (t = this.$obj.attr("data-forceType")) && (this.settings.forceType = t), void 0 !== (t = this.$obj.attr("data-forceCropMode")) && (this.settings.forceCropMode = t), void 0 !== (t = this.$obj.attr("data-circle")) && (this.settings.circle = "1" == t), void 0 !== (t = this.$obj.attr("data-minWidth")) && (this.settings.minWidth = parseInt(t)), void 0 !== (t = this.$obj.attr("data-minHeight")) && (this.settings.minHeight = parseInt(t)), void 0 !== (t = this.$obj.attr("data-inArray")) && (this.settings.inArray = "1" == t), this.init()
        }
        i.prototype.init = function() {
            var a = this;
            this.$image = $("<img />").on("load", function() {
                a.completeLoad()
            }), this.image.canvas = document.createElement("canvas"), this.$idInput = this.$obj.find(".id").css("position", "absolute").css("width", "0px").css("height", "0px").css("visibility", "hidden").css("z-index", "-1").css("overflow", "hidden").css("-moz-pointer-events", "none").css("-webkit-pointer-events", "none").css("-ms-pointer-events", "none").css("pointer-events", "none").on("--refresh-image", function() {
                var t = a.$dataInput.val(),
                    e = a.$idInput.val();
                t && e ? (a.$thumbnail.css("background-image", "url(" + t + ")"), a.$obj.removeClass("new")) : (a.$thumbnail.css("background-image", ""), a.$obj.addClass("new"))
            }), this.$dataInput = this.$obj.find(".data").css("display", "none"), this.$fileInput = $('<input type="file" name="image" autocomplete="off" accept="image/jpeg,image/gif,image/png,image/svg+xml" />').on("change", function() {
                a.load(a.$fileInput.prop("files")[0]), a.$fileInput.val("")
            }), this.$thumbnail = $('<div class="thumbnail"></div>').prependTo(this.$obj).css("background-size", "cover").css("background-position", "center").on("click", function(t) {
                t.preventDefault(), t.stopPropagation(), a.$idInput.prop("disabled") || a.$fileInput.trigger("click")
            }), this.$obj.on("click", ".do-upload", function(t) {
                t.preventDefault(), t.stopPropagation(), a.$idInput.prop("disabled") || a.$fileInput.trigger("click")
            }).on("keydown", ".do-upload", app.keyHandler).on("dragover", function(t) {
                return a.$obj.addClass("is-dragOver"), !1
            }).on("drop dragleave", function(t) {
                return a.$obj.removeClass("is-dragOver"), !1
            }).on("drop", function(t) {
                t = t.originalEvent.dataTransfer.files, t.length;
                return a.load(t[0]), a.$fileInput.val(""), !1
            }), this.$obj.on("click", ".do-clear", function(t) {
                t.preventDefault(), t.stopPropagation(), a.$idInput.prop("disabled") || (a.$image.attr("src", ""), a.$thumbnail.css("background-image", ""), t = a.$dataInput.val(), "object" == a.settings.mode && t && app.objectUrl.is(t) && app.objectUrl.revoke(t), a.$dataInput.val("").trigger(a.settings.inArray ? "change-in-array" : "change"), a.$idInput.val("").trigger("change", ["formImageUploader.clear"]), a.$obj.addClass("new"), a.settings.inArray && a.$obj.parents(".form-array").first().trigger("arrayChange"))
            }).on("keydown", ".do-clear", app.keyHandler), this.$idInput.triggerHandler("--refresh-image"), l.init()
        }, i.prototype.sync = function(e) {
            function a() {
                (t = h.image.canvas.getContext("2d")).clearRect(0, 0, h.image.canvas.width, h.image.canvas.height), h.$thumbnail.css("background-image", "url(" + e + ")"), c = h.$dataInput.val(), "object" == h.settings.mode && c && app.objectUrl.is(c) && app.objectUrl.revoke(c), h.$dataInput.val(e).trigger(h.settings.inArray ? "change-in-array" : "change"), h.$idInput.val(md5(String(Date.now()) + e)).trigger("change", ["formImageUploader.sync"]), h.$obj.removeClass("new"), h.image.animated = !1, h.image.editable = !1, h.settings.inArray && h.$obj.parents(".form-array").first().trigger("arrayChange")
            }
            var i, t, s, n, o, r, l, c, h = this;
            if (void 0 === e) {
                if (i = document.createElement("canvas"), t = i.getContext("2d"), i.width = this.image.crop.bottomRight.x - this.image.crop.topLeft.x, i.height = this.image.crop.bottomRight.y - this.image.crop.topLeft.y, t.drawImage(this.image.canvas, -1 * this.image.crop.topLeft.x, -1 * this.image.crop.topLeft.y), (i.width > this.settings.maxWH || i.height > this.settings.maxWH) && (l = this.settings.maxWH / i.width, n = this.settings.maxWH / i.height, o = Math.min(l, n), r = Math.floor(o * i.width), l = Math.floor(o * i.height), o = (n = document.createElement("canvas")).getContext("2d"), n.width = r, n.height = l, o.drawImage(i, 0, 0, r, l), delete i, i = n), "image/png" == this.image.type) {
                    for (var d = t.getImageData(0, 0, i.width, i.height).data, p = !1, u = 0; u < d.length; u += 4)
                        if (d[u + 3] < 255) {
                            p = !0;
                            break
                        } p || (this.image.type = "image/jpeg")
                }
                if (this.settings.forceType) s = this.settings.forceType;
                else switch (this.image.type) {
                    case "image/svg+xml":
                        s = "image/svg+xml";
                        break;
                    case "image/png":
                    case "image/gif":
                        s = "image/png";
                        break;
                    default:
                        s = "image/jpeg"
                }
                switch (this.settings.mode) {
                    case "object":
                    case "object-manual":
                        i.toBlob(function(t) {
                            e = app.objectUrl.create(t), delete i, a()
                        }, s, 1);
                        break;
                    default:
                        e = i.toDataURL(s, 1), delete i, a()
                }
            } else a()
        }, i.prototype.load = function(a) {
            var i = this;
            a && this.getImageProperties(a, function(t) {
                var e;
                switch (i.image.type = t.type, i.image.size = t.size, i.image.orientation = t.orientation, i.image.animated = t.animated, i.settings.forceType) {
                    case "image/jpeg":
                    case "image/png":
                    case "image/gif":
                        "image/svg+xml" == i.image.type && (i.image.type = "image/unknown", e = "JPEG, PNG, or GIF");
                        break;
                    default:
                        e = "JPEG, PNG, GIF, or SVG"
                }
                switch (i.image.type) {
                    case "image/svg+xml":
                        i.image.editable = !1;
                        break;
                    case "image/jpeg":
                    case "image/png":
                        i.image.editable = !0;
                        break;
                    case "image/gif":
                        i.image.animated && !i.settings.forceCanvas ? i.image.editable = !1 : i.image.editable = !0;
                        break;
                    default:
                        return void app.dialog.show({
                            title: "Invalid image type",
                            message: "Sorry, images must be in either " + e + " format."
                        })
                }
                Math.floor(i.image.size / 1024) > i.settings.maxSize ? app.dialog.show({
                    title: "Image too large",
                    message: "Sorry, images cannot exceed " + i.settings.maxSize / 1024 + "MB in file size."
                }) : (t = app.objectUrl.create(a), i.$image.css("width", "").css("height", "").attr("src", "").attr("src", t))
            })
        }, i.prototype.completeLoad = function() {
            var t, e, a, i, s, n = this,
                o = 0,
                r = !1;
            if (this.image.editable || this.settings.forceCanvas) {
                switch (this.image.orientation) {
                    case 1:
                    default:
                        break;
                    case 2:
                        r = !0;
                        break;
                    case 3:
                        o = 180;
                        break;
                    case 4:
                        r = !0, o = 180;
                        break;
                    case 5:
                        r = !0, o = 270;
                        break;
                    case 6:
                        o = 90;
                        break;
                    case 7:
                        r = !0, o = 90;
                        break;
                    case 8:
                        o = -90
                }
                if (e = this.$image[0].width, a = this.$image[0].height, (e > this.settings.maxCanvasWH || a > this.settings.maxCanvasWH) && (i = this.settings.maxCanvasWH / e, s = this.settings.maxCanvasWH / a, s = Math.min(i, s), e = Math.floor(s * e), a = Math.floor(s * a)), s = this.image.canvas.getContext("2d"), 360 <= o ? o -= 360 : o < 0 && (o += 360), 0 == o || 180 == Math.abs(o) ? (this.image.canvas.width = e, this.image.canvas.height = a, s.translate(this.image.canvas.width / 2, this.image.canvas.height / 2), s.rotate(o * (Math.PI / 180)), s.translate(this.image.canvas.width / -2, this.image.canvas.height / -2)) : (this.image.canvas.width = a, this.image.canvas.height = e, s.translate(this.image.canvas.width / 2, this.image.canvas.height / 2), s.rotate(o * (Math.PI / 180)), s.translate(this.image.canvas.height / -2, this.image.canvas.width / -2)), r ? (s.scale(-1, 1), s.drawImage(this.$image[0], -e, 0, e, a)) : s.drawImage(this.$image[0], 0, 0, e, a), this.image.width = this.image.canvas.width, this.image.height = this.image.canvas.height, (t = this.$image.attr("src")) && app.objectUrl.is(t) && app.objectUrl.revoke(t), this.$image.attr("src", ""), !this.settings.editable) return this.image.crop.topLeft.x = 0, this.image.crop.topLeft.y = 0, this.image.crop.bottomRight.x = this.image.width, this.image.crop.bottomRight.y = this.image.height, this.sync(), void(this.image.orientation = null);
                l.show(this), window._formImageUploader = this
            } else switch (t = this.$image.attr("src"), n.settings.mode) {
                case "object":
                case "object-manual":
                    t && app.objectUrl.is(t) ? this.sync(t) : app.objectUrl.createFromUrl(t, function(t) {
                        n.sync(t)
                    });
                    break;
                default:
                    t && app.dataUrl.is(t) && this.sync(t), app.dataUrl.createFromUrl(t, function(t) {
                        n.sync(t)
                    })
            }
        }, i.prototype.getImageProperties_orientation = function(t) {
            var e, a, i, s, n, o, r = new DataView(t);
            if (65496 != r.getUint16(0, !1)) return null;
            for (e = Math.min(r.byteLength, 65536), a = 2; a < e;)
                if (i = r.getUint16(a, !1), a += 2, 65505 == i) {
                    if (1165519206 != r.getUint32(a += 2, !1)) return null;
                    for (s = 18761 == r.getUint16(a += 6, !1), a += r.getUint32(a + 4, s), n = r.getUint16(a, s), a += 2, o = 0; o < n; o++)
                        if (274 == r.getUint16(a + 12 * o, s)) return r.getUint16(a + 12 * o + 8, s)
                } else {
                    if (65280 != (65280 & i)) break;
                    a += r.getUint16(a, !1)
                } return null
        }, i.prototype.getImageProperties_animated = function(t) {
            var e, a, i, s = 0,
                n = new DataView(t),
                o = n.byteLength;
            if (71 !== n.getUint8(0) || 73 !== n.getUint8(1) || 70 !== n.getUint8(2) || 56 !== n.getUint8(3)) return !1;
            for (e = 0, a = o - 3; e < a && s < 2; ++e) 0 == n.getUint8(e) && 33 === n.getUint8(e + 1) && 249 === n.getUint8(e + 2) && (i = e + 4 + n.getUint8(e + 3)) + 1 < o && 0 === n.getUint8(i) && (44 === n.getUint8(i + 1) || n.getUint8(i + 1 === 33)) && s++;
            return 1 < s
        }, i.prototype.getImageProperties = function(a, i) {
            var s = this,
                t = new FileReader;
            t.onload = function(t) {
                var e = {};
                e.type = a.type, e.size = a.size, e.orientation = s.getImageProperties_orientation(t.target.result), e.animated = s.getImageProperties_animated(t.target.result), i(e)
            }, t.readAsArrayBuffer(a)
        };
        var l = {
            instance: null,
            $window: null,
            $body: null,
            $modal: null,
            $canvas: null,
            image: null,
            settings: null,
            canvasWrapper: {
                width: 0,
                height: 0,
                zoom: 1
            },
            crop: {
                mode: null,
                maskCanvas: null,
                controlSize: 60,
                minWidth: 150,
                minHeight: 150,
                topLeft: null,
                bottomRight: null,
                width: function() {
                    return this.bottomRight.x - this.topLeft.x
                },
                height: function() {
                    return this.bottomRight.y - this.topLeft.y
                }
            },
            init: function() {
                var s = this;
                this.$modal || (this.$body = $("body"), this.$window = $(window).on("resize orientationchange", function() {
                    s.isVisible() && s.rescale()
                }), this.$modal = $('<div class="form-image-uploader-modal" tabindex="-1"><div class="inner"><div class="wrapper"><div class="canvas-wrapper"><canvas class="crop-mask"></canvas><div class="crop"><div class="controls" data-control="move"><div class="control top-left" data-control="topLeft"></div><div class="control top-right" data-control="topRight"></div><div class="control bottom-right" data-control="bottomRight"></div><div class="control bottom-left" data-control="bottomLeft"></div><div class="control top" data-control="top"></div><div class="control right" data-control="right"></div><div class="control bottom" data-control="bottom"></div><div class="control left" data-control="left"></div></div></div></div></div><header><div class="menu"><div data-name="crop" data-tooltip="Crop" data-tooltip-mode="form-image-uploader-option"><svg><use xlink:href="#icon-expand"></use></svg></div><div data-name="rotate" data-tooltip="Rotate" data-tooltip-mode="form-image-uploader-option"><svg><use xlink:href="#icon-redo"></use></svg></div><div data-name="flip-horizontally" data-tooltip="Flip Horizontally" data-tooltip-mode="form-image-uploader-option"><svg><use xlink:href="#icon-transfer"></use></svg></div><div data-name="flip-vertically" data-tooltip="Flip Vertically" data-tooltip-mode="form-image-uploader-option"><svg><use xlink:href="#icon-sort"></use></svg></div><div data-name="adjustments" data-tooltip="Adjustments" data-tooltip-mode="form-image-uploader-option"><span><svg><use xlink:href="#icon-adjustments"></use></svg></span></div><div data-name="effects" data-tooltip="Effects" data-tooltip-mode="form-image-uploader-option"><span><svg><use xlink:href="#icon-effects"></use></svg></span></div></div><ul class="actions fixed"><li><a href="#" class="button small do-cancel"><span class="label">Cancel</span></a></li><li><a href="#" class="button small do-change"><span class="label">Change</span></a></li><li><a href="#" class="button small special do-save"><span class="label">Accept</span></a></li></ul></header><footer><section data-name="adjustments"><div class="field"><label>Hue</label><input type="range" class="xsmall" name="hue" min="0" max="360" step="1" value="0" data-default="0" /><div class="reset disabled"></div></div><div class="field"><label>Saturation</label><input type="range" class="xsmall" name="saturation" min="0" max="200" step="1" value="100" data-default="100"/><div class="reset disabled"></div></div><div class="field"><label>Brightness</label><input type="range" class="xsmall" name="brightness" min="0" max="200" step="1" value="100" data-default="100" /><div class="reset disabled"></div></div><div class="field"><label>Contrast</label><input type="range" class="xsmall" name="contrast" min="0" max="200" step="1" value="100" data-default="100" /><div class="reset disabled"></div></div></section><section data-name="effects"><div class="field"><label>Sepia</label><input type="range" class="xsmall" name="sepia" min="0" max="100" step="1" value="0" data-default="0" /><div class="reset disabled"></div></div><div class="field"><label>Black and White</label><input type="range" class="xsmall" name="grayscale" min="0" max="100" step="1" value="0" data-default="0" /><div class="reset disabled"></div></div><div class="field"><label>Invert</label><input type="range" class="xsmall" name="invert" min="0" max="100" step="1" value="0" data-default="0" /><div class="reset disabled"></div></div><div class="field"><label>Blur</label><input type="range" class="xsmall" name="blur" min="0" max="100" step="1" value="0" data-default="0" /><div class="reset disabled"></div></div></section></footer></div></div>').appendTo(this.$body).css("-moz-user-select", "none").css("-webkit-user-select", "none").css("-ms-user-select", "none").css("user-select", "none").on("click mousedown", function(t) {
                    t.stopPropagation()
                }).on("keydown", function(t) {
                    var e, a, i;
                    switch (t.keyCode) {
                        case 13:
                            t.preventDefault(), t.stopPropagation(), s.hide(!0);
                            break;
                        case 27:
                            t.preventDefault(), t.stopPropagation(), s.hide();
                            break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            switch (t.preventDefault(), t.stopPropagation(), i = t.shiftKey ? 20 : 2, a = e = 0, t.keyCode) {
                                case 37:
                                    e = -1 * i;
                                    break;
                                case 38:
                                    a = -1 * i;
                                    break;
                                case 39:
                                    e = i;
                                    break;
                                case 40:
                                    a = i
                            }
                            s.cropControl_move(e, a), s.redrawCrop()
                    }
                }), this.$wrapper = this.$modal.find(".wrapper"), this.$canvasWrapper = this.$modal.find(".canvas-wrapper").css("position", "relative").css("max-width", "100%"), this.$crop = this.$canvasWrapper.find(".crop").css("position", "absolute").css("z-index", 1).css("left", 0).css("top", 0), this.$cropMask = this.$canvasWrapper.find("canvas.crop-mask"), this.crop.maskCanvas = this.$cropMask[0], this.$cropControls = this.$crop.find(".controls").css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%"), x = .5 * this.crop.controlSize * -1, this.$cropControls.find(".control").css("position", "absolute").css("width", this.crop.controlSize + "px").css("height", this.crop.controlSize + "px"), this.$cropControls.find(".top-left").css("top", x).css("left", x), this.$cropControls.find(".top-right").css("top", x).css("right", x), this.$cropControls.find(".bottom-right").css("bottom", x).css("right", x), this.$cropControls.find(".bottom-left").css("bottom", x).css("left", x), this.$cropControls.find(".top").css("top", x).css("left", "calc(50% + " + x + "px)"), this.$cropControls.find(".right").css("top", "calc(50% + " + x + "px)").css("right", x), this.$cropControls.find(".bottom").css("bottom", x).css("left", "calc(50% + " + x + "px)"), this.$cropControls.find(".left").css("top", "calc(50% + " + x + "px)").css("left", x), this.$header = this.$modal.find("header"), this.$headerMenu = this.$header.find(".menu").on("click", "div", function(t) {
                    var e = $(this).data("name");
                    switch ($(this).addClass("clicked"), e) {
                        case "crop":
                            if (s.settings.forceCropMode) return;
                            s.cycleCropMode();
                            break;
                        case "rotate":
                            s.rotateCanvas();
                            break;
                        case "flip-horizontally":
                            s.flipCanvasHorizontally();
                            break;
                        case "flip-vertically":
                            s.flipCanvasVertically();
                            break;
                        case "adjustments":
                            s.toggleFooter("adjustments");
                            break;
                        case "effects":
                            s.toggleFooter("effects")
                    }
                }).on("mouseleave", "div", function(t) {
                    $(this).removeClass("clicked")
                }), this.$headerActions = this.$header.find(".actions").on("click", ".do-save", function(t) {
                    t.preventDefault(), t.stopPropagation(), s.hide(!0)
                }).on("click", ".do-change", function(t) {
                    t.preventDefault(), t.stopPropagation(), s.change()
                }).on("click", ".do-cancel", function(t) {
                    t.preventDefault(), t.stopPropagation(), s.hide()
                }), this.$footer = this.$modal.find("footer"), this.$footer.on("click", ".reset", function(t) {
                    var e = $(this).prev('input[type="range"]'),
                        a = e.data("default");
                    e.val(a).trigger("change")
                }), this.$footerInputs = this.$footer.find('input[type="range"]').on("change input", function(t) {
                    var e = $(this),
                        a = e.next(".reset");
                    e.val() == e.data("default") ? a.addClass("disabled") : a.removeClass("disabled"), s.adjustCanvas(s.footerValues())
                }), this.$canvasWrapper.touch({
                    useMouse: app.touch.useMouse,
                    useTouch: app.touch.useTouch,
                    trackDocument: !0,
                    trackDocumentNormalize: !0,
                    dragThreshold: 0,
                    dragDelay: 0,
                    tapAndHoldDelay: browser.mobile ? 150 : 300,
                    preventDefault: {
                        drag: !0
                    }
                }).on("dragStart tapAndHold", function(t, e) {
                    var a = "scrollY" in window ? window.scrollY : window.pageYOffset,
                        a = $(document.elementFromPoint(e.x, e.y - a)).data("control");
                    s.$crop.addClass("active"), a && (this._control = "cropControl_" + a, this._x = e.x, this._y = e.y)
                }).on("dragEnd", function(t, e) {
                    "_control" in this && (delete this._x, delete this._y, delete this._control, s.$crop.removeClass("active"))
                }).on("drag", function(t, e) {
                    var a, i;
                    "_control" in this && (a = e.x - this._x, i = e.y - this._y, s[this._control](a, i, e.ex, e.ey), s.redrawCrop(), this._x = e.x, this._y = e.y)
                }))
            },
            resetCrop: function() {
                this.crop.topLeft.x = .2 * this.image.width, this.crop.topLeft.y = .2 * this.image.height, this.crop.bottomRight.x = .8 * this.image.width, this.crop.bottomRight.y = .8 * this.image.height, this.crop.width() < this.settings.minWidth && (x = Math.ceil((this.settings.minWidth - this.crop.width()) / 2), this.crop.topLeft.x = Math.max(0, this.crop.topLeft.x - x), this.crop.bottomRight.x = Math.min(this.image.width, this.crop.bottomRight.x + x)), this.crop.height() < this.settings.minHeight && (x = Math.ceil((this.settings.minHeight - this.crop.height()) / 2), this.crop.topLeft.y = Math.max(0, this.crop.topLeft.y - x), this.crop.bottomRight.y = Math.min(this.image.height, this.crop.bottomRight.y + x))
            },
            cycleCropMode: function() {
                "off" == this.crop.mode ? this.setCropMode("free") : "free" == this.crop.mode ? this.setCropMode("fixed") : this.setCropMode("off")
            },
            refreshCropMode: function() {
                null === this.crop.mode && (this.crop.mode = "free"), this.setCropMode(this.crop.mode, !0)
            },
            setCropMode: function(t, e) {
                var a, i, s, n;
                if (this.settings.forceCropMode) {
                    if (!e) return;
                    t = this.settings.forceCropMode
                }
                switch (this.crop.mode = t, this.crop.mode) {
                    case "free":
                        a = "crop-fixed", i = "Fixed Crop", this.$crop.show(), this.$cropMask.show(), this.resetCrop();
                        break;
                    case "fixed":
                        if (a = "crop-off", i = "No Cropping", this.$crop.show(), this.$cropMask.show(), e && this.resetCrop(), (s = Math.floor(this.crop.bottomRight.x - this.crop.topLeft.x)) == (n = Math.floor(this.crop.bottomRight.y - this.crop.topLeft.y))) return;
                        n < s ? (this.crop.topLeft.x = this.crop.topLeft.x + (s - n) / 2, this.crop.bottomRight.x = this.crop.topLeft.x + n) : (this.crop.topLeft.y = this.crop.topLeft.y + (n - s) / 2, this.crop.bottomRight.y = this.crop.topLeft.y + s);
                        break;
                    case "off":
                        a = "crop-free", i = "Crop", this.$crop.hide(), this.$cropMask.hide(), this.crop.topLeft.x = 0, this.crop.topLeft.y = 0, this.crop.bottomRight.x = this.image.width, this.crop.bottomRight.y = this.image.height
                }
                this.redrawCrop(), this.updateMenuItem("crop", a, i)
            },
            snapCrop: function(t, e, a, i, s, n) {
                var o, r = {
                        topLeft: {
                            x: this.crop.topLeft.x,
                            y: this.crop.topLeft.y
                        },
                        bottomRight: {
                            x: this.crop.bottomRight.x,
                            y: this.crop.bottomRight.y
                        }
                    },
                    l = r.bottomRight.x - r.topLeft.x,
                    c = r.bottomRight.y - r.topLeft.y;
                Math.floor(t) <= 0 ? (a && (r.topLeft.x = 0), s && (o = l) > r.topLeft.x && (r.bottomRight.x = o)) : Math.ceil(t) >= this.canvasWrapper.width && (a && (o = this.image.width - l) < r.bottomRight.x && (r.topLeft.x = o), s && (r.bottomRight.x = this.image.width)), Math.floor(e) <= 0 ? (i && (r.topLeft.y = 0), n && (o = c) > r.topLeft.y && (r.bottomRight.y = o)) : Math.ceil(e) >= this.canvasWrapper.height && (i && (o = this.image.height - c) < r.bottomRight.y && (r.topLeft.y = o), n && (r.bottomRight.y = this.image.height)), l = r.bottomRight.x - r.topLeft.x, c = r.bottomRight.y - r.topLeft.y, l < this.settings.minWidth || c < this.settings.minHeight || "fixed" == this.crop.mode && l != c || (this.crop.topLeft.x = r.topLeft.x, this.crop.topLeft.y = r.topLeft.y, this.crop.bottomRight.x = r.bottomRight.x, this.crop.bottomRight.y = r.bottomRight.y)
            },
            moveCrop: function(t, e, a, i) {
                (this.crop.topLeft.x + t < 0 || this.crop.bottomRight.x + t > this.image.width) && (t = 0), (this.crop.topLeft.y + e < 0 || this.crop.bottomRight.y + e > this.image.height) && (e = 0), this.crop.topLeft.x += t, this.crop.topLeft.y += e, this.crop.bottomRight.x += t, this.crop.bottomRight.y += e
            },
            resizeCrop: function(t, e, a, i) {
                var s = this.crop.bottomRight.x - this.crop.topLeft.x,
                    n = this.crop.bottomRight.y - this.crop.topLeft.y;
                if (0 < t && s - t < this.settings.minWidth && (t = 0), a < 0 && s + a < this.settings.minWidth && (a = 0), 0 < e && n - e < this.settings.minHeight && (e = 0), i < 0 && n + i < this.settings.minHeight && (i = 0), "fixed" == this.crop.mode) {
                    if (t < 0 && this.crop.topLeft.x + t < 0) return;
                    if (0 < a && this.crop.bottomRight.x + a > this.image.width) return;
                    if (e < 0 && this.crop.topLeft.y + e < 0) return;
                    if (0 < i && this.crop.bottomRight.y + i > this.image.height) return
                }
                this.crop.topLeft.x += t, this.crop.topLeft.y += e, this.crop.bottomRight.x += a, this.crop.bottomRight.y += i, this.crop.topLeft.x = Math.max(this.crop.topLeft.x, 0), this.crop.topLeft.y = Math.max(this.crop.topLeft.y, 0), this.crop.bottomRight.x = Math.min(this.crop.bottomRight.x, this.image.width), this.crop.bottomRight.y = Math.min(this.crop.bottomRight.y, this.image.height)
            },
            redrawCrop: function() {
                var t = this.canvasWrapper.zoom * this.crop.topLeft.x,
                    e = this.canvasWrapper.zoom * this.crop.topLeft.y,
                    a = this.canvasWrapper.zoom * (this.crop.bottomRight.x - this.crop.topLeft.x),
                    i = this.canvasWrapper.zoom * (this.crop.bottomRight.y - this.crop.topLeft.y),
                    s = this.crop.maskCanvas.getContext("2d");
                s.globalCompositeOperation = "source-over", this.crop.maskCanvas.width = Math.ceil(this.canvasWrapper.width), this.crop.maskCanvas.height = Math.ceil(this.canvasWrapper.height), s.clearRect(0, 0, this.crop.maskCanvas.width, this.crop.maskCanvas.height), s.fillStyle = "rgba(0,0,0,0.5)", s.fillRect(0, 0, this.crop.maskCanvas.width, this.crop.maskCanvas.height), s.globalCompositeOperation = "destination-out", s.fillStyle = "#fff", s.fillRect(t, e, a, i), this.$crop.css("left", t).css("top", e).width(a).height(i)
            },
            attach: function(t) {
                this.instance = t, this.image = t.image, this.settings = t.settings, this.crop.topLeft = t.image.crop.topLeft, this.crop.bottomRight = t.image.crop.bottomRight, this.$canvas = $(t.image.canvas).addClass("image").prependTo(this.$canvasWrapper), this.image.adjustments = {}, this.updateOriginal()
            },
            detach: function() {
                this.clearOriginal(), this.$canvas.removeClass("image").detach(), this.crop.topLeft = null, this.crop.bottomRight = null, this.instance = null, this.image = null, this.settings = null
            },
            show: function(t) {
                var e = this;
                this.attach(t), this.resetFooter(), this.refreshCropMode(), this.settings.forceCropMode ? this.disableMenuItem("crop") : this.enableMenuItem("crop"), this.settings.circle ? this.$modal.addClass("circle") : this.$modal.removeClass("circle"), "filter" in CanvasRenderingContext2D.prototype && "safari" != browser.name && "edge" != browser.name && "ie" != browser.name || (this.disableMenuItem("adjustments"), this.disableMenuItem("effects")), this.rescale(), this.$modal.addClass("visible"), window.setTimeout(function() {
                    e.$modal.focus()
                }, 250)
            },
            hide: function(t) {
                t && this.instance.sync(), this.detach(), this.$modal.removeClass("visible");
                t = $("#ui");
                0 < t.length && t.focus()
            },
            change: function() {
                this.instance.$idInput.prop("disabled") || this.instance.$fileInput.trigger("click")
            },
            isVisible: function() {
                return !!this.$modal.hasClass("visible")
            },
            updateOriginal: function() {
                var t = this.image.canvas.getContext("2d");
                this.image.original = t.getImageData(0, 0, this.image.width, this.image.height)
            },
            restoreOriginal: function() {
                var t;
                this.image.original && ((t = this.image.canvas.getContext("2d")).filter = "none", t.putImageData(this.image.original, 0, 0))
            },
            clearOriginal: function() {
                this.image.original = null
            },
            applyAdjustments: function() {
                var t, e = [];
                context = this.image.canvas.getContext("2d"), t = "blur" in this.image.adjustments ? (t = Math.max(0, Math.min(100, this.image.adjustments.blur)), e.push("blur(" + t / 100 * 100 + "px)"), 2 * t) : 0, "sepia" in this.image.adjustments && e.push("sepia(" + Math.max(0, Math.min(100, this.image.adjustments.sepia)) + "%)"), "grayscale" in this.image.adjustments && e.push("grayscale(" + Math.max(0, Math.min(100, this.image.adjustments.grayscale)) + "%)"), "invert" in this.image.adjustments && e.push("invert(" + Math.max(0, Math.min(100, this.image.adjustments.invert)) + "%)"), "hue" in this.image.adjustments && e.push("hue-rotate(" + Math.max(0, Math.min(360, this.image.adjustments.hue)) + "deg)"), "saturation" in this.image.adjustments && e.push("saturate(" + Math.max(0, Math.min(200, this.image.adjustments.saturation)) + "%)"), "brightness" in this.image.adjustments && e.push("brightness(" + Math.max(0, Math.min(200, this.image.adjustments.brightness)) + "%)"), "contrast" in this.image.adjustments && e.push("contrast(" + Math.max(0, Math.min(200, this.image.adjustments.contrast)) + "%)"), context.filter = 0 < e.length ? e.join(" ") : "none", context.drawImage(this.image.canvas, -1 * t, -1 * t, this.image.width + 2 * t, this.image.height + 2 * t)
            },
            adjustCanvas: function(t) {
                this.image.adjustments = t || {}, this.restoreOriginal(), this.applyAdjustments()
            },
            flipCanvasHorizontally: function() {
                var t, e, a;
                this.restoreOriginal(), e = this.image.canvas.getContext("2d"), t = (a = document.createElement("canvas")).getContext("2d"), a.width = this.image.width, a.height = this.image.height, t.drawImage(this.image.canvas, 0, 0), e.save(), e.clearRect(0, 0, this.image.width, this.image.height), e.translate(this.image.width, 0), e.scale(-1, 1), e.drawImage(a, 0, 0), e.restore(), delete a, a = {
                    topLeft: {
                        x: this.crop.topLeft.x,
                        y: this.crop.topLeft.y
                    },
                    bottomRight: {
                        x: this.crop.bottomRight.x,
                        y: this.crop.bottomRight.y
                    }
                }, this.crop.topLeft.x = this.image.width - a.bottomRight.x, this.crop.bottomRight.x = this.image.width - a.topLeft.x, this.updateOriginal(), this.applyAdjustments(), this.redrawCrop()
            },
            flipCanvasVertically: function() {
                var t, e, a;
                this.restoreOriginal(), e = this.image.canvas.getContext("2d"), t = (a = document.createElement("canvas")).getContext("2d"), a.width = this.image.width, a.height = this.image.height, t.drawImage(this.image.canvas, 0, 0), e.save(), e.clearRect(0, 0, this.image.width, this.image.height), e.translate(0, this.image.height), e.scale(1, -1), e.drawImage(a, 0, 0), e.restore(), delete a, a = {
                    topLeft: {
                        x: this.crop.topLeft.x,
                        y: this.crop.topLeft.y
                    },
                    bottomRight: {
                        x: this.crop.bottomRight.x,
                        y: this.crop.bottomRight.y
                    }
                }, this.crop.topLeft.y = this.image.height - a.bottomRight.y, this.crop.bottomRight.y = this.image.height - a.topLeft.y, this.updateOriginal(), this.applyAdjustments(), this.redrawCrop()
            },
            rotateCanvas: function() {
                var t, e, a, i, s, n, o, r = Math.PI / 180 * 90;
                this.restoreOriginal(), a = this.image.canvas.width / 2, i = this.image.canvas.height / 2, s = this.image.width, n = this.image.height, t = this.image.canvas.getContext("2d"), o = (e = document.createElement("canvas")).getContext("2d"), e.width = s, e.height = n, o.putImageData(t.getImageData(0, 0, s, n), 0, 0), o = this.image.canvas.width, this.image.canvas.width = this.image.canvas.height, this.image.canvas.height = o, o = this.image.width, this.image.width = this.image.height, this.image.height = o, t.save(), t.translate(i, a), t.rotate(r), t.drawImage(e, s / -2, n / -2, s, n), t.restore(), o = {
                    topLeft: {
                        x: this.crop.topLeft.x,
                        y: this.crop.topLeft.y
                    },
                    bottomRight: {
                        x: this.crop.bottomRight.x,
                        y: this.crop.bottomRight.y
                    }
                }, this.crop.topLeft.x = this.image.width - o.bottomRight.y, this.crop.topLeft.y = o.topLeft.x, this.crop.bottomRight.x = this.image.width - o.topLeft.y, this.crop.bottomRight.y = o.bottomRight.x, delete e, this.updateOriginal(), this.applyAdjustments(), this.rescale()
            },
            rescale: function() {
                var t = this.$window.width(),
                    e = this.$window.height(),
                    a = this.$wrapper.width(),
                    i = e - this.$header.outerHeight() - this.$footer.outerHeight(),
                    e = padHeight = Math.max(60, t / 1440 * 75);
                t < 480 ? e = padHeight = 40 : t < 736 && (e = padHeight = 60), this.canvasWrapper.width = a - e, this.canvasWrapper.height = i - padHeight, this.image.width < this.canvasWrapper.width && this.image.height < this.canvasWrapper.height ? (this.canvasWrapper.zoom = 1, this.canvasWrapper.width = this.image.width, this.canvasWrapper.height = this.image.height) : (this.canvasWrapper.zoom = Math.min(this.canvasWrapper.height / this.image.height, this.canvasWrapper.width / this.image.width), this.canvasWrapper.width = this.canvasWrapper.zoom * this.image.width, this.canvasWrapper.height = this.canvasWrapper.zoom * this.image.height), this.$canvasWrapper.width(this.canvasWrapper.width).height(this.canvasWrapper.height), this.$canvas.width(this.canvasWrapper.zoom * this.image.width).height(this.canvasWrapper.zoom * this.image.height), this.redrawCrop()
            },
            cropControl_move: function(t, e, a, i) {
                this.moveCrop(t / this.canvasWrapper.zoom, e / this.canvasWrapper.zoom, a, i), this.snapCrop(a, i, !0, !0, !0, !0)
            },
            cropControl_topLeft: function(t, e, a, i) {
                "fixed" == this.crop.mode && (Math.abs(t) > Math.abs(e) ? e = t : t = e), this.resizeCrop(t / this.canvasWrapper.zoom, e / this.canvasWrapper.zoom, 0, 0), this.snapCrop(a, i, !0, !0, !1, !1)
            },
            cropControl_topRight: function(t, e, a, i) {
                "fixed" == this.crop.mode && (Math.abs(t) > Math.abs(e) ? e = -1 * t : t = -1 * e), this.resizeCrop(0, e / this.canvasWrapper.zoom, t / this.canvasWrapper.zoom, 0), this.snapCrop(a, i, !1, !0, !0, !1)
            },
            cropControl_bottomRight: function(t, e, a, i) {
                "fixed" == this.crop.mode && (Math.abs(t) > Math.abs(e) ? e = t : t = e), this.resizeCrop(0, 0, t / this.canvasWrapper.zoom, e / this.canvasWrapper.zoom), this.snapCrop(a, i, !1, !1, !0, !0)
            },
            cropControl_bottomLeft: function(t, e, a, i) {
                "fixed" == this.crop.mode && (Math.abs(t) > Math.abs(e) ? e = -1 * t : t = -1 * e), this.resizeCrop(t / this.canvasWrapper.zoom, 0, 0, e / this.canvasWrapper.zoom), this.snapCrop(a, i, !0, !1, !1, !0)
            },
            cropControl_top: function(t, e, a, i) {
                "fixed" == this.crop.mode ? Math.abs(t) > Math.abs(e) ? e = -1 * t : t = -1 * e : t = 0, this.resizeCrop(-.5 * t / this.canvasWrapper.zoom, e / this.canvasWrapper.zoom, .5 * t / this.canvasWrapper.zoom, 0), this.snapCrop(a, i, !1, !0, !1, !1)
            },
            cropControl_right: function(t, e, a, i) {
                "fixed" == this.crop.mode ? Math.abs(t) > Math.abs(e) ? e = -1 * t : t = -1 * e : e = 0, this.resizeCrop(0, .5 * e / this.canvasWrapper.zoom, t / this.canvasWrapper.zoom, -.5 * e / this.canvasWrapper.zoom), this.snapCrop(a, i, !1, !1, !0, !1)
            },
            cropControl_bottom: function(t, e, a, i) {
                "fixed" == this.crop.mode ? Math.abs(t) > Math.abs(e) ? e = -1 * t : t = -1 * e : t = 0, this.resizeCrop(.5 * t / this.canvasWrapper.zoom, 0, -.5 * t / this.canvasWrapper.zoom, e / this.canvasWrapper.zoom), this.snapCrop(a, i, !1, !1, !1, !0)
            },
            cropControl_left: function(t, e, a, i) {
                "fixed" == this.crop.mode ? Math.abs(t) > Math.abs(e) ? e = -1 * t : t = -1 * e : e = 0, this.resizeCrop(t / this.canvasWrapper.zoom, -.5 * e / this.canvasWrapper.zoom, 0, .5 * e / this.canvasWrapper.zoom), this.snapCrop(a, i, !0, !1, !1, !1)
            },
            headerMenuItems: {},
            footerSections: {},
            updateMenuItem: function(t, e, a) {
                t = this.getMenuItem(t);
                t.$icon.attr("xlink:href", "#icon-" + e), t.$item.attr("data-tooltip", a)
            },
            getMenuItem: function(t) {
                return t in this.headerMenuItems || ($item = this.$headerMenu.find('[data-name="' + t + '"]'), $icon = $item.find("use"), this.headerMenuItems[t] = {
                    $item: $item,
                    $icon: $icon
                }), this.headerMenuItems[t]
            },
            enableMenuItem: function(t) {
                this.getMenuItem(t).$item.removeClass("disabled")
            },
            disableMenuItem: function(t) {
                this.getMenuItem(t).$item.addClass("disabled")
            },
            toggleFooter: function(t) {
                var e, a;
                t in this.footerSections || (this.footerSections[t] = this.$footer.find('[data-name="' + t + '"]')), e = this.footerSections[t], a = this.getMenuItem(t), t = e.hasClass("active"), this.$footer.children().removeClass("active"), this.$headerMenu.children().removeClass("active"), t || (e.addClass("active"), a.$item.addClass("active")), this.rescale()
            },
            resetFooter: function() {
                this.$headerMenu.children().removeClass("active"), this.$footer.children().removeClass("active"), this.$footerInputs.each(function() {
                    var t = $(this),
                        e = t.next(".reset");
                    t.val(t.data("default")), e.addClass("disabled")
                })
            },
            footerValues: function() {
                var a = {};
                return this.$footerInputs.each(function() {
                    var t = $(this),
                        e = t.val();
                    e != t.data("default") && (a[t.attr("name")] = e)
                }), a
            }
        };
        $.fn.formImageUploader = function() {
            var t = $(this);
            if (0 == this.length) return t;
            if (1 < this.length) {
                for (var e = 0; e < this.length; e++) $(this[e]).formImageUploader();
                return t
            }
            return "_formImageUploader" in this[0] ? this[0]._formImageUploader.$idInput.triggerHandler("--refresh-image") : this[0]._formImageUploader = new i(t), t
        }, void 0 !== e && (e.exports = i)
    }, {}],
    formVideoUploader: [function(t, e, a) {
        function i(t) {
            var s = this;
            this.inputPrefix = "", this.video = {
                width: 0,
                height: 0,
                type: null,
                size: 0
            }, this.settings = {
                mode: "data",
                maxSize: 2048,
                inArray: !1
            }, this.$window = $(window), this.$obj = t.addClass("form-video-uploader"), void 0 !== (t = this.$obj.attr("data-mode")) && (this.settings.mode = t), void 0 !== (t = this.$obj.attr("data-maxSize")) && (this.settings.maxSize = parseInt(t)), void 0 !== (t = this.$obj.attr("data-inArray")) && (this.settings.inArray = "1" == t), this.$idInput = this.$obj.find(".id").css("position", "absolute").css("width", "0px").css("height", "0px").css("visibility", "hidden").css("z-index", "-1").css("overflow", "hidden").css("-moz-pointer-events", "none").css("-webkit-pointer-events", "none").css("-ms-pointer-events", "none").css("pointer-events", "none").on("--refresh-video", function() {
                var t = s.$dataInput.val(),
                    e = s.$idInput.val();
                t && e ? (s.$thumbnail_video.attr("src", t), s.$obj.removeClass("new")) : (s.$thumbnail_video.attr("src", ""), s.$obj.addClass("new"))
            }), this.$dataInput = this.$obj.find(".data").css("display", "none"), this.$thumbnail = $('<div class="thumbnail"></div>').appendTo(this.$obj).css("background-size", "cover").css("background-position", "center").on("click", function(t) {
                t.preventDefault(), t.stopPropagation(), s.$idInput.prop("disabled") || s.$fileInput.trigger("click")
            }), this.$thumbnail_img = $("<img />").appendTo(this.$thumbnail), this.$thumbnail_canvas = document.createElement("canvas"), this.$thumbnail_context = this.$thumbnail_canvas.getContext("2d"), this.$thumbnail_video = $('<video src="" autoplay muted playsinline />').on("loadeddata", function() {
                var t, e = s.$thumbnail_canvas,
                    a = s.$thumbnail_context,
                    i = s.$thumbnail_video[0];
                e.width = i.videoWidth, e.height = i.videoHeight, setTimeout(function() {
                    a.drawImage(i, 0, 0), t = e.toDataURL("image/jpeg", 1), s.$thumbnail_img.attr("src", t), a.clearRect(0, 0, e.width, e.height)
                }, "ie" == browser.name || "edge" == browser.name ? 100 : 0)
            }), this.$obj.on("click", ".do-upload", function(t) {
                t.preventDefault(), t.stopPropagation(), s.$idInput.prop("disabled") || s.$fileInput.trigger("click")
            }).on("keydown", ".do-upload", app.keyHandler).on("dragover", function(t) {
                return s.$obj.addClass("is-dragOver"), !1
            }).on("drop dragleave", function(t) {
                return s.$obj.removeClass("is-dragOver"), !1
            }).on("drop", function(t) {
                t = t.originalEvent.dataTransfer.files, t.length;
                return s.load(t[0]), s.$fileInput.val(""), !1
            }), this.$obj.on("click", ".do-clear", function(t) {
                t.preventDefault(), t.stopPropagation(), s.$idInput.prop("disabled") || (s.$video.attr("src", ""), s.$thumbnail_video.attr("src", ""), currentUrl = s.$dataInput.val(), "object" == s.settings.mode && currentUrl && app.objectUrl.is(currentUrl) && app.objectUrl.revoke(currentUrl), s.$dataInput.val("").trigger(s.settings.inArray ? "change-in-array" : "change"), s.$idInput.val("").trigger("change", ["formVideoUploader.clear"]), s.$obj.addClass("new"))
            }).on("keydown", ".do-clear", app.keyHandler), this.$video = $("<video />").on("loadeddata", function() {
                s.completeLoad()
            }), this.$fileInput = $('<input type="file" name="video" autocomplete="off" accept="video/mp4" />').on("change", function() {
                s.load(s.$fileInput.prop("files")[0]), s.$fileInput.val("")
            }), this.$idInput.triggerHandler("--refresh-video")
        }
        i.prototype.sync = function(t) {
            var e;
            this.$thumbnail_video.attr("src", t), e = this.$dataInput.val(), "object" == this.settings.mode && e && app.objectUrl.is(e) && app.objectUrl.revoke(e), this.$dataInput.val(t).trigger(this.settings.inArray ? "change-in-array" : "change"), this.$idInput.val(md5(String(Date.now()) + t)).trigger("change", ["formVideoUploader.sync"]), this.$obj.removeClass("new")
        }, i.prototype.load = function(e) {
            var a = this;
            e && this.getVideoProperties(e, function(t) {
                switch (a.video.type = t.type, a.video.size = t.size, a.video.width = 0, a.video.height = 0, a.video.type) {
                    case "video/mp4":
                    case "video/x-m4v":
                        if (Math.floor(a.video.size / 1024) > a.settings.maxSize) return void app.dialog.show({
                            title: "Video too large",
                            message: "Sorry, videos cannot exceed " + a.settings.maxSize / 1024 + "MB in file size."
                        });
                        break;
                    default:
                        return void app.dialog.show({
                            title: "Invalid video type",
                            message: "Sorry, videos must be in MP4 format."
                        })
                }
                t = app.objectUrl.create(e), a.$video.attr("src", "").attr("src", t)
            })
        }, i.prototype.completeLoad = function() {
            var e = this,
                t = this.$video.attr("src");
            switch (this.video.width = this.$video[0].videoWidth, this.video.height = this.$video[0].videoHeight, this.settings.mode) {
                case "object":
                case "object-manual":
                    t && app.objectUrl.is(t) ? this.sync(t) : app.objectUrl.createFromUrl(t, function(t) {
                        e.sync(t)
                    });
                    break;
                default:
                    t && app.dataUrl.is(t) ? this.sync(t) : app.dataUrl.createFromUrl(t, function(t) {
                        e.sync(t)
                    })
            }
        }, i.prototype.getVideoProperties = function(a, i) {
            var t = new FileReader;
            t.onload = function(t) {
                var e = {};
                e.type = a.type, e.size = a.size, i(e)
            }, t.readAsArrayBuffer(a)
        }, $.fn.formVideoUploader = function() {
            var t = $(this);
            if (0 == this.length) return t;
            if (1 < this.length) {
                for (var e = 0; e < this.length; e++) $(this[e]).formVideoUploader();
                return t
            }
            return "_formVideoUploader" in this[0] || (this[0]._formVideoUploader = new i(t)), t
        }, void 0 !== e && (e.exports = i)
    }, {}],
    form: [function(t, e, a) {
        $.valHandlers = [];
        t("./formColorPicker.js"), t("./formArray.js"), t("./formList.js"), t("./formImageUploader.js"), t("./formVideoUploader.js");

        function i(t, e) {
            var a = this;
            this.$obj = t, this.options = $.extend({
                fields: {},
                types: {},
                verify: {},
                alertHandler: null,
                preSubmitHandler: null,
                conditionsHandler: null,
                submitHandler: function(t) {
                    a.submitHandler(t)
                },
                validation: !!t.is("[data-validation]"),
                explicitSubmit: !!t.is("[data-explicit-submit]")
            }, e), this.$alert = $('<div class="alert">what what</div>').prependTo(this.$obj).hide(), this.alertTimers = [], this.initTypes(), this.initRequires(), this.initConditions(), this.initFields(), this.init()
        }
        i.prototype.statusTables = {
            "font-weight": {
                100: "Thin",
                200: "Extra Light",
                300: "Light",
                400: "Regular",
                500: "Medium",
                600: "Semi Bold",
                700: "Bold",
                800: "Extra Bold",
                900: "Heavy"
            }
        }, i.prototype.option = function(t, e) {
            return t in this.options ? (void 0 !== e && (this.options[t] = e), this.options[t]) : null
        }, i.prototype.value = function(t, e) {
            t = this.$obj.find("#" == t.charAt(0) ? 'input[id="' + t.substr(1) + '"],select[id="' + t.substr(1) + '"]' : 'input[name="' + t + '"],select[name="' + t + '"]');
            return 0 == t.length || !0 === t.prop("disabled") ? null : (void 0 !== e && t.val(e), t.val())
        }, i.prototype.showAlert = function(t, e) {
            var a = this,
                i = 25 * e.length;
            a.options.alertHandler && a.options.alertHandler.apply(a), this.clearAlert(), a.$alert.addClass(t).text(e), a.alertTimers.push(window.setTimeout(function() {
                a.$alert.show(), a.$obj.hasClass("minimal") || app.scrollTo({
                    $target: a.$alert,
                    center: !0
                }), a.alertTimers.push(window.setTimeout(function() {
                    a.$alert.addClass("visible")
                }, 100)), a.alertTimers.push(window.setTimeout(function() {
                    a.$alert.removeClass("visible")
                }, 2e3 + i)), a.alertTimers.push(window.setTimeout(function() {
                    a.clearAlert()
                }, 2250 + i))
            }, 0))
        }, i.prototype.clearAlert = function() {
            for (var t in this.alertTimers) window.clearTimeout(this.alertTimers[t]);
            this.alertTimers = [], this.$alert.hide().text("").removeClass("visible").removeClass("error").removeClass("success")
        }, i.prototype.flag = function(t, e, a) {
            $parent = t.parent(), a ? (t.attr("data-" + e, "1").data(e, "1"), $parent.hasClass("input-wrapper") && $parent.attr("data-" + e, "1").data(e, "1")) : (t.removeAttr("data-" + e).removeData(e), $parent.hasClass("input-wrapper") && $parent.removeAttr("data-" + e).removeData(e))
        }, i.prototype.is = function(t, e) {
            return t in this.options.types ? this.options.types[t](e) : web.is(t, e)
        }, i.prototype.isValid = function() {
            return 0 === this.$obj.find("[data-invalid]:enabled,[data-missing]:enabled,[data-unverified]:enabled").length
        }, i.prototype.submitHandler = function(e) {
            var t, a = this,
                i = this.$obj.data("action"),
                s = !!this.$obj.hasClass("long-wait");
            i && "#" != i && (s && app.dialog.preshow(), t = function() {
                $.ajax({
                    type: "POST",
                    url: i + (-1 == i.indexOf("?") ? "?" : "&") + "ajax=1",
                    data: a.$obj.serialize(),
                    dataType: "json",
                    error: function(t, e, a) {
                        window.location.reload()
                    },
                    success: function(t) {
                        switch ("reload" == t.action && (t.action = "redirect", t.url = window.location.href), t.action) {
                            case "alert":
                                s && app.dialog.hide(), a.showAlert(t.type, t.message);
                                break;
                            case "redirect":
                                return "appAlert" in t && app.registry.set("app.alert", JSON.stringify(t.appAlert)), void("delay" in t ? (app.dialog.preshow(), setTimeout(function() {
                                    "replace" in t && !1 === t.replace ? window.location.href = t.url : window.location.replace(t.url)
                                }, t.delay)) : "replace" in t && !1 === t.replace ? window.location.href = t.url : window.location.replace(t.url));
                            default:
                                s && app.dialog.hide(), a.showAlert("success", "Ok.")
                        }
                        if (a.$obj.find('input[name="' + t._key + '"]').val(t[t._key]), e(), t.reset) {
                            if (!0 === t.reset) a.$obj.get(0).reset();
                            else if ($.isArray(t.reset))
                                for (k in t.reset) a.$obj.find('input[name="' + t.reset[k] + '"],select[name="' + t.reset[k] + '"]').val("").removeProp("checked");
                            else a.$obj.find('input[name="' + t.reset + '"],select[name="' + t.reset + '"]').val("").removeProp("checked");
                            a.$obj.find("input, select, textarea").trigger("change", ["form.submitHandler.reset"])
                        }
                        t.focus && a.$obj.find('input[name="' + t.focus + '"]').focus(), t.callback && window[t.callback]()
                    }
                })
            }, window.setTimeout(function() {
                a.options.preSubmitHandler ? a.options.preSubmitHandler.apply(a, [t]) : t()
            }, 250))
        }, i.prototype.validate = function(t) {
            var e = t.data("type"),
                a = 1 == t.data("optional") || !0 === t.prop("disabled"),
                i = t.val(),
                e = e || "any";
            "" == (i = "checkbox" == t.attr("type") ? t.prop("checked") ? "on" : "" : i) ? (this.flag(t, "invalid", !1), this.flag(t, "missing", !a)) : (this.flag(t, "missing", !1), this.flag(t, "invalid", !this.is(e, i))), this.isValid() ? this.enableSubmits() : this.disableSubmits()
        }, i.prototype.$submits = function() {
            return $('input[form="' + this.$obj.attr("id") + '"]').add(this.$obj.find('input[type="submit"]'))
        }, i.prototype.enableSubmits = function() {
            var t = this.$submits();
            t.prop("disabled", !1), t.removeClass("is-submitting")
        }, i.prototype.disableSubmits = function(t) {
            var e = this.$submits();
            e.prop("disabled", !0), t && e.addClass("is-submitting")
        }, i.prototype.initFields = function() {
            var t, e, a, i;
            for (t in this.options.fields)
                if (e = this.options.fields[t], i = (a = this.$obj.find('[name="' + t + '"]')).attr("type"), "value" in e) {
                    switch (i) {
                        case "radio":
                            a.filter('[value="' + e.value + '"]').prop("checked", !0);
                            break;
                        case "checkbox":
                            a.prop("checked", e.value);
                            break;
                        default:
                            a.val(e.value)
                    }
                    a.triggerHandler("change")
                }
        }, i.prototype.initRequires = function(t, e) {
            var t = t || this.$obj,
                u = e || this.$obj,
                g = this;
            t.data("form-init-requires") || (t.data("form-init-requires", !0), t.find("[data-requires]").each(function() {
                var t, e, a, i, s, n, o, r, l = $(this),
                    c = l.data("requires").split("&"),
                    h = l.find("input,select,textarea").not("[data-requires-ignore]"),
                    d = [],
                    p = function() {
                        var t, e, a = l.find("input,select,textarea,a,.button,.form-array,.form-array .item");
                        if (d[0].or)
                            for (e in t = !1, d) t = d[e].fTest() || t;
                        else
                            for (e in t = !0, d) t = d[e].fTest() && t;
                        t ? l.hasClass("inactive") && (h.not("[data-requires-ignore]").prop("disabled", !1), g.options.explicitSubmit || h.not("[data-requires-ignore]").trigger("change", ["form.initRequires.positive"]), l.removeClass("inactive"), a.each(function() {
                            var t = $(this);
                            t.data("tabindex") ? (t.attr("tabindex", t.data("tabindex")), t.removeData("tabindex")) : t.removeAttr("tabindex")
                        }), l.hasClass("half") && (l.hasClass("first") ? l.next().removeClass("after-inactive") : l.prev().removeClass("before-inactive"))) : l.hasClass("inactive") || (h.not("[data-requires-ignore]").prop("disabled", !0), l.addClass("inactive"), a.each(function() {
                            var t = $(this);
                            t.attr("tabindex") && t.data("tabindex", t.attr("tabindex")), t.attr("tabindex", "-1")
                        }), l.hasClass("half") && (l.hasClass("first") ? l.next().addClass("after-inactive") : l.prev().addClass("before-inactive")))
                    };
                for (r in c) {
                    switch (n = s = !1, "!" == (t = (o = c[r].split("="))[0]).substr(-1) && (t = t.substr(0, t.length - 1), s = !0), "?" == t.substr(-1) && (t = t.substr(0, t.length - 1), n = !0), 1 == (e = o[1].split(",")).length && (e = [e]), (a = u.find('[name="' + t + '"]').on("change", p)).attr("type")) {
                        case "radio":
                            i = function() {
                                return this.$input.filter(":checked").val()
                            };
                            break;
                        case "checkbox":
                            i = function() {
                                return this.$input.prop("checked") ? "on" : "off"
                            };
                            break;
                        default:
                            i = function() {
                                return this.$input.val()
                            }
                    }
                    o = function() {
                        var t, e = this.fValue();
                        if (this.invert) {
                            for (t in this.value)
                                if (e == this.value[t]) return !1;
                            return !0
                        }
                        for (t in this.value)
                            if (e == this.value[t]) return !0;
                        return !1
                    }, d.push({
                        key: t,
                        value: e,
                        $input: a,
                        fValue: i,
                        fTest: o,
                        invert: s,
                        or: n
                    })
                }
                p()
            }))
        }, i.prototype.conditionsHandler = function(t) {
            var t = t || this.$obj,
                r = this;
            t.find("[data-conditions]").each(function() {
                for (var t, e = $(this), a = e.data("conditions").split(","), i = e.find("input,select,textarea").not("[data-conditions-ignore]"), s = e.find("input,select,textarea,a,.button,.form-array,.form-array .item"), n = !0, o = 0; o < a.length; o++) n = "!" == (t = a[o]).charAt(0) ? (t = t.substr(1), n && !r.options.conditionsHandler(t)) : n && r.options.conditionsHandler(t);
                n ? e.hasClass("inactive") && (i.not("[data-conditions-ignore]").prop("disabled", !1), r.options.explicitSubmit || i.not("[data-conditions-ignore]").trigger("change", ["form.initConditions.positive"]), e.removeClass("inactive"), s.each(function() {
                    var t = $(this);
                    t.data("tabindex") ? (t.attr("tabindex", t.data("tabindex")), t.removeData("tabindex")) : t.removeAttr("tabindex")
                }), e.hasClass("half") && (e.hasClass("first") ? e.next().removeClass("after-inactive") : e.prev().removeClass("before-inactive"))) : e.hasClass("inactive") || (i.not("[data-conditions-ignore]").prop("disabled", !0), e.addClass("inactive"), s.each(function() {
                    var t = $(this);
                    t.attr("tabindex") && t.data("tabindex", t.attr("tabindex")), t.attr("tabindex", "-1")
                }), e.hasClass("half") && (e.hasClass("first") ? e.next().addClass("after-inactive") : e.prev().addClass("before-inactive")))
            })
        }, i.prototype.refreshConditions = function() {
            this.conditionsHandler(this.$obj)
        }, i.prototype.initConditions = function(t, e) {
            var t = t || this.$obj,
                a = e || this.$obj,
                i = this;
            t.data("form-init-conditions") || (t.data("form-init-conditions", !0), e = function(t) {
                return i.conditionsHandler(a)
            }, t.on("change", "input, select, textarea", e), e())
        }, i.prototype.initTypes = function(t) {
            var e = t || this.$obj;
            e.data("form-init-types") || (e.data("form-init-types", !0), t || (this.initType_Array(this.$obj), this.initType_List(e)), this.initType_ImageUploader(e), this.initType_VideoUploader(e), this.initType_ColorPicker(e), this.initType_Toggle(e), this.initType_Range(e), this.initType_Textarea(e), this.initType_Text(e))
        }, i.prototype.initType_Array = function(t) {
            t.find(".form-array").formArray(this)
        }, i.prototype.initType_List = function(t) {
            t.find(".form-list").formList(this)
        }, i.prototype.initType_ImageUploader = function(t) {
            t.find(".form-image-uploader").formImageUploader()
        }, i.prototype.initType_VideoUploader = function(t) {
            t.find(".form-video-uploader").formVideoUploader()
        }, i.prototype.initType_ColorPicker = function(t) {
            t.find('input[type="hexcolor"]').formColorPicker()
        }, i.prototype.initType_Text = function(t) {
            t.on("focus", ".input-wrapper input", function(t) {
                $(this).parent().addClass("focus")
            }).on("blur", ".input-wrapper input", function(t) {
                $(this).parent().removeClass("focus")
            }).on("mousedown", ".input-wrapper .prefix", function(t) {
                t.preventDefault(), t.stopPropagation(), $(this).next().focus()
            }).on("mousedown", ".input-wrapper .suffix", function(t) {
                t.preventDefault(), t.stopPropagation(), $(this).prev().focus()
            }), t.find('input[type="text"][data-prefix], input[type="text"][data-suffix]').each(function() {
                var t = $(this),
                    e = t.data("suffix"),
                    a = t.data("prefix"),
                    i = $('<div class="input-wrapper" />').insertBefore(t);
                t.removeAttr("data-prefix").removeAttr("data-suffix").removeData("prefix").removeData("suffix").attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off").attr("spellcheck", "false").appendTo(i), a && ($('<div class="prefix">' + a + "</div>").prependTo(i), i.addClass("with-prefix")), e && ($('<div class="suffix">' + e + "</div>").appendTo(i), i.addClass("with-suffix"))
            }), t.find('input[type="text"][data-inline-suffix]').each(function() {
                var s, n = $(this),
                    t = n.data("inline-suffix"),
                    o = n.attr("maxlength"),
                    e = n.attr("placeholder");
                n.attr("type", "hidden").removeAttr("placeholder").removeAttr("maxlength").removeAttr("data-inline-suffix").removeData("inline-suffix").on("change", function(t) {
                    var e = n.val();
                    o < e && (e = e.substr(0, o), n.val(e)), s.text(e)
                }), s = $('<div class="input-facade text"></div>').attr("contenteditable", "true").attr("data-inline-suffix", t).attr("data-placeholder", e).attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off").attr("spellcheck", "false").insertAfter(n).on("keydown", function(t) {
                    switch (t.keyCode) {
                        case 13:
                        case 27:
                            t.preventDefault(), t.stopPropagation(), s.blur();
                            break;
                        case 32:
                            t.preventDefault(), t.stopPropagation()
                    }
                }).on("change input", function(t) {
                    var e, a, i = s.text();
                    "" == i.trim() ? (i = "", s.text("")) : i.length > o && (a = (e = window.getSelection()).getRangeAt(0).endOffset - 1, i = i.substr(0, o), s.text(i), e.collapse(s[0].firstChild, Math.min(o, 1 + a))), n.val(i)
                }).on("keyup", function(t) {
                    9 == t.keyCode && getSelection().selectAllChildren(s[0])
                }).on("blur", function(t) {
                    getSelection().removeAllRanges()
                }), n.triggerHandler("change")
            }), t.find('input[type="text"][data-suffixes]').each(function() {
                var a, s, n, e, o = $(this),
                    r = o.next("select"),
                    l = r.children("option"),
                    t = $('<div class="input-wrapper" />').addClass("with-suffixes").insertBefore(o);
                o.attr("autocomplete", "off").attr("autocorrect", "off").attr("autocapitalize", "off").attr("spellcheck", "false").on("keydown blur mousedown", function(t) {
                    a.removeClass("active")
                }).appendTo(t), r.hide().appendTo(t).attr("data-optional", "1").data("optional", "1").on("change", function(t, e) {
                    var a = r.val(),
                        i = l.filter('[value="' + a + '"]').text();
                    t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n.text(i), s.removeClass("selected"), s.filter('[data-value="' + a + '"]').addClass("selected"), o.trigger("change-suffixes", [a, i]), "form.initType_Text.suffixes.click" == e && "" != $.fn.origVal.call(o) && o.trigger("input").trigger("change")
                }), l = r.children(), a = $('<div class="suffixes"><div class="status"></div><div class="options">' + (e = "", l.each(function() {
                    var t = $(this);
                    e += '<div class="option" data-value="' + t.attr("value") + '"><span>' + t.text() + "</span></div>"
                }), e) + "</div></div>").appendTo(t).on("mousedown", function(t) {
                    t.preventDefault(), t.stopPropagation()
                }).on("click", ".option:not(.disabled)", function(t) {
                    var e = $(this).data("value");
                    a.removeClass("active"), r.val() != e && r.val(e).triggerHandler("change", ["form.initType_Text.suffixes.click"])
                }), n = a.children(".status").on("click", function(t) {
                    browser.mobile || o.focus(), a.toggleClass("active"), o.trigger("toggle-suffixes")
                }), s = a.children(".options").children(), r.triggerHandler("change", ["form.initType_Text.suffixes.init"])
            })
        }, i.prototype.initType_Toggle = function(t) {
            t.find(".toggle-wrapper").attr("tabIndex", "0"), t.on("blur", ".toggle-wrapper", function(t) {
                $(this).removeClass("is-clicked")
            }).on("mousedown", ".toggle-wrapper", function(t) {
                $(this).addClass("is-clicked")
            }).on("keydown", ".toggle-wrapper", function(t) {
                var e, a = $(this),
                    i = a.find("input"),
                    s = i.filter(":checked");
                switch (t.keyCode) {
                    case 39:
                    case 32:
                    case 13:
                        t.preventDefault(), t.stopPropagation(), (e = 0 == (e = s.next("label").next("input")).length ? i.first() : e).trigger("click");
                        break;
                    case 37:
                        t.preventDefault(), t.stopPropagation(), (e = 0 == (e = s.prev("label").prev("input")).length ? i.last() : e).trigger("click");
                        break;
                    case 27:
                        t.preventDefault(), t.stopPropagation(), a.blur();
                        break;
                    default:
                        return app.keyHandler.apply(this, [t])
                }
            })
        }, i.prototype.initType_Range = function(t) {
            var p = this;
            t.find('input[type="range"][data-status]').each(function() {
                var r, t, e, a, i, l = $(this),
                    c = $('<div class="input-range-status" contenteditable />').insertBefore(l),
                    h = l.data("status"),
                    d = l.data("status-args");
                if (d) {
                    for (t = d.split("&"), a = {}, i = 0; i < t.length; i++) a[(e = t[i].split("="))[0].toString()] = e[1];
                    d = a
                } else d = {};
                l.on("change.status", function(t) {
                    var e, a = l.val(),
                        i = h.split(",");
                    if ("rename" == i[0] ? a.toString() in d ? a = d[a.toString()] : e = 0 < i.length ? i[1] : null : e = i[0], e) switch (e) {
                        case "seconds":
                            a = parseFloat(a) / 1e3 + "s";
                            break;
                        case "degrees":
                            a += "&deg;";
                            break;
                        case "percentage":
                            a += "%";
                            break;
                        case "points":
                            a += "pt";
                            break;
                        case "font-weight":
                            a in p.statusTables["font-weight"] && (a = p.statusTables["font-weight"][a]);
                            break;
                        case "animation-intensity":
                            a = 0 == a ? "Min" : 10 == a ? "Max" : a < 5 ? "Less" : 5 < a ? "More" : "Normal";
                            break;
                        case "animation-stagger":
                            a = -125 == a ? "Off" : parseFloat(a) / 1e3 + "s"
                    }
                    c.html(a)
                }).triggerHandler("change.status"), c.on("keydown", function(t) {
                    13 != t.keyCode && 27 != t.keyCode || (t.stopPropagation(), t.preventDefault(), c.blur())
                }).on("focus", function(t) {
                    var e;
                    switch (r = c.text(), h) {
                        case "rename":
                            e = r;
                            break;
                        case "seconds":
                            null !== (e = parseFloat(r)) && !isNaN(e) || (e = "");
                            break;
                        case "font-weight":
                            e = r;
                            break;
                        default:
                            null !== (e = parseFloat(r)) && !isNaN(e) || (e = "")
                    }
                    c.text(e), setTimeout(function() {
                        getSelection().selectAllChildren(c[0])
                    }, 0)
                }).on("blur", function(t) {
                    var e, a, i, s = c.text(),
                        n = parseFloat(l.attr("min")),
                        o = parseFloat(l.attr("max"));
                    switch (h) {
                        case "rename":
                            for (e in a = web.friendlyfy(s.replace(/\s/g, "")), i = null, d)
                                if (a == web.friendlyfy(d[e].replace(/\s/g, ""))) {
                                    i = e;
                                    break
                                } null === (a = i) && (a = null === (a = parseFloat(s)) || isNaN(a) ? null : Math.min(Math.max(a, n), o));
                            break;
                        case "seconds":
                            a = null === (a = parseFloat(s)) || isNaN(a) ? null : (a = parseInt(1e3 * a), Math.min(Math.max(a, n), o));
                            break;
                        case "font-weight":
                            for (e in a = web.friendlyfy(s.replace(/\s/g, "")), i = null, p.statusTables["font-weight"])
                                if (a == web.friendlyfy(p.statusTables["font-weight"][e].replace(/\s/g, "")) || a == e) {
                                    i = e;
                                    break
                                } a = i;
                            break;
                        default:
                            a = null === (a = parseFloat(s)) || isNaN(a) ? null : Math.min(Math.max(a, n), o)
                    }
                    null !== a ? l.val(a).trigger("change", ["form.initType_Range.rangeStatus"]) : c.text(r), getSelection().removeAllRanges()
                })
            })
        }, i.prototype.initType_Textarea = function(t) {
            var c = this;
            t.find("textarea[data-autosize]").each(function() {
                function a() {
                    var t, e = i.val().trim(),
                        a = e.split("\n");
                    if (l.text(""), "" != e)
                        for (t = 0; t < a.length; t++) l.append("<div>" + ("" == a[t] ? "<br />" : web.escapeHTML(String(a[t]))) + "</div>")
                }
                var i = $(this),
                    s = i.attr("maxlength"),
                    t = null != i.data("autofocus"),
                    e = null != i.data("allowNewline"),
                    n = null != i.data("siteLanguageDependent"),
                    o = (i.data("content"), i.attr("placeholder")),
                    r = $('<div class="input-textarea-autosize">').insertBefore(i),
                    l = $('<div class="input-facade textarea" ' + (t ? " data-autofocus" : "") + (n ? " data-site-language-dependent" : "") + " />").attr("contenteditable", "true").attr("tabindex", "0").attr("data-placeholder", o).on("input", function(t) {
                        for (var e = "", a = 0; a < l[0].childNodes.length; a++) e += l[0].childNodes[a].textContent.trim() + "\n";
                        e = (e = e.trim()).substring(0, Math.min(s, e.length)), i.val(e).trigger("input")
                    }).on("keydown", function(t) {
                        switch (t.keyCode) {
                            case 13:
                                t.ctrlKey || !e ? (t.preventDefault(), l.blur(), c.$submits().prop("disabled") || 0 != i.parents(".form-array").length || c.options.explicitSubmit || c.$obj.trigger("submit")) : t.stopPropagation();
                                break;
                            case 66:
                            case 98:
                            case 73:
                            case 105:
                            case 85:
                            case 117:
                                t.ctrlKey && (t.preventDefault(), t.stopPropagation())
                        }
                    }).on("keyup", function(t) {
                        var e;
                        9 == t.keyCode && l.is(":focus") && (e = window.getSelection(), (t = document.createRange()).selectNodeContents(l[0]), e.removeAllRanges(), e.addRange(t))
                    }).on("blur", function(t) {
                        var e;
                        window.getSelection().removeAllRanges(), e = i.val(), i.val(web.condenseBlankLines(e)), i.trigger("change"), a(), i.trigger("blur")
                    }).on("paste", function(t) {
                        t.preventDefault(), t.originalEvent.preventDefault(), "clipboardData" in t.originalEvent && "getData" in t.originalEvent.clipboardData && (t = t.originalEvent.clipboardData.getData("text/plain"), t = web.escapeHTML(t), document.execCommand("insertHTML", !1, t))
                    }).appendTo(r);
                l[0].setSelectionRange = function(t, e) {
                    var a = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(l[0]), i.collapse(), a.removeAllRanges(), a.addRange(i)
                }, i.removeAttr("data-autosize").removeAttr("data-autofocus").removeAttr("data-allow-newline").removeAttr("data-content").on("focus --focus", function() {
                    l.focus()
                }).on("change", function() {
                    a()
                }).prependTo(r).triggerHandler("change")
            })
        }, i.prototype.init = function() {
            var t, e, a, r = this;
            if ("ie" != browser.name && "edge" != browser.name && this.$obj.on("input", 'input[type="range"]', function() {
                    $(this).trigger("change", ["form.rangeFix"])
                }), this.$obj.on("click", "label", function(t) {
                    var e = $(this).prev().attr("type");
                    "checkbox" != e && "radio" != e && t.preventDefault()
                }), "ie" != browser.name && "edge" != browser.name || !this.$obj.attr("id") || (r = this, $('input[form="' + this.$obj.attr("id") + '"]').on("click", function(t) {
                    t.preventDefault(), t.stopPropagation(), r.$obj.trigger("submit")
                })), this.$obj.on("keydown", "input, textarea, select", function(t) {
                    27 == t.keyCode && $(this).blur()
                }), this.options.explicitSubmit ? this.$obj.on("keydown", "input,select,textarea", function(t) {
                    var e = $(this);
                    13 == t.keyCode && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), e.blur())
                }) : this.$obj.on("keydown", "input,select,textarea", function(t) {
                    13 == t.keyCode && t.ctrlKey && r.$obj.trigger("submit")
                }), this.options.validation && this.$obj.on("change blur keyup", "input,select,textarea", function() {
                    r.validate($(this))
                }), !$.isEmptyObject(this.options.verify)) {
                for (t in this.$obj.on("--refresh-verify", function(t) {
                        r.$obj.find("input,select,textarea").each(function() {
                            var t = $(this),
                                e = t.attr("name"),
                                a = t.val();
                            e in r.options.verify && !0 !== t.prop("disabled") && ("" == a ? r.flag(t, "unverified", !0) : t.data("verify-originalValue", a))
                        })
                    }), this.$obj.on("keydown", "input,select,textarea", function(t) {
                        var e = $(this),
                            a = e.attr("name");
                        13 == t.keyCode && a in r.options.verify && !1 === e.prop("disabled") && (t.preventDefault(), t.stopPropagation(), e.blur())
                    }).on("input", "input,select,textarea", function(t) {
                        var i = $(this),
                            e = i.parent(),
                            s = (e.hasClass("input-wrapper") ? e : i).next(".message"),
                            n = i.attr("name"),
                            o = i.val();
                        n in r.options.verify && !0 !== i.prop("disabled") && (s.text("").removeClass("positive").removeClass("negative").removeClass("visible"), r.flag(i, "unverified", !0), r.$obj.parent().trigger("--refresh-scrollbar"), "_form_verifyTimeout" in this && window.clearTimeout(this._form_verifyTimeout), r.options.verify[n]("abort"), this._form_verifyTimeout = window.setTimeout(function() {
                            if ("1" != i.data("invalid") && "" != o && (o = i.val(), "1" != i.data("invalid") && "" != o)) {
                                if (r.flag(i, "verifailed", !1), o == i.data("verify-originalValue")) return r.flag(i, "unverified", !1), void r.validate(i);
                                s.text("Checking ...").addClass("visible").addClass("pending"), r.$obj.parent().trigger("--refresh-scrollbar"), r.options.verify[n]("verify", o, function(t, e, a) {
                                    t ? (r.flag(i, "unverified", !1), r.validate(i), r.flag(i, "verifailed", !1), i.is(":focus") || i.trigger("change", ["form.init.verified"]), "change" in r.options.fields[n] && r.options.fields[n].change(o), s.removeClass("pending").removeClass("negative").removeClass("caution").removeClass("premium").addClass(a || "positive").html(e)) : (r.flag(i, "unverified", !0), r.validate(i), r.flag(i, "verifailed", !0), i.is(":focus") || i.trigger("change", ["form.init.unverified"]), "change" in r.options.fields[n] && r.options.fields[n].change(""), s.removeClass("pending").removeClass("negative").removeClass("caution").removeClass("premium").addClass(a || "negative").html(e))
                                })
                            }
                        }, 500))
                    }), this.options.verify) a = (e = this.$obj.find('input[name="' + t + '"]')).parent(), 0 != e.length && $('<div class="message"></div>').insertAfter(a.hasClass("input-wrapper") ? a : e);
                this.$obj.triggerHandler("--refresh-verify")
            }
            this.$obj.attr("action") && this.$obj.data("action", this.$obj.attr("action")).removeAttr("action"), this.$obj.on("change", "input,select,textarea", function() {
                var t, e = $(this),
                    a = e.attr("name"),
                    i = e.data("missing") || e.data("invalid") ? "" : e.val();
                a in r.options.fields && "trim" in r.options.fields[a] && 1 == r.options.fields[a].trim && (i = (i = (i = i.replace(/\t+/g, " ")).replace(/ +/g, " ")).trim(), e.val(i)), e.data("unverified") || "name" in r.options.fields && ("preprocess" in r.options.fields[a] && (t = r.options.fields[a].preprocess(i)) != i && (i = t, e.val(i)), "change" in r.options.fields[a] && r.options.fields[a].change(i))
            }), this.$obj.on("submit", function(t) {
                var e = r.$obj.find("input,select,textarea");
                r.options.validation && (e.each(function() {
                    r.validate($(this))
                }), r.isValid() || (t.stopPropagation(), t.preventDefault())), r.options.submitHandler && (t.stopPropagation(), t.preventDefault(), e.blur(), r.disableSubmits(!0), e.filter(":disabled").removeData("verify-originalValue"), r.clearAlert(), r.options.submitHandler(function() {
                    r.enableSubmits()
                }))
            }), this.options.validation && window.setTimeout(function() {
                r.$obj.find("input,select,textarea").each(function() {
                    r.validate($(this))
                })
            }, 0)
        }, $.fn.form = function(t) {
            var e = $(this);
            if (0 == this.length) return e;
            if (1 < this.length) {
                for (var a = 0; a < this.length; a++) $(this[a]).form(t);
                return e
            }
            return this[0]._form = new i(e, t), e
        }, $.valHandlers.push({
            condition: function() {
                return this && this.dataset && void 0 !== this.dataset.valueMap
            },
            init: function() {
                var t, e, a, i;
                if (!("_valueMap" in this))
                    for (this._valueMap = {}, t = this.dataset.valueMap.split("&"), i = 0; i < t.length; i++) 1 == (a = (e = t[i].split("="))[1].split("-")).length && (a[1] = a[0]), a[0] = parseFloat(a[0]), a[1] = parseFloat(a[1]), this._valueMap[e[0]] = a
            },
            get: function(t) {
                var e, a = $.fn.origVal.call($(this));
                for (e in this._valueMap)
                    if (a >= this._valueMap[e][0] && a <= this._valueMap[e][1]) return e;
                return a
            },
            set: function(t) {
                return $.fn.origVal.call($(this), t in this._valueMap ? this._valueMap[t][0] : t)
            }
        }), $.valHandlers.push({
            condition: function() {
                return this && this.dataset && void 0 !== this.dataset.suffixes
            },
            get: function() {
                var t = $(this),
                    e = t.next("select"),
                    t = $.fn.origVal.call(t);
                return t ? e.attr("name") ? t : t + ((e = $.fn.origVal.call(e)) ? "," + e : "") : ""
            },
            set: function(t) {
                var e, a = $(this),
                    i = a.next("select");
                return null === t && (t = ""), i.attr("name") ? $.fn.origVal.call(a, e) : 2 < (t = t.split(",")).length || !t[0] && t[1] || (null !== (t = 1 == t.length ? "" == t[0] ? (e = "", null) : (e = t[0], "") : (e = t[0], 1 == i.children('option[value="' + t[1] + '"]').length ? t[1] : "")) && ($.fn.origVal.call(i, t), i.triggerHandler("change", ["form.valHandlers.suffixes"])), $.fn.origVal.call(a, e)), a
            }
        }), $.fn.origVal = $.fn.val, $.fn.val = function(t) {
            var e, a, i;
            if (0 == this.length) return void 0 !== t ? $.fn.origVal.call(this, t) : $.fn.origVal.call(this);
            if (void 0 !== t) {
                for (e = 0; e < this.length; e++) {
                    for (a in i = !1, $.valHandlers)
                        if ($.valHandlers[a].condition.apply(this[e])) {
                            "init" in $.valHandlers[a] && $.valHandlers[a].init.call(this[e]), $.valHandlers[a].set.call(this[e], t), i = !0;
                            break
                        } i || $.fn.origVal.call($(this[e]), t)
                }
                return this
            }
            for (a in $.valHandlers)
                if ($.valHandlers[a].condition.apply(this[0])) return "init" in $.valHandlers[a] && $.valHandlers[a].init.call(this[0]), $.valHandlers[a].get.call(this[0]);
            return $.fn.origVal.call(this)
        }, e.exports = i
    }, {
        "./formArray.js": "formArray",
        "./formColorPicker.js": "formColorPicker",
        "./formImageUploader.js": "formImageUploader",
        "./formList.js": 2,
        "./formVideoUploader.js": "formVideoUploader"
    }],
    tabs: [function(t, e, a) {
        function i(t, a) {
            var i = this,
                s = $('<ul class="tabs' + (a ? " depth-" + a : "") + '"></ul>').prependTo(t);
            void 0 === a && (a = 0), this.tabs = [], this.$tabs = $(), this.$panes = $(), t.children("section[data-title]").each(function(t) {
                var e = {
                    $tab: null,
                    $pane: null,
                    title: null
                };
                e.$pane = $(this), e.$pane.hide(), i.$panes = i.$panes.add(e.$pane), 0 < e.$pane.children("section[data-title]").length && e.$pane.tabs(a + 1), e.title = e.$pane.data("title"), e.$tab = $('<li tabindex="0">' + e.title + "</li>").appendTo(s), e.$tab.on("blur", function(t) {
                    $(this).removeClass("is-clicked")
                }).on("mousedown", function(t) {
                    $(this).addClass("is-clicked")
                }).on("click", function() {
                    i.switch(t)
                }).on("keydown", function(t) {
                    switch (t.keyCode) {
                        case 13:
                        case 32:
                            t.preventDefault(), t.stopPropagation(), $(this).trigger("click");
                            break;
                        default:
                            return app.keyHandler.apply(this, [t])
                    }
                }), i.$tabs = i.$tabs.add(e.$tab), i.tabs.push(e)
            }), this.switch(0)
        }
        i.prototype.switch = function(t) {
            t = this.tabs[t];
            this.$tabs.removeClass("active"), this.$panes.css("display", "none"), t.$tab.addClass("active"), t.$pane.css("display", "")
        }, $.fn.tabs = function(t) {
            var e = $(this);
            if (0 == this.length) return e;
            if (1 < this.length) {
                for (var a = 0; a < this.length; a++) $(this[a]).tabs(t);
                return e
            }
            return this[0]._tabs = new i(e, t), e
        }, e.exports = i
    }, {}]
}, {}, [1]);