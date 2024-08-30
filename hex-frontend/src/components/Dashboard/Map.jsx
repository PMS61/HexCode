// For Individual Locations

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css'; // Include FontAwesome CSS

const Map = ({ latitude = 19.02217175, longitude = 72.85620391516045, zoomLevel = 12, locationName = "Mumbai", width = '80%', height = '60vh' }) => {
    const mapRef = useRef(null); // Ref to store the map instance
    const markerRef = useRef(null); // Ref to store the marker instance

    useEffect(() => {
        // Initialize the map if it hasn't been already
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([latitude, longitude], zoomLevel);

            L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(mapRef.current);

            // Create a custom icon using FontAwesome
            const fontAwesomeIcon = L.divIcon({
                className: 'fa-custom-icon',
                html: '<i class="fas fa-map-marker-alt" style="font-size: 48px;"></i>',
                iconSize: [48, 48],
                iconAnchor: [24, 48],
                popupAnchor: [0, -48]
            });

            // Add marker to the map
            markerRef.current = L.marker([latitude, longitude], { icon: fontAwesomeIcon }).addTo(mapRef.current);
            markerRef.current.bindPopup(`<b>${locationName}</b><br> Latitude: ${latitude}, Longitude: ${longitude}`).openPopup();
        } else {
            // Update the map view and marker position if the props change
            mapRef.current.setView([latitude, longitude], zoomLevel);
            markerRef.current.setLatLng([latitude, longitude]);
            markerRef.current.getPopup().setContent(`<b>${locationName}</b><br> Latitude: ${latitude}, Longitude: ${longitude}`);
        }

        return () => {
            // Clean up the map instance when the component unmounts
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [latitude, longitude, zoomLevel, locationName]);

    return <div id="map" style={{ width: width, height: height, margin: '0 auto' }}></div>;
};

export default Map;
