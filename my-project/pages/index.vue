<template lang="pug">
	div
		Header
		.container-body
			sideNav

</template>

<script>
import Header from '../components/header';
import sideNav from '../components/sidenav';

export default {
	components: {
		Header,
		sideNav
	}
}
</script>

<style lang="styl">
	@import '../assets/style/index.styl';
</style>
