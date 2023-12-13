// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	ssr: false,
	plugins: ['~/plugins/supabaseClient.js'],
  runtimeConfig: {
	    // The private keys which are only available within server-side
	    apiSecret: '123',
	    // Keys within public, will be also exposed to the client-side
	    public: {
	      supabaseUrl: process.env.PUBLIC_SUPABASE_URL,
				supabaseAnonKey: process.env.PUBLIC_SUPABASE_ANON_KEY	
	    }
	  }	
})
