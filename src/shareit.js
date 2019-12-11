const settings = require('./settings.json');
const elements = document.querySelectorAll('[data-shareit]');

for (let i = 0; i < elements.length; i++) {
    Share(elements[i]);
}

function Share(element, options = {}) {
    console.log(element);

    const media = options.media ? options.media : element.getAttribute('data-shareit').split(" ");
    const message = options.message ? options.message : element.getAttribute("data-sharetext");
    let title = options.title ? options.title : element.getAttribute("data-sharetitle");
    const size = options.size ? options.size : element.getAttribute("data-sharesize");
    const successMessage = options.successMessage ? options.successMessage : element.getAttribute("data-sharesuccess");
    const errorMessage = options.errorMessage ? options.errorMessage : element.getAttribute("data-shareerror");

    let shareurl = options.url ? options.url : element.getAttribute("data-shareurl");
    if (shareurl === null) {
        shareurl = window.location.href;
    }

    if (title === null) {
        title = document.title;
    }

    media.forEach((media) => {
        for (let k in settings.media) {
            if (k === media) {
                const theme = settings.media[k];

                const m = document.createElement('a');
                m.className = settings.general.classes;
                m.style.backgroundColor = theme.background;
                m.style.color = theme.foreground;
                m.innerHTML = theme.icon;
                m.target = settings.general.target;

                if (size !== null) {
                    if (size === "large") {
                        m.classList.add(settings.general.large);
                    } else if (size === "small") {
                        m.classList.add(settings.general.small);
                    }
                }

                if (theme.type === "url") {
                    let link = theme.href;
                    link = link.replace(":message", message);
                    link = link.replace(":url", shareurl);
                    link = link.replace(":title", title);

                    m.href = link;
                } else if (theme.type === "copy") {
                    m.addEventListener('click', function () {
                        try {
                            navigator.clipboard.writeText(shareurl).then(() => {
                                let message = successMessage ? successMessage : "Link has been copied";
                                window.alert(message);
                            })
                        } catch (err) {
                            console.error(err);
                            window.alert(errorMessage);
                        }
                    });
                }

                element.append(m);
            }
        }
    })
}

if (window.jQuery) {
    jQuery.fn.extend({
        share: function (options = {}) {
            $(this).each(function () {
                Share($(this)[0], options);
            });
        }
    });
}
