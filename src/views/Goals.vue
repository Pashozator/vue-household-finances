<template>
	<div class="wrapper">
		<Goal :debit="debit" :goal="goal" :key="goal.id" @realize="realize($event)" @remove="remove($event)" @edit="openEditGoalDialog($event)" v-for="goal in goals"></Goal>
		<EditGoalDialog :open="editGoalDialog" :goal="goal" @close="closeEditGoalDialog()"></EditGoalDialog>
	</div>
</template>

<script>
	import Goal from '../components/Goal'
	import { mapActions, mapGetters } from 'vuex'
	import { REALIZE_GOAL, REMOVE_GOAL } from '../store/modules/goals/goals.mutation-types'
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
		methods: {
			...mapActions({
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
