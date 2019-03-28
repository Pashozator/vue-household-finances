<template>
	<div class="wrapper">
		<Goal :debit="debit" :goal="goal" :key="goal.id" @remove="remove($event)" v-for="goal in goals"></Goal>
	</div>
</template>

<script>
	import Goal from '../components/Goal'
	import { mapActions, mapGetters } from 'vuex'
	import { REMOVE_GOAL } from '../store/modules/goals/goals.mutation-types'

	export default {
		name: 'Goals',
		components: { Goal },
		data: () => ({}),
		computed: {
			...mapGetters({
				goals: 'getGoals',
				debit: 'getDebit'
			})
		},
		methods: {
			...mapActions({
				remove: REMOVE_GOAL
			})
		}
	}
</script>

<style lang="scss" scoped>

</style>
