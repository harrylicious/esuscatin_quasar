<template>
	<q-form @submit="submitForm">
		<q-input
			v-if="tab == 'register'"
			v-model="formData.name"
			class="q-mb-md"
			outlined
      color="info"
			label="Nama" />
    <q-input
			v-if="tab == 'register'"
			v-model="formData.phone"
			class="q-mb-md"
			outlined
      color="info"
			type="number"
			label="Telpon" />
    <q-input
			v-if="tab == 'register'"
			v-model="formData.address"
			class="q-mb-md"
			outlined
      color="info"
			type="text"
			label="Alamat" />
		<q-input
			v-model="formData.email"
			class="q-mb-md"
			outlined
      color="info"
			type="email"
			label="Email" />
		<q-input
			v-model="formData.password"
			class="q-mb-md"
			outlined
      color="info"
			type="password"
			label="Password" />
		<div class="row">
			<q-space />
			<q-btn
				color="primary"
				type="submit"
				:label="tab" />
		</div>
	</q-form>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: ['tab'],
		data() {
			return {
				formData: {
					name: 'Saya',
					phone: '62',
					email: 'hehe',
					password: '',
					address: 'Kayangan',
					level: 'client'
				}
			}
		},
		methods: {
			...mapActions('store', ['registerUser', 'loginUser']),
			submitForm() {
				if (this.tab == 'login') {
					this.loginUser(this.formData) 
				}
				else {
					this.registerUser(this.formData)
				}
			}
		}
	}
</script>
