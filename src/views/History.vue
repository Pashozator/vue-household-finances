<template>
	<div class="wrapper">
		<h3>Aktualny stan budżetu: {{ debit }}</h3>
		<Operation v-for="operation in operations" :operation="operation" :key="operation.id" @remove="remove($event)"></Operation>
	</div>
</template>

<script>
	import Operation from '../components/Operation'
	import { mapActions, mapGetters } from 'vuex'
	import { REMOVE_OPERATION } from '../store/modules/budget/budget.mutation-types'

	export default {
		name: 'History',
		components: { Operation },
		data: () => ({}),
		computed: {
			...mapGetters({
				operations: 'getOperations',
				debit: 'getDebit'
			})
		},
		methods: {
			...mapActions({
				remove: REMOVE_OPERATION
			})
		}
	}
</script>

<style lang="scss" scoped>
	h3 {
		margin: 10px 0 0 0;
		font-size: 20px;
	}
</style>
