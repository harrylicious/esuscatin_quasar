<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-btn
          v-if="$route.fullPath.includes('/chat') || $route.fullPath.includes('/users') || $route.fullPath.includes('/about') || $route.fullPath.includes('/report') || $route.fullPath.includes('/detailreport')"

          class="absolute-left"
          v-go-back.single
          icon="arrow_back"
          flat
          dense
          label="Back" />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          v-if="!userDetails.userId && !$route.fullPath.includes('/chat')"
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Login" />
        <q-btn
          v-else
          @click="logoutUser"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense>
          Logout<br>
          {{ userDetails.name }}
        </q-btn>

      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'

  export default {
    mixins: [mixinOtherUserDetails],
    computed: {

      ...mapState('store', ['userDetails']),
      title() {
        let bulan = ["September", "Oktober", "November", "Desember"]
        let currentPath = this.$route.fullPath
        if (currentPath == '/') return 'TemanKUA'
        else if (currentPath.includes('/chat')) return "Kak " + this.otherUserDetails.name
        else if (currentPath.includes('/home')) return 'TemanKUA'
        else if (currentPath.includes('/users') && this.userDetails.level == "counselor") return 'Daftar Binaan'
        else if (currentPath.includes('/users') && this.userDetails.level == "client") return 'Daftar Pembina'
        else if (currentPath.includes('/about')) return 'Tentang'
        else if (currentPath.includes('/report')) return 'Laporan'
        else if (currentPath.includes('/detailreport')) return 'Laporan ' + (bulan[this.$route.params.bulan-9])
        else if (currentPath == '/auth') return 'Login'
      }
    },
    methods: {
      ...mapActions('store', ['logoutUser'])
    }
  }
</script>

<style lang="stylus">
  .platform-ios
    .q-header
      .q-btn, .q-toolbar__title
        padding-top constant(safe-area-inset-top)
        padding-top env(safe-area-inset-top)

  .q-toolbar
    .q-btn
      line-height: 1.2
</style>
