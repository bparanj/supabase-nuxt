import { defineNuxtPlugin } from '#app';
import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin((nuxtApp) => {
	const runtimeConfig = useRuntimeConfig()	
  const supabase = createClient(runtimeConfig.public.supabaseUrl, runtimeConfig.public.supabaseAnonKey);

  return {
    provide: {
      supabase: supabase
    }
  };
});
