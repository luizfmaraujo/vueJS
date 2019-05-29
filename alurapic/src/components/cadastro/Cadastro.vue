<template>
  <div id="mapa">
    <div id="botoes">
    </div>
		<div id="camadas">
			<p>fasfsfaff</p>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import Vue from 'vue';
import easyButton from 'leaflet-easybutton';
import BotoesMapa from './BotoesMapas'
import Camadas from './BotoesMapas'

export default {
  name: 'Mapa',
  
  components: {
    BotoesMapa, Camadas
  },

	data () {
		return {
			mapa: null,
			boxZoom: true,
			draw: {
				tools: {},
				layer: null,
				options: null
			},
		};
	},

	methods: {
		createMap () {
			this.mapa = L.map('mapa', {
				zoom: 15,
				minZoom: 4,
				maxZoom: 18,
				boxZoom: true,
				zoomControl: false,
				contextmenu: true,
				contextmenuWidth: 140,
				preferCanvas: true
			}).setView([-14.7217175, -50.0774443], 5);
      
      // Cria a instância global de mapa
			Vue.prototype.$mapa = this.mapa;
			
			L.tileLayer(
				'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(this.mapa);

			var zoomOptions =  {
				position: 'topright',
			};

			L.control.zoom(zoomOptions).addTo(this.mapa);
		
			L.easyButton('el-icon-location botao', function(btn,mapa){
				alert('button works')
			}).addTo(this.mapa);
			L.easyButton('icon-lnr-map-marker botao', function(){alert('button works')}).addTo(this.mapa);
			L.easyButton('icon-vector-polygon botao',  function(){alert('button works')}).addTo(this.mapa);
			L.easyButton({
				position: 'topright',
				states:[{
			    onClick: function(button, map){
			    	alert('Map is centered at: ' + map.getCenter().toString());
			    },
			    title: 'show me the middle',
			    icon: 'icon-lnr-frame-expand botao'
			  }]
			}).addTo(this.mapa);

		},

		updateGeojson (geojson) {
			// this.municipios = L.geoJson(geojson);
			// this.mapa.addLayer(this.municipios);
			// this.mapa.fitBounds(this.municipios.getBounds());
		}

	},

	mounted () {
		this.createMap();
	}
};
</script>

<style>
	#mapa {
    height: 800px;
		width: 800px;
  }

  -webkit-box-shadow: 186px 181px 0px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 186px 181px 0px 0px rgba(0,0,0,0.75);
box-shadow: 186px 181px 0px 0px rgba(0,0,0,0.75);
		
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
