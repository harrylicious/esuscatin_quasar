<template>

    <q-page class="q-pa-md">
      <div class="text-h6 text-center">Laporan Konsultasi Tahun 2022</div>
      <q-btn outline rounded color="primary" class="full-width q-ma-xs" to="/detailreport/9" label="September" /><br>
      <q-btn outline rounded color="primary" class="full-width q-ma-xs" to="/detailreport/10" label="Oktober" /><br>
      <q-btn outline rounded color="primary" class="full-width q-ma-xs" to="/detailreport/11" label="November" /><br>
      <q-btn outline rounded color="primary" class="full-width q-ma-xs" to="/detailreport/12" label="Desember" /><br>
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
