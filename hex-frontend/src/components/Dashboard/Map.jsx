import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css'; // Include FontAwesome CSS

const Map = ({ markers = [], zoomLevel = 12, width = '80%', height = '60vh' }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the map
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([markers[0]?.latitude || 0, markers[0]?.longitude || 0], zoomLevel);

            L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(mapRef.current);
        }

        // Clear existing markers and circles
        mapRef.current.eachLayer(layer => {
            if (layer instanceof L.Marker || layer instanceof L.Circle) {
                mapRef.current.removeLayer(layer);
            }
        });

        // Add markers and circles to the map
        markers.forEach(marker => {
            // FontAwesome icon for marker
            const fontAwesomeIcon = L.divIcon({
                className: 'fa-custom-icon',
                html: '<i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>',
                iconSize: [24, 24],
                iconAnchor: [12, 24],
                popupAnchor: [0, -24]
            });

            // Add marker
            const markerInstance = L.marker([marker.latitude, marker.longitude], { icon: fontAwesomeIcon })
                .addTo(mapRef.current)
                .bindPopup(`<b>${marker.name}</b><br> Latitude: ${marker.latitude}, Longitude: ${marker.longitude}`)
                .openPopup();

            // Add circle around the marker
            if (marker.area) {
                const radius = Math.sqrt(marker.area / Math.PI); // Convert area to radius
                const circle = L.circle([marker.latitude, marker.longitude], {
                    color: 'blue',
                    fillColor: '#3f7cba',
                    fillOpacity: 0.2,
                    radius: radius // radius is in meters
                }).addTo(mapRef.current);
            }
        });

        return () => {
            // Clean up the map instance when the component unmounts
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [markers, zoomLevel]);

    return <div id="map" style={{ width: width, height: height, margin: '0 auto' }}></div>;
};

export default Map;
