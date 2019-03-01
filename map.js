'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tzaGluMjciLCJhIjoiY2pzcHhwMndxMTJoNjN5cnJyNnFyOWF5cyJ9.UFV4-Iru3DogkEQk0yZOcA'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/skshin27/cjsqarly63p951fsb4y3ak5sh',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})
