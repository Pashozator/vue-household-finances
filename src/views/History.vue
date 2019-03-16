<template>
	<div class="wrapper">
		<h3>Aktualny stan budżetu: 1000</h3>
		<Operation></Operation>
	</div>
</template>

<script>
	import Operation from '../components/Operation'

	export default {
		name: 'History',
		components: { Operation }
	}
</script>

<style lang="scss" scoped>
	h3 {
		margin: 10px 0 0 0;
		font-size: 20px;
	}
</style>
