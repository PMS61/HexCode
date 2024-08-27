import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css'; // Include FontAwesome CSS

const Map = ({ latitude, longitude, zoomLevel = 12, locationName = "Mumbai", width = '1000px', height = '400px' }) => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([latitude, longitude], zoomLevel);

        L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }).addTo(map);

        // Create a custom icon using FontAwesome
        const fontAwesomeIcon = L.divIcon({
            className: 'fa-custom-icon',
            html: '<i class="fas fa-map-marker-alt"></i>',
            iconSize: [24, 24],
            iconAnchor: [12, 24],
            popupAnchor: [0, -24]
        });

        const marker = L.marker([latitude, longitude], { icon: fontAwesomeIcon }).addTo(map);
        marker.bindPopup(`<b>${locationName}</b><br> Latitude: ${latitude}, Longitude: ${longitude}`).openPopup();
    }, [latitude, longitude, zoomLevel, locationName]);

    return <div id="map" style={{ width: width, height: height, margin: '0 auto' }}></div>;
};

export default Map;

/*
Use the map as:
    <Map 
        latitude={latitude} 
        longitude={longitude} 
        locationName={locationName} 
        width={width} 
        height={height} 
    />
*/
