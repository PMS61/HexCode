import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ markers = [], zoomLevel = 12, width = '80%', height = '60vh' }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            // Initialize the map if it hasn't been initialized yet
            mapRef.current = L.map('map').setView(
                [markers[0]?.latitude || 0, markers[0]?.longitude || 0],
                zoomLevel
            );

            L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TjqLUOrWKEBi18GTwW6V', {
                attribution:
                    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            }).addTo(mapRef.current);
        }

        // Function to update markers
        const updateMarkers = () => {
            // Clear existing markers and circles
            mapRef.current.eachLayer(layer => {
                if (layer instanceof L.Marker || layer instanceof L.Circle) {
                    mapRef.current.removeLayer(layer);
                }
            });

            // Add new markers and circles
            markers.forEach(marker => {
                // Add default Leaflet marker
                const markerInstance = L.marker([marker.latitude, marker.longitude])
                    .addTo(mapRef.current)
                    .bindPopup(
                        `<b>${marker.name}</b><br> Latitude: ${marker.latitude}, Longitude: ${marker.longitude}`
                    );

                // Add circle around the marker
                if (marker.area) {
                    const radius = Math.sqrt(marker.area / Math.PI); // Convert area to radius
                    const circle = L.circle([marker.latitude, marker.longitude], {
                        color: 'blue',
                        fillColor: '#3f7cba',
                        fillOpacity: 0.2,
                        radius: radius, // radius is in meters
                    }).addTo(mapRef.current);
                }
            });
        };

        updateMarkers(); // Update markers when the component mounts or markers change

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
