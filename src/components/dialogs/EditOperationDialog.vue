<template>
	<v-dialog max-width="600" v-model="dialog">
		<v-card>
			<v-card-title class="headline">Edytuj operację</v-card-title>

			<v-form class="form">
				<v-text-field label="Nazwa" required v-model="form.label"></v-text-field>

				<v-dialog :return-value.sync="form.date" full-width lazy persistent ref="dialog" v-model="modal" width="290px">
					<template v-slot:activator="{ on }">
						<v-text-field label="Data" prepend-icon="event" readonly v-model="form.date" v-on="on"></v-text-field>
					</template>
					<v-date-picker :max="today" color="blue" header-color="blue" locale="pl-Pl" scrollable v-model="form.date">
						<v-spacer></v-spacer>
						<v-btn @click="modal = false" color="primary" flat>Cancel</v-btn>
						<v-btn @click="$refs.dialog.save(form.date)" color="primary" flat>OK</v-btn>
					</v-date-picker>
				</v-dialog>

				<v-text-field label="Kwota" required type="number" v-model="form.value"></v-text-field>

				<v-textarea
					label="Opis"
					v-model="form.description"
				></v-textarea>
			</v-form>
			<v-card-actions class="actions">
				<v-btn @click="dialog = false" color="primary" flat>
					Anuluj
				</v-btn>
				<v-btn @click="editOperation()" color="primary" flat>
					Edytuj
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	import { EDIT_OPERATION } from '../../store/modules/budget/budget.mutation-types'
	import { mapActions } from 'vuex'
	import * as uuid from 'uuid'

	export default {
		name: 'EditOperationDialog',
		props: ['open', 'operation'],
		data: () => ({
			dialog: false,
			modal: false,
			today: new Date().toISOString().substr(0, 10)
			// form: {
			// 	id: uuid(),
			// 	label: '',
			// 	value: 0,
			// 	date: new Date().toISOString().substr(0, 10),
			// 	description: ''
			// }
		}),
		computed: {
			form: function () {
				if (this.operation == null) {
					return {
						id: uuid(),
						label: '',
						value: 0,
						date: new Date().toISOString().substr(0, 10),
						description: ''
					}
				}

				return {
					id: this.operation.id,
					label: this.operation.label,
					value: this.operation.value,
					date: this.operation.date,
					description: this.operation.description
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
				edit: EDIT_OPERATION
			}),
			editOperation: function () {
				this.dialog = false

				this.edit({
					id: this.form.id,
					label: this.form.label,
					value: parseFloat(this.form.value),
					date: this.form.date,
					description: this.form.description,
					oldValue: this.operation.value
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
