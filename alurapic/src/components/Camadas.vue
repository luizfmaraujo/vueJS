<template>
  <div id="camadas">
  </div>
</template>

<script>
import L from 'leaflet';
import Vue from 'vue';

export default {
	name: 'Camadas',

	data () {
		return {
			mapa: null
		};
    },
    
	methods: {
		
	},

	mounted () {
	}
};
</script>

<style>
	#camadas {
        height: 800px;
	    width: 800px;
        background: #f00;
    }
		
</style>
