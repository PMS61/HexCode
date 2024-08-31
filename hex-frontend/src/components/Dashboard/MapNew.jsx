import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapNew = ({ latitude, longitude, locationName, zoomLevel = 12, width = '60%', height = '40vh' }) => {
    const mapRef = useRef(null); // Ref to store the map instance

    useEffect(() => {
        // Check if the map is already initialized
        if (mapRef.current === null) {
            // Initialize the map
            mapRef.current = L.map('map').setView([latitude, longitude], zoomLevel);

            L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(mapRef.current);
        }

        // Clear existing markers
        mapRef.current.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                mapRef.current.removeLayer(layer);
            }
        });

        // Add a default Leaflet marker
        const marker = L.marker([latitude, longitude])
            .addTo(mapRef.current)
            .bindPopup(`<b>${locationName}</b><br> Latitude: ${latitude}, Longitude: ${longitude}`)
            .openPopup();

        return () => {
            if (mapRef.current !== null) {
                // Clean up the map instance when the component unmounts
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [latitude, longitude, locationName, zoomLevel]); // Dependencies include all props to update on change

    return <div id="map" style={{ width: width, height: height, margin: '0 auto' }}></div>;
};

export default MapNew;
