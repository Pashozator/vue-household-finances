<template>
	<v-dialog max-width="600" v-model="dialog">
		<v-card>
			<v-card-title class="headline">Edytuj cel</v-card-title>

			<v-form class="form">
				<v-text-field label="Nazwa" required v-model="form.label"></v-text-field>
				<v-text-field label="Kwota" required type="number" v-model="form.value"></v-text-field>
				<v-textarea label="Opis" v-model="form.description"></v-textarea>
			</v-form>
			<v-card-actions class="actions">
				<v-btn @click="dialog = false" color="primary" flat>
					Anuluj
				</v-btn>
				<v-btn @click="editGoal()" color="primary" flat>
					Edytuj
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { EDIT_GOAL } from '../../store/modules/goals/goals.mutation-types'
	import { mapActions } from 'vuex'
	import * as uuid from 'uuid'

	export default {
		name: 'EditGoalDialog',
		props: ['open', 'goal'],
		data: () => ({
			dialog: false
		}),
		computed: {
			form: function () {
				if (this.goal == null) {
					return {
						id: uuid(),
						label: '',
						value: 0,
						description: ''
					}
				}

				return {
					id: this.goal.id,
					label: this.goal.label,
					value: this.goal.value,
					description: this.goal.description
				}
			}
		},
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
						this.$emit('close', true)
					}
				}
			}
		},
		methods: {
			...mapActions({
				edit: EDIT_GOAL
			}),
			editGoal: function () {
				this.dialog = false

				this.edit({
					id: this.form.id,
					label: this.form.label,
					value: parseFloat(this.form.value),
					description: this.form.description,
					realized: false
				})
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
