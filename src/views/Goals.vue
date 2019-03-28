<template>
	<div class="wrapper">
		<Goal v-for="goal in goals" :goal="goal" :debit="debit" :key="goal.id"></Goal>
	</div>
</template>

<script>
	import Goal from '../components/Goal'
	import { mapGetters } from 'vuex'

	export default {
		name: 'Goals',
		components: { Goal },
		data: () => ({}),
		computed: {
			...mapGetters({
				goals: 'getGoals',
				debit: 'getDebit'
			})
		}
	}
</script>

<style lang="scss" scoped>

</style>
