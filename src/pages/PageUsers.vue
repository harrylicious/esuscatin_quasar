<template>
<div>

  <q-page class="row flex q-pa-md">
  	<q-list
  		class="full-width"
  		separator>
  	  <q-item
  	  	v-for="(user, key) in users"
  	  	:key="key"
  	  	:to="'/chat/' + key"
        v-if="user.level != userDetails.level"
  	  	clickable
  	  	v-ripple>
  	    <q-item-section avatar>
  	      <q-avatar color="primary" text-color="white">
  	        {{ user.name.charAt(0) }}
  	      </q-avatar>
  	    </q-item-section>

  	    <q-item-section>
  	      <q-item-label>{{ "#1 " + user.name }}</q-item-label>
          <q-item-label caption>{{ user.created_at }}</q-item-label>
          <q-icon name="star" color="yellow" />
  	    </q-item-section>


  	    <q-item-section side top>
  	      <q-badge
  	      	:color="user.online ? 'light-green-5' : 'grey-4'">
            {{ user.online ? 'Online' : 'Offline' }}
          </q-badge>
          <!-- <q-badge color="teal" label="10k" /> -->
          <q-icon name="check_circle" color="primary" />
  	    </q-item-section>
  	  </q-item>

  	</q-list>

  </q-page>

  <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          icon="share"
          direction="up"
          color="primary"
        >
          <q-fab-action @click="goToWhatsapp" color="primary" icon="chat" />
          <q-fab-action @click="onClick" color="primary" icon="mail" />
        </q-fab>
  </q-page-sticky>
</div>

</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  import { ref } from 'vue'

	export default {
    computed: {
      ...mapGetters('store', ['users']),
      ...mapState('store', ['userDetails']),
    },
    setup () {
    return {
      fabLeft: ref(true), 
      fabCenter: ref(true),
      fabRight: ref(true),

      onClick () {
        console.log('Clicked on a fab action')
      },

      goToWhatsapp() {
        window.open("whatsapp://send?text=Hi.. Aku baru saja menggunakan temanKUA.com sebagai teman konsultasiku! Yuk ikut sama aku dengan klik https://temankua.com")
      }
    }
  }
	}
</script>

<style>
</style>
