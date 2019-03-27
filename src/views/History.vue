<template>
	<div class="wrapper">
		<h3>Aktualny stan budżetu: {{ debit }}</h3>
		<Operation v-for="operation in operations" :operation="operation" :key="operation.id"></Operation>
	</div>
</template>

<script>
	import Operation from '../components/Operation'
	import { mapGetters } from 'vuex'

	export default {
		name: 'History',
		components: { Operation },
		data: () => ({}),
		computed: {
			...mapGetters({
				operations: 'getOperations',
				debit: 'getDebit'
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
