//const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//  router: {
//    base: '/Latin-Movie/'
//  }
//} : {}

export default {
	mode: 'spa',
	router: {
		base: '/Latin-Movie/'
	},
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		'bootstrap-css-only/css/bootstrap.min.css',
		'mdbvue/lib/css/mdb.min.css'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://bootstrap-vue.js.org
		// 'bootstrap-vue/nuxt',
		'mdbvue/nuxt',
		'@nuxtjs/axios'
	],

	mdbvue: {
		icons: true, // FA5
		roboto: false, // font Roboto
		css: true, // MDB CSS
		bootstrap: false // Bootstrap CSS
	},
	axios: {
		baseURL: "https://www.omdbapi.com/",
		credentials: true

	},
	/*
	** Build configuration
	*/
	build: {
		transpile: [
			'mdbvue/lib/components'
		],
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
