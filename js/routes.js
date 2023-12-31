const loc = window.location.href.split("/")

const routes = [
    {
        slug: '/',
        file: '/main.html',
        title: 'MiDeev',
    },
    {
        slug: '#friend_invite_link',
        file: '/dc/finv.html',
        title: 'friend_invite_link',
        afterLoad() {
            window.location.href = "/dc/finv.html"
        }
    },
    {
        slug: '#invisible_typing',
        file: '/dc/inv.html',
        title: 'invisible_typing',
        afterLoad() {
            window.location.href = "/dc/inv.html"
        }
    },
    {
        slug: '#voice_messages',
        file: '/dc/voice.html',
        title: 'voice_messages',
        afterLoad() {
            window.location.href = "/dc/voice.html"
        }
    },
    {
        slug: '#favorites_activation',
        file: '/dc/fav.html',
        title: 'favorites_activation',
        afterLoad() {
            window.location.href = "/dc/fav.html"
        }
    },
]

function route(slug) {
    return new Promise((resolve, _) => {
        const route = routes.find(x => x.slug.toLowerCase() === slug.toLowerCase())

        if (!slug) return

        history.pushState({}, route.title, route.slug)

        fetch(route.file)
            .then(res => res.text())
            .then(res => {
                document.write(res)

                if (route.afterLoad) {
                    route.afterLoad()
                }

                resolve()
            })
    })
}

route(loc[loc.length - 1].length == 0 ? "/" : loc[loc.length - 1])