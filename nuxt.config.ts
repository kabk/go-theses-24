// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/index.css'],
	app: {
		baseURL: '/go-theses-24/',
		pageTransition: {
			name: 'fade',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'fade',
			mode: 'out-in',
		},
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/go-theses-24/favicon.ico',
				},
			],
		},
	},
	modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxt/content', 'nuxt-marquee'],
	ssr: true,
})
