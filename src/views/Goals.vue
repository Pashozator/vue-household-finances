<template>
	<div class="wrapper">
		<Goal :debit="debit" :goal="goal" :key="goal.id" @edit="openEditGoalDialog($event)" @realize="realize($event)" @remove="remove($event)" v-for="goal in goals"></Goal>
		<EditGoalDialog :goal="goal" :open="editGoalDialog" @close="closeEditGoalDialog()"></EditGoalDialog>
	</div>
</template>

<script>
	import Goal from '../components/Goal'
	import { mapActions, mapGetters } from 'vuex'
	import { GET_BUDGET } from '../store/modules/budget/budget.mutation-types'
	import { GET_GOALS, REALIZE_GOAL, REMOVE_GOAL } from '../store/modules/goals/goals.mutation-types'
	import EditGoalDialog from '../components/dialogs/EditGoalDialog'

	export default {
		name: 'Goals',
		components: { EditGoalDialog, Goal },
		data: () => ({
			editGoalDialog: false,
			goal: null
		}),
		computed: {
			...mapGetters({
				goals: 'getGoals',
				debit: 'getDebit'
			})
		},
		mounted () {
			this.getBudget()
			this.getGoals()
		},
		methods: {
			...mapActions({
				getGoals: GET_GOALS,
				getBudget: GET_BUDGET,
				remove: REMOVE_GOAL,
				realize: REALIZE_GOAL
			}),
			openEditGoalDialog: function (goal) {
				this.goal = goal
				this.editGoalDialog = true
			},
			closeEditGoalDialog: function () {
				this.editGoalDialog = false
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
