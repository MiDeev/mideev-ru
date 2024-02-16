const loc = window.location.href.split("/")

const routes = [
    {
        slug: '/',
        file: '/main.html',
        title: 'MiDeev',
    },
    {
        slug: '#friend_invite_link',
        file: '/dc/dc_sources/friend_invite.html',
        title: 'friend_invite_link',
        afterLoad() {
            window.location.href = "/dc/dc_sources/friend_invite.html"
        }
    },
    {
        slug: '#old_mobile_ui',
        file: '/dc/dc_sources/old_mobile_ui.html',
        title: 'old_mobile_ui',
        afterLoad() {
            window.location.href = "/dc/dc_sources/old_mobile_ui.html"
        }
    },
    {
        slug: '#invisible_typing',
        file: '/dc/dc_sources/invisible_typing.html',
        title: 'invisible_typing',
        afterLoad() {
            window.location.href = "/dc/dc_sources/invisible_typing.html"
        }
    },
    {
        slug: '#voice_messages',
        file: '/dc/dc_sources/voice.html',
        title: 'voice_messages',
        afterLoad() {
            window.location.href = "/dc/dc_sources/voice.html"
        }
    },
    {
        slug: '#favorites_activation',
        file: '/dc/dc_sources/favorites.html',
        title: 'favorites_activation',
        afterLoad() {
            window.location.href = "/dc/dc_sources/favorites.html"
        }
    },
    {
        slug: '#fake_mute',
        file: '/dc/dc_sources/fake_mute.html',
        title: 'fake_mute',
        afterLoad() {
            window.location.href = "/dc/dc_sources/fake_mute.html"
        }
    },
    {
        slug: '#ghost_pings',
        file: '/dc/dc_sources/ghost_pings.html',
        title: 'ghost_pings',
        afterLoad() {
            window.location.href = "/dc/dc_sources/ghost_pings.html"
        }
    },
    {
        slug: '#embed_messages',
        file: '/dc/dc_sources/embed_messages.html',
        title: 'embed_messages',
        afterLoad() {
            window.location.href = "/dc/dc_sources/embed_messages.html"
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