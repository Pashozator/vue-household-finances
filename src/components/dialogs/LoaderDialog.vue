<template>
	<v-dialog hide-overlay persistent v-model="dialog" width="300">
		<v-card color="primary" dark>
			<v-card-text>
				Please stand by
				<v-progress-linear class="mb-0" color="white" indeterminate></v-progress-linear>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'LoaderDialog',
		data: () => ({}),
		computed: {
			...mapGetters({
				dialog: 'getLoaderState'
			})
		}
	}
</script>

<style scoped>

</style>
