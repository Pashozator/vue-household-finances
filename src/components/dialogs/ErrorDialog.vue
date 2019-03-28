<template>
	<v-dialog max-width="300" v-model="dialog">
		<v-card>
			<v-card-title class="headline">Wystąpił błąd</v-card-title>

			<v-card-actions class="actions">
				<v-btn @click="close()" color="primary" flat class="btn">
					OK
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { HIDE_ERROR } from '../../store/modules/error/error.mutations-types'

	export default {
		name: 'ErrorDialog',
		data: () => ({}),
		computed: {
			...mapGetters({
				dialog: 'getErrorState'
			})
		},
		methods: {
			...mapActions({
				close: HIDE_ERROR
			})
		}
	}
</script>

<style lang="scss" scoped>
	.headline {
		justify-content: center;
		flex-direction: row;
		display: flex;
	}

	.actions {
		width: 100%;
		justify-content: center;
		flex-direction: row;
		display: flex;

		.btn {
			width: 100%;
		}
	}
</style>
