// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    modules: ['@pinia/nuxt'],
    css: [
        '~/assets/scss/main.scss',
    ],
    app: {
        pageTransition: {
            name: 'page'
        }
    },
    head: {
        script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
                body: true
            }
        ]
    }
})