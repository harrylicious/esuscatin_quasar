<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://i0.wp.com/blog.lombokit.com/wp-content/uploads/2022/09/photo1663634451-e1663657133438.jpeg?resize=719%2C493&ssl=1">

      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Yunita Alfiana Aziza, S.Sos</q-item-label>
            <q-item-label caption>199706172022032002</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="account_circle" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Jabatan</q-item-label>
            <q-item-label caption>Calon Penyuluh Agama Islam Ahli Pertama (Pengangkatan Pertama)</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="calendar_today" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Pendidikan Terakhir</q-item-label>
            <q-item-label caption>S1 - UIN Mataram</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>


    <q-card class="my-card">
      <q-img src="https://blog.lombokit.com/wp-content/uploads/2022/09/Screenshot-from-2022-09-22-12-39-14.png" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          link="https://www.google.com/maps/uv?pb=!1s0x2dcdd7d8d8cb483f%3A0xb1116627b0e1dc6b!3m1!7e115!4s%2Fmaps%2Fplace%2Fkantor%2Bkua%2Bkayangan%2Blombok%2Butara%2F%40-8.2576753%2C116.2608216%2C3a%2C75y%2C78.19h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sJaBQgXay6YKKsUI06OuA8Q*212e0*214m2*213m1*211s0x2dcdd7d8d8cb483f%3A0xb1116627b0e1dc6b%3Fsa%3DX!5skantor%20kua%20kayangan%20lombok%20utara%20-%20Penelusuran%20Google!15sCgIgAQ&imagekey=!1e2!2sJaBQgXay6YKKsUI06OuA8Q&hl=id&sa=X&ved=2ahUKEwjK-dOo16f6AhVO4jgGHQ3ODmUQpx96BAgwEAM"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            KUA Kec. Kayangan
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Kantor Kementerian Agama Kabupaten Lombok Utara
        </div>
        <div class="text-caption text-grey">
          Jalan Lokok Rangan, Kayangan, Kec. Kayangan, Kabupaten Lombok Utara, Nusa Tenggara Barat. 83353
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
