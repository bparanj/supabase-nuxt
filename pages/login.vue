<template>
    <div>
      <input v-model="email" type="email" placeholder="Your email" />
      <button @click="loginWithEmail">Send Magic Link</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        email: '',
      }
    },
    methods: {
      async loginWithEmail() {
        let { error } = await this.$supabase.auth.signInWithOtp({
          email: this.email
        })
        if (error) {
            console.log('Error:', error.message);
        }
        else {
            console.log('Magic link sent to your email!');
        }
      }
    }
  }
</script>
