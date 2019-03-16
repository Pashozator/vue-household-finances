<template>
	<div id="app">
		<header>
			<div class="wrapper">
				<div class="header-top">
					<span class="header-top-logo">{{ title }}</span>
					<a class="header-top-author">Autor</a>
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
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data: () => ({
			year: new Date().getFullYear(),
			title: 'Domowe finanse'
		})
	}
</script>

<style lang="scss">
	@import '~normalize.css/normalize.css';

	$border-color: #9030b8;

	* {
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
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

			.header-top-author {
				float: right;
				cursor: pointer;
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
