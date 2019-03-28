<template>
	<div class="wrapper">
		<h3>Aktualny stan budżetu: {{ debit }}</h3>
		<Operation :key="operation.id" :operation="operation" @remove="remove($event)" @edit="openEditOperationDialog($event)" v-for="operation in operations"></Operation>
		<EditOperationDialog :open="editOperationDialog" @close="closeEditOperationDialog()" :operation="operation"></EditOperationDialog>
	</div>
</template>

<script>
	import Operation from '../components/Operation'
	import { mapActions, mapGetters } from 'vuex'
	import { REMOVE_OPERATION } from '../store/modules/budget/budget.mutation-types'
	import EditOperationDialog from '../components/dialogs/EditOperationDialog'

	export default {
		name: 'History',
		components: { Operation, EditOperationDialog },
		data: () => ({
			editOperationDialog: false,
			operation: null
		}),
		computed: {
			...mapGetters({
				operations: 'getOperations',
				debit: 'getDebit'
			})
		},
		methods: {
			...mapActions({
				remove: REMOVE_OPERATION
			}),
			openEditOperationDialog: function (operation) {
				this.operation = operation
				this.editOperationDialog = true
			},
			closeEditOperationDialog: function () {
				this.editOperationDialog = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	h3 {
		margin: 10px 0 0 0;
		font-size: 20px;
	}
</style>
