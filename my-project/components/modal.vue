<template lang="pug">
	div
		mdb-modal-header
			mdb-modal-title {{arr[number].Title}}
		mdb-modal-body
			img(:src="arr[number].Poster")
			p {{arr[number].Year}}
			span / {{arr[number].imdbRating}}
			mdb-rating(v-model="ratingMdb")
			p {{arr[number].Plot}}
			p {{arr[number].Writer}}
			p {{arr[number].Director}}
			p {{arr[number].Genre}}
			p {{arr[number].Genre}}
			p {{arr[number].Actors}}
			p {{arr[number].Runtime}}
		mdb-modal-footer
			mdb-btn(color="secondary" size="sm" @close="modal = false") Close
			mdb-btn(color="primary" size="sm")
				a(:href="`https://www.imdb.com/title/${arr[number].imdbID}/`") Ver
</template>

<script>
	import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn, mdbRating } from 'mdbvue';
	export default {
		name: 'Modal',
		props: ['number', 'arr', 'mod'],
		components: {
			mdbModal,
			mdbModalHeader,
			mdbModalTitle,
			mdbModalBody,
			mdbModalFooter,
			mdbBtn,
			mdbRating
		},
		data() {
			return {
				//modal:true,
				//val: 2
			};

		},
		computed: {
		ratingMdb: function ()  {
			return Math.floor(parseInt(this.arr[this.number].imdbRating)/2);
			//this.arr_peliculas=result;
			//console.log(result);
		}
	},
	};
</script>
