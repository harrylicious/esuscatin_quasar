<template>

    <q-page class="q-pa-md">
      <div class="action">
          <img class="text-center" style="height: 40%; top: 8px; left: 180px"
            src="~assets/logo.png"
          >
        </div>
      <div/>
      <q-btn outline to="/users" color="primary" size="large" icon="chat" label="Curhat" class="full-width" />
      <q-btn outline to="/about" color="primary" size="large" icon="info" label="Tentang" class="full-width q-ma-md" />
      <q-btn outline to="/report" color="primary" size="large" icon="print" label="Laporan" class="full-width" />
      <q-btn outline to="/share" color="primary" size="large" icon="share" label="Bagikan" class="full-width q-ma-md" />
      <br>
    </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawerLeft: ref(false),
      drawerRight: ref(false)
    }
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

