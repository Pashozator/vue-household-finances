<template>
	<div class="wrapper">
		<Goal :debit="debit" :goal="goal" :key="goal.id" @realize="realize($event)" @remove="remove($event)" v-for="goal in goals"></Goal>
	</div>
</template>

<script>
	import Goal from '../components/Goal'
	import { mapActions, mapGetters } from 'vuex'
	import { REALIZE_GOAL, REMOVE_GOAL } from '../store/modules/goals/goals.mutation-types'

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
				remove: REMOVE_GOAL,
				realize: REALIZE_GOAL
			})
		}
	}
</script>

<style lang="scss" scoped>

</style>
