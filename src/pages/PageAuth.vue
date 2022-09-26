<template>
  <q-page class="q-pa-md">
  <div class="action">
      <img class="text-center" style="height: 40%; top: 8px; left: 180px"
        src="~assets/logo.png"
      >
    </div>
  <div/>
  	<q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
	export default {
	  data () {
	    return {
	      tab: 'login'
	    }
	  },
	  components: {
	  	'login-register' : require('components/LoginRegister.vue').default
	  }
	}
</script>

<style>
  .action {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
