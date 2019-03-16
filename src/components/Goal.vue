<template>
	<v-card class="goal">
		<v-card-title primary-title class="title">
			<h3>{{ goal.label }}</h3>
			<span class="subtitle" v-if="goal.realized">Cel zrealizowany</span>
		</v-card-title>
		<div class="card-content">
			<p>{{ goal.description }}</p>
			<v-divider v-if="!goal.realized"></v-divider>
			<div class="numbers" v-if="!goal.realized">
				<span>Cel {{ goal.value }}</span>
				<span>Do osiągnięcia pozostało {{ goal.value - debit >= 0 ? goal.value - debit : 0 }}</span>
			</div>
			<!--TODO: add progress bar-->
		</div>
		<v-card-actions>
			<v-btn flat color="primary" @click="realize()" :disabled="goal.value > debit || goal.realized">
				Realizuj
			</v-btn>
			<v-btn flat @click="edit()" :disabled="goal.realized">Edytuj</v-btn>
			<v-btn flat color="red" @click="remove()" :disabled="goal.realized">Usuń</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'Goal',
		data: () => ({
			debit: 1000,
			goal: {
				label: 'Label',
				realized: false,
				value: 8000,
				description: 'Lorem ipsum dolor sit amet'
			}
		}),
		methods: {
			realize: function () {
				console.log('realize goal')
			},
			remove: function () {
				console.log('remove goal')
			},
			edit: function () {
				console.log('edit goal')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goal {
		margin: 15px 0 0 0;
		padding: 0 0 15px 0;

		.title {
			align-items: flex-start;
			justify-content: space-between;
			flex-direction: column;
			display: flex;

			h3 {
				margin: 0 0 5px 0;
				font-size: 25px;
			}

			.subtitle {
				font-size: 13px;
			}
		}

		.card-content {
			padding: 0 15px 0 15px;

			.numbers {
				margin: 15px 0 0 0;
				justify-content: space-between;
				flex-direction: row;
				display: flex;
			}
		}
	}
</style>
