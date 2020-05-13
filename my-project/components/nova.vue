<template lang="pug">
	div.flex
		.content-top
			.switch-one
				p ocultar cuadro
				div(class="custom-control custom-switch")

					input(type="checkbox" class="custom-control-input" id="customSwitches")
					label(class="custom-control-label" for="customSwitches")
			.switch-two
				p ocultar lista
				div(class="custom-control custom-switch")

					input(type="checkbox" class="custom-control-input" id="customSwitches")
					label(class="custom-control-label" for="customSwitches")
		.content-middle(class="example z-depth-1")
			div
				p Comprobantes
				span 600
				mdb-progress( :height="20"  :value="50" color="blue")
				span S/ 2,301.00
			div
				p Comprobantes
				span 600
				mdb-progress(:height="20"  :value="75" color="blue" )
				span S/ 570.00
			div
				p Comprobantes
				span 600
				mdb-progress(:height="20"  :value="100" color="blue")
				span S/ 2,301.00
		.content-bottom
			mdb-datatable( :data="data" striped bordered)

</template>
<script>
import { mdbProgress, mdbDatatable } from 'mdbvue';

export default {
	name: 'content',
	components: {
    mdbProgress,
    mdbDatatable
  },
  data() {
      return {
        data: {
          columns: [
            {
              label: 'Fecha',
              field: 'date',
              sort: 'asc'
            },
            {
              label: 'Proveedor',
              field: 'name',
              sort: 'asc'
            },
            {
              label: 'Forma de pago',
              field: 'pago',
              sort: 'asc'
            },
            {
              label: '#Comprob',
              field: 'code',
              sort: 'asc'
            },
            {
              label: 'Total',
              field: 'total',
              sort: 'asc'
            }
          ],
          rows: [
            {
              date: '14/02/2020',
              name: 'Kathryn Simmons',
              pago: 'Efectivo',
              code: 'B001-1',
              total: 'S/1239.00'
            },
            {
              date: '14/02/2020',
              name: 'Kathryn Simmons',
              pago: 'Efectivo',
              code: 'B001-1',
              total: 'S/1239.00'
            },
            {
              date: '14/02/2020',
              name: 'Kathryn Simmons',
              pago: 'Transferencia',
              code: 'B001-1',
              total: 'S/1239.00'
            },
            {
              date: '14/02/2020',
              name: 'Kathryn Simmons',
              pago: 'Efectivo',
              code: 'B001-1',
              total: 'S/1239.00'
            },

          ]
        }
      }
    },

}
</script>
<style lang="styl">
  @import '../assets/style/nova.styl';
</style>
