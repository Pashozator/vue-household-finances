<template>
	<v-card class="operation">
		<div class="card-content">
			<div class="content">
				<div class="label-date">
					<span class="date">{{ operation.date }}</span>
					<span class="label">{{ operation.label }}</span>
				</div>
				<span class="value">{{ operation.value }}</span>
			</div>
			<div class="description">
				<p>{{ operation.description }}</p>
			</div>
		</div>
		<v-card-actions>
			<v-btn @click="remove()" color="red" flat>Usuń</v-btn>
			<v-btn @click="edit()" flat>Edytuj</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'Operation',
		props: ['operation'],
		data: () => ({}),
		methods: {
			remove: function () {
				console.log('remove operation')
			},
			edit: function () {
				console.log('edit operation')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.operation {
		margin: 15px 0 0 0;
		width: 100%;
		min-height: 50px;
		flex-direction: column;
		display: flex;

		.card-content {
			padding: 15px;

			.content {
				margin: 0 0 10px 0;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				display: flex;
			}

			.label-date {
				flex-direction: column;
				display: flex;
			}

			.label {
				margin: 5px 0 0 0;
				font-size: 16px;
				font-weight: 500;
			}

			.date {
				font-size: 10px;
			}

			.value {
				font-size: 13px;
				font-weight: 600;
			}

			p {
				margin-bottom: 0;
				line-height: 1.6;
			}
		}
	}
</style>
