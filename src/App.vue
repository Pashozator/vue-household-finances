<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div id="app">
		<header>
			<div class="wrapper">
				<div class="header-top">
					<span class="header-top-logo">{{ title }}</span>
				</div>
				<div class="header-links">
					<div class="header-links-date">
						{{ year }}
					</div>
					<nav>
						<ul>
							<li>
								<router-link active-class="active" class="link" to="/history">Historia</router-link>
							</li>
							<li>
								<router-link active-class="active" class="link" to="/goals">Cele</router-link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<v-menu offset-y top>
			<template v-slot:activator="{ on }">
				<v-btn absolute class="fab" color="pink" dark fab v-on="on">
					<v-icon>add</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-tile @click="openAddOperationDialog()">
					<v-list-tile-title>Dodaj operację</v-list-tile-title>
				</v-list-tile>
				<v-list-tile @click="openAddGoalDialog()">
					<v-list-tile-title>Dodaj cel</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-menu>
		<AddGoalDialog :open="addGoalDialog" @close="closeAddGoalDialog"></AddGoalDialog>
		<AddOperationDialog :open="addOperationDialog" @close="closeAddOperationDialog()"></AddOperationDialog>
		<LoaderDialog></LoaderDialog>
		<ErrorDialog></ErrorDialog>
		<router-view/>
	</div>
</template>

<script>
	import AddOperationDialog from './components/dialogs/AddOperationDialog'
	import AddGoalDialog from './components/dialogs/AddGoalDialog'
	import LoaderDialog from './components/dialogs/LoaderDialog'
	import ErrorDialog from './components/dialogs/ErrorDialog'

	export default {
		name: 'app',
		components: {
			ErrorDialog,
			AddGoalDialog,
			AddOperationDialog,
			LoaderDialog
		},
		data: () => ({
			year: new Date().getFullYear(),
			title: 'Domowe finanse',
			addOperationDialog: false,
			addGoalDialog: false
		}),
		methods: {
			addGoal: function () {
				console.log('add goal')
			},
			openAddOperationDialog: function () {
				this.addOperationDialog = true
			},
			closeAddOperationDialog: function () {
				this.addOperationDialog = false
			},
			openAddGoalDialog: function () {
				this.addGoalDialog = true
			},
			closeAddGoalDialog: function () {
				this.addGoalDialog = false
			}
		}
	}
</script>

<style lang="scss">
	@import '~normalize.css/normalize.css';

	$border-color: #9030b8;

	* {
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	html, body {
		width: 100%;
		height: 100%;
	}

	.fab {
		bottom: 20px;
		right: 20px;
	}

	.wrapper {
		margin: 0 auto 0 auto;
		width: 95%;
	}

	header {
		padding: 25px 0;
		width: 100%;
		background: #780da5;
		color: #fff;

		.header-top {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid $border-color;

			.header-top-logo {
				float: left;
				font-size: 19px;
				font-weight: 700;
			}
		}

		.header-links {
			padding: 25px 0;

			.header-links-date {
				padding: 0 25px 0 0;
				float: left;
				border-right: 2px solid $border-color;
			}

			nav {
				margin: 0 0 0 25px;
				float: left;

				ul {
					padding: 0;
					margin: 0;
					list-style: none;

					.active {
						opacity: .7;
					}

					li {
						margin: 0 20px 0 0;
						display: inline;

						.link {
							color: #fff;
							text-decoration: none;

							&:hover {
								opacity: .7;
							}
						}
					}
				}
			}
		}
	}
</style>
