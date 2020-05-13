<template lang="pug">
	div
		Header
		.container-body
			sideNav

</template>

<script>
import Logo from '~/components/Logo.vue';
import Header from '../components/header';
import sideNav from '../components/sidenav';

export default {
	components: {
		Logo,
		Header,
		sideNav
	}
}
</script>

<style lang="styl">
	@import '../assets/style/index.styl';
</style>
