function getOS() {
    let userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        applePlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'iPhone', 'iPad', 'iPod'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        os = null;

    if (applePlatforms.indexOf(platform) !== -1) {
        os = 'Apple';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

function getThemeIcon(os) {
    switch (os) {
        case 'Apple':
            return 'fab fa-apple';
        case 'Windows':
            return 'fab fa-windows';
        case 'Android':
            return 'fab fa-android';
        default:
            return 'fab fa-linux';
    }
}

String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
    function () {
        "use strict";
        let str = this.toString();
        if (arguments.length) {
            let t = typeof arguments[0];
            let key;
            let args = ("string" === t || "number" === t) ?
                Array.prototype.slice.call(arguments)
                : arguments[0];

            for (key in args) {
                str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
            }
        }

        return str;
    };

