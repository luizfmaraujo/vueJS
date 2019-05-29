<template>
  <div id="botoes">
  </div>
</template>

<script>
import L from 'leaflet';
import Vue from 'vue';
import easyButton from 'leaflet-easybutton';

export default {
	name: 'Botoes',

	data () {
		return {
			mapa: null,
			configs:[
                {icone:'icon-lnr-map-marker botao'},
								{icone:'icone'},
                {icone:'icone'}

						],
			zoomOptions:  {
				position: 'topright',
			}
		};
    },
    props: {
        teste: []
    },
	methods: {
		
		setBotoes () {
				console.log(this.teste+"fasfas");
				L.control.zoom(zoomOptions).addTo(this.mapa);
				this.configs.forEach(config => {
					L.easyButton({
						position: 'topleft',
						states:[{
			    onClick: function(button, map){
			    	alert('Map is centered at: ' + map.getCenter().toString());
			    },
			    title: 'show me the middle',
			    icon: config.icone
			  }]
			}).addTo(this.teste);
				});
			}
	},

	mounted () {
		this.setBotoes();
	}
};
</script>

<style>
	#mapa {
    height: 800px;
		width: 800px;
  }
		
	.botao {
		font-size: 16px;
  }
  
  .easy-button-button.leaflet-bar-part.leaflet-interactive.unnamed-state-active {
    border-radius: 15px !important;
  }
	.leaflet-control-zoom-in {
    border-top-left-radius: 15px !important;
		border-top-right-radius: 15px !important;
  }

	.leaflet-control-zoom-out {
    border-bottom-left-radius: 15px !important;
		border-bottom-right-radius: 15px !important;
  }
		
</style>
