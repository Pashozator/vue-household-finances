<template>
	<v-dialog max-width="600" v-model="dialog">
		<v-card>
			<v-card-title class="headline">Dodaj cel</v-card-title>

			<v-form class="form">
				<v-text-field label="Nazwa" required v-model="form.label"></v-text-field>
				<v-text-field label="Kwota" required type="number" v-model="form.value"></v-text-field>
				<v-textarea label="Opis" v-model="form.description"></v-textarea>
			</v-form>
			<v-card-actions class="actions">
				<v-btn @click="dialog = false" color="primary" flat>
					Anuluj
				</v-btn>
				<v-btn @click="addGoal()" color="primary" flat>
					Dodaj
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { ADD_GOAL } from '../../store/modules/goals/goals.mutation-types'
	import { mapActions } from 'vuex'
	import * as uuid from 'uuid'

	export default {
		name: 'AddGoalDialog',
		props: ['open'],
		data: () => ({
			dialog: false,
			form: {
				id: uuid(),
				label: '',
				value: 0,
				description: ''
			}
		}),
		watch: {
			open: {
				immediate: true,
				handler (value, oldValue) {
					if (value) {
						this.dialog = value
					}
				}
			},
			dialog: {
				immediate: true,
				handler (value, oldValue) {
					if (!value) {
						this.clear()
						this.$emit('close', true)
					}
				}
			}
		},
		methods: {
			...mapActions({
				add: ADD_GOAL
			}),
			addGoal: function () {
				this.dialog = false

				this.add({
					id: this.form.id,
					label: this.form.label,
					value: this.form.value,
					description: this.form.description
				})

				this.clear()
			},
			clear: function () {
				this.form = {
					id: uuid(),
					label: '',
					value: 0,
					description: ''
				}
			}
		}
	}
</script>

<style scoped>
	.form {
		padding: 0 15px 0 15px;
	}

	.actions {
		justify-content: flex-end;
		flex-direction: row;
	}
</style>
