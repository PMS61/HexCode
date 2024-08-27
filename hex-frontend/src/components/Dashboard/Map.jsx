import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css'; // Include FontAwesome CSS

const Map = () => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([19.0760, 72.8777], 12);

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

        const marker = L.marker([19.0760, 72.8777], { icon: fontAwesomeIcon }).addTo(map);
        marker.bindPopup("<b>Mumbai</b><br> Maharashtra, India.").openPopup();
    }, []);

    return <div id="map" style={{ width: '600px', height: '400px', margin: '0 auto' }}></div>;
};

export default Map;
