// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    modules: ['@pinia/nuxt'],
    css: [
        '~/assets/scss/main.scss',
    ],
    app: {
        pageTransition: {
            name:'page'
        }
    }
})