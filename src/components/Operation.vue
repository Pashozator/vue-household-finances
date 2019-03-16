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
			<v-btn flat color="red" @click="remove()">Usuń</v-btn>
			<v-btn flat @click="edit()">Edytuj</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'Operation',
		data: () => ({
			operation: {
				date: '13.03.2019',
				label: 'Wypłata',
				value: 1000,
				description: 'Donec rutrum enim eget quam fringilla consequat. Maecenas tincidunt purus elit, ut imperdiet nisl molestie id. Vestibulum vehicula dui nec sodales scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a erat feugiat, dapibus urna in, bibendum diam. Integer laoreet commodo gravida. '
			}
		}),
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
